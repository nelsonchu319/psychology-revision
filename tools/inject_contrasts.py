#!/usr/bin/env python3
"""Inject Must-know contrasts + Theory vs evidence into ch1–ch16; patch TOC + CSS + README."""
from __future__ import annotations
import re
from pathlib import Path

ROOT = Path("/workspace/psychology-revision")
CHAPTERS = ROOT / "chapters"

def esc(s: str) -> str:
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def contrast_table(headers: list[str], rows: list[list[str]], *, row_header: bool = False) -> str:
    th = "".join(f"<th>{h}</th>" for h in headers)
    body = []
    for row in rows:
        if row_header and row:
            cells = [f'<th scope="row">{row[0]}</th>'] + [f"<td>{c}</td>" for c in row[1:]]
        else:
            cells = [f"<td>{c}</td>" for c in row]
        body.append(f"          <tr>{''.join(cells)}</tr>")
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

def concept_contrast_groups(groups: list[tuple[str, list[list[str]]]]) -> str:
    """groups: [(caption, [[concept, core_idea, confusion, example], ...]), ...]"""
    headers = ["Concept", "Core idea", "Common confusion", "Everyday example"]
    parts: list[str] = []
    for caption, rows in groups:
        parts.append(f'      <p class="contrast-group">{caption}</p>')
        parts.append(contrast_table(headers, rows, row_header=True))
    return "\n".join(parts)

def theory_table(rows: list[list[str]]) -> str:
    headers = ["Theory / claim", "Supporting evidence", "Limits / challenges"]
    return contrast_table(headers, rows, row_header=False)

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

CONTENT[1] = section(
    concept_contrast_groups([
        ("Structuralism vs functionalism", [
            ["Structuralism (Wundt/Titchener)", "Break conscious experience into elements via introspection", "Treating them as the same “first lab” story, or thinking structuralism = all of Wundt", "Listing the qualities of “the taste of coffee”"],
            ["Functionalism (James)", "How mental processes help the organism adapt", "Collapsing it into “just evolutionary psychology today”", "Asking how liking coffee helps you stay alert for a morning class"],
        ]),
        ("Psychoanalytic vs behaviorism", [
            ["Freud / psychoanalytic", "Unconscious drives, early conflict, clinical methods", "Assuming Freud “invented psychology”", "Interpreting a slip of the tongue as a hidden wish"],
            ["Behaviorism (Watson/Skinner)", "Study observable behavior; mind often sidelined", "Thinking behaviorists deny that learning happens at all", "Training a study habit with rewards"],
        ]),
        ("Correlation vs causation", [
            ["Correlation", "Variables move together", "Saying “ice cream sales cause drowning” because both rise in summer", "People who sleep less report more stress (a link, not proof of cause)"],
            ["Causation (experiment)", "Manipulating one variable produces change in another", "Treating any strong correlation as a causal law", "An experiment that restricts sleep and then measures stress"],
        ]),
    ]),
    theory_table([
        ["Introspection can map the structure of consciousness (structuralist hope)", "Early lab work did standardize some reporting; it pushed psychology toward controlled observation (OpenStax §1.2)", "Reports are subjective, hard to verify across observers; later schools largely abandoned pure introspection"],
        ["Unconscious processes shape everyday behavior (Freud)", "Clinical observations of hysteria/neurosis and defense patterns influenced therapy culture for decades", "Many claims hard to falsify; modern evidence for specific Freudian mechanisms is mixed or weak"],
        ["Psychology should be an objective science of behavior (radical behaviorist stance)", "Powerful learning laws from conditioning labs; applied behavior analysis still used", "Language, memory strategies, and mental imagery need cognitive constructs Chomsky and others revived"],
    ]),
)

