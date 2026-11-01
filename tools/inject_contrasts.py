#!/usr/bin/env python3
"""Inject Must-know contrasts + Theory vs evidence into ch1–ch16; patch TOC + CSS + README."""
from __future__ import annotations
import re
from pathlib import Path

ROOT = Path("/workspace/psychology-revision")
CHAPTERS = ROOT / "chapters"

def esc(s: str) -> str:
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def contrast_table(headers: list[str], rows: list[list[str]]) -> str:
    th = "".join(f"<th>{h}</th>" for h in headers)
    body = []
    for row in rows:
        tds = "".join(f"<td>{c}</td>" for c in row)
        body.append(f"          <tr>{tds}</tr>")
    return (
        '      <div class="table-wrap">\n'
        '        <table class="contrast-table">\n'
        f"          <thead><tr>{th}</tr></thead>\n"
        "          <tbody>\n"
        + "\n".join(body)
        + "\n          </tbody>\n"
        "        </table>\n"
        "      </div>"
    )

def theory_table(rows: list[list[str]]) -> str:
    headers = ["Theory / claim", "Supporting evidence", "Limits / challenges"]
    return contrast_table(headers, rows)

def section(contrast_html: str, theory_html: str) -> str:
    return f"""    <section class="section" id="contrasts">
      <h2>Must-know contrasts</h2>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.85rem;">High-yield comparisons for this chapter. Focus on <strong>common confusions</strong> and <strong>everyday examples</strong>. Paraphrased from OpenStax Psychology 2e ideas plus named classics; not verbatim textbook text.</p>

      <h3>Must-know contrast table</h3>
{contrast_html}

      <h3>Theory vs evidence</h3>
{theory_html}
    </section>
"""

# ---- Chapter content ----

CONTENT: dict[int, str] = {}

# Ch1
CONTENT[1] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Early school",
                "<strong>Structuralism</strong> (Wundt/Titchener): break conscious experience into elements via introspection",
                "<strong>Functionalism</strong> (James): how mental processes help the organism adapt",
                "Treating them as the same “first lab” story, or thinking structuralism = all of Wundt",
                "Listing the qualities of “the taste of coffee” vs asking how liking coffee helps you stay alert for a morning class",
            ],
            [
                "View of mind",
                "<strong>Freud / psychoanalytic</strong>: unconscious drives, early conflict, clinical methods",
                "<strong>Behaviorism</strong> (Watson/Skinner): study observable behavior; mind often sidelined",
                "Assuming Freud “invented psychology,” or that behaviorists deny learning altogether",
                "Interpreting a slip of the tongue as hidden wish vs training a study habit with rewards",
            ],
            [
                "Evidence claim",
                "<strong>Correlation</strong>: variables move together",
                "<strong>Causation</strong>: manipulating one variable produces change in another (experiment)",
                'Saying "ice cream sales cause drowning" because both rise in summer',
                "People who sleep less report more stress (link) vs an experiment that restricts sleep and measures stress",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Introspection can map the structure of consciousness (structuralist hope)",
                "Early lab work did standardize some reporting; it pushed psychology toward controlled observation (OpenStax §1.2)",
                "Reports are subjective, hard to verify across observers; later schools largely abandoned pure introspection",
            ],
            [
                "Unconscious processes shape everyday behavior (Freud)",
                "Clinical observations of hysteria/neurosis and defense patterns influenced therapy culture for decades",
                "Many claims hard to falsify; modern evidence for specific Freudian mechanisms is mixed or weak",
            ],
            [
                "Psychology should be an objective science of behavior (radical behaviorist stance)",
                "Powerful learning laws from conditioning labs; applied behavior analysis still used",
                "Language, memory strategies, and mental imagery need cognitive constructs Chomsky and others revived",
            ],
        ],
    ),
)

# Ch2
CONTENT[2] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Variables",
                "<strong>Independent variable (IV)</strong>: what the researcher manipulates",
                "<strong>Dependent variable (DV)</strong>: what is measured as the outcome",
                "Calling the measured score the IV, or listing every demographic as “the IV”",
                "Assigning some students to spaced study vs cramming (IV) and measuring exam score (DV)",
            ],
            [
                "Measurement quality",
                "<strong>Reliability</strong>: consistency of a measure",
                "<strong>Validity</strong>: whether it measures what it claims",
                "Assuming a reliable test is automatically valid (a broken scale can be reliably wrong)",
                "A mood app gives the same score every morning (reliable) but tracks battery life, not mood (not valid)",
            ],
            [
                "Design",
                "<strong>Experimental</strong>: manipulate IV, control, random assignment → causal claim",
                "<strong>Correlational</strong>: measure relationships without manipulation",
                "Treating a survey correlation as proof that X causes Y",
                "Randomly assigning a meditation app vs waitlist (experiment) vs seeing that meditators report less stress (correlation)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Experiments support causal inference when well controlled",
                "Random assignment + control groups reduce confounds; classic lab and field experiments illustrate this (OpenStax §2.2–2.3)",
                "Lab control can hurt ecological validity; ethics/feasibility block many manipulations",
            ],
            [
                "Operational definitions make constructs measurable",
                "Clear ops allow replication and comparison across studies",
                "Narrow ops can miss the construct (measuring “intelligence” only as one timed quiz)",
            ],
            [
                "Ethical codes protect participants (IRB, informed consent, deception limits)",
                "Post–WWII and post–Milgram reforms; APA ethics; institutional review (OpenStax §2.4)",
                "Trade-offs: mild deception sometimes used; online research raises new consent/privacy issues",
            ],
        ],
    ),
)

