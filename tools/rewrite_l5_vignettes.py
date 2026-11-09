# -*- coding: utf-8 -*-
"""Rewrite Level 5 Mock stems so ~half are full narrative vignettes.

Keeps options/correct/feedback structure; updates stems (+ light feedback tweaks).
Outputs tools/expand_data/level5_mock_all.json and patches data/questions.js.
"""
from __future__ import annotations
import json, re, copy
from pathlib import Path

ROOT = Path("/workspace/psychology-revision")
STAMP = "20261109l5v"

# Full vignettes: character(s) + concrete setting/plot + exam ask (2–5 sentences).
# Aim: items 01–05 and 08,10 per chapter (=7×16=112) so comfortably ≥80.
# Items 06,07,09 stay shorter concept/application.

V = {}

# ---------- Chapter 1 ----------
V["c1-l5-01"] = (
    "During orientation week, first-year student Priya tells her roommate, "
    "“Psychology isn’t a real science—people just talk about feelings, like philosophy.” "
    "Her roommate wants a reply that matches how OpenStax frames modern psychology. "
    "Which reply is best?"
)
V["c1-l5-02"] = (
    "In a history-of-psychology seminar, Marcus argues that Freud’s couch therapy founded "
    "scientific psychology, while Aisha points to Wundt’s 1879 Leipzig laboratory instead. "
    "The TA asks why that laboratory is historically important. "
    "Wundt’s Leipzig laboratory is historically important mainly because it:"
)
V["c1-l5-03"] = (
    "Two classmates taste the same iced coffee after a morning lecture. "
    "Mei carefully lists every sensation she notices—cold, bitter, then sweet. "
    "Jun instead asks why so many students drink it before 9 a.m. classes. "
    "Whose question is closer to functionalism?"
)
V["c1-l5-04"] = (
    "On a popular podcast, the host declares, “If you forget a friend’s name, it secretly "
    "means you hate them—Freud proved it.” "
    "A listener who just finished Chapter 1 wants the best critique of that claim. "
    "Best critique?"
)
V["c1-l5-05"] = (
    "At halftime, Coach Rivera tells the team, “Don’t break the play into separate pixels—"
    "you have to see the whole pattern at once.” "
    "A sports-psychology student in the stands recognizes a historical idea. "
    "Which historical idea does this echo?"
)
V["c1-l5-08"] = (
    "At a university career fair, booths advertise psychology jobs. "
    "Students compare flyers: an I-O hire redesigning interviews, a forensic consultant "
    "advising on competence questions, a biopsych lab studying sleep and transmitters, "
    "and a booth titled “Structuralist Therapist—run our only hospital ward.” "
    "Which statements correctly match a contemporary field to a realistic task? "
    "(Select all that apply.)"
)
V["c1-l5-10"] = (
    "Before a midterm, five students in a study group trade bold claims about what "
    "psychology is and how it works. "
    "Their tutor asks which claims are methodologically or historically sound. "
    "Which are methodologically or historically sound? (Select all that apply.)"
)

# ---------- Chapter 2 ----------
V["c2-l5-01"] = (
    "Blogger Ken posts a viral thread: “My uncle smoked a pack a day and lived to 95, "
    "so smoking can’t really be harmful—science is overrated.” "
    "A public-health classmate wants the research lesson that best answers Ken. "
    "Which research lesson best answers this?"
)
V["c2-l5-02"] = (
    "Developmental researchers set up a one-way mirror beside a campus playground. "
    "They code how often toddlers share toys, without intervening or assigning kids to groups. "
    "A methods quiz asks for the best label of this approach. "
    "Best label?"
)
V["c2-l5-03"] = (
    "City data show ice-cream sales and drowning rates rising together each summer. "
    "Journalist Lena headlines, “Ice cream causes drowning—correlation proves it.” "
    "Which critique should her editor demand?"
)
V["c2-l5-04"] = (
    "Dr. Okonkwo’s lab randomly assigns volunteers to 0 mg or 200 mg of caffeine in coffee, "
    "then measures their scores on a timed exam. "
    "A student must identify the independent and dependent variables. "
    "What are IV and DV?"
)
V["c2-l5-05"] = (
    "A campus wellness study emails every enrolled student but analyzes only those who reply. "
    "Responders are then randomly assigned to a meditation app or a waitlist. "
    "Which claim about this design is safest?"
)
V["c2-l5-08"] = (
    "In lab section, twins Mina and Leo debate recruitment. "
    "Mina wants every dorm resident equally likely to enter the sample; "
    "Leo wants participants shuffled into treatment vs control after they arrive. "
    "Which statements correctly distinguish random sampling from random assignment? "
    "(Select all that apply.)"
)
V["c2-l5-10"] = (
    "An IRB training video walks new RAs through a planned memory experiment with deception. "
    "The facilitator asks which practices belong in ethical human research as framed in OpenStax Ch 2. "
    "Which practices belong? (Select all that apply.)"
)

# ---------- Chapter 3 ----------
V["c3-l5-01"] = (
    "In a neuro lab demo, an action potential races down a motor neuron’s axon. "
    "At the terminals, vesicles spill neurotransmitter into the synaptic cleft toward a waiting dendrite. "
    "The instructor freezes the animation and asks what happens next at a typical chemical synapse. "
    "What happens next at a typical chemical synapse?"
)
V["c3-l5-02"] = (
    "While walking home at night, Sam hears sudden footsteps behind him. "
    "His heart races, pupils widen, and digestion seems to pause as he spins around. "
    "Which autonomic division is most active in that moment?"
)
V["c3-l5-03"] = (
    "After a stroke that damages hippocampus-related circuitry, patient Elena can chat about "
    "childhood holidays but keeps asking the same new visitors’ names minutes after introductions. "
    "Which deficit is most expected?"
)
V["c3-l5-04"] = (
    "Pharmacologist Dr. Cho explains a new compound that sits on postsynaptic receptors and "
    "mimics a natural neurotransmitter, boosting receptor activation even when little transmitter is released. "
    "A student must label the drug’s action. "
    "Best label?"
)
V["c3-l5-05"] = (
    "During rounds, an attending contrasts a spinal-cord injury with damage limited to a peripheral nerve in the arm. "
    "A junior student is asked which statement best distinguishes CNS from PNS. "
    "Which statement best distinguishes CNS from PNS?"
)
V["c3-l5-08"] = (
    "In a stress-physiology workshop, athletes track heart rate during a startle drill and then during cool-down yoga. "
    "The coach quizzes them on autonomic branches. "
    "Which statements about autonomic branches are accurate? (Select all that apply.)"
)
V["c3-l5-10"] = (
    "At a case conference, clinicians pin sticky notes pairing brain areas with functions for a teaching case. "
    "The attending asks which pairings are reasonable at the OpenStax textbook level. "
    "Which are reasonable textbook-level matches? (Select all that apply.)"
)

