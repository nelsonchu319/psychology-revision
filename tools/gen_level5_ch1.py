# -*- coding: utf-8 -*-
"""DEPRECATED inline bank — Level 5 now lives in tools/expand_data/level5_mock_all.json.
This module re-exports chapter slices for compatibility with older scripts.
"""
from pathlib import Path
import json

def _all():
    return json.loads((Path(__file__).resolve().parent / "expand_data" / "level5_mock_all.json").read_text())


CH1 = [q for q in _all() if q["chapter"] == 1]

if __name__ == "__main__":
    print("CH1", len(CH1))
