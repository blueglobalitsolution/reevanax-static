# ReevanaX Aesthetic Clinic — Website & CMS Studio

Modern, clean hybrid architecture: Portable Static Frontend + FastAPI Backend & Content Studio CMS.

## Directory Structure

```text
reevanax/
├── frontend/                   # All browser-facing pages & assets
│   ├── index.html              # Homepage
│   ├── sitemap.xml             # XML sitemap
│   ├── assets/                 # uploads/, themes/, plugins/, fonts/
│   ├── admin/                  # Content Studio CMS Panel
│   ├── blogs/                  # Compiled blog post pages
│   └── [treatment-pages]/      # /face-procedures/, /plastic-surgery/, etc.
│
├── backend/                    # FastAPI Production API & static server
│   ├── app.py                  # API endpoints & static middleware
│   ├── database.py             # SQLite DB connection & queries
│   ├── builder.py              # SSG compilation bridge
│   └── routers/                # auth, posts, media, forms
│
├── content/                    # Raw Markdown blog posts
│   └── blogs/*.md              # Articles with YAML frontmatter
│
├── _data/                      # Database & templates
│   ├── cms.db                  # SQLite database (synced with git)
│   ├── smtp_config.json        # SMTP mailer credentials
│   └── post_template_*.html    # Elementor post templates
│
├── tools/                      # Active developer & build scripts
│   ├── build_blogs.py          # Static Site Generator
│   └── archive/                # One-time migration scripts
│
├── tests/                      # Automated test suite
│   ├── test_fastapi_backend.py
│   └── test_cms.py
│
├── run.py                      # Server entry point
└── requirements.txt
```

## Running the Application

```bash
python run.py
```

- **Live Website:** `http://127.0.0.1:8080/`
- **Blogs Overview:** `http://127.0.0.1:8080/blogs/`
- **CMS Admin Studio:** `http://127.0.0.1:8080/admin/`
- **OpenAPI Swagger Docs:** `http://127.0.0.1:8080/docs`

## Compiling Blogs & Sitemap

To manually rebuild all blog posts and sitemap:

```bash
python tools/build_blogs.py
```

