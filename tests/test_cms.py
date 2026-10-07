import urllib.request
import json

# 1. Login
data = json.dumps({'email': 'admin@reevanax.com', 'password': 'admin123'}).encode('utf-8')
req = urllib.request.Request('http://127.0.0.1:8080/api/cms/login', data=data, headers={'Content-Type': 'application/json'}, method='POST')
resp = urllib.request.urlopen(req)
body = json.loads(resp.read().decode('utf-8'))
token = body['token']
print("Login success! User:", body['user']['email'])

# 2. Stats
req_stats = urllib.request.Request('http://127.0.0.1:8080/api/cms/stats', headers={'Authorization': f'Bearer {token}'})
r_stats = urllib.request.urlopen(req_stats)
print("Stats response:", json.loads(r_stats.read().decode('utf-8')))

# 3. Posts
req_posts = urllib.request.Request('http://127.0.0.1:8080/api/cms/posts', headers={'Authorization': f'Bearer {token}'})
r_posts = urllib.request.urlopen(req_posts)
posts_body = json.loads(r_posts.read().decode('utf-8'))
print(f"Posts response (200 OK): Found {len(posts_body.get('posts', []))} posts")
for p in posts_body.get('posts', []):
    print(f"  [{p['status'].upper()}] {p['title']} ({p['slug']}) -> tags: {p['tags']}")
