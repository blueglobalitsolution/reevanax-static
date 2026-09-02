import re
import json
import uuid
import shutil
from datetime import datetime
from pathlib import Path
from typing import Optional, List, Any
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, Field

from backend.database import get_db, safe_parse_tags, ROOT_DIR, CONTENT_DIR
from backend.routers.auth import get_current_user
from backend.builder import rebuild_static_blogs

router = APIRouter(prefix="/api/cms", tags=["CMS Blog Posts"])


class PostCreateRequest(BaseModel):
    title: str
    slug: Optional[str] = ""
    date: Optional[str] = ""
    author: Optional[str] = "Dr. ReevanaX Medical Team"
    category: Optional[str] = "Skincare Treatment"
    tags: Optional[Any] = []
    featured_image: Optional[str] = ""
    featured_image_alt: Optional[str] = ""
    excerpt: Optional[str] = ""
    body: Optional[str] = ""
    meta_title: Optional[str] = ""
    meta_description: Optional[str] = ""
    focus_keyword: Optional[str] = ""
    status: Optional[str] = "draft"


class PostUpdateRequest(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    date: Optional[str] = None
    author: Optional[str] = None
    category: Optional[str] = None
    tags: Optional[Any] = None
    featured_image: Optional[str] = None
    featured_image_alt: Optional[str] = None
    excerpt: Optional[str] = None
    body: Optional[str] = None
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None
    focus_keyword: Optional[str] = None
    status: Optional[str] = None


def save_markdown_file(post: dict):
    """Write markdown representation of post to content/blogs/ for SSG compilation."""
    tags_list = safe_parse_tags(post.get("tags"))
    tags_yaml = "\n".join(f'  - "{t}"' for t in tags_list) if tags_list else "  - ReevanaX Surat"
    
    md_content = f"""---
title: "{post['title']}"
slug: "{post['slug']}"
date: "{post['date']}"
author: "{post.get('author') or 'Dr. ReevanaX Medical Team'}"
category: "{post.get('category') or 'Skincare Treatment'}"
tags:
{tags_yaml}
featured_image: "{post.get('featured_image') or ''}"
featured_image_alt: "{post.get('featured_image_alt') or ''}"
excerpt: "{post.get('excerpt') or ''}"
seo:
  meta_title: "{post.get('meta_title') or ''}"
  meta_description: "{post.get('meta_description') or ''}"
  focus_keyword: "{post.get('focus_keyword') or ''}"
---

{post.get('body') or ''}
"""
    md_path = CONTENT_DIR / f"{post['slug']}.md"
    md_path.write_text(md_content, encoding="utf-8")


@router.get("/stats")
async def get_stats(user: dict = Depends(get_current_user)):
    conn = get_db()
    total = conn.execute("SELECT COUNT(*) as c FROM posts").fetchone()["c"]
    published = conn.execute("SELECT COUNT(*) as c FROM posts WHERE status='published'").fetchone()["c"]
    drafts = conn.execute("SELECT COUNT(*) as c FROM posts WHERE status='draft'").fetchone()["c"]
    media_count = conn.execute("SELECT COUNT(*) as c FROM media").fetchone()["c"]
    conn.close()
    return {
        "ok": True,
        "total": total,
        "published": published,
        "drafts": drafts,
        "media": media_count
    }


@router.get("/posts")
async def list_posts(user: dict = Depends(get_current_user)):
    conn = get_db()
    rows = conn.execute("SELECT * FROM posts ORDER BY date DESC, created_at DESC").fetchall()
    conn.close()
    posts = []
    for r in rows:
        p = dict(r)
        p["tags"] = safe_parse_tags(p.get("tags"))
        posts.append(p)
    return {"ok": True, "posts": posts}


@router.get("/posts/{slug}")
async def get_post(slug: str, user: dict = Depends(get_current_user)):
    conn = get_db()
    row = conn.execute("SELECT * FROM posts WHERE slug = ?", (slug,)).fetchone()
    conn.close()
    if not row:
        raise HTTPException(status_code=404, detail="Post not found.")
    p = dict(row)
    p["tags"] = safe_parse_tags(p.get("tags"))
    return {"ok": True, "post": p}


@router.post("/posts")
async def create_post(req: PostCreateRequest, user: dict = Depends(get_current_user)):
    title = req.title.strip()
    if not title:
        raise HTTPException(status_code=400, detail="Title is required.")

    slug = req.slug.strip() if req.slug else ""
    if not slug:
        slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")

    conn = get_db()
    existing = conn.execute("SELECT id FROM posts WHERE slug = ?", (slug,)).fetchone()
    if existing:
        slug = f"{slug}-{uuid.uuid4().hex[:6]}"

    post_id = str(uuid.uuid4())
    tags = safe_parse_tags(req.tags)
    date_val = req.date or datetime.now().strftime("%Y-%m-%d")

    conn.execute("""
        INSERT INTO posts (id, slug, title, date, author, category, tags,
            featured_image, featured_image_alt, excerpt, body,
            meta_title, meta_description, focus_keyword, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    """, (
        post_id, slug, title, date_val,
        req.author, req.category, json.dumps(tags),
        req.featured_image, req.featured_image_alt, req.excerpt, req.body,
        req.meta_title, req.meta_description, req.focus_keyword,
        req.status or "draft"
    ))
    conn.commit()
    conn.close()

    post_dict = req.model_dump()
    post_dict["slug"] = slug
    post_dict["date"] = date_val
    save_markdown_file(post_dict)

    if req.status == "published":
        rebuild_static_blogs()

    return {"ok": True, "id": post_id, "slug": slug}


@router.put("/posts/{slug}")
async def update_post(slug: str, req: PostUpdateRequest, user: dict = Depends(get_current_user)):
    conn = get_db()
    existing = conn.execute("SELECT * FROM posts WHERE slug = ?", (slug,)).fetchone()
    if not existing:
        conn.close()
        raise HTTPException(status_code=404, detail="Post not found.")

    updates = {}
    data = req.model_dump(exclude_unset=True)
    
    for key, val in data.items():
        if key == "tags" and val is not None:
            updates["tags"] = json.dumps(safe_parse_tags(val))
        elif val is not None:
            updates[key] = val

    if updates:
        updates["updated_at"] = datetime.utcnow().isoformat()
        set_clause = ", ".join(f"{k} = ?" for k in updates)
        values = list(updates.values()) + [slug]
        conn.execute(f"UPDATE posts SET {set_clause} WHERE slug = ?", values)
        conn.commit()

    # Re-fetch updated row
    new_slug = updates.get("slug", slug)
    updated_row = conn.execute("SELECT * FROM posts WHERE slug = ?", (new_slug,)).fetchone()
    conn.close()

    if updated_row:
        save_markdown_file(dict(updated_row))
        if updated_row["status"] == "published":
            rebuild_static_blogs()

    return {"ok": True, "slug": new_slug}


@router.delete("/posts/{slug}")
async def delete_post(slug: str, user: dict = Depends(get_current_user)):
    conn = get_db()
    existing = conn.execute("SELECT id FROM posts WHERE slug = ?", (slug,)).fetchone()
    if not existing:
        conn.close()
        raise HTTPException(status_code=404, detail="Post not found.")

    conn.execute("DELETE FROM posts WHERE slug = ?", (slug,))
    conn.commit()
    conn.close()

    # Remove static files
    static_dirs = [
        ROOT_DIR / "blogs" / slug,
        ROOT_DIR / "frontend" / "blogs" / slug,
        ROOT_DIR / slug,
        ROOT_DIR / "frontend" / slug
    ]
    for d in static_dirs:
        if d.exists():
            shutil.rmtree(d, ignore_errors=True)

    md_files = [
        CONTENT_DIR / f"{slug}.md",
        ROOT_DIR / "content" / "blogs" / f"{slug}.md"
    ]
    for f in md_files:
        if f.exists():
            f.unlink()

    # Rebuild static site
    rebuild_static_blogs()

    return {"ok": True, "message": f"Post '{slug}' deleted successfully."}


@router.post("/posts/{slug}/publish")
async def publish_post(slug: str, user: dict = Depends(get_current_user)):
    conn = get_db()
    row = conn.execute("SELECT * FROM posts WHERE slug = ?", (slug,)).fetchone()
    if not row:
        conn.close()
        raise HTTPException(status_code=404, detail="Post not found.")

    conn.execute("UPDATE posts SET status = 'published', updated_at = datetime('now') WHERE slug = ?", (slug,))
    conn.commit()
    conn.close()

    save_markdown_file(dict(row))
    success = rebuild_static_blogs()

    if success:
        return {"ok": True, "message": f"Post '{slug}' published successfully.", "url": f"/blogs/{slug}/"}
    return {"ok": True, "message": f"Post '{slug}' published.", "url": f"/blogs/{slug}/"}
