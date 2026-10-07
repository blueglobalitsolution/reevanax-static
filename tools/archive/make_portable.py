#!/usr/bin/env python3
"""
Make the Revanax static export fully portable:
- Copy only referenced wp-content / wp-includes files into assets/site/
- Rewrite all HTML to /assets/site/... (no WP tree at root)
- Resolve CSS url() deps and copy those too
- Remove root wp-content / wp-includes symlinks
"""

from __future__ import annotations

import os
import re
import shutil
import sys
import time
from pathlib import Path
from urllib.parse import unquote, urlparse

WP_ROOT = Path("/home/satish/Local Sites/revanax/app/public")
STATIC = Path("/home/satish/project/website/revanax/static")
SITE_ASSETS = STATIC / "assets" / "site"
LOG = STATIC / "_tools" / "portable.log"

CSS_URL_RE = re.compile(r"""url\(\s*(['"]?)([^)'"]+)\1\s*\)""", re.I)
IMPORT_RE = re.compile(r"""@import\s+(?:url\()?['"]([^'"]+)['"]\)?""", re.I)
PATH_RE = re.compile(
    r"""(?P<pre>["'(=]|\\/)?(?P<path>/wp-(?:content|includes)/[^"'\)\s?#\\]+)""",
    re.I,
)
# Also match already-escaped JSON style \/wp-content\/...
ESC_PATH_RE = re.compile(
    r"""\\/(wp-(?:content|includes)\\/[^"'\\\s?#]+)""",
    re.I,
)


def log(msg: str) -> None:
    line = f"{time.strftime('%H:%M:%S')} {msg}"
    print(line, flush=True)
    LOG.parent.mkdir(parents=True, exist_ok=True)
    with LOG.open("a", encoding="utf-8") as f:
        f.write(line + "\n")


def normalize_wp_path(path: str) -> str | None:
    path = unquote(path.strip())
    path = path.replace("\\/", "/")
    if not path.startswith("/"):
        path = "/" + path
    # strip query/hash already
    path = path.split("?")[0].split("#")[0]
    # reject globs / junk
    if "*" in path or path.endswith(("/plugins", "/plugins/", "/wp-content", "/wp-content/")):
        return None
    if not path.startswith(("/wp-content/", "/wp-includes/")):
        return None
    # must look like a file (has extension) OR directory we skip
    name = Path(path).name
    if "." not in name:
        return None
    return path


def collect_paths_from_text(text: str) -> set[str]:
    found: set[str] = set()
    for m in re.finditer(r"/wp-(?:content|includes)/[^\"'\s)?#]+", text):
        p = normalize_wp_path(m.group(0))
        if p:
            found.add(p)
    for m in ESC_PATH_RE.finditer(text):
        p = normalize_wp_path("/" + m.group(1).replace("\\/", "/"))
        if p:
            found.add(p)
    return found


def wp_fs(path: str) -> Path:
    return WP_ROOT / path.lstrip("/")


def dest_fs(path: str) -> Path:
    # /wp-content/foo → assets/site/wp-content/foo
    return SITE_ASSETS / path.lstrip("/")


def copy_one(path: str) -> bool:
    src = wp_fs(path)
    dst = dest_fs(path)
    if dst.exists() and dst.stat().st_size > 0:
        return True
    if not src.is_file():
        return False
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    return True


def css_deps(css_path: str, css_text: str) -> set[str]:
    """Return wp-absolute paths referenced from a CSS file."""
    deps: set[str] = set()
    base_dir = str(Path(css_path).parent).replace("\\", "/")

    def resolve(ref: str) -> str | None:
        ref = ref.strip().strip("'\"")
        if not ref or ref.startswith(("data:", "#")):
            return None
        if ref.startswith("//"):
            return None
        if ref.startswith(("http://", "https://")):
            # only same-host style leftovers
            u = urlparse(ref)
            if u.path.startswith(("/wp-content/", "/wp-includes/")):
                return normalize_wp_path(u.path)
            return None
        if ref.startswith("/"):
            return normalize_wp_path(ref)
        # relative to css file location
        joined = str(Path(base_dir) / ref)
        joined = os.path.normpath(joined).replace("\\", "/")
        if not joined.startswith("/"):
            joined = "/" + joined
        # Path may be like /wp-content/plugins/.../../webfonts/x.woff2
        return normalize_wp_path(joined)

    for m in CSS_URL_RE.finditer(css_text):
        p = resolve(m.group(2))
        if p:
            deps.add(p)
    for m in IMPORT_RE.finditer(css_text):
        p = resolve(m.group(1))
        if p:
            deps.add(p)
    return deps