# Ch3
CONTENT[3] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Nervous system division",
                "<strong>CNS</strong>: brain + spinal cord",
                "<strong>PNS</strong>: nerves connecting CNS to body (somatic + autonomic)",
                "Thinking the spinal cord is “peripheral,” or that PNS excludes autonomic",
                "Spinal reflex when you touch a hot pan (CNS circuit) vs tingling in your hand from a pinched nerve (PNS)",
            ],
            [
                "Autonomic branch",
                "<strong>Sympathetic</strong>: mobilize (“fight-or-flight”)",
                "<strong>Parasympathetic</strong>: restore (“rest-and-digest”)",
                "Believing only one is “on”; they continuously balance",
                "Heart racing before a presentation (sympathetic) vs calming after a meal (parasympathetic)",
            ],
            [
                "Drug action at synapse",
                "<strong>Agonist</strong>: mimics or boosts a neurotransmitter’s effect",
                "<strong>Antagonist</strong>: blocks or dampens it",
                "Mixing up “agonist = antagonist” or thinking agonist always = recreational drug",
                "A medication that boosts serotonin signaling (agonist-like) vs one that blocks dopamine receptors (antagonist)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Neurons communicate via electrochemical signaling (action potentials + synapses)",
                "Decades of electrophysiology and synaptic pharmacology; textbook neuron model (OpenStax Ch 3)",
                "Real networks are massively parallel; single-neuron stories understate glia and neuromodulation",
            ],
            [
                "Hebbian idea: cells that fire together wire together (cell assembly)",
                "Supports learning/memory research on synaptic plasticity (LTP literature)",
                "Not every coincident firing strengthens synapses; timing, neuromodulators, and homeostatic rules matter",
            ],
            [
                "Localization + networks: specific areas contribute specialized functions",
                "Lesion, imaging, and stimulation studies (e.g., language areas) show reliable patterns",
                "Functions are distributed; one “center for X” slogans oversimplify",
            ],
        ],
    ),
)

# Ch4
CONTENT[4] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Sleep architecture",
                "<strong>NREM stages</strong> (including slow-wave): restorative, less vivid dreaming typically",
                "<strong>REM</strong>: rapid eye movements, vivid dreaming, muscle atonia",
                "Thinking “deep sleep = REM,” or that dreaming only happens in REM",
                "Hard to wake early in the night in deep NREM vs remembering a bizarre dream after a morning REM period",
            ],
            [
                "What drives sleepiness",
                "<strong>Circadian rhythm</strong>: ~24 h clock (light-entrained)",
                "<strong>Homeostatic sleep drive</strong>: pressure builds with time awake",
                "Blaming only “willpower” when both clock and sleep debt matter",
                "Feeling alert at 10 a.m. after poor sleep (circadian peak) yet crashing mid-afternoon (debt + dip)",
            ],
            [
                "Substance dependence",
                "<strong>Physical dependence</strong>: tolerance / withdrawal body signs",
                "<strong>Psychological dependence</strong>: craving, feeling you need it to cope",
                "Assuming no physical withdrawal means “not addicted,” or vice versa",
                "Headache/irritability without morning coffee (physical) vs needing a drink to face social events (psychological)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Sleep serves restoration / adaptive functions",
                "Sleep deprivation impairs cognition and mood; slow-wave and REM linked to different restorative roles (OpenStax §4.3)",
                "No single function explains all sleep; species differences complicate “one purpose” theories",
            ],
            [
                "Hypnosis is an altered state with genuine demand + dissociation components",
                "Suggestibility effects are replicable for pain and memory reports in some paradigms",
                "Debate remains: special state vs social-role compliance; not a reliable “memory truth serum”",
            ],
            [
                "Psychoactive drugs act on neurotransmitter systems to alter consciousness",
                "Agonist/antagonist pharmacology maps onto stimulant, depressant, opioid, hallucinogen classes",
                "Expectancy, set/setting, and polydrug use change real-world effects beyond receptor charts",
            ],
        ],
    ),
)

