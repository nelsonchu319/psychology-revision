#!/usr/bin/env python3
"""Expand site: patch maps with ids/links, nav, ch5-6, questions, github files."""
from __future__ import annotations
import json, re, textwrap
from pathlib import Path
from balance_lib import balance, sole_long

ROOT = Path("/workspace/psychology-revision")
CH = ROOT / "chapters"

NAV_HOME = """        <a{home} href="{p}index.html">Home</a>
        <a{c1} href="{p}chapters/ch1.html">Ch 1</a>
        <a{c2} href="{p}chapters/ch2.html">Ch 2</a>
        <a{c3} href="{p}chapters/ch3.html">Ch 3</a>
        <a{c4} href="{p}chapters/ch4.html">Ch 4</a>
        <a{c5} href="{p}chapters/ch5.html">Ch 5</a>
        <a{c6} href="{p}chapters/ch6.html">Ch 6</a>
        <a{qz} href="{p}quiz.html">Random Quiz</a>
        <a{wb} href="{p}wrongbook.html">錯題簿 <span class="wrongbook-badge" hidden></span></a>"""

def nav(active: str, prefix: str) -> str:
    flags = {k: "" for k in ["home","c1","c2","c3","c4","c5","c6","qz","wb"]}
    flags[active] = ' class="active"'
    return NAV_HOME.format(p=prefix, **flags)

def replace_nav(html: str, active: str, prefix: str) -> str:
    new_nav = nav(active, prefix)
    # replace inner of <nav class="nav">...</nav>
    return re.sub(
        r'(<nav class="nav">)(.*?)(</nav>)',
        r'\1\n' + new_nav + r'\n      \3',
        html,
        count=1,
        flags=re.S,
    )

