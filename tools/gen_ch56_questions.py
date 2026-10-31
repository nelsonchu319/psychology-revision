#!/usr/bin/env python3
"""Add stable IDs to all questions; append Ch5–Ch6 banks with length-balanced L3/L4."""
from __future__ import annotations
import json, re
from pathlib import Path
from collections import Counter, defaultdict
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

def q(chapter, level, section, question, options, correct, correctFeedback, wrongFeedback, page):
    opts = list(options)
    if level >= 3:
        opts = balance(opts, correct, band=(52, 60))
        # retry if still sole longest
        if sole_long(opts, correct):
            opts = balance(opts, correct, band=(54, 58))
    return {
        "chapter": chapter,
        "level": level,
        "section": section,
        "question": question,
        "options": opts,
        "correct": correct,
        "correctFeedback": correctFeedback,
        "wrongFeedback": {str(k): v for k, v in wrongFeedback.items()},
        "page": page,
    }

def wf(*msgs):
    """Build wrongFeedback dict for indices that are wrong; msgs length 4, correct slot ignored."""
    d = {}
    for i, m in enumerate(msgs):
        if m:
            d[i] = m
    return d

def make_ch5():
    out = []
    # L1
    out += [
      q(5,1,"§5.1","Sensation is best described as:",[
        "Sensory receptors detecting stimulus energy",
        "Organizing sensations into conscious experience",
        "Only top-down interpretation of meaning",
        "A Gestalt grouping rule for closure"],0,
        "Sensation = detection by receptors; perception = organization/interpretation.",
        wf(None,"That is perception, not sensation.","Top-down is part of perception, not the definition of sensation.","Gestalt rules organize perception."),147),
      q(5,1,"§5.1","An absolute threshold is approximately the:",[
        "Minimum stimulus energy detected about 50% of the time",
        "Maximum intensity a receptor can ever encode",
        "Difference between two stimuli that is always noticed",
        "Point where sensory adaptation is complete"],0,
        "Absolute threshold ≈ 50% detection rate for a stimulus.",
        wf(None,"Thresholds are minima for detection, not maxima.","That mixes absolute with difference threshold.","Adaptation is separate from threshold definition."),147),
      q(5,1,"§5.3","Rods are especially important for:",[
        "Vision in dim light, more in the periphery",
        "High-acuity color vision in the fovea only",
        "Detecting only red wavelengths of light",
        "Moving the ossicles of the middle ear"],0,
        "Rods: dim light / periphery; cones: bright light, acuity, color (fovea).",
        wf(None,"That describes cones concentrated in the fovea.","Rods are not limited to red.","Ossicles are auditory, not retinal."),154),
      q(5,1,"§5.4","Sensorineural hearing loss involves failure of:",[
        "Auditory nerve impulse transmission to the brain",
        "The eardrum and ossicles to vibrate normally",
        "The cornea to focus light on the retina",
        "Olfactory receptors to bind odor molecules"],0,
        "Sensorineural: nerve pathway; conductive: eardrum/ossicles.",
        wf(None,"That is conductive hearing loss.","Cornea focusing is vision.","Olfaction is smell."),164),
      q(5,1,"§5.6","Figure–ground organization means we tend to:",[
        "Separate a scene into a figure against a background",
        "Always prefer the longest lines in a drawing",
        "Ignore proximity when grouping objects",
        "Use only binocular disparity for grouping"],0,
        "Figure–ground is a core Gestalt idea in the chapter.",
        wf(None,"Not a Gestalt definition.","Proximity is another Gestalt rule.","Disparity is a depth cue, not figure–ground."),169),
      q(5,1,"§5.2","In vision, wavelength of light is generally associated with:",[
        "Perceived color (hue)",
        "Perceived loudness of a tone",
        "Only vestibular balance signals",
        "The absolute threshold for pain"],0,
        "Wavelength ↔ color; amplitude ↔ brightness (vision).",
        wf(None,"Loudness is auditory amplitude.","Vestibular is balance.","Pain thresholds are separate."),150),
    ]
    # L2
    out += [
      q(5,2,"§5.1","Bottom-up processing emphasizes:",[
        "Building perception from sensory input features",
        "Using only expectations to invent sensations",
        "Ignoring receptor activity entirely",
        "Applying punishment after a behavior"],0,
        "Bottom-up starts from sensory data; top-down uses knowledge/expectations.",
        wf(None,"That overstates top-down as inventing sensation.","Receptors are the start of sensation.","Punishment is learning (Ch 6), not perception."),147),
      q(5,2,"§5.3","Opponent-process theory uniquely helps explain:",[
        "Negative afterimages in complementary colors",
        "Why rods outnumber cones in the fovea",
        "Why amplitude equals pitch in hearing",
        "Why IRB review is required for surveys"],0,
        "Opponent-process accounts for afterimages via opponent pairs.",
        wf(None,"Fovea is cone-dense; rods are peripheral.","Pitch tracks frequency, not amplitude.","IRB is research ethics (Ch 2)."),158),
      q(5,2,"§5.3","Binocular depth cues require:",[
        "Comparing input from both eyes (e.g., disparity)",
        "Only linear perspective on a flat painting",
        "Chemical binding on the tongue alone",
        "Melatonin release from the pineal gland"],0,
        "Binocular cues use two eyes; monocular cues work with one.",
        wf(None,"Linear perspective is typically monocular.","Taste is gustation.","Melatonin is circadian (Ch 4)."),160),
      q(5,2,"§5.4","Place coding of pitch refers to:",[
        "Which region of the basilar membrane is most activated",
        "Whether reinforcement is positive or negative",
        "How many cones fire in the optic chiasm",
        "Absolute threshold for olfactory molecules"],0,
        "Place + rate codes contribute to pitch perception.",
        wf(None,"Reinforcement is operant learning.","Cones/chiasm are vision.","That is smell threshold."),162),
      q(5,2,"§5.5","The vestibular system primarily supports:",[
        "Balance via inner-ear structures sensing head motion/gravity",
        "Color afterimages after staring at a flag",
        "Shaping successive approximations of a skill",
        "Random assignment in true experiments"],0,
        "Vestibular: utricle, saccule, semicircular canals.",
        wf(None,"Afterimages are visual opponent processes.","Shaping is operant (Ch 6).","Random assignment is methods (Ch 2)."),167),
    ]
    # L3 scenarios — balanced lengths
    l3 = [
      ("§5.1",156,
       "A radiologist misses a gorilla drawn into a CT stack while hunting lung nodules. Which account best fits OpenStax’s attention discussion?",
       ["Inattentional blindness: attention was locked on the search task",
        "Absolute threshold: the gorilla ink reflected zero photons",
        "Conductive hearing loss blocked visual cortex activity",
        "Negative reinforcement removed the gorilla permanently"],
       0,
       "Attention limits what reaches awareness even when stimuli are visible.",
       ["", "Thresholds are about energy detection, not task-focused misses.", "Hearing loss does not explain a visual miss.", "Reinforcement is learning, not this miss."]),
      ("§5.1",147,
       "Two soft tones differ slightly; listeners notice the difference half the time. What did the study likely estimate?",
       ["A difference threshold (jnd) near the 50% detection criterion",
        "Only an absolute threshold for a single tone alone",
        "Opponent-process pairing of red versus green cones",
        "A fixed-ratio schedule of auditory reinforcement"],
       0,
       "Difference threshold / jnd uses ~50% discrimination.",
       ["", "Absolute threshold concerns detecting one stimulus, not a difference.", "Opponent-process is color vision theory.", "Schedules belong to operant conditioning."]),
      ("§5.3",154,
       "At dusk, Maya reads poorly under a streetlamp but spots movement in her periphery. Which receptor story fits best?",
       ["Rods support dim peripheral detection; cones struggle for acuity here",
        "Only cones in the fovea handle all dim-light motion detection",
        "Ossicles in her middle ear are focusing retinal images",
        "Closure Gestalt rules convert rods into cones overnight"],
       0,
       "Rods: dim/peripheral; cones: bright/acuity/color.",
       ["", "Cones are poor in dim light; fovea is cone-heavy.", "Ossicles are for hearing, not focusing light.", "Gestalt does not transform receptor types."]),
      ("§5.3",158,
       "After staring at a green image, Jordan sees a reddish afterimage. Which theory is most directly illustrated?",
       ["Opponent-process color coding with complementary aftereffects",
        "Trichromatic theory alone without opponent mechanisms",
        "Conductive loss from stapes pressing the oval window",
        "Vicarious reinforcement of color-naming models"],
       0,
       "Negative afterimages are a textbook pointer to opponent-process ideas.",
       ["", "Trichromatic explains cone types but not afterimages as cleanly.", "That is auditory anatomy.", "Vicarious reinforcement is observational learning."]),
      ("§5.3",160,
       "A VR demo works with one eye covered using relative size and overlap. Which depth-cue class is carrying the experience?",
       ["Monocular pictorial cues available to a single eye",
        "Only binocular disparity from vergence angles",
        "Vestibular otolith signals replacing all vision",
        "Positive punishment of incorrect depth judgments"],
       0,
       "Relative size/overlap are classic monocular cues.",
       ["", "Disparity needs both eyes.", "Vestibular is balance, not pictorial depth.", "Punishment is operant learning."]),
      ("§5.4",162,
       "A musician loses high-frequency acuity; audiology implicates basal cochlear damage. Which coding idea is most relevant?",
       ["Place coding: high frequencies map to the basal membrane region",
        "Amplitude of light waves determining perceived pitch",
        "Random assignment failing in a between-subjects design",
        "Unconditional positive regard shaping cochlear hair cells"],
       0,
       "Place theory maps frequency to basilar membrane location.",
       ["", "Light amplitude is vision/brightness, not pitch.", "Methods issue, not cochlear mapping.", "Rogers/humanism is not auditory physiology."]),
      ("§5.4",164,
       "Wax and a stiff ossicular chain reduce middle-ear transmission; nerve pathways test normal. Classification?",
       ["Conductive hearing loss from impaired vibration transfer",
        "Sensorineural loss from auditory-nerve failure alone",
        "Prosopagnosia limited to facial Gestalt grouping",
        "Latent learning of silence without reinforcement"],
       0,
       "Conductive = eardrum/ossicles; sensorineural = nerve path.",
       ["", "Nerve pathway is intact here.", "Prosopagnosia is face recognition, not this case.", "Latent learning is Tolman-style cognition/learning."]),
      ("§5.5",165,
       "After a viral illness, smell is gone and food tastes dull though the tongue looks normal. Best textbook framing?",
       ["Olfaction contributes heavily to flavor; anosmia flattens taste experience",
        "Only vestibular canals encode flavor molecules on the tongue",
        "Rods in the retina are required for gustatory binding",
        "Fixed-interval schedules suppress all chemoreceptor firing"],
       0,
       "Smell and taste interact; olfactory loss changes flavor.",
       ["", "Vestibular is balance.", "Rods are visual receptors.", "Schedules do not define chemoreception."]),
      ("§5.5",167,
       "Spinning then stopping makes the world seem to keep turning. Which system is most implicated?",
       ["Vestibular semicircular canals signaling ongoing head rotation",
        "Only cones generating opponent afterimages of motion",
        "IRB noncompliance creating illusory motion percepts",
        "Negative punishment removing all optic-flow cues"],
       0,
       "Semicircular canals detect rotational acceleration; mismatch yields vertigo-like percepts.",
       ["", "Visual afterimages are not the primary spinning story.", "Ethics boards do not create vestibular illusions.", "Punishment is not the mechanism here."]),
      ("§5.6",169,
       "A logo uses broken arcs that still look like a complete circle. Which Gestalt idea is highlighted?",
       ["Closure: we mentally complete incomplete figures",
        "Absolute threshold: arcs exceeded 50% detection always",
        "Operant extinction of incomplete circle responses",
        "Sensorineural loss of Gestalt cortical modules"],
       0,
       "Closure fills gaps to perceive wholes.",
       ["", "Thresholds do not explain completing shapes.", "Extinction is conditioning.", "Hearing loss is unrelated."]),
      ("§5.6",170,
       "Two cultures describe the same ambiguous figure differently; expectations guide the report. Best label?",
       ["Perceptual set / top-down influences from experience and culture",
        "Only bottom-up receptor energy differing by passport",
        "Classical CS–UCS pairing of ink with citizenship",
        "All-or-none spikes proving culture is irrelevant"],
       0,
       "OpenStax notes culture, bias, and expectations shape perception.",
       ["", "Receptor energy alone does not equal cultural description differences.", "Conditioning terms misframe the cultural set idea.", "Neural spikes do not erase top-down effects."]),
      ("§5.2",151,
       "Engineers raise a tone’s amplitude but keep frequency fixed. Listeners should mainly report:",
       ["Increased loudness with pitch largely unchanged",
        "A shift to a new color on the visual spectrum",
        "Complete vestibular reset of head orientation",
        "Conversion from conductive to sensorineural loss"],
       0,
       "Amplitude ↔ loudness; frequency ↔ pitch.",
       ["", "Color is light wavelength.", "Vestibular is not pitch/loudness.", "Hearing-loss types are diagnostic, not this psychophysics."]),
      ("§5.3",153,
       "Light is focused on the fovea for reading fine print. Which statement is most accurate?",
       ["Foveal cones support high acuity needed for fine detail",
        "Peripheral rods alone resolve the smallest letters",
        "The stapes bone focuses photons onto hair cells",
        "Melatonin dilates the lens to enlarge letters"],
       0,
       "Fovea is cone-rich and specialized for acuity.",
       ["", "Peripheral rods are for dim detection, not fine print.", "Stapes is middle-ear bone.", "Melatonin is a sleep-related hormone."]),
      ("§5.1",148,
       "A constant perfume fades from awareness after minutes in the same room. Mechanism?",
       ["Sensory adaptation to an unchanging olfactory stimulus",
        "Absolute threshold rising to infinite forever",
        "Binocular disparity canceling odor molecules",
        "Variable-ratio reinforcement of nose receptors"],
       0,
       "Adaptation: decreased sensitivity to a constant stimulus.",
       ["", "Threshold does not become infinite.", "Disparity is a depth cue.", "Schedules are operant, not adaptation."]),
      ("§5.4",163,
       "A listener judges whether a sound is left or right using timing and intensity differences at the two ears. Cues?",
       ["Binaural localization cues comparing the two ears",
        "Only monocular cues from the basilar membrane",
        "Gustatory binding of sound-pressure molecules",
        "Humanistic unconditional positive regard for tones"],
       0,
       "Binaural cues support horizontal localization.",
       ["", "Monocular is a vision term; membrane place coding is pitch.", "Taste receptors do not localize sound.", "Humanism is a therapy/personality tradition."]),
    ]
    for sec, page, stem, opts, correct, ok, wrongs in l3:
        out.append(q(5,3,sec,stem,opts,correct,ok,wf(*wrongs),page))

    # L4 cross-topic — longer misleading scenarios
    l4 = [
      ("Cross Ch2×Ch5", 156,
       "A lab correlates self-reported 'noticing' scores with reaction times to faint flashes, then claims the flashes cause better noticing. A reviewer flags both methods and sensation concepts. Which critique is most precise?",
       ["Correlation cannot prove causation; also distinguish detection vs. decision bias carefully",
        "Absolute thresholds make every correlational design automatically experimental",
        "Rods prove causation whenever r exceeds zero in a sample",
        "IRB approval converts correlations into manipulated independent variables"],
       0,
       "Ch2: correlation ≠ causation. Ch5: detection involves thresholds/signal decisions, not automatic causal claims.",
       ["", "Thresholds do not turn correlations into experiments.", "Receptor type does not create causal proof from r.", "IRB ethics ≠ experimental control."]),
      ("Cross Ch3×Ch5", 154,
       "A patient with occipital damage has blindsight-like reports in a case write-up, while a classmate attributes everything to dopamine at the neuromuscular junction. Which framing best uses biopsych + perception ideas?",
       ["Visual cortex pathways matter for conscious sight; NMJ dopamine is the wrong system story",
        "Only spinal reflexes explain conscious color afterimages",
        "Pituitary hormones focus light on the basilar membrane",
        "Sympathetic arousal creates trichromatic cone photopigments"],
       0,
       "Occipital/visual pathways vs. confusing peripheral NMJ chemistry.",
       ["", "Reflexes do not equal cortical visual awareness.", "Pituitary/hearing mix is wrong.", "Autonomic arousal ≠ cone photochemistry."]),
      ("Cross Ch4×Ch5", 150,
       "After 36 hours awake, a student misreads dim dashboard lights and misses a roadside sign. Combine consciousness and sensation ideas:",
       ["Sleep deprivation can impair attention; dim conditions also stress rod/cone limits",
        "Melatonin turns cones into ossicles during prolonged waking",
        "REM atonia focuses the lens more sharply than NREM",
        "Depressant drugs always raise absolute visual thresholds to zero"],
       0,
       "Ch4 sleep loss + Ch5 sensory/attentional limits jointly explain misses.",
       ["", "Melatonin does not remodel receptors into ear bones.", "REM atonia is muscle paralysis in sleep, not focusing.", "Drug effects are not 'threshold to zero'."]),
      ("Cross Ch1×Ch5", 169,
       "A structuralist-style observer lists elemental colors; a Gestalt-leaning classmate insists the whole melody of the scene matters more. Mapping schools to Ch5:",
       ["Structuralism-like elements vs. Gestalt organization principles in perception",
        "Only behaviorist reinforcement schedules organize figure–ground",
        "Psychoanalysis replaces rods with latent dream symbols in the fovea",
        "Functionalism denies that wavelength relates to hue at all"],
       0,
       "History (Ch1) schools echo how we analyze vs. organize perceptual experience (Ch5).",
       ["", "Schedules are operant learning.", "Dream symbolism is not retinal anatomy.", "Functionalism does not deny wavelength–hue links."]),
      ("Cross Ch2×Ch5", 147,
       "An experimenter manipulates flash intensity (IV) and records yes/no detection (DV), with random assignment to intensity levels. What claim is most warranted?",
       ["A controlled experiment can support causal claims about intensity and detection",
        "Any survey of brightness ratings proves opponent-process theory alone",
        "Naturalistic observation of eyesight replaces the need for an IV",
        "Archival grades determine absolute thresholds without stimuli"],
       0,
       "Ch2 experiment logic applied to Ch5 psychophysics.",
       ["", "Surveys ≠ decisive proof of opponent-process.", "Observation lacks manipulated IV.", "Archival data without stimuli cannot set sensory thresholds."]),
      ("Cross Ch3×Ch5", 161,
       "Hair-cell transduction in the cochlea fails while the ossicles move normally. Link nervous-system signaling to hearing type:",
       ["Likely sensorineural problem: hair cells/auditory nerve path disrupted",
        "Purely conductive loss because the eardrum never moved",
        "Only endocrine pituitary failure explains cochlear silence",
        "Corpus callosum sectioning always restores high-frequency place codes"],
       0,
       "Hair-cell/nerve issues → sensorineural; ossicles OK argues against pure conductive.",
       ["", "Ossicles moving argues against a pure conductive story.", "Pituitary is endocrine, not the direct cochlear transducer.", "Callosum is interhemispheric, not a cochlear fix."]),
      ("Cross Ch6×Ch5", 148,
       "A branding team pairs a logo (NS→CS) with energizing music (UCS) so the logo later sparks arousal (CR), then tests whether brighter packaging increases detection of the logo on shelves. What two learning/sensation ideas are in play?",
       ["Classical conditioning of affect to the logo, plus sensory factors in detecting the package cue",
        "Only variable-ratio punishment of shoppers’ vestibular canals",
        "Latent dream content focusing the optic chiasm during shopping",
        "Random assignment is impossible whenever a CS exists"],
       0,
       "Ch6 classical pairing + Ch5 detection/attention in a retail scene.",
       ["", "Punishment/vestibular mix is off-topic.", "Dream/chiasm mashup is not the mechanism.", "CS presence does not forbid random assignment."]),
      ("Cross Ch2×Ch5", 170,
       "Two labs disagree whether a cultural perceptual-set effect replicates. One posts raw trial data; another reports only p < .05. Open science + perception angle?",
       ["Transparent data help evaluate perceptual-set claims; p-values alone are thin evidence",
        "Gestalt closure makes all replication attempts unnecessary forever",
        "Conductive hearing loss invalidates every visual culture study",
        "WEIRD sampling is solved by using only absolute thresholds"],
       0,
       "Ch2 research quality/replication mindset + Ch5 perceptual set/culture.",
       ["", "Gestalt does not cancel replication needs.", "Hearing loss is not a blanket confutation.", "Thresholds do not fix sampling bias."]),
      ("Cross Ch4×Ch5", 167,
       "A night-shift worker with circadian misalignment reports both microsleeps and motion sickness on a ferry. Best combined reading?",
       ["Circadian disruption impairs alertness; vestibular conflict can add nausea",
        "Only cones encode ferry motion while melatonin moves ossicles",
        "Narcolepsy is identical to conductive hearing loss by definition",
        "Meditation permanently deletes semicircular canal hair cells"],
       0,
       "Ch4 circadian/alertness + Ch5 vestibular.",
       ["", "Cones/melatonin/ossicles mashup is wrong.", "Sleep disorder ≠ middle-ear conductive loss.", "Meditation does not destroy vestibular hair cells."]),
      ("Cross Ch1×Ch2×Ch5", 146,
       "A podcast claims 'everyone has the same absolute thresholds, so culture never affects perception.' Using course chapters, the strongest reply is:",
       ["Thresholds are statistical; perception also reflects attention, set, and culture—and claims need evidence",
        "Wundt’s lab proved thresholds are identical across all humans forever",
        "Correlation coefficients are absolute thresholds by another name",
        "Behaviorism forbids measuring sensation in any experiment"],
       0,
       "Integrate methods skepticism (Ch2), diversity/culture notes (Ch1/Ch5), and threshold definitions.",
       ["", "History does not prove universal identical thresholds.", "r is not a sensory threshold.", "Behaviorism historically focused on behavior but does not erase sensory measurement."]),
      ("Cross Ch3×Ch5", 158,
       "Someone argues trichromatic theory 'disproves' neurons using action potentials because color is continuous. Best correction?",
       ["Cone photopigments and spiking neurons address different levels; both can be true",
        "Action potentials only occur in rods, never in cones or ganglia",
        "Opponent-process theory replaces the need for any nervous system",
        "Endocrine glands emit wavelengths that skip all neural coding"],
       0,
       "Biopsych signaling (Ch3) vs. color theories (Ch5) are compatible levels of analysis.",
       ["", "Spikes are not rod-exclusive.", "Opponent-process does not delete neural tissue.", "Glands do not replace retinal–cortical coding."]),
    ]
    for sec, page, stem, opts, correct, ok, wrongs in l4:
        out.append(q(5,4,sec,stem,opts,correct,ok,wf(*wrongs),page))
    return out


