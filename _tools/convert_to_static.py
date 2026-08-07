#!/usr/bin/env python3
"""
Static export for Revanax from https://revanax.local

Strategy:
1) Share WordPress theme/plugin/upload/include assets at site root
   (copied/symlinked from Local WP filesystem — preserves exact design).
2) For every sitemap URL, save page/index.html with:
   - page links rewritten to relative */index.html
   - asset URLs kept as root-absolute /wp-content/... /wp-includes/...
   - page-specific media copied into <page>/assets/media/ and rewritten
3) Booking/admin-ajax neutralized (booking wired later).

Layout:
  static/
    index.html
    assets/media/          # homepage media
    wp-content/ ...
    wp-includes/ ...
    about-us/
      index.html
      assets/media/
    mommy-makeover/arm-lift/
      index.html
      assets/media/
"""

from __future__ import annotations

import hashlib
import json
import os
import re
import shutil
import ssl
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

BASE = "https://revanax.local"
WP_ROOT = Path("/home/satish/Local Sites/revanax/app/public")
OUT = Path("/home/satish/project/website/revanax/static")
URL_LIST = Path("/tmp/revanax-static-urls.txt")
LOG = OUT / "_tools" / "convert.log"
MANIFEST = OUT / "_tools" / "manifest.json"

CTX = ssl._create_unverified_context()
UA = "RevanaxStaticExporter/2.0"

SKIP_PREFIXES = ("/wp-admin", "/wp-json", "/wp-login", "/xmlrpc")
MEDIA_EXTS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".svg",
    ".mp4",
    ".webm",
    ".ico",
}

IMG_ATTR_RE = re.compile(
    r"""(?P<prefix>\b(?:src|data-src|data-lazy-src|data-bg|data-background|data-background-image|data-large_image|data-thumb|poster)\s*=\s*)(?P<q>["'])(?P<url>.*?)(?P=q)""",
    re.I,
)
SRCSET_RE = re.compile(
    r"""(?P<prefix>\b(?:srcset|data-srcset)\s*=\s*)(?P<q>["'])(?P<val>.*?)(?P=q)""",
    re.I,
)
HREF_RE = re.compile(
    r"""(?P<prefix>\bhref\s*=\s*)(?P<q>["'])(?P<url>.*?)(?P=q)""",
    re.I,
)
ACTION_RE = re.compile(
    r"""(?P<prefix>\baction\s*=\s*)(?P<q>["'])(?P<url>.*?)(?P=q)""",
    re.I,
)


def log(msg: str) -> None:
    line = f"{time.strftime('%H:%M:%S')} {msg}"
    print(line, flush=True)
    LOG.parent.mkdir(parents=True, exist_ok=True)
    with LOG.open("a", encoding="utf-8") as f:
        f.write(line + "\n")


def fetch(url: str, timeout: int = 120) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=timeout) as r:
        return r.read()


def normalize_path(path: str) -> str:
    path = urllib.parse.unquote(path.split("?")[0].split("#")[0])
    if not path.startswith("/"):
        path = "/" + path
    return path.rstrip("/") or "/"


def depth_of(path: str) -> int:
    if path == "/":
        return 0
    return len([p for p in path.strip("/").split("/") if p])


def rel_prefix(from_path: str) -> str:
    d = depth_of(from_path)
    return "" if d == 0 else "../" * d


def page_dir(path: str) -> Path:
    return OUT if path == "/" else OUT / path.lstrip("/")


