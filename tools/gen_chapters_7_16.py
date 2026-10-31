#!/usr/bin/env python3
"""Generate chapters/ch7.html … ch16.html matching ch6 pattern."""
from __future__ import annotations
from pathlib import Path
from nav_lib import CHAPTERS, nav_html

ROOT = Path("/workspace/psychology-revision")
CH = ROOT / "chapters"

# Each chapter: title, pages, openstax_slug, notes_html, depth_html, map_edges, map_branches_html, practice_blurb
# notes/depth/map are full inner HTML for those sections (without outer section wrappers for notes body etc.)

def page(ch, title, pages, slug, notes, depth, edges, branches, practice_note):
    active = f"c{ch}"
    nav = nav_html(active, "../")
    edges_json = str(edges).replace("'", '"')
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
{nav}
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
<h2>Key Notes</h2>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.85rem;">Textbook concepts from OpenStax Psychology 2e (paraphrased).</p>
{notes}
    </section>

    <section class="section" id="depth">
<h2>Further Theoretical Depth</h2>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.85rem;">External journals and classic books beyond the textbook sketch.</p>
{depth}
    </section>

    <section class="section" id="map">
      <h2>Interactive Mind Map</h2>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.85rem;">Mind map with SVG links: hub → branches, within-branch chains, and gold cross-links between related concepts. Click a node to highlight its edges.</p>
      <div class="concept-map-wrap" id="cmap" data-edges='{edges_json}'>
        <div class="mindmap">
          <button data-id="hub" type="button" class="cmap-node mm-hub" data-title="{title}" data-detail="Chapter {ch} hub — click related nodes to explore links.">{title.split(":")[0][:28]}</button>
          <div class="mm-branches">
{branches}
          </div>
        </div>
        <div class="cmap-detail">Select a concept node…</div>
      </div>
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
    Adapted from <a href="https://openstax.org/books/psychology-2e/pages/{slug}" target="_blank" rel="noopener">OpenStax Psychology 2e Ch {ch}</a>
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

def branch(label, nodes):
    """nodes: list of (id, label, title, detail)"""
    bits = [f'''            <div class="mm-branch">
              <div class="mm-branch-label">{label}</div>
              <div class="mm-nodes">''']
    for nid, lab, title, detail in nodes:
        bits.append(f'                <button data-id="{nid}" type="button" class="cmap-node" data-title="{title}" data-detail="{detail}">{lab}</button>')
    bits.append('              </div>\n            </div>')
    return "\n".join(bits)

CHAPTER_CONTENT = {}

# ---------------- Chapter 7 ----------------
CHAPTER_CONTENT[7] = dict(
 title="Thinking and Intelligence",
 pages="214–246",
 slug="7-introduction",
 notes='''
      <h3>7.1 What Is Cognition? <span class="cite">§7.1, ≈pp. 214–217</span></h3>
      <ul>
        <li><strong>Cognition</strong>: thinking and related processes (perceive, know, remember, judge, decide).</li>
        <li><strong>Concepts</strong> group similar information; <strong>prototypes</strong> are best examples of a category.</li>
        <li><strong>Schemata</strong> are clusters of related concepts (incl. role and event schemata / scripts).</li>
      </ul>

      <h3>7.2 Language <span class="cite">§7.2, ≈pp. 218–221</span></h3>
      <ul>
        <li>Language = lexicon + grammar; phonemes → morphemes → semantics &amp; syntax.</li>
        <li>Acquisition follows a similar early sequence worldwide; critical/sensitive period themes appear in the chapter.</li>
        <li>Linguistic influences on thought (Sapir–Whorf themes) remain debated.</li>
      </ul>
      <p class="zh-remark">中文補充：語言結構（音素／語素／語法）與「語言是否形塑思考」是兩條常考線。</p>

      <h3>7.3 Problem Solving <span class="cite">§7.3, ≈pp. 222–227</span></h3>
      <ul>
        <li>Strategies: trial-and-error, <strong>algorithms</strong>, <strong>heuristics</strong>, breaking problems into subgoals.</li>
        <li>Obstacles: mental set, functional fixedness, anchoring, confirmation bias, hindsight bias, representative &amp; availability heuristics.</li>
      </ul>

      <h3>7.4 Intelligence and Creativity <span class="cite">§7.4, ≈pp. 228–229</span></h3>
      <ul>
        <li>Spearman’s <strong>g</strong>; Cattell crystallized vs fluid; Sternberg’s triarchic (analytical, creative, practical); Gardner’s multiple intelligences; emotional intelligence.</li>
        <li>Creativity: divergent thinking / novel useful ideas (hard to measure objectively).</li>
      </ul>

      <h3>7.5 Measures of Intelligence <span class="cite">§7.5, ≈pp. 230–235</span></h3>
      <ul>
        <li>History: Binet, Stanford–Binet, Wechsler scales; IQ scoring and norming; Flynn effect.</li>
        <li>Bell curve; intellectual disability and giftedness ranges as framed in the chapter; reliability/validity concerns; cultural bias debates.</li>
      </ul>

      <h3>7.6 The Source of Intelligence <span class="cite">§7.6, ≈pp. 236–246</span></h3>
      <ul>
        <li>Nature and nurture both contribute; heritability estimates; range of reaction; socioeconomic and educational contexts.</li>
        <li>Learning disabilities (e.g., dyslexia, dysgraphia) vs intellectual disability distinctions in the text.</li>
      </ul>
''',
 depth='''
      <p>Kahneman and Tversky’s heuristics-and-biases program shows how availability and representativeness can systematically distort judgment under uncertainty.</p>
      <p class="cite">Tversky, A., &amp; Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. <em>Science, 185</em>(4157), 1124–1131. <a href="https://doi.org/10.1126/science.185.4157.1124" target="_blank" rel="noopener">doi.org/10.1126/science.185.4157.1124</a></p>

      <p>Spearman’s early psychometric work grounded the idea of a general intelligence factor (<em>g</em>) extracted from positive manifold among tests.</p>
      <p class="cite">Spearman, C. (1904). “General intelligence,” objectively determined and measured. <em>American Journal of Psychology, 15</em>(2), 201–292. <a href="https://doi.org/10.2307/1412107" target="_blank" rel="noopener">doi.org/10.2307/1412107</a></p>

      <p>Gardner’s multiple intelligences and Sternberg’s triarchic model challenge narrow IQ-only definitions—useful contrasts for exam essays.</p>
      <p class="cite">Gardner, H. (1993). <em>Frames of Mind</em> (10th anniversary ed.). Basic Books. <a href="https://books.google.com/books?id=2Y1nQgAACAAJ" target="_blank" rel="noopener">Google Books</a>. Sternberg, R. J. (1985). <em>Beyond IQ: A Triarchic Theory of Human Intelligence</em>. Cambridge University Press. <a href="https://doi.org/10.1017/CBO9780511611476" target="_blank" rel="noopener">doi.org/10.1017/CBO9780511611476</a> (CUP; access may vary).</p>
      <p class="cite">Alternate Sternberg overview: Sternberg, R. J. (1984). Toward a triarchic theory of human intelligence. <em>Behavioral and Brain Sciences, 7</em>(2), 269–287. <a href="https://doi.org/10.1017/S0140525X00044629" target="_blank" rel="noopener">doi.org/10.1017/S0140525X00044629</a></p>

      <p>Chomsky’s nativist framing of language acquisition contrasts with pure reinforcement accounts of verbal behavior.</p>
      <p class="cite">Chomsky, N. (1959). Review of B. F. Skinner’s <em>Verbal Behavior</em>. <em>Language, 35</em>(1), 26–58. <a href="https://doi.org/10.2307/411334" target="_blank" rel="noopener">doi.org/10.2307/411334</a></p>
      <p class="zh-remark">解題時把「演算法 vs 捷思」與「g vs 多元／三元智力」分開寫，避免混成一團。</p>
''',
 edges=[
  ["concepts","prototypes","cross"],["concepts","schemata","cross"],["phoneme","morpheme","cross"],
  ["algorithm","heuristic","cross"],["mentalset","fixedness","cross"],["availability","representativeness","cross"],
  ["gfactor","triarchic","cross"],["triarchic","multiple","cross"],["iq","flynn","cross"],
  ["nature","nurture","cross"],["heuristic","availability","cross"],["language","concepts","cross"]
 ],
 branches="\n".join([
  branch("Cognition &amp; Language", [
    ("concepts","Concepts","Concepts","Categories that organize information."),
    ("prototypes","Prototypes","Prototypes","Best/typical examples of a concept."),
    ("schemata","Schemata","Schemata","Related-concept clusters, incl. scripts."),
    ("phoneme","Phonemes","Phonemes","Basic sound units of language."),
    ("morpheme","Morphemes","Morphemes","Smallest meaning units."),
    ("language","Language","Language","Lexicon + grammar system."),
  ]),
  branch("Problem Solving", [
    ("algorithm","Algorithms","Algorithms","Step-by-step procedures that guarantee a solution if one exists."),
    ("heuristic","Heuristics","Heuristics","Fast mental shortcuts—efficient but error-prone."),
    ("mentalset","Mental set","Mental set","Persisting with a previously useful approach."),
    ("fixedness","Functional fixedness","Functional fixedness","Stuck on usual object functions."),
    ("availability","Availability heuristic","Availability","Judge likelihood by ease of recall."),
    ("representativeness","Representativeness","Representativeness","Judge by similarity to a prototype."),
  ]),
  branch("Intelligence", [
    ("gfactor","Spearman g","g factor","General intelligence factor."),
    ("triarchic","Triarchic","Triarchic theory","Analytical, creative, practical (Sternberg)."),
    ("multiple","Multiple intelligences","Multiple intelligences","Gardner’s plural set of intelligences."),
    ("iq","IQ tests","IQ tests","Normed scales (Binet/Wechsler traditions)."),
    ("flynn","Flynn effect","Flynn effect","Rising raw scores across generations."),
    ("nature","Nature","Nature","Genetic contributions to intelligence."),
    ("nurture","Nurture","Nurture","Environment, SES, education effects."),
  ]),
 ]),
 practice_note="Level 1–3 · <strong>Level 4 · Cross-topic</strong> mixes Ch 7 with earlier chapters (cognition × learning/biopsych/methods).",
)