CONTENT[2] = section(
    concept_contrast_groups([
        ("Independent vs dependent variable", [
            ["Independent variable (IV)", "What the researcher manipulates", "Calling the measured score the IV, or listing every demographic as “the IV”", "Assigning some students to spaced study vs cramming"],
            ["Dependent variable (DV)", "What is measured as the outcome", "Treating the DV as something the researcher “sets” rather than records", "Measuring exam score after the study-method assignment"],
        ]),
        ("Reliability vs validity", [
            ["Reliability", "Consistency of a measure", "Assuming a reliable test is automatically valid (a broken scale can be reliably wrong)", "A mood app gives the same score every morning"],
            ["Validity", "Whether it measures what it claims", "Equating face appeal of a quiz with construct validity", "The same app tracks battery life, not mood (reliable but not valid)"],
        ]),
        ("Experimental vs correlational design", [
            ["Experimental", "Manipulate IV, control, random assignment → causal claim", "Calling any study with numbers an “experiment”", "Randomly assigning a meditation app vs waitlist"],
            ["Correlational", "Measure relationships without manipulation", "Treating a survey correlation as proof that X causes Y", "Seeing that meditators report less stress (link only)"],
        ]),
    ]),
    theory_table([
        ["Experiments support causal inference when well controlled", "Random assignment + control groups reduce confounds; classic lab and field experiments illustrate this (OpenStax §2.2–2.3)", "Lab control can hurt ecological validity; ethics/feasibility block many manipulations"],
        ["Operational definitions make constructs measurable", "Clear ops allow replication and comparison across studies", "Narrow ops can miss the construct (measuring “intelligence” only as one timed quiz)"],
        ["Ethical codes protect participants (IRB, informed consent, deception limits)", "Post–WWII and post–Milgram reforms; APA ethics; institutional review (OpenStax §2.4)", "Trade-offs: mild deception sometimes used; online research raises new consent/privacy issues"],
    ]),
)

CONTENT[3] = section(
    concept_contrast_groups([
        ("CNS vs PNS", [
            ["CNS", "Brain + spinal cord", "Thinking the spinal cord is “peripheral”", "Spinal reflex when you touch a hot pan"],
            ["PNS", "Nerves connecting CNS to body (somatic + autonomic)", "Thinking PNS excludes autonomic", "Tingling in your hand from a pinched nerve"],
        ]),
        ("Sympathetic vs parasympathetic", [
            ["Sympathetic", "Mobilize (“fight-or-flight”)", "Believing only one autonomic branch is ever “on”", "Heart racing before a presentation"],
            ["Parasympathetic", "Restore (“rest-and-digest”)", "Treating calm states as “no autonomic activity”", "Calming after a meal"],
        ]),
        ("Agonist vs antagonist", [
            ["Agonist", "Mimics or boosts a neurotransmitter’s effect", "Mixing up agonist with antagonist, or thinking agonist always = recreational drug", "A medication that boosts serotonin signaling (agonist-like)"],
            ["Antagonist", "Blocks or dampens a neurotransmitter’s effect", "Assuming “blocker” means the synapse has no chemistry left", "A medication that blocks dopamine receptors"],
        ]),
    ]),
    theory_table([
        ["Neurons communicate via electrochemical signaling (action potentials + synapses)", "Decades of electrophysiology and synaptic pharmacology; textbook neuron model (OpenStax Ch 3)", "Real networks are massively parallel; single-neuron stories understate glia and neuromodulation"],
        ["Hebbian idea: cells that fire together wire together (cell assembly)", "Supports learning/memory research on synaptic plasticity (LTP literature)", "Not every coincident firing strengthens synapses; timing, neuromodulators, and homeostatic rules matter"],
        ["Localization + networks: specific areas contribute specialized functions", "Lesion, imaging, and stimulation studies (e.g., language areas) show reliable patterns", "Functions are distributed; one “center for X” slogans oversimplify"],
    ]),
)

CONTENT[4] = section(
    concept_contrast_groups([
        ("NREM vs REM", [
            ["NREM stages (incl. slow-wave)", "Restorative; less vivid dreaming typically", "Thinking “deep sleep = REM”", "Hard to wake early in the night in deep NREM"],
            ["REM", "Rapid eye movements, vivid dreaming, muscle atonia", "Believing dreaming only happens in REM", "Remembering a bizarre dream after a morning REM period"],
        ]),
        ("Circadian rhythm vs homeostatic sleep drive", [
            ["Circadian rhythm", "~24 h clock (light-entrained)", "Blaming only “willpower” when the clock is misaligned", "Feeling relatively alert at 10 a.m. even after poor sleep (circadian peak)"],
            ["Homeostatic sleep drive", "Pressure builds with time awake", "Ignoring sleep debt because you “feel fine” at the wrong clock time", "Crashing mid-afternoon when debt and the circadian dip combine"],
        ]),
        ("Physical vs psychological dependence", [
            ["Physical dependence", "Tolerance / withdrawal body signs", "Assuming no physical withdrawal means “not addicted”", "Headache/irritability without morning coffee"],
            ["Psychological dependence", "Craving; feeling you need it to cope", "Assuming psychological need is “just weak will” and therefore not serious", "Needing a drink to face social events"],
        ]),
    ]),
    theory_table([
        ["Sleep serves restoration / adaptive functions", "Sleep deprivation impairs cognition and mood; slow-wave and REM linked to different restorative roles (OpenStax §4.3)", "No single function explains all sleep; species differences complicate “one purpose” theories"],
        ["Hypnosis is an altered state with genuine demand + dissociation components", "Suggestibility effects are replicable for pain and memory reports in some paradigms", "Debate remains: special state vs social-role compliance; not a reliable “memory truth serum”"],
        ["Psychoactive drugs act on neurotransmitter systems to alter consciousness", "Agonist/antagonist pharmacology maps onto stimulant, depressant, opioid, hallucinogen classes", "Expectancy, set/setting, and polydrug use change real-world effects beyond receptor charts"],
    ]),
)

