#!/usr/bin/env python3
"""
ReevanaX Static Site Server + Native CMS Studio + Booking Mailer.

All-in-one server:
  - Port 8080: Static site serving + CMS Admin Studio + API endpoints
  - SQLite database at _data/cms.db for blog post management
  - /api/cms/*  : CMS authentication, post CRUD, image upload, publish
  - /api/book   : Appointment booking email
  - /api/contact: Contact form email
"""

from __future__ import annotations

import hashlib
import json
import mimetypes
import os
import re
import secrets
import shutil
import smtplib
import sqlite3
import ssl
import sys
import time
import traceback
import uuid
from collections import defaultdict
from datetime import datetime, timedelta
from email.message import EmailMessage
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

# Add _tools to path for build_blogs
ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / "_tools"))

try:
    import build_blogs
except ImportError:
    build_blogs = None

CONFIG_PATH = Path(os.environ.get("REVANAX_SMTP_CONFIG", ROOT / "smtp_config.json"))
HOST = os.environ.get("REVANAX_HOST", "0.0.0.0")
PORT = int(os.environ.get("REVANAX_PORT", "8080"))
DATA_DIR = ROOT / "_data"
DB_PATH = DATA_DIR / "cms.db"
UPLOADS_DIR = ROOT / "assets" / "uploads" / "blogs"
CONTENT_DIR = ROOT / "content" / "blogs"

DATA_DIR.mkdir(parents=True, exist_ok=True)
UPLOADS_DIR.mkdir(parents=True, exist_ok=True)
CONTENT_DIR.mkdir(parents=True, exist_ok=True)

# Rate limiter
CONTACT_RATE_LIMITS: dict[str, list[float]] = defaultdict(list)
RATE_LIMIT_MAX = 3
RATE_LIMIT_WINDOW = 60

# ─── Password Hashing ────────────────────────────────────────────────
def hash_password(password: str) -> str:
    """SHA-256 hash with random salt."""
    salt = secrets.token_hex(16)
    h = hashlib.sha256(f"{salt}:{password}".encode()).hexdigest()
    return f"{salt}:{h}"


def verify_password(password: str, stored: str) -> bool:
    """Verify password against stored salt:hash."""
    if ":" not in stored:
        return False
    salt, expected = stored.split(":", 1)
    h = hashlib.sha256(f"{salt}:{password}".encode()).hexdigest()
    return secrets.compare_digest(h, expected)