def make_ch6():
    out = []
    out += [
      q(6,1,"§6.1","Learning, as defined in the chapter, is a relatively permanent change that:",[
        "Results from experience",
        "Is purely innate like a reflex",
        "Occurs only in nonhuman animals",
        "Requires hypnosis to consolidate"],0,
        "Learning = experience-based change; reflexes/instincts are innate.",
        wf(None,"Innate reflexes are contrasted with learning.","Learning is not limited to nonhumans.","Hypnosis is not required for the definition."),182),
      q(6,1,"§6.2","In classical conditioning, a neutral stimulus becomes a CS after it is:",[
        "Reliably paired with an unconditioned stimulus",
        "Presented only after a punisher every trial",
        "Randomly assigned to a control group once",
        "Encoded solely by rods in the retina"],0,
        "NS paired with UCS → CS eliciting CR.",
        wf(None,"Punishers are operant consequences.","Random assignment is experimental design.","Rods are visual receptors."),184),
      q(6,1,"§6.3","Negative reinforcement always:",[
        "Removes an aversive stimulus and increases behavior",
        "Adds an aversive stimulus to decrease behavior",
        "Is identical to positive punishment by definition",
        "Requires observational models to work at all"],0,
        "Negative = remove; reinforcement = increase.",
        wf(None,"Adding aversive to decrease = positive punishment.","They are different contingencies.","Observational learning is a separate route."),193),
      q(6,1,"§6.3","A variable-ratio schedule reinforces after:",[
        "An unpredictable number of responses",
        "A fixed clock interval every time",
        "Exactly one response then extinction forever",
        "Only innate reflex arcs in the spinal cord"],0,
        "VR: unpredictable response counts—often high response rates.",
        wf(None,"Fixed interval is time-based and predictable.","Not the VR definition.","Reflexes are not VR schedules."),199),
      q(6,1,"§6.4","Bandura’s modeling steps include attention, retention, reproduction, and:",[
        "Motivation",
        "Absolute threshold",
        "Random assignment",
        "Opponent-process pairing"],0,
        "Attention → retention → reproduction → motivation.",
        wf(None,"Thresholds are sensation.","Random assignment is methods.","Opponent-process is color vision."),204),
      q(6,1,"§6.2","Spontaneous recovery refers to:",[
        "Return of an extinguished CR after a rest period",
        "Immediate acquisition on the very first NS presentation",
        "Switching from classical to operant in one trial",
        "Permanent loss of the UCS forever"],0,
        "After extinction, CR may reappear following rest.",
        wf(None,"Acquisition is initial learning.","Not a definition of recovery.","UCS is not permanently deleted by extinction."),188),
    ]
    out += [
      q(6,2,"§6.2","Stimulus generalization means the organism:",[
        "Shows the CR to stimuli similar to the CS",
        "Responds only to the exact CS wavelength forever",
        "Requires continuous reinforcement every second",
        "Must have an IRB before any association forms"],0,
        "Generalization: similar cues elicit CR; discrimination narrows responding.",
        wf(None,"That is closer to discrimination extremes.","Schedules are operant.","IRB is ethics, not learning mechanism."),189),
      q(6,2,"§6.3","Positive punishment differs from negative reinforcement because punishment:",[
        "Decreases behavior, while reinforcement increases it",
        "Always removes stimuli and therefore increases behavior",
        "Is identical to shaping successive approximations",
        "Can only be delivered by observational models"],0,
        "Reinforcement ↑; punishment ↓ — sign (pos/neg) is add/remove.",
        wf(None,"Negative reinforcement removes aversive and increases behavior.",
           "Shaping is a training method using reinforcers.",
           "Models relate to observational learning."),193),
      q(6,2,"§6.3","Partial (intermittent) reinforcement often yields:",[
        "Greater resistance to extinction than continuous reinforcement",
        "No learning whatsoever compared with continuous schedules",
        "Automatic conversion of punishers into primary reinforcers",
        "Elimination of all discriminative stimuli overnight"],0,
        "Partial reinforcement extinction effect is a key operant idea.",
        wf(None,"Learning still occurs under partial schedules.",
           "Punishers/reinforcers keep their definitions.",
           "Discriminative stimuli are not auto-deleted."),198),
      q(6,2,"§6.4","Vicarious reinforcement increases imitation when the observer:",[
        "Sees the model rewarded for the behavior",
        "Receives direct shock every time the model acts",
        "Ignores the model and sleeps through the demo",
        "Paired a CS with an UCS in a Skinner box only"],0,
        "Seeing the model rewarded raises the chance of imitation.",
        wf(None,"Direct shock to the observer is not vicarious reinforcement.",
           "Attention is required for observational learning.",
           "That describes classical/operant apparatus, not vicarious reward."),205),
      q(6,2,"§6.1","Associative learning in this chapter primarily includes:",[
        "Classical conditioning and operant conditioning",
        "Only Gestalt closure and figure–ground rules",
        "Only circadian melatonin secretion patterns",
        "Only PhD versus PsyD career distinctions"],0,
        "Classical + operant = associative; observational is separate but related.",
        wf(None,"Gestalt is perception (Ch 5).",
           "Circadian biology is Ch 4.",
           "Careers are Ch 1."),183),
    ]

    l3 = [
      ("§6.2",185,
       "A nurse wears a white coat (CS) while giving painful shots (UCS); later the coat alone raises a child’s heart rate (CR). Which map is correct?",
       ["Coat: CS; pain: UCS; fear/arousal: CR after pairing",
        "Coat: UCS; pain: CS; heart rate: neutral forever",
        "Coat: negative reinforcer removing all pain signals",
        "Coat: fixed-interval punisher on a VR schedule"],
       0,
       "Classic CS/UCS/CR roles after pairing.",
       ["", "Pain is the UCS, not the CS.", "Reinforcement terms mislabel classical roles.", "Schedules are operant, not this pairing."]),
      ("§6.2",188,
       "After extinction trials, a dog’s salivation to the bell disappears, then weakly returns next morning. Label?",
       ["Spontaneous recovery of the CR after rest",
        "Acquisition occurring for the first time ever",
        "Positive punishment of the UCS itself",
        "Binocular disparity creating salivary place codes"],
       0,
       "Extinction then rest → spontaneous recovery.",
       ["", "Acquisition is initial learning.", "Punishment is operant.", "Disparity is a depth cue."]),
      ("§6.2",187,
       "Little Albert-style fear of a white rat spreads to a white rabbit. Best term?",
       ["Stimulus generalization of the conditioned fear",
        "Stimulus discrimination narrowing to one cue",
        "Negative reinforcement removing the rabbit",
        "Latent learning without any prior pairing"],
       0,
       "Similar stimuli elicit the CR = generalization.",
       ["", "Discrimination would reduce responding to the rabbit.", "Removing rabbit isn’t the learning term here.", "Pairing already occurred."]),
      ("§6.3",193,
       "A teen cleans the kitchen to stop a parent’s nagging; cleaning becomes more frequent. Contingency?",
       ["Negative reinforcement: aversive nagging removed, behavior increases",
        "Positive punishment: nagging added to decrease cleaning",
        "Classical UCS replacing the nagging sound",
        "Figure–ground organization of chore lists"],
       0,
       "Remove aversive → behavior ↑ = negative reinforcement.",
       ["", "If nagging were added to decrease cleaning, that would be positive punishment—opposite pattern.", "Classical terms don’t fit the consequence logic.", "Gestalt is perception."]),
      ("§6.3",194,
       "A driver speeds; a ticket (fine) follows; speeding decreases. Contingency?",
       ["Positive punishment: an aversive stimulus is added",
        "Negative reinforcement: the fine removes speeding urges automatically",
        "Variable-interval reward for every mile driven",
        "Observational retention without any consequence"],
       0,
       "Add aversive → behavior ↓ = positive punishment.",
       ["", "Negative reinforcement increases behavior by removing aversive.", "VI is a reinforcement schedule, not a fine.", "There was a direct consequence."]),
      ("§6.3",195,
       "Gaming rewards appear after an unpredictable number of raids. Schedule?",
       ["Variable ratio, which often sustains high response rates",
        "Fixed interval with a scalloped pause every hour only",
        "Continuous reinforcement on every single keystroke forever",
        "Absolute threshold schedules of visual brightness"],
       0,
       "Unpredictable response counts = VR.",
       ["", "FI is time-based and predictable.", "Continuous = every response.", "Thresholds are sensation."]),
      ("§6.3",196,
       "A coach reinforces each closer approximation of a clean vault. Technique?",
       ["Shaping via successive approximations with reinforcers",
        "Classical extinction of the vault UCS overnight",
        "Random assignment of vaults to IRBs",
        "Opponent-process afterimages of the mat color"],
       0,
       "Shaping builds complex operants step by step.",
       ["", "Extinction weakens CRs, not this skill building.", "IRB/methods mix.", "Color afterimages are vision."]),
      ("§6.4",204,
       "Children watch an adult praised for sharing toys, then share more themselves. Mechanism emphasized?",
       ["Vicarious reinforcement increasing imitation of the model",
        "Direct positive punishment of each child during viewing",
        "Conductive hearing loss blocking all social cues",
        "Fixed-ratio shock for every observed share"],
       0,
       "Seeing the model rewarded → more imitation.",
       ["", "Vicarious ≠ direct punishment of observers.", "Hearing loss is not the story.", "Shock would punish, not explain praise effects."]),
      ("§6.4",205,
       "A student watches a tutor solve proofs but cannot reproduce them later; which modeling step most likely failed?",
       ["Retention or reproduction—memory/skill limits blocked performance",
        "Absolute threshold for chalk dust on the board",
        "UCS omission making the tutor a CS forever",
        "Pituitary hormones deleting attention automatically"],
       0,
       "Attention may have occurred, but retention/reproduction can still fail.",
       ["", "Sensory threshold is not the modeling bottleneck here.", "Classical labels misframe tutoring.", "Endocrine aside is not Bandura’s steps."]),
      ("§6.3",197,
       "Phone unlocks sometimes after checking; checking becomes persistent even when rewards are rare. Concept?",
       ["Partial reinforcement sustaining checking despite infrequent unlocks",
        "Continuous reinforcement on every glance without exception",
        "Classical discrimination of unlock odors alone",
        "WEIRD sampling creating unlock schedules"],
       0,
       "Intermittent rewards resist extinction—phone checking is a common illustration.",
       ["", "Not continuous if rewards are rare.", "Smell discrimination is not required.", "Sampling bias ≠ schedule."]),
      ("§6.2",190,
       "A tone predicts a shock; a light never does; the animal fears the tone not the light. Learning?",
       ["Discrimination between predictive CS and nonpredictive cue",
        "Generalization treating light and tone identically always",
        "Negative punishment of the light by removing shock",
        "Binocular cues binding tone to retina"],
       0,
       "Discrimination: respond to CS, not similar/nonpredictive cues.",
       ["", "Identical responding would be generalization.", "Punishment framing is wrong here.", "Vision disparity ≠ auditory CS discrimination."]),
      ("§6.1",182,
       "An infant’s sucking when a nipple touches the mouth is present without practice. Classification in §6.1?",
       ["A reflex—innate, not acquired through learning",
        "Operant shaping of sucking via VR candy rewards",
        "Observational learning from televised models only",
        "Gestalt closure of the feeding schedule"],
       0,
       "Reflexes/instincts are innate contrasts to learning.",
       ["", "No shaping required for the basic reflex.", "Not observational by definition here.", "Gestalt is perception."]),
      ("§6.3",200,
       "Taking antacid removes heartburn; antacid use increases. Contingency?",
       ["Negative reinforcement: aversive pain removed, taking antacid rises",
        "Positive punishment: antacid adds pain to decrease use",
        "CS–UCS pairing of chalk with vestibular spin",
        "Random selection creating the heartburn molecule"],
       0,
       "Escape/avoidance of aversive state via behavior = negative reinforcement.",
       ["", "Use increased, so not punishment.", "Classical/vestibular mashup.", "Sampling ≠ physiology."]),
      ("§6.4",203,
       "Bobo-doll style demos show children imitate aggressive acts they watched. Core claim?",
       ["Observational learning can transmit aggression without direct reinforcement of the child",
        "Only classical salivary conditioning explains doll hitting",
        "Aggression requires sensorineural hearing loss to appear",
        "Fixed-interval melatonin doses create doll models"],
       0,
       "Bandura: modeling can produce imitation of aggression.",
       ["", "Salivary classical conditioning is not the Bobo mechanism.", "Hearing loss unrelated.", "Melatonin/schedules mashup."]),
      ("§6.2",186,
       "A flavor paired with illness later produces avoidance of that flavor. Closest classical framing in the chapter’s applications?",
       ["Taste/flavor cue becomes a CS associated with illness outcomes",
        "Variable-ratio reinforcement of the illness itself",
        "Positive punishment defined as removing the flavor forever",
        "Top-down color constancy creating nausea"],
       0,
       "Conditioned taste-aversion style pairing is a classical application theme.",
       ["", "Illness is not a VR reinforcer here.", "Removing flavor isn’t the definition of positive punishment.", "Color constancy is vision."]),
    ]
    for sec, page, stem, opts, correct, ok, wrongs in l3:
        out.append(q(6,3,sec,stem,opts,correct,ok,wf(*wrongs),page))

    l4 = [
      ("Cross Ch2×Ch6", 193,
       "A teacher praises some students for raising hands (praise = reinforcer) but assigns praise non-randomly to already-outgoing kids, then claims praise caused participation. Methods + learning critique?",
       ["Without random assignment/controls, selection confounds weaken causal praise claims",
        "Any reinforcer automatically proves internal validity in all designs",
        "Classical CSs make random assignment ethically impossible always",
        "IRB approval alone creates a true experiment without an IV"],
       0,
       "Operant praise idea (Ch6) still needs experimental control (Ch2) for causal claims.",
       ["", "Reinforcers do not bypass design threats.", "CS presence ≠ ban on random assignment.", "IRB ≠ manipulating an IV."]),
      ("Cross Ch3×Ch6", 184,
       "A writer says dopamine 'is' reinforcement, so Skinner boxes need no behavior measures. Best correction?",
       ["Neurochemistry may correlate with reward, but operant analysis still tracks behavior–consequence relations",
        "Action potentials forbid all reinforcement schedules by definition",
        "The pituitary gland is the only possible secondary reinforcer",
        "Sympathetic arousal extinguishes every CR instantly"],
       0,
       "Levels of analysis: biopsych mechanisms vs. behavioral operant definitions.",
       ["", "Spikes do not outlaw schedules.", "Pituitary ≠ definition of secondary reinforcer.", "Autonomic arousal ≠ automatic extinction."]),
      ("Cross Ch4×Ch6", 199,
       "A casino uses VR-like payouts; a sleep-deprived patron plays longer. Combine schedules + consciousness:",
       ["Partial/VR-like rewards sustain play; fatigue can impair self-control and attention",
        "REM dreams rewrite ratio schedules into fixed intervals nightly",
        "Melatonin converts punishers into CSs inside the cochlea",
        "Narcolepsy is identical to negative reinforcement by definition"],
       0,
       "Ch6 schedule persistence + Ch4 impaired alertness/control.",
       ["", "Dreaming does not reparameterize casino math.", "Hormone/ear mashup.", "Sleep disorder ≠ reinforcement definition."]),
      ("Cross Ch5×Ch6", 148,
       "A fear CS is a faint tone near absolute threshold; some trials the tone is missed entirely. Interaction?",
       ["If the CS is not sensed, pairing/awareness for that trial is compromised",
        "Thresholds convert all operant punishers into Gestalt figures",
        "Opponent-process color vision extinguishes auditory CRs only",
        "Rods in the fovea encode variable-ratio food pellets"],
       0,
       "Sensation limits (Ch5) constrain what can enter a classical pairing (Ch6).",
       ["", "Thresholds do not redefine punishers as Gestalt.", "Color theory ≠ auditory extinction rule.", "Rods/fovea/food mashup."]),
      ("Cross Ch1×Ch6", 183,
       "A debate contrasts Watson’s behaviorism with Bandura’s observational learning about aggression. Fair textbook-informed contrast?",
       ["Watson emphasized conditioning observable behavior; Bandura adds modeling/cognitive steps for imitation",
        "Both deny that any experience can change behavior at all",
        "Bandura requires structuralist introspection of each Bobo hit",
        "Watson’s view is identical to Gestalt closure of schedules"],
       0,
       "Ch1 behaviorism vs. Ch6 social/observational learning expansion.",
       ["", "Both traditions study experience-based change.", "Bandura is not structuralist introspection.", "Gestalt ≠ Watson."]),
      ("Cross Ch2×Ch6", 205,
       "A study claims watching violent media causes aggression after a tiny cross-sectional correlation. Strongest methods + learning reply?",
       ["Correlation cannot prove media caused aggression; experiments/longitudinal controls are stronger",
        "Vicarious reinforcement makes all correlations equal experiments",
        "Modeling steps replace the need for any comparison group",
        "Surveys of Bobo dolls guarantee random assignment"],
       0,
       "Ch2 causal standards applied to Ch6 media/modeling claims.",
       ["", "Vicarious reinforcement ≠ design magic.", "Modeling theory still needs good inference.", "Surveys ≠ random assignment."]),
      ("Cross Ch3×Ch6", 192,
       "A clinician uses shaping for rehab after motor-cortex stroke. Why mention both biopsych and operant ideas?",
       ["Brain injury constrains what movements are possible; shaping still builds achievable approximations",
        "Operant schedules heal myelin without any neural constraints",
        "Action potentials are punishers in every Skinnerian chart",
        "Endocrine only: pituitary secretes fixed-ratio pellets"],
       0,
       "Biological limits (Ch3) + behavioral shaping (Ch6) together.",
       ["", "Schedules do not ignore neural damage.", "Spikes ≠ punishers by definition.", "Pituitary does not emit ratio pellets."]),
      ("Cross Ch5×Ch6", 169,
       "An ad flashes incomplete brand shapes (closure) while pairing them with upbeat music (classical). Dual mechanism?",
       ["Gestalt completion aids noticing the brand; classical pairing may shift affect to the brand cues",
        "Only sensorineural loss can create brand preference",
        "Figure–ground organization is identical to variable-ratio shock",
        "Absolute thresholds forbid all associative learning"],
       0,
       "Perception organization (Ch5) + classical affect transfer (Ch6).",
       ["", "Hearing loss not required.", "Gestalt ≠ VR shock.", "Thresholds do not ban conditioning."]),
      ("Cross Ch4×Ch6", 204,
       "During hypnosis-like focused attention, a demo of calm breathing is modeled; observers later imitate when motivated. Layers?",
       ["Altered/focused attention may aid attending to a model; motivation still needed for performance",
        "Hypnosis replaces retention with conductive hearing loss",
        "Meditation deletes Bandura’s reproduction step permanently",
        "Sleep spindles are positive punishers for all models"],
       0,
       "Ch4 altered attention + Ch6 observational steps.",
       ["", "Hypnosis ≠ middle-ear pathology.", "Meditation does not erase reproduction as a construct.", "Spindles ≠ punishers."]),
      ("Cross Ch1×Ch2×Ch6", 181,
       "A influencer says 'Skinner proved free will is fake; therefore ethics review is pointless for conditioning studies.' Best multi-chapter reply?",
       ["Theoretical debates ≠ skipping IRB/consent; humans in research still need ethical protections",
        "Behaviorism automatically voids Belmont-style respect for persons",
        "If reinforcement exists, informed consent becomes a CS only",
        "Operant charts replace all need for debriefing after deception"],
       0,
       "Ch1/Ch6 theory vs. Ch2 ethics—distinct obligations.",
       ["", "Ethics remain even in behavioral frameworks.", "Consent is not merely a CS label.", "Debriefing duties remain when deception is used."]),
      ("Cross Ch5×Ch6", 162,
       "A clicker (sound CS) is paired with treats for dog training, then used to mark precise postures (operant). Accurate blend?",
       ["Classical pairing makes the click meaningful; operant timing uses it as a conditioned reinforcer/marker",
        "Clicks are monocular depth cues that punish vestibular canals",
        "Treats extinguish place codes on the basilar membrane",
        "Shaping requires opponent-process afterimages of the click"],
       0,
       "Clicker training often blends classical meaning with operant marking.",
       ["", "Clicks are not depth cues.", "Treats do not extinguish cochlear maps as the point.", "Color afterimages irrelevant."]),
    ]
    for sec, page, stem, opts, correct, ok, wrongs in l4:
        out.append(q(6,4,sec,stem,opts,correct,ok,wf(*wrongs),page))
    return out


