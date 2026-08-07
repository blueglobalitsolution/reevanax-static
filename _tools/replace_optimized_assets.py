#!/usr/bin/env python3
"""Replace static site media with optimize_assets versions and remove superseded files."""
from __future__ import annotations

import re
import shutil
from collections import defaultdict
from pathlib import Path

OPT = Path("/home/satish/project/website/revanax/optimize_assets")
STATIC = Path("/home/satish/project/website/revanax/static")
UP = STATIC / "assets" / "uploads"
REPORT = STATIC / "_tools" / "optimize_replace_report.txt"

VIDEO_ROOT = OPT / "Video" / "Slider"


def norm(s: str) -> str:
    s = s.lower()
    s = s.replace("ageing", "aging").replace("agening", "aging")
    s = s.replace("&", "and")
    return re.sub(r"[^a-z0-9]", "", s)


def copy_file(src: Path, dest: Path, actions: list[str]) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    before = dest.stat().st_size if dest.exists() else None
    shutil.copy2(src, dest)
    after = dest.stat().st_size
    if before is None:
        actions.append(f"ADD  {dest.relative_to(UP)}  ({after} bytes) <- {src.relative_to(OPT)}")
    elif before != after:
        actions.append(
            f"REPL {dest.relative_to(UP)}  {before} -> {after}  ({before - after:+d}) <- {src.relative_to(OPT)}"
        )
    else:
        actions.append(f"SAME {dest.relative_to(UP)}  ({after}) <- {src.relative_to(OPT)}")


def index_uploads_mp4() -> dict[str, list[Path]]:
    by: dict[str, list[Path]] = defaultdict(list)
    for f in UP.rglob("*.mp4"):
        by[norm(f.stem)].append(f)
    return by


def is_mobile(p: Path) -> bool:
    return "mobile" in p.stem.lower()


def replace_final(actions: list[str], written: set[Path]) -> None:
    folder = VIDEO_ROOT / "Final"
    by = index_uploads_mp4()
    for src in sorted(folder.glob("*.mp4")):
        key = norm(src.stem)
        # Prefer exact stem matches; also apply to non-mobile same-key files
        targets = [p for p in by.get(key, []) if not is_mobile(p)]
        # Also match keys that equal key + trailing digits stripped? handled by exact key
        if not targets:
            # try without trailing numbers in key already in norm of stem
            actions.append(f"MISS Final/{src.name} (no upload target)")
            continue
        for dest in targets:
            copy_file(src, dest, actions)
            written.add(dest.resolve())


def replace_mobile(actions: list[str], written: set[Path]) -> None:
    folder = VIDEO_ROOT / "Mobile size"
    by = index_uploads_mp4()
    for src in sorted(folder.glob("*.mp4")):
        key = norm(src.stem)  # includes 'mobile'
        targets = list(by.get(key, []))
        # Also try with hyphenated Mobile suffix variants already in norm
        if not targets:
            # create canonical path under 2025/06
            safe = re.sub(r"\s+", "-", src.stem.strip()).replace("--", "-")
            safe = re.sub(r"-+", "-", safe)
            dest = UP / "2025" / "06" / f"{safe}.mp4"
            # normalize Mommy Makeover Mobile .mp4 trailing space already stripped by stem
            copy_file(src, dest, actions)
            written.add(dest.resolve())
            continue
        for dest in targets:
            copy_file(src, dest, actions)
            written.add(dest.resolve())


