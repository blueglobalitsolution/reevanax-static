import sqlite3
import json
import yaml
from pathlib import Path

conn = sqlite3.connect('_data/cms.db')
conn.row_factory = sqlite3.Row

rows = conn.execute('SELECT id, slug, tags FROM posts').fetchall()
for r in rows:
    post_id = r['id']
    raw_tags = r['tags']
    parsed_tags = []
    if raw_tags:
        try:
            parsed_tags = json.loads(raw_tags)
        except Exception:
            try:
                parsed_tags = yaml.safe_load(raw_tags)
            except Exception:
                parsed_tags = [t.strip() for t in raw_tags.split(',') if t.strip()]
    if not isinstance(parsed_tags, list):
        parsed_tags = [str(parsed_tags)]
    
    clean_json = json.dumps(parsed_tags)
    conn.execute('UPDATE posts SET tags = ? WHERE id = ?', (clean_json, post_id))
    print(f"Fixed tags for {r['slug']}: {clean_json}")

conn.commit()
conn.close()
print("All DB tags fixed to valid JSON!")