CONTENT[5] = section(
    concept_contrast_groups([
        ("Sensation vs perception", [
            ["Sensation", "Sensory receptors detecting stimuli", "Using sensation and perception interchangeably in essays", "Photoreceptors registering light edges"],
            ["Perception", "Organizing/interpreting that input into meaning", "Treating perception as raw sensory “recording” with no interpretation", "Recognizing your friend’s face in a crowd"],
        ]),
        ("Bottom-up vs top-down", [
            ["Bottom-up", "Data-driven from sensory input", "Thinking beginners only use bottom-up", "Reading messy handwriting using letter shapes"],
            ["Top-down", "Knowledge, expectations, context shape what you perceive", "Thinking experts only use top-down", "Knowing the topic of the note so you can fill gaps in messy handwriting"],
        ]),
        ("Absolute threshold vs difference threshold (JND)", [
            ["Absolute threshold", "Minimum stimulus detected ~50% of the time", "Confusing “can I hear it at all?” with “did it get louder?”", "Noticing a faint phone buzz in a quiet room"],
            ["Difference threshold (JND)", "Minimum change detected", "Treating any noticeable change as the absolute threshold", "Noticing the volume went up one notch"],
        ]),
    ]),
    theory_table([
        ["Gestalt principles organize sensation into wholes", "Grouping by proximity, similarity, closure, etc., reliably affects figure–ground reports (OpenStax Ch 5)", "Principles describe tendencies, not unbreakable laws; culture and expertise modulate them"],
        ["Signal detection: perception = sensitivity + decision criterion", "Separates true sensitivity from bias (hits/false alarms); used in radiology, vigilance tasks", "Requires many trials; criterion shifts with payoffs and expectations"],
        ["Multimodal perception integrates senses", "Illusions like McGurk show vision can alter heard speech", "Integration rules vary by task; lab illusions may overstate daily conflict between senses"],
    ]),
)

CONTENT[6] = section(
    concept_contrast_groups([
        ("Classical vs operant conditioning", [
            ["Classical conditioning", "CS predicts US → CR", "Labeling every habit “Pavlov”", "Feeling anxious when you smell hospital disinfectant"],
            ["Operant conditioning", "Behavior shaped by consequences", "Labeling every fear “Skinner”", "Studying more after praise"],
        ]),
        ("Reinforcement vs punishment", [
            ["Reinforcement", "Increases behavior (positive = add; negative = remove aversive)", "Thinking “negative reinforcement = punishment”", "Buckling a seatbelt to stop the beep (negative reinforcement)"],
            ["Punishment", "Decreases behavior (positive = add aversive; negative = remove valued)", "Assuming any unpleasant event is “positive punishment” without checking whether behavior drops", "A fine for speeding (positive punishment)"],
        ]),
        ("Continuous vs partial reinforcement", [
            ["Continuous", "Reinforce every response (fast acquisition)", "Assuming continuous is always best long-term", "A snack machine that always dispenses"],
            ["Partial", "Reinforce some responses (slower extinction—esp. variable schedules)", "Assuming partial always means “weaker learning”", "A game that rewards unpredictably (harder to quit)"],
        ]),
    ]),
    theory_table([
        ["Pavlovian CS–US association explains many emotional responses", "Controlled animal/human conditioning of CR; extinction and spontaneous recovery documented (OpenStax §6.2)", "Not all fears need direct pairing (observational pathways); preparedness constraints exist"],
        ["Operant behavior is controlled by reinforcement contingencies (Skinner)", "Schedule effects (VR persistence) are highly replicable; applied behavior analysis successes", "Cognition, intrinsic motivation, and biological limits (e.g., instinctive drift) constrain pure contingency accounts"],
        ["Observational learning: models → attention, retention, reproduction, motivation (Bandura)", "Bobo doll and later media/model studies show learning without direct reinforcement", "Exposure ≠ automatic imitation; self-efficacy and incentives matter"],
    ]),
)