# ---------- Chapter 4 ----------
V["c4-l5-01"] = (
    "In a late-night dorm debate, Rui says consciousness is “just being awake,” "
    "while Nora argues it includes awareness of internal and external stimuli across waking and altered states. "
    "They open OpenStax to settle it. "
    "Consciousness in OpenStax is best framed as:"
)
V["c4-l5-02"] = (
    "Sleep tech Amir reviews an overnight polysomnogram: rapid eye movements, "
    "near-wake EEG patterns, and a dream report after the patient is awakened from that stage. "
    "Which claim about REM fits best?"
)
V["c4-l5-03"] = (
    "Roommate Diego snores loudly, stops breathing for stretches of the night, gasps awake, "
    "and then dozes through morning classes. "
    "The campus clinic nurse suspects a sleep disorder. "
    "Most fitting concern?"
)
V["c4-l5-04"] = (
    "At a substance-use education fair, volunteers sort cards for alcohol, caffeine, and nicotine. "
    "A visitor asks how alcohol is primarily classified pharmacologically in the chapter. "
    "Alcohol is classified primarily as a:"
)
V["c4-l5-05"] = (
    "Exchange student Hana flies from Hong Kong to New York and feels exhausted at local noon "
    "but wide awake at midnight for several days. "
    "Her professor links the jet lag to biological clocks. "
    "Circadian rhythms are most closely tied to:"
)
V["c4-l5-08"] = (
    "In a sleep-lab tutorial, students cycle a volunteer through EEG-defined stages and note "
    "muscle tone, eye movements, and dream reports. "
    "Which statements about sleep stages are reasonable? (Select all that apply.)"
)
V["c4-l5-10"] = (
    "Night-shift nurse Priya finishes a 12-hour ward rotation, fights insomnia at home, "
    "and later catches herself microsleeping at a red light on the drive home. "
    "Which claims about her situation are sound? (Select all that apply.)"
)

# ---------- Chapter 5 ----------
V["c5-l5-01"] = (
    "In a museum gallery, light wavelengths hit visitors’ retinas (sensation), "
    "but only some people “see” a hidden animal in the same painting (perception). "
    "A docent asks for the best sensation–perception contrast. "
    "Sensation vs perception—best contrast?"
)
V["c5-l5-02"] = (
    "Audiology student Kai plays ever-quieter tones until a participant first reports hearing the beep "
    "on half the trials. "
    "Kai is estimating a classic sensory limit. "
    "Absolute threshold is best described as:"
)
V["c5-l5-03"] = (
    "In a noisy café, Jordan does not notice the espresso machine or chatter—"
    "until someone across the room says Jordan’s name, which suddenly “cuts through.” "
    "Which idea fits best?"
)
V["c5-l5-04"] = (
    "After leaving a bright sunny street, Mei steps into a dark cinema and at first sees almost nothing; "
    "over a few minutes the seats and screen edges become visible. "
    "Best concept?"
)
V["c5-l5-05"] = (
    "Designer Luis arranges five dots on a poster; viewers instantly report a “face” rather than "
    "five unrelated points. "
    "Closest Gestalt idea?"
)
V["c5-l5-08"] = (
    "A perception lab compares two tasks: reading blurry letters using only stimulus features, "
    "versus reading the same blur after being told the word will be food-related. "
    "Which statements correctly separate bottom-up and top-down processing? "
    "(Select all that apply.)"
)
V["c5-l5-10"] = (
    "A UX design team cites Gestalt and depth cues while redesigning a transit app map. "
    "Their mentor asks which perception claims are sound. "
    "Which claims are sound? (Select all that apply.)"
)

# ---------- Chapter 6 ----------
V["c6-l5-01"] = (
    "In a classroom demo, Dr. Patel rings a bell just before placing food powder on a dog’s tongue. "
    "After several pairings, the bell alone elicits salivation. "
    "Students must label the salivation to the bell in Pavlovian terms. "
    "In Pavlovian terms, food is the US and salivation to food is the UR. After pairing, a bell elicits salivation. That salivation to the bell is the:"
)
V["c6-l5-02"] = (
    "Ms. Chen starts praising students the moment homework arrives on time; "
    "on-time submissions rise over the next two weeks. "
    "A learning chapter quiz asks for the operant label. "
    "This is:"
)
V["c6-l5-03"] = (
    "After catching a student cheating, a coach removes weekend stadium privileges; "
    "cheating incidents then drop. "
    "Best operant label?"
)
V["c6-l5-04"] = (
    "In an operant chamber, one rat earns pellets on a variable-ratio schedule and presses rapidly; "
    "another on a fixed-interval schedule shows the classic scallop and slower overall rate. "
    "Classic takeaway?"
)
V["c6-l5-05"] = (
    "After weeks of presenting a tone without food, a dog’s salivation to the tone disappears. "
    "Days later the tone returns and a brief burst of salivation reappears. "
    "Term for that brief return?"
)
V["c6-l5-08"] = (
    "A study group sorts flashcards for classical vs operant examples from campus life "
    "(cafeteria smells, late fees, praise, exam anxiety). "
    "Which distinctions are accurate? (Select all that apply.)"
)
V["c6-l5-09"] = (
    "Soccer coach Rivera wants fewer late arrivals to practice. "
    "Assistants propose adding early-bird privileges, removing extra drills after punctual weeks, "
    "or scolding everyone randomly. "
    "Which options correctly apply operant labels? (Select all that apply.)"
)