# ---- Map definitions: ids + edges ----
MAPS = {
1: {
  "edges": [
    ["wundt","structuralism","cross"],
    ["structuralism","functionalism","cross"],
    ["functionalism","behaviorism","cross"],
    ["behaviorism","cognitive","cross"],
    ["psychoanalysis","humanism","cross"],
    ["gestalt","cognitive","cross"],
    ["cognitive","biopsych","cross"],
    ["wundt","functionalism","cross"],
  ],
  "ids": {
    "Psychology": ("hub","Psychology"),
    "Wundt 1879": ("wundt","Wundt 1879"),
    "Structuralism": ("structuralism","Structuralism"),
    "Functionalism": ("functionalism","Functionalism"),
    "Psychoanalysis": ("psychoanalysis","Psychoanalysis"),
    "Gestalt": ("gestalt","Gestalt"),
    "Behaviorism": ("behaviorism","Behaviorism"),
    "Humanism": ("humanism","Humanism"),
    "Cognitive rev.": ("cognitive","Cognitive rev."),
    "Biopsych / evol.": ("biopsych","Biopsych / evol."),
    "Social / cultural": ("social","Social / cultural"),
    "Clinical / applied": ("clinical","Clinical / applied"),
    "PhD vs PsyD": ("phdpsyd","PhD vs PsyD"),
  }
},
2: {
  "edges": [
    ["correlation","experiment","cross"],
    ["experiment","random","cross"],
    ["reliability","validity","cross"],
    ["case","longitudinal","cross"],
    ["survey","correlation","cross"],
    ["irb","consent","cross"],
    ["irb","iacuc","cross"],
    ["experiment","irb","cross"],
  ],
  "ids": {
    "Psychological Research": ("hub","Psychological Research"),
    "Case study": ("case","Case study"),
    "Naturalistic obs.": ("natural","Naturalistic obs."),
    "Survey / archival": ("survey","Survey / archival"),
    "Longitudinal": ("longitudinal","Longitudinal"),
    "Correlation r": ("correlation","Correlation r"),
    "Experiment": ("experiment","Experiment"),
    "Random assignment": ("random","Random assignment"),
    "Reliability / validity": ("reliability","Reliability / validity"),
    "IRB (humans)": ("irb","IRB (humans)"),
    "IACUC (animals)": ("iacuc","IACUC (animals)"),
    "Informed consent": ("consent","Informed consent"),
  }
},
3: {
  "edges": [
    ["genotype","range","cross"],
    ["range","epigenetics","cross"],
    ["neuron","synapse","cross"],
    ["synapse","allornone","cross"],
    ["cns","pns","cross"],
    ["sympathetic","parasympathetic","cross"],
    ["pns","sympathetic","cross"],
    ["lobes","limbic","cross"],
    ["limbic","callosum","cross"],
    ["endocrine","pituitary","cross"],
    ["neuron","cns","cross"],
  ],
  "ids": {
    "Biopsychology": ("hub","Biopsychology"),
    "Genotype → phenotype": ("genotype","Genotype → phenotype"),
    "Range of reaction": ("range","Range of reaction"),
    "Epigenetics": ("epigenetics","Epigenetics"),
    "Neuron / AP": ("neuron","Neuron / AP"),
    "Synapse / NT": ("synapse","Synapse / NT"),
    "All-or-none law": ("allornone","All-or-none law"),
    "CNS": ("cns","CNS"),
    "PNS": ("pns","PNS"),
    "Sympathetic": ("sympathetic","Sympathetic"),
    "Parasympathetic": ("parasympathetic","Parasympathetic"),
    "Cortical lobes": ("lobes","Cortical lobes"),
    "Limbic / thalamus": ("limbic","Limbic / thalamus"),
    "Corpus callosum": ("callosum","Corpus callosum"),
    "Endocrine system": ("endocrine","Endocrine system"),
    "Pituitary": ("pituitary","Pituitary"),
  }
},
4: {
  "edges": [
    ["scn","melatonin","cross"],
    ["scn","homeostatic","cross"],
    ["nrem","rem","cross"],
    ["rem","dreams","cross"],
    ["insomnia","apnea","cross"],
    ["apnea","parasomnias","cross"],
    ["depressants","stimulants","cross"],
    ["stimulants","opioids","cross"],
    ["hypnosis","meditation","cross"],
    ["homeostatic","nrem","cross"],
    ["melatonin","insomnia","cross"],
  ],
  "ids": {
    "Consciousness": ("hub","Consciousness"),
    "SCN / circadian": ("scn","SCN / circadian"),
    "Melatonin": ("melatonin","Melatonin"),
    "Homeostatic drive": ("homeostatic","Homeostatic drive"),
    "NREM stages": ("nrem","NREM stages"),
    "REM sleep": ("rem","REM sleep"),
    "Dream theories": ("dreams","Dream theories"),
    "Insomnia": ("insomnia","Insomnia"),
    "Apnea / narcolepsy": ("apnea","Apnea / narcolepsy"),
    "Parasomnias": ("parasomnias","Parasomnias"),
    "Depressants": ("depressants","Depressants"),
    "Stimulants": ("stimulants","Stimulants"),
    "Opioids / others": ("opioids","Opioids / others"),
    "Hypnosis": ("hypnosis","Hypnosis"),
    "Meditation": ("meditation","Meditation"),
  }
},
}

