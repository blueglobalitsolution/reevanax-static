import re
import uuid
from datetime import datetime
from pathlib import Path
from fastapi import APIRouter, HTTPException, Depends, UploadFile, File

from backend.database import get_db, ROOT_DIR, UPLOADS_DIR
from backend.routers.auth import get_current_user

router = APIRouter(prefix="/api/cms", tags=["CMS Media Library"])


@router.get("/media")
async def list_media(user: dict = Depends(get_current_user)):
    conn = get_db()
    rows = conn.execute("SELECT * FROM media ORDER BY uploaded_at DESC").fetchall()
    conn.close()
    return {"ok": True, "media": [dict(r) for r in rows]}


@router.post("/upload")
async def upload_media(file: UploadFile = File(...), user: dict = Depends(get_current_user)):
    if not file or not file.filename:
        raise HTTPException(status_code=400, detail="No file provided")

    original_name = file.filename
    safe_name = re.sub(r"[^a-zA-Z0-9_.\-]", "_", original_name)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    final_name = f"{timestamp}_{safe_name}"

    file_bytes = await file.read()
    
    # Save to both uploads dirs if frontend is split
    save_path = UPLOADS_DIR / final_name
    save_path.write_bytes(file_bytes)
    
    frontend_upload = ROOT_DIR / "frontend" / "assets" / "uploads" / "blogs" / final_name
    if frontend_upload.parent.exists():
        frontend_upload.write_bytes(file_bytes)

    media_id = str(uuid.uuid4())
    web_path = f"/assets/uploads/blogs/{final_name}"

    conn = get_db()
    conn.execute(
        "INSERT INTO media (id, filename, path, size, uploaded_at) VALUES (?, ?, ?, ?, datetime('now'))",
        (media_id, original_name, web_path, len(file_bytes))
    )
    conn.commit()
    conn.close()

    return {
        "ok": True,
        "id": media_id,
        "filename": original_name,
        "path": web_path,
        "size": len(file_bytes)
    }


@router.delete("/media/{media_id}")
async def delete_media(media_id: str, user: dict = Depends(get_current_user)):
    conn = get_db()
    row = conn.execute("SELECT * FROM media WHERE id = ?", (media_id,)).fetchone()
    if not row:
        conn.close()
        raise HTTPException(status_code=404, detail="Media file not found.")

    media_path = row["path"]
    if media_path and media_path.startswith("/"):
        clean_rel = media_path.lstrip("/")
        for base in [ROOT_DIR, ROOT_DIR / "frontend"]:
            f = base / clean_rel
            if f.exists():
                try:
                    f.unlink()
                except Exception as e:
                    print(f"[Media Delete Error] {e}")

    conn.execute("DELETE FROM media WHERE id = ?", (media_id,))
    conn.commit()
    conn.close()

    return {"ok": True, "message": "Media deleted successfully."}
