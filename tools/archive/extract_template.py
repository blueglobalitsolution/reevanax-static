import re
from pathlib import Path

raw = Path('_data/original_groom_post.html').read_text(encoding='utf-8', errors='ignore')

# 1. Head
head_match = re.search(r'<head>(.*?)</head>', raw, re.DOTALL)
head_html = head_match.group(1) if head_match else ''

# 2. Header and Navigation
body_idx = raw.find('<body')
post_idx = raw.find('data-elementor-id="28857"')
post_start_div = raw.rfind('<div', 0, post_idx)
header_html = raw[body_idx:post_start_div]

# 3. Footer
footer_idx = raw.find('<div class="wrap_footer">')
footer_html = raw[footer_idx:]

print('Head length:', len(head_html))
print('Header length:', len(header_html))
print('Footer length:', len(footer_html))

Path('_data/post_template_head.html').write_text(head_html, encoding='utf-8')
Path('_data/post_template_header.html').write_text(header_html, encoding='utf-8')
Path('_data/post_template_footer.html').write_text(footer_html, encoding='utf-8')
print('Successfully saved complete authentic template pieces!')
