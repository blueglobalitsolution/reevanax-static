import re
from pathlib import Path

content = Path('blogs/skin-and-hair-treatments-for-groom/index.html').read_text(encoding='utf-8')

urls = set()
for m in re.finditer(r'(?:src|href)=["\'](/assets/[^"\']+)["\']', content):
    u = m.group(1).split('?')[0].split('#')[0]
    urls.add(u)

print(f"Checking {len(urls)} assets in blogs/skin-and-hair-treatments-for-groom/index.html...")
missing = []
for u in sorted(urls):
    local_path = Path('.' + u)
    if not local_path.exists():
        missing.append(u)

if missing:
    print(f"WARNING: {len(missing)} missing assets:")
    for m in missing:
        print("  - 404:", m)
else:
    print("ALL internal assets exist on local disk! 100% OK!")
