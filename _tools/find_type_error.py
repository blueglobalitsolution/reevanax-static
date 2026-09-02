import re
from pathlib import Path

for name in ['head', 'header', 'footer']:
    content = Path(f'_data/post_template_{name}.html').read_text(encoding='utf-8')
    scripts = re.findall(r'<script[^>]*>(.*?)</script>', content, re.DOTALL)
    for idx, s in enumerate(scripts):
        for line_num, line in enumerate(s.splitlines()):
            # Look for unquoted / standalone `type`
            if re.search(r'(?<![\w\.\'\"\$])type(?![\w\.\'\"\(])', line):
                if not any(k in line for k in ['typeof', "'type'", '"type"', 'type:', 'type =', 'type=']):
                    print(f"[{name}] Script {idx}, Line {line_num}: {line.strip()[:120]}")
