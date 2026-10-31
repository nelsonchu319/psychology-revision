"""Shared nav for Ch 1–16."""
from __future__ import annotations
import re
from pathlib import Path

ROOT = Path("/workspace/psychology-revision")

CHAPTERS = [
    (1, "Introduction to Psychology", "8–34"),
    (2, "Psychological Research", "36–70"),
    (3, "Biopsychology", "72–108"),
    (4, "States of Consciousness", "110–144"),
    (5, "Sensation and Perception", "145–172"),
    (6, "Learning", "181–206"),
    (7, "Thinking and Intelligence", "214–246"),
    (8, "Memory", "248–278"),
    (9, "Lifespan Development", "280–320"),
    (10, "Emotion and Motivation", "322–358"),
    (11, "Personality", "360–398"),
    (12, "Social Psychology", "400–444"),
    (13, "Industrial-Organizational Psychology", "446–482"),
    (14, "Stress, Lifestyle, and Health", "484–534"),
    (15, "Psychological Disorders", "536–596"),
    (16, "Therapy and Treatment", "598–632"),
]

def nav_html(active: str, prefix: str) -> str:
    """active: 'home'|'quiz'|'wrongbook'|'cN' """
    lines = []
    def link(key, href, label):
        cls = ' class="active"' if active == key else ""
        lines.append(f'        <a{cls} href="{prefix}{href}">{label}</a>')
    link("home", "index.html", "Home")
    for n, title, _ in CHAPTERS:
        link(f"c{n}", f"chapters/ch{n}.html", f"Ch {n}")
    link("quiz", "quiz.html", "Random Quiz")
    wb_cls = ' class="active"' if active == "wrongbook" else ""
    lines.append(f'        <a{wb_cls} href="{prefix}wrongbook.html">錯題簿 <span class="wrongbook-badge" hidden></span></a>')
    return "\n".join(lines)

def replace_nav(html: str, active: str, prefix: str) -> str:
    inner = nav_html(active, prefix)
    return re.sub(
        r'(<nav class="nav">)(.*?)(</nav>)',
        r'\1\n' + inner + r'\n      \3',
        html,
        count=1,
        flags=re.S,
    )

def patch_all_nav():
    # root pages
    for name, active in [("index.html","home"),("quiz.html","quiz"),("wrongbook.html","wrongbook")]:
        path = ROOT / name
        html = path.read_text(encoding="utf-8")
        path.write_text(replace_nav(html, active, ""), encoding="utf-8")
    # chapter pages
    for n,_,_ in CHAPTERS:
        path = ROOT / "chapters" / f"ch{n}.html"
        if not path.exists():
            continue
        html = path.read_text(encoding="utf-8")
        path.write_text(replace_nav(html, f"c{n}", "../"), encoding="utf-8")
    print("nav patched for existing pages")

if __name__ == "__main__":
    patch_all_nav()
