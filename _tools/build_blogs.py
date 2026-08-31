#!/usr/bin/env python3
"""
ReevanaX Blog Static Site Generator & SEO Publisher.

Reads Markdown files from `content/blogs/*.md`, parses YAML frontmatter,
and compiles:
  1. Single static post pages at `blogs/<slug>/index.html` (with full SEO, Schema.org JSON-LD, OpenGraph).
  2. Blog overview grid at `blogs/index.html`.
  3. XML Sitemap at `sitemap.xml`.
"""

from __future__ import annotations

import html
import json
import os
import re
from datetime import datetime
from pathlib import Path
from urllib.parse import quote, urljoin

try:
    import yaml
except ImportError:
    yaml = None

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content" / "blogs"
BLOGS_DIR = ROOT / "blogs"
SITE_URL = "https://reevanax.com"


def parse_frontmatter(text: str) -> tuple[dict, str]:
    """Parse YAML frontmatter and body from Markdown content."""
    if not text.startswith("---"):
        return {}, text

    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, text

    raw_yaml = parts[1]
    body = parts[2].strip()

    if yaml:
        try:
            data = yaml.safe_load(raw_yaml) or {}
            return data, body
        except Exception:
            pass

    # Fallback simple parser if yaml fails
    data = {}
    for line in raw_yaml.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if ":" in line:
            k, v = line.split(":", 1)
            k = k.strip()
            v = v.strip().strip('"').strip("'")
            data[k] = v
    return data, body


def markdown_to_html(md: str) -> str:
    """Fast, clean Markdown to semantic HTML converter."""
    lines = md.splitlines()
    html_out = []
    in_list = False
    list_type = "ul"
    in_table = False
    table_rows = []
    in_code = False
    code_block = []

    def close_list():
        nonlocal in_list, list_type
        if in_list:
            html_out.append(f"</{list_type}>")
            in_list = False

    def close_table():
        nonlocal in_table, table_rows
        if in_table:
            if table_rows:
                html_out.append('<div class="table-responsive"><table class="blog-table">')
                for idx, row in enumerate(table_rows):
                    if idx == 0:
                        html_out.append("<thead><tr>" + "".join(f"<th>{c}</th>" for c in row) + "</tr></thead><tbody>")
                    else:
                        html_out.append("<tr>" + "".join(f"<td>{c}</td>" for c in row) + "</tr>")
                html_out.append("</tbody></table></div>")
            table_rows = []
            in_table = False

    def format_inline(text: str) -> str:
        # Images: ![alt](url)
        text = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', r'<img src="\2" alt="\1" class="blog-inline-img" loading="lazy" />', text)
        # Links: [text](url)
        text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2" class="blog-link">\1</a>', text)
        # Bold: **text** or __text__
        text = re.sub(r'(\*\*|__)(.*?)\1', r'<strong>\2</strong>', text)
        # Italic: *text* or _text_
        text = re.sub(r'(\*|_)(.*?)\1', r'<em>\2</em>', text)
        # Code: `code`
        text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
        return text

    i = 0
    while i < len(lines):
        line = lines[i]
        trimmed = line.strip()

        # Code block toggle
        if trimmed.startswith("```"):
            close_list()
            close_table()
            if in_code:
                code_content = html.escape("\n".join(code_block))
                html_out.append(f'<pre class="blog-code-block"><code>{code_content}</code></pre>')
                code_block = []
                in_code = False
            else:
                in_code = True
            i += 1
            continue

        if in_code:
            code_block.append(line)
            i += 1
            continue

        if not trimmed:
            close_list()
            close_table()
            i += 1
            continue

        # Horizontal rule
        if trimmed in ("---", "***", "___"):
            close_list()
            close_table()
            html_out.append('<hr class="blog-divider" />')
            i += 1
            continue

        # Headings
        if trimmed.startswith("#"):
            close_list()
            close_table()
            level = len(trimmed) - len(trimmed.lstrip("#"))
            level = min(level, 6)
            title_text = format_inline(trimmed[level:].strip())
            html_out.append(f'<h{level} class="blog-h{level}">{title_text}</h{level}>')
            i += 1
            continue

        # Blockquote
        if trimmed.startswith(">"):
            close_list()
            close_table()
            quote_text = format_inline(trimmed.lstrip(">").strip())
            html_out.append(f'<blockquote class="blog-blockquote"><p>{quote_text}</p></blockquote>')
            i += 1
            continue

        # Unordered list item
        if trimmed.startswith(("* ", "- ", "+ ")):
            close_table()
            if not in_list or list_type != "ul":
                close_list()
                html_out.append('<ul class="blog-list">')
                in_list = True
                list_type = "ul"
            item_text = format_inline(trimmed[2:].strip())
            html_out.append(f'<li>{item_text}</li>')
            i += 1
            continue

        # Ordered list item
        m_ol = re.match(r'^\d+\.\s+(.*)$', trimmed)
        if m_ol:
            close_table()
            if not in_list or list_type != "ol":
                close_list()
                html_out.append('<ol class="blog-list">')
                in_list = True
                list_type = "ol"
            item_text = format_inline(m_ol.group(1).strip())
            html_out.append(f'<li>{item_text}</li>')
            i += 1
            continue

        # Table row
        if trimmed.startswith("|") and trimmed.endswith("|"):
            close_list()
            cells = [format_inline(c.strip()) for c in trimmed[1:-1].split("|")]
            # Check if separator row (e.g. |---|---|)
            if all(set(c.replace(":", "").replace("-", "")) == set() for c in cells if c):
                i += 1
                continue
            if not in_table:
                in_table = True
                table_rows = []
            table_rows.append(cells)
            i += 1
            continue

        # Normal Paragraph
        close_list()
        close_table()
        p_text = format_inline(trimmed)
        html_out.append(f'<p class="blog-p">{p_text}</p>')
        i += 1

    close_list()
    close_table()
    return "\n".join(html_out)


