import re
from pathlib import Path
from collections import Counter

banner_urls = Counter()
for html_file in Path('.').glob('**/index.html'):
    if 'venv' in html_file.parts or 'frontend' in html_file.parts:
        continue
    text = html_file.read_text(encoding='utf-8', errors='ignore')
    matches = re.findall(r'background-image:\s*url\(([^)]+)\)', text)
    for m in matches:
        clean = m.strip('"\' ')
        banner_urls[clean] += 1

print("All background-image URLs in site:")
for url, count in banner_urls.most_common(50):
    rel = url.lstrip('/')
    p = Path(rel)
    print(f"  {count}x: {url} -> Exists on disk: {p.exists()}")