def ensure_shared_assets() -> None:
    """Copy or symlink WP static asset trees into OUT."""
    pairs = [
        ("wp-includes", OUT / "wp-includes"),
        ("wp-content/themes", OUT / "wp-content" / "themes"),
        ("wp-content/plugins", OUT / "wp-content" / "plugins"),
        ("wp-content/uploads", OUT / "wp-content" / "uploads"),
        ("wp-content/cache", OUT / "wp-content" / "cache"),
        ("wp-content/mu-plugins", OUT / "wp-content" / "mu-plugins"),
    ]
    for rel, dest in pairs:
        src = WP_ROOT / rel
        if not src.exists():
            log(f"skip missing {src}")
            continue
        if dest.exists() or dest.is_symlink():
            log(f"shared exists {dest}")
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        # Prefer symlink for speed/disk; fall back to copytree
        try:
            os.symlink(src, dest, target_is_directory=True)
            log(f"symlink {rel} -> {dest}")
        except OSError as e:
            log(f"symlink failed ({e}); copying {rel} …")
            shutil.copytree(src, dest, symlinks=True, dirs_exist_ok=True)
            log(f"copied {rel}")


def is_internal(url: str) -> bool:
    if not url or url.startswith(("data:", "mailto:", "tel:", "javascript:", "#", "blob:")):
        return False
    if url.startswith("//"):
        url = "https:" + url
    if url.startswith("/"):
        return True
    host = urllib.parse.urlparse(url).netloc.lower()
    return host in (
        "revanax.local",
        "www.revanax.local",
        "reevanax.com",
        "www.reevanax.com",
    )


def absolutize(url: str, base: str) -> str | None:
    if not url or url.startswith(("data:", "mailto:", "tel:", "javascript:", "#", "blob:")):
        return None
    if url.startswith("//"):
        url = "https:" + url
    return urllib.parse.urljoin(base, url)


def is_asset_path(path: str) -> bool:
    if path.startswith(("/wp-content/", "/wp-includes/")):
        return True
    name = Path(path).name
    if "." in name and Path(name).suffix.lower() in MEDIA_EXTS | {
        ".css",
        ".js",
        ".woff",
        ".woff2",
        ".ttf",
        ".eot",
        ".map",
        ".json",
    }:
        return True
    return False


def rewrite_page_href(url: str, from_path: str) -> str:
    absu = absolutize(url, BASE + "/")
    if not absu or not is_internal(absu):
        return url
    parsed = urllib.parse.urlparse(absu)
    path = normalize_path(parsed.path)
    if any(path.startswith(p) for p in SKIP_PREFIXES):
        return url
    if is_asset_path(path):
        # root-absolute asset path (shared tree)
        return path + (("?" + parsed.query) if parsed.query else "")
    # page link
    prefix = rel_prefix(from_path)
    if path == "/":
        return f"{prefix}index.html" if prefix else "index.html"
    return f"{prefix}{path.lstrip('/')}/index.html"


def local_wp_file(url_path: str) -> Path | None:
    """Map /wp-content/... URL path to filesystem under WP_ROOT."""
    path = url_path.split("?")[0]
    if not path.startswith("/"):
        return None
    candidate = WP_ROOT / path.lstrip("/")
    if candidate.is_file():
        return candidate
    return None


def copy_page_media(url: str, media_dir: Path) -> str | None:
    absu = absolutize(url, BASE + "/")
    if not absu or not is_internal(absu):
        return None
    parsed = urllib.parse.urlparse(absu)
    path = parsed.path
    ext = Path(path).suffix.lower()
    if ext not in MEDIA_EXTS:
        return None
    if "/wp-content/uploads/" not in path and "/wp-content/plugins/" not in path:
        # still allow theme images
        if "/wp-content/" not in path:
            return None

    src = local_wp_file(path)
    media_dir.mkdir(parents=True, exist_ok=True)
    digest = hashlib.sha1(path.encode()).hexdigest()[:8]
    name = Path(path).name
    stem = Path(name).stem[:60]
    safe = re.sub(r"[^a-zA-Z0-9._-]+", "-", stem).strip("-") or "media"
    fname = f"{safe}-{digest}{ext}"
    dest = media_dir / fname

    if src and src.exists():
        if not dest.exists():
            shutil.copy2(src, dest)
        return f"assets/media/{fname}"

    # fallback download
    try:
        data = fetch(BASE + path)
        dest.write_bytes(data)
        return f"assets/media/{fname}"
    except Exception:
        return None


