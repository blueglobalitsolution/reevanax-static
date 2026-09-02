import re
from pathlib import Path

# 1. Clean footer template - remove Buttonizer CDN script
footer_path = Path('_data/post_template_footer.html')
footer_content = footer_path.read_text(encoding='utf-8')
# Remove Buttonizer script
footer_content = re.sub(r'<script type="text/javascript">\(function\(n,t,c,d\)\{if\(t\.getElementById\(d\)\).*?buttonizer_script\'\)</script>', '', footer_content)
footer_path.write_text(footer_content, encoding='utf-8')
print("Cleaned Buttonizer from footer template.")

# 2. Clean head template - remove Buttonizer inline data
head_path = Path('_data/post_template_head.html')
head_content = head_path.read_text(encoding='utf-8')
head_content = re.sub(r'<script type="text/javascript">if\(!window\._buttonizer\).*?</script>', '', head_content)
head_path.write_text(head_content, encoding='utf-8')
print("Cleaned Buttonizer from head template.")