# Ch5
CONTENT[5] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Core terms",
                "<strong>Sensation</strong>: sensory receptors detecting stimuli",
                "<strong>Perception</strong>: organizing/interpreting that input into meaning",
                "Using the words interchangeably in essays",
                "Photoreceptors registering light edges (sensation) vs recognizing your friend’s face in a crowd (perception)",
            ],
            [
                "Processing direction",
                "<strong>Bottom-up</strong>: data-driven from sensory input",
                "<strong>Top-down</strong>: knowledge, expectations, context shape what you perceive",
                "Thinking experts only use top-down, beginners only bottom-up",
                "Reading messy handwriting using letter shapes (bottom-up) plus knowing the topic of the note (top-down)",
            ],
            [
                "Thresholds",
                "<strong>Absolute threshold</strong>: minimum stimulus detected ~50% of the time",
                "<strong>Difference threshold (JND)</strong>: minimum change detected",
                "Confusing “can I hear it at all?” with “did it get louder?”",
                "Noticing a faint phone buzz in a quiet room (absolute) vs noticing the volume went up one notch (difference)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Gestalt principles organize sensation into wholes",
                "Grouping by proximity, similarity, closure, etc., reliably affects figure–ground reports (OpenStax Ch 5)",
                "Principles describe tendencies, not unbreakable laws; culture and expertise modulate them",
            ],
            [
                "Signal detection: perception = sensitivity + decision criterion",
                "Separates true sensitivity from bias (hits/false alarms); used in radiology, vigilance tasks",
                "Requires many trials; criterion shifts with payoffs and expectations",
            ],
            [
                "Multimodal perception integrates senses",
                "Illusions like McGurk show vision can alter heard speech",
                "Integration rules vary by task; lab illusions may overstate daily conflict between senses",
            ],
        ],
    ),
)

# Ch6
CONTENT[6] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Learning form",
                "<strong>Classical conditioning</strong>: CS predicts US → CR",
                "<strong>Operant conditioning</strong>: behavior shaped by consequences",
                "Labeling every habit “Pavlov” or every fear “Skinner”",
                "Feeling anxious when you smell hospital disinfectant (classical) vs studying more after praise (operant)",
            ],
            [
                "Consequence type",
                "<strong>Reinforcement</strong>: increases behavior (positive = add; negative = remove aversive)",
                "<strong>Punishment</strong>: decreases behavior (positive = add aversive; negative = remove valued)",
                "Thinking “negative reinforcement = punishment”",
                "Buckling a seatbelt to stop the beep (negative reinforcement) vs a fine for speeding (positive punishment)",
            ],
            [
                "Schedule",
                "<strong>Continuous</strong>: reinforce every response (fast acquisition)",
                "<strong>Partial</strong>: reinforce some responses (slower extinction—esp. variable schedules)",
                "Assuming partial always means “weaker learning”",
                "A snack machine that always dispenses vs a game that rewards unpredictably (harder to quit)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Pavlovian CS–US association explains many emotional responses",
                "Controlled animal/human conditioning of CR; extinction and spontaneous recovery documented (OpenStax §6.2)",
                "Not all fears need direct pairing (observational pathways); preparedness constraints exist",
            ],
            [
                "Operant behavior is controlled by reinforcement contingencies (Skinner)",
                "Schedule effects (VR persistence) are highly replicable; applied behavior analysis successes",
                "Cognition, intrinsic motivation, and biological limits (e.g., instinctive drift) constrain pure contingency accounts",
            ],
            [
                "Observational learning: models → attention, retention, reproduction, motivation (Bandura)",
                "Bobo doll and later media/model studies show learning without direct reinforcement",
                "Exposure ≠ automatic imitation; self-efficacy and incentives matter",
            ],
        ],
    ),
)