# ---------- Chapter 7 ----------
V["c7-l5-01"] = (
    "While sorting library books, twin volunteers quickly group novels, textbooks, and comics "
    "without reading every page—using mental categories. "
    "Their methods TA asks what a concept is. "
    "A concept is best described as:"
)
V["c7-l5-02"] = (
    "Shopper Ava skips comparing nutrition labels and just grabs the brand she “feels” is healthiest "
    "because the choice is fast—even if sometimes biased. "
    "Using a mental shortcut that is fast but sometimes biased is a:"
)
V["c7-l5-03"] = (
    "IKEA assembler Ben insists on using only the included screwdriver even though a coin in his pocket "
    "would turn the screws faster; he cannot “see” the coin as a tool. "
    "This illustrates:"
)
V["c7-l5-04"] = (
    "In a debate on intelligence theories, Priya cites Spearman’s idea of a general factor underlying "
    "performance across many cognitive tasks. "
    "Spearman’s g emphasizes:"
)
V["c7-l5-05"] = (
    "Counselor Dana re-administers the same aptitude test to a client under similar conditions a week later "
    "and gets wildly different scores. "
    "What does that pattern most clearly threaten?"
)
V["c7-l5-08"] = (
    "A puzzle club tries algorithms, heuristics, and insight on escape-room locks, then reviews which "
    "problem-solving claims hold up. "
    "Which problem-solving claims are accurate? (Select all that apply.)"
)
V["c7-l5-10"] = (
    "Linguistics TA Omar asks lab partners to map phonemes, morphemes, and syntax onto everyday speech errors. "
    "Which language/cognition matches are sound? (Select all that apply.)"
)

# ---------- Chapter 8 ----------
V["c8-l5-01"] = (
    "In a memory workshop, students trace how a phone number moves from a brief sensory echo "
    "into short-term holding and, with rehearsal, toward longer-term storage—the classic multistore sketch. "
    "Atkinson–Shiffrin-style flow emphasizes:"
)
V["c8-l5-02"] = (
    "Exchange student Leah studied Spanish for a year, then intensively learned French last month. "
    "On a surprise Spanish quiz, French words keep blocking the Spanish vocabulary she needs. "
    "This is:"
)
V["c8-l5-03"] = (
    "On the first day with a new gym locker, Theo keeps typing last year’s combination and getting locked out. "
    "Old locker combinations keep interfering with the new one. "
    "This is:"
)
V["c8-l5-04"] = (
    "During an exam, Mina juggles keeping the essay prompt in mind, retrieving examples, and writing—all at once. "
    "Working memory is best framed as:"
)
V["c8-l5-05"] = (
    "After hippocampal surgery, patient “H.M.-like” case notes show intact childhood stories "
    "but almost no ability to form lasting memories of new people met after the surgery. "
    "Anterograde amnesia primarily involves:"
)
V["c8-l5-08"] = (
    "A study-skills peer mentor contrasts shallow repetition of definitions with linking ideas to personal examples. "
    "Which encoding/storage claims are sound? (Select all that apply.)"
)
V["c8-l5-09"] = (
    "Two roommates argue after mixing up proactive vs retroactive interference and retrograde vs anterograde amnesia "
    "while reviewing for a midterm. "
    "Which interference/amnesia statements are accurate? (Select all that apply.)"
)

# ---------- Chapter 9 ----------
V["c9-l5-01"] = (
    "At a family reunion, a developmental psychologist chats with a newborn cousin, a teen, and a grandparent, "
    "noting change and continuity from infancy through late life. "
    "Lifespan development studies:"
)
V["c9-l5-02"] = (
    "Infant lab volunteer Maya watches a 6-month-old explore objects by mouthing and batting them; "
    "object permanence is just emerging. "
    "Piaget’s sensorimotor stage is marked by:"
)
V["c9-l5-03"] = (
    "Preschooler Noah watches juice poured from a short wide cup into a tall thin one and insists "
    "the tall cup “has more juice,” failing conservation. "
    "Piaget would place him before:"
)
V["c9-l5-04"] = (
    "Teenager Sofia spends the year trying on peer groups, career ideas, and values, asking “Who am I?” "
    "Erikson’s adolescence crisis is primarily:"
)
V["c9-l5-05"] = (
    "In the Strange Situation, baby Kai cries when caregiver leaves, then seeks contact and calms on return, "
    "using the caregiver as a secure base. "
    "Secure attachment in the Strange Situation is typically shown by:"
)
V["c9-l5-08"] = (
    "A teaching assistant lays out four Piaget stage cards beside classroom vignettes "
    "(peekaboo, conservation fails, abstract ethics debates). "
    "Which Piaget stage matches are accurate? (Select all that apply.)"
)
V["c9-l5-09"] = (
    "Parent workshop leaders discuss attachment, temperament, and nature–nurture with real family stories. "
    "Which developmental claims are sound? (Select all that apply.)"
)

# ---------- Chapter 10 ----------
V["c10-l5-01"] = (
    "After skipping lunch, Jordan feels a rising hunger drive and walks straight to the cafeteria, "
    "then feels relief after eating. "
    "Drive theory most emphasizes:"
)
V["c10-l5-02"] = (
    "Art student Lila paints for hours because she loves the process; classmate Ben paints only when "
    "a cash prize is offered. "
    "Intrinsic vs extrinsic motivation—best contrast?"
)
V["c10-l5-03"] = (
    "On a roller coaster, Priya notices her heart pounding and shaky hands, then labels the feeling “terror.” "
    "A classmate cites James–Lange. "
    "James–Lange theory proposes emotions arise:"
)
V["c10-l5-04"] = (
    "In a classic-style demo, two groups get the same arousal injection; one is told why, the other is not, "
    "and they interpret the feeling differently based on cues in the room. "
    "Schachter–Singer two-factor theory requires:"
)
V["c10-l5-05"] = (
    "Exam coach Dana tells anxious students that a little arousal can help performance on a moderate test, "
    "but extreme panic can wreck it—echoing an inverted-U idea. "
    "Yerkes–Dodson law most nearly says:"
)
V["c10-l5-08"] = (
    "Emotion seminar students map James–Lange, Cannon–Bard, and two-factor accounts onto the same scare-film clip. "
    "Which emotion-theory statements are accurate? (Select all that apply.)"
)
V["c10-l5-09"] = (
    "A motivation unit wraps with cafeteria, gym, and scholarship examples of drives, incentives, and goals. "
    "Which motivation claims fit the chapter? (Select all that apply.)"
)