CONTENT[7] = section(
    concept_contrast_groups([
        ("Fluid vs crystallized intelligence", [
            ["Fluid intelligence", "Novel problem-solving, reasoning speed", "Thinking older adults lose “all intelligence,” ignoring crystallized strengths", "Solving a new puzzle app"],
            ["Crystallized intelligence", "Accumulated knowledge/skills", "Treating trivia alone as the whole of intelligence", "Using vocabulary built over years"],
        ]),
        ("Algorithm vs heuristic", [
            ["Algorithm", "Step-by-step procedure guaranteeing a solution (if one exists)", "Calling every rule of thumb an algorithm", "Checking every aisle for soy sauce"],
            ["Heuristic", "Mental shortcut; fast, sometimes biased", "Assuming heuristics are always irrational mistakes", "Going straight to “international foods” for soy sauce"],
        ]),
        ("Reliability vs validity (testing)", [
            ["Reliability (of an IQ/achievement test)", "Score stability", "Equating a stable high score with “valid measure of worth”", "Retesting next week yields a similar score"],
            ["Validity (of an IQ/achievement test)", "Predicts what it claims (e.g., academic performance)", "Treating predictive validity for school as validity for every life outcome", "The same test may still miss creative ability"],
        ]),
    ]),
    theory_table([
        ["g / general intelligence underlies cognitive test correlations (Spearman tradition)", "Positive manifold across diverse cognitive tests is robust", "Does not capture all valued abilities; debate on multiple intelligences vs g"],
        ["Heuristics save effort but create systematic biases (Tversky &amp; Kahneman)", "Representativeness, availability, anchoring effects widely replicated", "Lab wording can exaggerate bias; expertise and incentives sometimes reduce errors"],
        ["IQ tests can be reliable predictors of some academic/work outcomes", "Moderate correlations with school performance; standardization improves fairness vs informal judgments", "Cultural bias, stereotype threat, and narrow constructs limit interpretation; IQ ≠ destiny"],
    ]),
)

CONTENT[8] = section(
    concept_contrast_groups([
        ("Encoding, storage, retrieval", [
            ["Encoding", "Getting information into memory", "Blaming only “bad memory” when the issue was shallow encoding", "Never really attending to a name at a party"],
            ["Storage", "Maintaining information over time", "Assuming once heard, information is permanently filed", "A well-learned address lasting for years"],
            ["Retrieval", "Accessing stored information when needed", "Treating tip-of-the-tongue as proof the memory was never stored", "Knowing a name but blanking during introductions"],
        ]),
        ("Short-term/working vs long-term memory", [
            ["Short-term / working memory", "Limited, active workspace", "Thinking rehearsal always moves info to LTM, or that STM = all conscious thought", "Holding a phone number while dialing"],
            ["Long-term memory", "Vast, durable (with subtypes)", "Assuming LTM is a perfect video recording", "Remembering your childhood address"],
        ]),
        ("Recall vs recognition", [
            ["Recall", "Produce the information", "Assuming free recall is the only “real” memory test", "Writing an essay answer"],
            ["Recognition", "Identify among options", "Assuming recognition always equals deeper learning", "Multiple-choice identification"],
        ]),
        ("Proactive vs retroactive interference", [
            ["Proactive interference", "Old learning disrupts new", "Mixing which direction “pro” points", "Old PIN blocking memory of the new one"],
            ["Retroactive interference", "New learning disrupts old", "Mixing which direction “retro” points", "New semester locker combo crowding out last year’s"],
        ]),
    ]),
    theory_table([
        ["Levels of processing: deeper (semantic) encoding yields better memory (Craik &amp; Lockhart tradition)", "Semantic elaborations usually beat shallow rhyme/case judgments in lab tests", "“Depth” can be circular; transfer-appropriate processing also matters"],
        ["Working memory is a multi-component system (Baddeley-style models)", "Phonological / visuospatial dissociations; dual-task interference patterns", "Capacity estimates and component boundaries still debated"],
        ["Memory is reconstructive (schema / misinformation effects; Loftus tradition)", "Post-event information can alter reports; false memories demonstrable in lab", "Not all memory is wildly inaccurate; emotion and repeated accurate rehearsal help; legal implications require care"],
    ]),
)

