import sys
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
TOOLS_DIR = ROOT_DIR / "tools"
LEGACY_TOOLS_DIR = ROOT_DIR / "_tools"

for t_dir in (TOOLS_DIR, LEGACY_TOOLS_DIR):
    if t_dir.exists() and str(t_dir) not in sys.path:
        sys.path.insert(0, str(t_dir))

try:
    import build_blogs
except ImportError:
    build_blogs = None


def rebuild_static_blogs():
    """Trigger static HTML re-generation for blogs, cards, and sitemap."""
    if build_blogs:
        try:
            build_blogs.build_all()
            return True
        except Exception as e:
            print(f"[SSG Builder Error] {e}")
            return False
    return False