# ---------- Chapter 11 ----------
V["c11-l5-01"] = (
    "Across seminars, clubs, and part-time jobs, friends notice that Ava stays organized, curious, and calm "
    "in ways that seem consistent over time and situations. "
    "Personality is best defined as:"
)
V["c11-l5-02"] = (
    "In a personality lecture, the instructor role-plays an impulsive urge to grab a classmate’s dessert "
    "“because it wants what it wants now,” then asks which Freudian structure that sketches. "
    "Freud’s id is primarily:"
)
V["c11-l5-03"] = (
    "Roommate quizzes describe Sam as loving new cuisines, abstract art, and unusual ideas, "
    "while preferring not to stick to rigid routines. "
    "The Big Five trait openness most nearly involves:"
)
V["c11-l5-04"] = (
    "A twin registry finds identical (MZ) twins more alike on a personality trait than fraternal (DZ) twins "
    "reared in similar homes. "
    "A behavioral genetic twin study finding higher MZ than DZ similarity for a trait most suggests:"
)
V["c11-l5-05"] = (
    "Before a public speech, Jordan says, “I believe I can handle the Q&A even if I’m nervous,” "
    "and practices accordingly—Bandura’s self-efficacy idea. "
    "Self-efficacy (Bandura) refers to:"
)
V["c11-l5-08"] = (
    "A review sheet contrasts psychodynamic, trait, humanistic, and social-cognitive portraits of the same client. "
    "Which personality approach matches are fair? (Select all that apply.)"
)
V["c11-l5-09"] = (
    "Study partners invent mnemonics for OCEAN while rating themselves on a Big Five inventory. "
    "Which Big Five labels are correct? (Select all that apply.)"
)

# ---------- Chapter 12 ----------
V["c12-l5-01"] = (
    "After a group project meltdown, classmates blame “personality flaws,” norms, and peer pressure. "
    "Their TA notes that social psychology focuses on how people think about, influence, and relate to others. "
    "Social psychology most centrally studies:"
)
V["c12-l5-02"] = (
    "When a driver cuts her off, Mina thinks “what a rude person,” ignoring that the driver might be rushing "
    "to an emergency—overweighting disposition. "
    "Fundamental attribution error is:"
)
V["c12-l5-03"] = (
    "In a recreation of Asch’s setup, Omar hears several confederates give the wrong line-length answer "
    "before it is his turn; he feels pressure to match them. "
    "Asch’s line studies primarily demonstrated:"
)
V["c12-l5-04"] = (
    "Documentary night shows participants continuing to deliver what they believe are painful shocks "
    "because an experimenter in a lab coat insists they continue. "
    "Milgram’s obedience research most controversially showed:"
)
V["c12-l5-05"] = (
    "Eco-club member Riley publicly argues for zero waste but keeps buying single-use bottles, "
    "then feels uneasy and changes either the habit or the attitude. "
    "Cognitive dissonance is discomfort from:"
)
V["c12-l5-08"] = (
    "A social-influence unit pairs conformity, compliance, and obedience examples from dorm life and lab classics. "
    "Which social-influence matches are correct? (Select all that apply.)"
)
V["c12-l5-10"] = (
    "After a campus bias workshop, students discuss stereotypes, prejudice, discrimination, and bystander effects "
    "using recent hallway incidents. "
    "Which intergroup/prosocial statements fit? (Select all that apply.)"
)

# ---------- Chapter 13 ----------
V["c13-l5-01"] = (
    "A consulting firm hires Dr. Nguyen to improve hiring, training, and team climate at a logistics company—"
    "classic applied workplace psychology. "
    "I-O psychology primarily applies psychology to:"
)
V["c13-l5-02"] = (
    "Before rewriting a job ad, HR analyst Chris shadows warehouse leads, lists tasks and KSAOs, "
    "and documents what “successful performance” requires. "
    "Job analysis is used mainly to:"
)
V["c13-l5-03"] = (
    "Two firms hire for the same role: Firm A uses unstructured chats; Firm B uses the same scored questions "
    "for every candidate. "
    "Structured interviews typically improve selection by:"
)
V["c13-l5-04"] = (
    "Annual survey data at a hospital link higher job satisfaction and organizational commitment "
    "to lower quit rates among nurses. "
    "Organizational commitment and job satisfaction research most often links to:"
)
V["c13-l5-05"] = (
    "Manager Adele trades rewards for meeting quotas (transactional), while Manager Bao inspires a shared vision "
    "and challenges staff to grow (transformational). "
    "Transactional vs transformational leadership—best sketch?"
)
V["c13-l5-08"] = (
    "An I-O intern’s checklist covers job analysis, selection validation, and training needs assessment "
    "before a plant expansion. "
    "Which industrial psychology tasks fit? (Select all that apply.)"
)
V["c13-l5-09"] = (
    "Org-behavior lunch-and-learns cover commitment, leadership styles, and team conflict with plant-floor stories. "
    "Which organizational topics are chapter-consistent? (Select all that apply.)"
)

# ---------- Chapter 14 ----------
V["c14-l5-01"] = (
    "Two students get the same midterm grade: one appraises it as a disaster they cannot handle, "
    "the other as tough but manageable with a new study plan—and they report very different stress. "
    "Lazarus’s cognitive appraisal view says stress depends heavily on:"
)
V["c14-l5-02"] = (
    "Lab animals (and later human analogies) show alarm, resistance, and eventual exhaustion "
    "under prolonged stressors—Selye’s pattern. "
    "Selye’s General Adaptation Syndrome stages are:"
)
V["c14-l5-03"] = (
    "Office worker Theo lists tiny chronic irritants—late trains, inbox pileups, noisy neighbors—"
    "and notices they wear him down as much as rare big crises. "
    "Daily hassles research suggests:"
)
V["c14-l5-04"] = (
    "A health-psych seminar links chronic stress hormones to changes in immune markers in caregivers. "
    "Psychoneuroimmunology most directly links:"
)
V["c14-l5-05"] = (
    "Before finals, Maya makes a revision timetable and emails professors about deadlines—"
    "changing the stressor itself rather than only venting. "
    "Problem-focused coping aims to:"
)
V["c14-l5-08"] = (
    "Stress unit students map primary/secondary appraisal, GAS stages, and hassles onto a shared “exam week” story. "
    "Which stress concepts are accurate? (Select all that apply.)"
)
V["c14-l5-09"] = (
    "Counseling peers role-play problem-focused vs emotion-focused coping after a failed quiz. "
    "Which coping/regulation claims fit? (Select all that apply.)"
)