def replace_desktop(actions: list[str], written: set[Path]) -> None:
    folder = VIDEO_ROOT / "Desktop Size"
    # Explicit preferred destinations (homepage/slider + known WP names)
    explicit = {
        "antiaging": ["2025/05/Anti-Aging-1.mp4"],
        "bodyfitnesstreatment": ["2025/05/Body-FItness-Treatment-1.mp4"],
        "faceprocedures": [
            "2025/05/FACE-PROCEDURES.mp4",
            "2025/05/FACE-PROCEDURES-1.mp4",
            "2025/05/FACE-PROCEDURES-2.mp4",
            # Face-Procedures.mp4 reserved for Final overwrite later
        ],
        "facial": ["2025/03/facial.mp4"],
        "gynecaesthetics": [
            "2025/05/Gynec-Aesthetics.mp4",
            "2025/05/Gynec-Aesthetics-2.0.mp4",
        ],
        "maleaesthetic": ["2025/05/Male-Aesthetic.mp4", "2025/05/Male-Aesthetic-2.mp4"],
        "mommymakeover": ["2025/05/Mommy-Makeover.mp4", "2025/05/Mommy-Makeover-1.mp4"],
        "plasticsurgery": ["2025/05/Plastic-Surgery.mp4", "2025/05/Plastic-Surgery-1.mp4"],
        "skincare": ["2025/05/skin-care.mp4"],
        "tattooremoval": ["2025/05/Tattoo-Removal.mp4", "2025/05/Tattoo-Removal-1.mp4"],
        "carbonfacia": [
            "2025/05/carbon-facia.mp4",
            "2025/05/carbon-facia-1.mp4",
            "2025/05/carbon-facia-2.mp4",
            "2025/05/carbon-facia-3.mp4",
            "2025/06/carbon-facia.mp4",
            "2025/03/carbon-facia.mp4",
        ],
        "hairtreatment": [
            "2025/05/hair-treatment.mp4",
            "2025/05/hair-treatment-1.mp4",
            "2025/05/hair-treatment-2.mp4",
            "2025/05/hair-treatment-3.mp4",
            "2025/03/hair-treatment.mp4",
        ],
    }
    for src in sorted(folder.glob("*.mp4")):
        key = norm(src.stem)
        rels = explicit.get(key)
        if not rels:
            actions.append(f"MISS Desktop/{src.name}")
            continue
        for rel in rels:
            dest = UP / rel
            if not dest.exists() and "Face-Procedures" not in rel:
                # still write known paths
                pass
            copy_file(src, dest, actions)
            written.add(dest.resolve())


def index_gifs() -> dict[str, list[Path]]:
    by: dict[str, list[Path]] = defaultdict(list)
    for f in UP.rglob("*"):
        if f.suffix.lower() != ".gif":
            continue
        by[norm(f.stem)].append(f)
    return by


def best_gif_targets(src: Path, gifs: dict[str, list[Path]]) -> list[Path]:
    key = norm(src.stem)
    hits = list(gifs.get(key, []))
    if hits:
        # Prefer assets/uploads/gif/ full-size (no -100x100 etc.)
        preferred = [
            p
            for p in hits
            if "gif" in p.parts
            and not re.search(r"-\d+x\d+$", p.stem)
        ]
        if preferred:
            return preferred
        full = [p for p in hits if not re.search(r"-\d+x\d+$", p.stem)]
        return full or hits

    # Fuzzy: gif stem startswith or equals after stripping trailing numbers
    soft = []
    for k, ps in gifs.items():
        if k == key or k.startswith(key) or key.startswith(k):
            # avoid tiny thumbs
            for p in ps:
                if re.search(r"-\d+x\d+$", p.stem):
                    continue
                soft.append(p)
    # only accept strong fuzzy if unique-ish
    soft = [p for p in soft if abs(len(norm(p.stem)) - len(key)) <= 3 or key in norm(p.stem) or norm(p.stem) in key]
    # de-dup
    seen = set()
    out = []
    for p in soft:
        r = p.resolve()
        if r in seen:
            continue
        seen.add(r)
        out.append(p)
    return out[:5]


def replace_service_gifs(actions: list[str], written: set[Path], gif_replacements: dict[str, str]) -> None:
    """Copy Services Video mp4s over matching GIF basenames; record URL rewrites gif->mp4."""
    gifs = index_gifs()
    svc = VIDEO_ROOT / "Services Video"
    # Prefer Home Page folder last so category gifs get homepage opts when names collide? 
    # Actually process Home Page first for category names, then others won't overwrite same dest with worse file.
    folders = sorted([p for p in svc.iterdir() if p.is_dir()], key=lambda p: (0 if p.name == "Home Page" else 1, p.name))
    for folder in folders:
        for src in sorted(folder.rglob("*.mp4")):
            targets = best_gif_targets(src, gifs)
            if not targets:
                actions.append(f"MISS Service/{src.relative_to(svc)}")
                continue
            for gif_path in targets:
                mp4_path = gif_path.with_suffix(".mp4")
                copy_file(src, mp4_path, actions)
                written.add(mp4_path.resolve())
                old_url = "/assets/uploads/" + str(gif_path.relative_to(UP)).replace("\\", "/")
                new_url = "/assets/uploads/" + str(mp4_path.relative_to(UP)).replace("\\", "/")
                gif_replacements[old_url] = new_url
                # also map escaped variants handled in rewrite