# ---------------- Chapter 8 ----------------
CHAPTER_CONTENT[8] = dict(
 title="Memory",
 pages="248–278",
 slug="8-introduction",
 notes='''
      <h3>8.1 How Memory Functions <span class="cite">§8.1, ≈pp. 248–253</span></h3>
      <ul>
        <li>Three operations: <strong>encoding</strong>, <strong>storage</strong>, <strong>retrieval</strong> (recall, recognition, relearning).</li>
        <li>Atkinson–Shiffrin: sensory → short-term → long-term (with rehearsal). Baddeley–Hitch working memory as a richer STM model.</li>
        <li>LTM: explicit (episodic/semantic) vs implicit (procedural, priming, emotional conditioning).</li>
      </ul>
      <p class="zh-remark">中文補充：先分清「編碼／儲存／提取」，再分「外顯 vs 內隱」。</p>

      <h3>8.2 Brain Areas <span class="cite">§8.2, ≈pp. 254–257</span></h3>
      <ul>
        <li>Engram search (Lashley) → distributed memory; amygdala (emotional memory), hippocampus (new memory consolidation), cerebellum (procedural), prefrontal involvement in working memory themes.</li>
        <li>Arousal / neurotransmitter &amp; hormone effects; flashbulb memories feel vivid but are not perfectly accurate.</li>
      </ul>

      <h3>8.3 Problems with Memory <span class="cite">§8.3, ≈pp. 258–267</span></h3>
      <ul>
        <li>Amnesia: anterograde vs retrograde; memory construction / reconstruction; suggestibility; eyewitness issues; misinformation effect (Loftus).</li>
        <li>Forgetting: encoding failure, transience, absentmindedness, blocking; bias; persistence (unwanted memories). Interference: proactive vs retroactive.</li>
      </ul>

      <h3>8.4 Enhancing Memory <span class="cite">§8.4, ≈pp. 268–278</span></h3>
      <ul>
        <li>Chunking, elaborative rehearsal, mnemonic devices, expressive writing themes, rehearsal spacing / practice testing ideas as presented in the chapter.</li>
      </ul>
''',
 depth='''
      <p>Atkinson and Shiffrin’s multistore model still organizes how textbooks teach sensory, short-term, and long-term memory.</p>
      <p class="cite">Atkinson, R. C., &amp; Shiffrin, R. M. (1968). Human memory: A proposed system and its control processes. In K. W. Spence &amp; J. T. Spence (Eds.), <em>The psychology of learning and motivation</em> (Vol. 2, pp. 89–195). Academic Press. <a href="https://doi.org/10.1016/S0079-7421(08)60422-3" target="_blank" rel="noopener">doi.org/10.1016/S0079-7421(08)60422-3</a></p>

      <p>Baddeley and Hitch’s working-memory model replaces a single STM box with phonological and visuospatial subsystems plus a central executive.</p>
      <p class="cite">Baddeley, A. D., &amp; Hitch, G. (1974). Working memory. In G. H. Bower (Ed.), <em>The psychology of learning and motivation</em> (Vol. 8, pp. 47–89). Academic Press. <a href="https://doi.org/10.1016/S0079-7421(08)60452-1" target="_blank" rel="noopener">doi.org/10.1016/S0079-7421(08)60452-1</a></p>

      <p>Loftus and Palmer showed that wording can reshape eyewitness reports—foundational for the misinformation effect.</p>
      <p class="cite">Loftus, E. F., &amp; Palmer, J. C. (1974). Reconstruction of automobile destruction. <em>Journal of Verbal Learning and Verbal Behavior, 13</em>(5), 585–589. <a href="https://doi.org/10.1016/S0022-5371(74)80011-3" target="_blank" rel="noopener">doi.org/10.1016/S0022-5371(74)80011-3</a></p>

      <p>Ebbinghaus’s forgetting curve and savings on relearning remain the classic quantitative start of memory science.</p>
      <p class="cite">Ebbinghaus, H. (1885/1913). <em>Memory: A contribution to experimental psychology</em> (H. A. Ruger &amp; C. E. Bussenius, Trans.). Teachers College. <a href="https://archive.org/details/memorycontributi00ebbiuoft" target="_blank" rel="noopener">archive.org</a></p>
''',
 edges=[
  ["encoding","storage","cross"],["storage","retrieval","cross"],["sensory","stm","cross"],["stm","ltm","cross"],
  ["explicit","implicit","cross"],["episodic","semantic","cross"],["hippocampus","consolidation","cross"],
  ["amygdala","flashbulb","cross"],["misinfo","eyewitness","cross"],["proactive","retroactive","cross"],
  ["chunking","elaborative","cross"],["anterograde","hippocampus","cross"]
 ],
 branches="\n".join([
  branch("Processes &amp; Stores", [
    ("encoding","Encoding","Encoding","Getting information into memory."),
    ("storage","Storage","Storage","Retaining encoded information."),
    ("retrieval","Retrieval","Retrieval","Recall, recognition, relearning."),
    ("sensory","Sensory memory","Sensory memory","Brief sensory trace."),
    ("stm","STM / working","STM / working memory","Limited-capacity active workspace."),
    ("ltm","Long-term memory","Long-term memory","Durable, high-capacity store."),
  ]),
  branch("Types &amp; Brain", [
    ("explicit","Explicit","Explicit memory","Conscious declarative memory."),
    ("episodic","Episodic","Episodic","Personal events."),
    ("semantic","Semantic","Semantic","Facts and concepts."),
    ("implicit","Implicit","Implicit memory","Without conscious recall (e.g., skills)."),
    ("hippocampus","Hippocampus","Hippocampus","Encoding/consolidation of new explicit memories."),
    ("amygdala","Amygdala","Amygdala","Emotion-linked memory modulation."),
    ("flashbulb","Flashbulb","Flashbulb memory","Vivid memory for surprising emotional events."),
    ("consolidation","Consolidation","Consolidation","Stabilizing a memory trace over time."),
  ]),
  branch("Errors &amp; Aids", [
    ("anterograde","Anterograde amnesia","Anterograde","Cannot form new memories after onset."),
    ("misinfo","Misinformation","Misinformation effect","Post-event info distorts memory."),
    ("eyewitness","Eyewitness","Eyewitness memory","Constructive and suggestible."),
    ("proactive","Proactive interference","Proactive","Old learning blocks new."),
    ("retroactive","Retroactive interference","Retroactive","New learning blocks old."),
    ("chunking","Chunking","Chunking","Group items into meaningful units."),
    ("elaborative","Elaborative rehearsal","Elaborative rehearsal","Link new info to meaning/knowledge."),
  ]),
 ]),
 practice_note="Level 1–3 · <strong>Level 4 · Cross-topic</strong> mixes memory with learning, biopsych, and research methods.",
)

print("ch7-8 dicts ok", len(CHAPTER_CONTENT))

