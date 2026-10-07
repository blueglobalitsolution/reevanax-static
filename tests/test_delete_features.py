import urllib.request
import json

# 1. Login
data = json.dumps({'email': 'admin@reevanax.com', 'password': 'admin123'}).encode('utf-8')
req = urllib.request.Request('http://127.0.0.1:8080/api/cms/login', data=data, headers={'Content-Type': 'application/json'}, method='POST')
resp = urllib.request.urlopen(req)
token = json.loads(resp.read().decode('utf-8'))['token']
print("[OK] Logged in successfully!")

# 2. Test Media API (List)
req_media = urllib.request.Request('http://127.0.0.1:8080/api/cms/media', headers={'Authorization': f'Bearer {token}'})
r_media = urllib.request.urlopen(req_media)
media_data = json.loads(r_media.read().decode('utf-8'))
print(f"[OK] Media API returned {len(media_data.get('media', []))} items.")

# 3. Test Create a temporary test post to test Delete
post_payload = json.dumps({
    'title': 'Test Temporary Post For Deletion',
    'slug': 'test-temp-post-delete',
    'date': '2026-09-01',
    'author': 'Test Author',
    'category': 'Skincare Treatment',
    'tags': ['Test'],
    'excerpt': 'Temporary test post',
    'body': '## Temporary Test Content\nThis is a temporary post.',
    'status': 'draft'
}).encode('utf-8')

req_create = urllib.request.Request('http://127.0.0.1:8080/api/cms/posts', data=post_payload, headers={'Content-Type': 'application/json', 'Authorization': f'Bearer {token}'}, method='POST')
r_create = urllib.request.urlopen(req_create)
created = json.loads(r_create.read().decode('utf-8'))
print(f"[OK] Created temporary post: {created.get('slug')}")

# 4. Test Delete Post API
req_del = urllib.request.Request('http://127.0.0.1:8080/api/cms/posts/test-temp-post-delete', headers={'Authorization': f'Bearer {token}'}, method='DELETE')
r_del = urllib.request.urlopen(req_del)
del_res = json.loads(r_del.read().decode('utf-8'))
print(f"[OK] Delete Post API returned: {del_res}")

print("\nAll CMS Delete features tested and working 100% successfully!")