# Ch7
CONTENT[7] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Intelligence facets",
                "<strong>Fluid intelligence</strong>: novel problem-solving, reasoning speed",
                "<strong>Crystallized intelligence</strong>: accumulated knowledge/skills",
                "Thinking older adults lose “all intelligence,” ignoring crystallized strengths",
                "Solving a new puzzle app (fluid) vs using vocabulary built over years (crystallized)",
            ],
            [
                "Problem strategies",
                "<strong>Algorithm</strong>: step-by-step procedure guaranteeing solution (if one exists)",
                "<strong>Heuristic</strong>: mental shortcut; fast, sometimes biased",
                "Calling every rule of thumb an algorithm",
                "Checking every aisle for soy sauce (algorithm-like) vs going straight to “international foods” (heuristic)",
            ],
            [
                "Test quality",
                "<strong>Reliability</strong> of an IQ/achievement test: score stability",
                "<strong>Validity</strong>: predicts what it claims (e.g., academic performance)",
                "Equating a high score with “valid measure of worth”",
                "Retesting next week yields a similar score (reliable) but the test may still miss creative ability (validity limits)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "g / general intelligence underlies cognitive test correlations (Spearman tradition)",
                "Positive manifold across diverse cognitive tests is robust",
                "Does not capture all valued abilities; debate on multiple intelligences vs g",
            ],
            [
                "Heuristics save effort but create systematic biases (Tversky &amp; Kahneman)",
                "Representativeness, availability, anchoring effects widely replicated",
                "Lab wording can exaggerate bias; expertise and incentives sometimes reduce errors",
            ],
            [
                "IQ tests can be reliable predictors of some academic/work outcomes",
                "Moderate correlations with school performance; standardization improves fairness vs informal judgments",
                "Cultural bias, stereotype threat, and narrow constructs limit interpretation; IQ ≠ destiny",
            ],
        ],
    ),
)

# Ch8
CONTENT[8] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Memory stages",
                "<strong>Encoding → Storage → Retrieval</strong> as successive requirements",
                "Failure can occur at any stage (never encoded vs can’t find it)",
                "Blaming only “bad memory” when the issue was shallow encoding",
                "Forgetting a name you never really attended to vs knowing it but blanking during introductions",
            ],
            [
                "Stores",
                "<strong>Short-term / working memory</strong>: limited, active workspace",
                "<strong>Long-term memory</strong>: vast, durable (with subtypes)",
                "Thinking rehearsal always moves info to LTM, or that STM = all conscious thought",
                "Holding a phone number while dialing (working) vs remembering your childhood address (LTM)",
            ],
            [
                "Tests of memory",
                "<strong>Recall</strong>: produce the information",
                "<strong>Recognition</strong>: identify among options",
                "Assuming recognition always equals deeper learning",
                "Writing an essay answer (recall) vs multiple-choice (recognition)",
            ],
            [
                "Interference",
                "<strong>Proactive</strong>: old learning disrupts new",
                "<strong>Retroactive</strong>: new learning disrupts old",
                "Mixing which direction “pro/retro” points",
                "Old PIN blocking memory of the new one (proactive) vs new semester locker combo crowding out last year’s (retroactive)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Levels of processing: deeper (semantic) encoding yields better memory (Craik &amp; Lockhart tradition)",
                "Semantic elaborations usually beat shallow rhyme/case judgments in lab tests",
                "“Depth” can be circular; transfer-appropriate processing also matters",
            ],
            [
                "Working memory is a multi-component system (Baddeley-style models)",
                "Phonological / visuospatial dissociations; dual-task interference patterns",
                "Capacity estimates and component boundaries still debated",
            ],
            [
                "Memory is reconstructive (schema / misinformation effects; Loftus tradition)",
                "Post-event information can alter reports; false memories demonstrable in lab",
                "Not all memory is wildly inaccurate; emotion and repeated accurate rehearsal help; legal implications require care",
            ],
        ],
    ),
)

# Ch9
CONTENT[9] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Developmental cause",
                "<strong>Nature</strong>: genes / biology",
                "<strong>Nurture</strong>: experience / environment",
                "Treating the debate as either/or instead of interaction",
                "A child shows high activity level (temperament) that parents channel into sports (environment)",
            ],
            [
                "Change pattern",
                "<strong>Continuous</strong>: gradual quantitative change",
                "<strong>Discontinuous</strong>: stage-like qualitative shifts",
                "Assuming all development must be stage theory",
                "Vocabulary growing week by week (continuous-ish) vs Piagetian shift in how conservation is understood (stage-like claim)",
            ],
            [
                "Piagetian adaptation",
                "<strong>Assimilation</strong>: fit new info into existing schema",
                "<strong>Accommodation</strong>: change schema to fit new info",
                "Using the words as synonyms for “learning”",
                "Calling every flying animal a “bird” (assimilation) vs creating a “bat” category after correction (accommodation)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Piaget: children construct knowledge through stages",
                "Classic conservation and object-permanence tasks show age-linked patterns (OpenStax Ch 9)",
                "Stages may be less rigid; training and culture shift performance; underestimates early competence",
            ],
            [
                "Attachment patterns predict later social expectations (Bowlby/Ainsworth tradition)",
                "Strange Situation classifications relate to caregiver sensitivity in many studies",
                "Categories not destiny; later relationships and culture matter; measurement debates",
            ],
            [
                "Erikson: psychosocial crises across the lifespan",
                "Useful narrative for identity, intimacy, generativity themes in education/therapy",
                "Broad stages hard to falsify; cultural timing of “identity work” varies",
            ],
        ],
    ),
)