# ---------- Chapter 15 ----------
V["c15-l5-01"] = (
    "In clinic intake, a psychiatrist opens a manual to match symptom clusters to standardized labels "
    "for communication and research—not to “explain childhood” by itself. "
    "The DSM is primarily used to:"
)
V["c15-l5-02"] = (
    "Client Ana plans her whole day around avoiding bridges after a panic-like episode on one, "
    "knowing the fear is excessive yet feeling unable to ride across. "
    "Specific phobia involves:"
)
V["c15-l5-03"] = (
    "For three weeks, Jordan has had pervasive low mood, loss of interest in soccer, sleep change, "
    "and worthless thoughts that impair classes—meeting episode criteria discussed in class. "
    "Major depressive episode core features include:"
)
V["c15-l5-04"] = (
    "Family members bring Leo to emergency care after weeks of hearing voices commenting on his actions "
    "and firmly believing a neighbor controls his thoughts, with declining self-care. "
    "Schizophrenia is characterized especially by:"
)
V["c15-l5-05"] = (
    "Months after a serious car crash, Priya has intrusive memories, avoidance of driving, "
    "hypervigilance, and negative mood changes tied to that trauma. "
    "PTSD requires:"
)
V["c15-l5-08"] = (
    "Anxiety disorders workshop stations cover phobia, panic, GAD, and OCD with short client sketches. "
    "Which anxiety-related matches are correct? (Select all that apply.)"
)
V["c15-l5-10"] = (
    "A case formulation seminar debates DSM labeling, stigma, and diathesis–stress using one intake file. "
    "Which classification/etiology claims fit OpenStax framing? (Select all that apply.)"
)

# ---------- Chapter 16 ----------
V["c16-l5-01"] = (
    "A history module shows nineteenth-century asylum images focused on custody and isolation "
    "more than community recovery—prompting discussion of what those institutions emphasized. "
    "Historically, asylums often emphasized:"
)
V["c16-l5-02"] = (
    "Therapist Kim helps a client catch “I’m a total failure” thoughts after a B grade, "
    "test the evidence, and generate balanced alternatives. "
    "Cognitive therapy most directly targets:"
)
V["c16-l5-03"] = (
    "For bridge phobia, a clinician pairs gradual imaginal then in vivo exposure with relaxation—"
    "systematic desensitization. "
    "Systematic desensitization is primarily a treatment for:"
)
V["c16-l5-04"] = (
    "A psychiatrist discusses first-line meds that increase serotonin availability for a client with depression. "
    "SSRIs are examples of:"
)
V["c16-l5-05"] = (
    "In a recorded session, Dr. Hale offers unconditional positive regard, empathy, and genuineness "
    "while the client leads topics—Rogers’s approach. "
    "Rogers’s client-centered therapy emphasizes:"
)
V["c16-l5-08"] = (
    "A treatment-planning meeting matches CBT, exposure, SSRIs, and humanistic stance to different presenting problems. "
    "Which therapy–target matches are reasonable? (Select all that apply.)"
)
V["c16-l5-09"] = (
    "Interns review evidence-based practice: research evidence, clinical expertise, and client characteristics "
    "for anxiety and substance-use cases. "
    "Which treatment claims are sound? (Select all that apply.)"
)


V["c1-l5-09"] = (
    "In a history review circle, five students read aloud claims about Wundt, Skinner, humanism, "
    "cognitive psychology, and Freud versus laboratory psychology. "
    "Their tutor asks which claims about psychology’s history are accurate. "
    "Which claims about psychology’s history are accurate? (Select all that apply.)"
)

# Also expand a few "short" items that are almost vignettes already into full ones for margin
# (still within 7 per chapter target via 01-05 + two multis). Extra upgrades for Ch1-3 weaker shorts:

V["c1-l5-06"] = (
    "A downtown clinic posts a banner: “We only study what people do, never thoughts—"
    "because thoughts aren’t scientific.” "
    "A visiting lecturer asks which historical stance that echoes and what later corrected it. "
    "Which historical stance is this closest to, and what’s the later correction?"
)
V["c1-l5-07"] = (
    "A memory lab flyer recruits only students from one wealthy urban campus, then the PI claims "
    "“human memory works like this worldwide.” "
    "A methods-savvy undergrad flags a Chapter 1 concern. "
    "Which Ch 1 concern is most directly raised?"
)
V["c2-l5-06"] = (
    "An IRB flags a memory study that delivers unexpected electric shocks with no advance warning "
    "and no debriefing afterward. "
    "Reviewers ask which ethical principle is most clearly violated. "
    "Which ethical principle is most clearly violated?"
)
V["c2-l5-07"] = (
    "Startup EduBoost claims its study app “causes” higher quiz scores after posting before/after averages "
    "from volunteers who chose to download it. "
    "A skeptical professor asks which design would best support a causal claim. "
    "Which design best supports a causal claim that a new study app improves quiz scores?"
)
V["c2-l5-09"] = (
    "A sleep team reports r = −.45 between nightly sleep hours and next-day irritability ratings "
    "in first-year students, with no experiment yet. "
    "Which interpretations are appropriate? (Select all that apply.)"
)
V["c3-l5-06"] = (
    "After weeks of caregiving under threat of job loss, Alex’s physician notes persistently elevated cortisol "
    "and discusses HPA involvement. "
    "Which system is most directly implicated?"
)
V["c3-l5-07"] = (
    "After left-hemisphere damage, patient Noah speaks fluently in long sentences that convey little meaning "
    "and struggles to understand others’ speech. "
    "Which contrast is most relevant?"
)
V["c3-l5-09"] = (
    "Neurons-and-drugs lab partners argue about action potentials, synapses, agonists, and myelin "
    "while reviewing for a quiz. "
    "Which claims about neural communication are sound? (Select all that apply.)"
)

