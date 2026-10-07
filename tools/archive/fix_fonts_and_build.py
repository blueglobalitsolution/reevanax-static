import re
from pathlib import Path

# Fix head template
head_path = Path('_data/post_template_head.html')
head_content = head_path.read_text(encoding='utf-8')

# Remove all broken local elementor-gf-local-*.css links
head_content = re.sub(r'<link rel=[\'"]stylesheet[\'"] id=[\'"]elementor-gf-local-[^\'"]+[\'"][^>]*>\s*', '', head_content)

font_cdn = """<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Manrope:wght@400;600;700;800&family=Marcellus&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Sora:wght@400;600;700&display=swap" media="all" />
"""

if 'fonts.googleapis.com/css2?family=DM+Sans' not in head_content:
    head_content = font_cdn + head_content

head_path.write_text(head_content, encoding='utf-8')
print("Successfully replaced local broken font CSS with official Google Fonts CDN.")