# Ch10
CONTENT[10] = section(
    contrast_table(
        ["Dimension", "A", "B / C", "Common confusion", "Everyday example"],
        [
            [
                "Motivation source",
                "<strong>Drive</strong>: internal push to reduce physiological need",
                "<strong>Incentive</strong>: external pull of a goal/reward",
                "Explaining all eating as only “empty stomach” or only “ads”",
                "Eating because you’re hungry (drive) vs choosing dessert that looks amazing on the menu (incentive)",
            ],
            [
                "Why you act",
                "<strong>Intrinsic</strong>: activity valued for itself",
                "<strong>Extrinsic</strong>: for separable outcome (grades, pay, praise)",
                "Assuming extrinsic always kills intrinsic (overjustification is conditional)",
                "Drawing for fun vs drawing only for a contest prize",
            ],
            [
                "Emotion theories",
                "<strong>James–Lange</strong>: body response → felt emotion",
                "<strong>Cannon–Bard</strong>: simultaneous body + feeling; <strong>Schachter–Singer</strong>: arousal + cognitive label",
                "Memorizing names without the causal order of arousal vs appraisal",
                "Noticing shaky hands then concluding “I’m anxious” (James-like) vs interpreting the same arousal as excitement at a concert (Schachter-like)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Maslow hierarchy: lower needs before higher growth needs",
                "Intuitive teaching tool; self-actualization language shaped humanistic psychology (OpenStax §10.1)",
                "Order not fixed empirically; people pursue meaning amid deprivation; culture varies",
            ],
            [
                "Schachter–Singer: emotion = arousal + appraisal/label",
                "Classic epinephrine misattribution-style findings; supports cognitive role in emotion",
                "Replication/interpretation debates; many emotions may not need conscious labeling",
            ],
            [
                "Homeostatic drives regulate eating, thirst, temperature",
                "Hypothalamic and hormonal signals (e.g., leptin/ghrelin discussions) align with regulation models",
                "Palatable food, stress, and social cues drive eating beyond simple deficit signals",
            ],
        ],
    ),
)

# Ch11
CONTENT[11] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Freudian structure",
                "<strong>Id</strong>: pleasure principle; <strong>Superego</strong>: ideals/conscience",
                "<strong>Ego</strong>: reality principle; mediates",
                "Treating “ego” as arrogance in Freudian sense",
                "Wanting to skip class to binge shows (id pressure) vs guilt about duty (superego) with a compromise plan (ego)",
            ],
            [
                "Personality explanation",
                "<strong>Trait approaches</strong>: stable dimensions (e.g., Big Five)",
                "<strong>Situationism / interactionism</strong>: behavior varies strongly by context",
                "Thinking traits mean people never change across settings",
                "Described as “introverted” yet talkative with close friends at dinner",
            ],
            [
                "Big Five contrasts",
                "<strong>Extraversion</strong>: sociable, energetic",
                "<strong>Agreeableness</strong>: cooperative, trusting (≠ extraversion)",
                "Mixing “nice/outgoing” into one trait; ignoring Conscientiousness vs Openness",
                "A quiet but very kind teammate (lower E, higher A) vs a chatty but competitive one",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Big Five / Five-Factor model captures major trait covariance",
                "Cross-language factor analyses; predictive validity for some life outcomes (OpenStax Ch 11)",
                "Lexicon-based; may miss culturally specific traits; traits ≠ full personality narrative",
            ],
            [
                "Freud: personality shaped by unconscious conflict and early psychosexual stages",
                "Historic influence on therapy and culture; defense mechanism vocabulary still used",
                "Stage evidence weak; hard to test; modern personality science is largely trait/social-cognitive",
            ],
            [
                "Social-cognitive: reciprocal determinism among person, behavior, environment (Bandura)",
                "Self-efficacy predicts persistence and performance across domains",
                "Can under-emphasize temperament/biology if applied carelessly",
            ],
        ],
    ),
)

