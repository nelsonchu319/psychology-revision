#!/usr/bin/env python3
"""Append Ch7–16 question banks to data/questions.js."""
from __future__ import annotations
import json, re, sys
from pathlib import Path
from collections import defaultdict
sys.path.insert(0, "/workspace/psychology-revision/tools")
from balance_lib import balance, sole_long

ROOT = Path("/workspace/psychology-revision")
QPATH = ROOT / "data" / "questions.js"

def load_questions():
    text = QPATH.read_text(encoding="utf-8")
    m = re.search(r"=\s*(\[.*\])\s*;", text, re.S)
    return json.loads(m.group(1))

def assign_ids(qs):
    counters = defaultdict(int)
    for q in qs:
        ch, lv = q["chapter"], q["level"]
        counters[(ch, lv)] += 1
        n = counters[(ch, lv)]
        q["id"] = f"c{ch}-l{lv}-{n:02d}"
    return qs

def q(chapter, level, section, question, options, correct, correctFeedback, wrongFeedback, page=None):
    opts = list(options)
    if level >= 3:
        opts = balance(opts, correct, band=(52, 62))
        if sole_long(opts, correct):
            opts = balance(opts, correct, band=(54, 60))
    d = {
        "chapter": chapter,
        "level": level,
        "section": section,
        "question": question,
        "options": opts,
        "correct": correct,
        "correctFeedback": correctFeedback,
        "wrongFeedback": {str(k): v for k, v in wrongFeedback.items()},
    }
    if page is not None:
        d["page"] = page
    return d

def wf(a,b,c,d):
    """wrongFeedback for options 0..3; use None for the correct index slot."""
    out = {}
    for i,m in enumerate([a,b,c,d]):
        if m:
            out[i] = m
    return out

def make_all():
    out=[]
    for fn in [make_ch7,make_ch8,make_ch9,make_ch10,make_ch11,make_ch12,make_ch13,make_ch14,make_ch15,make_ch16]:
        out += fn()
    return out

