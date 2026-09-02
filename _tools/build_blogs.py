#!/usr/bin/env python3
"""
ReevanaX Blog Static Site Generator & SEO Publisher.

Reads Markdown files from `content/blogs/*.md`, parses YAML frontmatter,
and compiles:
  1. Single static post pages at `blogs/<slug>/index.html` (with full authentic Elementor Layout matching Screenshot 1).
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
DATA_DIR = ROOT / "_data"
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

    # Fallback simple parser
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


def markdown_to_elementor_widgets(md: str) -> str:
    """Convert Markdown content into clean, semantic Elementor widgets."""
    lines = md.splitlines()
    widgets = []
    
    current_text_lines = []
    in_list = False
    list_type = "ul"
    
    def flush_text_widget():
        nonlocal current_text_lines, in_list
        if in_list:
            current_text_lines.append(f"</{list_type}>")
            in_list = False
        if current_text_lines:
            html_chunk = "\n".join(current_text_lines).strip()
            if html_chunk:
                widgets.append(f"""<div class="elementor-element elementor-widget elementor-widget-text-editor">
    <div class="elementor-widget-container">
        {html_chunk}
    </div>
</div>""")
            current_text_lines = []

    def format_inline(text: str) -> str:
        # Links: [text](url)
        text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', text)
        # Bold: **text**
        text = re.sub(r'(\*\*|__)(.*?)\1', r'<b>\2</b>', text)
        # Italic: *text*
        text = re.sub(r'(\*|_)(.*?)\1', r'<em>\2</em>', text)
        return text

    for line in lines:
        trimmed = line.strip()
        
        if not trimmed:
            continue

        # In-content Image: ![alt](url)
        img_match = re.match(r'^!\[([^\]]*)\]\(([^)]+)\)$', trimmed)
        if img_match:
            flush_text_widget()
            alt_text = html.escape(img_match.group(1))
            img_src = img_match.group(2)
            widgets.append(f"""<div class="elementor-element elementor-widget elementor-widget-image">
    <div class="elementor-widget-container">
        <img decoding="async" width="780" height="520" src="{img_src}" class="attachment-large size-large" alt="{alt_text}" loading="lazy" style="border-radius:10px; width:100%; height:auto;" />
    </div>
</div>""")
            continue

        # Headings: #, ##, ###, ####
        if trimmed.startswith("#"):
            flush_text_widget()
            level = len(trimmed) - len(trimmed.lstrip("#"))
            level = min(max(level, 2), 4) # clamp to h2, h3, h4
            h_text = format_inline(trimmed.lstrip("#").strip())
            widgets.append(f"""<div class="elementor-element elementor-widget elementor-widget-heading">
    <div class="elementor-widget-container">
        <h{level} class="elementor-heading-title elementor-size-default">{h_text}</h{level}>
    </div>