# ---------------- Chapter 9 ----------------
CHAPTER_CONTENT[9] = dict(
 title="Lifespan Development",
 pages="280–320",
 slug="9-introduction",
 notes='''
      <h3>9.1 What Is Lifespan Development? <span class="cite">§9.1, ≈pp. 280–283</span></h3>
      <ul>
        <li>Development across the lifespan in <strong>physical</strong>, <strong>cognitive</strong>, and <strong>psychosocial</strong> domains.</li>
        <li>Normative approach; issues: continuity vs discontinuity; one course vs many; nature vs nurture.</li>
      </ul>

      <h3>9.2 Lifespan Theories <span class="cite">§9.2, ≈pp. 284–291</span></h3>
      <ul>
        <li>Freud’s psychosexual stages (historical); Erikson’s psychosocial crises across eight stages.</li>
        <li>Piaget: sensorimotor → preoperational → concrete operational → formal operational (schemas, assimilation/accommodation, object permanence, conservation, egocentrism).</li>
        <li>Kohlberg’s moral levels (preconventional, conventional, postconventional); Carol Gilligan’s care-perspective critique is often paired in discussion.</li>
      </ul>
      <p class="zh-remark">中文補充：皮亞傑重「怎麼想」、Erikson 重「社會任務／自我」、Kohlberg 重「道德推理階段」。</p>

      <h3>9.3 Stages of Development <span class="cite">§9.3, ≈pp. 292–311</span></h3>
      <ul>
        <li>Prenatal: germinal, embryonic, fetal; teratogens; newborn reflexes; attachment (Bowlby/Ainsworth themes); parenting styles.</li>
        <li>Childhood/adolescence: cognitive &amp; social growth, puberty, identity; emerging adulthood themes as in the chapter.</li>
        <li>Adulthood: early/middle/late—relationships, work, cognitive changes, socioemotional selectivity themes.</li>
      </ul>

      <h3>9.4 Death and Dying <span class="cite">§9.4, ≈pp. 312–320</span></h3>
      <ul>
        <li>Kübler-Ross stages as a widely cited model (denial, anger, bargaining, depression, acceptance)—not a rigid universal sequence.</li>
        <li>Hospice / palliative care goals emphasizing comfort and dignity.</li>
      </ul>
''',
 depth='''
      <p>Piaget’s stage theory remains the backbone of cognitive-development questions even where later research qualifies ages and cultural generality.</p>
      <p class="cite">Piaget, J. (1952). <em>The origins of intelligence in children</em> (M. Cook, Trans.). International Universities Press. <a href="https://archive.org/details/originsofinte00piag" target="_blank" rel="noopener">archive.org</a></p>

      <p>Erikson’s psychosocial stages extend development into adulthood with identity, intimacy, generativity, and integrity crises.</p>
      <p class="cite">Erikson, E. H. (1950). <em>Childhood and society</em>. Norton. <a href="https://books.google.com/books?id=MOHQVDk4dXwC" target="_blank" rel="noopener">Google Books</a></p>

      <p>Ainsworth’s Strange Situation operationalized attachment patterns that students must map to caregiver sensitivity.</p>
      <p class="cite">Ainsworth, M. D. S., Blehar, M. C., Waters, E., &amp; Wall, S. (1978). <em>Patterns of attachment</em>. Erlbaum. <a href="https://doi.org/10.4324/9780203758045" target="_blank" rel="noopener">doi.org/10.4324/9780203758045</a> (reissue). Classic article: Ainsworth, M. D. S., &amp; Bell, S. M. (1970). Attachment, exploration, and separation. <em>Child Development, 41</em>(1), 49–67. <a href="https://doi.org/10.2307/1127388" target="_blank" rel="noopener">doi.org/10.2307/1127388</a></p>

      <p>Vygotsky’s sociocultural emphasis (ZPD, scaffolding) complements Piaget’s stage focus with social mediation of cognition.</p>
      <p class="cite">Vygotsky, L. S. (1978). <em>Mind in society</em>. Harvard University Press. <a href="https://books.google.com/books?id=RxwWoT0F3UC" target="_blank" rel="noopener">Google Books id check</a> — prefer: <a href="https://www.hup.harvard.edu/books/9780674576292" target="_blank" rel="noopener">hup.harvard.edu</a></p>
''',
 edges=[
  ["physical","cognitive","cross"],["cognitive","psychosocial","cross"],["assimilation","accommodation","cross"],
  ["sensorimotor","preop","cross"],["preop","concrete","cross"],["concrete","formal","cross"],
  ["erikson","identity","cross"],["secure","avoidant","cross"],["authoritative","outcomes","cross"],
  ["nature","nurture","cross"],["kohlberg","piaget","cross"],["hospice","kubler","cross"]
 ],
 branches="\n".join([
  branch("Domains &amp; Issues", [
    ("physical","Physical","Physical domain","Body, brain, motor, health."),
    ("cognitive","Cognitive","Cognitive domain","Learning, memory, reasoning."),
    ("psychosocial","Psychosocial","Psychosocial domain","Emotion, personality, relationships."),
    ("nature","Nature","Nature","Genetic/biological contributions."),
    ("nurture","Nurture","Nurture","Experience and environment."),
  ]),
  branch("Major Theories", [
    ("piaget","Piaget","Piaget","Cognitive stages via schemas."),
    ("assimilation","Assimilation","Assimilation","Fit new info into existing schema."),
    ("accommodation","Accommodation","Accommodation","Change schema for new info."),
    ("sensorimotor","Sensorimotor","Sensorimotor","Object permanence develops."),
    ("preop","Preoperational","Preoperational","Symbols; egocentrism; weak conservation."),
    ("concrete","Concrete op.","Concrete operational","Conservation; concrete logic."),
    ("formal","Formal op.","Formal operational","Abstract and hypothetical reasoning."),
    ("erikson","Erikson","Erikson","Eight psychosocial crises."),
    ("identity","Identity","Identity vs role confusion","Adolescent psychosocial task."),
    ("kohlberg","Kohlberg","Kohlberg","Moral reasoning levels."),
  ]),
  branch("Attachment &amp; Aging", [
    ("secure","Secure attachment","Secure","Explores; upset then soothed."),
    ("avoidant","Avoidant","Avoidant","Little distress/avoid caregiver."),
    ("authoritative","Authoritative","Authoritative parenting","Warm + firm limits."),
    ("outcomes","Child outcomes","Child outcomes","Often linked to parenting style patterns."),
    ("kubler","Kübler-Ross","Kübler-Ross","Five dying/grief stage model."),
    ("hospice","Hospice","Hospice","Comfort-focused end-of-life care."),
  ]),
 ]),
 practice_note="Level 1–3 · <strong>Level 4 · Cross-topic</strong> mixes development with learning, cognition, and personality themes.",
)