CONTENT[9] = section(
    concept_contrast_groups([
        ("Nature vs nurture", [
            ["Nature", "Genes / biology", "Treating the debate as either/or instead of interaction", "A child shows high activity level (temperament)"],
            ["Nurture", "Experience / environment", "Assuming environment can rewrite any biological constraint overnight", "Parents channel that activity into sports"],
        ]),
        ("Continuous vs discontinuous change", [
            ["Continuous", "Gradual quantitative change", "Assuming all development must be stage theory", "Vocabulary growing week by week"],
            ["Discontinuous", "Stage-like qualitative shifts", "Forcing every skill into rigid universal stages", "Piagetian shift in how conservation is understood (stage-like claim)"],
        ]),
        ("Assimilation vs accommodation", [
            ["Assimilation", "Fit new info into existing schema", "Using assimilation as a synonym for “any learning”", "Calling every flying animal a “bird”"],
            ["Accommodation", "Change schema to fit new info", "Using accommodation as a synonym for “any learning”", "Creating a “bat” category after correction"],
        ]),
    ]),
    theory_table([
        ["Piaget: children construct knowledge through stages", "Classic conservation and object-permanence tasks show age-linked patterns (OpenStax Ch 9)", "Stages may be less rigid; training and culture shift performance; underestimates early competence"],
        ["Attachment patterns predict later social expectations (Bowlby/Ainsworth tradition)", "Strange Situation classifications relate to caregiver sensitivity in many studies", "Categories not destiny; later relationships and culture matter; measurement debates"],
        ["Erikson: psychosocial crises across the lifespan", "Useful narrative for identity, intimacy, generativity themes in education/therapy", "Broad stages hard to falsify; cultural timing of “identity work” varies"],
    ]),
)

CONTENT[10] = section(
    concept_contrast_groups([
        ("Drive vs incentive", [
            ["Drive", "Internal push to reduce physiological need", "Explaining all eating as only “empty stomach”", "Eating because you’re hungry"],
            ["Incentive", "External pull of a goal/reward", "Explaining all eating as only ads/menus", "Choosing dessert that looks amazing on the menu"],
        ]),
        ("Intrinsic vs extrinsic motivation", [
            ["Intrinsic", "Activity valued for itself", "Assuming extrinsic always kills intrinsic (overjustification is conditional)", "Drawing for fun"],
            ["Extrinsic", "For a separable outcome (grades, pay, praise)", "Treating every external reward as harmful", "Drawing only for a contest prize"],
        ]),
        ("James–Lange vs Cannon–Bard vs Schachter–Singer", [
            ["James–Lange", "Body response → felt emotion", "Memorizing the name without the causal order (body first)", "Noticing shaky hands then concluding “I’m anxious”"],
            ["Cannon–Bard", "Simultaneous body response + feeling", "Collapsing it into James–Lange because both mention the body", "Heart races and fear are felt together as the threat appears"],
            ["Schachter–Singer", "Arousal + cognitive label → emotion", "Ignoring the appraisal/label step", "Interpreting the same arousal as excitement at a concert"],
        ]),
    ]),
    theory_table([
        ["Maslow hierarchy: lower needs before higher growth needs", "Intuitive teaching tool; self-actualization language shaped humanistic psychology (OpenStax §10.1)", "Order not fixed empirically; people pursue meaning amid deprivation; culture varies"],
        ["Schachter–Singer: emotion = arousal + appraisal/label", "Classic epinephrine misattribution-style findings; supports cognitive role in emotion", "Replication/interpretation debates; many emotions may not need conscious labeling"],
        ["Homeostatic drives regulate eating, thirst, temperature", "Hypothalamic and hormonal signals (e.g., leptin/ghrelin discussions) align with regulation models", "Palatable food, stress, and social cues drive eating beyond simple deficit signals"],
    ]),
)

CONTENT[11] = section(
    concept_contrast_groups([
        ("Id vs ego vs superego", [
            ["Id", "Pleasure principle; immediate urges", "Treating every impulsive wish as the whole personality", "Wanting to skip class to binge shows"],
            ["Ego", "Reality principle; mediates id and superego", "Treating “ego” as arrogance in the Freudian sense", "Making a compromise plan that still gets work done"],
            ["Superego", "Ideals / conscience", "Equating conscience only with “being nice”", "Guilt about duty when you want to skip class"],
        ]),
        ("Trait approaches vs situationism/interactionism", [
            ["Trait approaches", "Stable dimensions (e.g., Big Five)", "Thinking traits mean people never change across settings", "Described as “introverted” on a questionnaire"],
            ["Situationism / interactionism", "Behavior varies strongly by context; person × situation", "Claiming traits are meaningless because behavior varies", "The same person is talkative with close friends at dinner"],
        ]),
        ("Extraversion vs agreeableness (Big Five)", [
            ["Extraversion", "Sociable, energetic", "Mixing “nice/outgoing” into one trait", "A chatty but competitive teammate"],
            ["Agreeableness", "Cooperative, trusting (≠ extraversion)", "Ignoring Conscientiousness vs Openness when explaining “good classmate”", "A quiet but very kind teammate (lower E, higher A)"],
        ]),
    ]),
    theory_table([
        ["Big Five / Five-Factor model captures major trait covariance", "Cross-language factor analyses; predictive validity for some life outcomes (OpenStax Ch 11)", "Lexicon-based; may miss culturally specific traits; traits ≠ full personality narrative"],
        ["Freud: personality shaped by unconscious conflict and early psychosexual stages", "Historic influence on therapy and culture; defense mechanism vocabulary still used", "Stage evidence weak; hard to test; modern personality science is largely trait/social-cognitive"],
        ["Social-cognitive: reciprocal determinism among person, behavior, environment (Bandura)", "Self-efficacy predicts persistence and performance across domains", "Can under-emphasize temperament/biology if applied carelessly"],
    ]),
)