IMG_TAG_RE = re.compile(
    r"<img(?P<attrs>[^>]*?\bsrc=(?P<q>[\"'])(?P<src>/assets/uploads/[^\"']+\.mp4)(?P=q)[^>]*?)\s*/?>",
    re.I | re.S,
)


def img_to_video(match: re.Match) -> str:
    attrs = match.group("attrs")
    # drop decoding=async (invalid on video); keep loading/class/width/height/alt/src
    attrs = re.sub(r'\sdecoding=(["\'])async\1', "", attrs, flags=re.I)
    if not re.search(r"\bautoplay\b", attrs, re.I):
        attrs += " autoplay"
    if not re.search(r"\bloop\b", attrs, re.I):
        attrs += " loop"
    if not re.search(r"\bmuted\b", attrs, re.I):
        attrs += " muted"
    if not re.search(r"\bplaysinline\b", attrs, re.I):
        attrs += " playsinline"
    return f"<video{attrs}></video>"


def rewrite_html(gif_replacements: dict[str, str], actions: list[str]) -> None:
    if not gif_replacements:
        return
    # longest first
    pairs = sorted(gif_replacements.items(), key=lambda kv: -len(kv[0]))
    pages = 0
    replaced_urls = 0
    converted_imgs = 0
    for html in STATIC.rglob("*.html"):
        if "_tools" in html.parts:
            continue
        text = html.read_text(encoding="utf-8", errors="ignore")
        orig = text
        for old, new in pairs:
            if old in text:
                c = text.count(old)
                text = text.replace(old, new)
                replaced_urls += c
            # escaped JSON form
            old_esc = old.replace("/", "\\/")
            new_esc = new.replace("/", "\\/")
            if old_esc in text:
                c = text.count(old_esc)
                text = text.replace(old_esc, new_esc)
                replaced_urls += c
        if text != orig:
            # convert img tags that now point at our mp4s
            def conv(m: re.Match) -> str:
                nonlocal converted_imgs
                src = m.group("src")
                if src in gif_replacements.values():
                    converted_imgs += 1
                    return img_to_video(m)
                return m.group(0)

            text2, n = IMG_TAG_RE.subn(conv, text)
            text = text2
            html.write_text(text, encoding="utf-8")
            pages += 1
    actions.append(f"HTML rewritten pages={pages} url_replacements={replaced_urls} img_to_video={converted_imgs}")


def ensure_video_css(actions: list[str]) -> None:
    """Inject minimal CSS so converted service videos size like images."""
    css_snippet = (
        "\n/* optimized service media: gif->mp4 */\n"
        "img.attachment-large[src$='.mp4'],\n"
        "video.attachment-large,\n"
        "video.attachment-full,\n"
        "video.size-large,\n"
        "video.size-full {\n"
        "  max-width: 100%;\n"
        "  height: auto;\n"
        "  display: inline-block;\n"
        "  vertical-align: middle;\n"
        "  object-fit: cover;\n"
        "}\n"
    )
    # Prefer theme style if present; else inject into homepage head only is weak.
    # Add a small site css under assets and link from all pages once.
    css_path = STATIC / "assets" / "site-optimized-media.css"
    if not css_path.exists() or "gif->mp4" not in css_path.read_text(encoding="utf-8", errors="ignore"):
        css_path.write_text(css_snippet.lstrip(), encoding="utf-8")
        actions.append(f"WROTE {css_path.relative_to(STATIC)}")

    link_tag = '<link rel="stylesheet" href="/assets/site-optimized-media.css" />'
    linked = 0
    for html in STATIC.rglob("*.html"):
        if "_tools" in html.parts:
            continue
        text = html.read_text(encoding="utf-8", errors="ignore")
        if "site-optimized-media.css" in text:
            continue
        if "</head>" in text:
            text = text.replace("</head>", f"  {link_tag}\n</head>", 1)
            html.write_text(text, encoding="utf-8")
            linked += 1
    actions.append(f"CSS linked in {linked} pages")


