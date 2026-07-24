#!/usr/bin/env python3
"""Build the static manifest used by the research portal."""
from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PORTAL = ROOT / "portal"
OUTPUT = PORTAL / "manifest.json"

INCLUDED_DIRS = [
    "active-vibes",
    "research-directions",
    "research-programs",
    "experiments",
    "field-notes",
    "source-library",
    "idea-bank",
    "unexpected-connections",
    "rejected",
    "dormant",
    "manifests",
    "weekly-synthesis",
    "monthly-theses",
    "templates",
]
ROOT_DOCS = ["README.md", "research-map.md", "VIBE_RESEARCH_MODE.md"]

CATEGORY_LABELS = {
    "active-vibes": "Active Vibes",
    "research-directions": "Research Directions",
    "research-programs": "Research Programs",
    "experiments": "Experiments",
    "field-notes": "Field Notes",
    "source-library": "Source Library",
    "idea-bank": "Idea Bank",
    "unexpected-connections": "Unexpected Connections",
    "rejected": "Rejected",
    "dormant": "Dormant",
    "manifests": "Manifests",
    "weekly-synthesis": "Weekly Synthesis",
    "monthly-theses": "Monthly Theses",
    "templates": "Templates",
    ".": "Overview",
}

FRONTMATTER_RE = re.compile(r"^---\n(.*?)\n---\n", re.S)
HEADING_RE = re.compile(r"^#\s+(.+?)\s*$", re.M)
FIELD_RE = re.compile(r"^[-*]?\s*\*\*(Name|Status|Confidence|Signal|Core Question|Field|Type):\*\*\s*(.+?)\s*$", re.I | re.M)


def strip_frontmatter(text: str) -> str:
    return FRONTMATTER_RE.sub("", text, count=1)


def title_from_path(path: Path, text: str) -> str:
    body = strip_frontmatter(text)
    match = HEADING_RE.search(body)
    if match:
        return match.group(1).strip()
    return path.stem.replace("-", " ").replace("_", " ").title()


def excerpt(text: str, max_len: int = 220) -> str:
    body = strip_frontmatter(text)
    lines = []
    for line in body.splitlines():
        clean = line.strip()
        if not clean or clean.startswith("#") or clean.startswith("|") or clean.startswith("```"):
            continue
        clean = re.sub(r"[*_`>#\[\]()]+", "", clean)
        lines.append(clean)
        if sum(len(x) for x in lines) > max_len:
            break
    joined = " ".join(lines).strip()
    return joined[:max_len].rstrip() + ("…" if len(joined) > max_len else "")


def fields(text: str) -> dict[str, str]:
    found: dict[str, str] = {}
    for key, value in FIELD_RE.findall(text):
        found[key.lower().replace(" ", "_")] = value.strip()
    return found


def document_entry(path: Path) -> dict[str, object]:
    rel = path.relative_to(ROOT).as_posix()
    text = path.read_text(encoding="utf-8", errors="replace")
    category = rel.split("/", 1)[0] if "/" in rel else "."
    stat = path.stat()
    meta = fields(text)
    return {
        "title": title_from_path(path, text),
        "path": rel,
        "category": category,
        "categoryLabel": CATEGORY_LABELS.get(category, category.replace("-", " ").title()),
        "excerpt": excerpt(text),
        "modified": datetime.fromtimestamp(stat.st_mtime, timezone.utc).isoformat(),
        "size": stat.st_size,
        "meta": meta,
    }


def main() -> None:
    docs: list[dict[str, object]] = []
    for root_doc in ROOT_DOCS:
        path = ROOT / root_doc
        if path.exists():
            docs.append(document_entry(path))

    for dirname in INCLUDED_DIRS:
        directory = ROOT / dirname
        if not directory.exists():
            continue
        for path in sorted(directory.rglob("*.md")):
            docs.append(document_entry(path))

    docs.sort(key=lambda item: (str(item["categoryLabel"]), str(item["title"]).lower()))
    categories = []
    for category in [".", *INCLUDED_DIRS]:
        count = sum(1 for doc in docs if doc["category"] == category)
        if count:
            categories.append({
                "id": category,
                "label": CATEGORY_LABELS.get(category, category),
                "count": count,
            })

    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "repository": "aven-pantom/aven-research-lab",
        "documents": docs,
        "categories": categories,
    }
    OUTPUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"wrote {OUTPUT.relative_to(ROOT)} with {len(docs)} documents")


if __name__ == "__main__":
    main()
