import os
import mimetypes
from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse, Response, StreamingResponse

from backend.routers.auth import router as auth_router
from backend.routers.posts import router as posts_router
from backend.routers.media import router as media_router
from backend.routers.forms import router as forms_router

MEDIA_EXTS = {".mp4", ".webm", ".ogg", ".mp3", ".wav", ".m4v", ".mov"}


def send_media_range_response(request: Request, file_path: Path) -> Response:
    file_size = file_path.stat().st_size
    content_type, _ = mimetypes.guess_type(str(file_path))
    content_type = content_type or "application/octet-stream"

    range_header = request.headers.get("range")
    if not range_header:
        headers = {
            "Accept-Ranges": "bytes",
            "Content-Length": str(file_size),
            "Content-Type": content_type,
        }
        return FileResponse(file_path, headers=headers)

    try:
        range_val = range_header.replace("bytes=", "").strip()
        parts = range_val.split("-")
        start = int(parts[0]) if parts[0] else 0
        end = int(parts[1]) if len(parts) > 1 and parts[1] else file_size - 1
    except ValueError:
        return Response(status_code=416, headers={"Content-Range": f"bytes */{file_size}"})

    start = max(0, start)
    end = min(file_size - 1, end)
    content_length = end - start + 1

    def iterfile():
        with open(file_path, "rb") as f:
            f.seek(start)
            bytes_left = content_length
            while bytes_left > 0:
                chunk_to_read = min(128 * 1024, bytes_left)
                chunk = f.read(chunk_to_read)
                if not chunk:
                    break
                bytes_left -= len(chunk)
                yield chunk

    headers = {
        "Content-Range": f"bytes {start}-{end}/{file_size}",
        "Accept-Ranges": "bytes",
        "Content-Length": str(content_length),
        "Content-Type": content_type,
    }
    return StreamingResponse(iterfile(), status_code=206, headers=headers)


ROOT_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIR = ROOT_DIR / "frontend"
STATIC_ROOT = FRONTEND_DIR if FRONTEND_DIR.exists() and (FRONTEND_DIR / "index.html").exists() else ROOT_DIR

app = FastAPI(
    title="ReevanaX Aesthetic Clinic API & Studio",
    description="Production REST API backend with SQLite, Auth, SSG Compiler, Media Management, and SEO integration.",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Enable CORS for local development and integrations
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Backend API Routers
app.include_router(auth_router)
app.include_router(posts_router)
app.include_router(media_router)
app.include_router(forms_router)


# ── WordPress & RevSlider REST API Mock Handlers ──
@app.get("/wp-json/sliderrevolution/sliders/{slider_id}")
async def get_revslider_slide(slider_id: str, request: Request):
    return JSONResponse({
        "success": True,
        "slider_id": slider_id,
        "slides": {}
    })


@app.get("/wp-json/{full_path:path}")
async def get_wp_json_fallback(full_path: str):
    return JSONResponse({"success": True, "data": []})


# ── Custom Static Handler to Guarantee 100% Page & Asset Resolution ──
@app.middleware("http")
async def static_file_handler(request: Request, call_next):
    path = request.url.path

    # If it's an API route or Swagger docs, pass directly to FastAPI router
    if path.startswith("/api/") or path.startswith("/wp-json/") or path.startswith("/docs") or path.startswith("/redoc") or path == "/openapi.json":
        return await call_next(request)

    # Normalize clean path
    clean_path = path.lstrip("/")
    
    # Try locating the requested static file in frontend or root directory
    possible_paths = []
    if clean_path:
        possible_paths.extend([
            STATIC_ROOT / clean_path,
            STATIC_ROOT / clean_path / "index.html",
            ROOT_DIR / clean_path,
            ROOT_DIR / clean_path / "index.html"
        ])
    else:
        possible_paths.extend([
            STATIC_ROOT / "index.html",
            ROOT_DIR / "index.html"
        ])

    for p in possible_paths:
        if p.is_file():
            if p.suffix.lower() in MEDIA_EXTS or "range" in request.headers:
                return send_media_range_response(request, p)
            return FileResponse(p)

    # Fallback for dynamic plugin stylesheets that might not be on disk (e.g., RevSlider lazy packs)
    if clean_path.startswith("assets/plugins/revslider/") and clean_path.endswith(".css"):
        return Response(content="/* revslider fallback */", media_type="text/css")

    # Fallback for missing RevSlider video-media/thumbnail images
    if "revslider" in clean_path and any(clean_path.endswith(ext) for ext in [".jpg", ".jpeg", ".png", ".webp"]):
        fallback_img = STATIC_ROOT / "assets" / "uploads" / "2025" / "08" / "ezgif-frame-001.jpg"
        if fallback_img.is_file():
            return FileResponse(fallback_img)

    return await call_next(request)


# Mount static assets directory directly as well
if (STATIC_ROOT / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(STATIC_ROOT / "assets")), name="assets")
elif (ROOT_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(ROOT_DIR / "assets")), name="assets")