def get_all_posts() -> list[dict]:
    """Load and sort all blog posts by date descending."""
    posts = []
    if not CONTENT_DIR.exists():
        return posts

    for md_file in CONTENT_DIR.glob("*.md"):
        try:
            content = md_file.read_text(encoding="utf-8")
            meta, body = parse_frontmatter(content)
            slug = meta.get("slug") or md_file.stem
            posts.append({
                "slug": slug,
                "title": meta.get("title", "Untitled Post"),
                "date": meta.get("date", "2026-01-01"),
                "author": meta.get("author", "Dr. ReevanaX Medical Team"),
                "category": meta.get("category", "Skincare Treatment"),
                "tags": meta.get("tags") or ["ReevanaX Surat"],
                "featured_image": meta.get("featured_image", "/assets/uploads/2025/12/01Banner-2.jpg"),
                "featured_image_alt": meta.get("featured_image_alt", meta.get("title", "")),
                "excerpt": meta.get("excerpt", ""),
                "seo": meta.get("seo") or {},
                "body_html": markdown_to_html(body),
                "filepath": md_file
            })
        except Exception as e:
            print(f"Error parsing {md_file}: {e}")

    posts.sort(key=lambda p: str(p.get("date", "")), reverse=True)
    return posts


def render_single_post(post: dict) -> str:
    """Render a standalone, high-SEO static HTML page for a single blog post."""
    title = html.escape(post["title"])
    slug = post["slug"]
    canonical_url = post["seo"].get("canonical_url") or f"{SITE_URL}/blogs/{slug}/"
    meta_title = html.escape(post["seo"].get("meta_title") or f"{post['title']} – ReevanaX Surat")
    meta_desc = html.escape(post["seo"].get("meta_description") or post["excerpt"] or post["title"])
    image_url = urljoin(SITE_URL, post["featured_image"])
    author = html.escape(post["author"])
    category = html.escape(post["category"])
    date_str = str(post["date"])
    
    # Format readable date
    try:
        dt = datetime.strptime(date_str, "%Y-%m-%d")
        readable_date = dt.strftime("%B %d, %Y")
        iso_date = dt.isoformat()
    except Exception:
        readable_date = date_str
        iso_date = date_str

    # JSON-LD Schema.org
    schema_json = json.dumps({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonical_url
        },
        "headline": post["title"],
        "description": meta_desc,
        "image": [image_url],
        "datePublished": iso_date,
        "dateModified": iso_date,
        "author": {
            "@type": "Organization",
            "name": author,
            "url": SITE_URL
        },
        "publisher": {
            "@type": "Organization",
            "name": "ReevanaX Clinic",
            "logo": {
                "@type": "ImageObject",
                "url": f"{SITE_URL}/assets/uploads/2025/04/cropped-favicon-192x192.png"
            }
        }
    }, indent=2)

    # Tags HTML
    tags_html = "".join(f'<span class="blog-tag-pill">{html.escape(t)}</span>' for t in post.get("tags", []))

    return f"""<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    
    <!-- Primary SEO Meta Tags -->
    <title>{meta_title}</title>
    <meta name="description" content="{meta_desc}" />
    <link rel="canonical" href="{canonical_url}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{meta_title}" />
    <meta property="og:description" content="{meta_desc}" />
    <meta property="og:url" content="{canonical_url}" />
    <meta property="og:site_name" content="ReevanaX" />
    <meta property="og:image" content="{image_url}" />
    <meta property="article:published_time" content="{iso_date}" />
    <meta property="article:section" content="{category}" />

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{meta_title}" />
    <meta name="twitter:description" content="{meta_desc}" />
    <meta name="twitter:image" content="{image_url}" />

    <!-- Schema.org JSON-LD Structured Data -->
    <script type="application/ld+json">
{schema_json}
    </script>

    <!-- Core Stylesheets & Icons -->
    <link rel="icon" href="/assets/uploads/2025/04/cropped-favicon-32x32.png" sizes="32x32" />
    <link rel="icon" href="/assets/uploads/2025/04/cropped-favicon-192x192.png" sizes="192x192" />
    <link rel='stylesheet' href='/assets/plugins/elementor/assets/css/frontend.min.css' media='all' />
    <link rel='stylesheet' href='/assets/themes/mellis/style.css' media='all' />
    <link rel='stylesheet' href='/assets/site-optimized-media.css' media='all' />
    
    <style>
        /* Single Post ReevanaX Luxury Layout Styling */
        .blog-article-wrapper {{
            background: #FDFBF2;
            color: #27252A;
            font-family: "Poppins", sans-serif;
            padding-bottom: 60px;
        }}
        .blog-hero {{
            background: #864D26;
            color: #FFFFFF;
            padding: 60px 20px 80px 20px;
            text-align: center;
            position: relative;
        }}
        .blog-breadcrumb {{
            font-size: 14px;
            color: #CEAE80;
            margin-bottom: 20px;
        }}
        .blog-breadcrumb a {{
            color: #CEAE80;
            text-decoration: none;
        }}
        .blog-breadcrumb a:hover {{
            text-decoration: underline;
        }}
        .blog-category-badge {{
            display: inline-block;
            background: #CEAE80;
            color: #864D26;
            font-weight: 700;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 6px 16px;
            border-radius: 50px;
            margin-bottom: 20px;
        }}
        .blog-main-title {{
            font-family: "Marcellus", serif;
            font-size: 40px;
            line-height: 1.3em;
            color: #FFFFFF;
            max-width: 900px;
            margin: 0 auto 20px auto;
        }}
        .blog-meta-info {{
            font-size: 14px;
            color: #E2E1DA;
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }}
        .blog-content-container {{
            max-width: 880px;
            margin: -40px auto 0 auto;
            background: #FFFFFF;
            border-radius: 15px;
            padding: 40px 45px;
            box-shadow: 0 10px 40px rgba(134, 77, 38, 0.08);
            border: 1px solid rgba(206, 174, 128, 0.3);
            position: relative;
            z-index: 10;
        }}
        .blog-featured-banner {{
            width: 100%;
            border-radius: 12px;
            margin-bottom: 35px;
            object-fit: cover;
            max-height: 480px;
            border: 1px solid #CEAE80;
        }}
        .blog-body-text {{
            font-size: 17px;
            line-height: 1.85em;
            color: #383731;
        }}
        .blog-body-text .blog-h2 {{
            font-family: "Sora", sans-serif;
            font-size: 28px;
            color: #864D26;
            margin-top: 40px;
            margin-bottom: 15px;
            border-bottom: 2px solid #CEAE80;
            padding-bottom: 8px;
        }}
        .blog-body-text .blog-h3 {{
            font-family: "Sora", sans-serif;
            font-size: 22px;
            color: #864D26;
            margin-top: 30px;
            margin-bottom: 12px;
        }}
        .blog-body-text .blog-p {{
            margin-bottom: 20px;
        }}
        .blog-body-text .blog-list {{
            margin-bottom: 25px;
            padding-left: 25px;
        }}
        .blog-body-text .blog-list li {{
            margin-bottom: 10px;
            line-height: 1.7em;
        }}
        .blog-body-text .blog-blockquote {{
            border-left: 4px solid #CEAE80;
            background: #FBFBF2;
            padding: 18px 24px;
            margin: 30px 0;
            font-style: italic;
            border-radius: 0 8px 8px 0;
            color: #864D26;
        }}
        .blog-body-text .blog-divider {{
            border: 0;
            height: 1px;
            background: #E2E1DA;
            margin: 40px 0;
        }}
        .blog-table {{
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
            background: #FDFBF2;
            border-radius: 8px;
            overflow: hidden;
        }}
        .blog-table th, .blog-table td {{
            padding: 12px 16px;
            border: 1px solid #CEAE80;
            text-align: left;
        }}
        .blog-table th {{
            background: #864D26;
            color: #FFFFFF;
        }}
        .blog-tags-section {{
            margin-top: 40px;
            padding-top: 25px;
            border-top: 1px solid #E2E1DA;
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }}
        .blog-tag-pill {{
            background: #F0E8E8;
            color: #864D26;
            font-size: 13px;
            padding: 5px 12px;
            border-radius: 20px;
            font-weight: 500;
        }}
        .blog-cta-banner {{
            margin-top: 50px;
            background: #864D26;
            color: #FFFFFF;
            border-radius: 12px;
            padding: 35px;
            text-align: center;
        }}
        .blog-cta-banner h3 {{
            font-family: "Marcellus", serif;
            font-size: 28px;
            color: #CEAE80;
            margin: 0 0 10px 0;
        }}
        .blog-cta-banner p {{
            font-size: 16px;
            color: #FFFFFF;
            margin-bottom: 20px;
        }}
        .blog-cta-btn {{
            display: inline-block;
            background: #CEAE80;
            color: #864D26;
            font-weight: 700;
            font-size: 16px;
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            transition: all 0.3s ease;
        }}
        .blog-cta-btn:hover {{
            background: #FFFFFF;
            color: #864D26;
            transform: translateY(-2px);
        }}
        @media (max-width: 767px) {{
            .blog-main-title {{
                font-size: 26px;
            }}
            .blog-content-container {{
                margin: -20px 15px 0 15px;
                padding: 25px 20px;
            }}
            .blog-body-text {{
                font-size: 15px;
            }}
        }}
    </style>
</head>
<body class="blog-single-page">

    <!-- Top Header -->
    <header class="site-header">
        <div class="elementor-element elementor-element-cab6064" style="display:flex; justify-content:space-between; align-items:center; padding:15px 30px; background:#FFFFFF; border-bottom:1px solid rgba(134, 77, 38, 0.1);">
            <div class="site-logo">
                <a href="/"><img src="/assets/uploads/2025/04/cropped-favicon-192x192.png" alt="ReevanaX" style="height:40px; width:auto;" /></a>
            </div>
            <nav style="display:flex; gap:25px; align-items:center;">
                <a href="/" style="color:#864D26; font-weight:600; text-decoration:none;">Home</a>
                <a href="/about-us/" style="color:#864D26; font-weight:600; text-decoration:none;">About</a>
                <a href="/face-procedures/" style="color:#864D26; font-weight:600; text-decoration:none;">Face</a>
                <a href="/plastic-surgery/" style="color:#864D26; font-weight:600; text-decoration:none;">Surgery</a>
                <a href="/blogs/" style="color:#864D26; font-weight:700; text-decoration:none; border-bottom:2px solid #864D26;">Blogs</a>
                <a href="/book-an-appointment/" style="background:#864D26; color:#FFFFFF; padding:8px 20px; border-radius:50px; text-decoration:none; font-weight:600;">Book Now</a>
            </nav>
        </div>
    </header>

    <!-- Main Article Content Wrapper -->
    <div class="blog-article-wrapper">
        <!-- Hero Header -->
        <div class="blog-hero">
            <div class="blog-breadcrumb">
                <a href="/">Home</a> &nbsp;/&nbsp; <a href="/blogs/">Blogs</a> &nbsp;/&nbsp; <span>{title}</span>
            </div>
            <span class="blog-category-badge">{category}</span>
            <h1 class="blog-main-title">{title}</h1>
            <div class="blog-meta-info">
                <span>By <strong>{author}</strong></span>
                <span>•</span>
                <span>{readable_date}</span>
                <span>•</span>
                <span>ReevanaX Surat</span>
            </div>
        </div>

        <!-- Article Body Card -->
        <article class="blog-content-container">
            <img src="{post['featured_image']}" alt="{html.escape(post['featured_image_alt'])}" class="blog-featured-banner" />
            
            <div class="blog-body-text">
                {post['body_html']}
            </div>

            <!-- Tags Section -->
            <div class="blog-tags-section">
                <strong>Tags:</strong>
                {tags_html}
            </div>

            <!-- Consultation Call to Action -->
            <div class="blog-cta-banner">
                <h3>Transform Your Look with ReevanaX</h3>
                <p>Schedule a personal consultation with our aesthetic and dermatology specialists in Surat.</p>
                <a href="/book-an-appointment/" class="blog-cta-btn">Book An Appointment Today</a>
            </div>
        </article>
    </div>

    <!-- Footer -->
    <footer style="background:#864D26; color:#FFFFFF; padding:40px 20px; text-align:center; font-family:'Poppins', sans-serif;">
        <p style="margin:0 0 10px 0; color:#CEAE80; font-size:18px; font-weight:600;">ReevanaX – Your Health. Your Beauty. Our Priority.</p>
        <p style="margin:0 0 15px 0; font-size:14px; color:#E2E1DA;">Advanced Dermatology, Hair Care, Plastic Surgery & Aesthetic Clinic in Surat, Gujarat.</p>
        <p style="margin:0; font-size:13px; color:#CEAE80;">&copy; {datetime.now().year} ReevanaX. All rights reserved.</p>
    </footer>

</body>
</html>
"""


