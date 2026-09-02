from pathlib import Path

for name in ['head', 'header', 'footer']:
    p = Path(f'_data/post_template_{name}.html')
    if p.exists():
        t = p.read_text(encoding='utf-8')
        t = t.replace('../', '/')
        p.write_text(t, encoding='utf-8')
        print(f'Normalized {p.name}')