# ---------------- Chapter 10 ----------------
CHAPTER_CONTENT[10] = dict(
 title="Emotion and Motivation",
 pages="322–358",
 slug="10-introduction",
 notes='''
      <h3>10.1 Motivation <span class="cite">§10.1, ≈pp. 322–327</span></h3>
      <ul>
        <li>Motivation = wants/needs directing behavior; intrinsic vs extrinsic.</li>
        <li>Theories: instincts; drive theory / homeostasis; arousal (Yerkes–Dodson); self-efficacy (Bandura); social motives; Maslow’s hierarchy.</li>
      </ul>

      <h3>10.2 Hunger and Eating <span class="cite">§10.2, ≈pp. 328–333</span></h3>
      <ul>
        <li>Physiological hunger/satiety signals; metabolic rate; set-point / settling-point themes; overweight/obesity health risks.</li>
        <li>Eating disorders as covered (anorexia nervosa, bulimia nervosa, binge eating)—biopsychosocial contributors.</li>
      </ul>

      <h3>10.3 Sexual Behavior, Sexuality, and Gender Identity <span class="cite">§10.3, ≈pp. 334–341</span></h3>
      <ul>
        <li>Hypothalamus/limbic contributions; Kinsey’s survey diversity; Masters &amp; Johnson sexual response cycle.</li>
        <li>Sexual orientation and gender identity are related but distinct constructs in the chapter’s framing.</li>
      </ul>

      <h3>10.4 Emotion <span class="cite">§10.4, ≈pp. 342–358</span></h3>
      <ul>
        <li>Emotion = subjective experience + physiological arousal + cognitive appraisal (+ expression).</li>
        <li>James–Lange; Cannon–Bard; Schachter–Singer two-factor; Lazarus cognitive-mediational themes; cultural display rules; Ekman universal emotions research.</li>
      </ul>
      <p class="zh-remark">中文補充：情緒理論常考「先身體還是先認知／兩者平行」的時間順序差異。</p>
''',
 depth='''
      <p>James’s peripheral theory and Cannon’s critique set up the classic ordering debate that Schachter and Singer reframed with arousal + appraisal.</p>
      <p class="cite">James, W. (1884). What is an emotion? <em>Mind, 9</em>(34), 188–205. <a href="https://doi.org/10.1093/mind/os-IX.34.188" target="_blank" rel="noopener">doi.org/10.1093/mind/os-IX.34.188</a></p>
      <p class="cite">Schachter, S., &amp; Singer, J. (1962). Cognitive, social, and physiological determinants of emotional state. <em>Psychological Review, 69</em>(5), 379–399. <a href="https://doi.org/10.1037/h0046234" target="_blank" rel="noopener">doi.org/10.1037/h0046234</a></p>

      <p>Ekman’s cross-cultural work on basic emotional expressions is the usual citation for universality claims (with ongoing debate).</p>
      <p class="cite">Ekman, P., &amp; Friesen, W. V. (1971). Constants across cultures in the face and emotion. <em>Journal of Personality and Social Psychology, 17</em>(2), 124–129. <a href="https://doi.org/10.1037/h0030377" target="_blank" rel="noopener">doi.org/10.1037/h0030377</a></p>

      <p>Maslow’s hierarchy is heuristic for motive stacking; read it as a model, not a strict empirical law.</p>
      <p class="cite">Maslow, A. H. (1943). A theory of human motivation. <em>Psychological Review, 50</em>(4), 370–396. <a href="https://doi.org/10.1037/h0054346" target="_blank" rel="noopener">doi.org/10.1037/h0054346</a></p>

      <p>Yerkes–Dodson links arousal to performance in an inverted-U pattern still cited in motivation/emotion units.</p>
      <p class="cite">Yerkes, R. M., &amp; Dodson, J. D. (1908). The relation of strength of stimulus to rapidity of habit-formation. <em>Journal of Comparative Neurology and Psychology, 18</em>, 459–482. <a href="https://doi.org/10.1002/cne.920180503" target="_blank" rel="noopener">doi.org/10.1002/cne.920180503</a></p>
''',
 edges=[
  ["intrinsic","extrinsic","cross"],["drive","homeostasis","cross"],["arousal","yerkes","cross"],
  ["maslow","selfefficacy","cross"],["james","cannon","cross"],["schachter","lazarus","cross"],
  ["ekman","display","cross"],["hunger","setpoint","cross"],["kinsey","orientation","cross"]
 ],
 branches="\n".join([
  branch("Motivation", [
    ("intrinsic","Intrinsic","Intrinsic motivation","For inherent satisfaction."),
    ("extrinsic","Extrinsic","Extrinsic motivation","For external reward/avoidance."),
    ("drive","Drive theory","Drive theory","Behavior reduces physiological drives."),
    ("homeostasis","Homeostasis","Homeostasis","Maintain internal balance."),
    ("arousal","Arousal theories","Arousal","Seek optimal stimulation."),
    ("yerkes","Yerkes–Dodson","Yerkes–Dodson","Inverted-U arousal–performance."),
    ("selfefficacy","Self-efficacy","Self-efficacy","Belief in ability to succeed."),
    ("maslow","Maslow","Maslow hierarchy","Needs from physiological to self-actualization."),
  ]),
  branch("Hunger &amp; Sex", [
    ("hunger","Hunger/satiety","Hunger and satiety","Physiological regulation of eating."),
    ("setpoint","Set / settling point","Body weight regulation","Resistant weight range themes."),
    ("kinsey","Kinsey","Kinsey","Surveyed sexual diversity."),
    ("masters","Masters &amp; Johnson","Sexual response cycle","Observed cycle phases."),
    ("orientation","Orientation / identity","Orientation vs identity","Related but distinct constructs."),
  ]),
  branch("Emotion", [
    ("james","James–Lange","James–Lange","Arousal then emotion."),
    ("cannon","Cannon–Bard","Cannon–Bard","Arousal and emotion simultaneous."),
    ("schachter","Two-factor","Schachter–Singer","Arousal + cognitive label."),
    ("lazarus","Lazarus","Cognitive-mediational","Appraisal shapes emotion."),
    ("ekman","Ekman","Basic emotions","Universal facial expressions research."),
    ("display","Display rules","Display rules","Culture guides emotion expression."),
  ]),
 ]),
 practice_note="Level 1–3 · <strong>Level 4 · Cross-topic</strong> mixes motivation/emotion with learning, biopsych, and social chapters.",
)

# ---------------- Chapter 11 ----------------
CHAPTER_CONTENT[11] = dict(
 title="Personality",
 pages="360–398",
 slug="11-introduction",
 notes='''
      <h3>11.1 What Is Personality? <span class="cite">§11.1, ≈pp. 360–361</span></h3>
      <ul>
        <li>Personality: long-standing traits and patterns that propel individuals to think, feel, and behave in similar ways across situations.</li>
      </ul>

      <h3>11.2–11.3 Psychodynamic &amp; Neo-Freudians <span class="cite">§11.2–11.3, ≈pp. 362–371</span></h3>
      <ul>
        <li>Freud: id/ego/superego; conscious–preconscious–unconscious; defense mechanisms; psychosexual stages.</li>
        <li>Neo-Freudians: Adler (inferiority/individual psychology), Erikson, Jung (collective unconscious/archetypes), Horney (coping styles; critique of Freud’s views on women).</li>
      </ul>

      <h3>11.4–11.5 Learning &amp; Humanistic <span class="cite">§11.4–11.5, ≈pp. 372–377</span></h3>
      <ul>
        <li>Behavioral: personality as learned response patterns; Bandura reciprocal determinism &amp; self-efficacy; Julian Rotter locus of control.</li>
        <li>Humanistic: Maslow; Rogers—self-concept, ideal vs real self, unconditional positive regard.</li>
      </ul>
      <p class="zh-remark">中文補充：行為／社會認知重「學得與信念」，人本主義重「成長與一致性」。</p>

      <h3>11.6–11.7 Biological &amp; Traits <span class="cite">§11.6–11.7, ≈pp. 378–383</span></h3>
      <ul>
        <li>Heritability / temperament; Eysenck dimensions; Big Five (OCEAN): openness, conscientiousness, extraversion, agreeableness, neuroticism.</li>
        <li>Trait vs situation debate (Mischel) as framed in the chapter.</li>
      </ul>

      <h3>11.8–11.9 Culture &amp; Assessment <span class="cite">§11.8–11.9, ≈pp. 384–398</span></h3>
      <ul>
        <li>Individualist vs collectivist contexts shaping personality expression.</li>
        <li>Self-report inventories (MMPI, MBTI caveats as discussed) vs projective tests (Rorschach, TAT)—reliability/validity issues.</li>
      </ul>
''',
 depth='''
      <p>The Five-Factor Model is the dominant trait taxonomy in contemporary personality research.</p>
      <p class="cite">McCrae, R. R., &amp; Costa, P. T., Jr. (1987). Validation of the five-factor model of personality across instruments and observers. <em>Journal of Personality and Social Psychology, 52</em>(1), 81–90. <a href="https://doi.org/10.1037/0022-3514.52.1.81" target="_blank" rel="noopener">doi.org/10.1037/0022-3514.52.1.81</a></p>

      <p>Mischel’s critique sparked the person–situation debate and later social-cognitive reconceptualizations of consistency.</p>
      <p class="cite">Mischel, W. (1968). <em>Personality and assessment</em>. Wiley. <a href="https://books.google.com/books?id=1QZqAAAAMAAJ" target="_blank" rel="noopener">Google Books</a>. See also Mischel, W., &amp; Shoda, Y. (1995). A cognitive-affective system theory of personality. <em>Psychological Review, 102</em>(2), 246–268. <a href="https://doi.org/10.1037/0033-295X.102.2.246" target="_blank" rel="noopener">doi.org/10.1037/0033-295X.102.2.246</a></p>

      <p>Rogers’s client-centered conditions (empathy, congruence, UPR) link personality growth to therapeutic climate.</p>
      <p class="cite">Rogers, C. R. (1957). The necessary and sufficient conditions of therapeutic personality change. <em>Journal of Consulting Psychology, 21</em>(2), 95–103. <a href="https://doi.org/10.1037/h0045357" target="_blank" rel="noopener">doi.org/10.1037/h0045357</a></p>

      <p>Bandura’s reciprocal determinism ties traits-in-context to learning without abandoning cognition.</p>
      <p class="cite">Bandura, A. (1978). The self system in reciprocal determinism. <em>American Psychologist, 33</em>(4), 344–358. <a href="https://doi.org/10.1037/0003-066X.33.4.344" target="_blank" rel="noopener">doi.org/10.1037/0003-066X.33.4.344</a></p>
''',
 edges=[
  ["id","ego","cross"],["ego","superego","cross"],["jung","adler","cross"],
  ["reciprocal","selfefficacy","cross"],["realself","idealself","cross"],
  ["ocean","eysenck","cross"],["mmpi","projective","cross"],["individualist","collectivist","cross"],
  ["mischel","ocean","cross"]
 ],
 branches="\n".join([
  branch("Psychodynamic", [
    ("id","Id","Id","Pleasure principle."),
    ("ego","Ego","Ego","Reality principle."),
    ("superego","Superego","Superego","Moral standards."),
    ("defense","Defenses","Defense mechanisms","Unconscious ego protection."),
    ("jung","Jung","Jung","Collective unconscious / archetypes."),
    ("adler","Adler","Adler","Inferiority &amp; striving."),
  ]),
  branch("Learning &amp; Humanistic", [
    ("reciprocal","Reciprocal determinism","Reciprocal determinism","Person × behavior × environment."),
    ("selfefficacy","Self-efficacy","Self-efficacy","Confidence in coping/ability."),
    ("locus","Locus of control","Locus of control","Internal vs external expectancies."),
    ("realself","Real self","Real self","Who one presently is."),
    ("idealself","Ideal self","Ideal self","Who one wants to be."),
    ("upr","UPR","Unconditional positive regard","Accepted without conditions."),
  ]),
  branch("Traits &amp; Assessment", [
    ("eysenck","Eysenck","Eysenck","Broad biological trait dimensions."),
    ("ocean","Big Five","Big Five / OCEAN","O, C, E, A, N."),
    ("mischel","Person–situation","Person–situation debate","Cross-situational consistency limits."),
    ("mmpi","Inventories","Self-report inventories","Structured questionnaires (e.g., MMPI)."),
    ("projective","Projective tests","Projective tests","Ambiguous stimuli (Rorschach/TAT)."),
    ("individualist","Individualist","Individualist cultures","Emphasis on personal goals/autonomy."),
    ("collectivist","Collectivist","Collectivist cultures","Emphasis on group harmony/roles."),
  ]),
 ]),
 practice_note="Level 1–3 · <strong>Level 4 · Cross-topic</strong> mixes personality with development, learning, and therapy themes.",
)

