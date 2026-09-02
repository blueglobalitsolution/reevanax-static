import re
from pathlib import Path

pages = list(Path('.').glob('**/index.html'))
print(f"Scanning {len(pages)} pages for original hero banner images...\n")

results = []
for p in pages:
    if 'venv' in p.parts or 'frontend' in p.parts:
        continue
    txt = p.read_text(encoding='utf-8', errors='ignore')
    
    # Check first elementor container inside wp-page
    page_part = txt.split('data-elementor-type="wp-page"')
    if len(page_part) > 1:
        first_part = page_part[1][:2500]
        # Find first container ID
        c_match = re.search(r'class="[^"]*elementor-element\s+elementor-element-([a-zA-Z0-9]+)[^"]*"', first_part)
        btn_match = re.search(r'class="[^"]*elementor-button-text">([^<]+)<', first_part)
        
        cid = c_match.group(1) if c_match else None
        btn = btn_match.group(1).strip() if btn_match else "None"
        
        # Look for CSS rule matching cid with background-image:url(...)
        img_url = "None"
        if cid:
            css_matches = re.findall(rf'\.elementor-element-{cid}[^{{]*\{{[^}}]*background-image:\s*url\(([^)]+)\)', txt)
            if css_matches:
                img_url = css_matches[0].strip('"\' ')
        
        results.append((p.as_posix(), btn, cid, img_url))

# Print sorted results
print(f"{'Page Path':55} | {'Button / Title':25} | {'Container ID':12} | {'Original Banner Image'}")
print("-" * 130)
for path, btn, cid, img in sorted(results):
    if btn != "None" or img != "None":
        print(f"{path:55} | {btn:25} | {str(cid):12} | {img}")