CONTENT[12] = section(
    concept_contrast_groups([
        ("Dispositional vs situational attribution", [
            ["Dispositional attribution", "Explain behavior via traits", "Fundamental attribution error: overusing dispositions for others", "Calling a late classmate “lazy”"],
            ["Situational attribution", "Explain via context/pressures", "Underusing situation when judging strangers, overusing it for ourselves", "Noticing the subway delay that made them late"],
        ]),
        ("Conformity vs obedience", [
            ["Conformity", "Match group norm/pressure (Asch-type)", "Using conformity and obedience as synonyms", "Laughing at a joke because everyone else did"],
            ["Obedience", "Follow a direct authority order (Milgram-type)", "Treating peer pressure alone as obedience", "Following a manager’s unethical order"],
        ]),
        ("Prejudice vs discrimination", [
            ["Prejudice", "Attitude / affective bias", "Assuming no discrimination means no prejudice", "Negative feelings about a group"],
            ["Discrimination", "Biased behavior / treatment", "Assuming prejudice always shows as overt discrimination", "Refusing to hire equally qualified applicants"],
        ]),
    ]),
    theory_table([
        ["Asch: people often conform to clear majority error", "Line-judgment studies; conformity drops with a dissenter ally", "Culture, task difficulty, and anonymity moderate rates; not everyone conforms"],
        ["Milgram: many obey authority to harm a learner in lab setup", "High obedience rates under experimenter pressure; situational levers matter", "Ethics critique; generalizing to all real atrocities needs care; agency still present"],
        ["Cognitive dissonance: inconsistent cognitions motivate attitude/behavior change (Festinger)", "Insufficient-justification and induced-compliance effects classic in social psych", "Self-perception theory offers alternatives; cultural variation in dissonance patterns"],
    ]),
)

CONTENT[13] = section(
    concept_contrast_groups([
        ("Job satisfaction vs organizational commitment", [
            ["Job satisfaction", "Evaluative feelings about one’s job", "Assuming happy-with-tasks always means won’t quit", "Liking daily coding tasks"],
            ["Organizational commitment", "Attachment / loyalty to the organization", "Assuming commitment always means liking the daily tasks", "Planning to leave for a better company brand/pay despite liking the work"],
        ]),
        ("Task vs contextual performance", [
            ["Task performance", "Core job duties", "Rating only output and missing teamwork/citizenship", "Closing tickets efficiently"],
            ["Contextual performance (citizenship)", "Helping, extra-role support", "Treating citizenship as optional fluff with no performance value", "Mentoring new hires without being asked"],
        ]),
        ("Industrial vs organizational focus", [
            ["Industrial", "Selection, training, job analysis, performance appraisal", "Thinking I-O is only “hiring tests”", "Designing a structured interview"],
            ["Organizational", "Motivation, leadership, teams, culture, stress at work", "Ignoring org-side topics when studying workplace behavior", "Studying why a team distrusts a new manager"],
        ]),
    ]),
    theory_table([
        ["Structured selection improves prediction over unstructured interviews", "Job analysis → validated predictors; meta-analyses favor structured methods (OpenStax §13.2)", "Validity still imperfect; adverse impact and fairness require ongoing audit"],
        ["Job satisfaction relates to performance and withdrawal (absenteeism/turnover)", "Moderate satisfaction–performance correlations; stronger links to turnover intentions in many samples", "Directionality bidirectional; pay, embeddedness, and labor markets matter"],
        ["Human factors: aligning tools/environments with human capacities reduces error", "Ergonomics and interface design lower accidents and improve usability (OpenStax §13.4)", "Cost and legacy systems slow adoption; user testing still often skipped"],
    ]),
)