# Ch12
CONTENT[12] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Attribution",
                "<strong>Dispositional</strong>: explain behavior via traits",
                "<strong>Situational</strong>: explain via context/pressures",
                "Fundamental attribution error: overusing dispositions for others",
                "Calling a late classmate “lazy” (dispositional) vs noticing the subway delay (situational)",
            ],
            [
                "Social influence",
                "<strong>Conformity</strong>: match group norm/pressure (Asch-type)",
                "<strong>Obedience</strong>: follow direct authority order (Milgram-type)",
                "Using the words as synonyms",
                "Laughing at a joke because everyone else did (conformity) vs following a manager’s unethical order (obedience)",
            ],
            [
                "Bias vs act",
                "<strong>Prejudice</strong>: attitude/affective bias",
                "<strong>Discrimination</strong>: biased behavior/treatment",
                "Assuming no discrimination means no prejudice (or vice versa)",
                "Negative feelings about a group (prejudice) vs refusing to hire equally qualified applicants (discrimination)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Asch: people often conform to clear majority error",
                "Line-judgment studies; conformity drops with a dissenter ally",
                "Culture, task difficulty, and anonymity moderate rates; not everyone conforms",
            ],
            [
                "Milgram: many obey authority to harm a learner in lab setup",
                "High obedience rates under experimenter pressure; situational levers matter",
                "Ethics critique; generalizing to all real atrocities needs care; agency still present",
            ],
            [
                "Cognitive dissonance: inconsistent cognitions motivate attitude/behavior change (Festinger)",
                "Insufficient-justification and induced-compliance effects classic in social psych",
                "Self-perception theory offers alternatives; cultural variation in dissonance patterns",
            ],
        ],
    ),
)

# Ch13 — I/O
CONTENT[13] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Work attitudes",
                "<strong>Job satisfaction</strong>: evaluative feelings about one’s job",
                "<strong>Organizational commitment</strong>: attachment/loyalty to the organization",
                "Assuming happy-with-tasks always means won’t quit (or vice versa)",
                "Liking daily coding tasks but planning to leave for a better company brand/pay",
            ],
            [
                "Performance types",
                "<strong>Task performance</strong>: core job duties",
                "<strong>Contextual performance</strong> (citizenship): helping, extra-role support",
                "Rating only output and missing teamwork/citizenship",
                "Closing tickets efficiently (task) vs mentoring new hires without being asked (contextual)",
            ],
            [
                "I-O focus",
                "<strong>Industrial</strong>: selection, training, job analysis, performance appraisal",
                "<strong>Organizational</strong>: motivation, leadership, teams, culture, stress at work",
                "Thinking I-O is only “hiring tests”",
                "Designing a structured interview (industrial) vs studying why a team distrusts a new manager (organizational)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Structured selection improves prediction over unstructured interviews",
                "Job analysis → validated predictors; meta-analyses favor structured methods (OpenStax §13.2)",
                "Validity still imperfect; adverse impact and fairness require ongoing audit",
            ],
            [
                "Job satisfaction relates to performance and withdrawal (absenteeism/turnover)",
                "Moderate satisfaction–performance correlations; stronger links to turnover intentions in many samples",
                "Directionality bidirectional; pay, embeddedness, and labor markets matter",
            ],
            [
                "Human factors: aligning tools/environments with human capacities reduces error",
                "Ergonomics and interface design lower accidents and improve usability (OpenStax §13.4)",
                "Cost and legacy systems slow adoption; user testing still often skipped",
            ],
        ],
    ),
)

# Ch14
CONTENT[14] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Stress valence",
                "<strong>Eustress</strong>: challenging, motivating stress",
                "<strong>Distress</strong>: overwhelming, harmful stress",
                "Thinking all stress is bad, or that eustress never costs energy",
                "Nervous excitement before a match that sharpens focus (eustress) vs chronic overload with sleep loss (distress)",
            ],
            [
                "Appraisal (Lazarus)",
                "<strong>Primary appraisal</strong>: is it a threat/challenge/irrelevant?",
                "<strong>Secondary appraisal</strong>: what coping resources do I have?",
                "Skipping secondary appraisal and treating every stressor as equally damning",
                "Seeing a pop quiz as threat (primary) then remembering you studied and can ask for clarification (secondary)",
            ],
            [
                "Coping",
                "<strong>Problem-focused</strong>: change the stressor/situation",
                "<strong>Emotion-focused</strong>: regulate feelings when situation is less controllable",
                "Judging emotion-focused as always “avoidant/weak”",
                "Making a revision timetable (problem-focused) vs calling a friend to vent after a rejection you can’t undo (emotion-focused)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "Selye GAS: alarm → resistance → exhaustion under prolonged stress",
                "Physiological stress-response patterning influenced health psychology (OpenStax Ch 14)",
                "Overly general; underplays appraisal and individual differences",
            ],
            [
                "Lazarus/Folkman: stress depends on cognitive appraisal of demands vs resources",
                "Same event, different stress; coping taxonomies widely used",
                "Appraisals hard to measure cleanly; emotion and cognition intertwine",
            ],
            [
                "Perceived control and social support buffer stress impacts",
                "Higher perceived control/support often linked to better health markers and adjustment",
                "Support can be mismatched; control beliefs can become self-blame if taken too far",
            ],
        ],
    ),
)