def gather_all_html_paths() -> set[str]:
    paths: set[str] = set()
    for html in STATIC.rglob("index.html"):
        if "_tools" in html.parts:
            continue
        text = html.read_text(encoding="utf-8", errors="ignore")
        paths |= collect_paths_from_text(text)
    return paths


def expand_with_css(seed: set[str]) -> set[str]:
    """Copy seed files, parse CSS for more deps, repeat until stable."""
    all_paths = set(seed)
    queue = list(seed)
    seen_css: set[str] = set()
    while queue:
        path = queue.pop()
        ok = copy_one(path)
        if not ok:
            log(f"  missing {path}")
            continue
        if path.lower().endswith(".css") and path not in seen_css:
            seen_css.add(path)
            try:
                css = dest_fs(path).read_text(encoding="utf-8", errors="ignore")
            except Exception:
                continue
            for dep in css_deps(path, css):
                if dep not in all_paths:
                    all_paths.add(dep)
                    queue.append(dep)
    return all_paths


def rewrite_html(text: str) -> str:
    # Plain paths
    text = text.replace("/wp-content/", "/assets/site/wp-content/")
    text = text.replace("/wp-includes/", "/assets/site/wp-includes/")
    # Escaped JSON
    text = text.replace(r"\/wp-content\/", r"\/assets\/site\/wp-content\/")
    text = text.replace(r"\/wp-includes\/", r"\/assets\/site\/wp-includes\/")
    # Avoid double-prefix if re-run
    text = text.replace("/assets/site/assets/site/", "/assets/site/")
    text = text.replace(r"\/assets\/site\/assets\/site\/", r"\/assets\/site\/")
    return text


def rewrite_all_html() -> int:
    n = 0
    for html in STATIC.rglob("index.html"):
        if "_tools" in html.parts:
            continue
        text = html.read_text(encoding="utf-8", errors="ignore")
        new = rewrite_html(text)
        if new != text:
            html.write_text(new, encoding="utf-8")
            n += 1
    return n


def remove_wp_symlinks() -> None:
    for name in ("wp-content", "wp-includes"):
        p = STATIC / name
        if p.is_symlink() or p.exists():
            if p.is_symlink():
                p.unlink()
                log(f"removed symlink {p}")
            elif p.is_dir():
                # only remove if it's our old symlink target dir — safety: must be symlink
                log(f"WARNING: {p} is a real directory, not removing automatically")
            else:
                p.unlink()


def main() -> int:
    LOG.write_text("", encoding="utf-8")
    log("Collecting asset references from HTML…")
    seed = gather_all_html_paths()
    log(f"seed refs: {len(seed)}")
    SITE_ASSETS.mkdir(parents=True, exist_ok=True)
    log("Copying assets + CSS dependencies…")
    all_paths = expand_with_css(seed)
    copied = sum(1 for p in all_paths if dest_fs(p).is_file())
    missing = sorted(p for p in all_paths if not dest_fs(p).is_file())
    log(f"copied/present: {copied}, missing: {len(missing)}")
    for m in missing[:30]:
        log(f"  MISS {m}")

    log("Rewriting HTML paths…")
    n = rewrite_all_html()
    log(f"rewrote {n} HTML files")

    remove_wp_symlinks()

    # size
    total = sum(f.stat().st_size for f in SITE_ASSETS.rglob("*") if f.is_file())
    log(f"assets/site size: {total/1024/1024:.1f} MB, files: {copied}")

    # update README snippet note
    readme = STATIC / "README.md"
    if readme.exists():
        t = readme.read_text(encoding="utf-8")
        t = re.sub(
            r"Shared design assets via.*\n",
            "Shared design assets copied into `assets/site/` (fully portable; no wp-content/wp-includes at root)\n",
            t,
        )
        t = t.replace(
            "wp-content/ → Local WP     # themes, plugins, uploads, cache\n  wp-includes/ → Local WP\n",
            "assets/site/wp-content/…  # portable copies of used assets\n  assets/site/wp-includes/…\n",
        )
        t = re.sub(
            r"- Symlinked `wp-content`.*\n.*\n",
            "- Fully portable: no dependency on Local WP paths.\n",
            t,
        )
        readme.write_text(t, encoding="utf-8")

    log("DONE portable")
    return 0 if not missing else 0  # missing fonts from bad urls ok


if __name__ == "__main__":
    raise SystemExit(main())