CONTENT[14] = section(
    concept_contrast_groups([
        ("Eustress vs distress", [
            ["Eustress", "Challenging, motivating stress", "Thinking all stress is bad", "Nervous excitement before a match that sharpens focus"],
            ["Distress", "Overwhelming, harmful stress", "Thinking eustress never costs energy", "Chronic overload with sleep loss"],
        ]),
        ("Primary vs secondary appraisal (Lazarus)", [
            ["Primary appraisal", "Is it a threat / challenge / irrelevant?", "Skipping secondary appraisal and treating every stressor as equally damning", "Seeing a pop quiz as a threat"],
            ["Secondary appraisal", "What coping resources do I have?", "Treating resources as irrelevant once something feels threatening", "Remembering you studied and can ask for clarification"],
        ]),
        ("Problem-focused vs emotion-focused coping", [
            ["Problem-focused coping", "Change the stressor / situation", "Judging emotion-focused as always “avoidant/weak”", "Making a revision timetable"],
            ["Emotion-focused coping", "Regulate feelings when the situation is less controllable", "Using only venting when a controllable problem still needs action", "Calling a friend to vent after a rejection you can’t undo"],
        ]),
    ]),
    theory_table([
        ["Selye GAS: alarm → resistance → exhaustion under prolonged stress", "Physiological stress-response patterning influenced health psychology (OpenStax Ch 14)", "Overly general; underplays appraisal and individual differences"],
        ["Lazarus/Folkman: stress depends on cognitive appraisal of demands vs resources", "Same event, different stress; coping taxonomies widely used", "Appraisals hard to measure cleanly; emotion and cognition intertwine"],
        ["Perceived control and social support buffer stress impacts", "Higher perceived control/support often linked to better health markers and adjustment", "Support can be mismatched; control beliefs can become self-blame if taken too far"],
    ]),
)

CONTENT[15] = section(
    concept_contrast_groups([
        ("Distress vs dysfunction", [
            ["Distress", "Subjective suffering", "Pathologizing any unusual behavior without impairment/distress context", "Intense sadness after a breakup"],
            ["Dysfunction", "Impairment in life domains (plus cultural deviance considerations)", "Treating every intense emotion as a disorder even with intact functioning", "Sadness that also stops you attending work/classes"],
        ]),
        ("Fear vs anxiety", [
            ["Fear", "Present-focused alarm to a specific threat", "Using fear/anxiety as perfect synonyms in clinical descriptions", "Jumping when a car nearly hits you"],
            ["Anxiety", "Anticipatory apprehension about future threat", "Treating worry about the future as the same as panic in the moment", "Weeks of worry about “something going wrong”"],
        ]),
        ("Obsessions vs compulsions", [
            ["Obsessions", "Intrusive unwanted thoughts / images / urges", "Calling any neat preference “OCD”", "Intrusive doubt you left the stove on"],
            ["Compulsions", "Repetitive behaviors / mental acts aimed at reducing distress", "Treating any repeated habit as a compulsion", "Checking burners five times"],
        ]),
    ]),
    theory_table([
        ["DSM categories improve communication and research reliability", "Structured criteria reduce purely idiosyncratic labels (OpenStax §15.2)", "Comorbidity high; categories can reify continuous symptoms; cultural critique continues"],
        ["Diathesis–stress: vulnerability + stressor → disorder likelihood", "Integrates biology and environment; fits many mood/anxiety patterns", "Specific diatheses often unknown; risk is probabilistic not deterministic"],
        ["Anxiety disorders involve learning + cognitive biases + biology", "Conditioning, attentional bias to threat, and heritability evidence converge", "Heterogeneity across GAD, phobia, panic; one mechanism doesn’t fit all"],
    ]),
)