# Ch15
CONTENT[15] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Disorder criteria",
                "<strong>Distress</strong>: subjective suffering",
                "<strong>Dysfunction</strong>: impairment in life domains (plus cultural deviance considerations)",
                "Pathologizing any unusual behavior without impairment/distress context",
                "Intense sadness after a breakup (distress) that also stops you attending work/classes (dysfunction)",
            ],
            [
                "Threat response",
                "<strong>Fear</strong>: present-focused alarm to a specific threat",
                "<strong>Anxiety</strong>: anticipatory apprehension about future threat",
                "Using fear/anxiety as perfect synonyms in clinical descriptions",
                "Jumping when a car nearly hits you (fear) vs weeks of worry about “something going wrong” (anxiety)",
            ],
            [
                "OCD pair",
                "<strong>Obsessions</strong>: intrusive unwanted thoughts/images/urges",
                "<strong>Compulsions</strong>: repetitive behaviors/mental acts aimed at reducing distress",
                "Calling any neat preference “OCD”",
                "Intrusive doubt you left the stove on (obsession) vs checking burners five times (compulsion)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "DSM categories improve communication and research reliability",
                "Structured criteria reduce purely idiosyncratic labels (OpenStax §15.2)",
                "Comorbidity high; categories can reify continuous symptoms; cultural critique continues",
            ],
            [
                "Diathesis–stress: vulnerability + stressor → disorder likelihood",
                "Integrates biology and environment; fits many mood/anxiety patterns",
                "Specific diatheses often unknown; risk is probabilistic not deterministic",
            ],
            [
                "Anxiety disorders involve learning + cognitive biases + biology",
                "Conditioning, attentional bias to threat, and heritability evidence converge",
                "Heterogeneity across GAD, phobia, panic; one mechanism doesn’t fit all",
            ],
        ],
    ),
)

# Ch16
CONTENT[16] = section(
    contrast_table(
        ["Dimension", "A", "B", "Common confusion", "Everyday example"],
        [
            [
                "Treatment modality",
                "<strong>Biomedical</strong>: medication, ECT, other biological interventions",
                "<strong>Psychotherapy</strong>: talk/behavioral interventions with a clinician",
                "Assuming medication replaces all need for skills/therapy (or the reverse for all disorders)",
                "An SSRI prescribed for major depression (biomedical) plus weekly CBT skills practice (psychotherapy)",
            ],
            [
                "Therapy schools",
                "<strong>CBT</strong>: change thoughts/behaviors maintaining problems; structured/present-focused",
                "<strong>Psychodynamic</strong>: explore unconscious patterns, insight, relationship themes",
                "Thinking CBT ignores emotion, or that psychodynamic means only Freudian couches",
                "Logging catastrophic thoughts before a presentation (CBT) vs linking repeated people-pleasing to early relationships (psychodynamic)",
            ],
            [
                "Outcome research terms",
                "<strong>Efficacy</strong>: works under controlled trial conditions",
                "<strong>Effectiveness</strong>: works in real-world routine care",
                "Treating a famous RCT as proof it will work identically in every clinic",
                "A university trial with strict inclusion criteria (efficacy) vs outcomes in a busy community clinic (effectiveness)",
            ],
        ],
    ),
    theory_table(
        [
            [
                "CBT is efficacious for many anxiety and depressive disorders",
                "Large RCT/meta-analytic literature; homework and exposure components matter (OpenStax Ch 16)",
                "Not universally best; engagement, comorbidities, and therapist skill vary outcomes",
            ],
            [
                "Common factors (alliance, expectation) explain shared therapy benefits",
                "Alliance predicts outcome across modalities; placebo/expectation effects documented",
                "Doesn’t mean techniques are irrelevant; specific factors matter for some problems (e.g., exposure for phobia)",
            ],
            [
                "Biomedical treatments can reduce symptoms for severe disorders",
                "Antidepressant/antipsychotic evidence bases; ECT for some treatment-resistant depression cases",
                "Side effects, adherence, relapse risk; combining with psychosocial care often optimal",
            ],
        ],
    ),
)


TOC_OLD = """      <a href="#notes">Key Notes</a>
      <a href="#depth">Further Depth</a>
      <a href="#map">Concept Map</a>
      <a href="#practice">Practice</a>"""

TOC_NEW = """      <a href="#notes">Key Notes</a>
      <a href="#depth">Further Depth</a>
      <a href="#contrasts">Contrasts</a>
      <a href="#map">Concept Map</a>
      <a href="#practice">Practice</a>"""