def delete_replaced_gifs(gif_replacements: dict[str, str], actions: list[str]) -> None:
    removed = 0
    bytes_freed = 0
    for old_url in gif_replacements:
        rel = old_url[len("/assets/uploads/") :]
        p = UP / rel
        if p.exists():
            bytes_freed += p.stat().st_size
            p.unlink()
            removed += 1
            actions.append(f"DEL  {rel}")
        # also remove size variants of same stem in same folder if unused? skip for safety
    actions.append(f"Deleted replaced GIFs: {removed}, freed {bytes_freed/1024/1024:.1f} MB")


def delete_old_unreferenced(written: set[Path], actions: list[str]) -> None:
    # Collect referenced media URLs after HTML rewrite
    refs: set[str] = set()
    for html in STATIC.rglob("*.html"):
        if "_tools" in html.parts:
            continue
        text = html.read_text(encoding="utf-8", errors="ignore").replace("\\/", "/")
        for m in re.findall(r"/assets/uploads/[^\s\"'?<>)]+", text):
            refs.add(m.split("?")[0])

    freed = 0
    deleted = 0
    kept_written = 0
    for f in list(UP.rglob("*.mp4")) + list(UP.rglob("*.bak")) + list(UP.rglob("*.bak.png")):
        url = "/assets/uploads/" + str(f.relative_to(UP)).replace("\\", "/")
        resolved = f.resolve()
        if resolved in written:
            kept_written += 1
            continue
        if f.suffix.lower() == ".mp4" and any(url == r or url.lower() == r.lower() for r in refs):
            continue
        # delete unreferenced mp4 / bak
        if f.suffix.lower() == ".mp4" or ".bak" in f.name.lower():
            # keep revslider? user asked remove old — delete unreferenced including stock thumbs
            try:
                sz = f.stat().st_size
                f.unlink()
                deleted += 1
                freed += sz
                actions.append(f"DEL  {f.relative_to(UP)} ({sz/1024/1024:.1f} MB)")
            except OSError as e:
                actions.append(f"ERR delete {f}: {e}")
    actions.append(
        f"Cleanup deleted={deleted} freed={freed/1024/1024:.1f} MB kept_written_unreferenced={kept_written}"
    )


def replace_flowers(actions: list[str], written: set[Path]) -> None:
    src = OPT / "flowers2.png"
    if not src.exists():
        return
    for dest in UP.rglob("flowers2.png"):
        copy_file(src, dest, actions)
        written.add(dest.resolve())


def main() -> None:
    actions: list[str] = []
    written: set[Path] = set()
    gif_replacements: dict[str, str] = {}

    actions.append("=== Desktop Size ===")
    replace_desktop(actions, written)
    actions.append("=== Final ===")
    replace_final(actions, written)
    actions.append("=== Mobile size ===")
    replace_mobile(actions, written)
    actions.append("=== flowers2 ===")
    replace_flowers(actions, written)
    actions.append("=== Services Video -> GIF targets ===")
    replace_service_gifs(actions, written, gif_replacements)
    actions.append(f"GIF->MP4 URL maps: {len(gif_replacements)}")
    actions.append("=== Rewrite HTML ===")
    rewrite_html(gif_replacements, actions)
    ensure_video_css(actions)
    actions.append("=== Delete replaced GIFs ===")
    delete_replaced_gifs(gif_replacements, actions)
    actions.append("=== Delete old unreferenced ===")
    delete_old_unreferenced(written, actions)

    REPORT.write_text("\n".join(actions) + "\n", encoding="utf-8")
    print(f"Wrote report {REPORT}")
    # summary lines
    for line in actions:
        if line.startswith("===") or line.startswith("HTML") or line.startswith("Deleted") or line.startswith("Cleanup") or line.startswith("CSS") or line.startswith("GIF"):
            print(line)
    repl = sum(1 for a in actions if a.startswith("REPL"))
    add = sum(1 for a in actions if a.startswith("ADD"))
    miss = sum(1 for a in actions if a.startswith("MISS"))
    print(f"REPL={repl} ADD={add} MISS={miss}")


if __name__ == "__main__":
    main()