</div>""")
            continue

        # Horizontal rule
        if trimmed in ("---", "***", "___"):
            flush_text_widget()
            continue

        # Unordered list
        if trimmed.startswith(("* ", "- ", "+ ")):
            if not in_list or list_type != "ul":
                if in_list:
                    current_text_lines.append(f"</{list_type}>")
                current_text_lines.append("<ul>")
                in_list = True
                list_type = "ul"
            item_text = format_inline(trimmed[2:].strip())
            current_text_lines.append(f"<li>{item_text}</li>")
            continue

        # Ordered list
        m_ol = re.match(r'^\d+\.\s+(.*)$', trimmed)
        if m_ol:
            if not in_list or list_type != "ol":
                if in_list:
                    current_text_lines.append(f"</{list_type}>")
                current_text_lines.append("<ol>")
                in_list = True
                list_type = "ol"
            item_text = format_inline(m_ol.group(1).strip())
            current_text_lines.append(f"<li>{item_text}</li>")
            continue

        # Paragraph
        if in_list:
            current_text_lines.append(f"</{list_type}>")
            in_list = False
        p_text = format_inline(trimmed)
        current_text_lines.append(f'<p><span style="font-weight: 400;">{p_text}</span></p>')

    flush_text_widget()
    return "\n".join(widgets)


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
                "body_raw": body,
                "filepath": md_file
            })
        except Exception as e:
            print(f"Error parsing {md_file}: {e}")

    posts.sort(key=lambda p: str(p.get("date", "")), reverse=True)
    return posts


def render_single_post(post: dict, all_posts: list[dict]) -> str:
    """Render authentic Elementor single blog post matching Screenshot 1."""
    title = html.escape(post["title"])
    slug = post["slug"]
    canonical_url = post["seo"].get("canonical_url") or f"{SITE_URL}/blogs/{slug}/"
    meta_title = html.escape(post["seo"].get("meta_title") or f"{post['title']} | ReevanaX")
    meta_desc = html.escape(post["seo"].get("meta_description") or post["excerpt"] or post["title"])
    image_url = urljoin(SITE_URL, post["featured_image"])
    author = html.escape(post["author"])
    category = html.escape(post["category"])
    date_str = str(post["date"])
    
    try:
        dt = datetime.strptime(date_str, "%Y-%m-%d")
        iso_date = dt.isoformat()
    except Exception:
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

    # Convert body into Elementor widgets
    body_widgets = markdown_to_elementor_widgets(post["body_raw"])

    # Recent Posts Sidebar items
    recent_items = []
    for other in all_posts[:5]:
        other_slug = other["slug"]
        other_title = html.escape(other["title"])
        is_current = ' aria-current="page"' if other_slug == slug else ""
        recent_items.append(f'<li><a href="/blogs/{other_slug}/"{is_current}>{other_title}</a></li>')
    recent_posts_html = "\n".join(recent_items)

    # Load authentic head, header, footer templates
    head_template = (DATA_DIR / "post_template_head.html").read_text(encoding="utf-8")
    header_template = (DATA_DIR / "post_template_header.html").read_text(encoding="utf-8")
    footer_template = (DATA_DIR / "post_template_footer.html").read_text(encoding="utf-8")

    # Replace SEO and metadata in head
    head_html = re.sub(r'<title>.*?</title>', lambda m: f'<title>{meta_title}</title>', head_template, flags=re.DOTALL)
    head_html = re.sub(r'<meta name="description" content=".*?" />', lambda m: f'<meta name="description" content="{meta_desc}" />', head_html)
    head_html = re.sub(r'<link rel="canonical" href=".*?" />', lambda m: f'<link rel="canonical" href="{canonical_url}" />', head_html)
    head_html = re.sub(r'<meta property="og:title" content=".*?" />', lambda m: f'<meta property="og:title" content="{meta_title}" />', head_html)
    head_html = re.sub(r'<meta property="og:description" content=".*?" />', lambda m: f'<meta property="og:description" content="{meta_desc}" />', head_html)
    head_html = re.sub(r'<meta property="og:url" content=".*?" />', lambda m: f'<meta property="og:url" content="{canonical_url}" />', head_html)
    head_html = re.sub(r'<meta property="og:image" content=".*?" />', lambda m: f'<meta property="og:image" content="{image_url}" />', head_html)
    head_html = re.sub(r'<meta name="twitter:title" content=".*?" />', lambda m: f'<meta name="twitter:title" content="{meta_title}" />', head_html)
    head_html = re.sub(r'<meta name="twitter:description" content=".*?" />', lambda m: f'<meta name="twitter:description" content="{meta_desc}" />', head_html)
    head_html = re.sub(r'<meta name="twitter:image" content=".*?" />', lambda m: f'<meta name="twitter:image" content="{image_url}" />', head_html)
    head_html = re.sub(r'<script type="application/ld\+json">.*?</script>', lambda m: f'<script type="application/ld+json">\n{schema_json}\n</script>', head_html, flags=re.DOTALL)

    # Construct the Elementor middle post container matching Screenshot 2
    post_container = f"""
<style id="reevanax-single-post-layout">
/* ReevanaX Single Post 2-Column Responsive Layout */
.elementor-single-post-wrapper {{
    background-color: #FFFFFF;
    width: 100%;
    padding: 40px 0 60px 0;
}}
.elementor-single-post-wrapper .elementor-element-bed2013 {{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
}}
.elementor-single-post-wrapper .elementor-element-bed2013 > .e-con-inner {{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
}}
.elementor-single-post-wrapper .elementor-element-ff49071 {{
    flex: 1 1 67%;
    width: 67%;
    max-width: 67%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}}