def render_blog_grid(posts: list[dict]) -> str:
    """Generate the blog articles grid HTML to update blogs/index.html."""
    cards_html = []
    for p in posts:
        slug = p["slug"]
        link = f"/blogs/{slug}/"
        title = html.escape(p["title"])
        excerpt = html.escape(p["excerpt"])
        img = p["featured_image"]
        alt = html.escape(p["featured_image_alt"])
        category = html.escape(p["category"])
        date_str = p["date"]
        
        cards_html.append(f"""
        <article class="eael-grid-post eael-post-grid-column" style="margin-bottom:30px;">
            <div class="eael-grid-post-holder" style="background:#FFFFFF; border-radius:12px; overflow:hidden; border:1px solid #CEAE80; box-shadow:0 4px 20px rgba(134,77,38,0.06);">
                <div class="eael-grid-post-holder-inner">
                    <div class="eael-entry-media" style="position:relative; overflow:hidden;">
                        <a href="{link}">
                            <img src="{img}" alt="{alt}" style="width:100%; height:240px; object-fit:cover; display:block;" loading="lazy" />
                        </a>
                    </div>
                    <div class="eael-entry-wrapper" style="padding:25px 20px;">
                        <span style="display:inline-block; background:#CEAE80; color:#864D26; font-size:11px; font-weight:700; text-transform:uppercase; padding:4px 10px; border-radius:4px; margin-bottom:10px;">{category}</span>
                        <header class="eael-entry-header" style="margin-bottom:12px;">
                            <h2 class="eael-entry-title" style="font-size:20px; line-height:1.4em; font-family:'Sora', sans-serif; margin:0;">
                                <a class="eael-grid-post-link" href="{link}" style="color:#864D26; text-decoration:none;">{title}</a>
                            </h2>
                        </header>
                        <div class="eael-entry-content" style="color:#666; font-size:14px; line-height:1.6em; margin-bottom:15px;">
                            <p style="margin:0;">{excerpt}</p>
                        </div>
                        <div class="eael-entry-footer" style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #F0E8E8; padding-top:12px; font-size:12px; color:#999;">
                            <span>{date_str}</span>
                            <a href="{link}" style="color:#864D26; font-weight:700; text-decoration:none;">Read More &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        """)
    return "\n".join(cards_html)