def make_ch7():
    o=[]
    # L1
    o += [
      q(7,1,"§7.1","Cognition is best described as:",[
        "Only reflexive motor habits",
        "Thinking and related mental processes",
        "Personality trait stability alone",
        "Hormone release patterns only"],1,
        "Cognition covers thinking and related processes (perceive, know, remember, judge).",
        wf("Cognition is mental, not only reflexes.","None","Personality is a different chapter topic.","Hormones are biological mechanisms, not the definition of cognition."),214),
      q(7,1,"§7.1","A prototype is:",[
        "A random list of unrelated words",
        "The best or most typical example of a concept",
        "A guaranteed problem-solving algorithm",
        "A measure of IQ exclusively"],1,
        "Prototypes are highly typical category examples that help organize thinking.",
        wf("Prototypes are typical exemplars, not random lists.","None","Algorithms are problem-solving procedures.","IQ is separate from the prototype concept."),215),
      q(7,1,"§7.2","The smallest unit of sound in a language is a:",[
        "Morpheme","Phoneme","Schema","Heuristic"],1,
        "Phonemes are basic sound units; morphemes are meaning units.",
        wf("Morphemes carry meaning.","None","Schemata are concept clusters.","Heuristics are thinking shortcuts."),218),
      q(7,1,"§7.3","An algorithm is:",[
        "A mental shortcut that may err",
        "A step-by-step procedure that guarantees a solution if one exists",
        "A prototype of a category",
        "A type of flashbulb memory"],1,
        "Algorithms are exhaustive step-by-step methods.",
        wf("That describes a heuristic.","None","Prototypes organize concepts.","Flashbulb memories are vivid emotional memories."),222),
      q(7,1,"§7.4","Spearman’s g refers to:",[
        "A general intelligence factor",
        "Only musical talent",
        "A schedule of reinforcement",
        "A defense mechanism"],0,
        "Spearman proposed a general intelligence factor (g).",
        wf(None,"Gardner discusses multiple intelligences including musical.","Reinforcement schedules are operant conditioning.","Defenses are psychodynamic."),228),
      q(7,1,"§7.5","The Flynn effect refers to:",[
        "Declining raw IQ scores every decade",
        "Rising average raw IQ scores across generations",
        "Loss of crystallized knowledge only",
        "Identical twin concordance for personality"],1,
        "Flynn effect = generational rises in raw intelligence-test scores.",
        wf("The effect is a rise, not a decline.","None","It is about test scores broadly, not only crystallized loss.","Twin concordance is a heritability topic."),232),
    ]
    # L2
    o += [
      q(7,2,"§7.3","Functional fixedness most directly impairs problem solving by:",[
        "Blocking new uses for a familiar object",
        "Increasing working-memory capacity",
        "Guaranteeing algorithmic success",
        "Eliminating all heuristics"],0,
        "Functional fixedness sticks people to usual object functions.",
        wf(None,"It does not increase capacity.","It hinders, not guarantees, solutions.","Heuristics remain available but may not help."),224),
      q(7,2,"§7.3","Availability heuristic judgments rely mainly on:",[
        "Ease of bringing examples to mind",
        "Strict Bayesian base-rate math only",
        "Random genetic mutations",
        "Operant extinction curves"],0,
        "Availability uses ease of retrieval as a cue for frequency/probability.",
        wf(None,"People often neglect base rates.","Genetics is unrelated here.","Extinction is learning, not this heuristic."),225),
      q(7,2,"§7.4","Sternberg’s triarchic theory includes analytical, creative, and:",[
        "Practical intelligence","Only g-factor speed","Sensory adaptation","Id impulses"],0,
        "Triarchic = analytical, creative, practical.",
        wf(None,"Sternberg expands beyond g alone.","Sensory adaptation is sensation.","Id is Freudian."),228),
      q(7,2,"§7.2","Morphemes differ from phonemes because morphemes:",[
        "Are the smallest units of meaning",
        "Are only vowel sounds",
        "Cannot combine into words",
        "Are identical to schemata"],0,
        "Morphemes = smallest meaning units; phonemes = sound units.",
        wf(None,"Phonemes include consonants too.","Morphemes combine into words.","Schemata are conceptual clusters."),218),
      q(7,2,"§7.6","Range of reaction emphasizes that genes:",[
        "Set boundaries within which environment can shape outcomes",
        "Fully determine IQ with no environmental role",
        "Are irrelevant to cognitive ability",
        "Only affect height, never cognition"],0,
        "Range of reaction: genetic potential + environmental placement.",
        wf(None,"Both genes and environment matter.","Genes contribute.","Cognitive traits are also discussed."),236),
    ]
    # L3 (15)
    vignettes = [
      ("§7.3", "A student always restarts coding bugs by rewriting the whole file because that worked once, ignoring smaller debug steps. This best illustrates:",
        ["Mental set persisting with a past approach","Secure attachment to a caregiver","Sensory adaptation to room light","Token economy reinforcement"],0,
        "Mental set = sticking with a previously successful strategy.",
        wf(None,"Attachment is developmental.","Adaptation is sensory.","Tokens are operant tools."),224),
      ("§7.3", "After seeing news about plane crashes, Mira overestimates flying risk versus driving. She is likely using:",
        ["Availability heuristic from vivid recall","A perfect algorithm for risk","Spearman’s pure g calculation","Classical extinction of fear"],0,
        "Vivid crash stories come easily to mind → availability.",
        wf(None,"No guaranteed algorithm is described.","g is intelligence structure.","Extinction weakens CRs."),225),
      ("§7.1", "Calling a robin a “better bird” than a penguin for teaching the bird concept highlights:",
        ["Prototype typicality within a concept","Anterograde amnesia","Drive-reduction thirst","Groupthink consensus"],0,
        "Robins are closer to many people’s bird prototype.",
        wf(None,"Amnesia is memory loss.","Drive theory is motivation.","Groupthink is social."),215),
      ("§7.3", "Using a coin only as money and never as a screwdriver tip in a pinch shows:",
        ["Functional fixedness about object use","Flashbulb accuracy guarantees","Flynn-effect score gains","Unconditional positive regard"],0,
        "Stuck on conventional function = functional fixedness.",
        wf(None,"Flashbulb is vivid memory.","Flynn is generational IQ.","UPR is Rogers."),224),
      ("§7.4", "Solving novel machine failures with inventive workarounds best maps onto Sternberg’s:",
        ["Creative intelligence component","Only crystallized vocabulary","Sensory memory store","Id pleasure seeking"],0,
        "Creative intelligence = novel problem solutions.",
        wf(None,"Crystallized is accumulated knowledge.","Sensory memory is brief.","Id is Freudian."),228),
      ("§7.4", "Navigating a new city’s transit without a map by adapting flexibly best fits Sternberg’s:",
        ["Practical intelligence (“street smarts”)","Phoneme discrimination only","Systematic desensitization","Projective testing"],0,
        "Practical intelligence applies knowledge to everyday contexts.",
        wf(None,"Phonemes are language sounds.","Desensitization is therapy.","Projectives assess personality."),228),
      ("§7.5", "A culturally loaded verbal IQ item may threaten:",
        ["Fairness / cultural bias validity concerns","Guaranteed construct validity forever","Sensory threshold measurement","GAS exhaustion stage"],0,
        "Culture-loaded items raise bias and fairness issues.",
        wf(None,"Bias threatens validity claims.","Thresholds are sensation.","GAS is stress."),234),
      ("§7.3", "Ignoring base rates of a rare disease after a vivid positive test story is closest to:",
        ["Representativeness / base-rate neglect themes","Operant shaping of pigeons","Hippocampal consolidation only","Display-rule learning"],0,
        "Judging by resemblance while neglecting base rates is a classic bias pattern.",
        wf(None,"Shaping is operant.","Consolidation is memory.","Display rules are emotion."),226),
      ("§7.1", "Knowing the “restaurant script” (order→eat→pay) is an example of:",
        ["An event schema / script","A fixed-ratio schedule","Retrograde amnesia","Type A hostility"],0,
        "Event schemata (scripts) guide routine sequences.",
        wf(None,"Schedules are operant.","Amnesia is memory loss.","Type A is stress/personality."),216),
      ("§7.2", "Children worldwide progressing from babbling toward structured grammar supports:",
        ["Orderly early language acquisition patterns","Complete environmental irrelevance","Personality Big Five only","SRRS life-change units"],0,
        "OpenStax notes a similar early acquisition sequence across cultures.",
        wf(None,"Environment still matters; sequence is widely shared.","Big Five is personality.","SRRS is stress."),219),
      ("§7.5", "If two alternate IQ forms correlate highly, that supports:",
        ["Reliability of the measure","That the test causes intelligence","That heuristics are algorithms","That schemas are phonemes"],0,
        "High alternate-form correlation → reliability evidence.",
        wf(None,"Reliability ≠ causation of IQ.","Heuristics ≠ algorithms.","Different constructs."),231),
      ("§7.3", "A password cracker trying every combination illustrates an:",
        ["Algorithmic exhaustive search","Availability heuristic only","Secure attachment style","Token economy backup"],0,
        "Trying all combinations is algorithmic.",
        wf(None,"Availability is a shortcut.","Attachment is developmental.","Tokens reinforce behavior."),222),
      ("§7.4", "Gardner listing linguistic, spatial, and interpersonal intelligences challenges:",
        ["Narrow single-g definitions of intelligence","The existence of phonemes","Atkinson–Shiffrin sensory store","Milgram obedience rates"],0,
        "Multiple intelligences pluralize what “smart” means beyond g alone.",
        wf(None,"Phonemes still exist.","Memory model unrelated.","Obedience is social."),229),
      ("§7.6", "Twins reared apart still resembling each other on IQ most directly supports:",
        ["Genetic contribution within a reaction range","That environment is the only cause","That IQ tests measure only motivation","That language has no lexicon"],0,
        "Similarity despite different homes implicates genetics (with shared-method caveats).",
        wf(None,"Genes matter too.","IQ measures cognitive performance, not only motivation.","Language has lexicon+grammar."),238),
      ("§7.3", "Confirmation bias would lead a student to:",
        ["Seek only evidence supporting a favored theory","Run a fully pre-registered adversarial test","Ignore all prototypes when categorizing","Use only algorithms, never heuristics"],0,
        "Confirmation bias favors supportive evidence.",
        wf(None,"That would fight the bias.","Prototypes are separate.","Bias is about evidence search, not banning heuristics."),226),
    ]
    for sec,ques,opts,corr,cf,wfd,pg in vignettes:
        o.append(q(7,3,sec,ques,opts,corr,cf,wfd,pg))
    # L4
    o += [
      q(7,4,"2.3+7.3","A lab claims a new “creativity drug” raised insight scores but assigned volunteers who already loved puzzles to the drug group and novices to placebo, with no randomization. Best methods critique?",[
        "Selection confounds block causal claims about the drug","Heuristics make random assignment ethically impossible always","Phonemes prove the design is internally valid","Flynn effect alone creates true experiments"],0,
        "Without random assignment, pre-existing differences explain results.",
        wf(None,"Heuristics do not forbid randomization.","Phonemes are language units.","Flynn effect is generational scores."),None),
      q(7,4,"6.3+7.3","A teacher reinforces only the first correct algebra step every 5 minutes (FI) while students still show functional fixedness on word problems. Best integration?",[
        "Schedules can raise response rates yet not remove cognitive fixedness","Fixed-interval schedules erase all mental sets automatically","Functional fixedness is a positive reinforcer","Algorithms forbid any operant influence on homework"],0,
        "Operant schedules shape emission rates; cognitive obstacles can persist.",
        wf(None,"FI does not auto-remove mental sets.","Fixedness is an obstacle, not a reinforcer.","Learning and cognition interact."),None),
      q(7,4,"3.2+7.5","An article says “IQ is 100% genetic because heritability is .80.” A biopsych peer replies heritability is population variance, not destiny for individuals. Best evaluation?",[
        "Heritability ≠ genetic determination of one person’s score","Heritability .80 means environment is impossible","IQ tests measure only reaction time in the retina","Schemas are stored exclusively in the spinal cord"],0,
        "High heritability still allows environmental effects and is a group statistic.",
        wf(None,"Environment can still matter.","IQ is broader than retinal RT.","Schemas are cognitive, not spinal-only."),None),
      q(7,4,"5.1+7.1","Top-down perception using expectations resembles using schemata to fill gaps. Best parallel?",[
        "Both use prior knowledge to organize incomplete input","Phonemes are identical to absolute thresholds","Heuristics require rods but not cones","Prototypes are unconditioned stimuli only"],0,
        "Schemata/top-down processing both apply prior structures to input.",
        wf(None,"Different constructs.","Heuristics are not photoreceptor-bound.","Prototypes are not UCS by definition."),None),
      q(7,4,"1.2+7.4","Comparing Spearman’s g with Gardner’s multiple intelligences, a history-minded student asks which is more “scientific.” Best nuanced reply?",[
        "g has strong psychometrics; Gardner is broader but harder to measure cleanly","Gardner proved g does not exist at all","Spearman measured only emotional intelligence","Both theories reject any empirical testing"],0,
        "Tradeoff: psychometric coherence of g vs breadth of multiple intelligences.",
        wf(None,"g research remains influential.","Emotional IQ is another construct.","Both invite empirical work."),None),
      q(7,4,"8.1+7.3","Working-memory limits make multi-step mental arithmetic hard, so students use heuristics. Best link?",[
        "Limited working memory encourages shortcut strategies","Working memory capacity is infinite after one rehearsal","Heuristics require anterograde amnesia","Algorithms never use storage"],0,
        "Capacity limits push people toward simplifying heuristics.",
        wf(None,"Capacity remains limited.","Amnesia is not required.","Algorithms still use memory."),None),
      q(7,4,"2.4+7.5","A company uses a poorly validated “brain teaser” interview to hire, then claims fairness. Ethics/methods best flag?",[
        "Weak validity and possible adverse impact undermine fair selection claims","Any puzzle automatically has perfect predictive validity","Flynn effect legalizes all hiring tests","Phoneme tasks are the only legal assessments"],0,
        "Selection tools need reliability/validity and fair use scrutiny.",
        wf(None,"Validity must be evidenced.","Flynn effect is unrelated to legalizing tests.","Many assessments exist."),None),
      q(7,4,"4.1+7.3","Sleep loss impairs prefrontal control; a student then shows more confirmation bias online. Plausible bridge?",[
        "Reduced cognitive control can worsen biased evidence search","Sleep spindles erase all heuristics permanently","Confirmation bias is a circadian hormone only","Algorithms require REM dreams to run"],0,
        "Executive control supports resisting bias; sleep loss can weaken it.",
        wf(None,"Heuristics persist.","Bias is cognitive, not a hormone definition.","Algorithms are procedures, not REM-bound."),None),
    ]
    return o

