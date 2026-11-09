# -*- coding: utf-8 -*-
"""DEPRECATED inline bank — Level 5 now lives in tools/expand_data/level5_mock_all.json.
This module re-exports chapter slices for compatibility with older scripts.
"""
from pathlib import Path
import json

def _all():
    return json.loads((Path(__file__).resolve().parent / "expand_data" / "level5_mock_all.json").read_text())


def all_ch2_8():
    return [q for q in _all() if 2 <= q["chapter"] <= 8]

CH2 = [q for q in _all() if q["chapter"] == 2]
CH3 = [q for q in _all() if q["chapter"] == 3]
CH4 = [q for q in _all() if q["chapter"] == 4]
CH5 = [q for q in _all() if q["chapter"] == 5]
CH6 = [q for q in _all() if q["chapter"] == 6]
CH7 = [q for q in _all() if q["chapter"] == 7]
CH8 = [q for q in _all() if q["chapter"] == 8]

if __name__ == "__main__":
    items = all_ch2_8()
    assert all(len([q for q in items if q["chapter"]==c])==10 for c in range(2,9))
    print("OK", len(items))