# ---------------- Chapter 12 ----------------
CHAPTER_CONTENT[12] = dict(
 title="Social Psychology",
 pages="400–444",
 slug="12-introduction",
 notes='''
      <h3>12.1 What Is Social Psychology? <span class="cite">§12.1, ≈pp. 400–405</span></h3>
      <ul>
        <li>Social psychology: how people affect one another’s thoughts, feelings, and behaviors; situationism vs dispositionism.</li>
        <li>Fundamental attribution error; actor–observer bias; self-serving bias; just-world hypothesis.</li>
      </ul>

      <h3>12.2 Self-presentation <span class="cite">§12.2, ≈pp. 406–407</span></h3>
      <ul>
        <li>Social roles, social norms, scripts; Stanford prison experiment as a dramatic (and debated) illustration of roles/power.</li>
      </ul>

      <h3>12.3 Attitudes and Persuasion <span class="cite">§12.3, ≈pp. 408–413</span></h3>
      <ul>
        <li>Attitudes: affective, behavioral, cognitive components; cognitive dissonance (Festinger); persuasion routes / features of speaker-message-audience.</li>
      </ul>

      <h3>12.4 Conformity, Compliance, Obedience <span class="cite">§12.4, ≈pp. 414–421</span></h3>
      <ul>
        <li>Asch conformity; compliance techniques; Milgram obedience; groupthink; group polarization; social facilitation/loafing.</li>
      </ul>
      <p class="zh-remark">中文補充：從眾（Asch）≠服從（Milgram）≠合規技巧；分清規範影響與權威指令。</p>

      <h3>12.5–12.7 Prejudice, Aggression, Prosocial <span class="cite">§12.5–12.7, ≈pp. 422–444</span></h3>
      <ul>
        <li>Prejudice, stereotypes, discrimination; self-fulfilling prophecy; in-group/out-group; scapegoating.</li>
        <li>Aggression: hostile vs instrumental; bullying; bystander themes; altruism; empathy; homophily; Sternberg’s triangular theory of love; social exchange / reciprocity.</li>
      </ul>
''',
 depth='''
      <p>Festinger’s dissonance theory predicts attitude change when behavior and belief clash without sufficient external justification.</p>
      <p class="cite">Festinger, L., &amp; Carlsmith, J. M. (1959). Cognitive consequences of forced compliance. <em>Journal of Abnormal and Social Psychology, 58</em>(2), 203–210. <a href="https://doi.org/10.1037/h0041593" target="_blank" rel="noopener">doi.org/10.1037/h0041593</a></p>

      <p>Asch’s line studies remain the standard demonstration of normative conformity pressure.</p>
      <p class="cite">Asch, S. E. (1956). Studies of independence and conformity: I. A minority of one against a unanimous majority. <em>Psychological Monographs, 70</em>(9), 1–70. <a href="https://doi.org/10.1037/h0093718" target="_blank" rel="noopener">doi.org/10.1037/h0093718</a></p>

      <p>Milgram’s obedience paradigm shows destructive compliance to legitimate-seeming authority—ethics and interpretation still discussed.</p>
      <p class="cite">Milgram, S. (1963). Behavioral study of obedience. <em>Journal of Abnormal and Social Psychology, 67</em>(4), 371–378. <a href="https://doi.org/10.1037/h0040525" target="_blank" rel="noopener">doi.org/10.1037/h0040525</a></p>

      <p>Darley and Latané’s bystander work links diffusion of responsibility to helping failures in groups.</p>
      <p class="cite">Darley, J. M., &amp; Latané, B. (1968). Bystander intervention in emergencies: Diffusion of responsibility. <em>Journal of Personality and Social Psychology, 8</em>(4), 377–383. <a href="https://doi.org/10.1037/h0025589" target="_blank" rel="noopener">doi.org/10.1037/h0025589</a></p>
''',
 edges=[
  ["fae","actorobserver","cross"],["dissonance","persuasion","cross"],["asch","milgram","cross"],
  ["groupthink","polarization","cross"],["stereotype","discrimination","cross"],["ingroup","outgroup","cross"],
  ["hostile","instrumental","cross"],["bystander","diffusion","cross"],["altruism","empathy","cross"],
  ["roles","norms","cross"]
 ],
 branches="\n".join([
  branch("Attribution &amp; Self", [
    ("fae","Fund. attrib. error","Fundamental attribution error","Overweight dispositions for others."),
    ("actorobserver","Actor–observer","Actor–observer bias","Situations for self; traits for others."),
    ("selfserving","Self-serving bias","Self-serving bias","Credit self for success; blame situation for failure."),
    ("roles","Social roles","Social roles","Expected behavior patterns in positions."),
    ("norms","Social norms","Social norms","Group rules for behavior."),
  ]),
  branch("Influence", [
    ("dissonance","Cognitive dissonance","Cognitive dissonance","Discomfort from inconsistency."),
    ("persuasion","Persuasion","Persuasion","Attitude change via message features."),
    ("asch","Asch","Asch conformity","Yielding to group judgment."),
    ("milgram","Milgram","Milgram obedience","Following authority orders."),
    ("groupthink","Groupthink","Groupthink","Consensus pressure harms decision quality."),
    ("polarization","Group polarization","Group polarization","Discussion strengthens leaning."),
  ]),
  branch("Bias, Harm, Help", [
    ("stereotype","Stereotype","Stereotype","Belief about a group."),
    ("discrimination","Discrimination","Discrimination","Negative action toward a group."),
    ("ingroup","In-group","In-group","Group we identify with."),
    ("outgroup","Out-group","Out-group","Group we see as other."),
    ("hostile","Hostile aggression","Hostile aggression","Pain-aimed aggression."),
    ("instrumental","Instrumental aggression","Instrumental","Means-to-an-end aggression."),
    ("bystander","Bystander effect","Bystander effect","Less help when others present."),
    ("diffusion","Diffusion of responsibility","Diffusion of responsibility","Responsibility shared → less action."),
    ("altruism","Altruism","Altruism","Helping without obvious self-gain."),
    ("empathy","Empathy","Empathy","Vicarious feeling/understanding."),
  ]),
 ]),
 practice_note="Level 1–3 · <strong>Level 4 · Cross-topic</strong> mixes social psych with personality, learning, and methods/ethics.",
)