def _pack(ch, items):
    """items: list of tuples (level, section, question, options, correct, cf, wf_tuple, page|None)"""
    out=[]
    for level, section, question, options, correct, cf, wft, page in items:
        a,b,c,d = wft
        out.append(q(ch, level, section, question, options, correct, cf, wf(a,b,c,d), page))
    return out

def make_ch8():
    items=[]
    # L1
    items += [
      (1,"§8.1","Encoding is the process of:",["Getting information into the memory system","Only retrieving old memories","Destroying the engram permanently","Measuring absolute thresholds"],0,"Encoding = input into memory.",(None,"Retrieval pulls information out.","Engrams are memory traces, not encoding.","Thresholds are sensation."),248),
      (1,"§8.1","According to Atkinson–Shiffrin, information usually flows:",["Sensory → short-term → long-term","Long-term → sensory → spinal","Only into procedural stores","Directly from UCS to CR"],0,"Classic multistore flow with rehearsal to LTM.",(None,"Order is reversed/wrong.","Multiple LTM types exist.","That is classical conditioning."),249),
      (1,"§8.1","Episodic memory is a type of:",["Explicit memory for personal events","Implicit motor skill only","Sensory iconic store only","Fixed-interval schedule"],0,"Episodic = personally experienced events (explicit).",(None,"Skills are often implicit/procedural.","Sensory memory is brief.","Schedules are operant."),252),
      (1,"§8.2","The hippocampus is especially important for:",["Forming new explicit memories","Detecting only light wavelengths","Releasing digestive enzymes","Producing phonemes"],0,"Hippocampus supports encoding/consolidation of new explicit memories.",(None,"Vision is retina/cortex.","Digestion is not memory.","Phonemes are language sounds."),254),
      (1,"§8.3","Anterograde amnesia involves difficulty:",["Forming new memories after onset","Remembering only childhood years","Naming colors exclusively","Hearing high frequencies"],0,"Anterograde = cannot form new post-onset memories.",(None,"That is more retrograde-flavored.","Color naming is different.","Hearing is audition."),259),
      (1,"§8.3","The misinformation effect shows that:",["Post-event information can distort memory reports","Memory is a perfect video recording","Extinction always erases skills","IQ equals working memory"],0,"Loftus-style post-event suggestion alters reports.",(None,"Memory is reconstructive.","Extinction ≠ misinformation.","Different constructs."),262),
    ]
    # L2
    items += [
      (2,"§8.1","Elaborative rehearsal improves LTM mainly by:",["Linking new material to meaning and knowledge","Repeating sounds without meaning only","Avoiding all chunking strategies","Blocking the amygdala always"],0,"Elaboration builds meaningful connections.",(None,"Maintenance rehearsal is shallower.","Chunking helps.","Amygdala modulates emotion, not the definition."),251),
      (2,"§8.3","Proactive interference occurs when:",["Old learning disrupts new learning","New learning disrupts old learning only","Encoding never happens at all","Retrieval is identical to sensation"],0,"Proactive = forward-acting interference from old → new.",(None,"That is retroactive.","Encoding can occur.","Retrieval ≠ sensation."),266),
      (2,"§8.2","Flashbulb memories are typically:",["Vivid but not guaranteed accurate","Immune to all reconstruction","Stored only in the cerebellum","Identical to unconditional responses"],0,"Emotionally vivid, yet still reconstructive.",(None,"They can be wrong.","Cerebellum is more procedural.","UCR is classical conditioning."),256),
      (2,"§8.1","Implicit memory is demonstrated when people:",["Show skills/priming without conscious recall","Always verbally declare episodic details","Use only algorithms to recall","Fail every recognition test by definition"],0,"Implicit = without conscious remembering.",(None,"That is explicit.","Algorithms are problem solving.","Recognition can still show memory."),252),
      (2,"§8.4","Chunking aids STM by:",["Grouping items into meaningful units","Deleting all sensory traces instantly","Forcing anterograde amnesia","Removing elaborative links"],0,"Chunking expands effective capacity via grouping.",(None,"It organizes, not deletes sensory memory as its goal.","Amnesia is a disorder.","Elaboration helps LTM."),269),
    ]
    # L3 x15
    l3=[
      ("§8.1","After reading once, Kai cannot recall definitions but recognizes them on a multiple-choice test. This highlights:",["Recognition often easier than free recall","That encoding never occurred if recall fails","That LTM capacity is about seven items","That implicit memory requires free recall"],0,"Recognition provides cues that free recall lacks.",(None,"Partial learning can support recognition.","7±2 is STM, not LTM capacity.","Implicit ≠ needing free recall."),250),
      ("§8.3","A witness is asked “How fast when they smashed?” versus “contacted,” then reports higher speed. Best label?",["Misinformation / leading-question effect","Secure-avoidant attachment shift","Flynn effect on vocabulary","Yerkes–Dodson peak arousal only"],0,"Verb wording alters memory reports.",(None,"Attachment is developmental.","Flynn is IQ generations.","Arousal law is motivation."),262),
      ("§8.1","Riding a bike while unable to state gear rules best illustrates:",["Implicit procedural memory","Semantic memory of dates only","Sensory echoic storage of bike color","Fundamental attribution error"],0,"Skills can be implicit/procedural.",(None,"Semantic is facts.","Echoic is auditory sensory.","FAE is social."),252),
      ("§8.3","Studying French then Spanish, then failing French words, is most like:",["Retroactive interference","Proactive interference only","Latent learning without performance","Group polarization"],0,"New Spanish disrupts old French → retroactive.",(None,"Proactive would be French blocking Spanish.","Latent learning is Tolman.","Polarization is social."),266),
      ("§8.2","Strong emotion during an accident may enhance memory via amygdala modulation. This best fits:",["Arousal-related memory strengthening themes","Absolute threshold for light","Phoneme acquisition order","Token economies in factories"],0,"Emotional arousal can strengthen memory traces.",(None,"Thresholds are sensation.","Phonemes are language.","Tokens are operant."),255),
      ("§8.3","Forgetting a new classmate’s name because you never encoded it is:",["Encoding failure","Retrieval of an engram that never needed encoding","Retrograde amnesia for childhood","Systematic desensitization"],0,"If not encoded, later retrieval fails.",(None,"No engram without encoding.","Retrograde is loss of old memories.","Desensitization is therapy."),264),
      ("§8.1","Repeating a phone number until you dial it uses:",["Maintenance rehearsal in STM/working memory","Semantic LTM reorganization only","Projective personality assessment","Kohlberg postconventional reasoning"],0,"Rote rehearsal holds STM.",(None,"Semantic reorganization is deeper LTM work.","Projectives are personality.","Kohlberg is moral."),250),
      ("§8.4","Building a memory palace for anatomy terms is a:",["Mnemonic strategy","Form of anterograde amnesia","Type of daily hassle on SRRS","Display rule for anger"],0,"Mnemonics are memory aids.",(None,"Mnemonics help memory.","SRRS is stress.","Display rules are emotion."),270),
      ("§8.3","Blocking on a well-known actor’s name (tip-of-the-tongue) is:",["Temporary retrieval failure","Proof encoding never happened","A psychotic delusion by definition","Classical acquisition of a CR"],0,"TOT = retrieval blocked though stored.",(None,"Often encoded but inaccessible briefly.","Not psychosis.","Not classical conditioning."),265),
      ("§8.1","Baddeley’s model adds a central executive that:",["Coordinates subsystems of working memory","Stores only lifetime episodic films","Is identical to the UCS","Measures g with a single digit"],0,"Central executive directs attention/subsystems.",(None,"Not a lifelong video archive alone.","UCS is conditioning.","g is intelligence."),251),
      ("§8.3","After a concussion, Lea recalls childhood but not hospital visitors this week. Pattern fits:",["Anterograde more than retrograde loss","Pure retrograde with intact new learning","Iconic memory of 30 minutes","Availability heuristic for pain only"],0,"New post-injury memories fail → anterograde.",(None,"Childhood recall intact suggests not pure retrograde.","Iconic is milliseconds–seconds.","Heuristic is judgment."),259),
      ("§8.2","Lashley’s failure to find a single engram locus suggested:",["Memories are distributed across cortex","All memory lives in one spinal neuron","IQ tests measure only rote rehearsal","Attachment styles are engrams"],0,"Distributed storage idea from engram search failures.",(None,"Not a single neuron story.","IQ ≠ only rehearsal.","Attachment ≠ engram definition."),254),
      ("§8.4","Self-testing before an exam helps more than rereading mainly via:",["Retrieval practice strengthening access","Avoiding all encoding","Creating proactive amnesia","Reducing phoneme inventory"],0,"Practice testing strengthens retrieval routes.",(None,"Encoding still needed.","Not amnesia.","Phonemes unrelated."),271),
      ("§8.3","Persistence of intrusive trauma memories despite wanting to forget illustrates:",["Persistence as a memory “vice”","Perfect intentional forgetting always","That implicit memory cannot exist","GAS alarm without appraisal"],0,"Persistence = unwanted remembering.",(None,"Forgetting is imperfect.","Implicit exists.","GAS is stress."),267),
      ("§8.1","Knowing Paris is France’s capital is mainly:",["Semantic memory","Episodic memory of your last meal","Procedural bike balance","Sensory iconic snapshot"],0,"Facts/concepts = semantic.",(None,"Episodic is personal events.","Procedural is skills.","Iconic is brief visual."),252),
    ]
    for row in l3: items.append((3,)+row)
    # L4
    items += [
      (4,"3.3+8.2","A patient with hippocampal damage learns a mirror-tracing skill across days but denies having practiced. Best interpretation?",["Procedural learning can spare when explicit memory is impaired","Hippocampus is required for all procedural skills","This proves encoding failure of sensory memory only","Misinformation always creates new procedural skills"],0,"Classic dissociation: skill up, declarative down.",(None,"Procedural often less hippocampal.","Sensory memory not the main story.","Misinformation ≠ skill learning."),None),
      (4,"6.2+8.3","A CS (clinic smell) triggers anxiety CR; later wording in therapy distorts the memory of the first panic. Cross-topic best take?",["Classical emotional memory can coexist with reconstructive misinformation","CRs cannot be modulated by cognition ever","Only algorithms extinguish CRs","Flashbulb CRs are always accurate"],0,"Conditioned fear and reconstructive memory can both operate.",(None,"Cognition can matter.","Extinction is CS without UCS.","Flashbulbs not perfect."),None),
      (4,"2.3+8.3","An eyewitness study lacks a control group without leading questions. Causal claim that “verbs cause memory change” is:",["Weakened by missing comparison control","Guaranteed by vivid flashbulb feelings","Proven by any single case anecdote","Equivalent to random assignment"],0,"Without control, causal inference is weak.",(None,"Vividness ≠ control.","Anecdotes weak.","Not the same as randomization."),None),
      (4,"7.3+8.1","Students use availability heuristics when judging how much they studied based on ease of recalling sessions, mistaking fluency for learning. Best bridge?",["Metacognitive judgments can be heuristic-biased despite real encoding needs","Availability always measures true LTM strength perfectly","Chunking forbids heuristics","Algorithms erase STM"],0,"Ease-of-retrieval cues can mislead study judgments.",(None,"Fluency ≠ mastery.","Chunking compatible with heuristics.","STM remains."),None),
      (4,"5.2+8.1","Iconic memory’s brief visual trace is to sensory memory as a prototype is to concepts—both are:",["Early organizing structures for incoming information","Long-term procedural skills","Forms of proactive interference","Types of DSM diagnoses"],0,"Both help initial organization of input (at different levels).",(None,"Not procedural skills.","Not interference.","Not diagnoses."),None),
      (4,"14.1+8.2","HPA arousal during trauma may amplify amygdala-tagged memories yet later therapy wording still reshapes reports. Best synthesis?",["Biological arousal strengthens encoding while retrieval remains reconstructive","HPA activity freezes memory into a perfect indelible tape","Misinformation requires zero emotion","Cortisol deletes all implicit memory"],0,"Arousal affects strength; reconstruction still happens later.",(None,"Not a perfect tape.","Misinformation can occur with emotion.","Implicit not wholesale deleted."),None),
      (4,"1.3+8.4","A cognitive psychologist recommends retrieval practice; a behaviorist frames quiz points as reinforcers. Compatible?",["Yes—testing can both strengthen retrieval and reinforce studying","No—reinforcement forbids any cognitive explanation","Retrieval practice requires Freudian insight","Reinforcers only work on implicit engrams"],0,"Cognitive and operant descriptions can co-describe quiz benefits.",(None,"Not mutually exclusive.","Not insight therapy.","Reinforcers affect emitted behavior broadly."),None),
      (4,"12.4+8.3","Group discussion after a crime may blend memories (memory conformity). Versus Asch, both show:",["Social influence can reshape reports of reality","Obedience to shock levels only","That encoding failure is impossible in groups","That stereotypes are sensory thresholds"],0,"Normative/informational influence can alter reported memories/judgments.",(None,"Not only Milgram shocks.","Encoding can still fail.","Unrelated."),None),
    ]
    return _pack(8, items)

