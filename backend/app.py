from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse

from backend.routers.auth import router as auth_router
from backend.routers.posts import router as posts_router
from backend.routers.media import router as media_router
from backend.routers.forms import router as forms_router

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


# ── Custom Static Handler to Guarantee 100% Page & Asset Resolution ──
@app.middleware("http")
async def static_file_handler(request: Request, call_next):
    path = request.url.path

    # If it's an API route or Swagger docs, pass directly to FastAPI router
    if path.startswith("/api/") or path.startswith("/docs") or path.startswith("/redoc") or path == "/openapi.json":
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
            # Determine content type if needed or let FileResponse handle it
            return FileResponse(p)

    return await call_next(request)


# Mount static assets directory directly as well
if (STATIC_ROOT / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(STATIC_ROOT / "assets")), name="assets")
elif (ROOT_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(ROOT_DIR / "assets")), name="assets")
