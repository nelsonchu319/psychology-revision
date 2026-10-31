# OpenStax Psychology 2e · Revision Site (Chapters 1–6)

Static HTML/CSS/JS study hub for **OpenStax Psychology 2e**: paraphrased **Key Notes**, **Further Theoretical Depth** (external journals/books only), **SVG-linked mind maps**, leveled practice (**L1–L3**, **L4 cross-topic** from Ch 2), and a browser **Wrong Book / 錯題簿** (`localStorage`).

**Access for free at [openstax.org](https://openstax.org/details/books/psychology-2e).** Textbook material is **CC BY-NC-SA 4.0**. Site code is **MIT** (see `LICENSE`).

## Open locally

```bash
cd psychology-revision   # this folder
python3 -m http.server 8765
```

Visit `http://localhost:8765/` — or open `index.html` via `file://` (some browsers restrict modules less of an issue here; relative paths are used throughout).

## Features

| Feature | What it does |
|--------|----------------|
| Key Notes | Important OpenStax ideas with § / page cites (paraphrased) |
| Further Depth | Outside journals/books with named citations |
| Mind maps | Hub → branches → nodes + **SVG lines** (hub, within-branch, gold cross-links); click highlights connected edges |
| Practice L1–L3 | Factual / theoretical / multi-beat application |
| Practice L4 | Cross-topic (Ch 1→N) from Chapter 2 onward |
| Wrong Book | Saves wrong answers in `localStorage`; filter, re-practice, remove, clear |
| Random Quiz | Shuffle across chapters 1–6 |

## Chapters

1. Introduction to Psychology (≈pp. 8–34)  
2. Psychological Research (≈pp. 36–70)  
3. Biopsychology (≈pp. 72–108)  
4. States of Consciousness (≈pp. 110–144)  
5. Sensation and Perception (≈pp. 145–172)  
6. Learning (≈pp. 181–206)  

## Publish on GitHub Pages

1. Create a new GitHub repository (public or private).  
2. Push **this folder as the repo root** (the folder that contains `index.html`).  
   - Do **not** commit `source/` (large PDFs; already in `.gitignore`).  
3. On GitHub: **Settings → Pages → Build and deployment**  
   - Source: **Deploy from a branch**  
   - Branch: `main` (or `master`), folder: **`/` (root)**  
4. Save; wait a minute; open `https://<user>.github.io/<repo>/`.  

`.nojekyll` is included so Pages won’t process files through Jekyll.

### Suggested first push

```bash
cd psychology-revision
git init
git add .
git status   # confirm source/ is ignored
git commit -m "Psychology 2e revision site Ch1–6"
git branch -M main
git remote add origin git@github.com:YOUR_USER/YOUR_REPO.git
git push -u origin main
```

Then enable Pages as above. No GitHub login is required inside this project folder until you push.

## Layout

```
index.html          Home
quiz.html           Random quiz
wrongbook.html      錯題簿
chapters/ch1–ch6.html
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
