# OpenStax Psychology 2e · Revision Site (Chapters 1–16)

Static HTML/CSS/JS study hub for **OpenStax Psychology 2e**: paraphrased **Key Notes**, **Further Theoretical Depth** (external journals/books only), **SVG-linked mind maps**, leveled practice (**L1–L3**, **L4 cross-topic** from Ch 2), and a browser **Wrong Book / 錯題簿** (`localStorage`).

**Access for free at [openstax.org](https://openstax.org/details/books/psychology-2e).** Textbook material is **CC BY-NC-SA 4.0**. Site code is **MIT** (see `LICENSE`).


## Topic Multi-Select

Hard multi-chapter practice on [`topics.html`](topics.html). Five fixed topics (Ch 1–2, 3–5, 6–8, 9–11, 12–16). Each item is a long real-world vignette plus **exactly five** checkbox statements (0–5 may be correct). Scoring is **exact set match** only—no partial credit. Items are written to the hardened Level 4 bar (tempting near-misses, competing explanations).

Data: `data/topic-multiselect.js` (`window.PSYCH_TOPIC_MS`). UI: `PsychRevision.initTopicMultiSelect`.

## Open locally

```bash
cd psychology-revision   # this folder
python3 -m http.server 8765
```

Visit `http://localhost:8765/` — or open `index.html` via `file://` (relative paths are used throughout).

## Features

| Feature | What it does |
|--------|----------------|
| Key Notes | Important OpenStax ideas with § / page cites (paraphrased) |
| Further Depth | Outside journals/books with named citations |
| Mind maps | Hub → branches → nodes + **SVG lines** (hub, within-branch, gold cross-links); click highlights connected edges |
| Practice L1–L3 | Factual / theoretical / multi-beat application |
| Practice L4 | Cross-topic (Ch 1→N) from Chapter 2 onward |
| Wrong Book | Saves wrong answers in `localStorage`; filter, re-practice, remove, clear |
| Random Quiz | Shuffle across chapters 1–16 |

## Chapters

1. Introduction to Psychology (≈pp. 8–34)  
2. Psychological Research (≈pp. 36–70)  
3. Biopsychology (≈pp. 72–108)  
4. States of Consciousness (≈pp. 110–144)  
5. Sensation and Perception (≈pp. 145–172)  
6. Learning (≈pp. 181–206)  
7. Thinking and Intelligence (≈pp. 214–246)  
8. Memory (≈pp. 248–278)  
9. Lifespan Development (≈pp. 280–320)  
10. Emotion and Motivation (≈pp. 322–358)  
11. Personality (≈pp. 360–398)  
12. Social Psychology (≈pp. 400–444)  
13. Industrial-Organizational Psychology (≈pp. 446–482)  
14. Stress, Lifestyle, and Health (≈pp. 484–534)  
15. Psychological Disorders (≈pp. 536–596)  
16. Therapy and Treatment (≈pp. 598–688)  

## Publish on GitHub Pages

1. Create a new GitHub repository (public or private).  
2. Push **this folder as the repo root** (the folder that contains `index.html`).  
   - Do **not** commit `source/` (large PDFs; already in `.gitignore`).  
3. On GitHub: **Settings → Pages → Build and deployment**  
   - Source: **Deploy from a branch**  
   - Branch: `main` (or `master`), folder: **`/` (root)**  
4. Save; wait a minute; open `https://<user>.github.io/<repo>/`.  

`.nojekyll` is included so Pages won’t process files through Jekyll.

## Layout

```
index.html          Home
quiz.html           Random quiz
wrongbook.html      錯題簿
chapters/ch1–ch16.html
css/styles.css
js/app.js           Mind map SVG + quiz + wrong book
data/questions.js   MCQs with stable ids (c{ch}-l{lv}-{nn})
LICENSE             MIT (code) + OpenStax CC BY-NC-SA notice
.gitignore          Ignores source/, __pycache__, OS junk
.nojekyll
```

## Notes vs Depth rule

- **Key Notes** = important content that appears in Psychology 2e.  
- **Further Theoretical Depth** = concepts from **other** journals/books, each with a citation—not a restatement of the textbook.

Page numbers follow the by-chapter PDF running headers used while building the site.
