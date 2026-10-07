import sqlite3
import hashlib
import secrets
import json
import re
import os
import uuid
import smtplib
import ssl
from pathlib import Path
from datetime import datetime, timedelta
from email.message import EmailMessage

ROOT_DIR = Path(__file__).resolve().parent.parent
DB_DIR = ROOT_DIR / "_data"
DB_PATH = DB_DIR / "cms.db"
CONFIG_PATH = DB_DIR / "smtp_config.json"
CONTENT_DIR = ROOT_DIR / "content" / "blogs"
FRONTEND_DIR = ROOT_DIR / "frontend"
UPLOADS_DIR = (FRONTEND_DIR / "assets" / "uploads" / "blogs") if FRONTEND_DIR.exists() else (ROOT_DIR / "assets" / "uploads" / "blogs")

# Ensure directories exist
DB_DIR.mkdir(parents=True, exist_ok=True)
CONTENT_DIR.mkdir(parents=True, exist_ok=True)
UPLOADS_DIR.mkdir(parents=True, exist_ok=True)


def get_db() -> sqlite3.Connection:
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def hash_password(password: str) -> str:
    """SHA-256 hash with random salt — compatible with original server.py."""
    salt = secrets.token_hex(16)
    h = hashlib.sha256(f"{salt}:{password}".encode()).hexdigest()
    return f"{salt}:{h}"


def verify_password(password: str, stored_hash: str) -> bool:
    """Verify password against stored salt:hash — compatible with original server.py."""
    if ":" not in stored_hash:
        return False
    salt, expected = stored_hash.split(":", 1)
    h = hashlib.sha256(f"{salt}:{password}".encode()).hexdigest()
    return secrets.compare_digest(h, expected)


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


def safe_parse_tags(raw) -> list:
    if not raw:
        return []
    if isinstance(raw, list):
        return raw
    try:
        val = json.loads(raw)
        if isinstance(val, list):
            return val
    except Exception:
        pass
    return [t.strip() for t in str(raw).split(",") if t.strip()]


ENV_FILE = ROOT_DIR / ".env"
ROOT_CONFIG_PATH = ROOT_DIR / "smtp_config.json"


def _parse_env_file() -> dict:
    env_vars = {}
    if ENV_FILE.exists():
        try:
            for line in ENV_FILE.read_text(encoding="utf-8").splitlines():
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if "=" in line:
                    k, v = line.split("=", 1)
                    env_vars[k.strip()] = v.strip().strip("'\"")
        except Exception:
            pass
    return env_vars


# ─── Email Notification Helpers ─────────────────────────────────────
def load_smtp_config() -> dict | None:
    env_data = _parse_env_file()
    
    # Priority 1: Check .env file or system environment variables
    host = os.environ.get("SMTP_HOST") or env_data.get("SMTP_HOST")
    user = os.environ.get("SMTP_USER") or env_data.get("SMTP_USER")
    password = os.environ.get("SMTP_PASSWORD") or env_data.get("SMTP_PASSWORD")
    if host and user and password and not str(password).startswith("your-"):
        return {
            "smtp_host": host,
            "smtp_port": int(os.environ.get("SMTP_PORT") or env_data.get("SMTP_PORT", 587)),
            "smtp_user": user,
            "smtp_password": password,
            "smtp_use_tls": str(os.environ.get("SMTP_USE_TLS") or env_data.get("SMTP_USE_TLS", "true")).lower() in ("true", "1", "yes"),
            "from_email": os.environ.get("SMTP_FROM_EMAIL") or env_data.get("SMTP_FROM_EMAIL", "noreply@reevanax.com"),
            "from_name": os.environ.get("SMTP_FROM_NAME") or env_data.get("SMTP_FROM_NAME", "ReevanaX"),
            "to_email": os.environ.get("SMTP_TO_EMAIL") or env_data.get("SMTP_TO_EMAIL", "rathvasatish437@gmail.com"),
            "to_name": os.environ.get("SMTP_TO_NAME") or env_data.get("SMTP_TO_NAME", "ReevanaX"),
        }

    # Priority 2: Fallback to JSON config file if present
    cfg_file = CONFIG_PATH if CONFIG_PATH.exists() else (ROOT_CONFIG_PATH if ROOT_CONFIG_PATH.exists() else None)
    if cfg_file and cfg_file.exists():
        try:
            data = json.loads(cfg_file.read_text(encoding="utf-8"))
            required = ["smtp_host", "smtp_port", "smtp_user", "smtp_password", "from_email", "to_email"]
            if all(k in data for k in required) and not str(data.get("smtp_password", "")).startswith("your-"):
                return data
        except Exception:
            pass
    return None


def send_notification_email(subject: str, body_text: str):
    cfg = load_smtp_config()
    if not cfg:
        print(f"[SMTP Notice] Email skipped (SMTP not configured). Subject: {subject.encode(errors='replace').decode(errors='replace')}")
        return False
    try:
        msg = EmailMessage()
        msg["Subject"] = subject
        msg["From"] = cfg["from_email"]
        msg["To"] = cfg["to_email"]
        msg.set_content(body_text)

        host = cfg["smtp_host"]
        port = int(cfg["smtp_port"])
        user = cfg["smtp_user"]
        password = cfg["smtp_password"]
        use_tls = bool(cfg.get("smtp_use_tls", True))

        if port == 465:
            ctx = ssl.create_default_context()
            with smtplib.SMTP_SSL(host, port, context=ctx, timeout=20) as s:
                s.login(user, password)
                s.send_message(msg)
        else:
            with smtplib.SMTP(host, port, timeout=20) as s:
                s.ehlo()
                if use_tls:
                    s.starttls(context=ssl.create_default_context())
                    s.ehlo()
                s.login(user, password)
                s.send_message(msg)
        return True
    except Exception as e:
        print(f"[SMTP Error] Failed to send email: {e}")
        return False