# ─── SQLite Database ─────────────────────────────────────────────────
def get_db() -> sqlite3.Connection:
    conn = sqlite3.connect(str(DB_PATH), check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db():
    """Create tables and seed default admin user if DB is fresh."""
    conn = get_db()
    conn.executescript("""
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            display_name TEXT NOT NULL DEFAULT '',
            password_hash TEXT NOT NULL,
            created_at TEXT NOT NULL DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS sessions (
            token TEXT PRIMARY KEY,
            user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            expires_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS posts (
            id TEXT PRIMARY KEY,
            slug TEXT UNIQUE NOT NULL,
            title TEXT NOT NULL DEFAULT 'Untitled Post',
            date TEXT NOT NULL DEFAULT (date('now')),
            author TEXT NOT NULL DEFAULT 'Dr. ReevanaX Medical Team',
            category TEXT NOT NULL DEFAULT 'Skincare Treatment',
            tags TEXT NOT NULL DEFAULT '[]',
            featured_image TEXT NOT NULL DEFAULT '',
            featured_image_alt TEXT NOT NULL DEFAULT '',
            excerpt TEXT NOT NULL DEFAULT '',
            body TEXT NOT NULL DEFAULT '',
            meta_title TEXT NOT NULL DEFAULT '',
            meta_description TEXT NOT NULL DEFAULT '',
            focus_keyword TEXT NOT NULL DEFAULT '',
            status TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft', 'published')),
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            updated_at TEXT NOT NULL DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS media (
            id TEXT PRIMARY KEY,
            filename TEXT NOT NULL,
            path TEXT NOT NULL,
            size INTEGER NOT NULL DEFAULT 0,
            uploaded_at TEXT NOT NULL DEFAULT (datetime('now'))
        );
    """)

    # Seed default admin if no users exist
    row = conn.execute("SELECT COUNT(*) as cnt FROM users").fetchone()
    if row["cnt"] == 0:
        admin_id = str(uuid.uuid4())
        conn.execute(
            "INSERT INTO users (id, email, display_name, password_hash) VALUES (?, ?, ?, ?)",
            (admin_id, "admin@reevanax.com", "ReevanaX Admin", hash_password("admin123"))
        )
        print("[CMS] Default admin created: admin@reevanax.com / admin123")

    conn.commit()
    conn.close()


def import_existing_posts():
    """Import existing markdown blog posts into SQLite if posts table is empty."""
    conn = get_db()
    row = conn.execute("SELECT COUNT(*) as cnt FROM posts").fetchone()
    if row["cnt"] > 0:
        conn.close()
        return

    try:
        import yaml as yaml_lib
    except ImportError:
        yaml_lib = None

    count = 0
    for md_file in CONTENT_DIR.glob("*.md"):
        try:
            content = md_file.read_text(encoding="utf-8")
            if not content.startswith("---"):
                continue
            parts = content.split("---", 2)
            if len(parts) < 3:
                continue

            if yaml_lib:
                meta = yaml_lib.safe_load(parts[1]) or {}
            else:
                meta = {}
                for line in parts[1].splitlines():
                    line = line.strip()
                    if ":" in line and not line.startswith("-") and not line.startswith("#"):
                        k, v = line.split(":", 1)
                        meta[k.strip()] = v.strip().strip('"').strip("'")

            body = parts[2].strip()
            slug = meta.get("slug") or md_file.stem
            seo = meta.get("seo") or {}
            tags = meta.get("tags") or []
            if isinstance(tags, str):
                tags = [t.strip() for t in tags.split(",")]

            post_id = str(uuid.uuid4())
            conn.execute("""
                INSERT OR IGNORE INTO posts
                (id, slug, title, date, author, category, tags, featured_image,
                 featured_image_alt, excerpt, body, meta_title, meta_description,
                 focus_keyword, status, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published', datetime('now'), datetime('now'))
            """, (
                post_id, slug,
                meta.get("title", "Untitled"),
                str(meta.get("date", "2026-01-01")),
                meta.get("author", "Dr. ReevanaX Medical Team"),
                meta.get("category", "Skincare Treatment"),
                json.dumps(tags),
                meta.get("featured_image", ""),
                meta.get("featured_image_alt", ""),
                meta.get("excerpt", ""),
                body,
                seo.get("meta_title", ""),
                seo.get("meta_description", ""),
                seo.get("focus_keyword", ""),
            ))
            count += 1
            print(f"[CMS] Imported: {slug}")
        except Exception as e:
            print(f"[CMS] Error importing {md_file.name}: {e}")

    conn.commit()
    conn.close()
    if count:
        print(f"[CMS] Imported {count} existing blog posts into SQLite.")


# ─── Session Helpers ──────────────────────────────────────────────────
def create_session(user_id: str) -> str:
    token = secrets.token_urlsafe(48)
    expires = (datetime.utcnow() + timedelta(days=7)).isoformat()
    conn = get_db()
    conn.execute("INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)",
                 (token, user_id, expires))
    conn.commit()
    conn.close()
    return token


def get_user_from_token(token: str) -> dict | None:
    if not token:
        return None
    conn = get_db()
    row = conn.execute("""
        SELECT u.id, u.email, u.display_name
        FROM sessions s JOIN users u ON s.user_id = u.id
        WHERE s.token = ? AND s.expires_at > datetime('now')
    """, (token,)).fetchone()
    conn.close()
    return dict(row) if row else None


def extract_token(handler) -> str:
    """Extract session token from cookie or Authorization header."""
    # Check cookie first
    cookie_header = handler.headers.get("Cookie", "")
    for part in cookie_header.split(";"):
        part = part.strip()
        if part.startswith("cms_session="):
            return part[len("cms_session="):]
    # Check Authorization header
    auth = handler.headers.get("Authorization", "")
    if auth.startswith("Bearer "):
        return auth[7:]
    return ""


# ─── Blog Publishing (Static HTML Compiler) ──────────────────────────
def publish_post(slug: str) -> bool:
    """Compile a single post from SQLite to static HTML and update grid + sitemap."""
    conn = get_db()
    row = conn.execute("SELECT * FROM posts WHERE slug = ?", (slug,)).fetchone()
    if not row:
        conn.close()
        return False

    # Update status to published
    conn.execute("UPDATE posts SET status = 'published', updated_at = datetime('now') WHERE slug = ?", (slug,))
    conn.commit()

    # Write markdown file to content/blogs/ for the build_blogs compiler
    post = dict(row)
    tags = json.loads(post["tags"]) if post["tags"] else []
    tags_yaml = "\n".join(f'  - "{t}"' for t in tags)

    md_content = f"""---
title: "{post['title']}"
slug: "{post['slug']}"
date: "{post['date']}"
author: "{post['author']}"
category: "{post['category']}"
tags:
{tags_yaml}
featured_image: "{post['featured_image']}"
featured_image_alt: "{post['featured_image_alt']}"
excerpt: "{post['excerpt']}"
seo:
  meta_title: "{post['meta_title']}"
  meta_description: "{post['meta_description']}"
  focus_keyword: "{post['focus_keyword']}"
---

{post['body']}
"""
    md_path = CONTENT_DIR / f"{slug}.md"
    md_path.write_text(md_content, encoding="utf-8")

    conn.close()

    # Run the static compiler
    if build_blogs:
        try:
            build_blogs.build_all()
            return True
        except Exception as e:
            print(f"[CMS] Build error: {e}")
            traceback.print_exc()
            return False
    return True


def publish_all_posts():
    """Publish all posts marked as 'published' in the database."""
    conn = get_db()
    rows = conn.execute("SELECT slug FROM posts WHERE status = 'published'").fetchall()
    conn.close()
    for row in rows:
        publish_post(row["slug"])


# ─── SMTP Email Functions ────────────────────────────────────────────
def load_smtp_config() -> dict:
    if not CONFIG_PATH.exists():
        raise FileNotFoundError(
            f"Missing SMTP config at {CONFIG_PATH}. "
            f"Copy smtp_config.example.json to smtp_config.json and fill in credentials."
        )
    data = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    required = ["smtp_host", "smtp_port", "smtp_user", "smtp_password", "from_email", "to_email"]
    missing = [k for k in required if not data.get(k) and data.get(k) != 0]
    if missing:
        raise ValueError(f"smtp_config.json missing keys: {', '.join(missing)}")
    if str(data.get("smtp_password", "")).startswith("your-"):
        raise ValueError("Update smtp_config.json with real SMTP credentials before sending mail.")
    return data


def _smtp_send(cfg: dict, msg: EmailMessage):
    host = cfg["smtp_host"]
    port = int(cfg["smtp_port"])
    user = cfg["smtp_user"]
    password = cfg["smtp_password"]
    use_tls = bool(cfg.get("smtp_use_tls", True))

    if port == 465:
        ctx = ssl.create_default_context()
        with smtplib.SMTP_SSL(host, port, context=ctx, timeout=30) as s:
            s.login(user, password)
            s.send_message(msg)
    else:
        with smtplib.SMTP(host, port, timeout=30) as s:
            s.ehlo()
            if use_tls:
                s.starttls(context=ssl.create_default_context())
                s.ehlo()
            s.login(user, password)
            s.send_message(msg)


def send_contact_email(contact: dict):
    cfg = load_smtp_config()
    first = contact.get("first_name", "").strip()
    last = contact.get("last_name", "").strip()
    phone = contact.get("phone", "").strip()
    if not first or not last or not phone:
        raise ValueError("Missing name or phone fields.")
    if len(first) > 100 or len(last) > 100 or len(phone) > 30:
        raise ValueError("Input field length exceeded.")
    if not re.match(r"^\+?[0-9\s\-()]{5,20}$", phone):
        raise ValueError("Invalid phone format.")
    digits = re.sub(r"\D", "", phone)
    if not (10 <= len(digits) <= 11):
        raise ValueError("Phone number must be between 10 and 11 digits.")
    msg = EmailMessage()
    msg["Subject"] = f"New Contact Request from {first} {last}"
    msg["From"] = f"{cfg.get('from_name', 'ReevanaX Contact Form')} <{cfg['from_email']}>"
    msg["To"] = cfg["to_email"]
    msg.set_content(f"New contact request:\n\nName: {first} {last}\nPhone: {phone}")
    _smtp_send(cfg, msg)


def send_booking_email(booking: dict):
    cfg = load_smtp_config()
    customer = booking.get("customer") or {}
    bid = booking.get("id") or "N/A"
    service = booking.get("service") or "Appointment"
    lines = [
        f"Booking ID: {bid}", f"Service: {service}",
        f"Date: {booking.get('date', '-')}", f"Time: {booking.get('time', '-')}",
        f"Name: {customer.get('firstName', '')} {customer.get('lastName', '')}".strip(),
        f"Phone: {customer.get('phone', '-')}", f"Email: {customer.get('email', '-')}",
    ]
    msg = EmailMessage()
    msg["Subject"] = f"New appointment {bid} — {service}"
    msg["From"] = f"{cfg.get('from_name', 'ReevanaX')} <{cfg['from_email']}>"
    msg["To"] = cfg["to_email"]
    if customer.get("email"):
        msg["Reply-To"] = customer["email"]
    msg.set_content("\n".join(lines))
    _smtp_send(cfg, msg)


# ─── HTTP Request Handler ────────────────────────────────────────────
class RevanaxHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    # --- Utility ---
    def _send_json(self, status: int, payload):
        body = json.dumps(payload, default=str).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.end_headers()
        self.wfile.write(body)

    def _read_json(self) -> dict:
        length = int(self.headers.get("Content-Length") or 0)
        raw = self.rfile.read(length) if length else b"{}"
        return json.loads(raw.decode("utf-8"))

    def _require_auth(self) -> dict | None:
        token = extract_token(self)
        user = get_user_from_token(token)
        if not user:
            self._send_json(401, {"ok": False, "error": "Not authenticated. Please login."})
        return user

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    # --- OPTIONS ---
    def do_OPTIONS(self):
        self.send_response(HTTPStatus.NO_CONTENT)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.end_headers()

    # --- GET ---
    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        # Clean URL redirects (except admin)
        if path.endswith("index.html") and not path.startswith("/admin"):
            new_path = path[:-10] or "/"
            if parsed.query:
                new_path += "?" + parsed.query
            self.send_response(HTTPStatus.MOVED_PERMANENTLY)
            self.send_header("Location", new_path)
            self.end_headers()
            return

        # CMS API: GET routes
        if path == "/api/cms/me":
            return self._cms_me()
        if path == "/api/cms/posts":
            return self._cms_list_posts()
        if path.startswith("/api/cms/posts/"):
            slug = path[len("/api/cms/posts/"):].strip("/")
            if slug:
                return self._cms_get_post(slug)
        if path == "/api/cms/media":
            return self._cms_list_media()
        if path == "/api/cms/stats":
            return self._cms_stats()

        super().do_GET()

    # --- POST ---
    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path

        # CMS API
        if path == "/api/cms/login":
            return self._cms_login()
        if path == "/api/cms/logout":
            return self._cms_logout()
        if path == "/api/cms/posts":
            return self._cms_create_post()
        if path.startswith("/api/cms/posts/") and path.endswith("/publish"):
            slug = path[len("/api/cms/posts/"):-len("/publish")]
            return self._cms_publish_post(slug)
        if path == "/api/cms/upload":
            return self._cms_upload()

        # Legacy APIs
        if path == "/api/book":
            return self._api_book()
        if path == "/api/contact":
            return self._api_contact()

        self.send_error(HTTPStatus.NOT_FOUND)

    # --- PUT ---
    def do_PUT(self):
        parsed = urlparse(self.path)
        path = parsed.path
        if path.startswith("/api/cms/posts/"):
            slug = path[len("/api/cms/posts/"):].strip("/")
            if slug:
                return self._cms_update_post(slug)
        self.send_error(HTTPStatus.NOT_FOUND)

    # --- DELETE ---
    def do_DELETE(self):
        parsed = urlparse(self.path)
        path = parsed.path
        if path.startswith("/api/cms/posts/"):
            slug = path[len("/api/cms/posts/"):].strip("/")
            if slug:
                return self._cms_delete_post(slug)
        if path.startswith("/api/cms/media/"):
            media_id = path[len("/api/cms/media/"):].strip("/")
            if media_id:
                return self._cms_delete_media(media_id)
        self.send_error(HTTPStatus.NOT_FOUND)

    # ═══════════════════════════════════════════════════════════════════
    #  CMS API Handlers
    # ═══════════════════════════════════════════════════════════════════

    def _cms_login(self):
        data = self._read_json()
        email = (data.get("email") or "").strip().lower()
        password = data.get("password") or ""
        if not email or not password:
            return self._send_json(400, {"ok": False, "error": "Email and password are required."})

        conn = get_db()
        user = conn.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()
        conn.close()

        if not user or not verify_password(password, user["password_hash"]):
            return self._send_json(401, {"ok": False, "error": "Invalid email or password."})

        token = create_session(user["id"])
        self._send_json(200, {
            "ok": True,
            "token": token,
            "user": {"id": user["id"], "email": user["email"], "display_name": user["display_name"]}
        })

    def _cms_logout(self):
        token = extract_token(self)
        if token:
            conn = get_db()
            conn.execute("DELETE FROM sessions WHERE token = ?", (token,))
            conn.commit()
            conn.close()
        self._send_json(200, {"ok": True})

    def _cms_me(self):
        user = self._require_auth()
        if user:
            self._send_json(200, {"ok": True, "user": user})

    def _cms_stats(self):
        user = self._require_auth()
        if not user:
            return
        conn = get_db()
        total = conn.execute("SELECT COUNT(*) as c FROM posts").fetchone()["c"]
        published = conn.execute("SELECT COUNT(*) as c FROM posts WHERE status='published'").fetchone()["c"]
        drafts = conn.execute("SELECT COUNT(*) as c FROM posts WHERE status='draft'").fetchone()["c"]
        media_count = conn.execute("SELECT COUNT(*) as c FROM media").fetchone()["c"]
        conn.close()
        self._send_json(200, {"ok": True, "total": total, "published": published, "drafts": drafts, "media": media_count})

    def _cms_list_posts(self):
        user = self._require_auth()
        if not user:
            return
        conn = get_db()
        rows = conn.execute("SELECT * FROM posts ORDER BY date DESC, created_at DESC").fetchall()
        conn.close()
        posts = []
        for r in rows:
            p = dict(r)
            raw_t = p.get("tags")
            if raw_t:
                try:
                    p["tags"] = json.loads(raw_t) if isinstance(raw_t, str) else raw_t
                except Exception:
                    p["tags"] = [t.strip() for t in str(raw_t).split(",") if t.strip()]
            else:
                p["tags"] = []
            posts.append(p)
        self._send_json(200, {"ok": True, "posts": posts})

    def _cms_get_post(self, slug: str):
        user = self._require_auth()
        if not user:
            return
        conn = get_db()
        row = conn.execute("SELECT * FROM posts WHERE slug = ?", (slug,)).fetchone()
        conn.close()
        if not row:
            return self._send_json(404, {"ok": False, "error": "Post not found."})
        p = dict(row)
        raw_t = p.get("tags")
        if raw_t:
            try:
                p["tags"] = json.loads(raw_t) if isinstance(raw_t, str) else raw_t
            except Exception:
                p["tags"] = [t.strip() for t in str(raw_t).split(",") if t.strip()]
        else:
            p["tags"] = []
        self._send_json(200, {"ok": True, "post": p})

    def _cms_create_post(self):
        user = self._require_auth()
        if not user:
            return
        data = self._read_json()
        title = (data.get("title") or "").strip()
        slug = (data.get("slug") or "").strip()
        if not title:
            return self._send_json(400, {"ok": False, "error": "Title is required."})
        if not slug:
            slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")

        # Ensure unique slug
        conn = get_db()
        existing = conn.execute("SELECT id FROM posts WHERE slug = ?", (slug,)).fetchone()
        if existing:
            slug = f"{slug}-{secrets.token_hex(3)}"

        post_id = str(uuid.uuid4())
        tags = data.get("tags") or []
        if isinstance(tags, str):
            tags = [t.strip() for t in tags.split(",") if t.strip()]

        conn.execute("""
            INSERT INTO posts (id, slug, title, date, author, category, tags,
                featured_image, featured_image_alt, excerpt, body,
                meta_title, meta_description, focus_keyword, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            post_id, slug, title,
            data.get("date") or datetime.now().strftime("%Y-%m-%d"),
            data.get("author") or "Dr. ReevanaX Medical Team",
            data.get("category") or "Skincare Treatment",
            json.dumps(tags),
            data.get("featured_image") or "",
            data.get("featured_image_alt") or "",
            data.get("excerpt") or "",
            data.get("body") or "",
            data.get("meta_title") or "",
            data.get("meta_description") or "",
            data.get("focus_keyword") or "",
            data.get("status") or "draft",
        ))
        conn.commit()
        conn.close()
        self._send_json(201, {"ok": True, "id": post_id, "slug": slug})

    def _cms_update_post(self, slug: str):
        user = self._require_auth()
        if not user:
            return
        data = self._read_json()
        conn = get_db()
        existing = conn.execute("SELECT id FROM posts WHERE slug = ?", (slug,)).fetchone()
        if not existing:
            conn.close()
            return self._send_json(404, {"ok": False, "error": "Post not found."})

        tags = data.get("tags")
        if tags is not None:
            if isinstance(tags, str):
                tags = [t.strip() for t in tags.split(",") if t.strip()]
            tags = json.dumps(tags)

        # Build dynamic update
        fields = {}
        for key in ["title", "date", "author", "category", "featured_image",
                     "featured_image_alt", "excerpt", "body", "meta_title",
                     "meta_description", "focus_keyword", "status"]:
            if key in data:
                fields[key] = data[key]
        if tags is not None:
            fields["tags"] = tags
        if "slug" in data and data["slug"] != slug:
            new_slug = data["slug"].strip()
            if new_slug:
                fields["slug"] = new_slug

        if not fields:
            conn.close()
            return self._send_json(400, {"ok": False, "error": "No fields to update."})

        fields["updated_at"] = datetime.utcnow().isoformat()
        set_clause = ", ".join(f"{k} = ?" for k in fields)
        values = list(fields.values()) + [slug]
        conn.execute(f"UPDATE posts SET {set_clause} WHERE slug = ?", values)
        conn.commit()
        conn.close()
        self._send_json(200, {"ok": True, "slug": fields.get("slug", slug)})

    def _cms_delete_post(self, slug: str):
        user = self._require_auth()
        if not user:
            return
        conn = get_db()
        existing = conn.execute("SELECT id FROM posts WHERE slug = ?", (slug,)).fetchone()
        if not existing:
            conn.close()
            return self._send_json(404, {"ok": False, "error": "Post not found."})

        conn.execute("DELETE FROM posts WHERE slug = ?", (slug,))
        conn.commit()
        conn.close()

        # Remove static files
        static_dir = ROOT / "blogs" / slug
        if static_dir.exists():
            shutil.rmtree(static_dir, ignore_errors=True)
        root_dir = ROOT / slug
        if root_dir.exists():
            shutil.rmtree(root_dir, ignore_errors=True)
        md_file = CONTENT_DIR / f"{slug}.md"
        if md_file.exists():
            md_file.unlink()

        # Rebuild sitemap and grid
        if build_blogs:
            try:
                build_blogs.build_all()
            except Exception as e:
                print(f"[CMS] Rebuild error after delete: {e}")

        self._send_json(200, {"ok": True, "message": f"Post '{slug}' deleted successfully."})

    def _cms_delete_media(self, media_id: str):
        user = self._require_auth()
        if not user:
            return
        conn = get_db()
        row = conn.execute("SELECT * FROM media WHERE id = ?", (media_id,)).fetchone()
        if not row:
            conn.close()
            return self._send_json(404, {"ok": False, "error": "Media file not found."})

        # Remove physical file if present
        media_path = row["path"]
        if media_path and media_path.startswith("/"):
            local_file = ROOT / media_path.lstrip("/")
            if local_file.exists():
                try:
                    local_file.unlink()
                except Exception as e:
                    print(f"[CMS] Error deleting media file {local_file}: {e}")

        conn.execute("DELETE FROM media WHERE id = ?", (media_id,))
        conn.commit()
        conn.close()
        self._send_json(200, {"ok": True, "message": "Media file deleted successfully."})

    def _cms_publish_post(self, slug: str):
        user = self._require_auth()
        if not user:
            return
        success = publish_post(slug)
        if success:
            self._send_json(200, {"ok": True, "message": f"Post '{slug}' published successfully.", "url": f"/blogs/{slug}/"})
        else:
            self._send_json(500, {"ok": False, "error": "Failed to publish post."})

    def _cms_upload(self):
        user = self._require_auth()
        if not user:
            return

        content_type = self.headers.get("Content-Type", "")
        if "multipart/form-data" not in content_type:
            return self._send_json(400, {"ok": False, "error": "Expected multipart/form-data."})

        # Parse boundary
        boundary = ""
        for part in content_type.split(";"):
            part = part.strip()
            if part.startswith("boundary="):
                boundary = part[9:].strip('"')
                break

        if not boundary:
            return self._send_json(400, {"ok": False, "error": "Missing boundary in multipart."})

        length = int(self.headers.get("Content-Length") or 0)
        raw = self.rfile.read(length)

        # Simple multipart parser
        boundary_bytes = f"--{boundary}".encode()
        parts = raw.split(boundary_bytes)

        for part in parts:
            if b"Content-Disposition" not in part:
                continue
            header_end = part.find(b"\r\n\r\n")
            if header_end < 0:
                continue
            headers_raw = part[:header_end].decode("utf-8", errors="replace")
            file_data = part[header_end + 4:]
            if file_data.endswith(b"\r\n"):
                file_data = file_data[:-2]

            # Extract filename
            fn_match = re.search(r'filename="([^"]+)"', headers_raw)
            if not fn_match:
                continue
            original_name = fn_match.group(1)

            # Sanitize filename
            safe_name = re.sub(r"[^a-zA-Z0-9_.\-]", "_", original_name)
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            final_name = f"{timestamp}_{safe_name}"
            save_path = UPLOADS_DIR / final_name
            save_path.write_bytes(file_data)

            # Record in database
            media_id = str(uuid.uuid4())
            web_path = f"/assets/uploads/blogs/{final_name}"
            conn = get_db()
            conn.execute(
                "INSERT INTO media (id, filename, path, size) VALUES (?, ?, ?, ?)",
                (media_id, original_name, web_path, len(file_data))
            )
            conn.commit()
            conn.close()

            return self._send_json(200, {
                "ok": True,
                "id": media_id,
                "filename": original_name,
                "path": web_path,
                "size": len(file_data)
            })

        self._send_json(400, {"ok": False, "error": "No file found in upload."})

    def _cms_list_media(self):
        user = self._require_auth()
        if not user:
            return
        conn = get_db()
        rows = conn.execute("SELECT * FROM media ORDER BY uploaded_at DESC").fetchall()
        conn.close()
        self._send_json(200, {"ok": True, "media": [dict(r) for r in rows]})

    # ═══════════════════════════════════════════════════════════════════
    #  Legacy API Handlers (Booking + Contact)
    # ═══════════════════════════════════════════════════════════════════

    def _api_contact(self):
        client_ip = self.client_address[0]
        now = time.time()
        CONTACT_RATE_LIMITS[client_ip] = [t for t in CONTACT_RATE_LIMITS[client_ip] if now - t < RATE_LIMIT_WINDOW]
        if len(CONTACT_RATE_LIMITS[client_ip]) >= RATE_LIMIT_MAX:
            return self._send_json(429, {"ok": False, "error": "Too many requests."})
        CONTACT_RATE_LIMITS[client_ip].append(now)

        data = self._read_json()
        if data.get("website"):
            return self._send_json(200, {"ok": True, "message": "OK"})
        try:
            send_contact_email(data)
        except ValueError as e:
            return self._send_json(400, {"ok": False, "error": str(e)})
        except Exception as e:
            traceback.print_exc()
            return self._send_json(502, {"ok": False, "error": str(e)})
        self._send_json(200, {"ok": True, "message": "Contact request submitted."})

    def _api_book(self):
        data = self._read_json()
        customer = data.get("customer") or {}
        if not (customer.get("email") or customer.get("phone")):
            return self._send_json(400, {"ok": False, "error": "Customer email or phone required."})
        try:
            send_booking_email(data)
        except Exception as e:
            traceback.print_exc()
            return self._send_json(502, {"ok": False, "error": str(e)})
        self._send_json(200, {"ok": True, "message": "Booking email sent.", "id": data.get("id")})


# ─── Main ─────────────────────────────────────────────────────────────
def main():
    mimetypes.add_type("application/javascript", ".js")
    mimetypes.add_type("text/css", ".css")

    print("=" * 60)
    print("  ReevanaX Content Studio — Native CMS + Static Publisher")
    print("=" * 60)

    # Initialize database
    init_db()
    import_existing_posts()

    httpd = ThreadingHTTPServer((HOST, PORT), RevanaxHandler)
    print(f"\n  Site:    http://127.0.0.1:{PORT}/")
    print(f"  Admin:   http://127.0.0.1:{PORT}/admin/")
    print(f"  DB:      {DB_PATH}")
    print(f"  SMTP:    {CONFIG_PATH}")
    print(f"\n  Login:  admin@reevanax.com / admin123")
    print("=" * 60)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down.")
        httpd.server_close()


if __name__ == "__main__":
    main()