def transform_html(html: str, page_path: str) -> str:
    page_url = BASE if page_path == "/" else BASE + page_path + "/"
    media_dir = page_dir(page_path) / "assets" / "media"
    media_map: dict[str, str] = {}

    def map_media(raw: str) -> str:
        key = raw.strip()
        if key in media_map:
            return media_map[key]
        local = copy_page_media(key, media_dir)
        if local:
            media_map[key] = local
            return local
        # fall back to root-absolute shared path
        absu = absolutize(key, page_url)
        if absu and is_internal(absu):
            p = urllib.parse.urlparse(absu)
            return p.path + (("?" + p.query) if p.query else "")
        return raw

    def repl_img(m: re.Match) -> str:
        return f"{m.group('prefix')}{m.group('q')}{map_media(m.group('url'))}{m.group('q')}"

    def repl_srcset(m: re.Match) -> str:
        parts = []
        for part in m.group("val").split(","):
            part = part.strip()
            if not part:
                continue
            bits = part.split()
            bits[0] = map_media(bits[0])
            parts.append(" ".join(bits))
        return f"{m.group('prefix')}{m.group('q')}{', '.join(parts)}{m.group('q')}"

    def repl_href(m: re.Match) -> str:
        u = m.group("url")
        # stylesheet / icon assets stay root-absolute
        absu = absolutize(u, page_url)
        if absu and is_internal(absu):
            path = normalize_path(urllib.parse.urlparse(absu).path)
            if is_asset_path(path) or path.endswith((".css", ".js", ".xml", ".json")):
                parsed = urllib.parse.urlparse(absu)
                return f"{m.group('prefix')}{m.group('q')}{parsed.path}{('?' + parsed.query) if parsed.query else ''}{m.group('q')}"
            # media in href (rare)
            if Path(path).suffix.lower() in MEDIA_EXTS:
                mapped = map_media(u)
                return f"{m.group('prefix')}{m.group('q')}{mapped}{m.group('q')}"
        return f"{m.group('prefix')}{m.group('q')}{rewrite_page_href(u, page_path)}{m.group('q')}"

    def repl_action(m: re.Match) -> str:
        u = m.group("url")
        if "admin-ajax.php" in u or "bookly" in u.lower():
            return f"{m.group('prefix')}{m.group('q')}#{m.group('q')}"
        return f"{m.group('prefix')}{m.group('q')}{rewrite_page_href(u, page_path)}{m.group('q')}"

    html = IMG_ATTR_RE.sub(repl_img, html)
    html = SRCSET_RE.sub(repl_srcset, html)
    html = HREF_RE.sub(repl_href, html)
    html = ACTION_RE.sub(repl_action, html)

    # script src → root-absolute shared
    def repl_script_src(m: re.Match) -> str:
        u = m.group("url")
        absu = absolutize(u, page_url)
        if absu and is_internal(absu):
            parsed = urllib.parse.urlparse(absu)
            return f"{m.group('prefix')}{m.group('q')}{parsed.path}{('?' + parsed.query) if parsed.query else ''}{m.group('q')}"
        return m.group(0)

    script_src_re = re.compile(
        r"""(?P<prefix>\bsrc\s*=\s*)(?P<q>["'])(?P<url>.*?)(?P=q)""",
        re.I,
    )
    # Already handled img src; script tags also use src — map_media only for media ext,
    # so re-run a pass for non-media src to root paths:
    def repl_any_src(m: re.Match) -> str:
        u = m.group("url")
        absu = absolutize(u, page_url)
        if not absu or not is_internal(absu):
            return m.group(0)
        parsed = urllib.parse.urlparse(absu)
        path = parsed.path
        ext = Path(path).suffix.lower()
        if ext in MEDIA_EXTS:
            # already rewritten possibly; if still absolute site URL, map
            if u.startswith("assets/"):
                return m.group(0)
            mapped = map_media(u)
            return f"{m.group('prefix')}{m.group('q')}{mapped}{m.group('q')}"
        return f"{m.group('prefix')}{m.group('q')}{path}{('?' + parsed.query) if parsed.query else ''}{m.group('q')}"

    html = script_src_re.sub(repl_any_src, html)

    # Neutralize booking ajax
    html = re.sub(
        r"https?://(?:revanax\.local|reevanax\.com|www\.reevanax\.com)/wp-admin/admin-ajax\.php",
        "#",
        html,
        flags=re.I,
    )

    # Strip absolute origins → root-relative leftovers
    for origin in (
        "https://revanax.local",
        "http://revanax.local",
        "https://www.reevanax.com",
        "https://reevanax.com",
        "http://reevanax.com",
    ):
        html = html.replace(origin, "")

    marker = "\n<!-- Static export from revanax.local | booking deferred -->\n"
    html = re.sub(r"(<head[^>]*>)", r"\1" + marker, html, count=1, flags=re.I)
    return html