def patch_map_html(html: str, ch: int) -> str:
    spec = MAPS[ch]
    ids = spec["ids"]
    # add data-id to each cmap-node by matching visible text
    def repl_node(m):
        full = m.group(0)
        text = m.group(1).strip()
        # try exact then startswith keys
        key = None
        if text in ids:
            key = text
        else:
            for k in ids:
                if text.startswith(k) or k.startswith(text):
                    key = k
                    break
        if not key:
            # fuzzy: ignore punctuation differences
            for k in ids:
                if re.sub(r'\W','',text.lower()) == re.sub(r'\W','',k.lower()):
                    key = k
                    break
        if not key:
            return full
        nid, _ = ids[key]
        if 'data-id=' in full:
            return full
        # insert data-id after class or at start of attributes
        return full.replace('class="cmap-node', f'class="cmap-node" data-id="{nid}', 1).replace(
            'class="cmap-node mm-hub', f'class="cmap-node mm-hub" data-id="{nid}', 1
        ) if False else None

    # Better approach: for each button, parse
    def fix_button(m):
        tag = m.group(0)
        inner = m.group(1).strip()
        key = None
        if inner in ids:
            key = inner
        else:
            for k in ids:
                if inner == k or inner.startswith(k[:8]):
                    # prefer exact length match
                    if abs(len(inner)-len(k)) <= 3:
                        key = k
                        break
            if key is None:
                for k in ids:
                    if re.sub(r'[^a-z0-9]','',inner.lower()) == re.sub(r'[^a-z0-9]','',k.lower()):
                        key = k
                        break
        if not key:
            return tag
        nid = ids[key][0]
        if 'data-id=' in tag:
            return tag
        # insert after <button
        return tag.replace('<button ', f'<button data-id="{nid}" ', 1)

    html2 = re.sub(
        r'<button([^>]*class="cmap-node[^"]*"[^>]*)>([^<]+)</button>',
        lambda m: fix_button(m) if False else None,
        html,
    )
    # manual loop
    out = []
    i = 0
    pattern = re.compile(r'<button([^>]*class="cmap-node[^"]*"[^>]*)>([^<]+)</button>')
    for m in pattern.finditer(html):
        out.append(html[i:m.start()])
        attrs, inner = m.group(1), m.group(2).strip()
        key = None
        if inner in ids:
            key = inner
        else:
            for k in ids:
                a=re.sub(r'[^a-z0-9]','',inner.lower()); b=re.sub(r'[^a-z0-9]','',k.lower())
                if a==b or a.startswith(b) or b.startswith(a):
                    key = k
                    break
        if key and 'data-id=' not in attrs:
            nid = ids[key][0]
            attrs = f' data-id="{nid}"' + attrs
        out.append(f'<button{attrs}>{m.group(2)}</button>')
        i = m.end()
    out.append(html[i:])
    html = ''.join(out)

    edges_json = json.dumps(spec["edges"], ensure_ascii=False)
    html = re.sub(
        r'(<div class="concept-map-wrap" id="cmap")(.*?)(>)',
        r'\1 data-edges=\'' + edges_json.replace("'", "&apos;") + r'\'\2\3',
        html,
        count=1,
    )
    # fix if already has data-edges
    if html.count('data-edges') > 1:
        # leave
        pass
    # update caption
    html = re.sub(
        r'(<section class="section" id="map">\s*<h2>Interactive Mind Map</h2>\s*<p[^>]*>)(.*?)(</p>)',
        r'\1Mind map with SVG links: hub → branches, within-branch chains, and gold cross-links between related concepts. Click a node to highlight its edges.\3',
        html,
        count=1,
        flags=re.S,
    )
    return html


def chapter_shell(ch, title, pages, notes, depth, map_html, practice_note, active):
    prefix = ""
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ch {ch}: {title} · Psych Revision</title>
  <link rel="stylesheet" href="../css/styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <a class="logo" href="../index.html">Psych<span>Revision</span></a>
      <nav class="nav">
{nav(active, "../")}
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <div class="ch-num" style="color:var(--accent);font-weight:600;font-size:0.8rem;margin-bottom:0.35rem;">CHAPTER {ch} · pp. {pages}</div>
      <h1>{title}</h1>
      <p>OpenStax Psychology 2e · paraphrased revision notes (CC BY-NC-SA). Click map nodes; practice with leveled quizzes below. Page numbers match the user PDF extract.</p>
    </section>

    <div class="toc-mini">
      <a href="#notes">Key Notes</a>
      <a href="#depth">Further Depth</a>
      <a href="#map">Concept Map</a>
      <a href="#practice">Practice</a>
    </div>

    <section class="section" id="notes">
{notes}
    </section>

    <section class="section" id="depth">
{depth}
    </section>

    <section class="section" id="map">
      <h2>Interactive Mind Map</h2>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.85rem;">Mind map with SVG links: hub → branches, within-branch chains, and gold cross-links between related concepts. Click a node to highlight its edges.</p>
      {map_html}
    </section>

    <section class="section" id="practice">
      <h2>Practice Questions</h2>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.75rem;">
        {practice_note}
      </p>
      <div id="quiz-root"></div>
    </section>
  </main>

  <footer class="site-footer">
    Adapted from <a href="https://openstax.org/books/psychology-2e/pages/{ch}-introduction" target="_blank" rel="noopener">OpenStax Psychology 2e Ch {ch}</a>
    (CC BY-NC-SA 4.0). Access for free at openstax.org. Paraphrased for study.
  </footer>

  <script src="../data/questions.js"></script>
  <script src="../js/app.js"></script>
  <script>
    PsychRevision.initConceptMap(document.getElementById("cmap"));
    PsychRevision.initQuiz({{
      container: document.getElementById("quiz-root"),
      questions: window.PSYCH_QUESTIONS,
      chapterFilter: {ch}
    }});
  </script>