def build_sitemap(posts: list[dict]) -> None:
    """Build sitemap.xml listing all static pages + blog posts."""
    sitemap_file = ROOT / "sitemap.xml"
    urls = []
    
    # 1. Add all static HTML pages
    for hf in ROOT.rglob("index.html"):
        rel = hf.relative_to(ROOT)
        if "admin" in rel.parts or "video_carousel" in rel.parts:
            continue
        if len(rel.parts) == 1:
            loc = SITE_URL + "/"
        else:
            loc = SITE_URL + "/" + "/".join(rel.parts[:-1]) + "/"
        urls.append(loc)

    # Deduplicate and sort
    urls = sorted(list(set(urls)))
    
    xml_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ]
    today = datetime.now().strftime("%Y-%m-%d")
    
    for u in urls:
        priority = "1.0" if u == f"{SITE_URL}/" else ("0.8" if "/blogs/" in u else "0.7")
        xml_lines.append(f"""  <url>
    <loc>{u}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
  </url>""")
    
    xml_lines.append('</urlset>')
    sitemap_file.write_text("\n".join(xml_lines), encoding="utf-8")
    print(f"Generated {sitemap_file.name} with {len(urls)} URLs.")


def update_blogs_overview(posts: list[dict]) -> None:
    """Update the blog cards grid in blogs/index.html."""
    blogs_index_file = BLOGS_DIR / "index.html"
    if not blogs_index_file.exists():
        return
    content = blogs_index_file.read_text(encoding="utf-8")
    grid_html = render_blog_grid(posts)
    
    pattern = re.compile(r'(<div id="eael-post-grid-4feb98f" class="eael-post-grid-container">\s*<div[^>]*>).*?(</div>\s*<div class="clearfix"></div>)', re.DOTALL)
    if pattern.search(content):
        replacement = r'\g<1>' + grid_html + r'\g<2>'
        new_content = pattern.sub(replacement, content)
        blogs_index_file.write_text(new_content, encoding="utf-8")
        print("  [OK] Updated blogs/index.html with current post grid.")


def build_all() -> None:
    """Main build function to compile all blog posts and static assets."""
    print("=== BUILDING REEVANAX BLOGS & SITEMAP ===")
    posts = get_all_posts()
    print(f"Found {len(posts)} blog posts in content/blogs/")

    for p in posts:
        slug = p["slug"]
        post_dir = BLOGS_DIR / slug
        post_dir.mkdir(parents=True, exist_ok=True)
        html_content = render_single_post(p)
        (post_dir / "index.html").write_text(html_content, encoding="utf-8")
        
        # Also maintain root level post folder for backward compatibility if it exists
        root_post_dir = ROOT / slug
        if root_post_dir.exists():
            (root_post_dir / "index.html").write_text(html_content, encoding="utf-8")
            
        print(f"  [OK] Compiled: /blogs/{slug}/index.html")

    # Update blogs overview page
    update_blogs_overview(posts)

    # Update sitemap
    build_sitemap(posts)
    print("=== BLOG BUILD COMPLETE ===")


if __name__ == "__main__":
    build_all()
