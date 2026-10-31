def normalize(s):
    return " ".join(s.split())

ATTACH = [
    " in the vignette",
    " given these facts",
    " on the stated facts",
    " for this scenario",
    " with this evidence",
    " under these constraints",
    " based on the prompt",
    " as the question frames it",
]
TRIM = [
    " entirely", " forever", " automatically", " exclusively", " solely",
    " always", " again", " carefully", " systematically", " primarily", " typically",
    " in the vignette", " given these facts", " on the stated facts", " for this scenario",
    " with this evidence", " under these constraints", " based on the prompt",
    " as the question frames it", " now", " here", " still", " today", " overall",
    " as well", " at times", " in part", " in sum", " for now",
]

def sole_long(opts, correct):
    L = [len(o) for o in opts]
    m = max(L)
    return L[correct] == m and L.count(m) == 1


def balance(options, correct, band=(50, 58)):
    opts = [normalize(o) for o in options]
    lo, hi = band

    for i in range(4):
        o = opts[i]
        guard = 0
        while len(o) > hi and guard < 30:
            trimmed = False
            for w in TRIM:
                if o.endswith(w):
                    o = o[: -len(w)].rstrip(" ,;")
                    trimmed = True
                    break
            if not trimmed:
                parts = o.rsplit(" ", 1)
                if len(parts) == 2 and len(parts[0]) >= lo - 6:
                    o = parts[0]
                else:
                    break
            guard += 1
        opts[i] = o

    for i in range(4):
        ai = 0
        while len(opts[i]) < lo and ai < 40:
            a = ATTACH[ai % len(ATTACH)]
            if len(opts[i]) + len(a) <= hi + 2:
                opts[i] = opts[i] + a
            else:
                for s in [" now", " here", " still"]:
                    if len(opts[i]) + len(s) <= hi:
                        opts[i] += s
                        break
                break
            ai += 1

    for _ in range(30):
        L = [len(x) for x in opts]
        if max(L) - min(L) <= 8:
            break
        si = min(range(4), key=lambda i: L[i])
        li = max(range(4), key=lambda i: L[i])
        padded = False
        for a in ATTACH:
            if len(opts[si]) + len(a) <= max(L[li] + 2, hi + 4):
                opts[si] += a
                padded = True
                break
        if not padded:
            opts[si] += " now"
        for w in TRIM:
            if opts[li].endswith(w) and len(opts[li]) - len(w) >= min(len(x) for x in opts):
                opts[li] = opts[li][: -len(w)].rstrip()
                break

    L = [len(x) for x in opts]
    m = max(L)
    if L[correct] == m and L.count(m) == 1:
        wi = max([i for i in range(4) if i != correct], key=lambda i: L[i])
        matched = False
        for a in ATTACH + [" now", " here", " still", " today", " as well", " at times", " in part", " in sum", " for now"]:
            if len(opts[wi]) + len(a) == m:
                opts[wi] += a
                matched = True
                break
            if m - 2 <= len(opts[wi]) + len(a) < m:
                opts[wi] += a
                # pad with a harmless word to close gap
                while len(opts[wi]) < m:
                    if len(opts[wi]) + 4 <= m + 1:
                        opts[wi] += " now"
                    else:
                        break
                matched = True
                break
        if not matched:
            while len(opts[correct]) > len(opts[wi]):
                trimmed = False
                for w in TRIM:
                    if opts[correct].endswith(w):
                        opts[correct] = opts[correct][: -len(w)].rstrip()
                        trimmed = True
                        break
                if not trimmed:
                    parts = opts[correct].rsplit(" ", 1)
                    if len(parts) == 2 and len(parts[0]) >= lo - 8:
                        opts[correct] = parts[0]
                    else:
                        while len(opts[wi]) < len(opts[correct]):
                            opts[wi] += " now"
                            if len(opts[wi]) >= len(opts[correct]):
                                break
                        break

    opts = [" ".join(o.split()) for o in opts]
    return opts