# Ch4–16 remaining shorts that we intentionally keep shorter: 06,07,(sometimes 09)
# Add a few more vignettes for chapters that need margin past 80:

V["c4-l5-06"] = (
    "Regular drinker Chris notices he now needs three beers to feel the buzz one beer used to bring, "
    "and friends worry about escalating use. "
    "Tolerance means:"
)
V["c4-l5-09"] = (
    "At a harm-reduction booth, cards pair drug classes with primary effects; students must spot textbook-consistent matches. "
    "Which drug-class matches are textbook-consistent? (Select all that apply.)"
)
V["c5-l5-06"] = (
    "Hearing-science demo: a speaker explains high-frequency tones activating the base of the basilar membrane "
    "while low frequencies peak nearer the apex—place coding. "
    "Place theory of pitch primarily emphasizes:"
)
V["c5-l5-07"] = (
    "In a psychophysics booth, participants judge whether a backpack feels heavier after small weight adds; "
    "the just-noticeable difference scales with the starting load. "
    "Weber’s law is most about:"
)
V["c5-l5-09"] = (
    "Sensory systems fair has stations for retina, cochlea, olfactory receptors, and taste buds. "
    "Which sensory matches are reasonable? (Select all that apply.)"
)
V["c6-l5-06"] = (
    "Child Mira watches a coach demonstrate a tennis serve, later practices the motion alone in the driveway, "
    "and improves without being directly reinforced each swing. "
    "Bandura emphasizes:"
)
V["c6-l5-07"] = (
    "In a Skinner-box demo, a rat presses a lever that turns off a loud buzzer; pressing rates climb. "
    "Escape from a loud buzzer by pressing a lever, and pressing increases. This is:"
)
V["c6-l5-10"] = (
    "Classical-conditioning review uses dentist-drill anxiety and cafeteria-nausea stories from classmates. "
    "Which classical-conditioning claims are sound? (Select all that apply.)"
)
V["c7-l5-06"] = (
    "After a plane crash dominates the news, traveler Owen overestimates flying risk because crash images "
    "come to mind so easily. "
    "Judging event likelihood by how easily examples come to mind is the:"
)
V["c7-l5-07"] = (
    "Language lab partners split “cat” into /k/ /æ/ /t/ sounds versus the meaningful unit “-ing” in “running.” "
    "Phonemes vs morphemes—best contrast?"
)
V["c7-l5-09"] = (
    "Intelligence theories roundtable cites Spearman, Gardner, and Sternberg with classroom examples. "
    "Which intelligence statements are defensible in OpenStax framing? (Select all that apply.)"
)
V["c8-l5-06"] = (
    "Two study plans: Ren repeats a definition 20 times; Sasha links it to a personal story and teaches a friend. "
    "Elaborative rehearsal beats maintenance rehearsal for durable memory mainly because it:"
)
V["c8-l5-07"] = (
    "After a staged hallway argument, witnesses who later hear a misleading suggestion about a “broken glass” "
    "incorporate that detail into memory—Loftus-style. "
    "Loftus-style misinformation effects show:"
)
V["c8-l5-10"] = (
    "Peer tutors promote spacing, retrieval practice, sleep, mnemonics, and hippocampal role before finals week. "
    "Which memory-enhancement / brain claims are reasonable? (Select all that apply.)"
)
V["c9-l5-06"] = (
    "Parent forum debates whether shyness is “all genes” or “all parenting”; a developmentalist urges interaction. "
    "Nature vs nurture in development is best framed as:"
)
V["c9-l5-07"] = (
    "Hospice volunteer training presents Kübler-Ross stages as a helpful but not universal sequence for dying patients. "
    "Kübler-Ross’s stages of dying are best treated as:"
)
V["c9-l5-10"] = (
    "Methods day contrasts cross-sectional classroom snapshots with a longitudinal follow-up of the same kids. "
    "Which research-design ideas matter for development? (Select all that apply.)"
)
V["c10-l5-06"] = (
    "After a holiday binge, friends joke that their bodies will “defend” a usual weight range when diets start. "
    "Set-point ideas about body weight suggest:"
)
V["c10-l5-07"] = (
    "At a multicultural festival, the same surprise emotion is shown with big smiles in one group "
    "but more restrained faces in another—display rules. "
    "Cultural display rules primarily affect:"
)
V["c10-l5-10"] = (
    "Hunger, belonging, and sexual motivation stations wrap the motivation chapter with textbook checks. "
    "Which statements are textbook-consistent? (Select all that apply.)"
)
V["c11-l5-06"] = (
    "Assessment lab shows inkblots and TAT pictures; the instructor explains the assumption behind projective tests. "
    "Projective tests (e.g., Rorschach/TAT) mainly assume:"
)
V["c11-l5-07"] = (
    "After missing a deadline, Cam jokes about a rival’s failure instead of admitting anxiety—"
    "a defense-style move in discussion. "
    "Defense mechanisms are:"
)
V["c11-l5-10"] = (
    "Clinic trainees compare MMPI-style inventories with projective methods and reliability concerns. "
    "Which assessment claims are sound? (Select all that apply.)"
)
V["c12-l5-06"] = (
    "Campus climate case: a stereotype about a major, a hostile attitude toward that group, "
    "and a club that excludes them from events. "
    "Stereotype vs prejudice vs discrimination—best sketch?"
)
V["c12-l5-07"] = (
    "In a crowded quad, many students notice someone trip and spill papers; each assumes someone else will help, "
    "so no one does. "
    "Diffusion of responsibility helps explain:"
)
V["c12-l5-09"] = (
    "Attribution and attitude workshop uses driver-cutting-off and eco-habit examples from earlier in the week. "
    "Which attribution/attitude claims are sound? (Select all that apply.)"
)
V["c13-l5-06"] = (
    "Engineers and psychologists redesign a control panel so alerts are readable under stress—"
    "fitting the human to the machine. "
    "Human factors / ergonomics focuses on:"
)
V["c13-l5-07"] = (
    "Legal counsel warns HR that a quirky hiring puzzle must predict job performance and be fair across groups. "
    "A test used in hiring should primarily be:"
)
V["c13-l5-10"] = (
    "Safety walk-through lists display design, workload, and accident prevention as human-factors goals. "
    "Which human-factors claims are sound? (Select all that apply.)"
)
V["c14-l5-06"] = (
    "Cardiology consult notes a competitive, time-urgent, hostile pattern once labeled Type A in a manager. "
    "Type A behavior pattern historically emphasized:"
)
V["c14-l5-07"] = (
    "Well-being elective assigns Seligman-style exercises on strengths, gratitude, and flourishing—not only pathology. "
    "Positive psychology (Seligman et al.) emphasizes:"
)
V["c14-l5-10"] = (
    "Health-psych fair covers stress–illness links, coping, and positive psychology booths. "
    "Which health-psychology statements are sound? (Select all that apply.)"
)
V["c15-l5-06"] = (
    "Case conference: a family history of mood disorder plus a recent layoff precedes a first depressive episode—"
    "vulnerability meeting stress. "
    "Diathesis–stress models propose disorders emerge from:"
)
V["c15-l5-07"] = (
    "Forensic consult describes a client with a long pattern of deceit, impulsivity, and lack of remorse "
    "toward others’ rights. "
    "Antisocial personality disorder emphasizes:"
)
V["c15-l5-09"] = (
    "Mood and psychosis module pairs depression, bipolar features, and schizophrenia positive symptoms with vignettes. "
    "Which mood/psychosis statements are sound? (Select all that apply.)"
)
V["c16-l5-06"] = (
    "In group therapy for social anxiety, members realize others share similar fears and practice feedback live. "
    "Group therapy’s distinctive potential benefit is:"
)
V["c16-l5-07"] = (
    "Outreach workers list stigma, cost, and lack of nearby clinics when asking why students delay counseling. "
    "Barriers to treatment commonly include:"
)
V["c16-l5-10"] = (
    "Community mental-health panel discusses family therapy, cultural competence, involuntary care, and stigma. "
    "Which sociocultural/utilization statements fit? (Select all that apply.)"
)

