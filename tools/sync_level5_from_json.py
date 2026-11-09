# -*- coding: utf-8 -*-
"""Level 5 Mock bank — loaded from tools/expand_data/level5_mock_all.json.

Edit the JSON (or tools/rewrite_l5_vignettes.py) then re-run:
  python3 tools/sync_level5_from_json.py
"""
from pathlib import Path
import json

def load_all():
    path = Path(__file__).resolve().parent / "expand_data" / "level5_mock_all.json"
    return json.loads(path.read_text())

def by_chapter(ch):
    return [q for q in load_all() if q["chapter"] == ch]

if __name__ == "__main__":
    items = load_all()
    assert len(items) == 160
    for c in range(1, 17):
        qs = by_chapter(c)
        assert len(qs) == 10
        assert sum(1 for q in qs if q.get("type") == "multi") == 3
    print("OK", len(items))
