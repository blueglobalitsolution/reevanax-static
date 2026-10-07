import re
from pathlib import Path

pages = [
    'about-us/index.html',
    'cosmetic-gynecology-treatment/index.html',
    'face-procedures/index.html',
    'anti-agening-treatment/index.html',
    'hair-care-procedures/index.html',
    'plastic-surgery/index.html',
    'body-fitness-treatment/index.html',
    'male-asthetic/index.html',
    'book-an-appointment/index.html',
    'contact-us/index.html'
]

for p in pages:
    f = Path(p)
    if not f.exists():
        continue
    txt = f.read_text(encoding='utf-8', errors='ignore')
    # Find page-level elementor containers (after <div data-elementor-type="wp-page")
    page_part = txt.split('data-elementor-type="wp-page"')
    if len(page_part) > 1:
        first_part = page_part[1][:1500]
        match = re.search(r'class="([^"]*elementor-element\s+elementor-element-([a-zA-Z0-9]+)[^"]*)"', first_part)
        btn_match = re.search(r'class="[^"]*elementor-button-text">([^<]+)<', first_part)
        btn_text = btn_match.group(1).strip() if btn_match else "No button text"
        if match:
            print(f"{p:45} -> ID: {match.group(2):10} | Button: '{btn_text}'")