print("dicts through 12:", sorted(CHAPTER_CONTENT))

# ---------------- Chapter 13 ----------------
CHAPTER_CONTENT[13] = dict(
 title="Industrial-Organizational Psychology",
 pages="446–482",
 slug="13-introduction",
 notes='''
      <h3>13.1 What Is I-O Psychology? <span class="cite">§13.1, ≈pp. 446–453</span></h3>
      <ul>
        <li>I-O psychology applies psychological principles to the workplace: industrial (job analysis, selection, training, appraisal) and organizational (social systems, motivation, culture).</li>
        <li>Historical roots include early selection testing and the Hawthorne studies’ attention to social factors.</li>
      </ul>

      <h3>13.2 Industrial Psychology <span class="cite">§13.2, ≈pp. 454–463</span></h3>
      <ul>
        <li>Job analysis (task- vs worker-oriented); candidate testing &amp; interviews; training; performance appraisal.</li>
        <li>Legal constraints on discriminatory hiring; bias risks in selection tools.</li>
      </ul>

      <h3>13.3 Organizational Psychology <span class="cite">§13.3, ≈pp. 464–473</span></h3>
      <ul>
        <li>Job satisfaction predictors/outcomes; leadership theories (e.g., Theory X/Y, transactional vs transformational themes as in the chapter).</li>
        <li>Organizational culture/climate; diversity; harassment (hostile environment; quid pro quo); work–family conflict; telecommuting themes.</li>
      </ul>
      <p class="zh-remark">中文補充：Industrial 偏「選人／評核／訓練」；Organizational 偏「動機／領導／文化／壓力」。</p>

      <h3>13.4 Human Factors <span class="cite">§13.4, ≈pp. 474–482</span></h3>
      <ul>
        <li>Human factors / ergonomics: design tools, machines, and work environments to fit human capabilities and reduce error/strain.</li>
      </ul>
''',
 depth='''
      <p>The Hawthorne studies are often mythologized; modern readings stress careful interpretation of attention, norms, and methodology.</p>
      <p class="cite">Mayo, E. (1933). <em>The human problems of an industrial civilization</em>. Macmillan. <a href="https://archive.org/details/humanproblemsofi00mayo" target="_blank" rel="noopener">archive.org</a>. Critical review: Olson, R., Verley, J., Santos, L., &amp; Salas, C. (2004). What we teach students about the Hawthorne studies. <em>The Industrial-Organizational Psychologist</em>. <a href="https://www.siop.org/wp-content/uploads/tip/july04/pdf/419_23to30.pdf" target="_blank" rel="noopener">SIOP PDF</a></p>

      <p>Hackman and Oldham’s job characteristics model links core job dimensions to critical psychological states and outcomes.</p>
      <p class="cite">Hackman, J. R., &amp; Oldham, G. R. (1976). Motivation through the design of work: Test of a theory. <em>Organizational Behavior and Human Performance, 16</em>(2), 250–279. <a href="https://doi.org/10.1016/0030-5073(76)90016-7" target="_blank" rel="noopener">doi.org/10.1016/0030-5073(76)90016-7</a></p>

      <p>Bass’s transformational leadership research distinguishes inspirational change-oriented leadership from transactional exchange.</p>
      <p class="cite">Bass, B. M. (1990). From transactional to transformational leadership: Learning to share the vision. <em>Organizational Dynamics, 18</em>(3), 19–31. <a href="https://doi.org/10.1016/0090-2616(90)90061-S" target="_blank" rel="noopener">doi.org/10.1016/0090-2616(90)90061-S</a></p>

      <p>Schmidt and Hunter’s meta-analytic work is a classic on the validity of selection procedures.</p>
      <p class="cite">Schmidt, F. L., &amp; Hunter, J. E. (1998). The validity and utility of selection methods in personnel psychology. <em>Psychological Bulletin, 124</em>(2), 262–274. <a href="https://doi.org/10.1037/0033-2909.124.2.262" target="_blank" rel="noopener">doi.org/10.1037/0033-2909.124.2.262</a></p>
''',
 edges=[
  ["jobanalysis","selection","cross"],["selection","appraisal","cross"],["hawthorne","satisfaction","cross"],
  ["theoryxy","transformational","cross"],["culture","harassment","cross"],["ergonomics","errors","cross"],
  ["industrial","organizational","cross"]
 ],
 branches="\n".join([
  branch("Industrial", [
    ("industrial","Industrial psych","Industrial psychology","Jobs, selection, training, appraisal."),
    ("jobanalysis","Job analysis","Job analysis","Describe tasks or KSAOs required."),
    ("selection","Selection","Selection","Tests/interviews to hire."),
    ("training","Training","Training","Onboarding and skill development."),
    ("appraisal","Performance appraisal","Performance appraisal","Evaluate employee performance."),
  ]),
  branch("Organizational", [
    ("organizational","Organizational psych","Organizational psychology","Social processes at work."),
    ("hawthorne","Hawthorne","Hawthorne studies","Social/attention factors in productivity."),
    ("satisfaction","Job satisfaction","Job satisfaction","Attitudes toward one’s job."),
    ("theoryxy","Theory X / Y","Theory X / Y","Assumptions about workers (McGregor)."),
    ("transformational","Transformational","Transformational leadership","Inspire and develop followers."),
    ("culture","Org culture","Organizational culture","Shared values, norms, practices."),
    ("harassment","Harassment","Workplace harassment","Hostile environment / quid pro quo."),
  ]),
  branch("Human Factors", [
    ("ergonomics","Ergonomics","Human factors / ergonomics","Fit tools/environments to humans."),
    ("errors","Error reduction","Error reduction","Design to reduce human error."),
    ("telework","Telework","Telecommuting","Remote work tradeoffs."),
  ]),
 ]),
 practice_note="Level 1–3 · <strong>Level 4 · Cross-topic</strong> mixes I-O with social psych, motivation, and research methods.",
)

