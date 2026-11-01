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
            ["Structuralism (Wundt/Titchener)", "Break conscious experience into elements via introspection", "Writing that Wundt’s whole program was “just structuralism,” or treating structuralism and functionalism as two names for the same lab method", "In a methods seminar you try to list every sensation in “the taste of iced coffee” (bitter, cold, sweet) instead of asking why you drink it before a 9 a.m. lecture"],
            ["Functionalism (James)", "How mental processes help the organism adapt", "Assuming functionalism means “modern evolutionary psychology only,” so any adaptive story automatically counts as James", "You ask why craving coffee before a midterm is useful (alertness for studying) rather than cataloguing the drink’s flavor notes"],
        ]),
        ("Psychoanalytic vs behaviorism", [
            ["Freud / psychoanalytic", "Unconscious drives, early conflict, clinical methods", "Claiming Freud founded psychology as a science, or that every psychology course is secretly Freudian", "You call a classmate “Mom” by accident and a friend insists it must mean a hidden wish about your mother"],
            ["Behaviorism (Watson/Skinner)", "Study observable behavior; mind often sidelined", "Saying behaviorists claim people never learn or never think—when the real claim was to study observable behavior rigorously", "You earn a coffee stamp for every completed practice set and start opening the quiz app without being nagged"],
        ]),
        ("Correlation vs causation", [
            ["Correlation", "Variables move together", "Concluding ice cream “causes” drowning because both rise in summer (a third variable—heat—drives both)", "Your class survey shows students sleeping under 6 hours also report higher stress—linked scores, not proof sleep loss caused the stress"],
            ["Causation (experiment)", "Manipulating one variable produces change in another", "Treating a large r as if it already proves “X makes Y happen” without manipulation/control", "Researchers randomly assign some students to a short-sleep night and then measure next-day stress ratings"],
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
            ["Independent variable (IV)", "What the researcher manipulates", "Labeling the exam score as the IV, or calling age/gender “the IV” when nothing was manipulated", "You randomly assign classmates to spaced Anki reviews vs one long cram night"],
            ["Dependent variable (DV)", "What is measured as the outcome", "Saying the researcher “sets the DV to 80%,” as if the outcome were dialed in rather than measured", "After the study-method assignment you record each person’s quiz percentage as the outcome"],
        ]),
        ("Reliability vs validity", [
            ["Reliability", "Consistency of a measure", "Assuming “consistent scores” automatically mean the test measures the right construct (a bathroom scale stuck 3 kg high is reliably wrong)", "Your mood app shows 62 every morning for a week—even on days you felt fine—so it is consistent but suspicious"],
            ["Validity", "Whether it measures what it claims", "Mistaking a quiz that “looks psychological” for construct validity", "The app’s “mood” number is actually phone battery %—stable day to day, but not measuring mood"],
        ]),
        ("Experimental vs correlational design", [
            ["Experimental", "Manipulate IV, control, random assignment → causal claim", "Calling any study with means and p-values an “experiment,” including pure surveys", "You randomly assign friends to a 10-minute meditation app or a waitlist, then compare stress ratings"],
            ["Correlational", "Measure relationships without manipulation", "Reading a survey link (“meditators report less stress”) as proof meditation caused the lower stress", "People who already meditate also report less stress—compatible with many causal stories, not proof"],
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
            ["CNS", "Brain + spinal cord", "Filing the spinal cord under PNS because it “isn’t the brain,” or thinking CNS = cortex only", "You jerk your hand off a hot pan before you “decide” to move—spinal reflex circuitry"],
            ["PNS", "Nerves connecting CNS to body (somatic + autonomic)", "Thinking “peripheral” means only arm/leg sensory nerves and excluding autonomic pathways", "A pinched nerve in your wrist makes your fingers tingle while you type"],
        ]),
        ("Sympathetic vs parasympathetic", [
            ["Sympathetic", "Mobilize (“fight-or-flight”)", "Believing sympathetic and parasympathetic are a strict on/off light switch that never co-act", "Your heart pounds and palms sweat in the hallway before you present"],
            ["Parasympathetic", "Restore (“rest-and-digest”)", "Treating feeling calm after lunch as “the autonomic system turned off” rather than parasympathetic dominance", "After a big lunch you feel drowsy and content as digestion ramps up"],
        ]),
        ("Agonist vs antagonist", [
            ["Agonist", "Mimics or boosts a neurotransmitter’s effect", "Swapping agonist/antagonist labels, or assuming “agonist” always means an illegal recreational drug", "A prescribed medication increases serotonin receptor activity in a depression treatment plan"],
            ["Antagonist", "Blocks or dampens a neurotransmitter’s effect", "Thinking an antagonist “empties” the synapse of all chemistry rather than blocking/dampening receptor action", "An antipsychotic that blocks dopamine receptors reduces receptor activation despite dopamine still being released"],
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
            ["NREM stages (incl. slow-wave)", "Restorative; less vivid dreaming typically", "Calling the deepest, hardest-to-wake sleep “REM,” or assuming restorative sleep = dreaming sleep", "At 1 a.m. your roommate shakes you and you barely respond—classic deep NREM, not REM"],
            ["REM", "Rapid eye movements, vivid dreaming, muscle atonia", "Believing dreams occur only in REM and never in NREM", "You wake from a morning alarm with a vivid bizarre dream after a REM-rich late sleep cycle"],
        ]),
        ("Circadian rhythm vs homeostatic sleep drive", [
            ["Circadian rhythm", "~24 h clock (light-entrained)", "Blaming only laziness/willpower for jet lag or night-shift fog when the light-entrained clock is misaligned", "After an all-nighter you still feel oddly functional at 10 a.m. class (circadian peak) until the afternoon crash"],
            ["Homeostatic sleep drive", "Pressure builds with time awake", "Ignoring accumulated sleep debt because you feel OK at a circadian high, then being blindsided later", "After two short nights you feel fine at noon but collapse sleepy at 3 p.m. when debt meets the circadian dip"],
        ]),
        ("Physical vs psychological dependence", [
            ["Physical dependence", "Tolerance / withdrawal body signs", "Assuming “no shakes/headache = not addicted,” ignoring craving and compulsive use", "Skip morning coffee and you get a pounding headache plus irritability by noon"],
            ["Psychological dependence", "Craving; feeling you need it to cope", "Dismissing craving-based dependence as “just weak will,” so it doesn’t count as a real problem", "You feel you cannot walk into a party without a drink first, even with no withdrawal tremor"],
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
            ["Sensation", "Sensory receptors detecting stimuli", "Using sensation and perception as synonyms in an essay (“I sensed it was my friend” when you mean recognition)", "Retinal photoreceptors register a bright edge when a phone flashlight hits your eye"],
            ["Perception", "Organizing/interpreting that input into meaning", "Treating perception as a perfect camera recording with no organization or expectation involved", "In a crowded MTR car you still pick out your friend’s face from posture and hair"],
        ]),
        ("Bottom-up vs top-down", [
            ["Bottom-up", "Data-driven from sensory input", "Claiming only novices use bottom-up processing, or that experts never look at the raw features", "Deciphering a messy lab note by inspecting each letter shape stroke by stroke"],
            ["Top-down", "Knowledge, expectations, context shape what you perceive", "Claiming experts use only top-down guesses and ignore sensory data", "Because the worksheet title is “synaptic transmission,” you can fill gaps in the tutor’s messy handwriting"],
        ]),
        ("Absolute threshold vs difference threshold (JND)", [
            ["Absolute threshold", "Minimum stimulus detected ~50% of the time", "Mixing “can I detect it at all?” with “did the intensity change?” (that’s JND)", "In a silent library you barely notice your phone’s faint vibrate on the wooden desk"],
            ["Difference threshold (JND)", "Minimum change detected", "Calling any just-noticeable loudness change the absolute threshold", "Streaming music: you catch that the volume went up one notch during a quiet song section"],
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
            ["Classical conditioning", "CS predicts US → CR", "Labeling every habit or skill “Pavlovian,” including behaviors shaped by praise/grades (operant)", "Walking into a clinic and feeling anxious when you smell the disinfectant before any procedure"],
            ["Operant conditioning", "Behavior shaped by consequences", "Calling every automatic fear “Skinnerian,” even when a CS–US pairing (classical) is the better fit", "After your tutor praises a completed problem set, you open the homework app sooner the next day"],
        ]),
        ("Reinforcement vs punishment", [
            ["Reinforcement", "Increases behavior (positive = add; negative = remove aversive)", "Writing that negative reinforcement equals punishment (both “feel bad”), missing that reinforcement increases behavior", "You buckle up specifically to stop the car’s annoying seatbelt beep—behavior increases"],
            ["Punishment", "Decreases behavior (positive = add aversive; negative = remove valued)", "Calling any unpleasant event “positive punishment” without checking that the target behavior actually decreases", "A speeding fine is added after you drive too fast; you speed less on that road afterward"],
        ]),
        ("Continuous vs partial reinforcement", [
            ["Continuous", "Reinforce every response (fast acquisition)", "Assuming reinforcing every response is always best long-term (it acquires fast but extinguishes fast)", "A vending machine that always drops snacks teaches quick approach—and quick quitting if it fails once"],
            ["Partial", "Reinforce some responses (slower extinction—esp. variable schedules)", "Assuming partial reinforcement means weaker learning overall, ignoring extinction resistance", "A mobile game that gives loot on an unpredictable schedule keeps you tapping long after rewards thin out"],
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
            ["Fluid intelligence", "Novel problem-solving, reasoning speed", "Claiming older adults lose “all intelligence,” ignoring preserved/grown crystallized knowledge", "Your grandparent struggles with a brand-new logic puzzle app they’ve never seen"],
            ["Crystallized intelligence", "Accumulated knowledge/skills", "Equating crystallized intelligence with trivia night facts alone, or calling it “not real intelligence”", "They instantly define obscure words on a crossword from decades of reading"],
        ]),
        ("Algorithm vs heuristic", [
            ["Algorithm", "Step-by-step procedure guaranteeing a solution (if one exists)", "Calling every shortcut or rule of thumb an “algorithm” on an exam", "In a new supermarket you walk every aisle systematically until you find soy sauce"],
            ["Heuristic", "Mental shortcut; fast, sometimes biased", "Assuming heuristics always equal irrational errors rather than useful shortcuts that can bias", "You go straight to “Asian foods” for soy sauce and usually succeed—fast, not guaranteed"],
        ]),
        ("Reliability vs validity (testing)", [
            ["Reliability (of an IQ/achievement test)", "Score stability", "Treating a stably high IQ score as proof the test validly measures personal worth or every talent", "You retake a practice aptitude test next week and land within a few points of last time"],
            ["Validity (of an IQ/achievement test)", "Predicts what it claims (e.g., academic performance)", "Treating school-predictive validity as validity for creativity, morality, or “life success” overall", "A test that predicts GPA can still miss studio-art creativity or teamwork skill"],
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
            ["Encoding", "Getting information into memory", "Blaming a “bad memory” when you never attended to the input (shallow/no encoding)", "At a loud party you smile, never repeat the name, and cannot recall it 30 seconds later"],
            ["Storage", "Maintaining information over time", "Assuming anything briefly heard is permanently filed in LTM without rehearsal or meaning", "Your childhood home address stays available for years after dense, repeated use"],
            ["Retrieval", "Accessing stored information when needed", "Treating tip-of-the-tongue blanking as proof the memory was never stored", "You know the actor’s name but blank during introductions—then it pops out in the lift later"],
        ]),
        ("Short-term/working vs long-term memory", [
            ["Short-term / working memory", "Limited, active workspace", "Assuming rehearsal always uploads to LTM, or that STM equals all of conscious thought", "You rehearse a phone number long enough to dial it, then it vanishes"],
            ["Long-term memory", "Vast, durable (with subtypes)", "Assuming LTM is a perfect video file that never reconstructs or distorts", "You remember your childhood address, but the “memory” of a birthday party may blend years"],
        ]),
        ("Recall vs recognition", [
            ["Recall", "Produce the information", "Claiming only free recall “counts” as real memory and recognition is cheating", "A blank essay prompt forces you to produce the definition without options"],
            ["Recognition", "Identify among options", "Assuming easy multiple-choice recognition proves deep mastery equal to recall", "You pick the correct term from four options but cannot explain it from scratch later"],
        ]),
        ("Proactive vs retroactive interference", [
            ["Proactive interference", "Old learning disrupts new", "Reversing proactive vs retroactive (forgetting which direction “pro/forward” points)", "Your old ATM PIN keeps popping up when you try to learn the new one"],
            ["Retroactive interference", "New learning disrupts old", "Reversing retroactive vs proactive (forgetting that “retro” means new hurts old)", "This semester’s locker combo crowds out last year’s when a friend asks for the old one"],
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
            ["Nature", "Genes / biology", "Treating nature vs nurture as either/or—genes alone or environment alone—rather than interaction", "A toddler shows high activity level across babysitters (temperament signal)"],
            ["Nurture", "Experience / environment", "Assuming environment can instantly rewrite any biological constraint with one intervention", "Parents channel that high activity into after-school football instead of forcing long still reading"],
        ]),
        ("Continuous vs discontinuous change", [
            ["Continuous", "Gradual quantitative change", "Assuming every developmental change must be a Piaget-style stage jump", "A child’s vocabulary grows a little each week rather than overnight"],
            ["Discontinuous", "Stage-like qualitative shifts", "Forcing every skill into the same rigid universal stages regardless of domain/culture", "A child who suddenly “gets” liquid conservation after failing the same task months earlier"],
        ]),
        ("Assimilation vs accommodation", [
            ["Assimilation", "Fit new info into existing schema", "Using assimilation to mean “any learning,” including cases that require changing the schema", "A toddler calls a bat a “bird” because it flies—fitting new input into an old schema"],
            ["Accommodation", "Change schema to fit new info", "Using accommodation as a synonym for any learning, including mere fitting-into-old-schema cases", "After correction, the child builds a separate “bat” category instead of forcing “bird”"],
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
            ["Drive", "Internal push to reduce physiological need", "Explaining all eating as empty-stomach drive alone, ignoring taste ads and social cues", "You eat a plain rice bowl because you skipped lunch and feel stomach hunger"],
            ["Incentive", "External pull of a goal/reward", "Explaining all eating as ads/menus alone, as if internal hunger never matters", "Already full, you still order the lava cake because the menu photo looks irresistible"],
        ]),
        ("Intrinsic vs extrinsic motivation", [
            ["Intrinsic", "Activity valued for itself", "Assuming any external reward always kills intrinsic motivation (overjustification is conditional)", "You sketch on the MTR purely because it feels good, with no contest or grade"],
            ["Extrinsic", "For a separable outcome (grades, pay, praise)", "Treating every paycheck, grade, or prize as automatically harmful to motivation", "You only finish digital art when a contest cash prize is on the line"],
        ]),
        ("James–Lange vs Cannon–Bard vs Schachter–Singer", [
            ["James–Lange", "Body response → felt emotion", "Memorizing the theorist name but reversing the order (feeling first, body second)", "You notice shaky hands and a racing heart, then conclude “I’m anxious”"],
            ["Cannon–Bard", "Simultaneous body response + feeling", "Collapsing it into James–Lange just because both mention bodily arousal", "As a scooter swerves toward you, fear and a pounding heart seem to hit together"],
            ["Schachter–Singer", "Arousal + cognitive label → emotion", "Ignoring the cognitive label/appraisal step and treating arousal alone as the full emotion", "Same sweaty arousal: at a concert you label it “excited,” before an exam “terrified”"],
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
            ["Id", "Pleasure principle; immediate urges", "Treating every impulsive wish as if it were the entire personality structure", "You want to skip the 8:30 lecture to binge a whole drama season immediately"],
            ["Ego", "Reality principle; mediates id and superego", "Using everyday “ego” (=arrogance) as if it were Freud’s reality-principle mediator", "You compromise: watch one episode tonight, finish the reading, then more shows after"],
            ["Superego", "Ideals / conscience", "Equating the Freudian superego only with “being nice,” ignoring harsh ideals/guilt", "Guilt hits hard when you want to skip class because “good students never skip”"],
        ]),
        ("Trait approaches vs situationism/interactionism", [
            ["Trait approaches", "Stable dimensions (e.g., Big Five)", "Thinking a trait score means the person never behaves differently across settings", "A questionnaire labels you “introverted,” yet you are lively at a close-friends dinner"],
            ["Situationism / interactionism", "Behavior varies strongly by context; person × situation", "Claiming traits are meaningless just because behavior varies by context", "The same classmate is quiet in lecture but talkative with close friends at hotpot"],
        ]),
        ("Extraversion vs agreeableness (Big Five)", [
            ["Extraversion", "Sociable, energetic", "Lumping “nice” and “outgoing” into one trait (mixing E with agreeableness)", "A chatty, energetic teammate who still argues hard for their own idea (high E, not high A)"],
            ["Agreeableness", "Cooperative, trusting (≠ extraversion)", "Explaining every “good classmate” only with E/A and ignoring conscientiousness/openness", "A quiet teammate who always helps others debug code (lower E, higher A)"],
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
            ["Dispositional attribution", "Explain behavior via traits", "Jumping to “they’re lazy/rude” for others’ behavior (fundamental attribution error pattern)", "A classmate arrives late and you immediately think “lazy,” ignoring the typhoon MTR delay"],
            ["Situational attribution", "Explain via context/pressures", "Underusing situation for strangers while overusing it to excuse ourselves (actor–observer pattern)", "You notice the signal fault SMS and attribute their lateness to the subway, not character"],
        ]),
        ("Conformity vs obedience", [
            ["Conformity", "Match group norm/pressure (Asch-type)", "Using conformity and obedience as synonyms on exams", "You laugh at a weak joke because the whole tutorial group laughed first"],
            ["Obedience", "Follow a direct authority order (Milgram-type)", "Calling peer fashion pressure “obedience” when no authority gave an order", "An intern follows a manager’s written order to alter a report despite feeling it’s wrong"],
        ]),
        ("Prejudice vs discrimination", [
            ["Prejudice", "Attitude / affective bias", "Assuming that if hiring looks fair, prejudice cannot exist (attitude ≠ always overt act)", "Someone privately feels cold distrust toward a group while smiling politely in class"],
            ["Discrimination", "Biased behavior / treatment", "Assuming prejudice always shows as loud, overt discrimination you can film", "Two equal CVs; only the one with a majority-sounding name gets the interview invite"],
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
            ["Job satisfaction", "Evaluative feelings about one’s job", "Assuming liking daily tasks always means the person won’t quit the organization", "You love the coding puzzles each day but still watch other companies’ pay bands"],
            ["Organizational commitment", "Attachment / loyalty to the organization", "Assuming high commitment always means loving the daily tasks themselves", "Someone stays loyal to the hospital brand yet finds charting tasks dull"],
        ]),
        ("Task vs contextual performance", [
            ["Task performance", "Core job duties", "Rating only ticket/output counts and missing helping/citizenship behavior", "A support agent closes tickets fast but never onboards new hires"],
            ["Contextual performance (citizenship)", "Helping, extra-role support", "Treating citizenship as optional fluff that never belongs in performance reviews", "Without being asked, you mentor two new hires through their first deploy"],
        ]),
        ("Industrial vs organizational focus", [
            ["Industrial", "Selection, training, job analysis, performance appraisal", "Thinking industrial-organizational psychology is only “hiring IQ tests”", "You build a structured interview bank tied to a job analysis for analysts"],
            ["Organizational", "Motivation, leadership, teams, culture, stress at work", "Ignoring leadership/teams/culture topics because “I-O is just selection”", "You study why a product team suddenly distrusts a newly hired manager"],
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
            ["Eustress", "Challenging, motivating stress", "Writing that all stress is harmful, so pre-game nerves must be purely bad", "Nervous excitement before a football match that sharpens your first-half focus"],
            ["Distress", "Overwhelming, harmful stress", "Thinking eustress never costs energy or that only trauma counts as distress", "Weeks of overload plus 4-hour nights leave you irritable and getting sick often"],
        ]),
        ("Primary vs secondary appraisal (Lazarus)", [
            ["Primary appraisal", "Is it a threat / challenge / irrelevant?", "Skipping secondary appraisal and treating every stressor as equally catastrophic", "A surprise pop quiz first feels like a threat (“I’m doomed”) before you check resources"],
            ["Secondary appraisal", "What coping resources do I have?", "Once something feels threatening, ignoring whether you have coping resources", "You remember last night’s revision and that you can ask the tutor one clarifying question"],
        ]),
        ("Problem-focused vs emotion-focused coping", [
            ["Problem-focused coping", "Change the stressor / situation", "Judging all emotion-focused coping as weak avoidance, even when the stressor isn’t controllable", "You build a revision timetable and email the lecturer about an unclear rubric"],
            ["Emotion-focused coping", "Regulate feelings when the situation is less controllable", "Only venting when a controllable problem (e.g., messy notes) still needs a plan", "After a job rejection you can’t undo, you call a friend to vent and go for a walk"],
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
            ["Distress", "Subjective suffering", "Pathologizing any unusual behavior or intense feeling without asking about impairment/distress", "Intense sadness for days after a breakup—painful, but context matters for disorder labels"],
            ["Dysfunction", "Impairment in life domains (plus cultural deviance considerations)", "Treating every intense emotion as a disorder even when work/relationships still function", "The same sadness also stops you attending lectures and answering messages for weeks"],
        ]),
        ("Fear vs anxiety", [
            ["Fear", "Present-focused alarm to a specific threat", "Using fear and anxiety as perfect synonyms in clinical write-ups", "You jump and freeze when a car nearly hits you in a crosswalk—present threat"],
            ["Anxiety", "Anticipatory apprehension about future threat", "Treating weeks of future-oriented worry as identical to panic at a present threat", "For weeks you worry “something will go wrong” before an exam that hasn’t happened yet"],
        ]),
        ("Obsessions vs compulsions", [
            ["Obsessions", "Intrusive unwanted thoughts / images / urges", "Calling any neat desk preference “OCD,” or confusing obsessions with enjoyably chosen hobbies", "An intrusive, unwanted doubt that you left the stove on ruins the start of a lecture"],
            ["Compulsions", "Repetitive behaviors / mental acts aimed at reducing distress", "Treating any repeated habit (playlist on loop) as a clinical compulsion", "You leave the flat, walk back, and check the burners five times to cut the doubt"],
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
            ["Biomedical", "Medication, ECT, other biological interventions", "Assuming a prescription replaces all need for skills practice or psychotherapy", "An SSRI is prescribed for major depression while CBT skills are still on the table"],
            ["Psychotherapy", "Talk / behavioral interventions with a clinician", "Assuming talk therapy alone is always enough for every severe disorder", "Weekly CBT sessions with between-session thought records and exposure homework"],
        ]),
        ("CBT vs psychodynamic therapy", [
            ["CBT", "Change thoughts/behaviors maintaining problems; structured / present-focused", "Claiming CBT “ignores emotion” because it also targets thoughts and behaviors", "Before a presentation you log the thought “I’ll fail publicly” and rate the anxiety 0–100"],
            ["Psychodynamic", "Explore unconscious patterns, insight, relationship themes", "Thinking psychodynamic therapy means only classic Freudian couches and dream books", "In therapy you link repeated people-pleasing at work to early caregiver patterns"],
        ]),
        ("Efficacy vs effectiveness", [
            ["Efficacy", "Works under controlled trial conditions", "Treating one famous RCT as proof the treatment works identically in every busy clinic", "A university trial with strict inclusion criteria and trained research therapists"],
            ["Effectiveness", "Works in real-world routine care", "Ignoring that comorbid, messy community clinics differ from screened lab samples", "The same protocol’s outcomes in a busy public community clinic with mixed caseloads"],
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