.elementor-single-post-wrapper .elementor-element-7402674 img,
.elementor-single-post-wrapper .elementor-widget-image img {{
    border-radius: 10px;
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto 25px auto;
}}
.elementor-single-post-wrapper .elementor-heading-title {{
    color: #874D27;
    font-family: "Sora", sans-serif;
    font-weight: 700;
    line-height: 1.35;
    margin-top: 30px;
    margin-bottom: 15px;
}}
.elementor-single-post-wrapper h2.elementor-heading-title {{
    font-size: 28px;
}}
.elementor-single-post-wrapper h3.elementor-heading-title {{
    font-size: 22px;
}}
.elementor-single-post-wrapper h4.elementor-heading-title {{
    font-size: 18px;
}}
.elementor-single-post-wrapper .elementor-widget-text-editor {{
    font-family: "DM Sans", "Poppins", sans-serif;
    font-size: 16px;
    line-height: 1.85;
    color: #383731;
}}
.elementor-single-post-wrapper .elementor-widget-text-editor p {{
    margin-bottom: 18px;
}}
.elementor-single-post-wrapper .elementor-widget-text-editor a {{
    color: #874D27;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
}}
.elementor-single-post-wrapper .elementor-widget-text-editor a:hover {{
    color: #CBAE7D;
}}
.elementor-single-post-wrapper .elementor-element-cf08c52 {{
    flex: 0 0 30%;
    width: 30%;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: sticky;
    top: 100px;
}}
.elementor-single-post-wrapper .elementor-element-f7509df {{
    background-color: #FBFBF2;
    border: 1px solid #CBAE7D;
    border-radius: 10px;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-sizing: border-box;
}}
.elementor-single-post-wrapper .elementor-widget-wp-widget-recent-posts > .elementor-widget-container,
.elementor-single-post-wrapper .elementor-widget-wp-widget-categories > .elementor-widget-container {{
    background-color: #FFFFFF;
    padding: 18px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(135, 77, 39, 0.08);
}}
.elementor-single-post-wrapper .elementor-element-f7509df h5 {{
    color: #874D27;
    font-family: "Sora", sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 14px 0;
    border-bottom: 2px solid #CBAE7D;
    padding-bottom: 6px;
}}
.elementor-single-post-wrapper .elementor-element-f7509df ul {{
    list-style: none;
    padding: 0;
    margin: 0;
}}
.elementor-single-post-wrapper .elementor-element-f7509df ul li {{
    padding: 10px 0;
    border-bottom: 1px solid #F2EEE5;
    font-family: "DM Sans", sans-serif;
    font-size: 14px;
    line-height: 1.5;
}}
.elementor-single-post-wrapper .elementor-element-f7509df ul li:last-child {{
    border-bottom: none;
}}
.elementor-single-post-wrapper .elementor-element-f7509df ul li a {{
    color: #27252A;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
}}
.elementor-single-post-wrapper .elementor-element-f7509df ul li a:hover {{
    color: #874D27;
    padding-left: 4px;
}}

@media (max-width: 991px) {{
    .elementor-single-post-wrapper .elementor-element-bed2013,
    .elementor-single-post-wrapper .elementor-element-bed2013 > .e-con-inner {{
        flex-direction: column !important;
        gap: 30px;
    }}
    .elementor-single-post-wrapper .elementor-element-ff49071,
    .elementor-single-post-wrapper .elementor-element-cf08c52 {{
        width: 100% !important;
        max-width: 100% !important;
        flex: 1 1 100% !important;
        position: static;
    }}
}}
</style>