def convert_page(path: str) -> dict:
    url = BASE if path == "/" else f"{BASE}{path}/"
    log(f"PAGE {path}")
    try:
        raw = fetch(url)
    except Exception:
        try:
            url = BASE if path == "/" else f"{BASE}{path}"
            raw = fetch(url)
        except Exception as e:
            log(f"  FAIL {e}")
            return {"path": path, "ok": False, "error": str(e)}

    html = raw.decode("utf-8", errors="ignore")
    d = page_dir(path)
    d.mkdir(parents=True, exist_ok=True)
    out_html = transform_html(html, path)
    out = d / "index.html"
    out.write_text(out_html, encoding="utf-8")
    media_n = 0
    md = d / "assets" / "media"
    if md.exists():
        media_n = len(list(md.iterdir()))
    log(f"  OK → {out.relative_to(OUT)} (media files: {media_n})")
    return {"path": path, "ok": True, "media": media_n}


def load_urls() -> list[str]:
    urls = []
    seen = set()
    for line in URL_LIST.read_text().splitlines():
        p = normalize_path(line.strip())
        if not p or p in seen:
            continue
        if any(p.startswith(x) for x in SKIP_PREFIXES):
            continue
        if p.endswith("/feed"):
            continue
        seen.add(p)
        urls.append(p)
    return urls


def main() -> int:
    LOG.write_text("", encoding="utf-8")
    log("Ensuring shared WP assets…")
    ensure_shared_assets()

    urls = load_urls()
    only = set(sys.argv[1:]) if len(sys.argv) > 1 else None
    if only:
        urls = [u for u in urls if u in only or u.lstrip("/") in only]

    log(f"Exporting {len(urls)} pages")
    results = []
    for i, path in enumerate(urls, 1):
        log(f"[{i}/{len(urls)}]")
        results.append(convert_page(path))
        time.sleep(0.05)

    # root helpers
    (OUT / ".htaccess").write_text("DirectoryIndex index.html\n", encoding="utf-8")
    readme = OUT / "README.md"
    readme.write_text(
        """# Revanax Static Site

Exported from https://revanax.local

## Structure
- Each page: `<slug>/index.html` + `assets/media/` (page images)
- Shared design assets: `/wp-content/`, `/wp-includes/` (symlinked from Local WP)
- Homepage: `/index.html` + `/assets/media/`

## Serve
Point your vhost document root at this folder (e.g. static.revanax.local).
Requires the server to resolve `/wp-content` and `/wp-includes` from this root.

## Booking
Book-an-appointment UI is present; backend/admin-ajax is neutralized for later wiring.
""",
        encoding="utf-8",
    )

    ok = sum(1 for r in results if r.get("ok"))
    fail = [r for r in results if not r.get("ok")]
    MANIFEST.write_text(json.dumps({"ok": ok, "failed": fail, "total": len(results)}, indent=2), encoding="utf-8")
    log(f"DONE ok={ok} fail={len(fail)}")
    return 0 if not fail else 1


if __name__ == "__main__":
    raise SystemExit(main())