CSS_BLOCK = """
/* Must-know contrasts / theory-vs-evidence tables */
.table-wrap {
  width: 100%;
  overflow-x: auto;
  margin: 0.75rem 0 1.25rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg);
}
.contrast-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
  min-width: 640px;
}
.contrast-table th,
.contrast-table td {
  padding: 0.7rem 0.75rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--border);
  line-height: 1.45;
}
.contrast-table th {
  background: var(--surface2);
  color: var(--accent-hover);
  font-weight: 600;
  font-size: 0.82rem;
  letter-spacing: 0.01em;
  position: sticky;
  top: 0;
  z-index: 1;
}
.contrast-table tbody tr:nth-child(even) td {
  background: rgba(36, 48, 68, 0.35);
}
.contrast-table tbody tr:hover td {
  background: rgba(91, 159, 212, 0.1);
}
.contrast-table td strong {
  color: var(--text);
}
@media (max-width: 700px) {
  .contrast-table { font-size: 0.82rem; min-width: 560px; }
  .contrast-table th, .contrast-table td { padding: 0.55rem 0.55rem; }
}
"""


def inject_chapter(n: int) -> None:
    path = CHAPTERS / f"ch{n}.html"
    html = path.read_text(encoding="utf-8")
    if 'id="contrasts"' in html:
        # replace existing contrasts section
        html = re.sub(
            r'\n    <section class="section" id="contrasts">.*?</section>\n',
            "\n",
            html,
            count=1,
            flags=re.S,
        )
    if TOC_OLD not in html and 'href="#contrasts"' not in html:
        raise SystemExit(f"ch{n}: unexpected TOC")
    if 'href="#contrasts"' not in html:
        html = html.replace(TOC_OLD, TOC_NEW, 1)
    # Insert before Concept Map / Interactive Mind Map section
    m = re.search(r'\n    <section class="section" id="map">', html)
    if not m:
        raise SystemExit(f"ch{n}: map section not found")
    block = "\n" + CONTENT[n] + "\n"
    html = html[: m.start()] + block + html[m.start() :]
    path.write_text(html, encoding="utf-8")
    print(f"patched ch{n}.html")


def patch_css() -> None:
    css_path = ROOT / "css" / "styles.css"
    css = css_path.read_text(encoding="utf-8")
    if "contrast-table" in css:
        css = re.sub(
            r"\n/\* Must-know contrasts.*",
            "",
            css,
            count=1,
            flags=re.S,
        )
        # if strip failed partially, just append after removing marker blocks
    if "contrast-table" not in css:
        css = css.rstrip() + "\n" + CSS_BLOCK
        css_path.write_text(css + "\n", encoding="utf-8")
        print("css patched")
    else:
        # replace from marker to end if present else append
        if "/* Must-know contrasts" in css:
            css = css.split("/* Must-know contrasts")[0].rstrip() + "\n" + CSS_BLOCK
            css_path.write_text(css + "\n", encoding="utf-8")
            print("css replaced")
        else:
            css_path.write_text(css.rstrip() + "\n" + CSS_BLOCK + "\n", encoding="utf-8")
            print("css appended")


def patch_readme() -> None:
    path = ROOT / "README.md"
    text = path.read_text(encoding="utf-8")
    old = "| Further Depth | Outside journals/books with named citations |"
    new = (
        "| Further Depth | Outside journals/books with named citations |\n"
        "| Must-know contrasts | English contrast + theory-vs-evidence tables (common confusions & everyday examples) |"
    )
    if "Must-know contrasts" not in text:
        if old not in text:
            raise SystemExit("README features row missing")
        text = text.replace(old, new, 1)
    notes_rule = (
        "- **Further Theoretical Depth** = concepts from **other** journals/books, each with a citation—not a restatement of the textbook.\n"
    )
    add_rule = (
        "- **Further Theoretical Depth** = concepts from **other** journals/books, each with a citation—not a restatement of the textbook.\n"
        "- **Must-know contrasts** = English comparison tables (easy-to-confuse constructs + theory vs evidence) emphasizing common confusions and everyday examples.\n"
    )
    if "Must-know contrasts** =" not in text:
        text = text.replace(notes_rule, add_rule, 1)
    path.write_text(text, encoding="utf-8")
    print("readme patched")


def patch_nav_lib_comment() -> None:
    path = ROOT / "tools" / "nav_lib.py"
    text = path.read_text(encoding="utf-8")
    if "contrasts" in text:
        print("nav_lib already mentions contrasts")
        return
    text = text.replace(
        '"""Shared nav for Ch 1–16."""',
        '"""Shared nav for Ch 1–16.\n\n'
        "Chapter page sections (in order): Key Notes (#notes), Further Depth (#depth),\n"
        "Must-know contrasts (#contrasts), Concept Map (#map), Practice (#practice).\n"
        '"""',
        1,
    )
    path.write_text(text, encoding="utf-8")
    print("nav_lib docstring updated")


def main() -> None:
    for n in range(1, 17):
        inject_chapter(n)
    patch_css()
    patch_readme()
    patch_nav_lib_comment()
    print("done")


if __name__ == "__main__":
    main()