def sole_longest_stats(qs, level):
    total = sole = 0
    spreads = []
    for q in qs:
        if q["level"] != level:
            continue
        total += 1
        opts = q["options"]
        L = [len(o) for o in opts]
        spreads.append(max(L) - min(L))
        if sole_long(opts, q["correct"]):
            sole += 1
    return total, sole, (max(spreads) if spreads else 0), (sum(spreads)/len(spreads) if spreads else 0)


def main():
    qs = load_questions()
    # drop any existing ch5/ch6 if re-run
    qs = [q for q in qs if q.get("chapter") not in (5, 6)]
    qs.extend(make_ch5())
    qs.extend(make_ch6())
    qs = assign_ids(qs)

    # rebalance any L3/L4 that still sole-long
    for q in qs:
        if q["level"] >= 3 and sole_long(q["options"], q["correct"]):
            q["options"] = balance(q["options"], q["correct"], band=(54, 58))

    text = (
        "/**\n"
        " * OpenStax Psychology 2e revision MCQs (Ch 1–6).\n"
        " * Schema: { id, chapter, level, section, question, options[4], correct, correctFeedback, wrongFeedback, page? }\n"
        " * L4 = cross-topic from Ch 2 onward. Access for free at openstax.org.\n"
        " */\n"
        "window.PSYCH_QUESTIONS = "
        + json.dumps(qs, ensure_ascii=False, indent=2)
        + ";\n"
    )
    QPATH.write_text(text, encoding="utf-8")

    c = Counter((q["chapter"], q["level"]) for q in qs)
    print("COUNTS chapter x level:")
    for ch in sorted({q["chapter"] for q in qs}):
        print(" ", ch, {lv: c[(ch, lv)] for lv in range(1, 5)})
    print("total", len(qs))
    for lv in (3, 4):
        total, sole, mx, avg = sole_longest_stats(qs, lv)
        pct = (100.0 * sole / total) if total else 0
        print(f"L{lv}: n={total} sole_longest={sole} ({pct:.1f}%) max_spread={mx} avg_spread={avg:.1f}")

if __name__ == "__main__":
    main()
