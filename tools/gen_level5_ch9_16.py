# -*- coding: utf-8 -*-
"""DEPRECATED inline bank — Level 5 now lives in tools/expand_data/level5_mock_all.json.
This module re-exports chapter slices for compatibility with older scripts.
"""
from pathlib import Path
import json

def _all():
    return json.loads((Path(__file__).resolve().parent / "expand_data" / "level5_mock_all.json").read_text())


def all_ch9_16():
    return [q for q in _all() if 9 <= q["chapter"] <= 16]

CH9 = [q for q in _all() if q["chapter"] == 9]
CH10 = [q for q in _all() if q["chapter"] == 10]
CH11 = [q for q in _all() if q["chapter"] == 11]
CH12 = [q for q in _all() if q["chapter"] == 12]
CH13 = [q for q in _all() if q["chapter"] == 13]
CH14 = [q for q in _all() if q["chapter"] == 14]
CH15 = [q for q in _all() if q["chapter"] == 15]
CH16 = [q for q in _all() if q["chapter"] == 16]

if __name__ == "__main__":
    items = all_ch9_16()
    assert all(len([q for q in items if q["chapter"]==c])==10 for c in range(9,17))
    for c in range(9,17):
        qs = [q for q in items if q["chapter"]==c]
        assert sum(1 for q in qs if q.get("type")=="multi") == 3
    print("OK", len(items))
