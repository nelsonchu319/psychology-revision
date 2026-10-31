#!/usr/bin/env python3
"""Rebuild questions.js with length-balanced L3/L4 and hardened L4 stems."""
import json, re
from pathlib import Path

ROOT = Path("/workspace/psychology-revision")
OLD = (ROOT / "data/questions.js").read_text()
m = re.search(r"window\.PSYCH_QUESTIONS\s*=\s*(\[.*\]);?\s*$", OLD, re.S)
old = json.loads(m.group(1))
l12 = [q for q in old if q["level"] <= 2]

def lens(o):
    return [len(x) for x in o]

def sole(opts, c):
    L = lens(opts)
    return L[c] == max(L) and L.count(max(L)) == 1

def check(q, tag):
    L = lens(q["options"])
    sp = max(L) - min(L)
    if sp > 12:
        raise SystemExit(f"{tag} spread {sp} {L}\n" + "\n".join(f"{i}:{L[i]} {o}" for i,o in enumerate(q["options"])))
    for i in range(4):
        if i == q["correct"]:
            continue
        if str(i) not in q["wrongFeedback"]:
            raise SystemExit(f"{tag} missing wf {i}")

def audit(items, label):
    sole_n = 0
    spreads = []
    corr = []
    dist = []
    pos = [0, 0, 0, 0]
    for q in items:
        L = lens(q["options"])
        spreads.append(max(L) - min(L))
        if L[q["correct"]] == max(L) and L.count(max(L)) == 1:
            sole_n += 1
        corr.append(L[q["correct"]])
        for i, l in enumerate(L):
            if i != q["correct"]:
                dist.append(l)
        pos[q["correct"]] += 1
    n = len(items)
    print(f"{label}: n={n} sole={sole_n} ({100*sole_n/n:.1f}%) avgC={sum(corr)/len(corr):.1f} avgD={sum(dist)/len(dist):.1f} medSpread={sorted(spreads)[n//2]} maxSpread={max(spreads)} >12={sum(1 for s in spreads if s>12)} >8={sum(1 for s in spreads if s>8)} pos={pos}")
    return sole_n, n

def Q(chapter, level, section, question, options, correct, correctFeedback, wrongFeedback, page=None):
    item = {
        "chapter": chapter,
        "level": level,
        "section": section,
        "question": question,
        "options": options,
        "correct": correct,
        "correctFeedback": correctFeedback,
        "wrongFeedback": {str(k): v for k, v in wrongFeedback.items()},
    }
    if page is not None:
        item["page"] = page
    check(item, f"ch{chapter}L{level}")
    return item

L3 = []
L4 = []

# --- data will be appended below by exec of data files ---
