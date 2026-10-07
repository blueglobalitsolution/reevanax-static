import urllib.request
import json

BASE = "http://127.0.0.1:8080"

print("================================================================")
print("     TESTING FASTAPI BACKEND & FRONTEND INTEGRATION             ")
print("================================================================\n")

# 1. Test Swagger Docs
r_docs = urllib.request.urlopen(f"{BASE}/docs")
print(f"[OK] Swagger Docs (/docs): Status {r_docs.status}")

# 2. Test OpenAPI JSON
r_openapi = urllib.request.urlopen(f"{BASE}/openapi.json")
openapi_data = json.loads(r_openapi.read().decode('utf-8'))
print(f"[OK] OpenAPI Schema: {openapi_data.get('info', {}).get('title')} v{openapi_data.get('info', {}).get('version')}")

# 3. Test Static Homepage
r_home = urllib.request.urlopen(f"{BASE}/")
print(f"[OK] Homepage (/): Status {r_home.status} (Size: {len(r_home.read())} bytes)")

# 4. Test Blog Grid
r_blogs = urllib.request.urlopen(f"{BASE}/blogs/")
print(f"[OK] Blogs Grid (/blogs/): Status {r_blogs.status} (Size: {len(r_blogs.read())} bytes)")

# 5. Test Single Blog Post
r_post = urllib.request.urlopen(f"{BASE}/blogs/best-skincare-treatment-in-surat/")
print(f"[OK] Single Post (/blogs/best-skincare-treatment-in-surat/): Status {r_post.status}")

# 6. Test Admin Studio UI
r_admin = urllib.request.urlopen(f"{BASE}/admin/")
print(f"[OK] Admin Studio (/admin/): Status {r_admin.status}")

# 7. Test CMS Login API
data = json.dumps({'email': 'admin@reevanax.com', 'password': 'admin123'}).encode('utf-8')
req_login = urllib.request.Request(f"{BASE}/api/cms/login", data=data, headers={'Content-Type': 'application/json'}, method='POST')
r_login = urllib.request.urlopen(req_login)
login_res = json.loads(r_login.read().decode('utf-8'))
token = login_res['token']
print(f"[OK] CMS Login API: User {login_res['user']['email']} Authenticated!")

# 8. Test CMS Stats API
req_stats = urllib.request.Request(f"{BASE}/api/cms/stats", headers={'Authorization': f'Bearer {token}'})
r_stats = urllib.request.urlopen(req_stats)
print(f"[OK] CMS Stats API: {json.loads(r_stats.read().decode('utf-8'))}")

# 9. Test CMS Posts API
req_posts = urllib.request.Request(f"{BASE}/api/cms/posts", headers={'Authorization': f'Bearer {token}'})
r_posts = urllib.request.urlopen(req_posts)
posts_res = json.loads(r_posts.read().decode('utf-8'))
print(f"[OK] CMS Posts API: Retrieved {len(posts_res.get('posts', []))} articles.")

# 10. Test CMS Media API
req_media = urllib.request.Request(f"{BASE}/api/cms/media", headers={'Authorization': f'Bearer {token}'})
r_media = urllib.request.urlopen(req_media)
print(f"[OK] CMS Media API: Retrieved {len(json.loads(r_media.read().decode('utf-8')).get('media', []))} files.")

print("\n================================================================")
print("  ALL 10 CHECKS PASSED: FASTAPI & FRONTEND 100% OPERATIONAL!   ")
print("================================================================")
