import sys
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
TOOLS_DIR = ROOT_DIR / "_tools"

if str(TOOLS_DIR) not in sys.path:
    sys.path.insert(0, str(TOOLS_DIR))

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