# ---------------- Chapter 14 ----------------
CHAPTER_CONTENT[14] = dict(
 title="Stress, Lifestyle, and Health",
 pages="484–534",
 slug="14-introduction",
 notes='''
      <h3>14.1 What Is Stress? <span class="cite">§14.1, ≈pp. 484–493</span></h3>
      <ul>
        <li>Stress as process: appraise events as overwhelming/threatening; health psychology studies psychological influences on health.</li>
        <li>Cannon fight-or-flight; HPA axis; Selye’s General Adaptation Syndrome—alarm, resistance, exhaustion.</li>
      </ul>

      <h3>14.2 Stressors <span class="cite">§14.2, ≈pp. 494–499</span></h3>
      <ul>
        <li>Chronic vs acute stressors; traumatic events; life changes (SRRS / LCUs—Holmes &amp; Rahe); daily hassles; job strain / job burnout.</li>
      </ul>

      <h3>14.3 Stress and Illness <span class="cite">§14.3, ≈pp. 500–511</span></h3>
      <ul>
        <li>Psychophysiological disorders; immunosuppression themes; cardiovascular disease &amp; Type A hostility components; asthma; tension headaches as discussed.</li>
      </ul>
      <p class="zh-remark">中文補充：壓力→疾病不是單純「想太多」，而是評估、生理軸線與行為路徑交織。</p>

      <h3>14.4 Regulation of Stress <span class="cite">§14.4, ≈pp. 512–517</span></h3>
      <ul>
        <li>Coping: problem-focused vs emotion-focused; perceived control; social support; stress-reduction techniques (exercise, meditation, biofeedback, relaxation).</li>
      </ul>

      <h3>14.5 The Pursuit of Happiness <span class="cite">§14.5, ≈pp. 518–534</span></h3>
      <ul>
        <li>Positive psychology; happiness factors (adaptation, affective forecasting limits); flow; optimism; practices that relate to well-being as in the chapter.</li>
      </ul>
''',
 depth='''
      <p>Selye’s GAS remains the textbook physiological stress sequence even as modern models add appraisal and recovery.</p>
      <p class="cite">Selye, H. (1950). Stress and the general adaptation syndrome. <em>British Medical Journal, 1</em>(4667), 1383–1392. <a href="https://doi.org/10.1136/bmj.1.4667.1383" target="_blank" rel="noopener">doi.org/10.1136/bmj.1.4667.1383</a></p>

      <p>Lazarus and Folkman’s transactional model centers cognitive appraisal and coping type.</p>
      <p class="cite">Lazarus, R. S., &amp; Folkman, S. (1984). <em>Stress, appraisal, and coping</em>. Springer. <a href="https://books.google.com/books?id=i-ySQQuUpr8C" target="_blank" rel="noopener">Google Books</a></p>

      <p>Cohen and colleagues’ work links perceived stress and social ties to immune and illness outcomes.</p>
      <p class="cite">Cohen, S., Tyrrell, D. A., &amp; Smith, A. P. (1991). Psychological stress and susceptibility to the common cold. <em>New England Journal of Medicine, 325</em>(9), 606–612. <a href="https://doi.org/10.1056/NEJM199108293250903" target="_blank" rel="noopener">doi.org/10.1056/NEJM199108293250903</a></p>

      <p>Seligman’s positive psychology agenda reframes health psychology toward strengths, optimism, and well-being—not only pathology.</p>
      <p class="cite">Seligman, M. E. P., &amp; Csikszentmihalyi, M. (2000). Positive psychology: An introduction. <em>American Psychologist, 55</em>(1), 5–14. <a href="https://doi.org/10.1037/0003-066X.55.1.5" target="_blank" rel="noopener">doi.org/10.1037/0003-066X.55.1.5</a></p>
''',
 edges=[
  ["appraisal","gas","cross"],["hpa","fightflight","cross"],["chronic","hassles","cross"],
  ["srrs","illness","cross"],["problemfocus","emotionfocus","cross"],["control","support","cross"],
  ["typea","cardiovascular","cross"],["flow","happiness","cross"]
 ],
 branches="\n".join([
  branch("Stress Biology", [
    ("appraisal","Appraisal","Cognitive appraisal","Threat/challenge evaluation."),
    ("fightflight","Fight-or-flight","Fight-or-flight","Sympathetic emergency response."),
    ("hpa","HPA axis","HPA axis","Hypothalamic–pituitary–adrenal stress axis."),
    ("gas","GAS","General Adaptation Syndrome","Alarm → resistance → exhaustion."),
  ]),
  branch("Stressors &amp; Health", [
    ("chronic","Chronic stressors","Chronic stressors","Long-term demands."),
    ("hassles","Daily hassles","Daily hassles","Minor recurring irritations."),
    ("srrs","SRRS","SRRS / LCUs","Life-change stress checklist."),
    ("jobstrain","Job strain","Job strain","High demand + low control."),
    ("illness","Illness risk","Illness links","Stress-related health vulnerability."),
    ("typea","Type A","Type A pattern","Competitive, hurried; hostility risk focus."),
    ("cardiovascular","CVD","Cardiovascular risk","Stress-linked heart disease pathways."),
  ]),
  branch("Coping &amp; Well-being", [
    ("problemfocus","Problem-focused","Problem-focused coping","Change the stressor."),
    ("emotionfocus","Emotion-focused","Emotion-focused coping","Change emotional response."),
    ("control","Perceived control","Perceived control","Belief one can influence outcomes."),
    ("support","Social support","Social support","Tangible/emotional aid from others."),
    ("flow","Flow","Flow","Absorbed optimal experience."),
    ("happiness","Positive psych","Positive psychology","Study of well-being and strengths."),
  ]),
 ]),
 practice_note="Level 1–3 · <strong>Level 4 · Cross-topic</strong> mixes stress/health with emotion, biopsych, and social support.",
)

# ---------------- Chapter 15 ----------------
CHAPTER_CONTENT[15] = dict(
 title="Psychological Disorders",
 pages="536–596",
 slug="15-introduction",
 notes='''
      <h3>15.1–15.3 Definition, DSM, Perspectives <span class="cite">§15.1–15.3, ≈pp. 536–545</span></h3>
      <ul>
        <li>Disorder ≈ significant disturbance in thoughts/feelings/behaviors reflecting dysfunction, with distress/impairment—not merely atypical or culturally expected reactions.</li>
        <li>DSM-5 classification; comorbidity; labeling pros/cons; supernatural → biological → diathesis–stress / biopsychosocial perspectives.</li>
      </ul>

      <h3>15.4–15.6 Anxiety, OCD, PTSD <span class="cite">§15.4–15.6, ≈pp. 546–557</span></h3>
      <ul>
        <li>Specific phobia, social anxiety, panic disorder/agoraphobia, GAD; learning and cognitive pathways.</li>
        <li>OCD (obsessions/compulsions), body dysmorphic disorder, hoarding; PTSD after trauma—intrusions, avoidance, negative cognitions/mood, arousal changes.</li>
      </ul>

      <h3>15.7–15.8 Mood &amp; Schizophrenia <span class="cite">§15.7–15.8, ≈pp. 558–571</span></h3>
      <ul>
        <li>Major depressive disorder; bipolar disorder; biological &amp; cognitive vulnerability themes.</li>
        <li>Schizophrenia: positive vs negative symptoms; dopamine / neural hypotheses as presented; genetic risk.</li>
      </ul>
      <p class="zh-remark">中文補充：分清「正性症狀（幻覺／妄想）」與「負性症狀（情感淡漠／無動機）」。</p>

      <h3>15.9–15.11 Dissociative, Childhood, Personality <span class="cite">§15.9–15.11, ≈pp. 572–596</span></h3>
      <ul>
        <li>Dissociative amnesia, depersonalization/derealization, dissociative identity disorder (controversial prevalence/etiology debates).</li>
        <li>ADHD, autism spectrum disorder themes; personality disorders in clusters (A odd, B dramatic, C anxious)—e.g., borderline, antisocial as highlighted.</li>
      </ul>
''',
 depth='''
      <p>Wakefield’s harmful-dysfunction analysis influenced how modern definitions combine value (harm) and scientific (dysfunction) judgments.</p>
      <p class="cite">Wakefield, J. C. (1992). Disorder as harmful dysfunction: A conceptual critique of DSM-III-R’s definition of mental disorder. <em>Psychological Review, 99</em>(2), 232–247. <a href="https://doi.org/10.1037/0033-295X.99.2.232" target="_blank" rel="noopener">doi.org/10.1037/0033-295X.99.2.232</a></p>

      <p>Rosenhan’s “On being sane in insane places” remains a classic (and contested) critique of psychiatric labeling and hospital context.</p>
      <p class="cite">Rosenhan, D. L. (1973). On being sane in insane places. <em>Science, 179</em>(4070), 250–258. <a href="https://doi.org/10.1126/science.179.4070.250" target="_blank" rel="noopener">doi.org/10.1126/science.179.4070.250</a></p>

      <p>Beck’s cognitive model of depression anchors cognitive vulnerability and later CBT.</p>
      <p class="cite">Beck, A. T. (1967). <em>Depression: Clinical, experimental, and theoretical aspects</em>. Harper &amp; Row. <a href="https://books.google.com/books?id=11bJbTD7TaYC" target="_blank" rel="noopener">Google Books</a>. Article: Beck, A. T. (2008). The evolution of the cognitive model of depression. <em>American Journal of Psychiatry, 165</em>(8), 969–977. <a href="https://doi.org/10.1176/appi.ajp.2008.08050721" target="_blank" rel="noopener">doi.org/10.1176/appi.ajp.2008.08050721</a></p>

      <p>Gottesman and others’ behavioral-genetics summaries support diathesis–stress thinking for schizophrenia liability.</p>
      <p class="cite">Gottesman, I. I. (1991). <em>Schizophrenia genesis: The origins of madness</em>. Freeman. <a href="https://books.google.com/books?id=5Qp-QgAACAAJ" target="_blank" rel="noopener">Google Books</a>. Review: Sullivan, P. F., Kendler, K. S., &amp; Neale, M. C. (2003). Schizophrenia as a complex trait. <em>Archives of General Psychiatry, 60</em>(12), 1187–1192. <a href="https://doi.org/10.1001/archpsyc.60.12.1187" target="_blank" rel="noopener">doi.org/10.1001/archpsyc.60.12.1187</a></p>
''',
 edges=[
  ["dsm","comorbidity","cross"],["diathesis","stressor","cross"],["phobia","panic","cross"],
  ["obsession","compulsion","cross"],["ptsd","trauma","cross"],["mdd","bipolar","cross"],
  ["positive","negative","cross"],["adhd","asd","cross"],["clusterb","borderline","cross"]
 ],
 branches="\n".join([
  branch("Definition", [
    ("dsm","DSM-5","DSM-5","U.S. diagnostic manual categories."),
    ("comorbidity","Comorbidity","Comorbidity","Co-occurrence of disorders."),
    ("diathesis","Diathesis","Diathesis","Predisposition / vulnerability."),
    ("stressor","Stress (trigger)","Stress trigger","Precipitating environmental load."),
  ]),
  branch("Anxiety–Mood–Psychosis", [
    ("phobia","Phobias","Specific/social phobia","Marked fear of objects/situations/scrutiny."),
    ("panic","Panic / GAD","Panic &amp; GAD","Panic attacks; chronic worry."),
    ("obsession","Obsessions","Obsessions","Intrusive unwanted thoughts."),
    ("compulsion","Compulsions","Compulsions","Rituals to reduce anxiety."),
    ("ptsd","PTSD","PTSD","Trauma-related intrusion/avoidance/arousal."),
    ("trauma","Trauma","Trauma","Exposure to actual/threatened death, injury, violence."),
    ("mdd","MDD","Major depression","Depressed mood / anhedonia cluster."),
    ("bipolar","Bipolar","Bipolar disorder","Depression + mania/hypomania history."),
    ("positive","Positive symptoms","Positive symptoms","Hallucinations, delusions, disorganized speech."),
    ("negative","Negative symptoms","Negative symptoms","Flat affect, avolition, alogia."),
  ]),
  branch("Other Categories", [
    ("did","DID","Dissociative identity","Multiple identity states (debated)."),
    ("adhd","ADHD","ADHD","Inattention / hyperactivity-impulsivity."),
    ("asd","ASD","Autism spectrum","Social communication + restricted patterns."),
    ("clusterb","Cluster B","Cluster B PDs","Dramatic/emotional/erratic cluster."),
    ("borderline","Borderline PD","Borderline PD","Instability in relationships, self, affect."),
    ("antisocial","Antisocial PD","Antisocial PD","Disregard for rights of others."),
  ]),
 ]),
 practice_note="Level 1–3 · <strong>Level 4 · Cross-topic</strong> mixes disorders with learning, biopsych, stress, and personality.",
)