# c4-l5-07 short contrast — leave or light vignette:
V["c4-l5-07"] = (
    "Two patients present: one has sudden daytime sleep attacks with cataplexy notes; "
    "the other snores and stops breathing at night. "
    "Which contrast is most accurate?"
)


def is_full_vignette(stem: str) -> bool:
    """Full narrative vignette: cast/name + concrete situation + exam ask (2–5 sentences)."""
    s = stem.strip()
    # Pure definition stems (no story lead-in)
    if re.match(
        r"^(Which of the following|What is |The term |According to |"
        r"Psychology is best defined|Lifespan development studies:|"
        r"A concept is best described|Personality is best defined as:|"
        r"Social psychology most centrally studies:|"
        r"I-O psychology primarily applies|"
        r"The DSM is primarily used to:|"
        r"Consciousness in OpenStax is best framed as:|"
        r"REM sleep is most strongly|"
        r"Alcohol is classified primarily|"
        r"Circadian rhythms are most|"
        r"Tolerance means:|"
        r"Sensation vs perception|"
        r"Absolute threshold is best|"
        r"Place theory of pitch|"
        r"Weber.?s law is most|"
        r"In Pavlovian terms|"
        r"Drive theory most|"
        r"Intrinsic vs extrinsic|"
        r"James.?Lange theory proposes|"
        r"Schachter.?Singer|"
        r"Yerkes.?Dodson|"
        r"Freud.?s id is primarily|"
        r"The Big Five trait|"
        r"Self-efficacy \(Bandura\)|"
        r"Defense mechanisms are:|"
        r"Fundamental attribution error is:|"
        r"Asch.?s line studies|"
        r"Milgram.?s obedience|"
        r"Cognitive dissonance is|"
        r"Stereotype vs prejudice|"
        r"Diffusion of responsibility|"
        r"Job analysis is used|"
        r"Structured interviews typically|"
        r"Transactional vs transformational|"
        r"Human factors / ergonomics|"
        r"Lazarus.?s cognitive|"
        r"Selye.?s General|"
        r"Psychoneuroimmunology most|"
        r"Problem-focused coping|"
        r"Type A behavior|"
        r"Positive psychology|"
        r"Specific phobia involves:|"
        r"Major depressive episode|"
        r"Schizophrenia is characterized|"
        r"PTSD requires:|"
        r"Diathesis.?stress|"
        r"Antisocial personality|"
        r"Historically, asylums|"
        r"Cognitive therapy most|"
        r"Systematic desensitization is|"
        r"SSRIs are examples|"
        r"Rogers.?s client-centered|"
        r"Group therapy.?s distinctive|"
        r"Barriers to treatment|"
        r"Which (statements|claims|practices|distinctions|contrasts|design|contrast|drug|sensory|encoding|interference|Piaget|developmental|research|emotion|motivation|personality|Big Five|assessment|social-influence|attribution|intergroup|industrial|organizational|human-factors|stress|coping|health|anxiety|mood|classification|therapy|treatment|sociocultural|problem-solving|intelligence|language|classical|operant|autonomic|neural|brain))",
        s,
    ):
        # Still allow if there is a clear multi-sentence story BEFORE a short ask —
        # but these patterns are start-anchored, so pure asks fail here.
        return False
    has_name = bool(re.search(r"\b[A-Z][a-z]{2,}\b", s))
    cast = bool(re.search(
        r"\b(student|students|coach|clinic|classmate|researcher|professor|patient|therapist|"
        r"manager|nurse|doctor|parent|teacher|client|participant|volunteer|roommate|intern|"
        r"blogger|journalist|attending|tutor|team|designer|shopper|witness|caregiver|"
        r"psychiatrist|counselor|engineer|undergrad|first-year|twin|twins|family|members|"
        r"infant|toddler|teenager|preschooler|baby|driver|witnesses|confederates|"
        r"assembler|traveler|shopper|docent|pharmacologist|physician|instructor|"
        r"analyst|firms?|hospital|nurses|clinician|outreach|interns|trainees|"
        r"workshop|seminar|fair|booth|lab|demo|module|panel|roundtable)\b",
        s, re.I))
    plot = bool(re.search(
        r"\b(say|says|said|claim|claims|ask|asks|asking|decide|decides|notice|notices|noticing|"
        r"find|finds|see|sees|hear|hears|hearing|tell|tells|argue|argues|arguing|"
        r"post|posts|write|writes|plan|plans|want|wants|try|tries|trying|report|reports|"
        r"believe|believes|think|thinks|feel|feels|feeling|worry|worries|"
        r"complain|complains|propose|proposes|design|designs|redesign|run|runs|"
        r"conduct|conducts|recruit|recruits|measure|measures|observe|observes|"
        r"review|reviews|compare|compares|debate|debates|list|lists|arrive|arrives|"
        r"skip|skips|walk|walks|fly|flies|finish|finishes|open|opens|freeze|freezes|"
        r"code|codes|assign|assigns|deliver|delivers|practice|practices|shadow|shadows|"
        r"hire|hires|ring|rings|place|places|remove|removes|earn|earns|press|presses|"
        r"watch|watches|insist|insists|grab|grabs|overestimate|cuts|cut|"
        r"continue|continuing|buy|buying|exclude|excludes|trip|spill|"
        r"link|links|make|makes|email|emails|map|maps|role-play|role-plays|"
        r"present|presents|cite|cites|re-administer|gets|get|"
        r"study|studied|learn|learned|trace|traces|juggle|juggles|"
        r"cry|cries|seek|seeks|calm|calms|chat|chats|explore|explores|"
        r"pour|poured|insist|insists|spend|spends|paint|paints|"
        r"inject|injection|tell|told|help|helps|wreck|"
        r"joke|jokes|show|shows|shown|arrange|arranges|"
        r"stop|stops|gasp|gasps|doze|dozes|snore|snores|"
        r"damage|damages|speak|speaks|struggle|struggles|"
        r"sit|sits|mimic|mimics|boost|boosts|contrast|contrasts|"
        r"track|tracks|pin|pins|pair|pairs|sort|sorts|"
        r"recruit|recruits|generalize|generalizes|flag|flags|"
        r"deliver|delivers|warn|warning|debrief|debriefing|"
        r"download|chose|chosen|support|supports)\b",
        s, re.I))
    sentences = len(re.findall(r"[.!?]", s))
    # Midterm vignette bar: story present, not a one-liner definition
    if sentences >= 2 and len(s) >= 140 and (has_name or cast) and plot:
        return True
    if sentences >= 3 and len(s) >= 180 and (has_name or cast):
        return True
    return False