<div class="elementor-single-post-wrapper">
    <div data-elementor-type="wp-post" class="elementor elementor-28843">
        <div class="elementor-element elementor-element-bed2013 e-flex e-con-boxed e-con e-parent" data-id="bed2013" data-element_type="container">
            <div class="e-con-inner">
                <!-- Main Content Column (Left ~67%) -->
                <div class="elementor-element elementor-element-ff49071 e-con-full e-flex e-con e-child" data-id="ff49071" data-element_type="container">
                    <!-- Featured Banner Image -->
                    <div class="elementor-element elementor-element-7402674 elementor-widget elementor-widget-image" data-id="7402674" data-element_type="widget" data-widget_type="image.default">
                        <div class="elementor-widget-container">
                            <img decoding="async" width="780" height="520" src="{post['featured_image']}" class="attachment-large size-large" alt="{html.escape(post['featured_image_alt'])}" loading="lazy" style="border-radius:10px; width:100%; height:auto;" />
                        </div>
                    </div>

                    <!-- Post Body Content -->
                    {body_widgets}
                </div>

                <!-- Sidebar Column (Right ~33%) -->
                <div class="elementor-element elementor-element-cf08c52 e-con-full e-flex e-con e-child" data-id="cf08c52" data-element_type="container">
                    <div class="elementor-element elementor-element-f7509df e-con-full e-flex e-con e-child" data-id="f7509df" data-element_type="container" data-settings='{{"background_background":"classic"}}'>
                        <!-- Recent Posts Widget -->
                        <div class="elementor-element elementor-element-96251af blog elementor-widget elementor-widget-wp-widget-recent-posts" data-id="96251af" data-element_type="widget" data-widget_type="wp-widget-recent-posts.default">
                            <div class="elementor-widget-container">
                                <h5>Recent Posts</h5>
                                <ul>
                                    {recent_posts_html}
                                </ul>
                            </div>
                        </div>

                        <!-- Categories Widget -->
                        <div class="elementor-element elementor-element-484705e blog elementor-widget elementor-widget-wp-widget-categories" data-id="484705e" data-element_type="widget" data-widget_type="wp-widget-categories.default">
                            <div class="elementor-widget-container">
                                <h5>Categories</h5>
                                <ul>
                                    <li class="cat-item cat-item-140"><a href="/category/haircare-treatment/">Haircare Treatment</a></li>
                                    <li class="cat-item cat-item-139"><a href="/category/skincare-treatment/">Skincare Treatment</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
"""

    return f"""<!DOCTYPE html>
<html lang="en-US">
<head>
{head_html}
</head>
{header_template}
{post_container}
{footer_template}
"""


def render_blog_grid(posts: list[dict]) -> str:
    """Generate the blog articles grid HTML matching native Elementor EAEL design from Screenshot 1."""
    cards_html = []
    for p in posts:
        slug = p["slug"]
        link = f"/blogs/{slug}/"
        title = html.escape(p["title"])
        excerpt = html.escape(p["excerpt"])
        img = p["featured_image"]
        alt = html.escape(p.get("featured_image_alt") or p["title"])
        
        cards_html.append(f"""<article class="eael-grid-post eael-post-grid-column">
        <div class="eael-grid-post-holder">
            <div class="eael-grid-post-holder-inner"><div class="eael-entry-media"><div class="eael-entry-overlay slide-up"><i class="fas fa-link" aria-hidden="true"></i><a href="{link}"></a></div><div class="eael-entry-thumbnail ">
                <img decoding="async" width="780" height="520" src="{img}" class="attachment-full size-full" alt="{alt}" loading="lazy" />
            </div>
        </div><div class="eael-entry-wrapper"><header class="eael-entry-header"><h2 class="eael-entry-title"><a class="eael-grid-post-link" href="{link}" title="{title}">{title}</a></h2></header><div class="eael-entry-content">
                        <div class="eael-grid-post-excerpt"><p>{excerpt}</p></div>
                    </div><div class="eael-entry-footer"><div class="eael-entry-meta"></div></div></div></div>
        </div>
    </article>""")
    return "".join(cards_html)


def build_sitemap(posts: list[dict]) -> None:
    """Build sitemap.xml listing all static pages + blog posts."""
    sitemap_file = ROOT / "sitemap.xml"
    urls = []
    
    for hf in ROOT.rglob("index.html"):
        rel = hf.relative_to(ROOT)
        if "admin" in rel.parts or "video_carousel" in rel.parts:
            continue
        if len(rel.parts) == 1:
            loc = SITE_URL + "/"
        else:
            loc = SITE_URL + "/" + "/".join(rel.parts[:-1]) + "/"
        urls.append(loc)

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
        html_content = render_single_post(p, posts)
        (post_dir / "index.html").write_text(html_content, encoding="utf-8")
        
        # Also maintain root level post folder for backward compatibility
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