</body>
</html>
'''

CH5_NOTES = '''<h2>Key Notes</h2>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.85rem;">Textbook concepts from OpenStax Psychology 2e (paraphrased). Important ideas that appear in the book belong here—not in Further Depth.</p>

      <h3>5.1 Sensation versus Perception <span class="cite">§5.1, ≈pp. 146–148</span></h3>
      <ul>
        <li><strong>Sensation</strong>: sensory receptors detect stimulus energy.</li>
        <li><strong>Perception</strong>: organizing, interpreting, and consciously experiencing those sensations (bottom-up and top-down).</li>
        <li><strong>Absolute threshold</strong>: minimum stimulus energy detected ~50% of the time; <strong>difference threshold / just noticeable difference (jnd)</strong>: minimum difference detected ~50% of the time (Weber’s law relates jnd to stimulus magnitude).</li>
        <li><strong>Sensory adaptation</strong>, <strong>selective attention</strong>, and <strong>signal detection</strong> help explain what we notice vs. miss (including inattentional blindness examples).</li>
      </ul>
      <p class="zh-remark">中文補充：感覺是「偵測」，知覺是「組織＋解讀」；閾值多以約 50% 偵測率定義。</p>

      <h3>5.2 Waves and Wavelengths <span class="cite">§5.2, ≈pp. 149–152</span></h3>
      <ul>
        <li>Light and sound described as waves: <strong>amplitude</strong>, <strong>wavelength</strong>, <strong>frequency</strong>, <strong>timbre</strong>.</li>
        <li>Longer wavelength ↔ lower frequency; shorter ↔ higher.</li>
        <li>Vision: wavelength ↔ color; amplitude ↔ brightness.</li>
        <li>Hearing: frequency ↔ pitch; amplitude ↔ loudness.</li>
      </ul>

      <h3>5.3 Vision <span class="cite">§5.3, ≈pp. 153–160</span></h3>
      <ul>
        <li>Path: cornea → pupil → lens focuses on <strong>retina</strong> (especially <strong>fovea</strong>).</li>
        <li><strong>Cones</strong>: acuity, bright light, color; concentrated in fovea. <strong>Rods</strong>: dim light, periphery.</li>
        <li>Optic nerve → <strong>optic chiasm</strong> (partial crossing) → occipital processing.</li>
        <li>Color: <strong>trichromatic</strong> (three cone types) + <strong>opponent-process</strong> (pairs; afterimages).</li>
        <li>Depth: <strong>binocular</strong> and <strong>monocular</strong> cues.</li>
      </ul>

      <h3>5.4 Hearing <span class="cite">§5.4, ≈pp. 161–164</span></h3>
      <ul>
        <li>Canal → eardrum → <strong>ossicles</strong> → oval window → <strong>cochlea</strong> fluid → hair cells on basilar membrane → auditory nerve.</li>
        <li>Pitch: place + rate coding on the basilar membrane.</li>
        <li>Localization: monaural and binaural cues.</li>
        <li><strong>Conductive</strong> vs <strong>sensorineural</strong> hearing loss.</li>
      </ul>

      <h3>5.5 The Other Senses <span class="cite">§5.5, ≈pp. 164–168</span></h3>
      <ul>
        <li>Chemical senses: <strong>gustation</strong> and <strong>olfaction</strong>.</li>
        <li>Touch/temperature/pain via skin receptors and free nerve endings; nociception for pain.</li>
        <li><strong>Vestibular</strong> sense (balance: utricle, saccule, semicircular canals); <strong>proprioception</strong> / <strong>kinesthesia</strong> for body position and movement.</li>
      </ul>

      <h3>5.6 Gestalt Principles of Perception <span class="cite">§5.6, ≈pp. 168–172</span></h3>
      <ul>
        <li>Figure–ground; grouping by proximity and similarity; good continuation; closure.</li>
        <li>Perceptions are fallible; culture, bias, and expectations (perceptual set) shape what we see.</li>
      </ul>'''

CH5_DEPTH = '''<h2>Further Theoretical Depth</h2>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.85rem;">External journals and classic books that go beyond OpenStax’s sketches.</p>

      <p>Signal detection theory separates sensitivity from response bias—showing that “threshold” is not a single fixed point but a decision under noise.</p>
      <p class="cite">Green, D. M., &amp; Swets, J. A. (1966). <em>Signal Detection Theory and Psychophysics</em>. Wiley.</p>

      <p>The classic inattentional blindness demonstration (gorilla among basketball passes) shows that attention, not just receptor stimulation, gates awareness.</p>
      <p class="cite">Simons, D. J., &amp; Chabris, C. F. (1999). Gorillas in our midst: Sustained inattentional blindness for dynamic events. <em>Perception, 28</em>(9), 1059–1074.</p>
      <p class="zh-remark">書中提及相關現象；這篇是經典實驗論文，適合放 Depth。</p>

      <p>Feature-integration theory proposes that focused attention binds separable features into objects—linking cognitive attention research to perceptual errors.</p>
      <p class="cite">Treisman, A. M., &amp; Gelade, G. (1980). A feature-integration theory of attention. <em>Cognitive Psychology, 12</em>(1), 97–136.</p>

      <p>Gibson’s ecological approach emphasizes rich environmental information (affordances) rather than constructing perception only from impoverished sensations.</p>
      <p class="cite">Gibson, J. J. (1979). <em>The Ecological Approach to Visual Perception</em>. Houghton Mifflin.</p>'''

CH5_MAP = r'''<div class="concept-map-wrap" id="cmap" data-edges='[["sensation","perception","cross"],["absolute","difference","cross"],["adaptation","attention","cross"],["wavelength","amplitude","cross"],["rods","cones","cross"],["trichromatic","opponent","cross"],["mono","bino","cross"],["conductive","sensorineural","cross"],["gustation","olfaction","cross"],["vestibular","proprio","cross"],["figureground","closure","cross"],["perception","figureground","cross"],["cones","trichromatic","cross"]]'>
        <div class="mindmap">
          <button data-id="hub" type="button" class="cmap-node mm-hub" data-title="Sensation &amp; Perception" data-detail="From receptor detection (sensation) to organized conscious experience (perception), shaped by thresholds, attention, and Gestalt organization.">Sensation &amp; Perception</button>
          <div class="mm-branches">
            <div class="mm-branch">
              <div class="mm-branch-label">Basics</div>
              <div class="mm-nodes">
                <button data-id="sensation" type="button" class="cmap-node" data-title="Sensation" data-detail="Sensory receptors detect stimulus energy.">Sensation</button>
                <button data-id="perception" type="button" class="cmap-node" data-title="Perception" data-detail="Organize/interpret sensations; bottom-up + top-down.">Perception</button>
                <button data-id="absolute" type="button" class="cmap-node" data-title="Absolute threshold" data-detail="Minimum energy detected about 50% of the time.">Absolute threshold</button>
                <button data-id="difference" type="button" class="cmap-node" data-title="Difference threshold" data-detail="jnd — minimum difference detected ~50% of the time (Weber).">Difference / jnd</button>
                <button data-id="adaptation" type="button" class="cmap-node" data-title="Sensory adaptation" data-detail="Decreased sensitivity to a constant stimulus over time.">Sensory adaptation</button>
                <button data-id="attention" type="button" class="cmap-node" data-title="Selective attention" data-detail="Focusing limited resources; related to inattentional blindness.">Selective attention</button>
              </div>
            </div>
            <div class="mm-branch">
              <div class="mm-branch-label">Vision</div>
              <div class="mm-nodes">
                <button data-id="wavelength" type="button" class="cmap-node" data-title="Wavelength / color" data-detail="Light wavelength associated with perceived color.">Wavelength → color</button>
                <button data-id="amplitude" type="button" class="cmap-node" data-title="Amplitude / brightness" data-detail="Light amplitude associated with brightness.">Amplitude → brightness</button>
                <button data-id="rods" type="button" class="cmap-node" data-title="Rods" data-detail="Dim-light sensitivity; more peripheral on retina.">Rods</button>
                <button data-id="cones" type="button" class="cmap-node" data-title="Cones" data-detail="Acuity and color in brighter light; dense in fovea.">Cones</button>
                <button data-id="trichromatic" type="button" class="cmap-node" data-title="Trichromatic theory" data-detail="Three cone types tuned to different wavelengths.">Trichromatic</button>
                <button data-id="opponent" type="button" class="cmap-node" data-title="Opponent-process" data-detail="Color in opponent pairs; explains negative afterimages.">Opponent-process</button>
                <button data-id="mono" type="button" class="cmap-node" data-title="Monocular cues" data-detail="Depth cues available to one eye (e.g., overlap, relative size).">Monocular cues</button>
                <button data-id="bino" type="button" class="cmap-node" data-title="Binocular cues" data-detail="Depth from two eyes (e.g., retinal disparity).">Binocular cues</button>
              </div>
            </div>
            <div class="mm-branch">
              <div class="mm-branch-label">Hearing &amp; other</div>
              <div class="mm-nodes">
                <button data-id="cochlea" type="button" class="cmap-node" data-title="Cochlea / hair cells" data-detail="Fluid motion bends hair cells → auditory nerve signals.">Cochlea / hair cells</button>
                <button data-id="conductive" type="button" class="cmap-node" data-title="Conductive loss" data-detail="Problem with eardrum/ossicle vibration transmission.">Conductive loss</button>
                <button data-id="sensorineural" type="button" class="cmap-node" data-title="Sensorineural loss" data-detail="Failure transmitting auditory nerve impulses to the brain.">Sensorineural loss</button>
                <button data-id="gustation" type="button" class="cmap-node" data-title="Gustation" data-detail="Taste — chemical sense via tongue receptors.">Gustation</button>
                <button data-id="olfaction" type="button" class="cmap-node" data-title="Olfaction" data-detail="Smell — chemical sense via nasal receptors.">Olfaction</button>
                <button data-id="vestibular" type="button" class="cmap-node" data-title="Vestibular" data-detail="Balance via utricle, saccule, semicircular canals.">Vestibular</button>
                <button data-id="proprio" type="button" class="cmap-node" data-title="Proprioception" data-detail="Body position/movement from muscle, joint, tendon receptors.">Proprioception</button>
              </div>
            </div>
            <div class="mm-branch">
              <div class="mm-branch-label">Gestalt</div>
              <div class="mm-nodes">
                <button data-id="figureground" type="button" class="cmap-node" data-title="Figure–ground" data-detail="Organize scene into figure against background.">Figure–ground</button>
                <button data-id="proximity" type="button" class="cmap-node" data-title="Proximity / similarity" data-detail="Group nearby or similar elements together.">Proximity / similarity</button>
                <button data-id="closure" type="button" class="cmap-node" data-title="Closure / continuation" data-detail="Fill gaps; prefer smooth continuing lines.">Closure / continuation</button>
              </div>
            </div>
          </div>
        </div>
        <div class="cmap-detail">Select a concept node…</div>
      </div>'''

CH6_NOTES = '''<h2>Key Notes</h2>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.85rem;">Textbook concepts from OpenStax Psychology 2e (paraphrased).</p>

      <h3>6.1 What Is Learning? <span class="cite">§6.1, ≈pp. 181–183</span></h3>
      <ul>
        <li><strong>Instincts</strong> and <strong>reflexes</strong> are innate; <strong>learning</strong> is a relatively permanent change in behavior or knowledge from experience.</li>
        <li>Three major types: <strong>classical conditioning</strong>, <strong>operant conditioning</strong>, <strong>observational learning</strong>.</li>
        <li>Classical and operant are forms of <strong>associative learning</strong>.</li>
      </ul>

      <h3>6.2 Classical Conditioning <span class="cite">§6.2, ≈pp. 183–191</span></h3>
      <ul>
        <li>Pavlov: associate events that repeatedly occur together; map a reflexive response onto a new stimulus.</li>
        <li>Terms: UCS, UCR, NS→CS, CR; acquisition, extinction, spontaneous recovery, generalization, discrimination.</li>
        <li>Watson / Little Albert: conditioned fear in an infant—classical conditioning and some fears.</li>
        <li>Higher-order conditioning and real-world applications (e.g., advertising, taste aversion themes in the chapter).</li>
      </ul>
      <p class="zh-remark">中文補充：古典制約重點是「刺激—刺激」聯結，反應原本是反射性的。</p>

      <h3>6.3 Operant Conditioning <span class="cite">§6.3, ≈pp. 192–202</span></h3>
      <ul>
        <li>Skinner: consequences after a behavior change the likelihood of that behavior.</li>
        <li>All <strong>reinforcement</strong> (positive or negative) increases behavior; all <strong>punishment</strong> decreases it.</li>
        <li>Positive = add stimulus; negative = remove stimulus.</li>
        <li>Shaping; primary vs secondary reinforcers; continuous vs partial schedules (fixed/variable × ratio/interval)—partial often more extinction-resistant.</li>
      </ul>

      <h3>6.4 Observational Learning (Modeling) <span class="cite">§6.4, ≈pp. 203–206</span></h3>
      <ul>
        <li>Bandura: learn by watching others, then modeling.</li>
        <li>Steps: attention, retention, reproduction, motivation.</li>
        <li><strong>Vicarious reinforcement</strong> / punishment: seeing the model rewarded or punished changes imitation likelihood.</li>
        <li>Classic Bobo doll demonstrations of modeled aggression.</li>
      </ul>'''

CH6_DEPTH = '''<h2>Further Theoretical Depth</h2>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.85rem;">External journals and classic books beyond the textbook sketch.</p>

      <p>Garcia and Koelling’s work on taste aversion showed biological constraints: not all CS–UCS pairings are equally learnable—prepared associations matter.</p>
      <p class="cite">Garcia, J., &amp; Koelling, R. A. (1966). Relation of cue to consequence in avoidance learning. <em>Psychonomic Science, 4</em>, 123–124.</p>

      <p>Rescorla emphasized that contingency (predictiveness), not mere contiguity, is central to what is learned in classical conditioning.</p>
      <p class="cite">Rescorla, R. A. (1988). Pavlovian conditioning: It’s not what you think it is. <em>American Psychologist, 43</em>(3), 151–160.</p>

      <p>Bandura’s social-cognitive framing treats observational learning as active cognitive modeling—not a thin copy of Skinnerian shaping alone.</p>
      <p class="cite">Bandura, A. (1977). <em>Social Learning Theory</em>. Prentice Hall. See also Bandura, A., Ross, D., &amp; Ross, S. A. (1961). Transmission of aggression through imitation of aggressive models. <em>Journal of Abnormal and Social Psychology, 63</em>, 575–582.</p>
      <p class="zh-remark">Bobo doll 與社會學習理論的完整論述在專書／原論文，比課本摘要更深。</p>

      <p>Tolman’s latent learning / cognitive maps challenged strict S–R accounts by showing learning without immediate reinforcement.</p>
      <p class="cite">Tolman, E. C. (1948). Cognitive maps in rats and men. <em>Psychological Review, 55</em>(4), 189–208.</p>'''

CH6_MAP = r'''<div class="concept-map-wrap" id="cmap" data-edges='[["classical","operant","cross"],["classical","observational","cross"],["operant","observational","cross"],["ucs","cs","cross"],["acquisition","extinction","cross"],["extinction","recovery","cross"],["generalization","discrimination","cross"],["posrein","negrein","cross"],["pospun","negpun","cross"],["fixedratio","variableratio","cross"],["fixedinterval","variableinterval","cross"],["attention","retention","cross"],["retention","reproduction","cross"],["reproduction","motivation","cross"],["vicarious","motivation","cross"],["shaping","posrein","cross"]]'>
        <div class="mindmap">
          <button data-id="hub" type="button" class="cmap-node mm-hub" data-title="Learning" data-detail="Experience-based change in behavior/knowledge: classical, operant, and observational routes.">Learning</button>
          <div class="mm-branches">
            <div class="mm-branch">
              <div class="mm-branch-label">Classical</div>
              <div class="mm-nodes">
                <button data-id="classical" type="button" class="cmap-node" data-title="Classical conditioning" data-detail="Associate stimuli; reflexive responses mapped onto a CS (Pavlov).">Classical conditioning</button>
                <button data-id="ucs" type="button" class="cmap-node" data-title="UCS / UCR" data-detail="Unconditioned stimulus triggers unconditioned response naturally.">UCS / UCR</button>
                <button data-id="cs" type="button" class="cmap-node" data-title="CS / CR" data-detail="After pairing, conditioned stimulus elicits conditioned response.">CS / CR</button>
                <button data-id="acquisition" type="button" class="cmap-node" data-title="Acquisition" data-detail="Initial learning of the CS–UCS association.">Acquisition</button>
                <button data-id="extinction" type="button" class="cmap-node" data-title="Extinction" data-detail="CR weakens when CS appears without UCS.">Extinction</button>
                <button data-id="recovery" type="button" class="cmap-node" data-title="Spontaneous recovery" data-detail="Extinguished CR returns after a rest.">Spontaneous recovery</button>
                <button data-id="generalization" type="button" class="cmap-node" data-title="Generalization" data-detail="CR to stimuli similar to the CS.">Generalization</button>
                <button data-id="discrimination" type="button" class="cmap-node" data-title="Discrimination" data-detail="Respond differently to CS vs similar non-CS cues.">Discrimination</button>
              </div>
            </div>
            <div class="mm-branch">
              <div class="mm-branch-label">Operant</div>
              <div class="mm-nodes">
                <button data-id="operant" type="button" class="cmap-node" data-title="Operant conditioning" data-detail="Consequences after behavior change its future probability (Skinner).">Operant conditioning</button>
                <button data-id="posrein" type="button" class="cmap-node" data-title="Positive reinforcement" data-detail="Add a desirable stimulus → behavior increases.">Positive reinforcement</button>
                <button data-id="negrein" type="button" class="cmap-node" data-title="Negative reinforcement" data-detail="Remove an aversive stimulus → behavior increases.">Negative reinforcement</button>
                <button data-id="pospun" type="button" class="cmap-node" data-title="Positive punishment" data-detail="Add an aversive stimulus → behavior decreases.">Positive punishment</button>
                <button data-id="negpun" type="button" class="cmap-node" data-title="Negative punishment" data-detail="Remove a desirable stimulus → behavior decreases.">Negative punishment</button>
                <button data-id="shaping" type="button" class="cmap-node" data-title="Shaping" data-detail="Reinforce successive approximations of a target behavior.">Shaping</button>
                <button data-id="fixedratio" type="button" class="cmap-node" data-title="Fixed / variable ratio" data-detail="Reinforce after a set or varying number of responses.">Ratio schedules</button>
                <button data-id="variableratio" type="button" class="cmap-node" data-title="Variable ratio" data-detail="Unpredictable response counts—often high, steady rates.">Variable ratio</button>
                <button data-id="fixedinterval" type="button" class="cmap-node" data-title="Interval schedules" data-detail="Reinforce after fixed or varying time intervals.">Interval schedules</button>
                <button data-id="variableinterval" type="button" class="cmap-node" data-title="Variable interval" data-detail="Unpredictable time—steady moderate responding.">Variable interval</button>
              </div>
            </div>
            <div class="mm-branch">
              <div class="mm-branch-label">Observational</div>
              <div class="mm-nodes">
                <button data-id="observational" type="button" class="cmap-node" data-title="Observational learning" data-detail="Learn by watching a model, then imitating (Bandura).">Observational learning</button>
                <button data-id="attention" type="button" class="cmap-node" data-title="Attention" data-detail="Must notice the model’s behavior.">Attention</button>
                <button data-id="retention" type="button" class="cmap-node" data-title="Retention" data-detail="Remember what was observed.">Retention</button>
                <button data-id="reproduction" type="button" class="cmap-node" data-title="Reproduction" data-detail="Ability to perform the behavior.">Reproduction</button>
                <button data-id="motivation" type="button" class="cmap-node" data-title="Motivation" data-detail="Reason to imitate—often tied to expected outcomes.">Motivation</button>
                <button data-id="vicarious" type="button" class="cmap-node" data-title="Vicarious reinforcement" data-detail="Seeing the model rewarded raises imitation likelihood.">Vicarious reinforcement</button>
              </div>
            </div>
          </div>
        </div>
        <div class="cmap-detail">Select a concept node…</div>
      </div>'''