CONTENT[16] = section(
    concept_contrast_groups([
        ("Biomedical treatment vs psychotherapy", [
            ["Biomedical", "Medication, ECT, other biological interventions", "Assuming medication replaces all need for skills/therapy", "An SSRI prescribed for major depression"],
            ["Psychotherapy", "Talk / behavioral interventions with a clinician", "Assuming therapy alone is always enough for every severe disorder", "Weekly CBT skills practice"],
        ]),
        ("CBT vs psychodynamic therapy", [
            ["CBT", "Change thoughts/behaviors maintaining problems; structured / present-focused", "Thinking CBT ignores emotion", "Logging catastrophic thoughts before a presentation"],
            ["Psychodynamic", "Explore unconscious patterns, insight, relationship themes", "Thinking psychodynamic means only Freudian couches", "Linking repeated people-pleasing to early relationships"],
        ]),
        ("Efficacy vs effectiveness", [
            ["Efficacy", "Works under controlled trial conditions", "Treating a famous RCT as proof it will work identically in every clinic", "A university trial with strict inclusion criteria"],
            ["Effectiveness", "Works in real-world routine care", "Ignoring that messy clinics differ from lab samples", "Outcomes in a busy community clinic"],
        ]),
    ]),
    theory_table([
        ["CBT is efficacious for many anxiety and depressive disorders", "Large RCT/meta-analytic literature; homework and exposure components matter (OpenStax Ch 16)", "Not universally best; engagement, comorbidities, and therapist skill vary outcomes"],
        ["Common factors (alliance, expectation) explain shared therapy benefits", "Alliance predicts outcome across modalities; placebo/expectation effects documented", "Doesn’t mean techniques are irrelevant; specific factors matter for some problems (e.g., exposure for phobia)"],
        ["Biomedical treatments can reduce symptoms for severe disorders", "Antidepressant/antipsychotic evidence bases; ECT for some treatment-resistant depression cases", "Side effects, adherence, relapse risk; combining with psychosocial care often optimal"],
    ]),
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
.contrast-group {
  margin: 1rem 0 0.45rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text);
}
.contrast-group:first-of-type {
  margin-top: 0.35rem;
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
.contrast-table thead th {
  background: var(--surface2);
  color: var(--accent-hover);
  font-weight: 600;
  font-size: 0.82rem;
  letter-spacing: 0.01em;
  position: sticky;
  top: 0;
  z-index: 1;
}
.contrast-table tbody th[scope="row"],
.contrast-table td:first-child {
  font-weight: 600;
  color: var(--text);
  background: rgba(36, 48, 68, 0.45);
  min-width: 9.5rem;
  position: sticky;
  left: 0;
  z-index: 1;
}
.contrast-table tbody tr:nth-child(even) td,
.contrast-table tbody tr:nth-child(even) th[scope="row"] {
  background: rgba(36, 48, 68, 0.35);
}
.contrast-table tbody tr:nth-child(even) th[scope="row"],
.contrast-table tbody tr:nth-child(even) td:first-child {
  background: rgba(36, 48, 68, 0.55);
}
.contrast-table tbody tr:hover td,
.contrast-table tbody tr:hover th[scope="row"] {
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
    if "/* Must-know contrasts" in css:
        css = css.split("/* Must-know contrasts")[0].rstrip() + "\n" + CSS_BLOCK
        css_path.write_text(css + "\n", encoding="utf-8")
        print("css replaced")
    elif "contrast-table" not in css:
        css_path.write_text(css.rstrip() + "\n" + CSS_BLOCK + "\n", encoding="utf-8")
        print("css appended")
    else:
        css_path.write_text(css.rstrip() + "\n" + CSS_BLOCK + "\n", encoding="utf-8")
        print("css appended (fallback)")


def patch_readme() -> None:
    path = ROOT / "README.md"
    text = path.read_text(encoding="utf-8")
    old = "| Further Depth | Outside journals/books with named citations |"
    new = (
        "| Further Depth | Outside journals/books with named citations |\n"
        "| Must-know contrasts | English concept-row contrast groups + theory-vs-evidence tables (common confusions & everyday examples) |"
    )
    if "Must-know contrasts" not in text:
        if old not in text:
            raise SystemExit("README features row missing")
        text = text.replace(old, new, 1)
    else:
        text = re.sub(
            r"\| Must-know contrasts \|.*?\|",
            "| Must-know contrasts | English concept-row contrast groups + theory-vs-evidence tables (common confusions & everyday examples) |",
            text,
            count=1,
        )
    notes_rule = (
        "- **Further Theoretical Depth** = concepts from **other** journals/books, each with a citation—not a restatement of the textbook.\n"
    )
    add_rule = (
        "- **Further Theoretical Depth** = concepts from **other** journals/books, each with a citation—not a restatement of the textbook.\n"
        "- **Must-know contrasts** = English comparison tables with **concept names as row headers** (grouped pairs/trios) plus theory vs evidence; emphasize common confusions and everyday examples.\n"
    )
    if "concept names as row headers" not in text:
        if "Must-know contrasts** =" in text:
            text = re.sub(
                r"- \*\*Must-know contrasts\*\* = .*?\n",
                "- **Must-know contrasts** = English comparison tables with **concept names as row headers** (grouped pairs/trios) plus theory vs evidence; emphasize common confusions and everyday examples.\n",
                text,
                count=1,
            )
        else:
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