# ---------------- Chapter 16 ----------------
CHAPTER_CONTENT[16] = dict(
 title="Therapy and Treatment",
 pages="598–632",
 slug="16-introduction",
 notes='''
      <h3>16.1 Past and Present <span class="cite">§16.1, ≈pp. 598–601</span></h3>
      <ul>
        <li>From supernatural treatments/asylums to Pinel &amp; Dix reforms; deinstitutionalization; today’s short-stay hospitals + outpatient care by diverse professionals.</li>
      </ul>

      <h3>16.2 Types of Treatment <span class="cite">§16.2, ≈pp. 602–615</span></h3>
      <ul>
        <li>Psychotherapy vs biomedical therapy.</li>
        <li>Psychoanalysis/psychodynamic (free association, dream analysis, transference); play therapy; behavior therapy (counterconditioning, exposure, systematic desensitization, aversive conditioning, token economies).</li>
        <li>Cognitive &amp; CBT; humanistic (Rogers client-centered: active listening, UPR, genuineness, empathy).</li>
        <li>Biomedical: psychotropic meds classes as surveyed; ECT; newer brain-stimulation themes as in the chapter.</li>
      </ul>
      <p class="zh-remark">中文補充：行為治療改「行為」，認知／CBT 改「想法＋行為」，人本重「關係條件」。</p>

      <h3>16.3 Treatment Modalities <span class="cite">§16.3, ≈pp. 616–619</span></h3>
      <ul>
        <li>Individual, group, couples, family therapy formats; intake / confidentiality / legal limits themes.</li>
      </ul>

      <h3>16.4 Substance-Related Disorders <span class="cite">§16.4, ≈pp. 620–621</span></h3>
      <ul>
        <li>Comorbidities; group formats (e.g., 12-step); sociocultural context of addiction treatment.</li>
      </ul>

      <h3>16.5 Sociocultural Model &amp; Utilization <span class="cite">§16.5, ≈pp. 622–632</span></h3>
      <ul>
        <li>Cultural competence; barriers to treatment (stigma, access, insurance, ethnicity/language); involuntary treatment issues as discussed.</li>
      </ul>
''',
 depth='''
      <p>Wolpe’s systematic desensitization is the classic counterconditioning package for phobias.</p>
      <p class="cite">Wolpe, J. (1958). <em>Psychotherapy by reciprocal inhibition</em>. Stanford University Press. <a href="https://books.google.com/books?id=l1NrAAAAMAAJ" target="_blank" rel="noopener">Google Books</a>. Related: Wolpe, J. (1961). The systematic desensitization treatment of neuroses. <em>Journal of Nervous and Mental Disease, 132</em>, 189–203. <a href="https://doi.org/10.1097/00005053-196103000-00001" target="_blank" rel="noopener">doi.org/10.1097/00005053-196103000-00001</a></p>

      <p>Beck’s CBT manualized approach targets automatic thoughts, cognitive distortions, and behavioral experiments.</p>
      <p class="cite">Beck, A. T. (1979). <em>Cognitive therapy of depression</em>. Guilford Press. <a href="https://books.google.com/books?id=L09zDsyC8lUC" target="_blank" rel="noopener">Google Books</a></p>

      <p>Rogers’s necessary-and-sufficient conditions paper is the humanistic therapy cornerstone.</p>
      <p class="cite">Rogers, C. R. (1957). The necessary and sufficient conditions of therapeutic personality change. <em>Journal of Consulting Psychology, 21</em>(2), 95–103. <a href="https://doi.org/10.1037/h0045357" target="_blank" rel="noopener">doi.org/10.1037/h0045357</a></p>

      <p>Smith and Glass’s early meta-analysis helped establish psychotherapy’s average effectiveness against controls.</p>
      <p class="cite">Smith, M. L., &amp; Glass, G. V. (1977). Meta-analysis of psychotherapy outcome studies. <em>American Psychologist, 32</em>(9), 752–760. <a href="https://doi.org/10.1037/0003-066X.32.9.752" target="_blank" rel="noopener">doi.org/10.1037/0003-066X.32.9.752</a></p>
''',
 edges=[
  ["psychoanalysis","psychodynamic","cross"],["exposure","desensitization","cross"],["cognitive","cbt","cross"],
  ["upc","empathy","cross"],["biomedical","ect","cross"],["group","family","cross"],
  ["stigma","barriers","cross"],["behavior","token","cross"]
 ],
 branches="\n".join([
  branch("Talk Therapies", [
    ("psychoanalysis","Psychoanalysis","Psychoanalysis","Unconscious conflict; free association."),
    ("psychodynamic","Psychodynamic","Psychodynamic","Modern shorter insight therapies."),
    ("cognitive","Cognitive therapy","Cognitive therapy","Change maladaptive thoughts."),
    ("cbt","CBT","CBT","Thoughts + behaviors together."),
    ("upc","Client-centered","Client-centered","Rogers: UPR, empathy, genuineness."),
    ("empathy","Empathy","Empathy","Accurate emotional understanding."),
  ]),
  branch("Behavioral &amp; Bio", [
    ("behavior","Behavior therapy","Behavior therapy","Apply learning principles."),
    ("exposure","Exposure","Exposure therapy","Face feared CS without avoidance."),
    ("desensitization","Sys. desensitization","Systematic desensitization","Relaxation + graded exposure."),
    ("token","Token economy","Token economy","Tokens reinforce target behaviors."),
    ("biomedical","Biomedical","Biomedical therapy","Meds / somatic treatments."),
    ("ect","ECT","ECT","Electroconvulsive therapy for severe cases."),
  ]),
  branch("Formats &amp; Access", [
    ("group","Group therapy","Group therapy","Multiple clients; interpersonal learning."),
    ("family","Family / couples","Family &amp; couples","Systems/relational focus."),
    ("stigma","Stigma","Stigma","Social mark that blocks help-seeking."),
    ("barriers","Barriers","Treatment barriers","Cost, access, culture, insurance."),
    ("competence","Cultural competence","Cultural competence","Therapists adapt to cultural context."),
  ]),
 ]),
 practice_note="Level 1–3 · <strong>Level 4 · Cross-topic</strong> mixes therapy with disorders, learning, personality, and social stigma.",
)


def main():
    assert set(CHAPTER_CONTENT) == set(range(7, 17)), sorted(CHAPTER_CONTENT)
    for ch, meta in CHAPTER_CONTENT.items():
        title = dict(CHAPTERS)[ch] if False else meta["title"]
        # title from CHAPTERS list
        title = next(t for n,t,_ in CHAPTERS if n==ch)
        html = page(
            ch,
            title,
            meta["pages"],
            meta["slug"],
            meta["notes"],
            meta["depth"],
            meta["edges"],
            meta["branches"],
            meta["practice_note"],
        )
        out = CH / f"ch{ch}.html"
        out.write_text(html, encoding="utf-8")
        print("wrote", out, "bytes", out.stat().st_size)

if __name__ == "__main__":
    main()