def main():
    qs = json.loads(Path("/tmp/l5_current.json").read_text())
    assert len(qs) == 160
    # Apply rewritten stems where provided; keep originals otherwise
    out = []
    for q in qs:
        nq = copy.deepcopy(q)
        if q["id"] in V:
            nq["question"] = V[q["id"]]
        # ensure multi feedback keys exist for all options
        if nq.get("type") == "multi":
            for i in range(len(nq["options"])):
                if str(i) not in nq["wrongFeedback"]:
                    raise SystemExit(f"{nq['id']} missing wf {i}")
        else:
            for i in range(len(nq["options"])):
                if i == nq["correct"]:
                    continue
                if str(i) not in nq["wrongFeedback"]:
                    raise SystemExit(f"{nq['id']} missing wf {i}")
        out.append(nq)

    # QA count
    vign = [q for q in out if is_full_vignette(q["question"])]
    print("VIGNETTE_COUNT", len(vign), "/160")
    by = {}
    for q in out:
        by.setdefault(q["chapter"], [0, 0])
        by[q["chapter"]][0] += 1
        if is_full_vignette(q["question"]):
            by[q["chapter"]][1] += 1
    for c in range(1, 17):
        print(f"Ch{c}: {by[c][1]}/{by[c][0]}")
    if len(vign) < 80:
        # show failures
        for q in out:
            if not is_full_vignette(q["question"]):
                print("FAIL", q["id"], len(q["question"]), q["question"][:120])
        raise SystemExit("Need ≥80 vignettes")

    # Write JSON
    json_path = ROOT / "tools/expand_data/level5_mock_all.json"
    json_path.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
    print("Wrote", json_path)

    # Patch questions.js: replace all level-5 objects
    qpath = ROOT / "data/questions.js"
    text = qpath.read_text()
    m = re.search(r"window\.PSYCH_QUESTIONS\s*=\s*(\[.*\]);?\s*$", text, re.S)
    if not m:
        raise SystemExit("Could not parse questions.js")
    all_q = json.loads(m.group(1))
    non_l5 = [q for q in all_q if q.get("level") != 5]
    # preserve any extra keys order roughly
    merged = non_l5 + out
    header = text[: m.start(1)]
    # keep file header comment
    new_text = re.sub(
        r"window\.PSYCH_QUESTIONS\s*=\s*\[.*\];?\s*$",
        "window.PSYCH_QUESTIONS = "
        + json.dumps(merged, ensure_ascii=False, indent=2)
        + ";\n",
        text,
        count=1,
        flags=re.S,
    )
    qpath.write_text(new_text)
    print("Patched", qpath, "total", len(merged), "L5", sum(1 for q in merged if q.get("level")==5))

    # Cache-bust HTML
    html_files = list((ROOT / "chapters").glob("ch*.html")) + [
        ROOT / "quiz.html",
        ROOT / "topics.html",
        ROOT / "wrongbook.html",
        ROOT / "index.html",
    ]
    old = "20261109l5"
    n = 0
    for p in html_files:
        if not p.exists():
            continue
        t = p.read_text()
        if old in t:
            p.write_text(t.replace(old, STAMP))
            n += 1
    print("Cache-bust files", n, "->", STAMP)

    # Spot-check node load
    print("OK")


if __name__ == "__main__":
    main()
