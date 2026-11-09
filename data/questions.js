/**
 * OpenStax Psychology 2e revision MCQs (Ch 1–16).
 * Schema: { id, chapter, level, section, question, options[4|5], correct, correctFeedback, wrongFeedback, page?, type?, mode? }
 * L4 = cross-topic from Ch 2 onward. L5 = Mock (exam-style; ~70% SC + ~30% multi).
 * Access for free at openstax.org.
 */
window.PSYCH_QUESTIONS = [
  {
    "chapter": 1,
    "level": 1,
    "section": "1.1",
    "question": "Psychology is best defined as the scientific study of:",
    "options": [
      "Animal instincts exclusively",
      "Only abnormal behavior",
      "Philosophical logic alone",
      "Mind and behavior"
    ],
    "correct": 3,
    "correctFeedback": "Psychology uses scientific methods to study mind and behavior.",
    "wrongFeedback": {
      "0": "Comparative work exists, but psychology is not limited to animal instincts.",
      "1": "Abnormal behavior is only one applied area (clinical), not the whole definition.",
      "2": "Philosophy informs history, but modern psychology is empirical, not pure logic."
    },
    "page": 8,
    "id": "c1-l1-01"
  },
  {
    "chapter": 1,
    "level": 1,
    "section": "1.1",
    "question": "Knowledge based on observation and experimentation exemplifies the:",
    "options": [
      "Pure rationalism",
      "Anecdotal method",
      "Empirical method",
      "Method of authority"
    ],
    "correct": 2,
    "correctFeedback": "The empirical method relies on observation, including experimentation.",
    "wrongFeedback": {
      "0": "Rationalism privileges reason alone; empiricism demands data.",
      "1": "Anecdotes are personal stories, not systematic observation.",
      "3": "Authority means accepting claims because an expert said so, without testing."
    },
    "page": 8,
    "id": "c1-l1-02"
  },
  {
    "chapter": 1,
    "level": 1,
    "section": "1.2",
    "question": "Who is credited with establishing the first psychology laboratory in 1879?",
    "options": [
      "William James",
      "John B. Watson",
      "Sigmund Freud",
      "Wilhelm Wundt"
    ],
    "correct": 3,
    "correctFeedback": "Wundt's Leipzig lab (1879) marks a common founding date for scientific psychology.",
    "wrongFeedback": {
      "0": "James was a leading U.S. functionalist, not the Leipzig lab founder.",
      "1": "Watson founded behaviorism in the early 20th century.",
      "2": "Freud developed psychoanalysis later and clinically."
    },
    "page": 10,
    "id": "c1-l1-03"
  },
  {
    "chapter": 1,
    "level": 1,
    "section": "1.2",
    "question": "Functionalism, associated with William James, emphasized:",
    "options": [
      "Cataloging the basic elements of consciousness only",
      "Unconscious sexual and aggressive drives",
      "How mental activities help organisms adapt to their environment",
      "Observable S-R bonds exclusively, which is not the best account"
    ],
    "correct": 2,
    "correctFeedback": "Functionalism asked what the mind is for—adaptation—influenced by Darwin.",
    "wrongFeedback": {
      "0": "That aim fits structuralism more than functionalism.",
      "1": "That is psychoanalytic theory (Freud).",
      "3": "That is the behaviorist program (Watson/Skinner)."
    },
    "page": 10,
    "id": "c1-l1-04"
  },
  {
    "chapter": 1,
    "level": 1,
    "section": "1.2",
    "question": "Which school focused on observable behavior and rejected introspection?",
    "options": [
      "Structuralism",
      "Humanism",
      "Gestalt psychology",
      "Behaviorism"
    ],
    "correct": 3,
    "correctFeedback": "Behaviorism (Watson, Skinner) limited psychology to observable behavior.",
    "wrongFeedback": {
      "0": "Structuralism used introspection to analyze consciousness.",
      "1": "Humanism emphasized growth and subjective experience.",
      "2": "Gestalt focused on organized perception, not rejecting mind for S-R only."
    },
    "page": 12,
    "id": "c1-l1-05"
  },
  {
    "chapter": 1,
    "level": 1,
    "section": "1.3",
    "question": "The American Psychological Association (APA) is primarily:",
    "options": [
      "A pharmaceutical regulator — a common but inaccurate claim",
      "An exclusive evolutionary theory society",
      "A single clinical treatment method",
      "A professional organization for psychologists in the United States"
    ],
    "correct": 3,
    "correctFeedback": "The APA is a major professional organization with many specialty divisions.",
    "wrongFeedback": {
      "0": "Drug regulation is not the APA's role.",
      "1": "Evolutionary psychology is one perspective, not the APA's sole identity.",
      "2": "APA is an organization, not a therapy brand."
    },
    "page": 18,
    "id": "c1-l1-06"
  },
  {
    "chapter": 1,
    "level": 2,
    "section": "1.2",
    "question": "Why was introspection criticized as a scientific method?",
    "options": [
      "It only works on animals, which is not the best account",
      "It requires too many participants",
      "It is subjective and hard to verify across observers",
      "It cannot generate any verbal reports"
    ],
    "correct": 2,
    "correctFeedback": "Introspection depends on private experience; reliability and objectivity were questioned.",
    "wrongFeedback": {
      "0": "Introspection was used with trained human observers, not animals.",
      "1": "Sample size was not the core critique; subjectivity was.",
      "3": "Introspection produces verbal reports—that was the method, and also its weakness."
    },
    "page": 10,
    "id": "c1-l2-01"
  },
  {
    "chapter": 1,
    "level": 2,
    "section": "1.2",
    "question": "How did the cognitive revolution challenge radical behaviorism?",
    "options": [
      "It proved Freud's unconscious entirely correct",
      "It replaced experiments with case studies only",
      "It restored scientific study of internal mental processes and representations",
      "It banned all learning research"
    ],
    "correct": 2,
    "correctFeedback": "Cognitive science argued mind (memory, language, attention) can be studied scientifically.",
    "wrongFeedback": {
      "0": "The cognitive turn did not simply validate classical psychoanalysis.",
      "1": "Experiments remained central; topics expanded beyond overt behavior.",
      "3": "Learning research continued; the scope of psychology expanded."
    },
    "page": 14,
    "id": "c1-l2-02"
  },
  {
    "chapter": 1,
    "level": 2,
    "section": "1.2",
    "question": "Maslow's humanistic approach differed from psychoanalysis and behaviorism mainly by emphasizing:",
    "options": [
      "Innate potential for good and self-actualization",
      "Unconscious sexual conflict as the sole cause",
      "Strict environmental determinism only",
      "Elimination of free will from theory"
    ],
    "correct": 0,
    "correctFeedback": "Humanism stressed growth, choice, and positive potential (Maslow, Rogers).",
    "wrongFeedback": {
      "1": "Sexual conflict is a Freudian emphasis, not humanism's core claim.",
      "2": "Environmental determinism is closer to radical behaviorism.",
      "3": "Humanists typically affirmed agency/choice rather than eliminating free will."
    },
    "page": 10,
    "id": "c1-l2-03"
  },
  {
    "chapter": 1,
    "level": 2,
    "section": "1.3",
    "question": "A biopsychologist and a social psychologist studying aggression would most likely differ in:",
    "options": [
      "Refusal to use any empirical methods",
      "Belief that only surveys are scientific",
      "Level of analysis (neural/hormonal vs. situational/cultural)",
      "Whether aggression exists at all, which is not the best account"
    ],
    "correct": 2,
    "correctFeedback": "Same topic, different levels: biology vs. interpersonal/cultural context.",
    "wrongFeedback": {
      "0": "Both domains use empirical methods.",
      "1": "Methods vary; neither is limited to surveys alone.",
      "3": "Both accept aggression as a research topic."
    },
    "page": 20,
    "id": "c1-l2-04"
  },
  {
    "chapter": 1,
    "level": 2,
    "section": "1.2",
    "question": "Gestalt psychologists would most likely criticize structuralism for:",
    "options": [
      "Focusing too much on free will",
      "Ignoring the existence of sensation",
      "Relying only on animal mazes, which is not the best account",
      "Breaking experience into parts and missing organized wholes"
    ],
    "correct": 3,
    "correctFeedback": "Gestalt: the whole perception is different from the sum of elemental parts.",
    "wrongFeedback": {
      "0": "Free will was not their central critique of structuralism.",
      "1": "Gestalt did not deny sensation; it stressed organization.",
      "2": "Mazes are a behaviorist tool, not structuralism's hallmark."
    },
    "page": 12,
    "id": "c1-l2-05"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.1",
    "question": "At a community health fair in Kowloon, influencer Mei posts that a herbal tea cured her panic attacks after three days, and 40 followers comment similar stories. Dr. Chan, a psychologist on the panel, is asked how psychology would evaluate the claim. Which response best fits the empirical method?",
    "options": [
      "Run controlled studies beyond personal tea anecdotes",
      "Quote classical philosophers who praised herbal teas",
      "Collect more unverified follower stories by tonight",
      "Launch celebrity endorsement campaigns on social media"
    ],
    "correct": 0,
    "correctFeedback": "Empiricism requires systematic observation and controlled testing, not stacked anecdotes.",
    "wrongFeedback": {
      "1": "Philosophy can inspire questions, but does not replace empirical tests of tea claims.",
      "2": "More testimonials still lack controls, comparison groups, and systematic measurement.",
      "3": "Marketing volume is not scientific evidence of therapeutic effect."
    },
    "page": 8,
    "id": "c1-l3-01"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.2",
    "question": "A museum exhibit contrasts 1879 Leipzig methods with a modern fMRI lab. A student guide says both 'look inside the mind.' Which historical figure best anchors the Leipzig founding story the exhibit should highlight?",
    "options": [
      "William James leading early U.S. functionalist seminars",
      "Wilhelm Wundt founding the first psychology laboratory",
      "Sigmund Freud analyzing free associations in clinics",
      "John B. Watson rejecting introspection for S–R laws"
    ],
    "correct": 1,
    "correctFeedback": "Wundt's 1879 Leipzig laboratory is the conventional founding marker for scientific psychology.",
    "wrongFeedback": {
      "0": "James is central to U.S. functionalism, not the Leipzig lab founder.",
      "2": "Freud developed psychoanalysis later and in clinical contexts.",
      "3": "Watson launched behaviorism in the early 20th century."
    },
    "page": 10,
    "id": "c1-l3-02"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.2",
    "question": "In a sports psychology clinic, Coach Rivera wants drills that change athletes' observable habits with rewards, and refuses talk about 'unconscious motives.' Which historical school most closely matches the coach's stance?",
    "options": [
      "Structuralism cataloging introspective sensory elements",
      "Psychoanalysis reading repressed childhood conflicts",
      "Behaviorism targeting measurable responses and rewards",
      "Gestalt psychology stressing whole-form perception laws"
    ],
    "correct": 2,
    "correctFeedback": "Behaviorism prioritizes observable behavior and learning contingencies over introspection or unconscious motives.",
    "wrongFeedback": {
      "0": "Structuralism sought elements of consciousness via introspection.",
      "1": "Psychoanalysis centers unconscious conflict, which the coach rejects.",
      "3": "Gestalt emphasized perceptual organization, not reward-shaped habits."
    },
    "page": 12,
    "id": "c1-l3-03"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.2",
    "question": "A university counseling center redesigns intake around growth potential, unconditional positive regard, and clients' capacity to choose. Which pair of figures most directly shaped that humanistic framing?",
    "options": [
      "Wundt and Titchener on elemental conscious contents",
      "Watson and Skinner on reinforcement contingencies",
      "Pavlov and Thorndike on associative learning laws",
      "Rogers and Maslow on growth and self-actualization"
    ],
    "correct": 3,
    "correctFeedback": "Rogers and Maslow are core humanistic figures emphasizing growth and self-actualization.",
    "wrongFeedback": {
      "0": "Wundt/Titchener represent structuralism, not humanistic intake values.",
      "1": "Watson/Skinner represent behaviorism.",
      "2": "Pavlov/Thorndike are learning/association figures, not humanistic growth theorists."
    },
    "page": 14,
    "id": "c1-l3-04"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.2",
    "question": "After critiques of pure verbal-behavior accounts of language, a 1960s lab shifts from only counting lever presses to modeling memory and attention. This shift best illustrates which movement?",
    "options": [
      "Cognitive revolution restoring scientific study of mind",
      "Return of structuralist introspection as primary method",
      "Rise of radical behaviorism as the only paradigm left",
      "Rejection of empiricism for pure armchair philosophy"
    ],
    "correct": 0,
    "correctFeedback": "The cognitive revolution restored mind (memory, attention, language) as a scientific subject.",
    "wrongFeedback": {
      "1": "Cognitive science used many methods; it was not a pure return to structuralist introspection.",
      "2": "The shift moved away from radical behaviorism as the sole paradigm.",
      "3": "Cognitive psychology remained empirical, not a turn to pure philosophy."
    },
    "page": 16,
    "id": "c1-l3-05"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.3",
    "question": "A multinational firm hires a psychologist to redesign shift schedules, reduce burnout, and improve team communication—not to diagnose mental illness. Which contemporary area fits best?",
    "options": [
      "Clinical psychology diagnosing and treating disorders",
      "Industrial-organizational work on workplace systems",
      "Forensic psychology advising courts on competency",
      "Health psychology limited to chronic illness coping"
    ],
    "correct": 1,
    "correctFeedback": "I-O psychology applies psychological science to workplace systems, schedules, and teams.",
    "wrongFeedback": {
      "0": "Clinical work focuses on assessment/treatment of mental disorders.",
      "2": "Forensic psychology interfaces with legal/court questions.",
      "3": "Health psychology is broader than this workplace redesign brief; I-O is the closest fit."
    },
    "page": 20,
    "id": "c1-l3-06"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.3",
    "question": "A thesis relies entirely on university students from one wealthy city and then claims a 'universal' emotion rule. A reviewer invokes the WEIRD critique. What is the reviewer's core worry?",
    "options": [
      "Only animal studies can yield general laws of behavior",
      "Qualitative interviews are forbidden in emotion research",
      "WEIRD samples risk false claims of human universals",
      "Cross-cultural work must abandon experimental controls"
    ],
    "correct": 2,
    "correctFeedback": "Overreliance on WEIRD samples can inflate false universality claims.",
    "wrongFeedback": {
      "0": "Human samples can support generalizations when diversity and methods warrant it.",
      "1": "Qualitative methods are not banned; the issue is sampling/overclaim.",
      "3": "Cross-cultural work can still use rigorous controls."
    },
    "page": 22,
    "id": "c1-l3-07"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.4",
    "question": "Amina wants a doctoral path heavy on producing original research and teaching; Bao wants intensive clinical training with less emphasis on a large research dissertation. Which pairing matches typical PhD vs PsyD emphases?",
    "options": [
      "Both degrees match exactly in research and clinic load",
      "PhD only for prescribing; PsyD only for lab research",
      "PsyD requires medical school; PhD forbids client hours",
      "PhD more research/teaching; PsyD more applied clinic"
    ],
    "correct": 3,
    "correctFeedback": "PhD paths typically emphasize research/teaching; PsyD paths emphasize applied clinical training.",
    "wrongFeedback": {
      "0": "Emphases differ even though both are doctoral clinical/psychology paths.",
      "1": "Prescribing is generally a medical/psychiatry pathway issue, not PhD-vs-PsyD in this framing.",
      "2": "PsyD is not medical school; PhD programs often include clinical training hours."
    },
    "page": 28,
    "id": "c1-l3-08"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.2",
    "question": "In a perception lab demo, students see incomplete circles as whole shapes and insist 'the whole is other than the sum of its parts.' Which school does the demo highlight?",
    "options": [
      "Gestalt psychology on organized perceptual wholes",
      "Psychoanalysis reading shapes as latent dream symbols",
      "Behaviorism reducing perception to reinforced labels",
      "Structuralism listing local sensations without form"
    ],
    "correct": 0,
    "correctFeedback": "Gestalt psychology emphasized organized wholes in perception.",
    "wrongFeedback": {
      "1": "Psychoanalysis is about unconscious meaning, not this perceptual demo.",
      "2": "Behaviorism would not center whole-form perceptual organization.",
      "3": "Structuralism sought elemental sensations more than whole-form organization."
    },
    "page": 13,
    "id": "c1-l3-09"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.1",
    "question": "During a family argument, Uncle Leo says 'psychology is just common sense.' Niece Priya replies with the strongest OpenStax-aligned rebuttal. Which reply fits best?",
    "options": [
      "Common sense is always wrong, so science bans intuition",
      "Science tests claims systematically beyond raw intuition",
      "Psychology replaces all biology entirely with interviews",
      "Only psychoanalysis counts; surveys are never scientific"
    ],
    "correct": 1,
    "correctFeedback": "Scientific psychology systematically tests claims rather than resting on unchecked intuition.",
    "wrongFeedback": {
      "0": "Science can start from everyday ideas; it does not treat all intuition as always wrong.",
      "2": "Psychology works with biology and other sciences; it does not replace them.",
      "3": "Many methods (including surveys) can be scientific when used rigorously."
    },
    "page": 9,
    "id": "c1-l3-10"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.3",
    "question": "A hospital board debates hiring a specialist to help patients adhere to cardiac rehab, manage stress after surgery, and change health behaviors. Which contemporary field is the closest match?",
    "options": [
      "Sports psychology limited to elite peak performance",
      "Cognitive psychology modeling only abstract puzzle solving",
      "Health psychology linking behavior, stress, and wellness",
      "Social psychology studying only jury decision-making"
    ],
    "correct": 2,
    "correctFeedback": "Health psychology focuses on behavior, stress, and physical health outcomes.",
    "wrongFeedback": {
      "0": "Sports psychology is a poor match for cardiac rehab adherence.",
      "1": "Cognitive modeling of puzzles is not the cardiac-behavior brief.",
      "3": "Jury decision research is a social topic, not this hospital role."
    },
    "page": 24,
    "id": "c1-l3-11"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.2",
    "question": "A history seminar asks: if structuralists asked 'what are the contents of consciousness?' what question did functionalists press instead, in James's spirit?",
    "options": [
      "Why must psychologists never study consciousness again?",
      "Which unconscious drives alone fix every adult symptom?",
      "How can all mental life reduce to gland secretions only?",
      "How do mental acts help organisms adapt to environments?"
    ],
    "correct": 3,
    "correctFeedback": "Functionalists asked what consciousness is for—adaptation to the environment.",
    "wrongFeedback": {
      "0": "Functionalists studied consciousness; they did not ban it.",
      "1": "That framing is psychoanalytic, not functionalist.",
      "2": "That is not Jamesian functionalism."
    },
    "page": 11,
    "id": "c1-l3-12"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.4",
    "question": "In many jurisdictions, a patient wants prescription medication for severe depression. Which professional pathway is typically authorized to prescribe (unlike most psychologists)?",
    "options": [
      "Psychiatry/medical training that includes licensure",
      "Any PsyD graduate gains full prescribing everywhere",
      "Any BA psychology major after a short online quiz",
      "An I-O consultant running workplace wellness surveys"
    ],
    "correct": 0,
    "correctFeedback": "Prescribing typically requires medical/psychiatry licensure pathways; most psychologists do not prescribe.",
    "wrongFeedback": {
      "1": "PsyD does not automatically confer prescribing rights everywhere.",
      "2": "A bachelor’s degree plus a quiz is not a prescribing pathway.",
      "3": "I-O workplace consulting is not a medication-prescribing role."
    },
    "page": 30,
    "id": "c1-l3-13"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.3",
    "question": "A school district wants someone to assess learning difficulties, consult on IEPs, and support students' academic and emotional adjustment in classrooms—not run a private adult therapy clinic. Best fit?",
    "options": [
      "Forensic psychology evaluating full criminal responsibility",
      "School psychology bridging assessment and student support",
      "Experimental psychology running only rodent maze studies",
      "Clinical neuropsychology limited only to adult stroke rehab"
    ],
    "correct": 1,
    "correctFeedback": "School psychologists work at the intersection of assessment, learning, and student support.",
    "wrongFeedback": {
      "0": "Forensic work centers legal questions, not school IEPs.",
      "2": "Rodent experimental work is not a school-service role.",
      "3": "Adult stroke neuropsychology is not the school-district brief."
    },
    "page": 18,
    "id": "c1-l3-14"
  },
  {
    "chapter": 1,
    "level": 3,
    "section": "1.2",
    "question": "Client Diego describes intrusive memories and the therapist explores unconscious conflict and early relationships using free association. Which historical approach is most clearly echoed?",
    "options": [
      "Radical behaviorism shaping present reward contingencies",
      "Structuralism timing simple reaction tasks in a lab room",
      "Psychoanalytic focus on unconscious and early experience",
      "Humanistic therapy refusing any discussion of the past"
    ],
    "correct": 2,
    "correctFeedback": "Free association and unconscious/early-experience focus echo psychoanalytic approaches.",
    "wrongFeedback": {
      "0": "Radical behaviorism would focus on present contingencies, not free association.",
      "1": "Structuralist lab timings are not this clinical method.",
      "3": "Humanistic therapy does not match free-association psychoanalysis."
    },
    "page": 15,
    "id": "c1-l3-15"
  },
  {
    "chapter": 2,
    "level": 1,
    "section": "2.1",
    "question": "In the scientific method, a testable prediction derived from a theory is a:",
    "options": [
      "Placebo",
      "IRB",
      "Opinion",
      "Hypothesis"
    ],
    "correct": 3,
    "correctFeedback": "A hypothesis is a specific, testable prediction.",
    "wrongFeedback": {
      "0": "A placebo is an inactive treatment control, not a hypothesis.",
      "1": "An IRB reviews ethics; it is not a prediction.",
      "2": "Opinions are personal judgments, not necessarily testable predictions."
    },
    "page": 36,
    "id": "c2-l1-01"
  },
  {
    "chapter": 2,
    "level": 1,
    "section": "2.3",
    "question": "Which design manipulates an independent variable and uses random assignment?",
    "options": [
      "Pure correlation study",
      "Uncontrolled case study",
      "Experiment",
      "Archival study only"
    ],
    "correct": 2,
    "correctFeedback": "Experiments manipulate the IV and typically randomly assign participants to conditions.",
    "wrongFeedback": {
      "0": "Correlations measure association without manipulation.",
      "1": "Case studies usually lack experimental control/random assignment.",
      "3": "Archival research uses existing records without manipulation."
    },
    "page": 54,
    "id": "c2-l1-02"
  },
  {
    "chapter": 2,
    "level": 1,
    "section": "2.3",
    "question": "A correlation coefficient of -0.85 indicates:",
    "options": [
      "A perfect positive relationship",
      "No relationship",
      "A strong negative relationship",
      "A weak positive relationship"
    ],
    "correct": 2,
    "correctFeedback": "Values near -1 mean a strong inverse association.",
    "wrongFeedback": {
      "0": "+1 would be perfect positive; this is strong negative.",
      "1": "Zero would mean no linear relationship.",
      "3": "Negative sign means inverse, not positive; 0.85 magnitude is strong."
    },
    "page": 48,
    "id": "c2-l1-03"
  },
  {
    "chapter": 2,
    "level": 1,
    "section": "2.3",
    "question": "Correlation alone cannot establish causation mainly because of:",
    "options": [
      "Directionality and possible third-variable (confound) problems",
      "The impossibility of measuring two variables",
      "IRBs banning all correlations — a common but inaccurate claim",
      "Means always equaling medians"
    ],
    "correct": 0,
    "correctFeedback": "We may not know what causes what, and uncontrolled variables may drive the link.",
    "wrongFeedback": {
      "1": "We can measure two variables; inference is the issue.",
      "2": "Correlational work is commonly IRB-approved when ethical.",
      "3": "Central tendency facts are unrelated to causal limits."
    },
    "page": 48,
    "id": "c2-l1-04"
  },
  {
    "chapter": 2,
    "level": 1,
    "section": "2.4",
    "question": "Before most human research begins in universities, a proposal is reviewed by an:",
    "options": [
      "Advertising agency",
      "IRB (Institutional Review Board)",
      "Sports committee",
      "IACUC only for humans"
    ],
    "correct": 1,
    "correctFeedback": "IRBs review human-subjects research for ethical compliance.",
    "wrongFeedback": {
      "0": "Ads do not provide ethical scientific review.",
      "2": "Irrelevant to research ethics review.",
      "3": "IACUC oversees animal care/use, not typical human IRB review."
    },
    "page": 58,
    "id": "c2-l1-05"
  },
  {
    "chapter": 2,
    "level": 1,
    "section": "2.3",
    "question": "Reliability refers to _____; validity refers to _____.",
    "options": [
      "Consistency; accuracy (measuring the intended construct)",
      "Mean; mode",
      "Sample size; population size",
      "Accuracy; consistency"
    ],
    "correct": 0,
    "correctFeedback": "Reliable measures are consistent; valid measures assess what they claim to assess.",
    "wrongFeedback": {
      "1": "Mean/mode are descriptive stats, not reliability/validity.",
      "2": "Those are sampling concepts, not reliability/validity definitions.",
      "3": "That reverses the definitions."
    },
    "page": 58,
    "id": "c2-l1-06"
  },
  {
    "chapter": 2,
    "level": 2,
    "section": "2.1",
    "question": "Deductive reasoning in research typically moves:",
    "options": [
      "From general theory to specific hypothesis/predictions",
      "From one anecdote to universal law with no test",
      "From p-values to IRB approval automatically",
      "From deception to omitting debriefing"
    ],
    "correct": 0,
    "correctFeedback": "Deduction: theory to specific testable predictions; induction builds broader claims from data.",
    "wrongFeedback": {
      "1": "Anecdote-to-law without testing is not scientific deduction.",
      "2": "Stats and ethics are separate processes.",
      "3": "Deception requires justification and debriefing, not omission."
    },
    "page": 38,
    "id": "c2-l2-01"
  },
  {
    "chapter": 2,
    "level": 2,
    "section": "2.3",
    "question": "Why does random assignment strengthen causal inference?",
    "options": [
      "It guarantees a representative national sample",
      "It makes double-blind designs unnecessary",
      "It balances confounds across groups on average",
      "It eliminates the need for a control group"
    ],
    "correct": 2,
    "correctFeedback": "Random assignment distributes known/unknown confounds across conditions stochastically.",
    "wrongFeedback": {
      "0": "Random sampling aids representativeness; assignment aids internal validity.",
      "1": "Blinding still reduces expectancy effects.",
      "3": "Control/comparison groups remain essential."
    },
    "page": 54,
    "id": "c2-l2-02"
  },
  {
    "chapter": 2,
    "level": 2,
    "section": "2.2",
    "question": "Longitudinal designs are especially useful for studying development because they:",
    "options": [
      "Always avoid attrition",
      "Are cheaper than one-shot surveys",
      "Follow the same people over time, tracking within-person change",
      "Eliminate cohort effects automatically in cross-sectional comparisons"
    ],
    "correct": 2,
    "correctFeedback": "Repeated measures on the same individuals reveal change trajectories.",
    "wrongFeedback": {
      "0": "Attrition is a major risk in longitudinal work.",
      "1": "Longitudinal studies are typically costlier/time-intensive.",
      "3": "Cohort effects are a cross-sectional concern; longitudinal has other threats."
    },
    "page": 46,
    "id": "c2-l2-03"
  },
  {
    "chapter": 2,
    "level": 2,
    "section": "2.3",
    "question": "A scale yields the same score every retest but tracks shoe size instead of depression. It is:",
    "options": [
      "Valid but unreliable",
      "Neither reliable nor consistent",
      "Perfectly construct-valid",
      "Reliable but not valid for depression"
    ],
    "correct": 3,
    "correctFeedback": "Consistency without measuring the intended construct = reliability without validity.",
    "wrongFeedback": {
      "0": "It is consistent (reliable) but wrong construct (invalid).",
      "1": "It is consistent, so reliability is high.",
      "2": "Wrong construct means poor validity for depression."
    },
    "page": 58,
    "id": "c2-l2-04"
  },
  {
    "chapter": 2,
    "level": 2,
    "section": "2.4",
    "question": "Deception in experiments is ethically acceptable only when:",
    "options": [
      "The researcher finds consent forms annoying",
      "Justified by significant scientific value, minimal harm, and followed by debriefing (per IRB rules)",
      "Participants are never told the truth afterward",
      "It is used to embarrass participants for fun"
    ],
    "correct": 1,
    "correctFeedback": "IRBs allow limited deception with justification, risk limits, and debriefing.",
    "wrongFeedback": {
      "0": "Convenience is not an ethical justification.",
      "2": "Debriefing is required after deception.",
      "3": "Harmful humiliation violates beneficence/respect."
    },
    "page": 60,
    "id": "c2-l2-05"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.2",
    "question": "Dr. Okonkwo follows 90 children from age 5 to 15, measuring the same anxiety questionnaire each year. Midway, 25 families move away. Which design is this, and what threat is highlighted?",
    "options": [
      "Longitudinal follow-up; attrition can bias who remains",
      "Cross-sectional snapshot; only expectancy is a threat",
      "Pure archival study; moves raise internal validity odd",
      "True experiment; relocation randomly assigns the groups"
    ],
    "correct": 0,
    "correctFeedback": "Following the same people over years is longitudinal; dropout (attrition) can bias remaining samples.",
    "wrongFeedback": {
      "1": "This is not a one-time cross-sectional snapshot.",
      "2": "Moving families is a threat (attrition), not a validity boost.",
      "3": "No experimental manipulation/random assignment is described."
    },
    "page": 44,
    "id": "c2-l3-01"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.3",
    "question": "A city report finds r = −0.55 between neighborhood park access and self-reported stress. A mayor announces parks therefore cause lower stress. What is the strongest methodological correction?",
    "options": [
      "Negative correlations are errors and must be discarded",
      "Association is not causation without controlled tests",
      "Any |r| above 0.50 proves causation by itself alone",
      "Survey stress can never relate to environment measures"
    ],
    "correct": 1,
    "correctFeedback": "Correlation indicates association; causal claims need stronger controlled designs.",
    "wrongFeedback": {
      "0": "Negative correlations are valid associations, not automatic errors.",
      "2": "Effect size of r does not by itself prove causation.",
      "3": "Environmental and survey variables can correlate; causation is the issue."
    },
    "page": 52,
    "id": "c2-l3-02"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.3",
    "question": "In a sleep lab, participants are randomly assigned to 5 vs 8 hours' sleep; next-day attention scores are the outcome. Identify IV and DV.",
    "options": [
      "IV = attention scores; DV = assigned sleep duration",
      "Both sleep and attention are IVs because both occur",
      "IV = sleep duration; DV = next-day attention scores",
      "No IV exists because random assignment removes variables"
    ],
    "correct": 2,
    "correctFeedback": "The manipulated sleep condition is the IV; measured attention is the DV.",
    "wrongFeedback": {
      "0": "That reverses IV and DV.",
      "1": "Attention is measured, not independently manipulated here.",
      "3": "Random assignment supports causal inference; it does not erase the IV."
    },
    "page": 56,
    "id": "c2-l3-03"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.2",
    "question": "Two observers code playground aggression but disagree on 40% of intervals. Before trusting results, the team should prioritize improving:",
    "options": [
      "Face-validity slogans printed only on the consent forms",
      "External validity by switching to one anecdotal case study",
      "Demand effects by telling children the hypothesis early on",
      "Inter-rater reliability of the observational coding scheme"
    ],
    "correct": 3,
    "correctFeedback": "Large coder disagreement means inter-rater reliability must be improved first.",
    "wrongFeedback": {
      "0": "Consent slogans do not fix coding disagreement.",
      "1": "A single anecdote worsens, not improves, trustworthy measurement.",
      "2": "Revealing the hypothesis early can increase demand characteristics."
    },
    "page": 42,
    "id": "c2-l3-04"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.3",
    "question": "A pill trial uses placebos and keeps participants and experimenters blind to condition. What primary bias does double-blinding aim to reduce?",
    "options": [
      "Expectation and experimenter-bias effects on outcomes",
      "Attrition from decades-long longitudinal follow-up work",
      "The impossibility of ever computing any correlation r",
      "Genetic relatedness among participants in twin designs"
    ],
    "correct": 0,
    "correctFeedback": "Double-blinding reduces participant expectation and experimenter bias effects.",
    "wrongFeedback": {
      "1": "Blinding is not primarily an attrition fix.",
      "2": "Blinding is unrelated to whether correlations can be computed.",
      "3": "Twin relatedness is a different design issue."
    },
    "page": 58,
    "id": "c2-l3-05"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.4",
    "question": "Before recruiting undergraduates for a deception study on conformity, which body typically must review risks, consent, and debriefing plans?",
    "options": [
      "IACUC focused on animal housing and veterinary standards",
      "IRB reviewing human participants’ rights and welfare",
      "A marketing focus group with no formal ethics mandate",
      "Only the campus newspaper’s editorial board for review"
    ],
    "correct": 1,
    "correctFeedback": "Human subjects research is reviewed by an IRB (or equivalent).",
    "wrongFeedback": {
      "0": "IACUC oversees animal care/use, not typical human deception studies.",
      "2": "Marketing groups are not ethics review boards.",
      "3": "Newspaper editors do not replace IRB review."
    },
    "page": 64,
    "id": "c2-l3-06"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.2",
    "question": "Clinicians publish an in-depth report on one patient with a rare amnesia syndrome, detailing years of testing. Strength and limit?",
    "options": [
      "High generalizability to all humans; low case detail",
      "Automatic causal proof of treatment; ethics irrelevant",
      "Rich rare-case detail; limited generalizability beyond",
      "Replaces any need for group studies in neuroscience"
    ],
    "correct": 2,
    "correctFeedback": "Case studies offer rich detail but limited generalizability.",
    "wrongFeedback": {
      "0": "That reverses the typical strength/limit pattern.",
      "1": "n = 1 does not automatically prove causation; ethics still apply.",
      "3": "Case studies complement, not replace, broader designs."
    },
    "page": 40,
    "id": "c2-l3-07"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.3",
    "question": "A scale yields the same score every Monday yet correlates poorly with established depression inventories and clinician judgments. Best interpretation?",
    "options": [
      "High reliability always guarantees validity everywhere",
      "Reliability and validity are identical psychometric terms",
      "Validity exists whenever software prints any number out",
      "Reliable scores can still lack construct validity here"
    ],
    "correct": 3,
    "correctFeedback": "Consistency (reliability) does not ensure the scale measures the intended construct (validity).",
    "wrongFeedback": {
      "0": "Reliability is necessary but not sufficient for validity.",
      "1": "They are related but distinct concepts.",
      "2": "Printed numbers are not automatic evidence of validity."
    },
    "page": 54,
    "id": "c2-l3-08"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.3",
    "question": "Researchers find ice cream sales and drowning incidents rise together in summer. The most cautious explanation before claiming ice cream causes drowning is:",
    "options": [
      "A third variable (heat/swimming) may drive both trends",
      "Positive correlations are banned in public health reports",
      "Summer months cannot be studied with correlations alone",
      "Only ice-cream brand experiments are ethically allowed"
    ],
    "correct": 0,
    "correctFeedback": "Third variables can create spurious associations; correlation ≠ causation.",
    "wrongFeedback": {
      "1": "Positive correlations are statistically meaningful associations.",
      "2": "Seasonal data can be studied correlationally; causation is the caution.",
      "3": "Ethics do not require only brand experiments here."
    },
    "page": 50,
    "id": "c2-l3-09"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.4",
    "question": "A primate lab proposes a new stress paradigm. Which oversight body is specifically charged with animal care/use standards (not human IRB review)?",
    "options": [
      "IRB reviewing undergraduate survey consent form drafts",
      "IACUC evaluating humane animal research protocols",
      "A student club vote without scientific review rules",
      "Only a journal marketing team after paper acceptance"
    ],
    "correct": 1,
    "correctFeedback": "IACUC reviews animal care and use protocols.",
    "wrongFeedback": {
      "0": "IRB is for human participants research.",
      "2": "Club votes are not formal animal-ethics oversight.",
      "3": "Journal marketing is not IACUC review."
    },
    "page": 66,
    "id": "c2-l3-10"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.1",
    "question": "A theory predicts caffeine improves vigilance. The team states a testable prediction for a specific dose and task. That prediction is best labeled a:",
    "options": [
      "Circular definition that cannot be measured at all here",
      "Proven law that needs no further empirical data at all",
      "Hypothesis derived for empirical testing of the claim",
      "Confound deliberately built into the study design plan"
    ],
    "correct": 2,
    "correctFeedback": "A specific testable prediction derived from a theory is a hypothesis.",
    "wrongFeedback": {
      "0": "A dose/task prediction can be measured; it is not circular by default.",
      "1": "It is not yet a proven law.",
      "3": "A hypothesis is not a confound."
    },
    "page": 38,
    "id": "c2-l3-11"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.2",
    "question": "A national poll emails only luxury-gym members about 'typical adult exercise.' Which sampling problem most threatens claims about all adults?",
    "options": [
      "Perfect random sampling of the entire adult public",
      "Excess inter-rater reliability among email servers",
      "Too much experimental manipulation of gym membership",
      "Biased sampling overrepresenting a narrow subgroup"
    ],
    "correct": 3,
    "correctFeedback": "Sampling only luxury-gym members biases estimates for all adults.",
    "wrongFeedback": {
      "0": "This is not perfect random sampling of adults.",
      "1": "Email-server “reliability” is not the sampling threat.",
      "2": "No experimental manipulation of membership is described."
    },
    "page": 46,
    "id": "c2-l3-12"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.3",
    "question": "Why does random assignment help experiments support causal inference more than self-selected groups?",
    "options": [
      "It tends to balance lurking differences across groups",
      "It forces every participant toward identical DV scores",
      "It removes any need to define an independent variable",
      "It converts correlation r values into simple percentages"
    ],
    "correct": 0,
    "correctFeedback": "Random assignment helps equate groups on lurking variables, strengthening causal inference.",
    "wrongFeedback": {
      "1": "It does not force identical outcomes.",
      "2": "Experiments still need a defined IV.",
      "3": "Assignment does not convert r into percentages."
    },
    "page": 60,
    "id": "c2-l3-13"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.4",
    "question": "After a study using mild deception, researchers explain the true purpose, answer questions, and assess distress. This post-study process is:",
    "options": [
      "Optional storytelling never mentioned in ethics guidance",
      "Debriefing after deception or incomplete disclosure used",
      "A full substitute that can replace informed consent rules",
      "Only used in animal studies reviewed by IACUC committees"
    ],
    "correct": 1,
    "correctFeedback": "Debriefing follows deception/incomplete disclosure in human research.",
    "wrongFeedback": {
      "0": "Debriefing is a standard ethics expectation, not optional fluff.",
      "2": "Debriefing complements consent; it does not replace it.",
      "3": "Debriefing is a human-subjects practice, not IACUC-only."
    },
    "page": 65,
    "id": "c2-l3-14"
  },
  {
    "chapter": 2,
    "level": 3,
    "section": "2.2",
    "question": "Archival researchers analyze 20 years of hospital admission records they did not collect. Main advantage and tradeoff?",
    "options": [
      "Full control of original recording; only tiny samples",
      "Guaranteed causal proof; no privacy issues ever arise",
      "Large existing data access; limited control of recording",
      "Automatic random assignment inside every chart entry row"
    ],
    "correct": 2,
    "correctFeedback": "Archives can be large and efficient, but researchers lack control over original recording.",
    "wrongFeedback": {
      "0": "Archival work usually lacks control over original recording practices.",
      "1": "Archives do not guarantee causation; privacy/ethics still matter.",
      "3": "Historical charts do not embed random assignment."
    },
    "page": 48,
    "id": "c2-l3-15"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.2+2.3",
    "question": "Behaviorist Dr. Hale wants causal evidence that a token economy reduces classroom disruptions. Principal Lee offers a parent survey: “likes tokens” correlates with fewer office referrals (r = −0.35). A Freudian consultant urges interviewing each child’s latent motives instead. A structuralist intern proposes 1879-style introspection diaries as the DV. Two interpretations look tempting—treat the survey association as proof, or treat depth interviews as richer truth. Which next step actually supports a causal claim about the token system?",
    "options": [
      "Experimentally manipulate tokens and measure disruption rates",
      "Keep the survey; any |r| above 0.20 proves classroom causation",
      "Interview analysts about each child’s latent motives as proof",
      "Switch outcomes to structuralist introspection diaries (1879)"
    ],
    "correct": 0,
    "correctFeedback": "Causal claims about an intervention require experimental control/manipulation, not correlation or mismatched historical methods.",
    "wrongFeedback": {
      "1": "Correlation magnitude alone does not prove causation.",
      "2": "Motive interviews may be clinically interesting but do not establish token causation.",
      "3": "Introspection diaries are not a behaviorist disruption DV and do not fix causal design."
    },
    "id": "c2-l4-01"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.3+2.2",
    "question": "An I-O psychologist emails a leadership survey only to executives at one wealthy tech firm, then writes that results reveal “universal laws of leadership across humankind.” A WEIRD-aware reviewer flags the sample. A second reviewer notes a slide from description into causal overclaim without manipulation. A third suggests replacing the survey with one CEO case study “for better generalizability.” Sampling bias and overclaim both need fixing—what revision answers both concerns?",
    "options": [
      "Add more executives from the same firm and call it global",
      "Broaden roles/cultures sampled; temper universal causal wording",
      "Replace the survey with one CEO case for higher generalizability",
      "Drop informed consent because workplace studies never need IRBs"
    ],
    "correct": 1,
    "correctFeedback": "Widen sampling and avoid universal causal language without appropriate design.",
    "wrongFeedback": {
      "0": "Same-firm executives still fail diversity/WEIRD concerns.",
      "2": "A single case usually lowers, not raises, generalizability.",
      "3": "Workplace human research can still require ethics review/consent norms."
    },
    "id": "c2-l4-02"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.1+2.1",
    "question": "On a call-in show, the host says “science is just another opinion,” then cites a celebrity’s one-off sleep tip as equal to a peer-reviewed trial. A philosopher guest praises pure reason without observation. A behaviorist caller demands lever-press data for every claim. Using empiricism (Ch 1) and the scientific cycle (Ch 2), which reply best defends psychology as science without those distortions?",
    "options": [
      "Science means accepting authority quotes without observation",
      "Science forbids theories, allowing only one-shot anecdotes",
      "Science tests hypotheses via systematic observation/revision",
      "Science equals private introspection labs with no public methods"
    ],
    "correct": 2,
    "correctFeedback": "Scientific psychology tests hypotheses with systematic observation and revises with evidence.",
    "wrongFeedback": {
      "0": "Authority without observation is not empiricism.",
      "1": "Science uses theories and does not privilege single anecdotes.",
      "3": "Modern science emphasizes public, repeatable methods—not private-only introspection."
    },
    "id": "c2-l4-03"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.4+2.4",
    "question": "A hospital IRB reviews a memory study that withholds the full hypothesis until debriefing. The PI cites Watson’s Little Albert–era work as historical precedent for skipping consent. A nurse on the board notes Belmont-style respect for persons and OpenStax ethics on deception. A physician wants to skip IRB because “psychology is soft science.” Which decision best aligns with contemporary research ethics while still allowing limited deception when justified?",
    "options": [
      "Waive all consent because Little Albert set permanent precedent",
      "Ban every psychology study that uses any form of mild deception",
      "Skip IRB review because soft-science fields never need oversight",
      "Approve if consent, risk review, and debriefing standards hold"
    ],
    "correct": 3,
    "correctFeedback": "Limited deception can be allowed with IRB oversight, consent where appropriate, and debriefing—not historical free-passes.",
    "wrongFeedback": {
      "0": "Historical abuses are warnings, not precedents for skipping consent.",
      "1": "Ethics boards can allow carefully justified deception with safeguards.",
      "2": "Human-subjects psychology research still needs ethics oversight."
    },
    "id": "c2-l4-04"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.2+2.3",
    "question": "Cognitive researcher Mei compares two study strategies. She randomly assigns students to Strategy A or B, then measures exam scores. A Gestalt-oriented advisor says she must abandon randomization because “the whole classroom vibe” cannot be split. A correlational consultant says she should instead only survey how often students already use A vs B. A third voice claims random assignment is the same as random sampling. What is the best defense of Mei’s design?",
    "options": [
      "Random assignment supports causal inference on strategy effects",
      "Random assignment equals random sampling of the whole population",
      "Only surveys of existing habits can ever support causal claims",
      "Gestalt “wholes” forbid any experimental splitting of conditions"
    ],
    "correct": 0,
    "correctFeedback": "Random assignment to conditions supports causal claims about the manipulated strategy.",
    "wrongFeedback": {
      "1": "Assignment ≠ sampling; they answer different validity questions.",
      "2": "Surveys of existing habits are typically correlational, not causal.",
      "3": "Gestalt insights do not prohibit carefully controlled experiments."
    },
    "id": "c2-l4-05"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.3+2.5",
    "question": "A clinical psychologist wants to publish a case series on therapy progress and also run a rodent fear-conditioning study. A colleague confuses IRB and IACUC, saying one board covers both. Another argues that because Freud’s case studies “built the field,” animal welfare rules are optional for rats. A third claims APA ethics apply only to surveys. Which statement is most accurate across people vs animals?",
    "options": [
      "IACUC alone covers human cases plus rodent protocols alike",
      "IRB covers humans; IACUC covers vertebrate animal studies",
      "Freud case studies permanently exempt animal welfare rules",
      "APA ethics apply only to surveys, never to animal research"
    ],
    "correct": 1,
    "correctFeedback": "IRB oversees human research; IACUC oversees many vertebrate animal studies—distinct pathways.",
    "wrongFeedback": {
      "0": "IACUC does not replace IRB for human participants.",
      "2": "Historical case studies do not exempt modern animal welfare rules.",
      "3": "APA ethics extend beyond surveys; animal work has dedicated oversight."
    },
    "id": "c2-l4-06"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.2+2.2",
    "question": "A developmental psychologist observes playground aggression with a structured coding sheet (naturalistic observation). A humanistic teacher insists only self-actualization interviews are “real psychology.” A behaviorist visitor demands an immediate Skinner-box experiment with tokens. A correlationalist says observation can prove that recess length causes aggression if the r is large. Which evaluation is most accurate?",
    "options": [
      "Only humanistic interviews count as scientific psychology methods",
      "Large observational r values prove recess length causes aggression",
      "Observation can describe patterns but cannot alone prove causation",
      "Structured coding is invalid unless done inside a Skinner box only"
    ],
    "correct": 2,
    "correctFeedback": "Naturalistic observation is valuable for description but does not by itself establish causation.",
    "wrongFeedback": {
      "0": "Humanistic interviews are one approach, not the only scientific method.",
      "1": "Large r still does not prove causation.",
      "3": "Structured coding outside a Skinner box can still be valid observation."
    },
    "id": "c2-l4-07"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.1+2.4",
    "question": "Undergrad team designs a deception study on bystander helping. They plan to stage a fake emergency without consent language, film faces for a viral teaching clip, and skip debriefing “to keep the illusion pure.” One member cites structuralism’s private mind as justification for secrecy. Another cites functionalism’s “practical outcomes” to justify posting faces. What ethics revision is required before any IRB would likely proceed?",
    "options": [
      "Post faces publicly; functionalism prioritizes practical viral clips",
      "Skip debriefing forever so the illusion remains scientifically pure",
      "Cite structuralism’s private mind as a blanket waiver of consent",
      "Add consent where required, minimize harm, debrief, protect privacy"
    ],
    "correct": 3,
    "correctFeedback": "Deception studies still need ethics safeguards: consent/debriefing norms and privacy protection.",
    "wrongFeedback": {
      "0": "Functionalism does not authorize posting identifiable faces.",
      "1": "Debriefing is typically required after deception.",
      "2": "Structuralism is not an ethics waiver."
    },
    "id": "c2-l4-08"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.4+2.3",
    "question": "A sports psychologist claims a new visualization app “causes” faster race times after showing athletes who already bought the app run faster than non-buyers (self-selected). A critic notes missing random assignment. A fan argues buying proves motivation, so causation is settled. A historian says since Wundt timed reactions, any timing study is automatically causal. What is the core design flaw?",
    "options": [
      "Self-selection confounds the app with pre-existing differences",
      "Any timing measure since Wundt automatically proves app causation",
      "Motivation from buying removes all alternative explanations forever",
      "Critics must accept causation whenever a commercial app is studied"
    ],
    "correct": 0,
    "correctFeedback": "Self-selected app buyers differ in many ways; without assignment, causation is not established.",
    "wrongFeedback": {
      "1": "Historical reaction-time work does not make this comparison causal.",
      "2": "Motivation is itself a confound, not proof the app caused speed.",
      "3": "Commercial status does not settle causal inference."
    },
    "id": "c2-l4-09"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.2+2.1",
    "question": "A podcast claims Freud “invented the scientific method” and that modern hypothesis testing is just psychoanalytic free association in disguise. A guest counters that Wundt’s lab and later empiricism emphasize measurement and public methods. Another guest says Skinner proved hypotheses are unnecessary. Bridging history of psychology and research methods, which statement is most accurate?",
    "options": [
      "Freud’s free association permanently replaced all hypothesis testing",
      "Hypothesis testing is empirical and distinct from free association",
      "Skinner proved that scientific psychology never needs any hypotheses",
      "Wundt forbade measurement, so modern methods reject all empiricism"
    ],
    "correct": 1,
    "correctFeedback": "Scientific hypothesis testing is systematic and empirical—not equivalent to free association.",
    "wrongFeedback": {
      "0": "Psychoanalytic free association is not a replacement for experimental methods.",
      "2": "Behaviorism used hypotheses/predictions about behavior; it did not abolish them.",
      "3": "Wundt’s program emphasized measurement/introspection under controlled conditions."
    },
    "id": "c2-l4-10"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.3+2.4",
    "question": "A health psychologist plans a stress survey of nurses, plus a parallel mouse study of chronic noise. The hospital lawyer says one consent form covers humans and mice. An administrator wants to film nurses without telling them “for ecological validity.” A PI claims double-blind placebos are unethical in surveys. Which package of decisions is most defensible?",
    "options": [
      "One consent form legally covers both nurses and laboratory mice",
      "Covertly film nurses without notice to maximize ecological validity",
      "Separate human IRB/consent from animal IACUC; no covert filming",
      "Ban placebos in all psychology because surveys make them unethical"
    ],
    "correct": 2,
    "correctFeedback": "Humans and animals follow different oversight paths; covert filming without consent is ethically fraught.",
    "wrongFeedback": {
      "0": "Mice are not covered by a human consent form.",
      "1": "Secret filming of workers raises serious consent/privacy issues.",
      "3": "Placebos can be ethical in appropriate experimental contexts with oversight."
    },
    "id": "c2-l4-11"
  },
  {
    "chapter": 2,
    "level": 4,
    "section": "1.2+2.3",
    "question": "Two labs report opposite effects of a mindfulness app on test anxiety. Lab A used a waitlist control; Lab B compared app users who volunteered vs non-users. A structuralist blogger says replication is impossible because experience is private. A journal editor demands preregistration and clearer controls. Crossing schools-of-thought history with methods, what best explains Lab B’s weaker causal claim?",
    "options": [
      "Private experience means no study can ever be replicated or compared",
      "Waitlist controls are always unethical, so Lab A must be discarded",
      "Preregistration proves Lab B’s design is automatically causal/clean",
      "Volunteer vs non-user comparisons leave selection confounds open"
    ],
    "correct": 3,
    "correctFeedback": "Self-selected app users vs non-users introduce confounds; waitlist experiments are stronger for causation.",
    "wrongFeedback": {
      "0": "Private experience does not make all replication impossible.",
      "1": "Waitlist controls are commonly used and can be ethical with oversight.",
      "2": "Preregistration improves transparency; it does not fix selection confounds."
    },
    "id": "c2-l4-12"
  },
  {
    "chapter": 3,
    "level": 1,
    "section": "3.1",
    "question": "Genotype refers to _____; phenotype refers to _____.",
    "options": [
      "Genetic makeup; expressed traits",
      "Hormones only; neurons only",
      "Only environment; only culture",
      "Expressed traits; genetic makeup"
    ],
    "correct": 0,
    "correctFeedback": "Genotype is genetic constitution; phenotype is observable/expressed characteristics.",
    "wrongFeedback": {
      "1": "Hormones/neurons are systems, not the genotype/phenotype distinction.",
      "2": "Both genes and environment shape phenotype; terms are not culture synonyms.",
      "3": "That reverses the terms."
    },
    "page": 74,
    "id": "c3-l1-01"
  },
  {
    "chapter": 3,
    "level": 1,
    "section": "3.2",
    "question": "The part of the neuron that typically receives signals from other neurons is the:",
    "options": [
      "Dendrite",
      "Heart valve",
      "Adrenal cortex",
      "Myelin only"
    ],
    "correct": 0,
    "correctFeedback": "Dendrites receive synaptic input; axons typically send signals.",
    "wrongFeedback": {
      "1": "Irrelevant anatomy.",
      "2": "Endocrine tissue, not a neuronal receiving branch.",
      "3": "Myelin insulates axons; it is not the primary receiving structure."
    },
    "page": 78,
    "id": "c3-l1-02"
  },
  {
    "chapter": 3,
    "level": 1,
    "section": "3.2",
    "question": "An action potential is best described as:",
    "options": [
      "A type of glial scar exclusively",
      "An all-or-none electrochemical spike traveling down the axon",
      "A permanent change in DNA sequence",
      "A graded hormone drip only, contrary to the chapter definition"
    ],
    "correct": 1,
    "correctFeedback": "Action potentials are all-or-none electrical events along the axon.",
    "wrongFeedback": {
      "0": "Glia support neurons; scars are not action potentials.",
      "2": "DNA sequence changes are mutations, not spikes.",
      "3": "Hormones are chemical messengers in blood; different mechanism."
    },
    "page": 80,
    "id": "c3-l1-03"
  },
  {
    "chapter": 3,
    "level": 1,
    "section": "3.3",
    "question": "The CNS consists of the:",
    "options": [
      "Brain and spinal cord",
      "Pituitary and thyroid only",
      "Only spinal nerves outside the vertebrae",
      "Sympathetic nerves alone"
    ],
    "correct": 0,
    "correctFeedback": "Central nervous system = brain + spinal cord.",
    "wrongFeedback": {
      "1": "Those are endocrine glands.",
      "2": "Peripheral nerves are PNS.",
      "3": "Sympathetic is an autonomic PNS division."
    },
    "page": 84,
    "id": "c3-l1-04"
  },
  {
    "chapter": 3,
    "level": 1,
    "section": "3.3",
    "question": "Fight-or-flight activation is primarily the job of the:",
    "options": [
      "Sympathetic nervous system",
      "Parasympathetic nervous system",
      "Occipital lobe alone",
      "Schwann cells only"
    ],
    "correct": 0,
    "correctFeedback": "Sympathetic branch mobilizes energy for emergencies; parasympathetic restores rest-and-digest.",
    "wrongFeedback": {
      "1": "Parasympathetic conserves/restores.",
      "2": "Occipital lobe is visual cortex.",
      "3": "Schwann cells myelinate PNS axons."
    },
    "page": 84,
    "id": "c3-l1-05"
  },
  {
    "chapter": 3,
    "level": 1,
    "section": "3.4",
    "question": "Which lobe is most associated with visual processing?",
    "options": [
      "Frontal",
      "Temporal only for vision exclusively",
      "Parietal only for vision exclusively",
      "Occipital"
    ],
    "correct": 3,
    "correctFeedback": "Occipital cortex is the primary visual cortex region.",
    "wrongFeedback": {
      "0": "Frontal: motor, planning, prefrontal functions.",
      "1": "Temporal: audition, memory, language aspects—not primary vision.",
      "2": "Parietal: somatosensory/spatial—not primary vision."
    },
    "page": 86,
    "id": "c3-l1-06"
  },
  {
    "chapter": 3,
    "level": 2,
    "section": "3.1",
    "question": "Range of reaction asserts that genes set boundaries for traits while:",
    "options": [
      "Environment has no effect once genes are fixed",
      "Phenotype is identical to genotype for all traits",
      "Environment determines where within that range a phenotype falls",
      "Only identical twins can express phenotypes"
    ],
    "correct": 2,
    "correctFeedback": "OpenStax describes range of reaction as genes setting potential limits, with environment influencing where the phenotype falls within that range.",
    "wrongFeedback": {
      "0": "Gene–environment interaction is central; environment still shapes expression.",
      "1": "Phenotype reflects genes and environment together, not a simple copy of genotype.",
      "3": "Range of reaction applies broadly, not only to identical twins."
    },
    "page": 76,
    "id": "c3-l2-01"
  },
  {
    "chapter": 3,
    "level": 2,
    "section": "3.2",
    "question": "SSRIs are thought to relieve some depression symptoms primarily by:",
    "options": [
      "Cutting the corpus callosum — a common but inaccurate claim",
      "Reducing serotonin reuptake, prolonging synaptic serotonin action",
      "Blocking all GABA instantly like alcohol",
      "Destroying all dopamine receptors permanently"
    ],
    "correct": 1,
    "correctFeedback": "Many antidepressants inhibit serotonin reuptake at synapses.",
    "wrongFeedback": {
      "0": "Callosotomy is a surgical procedure, not an SSRI effect.",
      "2": "Alcohol affects GABA systems differently; not SSRI action.",
      "3": "That is not the SSRI mechanism of action."
    },
    "page": 82,
    "id": "c3-l2-02"
  },
  {
    "chapter": 3,
    "level": 2,
    "section": "3.4",
    "question": "Damage to the hippocampus is most likely to impair:",
    "options": [
      "Basic reflex arcs in the spinal cord only",
      "Pupil light reflexes exclusively",
      "Myelin production by Schwann cells only",
      "Formation of new declarative/episodic memories"
    ],
    "correct": 3,
    "correctFeedback": "Hippocampus is critical for consolidating new explicit memories.",
    "wrongFeedback": {
      "0": "Spinal reflexes can remain intact with hippocampal damage.",
      "1": "Light reflex involves midbrain pathways primarily.",
      "2": "Schwann cells are PNS glia; not hippocampus function."
    },
    "page": 92,
    "id": "c3-l2-03"
  },
  {
    "chapter": 3,
    "level": 2,
    "section": "3.3",
    "question": "After a stressful scare, heart rate slows and digestion resumes. Which system dominates this recovery?",
    "options": [
      "Only the somatic nervous system's motor neurons to limbs",
      "Only the occipital lobe",
      "Parasympathetic",
      "Sympathetic"
    ],
    "correct": 2,
    "correctFeedback": "Parasympathetic activity supports rest-and-digest recovery.",
    "wrongFeedback": {
      "0": "Somatic motor to limbs is voluntary movement, not visceral recovery.",
      "1": "Vision lobe does not drive autonomic recovery.",
      "3": "Sympathetic was dominant during the scare."
    },
    "page": 84,
    "id": "c3-l2-04"
  },
  {
    "chapter": 3,
    "level": 2,
    "section": "3.5",
    "question": "Compared with fast synaptic signaling, endocrine messages typically:",
    "options": [
      "Never affect behavior, which is not the best account",
      "Occur only inside one synaptic cleft",
      "Travel via blood and often act more slowly/longer",
      "Are electrical spikes on axons only"
    ],
    "correct": 2,
    "correctFeedback": "Hormones circulate and can have prolonged widespread effects.",
    "wrongFeedback": {
      "0": "Hormones strongly affect motivation, stress, development, etc.",
      "1": "Synaptic cleft signaling is neural, not the endocrine blood route.",
      "3": "Electrical axonal spikes are neural action potentials."
    },
    "page": 96,
    "id": "c3-l2-05"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.1",
    "question": "Twins raised apart score similarly on a spatial test, yet a twin raised with rich tutoring scores higher than genes alone would seem to allow. Which concept best captures gene–environment interplay here?",
    "options": [
      "Range of reaction: genes bound; environment shifts outcomes",
      "Genotype always identical to phenotype in every setting here",
      "Complete genetic determinism with zero environmental role",
      "Epigenetics as weekly DNA sequence rewrites in adulthood"
    ],
    "correct": 0,
    "correctFeedback": "Range of reaction: genotype sets bounds; environment influences where outcomes fall within them.",
    "wrongFeedback": {
      "1": "Phenotype is not a fixed copy of genotype across environments.",
      "2": "The tutoring effect shows environment still matters.",
      "3": "Epigenetics is not weekly rewriting of DNA sequence in that sense."
    },
    "page": 74,
    "id": "c3-l3-01"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.2",
    "question": "A neuron's membrane hits threshold after EPSPs summate; a full spike races down the axon. Which statement matches the all-or-none principle?",
    "options": [
      "Stronger stimuli make taller spikes above the threshold",
      "At threshold the spike is full amplitude—or else absent",
      "Action potentials travel only toward dendrites always",
      "Synapses use only electrical sparks, never chemicals"
    ],
    "correct": 1,
    "correctFeedback": "All-or-none: once threshold is reached, the action potential fires at full amplitude (or not at all).",
    "wrongFeedback": {
      "0": "Amplitude of a single spike does not scale up with “stronger” above threshold that way.",
      "2": "Propagation is axon-ward toward terminals, not dendrite-only.",
      "3": "Chemical synaptic transmission is central in standard neuron communication."
    },
    "page": 80,
    "id": "c3-l3-02"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.2",
    "question": "Drug A mimics serotonin at receptors; Drug B blocks dopamine receptors. Correct agonist/antagonist labels?",
    "options": [
      "A antagonist; B agonist—blocking always boosts signals",
      "Both agonists because any drug raises all transmission",
      "A agonist; B antagonist—mimic boosts, block reduces",
      "Both antagonists because only reuptake mechanisms count"
    ],
    "correct": 2,
    "correctFeedback": "Agonists mimic/facilitate receptor action; antagonists block/reduce it.",
    "wrongFeedback": {
      "0": "That reverses the labels.",
      "1": "Not all psychoactive drugs are agonists for all systems.",
      "3": "Reuptake is one mechanism; agonist/antagonist labels still apply at receptors."
    },
    "page": 84,
    "id": "c3-l3-03"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.3",
    "question": "During a near-miss traffic incident, Maya's heart races, pupils dilate, and digestion pauses. Which autonomic branch dominates this moment?",
    "options": [
      "Parasympathetic rest-and-digest calming response set",
      "Enteric system exclusively controlling speech output",
      "Somatic nervous system voluntary finger tapping only",
      "Sympathetic fight-or-flight mobilization responses"
    ],
    "correct": 3,
    "correctFeedback": "Sympathetic activation supports fight-or-flight mobilization.",
    "wrongFeedback": {
      "0": "Parasympathetic supports rest-and-digest, opposite this surge.",
      "1": "Enteric function is not “speech control.”",
      "2": "Somatic voluntary tapping does not explain this autonomic pattern."
    },
    "page": 88,
    "id": "c3-l3-04"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.4",
    "question": "After a stroke, Luis speaks in broken effortful phrases yet largely understands speech. Which region is most classically implicated?",
    "options": [
      "Broca's area damage disrupting speech production",
      "Wernicke's area damage yielding fluent empty speech",
      "Occipital damage eliminating all auditory processing",
      "Cerebellar damage erasing autobiographical episodes"
    ],
    "correct": 0,
    "correctFeedback": "Broca's aphasia classically impairs production while comprehension is relatively spared.",
    "wrongFeedback": {
      "1": "Wernicke's pattern is more fluent but comprehension-impaired.",
      "2": "Occipital cortex is primarily visual, not this aphasia pattern.",
      "3": "Cerebellum is not the classic locus for this aphasia profile."
    },
    "page": 92,
    "id": "c3-l3-05"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.4",
    "question": "A patient cannot form new long-term declarative memories after surgery that removed a bilateral medial temporal structure. Which structure is most associated?",
    "options": [
      "Amygdala as the sole site of visual edge detection work",
      "Hippocampus involved in forming new declarative memories",
      "Corpus callosum as the generator of muscle action spikes",
      "Spinal cord as the primary store of life episode records"
    ],
    "correct": 1,
    "correctFeedback": "Hippocampal damage is classically linked to impaired formation of new declarative memories.",
    "wrongFeedback": {
      "0": "Amygdala is not “sole visual edge detection.”",
      "2": "Corpus callosum connects hemispheres; it does not generate muscle spikes.",
      "3": "Spinal cord is not the primary autobiographical store."
    },
    "page": 94,
    "id": "c3-l3-06"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.3",
    "question": "Which pairing correctly contrasts CNS and PNS?",
    "options": [
      "CNS = autonomic only; PNS = brain plus spinal cord",
      "CNS = only muscles; PNS = only cerebral cortex gray",
      "CNS = brain and spinal cord; PNS = nerves outside",
      "CNS and PNS are identical labels for the same parts"
    ],
    "correct": 2,
    "correctFeedback": "CNS is brain and spinal cord; PNS is the nerves outside that central axis.",
    "wrongFeedback": {
      "0": "That reverses the definitions.",
      "1": "Neither definition matches CNS/PNS.",
      "3": "They are distinct divisions."
    },
    "page": 86,
    "id": "c3-l3-07"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.4",
    "question": "Split-brain research severing a major commissure helped reveal hemispheric specialization. Which structure was cut?",
    "options": [
      "Optic chiasm in every classic split-brain surgery case",
      "Myelin sheaths around every peripheral motor axon path",
      "Pituitary stalk as the only sensory input pathway used",
      "Corpus callosum linking the two cerebral hemispheres"
    ],
    "correct": 3,
    "correctFeedback": "Classic split-brain work involved cutting the corpus callosum.",
    "wrongFeedback": {
      "0": "Optic chiasm cutting is not the defining split-brain commissurotomy.",
      "1": "Peripheral myelin is not the hemispheric commissure.",
      "2": "Pituitary stalk is not the callosal connection."
    },
    "page": 90,
    "id": "c3-l3-08"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.5",
    "question": "Compared with synaptic neurotransmitters, endocrine hormones typically:",
    "options": [
      "Travel via blood and often affect broader, slower targets",
      "Act only inside one synaptic cleft for microseconds flat",
      "Are made only by spinal motor neurons during reflex arcs",
      "Never interact with brain or behavior under any condition"
    ],
    "correct": 0,
    "correctFeedback": "Hormones typically travel in the bloodstream and can have broader/slower effects than synaptic transmission.",
    "wrongFeedback": {
      "1": "That describes synaptic transmission more than endocrine action.",
      "2": "Hormones are not produced only by spinal motor neurons.",
      "3": "Hormones clearly interact with brain and behavior."
    },
    "page": 100,
    "id": "c3-l3-09"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.5",
    "question": "The hypothalamus directs the 'master gland' that regulates many other glands. That master gland is the:",
    "options": [
      "Adrenal cortex acting alone without pituitary input",
      "Pituitary gland under hypothalamic control pathways",
      "Pineal gland solely running voluntary motor plans",
      "Thalamus secreting insulin into the digestive tract"
    ],
    "correct": 1,
    "correctFeedback": "The pituitary, under hypothalamic control, is often called the master gland.",
    "wrongFeedback": {
      "0": "Adrenal cortex is important but not the master gland in this sense.",
      "2": "Pineal is linked to melatonin/timing, not voluntary motor plans.",
      "3": "Thalamus is a relay; insulin is pancreatic."
    },
    "page": 102,
    "id": "c3-l3-10"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.2",
    "question": "SSRIs are described as limiting serotonin reuptake. Functionally, that means they:",
    "options": [
      "Destroy all serotonin receptors within minutes of dosing",
      "Convert serotonin into dopamine inside each vesicle store",
      "Leave serotonin in the synapse longer by slowing reuptake",
      "Block sodium channels so no neuron can ever fire again"
    ],
    "correct": 2,
    "correctFeedback": "SSRIs slow reuptake so serotonin remains available in the synapse longer.",
    "wrongFeedback": {
      "0": "SSRIs are not described as instantly destroying receptors.",
      "1": "They do not convert serotonin into dopamine in vesicles.",
      "3": "That is not the SSRI reuptake mechanism."
    },
    "page": 82,
    "id": "c3-l3-11"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.4",
    "question": "A tumor presses on the occipital lobe. Which deficit is most expected?",
    "options": [
      "Inability to secrete any pituitary hormones only here",
      "Broca-type nonfluent speech with fully intact vision",
      "Loss of all spinal reflex arcs on both body sides now",
      "Primary problems in visual processing of seen stimuli"
    ],
    "correct": 3,
    "correctFeedback": "Occipital cortex is central to visual processing.",
    "wrongFeedback": {
      "0": "Pituitary secretion is not an occipital specialty.",
      "1": "Broca’s production issues are frontal-language, not occipital.",
      "2": "Spinal reflexes are not abolished by an occipital tumor."
    },
    "page": 96,
    "id": "c3-l3-12"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.3",
    "question": "After a stressful interview, Jordan's breathing slows, heart rate drops, and digestion resumes. Which branch is now more dominant?",
    "options": [
      "Parasympathetic rest-and-digest recovery processes",
      "Sympathetic fight-or-flight activation still rising",
      "Only somatic systems controlling stomach enzyme flow",
      "CNS withdrawing so the PNS ceases all body function"
    ],
    "correct": 0,
    "correctFeedback": "Parasympathetic activity supports rest-and-digest recovery after stress.",
    "wrongFeedback": {
      "1": "Sympathetic dominance would keep arousal high, not this recovery pattern.",
      "2": "Stomach enzymes are not “only somatic” control.",
      "3": "PNS does not shut off because CNS “withdraws.”"
    },
    "page": 89,
    "id": "c3-l3-13"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.1",
    "question": "Identical (monozygotic) twins share nearly all genes; fraternal (dizygotic) twins share about half on average. Twin studies use this difference mainly to:",
    "options": [
      "Prove environment never matters for any measured trait",
      "Estimate genetic vs environmental trait variation size",
      "Show DNA sequences rewrite each night during REM sleep",
      "Replace experimental psychology with genealogy charting"
    ],
    "correct": 1,
    "correctFeedback": "Twin comparisons help estimate genetic versus environmental contributions to variation.",
    "wrongFeedback": {
      "0": "Twin studies do not prove environment is irrelevant.",
      "2": "That is not what twin designs show.",
      "3": "They complement, not replace, experimental psychology."
    },
    "page": 76,
    "id": "c3-l3-14"
  },
  {
    "chapter": 3,
    "level": 3,
    "section": "3.4",
    "question": "Damage near the temporal lobe disrupts understanding spoken language while speech remains relatively fluent but empty. This pattern is most associated with:",
    "options": [
      "Broca's aphasia from frontal motor-speech impairment",
      "Complete spinal transection ending cortical language",
      "Wernicke's aphasia affecting language comprehension",
      "Cerebellar lesions that only slow finger-tapping rate"
    ],
    "correct": 2,
    "correctFeedback": "Wernicke's aphasia classically impairs comprehension with relatively fluent but empty speech.",
    "wrongFeedback": {
      "0": "Broca's is more nonfluent production with relatively spared comprehension.",
      "1": "Spinal transection is not this cortical language pattern.",
      "3": "Finger-tapping slowing is not the language-comprehension pattern."
    },
    "page": 93,
    "id": "c3-l3-15"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "2.3+3.2",
    "question": "Dr. Ortiz randomly assigns rats to enriched vs standard cages, then measures dendritic spine density in cortex. A critic says correlation between cage type and spines is enough and randomization is unnecessary. A Freudian consultant wants dream reports from the rats. An IRB clerk wrongly files the protocol as human-only. What best defends the design’s causal goal about experience and neural structure?",
    "options": [
      "Random assignment lets cage enrichment be tested as a causal factor",
      "Any cage–spine correlation alone proves enrichment causes all changes",
      "Rat dream reports are required before claiming any neural plasticity",
      "Human IRB review alone is the correct board for vertebrate rat work"
    ],
    "correct": 0,
    "correctFeedback": "Manipulating enrichment with assignment supports causal claims about experience and neural structure.",
    "wrongFeedback": {
      "1": "Correlation without control does not prove causation.",
      "2": "Dream reports are not required for this plasticity design.",
      "3": "Vertebrate animal work typically needs IACUC-style oversight, not only human IRB."
    },
    "id": "c3-l4-01"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "1.2+3.4",
    "question": "A patient after stroke speaks in short, effortful phrases with impaired production but relatively better comprehension. A behaviorist aide says only reinforcement history matters, so lesion location is irrelevant. A phrenologist visitor maps a bump over “talkativeness.” A cognitive neurologist suspects Broca-area damage. Integrating history of localization debates with modern biopsychology, which conclusion is best supported?",
    "options": [
      "Phrenology bumps remain the gold standard for localizing speech",
      "Left frontal production networks (Broca’s) fit this aphasia pattern",
      "Reinforcement history alone explains aphasia; lesions never matter",
      "Comprehension-only Wernicke damage best fits effortful short phrases"
    ],
    "correct": 1,
    "correctFeedback": "Nonfluent/effortful production with better comprehension fits a Broca-type pattern.",
    "wrongFeedback": {
      "0": "Phrenology is not modern localization science.",
      "2": "Lesion location is highly relevant in aphasia.",
      "3": "Wernicke-type patterns emphasize comprehension/fluent jargon issues differently."
    },
    "id": "c3-l4-02"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "2.4+3.5",
    "question": "A drug trial for anxiety uses a double-blind placebo design (methods) while measuring amygdala BOLD responses (biopsych). A journalist claims placebos prove “the mind is not biological.” A dualist philosopher says brain scans cannot relate to anxiety. A Skinnerian says only lever presses count, so fMRI is meaningless. Which integrative reading is most accurate?",
    "options": [
      "Placebos prove anxiety is non-biological and scans are irrelevant",
      "Dualism forbids any link between BOLD signals and reported anxiety",
      "Placebo and drug effects can both involve measurable brain changes",
      "Only lever presses are valid; fMRI can never inform anxiety research"
    ],
    "correct": 2,
    "correctFeedback": "Psychological interventions and placebos can have biological correlates; methods and neuroscience connect.",
    "wrongFeedback": {
      "0": "Placebos do not prove the mind is non-biological.",
      "1": "Contemporary biopsychology links brain measures with experience/behavior.",
      "3": "Behavior matters, but neuroimaging can still inform emotion research."
    },
    "id": "c3-l4-03"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "1.3+3.3",
    "question": "An evolutionary psychologist argues jealousy has adaptive functions. A critic says OpenStax biopsych’s nature–nurture and genetics sections prove genes alone fix jealousy with no environment. A behaviorist says only punishment histories matter. A survey finds WEIRD samples dominate the jealousy literature. What tempered conclusion fits best?",
    "options": [
      "Genes alone fix jealousy; environments never influence the trait",
      "Only punishment histories can explain jealousy across all cultures",
      "WEIRD samples prove evolutionary claims need no further testing",
      "Genes and environments interact; sample diversity still matters"
    ],
    "correct": 3,
    "correctFeedback": "Biopsychology emphasizes gene–environment interplay; sampling limits still constrain claims.",
    "wrongFeedback": {
      "0": "Environments matter; genes are not sole fixed causes.",
      "1": "Behaviorist learning is one lens, not the only explanation.",
      "2": "WEIRD limits increase—not remove—the need for careful testing."
    },
    "id": "c3-l4-04"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "2.2+3.1",
    "question": "Students debate whether resting membrane potential is “just philosophy.” One cites empiricism: ion measures and recordings are observations. Another says structuralism’s introspection can replace electrophysiology. A third confuses correlation of neuron firing with proof that one thought caused the spike. Bridging scientific method and neural basics, which statement is sound?",
    "options": [
      "Membrane potentials are empirically measured, not mere speculation",
      "Introspection alone replaces the need for electrophysiology measures",
      "Any correlation of thoughts and spikes proves one thought caused them",
      "Empiricism forbids measuring ions because they are not experiences"
    ],
    "correct": 0,
    "correctFeedback": "Neural membrane phenomena are studied with empirical measurement techniques.",
    "wrongFeedback": {
      "1": "Introspection does not replace electrophysiology.",
      "2": "Correlation of timing does not by itself prove a specific causal thought→spike story.",
      "3": "Empiricism supports measurement of physical neural variables."
    },
    "id": "c3-l4-05"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "2.4+3.4",
    "question": "A surgeon maps language areas before tumor removal using cortical stimulation while the patient names pictures. A historian likens this to phrenology. An ethicist asks about consent under surgical stress. A methods student asks whether this is an experiment with random assignment. What best captures the procedure’s scientific/ethical status?",
    "options": [
      "Phrenology bumps are being used as the primary mapping method",
      "Clinical mapping with consent; not a randomized causal experiment",
      "Random assignment to tumor sites is required for clinical mapping",
      "Consent is unnecessary because intraoperative talk is not research"
    ],
    "correct": 1,
    "correctFeedback": "Intraoperative mapping is clinical/neuroscientific practice needing consent—not classic randomized experiments or phrenology.",
    "wrongFeedback": {
      "0": "Modern mapping is not phrenology.",
      "2": "Tumor location is not randomly assigned.",
      "3": "Consent/ethics remain central in clinical research/practice contexts."
    },
    "id": "c3-l4-06"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "1.2+3.2",
    "question": "A textbook figure shows action potentials as all-or-none. A student says this proves behaviorism wrong because “mind sparks.” Another says Gestalt wholes mean membrane thresholds cannot be studied in parts. A third confuses neurotransmitters with hormones traveling only in blood. Which clarification is most accurate?",
    "options": [
      "Gestalt theory forbids studying membrane thresholds in any reduced form",
      "Neurotransmitters travel only in blood; hormones act only in one synapse",
      "All-or-none spikes are cellular; they don’t refute behaviorism at root",
      "Action potentials prove introspection is the only valid psychology method"
    ],
    "correct": 2,
    "correctFeedback": "All-or-none action potentials describe neuron firing; they don’t by themselves settle school-of-thought debates.",
    "wrongFeedback": {
      "0": "Cellular physiology can be studied analytically alongside broader approaches.",
      "1": "Neurotransmitters act at synapses; hormones typically travel in blood—roles are swapped in that option.",
      "3": "Neural physiology does not make introspection the only method."
    },
    "id": "c3-l4-07"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "2.3+3.5",
    "question": "Researchers test whether caffeine improves vigilance. They use a double-blind design and also record EEG. A sleep-deprived group is included. A critic says any arousal increase proves caffeine is a depressant “by paradox.” An ethicist worries about coercion of sleep-deprived students. A dualist says EEG cannot relate to vigilance reports. Best integrative judgment?",
    "options": [
      "Paradoxically, arousal increases prove caffeine must be a depressant",
      "EEG is metaphysically barred from relating to any vigilance self-report",
      "Sleep-deprived students may be coerced; ethics review can be ignored",
      "Caffeine is a stimulant; link arousal measures with ethics oversight"
    ],
    "correct": 3,
    "correctFeedback": "Caffeine is classified as a stimulant; combining behavioral/EEG measures is coherent with ethical oversight.",
    "wrongFeedback": {
      "0": "Increased arousal fits stimulant—not depressant—classification.",
      "1": "Psychophysiology routinely links EEG with performance/reports.",
      "2": "Vulnerable/fatigued participants heighten—not remove—ethics needs."
    },
    "id": "c3-l4-08"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "1.4+3.3",
    "question": "A twin study reports higher concordance for a trait in identical than fraternal twins. A newspaper headline: “Gene for X found; environment irrelevant.” A behavior geneticist notes shared environments and epigenetics caveats. An IRB chair notes privacy of genetic data. A phrenologist offers skull measurements as replication. What is the soundest reading?",
    "options": [
      "Higher MZ concordance suggests genetic influence, not environment-zero",
      "Headlines correctly prove environment never influences trait X whatsoever",
      "Phrenology skull measures are the proper replication of twin designs",
      "Genetic privacy rules never apply once any twin study gets published"
    ],
    "correct": 0,
    "correctFeedback": "Twin concordance patterns suggest genetic influence but do not erase environment or ethics/privacy issues.",
    "wrongFeedback": {
      "1": "Environment remains relevant; headlines overclaim.",
      "2": "Phrenology is not a twin-study replication.",
      "3": "Genetic privacy remains important."
    },
    "id": "c3-l4-09"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "2.1+3.4",
    "question": "A methods class critiques a blog that claims “one fMRI blob proves free will is false.” Students note reverse inference risks, small-N issues, and overclaim. A historian says James’s functionalism already settled free will. A cell physiologist says only single-neuron spikes count as data. What critique best combines research literacy with biopsych limits?",
    "options": [
      "James’s functionalism permanently settled all free-will neuroscience",
      "One blob underdetermines free-will metaphysics; methods limits apply",
      "Only single-neuron spikes can ever count as legitimate neural data",
      "Reverse inference is always perfect whenever the blob looks colorful"
    ],
    "correct": 1,
    "correctFeedback": "Imaging results are informative but do not by themselves settle metaphysical free-will claims; methodological limits matter.",
    "wrongFeedback": {
      "0": "Historical functionalism did not settle modern imaging debates.",
      "2": "Multiple levels (systems imaging, cells) can be informative.",
      "3": "Reverse inference is fallible, not perfect."
    },
    "id": "c3-l4-10"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "1.2+3.5",
    "question": "A clinical team debates SSRIs for depression. A pure behaviorist says drugs are irrelevant because only reinforcement schedules matter. A dualist says chemicals cannot affect “mind.” A methods advisor asks for randomized controlled evidence. Integrating schools, biopsych, and methods, which stance is most consistent with OpenStax-style biopsychology?",
    "options": [
      "Reinforcement schedules alone make all drug trials scientifically void",
      "Dualism proves neurochemistry can never influence reported mood",
      "Brain chemistry can relate to mood; RCTs test treatment claims",
      "RCTs are unnecessary once a school of thought prefers talk therapy"
    ],
    "correct": 2,
    "correctFeedback": "Biopsychology links neurochemistry and behavior/experience; treatment claims still need rigorous tests.",
    "wrongFeedback": {
      "0": "Learning matters, but it does not void psychopharmacology.",
      "1": "Contemporary biopsychology rejects strict dualist separation here.",
      "3": "Preferred therapy schools do not erase the value of RCTs."
    },
    "id": "c3-l4-11"
  },
  {
    "chapter": 3,
    "level": 4,
    "section": "2.4+3.2",
    "question": "An experimenter measures reaction times after giving a supposed “smart drug,” but the bottle is placebo and both experimenter and participant know it (not blind). A neurotransmitter lecture earlier that day primes participants to expect faster times. Ethics are fine (consent), but validity is shaky. Crossing methods bias with biopsych expectations, what is the main threat?",
    "options": [
      "Consent alone guarantees the drug’s causal effect on reaction time",
      "Knowing the bottle is placebo makes neurotransmitter priming impossible",
      "Reaction time cannot be a DV in any psychology experiment at all",
      "Expectancy/placebo and lack of blinding threaten internal validity"
    ],
    "correct": 3,
    "correctFeedback": "Non-blind placebo designs are highly vulnerable to expectancy effects.",
    "wrongFeedback": {
      "0": "Consent is ethics, not proof of a pharmacological effect.",
      "1": "Priming/expectancy can still operate with placebos.",
      "2": "Reaction time is a classic psychology DV."
    },
    "id": "c3-l4-12"
  },
  {
    "chapter": 4,
    "level": 1,
    "section": "4.1",
    "question": "Consciousness is best defined as:",
    "options": [
      "Awareness of internal and external stimuli",
      "A synonym for coma",
      "Only deep sleep without dreaming",
      "Exclusive to hypnosis"
    ],
    "correct": 0,
    "correctFeedback": "Consciousness means awareness of internal and external stimuli.",
    "wrongFeedback": {
      "1": "Coma is a profound loss of awareness—not the definition of consciousness.",
      "2": "Sleep is a state on the consciousness continuum, not the definition of consciousness.",
      "3": "Hypnosis is one altered state, not the whole definition."
    },
    "page": 110,
    "id": "c4-l1-01"
  },
  {
    "chapter": 4,
    "level": 1,
    "section": "4.1",
    "question": "The brain's master circadian clock is largely attributed to the:",
    "options": [
      "Broca's area",
      "Suprachiasmatic nucleus (SCN)",
      "Adrenal cortex exclusively",
      "Occipital lobe alone"
    ],
    "correct": 1,
    "correctFeedback": "The SCN in the hypothalamus is the primary circadian pacemaker.",
    "wrongFeedback": {
      "0": "Broca's area is language production.",
      "2": "Adrenals participate in rhythms but are not the master neural clock.",
      "3": "Occipital lobe processes vision, not the master clock."
    },
    "page": 112,
    "id": "c4-l1-02"
  },
  {
    "chapter": 4,
    "level": 1,
    "section": "4.3",
    "question": "Sleep spindles and K-complexes are characteristic of:",
    "options": [
      "Wake with eyes open only",
      "NREM Stage 2",
      "Coma exclusively",
      "REM only"
    ],
    "correct": 1,
    "correctFeedback": "Stage 2 NREM features spindles and K-complexes.",
    "wrongFeedback": {
      "0": "Those waveforms define Stage 2 sleep, not ordinary wake.",
      "2": "Not the definition of coma EEG.",
      "3": "REM has different EEG/EOG/EMG signatures."
    },
    "page": 118,
    "id": "c4-l1-03"
  },
  {
    "chapter": 4,
    "level": 1,
    "section": "4.3",
    "question": "REM sleep is associated with:",
    "options": [
      "Vivid dreaming and muscle atonia",
      "Complete absence of brain activity",
      "Peak slow-wave delta only",
      "Only sleepwalking episodes"
    ],
    "correct": 0,
    "correctFeedback": "REM: vivid dreams, rapid eyes, paralyzed major muscles, active EEG.",
    "wrongFeedback": {
      "1": "Brain is highly active in REM.",
      "2": "Deep slow-wave is NREM Stage 3.",
      "3": "Sleepwalking is typically an NREM parasomnia."
    },
    "page": 118,
    "id": "c4-l1-04"
  },
  {
    "chapter": 4,
    "level": 1,
    "section": "4.4",
    "question": "Obstructive sleep apnea involves:",
    "options": [
      "Repeated breathing stops due to airway blockage during sleep",
      "Excessive melatonin production as the sole cause",
      "Irresistible daytime sleep attacks as the primary definition",
      "Only night terrors in children"
    ],
    "correct": 0,
    "correctFeedback": "OSA: airway collapse/obstruction interrupts breathing in sleep.",
    "wrongFeedback": {
      "1": "Melatonin is not the defining cause of OSA.",
      "2": "That describes narcolepsy more than apnea.",
      "3": "Night terrors are a different parasomnia."
    },
    "page": 124,
    "id": "c4-l1-05"
  },
  {
    "chapter": 4,
    "level": 1,
    "section": "4.5",
    "question": "Needing more of a drug to get the same effect is called:",
    "options": [
      "Sleep spindle",
      "Random assignment",
      "Tolerance",
      "Latent content"
    ],
    "correct": 2,
    "correctFeedback": "Tolerance: diminished response with repeated use, often needing higher doses.",
    "wrongFeedback": {
      "0": "Spindles are Stage 2 EEG features.",
      "1": "Random assignment is a research design tool.",
      "3": "Latent content is Freudian dream theory."
    },
    "page": 126,
    "id": "c4-l1-06"
  },
  {
    "chapter": 4,
    "level": 2,
    "section": "4.2",
    "question": "Restorative theories of sleep emphasize that sleep:",
    "options": [
      "Has no link to memory processes",
      "Is identical to anesthesia mechanisms always",
      "Supports physiological repair and neural/cognitive restoration",
      "Exists only to waste time — a common but inaccurate claim"
    ],
    "correct": 2,
    "correctFeedback": "Restorative/cognitive views stress recovery and plasticity/memory roles.",
    "wrongFeedback": {
      "0": "Much evidence links sleep and memory consolidation.",
      "1": "Sleep is not the same as general anesthesia.",
      "3": "Sleep is biologically regulated and functional."
    },
    "page": 114,
    "id": "c4-l2-01"
  },
  {
    "chapter": 4,
    "level": 2,
    "section": "4.3",
    "question": "Activation-synthesis theory proposes dreams result from:",
    "options": [
      "Exact replay of repressed wishes only",
      "EEG equipment creating stories",
      "Cortex interpreting chaotic brainstem activation during sleep",
      "Digestive gases exclusively, contrary to the chapter definition"
    ],
    "correct": 2,
    "correctFeedback": "Hobson and McCarley's activation-synthesis: cortex makes sense of neural activation.",
    "wrongFeedback": {
      "0": "That is closer to classical Freudian wish fulfillment.",
      "1": "Dreams occur without EEG machines.",
      "3": "Not a serious modern dream theory."
    },
    "page": 120,
    "id": "c4-l2-02"
  },
  {
    "chapter": 4,
    "level": 2,
    "section": "4.5",
    "question": "Alcohol is classified primarily as a:",
    "options": [
      "Stimulant that always increases GABA blockers",
      "Depressant of CNS activity",
      "Opioid receptor agonist like morphine exactly",
      "Non-psychoactive vitamin"
    ],
    "correct": 1,
    "correctFeedback": "Alcohol is a depressant (with complex pharmacology including GABA facilitation).",
    "wrongFeedback": {
      "0": "It is not classified as a stimulant.",
      "2": "Opioids are a different drug class.",
      "3": "Alcohol is psychoactive."
    },
    "page": 128,
    "id": "c4-l2-03"
  },
  {
    "chapter": 4,
    "level": 2,
    "section": "4.1",
    "question": "Melatonin release from the pineal is typically:",
    "options": [
      "Highest at bright midday only",
      "Produced by the cerebellum exclusively",
      "Unrelated to light",
      "Higher in darkness, promoting sleepiness, gated via SCN pathways"
    ],
    "correct": 3,
    "correctFeedback": "Light suppresses melatonin; darkness permits rise—SCN-linked pathway.",
    "wrongFeedback": {
      "0": "Bright light suppresses melatonin.",
      "1": "Pineal, not cerebellum, secretes melatonin.",
      "2": "Light is a key zeitgeber for this system."
    },
    "page": 112,
    "id": "c4-l2-04"
  },
  {
    "chapter": 4,
    "level": 2,
    "section": "4.6",
    "question": "Social-cognitive theories of hypnosis emphasize:",
    "options": [
      "That hypnosis deletes all memories permanently",
      "That meditation is identical to Stage 3 sleep",
      "Role expectations, imagination, and compliance—not a unique trance brain state alone",
      "That hypnosis always requires opioids"
    ],
    "correct": 2,
    "correctFeedback": "Social-cognitive view: hypnotic behavior reflects expectations and roles; dissociation views propose split awareness.",
    "wrongFeedback": {
      "0": "Hypnosis does not permanently erase all memory.",
      "1": "Meditation is not deep slow-wave sleep by definition.",
      "3": "Hypnosis is not opioid administration."
    },
    "page": 134,
    "id": "c4-l2-05"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.2",
    "question": "Night-shift nurse Farah feels alert at 3 a.m. after weeks on nights, then crashes on days off. Which structure is the master circadian pacemaker most relevant here?",
    "options": [
      "Suprachiasmatic nucleus (SCN) in the hypothalamus",
      "Hippocampus storing only declarative word-list items",
      "Broca's area timing speech articulation cycle rates",
      "Adrenal medulla secreting melatonin each morning"
    ],
    "correct": 0,
    "correctFeedback": "The SCN in the hypothalamus is the master circadian pacemaker.",
    "wrongFeedback": {
      "1": "Hippocampus is memory-related, not the master clock.",
      "2": "Broca’s area is speech production, not circadian pacing.",
      "3": "Melatonin is associated with the pineal, not adrenal medulla mornings."
    },
    "page": 116,
    "id": "c4-l3-01"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.3",
    "question": "EEG shows sleep spindles and K-complexes; the sleeper is hard to wake but not in deepest slow-wave sleep. Most likely stage?",
    "options": [
      "REM sleep with atonia and high dream-report likelihood",
      "NREM Stage 2 with spindles and K-complex markers",
      "NREM Stage 3 dominated by high-amplitude delta waves",
      "Relaxed wakefulness with dominant beta activity only"
    ],
    "correct": 1,
    "correctFeedback": "Sleep spindles and K-complexes characterize NREM Stage 2.",
    "wrongFeedback": {
      "0": "REM has different EEG/eye-movement/atonia features.",
      "2": "Stage 3 is delta-dominant slow-wave sleep.",
      "3": "Beta-dominant relaxed wakefulness is not Stage 2 sleep."
    },
    "page": 120,
    "id": "c4-l3-02"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.3",
    "question": "Toward morning, Jin's sleep periods show rapid eye movements, EEG resembling wake, and temporary paralysis of major muscles. This describes:",
    "options": [
      "NREM Stage 1 hypnagogic imagery lasting all night long",
      "Deep Stage 3 slow-wave sleep without eye movements",
      "REM sleep with atonia and higher dream report odds",
      "A seizure disorder unrelated to sleep architecture norms"
    ],
    "correct": 2,
    "correctFeedback": "REM features include REMs, wake-like EEG, and muscle atonia.",
    "wrongFeedback": {
      "0": "Stage 1 is not defined by this REM triad all night.",
      "1": "Deep NREM lacks this REM pattern.",
      "3": "The description matches normal REM physiology, not a seizure label."
    },
    "page": 122,
    "id": "c4-l3-03"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.4",
    "question": "Mr. Chen snores loudly, gasps, and shows repeated breathing pauses in sleep clinic polysomnography. First-line mechanical treatment often discussed is:",
    "options": [
      "SCN surgery aimed at resetting melatonin timing clocks",
      "Stimulant stacking without evaluating airway blockage",
      "Total deprivation presented as curing breathing pauses",
      "CPAP used to keep the airway open during apnea events"
    ],
    "correct": 3,
    "correctFeedback": "CPAP is a common mechanical treatment for obstructive sleep apnea.",
    "wrongFeedback": {
      "0": "SCN surgery is not apnea first-line care.",
      "1": "Ignoring airway obstruction is unsafe/misdirected.",
      "2": "Deprivation does not treat obstructive pauses."
    },
    "page": 128,
    "id": "c4-l3-04"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.4",
    "question": "Lila suddenly collapses with muscle weakness when laughing, and has irresistible sleep attacks by day. Which disorder cluster fits best?",
    "options": [
      "Narcolepsy, often with cataplexy in emotional moments",
      "Insomnia defined only as weekend sleep extension time",
      "Night terrors only in REM with full detailed recall",
      "Sleep apnea proven solely by caffeine craving scores"
    ],
    "correct": 0,
    "correctFeedback": "Narcolepsy often includes daytime sleep attacks; cataplexy can be triggered by emotion.",
    "wrongFeedback": {
      "1": "Weekend extension is not this collapse/sleep-attack pattern.",
      "2": "Night terrors are not the best fit for this daytime/cataplexy picture.",
      "3": "Caffeine craving does not diagnose apnea."
    },
    "page": 130,
    "id": "c4-l3-05"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.5",
    "question": "Alcohol plus benzodiazepines both suppress CNS activity. Combining them is especially dangerous because they are:",
    "options": [
      "Stimulants that cancel each other and are always very safe",
      "Depressants whose combined suppression can slow breathing",
      "Opioids that only block peripheral pain receptor sites now",
      "Hallucinogens that only alter color without any CNS risk"
    ],
    "correct": 1,
    "correctFeedback": "Both are depressants; combined CNS/respiratory suppression raises danger.",
    "wrongFeedback": {
      "0": "They are not stimulants that safely cancel.",
      "2": "Classifying both as peripheral-only opioids is wrong.",
      "3": "They are not primarily hallucinogens in this risk framing."
    },
    "page": 134,
    "id": "c4-l3-06"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.5",
    "question": "A college student uses amphetamine to pull an all-nighter, feeling wired and focused. Pharmacologically this fits which class?",
    "options": [
      "Depressant slowing neural activity and reaction times",
      "Antipsychotic antagonist used only in schizophrenia care",
      "Stimulant increasing arousal and alertness levels",
      "Hormone identical to endogenous melatonin at nightfall"
    ],
    "correct": 2,
    "correctFeedback": "Amphetamines are stimulants that increase arousal/alertness.",
    "wrongFeedback": {
      "0": "Depressants reduce activity; amphetamine does the opposite.",
      "1": "Antipsychotic use-case is not this all-nighter stimulant profile.",
      "3": "Amphetamine is not melatonin."
    },
    "page": 136,
    "id": "c4-l3-07"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.3",
    "question": "Freud would say a dream's remembered storyline is manifest content, while hidden wishes are latent. Hobson's activation-synthesis instead emphasizes:",
    "options": [
      "That dreams have no relation to brain activity at all",
      "That Stage 3 delta waves equal hypnotic trance states",
      "That only repressed childhood memories make spindles",
      "Brain story-making from REM-related neural activation"
    ],
    "correct": 3,
    "correctFeedback": "Activation-synthesis emphasizes constructing a dream narrative from REM-related activation.",
    "wrongFeedback": {
      "0": "Activation-synthesis is explicitly about brain activity.",
      "1": "Delta/hypnosis equivalence is not the theory’s claim.",
      "2": "Spindles are not explained as only repressed memories."
    },
    "page": 124,
    "id": "c4-l3-08"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.6",
    "question": "In a stage hypnosis show, skeptics argue subjects mainly enact expected roles. This social-cognitive view contrasts with which alternative account?",
    "options": [
      "Dissociation: a split in awareness during hypnosis shows",
      "Activation-synthesis of REM dreams during the stage show",
      "Pure genetic determination of every hypnotic suggestion",
      "IACUC rules governing undergraduate survey deception work"
    ],
    "correct": 0,
    "correctFeedback": "Social-cognitive role accounts are often contrasted with dissociation accounts of hypnosis.",
    "wrongFeedback": {
      "1": "Activation-synthesis is a dream theory, not the main hypnosis contrast here.",
      "2": "Hypnosis debates are not settled by pure genetic determinism.",
      "3": "IACUC is animal oversight, irrelevant to this contrast."
    },
    "page": 140,
    "id": "c4-l3-09"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.1",
    "question": "Consciousness in OpenStax terms is best framed as awareness of internal and external stimuli. Which example best fits an altered state continuum (not ordinary focused waking)?",
    "options": [
      "Filling a routine spreadsheet while fully alert at midday",
      "Deep meditation shifting attention and awareness patterns",
      "Reflexively withdrawing a hand from a hot stove plate only",
      "A single knee-jerk reflex recorded in a neurology clinic"
    ],
    "correct": 1,
    "correctFeedback": "Meditation is a commonly discussed altered/shifted state of awareness.",
    "wrongFeedback": {
      "0": "Ordinary alert work is not the altered-state example sought.",
      "2": "A simple nociceptive reflex is not an altered state of consciousness.",
      "3": "A knee-jerk is a reflex, not an altered conscious state."
    },
    "page": 112,
    "id": "c4-l3-10"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.2",
    "question": "Melatonin rises in darkness and supports sleep timing. Which gland secretes it under SCN-linked control?",
    "options": [
      "Thyroid gland secreting melatonin as its main hormone",
      "Pancreas releasing melatonin to digest carbohydrates",
      "Pineal gland releasing melatonin tied to light/dark",
      "Adrenal cortex releasing melatonin in fight-or-flight"
    ],
    "correct": 2,
    "correctFeedback": "The pineal gland secretes melatonin related to dark/light timing.",
    "wrongFeedback": {
      "0": "Thyroid hormones are not melatonin.",
      "1": "Pancreas is not the melatonin source.",
      "3": "Adrenal cortex is not the melatonin gland in this pathway."
    },
    "page": 118,
    "id": "c4-l3-11"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.5",
    "question": "Opioids relieve pain and can produce euphoria but carry high dependence risk. Which statement is most accurate in that class context?",
    "options": [
      "Opioids are CNS stimulants identical to caffeine in action",
      "Opioids are non-psychoactive vitamins required in the diet",
      "Opioids never affect the brain—only peripheral skin sensors",
      "Opioids act on opioid receptors; overdose slows breath rate"
    ],
    "correct": 3,
    "correctFeedback": "Opioids act on opioid receptors; respiratory depression is a key overdose risk.",
    "wrongFeedback": {
      "0": "Opioids are not caffeine-like stimulants.",
      "1": "They are psychoactive drugs, not dietary vitamins.",
      "2": "They clearly affect the brain/CNS."
    },
    "page": 138,
    "id": "c4-l3-12"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.4",
    "question": "CBT-I and sleep hygiene are often first-line for chronic difficulty falling/staying asleep without another primary disorder. That presentation is labeled:",
    "options": [
      "Insomnia involving problems initiating or maintaining sleep",
      "Narcolepsy with obligatory cataplexy in every single patient",
      "REM behavior disorder seen only in Stage 2 spindle epochs",
      "Obstructive apnea diagnosed only by dream-content analysis"
    ],
    "correct": 0,
    "correctFeedback": "Insomnia involves difficulty initiating or maintaining sleep.",
    "wrongFeedback": {
      "1": "Narcolepsy/cataplexy is a different disorder pattern.",
      "2": "RBD is not “only Stage 2 spindles.”",
      "3": "Dream content does not diagnose obstructive apnea."
    },
    "page": 126,
    "id": "c4-l3-13"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.5",
    "question": "Hallucinogens are primarily associated with which kind of effect profile?",
    "options": [
      "Reliable muscle growth identical to anabolic steroid use",
      "Altered sensory and perceptual experience patterns",
      "Exclusive permanent REM suppression after a single dose",
      "Guaranteed apnea cure via CPAP-equivalent style mechanisms"
    ],
    "correct": 1,
    "correctFeedback": "Hallucinogens are associated with altered sensory/perceptual experiences.",
    "wrongFeedback": {
      "0": "That is not the hallucinogen profile.",
      "2": "One-dose permanent REM ban is not the defining profile.",
      "3": "Hallucinogens are not CPAP-equivalent apnea cures."
    },
    "page": 135,
    "id": "c4-l3-14"
  },
  {
    "chapter": 4,
    "level": 3,
    "section": "4.3",
    "question": "Slow-wave (deep) sleep is most associated with which EEG pattern and stage label?",
    "options": [
      "Sleep spindles defining REM periods before early dawn",
      "Alpha waves identical to focused problem-solving at desks",
      "High-amplitude delta waves in NREM Stage 3 deep sleep",
      "Only K-complexes with no slow waves during deep sleep"
    ],
    "correct": 2,
    "correctFeedback": "Deep NREM Stage 3 is associated with high-amplitude delta waves.",
    "wrongFeedback": {
      "0": "Spindles characterize Stage 2 more than REM definition.",
      "1": "Alpha is more waking/relaxed EEG, not deep sleep.",
      "3": "Deep sleep is defined by slow waves, not “only K-complexes.”"
    },
    "page": 121,
    "id": "c4-l3-15"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "2.3+3.2+4.2",
    "question": "Night-shift nurses are randomly assigned to timed light boxes vs dim control light to shift circadian phase (methods + SCN biology + consciousness/sleep). A Freudian supervisor says dream interpretation will shift clocks better. A critic notes some nurses self-select extra caffeine. An ethicist flags fatigue-related consent capacity. What interpretation best respects design, biology, and ethics?",
    "options": [
      "Light timing can shift SCN-linked rhythms if confounds are controlled",
      "Dream interpretation is the primary mechanism for SCN phase shifting",
      "Self-selected caffeine proves light boxes cannot affect circadian timing",
      "Fatigue means ethics review is optional in shift-work light studies"
    ],
    "correct": 0,
    "correctFeedback": "SCN-linked circadian systems respond to light timing; experiments need confound control and ethics care.",
    "wrongFeedback": {
      "1": "Dream interpretation is not the SCN light-reset mechanism.",
      "2": "Caffeine confounds need control; they do not prove light is inert.",
      "3": "Fatigue increases—not decreases—the need for ethical safeguards."
    },
    "id": "c4-l4-01"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "1.2+4.3",
    "question": "A sleep lab shows REM with atonia and dream reports. A student says Freud’s latent content is proven because REM exists. Another says activation-synthesis means dreams are meaningless noise only. A behaviorist says dream reports are invalid verbal behavior. Bridging history of mind, sleep physiology, and dream theories, which statement is most careful?",
    "options": [
      "REM existence alone proves every dream’s latent content interpretation",
      "REM data constrain theories; they don’t prove Freudian latent wishes",
      "Activation-synthesis requires that dream reports be treated as invalid",
      "Behaviorism forbids collecting verbal dream reports in any sleep lab"
    ],
    "correct": 1,
    "correctFeedback": "REM facts inform theories but do not automatically validate Freudian latent-content claims.",
    "wrongFeedback": {
      "0": "REM ≠ proof of specific latent-wish interpretations.",
      "2": "Activation-synthesis still engages dream reports as data to explain.",
      "3": "Verbal reports are widely used despite behaviorist skepticism."
    },
    "id": "c4-l4-02"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "2.4+4.5",
    "question": "A double-blind trial compares a benzodiazepine, alcohol (controlled dose), and placebo on memory and balance. Both active drugs impair performance; combining them outside the study is warned against. A dualist says impairment proves “soul sedation.” A student labels both drugs stimulants because people feel “different.” An IRB worries about withdrawal risk. Best integrative takeaway?",
    "options": [
      "Impairment proves dualist soul sedation as the scientific mechanism",
      "Feeling “different” means both drugs are classified as stimulants",
      "Both are depressants; combined use raises serious safety concerns",
      "IRB concerns mean depressant trials can never be ethically reviewed"
    ],
    "correct": 2,
    "correctFeedback": "Alcohol and benzodiazepines are CNS depressants; combining them is dangerous.",
    "wrongFeedback": {
      "0": "Dualist metaphysics is not the pharmacological classification.",
      "1": "Subjective “different” feelings do not make them stimulants.",
      "3": "IRB review is how risky trials are ethically managed—not banned by default."
    },
    "id": "c4-l4-03"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "3.4+4.4",
    "question": "A patient with loud snoring, daytime sleepiness, and hypertension is told to try melatonin only. Polysomnography later shows obstructive apneas. A friend suggests Freudian dream analysis. A trainer suggests amphetamines for daytime sleepiness without airway evaluation. Linking biopsych (airway/brain arousal) and sleep disorders, what is the most appropriate next clinical logic?",
    "options": [
      "Melatonin alone is usually first-line cure for obstructive apnea events",
      "Dream analysis is the evidence-based first treatment for apnea pauses",
      "Amphetamines should precede any airway assessment in snoring patients",
      "Evaluate/treat obstructive apnea (e.g., CPAP), not stimulants first"
    ],
    "correct": 3,
    "correctFeedback": "Obstructive sleep apnea needs airway-focused evaluation/treatment; stimulants/melatonin/dream analysis are not substitutes.",
    "wrongFeedback": {
      "0": "Melatonin is not the standard primary apnea therapy.",
      "1": "Dream analysis does not treat airway obstruction.",
      "2": "Stimulants without airway assessment are misdirected."
    },
    "id": "c4-l4-04"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "1.3+2.2+4.6",
    "question": "A stage hypnotist claims universal hypnotizability “proven” by a survey of volunteers at his shows (WEIRD entertainment sample). He refuses a control condition because “belief is the IV.” A social-cognitive psychologist suspects role expectations; a dissociation theorist suspects split awareness. A methods reviewer wants clearer operationalization. What critique is strongest?",
    "options": [
      "Show volunteers without controls limit causal universality claims",
      "Belief as IV means control conditions are scientifically forbidden",
      "Dissociation theory bans all surveys of hypnotizability by definition",
      "WEIRD entertainment samples guarantee universal hypnotizability laws"
    ],
    "correct": 0,
    "correctFeedback": "Self-selected show volunteers without controls cannot establish universal causal laws of hypnosis.",
    "wrongFeedback": {
      "1": "Belief can be studied with controlled comparisons.",
      "2": "Dissociation theory does not ban surveys.",
      "3": "WEIRD entertainment samples limit—not guarantee—universality."
    },
    "id": "c4-l4-05"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "2.3+4.3",
    "question": "Experimenters randomly assign participants to early-night awakenings (rich in SWS) vs late-night awakenings (richer in REM) and test different memory types. A critic says sleep stages are “just labels,” so assignment is meaningless. A Freudian says only latent content of the night’s dreams should be scored. A correlationalist prefers people who naturally wake early vs late without assignment. Best methods+sleep conclusion?",
    "options": [
      "Sleep stage labels are meaningless, so random assignment cannot help",
      "Manipulating awakening timing helps test stage-linked memory ideas",
      "Only latent dream content scores can test memory—stages are irrelevant",
      "Natural early vs late wakers equal random assignment for causal claims"
    ],
    "correct": 1,
    "correctFeedback": "Experimental timing of awakenings can test hypotheses linking stage-rich periods to memory outcomes.",
    "wrongFeedback": {
      "0": "Stages are operationalized with EEG/physiology, not mere empty labels.",
      "2": "Latent-content scoring is not required for stage–memory experiments.",
      "3": "Natural groups reintroduce confounds that assignment reduces."
    },
    "id": "c4-l4-06"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "3.5+4.5",
    "question": "A student takes amphetamine to study, then alcohol to “come down,” then cannot sleep. A friend says alcohol is a stimulant because it feels social. A neuro classmate notes catecholamine/arousal pathways for amphetamine and depressant effects for alcohol. An ethicist notes peer pressure. Which drug-class statement is accurate?",
    "options": [
      "Alcohol is classed as a stimulant whenever it feels social at parties",
      "Amphetamine is a depressant that reliably produces deep Stage 3 sleep",
      "Amphetamine is a stimulant; alcohol is a depressant—mixing is risky",
      "Mixing stimulant and depressant cancels safely with no residual risk"
    ],
    "correct": 2,
    "correctFeedback": "Amphetamines are stimulants; alcohol is a depressant; combining substances is hazardous.",
    "wrongFeedback": {
      "0": "Subjective sociability does not reclassify alcohol as a stimulant.",
      "1": "Amphetamine is not a sleep-promoting depressant.",
      "3": "Effects do not safely “cancel.”"
    },
    "id": "c4-l4-07"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "1.1+4.1",
    "question": "A philosopher claims consciousness cannot be studied scientifically because it is private. An OpenStax-informed student cites operational approaches: self-report, behavioral indices, and neural correlates across sleep, drugs, and meditation. A structuralist insists only trained introspection in 1879 style counts. A behaviorist bans all consciousness terms. Which position best matches empirical psychology’s approach?",
    "options": [
      "Private experience makes all scientific study of consciousness impossible",
      "Only 1879 introspection labs can define consciousness in science",
      "Behaviorist bans require deleting sleep and drug chapters from texts",
      "Use converging measures despite privacy; don’t rely on one school alone"
    ],
    "correct": 3,
    "correctFeedback": "Empirical psychology studies consciousness with multiple converging measures despite privacy challenges.",
    "wrongFeedback": {
      "0": "Privacy challenges methods; it does not make all study impossible.",
      "1": "Modern approaches are broader than classical introspection alone.",
      "2": "Consciousness topics remain central despite behaviorist critiques."
    },
    "id": "c4-l4-08"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "2.4+3.2+4.4",
    "question": "A randomized trial tests CBT-I vs sleep hygiene education for insomnia (methods). Secondary EEG shows less Stage 3 in some patients. A drug sales rep says only hypnotic medication is “biological.” A dualist says CBT cannot affect the brain. An apnea specialist warns some “insomnia” cases are undiagnosed OSA. Best clinical-scientific synthesis?",
    "options": [
      "Behavioral insomnia care can help; screen for apnea when indicated",
      "CBT cannot affect biology, so only pills count as genuine treatment",
      "Any reduced Stage 3 proves CBT-I is dangerous and must be stopped",
      "Randomization is unnecessary once a sales rep prefers a medication"
    ],
    "correct": 0,
    "correctFeedback": "Behavioral treatments can be appropriate for insomnia; differential diagnosis (e.g., apnea) still matters.",
    "wrongFeedback": {
      "1": "Behavioral interventions can have biological correlates/effects.",
      "2": "Stage differences need careful interpretation—not automatic halt.",
      "3": "Commercial preference does not replace experimental logic."
    },
    "id": "c4-l4-09"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "1.2+2.3+4.5",
    "question": "A celebrity endorses a hallucinogen microdose for creativity. Fans share before/after self-reports (no controls). A lab proposes a double-blind RCT with ethics review. A Freudian says only symbolism of trips matters. A stimulant user claims hallucinogens are “just strong coffee.” Crossing history, methods, and drug classes, what is the soundest move for causal claims?",
    "options": [
      "Celebrity before/after posts already prove causal creativity increases",
      "Test effects with controlled, ethical trials—not endorsement anecdotes",
      "Freudian trip symbolism replaces the need for any controlled trials",
      "Class hallucinogens as stimulants identical to caffeine in mechanism"
    ],
    "correct": 1,
    "correctFeedback": "Causal claims about drug effects need controlled ethical research, not celebrity anecdotes.",
    "wrongFeedback": {
      "0": "Uncontrolled before/after posts are weak causal evidence.",
      "2": "Symbolism does not replace experimental tests of effects.",
      "3": "Hallucinogens are not classified as caffeine-like stimulants."
    },
    "id": "c4-l4-10"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "2.2+4.2",
    "question": "Researchers correlate self-reported evening chronotype with GPA and find r = −0.25. A headline: “Night owls caused to fail by their SCN.” A biologist notes chronotype is partly biological but confounded with sleep debt, work hours, and light habits. A methods tutor asks about third variables. What is the best correction?",
    "options": [
      "Any negative r proves the SCN alone causes lower grades in night owls",
      "Chronotype is purely cultural; biology of SCN timing never contributes",
      "Association found; it does not prove SCN causation of GPA scores",
      "Third variables are irrelevant once a circadian structure gets named"
    ],
    "correct": 2,
    "correctFeedback": "Chronotype–GPA correlations are associative; causal SCN→GPA claims need stronger designs and confound control.",
    "wrongFeedback": {
      "0": "Correlation ≠ SCN causation of GPA.",
      "1": "Biology of circadian timing is relevant; “purely cultural” oversimplifies.",
      "3": "Naming a structure does not erase confounds."
    },
    "id": "c4-l4-11"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "3.1+4.3",
    "question": "During a seizure-monitoring admission, EEG captures sleep spindles and K-complexes; the patient is hard to awaken but later shows delta-rich periods. A nurse labels all of it REM because eyes sometimes flutter at sleep onset. A student says spindles prove activation-synthesis. Linking neural measurement and sleep staging, which labeling is correct?",
    "options": [
      "Sleep-onset eye flutters prove the entire night must be scored REM",
      "Spindles uniquely prove activation-synthesis as the only dream theory",
      "Delta-rich periods are identical to Stage 2 spindle/K-complex sleep",
      "Spindles/K-complexes indicate NREM Stage 2, not automatically REM"
    ],
    "correct": 3,
    "correctFeedback": "Spindles and K-complexes characterize NREM Stage 2; REM and Stage 3 have different signatures.",
    "wrongFeedback": {
      "0": "Brief sleep-onset phenomena do not make the whole night REM.",
      "1": "Spindles do not uniquely prove activation-synthesis.",
      "2": "Delta-rich Stage 3 differs from Stage 2 spindle/K-complex patterns."
    },
    "id": "c4-l4-12"
  },
  {
    "chapter": 4,
    "level": 4,
    "section": "1.4+2.4+4.6",
    "question": "A student project tries “classroom hypnosis” to reduce exam stress without IRB filing, using classmates who feel pressured to impress the professor. The student cites historical mesmerism as ethics precedent and posts video without consent. A dissociation theorist and a social-cognitive theorist disagree on mechanism but both flag consent. What must happen first?",
    "options": [
      "Stop public posting; seek proper ethics review and voluntary consent",
      "Historical mesmerism permanently authorizes unconsented student videos",
      "Mechanism debates (dissociation vs role) remove consent duties",
      "Desire to impress a professor validly replaces informed consent needs"
    ],
    "correct": 0,
    "correctFeedback": "Ethics review and voluntary consent/privacy come before classroom hypnosis demonstrations and posting.",
    "wrongFeedback": {
      "1": "Historical mesmerism is not an ethics free pass.",
      "2": "Theory disputes do not remove consent requirements.",
      "3": "Social pressure to impress is coercion risk, not consent."
    },
    "id": "c4-l4-13"
  },
  {
    "chapter": 5,
    "level": 1,
    "section": "§5.1",
    "question": "Sensation is best described as:",
    "options": [
      "Sensory receptors detecting stimulus energy",
      "Organizing sensations into conscious experience",
      "Only top-down interpretation of meaning",
      "A Gestalt grouping rule for closure"
    ],
    "correct": 0,
    "correctFeedback": "Sensation = detection by receptors; perception = organization/interpretation.",
    "wrongFeedback": {
      "1": "That is perception, not sensation.",
      "2": "Top-down is part of perception, not the definition of sensation.",
      "3": "Gestalt rules organize perception."
    },
    "page": 147,
    "id": "c5-l1-01"
  },
  {
    "chapter": 5,
    "level": 1,
    "section": "§5.1",
    "question": "An absolute threshold is approximately the:",
    "options": [
      "Minimum stimulus energy detected about 50% of the time",
      "Maximum intensity a receptor can ever encode",
      "Difference between two stimuli that is always noticed",
      "Point where sensory adaptation is complete"
    ],
    "correct": 0,
    "correctFeedback": "Absolute threshold ≈ 50% detection rate for a stimulus.",
    "wrongFeedback": {
      "1": "Thresholds are minima for detection, not maxima.",
      "2": "That mixes absolute with difference threshold.",
      "3": "Adaptation is separate from threshold definition."
    },
    "page": 147,
    "id": "c5-l1-02"
  },
  {
    "chapter": 5,
    "level": 1,
    "section": "§5.3",
    "question": "Rods are especially important for:",
    "options": [
      "Vision in dim light, more in the periphery",
      "High-acuity color vision in the fovea only",
      "Detecting only red wavelengths of light",
      "Moving the ossicles of the middle ear"
    ],
    "correct": 0,
    "correctFeedback": "Rods: dim light / periphery; cones: bright light, acuity, color (fovea).",
    "wrongFeedback": {
      "1": "That describes cones concentrated in the fovea.",
      "2": "Rods are not limited to red.",
      "3": "Ossicles are auditory, not retinal."
    },
    "page": 154,
    "id": "c5-l1-03"
  },
  {
    "chapter": 5,
    "level": 1,
    "section": "§5.4",
    "question": "Sensorineural hearing loss involves failure of:",
    "options": [
      "Auditory nerve impulse transmission to the brain",
      "The eardrum and ossicles to vibrate normally",
      "The cornea to focus light on the retina",
      "Olfactory receptors to bind odor molecules"
    ],
    "correct": 0,
    "correctFeedback": "Sensorineural: nerve pathway; conductive: eardrum/ossicles.",
    "wrongFeedback": {
      "1": "That is conductive hearing loss.",
      "2": "Cornea focusing is vision.",
      "3": "Olfaction is smell."
    },
    "page": 164,
    "id": "c5-l1-04"
  },
  {
    "chapter": 5,
    "level": 1,
    "section": "§5.6",
    "question": "Figure–ground organization means we tend to:",
    "options": [
      "Separate a scene into a figure against a background",
      "Always prefer the longest lines in a drawing",
      "Ignore proximity when grouping objects",
      "Use only binocular disparity for grouping"
    ],
    "correct": 0,
    "correctFeedback": "Figure–ground is a core Gestalt idea in the chapter.",
    "wrongFeedback": {
      "1": "Not a Gestalt definition.",
      "2": "Proximity is another Gestalt rule.",
      "3": "Disparity is a depth cue, not figure–ground."
    },
    "page": 169,
    "id": "c5-l1-05"
  },
  {
    "chapter": 5,
    "level": 1,
    "section": "§5.2",
    "question": "In vision, wavelength of light is generally associated with:",
    "options": [
      "Perceived color (hue)",
      "Perceived loudness of a tone",
      "Only vestibular balance signals",
      "The absolute threshold for pain"
    ],
    "correct": 0,
    "correctFeedback": "Wavelength ↔ color; amplitude ↔ brightness (vision).",
    "wrongFeedback": {
      "1": "Loudness is auditory amplitude.",
      "2": "Vestibular is balance.",
      "3": "Pain thresholds are separate."
    },
    "page": 150,
    "id": "c5-l1-06"
  },
  {
    "chapter": 5,
    "level": 2,
    "section": "§5.1",
    "question": "Bottom-up processing emphasizes:",
    "options": [
      "Building perception from sensory input features",
      "Using only expectations to invent sensations",
      "Ignoring receptor activity entirely",
      "Applying punishment after a behavior"
    ],
    "correct": 0,
    "correctFeedback": "Bottom-up starts from sensory data; top-down uses knowledge/expectations.",
    "wrongFeedback": {
      "1": "That overstates top-down as inventing sensation.",
      "2": "Receptors are the start of sensation.",
      "3": "Punishment is learning (Ch 6), not perception."
    },
    "page": 147,
    "id": "c5-l2-01"
  },
  {
    "chapter": 5,
    "level": 2,
    "section": "§5.3",
    "question": "Opponent-process theory uniquely helps explain:",
    "options": [
      "Negative afterimages in complementary colors",
      "Why rods outnumber cones in the fovea",
      "Why amplitude equals pitch in hearing",
      "Why IRB review is required for surveys"
    ],
    "correct": 0,
    "correctFeedback": "Opponent-process accounts for afterimages via opponent pairs.",
    "wrongFeedback": {
      "1": "Fovea is cone-dense; rods are peripheral.",
      "2": "Pitch tracks frequency, not amplitude.",
      "3": "IRB is research ethics (Ch 2)."
    },
    "page": 158,
    "id": "c5-l2-02"
  },
  {
    "chapter": 5,
    "level": 2,
    "section": "§5.3",
    "question": "Binocular depth cues require:",
    "options": [
      "Comparing input from both eyes (e.g., disparity)",
      "Only linear perspective on a flat painting",
      "Chemical binding on the tongue alone",
      "Melatonin release from the pineal gland"
    ],
    "correct": 0,
    "correctFeedback": "Binocular cues use two eyes; monocular cues work with one.",
    "wrongFeedback": {
      "1": "Linear perspective is typically monocular.",
      "2": "Taste is gustation.",
      "3": "Melatonin is circadian (Ch 4)."
    },
    "page": 160,
    "id": "c5-l2-03"
  },
  {
    "chapter": 5,
    "level": 2,
    "section": "§5.4",
    "question": "Place coding of pitch refers to:",
    "options": [
      "Which region of the basilar membrane is most activated",
      "Whether reinforcement is positive or negative",
      "How many cones fire in the optic chiasm",
      "Absolute threshold for olfactory molecules"
    ],
    "correct": 0,
    "correctFeedback": "Place + rate codes contribute to pitch perception.",
    "wrongFeedback": {
      "1": "Reinforcement is operant learning.",
      "2": "Cones/chiasm are vision.",
      "3": "That is smell threshold."
    },
    "page": 162,
    "id": "c5-l2-04"
  },
  {
    "chapter": 5,
    "level": 2,
    "section": "§5.5",
    "question": "The vestibular system primarily supports:",
    "options": [
      "Balance via inner-ear structures sensing head motion/gravity",
      "Color afterimages after staring at a flag",
      "Shaping successive approximations of a skill",
      "Random assignment in true experiments"
    ],
    "correct": 0,
    "correctFeedback": "Vestibular: utricle, saccule, semicircular canals.",
    "wrongFeedback": {
      "1": "Afterimages are visual opponent processes.",
      "2": "Shaping is operant (Ch 6).",
      "3": "Random assignment is methods (Ch 2)."
    },
    "page": 167,
    "id": "c5-l2-05"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.1",
    "question": "A radiologist misses a gorilla drawn into a CT stack while hunting lung nodules. Which account best fits OpenStax’s attention discussion?",
    "options": [
      "Inattentional blindness: attention was locked on the",
      "Absolute threshold: the gorilla ink reflected zero photons",
      "Conductive hearing loss blocked visual cortex activity",
      "Negative reinforcement removed the gorilla permanently"
    ],
    "correct": 0,
    "correctFeedback": "Attention limits what reaches awareness even when stimuli are visible.",
    "wrongFeedback": {
      "1": "Thresholds are about energy detection, not task-focused misses.",
      "2": "Hearing loss does not explain a visual miss.",
      "3": "Reinforcement is learning, not this miss."
    },
    "page": 156,
    "id": "c5-l3-01"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.1",
    "question": "Two soft tones differ slightly; listeners notice the difference half the time. What did the study likely estimate?",
    "options": [
      "A difference threshold (jnd) near the 50% detection",
      "Only an absolute threshold for a single tone alone now",
      "Opponent-process pairing of red versus green cones now",
      "A fixed-ratio schedule of auditory reinforcement now"
    ],
    "correct": 0,
    "correctFeedback": "Difference threshold / jnd uses ~50% discrimination.",
    "wrongFeedback": {
      "1": "Absolute threshold concerns detecting one stimulus, not a difference.",
      "2": "Opponent-process is color vision theory.",
      "3": "Schedules belong to operant conditioning."
    },
    "page": 147,
    "id": "c5-l3-02"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.3",
    "question": "At dusk, Maya reads poorly under a streetlamp but spots movement in her periphery. Which receptor story fits best?",
    "options": [
      "Rods support dim peripheral detection; cones struggle",
      "Only cones in the fovea handle all dim-light motion now",
      "Ossicles in her middle ear are focusing retinal images",
      "Closure Gestalt rules convert rods into cones overnight"
    ],
    "correct": 0,
    "correctFeedback": "Rods: dim/peripheral; cones: bright/acuity/color.",
    "wrongFeedback": {
      "1": "Cones are poor in dim light; fovea is cone-heavy.",
      "2": "Ossicles are for hearing, not focusing light.",
      "3": "Gestalt does not transform receptor types."
    },
    "page": 154,
    "id": "c5-l3-03"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.3",
    "question": "After staring at a green image, Jordan sees a reddish afterimage. Which theory is most directly illustrated?",
    "options": [
      "Opponent-process color coding with complementary now now",
      "Trichromatic theory alone without opponent mechanisms now",
      "Conductive loss from stapes pressing the oval window now",
      "Vicarious reinforcement of color-naming models in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Negative afterimages are a textbook pointer to opponent-process ideas.",
    "wrongFeedback": {
      "1": "Trichromatic explains cone types but not afterimages as cleanly.",
      "2": "That is auditory anatomy.",
      "3": "Vicarious reinforcement is observational learning."
    },
    "page": 158,
    "id": "c5-l3-04"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.3",
    "question": "A VR demo works with one eye covered using relative size and overlap. Which depth-cue class is carrying the experience?",
    "options": [
      "Monocular pictorial cues available to a single eye now",
      "Only binocular disparity from vergence angles in the vignette",
      "Vestibular otolith signals replacing all vision now now",
      "Positive punishment of incorrect depth judgments now now"
    ],
    "correct": 0,
    "correctFeedback": "Relative size/overlap are classic monocular cues.",
    "wrongFeedback": {
      "1": "Disparity needs both eyes.",
      "2": "Vestibular is balance, not pictorial depth.",
      "3": "Punishment is operant learning."
    },
    "page": 160,
    "id": "c5-l3-05"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.4",
    "question": "A musician loses high-frequency acuity; audiology implicates basal cochlear damage. Which coding idea is most relevant?",
    "options": [
      "Place coding: high frequencies map to the basal membrane",
      "Amplitude of light waves determining perceived pitch",
      "Random assignment failing in a between-subjects design",
      "Unconditional positive regard shaping cochlear hair cells"
    ],
    "correct": 0,
    "correctFeedback": "Place theory maps frequency to basilar membrane location.",
    "wrongFeedback": {
      "1": "Light amplitude is vision/brightness, not pitch.",
      "2": "Methods issue, not cochlear mapping.",
      "3": "Rogers/humanism is not auditory physiology."
    },
    "page": 162,
    "id": "c5-l3-06"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.4",
    "question": "Wax and a stiff ossicular chain reduce middle-ear transmission; nerve pathways test normal. Classification?",
    "options": [
      "Conductive hearing loss from impaired vibration transfer",
      "Sensorineural loss from auditory-nerve failure alone now",
      "Prosopagnosia limited to facial Gestalt grouping now",
      "Latent learning of silence without reinforcement now"
    ],
    "correct": 0,
    "correctFeedback": "Conductive = eardrum/ossicles; sensorineural = nerve path.",
    "wrongFeedback": {
      "1": "Nerve pathway is intact here.",
      "2": "Prosopagnosia is face recognition, not this case.",
      "3": "Latent learning is Tolman-style cognition/learning."
    },
    "page": 164,
    "id": "c5-l3-07"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.5",
    "question": "After a viral illness, smell is gone and food tastes dull though the tongue looks normal. Best textbook framing?",
    "options": [
      "Olfaction contributes heavily to flavor; anosmia flattens",
      "Only vestibular canals encode flavor molecules on the tongue",
      "Rods in the retina are required for gustatory binding",
      "Fixed-interval schedules suppress all chemoreceptor firing"
    ],
    "correct": 0,
    "correctFeedback": "Smell and taste interact; olfactory loss changes flavor.",
    "wrongFeedback": {
      "1": "Vestibular is balance.",
      "2": "Rods are visual receptors.",
      "3": "Schedules do not define chemoreception."
    },
    "page": 165,
    "id": "c5-l3-08"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.5",
    "question": "Spinning then stopping makes the world seem to keep turning. Which system is most implicated?",
    "options": [
      "Vestibular semicircular canals signaling ongoing head",
      "Only cones generating opponent afterimages of motion",
      "IRB noncompliance creating illusory motion percepts now",
      "Negative punishment removing all optic-flow cues now"
    ],
    "correct": 0,
    "correctFeedback": "Semicircular canals detect rotational acceleration; mismatch yields vertigo-like percepts.",
    "wrongFeedback": {
      "1": "Visual afterimages are not the primary spinning story.",
      "2": "Ethics boards do not create vestibular illusions.",
      "3": "Punishment is not the mechanism here."
    },
    "page": 167,
    "id": "c5-l3-09"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.6",
    "question": "A logo uses broken arcs that still look like a complete circle. Which Gestalt idea is highlighted?",
    "options": [
      "Closure: we mentally complete incomplete figures now now",
      "Absolute threshold: arcs exceeded 50% detection always",
      "Operant extinction of incomplete circle responses now now",
      "Sensorineural loss of Gestalt cortical modules in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Closure fills gaps to perceive wholes.",
    "wrongFeedback": {
      "1": "Thresholds do not explain completing shapes.",
      "2": "Extinction is conditioning.",
      "3": "Hearing loss is unrelated."
    },
    "page": 169,
    "id": "c5-l3-10"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.6",
    "question": "Two cultures describe the same ambiguous figure differently; expectations guide the report. Best label?",
    "options": [
      "Perceptual set / top-down influences from experience and",
      "Only bottom-up receptor energy differing by passport now",
      "Classical CS–UCS pairing of ink with citizenship now",
      "All-or-none spikes proving culture is irrelevant now"
    ],
    "correct": 0,
    "correctFeedback": "OpenStax notes culture, bias, and expectations shape perception.",
    "wrongFeedback": {
      "1": "Receptor energy alone does not equal cultural description differences.",
      "2": "Conditioning terms misframe the cultural set idea.",
      "3": "Neural spikes do not erase top-down effects."
    },
    "page": 170,
    "id": "c5-l3-11"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.2",
    "question": "Engineers raise a tone’s amplitude but keep frequency fixed. Listeners should mainly report:",
    "options": [
      "Increased loudness with pitch largely unchanged now now",
      "A shift to a new color on the visual spectrum in the vignette",
      "Complete vestibular reset of head orientation in the vignette",
      "Conversion from conductive to sensorineural loss now now"
    ],
    "correct": 0,
    "correctFeedback": "Amplitude ↔ loudness; frequency ↔ pitch.",
    "wrongFeedback": {
      "1": "Color is light wavelength.",
      "2": "Vestibular is not pitch/loudness.",
      "3": "Hearing-loss types are diagnostic, not this psychophysics."
    },
    "page": 151,
    "id": "c5-l3-12"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.3",
    "question": "Light is focused on the fovea for reading fine print. Which statement is most accurate?",
    "options": [
      "Foveal cones support high acuity needed for fine detail",
      "Peripheral rods alone resolve the smallest letters now",
      "The stapes bone focuses photons onto hair cells now now",
      "Melatonin dilates the lens to enlarge letters in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Fovea is cone-rich and specialized for acuity.",
    "wrongFeedback": {
      "1": "Peripheral rods are for dim detection, not fine print.",
      "2": "Stapes is middle-ear bone.",
      "3": "Melatonin is a sleep-related hormone."
    },
    "page": 153,
    "id": "c5-l3-13"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.1",
    "question": "A constant perfume fades from awareness after minutes in the same room. Mechanism?",
    "options": [
      "Sensory adaptation to an unchanging olfactory stimulus",
      "Absolute threshold rising to infinite forever in the vignette",
      "Binocular disparity canceling odor molecules in the vignette",
      "Variable-ratio reinforcement of nose receptors in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Adaptation: decreased sensitivity to a constant stimulus.",
    "wrongFeedback": {
      "1": "Threshold does not become infinite.",
      "2": "Disparity is a depth cue.",
      "3": "Schedules are operant, not adaptation."
    },
    "page": 148,
    "id": "c5-l3-14"
  },
  {
    "chapter": 5,
    "level": 3,
    "section": "§5.4",
    "question": "A listener judges whether a sound is left or right using timing and intensity differences at the two ears. Cues?",
    "options": [
      "Binaural localization cues comparing the two ears now",
      "Only monocular cues from the basilar membrane in the vignette",
      "Gustatory binding of sound-pressure molecules in the vignette",
      "Humanistic unconditional positive regard for tones now"
    ],
    "correct": 0,
    "correctFeedback": "Binaural cues support horizontal localization.",
    "wrongFeedback": {
      "1": "Monocular is a vision term; membrane place coding is pitch.",
      "2": "Taste receptors do not localize sound.",
      "3": "Humanism is a therapy/personality tradition."
    },
    "page": 163,
    "id": "c5-l3-15"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "2.2+2.3+5.1",
    "question": "Dr. Okonkwo runs a campus study correlating students’ self-rated “keen noticing” scores with reaction times to near-threshold light flashes. She then writes that the flashes *cause* better noticing. A methods TA flags that there was no manipulated IV and no random assignment. A sensation classmate insists absolute threshold is a fixed intensity that “proves” causation whenever r > .30. An ethics reviewer asks whether consent covered claiming clinical applications. Which critique is most precise?",
    "options": [
      "Correlation without an IV cannot show that flashes cause better noticing scores",
      "Absolute thresholds turn every correlation into a true causal lab experiment",
      "Any r above .30 converts self-report scores into randomly assigned treatments",
      "IRB consent wording alone creates internal validity for strong causation claims"
    ],
    "correct": 0,
    "correctFeedback": "Without a manipulated IV and controls, correlation cannot support a causal claim about flashes causing noticing.",
    "wrongFeedback": {
      "1": "Thresholds describe detection; they do not convert correlational designs into experiments.",
      "2": "Effect-size cutoffs do not create random assignment or causal identification.",
      "3": "Consent is necessary ethically but does not manufacture internal validity."
    },
    "id": "c5-l4-01"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "3.4+5.2+5.3",
    "question": "After a stroke affecting primary visual cortex, Mr. Patel sometimes points toward moving lights he denies “seeing.” A neurology intern labels this blindsight-like residual function. Classmate A says dopamine at the neuromuscular junction explains conscious sight. Classmate B says pituitary hormones focus images on the basilar membrane. Classmate C says sympathetic arousal invents cone photopigments. Which framing best integrates biopsych and perception?",
    "options": [
      "Only spinal stretch reflexes create conscious color afterimages after a stroke",
      "Visual cortex pathways support awareness; NMJ dopamine is motor, not seeing",
      "Pituitary hormones focus light on the basilar membrane for visual awareness",
      "Sympathetic arousal synthesizes trichromatic cone pigments after cortex injury"
    ],
    "correct": 1,
    "correctFeedback": "Conscious visual report depends heavily on cortical visual pathways; NMJ chemistry is about muscle activation, not seeing.",
    "wrongFeedback": {
      "0": "Spinal reflexes do not explain conscious visual experience or afterimages.",
      "2": "The basilar membrane is auditory; pituitary hormones do not focus retinal images.",
      "3": "Arousal does not invent cone photopigments after cortical damage."
    },
    "id": "c5-l4-02"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.1+5.2+4.1",
    "question": "In a signal-detection lab, Maya sets a very liberal criterion for hearing a faint tone in noise: many hits, many false alarms. Tutor Ken claims she “lowered her absolute threshold.” Tutor Lea says she improved d′ (sensitivity). Tutor Omar says REM rebound from last night’s sleep debt created more cones. A methods peer asks whether payoff instructions changed bias. What is the best analysis?",
    "options": [
      "Liberal criteria always raise absolute threshold and erase false alarms",
      "REM rebound rebuilds cone photopigments and thereby raises sensory d′",
      "She shifted response bias (criterion), which is not the same thing as d′",
      "Payoff instructions cannot affect criterion; only basilar place coding can"
    ],
    "correct": 2,
    "correctFeedback": "Signal detection separates sensitivity (d′) from criterion/bias; a liberal criterion raises hits and false alarms without necessarily changing d′.",
    "wrongFeedback": {
      "0": "Liberal criteria increase false alarms; they do not erase them or redefine absolute threshold as bias.",
      "1": "REM rebound is a sleep phenomenon and does not rebuild cones or equal d′.",
      "3": "Payoffs classically shift criterion; place theory is about pitch, not decision bias."
    },
    "id": "c5-l4-03"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.3+1.2+2.2",
    "question": "A start-up claims its “color-training app” turns dichromats into trichromats in two weeks, citing testimonials and a within-subjects quiz with no control app and no random assignment. A reviewer notes opponent-process afterimages still appear in users. A behaviorist investor says only Watson-style S–R drills matter. A cognitive peer mentions top-down expectations inflating quiz scores. Strongest scientific critique?",
    "options": [
      "Opponent afterimages prove every dichromat already has three cone classes",
      "Watson-style S–R drills rewrite dichromatic retinas into trichromatic ones",
      "Top-down expectations make random assignment ethically impossible",
      "Uncontrolled testimonials cannot prove dichromacy became true trichromacy"
    ],
    "correct": 3,
    "correctFeedback": "Without controls and proper design, testimonials cannot establish that the app changed cone-based trichromacy.",
    "wrongFeedback": {
      "0": "Afterimages relate to opponent processes; they do not prove dichromats are trichromats.",
      "1": "Behaviorist drills do not rewrite retinal photopigment complement.",
      "2": "Expectations are a confound to control—not a reason to ban randomization."
    },
    "id": "c5-l4-04"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.4+5.5+2.3",
    "question": "During a basketball-pass counting video, half the viewers miss a person in a gorilla suit. Prof. Ng calls this inattentional blindness. Student A says it proves rods alone create conscious objects. Student B says feature integration is irrelevant because Gestalt closure “forces” awareness. Student C wants to drop the replication because the original used WEIRD undergrads. An IRB member worries deception about the gorilla. Best integrated judgment?",
    "options": [
      "Attention can gate awareness despite stimulation; careful replication still matters",
      "Rods alone force conscious object binding whenever a gorilla suit appears on screen",
      "Gestalt closure makes inattentional blindness theoretically impossible by definition",
      "WEIRD undergraduate samples mean attention work should never be replicated at all"
    ],
    "correct": 0,
    "correctFeedback": "Inattentional blindness shows attention limits awareness despite stimulation; WEIRD limits generality but do not ban careful replication.",
    "wrongFeedback": {
      "1": "Receptor stimulation is not sufficient for awareness; attention matters.",
      "2": "Gestalt principles organize perception; they do not make inattentional blindness impossible.",
      "3": "Sample limits motivate broader replication—not abandoning the phenomenon."
    },
    "id": "c5-l4-05"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.2+5.3+3.2",
    "question": "A podcast guest says “place theory and temporal theory are the same because both mention the cochlea,” then claims a damaged basilar membrane only affects smell. A neuro classmate notes tonotopic organization along the basilar membrane. Another confuses olfactory receptors with hair cells. A methods friend asks for a double dissociation design. Which statement is most accurate?",
    "options": [
      "Place and temporal theories are identical and jointly explain only olfactory binding",
      "Place and temporal theories concern pitch; basilar damage hits hearing, not smell",
      "Basilar membrane damage abolishes smell while fully sparing auditory pitch coding",
      "Hair cells are olfactory receptors that migrate to nasal tissue during early life"
    ],
    "correct": 1,
    "correctFeedback": "Place vs temporal theories concern how pitch is coded; the basilar membrane is auditory, not olfactory.",
    "wrongFeedback": {
      "0": "They are distinct pitch-coding accounts, not a single smell theory.",
      "2": "Basilar damage affects hearing, not smell.",
      "3": "Hair cells are auditory transducers, not olfactory receptors."
    },
    "id": "c5-l4-06"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.1+5.6+2.2",
    "question": "In a difference-threshold lab, Jordan can just notice that a 100 g weight became 102 g (Weber-like). Lab partner Sam calls this the absolute threshold for “all touch forever.” Partner Riley says top-down knowledge of the number “102” caused the sensory receptors to fire. Partner Quinn wants to drop the control lighter weights because “everyone knows heavier is heavier.” Best correction?",
    "options": [
      "Absolute thresholds equal any 2% change, ignoring the starting stimulus intensity",
      "Knowing the numeral 102 is what makes mechanoreceptors generate action potentials",
      "That just-noticeable change is a difference threshold, not an absolute threshold",
      "Dropping lighter control weights improves causal inference about Weber fractions"
    ],
    "correct": 2,
    "correctFeedback": "Detecting a change from 100 g to 102 g illustrates a difference (JND) threshold, not absolute threshold.",
    "wrongFeedback": {
      "0": "Weber fractions depend on starting intensity; absolute threshold is detection from none/near-none.",
      "1": "Top-down knowledge does not literally make receptors fire the sensory transduction event.",
      "3": "Removing controls worsens, not improves, inference about discrimination."
    },
    "id": "c5-l4-07"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.3+5.5+4.5",
    "question": "After staring at a green-black-and-yellow flag, students see a red-white-and-blue afterimage. Tutor A says only trichromatic theory can explain it. Tutor B says only opponent-process theory can. Tutor C says the afterimage is REM rebound projecting cones onto the iris. A historian notes Helmholtz vs Hering debates. What is the best modern teaching point?",
    "options": [
      "Afterimages refute cones and prove auditory place theory explains human color vision",
      "REM rebound projects cone pigments onto the iris to create the flag afterimages",
      "Opponent-process theory bans any role for three cone types in human color vision",
      "Cone trichromacy plus later opponent processes together best fit flag afterimages"
    ],
    "correct": 3,
    "correctFeedback": "Modern accounts combine trichromatic cone responses with later opponent-process channels—afterimages fit the opponent stage especially well.",
    "wrongFeedback": {
      "0": "Afterimages do not refute cones or implicate auditory place theory.",
      "1": "REM rebound is unrelated to generating visual flag afterimages via the iris.",
      "2": "Opponent-process theory complements, rather than bans, trichromacy at the cones."
    },
    "id": "c5-l4-08"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.5+1.4+2.4",
    "question": "A museum exhibit claims monocular depth cues are “fake psychology” because depth is only binocular disparity, citing one influencer demo. A developmental psychologist notes infants use pictorial cues. A Gestalt researcher mentions figure–ground and interposition. An ethicist flags that the exhibit collected gaze data without consent notices. Strongest response?",
    "options": [
      "People use monocular and binocular cues; unauthorized gaze capture remains unethical",
      "Only binocular disparity exists; pictorial cues are myths invented by Gestalt writers",
      "Figure-ground organization proves consent is unnecessary for public museum eye-tracking",
      "Influencer demos override developmental evidence that infants use pictorial depth cues"
    ],
    "correct": 0,
    "correctFeedback": "Depth perception uses both monocular and binocular information; ethics still require appropriate notice/consent for research-like data collection.",
    "wrongFeedback": {
      "1": "Monocular/pictorial cues are real and widely documented.",
      "2": "Perceptual organization does not waive research ethics.",
      "3": "Viral demos are not a higher standard of evidence than developmental data."
    },
    "id": "c5-l4-09"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.1+3.3+2.2",
    "question": "An energy-drink brand funds a study concluding their beverage “raises sensory absolute thresholds for pain,” but the protocol only measured self-reported toughness after knowing who got the drink (no blinding). A biopsych student notes descending pain modulation and endorphins. A methods peer cites expectancy/placebo and demand characteristics. A company scientist says sponsorship proves validity. Best critique?",
    "options": [
      "Brand sponsorship automatically validates absolute-threshold claims in pain studies",
      "Unblinded self-reports confound expectancy with any true sensory threshold change",
      "Endorphins make blinding impossible because they erase all demand characteristics",
      "Absolute threshold means the same thing as response bias in signal detection theory"
    ],
    "correct": 1,
    "correctFeedback": "Without blinding, expectancy and demand can mimic “threshold” changes in self-report; sponsorship does not fix that.",
    "wrongFeedback": {
      "0": "Funding source does not create internal validity.",
      "2": "Biology of pain modulation does not remove the need for blinding.",
      "3": "Absolute threshold and criterion/bias are distinct SDT ideas."
    },
    "id": "c5-l4-10"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.4+5.1+2.2",
    "question": "A VR training study flashes a tone whenever a faint visual target appears, then claims participants “classically conditioned their occipital lobes to hear color.” Pretests show better detection only when top-down cues predict target location. A sensation TA says this is mainly attention/top-down perception, not proof of hearing color. A learning-enthusiast classmate insists the tone became a CS for hue. Methods asks for a condition with unpaired tones. Best interpretation?",
    "options": [
      "Any paired tone proves occipital cortex literally transduces sound as hue percepts",
      "Unpaired-tone controls are unnecessary once participants report noticing targets",
      "Top-down attentional cuing can aid detection without implying people hear colors",
      "Hearing color is guaranteed when a CS and a faint light share a VR timestamp"
    ],
    "correct": 2,
    "correctFeedback": "Improved detection with predictive cues is well explained by top-down attention; it does not show auditory transduction of color.",
    "wrongFeedback": {
      "0": "Pairing alone does not mean cortex “hears color.”",
      "1": "Unpaired controls help separate cueing/contingency from mere stimulation.",
      "3": "Temporal contiguity in VR is not proof of synesthesia-like hearing of color."
    },
    "id": "c5-l4-11"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.2+5.3+3.5",
    "question": "Ms. Chen has conductive hearing loss from middle-ear stiffening; her audiogram is worse for soft sounds, but cochlear hair cells test intact. A trainee recommends only “temporal theory apps” because place theory “requires smell receptors.” Another suggests stimulants to dilate the pupil for better hearing. A third confuses sensorineural with conductive loss. What is the most accurate teaching point?",
    "options": [
      "Place theory requires olfactory receptors and cannot map cochlear frequency places",
      "Pupil-dilating stimulants restore ossicle motion and soft-sound hearing thresholds",
      "Intact hair cells prove the problem must be sensorineural, never a conductive loss",
      "Conductive loss is middle-ear transmission; place/temporal theories concern pitch"
    ],
    "correct": 3,
    "correctFeedback": "Conductive loss is a middle-ear transmission problem; place and temporal theories are about pitch encoding, not which ear structure is damaged.",
    "wrongFeedback": {
      "0": "Place theory is about basilar place coding for pitch, not smell.",
      "1": "Pupil dilation does not fix ossicle conduction.",
      "2": "Intact hair cells are compatible with conductive (middle-ear) loss."
    },
    "id": "c5-l4-12"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "1.1+2.2+5.5",
    "question": "A popular blog says psychology is “not a science” because Müller-Lyer illusions fool people, so perception is hopelessly subjective. A methods student replies that illusions are controlled, replicable phenomena used to test theories. A humanist peer says only Rogers’s empathy can validate perception research. A physicist friend cites Popper: bold claims should risk falsification. Strongest reply to the blog?",
    "options": [
      "Replicable illusions are data for testing theories, not proof psychology is unscientific",
      "Illusions show measurement is impossible, so falsifiability cannot apply in perception work",
      "Only Rogerian empathy, not experiments, can validate claims about visual size constancies",
      "If an illusion fools anyone once, all psychophysical thresholds become forever meaningless"
    ],
    "correct": 0,
    "correctFeedback": "Systematic illusions are classic scientific tools in perception; they support, rather than refute, psychology’s empirical status.",
    "wrongFeedback": {
      "1": "Illusions are measurable and theory-laden—not a ban on science.",
      "2": "Humanistic therapy values do not replace experimental tests of perception.",
      "3": "A single fooling event does not void psychophysical methods."
    },
    "id": "c5-l4-13"
  },
  {
    "chapter": 5,
    "level": 4,
    "section": "5.3+5.4+4.2",
    "question": "Night-shift nurses use red light to preserve dark adaptation in rods before going outside to check equipment. A manager switches to bright white LEDs “for safety” and nurses then need minutes to see in the dark yard. A sleep specialist mentions circadian light effects on the SCN. A trainee says cones alone handle all night vision. An admin claims adaptation is just operant laziness. Best integrated account?",
    "options": [
      "Cones alone mediate night vision, so rod bleach cannot affect yard visibility",
      "Bright white light photobleaches rods and impairs dark adaptation for dim vision",
      "SCN circadian effects prove dark adaptation is only a social myth about laziness",
      "Operant laziness extinguishes rhodopsin whenever LEDs replace dim red work bulbs"
    ],
    "correct": 1,
    "correctFeedback": "Rods support dim vision; bright white light impairs dark adaptation, so nurses see worse outdoors afterward.",
    "wrongFeedback": {
      "0": "Night/dim vision relies heavily on rods, not cones alone.",
      "2": "Circadian photoreception is real but does not make adaptation “only laziness.”",
      "3": "Rhodopsin chemistry is not operant extinction of laziness."
    },
    "id": "c5-l4-14"
  },
  {
    "chapter": 6,
    "level": 1,
    "section": "§6.1",
    "question": "Learning, as defined in the chapter, is a relatively permanent change that:",
    "options": [
      "Results from experience",
      "Is purely innate like a reflex",
      "Occurs only in nonhuman animals",
      "Requires hypnosis to consolidate"
    ],
    "correct": 0,
    "correctFeedback": "Learning = experience-based change; reflexes/instincts are innate.",
    "wrongFeedback": {
      "1": "Innate reflexes are contrasted with learning.",
      "2": "Learning is not limited to nonhumans.",
      "3": "Hypnosis is not required for the definition."
    },
    "page": 182,
    "id": "c6-l1-01"
  },
  {
    "chapter": 6,
    "level": 1,
    "section": "§6.2",
    "question": "In classical conditioning, a neutral stimulus becomes a CS after it is:",
    "options": [
      "Reliably paired with an unconditioned stimulus",
      "Presented only after a punisher every trial",
      "Randomly assigned to a control group once",
      "Encoded solely by rods in the retina"
    ],
    "correct": 0,
    "correctFeedback": "NS paired with UCS → CS eliciting CR.",
    "wrongFeedback": {
      "1": "Punishers are operant consequences.",
      "2": "Random assignment is experimental design.",
      "3": "Rods are visual receptors."
    },
    "page": 184,
    "id": "c6-l1-02"
  },
  {
    "chapter": 6,
    "level": 1,
    "section": "§6.3",
    "question": "Negative reinforcement always:",
    "options": [
      "Removes an aversive stimulus and increases behavior",
      "Adds an aversive stimulus to decrease behavior",
      "Is identical to positive punishment by definition",
      "Requires observational models to work at all"
    ],
    "correct": 0,
    "correctFeedback": "Negative = remove; reinforcement = increase.",
    "wrongFeedback": {
      "1": "Adding aversive to decrease = positive punishment.",
      "2": "They are different contingencies.",
      "3": "Observational learning is a separate route."
    },
    "page": 193,
    "id": "c6-l1-03"
  },
  {
    "chapter": 6,
    "level": 1,
    "section": "§6.3",
    "question": "A variable-ratio schedule reinforces after:",
    "options": [
      "An unpredictable number of responses",
      "A fixed clock interval every time",
      "Exactly one response then extinction forever",
      "Only innate reflex arcs in the spinal cord"
    ],
    "correct": 0,
    "correctFeedback": "VR: unpredictable response counts—often high response rates.",
    "wrongFeedback": {
      "1": "Fixed interval is time-based and predictable.",
      "2": "Not the VR definition.",
      "3": "Reflexes are not VR schedules."
    },
    "page": 199,
    "id": "c6-l1-04"
  },
  {
    "chapter": 6,
    "level": 1,
    "section": "§6.4",
    "question": "Bandura’s modeling steps include attention, retention, reproduction, and:",
    "options": [
      "Motivation",
      "Absolute threshold",
      "Random assignment",
      "Opponent-process pairing"
    ],
    "correct": 0,
    "correctFeedback": "Attention → retention → reproduction → motivation.",
    "wrongFeedback": {
      "1": "Thresholds are sensation.",
      "2": "Random assignment is methods.",
      "3": "Opponent-process is color vision."
    },
    "page": 204,
    "id": "c6-l1-05"
  },
  {
    "chapter": 6,
    "level": 1,
    "section": "§6.2",
    "question": "Spontaneous recovery refers to:",
    "options": [
      "Return of an extinguished CR after a rest period",
      "Immediate acquisition on the very first NS presentation",
      "Switching from classical to operant in one trial",
      "Permanent loss of the UCS forever"
    ],
    "correct": 0,
    "correctFeedback": "After extinction, CR may reappear following rest.",
    "wrongFeedback": {
      "1": "Acquisition is initial learning.",
      "2": "Not a definition of recovery.",
      "3": "UCS is not permanently deleted by extinction."
    },
    "page": 188,
    "id": "c6-l1-06"
  },
  {
    "chapter": 6,
    "level": 2,
    "section": "§6.2",
    "question": "Stimulus generalization means the organism:",
    "options": [
      "Shows the CR to stimuli similar to the CS",
      "Responds only to the exact CS wavelength forever",
      "Requires continuous reinforcement every second",
      "Must have an IRB before any association forms"
    ],
    "correct": 0,
    "correctFeedback": "Generalization: similar cues elicit CR; discrimination narrows responding.",
    "wrongFeedback": {
      "1": "That is closer to discrimination extremes.",
      "2": "Schedules are operant.",
      "3": "IRB is ethics, not learning mechanism."
    },
    "page": 189,
    "id": "c6-l2-01"
  },
  {
    "chapter": 6,
    "level": 2,
    "section": "§6.3",
    "question": "Positive punishment differs from negative reinforcement because punishment:",
    "options": [
      "Decreases behavior, while reinforcement increases it",
      "Always removes stimuli and therefore increases behavior",
      "Is identical to shaping successive approximations",
      "Can only be delivered by observational models"
    ],
    "correct": 0,
    "correctFeedback": "Reinforcement ↑; punishment ↓ — sign (pos/neg) is add/remove.",
    "wrongFeedback": {
      "1": "Negative reinforcement removes aversive and increases behavior.",
      "2": "Shaping is a training method using reinforcers.",
      "3": "Models relate to observational learning."
    },
    "page": 193,
    "id": "c6-l2-02"
  },
  {
    "chapter": 6,
    "level": 2,
    "section": "§6.3",
    "question": "Partial (intermittent) reinforcement often yields:",
    "options": [
      "Greater resistance to extinction than continuous reinforcement",
      "No learning whatsoever compared with continuous schedules",
      "Automatic conversion of punishers into primary reinforcers",
      "Elimination of all discriminative stimuli overnight"
    ],
    "correct": 0,
    "correctFeedback": "Partial reinforcement extinction effect is a key operant idea.",
    "wrongFeedback": {
      "1": "Learning still occurs under partial schedules.",
      "2": "Punishers/reinforcers keep their definitions.",
      "3": "Discriminative stimuli are not auto-deleted."
    },
    "page": 198,
    "id": "c6-l2-03"
  },
  {
    "chapter": 6,
    "level": 2,
    "section": "§6.4",
    "question": "Vicarious reinforcement increases imitation when the observer:",
    "options": [
      "Sees the model rewarded for the behavior",
      "Receives direct shock every time the model acts",
      "Ignores the model and sleeps through the demo",
      "Paired a CS with an UCS in a Skinner box only"
    ],
    "correct": 0,
    "correctFeedback": "Seeing the model rewarded raises the chance of imitation.",
    "wrongFeedback": {
      "1": "Direct shock to the observer is not vicarious reinforcement.",
      "2": "Attention is required for observational learning.",
      "3": "That describes classical/operant apparatus, not vicarious reward."
    },
    "page": 205,
    "id": "c6-l2-04"
  },
  {
    "chapter": 6,
    "level": 2,
    "section": "§6.1",
    "question": "Associative learning in this chapter primarily includes:",
    "options": [
      "Classical conditioning and operant conditioning",
      "Only Gestalt closure and figure–ground rules",
      "Only circadian melatonin secretion patterns",
      "Only PhD versus PsyD career distinctions"
    ],
    "correct": 0,
    "correctFeedback": "Classical + operant = associative; observational is separate but related.",
    "wrongFeedback": {
      "1": "Gestalt is perception (Ch 5).",
      "2": "Circadian biology is Ch 4.",
      "3": "Careers are Ch 1."
    },
    "page": 183,
    "id": "c6-l2-05"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.2",
    "question": "A nurse wears a white coat (CS) while giving painful shots (UCS); later the coat alone raises a child’s heart rate (CR). Which map is correct?",
    "options": [
      "Coat: CS; pain: UCS; fear/arousal: CR after pairing now",
      "Coat: UCS; pain: CS; heart rate: neutral forever now now",
      "Coat: negative reinforcer removing all pain signals now",
      "Coat: fixed-interval punisher on a VR schedule in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Classic CS/UCS/CR roles after pairing.",
    "wrongFeedback": {
      "1": "Pain is the UCS, not the CS.",
      "2": "Reinforcement terms mislabel classical roles.",
      "3": "Schedules are operant, not this pairing."
    },
    "page": 185,
    "id": "c6-l3-01"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.2",
    "question": "After extinction trials, a dog’s salivation to the bell disappears, then weakly returns next morning. Label?",
    "options": [
      "Spontaneous recovery of the CR after rest in the vignette",
      "Acquisition occurring for the first time ever in the vignette",
      "Positive punishment of the UCS itself in the vignette",
      "Binocular disparity creating salivary place codes now"
    ],
    "correct": 0,
    "correctFeedback": "Extinction then rest → spontaneous recovery.",
    "wrongFeedback": {
      "1": "Acquisition is initial learning.",
      "2": "Punishment is operant.",
      "3": "Disparity is a depth cue."
    },
    "page": 188,
    "id": "c6-l3-02"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.2",
    "question": "Little Albert-style fear of a white rat spreads to a white rabbit. Best term?",
    "options": [
      "Stimulus generalization of the conditioned fear now now",
      "Stimulus discrimination narrowing to one cue in the vignette",
      "Negative reinforcement removing the rabbit in the vignette",
      "Latent learning without any prior pairing in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Similar stimuli elicit the CR = generalization.",
    "wrongFeedback": {
      "1": "Discrimination would reduce responding to the rabbit.",
      "2": "Removing rabbit isn’t the learning term here.",
      "3": "Pairing already occurred."
    },
    "page": 187,
    "id": "c6-l3-03"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.3",
    "question": "A teen cleans the kitchen to stop a parent’s nagging; cleaning becomes more frequent. Contingency?",
    "options": [
      "Negative reinforcement: aversive nagging removed,",
      "Positive punishment: nagging added to decrease cleaning",
      "Classical UCS replacing the nagging sound in the vignette",
      "Figure–ground organization of chore lists in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Remove aversive → behavior ↑ = negative reinforcement.",
    "wrongFeedback": {
      "1": "If nagging were added to decrease cleaning, that would be positive punishment—opposite pattern.",
      "2": "Classical terms don’t fit the consequence logic.",
      "3": "Gestalt is perception."
    },
    "page": 193,
    "id": "c6-l3-04"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.3",
    "question": "A driver speeds; a ticket (fine) follows; speeding decreases. Contingency?",
    "options": [
      "Positive punishment: an aversive stimulus is added now",
      "Negative reinforcement: the fine removes speeding urges",
      "Variable-interval reward for every mile driven in the vignette",
      "Observational retention without any consequence now now"
    ],
    "correct": 0,
    "correctFeedback": "Add aversive → behavior ↓ = positive punishment.",
    "wrongFeedback": {
      "1": "Negative reinforcement increases behavior by removing aversive.",
      "2": "VI is a reinforcement schedule, not a fine.",
      "3": "There was a direct consequence."
    },
    "page": 194,
    "id": "c6-l3-05"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.3",
    "question": "Gaming rewards appear after an unpredictable number of raids. Schedule?",
    "options": [
      "Variable ratio, which often sustains high response rates",
      "Fixed interval with a scalloped pause every hour only",
      "Continuous reinforcement on every single keystroke forever",
      "Absolute threshold schedules of visual brightness now"
    ],
    "correct": 0,
    "correctFeedback": "Unpredictable response counts = VR.",
    "wrongFeedback": {
      "1": "FI is time-based and predictable.",
      "2": "Continuous = every response.",
      "3": "Thresholds are sensation."
    },
    "page": 195,
    "id": "c6-l3-06"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.3",
    "question": "A coach reinforces each closer approximation of a clean vault. Technique?",
    "options": [
      "Shaping via successive approximations with reinforcers",
      "Classical extinction of the vault UCS overnight now now",
      "Random assignment of vaults to IRBs in the vignette now",
      "Opponent-process afterimages of the mat color in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Shaping builds complex operants step by step.",
    "wrongFeedback": {
      "1": "Extinction weakens CRs, not this skill building.",
      "2": "IRB/methods mix.",
      "3": "Color afterimages are vision."
    },
    "page": 196,
    "id": "c6-l3-07"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.4",
    "question": "Children watch an adult praised for sharing toys, then share more themselves. Mechanism emphasized?",
    "options": [
      "Vicarious reinforcement increasing imitation of the model",
      "Direct positive punishment of each child during viewing",
      "Conductive hearing loss blocking all social cues now",
      "Fixed-ratio shock for every observed share in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Seeing the model rewarded → more imitation.",
    "wrongFeedback": {
      "1": "Vicarious ≠ direct punishment of observers.",
      "2": "Hearing loss is not the story.",
      "3": "Shock would punish, not explain praise effects."
    },
    "page": 204,
    "id": "c6-l3-08"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.4",
    "question": "A student watches a tutor solve proofs but cannot reproduce them later; which modeling step most likely failed?",
    "options": [
      "Retention or reproduction—memory/skill limits blocked now",
      "Absolute threshold for chalk dust on the board in the vignette",
      "UCS omission making the tutor a CS forever in the vignette",
      "Pituitary hormones deleting attention automatically now"
    ],
    "correct": 0,
    "correctFeedback": "Attention may have occurred, but retention/reproduction can still fail.",
    "wrongFeedback": {
      "1": "Sensory threshold is not the modeling bottleneck here.",
      "2": "Classical labels misframe tutoring.",
      "3": "Endocrine aside is not Bandura’s steps."
    },
    "page": 205,
    "id": "c6-l3-09"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.3",
    "question": "Phone unlocks sometimes after checking; checking becomes persistent even when rewards are rare. Concept?",
    "options": [
      "Partial reinforcement sustaining checking despite infrequent",
      "Continuous reinforcement on every glance without exception",
      "Classical discrimination of unlock odors alone in the vignette",
      "WEIRD sampling creating unlock schedules in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Intermittent rewards resist extinction—phone checking is a common illustration.",
    "wrongFeedback": {
      "1": "Not continuous if rewards are rare.",
      "2": "Smell discrimination is not required.",
      "3": "Sampling bias ≠ schedule."
    },
    "page": 197,
    "id": "c6-l3-10"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.2",
    "question": "A tone predicts a shock; a light never does; the animal fears the tone not the light. Learning?",
    "options": [
      "Discrimination between predictive CS and nonpredictive",
      "Generalization treating light and tone identically always",
      "Negative punishment of the light by removing shock now",
      "Binocular cues binding tone to retina in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Discrimination: respond to CS, not similar/nonpredictive cues.",
    "wrongFeedback": {
      "1": "Identical responding would be generalization.",
      "2": "Punishment framing is wrong here.",
      "3": "Vision disparity ≠ auditory CS discrimination."
    },
    "page": 190,
    "id": "c6-l3-11"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.1",
    "question": "An infant’s sucking when a nipple touches the mouth is present without practice. Classification in §6.1?",
    "options": [
      "A reflex—innate, not acquired through learning now",
      "Operant shaping of sucking via VR candy rewards now now",
      "Observational learning from televised models only now now",
      "Gestalt closure of the feeding schedule in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Reflexes/instincts are innate contrasts to learning.",
    "wrongFeedback": {
      "1": "No shaping required for the basic reflex.",
      "2": "Not observational by definition here.",
      "3": "Gestalt is perception."
    },
    "page": 182,
    "id": "c6-l3-12"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.3",
    "question": "Taking antacid removes heartburn; antacid use increases. Contingency?",
    "options": [
      "Negative reinforcement: aversive pain removed, taking",
      "Positive punishment: antacid adds pain to decrease use",
      "CS–UCS pairing of chalk with vestibular spin in the vignette",
      "Random selection creating the heartburn molecule now"
    ],
    "correct": 0,
    "correctFeedback": "Escape/avoidance of aversive state via behavior = negative reinforcement.",
    "wrongFeedback": {
      "1": "Use increased, so not punishment.",
      "2": "Classical/vestibular mashup.",
      "3": "Sampling ≠ physiology."
    },
    "page": 200,
    "id": "c6-l3-13"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.4",
    "question": "Bobo-doll style demos show children imitate aggressive acts they watched. Core claim?",
    "options": [
      "Observational learning can transmit aggression without",
      "Only classical salivary conditioning explains doll hitting",
      "Aggression requires sensorineural hearing loss to appear",
      "Fixed-interval melatonin doses create doll models now"
    ],
    "correct": 0,
    "correctFeedback": "Bandura: modeling can produce imitation of aggression.",
    "wrongFeedback": {
      "1": "Salivary classical conditioning is not the Bobo mechanism.",
      "2": "Hearing loss unrelated.",
      "3": "Melatonin/schedules mashup."
    },
    "page": 203,
    "id": "c6-l3-14"
  },
  {
    "chapter": 6,
    "level": 3,
    "section": "§6.2",
    "question": "A flavor paired with illness later produces avoidance of that flavor. Closest classical framing in the chapter’s applications?",
    "options": [
      "Taste/flavor cue becomes a CS associated with illness",
      "Variable-ratio reinforcement of the illness itself now",
      "Positive punishment defined as removing the flavor forever",
      "Top-down color constancy creating nausea in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Conditioned taste-aversion style pairing is a classical application theme.",
    "wrongFeedback": {
      "1": "Illness is not a VR reinforcer here.",
      "2": "Removing flavor isn’t the definition of positive punishment.",
      "3": "Color constancy is vision."
    },
    "page": 186,
    "id": "c6-l3-15"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "2.2+2.3+6.2",
    "question": "Ms. Alvarez praises only already-outgoing students for raising hands, then claims praise *caused* participation gains. There was no random assignment, no untreated control, and baseline talkativeness was never measured. A learning TA notes praise can be a reinforcer *when contingent*. A methods peer cites selection confound. An administrator says “IRB stamp = true experiment.” Best critique?",
    "options": [
      "Without controls or random assignment, selection confounds block causal praise claims",
      "Any verbal praise automatically proves internal validity across every classroom study",
      "Classical CS-US pairing makes random assignment ethically impossible for all teachers",
      "IRB approval alone creates a true experiment even without a manipulated comparison group"
    ],
    "correct": 0,
    "correctFeedback": "Praise may reinforce behavior when contingent, but this design cannot separate selection from treatment effects.",
    "wrongFeedback": {
      "1": "Calling something a reinforcer does not fix a confounded design.",
      "2": "Classical conditioning concepts do not forbid randomized classroom trials.",
      "3": "Ethics review is not the same as experimental control."
    },
    "id": "c6-l4-01"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "3.2+6.2+6.3",
    "question": "A popular thread says “dopamine *is* reinforcement, so Skinner boxes need no behavior measures—just scan the midbrain.” A biopsych classmate notes dopamine correlates with reward prediction in many studies. An operant tutor insists reinforcement is defined by its effect on future response rate. A philosopher cites circularity risks. Best correction?",
    "options": [
      "Action potentials forbid all reinforcement schedules by silencing every motor neuron",
      "Neurochemistry may correlate with reward, but reinforcement is defined behaviorally",
      "The pituitary gland is the only structure that can deliver secondary reinforcers",
      "Sympathetic arousal extinguishes every conditioned response in a single trial always"
    ],
    "correct": 1,
    "correctFeedback": "Brain reward chemistry is informative, but operant reinforcement is identified by increased future responding after a consequence.",
    "wrongFeedback": {
      "0": "Neural firing does not make schedules impossible.",
      "2": "Secondary reinforcers are not pituitary-exclusive.",
      "3": "Arousal does not universally extinguish CRs in one trial."
    },
    "id": "c6-l4-02"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.1+6.2+5.1",
    "question": "After chemo, Mr. Liu feels nauseous when he smells the hospital disinfectant that accompanied infusions (taste-aversion–like learning). His sister says this is operant punishment because he “chose” to walk into the ward. His brother says it is negative reinforcement for entering. A nurse confuses US and CS. Which analysis is best?",
    "options": [
      "Entering the ward was positively punished by removing an aversive chemo schedule",
      "Negative reinforcement explains nausea because leaving adds a pleasant US outcome",
      "Disinfectant likely became a CS paired with nausea—prepared classical conditioning",
      "The US is the disinfectant smell; the CS is chemo's pharmacological illness effect"
    ],
    "correct": 2,
    "correctFeedback": "Cue-to-consequence taste-aversion learning is classical: a previously neutral cue (often taste/smell) predicts illness (US).",
    "wrongFeedback": {
      "0": "This pattern is not best cast as operant punishment of choosing the hallway.",
      "1": "Negative reinforcement is removing aversives to increase behavior—not this CS–US nausea link.",
      "3": "Chemo/illness is the US; the smell is the CS—not the reverse."
    },
    "id": "c6-l4-03"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.2+6.3+2.2",
    "question": "A dog trainer stops shocking a dog when it sits (shock offset contingent on sitting). She calls this positive punishment “because shock is involved.” A classmate says it is negative reinforcement. Another says it is classical conditioning of the sit CR to a clicker never paired with anything. A methods auditor asks for a noncontingent-shock control. Best label?",
    "options": [
      "Any shock presence makes the procedure positive punishment by definition always",
      "Clicker-absent classical conditioning is the only process that can increase sitting",
      "Noncontingent shock controls are useless for distinguishing reinforcement processes",
      "Shock removal contingent on sitting is negative reinforcement of the sit response"
    ],
    "correct": 3,
    "correctFeedback": "Behavior increases when an aversive is removed contingently → negative reinforcement (not positive punishment).",
    "wrongFeedback": {
      "0": "Shock presence alone does not define positive punishment; contingency and effect matter.",
      "1": "Classical conditioning is not required for this operant contingency to work.",
      "2": "Yoked/noncontingent controls help test whether contingency matters."
    },
    "id": "c6-l4-04"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.3+6.4+4.1",
    "question": "A sleep-deprived RA reinforces a rat’s lever presses on a variable-ratio schedule and sees high, steady responding. The PI’s email calls VR “the same as continuous reinforcement because both use food.” A classmate predicts VR should extinguish fastest. A consciousness peer says REM rebound will erase the operant map overnight. Best statement?",
    "options": [
      "VR usually yields high rates and more extinction resistance than continuous schedules",
      "Continuous and VR schedules match in rate and extinction resistance by textbook definition",
      "VR schedules always extinguish faster than continuous reinforcement across every species",
      "REM rebound deletes operant learning overnight whenever food pellets were the reinforcers"
    ],
    "correct": 0,
    "correctFeedback": "Partial schedules like VR typically produce rapid responding and slower extinction than continuous reinforcement.",
    "wrongFeedback": {
      "1": "They differ in patterning and extinction resistance.",
      "2": "Continuous usually extinguishes faster, not VR.",
      "3": "Sleep/REM effects do not simply erase operant learning each night."
    },
    "id": "c6-l4-05"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.4+1.2+2.2",
    "question": "Kids watch an adult punch a Bobo doll; later many imitate, especially if the adult was rewarded. A strict Watson fan says only classical CS–US pairing of the doll with candy explains punches. A Freud fan says Thanatos alone. A methods reviewer notes no random assignment to model type in a blog replication. Best social-cognitive reading?",
    "options": [
      "Only classical pairing of Bobo with candy can generate punching among observers",
      "Observational learning can produce imitation; model consequences shape performance",
      "Thanatos makes observational learning measures scientifically uninterpretable always",
      "Blog replications without assignment prove Bandura's findings must be fully discarded"
    ],
    "correct": 1,
    "correctFeedback": "Bandura’s framework: observers can learn via modeling, and vicarious consequences influence performance of the learned acts.",
    "wrongFeedback": {
      "0": "Imitation here is not reduced to CS–US candy pairing alone.",
      "2": "Freudian Thanatos is not the operative experimental account.",
      "3": "A weak blog replication does not automatically void the classic findings."
    },
    "id": "c6-l4-06"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.3+2.2+5.4",
    "question": "In a latent-learning demo, rats explore a maze without food for days, then show short paths once food is introduced—matching trained controls quickly. Tutor A says no learning occurred until food appeared. Tutor B says this refutes any cognitive map talk. Tutor C says the maze walls became a CS for dopamine. Methods asks whether food introduction was confounded with extra handling. Best take?",
    "options": [
      "No learning is possible without continuous reinforcement on every maze alley visit",
      "Latent learning refutes cognitive maps and proves pure S-R chains are exhaustive",
      "Learning occurred in unrewarded exploration; food revealed performance of a map",
      "Handling confounds mean latent learning can never be studied with any real controls"
    ],
    "correct": 2,
    "correctFeedback": "Tolman’s point: learning can be latent; reinforcement often affects performance more than acquisition alone.",
    "wrongFeedback": {
      "0": "Unrewarded exploration can still produce learning.",
      "1": "Latent learning supports cognitive-map ideas against strict S–R exclusivity.",
      "3": "Confounds should be controlled—not treated as a ban on the paradigm."
    },
    "id": "c6-l4-07"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.1+6.2+5.2",
    "question": "A fear-conditioning study pairs a blue light (CS) with a mild shock (US); later the light elicits freezing (CR). Writer Dana swaps labels, calling the light the US and freezing the UR. Reviewer Eli wants a discrimination control (blue vs green). Biopsych Fran says the amygdala is irrelevant because “behaviorism banned the brain.” Best correction?",
    "options": [
      "The light must be the US because it appears first on the clock during each trial",
      "Freezing to the light is the UR; the shock is only a secondary reinforcer cue",
      "Behaviorism's history means amygdala data cannot inform fear-learning mechanisms",
      "Light is CS, shock is US, freezing to light is CR; brain circuits still matter"
    ],
    "correct": 3,
    "correctFeedback": "Standard labels: CS = light, US = shock, UR = freezing to shock, CR = freezing to light; modern work still maps neural substrates.",
    "wrongFeedback": {
      "0": "Order alone does not make the first stimulus a US.",
      "1": "UR is the unconditioned response to the US, not the response to the CS.",
      "2": "Historical behaviorism does not ban studying neural bases of learning."
    },
    "id": "c6-l4-08"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.2+6.3+2.4",
    "question": "A parent takes away a teen’s phone after midnight gaming (contingent removal of a pleasant stimulus); gaming at night drops. Uncle calls it negative reinforcement “because something was removed.” Aunt calls it positive punishment “because the parent added a lecture.” An ethicist asks about consistency and dignity. Correct operant label for phone removal?",
    "options": [
      "Removing the valued phone contingently is negative punishment if night gaming falls",
      "Any removal procedure is negative reinforcement even when the target behavior falls",
      "Adding a lecture reclassifies phone loss as classical extinction of gaming urges",
      "Ethics concerns mean operant labels cannot apply to family phone rules in any case"
    ],
    "correct": 0,
    "correctFeedback": "Contingent removal of a pleasant stimulus that decreases behavior = negative punishment (response cost).",
    "wrongFeedback": {
      "1": "Negative reinforcement increases behavior by removing aversives.",
      "2": "A lecture may be separate positive punishment; it does not redefine phone removal as extinction.",
      "3": "Ethics matter for practice, but they do not make the contingency unlabeled."
    },
    "id": "c6-l4-09"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.1+3.4+4.5",
    "question": "A hypnosis stage show claims audience members were “classically conditioned to cluck like chickens” after one pairing of a snap with a joke. Skeptics note demand characteristics, voluntary compliance, and no CR measurement against a US. A sleep researcher jokes it is REM without atonia. A methods peer wants a control snap without suggestion. Best evaluation?",
    "options": [
      "One snap-joke pairing meets Rescorla contingency standards for a durable CR always",
      "Stage compliance plus suggestion is not well-evidenced classical conditioning of a CR",
      "REM without atonia is the accepted mechanism for hypnotic chicken-clucking CRs",
      "Control snaps without suggestion are unnecessary if the audience laughs loudly enough"
    ],
    "correct": 1,
    "correctFeedback": "Demonstrations without proper controls and CR measurement do not establish classical conditioning.",
    "wrongFeedback": {
      "0": "Contingency/control standards are not met by a single theatrical pairing.",
      "2": "REM atonia mechanisms are about sleep, not stage hypnosis clucking.",
      "3": "Controls are needed precisely when social demand is high."
    },
    "id": "c6-l4-10"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.2+6.4+5.5",
    "question": "Players grind a game with loot on a variable-interval schedule; they check the reward chest at a steady rate. A streamer says this is continuous reinforcement “because loot sometimes appears.” A perception friend says Gestalt closure makes VI identical to fixed-ratio. A parent calls the game classical conditioning of the thumb. Best learning analysis?",
    "options": [
      "Any occasional loot drop redefines the schedule as continuous reinforcement by rule",
      "Gestalt closure converts variable-interval timing into fixed-ratio run-and-pause forms",
      "VI produces steady checking; it is partial reinforcement, not continuous reinforcement",
      "Thumb movements are classically conditioned URs to a loading-screen US every time"
    ],
    "correct": 2,
    "correctFeedback": "Variable-interval schedules are partial/intermittent and typically yield steady response rates—not continuous reinforcement.",
    "wrongFeedback": {
      "0": "Occasional rewards define partial, not continuous, schedules.",
      "1": "Gestalt principles do not equate VI with FR patterning.",
      "3": "Operant checking is not a classical UR to a loading screen US."
    },
    "id": "c6-l4-11"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.1+6.3+2.2",
    "question": "Rescorla-style teaching: Group A gets a tone that perfectly predicts shock; Group B gets the same number of tone–shock pairings but shocks also occur unpaired, so the tone is a poor predictor. Only Group A freezes strongly to the tone. Student Kai says contiguity alone explains both groups equally. Student Mia says blocking by dopamine explains Group B. Best lesson?",
    "options": [
      "Equal pairing counts must produce equal freezing whenever contiguity is carefully matched",
      "Dopamine blocking uniquely explains Group A and forbids contingency-based readings",
      "Unpaired shocks make tone-shock contiguity impossible, so Group B cannot be run at all",
      "Predictive contingency—not mere pairing counts—drives associative learning in this demo"
    ],
    "correct": 3,
    "correctFeedback": "Rescorla’s point: the CS must predict the US above baseline; contingency matters beyond raw contiguity.",
    "wrongFeedback": {
      "0": "Matched pairing counts with different contingencies yield different learning.",
      "1": "The design teaches contingency; it is not primarily a dopamine-blockade demo.",
      "2": "Group B is runnable and informative precisely because unpaired USs occur."
    },
    "id": "c6-l4-12"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.4+1.3+3.1",
    "question": "A clinic teaches coping skills via filmed models (observational learning) for anxiety. A funder demands proof it is “pure Skinnerian shaping with primary food reinforcers only.” A cognitive therapist cites expectancy and self-efficacy. A biopsych notes prefrontal regulation of fear expression. Methods wants waitlist and active controls. Best stance?",
    "options": [
      "Observational social-cognitive methods can work without reducing therapy to food shaping",
      "Only primary food reinforcers can change anxiety-related behavior in humans ever",
      "Self-efficacy talk bans any use of filmed models as a learning mechanism in clinics",
      "Prefrontal biology means waitlist controls are scientifically forbidden in skill training"
    ],
    "correct": 0,
    "correctFeedback": "Bandura-style observational learning and efficacy beliefs are legitimate learning pathways—not mere failed Skinner boxes.",
    "wrongFeedback": {
      "1": "Human clinical change is not limited to primary food reinforcement.",
      "2": "Self-efficacy theory actually motivates modeling interventions.",
      "3": "Biology of regulation supports, rather than bans, controlled outcome tests."
    },
    "id": "c6-l4-13"
  },
  {
    "chapter": 6,
    "level": 4,
    "section": "6.2+6.3+5.1+2.3",
    "question": "A teacher removes weekend homework when the class reaches quiet-line criteria (escape from an aversive task). Quiet lines increase. A columnist calls this bribery and positive reinforcement “because kids gain free time.” A rival teacher says it is classical conditioning of silence to the bell. A parent says removing homework is always punishment. Methods asks whether quieter classes differed at baseline. Best operant reading?",
    "options": [
      "Free time proves the procedure is classical conditioning of silence to the hall bell",
      "Contingent removal of aversive homework is negative reinforcement of quiet lining up",
      "Removing homework is always punishment even when the quiet-line behavior increases",
      "Baseline differences are irrelevant if a diary says the class felt quieter"
    ],
    "correct": 1,
    "correctFeedback": "Behavior increases after contingent removal of an aversive → negative reinforcement (not punishment).",
    "wrongFeedback": {
      "0": "Free time here is the consequence of removing work; the process is operant, not CS–bell classical silence.",
      "2": "Punishment decreases behavior; here quiet lining increased.",
      "3": "Baselines matter for claiming change; diary feelings are weak causal evidence."
    },
    "id": "c6-l4-14"
  },
  {
    "chapter": 7,
    "level": 1,
    "section": "§7.1",
    "question": "Cognition is best described as:",
    "options": [
      "Only reflexive motor habits",
      "Thinking and related mental processes",
      "Personality trait stability alone",
      "Hormone release patterns only"
    ],
    "correct": 1,
    "correctFeedback": "Cognition covers thinking and related processes (perceive, know, remember, judge).",
    "wrongFeedback": {
      "0": "Cognition is mental, not only reflexes.",
      "1": "None",
      "2": "Personality is a different chapter topic.",
      "3": "Hormones are biological mechanisms, not the definition of cognition."
    },
    "page": 214,
    "id": "c7-l1-01"
  },
  {
    "chapter": 7,
    "level": 1,
    "section": "§7.1",
    "question": "A prototype is:",
    "options": [
      "A random list of unrelated words",
      "The best or most typical example of a concept",
      "A guaranteed problem-solving algorithm",
      "A measure of IQ exclusively"
    ],
    "correct": 1,
    "correctFeedback": "Prototypes are highly typical category examples that help organize thinking.",
    "wrongFeedback": {
      "0": "Prototypes are typical exemplars, not random lists.",
      "1": "None",
      "2": "Algorithms are problem-solving procedures.",
      "3": "IQ is separate from the prototype concept."
    },
    "page": 215,
    "id": "c7-l1-02"
  },
  {
    "chapter": 7,
    "level": 1,
    "section": "§7.2",
    "question": "The smallest unit of sound in a language is a:",
    "options": [
      "Morpheme",
      "Phoneme",
      "Schema",
      "Heuristic"
    ],
    "correct": 1,
    "correctFeedback": "Phonemes are basic sound units; morphemes are meaning units.",
    "wrongFeedback": {
      "0": "Morphemes carry meaning.",
      "1": "None",
      "2": "Schemata are concept clusters.",
      "3": "Heuristics are thinking shortcuts."
    },
    "page": 218,
    "id": "c7-l1-03"
  },
  {
    "chapter": 7,
    "level": 1,
    "section": "§7.3",
    "question": "An algorithm is:",
    "options": [
      "A mental shortcut that may err",
      "A step-by-step procedure that guarantees a solution if one exists",
      "A prototype of a category",
      "A type of flashbulb memory"
    ],
    "correct": 1,
    "correctFeedback": "Algorithms are exhaustive step-by-step methods.",
    "wrongFeedback": {
      "0": "That describes a heuristic.",
      "1": "None",
      "2": "Prototypes organize concepts.",
      "3": "Flashbulb memories are vivid emotional memories."
    },
    "page": 222,
    "id": "c7-l1-04"
  },
  {
    "chapter": 7,
    "level": 1,
    "section": "§7.4",
    "question": "Spearman’s g refers to:",
    "options": [
      "A general intelligence factor",
      "Only musical talent",
      "A schedule of reinforcement",
      "A defense mechanism"
    ],
    "correct": 0,
    "correctFeedback": "Spearman proposed a general intelligence factor (g).",
    "wrongFeedback": {
      "1": "Gardner discusses multiple intelligences including musical.",
      "2": "Reinforcement schedules are operant conditioning.",
      "3": "Defenses are psychodynamic."
    },
    "page": 228,
    "id": "c7-l1-05"
  },
  {
    "chapter": 7,
    "level": 1,
    "section": "§7.5",
    "question": "The Flynn effect refers to:",
    "options": [
      "Declining raw IQ scores every decade",
      "Rising average raw IQ scores across generations",
      "Loss of crystallized knowledge only",
      "Identical twin concordance for personality"
    ],
    "correct": 1,
    "correctFeedback": "Flynn effect = generational rises in raw intelligence-test scores.",
    "wrongFeedback": {
      "0": "The effect is a rise, not a decline.",
      "1": "None",
      "2": "It is about test scores broadly, not only crystallized loss.",
      "3": "Twin concordance is a heritability topic."
    },
    "page": 232,
    "id": "c7-l1-06"
  },
  {
    "chapter": 7,
    "level": 2,
    "section": "§7.3",
    "question": "Functional fixedness most directly impairs problem solving by:",
    "options": [
      "Blocking new uses for a familiar object",
      "Increasing working-memory capacity",
      "Guaranteeing algorithmic success",
      "Eliminating all heuristics"
    ],
    "correct": 0,
    "correctFeedback": "Functional fixedness sticks people to usual object functions.",
    "wrongFeedback": {
      "1": "It does not increase capacity.",
      "2": "It hinders, not guarantees, solutions.",
      "3": "Heuristics remain available but may not help."
    },
    "page": 224,
    "id": "c7-l2-01"
  },
  {
    "chapter": 7,
    "level": 2,
    "section": "§7.3",
    "question": "Availability heuristic judgments rely mainly on:",
    "options": [
      "Ease of bringing examples to mind",
      "Strict Bayesian base-rate math only",
      "Random genetic mutations",
      "Operant extinction curves"
    ],
    "correct": 0,
    "correctFeedback": "Availability uses ease of retrieval as a cue for frequency/probability.",
    "wrongFeedback": {
      "1": "People often neglect base rates.",
      "2": "Genetics is unrelated here.",
      "3": "Extinction is learning, not this heuristic."
    },
    "page": 225,
    "id": "c7-l2-02"
  },
  {
    "chapter": 7,
    "level": 2,
    "section": "§7.4",
    "question": "Sternberg’s triarchic theory includes analytical, creative, and:",
    "options": [
      "Practical intelligence",
      "Only g-factor speed",
      "Sensory adaptation",
      "Id impulses"
    ],
    "correct": 0,
    "correctFeedback": "Triarchic = analytical, creative, practical.",
    "wrongFeedback": {
      "1": "Sternberg expands beyond g alone.",
      "2": "Sensory adaptation is sensation.",
      "3": "Id is Freudian."
    },
    "page": 228,
    "id": "c7-l2-03"
  },
  {
    "chapter": 7,
    "level": 2,
    "section": "§7.2",
    "question": "Morphemes differ from phonemes because morphemes:",
    "options": [
      "Are the smallest units of meaning",
      "Are only vowel sounds",
      "Cannot combine into words",
      "Are identical to schemata"
    ],
    "correct": 0,
    "correctFeedback": "Morphemes = smallest meaning units; phonemes = sound units.",
    "wrongFeedback": {
      "1": "Phonemes include consonants too.",
      "2": "Morphemes combine into words.",
      "3": "Schemata are conceptual clusters."
    },
    "page": 218,
    "id": "c7-l2-04"
  },
  {
    "chapter": 7,
    "level": 2,
    "section": "§7.6",
    "question": "Range of reaction emphasizes that genes:",
    "options": [
      "Set boundaries within which environment can shape outcomes",
      "Fully determine IQ with no environmental role",
      "Are irrelevant to cognitive ability",
      "Only affect height, never cognition"
    ],
    "correct": 0,
    "correctFeedback": "Range of reaction: genetic potential + environmental placement.",
    "wrongFeedback": {
      "1": "Both genes and environment matter.",
      "2": "Genes contribute.",
      "3": "Cognitive traits are also discussed."
    },
    "page": 236,
    "id": "c7-l2-05"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.3",
    "question": "A student always restarts coding bugs by rewriting the whole file because that worked once, ignoring smaller debug steps. This best illustrates:",
    "options": [
      "Mental set persisting with a past approach in the vignette",
      "Secure attachment to a caregiver in the vignette now now",
      "Sensory adaptation to room light in the vignette now now",
      "Token economy reinforcement in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Mental set = sticking with a previously successful strategy.",
    "wrongFeedback": {
      "1": "Attachment is developmental.",
      "2": "Adaptation is sensory.",
      "3": "Tokens are operant tools."
    },
    "page": 224,
    "id": "c7-l3-01"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.3",
    "question": "After seeing news about plane crashes, Mira overestimates flying risk versus driving. She is likely using:",
    "options": [
      "Availability heuristic from vivid recall in the vignette",
      "A perfect algorithm for risk in the vignette given these facts",
      "Spearman’s pure g calculation in the vignette given these facts",
      "Classical extinction of fear in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Vivid crash stories come easily to mind → availability.",
    "wrongFeedback": {
      "1": "No guaranteed algorithm is described.",
      "2": "g is intelligence structure.",
      "3": "Extinction weakens CRs."
    },
    "page": 225,
    "id": "c7-l3-02"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.1",
    "question": "Calling a robin a “better bird” than a penguin for teaching the bird concept highlights:",
    "options": [
      "Prototype typicality within a concept in the vignette",
      "Anterograde amnesia in the vignette given these facts",
      "Drive-reduction thirst in the vignette given these facts",
      "Groupthink consensus in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Robins are closer to many people’s bird prototype.",
    "wrongFeedback": {
      "1": "Amnesia is memory loss.",
      "2": "Drive theory is motivation.",
      "3": "Groupthink is social."
    },
    "page": 215,
    "id": "c7-l3-03"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.3",
    "question": "Using a coin only as money and never as a screwdriver tip in a pinch shows:",
    "options": [
      "Functional fixedness about object use in the vignette now",
      "Flashbulb accuracy guarantees in the vignette given these facts",
      "Flynn-effect score gains in the vignette given these facts",
      "Unconditional positive regard in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Stuck on conventional function = functional fixedness.",
    "wrongFeedback": {
      "1": "Flashbulb is vivid memory.",
      "2": "Flynn is generational IQ.",
      "3": "UPR is Rogers."
    },
    "page": 224,
    "id": "c7-l3-04"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.4",
    "question": "Solving novel machine failures with inventive workarounds best maps onto Sternberg’s:",
    "options": [
      "Creative intelligence component in the vignette now now",
      "Only crystallized vocabulary in the vignette given these facts",
      "Sensory memory store in the vignette given these facts",
      "Id pleasure seeking in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Creative intelligence = novel problem solutions.",
    "wrongFeedback": {
      "1": "Crystallized is accumulated knowledge.",
      "2": "Sensory memory is brief.",
      "3": "Id is Freudian."
    },
    "page": 228,
    "id": "c7-l3-05"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.4",
    "question": "Navigating a new city’s transit without a map by adapting flexibly best fits Sternberg’s:",
    "options": [
      "Practical intelligence (“street smarts”) in the vignette",
      "Phoneme discrimination only in the vignette given these facts",
      "Systematic desensitization in the vignette given these facts",
      "Projective testing in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Practical intelligence applies knowledge to everyday contexts.",
    "wrongFeedback": {
      "1": "Phonemes are language sounds.",
      "2": "Desensitization is therapy.",
      "3": "Projectives assess personality."
    },
    "page": 228,
    "id": "c7-l3-06"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.5",
    "question": "A culturally loaded verbal IQ item may threaten:",
    "options": [
      "Fairness / cultural bias validity concerns in the vignette",
      "Guaranteed construct validity forever in the vignette now",
      "Sensory threshold measurement in the vignette given these facts",
      "GAS exhaustion stage in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Culture-loaded items raise bias and fairness issues.",
    "wrongFeedback": {
      "1": "Bias threatens validity claims.",
      "2": "Thresholds are sensation.",
      "3": "GAS is stress."
    },
    "page": 234,
    "id": "c7-l3-07"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.3",
    "question": "Ignoring base rates of a rare disease after a vivid positive test story is closest to:",
    "options": [
      "Representativeness / base-rate neglect themes in the vignette",
      "Operant shaping of pigeons in the vignette given these facts",
      "Hippocampal consolidation only in the vignette given these facts",
      "Display-rule learning in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Judging by resemblance while neglecting base rates is a classic bias pattern.",
    "wrongFeedback": {
      "1": "Shaping is operant.",
      "2": "Consolidation is memory.",
      "3": "Display rules are emotion."
    },
    "page": 226,
    "id": "c7-l3-08"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.1",
    "question": "Knowing the “restaurant script” (order→eat→pay) is an example of:",
    "options": [
      "An event schema / script in the vignette",
      "A fixed-ratio schedule in the vignette given these facts",
      "Retrograde amnesia in the vignette given these facts",
      "Type A hostility in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Event schemata (scripts) guide routine sequences.",
    "wrongFeedback": {
      "1": "Schedules are operant.",
      "2": "Amnesia is memory loss.",
      "3": "Type A is stress/personality."
    },
    "page": 216,
    "id": "c7-l3-09"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.2",
    "question": "Children worldwide progressing from babbling toward structured grammar supports:",
    "options": [
      "Orderly early language acquisition patterns in the vignette",
      "Complete environmental irrelevance in the vignette now",
      "Personality Big Five only in the vignette given these facts",
      "SRRS life-change units in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "OpenStax notes a similar early acquisition sequence across cultures.",
    "wrongFeedback": {
      "1": "Environment still matters; sequence is widely shared.",
      "2": "Big Five is personality.",
      "3": "SRRS is stress."
    },
    "page": 219,
    "id": "c7-l3-10"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.5",
    "question": "If two alternate IQ forms correlate highly, that supports:",
    "options": [
      "Reliability of the measure in the vignette given these facts",
      "That the test causes intelligence in the vignette now now",
      "That heuristics are algorithms in the vignette given these facts",
      "That schemas are phonemes in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "High alternate-form correlation → reliability evidence.",
    "wrongFeedback": {
      "1": "Reliability ≠ causation of IQ.",
      "2": "Heuristics ≠ algorithms.",
      "3": "Different constructs."
    },
    "page": 231,
    "id": "c7-l3-11"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.3",
    "question": "A password cracker trying every combination illustrates an:",
    "options": [
      "Algorithmic exhaustive search in the vignette",
      "Availability heuristic only in the vignette given these facts",
      "Secure attachment style in the vignette given these facts",
      "Token economy backup in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Trying all combinations is algorithmic.",
    "wrongFeedback": {
      "1": "Availability is a shortcut.",
      "2": "Attachment is developmental.",
      "3": "Tokens reinforce behavior."
    },
    "page": 222,
    "id": "c7-l3-12"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.4",
    "question": "Gardner listing linguistic, spatial, and interpersonal intelligences challenges:",
    "options": [
      "Narrow single-g definitions of intelligence in the vignette",
      "The existence of phonemes in the vignette given these facts",
      "Atkinson–Shiffrin sensory store in the vignette now",
      "Milgram obedience rates in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Multiple intelligences pluralize what “smart” means beyond g alone.",
    "wrongFeedback": {
      "1": "Phonemes still exist.",
      "2": "Memory model unrelated.",
      "3": "Obedience is social."
    },
    "page": 229,
    "id": "c7-l3-13"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.6",
    "question": "Twins reared apart still resembling each other on IQ most directly supports:",
    "options": [
      "Genetic contribution within a reaction range in the vignette",
      "That environment is the only cause in the vignette now",
      "That IQ tests measure only motivation in the vignette now",
      "That language has no lexicon in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Similarity despite different homes implicates genetics (with shared-method caveats).",
    "wrongFeedback": {
      "1": "Genes matter too.",
      "2": "IQ measures cognitive performance, not only motivation.",
      "3": "Language has lexicon+grammar."
    },
    "page": 238,
    "id": "c7-l3-14"
  },
  {
    "chapter": 7,
    "level": 3,
    "section": "§7.3",
    "question": "Confirmation bias would lead a student to:",
    "options": [
      "Seek only evidence supporting a favored theory",
      "Run a fully pre-registered adversarial test in the vignette",
      "Ignore all prototypes when categorizing in the vignette",
      "Use only algorithms, never heuristics in the vignette now"
    ],
    "correct": 0,
    "correctFeedback": "Confirmation bias favors supportive evidence.",
    "wrongFeedback": {
      "1": "That would fight the bias.",
      "2": "Prototypes are separate.",
      "3": "Bias is about evidence search, not banning heuristics."
    },
    "page": 226,
    "id": "c7-l3-15"
  },
  {
    "id": "c7-l4-01",
    "chapter": 7,
    "level": 4,
    "section": "§7.3 + Ch2/6",
    "question": "A firm runs a decision bootcamp against availability and representativeness. Half the managers get spaced retrieval on cases; half get one massed lecture (randomized). The blog then claims the bootcamp *caused* promotions because attendees who later rose also named more heuristics on a post-test. HR, methods, and learning staff argue. Strongest analysis?",
    "options": [
      "Promotion links are still correlational with many career confounds; even with randomized training, causal credit for promotions needs",
      "Naming availability correctly classically conditions salary increases, so promotion correlations become true experiments without tracking job",
      "Massed lectures equal spaced retrieval for transfer, therefore any promotion difference must be Flynn-effect noise rather than a validity or",
      "Heuristics are phonemes of executive function, so only Wernicke’s aphasia batteries can validate managerial judgment training before HR may"
    ],
    "correct": 0,
    "correctFeedback": "Randomized training helps internal validity for learning outcomes, but promotions remain multiply determined; post-test naming ≠ career causation (§7.3; Ch2; Ch6).",
    "wrongFeedback": {
      "1": "People who pick this treat labeling a bias as classical conditioning that prints money—unsupported and methods-blind.",
      "2": "People who pick this deny spacing/retrieval advantages and dump residuals into Flynn-effect handwaving.",
      "3": "People who pick this miscast heuristics as speech sounds and derail into aphasia testing."
    }
  },
  {
    "id": "c7-l4-02",
    "chapter": 7,
    "level": 4,
    "section": "§7.4–7.5 + Ch3/5/14",
    "question": "Amira’s group IQ screen is average, yet she freezes on timed word problems after a noisy lunch. The teacher wants less recess to “raise crystallized intelligence.” Audiology finds temporary conductive hearing loss; a tutor suspects working-memory load and stereotype threat. Best next-step framing?",
    "options": [
      "Treat the freeze as possible sensory/attentional load and situational threat interacting with fluid problem solving—not proof of low g or a",
      "Spearman’s g equals absolute auditory threshold, so otitis-related blur permanently recalibrates intelligence and recess must be removed to",
      "Crystallized intelligence lives on the basilar membrane; cutting recess re-encodes semantic facts through cone photopigments after cafeteria",
      "Stereotype threat is a first-rank Schneiderian delusion, so discard standardized testing and rely only on projective inkblots for placement"
    ],
    "correct": 0,
    "correctFeedback": "Context (noise, threat, working memory) can suppress timed performance without rewriting g; recess cuts are not an intelligence intervention (§7.4–7.5).",
    "wrongFeedback": {
      "1": "People who pick this equate g with a sensory threshold and invent permanent biological rewriting.",
      "2": "People who pick this scramble cochlear/visual anatomy with intelligence theory.",
      "3": "People who pick this pathologize stereotype threat as psychosis and misuse assessment."
    }
  },
  {
    "id": "c7-l4-03",
    "chapter": 7,
    "level": 4,
    "section": "§7.1 + Ch6/8",
    "question": "A quiz app rewards streak speed for categorizing exemplars (robin→bird). Under time pressure users reject penguins as birds, then later “remember” the app taught that rule. Product calls it insight; memory research suspects reconstruction; learning sees reinforced prototype matching. Best account?",
    "options": [
      "Speed rewards strengthened prototype/heuristic responding, and later recall reconstructed the app’s contingencies as a false semantic rule about",
      "Pairing robin images with food pellets extinguished every schema, proving category algorithms never err when streaks deliver variable-ratio",
      "The misinformation effect applies only to courtroom verbs about smashed glass, never to category-learning apps that reinforce fast prototype",
      "Phoneme segmentation failure alone explains penguin rejection without invoking concepts, reinforcement history, or reconstructive semantic memory"
    ],
    "correct": 0,
    "correctFeedback": "Reinforced fast prototype use plus reconstructive memory can create false “lessons” (§7.1; Ch6; Ch8).",
    "wrongFeedback": {
      "1": "People who pick this invent classical food pairing and claim algorithms are error-proof under pressure.",
      "2": "People who pick this over-restrict misinformation to eyewitness wording only.",
      "3": "People who pick this reduce a concepts/learning issue to speech-sound processing."
    }
  },
  {
    "id": "c7-l4-04",
    "chapter": 7,
    "level": 4,
    "section": "§7.3 + Ch2/14",
    "question": "After a viral crash video, a city spends heavily on redesigns (availability-driven urgency after sleepless crisis meetings). Crashes fall on treated and untreated roads during a mild winter and quieter nightlife. Officials claim the redesign caused the drop. Strongest critique?",
    "options": [
      "Salient media can drive policy via availability, but history/maturation and missing controls block causal credit; stress-biased urgency",
      "Any post-campaign crash decline is experimental proof because availability heuristics secretly randomize drivers into treated and untreated",
      "Mild winters positively reinforce hippocampal route memory in drivers, which cancels maturation threats and validates causal claims without",
      "Sleep loss raises crystallized intelligence in planners, so availability-based spending is methodologically sound even when untreated roads"
    ],
    "correct": 0,
    "correctFeedback": "Availability plus confounds ≠ causation; untreated parallels undermine redesign credit (§7.3; Ch2; stress).",
    "wrongFeedback": {
      "1": "People who pick this equate post-hoc drops with experiments and invent random assignment from a heuristic.",
      "2": "People who pick this misuse reinforcement/memory anatomy to deny validity threats.",
      "3": "People who pick this romanticize sleep loss as making smarter causal inference."
    }
  },
  {
    "id": "c7-l4-05",
    "chapter": 7,
    "level": 4,
    "section": "§7.5 + Ch9/11/15",
    "question": "Parents seek IQ retesting after one low group score. The child changed schools mid-year; a parent’s anxiety fuels nightly “I’m dumb” drilling. A counselor notes parental neuroticism and fear of fixed intelligence. Best evidence-based message?",
    "options": [
      "A single screening score is not destiny; developmental disruption, anxiety modeling, and threat-laden practice can depress performance—reassess",
      "g is sealed at birth by parental neuroticism percentiles, making retesting unethical while intensive deficit-focused drilling becomes the only",
      "School switches raise individual IQ within two weeks via the Flynn effect, so parental anxiety and drilling quality cannot influence timed",
      "Attachment disruption converts fluid intelligence into a specific phobia of numerals that should be treated with ECT before any psychoeducational"
    ],
    "correct": 0,
    "correctFeedback": "Interpret scores in developmental and emotional context; avoid fixed-mindset harm (§7.5; Ch9; personality/anxiety).",
    "wrongFeedback": {
      "1": "People who pick this freeze g to a parent’s trait score and prescribe harmful drilling.",
      "2": "People who pick this misuse Flynn effect as a rapid individual booster.",
      "3": "People who pick this invent an IQ-to-phobia conversion and jump to ECT."
    }
  },
  {
    "id": "c7-l4-06",
    "chapter": 7,
    "level": 4,
    "section": "§7.3 + Ch5/12",
    "question": "Jurors hear that a defendant “looks like a typical fraudster” (representativeness) after a media montage of scandals (availability). The courtroom is dim and jurors are exhausted. Prosecution calls heuristics Bayesian rationality; defense cites base rates and load. Best statement?",
    "options": [
      "Representativeness and availability can pull judgments from base rates; fatigue and poor viewing conditions further undermine effortful, now",
      "Matching a fraudster prototype equals high perceptual d′, so base rates become irrelevant once the defendant’s face fits a media-derived category",
      "Media availability classically conditions the optic nerve, making heuristic impressions legally equivalent to DNA match statistics in fraud",
      "Central-route persuasion forbids heuristics entirely; any prototype talk proves jurors meet criteria for a psychotic disorder rather than"
    ],
    "correct": 0,
    "correctFeedback": "Heuristics plus cognitive load threaten careful justice reasoning (§7.3; sensation; social cognition).",
    "wrongFeedback": {
      "1": "People who pick this confuse prototype resemblance with signal-detection sensitivity.",
      "2": "People who pick this abuse conditioning/sensory metaphors as forensic proof.",
      "3": "People who pick this pathologize normal heuristic use under ELM misunderstanding."
    }
  },
  {
    "id": "c7-l4-07",
    "chapter": 7,
    "level": 4,
    "section": "§7.4 + Ch2/3/8",
    "question": "A startup sells “neuroplasticity gum” said to raise Sternberg-style practical intelligence by “coating the hippocampus with crystallized g,” citing one survey linking chewing to self-rated street smarts. Biopsych notes arousal; memory asks encoding vs ability. Best takeaway?",
    "options": [
      "Implausible mechanism plus correlational self-ratings do not show gum raises practical intelligence; expectancy or arousal may inflate now",
      "Crystallized g is a neuromuscular-junction transmitter, therefore gum chemistry must raise practical intelligence whenever chewers report feeling",
      "Triarchic practical intelligence equals flashbulb memory for advertisements, which converts the chewing survey into a causal demonstration",
      "Mentioning the hippocampus turns any correlational marketing study into a randomized experiment that licenses ability claims about practical"
    ],
    "correct": 0,
    "correctFeedback": "Buzzword biology + self-report correlations ≠ validated intelligence gains (§7.4; methods; biopsych/memory).",
    "wrongFeedback": {
      "1": "People who pick this invent a false neurochemical identity for crystallized intelligence.",
      "2": "People who pick this mash triarchic theory with flashbulb memory and invent causation.",
      "3": "People who pick this treat anatomical name-drops as experimental control."
    }
  },
  {
    "id": "c7-l4-08",
    "chapter": 7,
    "level": 4,
    "section": "§7.2 + Ch6/10",
    "question": "A language app delivers variable-ratio rewards for idiom translations. Users feel proud “Aha!” moments, then cling to wrong grammar generalizations (mental set) despite counterexamples. Motivation cites streak-driven anticipation; emotion cites pride labeling. Best integration?",
    "options": [
      "Variable-ratio reinforcement can maintain practice while success-linked affect and mental set rigidify incorrect generalizations even when",
      "Insight experiences prove exclusive use of algorithms, so mental set and reinforcement schedules cannot jointly shape language-app behavior in",
      "Variable-ratio schedules extinguish motivation by definition, therefore pride labeling after streaks cannot occur when idiom items deliver",
      "Idioms are amygdala-stored morphemes, making grammar overgeneralization a thirst drive-reduction episode rather than a thinking-and-learning"
    ],
    "correct": 0,
    "correctFeedback": "Schedules sustain engagement; affect and mental set can still entrench errors (§7.2; learning; motivation/emotion).",
    "wrongFeedback": {
      "1": "People who pick this treat insight as pure algorithm use and deny co-occurring biases.",
      "2": "People who pick this reverse how VR schedules typically sustain responding.",
      "3": "People who pick this scramble linguistics with fear anatomy and thirst drives."
    }
  },
  {
    "chapter": 8,
    "level": 1,
    "section": "§8.1",
    "question": "Encoding is the process of:",
    "options": [
      "Getting information into the memory system",
      "Only retrieving old memories",
      "Destroying the engram permanently",
      "Measuring absolute thresholds"
    ],
    "correct": 0,
    "correctFeedback": "Encoding = input into memory.",
    "wrongFeedback": {
      "1": "Retrieval pulls information out.",
      "2": "Engrams are memory traces, not encoding.",
      "3": "Thresholds are sensation."
    },
    "page": 248,
    "id": "c8-l1-01"
  },
  {
    "chapter": 8,
    "level": 1,
    "section": "§8.1",
    "question": "According to Atkinson–Shiffrin, information usually flows:",
    "options": [
      "Sensory → short-term → long-term",
      "Long-term → sensory → spinal",
      "Only into procedural stores",
      "Directly from UCS to CR"
    ],
    "correct": 0,
    "correctFeedback": "Classic multistore flow with rehearsal to LTM.",
    "wrongFeedback": {
      "1": "Order is reversed/wrong.",
      "2": "Multiple LTM types exist.",
      "3": "That is classical conditioning."
    },
    "page": 249,
    "id": "c8-l1-02"
  },
  {
    "chapter": 8,
    "level": 1,
    "section": "§8.1",
    "question": "Episodic memory is a type of:",
    "options": [
      "Explicit memory for personal events",
      "Implicit motor skill only",
      "Sensory iconic store only",
      "Fixed-interval schedule"
    ],
    "correct": 0,
    "correctFeedback": "Episodic = personally experienced events (explicit).",
    "wrongFeedback": {
      "1": "Skills are often implicit/procedural.",
      "2": "Sensory memory is brief.",
      "3": "Schedules are operant."
    },
    "page": 252,
    "id": "c8-l1-03"
  },
  {
    "chapter": 8,
    "level": 1,
    "section": "§8.2",
    "question": "The hippocampus is especially important for:",
    "options": [
      "Forming new explicit memories",
      "Detecting only light wavelengths",
      "Releasing digestive enzymes",
      "Producing phonemes"
    ],
    "correct": 0,
    "correctFeedback": "Hippocampus supports encoding/consolidation of new explicit memories.",
    "wrongFeedback": {
      "1": "Vision is retina/cortex.",
      "2": "Digestion is not memory.",
      "3": "Phonemes are language sounds."
    },
    "page": 254,
    "id": "c8-l1-04"
  },
  {
    "chapter": 8,
    "level": 1,
    "section": "§8.3",
    "question": "Anterograde amnesia involves difficulty:",
    "options": [
      "Forming new memories after onset",
      "Remembering only childhood years",
      "Naming colors exclusively",
      "Hearing high frequencies"
    ],
    "correct": 0,
    "correctFeedback": "Anterograde = cannot form new post-onset memories.",
    "wrongFeedback": {
      "1": "That is more retrograde-flavored.",
      "2": "Color naming is different.",
      "3": "Hearing is audition."
    },
    "page": 259,
    "id": "c8-l1-05"
  },
  {
    "chapter": 8,
    "level": 1,
    "section": "§8.3",
    "question": "The misinformation effect shows that:",
    "options": [
      "Post-event information can distort memory reports",
      "Memory is a perfect video recording",
      "Extinction always erases skills",
      "IQ equals working memory"
    ],
    "correct": 0,
    "correctFeedback": "Loftus-style post-event suggestion alters reports.",
    "wrongFeedback": {
      "1": "Memory is reconstructive.",
      "2": "Extinction ≠ misinformation.",
      "3": "Different constructs."
    },
    "page": 262,
    "id": "c8-l1-06"
  },
  {
    "chapter": 8,
    "level": 2,
    "section": "§8.1",
    "question": "Elaborative rehearsal improves LTM mainly by:",
    "options": [
      "Linking new material to meaning and knowledge",
      "Repeating sounds without meaning only",
      "Avoiding all chunking strategies",
      "Blocking the amygdala always"
    ],
    "correct": 0,
    "correctFeedback": "Elaboration builds meaningful connections.",
    "wrongFeedback": {
      "1": "Maintenance rehearsal is shallower.",
      "2": "Chunking helps.",
      "3": "Amygdala modulates emotion, not the definition."
    },
    "page": 251,
    "id": "c8-l2-01"
  },
  {
    "chapter": 8,
    "level": 2,
    "section": "§8.3",
    "question": "Proactive interference occurs when:",
    "options": [
      "Old learning disrupts new learning",
      "New learning disrupts old learning only",
      "Encoding never happens at all",
      "Retrieval is identical to sensation"
    ],
    "correct": 0,
    "correctFeedback": "Proactive = forward-acting interference from old → new.",
    "wrongFeedback": {
      "1": "That is retroactive.",
      "2": "Encoding can occur.",
      "3": "Retrieval ≠ sensation."
    },
    "page": 266,
    "id": "c8-l2-02"
  },
  {
    "chapter": 8,
    "level": 2,
    "section": "§8.2",
    "question": "Flashbulb memories are typically:",
    "options": [
      "Vivid but not guaranteed accurate",
      "Immune to all reconstruction",
      "Stored only in the cerebellum",
      "Identical to unconditional responses"
    ],
    "correct": 0,
    "correctFeedback": "Emotionally vivid, yet still reconstructive.",
    "wrongFeedback": {
      "1": "They can be wrong.",
      "2": "Cerebellum is more procedural.",
      "3": "UCR is classical conditioning."
    },
    "page": 256,
    "id": "c8-l2-03"
  },
  {
    "chapter": 8,
    "level": 2,
    "section": "§8.1",
    "question": "Implicit memory is demonstrated when people:",
    "options": [
      "Show skills/priming without conscious recall",
      "Always verbally declare episodic details",
      "Use only algorithms to recall",
      "Fail every recognition test by definition"
    ],
    "correct": 0,
    "correctFeedback": "Implicit = without conscious remembering.",
    "wrongFeedback": {
      "1": "That is explicit.",
      "2": "Algorithms are problem solving.",
      "3": "Recognition can still show memory."
    },
    "page": 252,
    "id": "c8-l2-04"
  },
  {
    "chapter": 8,
    "level": 2,
    "section": "§8.4",
    "question": "Chunking aids STM by:",
    "options": [
      "Grouping items into meaningful units",
      "Deleting all sensory traces instantly",
      "Forcing anterograde amnesia",
      "Removing elaborative links"
    ],
    "correct": 0,
    "correctFeedback": "Chunking expands effective capacity via grouping.",
    "wrongFeedback": {
      "1": "It organizes, not deletes sensory memory as its goal.",
      "2": "Amnesia is a disorder.",
      "3": "Elaboration helps LTM."
    },
    "page": 269,
    "id": "c8-l2-05"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.1",
    "question": "After reading once, Kai cannot recall definitions but recognizes them on a multiple-choice test. This highlights:",
    "options": [
      "Recognition often easier than free recall in the vignette",
      "That encoding never occurred if recall fails in the vignette",
      "That LTM capacity is about seven items in the vignette",
      "That implicit memory requires free recall in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Recognition provides cues that free recall lacks.",
    "wrongFeedback": {
      "1": "Partial learning can support recognition.",
      "2": "7±2 is STM, not LTM capacity.",
      "3": "Implicit ≠ needing free recall."
    },
    "page": 250,
    "id": "c8-l3-01"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.3",
    "question": "A witness is asked “How fast when they smashed?” versus “contacted,” then reports higher speed. Best label?",
    "options": [
      "Misinformation / leading-question effect in the vignette",
      "Secure-avoidant attachment shift in the vignette now",
      "Flynn effect on vocabulary in the vignette given these facts",
      "Yerkes–Dodson peak arousal only in the vignette now now"
    ],
    "correct": 0,
    "correctFeedback": "Verb wording alters memory reports.",
    "wrongFeedback": {
      "1": "Attachment is developmental.",
      "2": "Flynn is IQ generations.",
      "3": "Arousal law is motivation."
    },
    "page": 262,
    "id": "c8-l3-02"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.1",
    "question": "Riding a bike while unable to state gear rules best illustrates:",
    "options": [
      "Implicit procedural memory in the vignette given these facts",
      "Semantic memory of dates only in the vignette given these facts",
      "Sensory echoic storage of bike color in the vignette now",
      "Fundamental attribution error in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Skills can be implicit/procedural.",
    "wrongFeedback": {
      "1": "Semantic is facts.",
      "2": "Echoic is auditory sensory.",
      "3": "FAE is social."
    },
    "page": 252,
    "id": "c8-l3-03"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.3",
    "question": "Studying French then Spanish, then failing French words, is most like:",
    "options": [
      "Retroactive interference in the vignette given these facts",
      "Proactive interference only in the vignette given these facts",
      "Latent learning without performance in the vignette now",
      "Group polarization in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "New Spanish disrupts old French → retroactive.",
    "wrongFeedback": {
      "1": "Proactive would be French blocking Spanish.",
      "2": "Latent learning is Tolman.",
      "3": "Polarization is social."
    },
    "page": 266,
    "id": "c8-l3-04"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.2",
    "question": "Strong emotion during an accident may enhance memory via amygdala modulation. This best fits:",
    "options": [
      "Arousal-related memory strengthening themes in the vignette",
      "Absolute threshold for light in the vignette given these facts",
      "Phoneme acquisition order in the vignette given these facts",
      "Token economies in factories in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Emotional arousal can strengthen memory traces.",
    "wrongFeedback": {
      "1": "Thresholds are sensation.",
      "2": "Phonemes are language.",
      "3": "Tokens are operant."
    },
    "page": 255,
    "id": "c8-l3-05"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.3",
    "question": "Forgetting a new classmate’s name because you never encoded it is:",
    "options": [
      "Encoding failure in the vignette given these facts now",
      "Retrieval of an engram that never needed encoding now",
      "Retrograde amnesia for childhood in the vignette now",
      "Systematic desensitization in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "If not encoded, later retrieval fails.",
    "wrongFeedback": {
      "1": "No engram without encoding.",
      "2": "Retrograde is loss of old memories.",
      "3": "Desensitization is therapy."
    },
    "page": 264,
    "id": "c8-l3-06"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.1",
    "question": "Repeating a phone number until you dial it uses:",
    "options": [
      "Maintenance rehearsal in STM/working memory in the vignette",
      "Semantic LTM reorganization only in the vignette now",
      "Projective personality assessment in the vignette now",
      "Kohlberg postconventional reasoning in the vignette now now"
    ],
    "correct": 0,
    "correctFeedback": "Rote rehearsal holds STM.",
    "wrongFeedback": {
      "1": "Semantic reorganization is deeper LTM work.",
      "2": "Projectives are personality.",
      "3": "Kohlberg is moral."
    },
    "page": 250,
    "id": "c8-l3-07"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.4",
    "question": "Building a memory palace for anatomy terms is a:",
    "options": [
      "Mnemonic strategy in the vignette given these facts now",
      "Form of anterograde amnesia in the vignette given these facts",
      "Type of daily hassle on SRRS in the vignette given these facts",
      "Display rule for anger in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Mnemonics are memory aids.",
    "wrongFeedback": {
      "1": "Mnemonics help memory.",
      "2": "SRRS is stress.",
      "3": "Display rules are emotion."
    },
    "page": 270,
    "id": "c8-l3-08"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.3",
    "question": "Blocking on a well-known actor’s name (tip-of-the-tongue) is:",
    "options": [
      "Temporary retrieval failure in the vignette given these facts",
      "Proof encoding never happened in the vignette given these facts",
      "A psychotic delusion by definition in the vignette now now",
      "Classical acquisition of a CR in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "TOT = retrieval blocked though stored.",
    "wrongFeedback": {
      "1": "Often encoded but inaccessible briefly.",
      "2": "Not psychosis.",
      "3": "Not classical conditioning."
    },
    "page": 265,
    "id": "c8-l3-09"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.1",
    "question": "Baddeley’s model adds a central executive that:",
    "options": [
      "Coordinates subsystems of working memory in the vignette",
      "Stores only lifetime episodic films in the vignette now now",
      "Is identical to the UCS in the vignette given these facts",
      "Measures g with a single digit in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Central executive directs attention/subsystems.",
    "wrongFeedback": {
      "1": "Not a lifelong video archive alone.",
      "2": "UCS is conditioning.",
      "3": "g is intelligence."
    },
    "page": 251,
    "id": "c8-l3-10"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.3",
    "question": "After a concussion, Lea recalls childhood but not hospital visitors this week. Pattern fits:",
    "options": [
      "Anterograde more than retrograde loss in the vignette",
      "Pure retrograde with intact new learning in the vignette",
      "Iconic memory of 30 minutes in the vignette given these facts",
      "Availability heuristic for pain only in the vignette now"
    ],
    "correct": 0,
    "correctFeedback": "New post-injury memories fail → anterograde.",
    "wrongFeedback": {
      "1": "Childhood recall intact suggests not pure retrograde.",
      "2": "Iconic is milliseconds–seconds.",
      "3": "Heuristic is judgment."
    },
    "page": 259,
    "id": "c8-l3-11"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.2",
    "question": "Lashley’s failure to find a single engram locus suggested:",
    "options": [
      "Memories are distributed across cortex in the vignette now",
      "All memory lives in one spinal neuron in the vignette now",
      "IQ tests measure only rote rehearsal in the vignette now",
      "Attachment styles are engrams in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Distributed storage idea from engram search failures.",
    "wrongFeedback": {
      "1": "Not a single neuron story.",
      "2": "IQ ≠ only rehearsal.",
      "3": "Attachment ≠ engram definition."
    },
    "page": 254,
    "id": "c8-l3-12"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.4",
    "question": "Self-testing before an exam helps more than rereading mainly via:",
    "options": [
      "Retrieval practice strengthening access in the vignette",
      "Avoiding all encoding in the vignette given these facts",
      "Creating proactive amnesia in the vignette given these facts",
      "Reducing phoneme inventory in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Practice testing strengthens retrieval routes.",
    "wrongFeedback": {
      "1": "Encoding still needed.",
      "2": "Not amnesia.",
      "3": "Phonemes unrelated."
    },
    "page": 271,
    "id": "c8-l3-13"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.3",
    "question": "Persistence of intrusive trauma memories despite wanting to forget illustrates:",
    "options": [
      "Persistence as a memory “vice” in the vignette",
      "Perfect intentional forgetting always in the vignette now",
      "That implicit memory cannot exist in the vignette now now",
      "GAS alarm without appraisal in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Persistence = unwanted remembering.",
    "wrongFeedback": {
      "1": "Forgetting is imperfect.",
      "2": "Implicit exists.",
      "3": "GAS is stress."
    },
    "page": 267,
    "id": "c8-l3-14"
  },
  {
    "chapter": 8,
    "level": 3,
    "section": "§8.1",
    "question": "Knowing Paris is France’s capital is mainly:",
    "options": [
      "Semantic memory in the vignette given these facts now",
      "Episodic memory of your last meal in the vignette now",
      "Procedural bike balance in the vignette given these facts",
      "Sensory iconic snapshot in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Facts/concepts = semantic.",
    "wrongFeedback": {
      "1": "Episodic is personal events.",
      "2": "Procedural is skills.",
      "3": "Iconic is brief visual."
    },
    "page": 252,
    "id": "c8-l3-15"
  },
  {
    "id": "c8-l4-01",
    "chapter": 8,
    "level": 4,
    "section": "§8.1–8.2 + Ch2/7",
    "question": "A podcast “tests” a memory playlist: song-loving callers free-recall groceries after listening; sleepy chat volunteers recall in silence. Callers do better; the host says music *causes* encoding success. Debate attention, levels of processing, and selection. Best critique?",
    "options": [
      "Non-equivalent groups and confounded alertness/preference block causal claims; deeper or more attentive encoding—not the brand of playlist—may",
      "Free recall after music classically conditions the engram itself, which makes selection confounds irrelevant whenever callers already adore the",
      "Silent late-night volunteers automatically match daytime callers on motivation and circadian state, so the causal playlist headline is internally",
      "Availability about catchy intros expands sensory-memory duration from fractions of a second into multi-year storage, proving encoding causation"
    ],
    "correct": 0,
    "correctFeedback": "Encoding quality and group equivalence matter; this design cannot isolate playlist causation (§8.1–8.2; methods).",
    "wrongFeedback": {
      "1": "People who pick this use conditioning jargon to dismiss validity threats.",
      "2": "People who pick this invent matched controls the vignette never created.",
      "3": "People who pick this confuse sensory-memory limits with heuristic salience."
    }
  },
  {
    "id": "c8-l4-02",
    "chapter": 8,
    "level": 4,
    "section": "§8.3 + Ch5/12",
    "question": "After a dim-store theft, witnesses watch news saying the suspect “smashed” the case, then confidently report nonexistent broken glass. A detective equates confidence with accuracy; others cite viewing conditions and suggestion. Strongest synthesis?",
    "options": [
      "Poor encoding conditions plus misleading post-event language can reconstruct memory; confidence remains an unreliable accuracy cue in this",
      "Flashbulb vividness from the newscast proves glass was present, because emotional arousal always freezes verbatim sensory traces against later",
      "Misinformation effects alter only procedural memory for skills like cycling, so episodic crime reports cannot incorporate verbs from televised",
      "Dim lighting elevates absolute thresholds into photographic memory, which cancels suggestion effects and licenses confidence as a perfect"
    ],
    "correct": 0,
    "correctFeedback": "Reconstructive memory + weak viewing + suggestion undermine confidence–accuracy assumptions (§8.3; sensation; social).",
    "wrongFeedback": {
      "1": "People who pick this over-trust flashbulb metaphors as perfect recordings.",
      "2": "People who pick this misfile misinformation as procedural-only.",
      "3": "People who pick this invent sensory superpowers that erase suggestion."
    }
  },
  {
    "id": "c8-l4-03",
    "chapter": 8,
    "level": 4,
    "section": "§8.2 + Ch3/6",
    "question": "A stroke patient improves across days of mirror-tracing yet denies having practiced (procedural vs declarative dissociation). An aide says NMJ dopamine “is the engram.” A tech demands continuous reinforcement only. Neuropsych points to skill circuits without hippocampal report. Best take?",
    "options": [
      "Procedural systems can strengthen skills without episodic report; NMJ chemistry is not an engram theory, and reinforcement schedules should",
      "Failed declarative recall means procedural learning is impossible by definition, so mirror-tracing improvement without awareness cannot be",
      "Only continuous reinforcement can store procedural traces because variable-ratio schedules erase cerebellar plasticity and abolish motor learning",
      "Engrams equal semantic lists of world capitals, therefore mirror-tracing skill cannot be retained in any memory system after cortical or now"
    ],
    "correct": 0,
    "correctFeedback": "Multiple memory systems allow skill gains without declarative awareness (§8.2; biopsych; learning).",
    "wrongFeedback": {
      "1": "People who pick this deny classic skill/fact dissociations.",
      "2": "People who pick this overmandate CRF and invent cerebellar erasure.",
      "3": "People who pick this shrink memory to semantic trivia."
    }
  },
  {
    "id": "c8-l4-04",
    "chapter": 8,
    "level": 4,
    "section": "§8.4 + Ch9/14",
    "question": "At 78, Maya forgets why she entered rooms after a scary Alzheimer’s article (availability). Sleep debt, new anticholinergic medication, and bereavement stress are present—not progressive aphasia. A relative assumes all late-life forgetting is childhood-schema encoding failure. Best reading?",
    "options": [
      "Aging retrieval quirks plus sleep, medication, and stress can mimic alarming forgetting; media availability may inflate disease fear without",
      "Bereavement always destroys procedural memory for walking, so room-entry forgetting is diagnostic of Alzheimer’s until proven otherwise by a",
      "Anticholinergic medications permanently enhance LTP, which confirms the article’s causal diagnosis and rules out sleep or stress as contributors",
      "After 70, childhood schemas become irretrievable because sensory memory lasts only thirty seconds in older adults, explaining doorway forgetting"
    ],
    "correct": 0,
    "correctFeedback": "Differential diagnosis first; sleep/drugs/stress/media fear matter (§8.4; development; health).",
    "wrongFeedback": {
      "1": "People who pick this leap from grief to Alzheimer’s via a false procedural claim.",
      "2": "People who pick this reverse typical anticholinergic cognitive risks.",
      "3": "People who pick this misuse sensory-memory duration as an aging law."
    }
  },
  {
    "id": "c8-l4-05",
    "chapter": 8,
    "level": 4,
    "section": "§8.1 + Ch7/10",
    "question": "Students using elaborative “why” self-tests beat re-readers on transfer, but a viral tip says highlighting wins because it “feels fluent.” Researchers flag fluency misattribution and recognition-vs-recall cues. Best conclusion?",
    "options": [
      "Desirable difficulties such as retrieval practice often outperform fluency illusions from highlighting; ease of processing is a weak",
      "Fluency while highlighting lengthens iconic memory into permanent storage, which is why passive marking reliably beats testing effects on",
      "Elaborative interrogation works only when each why-question is paired with a fixed-interval food-pellet schedule that stamps semantic",
      "Transfer exams measure phoneme awareness alone, making encoding strategy comparisons irrelevant whenever students self-test with elaborative"
    ],
    "correct": 0,
    "correctFeedback": "Fluency ≠ learning; retrieval/elaboration typically beat passive highlighting (§8.1; thinking; metacognition).",
    "wrongFeedback": {
      "1": "People who pick this confuse subjective ease with iconic-memory upgrades.",
      "2": "People who pick this bolt an irrelevant operant schedule onto a cognitive strategy.",
      "3": "People who pick this reduce transfer testing to speech sounds."
    }
  },
  {
    "id": "c8-l4-06",
    "chapter": 8,
    "level": 4,
    "section": "§8.3 + Ch4/15",
    "question": "After heavy drinking and fragmented sleep, Jordan “recalls” an assault detail that first appeared in a friend’s leading text. Staff must support Jordan without implanting more detail; anxiety is high. Best memory-informed stance?",
    "options": [
      "Treat the report as possibly genuine, reconstructed, or suggested—document carefully, avoid leading probes, and note alcohol/sleep as",
      "State-dependent learning proves the texted detail is verbatim truth, because alcohol reliably improves eyewitness precision for emotionally",
      "Fragmented sleep creates flashbulb-grade accuracy for suggested events, so leading texts cannot distort memory once arousal from anxiety is",
      "Any post-event text means the memory is a delusion that requires antipsychotic medication first-line before supportive documentation or careful"
    ],
    "correct": 0,
    "correctFeedback": "Support the person; respect reconstructive memory and intoxication/sleep effects; do not lead (§8.3; consciousness; clinical caution).",
    "wrongFeedback": {
      "1": "People who pick this reverse alcohol’s typical encoding costs.",
      "2": "People who pick this invent sleep-based immunity to misinformation.",
      "3": "People who pick this equate possible suggestion with psychosis and jump to meds."
    }
  },
  {
    "id": "c8-l4-07",
    "chapter": 8,
    "level": 4,
    "section": "§8.2 + Ch6/13",
    "question": "An airline compares spaced simulator drills with a one-day massed slideshow for emergency checklists. Months later, spaced crews outperform under stress. Management credits “token-economy muscle memory,” though only the spaced group received simulation. Best account?",
    "options": [
      "Spacing and retrieval in realistic practice likely drove retention; blaming an unadministered token economy confuses operant buzzwords with the",
      "Massed slideshows typically outperform spaced high-fidelity simulation for procedural checklists when crews later perform under operational",
      "Token economies store episodic checklists inside iconic sensory registers for months even when learners never practice retrieval in a simulator",
      "Stress hormones erase spacing benefits entirely, so any performance gap must be attributed to Hawthorne lighting effects alone rather than"
    ],
    "correct": 0,
    "correctFeedback": "Distributed, retrieval-rich practice explains the edge; the token story is unsupported (§8.2; learning; I-O/HF).",
    "wrongFeedback": {
      "1": "People who pick this contradict typical simulation/spacing advantages.",
      "2": "People who pick this mash tokens with sensory memory absurdly.",
      "3": "People who pick this deny spacing benefits and default to Hawthorne."
    }
  },
  {
    "id": "c8-l4-08",
    "chapter": 8,
    "level": 4,
    "section": "§8.4 + Ch2/11",
    "question": "A blog claims high conscientiousness blocks proactive interference because orderliness “stops old lists.” Evidence: a tiny convenience sample correlating traits with “I never forget.” A lab still finds standard PI in paired-associate tasks across Big Five levels. Best conclusion?",
    "options": [
      "Weak self-report correlations on convenience samples cannot overturn controlled PI findings; conscientiousness is not an immunity certificate",
      "Proactive interference cannot appear in laboratory paired-associate procedures, so any trait correlation is the only evidence scientists should",
      "Big Five facets are themselves encoding strategies, therefore correlational survey links prove causal memory immunity without experimental",
      "Convenience samples become true randomized experiments whenever the dependent measure is everyday forgetting rather than laboratory accuracy"
    ],
    "correct": 0,
    "correctFeedback": "PI is robust in controlled tasks; trait self-reports don’t erase it (§8.4; methods; personality).",
    "wrongFeedback": {
      "1": "People who pick this deny a classic interference effect.",
      "2": "People who pick this conflate traits with strategies and correlation with causation.",
      "3": "People who pick this redefine convenience sampling as randomization."
    }
  },
  {
    "chapter": 9,
    "level": 1,
    "section": "§9.1",
    "question": "Lifespan development studies change across:",
    "options": [
      "Physical, cognitive, and psychosocial domains",
      "Only prenatal weeks",
      "Personality inventories alone",
      "DSM axes exclusively"
    ],
    "correct": 0,
    "correctFeedback": "Three developmental domains.",
    "wrongFeedback": {
      "1": "More than prenatal.",
      "2": "Personality is one slice.",
      "3": "DSM is disorders."
    },
    "page": 280,
    "id": "c9-l1-01"
  },
  {
    "chapter": 9,
    "level": 1,
    "section": "§9.1",
    "question": "Nature versus nurture asks about:",
    "options": [
      "Genetic vs environmental contributions to development",
      "Only birth order effects",
      "Schedules of reinforcement only",
      "Absolute sensory thresholds"
    ],
    "correct": 0,
    "correctFeedback": "Classic developmental issue.",
    "wrongFeedback": {
      "1": "Broader than birth order.",
      "2": "Learning is related but not the issue’s name.",
      "3": "Sensation chapter."
    },
    "page": 282,
    "id": "c9-l1-02"
  },
  {
    "chapter": 9,
    "level": 1,
    "section": "§9.2",
    "question": "Piaget’s stages in order begin with:",
    "options": [
      "Sensorimotor",
      "Formal operational",
      "Postconventional",
      "Generativity"
    ],
    "correct": 0,
    "correctFeedback": "Sensorimotor is first.",
    "wrongFeedback": {
      "1": "Formal is last cognitive stage.",
      "2": "Kohlberg moral.",
      "3": "Erikson adulthood."
    },
    "page": 286,
    "id": "c9-l1-03"
  },
  {
    "chapter": 9,
    "level": 1,
    "section": "§9.2",
    "question": "Object permanence emerges in the:",
    "options": [
      "Sensorimotor stage",
      "Only after retirement",
      "Preconventional moral stage",
      "Latency psychosexual stage only"
    ],
    "correct": 0,
    "correctFeedback": "Infants learn objects continue when hidden.",
    "wrongFeedback": {
      "1": "Not adulthood.",
      "2": "Moral stages differ.",
      "3": "Freud latency differs."
    },
    "page": 287,
    "id": "c9-l1-04"
  },
  {
    "chapter": 9,
    "level": 1,
    "section": "§9.3",
    "question": "Teratogens are:",
    "options": [
      "Environmental agents that can harm prenatal development",
      "Piagetian schemas",
      "Attachment styles",
      "Display rules"
    ],
    "correct": 0,
    "correctFeedback": "Teratogens threaten the fetus.",
    "wrongFeedback": {
      "1": "Schemas are cognitive.",
      "2": "Attachment is bonding.",
      "3": "Display rules are emotion."
    },
    "page": 294,
    "id": "c9-l1-05"
  },
  {
    "chapter": 9,
    "level": 1,
    "section": "§9.4",
    "question": "Hospice care primarily emphasizes:",
    "options": [
      "Comfort and dignity near end of life",
      "Aggressive curative ICU only",
      "IQ acceleration",
      "Job analysis"
    ],
    "correct": 0,
    "correctFeedback": "Palliative comfort focus.",
    "wrongFeedback": {
      "1": "Not cure-focused by definition.",
      "2": "Unrelated.",
      "3": "I-O topic."
    },
    "page": 314,
    "id": "c9-l1-06"
  },
  {
    "chapter": 9,
    "level": 2,
    "section": "§9.2",
    "question": "Assimilation means:",
    "options": [
      "Fitting new info into existing schemas",
      "Changing schemas to fit new info",
      "Erasing all schemas nightly",
      "Measuring heritability"
    ],
    "correct": 0,
    "correctFeedback": "Assimilation uses current schemas.",
    "wrongFeedback": {
      "1": "That is accommodation.",
      "2": "Schemas persist.",
      "3": "Heritability separate."
    },
    "page": 285,
    "id": "c9-l2-01"
  },
  {
    "chapter": 9,
    "level": 2,
    "section": "§9.2",
    "question": "Accommodation means:",
    "options": [
      "Changing schemas when new info does not fit",
      "Ignoring discrepancies entirely",
      "Only classical conditioning",
      "Only operant punishment"
    ],
    "correct": 0,
    "correctFeedback": "Schemas adjust via accommodation.",
    "wrongFeedback": {
      "1": "That would block learning.",
      "2": "Learning theories differ.",
      "3": "Punishment is operant."
    },
    "page": 285,
    "id": "c9-l2-02"
  },
  {
    "chapter": 9,
    "level": 2,
    "section": "§9.2",
    "question": "Erikson’s adolescent crisis is mainly:",
    "options": [
      "Identity vs role confusion",
      "Trust vs mistrust only",
      "Integrity vs despair only",
      "Industry vs inferiority in infancy"
    ],
    "correct": 0,
    "correctFeedback": "Identity is the adolescent task.",
    "wrongFeedback": {
      "1": "Infancy.",
      "2": "Late adulthood.",
      "3": "Industry is school age."
    },
    "page": 288,
    "id": "c9-l2-03"
  },
  {
    "chapter": 9,
    "level": 2,
    "section": "§9.3",
    "question": "Ainsworth’s Strange Situation assesses:",
    "options": [
      "Infant attachment patterns",
      "Adult Big Five scores",
      "Phoneme inventories",
      "Job satisfaction"
    ],
    "correct": 0,
    "correctFeedback": "Attachment classification procedure.",
    "wrongFeedback": {
      "1": "Personality traits later.",
      "2": "Language.",
      "3": "I-O."
    },
    "page": 298,
    "id": "c9-l2-04"
  },
  {
    "chapter": 9,
    "level": 2,
    "section": "§9.2",
    "question": "Conservation tasks are failed typically in:",
    "options": [
      "Preoperational children",
      "Formal operational teens only",
      "Everyone equally at all ages",
      "Only newborns"
    ],
    "correct": 0,
    "correctFeedback": "Preoperational kids struggle with conservation.",
    "wrongFeedback": {
      "1": "Formal ops usually succeed.",
      "2": "Not age-invariant.",
      "3": "Newborns not the classic demo."
    },
    "page": 289,
    "id": "c9-l2-05"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.2",
    "question": "A child who calls a whale a “fish” then revises the animal schema after a lesson shows:",
    "options": [
      "Accommodation after failed assimilation in the vignette now",
      "Pure classical acquisition in the vignette given these facts",
      "Retrograde amnesia in the vignette given these facts now",
      "Groupthink in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Schema change = accommodation.",
    "wrongFeedback": {
      "1": "Not conditioning per se.",
      "2": "Not amnesia.",
      "3": "Not social conformity."
    },
    "page": 285,
    "id": "c9-l3-01"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.2",
    "question": "Searching for a hidden toy reveals object permanence, marking progress in:",
    "options": [
      "Sensorimotor cognition in the vignette",
      "Only Kohlberg stage 6 in the vignette given these facts",
      "Type A behavior in the vignette given these facts now",
      "Token economies in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Object permanence is sensorimotor.",
    "wrongFeedback": {
      "1": "Moral reasoning later.",
      "2": "Stress/personality.",
      "3": "Operant tool."
    },
    "page": 287,
    "id": "c9-l3-02"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.3",
    "question": "A caregiver who is warm and sets clear limits is closest to:",
    "options": [
      "Authoritative parenting in the vignette given these facts",
      "Authoritarian cold control only in the vignette now now",
      "Uninvolved neglect by definition in the vignette now now",
      "Permissive with zero warmth in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Authoritative = warm + firm.",
    "wrongFeedback": {
      "1": "Authoritarian is harsh/cold.",
      "2": "Uninvolved is low warmth/control.",
      "3": "Permissive is low control."
    },
    "page": 302,
    "id": "c9-l3-03"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.3",
    "question": "An infant explores, cries at separation, then calms at reunion—most like:",
    "options": [
      "Secure attachment in the vignette given these facts now",
      "Avoidant attachment in the vignette given these facts",
      "Disorganized only by definition in the vignette now",
      "Authoritarian attachment in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Secure pattern.",
    "wrongFeedback": {
      "1": "Avoidant shows little distress/avoidance.",
      "2": "Disorganized is odd/conflicted.",
      "3": "Parenting style ≠ attachment label."
    },
    "page": 298,
    "id": "c9-l3-04"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.2",
    "question": "Failing conservation of liquid after a tall pour indicates difficulty with:",
    "options": [
      "Preoperational egocentric/centering limits in the vignette",
      "Formal abstract algebra only in the vignette given these facts",
      "Semantic LTM capacity in the vignette given these facts",
      "Milgram obedience in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Classic preoperational limit.",
    "wrongFeedback": {
      "1": "Formal is later.",
      "2": "Memory capacity not the point.",
      "3": "Social influence."
    },
    "page": 289,
    "id": "c9-l3-05"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.1",
    "question": "Arguing development is sudden stage-like leaps emphasizes:",
    "options": [
      "Discontinuity in the vignette given these facts now now",
      "Perfect continuity only in the vignette given these facts",
      "Only nature with zero nurture in the vignette given these facts",
      "Only sensory thresholds in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Stage theories = discontinuous.",
    "wrongFeedback": {
      "1": "Opposite.",
      "2": "Both nature/nurture debated.",
      "3": "Sensation."
    },
    "page": 281,
    "id": "c9-l3-06"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.2",
    "question": "A teen asking “Who am I?” across careers and values maps to Erikson’s:",
    "options": [
      "Identity vs role confusion in the vignette given these facts",
      "Autonomy vs shame in toddlers only in the vignette now now",
      "Generativity vs stagnation in infancy in the vignette now",
      "Trust vs mistrust in late life in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Adolescent identity crisis.",
    "wrongFeedback": {
      "1": "Toddler autonomy.",
      "2": "Generativity midlife.",
      "3": "Trust infancy."
    },
    "page": 288,
    "id": "c9-l3-07"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.3",
    "question": "Alcohol exposure in pregnancy raising risk of neurodevelopmental harm is a:",
    "options": [
      "Teratogen example in the vignette given these facts now",
      "Prototype of a bird in the vignette given these facts",
      "Heuristic for availability in the vignette given these facts",
      "Flashbulb engram in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Alcohol can be teratogenic.",
    "wrongFeedback": {
      "1": "Concepts.",
      "2": "Judgment shortcut.",
      "3": "Memory."
    },
    "page": 294,
    "id": "c9-l3-08"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.2",
    "question": "Kohlberg’s focus is primarily on:",
    "options": [
      "Moral reasoning stages in the vignette",
      "Sensory transduction in the vignette given these facts",
      "Job analysis methods in the vignette given these facts",
      "Phoneme production in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Moral development theory.",
    "wrongFeedback": {
      "1": "Sensation.",
      "2": "I-O.",
      "3": "Language."
    },
    "page": 290,
    "id": "c9-l3-09"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.3",
    "question": "Puberty’s biological changes are mainly the:",
    "options": [
      "Physical domain of development in the vignette",
      "Only psychosocial domain in the vignette given these facts",
      "Only cognitive domain in the vignette given these facts now",
      "Only cultural display rules in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Puberty = physical growth.",
    "wrongFeedback": {
      "1": "Psychosocial also affected but puberty itself is physical.",
      "2": "Cognition separate.",
      "3": "Emotion expression rules."
    },
    "page": 304,
    "id": "c9-l3-10"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.4",
    "question": "Treating Kübler-Ross stages as a required universal order is:",
    "options": [
      "Overly rigid versus the model’s intended use in the vignette",
      "Required by DSM-5 for grief in the vignette given these facts",
      "Identical to Piaget’s formal ops in the vignette now now",
      "A type of schedule of reinforcement in the vignette now"
    ],
    "correct": 0,
    "correctFeedback": "Stages are not a strict universal sequence.",
    "wrongFeedback": {
      "1": "Not a DSM mandate as such.",
      "2": "Different theory.",
      "3": "Operant."
    },
    "page": 313,
    "id": "c9-l3-11"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.3",
    "question": "Emerging adulthood emphasizes exploration in:",
    "options": [
      "Love, work, and worldviews in late teens/20s",
      "Only neonatal reflexes in the vignette given these facts",
      "Only hospice protocols in the vignette given these facts",
      "Only Big Five neuroticism in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Emerging adulthood theme.",
    "wrongFeedback": {
      "1": "Infancy.",
      "2": "Dying care.",
      "3": "Personality trait."
    },
    "page": 308,
    "id": "c9-l3-12"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.2",
    "question": "Egocentrism in Piaget’s sense means difficulty:",
    "options": [
      "Taking another’s visual/cognitive perspective in the vignette",
      "Being selfish as a moral trait always in the vignette now",
      "Forming CRs in the vignette given these facts now in the vignette",
      "Encoding faces in the vignette given these facts now now now"
    ],
    "correct": 0,
    "correctFeedback": "Perspective-taking limit.",
    "wrongFeedback": {
      "1": "Not merely moral selfishness.",
      "2": "Conditioning.",
      "3": "Memory."
    },
    "page": 288,
    "id": "c9-l3-13"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.3",
    "question": "Socioemotional selectivity theory suggests older adults often:",
    "options": [
      "Prioritize emotionally meaningful goals/relationships",
      "Seek only novel strangers always in the vignette now",
      "Lose all emotion in the vignette given these facts now",
      "Stop all attachment in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Time horizons reshape social goals.",
    "wrongFeedback": {
      "1": "Not only novelty seeking.",
      "2": "Emotions continue.",
      "3": "Attachment continues."
    },
    "page": 310,
    "id": "c9-l3-14"
  },
  {
    "chapter": 9,
    "level": 3,
    "section": "§9.1",
    "question": "A longitudinal design follows:",
    "options": [
      "The same people over time in the vignette given these facts",
      "Only one-time cross-sections of different ages in the vignette",
      "Only animals in Skinner boxes in the vignette given these facts",
      "Only projective tests in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Longitudinal = same participants across time.",
    "wrongFeedback": {
      "1": "That’s cross-sectional.",
      "2": "Learning methods.",
      "3": "Personality assessment."
    },
    "page": 281,
    "id": "c9-l3-15"
  },
  {
    "id": "c9-l4-01",
    "chapter": 9,
    "level": 4,
    "section": "§9.2–9.3 + Ch2/7",
    "question": "A daycare posts that its “Mozart-and-flashcards package *causes* earlier formal operations,” citing toddlers who sat through the package and later named more shapes than waitlisted peers whose parents opted out. Staff also praise kids using adult-like conservation talk after heavy prompting. A methods consultant and a Piagetian disagree. Best evaluation?",
    "options": [
      "Opt-in versus opt-out groups are non-equivalent, and prompted jargon is not spontaneous formal operations; causal claims about Mozart packages",
      "Any shape-naming gain after enrichment proves formal operations arrived, because vocabulary count is identical to abstract hypothetical-deductive",
      "Waitlists are automatic random assignment when parents self-select, so internal validity threats cannot apply to infant enrichment product claims",
      "Conservation prompted by adults is assimilation of schemas into object permanence alone, which validates acceleration into formal operations"
    ],
    "correct": 0,
    "correctFeedback": "Selection confounds plus mistaking prompted talk for stage attainment undermine the ad (§9.2–9.3; methods; thinking).",
    "wrongFeedback": {
      "1": "People who pick this equate word counts with formal-operational reasoning.",
      "2": "People who pick this treat parental opt-out as randomization.",
      "3": "People who pick this scramble Piagetian concepts to rubber-stamp acceleration claims."
    }
  },
  {
    "id": "c9-l4-02",
    "chapter": 9,
    "level": 4,
    "section": "§9.3 + Ch6/8",
    "question": "Parents worry their 9-month-old “has insecure attachment” because she cries at daycare drop-off, yet she greets caregivers after calm reunions and explores when secure base is available at home. A relative urges extinction by ignoring all distress; another wants continuous candy reinforcement for silence. Best attachment-informed guidance?",
    "options": [
      "Protest at separation can be normative; watch reunion quality and secure-base use—blanket ignoring or candy-for-silence schedules miss",
      "Any daycare crying proves disorganized attachment, so extinction of proximity-seeking is required before exploratory behavior can emerge in the",
      "Continuous candy for silence classically conditions the internal working model into secure attachment within one week of drop-offs without",
      "Secure base behavior is a flashbulb memory for faces, therefore reinforcement schedules alone determine attachment classification better than"
    ],
    "correct": 0,
    "correctFeedback": "Attachment assessment emphasizes reunion/secure base, not crying alone; harsh extinction/candy hacks miss the construct (§9.3; learning; memory).",
    "wrongFeedback": {
      "1": "People who pick this over-diagnose from protest alone and misuse extinction.",
      "2": "People who pick this invent classical candy conditioning of working models.",
      "3": "People who pick this replace attachment observation with flashbulb/reinforcement myths."
    }
  },
  {
    "id": "c9-l4-03",
    "chapter": 9,
    "level": 4,
    "section": "§9.2 + Ch3/5",
    "question": "A prenatal clinic sees a client drinking heavily early in pregnancy who asks whether “genes alone decide IQ, so alcohol advice is moralizing.” Staff review teratogen timing, synaptogenesis vulnerability, and that heritability ≠ immutability. Which reply is most accurate?",
    "options": [
      "Heritability estimates do not mean environments are powerless; alcohol is a teratogen that can disrupt neural development especially in sensitive",
      "If IQ is heritable at all, teratogens cannot affect cognitive outcomes, because heritability coefficients convert directly into destiny ratios",
      "Alcohol affects only maternal absolute thresholds for taste, leaving fetal cortical development and later cognitive testing statistically",
      "Sensitive periods are identical to critical periods for language phonemes only, so ethanol exposure after week four is developmentally irrelevant"
    ],
    "correct": 0,
    "correctFeedback": "Teratogens can alter developmental trajectories; heritability does not license prenatal alcohol exposure (§9.1–9.2; biopsych).",
    "wrongFeedback": {
      "1": "People who pick this misunderstand heritability as individual destiny that cancels environment.",
      "2": "People who pick this trivialize alcohol as a maternal taste issue only.",
      "3": "People who pick this wrongly narrow sensitive periods to phonemes alone."
    }
  },
  {
    "id": "c9-l4-04",
    "chapter": 9,
    "level": 4,
    "section": "§9.3–9.4 + Ch11/12",
    "question": "A teen’s identity exploration includes rejecting a parent’s political club. The parent calls this “failure of authoritarian parenting’s obedience training” and cites Asch-like peer pressure as proof the teen lacks a trait of conscientiousness. Best developmental-social reading?",
    "options": [
      "Identity exploration can include value differentiation from parents; peer influence is real but does not reduce identity work to obedience",
      "Authoritarian obedience training guarantees identity achievement without exploration, so peer disagreement proves a conscientiousness deficit",
      "Asch conformity means teens cannot form identities unless alone in a sensory-deprivation chamber that blocks all normative social influence",
      "Trait conscientiousness is fixed by parenting style alone before age two, making later identity exploration statistically impossible in"
    ],
    "correct": 0,
    "correctFeedback": "Adolescent identity work involves exploration; social influence ≠ absence of traits or pure obedience failure (§9.3–9.4; personality; social).",
    "wrongFeedback": {
      "1": "People who pick this confuse authoritarian control with healthy identity achievement.",
      "2": "People who pick this over-extend Asch into an identity impossibility claim.",
      "3": "People who pick this freeze traits too early and deny later identity processes."
    }
  },
  {
    "id": "c9-l4-05",
    "chapter": 9,
    "level": 4,
    "section": "§9.4 + Ch8/14",
    "question": "Adults in a reminiscence group “remember” a shared childhood holiday identically after a leader’s vivid story, though photos contradict details. Several members are sleep-deprived caregivers under chronic stress. A facilitator calls it collective crystallized intelligence. Best account?",
    "options": [
      "Suggestive storytelling plus reconstructive memory—and stress/sleep load—can align false details; that is not crystallized intelligence as",
      "Identical false details prove flashbulb accuracy under stress, because caregiver cortisol always improves verbatim autobiographical storage",
      "Crystallized intelligence is group conformity to a leader’s narrative, measured best by how quickly photo evidence is dismissed in reminiscence",
      "Sleep deprivation blocks misinformation effects in older adults, so matching errors must reflect Piagetian formal operations applied to holidays"
    ],
    "correct": 0,
    "correctFeedback": "Social suggestion and reconstructive memory explain aligned errors; stress/sleep add risk (§9.4; memory; stress).",
    "wrongFeedback": {
      "1": "People who pick this reverse stress effects into flashbulb perfection.",
      "2": "People who pick this redefine crystallized intelligence as conformity.",
      "3": "People who pick this invent sleep-based immunity to misinformation."
    }
  },
  {
    "id": "c9-l4-06",
    "chapter": 9,
    "level": 4,
    "section": "§9.2 + Ch6/10",
    "question": "A parenting influencer swears time-outs are “positive punishment that destroys intrinsic motivation forever,” while a behavior analyst notes removal from reinforcement (time-out from positive reinforcement) can reduce target behavior if consistent and brief. The child’s tantrums were previously VR-reinforced by phones. Best integration?",
    "options": [
      "Time-out often functions as removing reinforcement, not adding aversive stimulation; prior intermittent attention/phone rewards help explain",
      "Any time-out is classical conditioning of shame schemas that permanently deletes intrinsic motivation regardless of tantrum reinforcement history",
      "Variable-ratio phone attention cannot maintain tantrums, so persistence after inconsistent limits must be a drive for homeostasis of thirst",
      "Positive punishment and negative reinforcement are identical procedures, making the influencer’s vocabulary debate scientifically meaningless in"
    ],
    "correct": 0,
    "correctFeedback": "Clarify operant functions; intermittent reinforcement maintains tantrums; implementation quality matters (§9.2 parenting; Ch6; motivation).",
    "wrongFeedback": {
      "1": "People who pick this overclaim permanent intrinsic-motivation destruction via classical shame.",
      "2": "People who pick this deny VR maintenance of behavior.",
      "3": "People who pick this collapse distinct operant categories."
    }
  },
  {
    "id": "c9-l4-07",
    "chapter": 9,
    "level": 4,
    "section": "§9.3 + Ch2/15",
    "question": "A clinic markets “attachment DNA kits” correlating a gene variant with self-reported clinginess in an online volunteer sample, then sells parenting advice. Critics cite diathesis–stress, restriction of range, and that attachment is a relationship pattern assessed in context. Strongest response?",
    "options": [
      "Online self-report gene correlations cannot validate a deterministic attachment kit; attachment is relational and contextual, and marketing",
      "Any gene–clinginess correlation proves Strange Situation classifications are genetically fixed at birth without caregiver behavior entering the",
      "Volunteer web samples are gold-standard probability samples for developmental psychopathology marketing claims about infants in the vignette",
      "Diathesis–stress models forbid measuring genes at all, so rejecting the kit means denying biology’s relevance to socioemotional development"
    ],
    "correct": 0,
    "correctFeedback": "Weak correlational genetics + self-report ≠ attachment diagnosis or destiny (§9.3; methods; disorders vulnerability themes).",
    "wrongFeedback": {
      "1": "People who pick this leap from correlation to genetic determinism of attachment.",
      "2": "People who pick this mislabel convenience samples as probability samples.",
      "3": "People who pick this treat skepticism about the kit as biology denial."
    }
  },
  {
    "id": "c9-l4-08",
    "chapter": 9,
    "level": 4,
    "section": "§9.4 + Ch11/13",
    "question": "A company uses a pop-psych “life-stage quiz” to deny promotions to workers over 50, claiming Eriksonian integrity failure predicts low job performance. I-O psychologists have validity data favoring structured job samples. Age stereotypes circulate in the break room. Best critique?",
    "options": [
      "Misusing Erikson as a promotion filter is bad psychometrics and risks age bias; job-relevant structured assessments outperform pop life-stage",
      "Integrity-versus-despair scores are the strongest meta-analytic predictors of core task performance across industries, beating work samples",
      "Age stereotypes improve criterion-related validity when used as bona fide occupational qualifications for all knowledge-work roles in the vignette",
      "Erikson’s stages were designed as HR cut scores, so rejecting the quiz violates standardized testing ethics more than using it in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Selection needs job-related validity evidence; Erikson isn’t an HR test, and age stereotyping is a risk (§9.4; personality; I-O).",
    "wrongFeedback": {
      "1": "People who pick this invent superior validity for pop Erikson quizzes.",
      "2": "People who pick this treat stereotypes as valid selection tools.",
      "3": "People who pick this rewrite Erikson’s purpose as employment testing."
    }
  },
  {
    "chapter": 10,
    "level": 1,
    "section": "§10.1",
    "question": "Motivation refers to:",
    "options": [
      "Wants or needs directing behavior",
      "Only sensory transduction",
      "Only DSM diagnoses",
      "Only engrams"
    ],
    "correct": 0,
    "correctFeedback": "Motivation directs behavior.",
    "wrongFeedback": {
      "1": "Sensation.",
      "2": "Disorders.",
      "3": "Memory."
    },
    "page": 322,
    "id": "c10-l1-01"
  },
  {
    "chapter": 10,
    "level": 1,
    "section": "§10.1",
    "question": "Intrinsic motivation means doing something:",
    "options": [
      "For inherent satisfaction",
      "Only for pay",
      "Only to avoid shock",
      "Without any goal"
    ],
    "correct": 0,
    "correctFeedback": "Intrinsic = inherent interest/enjoyment.",
    "wrongFeedback": {
      "1": "That is extrinsic.",
      "2": "Avoidance can be extrinsic.",
      "3": "Goals can be intrinsic."
    },
    "page": 323,
    "id": "c10-l1-02"
  },
  {
    "chapter": 10,
    "level": 1,
    "section": "§10.1",
    "question": "Homeostasis is:",
    "options": [
      "Maintaining internal balance",
      "A type of heuristic",
      "A projective test",
      "A leadership style"
    ],
    "correct": 0,
    "correctFeedback": "Drive theories link to homeostasis.",
    "wrongFeedback": {
      "1": "Cognition.",
      "2": "Personality assessment.",
      "3": "I-O."
    },
    "page": 324,
    "id": "c10-l1-03"
  },
  {
    "chapter": 10,
    "level": 1,
    "section": "§10.4",
    "question": "The James–Lange view says emotion follows:",
    "options": [
      "Physiological arousal",
      "Only cultural display rules after years",
      "Random gene flips",
      "Group polarization"
    ],
    "correct": 0,
    "correctFeedback": "Arousal then emotion.",
    "wrongFeedback": {
      "1": "Display rules shape expression.",
      "2": "Genetics not the theory.",
      "3": "Social."
    },
    "page": 342,
    "id": "c10-l1-04"
  },
  {
    "chapter": 10,
    "level": 1,
    "section": "§10.4",
    "question": "Schachter–Singer two-factor theory adds:",
    "options": [
      "Cognitive labeling of arousal",
      "Only spinal reflexes",
      "Only token reinforcers",
      "Only teratogens"
    ],
    "correct": 0,
    "correctFeedback": "Arousal + appraisal/label.",
    "wrongFeedback": {
      "1": "Not only reflexes.",
      "2": "Operant.",
      "3": "Prenatal."
    },
    "page": 344,
    "id": "c10-l1-05"
  },
  {
    "chapter": 10,
    "level": 1,
    "section": "§10.1",
    "question": "Maslow’s hierarchy places physiological needs:",
    "options": [
      "Toward the base of the pyramid",
      "Above self-actualization only",
      "Outside motivation entirely",
      "As identical to g"
    ],
    "correct": 0,
    "correctFeedback": "Basic needs first in the model.",
    "wrongFeedback": {
      "1": "Self-actualization is top.",
      "2": "It is motivational.",
      "3": "Intelligence."
    },
    "page": 326,
    "id": "c10-l1-06"
  },
  {
    "chapter": 10,
    "level": 2,
    "section": "§10.1",
    "question": "Yerkes–Dodson law describes:",
    "options": [
      "An inverted-U linking arousal and performance",
      "Linear endless gains with arousal",
      "Zero role for difficulty",
      "Only hunger hormones"
    ],
    "correct": 0,
    "correctFeedback": "Optimal arousal depends on task.",
    "wrongFeedback": {
      "1": "Not endless linear.",
      "2": "Difficulty matters.",
      "3": "Hunger separate."
    },
    "page": 325,
    "id": "c10-l2-01"
  },
  {
    "chapter": 10,
    "level": 2,
    "section": "§10.4",
    "question": "Cannon–Bard theory proposes arousal and emotion are:",
    "options": [
      "Simultaneous",
      "Strictly sequential always arousal-first",
      "Impossible without language",
      "Only learned via tokens"
    ],
    "correct": 0,
    "correctFeedback": "Thalamic simultaneous view.",
    "wrongFeedback": {
      "1": "That is more James–Lange.",
      "2": "Language not required by theory.",
      "3": "Operant."
    },
    "page": 343,
    "id": "c10-l2-02"
  },
  {
    "chapter": 10,
    "level": 2,
    "section": "§10.2",
    "question": "Set-point / settling ideas about weight emphasize:",
    "options": [
      "Regulatory resistance to lasting change",
      "That calories never matter",
      "That eating is only cultural",
      "That hunger is a phoneme"
    ],
    "correct": 0,
    "correctFeedback": "Body weight regulation themes.",
    "wrongFeedback": {
      "1": "Energy balance matters.",
      "2": "Culture also matters but not only.",
      "3": "Language."
    },
    "page": 330,
    "id": "c10-l2-03"
  },
  {
    "chapter": 10,
    "level": 2,
    "section": "§10.3",
    "question": "Kinsey’s surveys highlighted:",
    "options": [
      "Diversity of human sexual behavior",
      "That sexuality is binary only",
      "That orientation equals identity always",
      "That Masters–Johnson used only surveys"
    ],
    "correct": 0,
    "correctFeedback": "Survey diversity findings.",
    "wrongFeedback": {
      "1": "Not strictly binary in his framing.",
      "2": "Related but distinct.",
      "3": "Masters–Johnson observed."
    },
    "page": 336,
    "id": "c10-l2-04"
  },
  {
    "chapter": 10,
    "level": 2,
    "section": "§10.4",
    "question": "Cultural display rules regulate:",
    "options": [
      "How emotions are expressed",
      "Absolute thresholds for light",
      "Encoding into iconic memory",
      "Job analyses"
    ],
    "correct": 0,
    "correctFeedback": "Expression norms.",
    "wrongFeedback": {
      "1": "Sensation.",
      "2": "Memory.",
      "3": "I-O."
    },
    "page": 350,
    "id": "c10-l2-05"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.1",
    "question": "Studying for curiosity rather than grades is mainly:",
    "options": [
      "Intrinsic motivation in the vignette given these facts",
      "Extrinsic only by definition in the vignette given these facts",
      "Drive-reduction of thirst in the vignette given these facts",
      "Facial feedback alone in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Curiosity = intrinsic.",
    "wrongFeedback": {
      "1": "Grades would be extrinsic.",
      "2": "Thirst drive different.",
      "3": "Emotion theory."
    },
    "page": 323,
    "id": "c10-l3-01"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.1",
    "question": "Feeling over-aroused before a simple task and underperforming fits:",
    "options": [
      "Yerkes–Dodson mismatch in the vignette given these facts",
      "Flynn effect in the vignette given these facts now",
      "Anterograde amnesia in the vignette given these facts",
      "Authoritative parenting in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Arousal–performance inverted U.",
    "wrongFeedback": {
      "1": "IQ generations.",
      "2": "Memory.",
      "3": "Development."
    },
    "page": 325,
    "id": "c10-l3-02"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.4",
    "question": "Noticing heartbeat then concluding “I am afraid” matches:",
    "options": [
      "James–Lange sequencing in the vignette given these facts",
      "Cannon simultaneous-only denial of arousal in the vignette",
      "Purely unconscious Freudian id without body in the vignette",
      "Availability heuristic for planes in the vignette now"
    ],
    "correct": 0,
    "correctFeedback": "Body then feeling.",
    "wrongFeedback": {
      "1": "Cannon differs.",
      "2": "Psychodynamic different.",
      "3": "Judgment bias."
    },
    "page": 342,
    "id": "c10-l3-03"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.4",
    "question": "Same arousal labeled “excitement” vs “fear” depending on context fits:",
    "options": [
      "Schachter–Singer two-factor in the vignette",
      "Absolute sensory threshold in the vignette given these facts",
      "Proactive interference in the vignette given these facts",
      "Secure attachment only in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Label shapes emotion.",
    "wrongFeedback": {
      "1": "Sensation.",
      "2": "Memory.",
      "3": "Development."
    },
    "page": 344,
    "id": "c10-l3-04"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.1",
    "question": "Self-efficacy is Bandura’s term for:",
    "options": [
      "Belief in one’s capability to succeed in the vignette now",
      "A schedule of reinforcement in the vignette given these facts",
      "A teratogen in the vignette given these facts now in the vignette",
      "A DSM axis in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Capability belief motivates.",
    "wrongFeedback": {
      "1": "Operant.",
      "2": "Prenatal.",
      "3": "Disorders."
    },
    "page": 325,
    "id": "c10-l3-05"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.2",
    "question": "Ignoring satiety signals while bingeing despite distress relates to:",
    "options": [
      "Dysregulated eating patterns discussed in the chapter",
      "Iconic memory overflow in the vignette given these facts",
      "Phoneme disorders in the vignette given these facts now",
      "Hawthorne productivity in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Eating disorder / dysregulation themes.",
    "wrongFeedback": {
      "1": "Memory.",
      "2": "Language.",
      "3": "I-O."
    },
    "page": 332,
    "id": "c10-l3-06"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.4",
    "question": "Ekman’s work is most cited for:",
    "options": [
      "Cross-cultural facial emotion recognition themes now",
      "Job analysis validity in the vignette given these facts now",
      "Latent learning maps in the vignette given these facts now",
      "SRRS life units in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Universal expression research.",
    "wrongFeedback": {
      "1": "I-O.",
      "2": "Tolman.",
      "3": "Stress scale."
    },
    "page": 348,
    "id": "c10-l3-07"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.1",
    "question": "Working hard mainly for a bonus is:",
    "options": [
      "Extrinsic motivation in the vignette given these facts now",
      "Intrinsic only in the vignette given these facts now now",
      "Object permanence in the vignette given these facts now now",
      "Groupthink in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "External reward.",
    "wrongFeedback": {
      "1": "Opposite.",
      "2": "Development.",
      "3": "Social."
    },
    "page": 323,
    "id": "c10-l3-08"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.3",
    "question": "Sexual orientation and gender identity are described as:",
    "options": [
      "Related but distinct in the vignette given these facts",
      "Identical constructs always in the vignette given these facts",
      "Unmeasurable in principle in the vignette given these facts",
      "Types of heuristics in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Chapter distinguishes them.",
    "wrongFeedback": {
      "1": "Not identical.",
      "2": "They are studied.",
      "3": "Not heuristics."
    },
    "page": 340,
    "id": "c10-l3-09"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.4",
    "question": "Appraising a job interview as a threat vs challenge illustrates:",
    "options": [
      "Cognitive appraisal in emotion in the vignette",
      "Pure James body-only with no thought in the vignette now",
      "Sensory adaptation in the vignette given these facts now",
      "Chunking in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Lazarus-style appraisal themes.",
    "wrongFeedback": {
      "1": "Appraisal theories include cognition.",
      "2": "Sensation.",
      "3": "Memory strategy."
    },
    "page": 345,
    "id": "c10-l3-10"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.1",
    "question": "Drive theory most directly ties behavior to:",
    "options": [
      "Reducing physiological need states in the vignette now now",
      "Persuasion via peripheral cues in the vignette given these facts",
      "Misinformation verbs in the vignette given these facts now",
      "Big Five openness in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Drives push to restore balance.",
    "wrongFeedback": {
      "1": "Social.",
      "2": "Memory.",
      "3": "Personality."
    },
    "page": 324,
    "id": "c10-l3-11"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.4",
    "question": "Smiling then feeling slightly happier is discussed under:",
    "options": [
      "Facial feedback ideas in the vignette given these facts now",
      "Retroactive interference in the vignette given these facts",
      "Milgram proximity in the vignette given these facts now now",
      "Flynn gains in the vignette given these facts now in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Face can feed emotion.",
    "wrongFeedback": {
      "1": "Memory.",
      "2": "Obedience.",
      "3": "IQ."
    },
    "page": 349,
    "id": "c10-l3-12"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.2",
    "question": "Leptin and other signals are part of:",
    "options": [
      "Physiological hunger/satiety regulation",
      "Projective testing in the vignette given these facts",
      "Conformity lines in the vignette given these facts now",
      "Conservation tasks in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Biological eating regulation.",
    "wrongFeedback": {
      "1": "Personality.",
      "2": "Social.",
      "3": "Piaget."
    },
    "page": 329,
    "id": "c10-l3-13"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.1",
    "question": "Skipping meals to finish a painting for joy still shows:",
    "options": [
      "Intrinsic motives can override short-term drives in the vignette",
      "That homeostasis never operates in the vignette now now now",
      "That extrinsic pay is required in the vignette given these facts",
      "That emotions lack appraisal in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Intrinsic goals can compete with drives.",
    "wrongFeedback": {
      "1": "Homeostasis still exists.",
      "2": "Not required.",
      "3": "Appraisal theories exist."
    },
    "page": 323,
    "id": "c10-l3-14"
  },
  {
    "chapter": 10,
    "level": 3,
    "section": "§10.4",
    "question": "Cultural norms that discourage public crying are:",
    "options": [
      "Display rules in the vignette given these facts now now now",
      "Algorithms in the vignette given these facts on the stated facts",
      "Engrams in the vignette given these facts on the stated facts",
      "Teratogens in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Rules for expression.",
    "wrongFeedback": {
      "1": "Problem solving.",
      "2": "Memory.",
      "3": "Prenatal."
    },
    "page": 350,
    "id": "c10-l3-15"
  },
  {
    "id": "c10-l4-01",
    "chapter": 10,
    "level": 4,
    "section": "§10.1–10.3 + Ch6/14",
    "question": "Night-shift nurses snack on candy during double shifts, calling it “drive reduction for willpower glucose.” A health psychologist points to stress eating, habit cues, and intermittent candy reinforcement; a motivation theorist questions drive-reduction vs arousal/habit accounts. Best analysis?",
    "options": [
      "Candy intake here likely reflects stress, cue-triggered habits, and reinforcement more than a simple emptied willpower-glucose drive;",
      "Drive reduction uniquely explains all shift eating because variable-ratio candy schedules cannot influence behavior when cortisol is elevated",
      "Habit cues are classical CSs that forbid operant reinforcement explanations, so health-psych stress-eating research cannot apply to nurses on",
      "Arousal theory requires candy to lower absolute auditory thresholds before any eating motivation can occur on night shifts in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Stress, habits, and reinforcement complicate “willpower glucose” drive slogans (§10.1–10.3; learning; stress).",
    "wrongFeedback": {
      "1": "People who pick this deny reinforcement under stress and overclaim drive reduction.",
      "2": "People who pick this force an exclusive classical account and ignore stress-eating science.",
      "3": "People who pick this drag sensory thresholds into eating motivation irrelevantly."
    }
  },
  {
    "id": "c10-l4-02",
    "chapter": 10,
    "level": 4,
    "section": "§10.4 + Ch3/8",
    "question": "In a dating-lab demo, participants pedal bikes to raise arousal, then rate a neutral confederate as more attractive (excitation-transfer style). One student says James–Lange means arousal *is* attraction; another says Cannon–Bard proves cortex labels first; a third cites misattribution. Best statement?",
    "options": [
      "Residual arousal can be misattributed to a salient social target; that supports two-factor/misattribution ideas more than equating raw arousal",
      "James–Lange requires bike arousal to be attraction even without any cognitive appraisal or situational cue about the confederate in the vignette",
      "Cannon–Bard claims the cortex must finish labeling before any autonomic arousal begins, so bike-then-rating designs cannot produce misattribution",
      "Excitation transfer stores attraction as a procedural engram in the NMJ, making appraisal theories irrelevant to the ratings collected now"
    ],
    "correct": 0,
    "correctFeedback": "Misattribution/excitation transfer: arousal + appraisal cues shape felt attraction (§10.4; biopsych; memory systems literacy).",
    "wrongFeedback": {
      "1": "People who pick this collapse James–Lange into “arousal equals attraction” without appraisal.",
      "2": "People who pick this caricature Cannon–Bard timing to rule out misattribution.",
      "3": "People who pick this invent NMJ procedural storage for romantic ratings."
    }
  },
  {
    "id": "c10-l4-03",
    "chapter": 10,
    "level": 4,
    "section": "§10.2–10.3 + Ch7/12",
    "question": "A campus campaign uses graphic fear appeals about binge drinking plus a clear action plan (response efficacy). Some students scoff via reactance; others use optimistic bias (“not me”). Designers debate central vs peripheral routes and availability of horror stories. Best evidence-aligned choice?",
    "options": [
      "Pair risk information with specific, doable efficacy steps; fear alone can backfire via reactance or denial, and vivid horror may boost now",
      "Maximum fear without efficacy instructions is optimal because reactance increases deep central-route processing of alcohol statistics in every",
      "Optimistic bias means fear appeals never change behavior, so campaigns should abandon efficacy content and rely only on celebrity peripheral cues",
      "Availability of horror stories classically conditions the liver, replacing the need for cognitive appraisal of personal risk and response"
    ],
    "correct": 0,
    "correctFeedback": "Fear appeals work better with efficacy paths; biases and reactance are real hurdles (§10.3; thinking; social persuasion).",
    "wrongFeedback": {
      "1": "People who pick this ignore evidence that fear-without-efficacy often fails or backfires.",
      "2": "People who pick this overgeneralize optimistic bias into abandoning efficacy content.",
      "3": "People who pick this replace appraisal with mythical liver conditioning."
    }
  },
  {
    "id": "c10-l4-04",
    "chapter": 10,
    "level": 4,
    "section": "§10.1 + Ch2/11",
    "question": "A wellness app correlates users’ self-reported grit with steps walked, then claims grit *causes* fitness. Users who buy premium badges also walk more (selection). Personality researchers note trait–behavior links are modest; methods staff cry confound. Strongest critique?",
    "options": [
      "Correlational, self-selected premium use and shared third variables block causal grit→fitness claims; motivation constructs need stronger designs",
      "Self-report grit scores are experimental manipulations of intrinsic motivation, so causation is guaranteed whenever step counts rise among",
      "Trait grit absorbs all situational motivation variance, making randomized activity prompts unnecessary for causal inference in digital health now",
      "Steps walked are projective tests of the unconscious id, validating grit causation without accelerometer reliability checks in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Trait self-reports + selection ≠ causal fitness claims (§10.1; methods; personality).",
    "wrongFeedback": {
      "1": "People who pick this treat questionnaires as experimental manipulations.",
      "2": "People who pick this inflate traits to erase situational design needs.",
      "3": "People who pick this misuse psychoanalytic assessment metaphors for step counts."
    }
  },
  {
    "id": "c10-l4-05",
    "chapter": 10,
    "level": 4,
    "section": "§10.4 + Ch5/9",
    "question": "Toddlers in a cross-cultural clip show similar early emotion expressions, but older children differ in display rules at a funeral game. A student says all emotion is social construction; another says innate facial affect programs mean culture never shapes expression. Best developmental-emotion synthesis?",
    "options": [
      "Early expressive commonalities can coexist with culturally learned display rules that increasingly regulate when and how emotions are shown",
      "Display rules prove emotions have no biological basis, so infants cannot show recognizable affect before formal operational thought arrives",
      "Innate affect programs forbid cultural modulation of expression at funerals, making ethnographic differences measurement error only in the vignette",
      "Funeral display rules are absolute thresholds for olfaction that toddlers fail because their cones are immature in the vignette in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Biology-plus-culture: early affect themes and later display-rule learning (§10.4; development; sensation literacy).",
    "wrongFeedback": {
      "1": "People who pick this overplay constructionism and deny infant expressive patterns.",
      "2": "People who pick this deny cultural regulation of expression.",
      "3": "People who pick this scramble sensory anatomy into emotion norms."
    }
  },
  {
    "id": "c10-l4-06",
    "chapter": 10,
    "level": 4,
    "section": "§10.3 + Ch6/15",
    "question": "A client with binge-eating episodes says “I deserve food after work stress” (emotion regulation), then feels shame. Prior diets used extreme restriction (establishing operations) and family teased leftovers (social contingency). CBT-E and contingency management ideas arise. Best functional sketch?",
    "options": [
      "Stress-triggered eating may be negatively reinforced by affect relief, with restriction and social contingencies shaping the cycle—treatment",
      "Shame proves the behavior is positively punished into extinction already, so no skills training or contingency change is indicated in therapy",
      "Binge episodes are classical CRs to dopamine at the NMJ, unrelated to negative reinforcement of emotional relief after stressful workdays",
      "Family teasing is a projective Rorschach of id hunger, making behavioral activation contraindicated for binge-eating cycles in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Emotion regulation via eating can be reinforced; restriction/social contexts matter for treatment planning (§10.3; learning; disorders/therapy themes).",
    "wrongFeedback": {
      "1": "People who pick this misread shame as completed punishment/extinction.",
      "2": "People who pick this invent NMJ classical accounts that ignore operant affect relief.",
      "3": "People who pick this replace functional analysis with projective mythology."
    }
  },
  {
    "id": "c10-l4-07",
    "chapter": 10,
    "level": 4,
    "section": "§10.2 + Ch8/14",
    "question": "After a breakup, Sam underestimates future recovery (affective forecasting error) and rehearses a vivid “I’ll never be okay” narrative that becomes more fluent each night (availability + retrieval practice of a bleak prediction). Friends cite broaden-and-build; Sam cites current dysphoria as permanent data. Best coaching angle?",
    "options": [
      "Forecasting errors and fluent negative rehearsal can exaggerate permanence; mood-congruent retrieval is not a crystal ball—behavioral",
      "Affective forecasting is perfectly accurate under stress, so vivid nightly rehearsal should be treated as prognostic truth for therapy duration",
      "Retrieval practice of bleak predictions strengthens sensory memory only, leaving semantic self-beliefs unchanged and clinically irrelevant",
      "Broaden-and-build requires suppressing all negative affect before any scheduling of valued activities can help post-breakup adjustment now"
    ],
    "correct": 0,
    "correctFeedback": "Forecasting biases + practiced negative narratives mislead; activation and evidence help (§10.2/positive psych themes; memory; stress).",
    "wrongFeedback": {
      "1": "People who pick this over-trust forecasting under distress.",
      "2": "People who pick this mislocate rehearsal effects as sensory-only.",
      "3": "People who pick this make positive-emotion theory into an emotional suppression rule."
    }
  },
  {
    "id": "c10-l4-08",
    "chapter": 10,
    "level": 4,
    "section": "§10.1 + Ch12/13",
    "question": "A sales team uses public leaderboards (extrinsic) that boost short-term calls but cut helping between teammates (crowding-out / evaluation apprehension themes). Managers call it Maslow self-actualization via competition. I-O and motivation students object. Best reading?",
    "options": [
      "Extrinsic evaluation systems can raise measured output while undermining cooperation and intrinsic motives; labeling leaderboards as",
      "Leaderboards always increase intrinsic motivation because public rankings satisfy belongingness needs before physiology in Maslow’s now",
      "Any drop in helping proves diffusion of responsibility only, so motivation theory is irrelevant to how incentive systems shape sales",
      "Evaluation apprehension increases altruism reliably, making cooperation losses after leaderboards statistically impossible in field settings"
    ],
    "correct": 0,
    "correctFeedback": "Incentive design has social-motivation tradeoffs; Maslow slogans don’t rescue flawed contingencies (§10.1; social; I-O).",
    "wrongFeedback": {
      "1": "People who pick this reverse typical extrinsic/intrinsic tensions and scramble Maslow.",
      "2": "People who pick this reduce everything to bystander diffusion and ignore incentive theory.",
      "3": "People who pick this invent a law that evaluation apprehension always boosts helping."
    }
  },
  {
    "chapter": 11,
    "level": 1,
    "section": "§11.1",
    "question": "Personality refers to:",
    "options": [
      "Enduring traits and patterns of thinking, feeling, behaving",
      "Only one-time moods",
      "Only IQ scores",
      "Only acute stressors"
    ],
    "correct": 0,
    "correctFeedback": "Long-standing patterns.",
    "wrongFeedback": {
      "1": "Moods fluctuate.",
      "2": "Intelligence.",
      "3": "Stress."
    },
    "page": 360,
    "id": "c11-l1-01"
  },
  {
    "chapter": 11,
    "level": 1,
    "section": "§11.2",
    "question": "In Freud’s model, the id operates on the:",
    "options": [
      "Pleasure principle",
      "Reality principle only",
      "Moral ideals only",
      "Empirical method only"
    ],
    "correct": 0,
    "correctFeedback": "Id seeks immediate gratification.",
    "wrongFeedback": {
      "1": "Ego.",
      "2": "Superego.",
      "3": "Science method."
    },
    "page": 363,
    "id": "c11-l1-02"
  },
  {
    "chapter": 11,
    "level": 1,
    "section": "§11.2",
    "question": "The ego operates on the:",
    "options": [
      "Reality principle",
      "Pleasure principle alone",
      "Collective unconscious only",
      "Flynn effect"
    ],
    "correct": 0,
    "correctFeedback": "Ego mediates reality.",
    "wrongFeedback": {
      "1": "Id.",
      "2": "Jung.",
      "3": "IQ."
    },
    "page": 363,
    "id": "c11-l1-03"
  },
  {
    "chapter": 11,
    "level": 1,
    "section": "§11.7",
    "question": "The Big Five include openness, conscientiousness, extraversion, agreeableness, and:",
    "options": [
      "Neuroticism",
      "Phonemes",
      "Teratogens",
      "Heuristics"
    ],
    "correct": 0,
    "correctFeedback": "OCEAN.",
    "wrongFeedback": {
      "1": "Language.",
      "2": "Prenatal.",
      "3": "Thinking shortcuts."
    },
    "page": 380,
    "id": "c11-l1-04"
  },
  {
    "chapter": 11,
    "level": 1,
    "section": "§11.5",
    "question": "Rogers emphasized:",
    "options": [
      "Unconditional positive regard and self-concept congruence",
      "Only aversive conditioning",
      "Only job analysis",
      "Only SRRS scoring"
    ],
    "correct": 0,
    "correctFeedback": "Humanistic core conditions/self.",
    "wrongFeedback": {
      "1": "Behavior therapy.",
      "2": "I-O.",
      "3": "Stress."
    },
    "page": 376,
    "id": "c11-l1-05"
  },
  {
    "chapter": 11,
    "level": 1,
    "section": "§11.9",
    "question": "The MMPI is primarily a:",
    "options": [
      "Self-report personality inventory",
      "Projective inkblot only",
      "Sensory threshold test",
      "Conservation task"
    ],
    "correct": 0,
    "correctFeedback": "Structured inventory.",
    "wrongFeedback": {
      "1": "Rorschach is projective.",
      "2": "Sensation.",
      "3": "Piaget."
    },
    "page": 386,
    "id": "c11-l1-06"
  },
  {
    "chapter": 11,
    "level": 2,
    "section": "§11.3",
    "question": "Adler emphasized:",
    "options": [
      "Inferiority feelings and striving",
      "Collective archetypes only",
      "Only trait neuroticsm scores",
      "Only obedience voltage"
    ],
    "correct": 0,
    "correctFeedback": "Individual psychology.",
    "wrongFeedback": {
      "1": "Jung.",
      "2": "Big Five.",
      "3": "Milgram."
    },
    "page": 368,
    "id": "c11-l2-01"
  },
  {
    "chapter": 11,
    "level": 2,
    "section": "§11.3",
    "question": "Jung’s collective unconscious includes:",
    "options": [
      "Shared archetypal symbols",
      "Only personal repressed memories",
      "Only schedules of reinforcement",
      "Only absolute thresholds"
    ],
    "correct": 0,
    "correctFeedback": "Collective layer with archetypes.",
    "wrongFeedback": {
      "1": "Personal unconscious differs.",
      "2": "Operant.",
      "3": "Sensation."
    },
    "page": 369,
    "id": "c11-l2-02"
  },
  {
    "chapter": 11,
    "level": 2,
    "section": "§11.4",
    "question": "Reciprocal determinism (Bandura) means:",
    "options": [
      "Person, behavior, and environment interact",
      "Traits never change behavior",
      "Environment is irrelevant",
      "Cognition never matters"
    ],
    "correct": 0,
    "correctFeedback": "Triadic interaction.",
    "wrongFeedback": {
      "1": "They interact.",
      "2": "Environment matters.",
      "3": "Cognition matters."
    },
    "page": 373,
    "id": "c11-l2-03"
  },
  {
    "chapter": 11,
    "level": 2,
    "section": "§11.4",
    "question": "Locus of control refers to:",
    "options": [
      "Beliefs about whether outcomes are controlled internally or externally",
      "A brain lobe only",
      "A DSM cluster",
      "A type of attachment"
    ],
    "correct": 0,
    "correctFeedback": "Rotter’s expectancy construct.",
    "wrongFeedback": {
      "1": "Not a lobe name.",
      "2": "Disorders.",
      "3": "Development."
    },
    "page": 374,
    "id": "c11-l2-04"
  },
  {
    "chapter": 11,
    "level": 2,
    "section": "§11.9",
    "question": "Projective tests present:",
    "options": [
      "Ambiguous stimuli for interpretation",
      "Only true/false inventory items",
      "Only reaction-time light flashes",
      "Only job-task checklists"
    ],
    "correct": 0,
    "correctFeedback": "Ambiguity invites projection.",
    "wrongFeedback": {
      "1": "Inventories differ.",
      "2": "Sensation.",
      "3": "I-O."
    },
    "page": 390,
    "id": "c11-l2-05"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.2",
    "question": "Forgetting an exam to avoid anxiety may illustrate a:",
    "options": [
      "Defense mechanism (e.g., repression themes) in the vignette",
      "Secure attachment style in the vignette given these facts now",
      "Flynn effect in the vignette given these facts now in the vignette",
      "Algorithm in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Defenses manage anxiety.",
    "wrongFeedback": {
      "1": "Development.",
      "2": "IQ.",
      "3": "Problem solving."
    },
    "page": 365,
    "id": "c11-l3-01"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.7",
    "question": "Someone organized, dutiful, and goal-directed scores high on:",
    "options": [
      "Conscientiousness in the vignette given these facts now now",
      "Neuroticism only by definition in the vignette given these facts",
      "Openness to fantasy only in the vignette given these facts",
      "Psychoticism as phonemes in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "C in OCEAN.",
    "wrongFeedback": {
      "1": "N is emotional instability.",
      "2": "O is openness.",
      "3": "Not phonemes."
    },
    "page": 380,
    "id": "c11-l3-02"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.5",
    "question": "Gap between ideal self and real self, per Rogers, can yield:",
    "options": [
      "Incongruence and distress in the vignette given these facts",
      "Perfect homeostasis always in the vignette given these facts",
      "Object permanence in the vignette given these facts now",
      "Group polarization in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Incongruence theme.",
    "wrongFeedback": {
      "1": "Not automatic balance.",
      "2": "Piaget.",
      "3": "Social."
    },
    "page": 376,
    "id": "c11-l3-03"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.4",
    "question": "Believing effort determines grades shows a more:",
    "options": [
      "Internal locus of control in the vignette",
      "External locus only in the vignette given these facts now",
      "Projective delusion in the vignette given these facts now",
      "Sensory adaptation in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Internal locus.",
    "wrongFeedback": {
      "1": "Opposite.",
      "2": "Not projective by default.",
      "3": "Sensation."
    },
    "page": 374,
    "id": "c11-l3-04"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.2",
    "question": "Superego is most tied to:",
    "options": [
      "Internalized moral standards in the vignette",
      "Immediate pleasure seeking only in the vignette now now",
      "Only working memory buffers in the vignette given these facts",
      "Only job strain in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Moral conscience-like structure.",
    "wrongFeedback": {
      "1": "Id.",
      "2": "Memory.",
      "3": "Stress."
    },
    "page": 363,
    "id": "c11-l3-05"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.6",
    "question": "Temperament research emphasizes:",
    "options": [
      "Early biologically based reactivity/self-regulation now",
      "That personality is only culture in the vignette now now",
      "That traits equal attitudes in the vignette given these facts",
      "That Freud measured g in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Biological beginnings.",
    "wrongFeedback": {
      "1": "Culture also shapes later.",
      "2": "Attitudes social.",
      "3": "Not IQ."
    },
    "page": 378,
    "id": "c11-l3-06"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.8",
    "question": "Collectivist cultures more often emphasize:",
    "options": [
      "Group harmony and roles in the vignette given these facts",
      "Only personal uniqueness always in the vignette now",
      "Only id drives in the vignette given these facts now",
      "Only IQ ranking in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Collectivist framing.",
    "wrongFeedback": {
      "1": "More individualist.",
      "2": "Psychodynamic.",
      "3": "Intelligence."
    },
    "page": 384,
    "id": "c11-l3-07"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.9",
    "question": "Low test–retest on a personality scale threatens:",
    "options": [
      "Reliability in the vignette given these facts now now",
      "The existence of phonemes in the vignette given these facts",
      "Object permanence in the vignette given these facts now now",
      "Hospice ethics only in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Unstable scores → reliability issue.",
    "wrongFeedback": {
      "1": "Language.",
      "2": "Development.",
      "3": "Therapy context."
    },
    "page": 388,
    "id": "c11-l3-08"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.7",
    "question": "Mischel’s critique questioned:",
    "options": [
      "Strong cross-situational trait consistency in the vignette",
      "The existence of any behavior in the vignette given these facts",
      "All self-reports forever in the vignette given these facts",
      "Biology entirely in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Person–situation debate.",
    "wrongFeedback": {
      "1": "Behavior exists.",
      "2": "Too strong.",
      "3": "Biology studied."
    },
    "page": 382,
    "id": "c11-l3-09"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.3",
    "question": "Horney criticized Freud’s views on women and emphasized:",
    "options": [
      "Coping with anxiety via moving toward/against/away now",
      "Only archetypal mandalas in the vignette given these facts",
      "Only FI schedules in the vignette given these facts now",
      "Only teratogens in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Horney’s coping styles.",
    "wrongFeedback": {
      "1": "Jung.",
      "2": "Operant.",
      "3": "Prenatal."
    },
    "page": 370,
    "id": "c11-l3-10"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.5",
    "question": "Maslow’s self-actualization overlaps humanistic personality by stressing:",
    "options": [
      "Growth toward realizing potential in the vignette now",
      "Only deficit hunger forever in the vignette given these facts",
      "Only obedience in the vignette given these facts now now",
      "Only misinformation in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Growth motive.",
    "wrongFeedback": {
      "1": "More than deficits.",
      "2": "Social.",
      "3": "Memory."
    },
    "page": 376,
    "id": "c11-l3-11"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.4",
    "question": "High self-efficacy predicts greater:",
    "options": [
      "Persistence on challenging tasks in the vignette now",
      "Guaranteed classical CRs in the vignette given these facts",
      "Zero need for encoding in the vignette given these facts",
      "Automatic groupthink in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Capability beliefs support effort.",
    "wrongFeedback": {
      "1": "Not classical by necessity.",
      "2": "Memory still needed.",
      "3": "Social bias."
    },
    "page": 373,
    "id": "c11-l3-12"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.2",
    "question": "Dream analysis in classical psychoanalysis aims to access:",
    "options": [
      "Unconscious content in the vignette given these facts now",
      "Sensory thresholds in the vignette given these facts now",
      "Job KSAOs in the vignette given these facts on the stated facts",
      "Conservation skills in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Royal road themes.",
    "wrongFeedback": {
      "1": "Sensation.",
      "2": "I-O.",
      "3": "Piaget."
    },
    "page": 364,
    "id": "c11-l3-13"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.7",
    "question": "Low agreeableness with high antagonism fits low:",
    "options": [
      "Agreeableness in the vignette given these facts now now",
      "Openness to aesthetics only in the vignette given these facts",
      "Conscientiousness as IQ in the vignette given these facts",
      "Neuroticism as a phoneme in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Agreeableness continuum.",
    "wrongFeedback": {
      "1": "Different trait.",
      "2": "C ≠ IQ.",
      "3": "N ≠ phoneme."
    },
    "page": 380,
    "id": "c11-l3-14"
  },
  {
    "chapter": 11,
    "level": 3,
    "section": "§11.9",
    "question": "Rorschach inkblots are:",
    "options": [
      "Projective in the vignette given these facts",
      "Forced-choice Big Five only in the vignette given these facts",
      "Absolute threshold lights in the vignette given these facts",
      "Strange Situation episodes in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Projective method.",
    "wrongFeedback": {
      "1": "Inventory.",
      "2": "Sensation.",
      "3": "Attachment."
    },
    "page": 390,
    "id": "c11-l3-15"
  },
  {
    "id": "c11-l4-01",
    "chapter": 11,
    "level": 4,
    "section": "§11.2–11.4 + Ch8/15",
    "question": "In therapy intake, a client says childhood “anal stage stinginess” explains current hoarding of emails, citing a pop-Freud reel. Records show anxiety spikes after job loss (stress) and family modeling of saving. The clinician also sees high conscientiousness and scrupulosity themes. Best formulation caution?",
    "options": [
      "Prefer testable, multi-factor accounts—anxiety, modeling, traits, and stress—over unverifiable stage slogans; psychodynamic ideas can be",
      "Email hoarding is diagnostic of fixation alone, so stress, modeling, and trait conscientiousness must be ignored once an anal-stage narrative",
      "Scrupulosity themes mean the behavior is a manic episode, making behavioral activation and exposure ideas contraindicated regardless of anxiety",
      "Family modeling is classical conditioning of the id, which converts Instagram Freud content into a standardized personality assessment with"
    ],
    "correct": 0,
    "correctFeedback": "Stage labels aren’t automatic explanations; integrate stress, learning, and traits carefully (§11.2–11.4; memory of narratives; clinical).",
    "wrongFeedback": {
      "1": "People who pick this treat pop fixation as a trump card over evidence-based factors.",
      "2": "People who pick this mislabel scrupulosity/anxiety as mania.",
      "3": "People who pick this invent psychometric validity for social-media Freud."
    }
  },
  {
    "id": "c11-l4-02",
    "chapter": 11,
    "level": 4,
    "section": "§11.7 + Ch2/13",
    "question": "HR wants to hire using a 10-item Facebook Big Five quiz with no norms, then reject “low agreeableness” applicants for nursing. Validity generalization and adverse impact concerns arise; a manager says traits beat structured interviews. Best I-O/personality stance?",
    "options": [
      "Unvalidated social-media quizzes lack the reliability/validity evidence needed for high-stakes selection; job-related structured methods are",
      "Ten viral items equal NEO-PI-R construct coverage, so cut scores on agreeableness are automatically content-valid for every nursing task now",
      "Adverse impact is impossible when using personality, because traits are behaviorally specific KSAOs identical to work-sample performance",
      "Structured interviews are projective tests with lower validity than Facebook quizzes whenever applicants smile in photos in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Selection tools need validity evidence; toy quizzes don’t qualify (§11.7; methods; I-O).",
    "wrongFeedback": {
      "1": "People who pick this inflate a quiz into gold-standard trait coverage.",
      "2": "People who pick this deny adverse-impact risk and equate traits with work samples.",
      "3": "People who pick this invert interview vs quiz validity evidence."
    }
  },
  {
    "id": "c11-l4-03",
    "chapter": 11,
    "level": 4,
    "section": "§11.5–11.6 + Ch9/10",
    "question": "A school credits a “self-esteem week” for rising grades, but the same month it also launched tutoring and sleep workshops. Rogers-inspired staff stress UPR; skeptics cite third variables and that contingent praise can backfire. Motivation data show mastery goals rose in tutored kids only. Best interpretation?",
    "options": [
      "Multiple simultaneous changes confound causal credit to self-esteem week; tutoring/sleep and mastery-goal shifts are plausible drivers that a",
      "Unconditional positive regard from posters is sufficient to raise grades even if tutoring never occurred and sleep remained poor among students",
      "Self-esteem interventions always outperform skill tutoring because Maslow’s hierarchy places esteem above cognitive skill building in classrooms",
      "Third variables cannot exist when unconditional positive regard is mentioned, converting correlational school rollouts into randomized clinical"
    ],
    "correct": 0,
    "correctFeedback": "Confounded rollouts can’t isolate self-esteem slogans from tutoring/sleep/goals (§11.5; development/education; motivation).",
    "wrongFeedback": {
      "1": "People who pick this overclaim UPR posters as sufficient academic causes.",
      "2": "People who pick this misuse Maslow to dismiss skill instruction.",
      "3": "People who pick this treat humanistic buzzwords as experimental design."
    }
  },
  {
    "id": "c11-l4-04",
    "chapter": 11,
    "level": 4,
    "section": "§11.7 + Ch7/12",
    "question": "A dating app sorts matches by “narcissism vibe” from selfie angles (representativeness) after users watch influencer montages (availability). Social psychologists warn of stereotyping; personality psychologists note grandiose vs vulnerable features aren’t visible in chin tilt. Best critique?",
    "options": [
      "Face-angle heuristics and media prototypes are weak, biased cues for narcissism; trait inference needs better evidence than representativeness",
      "Selfie chin tilt is a projective test with high incremental validity over the NPI in predicting relationship outcomes across cultures in the vignette",
      "Availability of influencer montages creates true score variance in narcissism identical to structured clinical interviews in the vignette now",
      "Stereotyping cannot occur in personality judgment because the Fundamental Attribution Error only applies to obedience studies in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Heuristic trait inference from selfies is shaky and bias-prone (§11.7; thinking; social).",
    "wrongFeedback": {
      "1": "People who pick this invent validity for selfie projective reading.",
      "2": "People who pick this equate media salience with true-score assessment.",
      "3": "People who pick this wrongly fence FAE away from everyday trait judgments."
    }
  },
  {
    "id": "c11-l4-05",
    "chapter": 11,
    "level": 4,
    "section": "§11.3 + Ch6/8",
    "question": "A child praised only for winning (performance contingencies) cheats on a board game, then “forgets” the cheating when asked (motivated memory). A social-learning view stresses modeled winning-at-all-costs; a Skinnerian notes intermittent parental attention to bragging. Best integrated account?",
    "options": [
      "Modeled contingencies and intermittent attention can shape cheating, while motivated forgetting can protect self-view—personality talk about",
      "Cheating proves an immutable id-driven trait fixed in the oral stage, so modeling and reinforcement histories are irrelevant once forgetting",
      "Motivated forgetting means encoding never occurred, therefore observational learning of win-at-all-costs norms cannot have influenced the",
      "Intermittent attention extinguishes cheating automatically, making social-learning explanations unnecessary whenever children later misreport"
    ],
    "correct": 0,
    "correctFeedback": "Learning histories + motivated memory beat premature character essentialism (§11.3 neo/social-cognitive; learning; memory).",
    "wrongFeedback": {
      "1": "People who pick this freeze behavior into unverifiable stage destiny.",
      "2": "People who pick this confuse forgetting with proof that encoding/modeling never happened.",
      "3": "People who pick this reverse how intermittent reinforcement affects behavior."
    }
  },
  {
    "id": "c11-l4-06",
    "chapter": 11,
    "level": 4,
    "section": "§11.6–11.7 + Ch14/15",
    "question": "After trauma, a veteran shows elevated neuroticism scores versus pre-deployment testing (personality change under stress). A blog says Big Five traits never change; a clinician sees overlapping PTSD hyperarousal items. Best reading?",
    "options": [
      "Traits can shift with major stress, and symptom overlap can inflate neuroticism scores—interpret change cautiously rather than claiming absolute",
      "Big Five neuroticism is identical to PTSD, so personality assessment should replace trauma-focused care entirely after deployment in the vignette",
      "Pre–post trait shifts are always measurement error because personality is genetically sealed against environmental influence in adulthood",
      "Hyperarousal items prove malingering on both PTSD and trait scales whenever scores rise after documented trauma exposure in the vignette now"
    ],
    "correct": 0,
    "correctFeedback": "Stress can move trait scores; overlap with symptoms deserves care—not denial or collapse of constructs (§11.7; stress; disorders).",
    "wrongFeedback": {
      "1": "People who pick this collapse traits into PTSD and abandon trauma care.",
      "2": "People who pick this overclaim lifelong environmental impermeability.",
      "3": "People who pick this leap from score increases to malingering after trauma."
    }
  },
  {
    "id": "c11-l4-07",
    "chapter": 11,
    "level": 4,
    "section": "§11.2 + Ch3/10",
    "question": "A neuroscience podcast claims a “left-brain personality” explains introversion, citing a blurry fMRI split-screen. Biopsych students note lateralization myths; motivation students note arousal and optimal stimulation theories of introversion–extraversion. Best consumer takeaway?",
    "options": [
      "Pop left-brain personality claims oversell lateralization; introversion relates more to arousal/stimulation preferences and broader trait models",
      "fMRI split-screens prove introversion lives only in Broca’s area, validating hemisphere-based hiring and dating advice without behavioral now",
      "Optimal arousal theory requires ignoring genetics and experience, so lateralization myths become the only scientific account of extraversion now",
      "Introversion is a display rule for facial affect, measured exclusively by cone density in the retina rather than trait questionnaires in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Reject hemisphere personality myths; use better trait/arousal frameworks (§11.6–11.7; biopsych; motivation).",
    "wrongFeedback": {
      "1": "People who pick this treat meme neuroimages as hiring-grade evidence.",
      "2": "People who pick this falsely force an either/or against arousal theory.",
      "3": "People who pick this scramble sensation anatomy into trait definition."
    }
  },
  {
    "id": "c11-l4-08",
    "chapter": 11,
    "level": 4,
    "section": "§11.7 + Ch2/16",
    "question": "A couple’s therapist uses an unvalidated “love languages quiz” to assign personality types, then refuses CBT skills because “types don’t change.” Outcome research for the presenting communication problem favors skills practice. Best ethics-plus-evidence stance?",
    "options": [
      "Unvalidated typologies shouldn’t override evidence-based skills work; traits/preferences may inform style, but refusing effective practice",
      "Love-language types are DSM disorders with high interrater reliability, justifying refusal of CBT communication tools as contraindicated",
      "If a quiz is popular, construct validity is established, so outcome trials of skills training become unnecessary for couples with conflict",
      "Personality types forbid learning new behaviors because operant conditioning cannot occur after age eighteen in relationship contexts"
    ],
    "correct": 0,
    "correctFeedback": "Popular typologies ≠ validated diagnosis; don’t block effective skills on destiny talk (§11.7; methods; therapy).",
    "wrongFeedback": {
      "1": "People who pick this medicalize a pop quiz as DSM.",
      "2": "People who pick this equate popularity with construct validity.",
      "3": "People who pick this deny adult learning of relationship behaviors."
    }
  },
  {
    "chapter": 12,
    "level": 1,
    "section": "§12.1",
    "question": "Social psychology studies how people:",
    "options": [
      "Affect one another’s thoughts, feelings, and behaviors",
      "Only measure absolute thresholds",
      "Only classify DSM disorders",
      "Only run job analyses"
    ],
    "correct": 0,
    "correctFeedback": "Social influence and social thought.",
    "wrongFeedback": {
      "1": "Sensation.",
      "2": "Clinical.",
      "3": "I-O."
    },
    "page": 400,
    "id": "c12-l1-01"
  },
  {
    "chapter": 12,
    "level": 1,
    "section": "§12.1",
    "question": "Fundamental attribution error is overemphasizing:",
    "options": [
      "Dispositional factors for others’ behavior",
      "Situational factors for others always",
      "Only genetics of IQ",
      "Only sensory noise"
    ],
    "correct": 0,
    "correctFeedback": "Trait over-attribution to others.",
    "wrongFeedback": {
      "1": "Opposite bias pattern.",
      "2": "Intelligence.",
      "3": "Sensation."
    },
    "page": 402,
    "id": "c12-l1-02"
  },
  {
    "chapter": 12,
    "level": 1,
    "section": "§12.3",
    "question": "Cognitive dissonance is discomfort from:",
    "options": [
      "Inconsistency among attitudes/behaviors",
      "Perfect attitude-behavior match always",
      "Iconic memory overflow",
      "Conservation failure"
    ],
    "correct": 0,
    "correctFeedback": "Festinger inconsistency.",
    "wrongFeedback": {
      "1": "Match reduces dissonance.",
      "2": "Memory.",
      "3": "Piaget."
    },
    "page": 410,
    "id": "c12-l1-03"
  },
  {
    "chapter": 12,
    "level": 1,
    "section": "§12.4",
    "question": "Asch’s studies demonstrated:",
    "options": [
      "Conformity to group judgments",
      "Obedience to shock orders only",
      "Intrinsic hunger drives",
      "Flashbulb accuracy"
    ],
    "correct": 0,
    "correctFeedback": "Line judgment conformity.",
    "wrongFeedback": {
      "1": "Milgram.",
      "2": "Motivation.",
      "3": "Memory."
    },
    "page": 414,
    "id": "c12-l1-04"
  },
  {
    "chapter": 12,
    "level": 1,
    "section": "§12.4",
    "question": "Milgram studied:",
    "options": [
      "Obedience to authority",
      "Infant attachment styles",
      "Phoneme acquisition",
      "Big Five structure"
    ],
    "correct": 0,
    "correctFeedback": "Shock obedience paradigm.",
    "wrongFeedback": {
      "1": "Development.",
      "2": "Language.",
      "3": "Personality."
    },
    "page": 416,
    "id": "c12-l1-05"
  },
  {
    "chapter": 12,
    "level": 1,
    "section": "§12.7",
    "question": "Diffusion of responsibility helps explain the:",
    "options": [
      "Bystander effect",
      "Flynn effect",
      "GAS exhaustion only",
      "Object permanence"
    ],
    "correct": 0,
    "correctFeedback": "More people → less personal responsibility.",
    "wrongFeedback": {
      "1": "IQ.",
      "2": "Stress.",
      "3": "Piaget."
    },
    "page": 432,
    "id": "c12-l1-06"
  },
  {
    "chapter": 12,
    "level": 2,
    "section": "§12.1",
    "question": "Actor–observer bias tends to explain our own acts with:",
    "options": [
      "Situations more than traits",
      "Only traits never situations",
      "Only heuristics",
      "Only teratogens"
    ],
    "correct": 0,
    "correctFeedback": "Situational self-explanations.",
    "wrongFeedback": {
      "1": "Opposite of typical pattern.",
      "2": "Thinking.",
      "3": "Prenatal."
    },
    "page": 403,
    "id": "c12-l2-01"
  },
  {
    "chapter": 12,
    "level": 2,
    "section": "§12.3",
    "question": "Central route persuasion relies more on:",
    "options": [
      "Strong arguments and careful processing",
      "Only peripheral cues like attractiveness",
      "Only obedience proximity",
      "Only token pay"
    ],
    "correct": 0,
    "correctFeedback": "Elaboration of message quality.",
    "wrongFeedback": {
      "1": "Peripheral route.",
      "2": "Milgram.",
      "3": "Operant."
    },
    "page": 411,
    "id": "c12-l2-02"
  },
  {
    "chapter": 12,
    "level": 2,
    "section": "§12.4",
    "question": "Groupthink involves:",
    "options": [
      "Consensus pressure harming decision quality",
      "Improved critical evaluation always",
      "Only altruism",
      "Only sensory adaptation"
    ],
    "correct": 0,
    "correctFeedback": "Faulty group decisions.",
    "wrongFeedback": {
      "1": "Opposite.",
      "2": "Helping.",
      "3": "Sensation."
    },
    "page": 418,
    "id": "c12-l2-03"
  },
  {
    "chapter": 12,
    "level": 2,
    "section": "§12.5",
    "question": "A stereotype is a:",
    "options": [
      "Belief about a group",
      "Behavior of discrimination only",
      "Emotion of prejudice only",
      "Type of neuron"
    ],
    "correct": 0,
    "correctFeedback": "Cognitive belief component.",
    "wrongFeedback": {
      "1": "Discrimination is behavior.",
      "2": "Prejudice often affective.",
      "3": "Biology."
    },
    "page": 422,
    "id": "c12-l2-04"
  },
  {
    "chapter": 12,
    "level": 2,
    "section": "§12.6",
    "question": "Hostile aggression aims mainly to:",
    "options": [
      "Cause pain/harm",
      "Achieve a separate instrumental goal only",
      "Increase homeostasis",
      "Encode schemas"
    ],
    "correct": 0,
    "correctFeedback": "Hostile = harm as end.",
    "wrongFeedback": {
      "1": "Instrumental is means.",
      "2": "Motivation.",
      "3": "Cognition."
    },
    "page": 428,
    "id": "c12-l2-05"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.1",
    "question": "Seeing a tripped peer as “clumsy” while blaming ice when you slip shows:",
    "options": [
      "Actor–observer / FAE patterns in the vignette given these facts",
      "Secure attachment in the vignette given these facts now now",
      "Elaborative rehearsal in the vignette given these facts now",
      "Job strain in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Trait for other, situation for self.",
    "wrongFeedback": {
      "1": "Development.",
      "2": "Memory.",
      "3": "Stress."
    },
    "page": 403,
    "id": "c12-l3-01"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.3",
    "question": "After arguing a position for $1, attitude shifts more than for $20—classic:",
    "options": [
      "Insufficient justification / dissonance in the vignette",
      "Misinformation effect in the vignette given these facts",
      "Anterograde amnesia in the vignette given these facts",
      "Yerkes peak only in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Festinger & Carlsmith theme.",
    "wrongFeedback": {
      "1": "Memory suggestibility.",
      "2": "Memory loss.",
      "3": "Arousal law."
    },
    "page": 410,
    "id": "c12-l3-02"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.4",
    "question": "Saying the wrong line length to match the group is:",
    "options": [
      "Normative/informational conformity in the vignette now",
      "Intrinsic motivation in the vignette given these facts",
      "Object permanence in the vignette given these facts now",
      "Hospice care in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Asch conformity.",
    "wrongFeedback": {
      "1": "Motivation.",
      "2": "Piaget.",
      "3": "Dying care."
    },
    "page": 414,
    "id": "c12-l3-03"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.4",
    "question": "Administering supposed shocks because an experimenter said so is:",
    "options": [
      "Obedience in the vignette given these facts",
      "Mere conformity without authority in the vignette now now",
      "Prototype matching in the vignette given these facts now",
      "Chunking in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Authority obedience.",
    "wrongFeedback": {
      "1": "Authority distinguishes.",
      "2": "Concepts.",
      "3": "Memory."
    },
    "page": 416,
    "id": "c12-l3-04"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.7",
    "question": "Not helping because “someone else will” illustrates:",
    "options": [
      "Diffusion of responsibility in the vignette given these facts",
      "Proactive interference in the vignette given these facts now",
      "Flynn effect in the vignette given these facts now in the vignette",
      "Trait neuroticism alone in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Bystander mechanism.",
    "wrongFeedback": {
      "1": "Memory.",
      "2": "IQ.",
      "3": "Personality."
    },
    "page": 432,
    "id": "c12-l3-05"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.5",
    "question": "Refusing to hire based on group membership is:",
    "options": [
      "Discrimination in the vignette given these facts now now",
      "A stereotype belief only in the vignette given these facts",
      "Only an attitude without behavior in the vignette now now",
      "A phoneme in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Biased behavior.",
    "wrongFeedback": {
      "1": "Stereotype is belief.",
      "2": "Discrimination is action.",
      "3": "Language."
    },
    "page": 423,
    "id": "c12-l3-06"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.4",
    "question": "After discussion, a mildly risky group becomes riskier—often:",
    "options": [
      "Group polarization in the vignette given these facts",
      "Retrograde amnesia in the vignette given these facts",
      "Sensory adaptation in the vignette given these facts",
      "Conservation in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Polarization.",
    "wrongFeedback": {
      "1": "Memory.",
      "2": "Sensation.",
      "3": "Piaget."
    },
    "page": 419,
    "id": "c12-l3-07"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.2",
    "question": "Guards’ cruelty in a prison simulation is often cited for:",
    "options": [
      "Power of social roles/norms (with debates) in the vignette",
      "Proof roles never matter in the vignette given these facts",
      "IQ causation in the vignette given these facts now",
      "Teratogen effects in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Role power illustration (contested).",
    "wrongFeedback": {
      "1": "Roles matter in the claim.",
      "2": "Not IQ.",
      "3": "Prenatal."
    },
    "page": 406,
    "id": "c12-l3-08"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.6",
    "question": "Bullying to obtain lunch money is closer to:",
    "options": [
      "Instrumental aggression in the vignette given these facts",
      "Hostile aggression only as end in the vignette given these facts",
      "Intrinsic flow only in the vignette given these facts now",
      "Semantic memory in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Means to a goal.",
    "wrongFeedback": {
      "1": "Hostile aims at harm itself.",
      "2": "Motivation.",
      "3": "Memory."
    },
    "page": 428,
    "id": "c12-l3-09"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.3",
    "question": "Buying a product because a celebrity looked cool (weak arguments) is more:",
    "options": [
      "Peripheral-route persuasion in the vignette given these facts",
      "Central-route deep analysis in the vignette given these facts",
      "Algorithmic proof in the vignette given these facts now",
      "Anterograde encoding in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Peripheral cues.",
    "wrongFeedback": {
      "1": "Central needs strong arguments.",
      "2": "Problem solving.",
      "3": "Memory."
    },
    "page": 411,
    "id": "c12-l3-10"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.5",
    "question": "Scapegoating blames an out-group for:",
    "options": [
      "Frustration/problems in the vignette given these facts now",
      "Secure base needs only in the vignette given these facts",
      "Iconic traces in the vignette given these facts now now",
      "Job KSAOs in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Displaced blame.",
    "wrongFeedback": {
      "1": "Attachment.",
      "2": "Memory.",
      "3": "I-O."
    },
    "page": 425,
    "id": "c12-l3-11"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.7",
    "question": "Helping with no obvious reward is labeled:",
    "options": [
      "Altruism in the vignette given these facts",
      "Discrimination in the vignette given these facts now now",
      "FAE in the vignette given these facts on the stated facts",
      "GAS in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Prosocial without clear self-gain.",
    "wrongFeedback": {
      "1": "Bias behavior.",
      "2": "Attribution.",
      "3": "Stress."
    },
    "page": 430,
    "id": "c12-l3-12"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.1",
    "question": "Just-world thinking assumes:",
    "options": [
      "People get what they deserve in the vignette given these facts",
      "Situations never matter in the vignette given these facts",
      "Memory is perfect in the vignette given these facts now",
      "Motivation is only extrinsic in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Belief in a just world.",
    "wrongFeedback": {
      "1": "Situations matter.",
      "2": "Memory reconstructive.",
      "3": "Intrinsic exists."
    },
    "page": 404,
    "id": "c12-l3-13"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.4",
    "question": "Social loafing is reduced effort when:",
    "options": [
      "Individual output is not identifiable in a group now",
      "Working alone with clear metrics always in the vignette now",
      "Encoding fails in the vignette given these facts now now",
      "Display rules vanish in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Loafing in groups.",
    "wrongFeedback": {
      "1": "Opposite context.",
      "2": "Memory.",
      "3": "Emotion norms."
    },
    "page": 420,
    "id": "c12-l3-14"
  },
  {
    "chapter": 12,
    "level": 3,
    "section": "§12.5",
    "question": "Self-fulfilling prophecy can make stereotypes:",
    "options": [
      "Appear confirmed via expectancy-driven behavior now",
      "Impossible by definition in the vignette given these facts",
      "Identical to phonemes in the vignette given these facts",
      "A type of algorithm in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Expectancies shape outcomes.",
    "wrongFeedback": {
      "1": "They can confirm.",
      "2": "Language.",
      "3": "Problem solving."
    },
    "page": 424,
    "id": "c12-l3-15"
  },
  {
    "id": "c12-l4-01",
    "chapter": 12,
    "level": 4,
    "section": "§12.1–12.2 + Ch2/7",
    "question": "After a CEO scandal montage (availability), employees rate a quiet new manager as “probably unethical” (representativeness + FAE). HR has only correlational rumor data. A consultant urges base rates of misconduct and situational constraints. Best social-cognition correction?",
    "options": [
      "Salient scandals and prototype matching can bias person judgments; without better evidence, discounting base rates and over-attributing to",
      "Availability of scandals raises the new manager’s true misconduct base rate to certainty, so FAE becomes accurate social perception rather than a",
      "Representativeness is Bayesian proof when media montages exist, eliminating the need for behavioral evidence or situational information in",
      "Fundamental attribution error only occurs in laboratory Asch line studies, never in workplace reputation judgments after viral corporate scandals"
    ],
    "correct": 0,
    "correctFeedback": "Media salience + prototypes fuel FAE; demand better evidence (§12.1–12.2; thinking; methods).",
    "wrongFeedback": {
      "1": "People who pick this treat availability as literal base-rate updating to certainty.",
      "2": "People who pick this crown media resemblance as Bayesian proof.",
      "3": "People who pick this wrongly localize FAE to Asch studies alone."
    }
  },
  {
    "id": "c12-l4-02",
    "chapter": 12,
    "level": 4,
    "section": "§12.4–12.5 + Ch6/11",
    "question": "A fraternity hazing persists because dissenters fear rejection (normative influence) and see others comply (informational). Seniors intermittently reinforce silence with status. Personality talk brands pledges as “low openness only.” Best multi-level account?",
    "options": [
      "Conformity pressures plus intermittent status reinforcement can maintain hazing; reducing it to a single trait misses social influence and",
      "Low openness uniquely causes hazing compliance, so changing norms or reinforcement of silence cannot reduce harm once traits are labeled",
      "Informational influence requires a scientific expert in a lab coat, therefore peer compliance cues cannot shape hazing judgments among pledges",
      "Normative influence is classical conditioning of the amygdala by chanting, unrelated to operant status rewards for keeping quiet about rituals"
    ],
    "correct": 0,
    "correctFeedback": "Social influence + reinforcement sustain harmful norms beyond trait slogans (§12.4; learning; personality).",
    "wrongFeedback": {
      "1": "People who pick this essentialize compliance as one trait and deny norm change.",
      "2": "People who pick this over-restrict informational influence to credentialed experts.",
      "3": "People who pick this force an exclusive classical story and ignore status reinforcement."
    }
  },
  {
    "id": "c12-l4-03",
    "chapter": 12,
    "level": 4,
    "section": "§12.6 + Ch3/10",
    "question": "In a heated debate club, arousal from a prior sprint (excitation leftover) intensifies hostile Tweets about out-groups (scapegoating + arousal). Moderators debate catharsis vs cognitive reframing. Biopsych notes sympathetic activation. Best prediction-aligned approach?",
    "options": [
      "Leftover arousal can amplify aggressive expression toward salient targets; catharsis venting often fails—reframing and arousal cool-downs beat",
      "Catharsis guarantees reduced aggression after hostile Tweets because sympathetic activation vents the aggressive drive to zero in debate settings",
      "Excitation transfer cannot affect intergroup hostility, because residual arousal only influences romantic attraction ratings in dating labs",
      "Scapegoating is a sensory adaptation to bright screens, unrelated to arousal, appraisal, or social identity processes in online debates now"
    ],
    "correct": 0,
    "correctFeedback": "Arousal + appraisal/targets matter; catharsis is a weak aggression antidote (§12.6; emotion/motivation; biopsych).",
    "wrongFeedback": {
      "1": "People who pick this over-believe catharsis under arousal.",
      "2": "People who pick this silo excitation transfer to romance only.",
      "3": "People who pick this reduce scapegoating to sensory adaptation."
    }
  },
  {
    "id": "c12-l4-04",
    "chapter": 12,
    "level": 4,
    "section": "§12.7 + Ch8/14",
    "question": "Bystanders fail to help a collapsed student in a crowded hall (diffusion + pluralistic ignorance). One witness later “remembers” others moved first (reconstruction). Stress from exams is high. A RA training designer plans modules. Best training target set?",
    "options": [
      "Teach recognition of pluralistic ignorance, personal responsibility assignment, and concrete helping steps—memory can distort after the fact, and",
      "Increase crowd size to raise helping via social facilitation of altruism, because diffusion of responsibility reverses in exam weeks in the vignette",
      "Pluralistic ignorance means witnesses encode nothing, so memory reconstruction cannot invent helpers who never moved in hallway emergencies now",
      "Exam stress always increases helping through broaden-and-build, making responsibility training unnecessary in residence-life programs in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Target bystander barriers directly; expect stress and memory distortions (§12.7; memory; stress).",
    "wrongFeedback": {
      "1": "People who pick this reverse diffusion logic and misuse facilitation.",
      "2": "People who pick this deny reconstructive memory after ambiguous events.",
      "3": "People who pick this romanticize stress as automatic prosocial fuel."
    }
  },
  {
    "id": "c12-l4-05",
    "chapter": 12,
    "level": 4,
    "section": "§12.3 + Ch7/16",
    "question": "A public-health TikTok uses a celebrity (peripheral route) plus a weak argument about vaccines. Viewers with high need for cognition skim; others follow liking. Motivated reasoning appears in comments. A clinician wants informed consent conversations. Best persuasion literacy point?",
    "options": [
      "Peripheral cues can sway low-elaboration audiences while strong arguments matter more under high elaboration; clinical consent still needs now",
      "Celebrity liking is central-route processing by definition, so argument quality becomes irrelevant for vaccine attitudes among high in the vignette",
      "Motivated reasoning occurs only in laboratory dissonance studies, never in social-media comment threads about health decisions in the vignette",
      "Informed consent forbids discussing heuristics because peripheral cues are classical CSs that erase autobiographical memory for risk information"
    ],
    "correct": 0,
    "correctFeedback": "ELM + motivated reasoning inform media literacy; consent still needs substance (§12.3; thinking; therapy ethics themes).",
    "wrongFeedback": {
      "1": "People who pick this mislabel celebrity cues as central route.",
      "2": "People who pick this deny motivated reasoning online.",
      "3": "People who pick this invent conditioning that wipes risk memory and blocks consent talk."
    }
  },
  {
    "id": "c12-l4-06",
    "chapter": 12,
    "level": 4,
    "section": "§12.5 + Ch9/11",
    "question": "Parents forbid cross-group friendships “to protect culture,” and teens show rising out-group stereotypes after segregated activities (social identity + limited contact). A coach proposes equal-status cooperative contact on a mixed team. Trait theorists blame low agreeableness only. Best evidence-aligned plan?",
    "options": [
      "Structured cooperative contact with equal status and shared goals can reduce prejudice; segregation plus identity threat fuels stereotypes",
      "Low agreeableness fully explains teen stereotypes, so contact hypotheses cannot work until Big Five scores change through authoritarian lectures",
      "Social identity processes forbid friendship across groups in adolescence, making cooperative teams ethically inappropriate for prejudice now",
      "Equal-status contact increases prejudice whenever parents hold display rules about emotion at sporting events in the vignette in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Contact conditions matter; don’t reduce intergroup bias to one trait (§12.5; development; personality).",
    "wrongFeedback": {
      "1": "People who pick this overclaim traits and dismiss contact research.",
      "2": "People who pick this freeze social identity into a friendship ban.",
      "3": "People who pick this invent a law that good contact always backfires via display rules."
    }
  },
  {
    "id": "c12-l4-07",
    "chapter": 12,
    "level": 4,
    "section": "§12.4 + Ch2/8",
    "question": "A replication podcast notes smaller modern obedience effects than classic Milgram headlines. Viewers “remember” the original as 100% shock compliance (availability + schema). Methods teachers stress meta-analysis and context. Best takeaway?",
    "options": [
      "Classic demonstrations were powerful but context-sensitive; memory and media inflate certainty—use evidence summaries rather than a single",
      "If any modern rate is lower, obedience research is false and authority cues cannot influence harm-doing in contemporary institutions at all",
      "Remembering 100% compliance proves flashbulb verbatim storage of textbooks, so meta-analyses are unnecessary for teaching social influence",
      "Schema-consistent inflation of percentages only happens for sensory thresholds, not for social psychology history narratives in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Treat classic findings critically; watch memory inflation of headlines (§12.4; methods; memory).",
    "wrongFeedback": {
      "1": "People who pick this over-dismiss all obedience relevance from partial replication nuance.",
      "2": "People who pick this treat a remembered round number as verbatim truth.",
      "3": "People who pick this silo schema bias away from historical social-psych memory."
    }
  },
  {
    "id": "c12-l4-08",
    "chapter": 12,
    "level": 4,
    "section": "§12.6–12.7 + Ch6/10",
    "question": "Online pile-ons escalate as users get likes for harsher posts (VR reinforcement) while arousal from outrage videos transfers to new targets. Some claim “online disinhibition reveals true aggressive personality only.” Best synthesis for moderation policy?",
    "options": [
      "Reinforcement of escalating posts plus arousal transfer can amplify aggression; platform design matters—don’t reduce pile-ons to unveiled fixed",
      "Variable-ratio likes extinguish posting, so outrage reinforcement cannot explain escalation once disinhibition vocabulary appears in a moderation",
      "Excitation transfer from videos cannot influence typed aggression because residual arousal affects only in-person shock machines in obedience",
      "True aggressive personality forbids situational moderation tools, making contingency changes to likes ethically and scientifically pointless"
    ],
    "correct": 0,
    "correctFeedback": "Design contingencies and arousal pathways shape online aggression beyond trait fatalism (§12.6–12.7; learning; emotion).",
    "wrongFeedback": {
      "1": "People who pick this reverse VR reinforcement effects on posting.",
      "2": "People who pick this silo excitation transfer away from online behavior.",
      "3": "People who pick this use trait fatalism to reject situational interventions."
    }
  },
  {
    "chapter": 13,
    "level": 1,
    "section": "§13.1",
    "question": "I-O psychology applies psychology to:",
    "options": [
      "Workplace behavior and systems",
      "Only dream analysis",
      "Only absolute thresholds",
      "Only prenatal teratogens"
    ],
    "correct": 0,
    "correctFeedback": "Industrial-organizational focus.",
    "wrongFeedback": {
      "1": "Therapy history.",
      "2": "Sensation.",
      "3": "Development."
    },
    "page": 446,
    "id": "c13-l1-01"
  },
  {
    "chapter": 13,
    "level": 1,
    "section": "§13.2",
    "question": "Job analysis identifies:",
    "options": [
      "Tasks and/or KSAOs of a job",
      "Only DSM symptoms",
      "Only phoneme lists",
      "Only Kübler-Ross stages"
    ],
    "correct": 0,
    "correctFeedback": "Foundation for selection/training.",
    "wrongFeedback": {
      "1": "Clinical.",
      "2": "Language.",
      "3": "Grief."
    },
    "page": 454,
    "id": "c13-l1-02"
  },
  {
    "chapter": 13,
    "level": 1,
    "section": "§13.2",
    "question": "Performance appraisal evaluates:",
    "options": [
      "Employee job performance",
      "Infant attachment",
      "Sensory adaptation",
      "Heuristic biases only"
    ],
    "correct": 0,
    "correctFeedback": "Appraisal systems.",
    "wrongFeedback": {
      "1": "Development.",
      "2": "Sensation.",
      "3": "Cognition chapter."
    },
    "page": 460,
    "id": "c13-l1-03"
  },
  {
    "chapter": 13,
    "level": 1,
    "section": "§13.3",
    "question": "Organizational psychology emphasizes:",
    "options": [
      "Social processes at work (satisfaction, leadership, culture)",
      "Only machine gear ratios",
      "Only iconic memory",
      "Only g-factor testing"
    ],
    "correct": 0,
    "correctFeedback": "Human/social side of work.",
    "wrongFeedback": {
      "1": "Engineering alone.",
      "2": "Memory.",
      "3": "Intelligence testing only."
    },
    "page": 464,
    "id": "c13-l1-04"
  },
  {
    "chapter": 13,
    "level": 1,
    "section": "§13.4",
    "question": "Human factors / ergonomics aims to:",
    "options": [
      "Fit tools and environments to human capabilities",
      "Fit humans forcibly to poorly designed machines only",
      "Diagnose personality disorders",
      "Measure conservation"
    ],
    "correct": 0,
    "correctFeedback": "Design for humans.",
    "wrongFeedback": {
      "1": "Opposite ethos.",
      "2": "Clinical.",
      "3": "Piaget."
    },
    "page": 474,
    "id": "c13-l1-05"
  },
  {
    "chapter": 13,
    "level": 1,
    "section": "§13.1",
    "question": "Hawthorne studies highlighted:",
    "options": [
      "Social/attentional factors in productivity narratives",
      "That lighting is the only cause always",
      "That selection tests are useless",
      "That ethics boards forbid all research"
    ],
    "correct": 0,
    "correctFeedback": "Social factors theme (with caveats).",
    "wrongFeedback": {
      "1": "Not only lighting.",
      "2": "Selection still studied.",
      "3": "Research continues."
    },
    "page": 450,
    "id": "c13-l1-06"
  },
  {
    "chapter": 13,
    "level": 2,
    "section": "§13.3",
    "question": "Theory X managers tend to assume workers are:",
    "options": [
      "Lazy and need control",
      "Intrinsically motivated always",
      "Only secure-attached",
      "Only high on openness"
    ],
    "correct": 0,
    "correctFeedback": "McGregor X assumptions.",
    "wrongFeedback": {
      "1": "More Theory Y.",
      "2": "Attachment.",
      "3": "Personality."
    },
    "page": 468,
    "id": "c13-l2-01"
  },
  {
    "chapter": 13,
    "level": 2,
    "section": "§13.3",
    "question": "Transformational leaders primarily:",
    "options": [
      "Inspire and develop followers toward change",
      "Only exchange rewards for compliance",
      "Only punish errors",
      "Ignore culture"
    ],
    "correct": 0,
    "correctFeedback": "Transformational themes.",
    "wrongFeedback": {
      "1": "Transactional exchange.",
      "2": "Punishment-only weak.",
      "3": "Culture matters."
    },
    "page": 469,
    "id": "c13-l2-02"
  },
  {
    "chapter": 13,
    "level": 2,
    "section": "§13.2",
    "question": "Structured interviews generally improve:",
    "options": [
      "Reliability/validity versus casual chats",
      "Guaranteed zero bias forever",
      "Object permanence",
      "Flashbulb accuracy"
    ],
    "correct": 0,
    "correctFeedback": "Structure helps psychometrics.",
    "wrongFeedback": {
      "1": "Bias can remain.",
      "2": "Development.",
      "3": "Memory."
    },
    "page": 458,
    "id": "c13-l2-03"
  },
  {
    "chapter": 13,
    "level": 2,
    "section": "§13.3",
    "question": "Quid pro quo harassment involves:",
    "options": [
      "Sexual favors tied to work rewards/threats",
      "Only ergonomic chair height",
      "Only group polarization",
      "Only intrinsic flow"
    ],
    "correct": 0,
    "correctFeedback": "Exchange harassment.",
    "wrongFeedback": {
      "1": "Human factors.",
      "2": "Social.",
      "3": "Motivation."
    },
    "page": 471,
    "id": "c13-l2-04"
  },
  {
    "chapter": 13,
    "level": 2,
    "section": "§13.3",
    "question": "Job strain often pairs:",
    "options": [
      "High demands with low control",
      "Low demands with high autonomy always",
      "Only phoneme load",
      "Only iconic overflow"
    ],
    "correct": 0,
    "correctFeedback": "Demand–control stressor.",
    "wrongFeedback": {
      "1": "Opposite.",
      "2": "Language.",
      "3": "Memory."
    },
    "page": 470,
    "id": "c13-l2-05"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.2",
    "question": "Writing task statements and required skills before hiring is:",
    "options": [
      "Job analysis in the vignette given these facts now in the vignette",
      "Projective testing in the vignette given these facts in the vignette",
      "Systematic desensitization in the vignette given these facts",
      "Object permanence check in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Analyze the job first.",
    "wrongFeedback": {
      "1": "Personality.",
      "2": "Therapy.",
      "3": "Piaget."
    },
    "page": 454,
    "id": "c13-l3-01"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.2",
    "question": "Using a test that predicts job performance shows evidence of:",
    "options": [
      "Criterion-related validity themes in the vignette now",
      "Pure face validity only in the vignette given these facts",
      "Anterograde amnesia in the vignette given these facts",
      "Display rules in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Predictive/criterion links.",
    "wrongFeedback": {
      "1": "More than face.",
      "2": "Memory.",
      "3": "Emotion."
    },
    "page": 457,
    "id": "c13-l3-02"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.3",
    "question": "Employees feeling unfair pay show lower:",
    "options": [
      "Job satisfaction (often) in the vignette",
      "Iconic duration in the vignette given these facts now now",
      "Phoneme count in the vignette given these facts now now",
      "Teratogen risk in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Pay equity ↔ satisfaction.",
    "wrongFeedback": {
      "1": "Memory.",
      "2": "Language.",
      "3": "Prenatal."
    },
    "page": 466,
    "id": "c13-l3-03"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.3",
    "question": "A leader who coaches vision and intellectual stimulation is more:",
    "options": [
      "Transformational in the vignette given these facts now",
      "Pure Theory X punitive in the vignette given these facts",
      "Only transactional paycheck in the vignette given these facts",
      "Only ergonomic in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Transformational behaviors.",
    "wrongFeedback": {
      "1": "X punitive.",
      "2": "Transactional narrower.",
      "3": "Design."
    },
    "page": 469,
    "id": "c13-l3-04"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.4",
    "question": "Redesigning a control panel to reduce pilot error is:",
    "options": [
      "Human factors design in the vignette given these facts now",
      "Cognitive dissonance induction in the vignette given these facts",
      "Milgram proximity in the vignette given these facts now now",
      "Kübler-Ross anger in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Ergonomics/HF.",
    "wrongFeedback": {
      "1": "Social.",
      "2": "Obedience.",
      "3": "Grief."
    },
    "page": 476,
    "id": "c13-l3-05"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.3",
    "question": "Hostile work environment harassment includes:",
    "options": [
      "Offensive conduct creating abusive climate",
      "Only ergonomic mismatch in the vignette given these facts",
      "Only IQ cutoffs in the vignette given these facts now",
      "Only secure bases in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Climate harassment.",
    "wrongFeedback": {
      "1": "HF.",
      "2": "Selection.",
      "3": "Attachment."
    },
    "page": 471,
    "id": "c13-l3-06"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.1",
    "question": "WWI/WWII testing needs historically accelerated:",
    "options": [
      "Industrial psychology growth in the vignette given these facts",
      "Piaget’s stages discovery only in the vignette given these facts",
      "DSM-5 publication in 1918 in the vignette given these facts",
      "Flynn effect naming in 1800 in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Military selection spurred field.",
    "wrongFeedback": {
      "1": "Piaget separate.",
      "2": "DSM later.",
      "3": "Flynn later."
    },
    "page": 448,
    "id": "c13-l3-07"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.3",
    "question": "Telework research weighs:",
    "options": [
      "Flexibility benefits vs isolation/boundary costs now",
      "Only unconditional positive regard in the vignette now now",
      "Only sensory thresholds in the vignette given these facts",
      "Only conservation in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Remote work tradeoffs.",
    "wrongFeedback": {
      "1": "Therapy.",
      "2": "Sensation.",
      "3": "Piaget."
    },
    "page": 472,
    "id": "c13-l3-08"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.2",
    "question": "Training evaluation that checks on-the-job transfer assesses:",
    "options": [
      "Whether learning shows up in performance",
      "Only trainee smiling in the vignette given these facts",
      "Only engram size in the vignette given these facts now",
      "Only groupthink in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Transfer of training.",
    "wrongFeedback": {
      "1": "Affect alone weak.",
      "2": "Memory metaphor.",
      "3": "Social."
    },
    "page": 459,
    "id": "c13-l3-09"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.3",
    "question": "O*NET-style databases support:",
    "options": [
      "Job analysis / career information in the vignette now",
      "Dream interpretation in the vignette given these facts",
      "Absolute thresholds in the vignette given these facts",
      "Hospice staging in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Job information systems.",
    "wrongFeedback": {
      "1": "Freud.",
      "2": "Sensation.",
      "3": "Dying."
    },
    "page": 455,
    "id": "c13-l3-10"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.4",
    "question": "Checklists that prevent surgical mistakes apply:",
    "options": [
      "Human factors error reduction in the vignette given these facts",
      "FAE training only in the vignette given these facts now",
      "Prototype birds in the vignette given these facts now now",
      "Intrinsic art motivation only in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Error-proofing design/process.",
    "wrongFeedback": {
      "1": "Attribution.",
      "2": "Concepts.",
      "3": "Motivation."
    },
    "page": 477,
    "id": "c13-l3-11"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.2",
    "question": "Adverse impact in hiring raises:",
    "options": [
      "Fairness/legal selection concerns in the vignette now now",
      "Proof tests are always valid in the vignette given these facts",
      "That appraisal is impossible in the vignette given these facts",
      "That culture is irrelevant in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "EEO/fairness issues.",
    "wrongFeedback": {
      "1": "Validity still needed.",
      "2": "Appraisal exists.",
      "3": "Culture matters."
    },
    "page": 456,
    "id": "c13-l3-12"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.3",
    "question": "Organizational culture is shared:",
    "options": [
      "Values, norms, and practices in the vignette in the vignette",
      "Only individual Big Five scores in the vignette now now here",
      "Only UCS–CR maps in the vignette given these facts now",
      "Only SRRS totals in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Collective meaning systems at work.",
    "wrongFeedback": {
      "1": "Personality individual.",
      "2": "Conditioning.",
      "3": "Stress events."
    },
    "page": 470,
    "id": "c13-l3-13"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.1",
    "question": "Industrial vs organizational split roughly maps to:",
    "options": [
      "Selection/appraisal vs social/motivational workplace topics",
      "Only sensation vs perception in the vignette given these facts",
      "Only id vs ego in the vignette given these facts now now",
      "Only algorithms vs heuristics in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "I vs O emphases.",
    "wrongFeedback": {
      "1": "Sensation chapter.",
      "2": "Freud.",
      "3": "Cognition."
    },
    "page": 447,
    "id": "c13-l3-14"
  },
  {
    "chapter": 13,
    "level": 3,
    "section": "§13.3",
    "question": "Burnout includes exhaustion and often:",
    "options": [
      "Cynicism and reduced efficacy themes in the vignette now",
      "Improved conservation skills in the vignette given these facts",
      "Higher iconic capacity in the vignette given these facts",
      "Guaranteed altruism in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Burnout syndrome features.",
    "wrongFeedback": {
      "1": "Piaget.",
      "2": "Memory.",
      "3": "Helping not guaranteed."
    },
    "page": 467,
    "id": "c13-l3-15"
  },
  {
    "id": "c13-l4-01",
    "chapter": 13,
    "level": 4,
    "section": "§13.2–13.3 + Ch2/11",
    "question": "A warehouse adopts a 12-item “hustle personality” screener sold by an influencer, then fires low scorers after a productivity dip that coincided with a heat wave and broken scanners. Managers claim trait validity; workers cite situational constraints. Best I-O critique?",
    "options": [
      "Unvalidated screens plus confounded productivity data (heat, tools) cannot justify trait-based firings; job analysis and better criteria",
      "Influencer screeners inherit validity generalization automatically, so heat and equipment failures become irrelevant to performance causal",
      "Personality cut scores always outperform job samples when the criterion is throughput during known equipment outages and heat stress",
      "Situational constraints cannot reduce performance if conscientiousness was measured once, because traits absorb all workplace variance by"
    ],
    "correct": 0,
    "correctFeedback": "Selection and performance inference need validity and situational awareness (§13.2–13.3; methods; personality).",
    "wrongFeedback": {
      "1": "People who pick this invent automatic validity for influencer tools.",
      "2": "People who pick this ignore criteria contamination from heat/tools.",
      "3": "People who pick this treat traits as total explanations that erase situations."
    }
  },
  {
    "id": "c13-l4-02",
    "chapter": 13,
    "level": 4,
    "section": "§13.3 + Ch6/12",
    "question": "A call center pays bonuses only for call count (outcome-based), and agents shorten calls, raise complaints, and stop helping rookies (incentive distortion + competition). Leadership quotes Theory Y while keeping punishment for “too much mentoring.” Best diagnosis?",
    "options": [
      "Contingencies shaping speed over quality and punishing helping will drive those behaviors regardless of Theory Y rhetoric—align rewards",
      "Theory Y posters classically condition intrinsic motivation strong enough to override any bonus schedule that pays only for raw call volume",
      "Helping rookies is reduced solely by diffusion of responsibility, so incentive redesign cannot restore citizenship behavior in call centers",
      "Outcome-based bonuses increase organizational citizenship whenever public leaderboards shame slow mentors during peak hours in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Pay-for-count contingencies explain the pattern better than leadership slogans (§13.3; learning; social).",
    "wrongFeedback": {
      "1": "People who pick this think posters override powerful operant pay systems.",
      "2": "People who pick this blame only bystander diffusion and ignore incentives.",
      "3": "People who pick this reverse how speed bonuses typically affect citizenship."
    }
  },
  {
    "id": "c13-l4-03",
    "chapter": 13,
    "level": 4,
    "section": "§13.4 + Ch5/8",
    "question": "Pilots train with a poorly contrasted cockpit alert (signal buried in noise) and later miss it under sleep debt. Human-factors leads want salience and checklist retrieval practice; a manager blames “low g” from a pop quiz. Best HF-plus-memory stance?",
    "options": [
      "Improve signal conspicuity and practiced retrieval under realistic fatigue—not pop-IQ blame—because design and encoding/retrieval conditions now",
      "Low pop-quiz g uniquely explains missed alerts, so display contrast and checklist training cannot reduce error once sleep debt exists in the vignette",
      "Sensory absolute thresholds are fixed personality traits, making human-factors redesign ethically inappropriate for aviation alerts in the vignette",
      "Sleep debt improves prospective memory for rare alerts via flashbulb mechanisms, proving the miss was only a Theory X attitude problem in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "HF design + training under fatigue beat trait scapegoating (§13.4; sensation; memory).",
    "wrongFeedback": {
      "1": "People who pick this scapegoat pop-IQ and dismiss design/training.",
      "2": "People who pick this redefine thresholds as immutable traits against HF.",
      "3": "People who pick this romanticize sleep debt as flashbulb safety."
    }
  },
  {
    "id": "c13-l4-04",
    "chapter": 13,
    "level": 4,
    "section": "§13.2 + Ch7/14",
    "question": "After one viral employee-theft story (availability), a retailer expands invasive monitoring and sees morale drop and turnover rise (stress). Shrinkage was already falling from better inventory systems. Executives credit surveillance. Best analytic caution?",
    "options": [
      "Availability-driven policy may ignore base rates and existing shrinkage trends; surveillance stress costs can outweigh gains when systems now",
      "A single vivid theft proves monitoring caused further shrinkage declines even on metrics that were falling before surveillance expansion began",
      "Turnover after invasive monitoring is job enrichment under Herzberg, indicating hygiene needs were satisfied by stress and distrust in the vignette",
      "Base-rate neglect is rational in loss prevention whenever availability heuristics feel urgent to executives during board meetings in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Don’t let vivid cases override trends and side-effect costs (§13.2–13.3; thinking; stress).",
    "wrongFeedback": {
      "1": "People who pick this assign causal credit despite prior trends.",
      "2": "People who pick this mislabel stress/turnover as enrichment.",
      "3": "People who pick this endorse base-rate neglect as rational policy."
    }
  },
  {
    "id": "c13-l4-05",
    "chapter": 13,
    "level": 4,
    "section": "§13.3 + Ch10/11",
    "question": "A hospital’s “employee of the month” (public extrinsic) boosts charting metrics short-term but cuts voluntary mentoring (crowding-out). High neuroticism staff report evaluation anxiety. Leadership calls it self-actualization. Best motivation/I-O reading?",
    "options": [
      "Public contingent rewards can raise measured metrics while undermining autonomous helping and elevating evaluation anxiety—Maslow slogans don’t",
      "Employee-of-month programs always increase intrinsic mentoring because esteem needs precede belongingness in every hospital unit hierarchy now",
      "Evaluation anxiety occurs only in laboratory shock studies, never after public ranking systems in professional workplaces in the vignette now",
      "Crowding-out means extrinsic rewards increase citizenship forever, so mentoring losses must be mismeasured neuroticism artifacts only in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Extrinsic publicity has tradeoffs for intrinsic citizenship and anxiety (§13.3; motivation; personality).",
    "wrongFeedback": {
      "1": "People who pick this misuse Maslow to deny crowding-out risks.",
      "2": "People who pick this silo evaluation anxiety away from real workplaces.",
      "3": "People who pick this reverse crowding-out predictions."
    }
  },
  {
    "id": "c13-l4-06",
    "chapter": 13,
    "level": 4,
    "section": "§13.1–13.2 + Ch2/15",
    "question": "A firm uses a graphology “personality from handwriting” vendor for leadership hiring, citing a vendor white paper without peer review. Legal asks about job relatedness; clinical staff note graphology’s weak evidence. Best response?",
    "options": [
      "Handwriting analysis lacks acceptable validity for personnel decisions; demand job-related, evidence-based assessments rather than",
      "Vendor white papers outrank meta-analyses, so graphology becomes content-valid for leadership whenever signatures look decisive to executives",
      "Job relatedness is satisfied by any procedure labeled personality assessment, including astrology-adjacent handwriting readings sold as now",
      "If applicants consent, invalid predictors become ethical and legally robust for adverse hiring outcomes in regulated industries in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Use validated, job-related tools—not graphology theater (§13.2; methods; assessment ethics).",
    "wrongFeedback": {
      "1": "People who pick this elevate marketing over scientific validity.",
      "2": "People who pick this treat labels as job relatedness.",
      "3": "People who pick this think consent cures invalidity/legal risk."
    }
  },
  {
    "id": "c13-l4-07",
    "chapter": 13,
    "level": 4,
    "section": "§13.4 + Ch3/6",
    "question": "Assembly errors spike after a line speed-up that also shortens microbreaks (fatigue). A supervisor runs a one-day token economy for perfect units but skips ergonomic redesign. Errors rebound when tokens stop (extinction). Best systems view?",
    "options": [
      "Workload/fatigue and ergonomics likely dominate; short-lived token boosts without design change predict extinction rebound—fix",
      "Token economies permanently rewrite motor engrams at the NMJ, so ergonomic redesign is unnecessary once a single day of tokens occurs",
      "Microbreaks cannot affect error rates because sympathetic arousal from speed-ups always improves vigilance indefinitely on assembly lines",
      "Extinction after token removal proves workers lack Theory Y assumptions, not that contingencies and fatigue conditions changed performance"
    ],
    "correct": 0,
    "correctFeedback": "HF fatigue/design + temporary operant boosts explain spikes/rebounds (§13.4; biopsych; learning).",
    "wrongFeedback": {
      "1": "People who pick this invent permanent NMJ rewrites from brief tokens.",
      "2": "People who pick this deny fatigue costs and romanticize arousal.",
      "3": "People who pick this moralize Theory Y instead of analyzing contingencies."
    }
  },
  {
    "id": "c13-l4-08",
    "chapter": 13,
    "level": 4,
    "section": "§13.3 + Ch12/16",
    "question": "An EAP poster campaign reduces stigma language (social norms) and increases counseling uptake. Managers who previously mocked therapy (modeling) stop after leadership training. A skeptic says only SSRI availability could explain uptake. Best multi-factor view?",
    "options": [
      "Norm change, reduced stigma, and leader modeling can increase help-seeking alongside any biomedical access—psychosocial workplace levers are",
      "Counseling uptake can rise only when medication supply changes, because social norms and modeling never influence treatment utilization in",
      "Leader modeling of respect for therapy is peripheral fluff that cannot affect stigma-related behavior under the elaboration likelihood model at",
      "EAP uptake increases prove all prior non-attenders had antisocial personality disorder cured by posters alone without skillful clinical care"
    ],
    "correct": 0,
    "correctFeedback": "Stigma/norms/modeling shape utilization; don’t invent meds-only monocausality (§13.3; social; therapy access).",
    "wrongFeedback": {
      "1": "People who pick this deny psychosocial influences on help-seeking.",
      "2": "People who pick this dismiss modeling/norms via ELM misunderstanding.",
      "3": "People who pick this pathologize non-attenders and overclaim posters as cures."
    }
  },
  {
    "chapter": 14,
    "level": 1,
    "section": "§14.1",
    "question": "Stress involves appraising events as:",
    "options": [
      "Overwhelming or threatening to well-being",
      "Always joyful challenges only",
      "Only sensory thresholds",
      "Only job KSAOs"
    ],
    "correct": 0,
    "correctFeedback": "Appraisal-centered definition.",
    "wrongFeedback": {
      "1": "Not always positive.",
      "2": "Sensation.",
      "3": "I-O."
    },
    "page": 484,
    "id": "c14-l1-01"
  },
  {
    "chapter": 14,
    "level": 1,
    "section": "§14.1",
    "question": "Fight-or-flight was described by:",
    "options": [
      "Walter Cannon",
      "Jean Piaget",
      "Solomon Asch",
      "Alfred Binet"
    ],
    "correct": 0,
    "correctFeedback": "Cannon’s emergency response.",
    "wrongFeedback": {
      "1": "Development.",
      "2": "Conformity.",
      "3": "IQ."
    },
    "page": 486,
    "id": "c14-l1-02"
  },
  {
    "chapter": 14,
    "level": 1,
    "section": "§14.1",
    "question": "Selye’s GAS stages are alarm, resistance, and:",
    "options": [
      "Exhaustion",
      "Assimilation",
      "Obedience",
      "Chunking"
    ],
    "correct": 0,
    "correctFeedback": "General Adaptation Syndrome.",
    "wrongFeedback": {
      "1": "Piaget.",
      "2": "Milgram.",
      "3": "Memory."
    },
    "page": 488,
    "id": "c14-l1-03"
  },
  {
    "chapter": 14,
    "level": 1,
    "section": "§14.2",
    "question": "Daily hassles are:",
    "options": [
      "Minor frequent irritations",
      "Only catastrophic traumas",
      "Only prenatal teratogens",
      "Only formal operations"
    ],
    "correct": 0,
    "correctFeedback": "Cumulative small stressors.",
    "wrongFeedback": {
      "1": "Trauma is bigger.",
      "2": "Development.",
      "3": "Piaget."
    },
    "page": 496,
    "id": "c14-l1-04"
  },
  {
    "chapter": 14,
    "level": 1,
    "section": "§14.4",
    "question": "Problem-focused coping tries to:",
    "options": [
      "Change the stressor or situation",
      "Only change feelings without acting on cause",
      "Ignore all appraisal",
      "Increase HPA endlessly"
    ],
    "correct": 0,
    "correctFeedback": "Tackle the problem.",
    "wrongFeedback": {
      "1": "Emotion-focused.",
      "2": "Appraisal central.",
      "3": "Worsens strain."
    },
    "page": 512,
    "id": "c14-l1-05"
  },
  {
    "chapter": 14,
    "level": 1,
    "section": "§14.5",
    "question": "Positive psychology focuses on:",
    "options": [
      "Human strengths and well-being",
      "Only psychopathology lists",
      "Only absolute thresholds",
      "Only engrams"
    ],
    "correct": 0,
    "correctFeedback": "Seligman-era emphasis.",
    "wrongFeedback": {
      "1": "Disorders chapter.",
      "2": "Sensation.",
      "3": "Memory."
    },
    "page": 518,
    "id": "c14-l1-06"
  },
  {
    "chapter": 14,
    "level": 2,
    "section": "§14.1",
    "question": "The HPA axis culminates in release of:",
    "options": [
      "Stress hormones such as cortisol themes",
      "Only dopamine for pleasure always",
      "Only oxytocin for hunger",
      "Only adrenaline never cortisol"
    ],
    "correct": 0,
    "correctFeedback": "HPA → glucocorticoids.",
    "wrongFeedback": {
      "1": "Not only dopamine story.",
      "2": "Hunger different.",
      "3": "Catecholamines also in fight-flight but HPA→cortisol."
    },
    "page": 487,
    "id": "c14-l2-01"
  },
  {
    "chapter": 14,
    "level": 2,
    "section": "§14.2",
    "question": "Holmes and Rahe’s SRRS scores:",
    "options": [
      "Life-change units linked to illness risk",
      "Phoneme frequency",
      "Attachment Q-sorts",
      "Big Five facets only"
    ],
    "correct": 0,
    "correctFeedback": "Life events checklist.",
    "wrongFeedback": {
      "1": "Language.",
      "2": "Development.",
      "3": "Personality."
    },
    "page": 495,
    "id": "c14-l2-02"
  },
  {
    "chapter": 14,
    "level": 2,
    "section": "§14.3",
    "question": "Type A research later emphasized health risk especially from:",
    "options": [
      "Hostility components",
      "Openness to aesthetics",
      "Agreeableness warmth only",
      "Iconic memory span"
    ],
    "correct": 0,
    "correctFeedback": "Hostility ↔ CVD themes.",
    "wrongFeedback": {
      "1": "Personality trait O.",
      "2": "A is different.",
      "3": "Memory."
    },
    "page": 504,
    "id": "c14-l2-03"
  },
  {
    "chapter": 14,
    "level": 2,
    "section": "§14.4",
    "question": "Perceived control tends to:",
    "options": [
      "Buffer stress impacts",
      "Always increase helplessness",
      "Erase all coping",
      "Create teratogens"
    ],
    "correct": 0,
    "correctFeedback": "Control beliefs help.",
    "wrongFeedback": {
      "1": "Opposite of learned helplessness.",
      "2": "Coping remains.",
      "3": "Prenatal."
    },
    "page": 514,
    "id": "c14-l2-04"
  },
  {
    "chapter": 14,
    "level": 2,
    "section": "§14.5",
    "question": "Flow refers to:",
    "options": [
      "Absorbed engagement in optimally challenging activity",
      "GAS exhaustion only",
      "FAE only",
      "Job analysis only"
    ],
    "correct": 0,
    "correctFeedback": "Csikszentmihalyi flow.",
    "wrongFeedback": {
      "1": "Stress stage.",
      "2": "Social.",
      "3": "I-O."
    },
    "page": 522,
    "id": "c14-l2-05"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.1",
    "question": "Heart racing before a speech as threat appraisal shows:",
    "options": [
      "Stress as process combining appraisal and arousal now",
      "That stress is only a hormone name in the vignette now",
      "Pure James emotion without stress in the vignette now",
      "Object permanence in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Appraisal + physiology.",
    "wrongFeedback": {
      "1": "Broader process.",
      "2": "Related but stress framing.",
      "3": "Piaget."
    },
    "page": 485,
    "id": "c14-l3-01"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.1",
    "question": "After months of overload, getting sick during “vacation crash” fits:",
    "options": [
      "Exhaustion stage themes in the vignette",
      "Sensorimotor stage in the vignette given these facts now",
      "Central route only in the vignette given these facts now",
      "Prototype matching in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Depleted resistance.",
    "wrongFeedback": {
      "1": "Piaget.",
      "2": "Persuasion.",
      "3": "Concepts."
    },
    "page": 489,
    "id": "c14-l3-02"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.2",
    "question": "Losing keys, traffic, and Wi-Fi drops accumulating stress are:",
    "options": [
      "Daily hassles in the vignette given these facts now",
      "Only SRRS catastrophes in the vignette given these facts",
      "Only flashbulb events in the vignette given these facts",
      "Only obedience shocks in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Hassles add up.",
    "wrongFeedback": {
      "1": "Major events different.",
      "2": "Memory.",
      "3": "Milgram."
    },
    "page": 496,
    "id": "c14-l3-03"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.2",
    "question": "A job with huge demands and no say exemplifies:",
    "options": [
      "Job strain in the vignette given these facts",
      "Secure attachment in the vignette given these facts now now",
      "Elaborative rehearsal in the vignette given these facts now",
      "Phoneme deletion in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Demand–control strain.",
    "wrongFeedback": {
      "1": "Development.",
      "2": "Memory.",
      "3": "Language."
    },
    "page": 498,
    "id": "c14-l3-04"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.3",
    "question": "Chronic stress impairing immune defenses relates to:",
    "options": [
      "Psychoneuroimmunology themes in the vignette",
      "Conservation of volume in the vignette given these facts",
      "Group polarization in the vignette given these facts now",
      "Projective inkblots in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Stress–immune links.",
    "wrongFeedback": {
      "1": "Piaget.",
      "2": "Social.",
      "3": "Personality assessment."
    },
    "page": 502,
    "id": "c14-l3-05"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.4",
    "question": "Venting feelings without changing a bad lease is more:",
    "options": [
      "Emotion-focused coping in the vignette",
      "Problem-focused lease negotiation in the vignette now",
      "Algorithmic proof in the vignette given these facts now",
      "Job analysis in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Emotion regulation focus.",
    "wrongFeedback": {
      "1": "Problem-focused would change lease.",
      "2": "Cognition.",
      "3": "I-O."
    },
    "page": 513,
    "id": "c14-l3-06"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.4",
    "question": "Friends bringing meals after surgery provide:",
    "options": [
      "Social support in the vignette given these facts now now",
      "Misinformation verbs in the vignette given these facts now",
      "FAE in the vignette given these facts on the stated facts",
      "Teratogens in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Support resources.",
    "wrongFeedback": {
      "1": "Memory.",
      "2": "Attribution.",
      "3": "Prenatal."
    },
    "page": 515,
    "id": "c14-l3-07"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.5",
    "question": "Underestimating how you’ll adapt to a setback shows limits of:",
    "options": [
      "Affective forecasting in the vignette given these facts",
      "Iconic storage in the vignette given these facts now",
      "Object permanence in the vignette given these facts now",
      "Structured interviews in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Forecasting happiness poorly.",
    "wrongFeedback": {
      "1": "Memory.",
      "2": "Piaget.",
      "3": "I-O."
    },
    "page": 520,
    "id": "c14-l3-08"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.1",
    "question": "Sympathetic activation in an emergency is:",
    "options": [
      "Fight-or-flight in the vignette given these facts now now",
      "Formal operations in the vignette given these facts now",
      "Central persuasion in the vignette given these facts now",
      "Chunking in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Cannon emergency pattern.",
    "wrongFeedback": {
      "1": "Piaget.",
      "2": "Social.",
      "3": "Memory."
    },
    "page": 486,
    "id": "c14-l3-09"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.3",
    "question": "Hypertension discussed as stress-linked illustrates:",
    "options": [
      "Psychophysiological disorder themes in the vignette now",
      "Purely imaginary symptoms always in the vignette now",
      "Only phoneme errors in the vignette given these facts",
      "Only bystander apathy in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Body systems affected.",
    "wrongFeedback": {
      "1": "Real physiology.",
      "2": "Language.",
      "3": "Helping."
    },
    "page": 501,
    "id": "c14-l3-10"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.4",
    "question": "Meditation and exercise appear in the chapter as:",
    "options": [
      "Stress-reduction techniques in the vignette",
      "Selection predictors only in the vignette given these facts",
      "DSM criteria for mania in the vignette given these facts",
      "Heuristics for representativeness in the vignette now"
    ],
    "correct": 0,
    "correctFeedback": "Regulation strategies.",
    "wrongFeedback": {
      "1": "I-O.",
      "2": "Disorders.",
      "3": "Judgment."
    },
    "page": 516,
    "id": "c14-l3-11"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.2",
    "question": "PTSD-level trauma is an example of a:",
    "options": [
      "Severe/traumatic stressor in the vignette given these facts",
      "Daily hassle only in the vignette given these facts now now",
      "Mild life-change unit only in the vignette given these facts",
      "Display rule in the vignette given these facts now in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Traumatic events as stressors.",
    "wrongFeedback": {
      "1": "Hassles smaller.",
      "2": "SRRS includes various.",
      "3": "Emotion norms."
    },
    "page": 494,
    "id": "c14-l3-12"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.5",
    "question": "Optimism in positive psychology is linked to:",
    "options": [
      "Better coping/health associations in research themes",
      "Guaranteed immunity to all illness in the vignette now",
      "Zero appraisal processes in the vignette given these facts",
      "Mandatory Theory X in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Optimistic explanatory styles help.",
    "wrongFeedback": {
      "1": "Not absolute immunity.",
      "2": "Appraisal remains.",
      "3": "I-O theory."
    },
    "page": 524,
    "id": "c14-l3-13"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.1",
    "question": "Primary appraisal asks roughly:",
    "options": [
      "Is this a threat/challenge/harm? in the vignette now",
      "What is my g score? in the vignette given these facts",
      "What phoneme is that? in the vignette given these facts",
      "Which schedule is FI? in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Initial evaluation.",
    "wrongFeedback": {
      "1": "IQ.",
      "2": "Language.",
      "3": "Operant."
    },
    "page": 485,
    "id": "c14-l3-14"
  },
  {
    "chapter": 14,
    "level": 3,
    "section": "§14.4",
    "question": "Learned helplessness (Seligman) reduces coping when people learn:",
    "options": [
      "Outcomes seem uncontrollable in the vignette",
      "That control is high in the vignette given these facts",
      "That support always arrives in the vignette given these facts",
      "That GAS has two stages in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Uncontrollability → passivity.",
    "wrongFeedback": {
      "1": "Opposite.",
      "2": "Not always.",
      "3": "Three stages."
    },
    "page": 514,
    "id": "c14-l3-15"
  },
  {
    "id": "c14-l4-01",
    "chapter": 14,
    "level": 4,
    "section": "§14.1–14.2 + Ch2/7",
    "question": "A mayor cites a scary SRRS-style list after one viral illness story (availability) to claim city noise *causes* all hypertension, ignoring that noise exposure correlates with poverty, heat, and limited care access. Best methods-plus-stress critique?",
    "options": [
      "Life-stress checklists and confounded neighborhood exposures cannot isolate noise as the sole cause of hypertension; vivid cases amplify now now",
      "SRRS points are experimental manipulations of HPA output, so poverty and healthcare access become irrelevant once a viral illness story airs on",
      "Availability of one story raises internal validity automatically, converting ecological correlations into randomized noise trials for in the vignette",
      "Hypertension is only a display rule for emotion, unrelated to stress physiology, so confounding by poverty is a thinking-heuristic problem alone"
    ],
    "correct": 0,
    "correctFeedback": "Confounded stressors + availability ≠ clean causal noise claims (§14.1–14.2; methods; thinking).",
    "wrongFeedback": {
      "1": "People who pick this treat checklists/news as experiments that erase confounds.",
      "2": "People who pick this invent validity from vividness.",
      "3": "People who pick this deny stress physiology outright."
    }
  },
  {
    "id": "c14-l4-02",
    "chapter": 14,
    "level": 4,
    "section": "§14.1 + Ch3/10",
    "question": "Before a licensing exam, students show pounding hearts; one labels it “threat,” another “challenge,” with different performance. A peer says James–Lange means the heart *is* fear; another cites HPA vs sympathetic timing. Best integration?",
    "options": [
      "Similar arousal can be appraised as threat or challenge with different consequences; physiology matters, but appraisal is not optional",
      "James–Lange requires identical performance for all students with equal heart rates, because appraisal cannot shape emotional or stress outcomes",
      "HPA cortisol is the only pathway in acute exam pounding, so sympathetic activation and cognitive appraisal are excluded by definition in test",
      "Challenge appraisal extinguishes absolute thresholds for vision, which is why some students read items faster without any motivational mechanism"
    ],
    "correct": 0,
    "correctFeedback": "Appraisal shapes stress/emotion outcomes atop arousal (§14.1; biopsych; emotion).",
    "wrongFeedback": {
      "1": "People who pick this erase appraisal’s role after arousal.",
      "2": "People who pick this oversimplify acute arousal as HPA-only.",
      "3": "People who pick this drag sensory thresholds into appraisal effects."
    }
  },
  {
    "id": "c14-l4-03",
    "chapter": 14,
    "level": 4,
    "section": "§14.4 + Ch6/12",
    "question": "Employees in a toxic unit stop suggesting ideas after sarcastic shot-downs (positive punishment) and learn “nothing works” (learned helplessness themes) despite occasional random wins (unpredictability). A consultant suggests only individual grit posters. Best systems-plus-coping plan?",
    "options": [
      "Change contingencies that punish voice, increase controllable wins, and teach problem- and emotion-focused skills—posters alone won’t reverse",
      "Grit posters classically condition mastery over unpredictable punishment, restoring voice without leadership behavior change in toxic units",
      "Learned helplessness means reinforcement history never matters, so sarcastic shot-downs cannot be analyzed as operant punishment of suggestions",
      "Random occasional wins prove the schedule is continuous reinforcement, which forbids helplessness and makes coping skills training unnecessary"
    ],
    "correct": 0,
    "correctFeedback": "Environments that punish voice train withdrawal; redesign + skills > posters (§14.4; learning; social workplace).",
    "wrongFeedback": {
      "1": "People who pick this think posters replace contingency repair.",
      "2": "People who pick this deny operant analysis of shot-downs.",
      "3": "People who pick this misidentify intermittent wins as CRF and deny helplessness risk."
    }
  },
  {
    "id": "c14-l4-04",
    "chapter": 14,
    "level": 4,
    "section": "§14.3 + Ch8/15",
    "question": "A patient with panic after a car crash has intrusive memories (persistence) and avoids highways (negative reinforcement of relief). A relative says “just forget on purpose,” misunderstanding suppression. Sleep is poor. Best trauma-stress-memory framing for education?",
    "options": [
      "Intrusions reflect strong emotional encoding/retrieval; avoidance is reinforced by relief; poor sleep worsens regulation—guided evidence-based",
      "Intentional suppression reliably erases traumatic episodic traces overnight, so avoidance never becomes negatively reinforced in crash survivors",
      "Intrusive memories are semantic capitals rehearsed as algorithms, unrelated to amygdala-linked emotional memory or sleep-related regulation",
      "Negative reinforcement of avoidance requires food pellets, therefore highway avoidance after crashes cannot be maintained by anxiety relief"
    ],
    "correct": 0,
    "correctFeedback": "Trauma memory + reinforced avoidance + sleep load need proper care models (§14.3; memory; anxiety).",
    "wrongFeedback": {
      "1": "People who pick this over-trust suppression as erasure.",
      "2": "People who pick this misfile trauma intrusions as cold semantic algorithms.",
      "3": "People who pick this invent a food requirement for negative reinforcement."
    }
  },
  {
    "id": "c14-l4-05",
    "chapter": 14,
    "level": 4,
    "section": "§14.4–14.5 + Ch10/11",
    "question": "A positive-psychology workshop teaches gratitude lists. Participants with major depression and high neuroticism feel blamed when they “can’t feel grateful.” Evidence favors combining medical/psychotherapy care with careful positive practices—not forced positivity. Best facilitator stance?",
    "options": [
      "Gratitude tools can help some people but must not replace treatment or shame those with depression/high distress—match interventions to",
      "Failure to feel grateful during a workshop diagnoses antisocial personality, independent of depression symptoms or neuroticism scores on intake",
      "Positive psychology forbids concurrent CBT or medication, because gratitude lists extinguish all HPA activity within one session for every",
      "Neuroticism means broaden-and-build is impossible, so people with high scores should be excluded from all coping-skills groups permanently"
    ],
    "correct": 0,
    "correctFeedback": "Positive practices are adjunctive and non-shaming—not a monocure (§14.5; emotion; personality/disorders).",
    "wrongFeedback": {
      "1": "People who pick this misuse workshop struggle as ASPD diagnosis.",
      "2": "People who pick this ban standard depression care in favor of lists alone.",
      "3": "People who pick this exclude high-neuroticism clients from skills altogether."
    }
  },
  {
    "id": "c14-l4-06",
    "chapter": 14,
    "level": 4,
    "section": "§14.2 + Ch9/13",
    "question": "New parents show daily-hassle overload (sleep loss, finances). Grandparents say “what doesn’t kill you makes you resilient,” citing one relative who thrived. Workplace parental leave is unpaid (structural stress). Best stress-development reading?",
    "options": [
      "Cumulative hassles and structural supports matter; survivor anecdotes aren’t evidence that deprivation is benign—policies reducing",
      "A single resilient relative proves daily hassles improve attachment security for all infants, making paid leave psychologically unnecessary",
      "Sleep loss in parents raises crystallized intelligence for caregiving, offsetting financial stress without organizational policy changes",
      "Structural stressors cannot affect HPA themes because only major SRRS catastrophes count as stress in developmental research in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Hassles + structural context > tough-love anecdotes (§14.2; development; I-O/policy).",
    "wrongFeedback": {
      "1": "People who pick this generalize one anecdote into anti-leave evidence.",
      "2": "People who pick this romanticize sleep loss as cognitive enhancement.",
      "3": "People who pick this deny hassles/structural stress as real stressors."
    }
  },
  {
    "id": "c14-l4-07",
    "chapter": 14,
    "level": 4,
    "section": "§14.1 + Ch4/7",
    "question": "Residents after overnight call show slowed insight on case puzzles (thinking) and microsleeps. Attendings attribute errors to “weak grit.” Fatigue researchers cite attention lapses; safety wants duty-hour redesign. Best account?",
    "options": [
      "Sleep loss impairs attention and complex problem solving; redesigning hours addresses a root cause better than grit scolding after",
      "Microsleeps improve heuristic accuracy by forcing representativeness shortcuts that outperform rested analytic reasoning on medical puzzles",
      "Grit scores experimentally manipulate adenosine, so duty-hour limits cannot reduce error once personality labels are applied on rounds",
      "Insight problems are solved only in REM at night, proving daytime errors after call are motivational faking rather than cognitive impairment"
    ],
    "correct": 0,
    "correctFeedback": "Fatigue is a cognitive safety factor—not a moral grit failure (§14.1; consciousness; thinking).",
    "wrongFeedback": {
      "1": "People who pick this romanticize microsleeps as superior reasoning.",
      "2": "People who pick this treat grit labels as biology that blocks systems fixes.",
      "3": "People who pick this claim daytime impairment is faking tied to REM exclusivity."
    }
  },
  {
    "id": "c14-l4-08",
    "chapter": 14,
    "level": 4,
    "section": "§14.4 + Ch12/16",
    "question": "A support group reduces loneliness (social support buffering) and teaches CBT appraisal skills for job loss. Members previously self-medicated with alcohol (maladaptive coping). A troll claims groups are only placebo conformity. Best evidence-minded reply?",
    "options": [
      "Social support and skill-building can buffer stress and replace harmful coping; placebo/conformity skepticism doesn’t erase those mechanisms when",
      "Any group improvement is only Asch conformity, so appraisal skills cannot transfer outside the meeting room after job-loss stress in the vignette",
      "Alcohol self-medication proves problem-focused coping already succeeded, making support groups contraindicated for people with loneliness",
      "Buffering hypotheses forbid CBT appraisal work, because support acts only through classical conditioning of oxytocin without cognition now"
    ],
    "correct": 0,
    "correctFeedback": "Support + skills are real coping pathways alongside—not reduced to—conformity worries (§14.4; social; therapy).",
    "wrongFeedback": {
      "1": "People who pick this collapse all gains into Asch and deny transfer.",
      "2": "People who pick this mislabel substance coping as successful problem focus.",
      "3": "People who pick this strip support of cognitive mechanisms entirely."
    }
  },
  {
    "chapter": 15,
    "level": 1,
    "section": "§15.1",
    "question": "Psychological disorders involve significant disturbances with:",
    "options": [
      "Dysfunction and distress/impairment themes",
      "Only unusual hobbies",
      "Only high IQ",
      "Only daily hassles"
    ],
    "correct": 0,
    "correctFeedback": "APA-style definition elements.",
    "wrongFeedback": {
      "1": "Atypical alone insufficient.",
      "2": "Intelligence.",
      "3": "Stressors."
    },
    "page": 536,
    "id": "c15-l1-01"
  },
  {
    "chapter": 15,
    "level": 1,
    "section": "§15.2",
    "question": "DSM-5 is used mainly to:",
    "options": [
      "Classify/diagnose mental disorders",
      "Measure absolute thresholds",
      "Run job analyses",
      "Teach conservation"
    ],
    "correct": 0,
    "correctFeedback": "Diagnostic manual.",
    "wrongFeedback": {
      "1": "Sensation.",
      "2": "I-O.",
      "3": "Piaget."
    },
    "page": 540,
    "id": "c15-l1-02"
  },
  {
    "chapter": 15,
    "level": 1,
    "section": "§15.4",
    "question": "A specific phobia is:",
    "options": [
      "Marked fear of a specific object/situation",
      "A personality Big Five score",
      "A type of schedule",
      "A leadership style"
    ],
    "correct": 0,
    "correctFeedback": "Phobia category.",
    "wrongFeedback": {
      "1": "Personality.",
      "2": "Operant.",
      "3": "I-O."
    },
    "page": 546,
    "id": "c15-l1-03"
  },
  {
    "chapter": 15,
    "level": 1,
    "section": "§15.5",
    "question": "Obsessions are:",
    "options": [
      "Intrusive unwanted thoughts",
      "Compulsive ritual behaviors only",
      "Only manic episodes",
      "Only secure bases"
    ],
    "correct": 0,
    "correctFeedback": "Thought intrusions.",
    "wrongFeedback": {
      "1": "Compulsions are acts.",
      "2": "Mood.",
      "3": "Attachment."
    },
    "page": 552,
    "id": "c15-l1-04"
  },
  {
    "chapter": 15,
    "level": 1,
    "section": "§15.7",
    "question": "Major depressive disorder features persistent:",
    "options": [
      "Depressed mood and/or anhedonia among other symptoms",
      "Only elevated manic energy",
      "Only hallucinations by definition",
      "Only phoneme errors"
    ],
    "correct": 0,
    "correctFeedback": "MDD core.",
    "wrongFeedback": {
      "1": "Mania→bipolar.",
      "2": "Psychosis not required.",
      "3": "Language."
    },
    "page": 558,
    "id": "c15-l1-05"
  },
  {
    "chapter": 15,
    "level": 1,
    "section": "§15.8",
    "question": "Positive symptoms of schizophrenia include:",
    "options": [
      "Hallucinations and delusions",
      "Only flat affect",
      "Only avolition",
      "Only alogia"
    ],
    "correct": 0,
    "correctFeedback": "Positive = added experiences.",
    "wrongFeedback": {
      "1": "Negative symptoms.",
      "2": "Negative.",
      "3": "Negative."
    },
    "page": 568,
    "id": "c15-l1-06"
  },
  {
    "chapter": 15,
    "level": 2,
    "section": "§15.3",
    "question": "Diathesis–stress models propose:",
    "options": [
      "Vulnerability + stressor interactions",
      "That genes are irrelevant",
      "That stress never triggers",
      "That DSM forbids biology"
    ],
    "correct": 0,
    "correctFeedback": "Predisposition × stress.",
    "wrongFeedback": {
      "1": "Genes often part of diathesis.",
      "2": "Stress can trigger.",
      "3": "DSM includes bio."
    },
    "page": 543,
    "id": "c15-l2-01"
  },
  {
    "chapter": 15,
    "level": 2,
    "section": "§15.6",
    "question": "PTSD follows:",
    "options": [
      "Exposure to trauma with intrusion/avoidance/arousal clusters",
      "Only mild daily hassles",
      "Only job interviews",
      "Only conservation failure"
    ],
    "correct": 0,
    "correctFeedback": "Trauma-related disorder.",
    "wrongFeedback": {
      "1": "Hassles smaller.",
      "2": "I-O.",
      "3": "Piaget."
    },
    "page": 556,
    "id": "c15-l2-02"
  },
  {
    "chapter": 15,
    "level": 2,
    "section": "§15.7",
    "question": "Bipolar disorder involves:",
    "options": [
      "Depression plus mania/hypomania history",
      "Only unipolar sadness forever",
      "Only social anxiety",
      "Only OCD rituals"
    ],
    "correct": 0,
    "correctFeedback": "Mood elevation episodes.",
    "wrongFeedback": {
      "1": "Unipolar≠bipolar.",
      "2": "Anxiety.",
      "3": "OCD."
    },
    "page": 562,
    "id": "c15-l2-03"
  },
  {
    "chapter": 15,
    "level": 2,
    "section": "§15.8",
    "question": "Negative symptoms include:",
    "options": [
      "Flat affect, avolition, alogia themes",
      "Hallucinations only",
      "Delusions only",
      "Disorganized speech only as positive"
    ],
    "correct": 0,
    "correctFeedback": "Deficit symptoms.",
    "wrongFeedback": {
      "1": "Those are positive.",
      "2": "Positive.",
      "3": "Disorganized often grouped positive/disorganized."
    },
    "page": 570,
    "id": "c15-l2-04"
  },
  {
    "chapter": 15,
    "level": 2,
    "section": "§15.11",
    "question": "Borderline personality disorder features marked:",
    "options": [
      "Instability in relationships, self-image, affect",
      "Only lifelong avoidance of all novelty",
      "Only intellectual disability",
      "Only specific phobia of dogs"
    ],
    "correct": 0,
    "correctFeedback": "Cluster B instability pattern.",
    "wrongFeedback": {
      "1": "Avoidant is Cluster C.",
      "2": "Neurodevelopmental.",
      "3": "Anxiety."
    },
    "page": 582,
    "id": "c15-l2-05"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.1",
    "question": "Hearing voices that impair work and reflect dysfunction meets disorder criteria more than:",
    "options": [
      "Harmless unusual fashion choices in the vignette now",
      "Any atypical trait automatically in the vignette now",
      "Any stressor automatically in the vignette given these facts",
      "Any prototype mismatch in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Impairment/dysfunction needed.",
    "wrongFeedback": {
      "1": "Atypical≠disorder alone.",
      "2": "Stress≠disorder alone.",
      "3": "Concepts."
    },
    "page": 538,
    "id": "c15-l3-01"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.2",
    "question": "Having both anxiety and depression diagnoses illustrates:",
    "options": [
      "Comorbidity in the vignette given these facts now",
      "Reliability of a light threshold in the vignette now",
      "Object permanence in the vignette given these facts now",
      "Job analysis in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Co-occurrence.",
    "wrongFeedback": {
      "1": "Sensation.",
      "2": "Piaget.",
      "3": "I-O."
    },
    "page": 541,
    "id": "c15-l3-02"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.4",
    "question": "Panic attacks with fear of future attacks and avoidance may indicate:",
    "options": [
      "Panic disorder themes in the vignette given these facts",
      "Only MDD without anxiety in the vignette given these facts",
      "Only ADHD inattention in the vignette given these facts",
      "Only antisocial PD in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Panic disorder pattern.",
    "wrongFeedback": {
      "1": "Mood.",
      "2": "Neurodevelopmental.",
      "3": "Personality."
    },
    "page": 548,
    "id": "c15-l3-03"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.5",
    "question": "Handwashing for hours to neutralize contamination thoughts shows:",
    "options": [
      "Compulsions reducing obsession anxiety in the vignette",
      "Positive schizophrenic symptoms in the vignette now",
      "Manic goal pursuit in the vignette given these facts",
      "Secure attachment in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "OCD cycle.",
    "wrongFeedback": {
      "1": "Psychosis.",
      "2": "Bipolar.",
      "3": "Development."
    },
    "page": 553,
    "id": "c15-l3-04"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.6",
    "question": "Nightmares and hypervigilance after assault fit:",
    "options": [
      "PTSD symptom clusters in the vignette",
      "Flynn effect in the vignette given these facts now",
      "Hawthorne effect in the vignette given these facts now",
      "Mere exposure only in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Trauma sequelae.",
    "wrongFeedback": {
      "1": "IQ.",
      "2": "I-O.",
      "3": "Social liking."
    },
    "page": 556,
    "id": "c15-l3-05"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.7",
    "question": "Loss of interest in previously enjoyed activities is:",
    "options": [
      "Anhedonia in the vignette given these facts on the stated facts",
      "A hallucination in the vignette given these facts now now now",
      "A compulsion in the vignette given these facts now in the vignette",
      "A phoneme in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Anhedonia in depression.",
    "wrongFeedback": {
      "1": "Psychosis.",
      "2": "OCD.",
      "3": "Language."
    },
    "page": 559,
    "id": "c15-l3-06"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.8",
    "question": "Believing the CIA implanted a chip despite clear evidence against is a:",
    "options": [
      "Delusion in the vignette given these facts on the stated facts",
      "Hallucination of sound in the vignette given these facts now",
      "Night terror only in the vignette given these facts now now",
      "Daily hassle in the vignette given these facts now in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Fixed false belief.",
    "wrongFeedback": {
      "1": "Hallucination is percept.",
      "2": "Sleep.",
      "3": "Stressor."
    },
    "page": 569,
    "id": "c15-l3-07"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.8",
    "question": "Hearing voices with no external source is a:",
    "options": [
      "Hallucination in the vignette given these facts now now now",
      "Delusion of grandeur only in the vignette given these facts",
      "Obsession only in the vignette given these facts now now",
      "Stereotype in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "False perception.",
    "wrongFeedback": {
      "1": "Belief.",
      "2": "OCD thought.",
      "3": "Social belief."
    },
    "page": 569,
    "id": "c15-l3-08"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.10",
    "question": "Persistent inattention/hyperactivity across settings suggests:",
    "options": [
      "ADHD evaluation themes in the vignette given these facts",
      "Only GAD worry in the vignette given these facts now now",
      "Only specific phobia in the vignette given these facts",
      "Only DID in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "ADHD.",
    "wrongFeedback": {
      "1": "Anxiety.",
      "2": "Phobia.",
      "3": "Dissociative."
    },
    "page": 574,
    "id": "c15-l3-09"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.10",
    "question": "Social communication deficits with restricted repetitive behaviors suggest:",
    "options": [
      "Autism spectrum themes in the vignette given these facts now",
      "Only MDD in the vignette given these facts on the stated facts",
      "Only panic in the vignette given these facts on the stated facts",
      "Only Type A in the vignette given these facts now in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "ASD.",
    "wrongFeedback": {
      "1": "Mood.",
      "2": "Anxiety.",
      "3": "Stress pattern."
    },
    "page": 576,
    "id": "c15-l3-10"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.9",
    "question": "Gaps in autobiographical memory after trauma without medical amnesia may suggest:",
    "options": [
      "Dissociative amnesia themes in the vignette in the vignette",
      "Anterograde hippocampal stroke only by definition now now",
      "Iconic overflow in the vignette given these facts now now",
      "Job burnout only in the vignette given these facts now here"
    ],
    "correct": 0,
    "correctFeedback": "Dissociative memory gap.",
    "wrongFeedback": {
      "1": "Organic also possible clinically—chapter frames dissociative.",
      "2": "Sensory.",
      "3": "Stress."
    },
    "page": 572,
    "id": "c15-l3-11"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.11",
    "question": "Disregard for others’ rights with deceit/impulsivity fits:",
    "options": [
      "Antisocial personality disorder themes in the vignette",
      "Avoidant PD in the vignette given these facts now",
      "Dependent PD in the vignette given these facts now",
      "Schizoid curiosity only in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "ASPD cluster B.",
    "wrongFeedback": {
      "1": "Cluster C.",
      "2": "Cluster C.",
      "3": "Cluster A-ish."
    },
    "page": 584,
    "id": "c15-l3-12"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.3",
    "question": "Blaming demons for psychosis reflects a:",
    "options": [
      "Supernatural historical perspective in the vignette now",
      "Modern DSM biological-only view in the vignette now",
      "Job analysis in the vignette given these facts now",
      "Human factors checklist in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Historical supernatural model.",
    "wrongFeedback": {
      "1": "Modern multi-perspective.",
      "2": "I-O.",
      "3": "HF."
    },
    "page": 542,
    "id": "c15-l3-13"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.7",
    "question": "Cognitive theories of depression emphasize:",
    "options": [
      "Negative schemas/automatic thoughts in the vignette now",
      "Only dopamine excess always in the vignette given these facts",
      "Only token economies in the vignette given these facts",
      "Only display rules in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Beck-style cognition.",
    "wrongFeedback": {
      "1": "Schizophrenia DA themes.",
      "2": "Behavior therapy tool.",
      "3": "Emotion norms."
    },
    "page": 560,
    "id": "c15-l3-14"
  },
  {
    "chapter": 15,
    "level": 3,
    "section": "§15.4",
    "question": "GAD features:",
    "options": [
      "Excessive chronic worry hard to control in the vignette now",
      "Only one discrete panic attack ever in the vignette now now",
      "Only mania in the vignette given these facts on the stated facts",
      "Only delusions in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Generalized anxiety.",
    "wrongFeedback": {
      "1": "Panic different.",
      "2": "Bipolar.",
      "3": "Psychosis."
    },
    "page": 550,
    "id": "c15-l3-15"
  },
  {
    "id": "c15-l4-01",
    "chapter": 15,
    "level": 4,
    "section": "§15.1–15.2 + Ch2/12",
    "question": "A influencer checklist labels anyone quiet at parties as having “social anxiety disorder,” racking up shares (availability). Viewers pathologize introversion and shyness without impairment criteria. Clinicians cite DSM distress/dysfunction and stigma risks. Best correction?",
    "options": [
      "Disorder thresholds require clinically significant distress or impairment—not mere quietness or introversion—and viral checklists fuel false",
      "Quiet behavior at parties is sufficient for diagnosis because availability of checklists raises interrater reliability to perfect levels online",
      "Introversion equals social anxiety disorder on the Big Five, so impairment criteria are optional when a quiz goes viral on social platforms",
      "Stigma concerns mean clinicians should never diagnose anxiety even when panic, avoidance, and role collapse meet full criteria in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Use impairment/distress criteria; resist viral overpathologizing (§15.1–15.2; personality; social media).",
    "wrongFeedback": {
      "1": "People who pick this treat virality as diagnostic validity.",
      "2": "People who pick this collapse introversion into disorder.",
      "3": "People who pick this overcorrect into never diagnosing real disorders."
    }
  },
  {
    "id": "c15-l4-02",
    "chapter": 15,
    "level": 4,
    "section": "§15.3–15.4 + Ch6/14",
    "question": "A client’s elevator phobia began after a panic attack mid-ascent (classical CS–US pairing) and persists via avoidance that removes fear (negative reinforcement). Stress at work raises overall arousal. A friend says “one more fright will cathartically cure it.” Best learning-plus-stress plan logic?",
    "options": [
      "Exposure-based approaches target extinction of fear CRs while preventing avoidance reinforcement; raising random fright for catharsis is not",
      "Cathartic re-traumatization reliably extinguishes elevator fear because negative reinforcement of avoidance cannot maintain phobias after now",
      "Classical acquisition means operant avoidance is impossible, so preventing escape during exposure cannot be relevant to phobia maintenance now",
      "Work stress alone proves the phobia is GAD without situational fear, making elevator-specific exposure contraindicated in principle in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Two-factor style maintenance + exposure logic beat catharsis myths (§15.4; learning; stress).",
    "wrongFeedback": {
      "1": "People who pick this endorse catharsis against evidence.",
      "2": "People who pick this deny operant maintenance after classical acquisition.",
      "3": "People who pick this overgeneralize to GAD and block specific exposure."
    }
  },
  {
    "id": "c15-l4-03",
    "chapter": 15,
    "level": 4,
    "section": "§15.7 + Ch8/10",
    "question": "Someone with depression shows mood-congruent recall of failures, anhedonia, and a belief “I’ll always fail” (schema). Friends push forced gratitude only. Sleep collapsed after night shifts (biopsych stress). Best integrative understanding?",
    "options": [
      "Cognitive schemas and mood-congruent memory bias maintain depression alongside anhedonia and sleep disruption—forced gratitude alone rarely",
      "Mood-congruent recall proves memories of success were never encoded, so behavioral activation and sleep repair cannot help depressive schemas",
      "Anhedonia is sensory adaptation of taste buds, unrelated to mesocorticolimbic reward themes or cognitive therapy targets for depression",
      "Night-shift sleep loss immunizes against depressive schemas by increasing REM rebound insight into optimistic explanatory styles automatically"
    ],
    "correct": 0,
    "correctFeedback": "Cognition, memory bias, reward/anhedonia, and sleep interact—don’t peddle gratitude-only cures (§15.7; memory; motivation/consciousness).",
    "wrongFeedback": {
      "1": "People who pick this treat bias as proof success was never encoded.",
      "2": "People who pick this reduce anhedonia to taste adaptation.",
      "3": "People who pick this romanticize sleep loss as antidepressant insight."
    }
  },
  {
    "id": "c15-l4-04",
    "chapter": 15,
    "level": 4,
    "section": "§15.8 + Ch3/7",
    "question": "A first-episode psychosis admission includes auditory hallucinations and a persecutory delusion. A relative blames “too much dopamine from video games” only; another cites family criticism as the sole cause. Neuropsych notes multifactor risk. Best teaching point?",
    "options": [
      "Psychosis risk is multifactorial—biology, stress, and environment can contribute; single-cause dopamine-game or blame-only family stories",
      "Video-game dopamine uniquely causes schizophrenia hallucinations, so family climate and other stressors are etiologically irrelevant after gaming",
      "Persecutory delusions are availability heuristics about neighbors, not beliefs requiring clinical care beyond a one-time cognitive-bias workshop",
      "Hallucinations equal flashbulb memories of sounds, proving encoding success and ruling out any neurochemical hypotheses in first-episode now"
    ],
    "correct": 0,
    "correctFeedback": "Teach multifactor models; avoid monocausal blame (§15.8; biopsych; thinking).",
    "wrongFeedback": {
      "1": "People who pick this monocausal game-dopamine story.",
      "2": "People who pick this trivialize delusions as ordinary heuristics only.",
      "3": "People who pick this misread hallucinations as ordinary flashbulbs."
    }
  },
  {
    "id": "c15-l4-05",
    "chapter": 15,
    "level": 4,
    "section": "§15.6 + Ch8/12",
    "question": "A survivor of assault has PTSD intrusions, avoidance, and hypervigilance. Online forums urge “hypnosis to erase the tape.” Legal interviews risk leading questions (misinformation). Best clinically careful stance?",
    "options": [
      "Intrusions aren’t literal erasable tapes; avoid suggestive memory techniques, document carefully, and pursue evidence-based trauma therapies that",
      "Hypnosis reliably deletes episodic trauma traces without suggestion risk, so leading legal questions become harmless after one trance session now",
      "Hypervigilance means sensory absolute thresholds dropped permanently, which proves PTSD is only a Gestalt perceptual illusion treatable by",
      "Avoidance is positive punishment by definition, therefore exposure-based trauma therapies contradict operant principles and must be abandoned"
    ],
    "correct": 0,
    "correctFeedback": "Protect memory integrity; use evidence-based trauma care—not erase-the-tape myths (§15.6; memory; social/legal).",
    "wrongFeedback": {
      "1": "People who pick this trust hypnosis erasure myths.",
      "2": "People who pick this reduce PTSD to a sensory threshold/Gestalt gimmick.",
      "3": "People who pick this mislabel avoidance and reject exposure logic."
    }
  },
  {
    "id": "c15-l4-06",
    "chapter": 15,
    "level": 4,
    "section": "§15.11 + Ch11/2",
    "question": "A podcast diagnoses every dramatic breakup as borderline PD from a 5-item quiz (reliability/validity concerns) and ignores contextual trauma and trait overlaps with neuroticism. Viewers stigmatize a friend seeking help. Best assessment literacy message?",
    "options": [
      "Personality disorder diagnosis needs careful, multi-source clinical assessment—not viral quizzes—and stigma plus trait overlap demand",
      "Five viral items equal SCID-level reliability, so dramatic breakups become sufficient criteria without impairment history or differential",
      "Neuroticism scores prove borderline PD automatically, making trauma history ethically irrelevant to formulation and treatment planning",
      "Stigma is good for treatment motivation, therefore public labeling from podcasts improves outcomes more than confidential clinical care"
    ],
    "correct": 0,
    "correctFeedback": "Reject quiz diagnoses; reduce stigma; respect complexity (§15.11; personality; methods).",
    "wrongFeedback": {
      "1": "People who pick this inflate quiz psychometrics wildly.",
      "2": "People who pick this collapse neuroticism into PD and erase trauma context.",
      "3": "People who pick this endorse stigma as therapeutic."
    }
  },
  {
    "id": "c15-l4-07",
    "chapter": 15,
    "level": 4,
    "section": "§15.2–15.3 + Ch9/14",
    "question": "College counseling sees a spike in anxiety after midterms (stress) among first-years navigating identity and autonomy (development). Some meet GAD criteria; many have adjustment issues. Admin wants one drug-only protocol for all. Best stepped-care view?",
    "options": [
      "Differentiate disorder-level anxiety from normative developmental stress responses; match intensity of care—skills, therapy, and medication when",
      "Midterm stress chemically equals GAD for all first-years, so differential diagnosis wastes time better spent on identical pharmacotherapy starts",
      "Identity exploration immunizes against anxiety disorders, therefore rising counseling demand must be malingering rather than stress-related need",
      "Adjustment issues forbid psychotherapy because only diathesis–stress genes respond to treatment in emerging adults after exams in the vignette"
    ],
    "correct": 0,
    "correctFeedback": "Assess severity/context; stepped care beats one-size medication mandates (§15.2–15.3; development; stress).",
    "wrongFeedback": {
      "1": "People who pick this erase differential diagnosis.",
      "2": "People who pick this dismiss real stress as malingering via identity myths.",
      "3": "People who pick this invent gene-only treatability rules."
    }
  },
  {
    "id": "c15-l4-08",
    "chapter": 15,
    "level": 4,
    "section": "§15.5 + Ch6/10",
    "question": "An OCD pattern: intrusive contamination thoughts spike anxiety; washing rituals reduce it briefly (negative reinforcement), consuming hours. Family helps with reassurance rituals. A relative suggests thought suppression marathons. Best mechanism-focused guidance?",
    "options": [
      "Rituals and reassurance can maintain OCD via short-term relief; evidence-based ERP targets exposures without rituals—suppression often backfires",
      "Thought suppression permanently deletes obsessions, so rituals are unnecessary epiphenomena unrelated to negative reinforcement of anxiety",
      "Contamination obsessions are phoneme errors in inner speech, therefore ERP is irrelevant and family reassurance cannot affect operant maintenance",
      "Negative reinforcement cannot involve removal of anxiety, only removal of food, making washing cycles theoretically impossible to analyze"
    ],
    "correct": 0,
    "correctFeedback": "ERP logic vs suppression/reassurance traps (§15.5; learning; motivation/emotion).",
    "wrongFeedback": {
      "1": "People who pick this over-trust suppression and deny ritual reinforcement.",
      "2": "People who pick this misfile OCD as a speech-sound problem.",
      "3": "People who pick this invent a food-only rule for negative reinforcement."
    }
  },
  {
    "chapter": 16,
    "level": 1,
    "section": "§16.1",
    "question": "Deinstitutionalization moved care toward:",
    "options": [
      "Community-based treatment after asylum closures",
      "Larger lifelong asylum stays only",
      "Only dream analysis mandates",
      "Only ergonomic redesign"
    ],
    "correct": 0,
    "correctFeedback": "Community care movement.",
    "wrongFeedback": {
      "1": "Opposite of large asylums.",
      "2": "One modality.",
      "3": "I-O."
    },
    "page": 600,
    "id": "c16-l1-01"
  },
  {
    "chapter": 16,
    "level": 1,
    "section": "§16.2",
    "question": "Psychotherapy uses:",
    "options": [
      "Psychological methods to help with distress/disorder",
      "Only antibiotics",
      "Only job analyses",
      "Only absolute thresholds"
    ],
    "correct": 0,
    "correctFeedback": "Talk/behavioral psychological treatment.",
    "wrongFeedback": {
      "1": "Biomedical other.",
      "2": "I-O.",
      "3": "Sensation."
    },
    "page": 602,
    "id": "c16-l1-02"
  },
  {
    "chapter": 16,
    "level": 1,
    "section": "§16.2",
    "question": "Systematic desensitization pairs:",
    "options": [
      "Relaxation with graded exposure to feared cues",
      "Only shock with all cues",
      "Only free association",
      "Only token removal"
    ],
    "correct": 0,
    "correctFeedback": "Wolpe-style hierarchy + calm.",
    "wrongFeedback": {
      "1": "Aversive different.",
      "2": "Psychoanalysis.",
      "3": "Operant punishment."
    },
    "page": 606,
    "id": "c16-l1-03"
  },
  {
    "chapter": 16,
    "level": 1,
    "section": "§16.2",
    "question": "CBT combines:",
    "options": [
      "Cognitive and behavioral techniques",
      "Only dream interpretation",
      "Only ECT always",
      "Only group chanting"
    ],
    "correct": 0,
    "correctFeedback": "Thoughts + behaviors.",
    "wrongFeedback": {
      "1": "Psychodynamic.",
      "2": "Biomedical option.",
      "3": "Not definition."
    },
    "page": 610,
    "id": "c16-l1-04"
  },
  {
    "chapter": 16,
    "level": 1,
    "section": "§16.2",
    "question": "Client-centered therapy emphasizes:",
    "options": [
      "Empathy, UPR, genuineness",
      "Aversive conditioning",
      "Milgram-style orders",
      "Job analysis forms"
    ],
    "correct": 0,
    "correctFeedback": "Rogers conditions.",
    "wrongFeedback": {
      "1": "Behavior therapy.",
      "2": "Obedience.",
      "3": "I-O."
    },
    "page": 612,
    "id": "c16-l1-05"
  },
  {
    "chapter": 16,
    "level": 1,
    "section": "§16.3",
    "question": "Group therapy involves:",
    "options": [
      "Multiple clients with therapist facilitation",
      "Only one client always",
      "Only medication management by definition",
      "Only human factors"
    ],
    "correct": 0,
    "correctFeedback": "Group modality.",
    "wrongFeedback": {
      "1": "Individual differs.",
      "2": "Biomedical.",
      "3": "HF."
    },
    "page": 616,
    "id": "c16-l1-06"
  },
  {
    "chapter": 16,
    "level": 2,
    "section": "§16.2",
    "question": "Free association is a technique from:",
    "options": [
      "Psychoanalysis/psychodynamic traditions",
      "Human factors checklists",
      "Signal detection labs",
      "Strange Situation"
    ],
    "correct": 0,
    "correctFeedback": "Say whatever comes to mind.",
    "wrongFeedback": {
      "1": "I-O/HF.",
      "2": "Sensation.",
      "3": "Attachment."
    },
    "page": 603,
    "id": "c16-l2-01"
  },
  {
    "chapter": 16,
    "level": 2,
    "section": "§16.2",
    "question": "A token economy applies:",
    "options": [
      "Operant reinforcement with tokens",
      "Only classical CS–UCS pairing",
      "Only free association",
      "Only ECT"
    ],
    "correct": 0,
    "correctFeedback": "Tokens → backup reinforcers.",
    "wrongFeedback": {
      "1": "Classical different.",
      "2": "Psychodynamic.",
      "3": "Biomedical."
    },
    "page": 608,
    "id": "c16-l2-02"
  },
  {
    "chapter": 16,
    "level": 2,
    "section": "§16.2",
    "question": "Antidepressants, anxiolytics, antipsychotics are:",
    "options": [
      "Psychotropic medication classes",
      "Types of heuristics",
      "Attachment styles",
      "Piaget stages"
    ],
    "correct": 0,
    "correctFeedback": "Biomedical pharmacotherapy.",
    "wrongFeedback": {
      "1": "Cognition.",
      "2": "Development.",
      "3": "Development."
    },
    "page": 613,
    "id": "c16-l2-03"
  },
  {
    "chapter": 16,
    "level": 2,
    "section": "§16.5",
    "question": "Cultural competence in therapy means:",
    "options": [
      "Adapting understanding/skills to clients’ cultural contexts",
      "Ignoring culture entirely",
      "Using only one language script worldwide",
      "Avoiding all assessment"
    ],
    "correct": 0,
    "correctFeedback": "Culturally responsive practice.",
    "wrongFeedback": {
      "1": "Culture matters.",
      "2": "Flexibility needed.",
      "3": "Assessment used."
    },
    "page": 622,
    "id": "c16-l2-04"
  },
  {
    "chapter": 16,
    "level": 2,
    "section": "§16.1",
    "question": "Dorothea Dix advocated for:",
    "options": [
      "More humane treatment of people with mental illness",
      "Larger punishment asylums only",
      "Banning all therapy",
      "Measuring only g"
    ],
    "correct": 0,
    "correctFeedback": "Reform advocacy.",
    "wrongFeedback": {
      "1": "Opposite.",
      "2": "Therapy exists.",
      "3": "IQ."
    },
    "page": 599,
    "id": "c16-l2-05"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.2",
    "question": "Gradual hierarchy of spider photos while relaxed is:",
    "options": [
      "Systematic desensitization in the vignette",
      "Flooding without relaxation by definition in the vignette",
      "Free association in the vignette given these facts now",
      "Transactional leadership in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Graded + relaxation.",
    "wrongFeedback": {
      "1": "Flooding is intense exposure.",
      "2": "Psychoanalysis.",
      "3": "I-O."
    },
    "page": 606,
    "id": "c16-l3-01"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.2",
    "question": "Challenging “I’m worthless” thoughts and scheduling activity is typical:",
    "options": [
      "CBT in the vignette given these facts on the stated facts",
      "Only psychoanalysis dream work in the vignette given these facts",
      "Only ECT first-line always in the vignette given these facts",
      "Only Theory X in the vignette given these facts now now now"
    ],
    "correct": 0,
    "correctFeedback": "Cognitive + behavioral.",
    "wrongFeedback": {
      "1": "Psychodynamic.",
      "2": "Somatic option.",
      "3": "I-O."
    },
    "page": 610,
    "id": "c16-l3-02"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.2",
    "question": "Reflecting feelings without judgment exemplifies:",
    "options": [
      "Rogerian active listening / empathy in the vignette now",
      "Aversive shock pairing in the vignette given these facts",
      "Milgram prompts in the vignette given these facts now",
      "SRRS scoring in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Client-centered skill.",
    "wrongFeedback": {
      "1": "Behavior therapy aversive.",
      "2": "Obedience.",
      "3": "Stress scale."
    },
    "page": 612,
    "id": "c16-l3-03"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.2",
    "question": "Transference involves clients:",
    "options": [
      "Redirecting feelings about others onto the therapist",
      "Forgetting all dreams in the vignette given these facts",
      "Only collecting tokens in the vignette given these facts",
      "Only measuring thresholds in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Psychodynamic process.",
    "wrongFeedback": {
      "1": "Dreams analyzed differently.",
      "2": "Operant.",
      "3": "Sensation."
    },
    "page": 604,
    "id": "c16-l3-04"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.3",
    "question": "Family therapy treats problems as:",
    "options": [
      "Embedded in relational systems in the vignette given these facts",
      "Only individual id conflicts always in the vignette now now",
      "Only neuron lesions always in the vignette given these facts now",
      "Only phoneme gaps in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Systems view.",
    "wrongFeedback": {
      "1": "Broader than id.",
      "2": "Not only lesions.",
      "3": "Language."
    },
    "page": 618,
    "id": "c16-l3-05"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.4",
    "question": "Comorbid substance use with depression often needs:",
    "options": [
      "Integrated treatment planning in the vignette",
      "Ignoring one disorder in the vignette given these facts",
      "Only ergonomic chairs in the vignette given these facts",
      "Only conservation training in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Co-occurring disorders care.",
    "wrongFeedback": {
      "1": "Address both.",
      "2": "HF.",
      "3": "Piaget."
    },
    "page": 620,
    "id": "c16-l3-06"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.5",
    "question": "Stigma delaying help-seeking is a:",
    "options": [
      "Barrier to treatment utilization in the vignette now now",
      "Proof therapy never works in the vignette given these facts",
      "Type of absolute threshold in the vignette given these facts",
      "Job KSAO in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Sociocultural barrier.",
    "wrongFeedback": {
      "1": "Therapy can help.",
      "2": "Sensation.",
      "3": "I-O."
    },
    "page": 624,
    "id": "c16-l3-07"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.2",
    "question": "ECT is primarily considered for:",
    "options": [
      "Severe treatment-resistant depression themes",
      "Mild specific phobia first-line in the vignette now now now",
      "Everyday hassles in the vignette given these facts now",
      "Job interviews in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Somatic option for severe cases.",
    "wrongFeedback": {
      "1": "Exposure better for phobia.",
      "2": "Coping.",
      "3": "I-O."
    },
    "page": 614,
    "id": "c16-l3-08"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.1",
    "question": "Short hospital stays with outpatient follow-up reflect:",
    "options": [
      "Modern acute care patterns post-asylum era in the vignette",
      "Lifelong asylum norms of 1800s in the vignette given these facts",
      "Only dream hospitals in the vignette given these facts now",
      "Only human factors labs in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Contemporary system.",
    "wrongFeedback": {
      "1": "Historical asylums longer.",
      "2": "Not.",
      "3": "Not."
    },
    "page": 601,
    "id": "c16-l3-09"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.2",
    "question": "Exposure without relaxation rituals aiming to extinguish fear is closer to:",
    "options": [
      "Exposure/extinction-based behavior therapy in the vignette",
      "Client-centered UPR only in the vignette given these facts",
      "Job analysis in the vignette given these facts now",
      "Flynn testing in the vignette given these facts now"
    ],
    "correct": 0,
    "correctFeedback": "Exposure therapy.",
    "wrongFeedback": {
      "1": "Humanistic different.",
      "2": "I-O.",
      "3": "IQ."
    },
    "page": 607,
    "id": "c16-l3-10"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.2",
    "question": "Play therapy often helps children express issues via:",
    "options": [
      "Toys/play as communication medium in the vignette now now",
      "Only adult free association on a couch in the vignette now",
      "Only group polarization in the vignette given these facts",
      "Only SRRS in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Child modality.",
    "wrongFeedback": {
      "1": "Adult psychoanalysis form.",
      "2": "Social.",
      "3": "Stress."
    },
    "page": 605,
    "id": "c16-l3-11"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.5",
    "question": "Insurance limits and few local clinicians are:",
    "options": [
      "Access barriers in the vignette given these facts now now",
      "Therapeutic alliance skills in the vignette given these facts",
      "Defense mechanisms in the vignette given these facts now",
      "Prototypes in the vignette given these facts on the stated facts"
    ],
    "correct": 0,
    "correctFeedback": "Structural access issues.",
    "wrongFeedback": {
      "1": "Process skills.",
      "2": "Freud.",
      "3": "Concepts."
    },
    "page": 623,
    "id": "c16-l3-12"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.3",
    "question": "Couples therapy focuses on:",
    "options": [
      "Relationship patterns and communication in the vignette now",
      "Only individual phobias always in the vignette given these facts",
      "Only medication side effects always in the vignette now now",
      "Only sensory adaptation in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Dyadic modality.",
    "wrongFeedback": {
      "1": "Can be individual issues too but focus relational.",
      "2": "Biomedical.",
      "3": "Sensation."
    },
    "page": 617,
    "id": "c16-l3-13"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.2",
    "question": "Biomedical therapy includes:",
    "options": [
      "Medications and other somatic treatments in the vignette",
      "Only cognitive restructuring in the vignette given these facts",
      "Only UPR in the vignette given these facts on the stated facts",
      "Only Asch lines in the vignette given these facts now now"
    ],
    "correct": 0,
    "correctFeedback": "Biological interventions.",
    "wrongFeedback": {
      "1": "CBT.",
      "2": "Humanistic.",
      "3": "Social."
    },
    "page": 613,
    "id": "c16-l3-14"
  },
  {
    "chapter": 16,
    "level": 3,
    "section": "§16.1",
    "question": "Pinel’s reforms argued against:",
    "options": [
      "Cruel asylum practices toward humane care in the vignette",
      "Mandatory CBT worldwide in 1790 in the vignette now",
      "DSM-5 in the 1700s in the vignette given these facts",
      "Hawthorne lighting laws in the vignette given these facts"
    ],
    "correct": 0,
    "correctFeedback": "Humane treatment history.",
    "wrongFeedback": {
      "1": "CBT later.",
      "2": "DSM later.",
      "3": "I-O later."
    },
    "page": 598,
    "id": "c16-l3-15"
  },
  {
    "id": "c16-l4-01",
    "chapter": 16,
    "level": 4,
    "section": "§16.2 + Ch6/15",
    "question": "For elevator phobia, a clinic debates flooding versus graded exposure with response prevention. The client’s avoidance has been negatively reinforced for years; panic expectancy is high. A relative demands one giant scare “for catharsis.” Best evidence-aligned choice rationale?",
    "options": [
      "Graded exposure with prevention of avoidance targets extinction without requiring harmful catharsis theater; flooding exists but is not the",
      "Cathartic flooding is mandatory because negative reinforcement of avoidance cannot be addressed by graded hierarchies in modern behavior therapy",
      "Exposure fails unless paired with continuous food reinforcement each floor, converting extinction into a token economy for fear CRs in the vignette",
      "Panic expectancy means classical CRs cannot extinguish, so medication without any exposure learning is the only ethical pathway forever now"
    ],
    "correct": 0,
    "correctFeedback": "Exposure/extinction with ethical pacing beats catharsis myths (§16.2; learning; anxiety disorders).",
    "wrongFeedback": {
      "1": "People who pick this mandate catharsis and deny graded options.",
      "2": "People who pick this bolt irrelevant food tokens onto extinction.",
      "3": "People who pick this claim expectancy makes extinction impossible."
    }
  },
  {
    "id": "c16-l4-02",
    "chapter": 16,
    "level": 4,
    "section": "§16.2 + Ch11/10",
    "question": "A depressed client’s automatic thought “I’m unlovable” follows a breakup (schema activation). Therapist plans CBT thought records plus behavioral activation; client asks only for unconditional positive regard sessions without skills. Alliance matters. Best integration?",
    "options": [
      "Rogerian conditions support alliance, but depression outcomes often improve when CBT/BA skills target thoughts and avoidance—not UPR climate",
      "Unconditional positive regard extinguishes depressive schemas without behavioral experiments, making activity scheduling scientifically now",
      "Automatic thoughts are Freudian parapraxes only, so cognitive restructuring violates humanistic ethics and must be abandoned for silent free",
      "Behavioral activation requires Theory X hospital token fines, incompatible with empathy or collaborative CBT structuring in outpatient depression"
    ],
    "correct": 0,
    "correctFeedback": "Warmth plus active CBT/BA skills usually beats warmth-only for depression (§16.2; personality/humanistic; motivation).",
    "wrongFeedback": {
      "1": "People who pick this overclaim UPR-as-sufficient mechanism.",
      "2": "People who pick this force a false humanistic–cognitive ethics conflict.",
      "3": "People who pick this caricature BA as punitive Theory X."
    }
  },
  {
    "id": "c16-l4-03",
    "chapter": 16,
    "level": 4,
    "section": "§16.2–16.3 + Ch8/12",
    "question": "In group therapy for social anxiety, a member “recalls” childhood humiliation details that first appeared in another member’s story (misinformation/social contagion risk). Facilitators need safety without shame. Best memory-informed facilitation move?",
    "options": [
      "Gently note memory can be influenced by others’ stories, keep ownership of personal narrative cautious, and continue exposure/skills without",
      "Identical details prove flashbulb verbatim accuracy across members, so facilitators should treat the recalled humiliation as shared historical",
      "Social contagion of narrative details cannot occur in therapy groups because misinformation effects require police interviews exclusively",
      "Any overlapping memory means delusional disorder for both members, requiring immediate antipsychotics before group social-anxiety exposures"
    ],
    "correct": 0,
    "correctFeedback": "Groups can seed details—handle carefully without humiliation or overpathologizing (§16.3; memory; social).",
    "wrongFeedback": {
      "1": "People who pick this over-trust flashbulb accuracy for borrowed details.",
      "2": "People who pick this deny misinformation outside forensic contexts.",
      "3": "People who pick this leap to psychosis labeling from overlap alone."
    }
  },
  {
    "id": "c16-l4-04",
    "chapter": 16,
    "level": 4,
    "section": "§16.1–16.5 + Ch14/15",
    "question": "A rural client stops meds after TikTok stigma (“meds mean weakness”) and sleep crashes, worsening depression. Clinic access is scarce (barrier). Telehealth CBT plus collaborative medication education are options. Best systems-aware plan?",
    "options": [
      "Address stigma beliefs, restore sleep/safety planning, and combine accessible psychotherapy with informed medication decisions—barriers and myths",
      "Stigma posts prove medication is never appropriate for depression, so telehealth CBT alone must exclude any biomedical discussion forever after",
      "Access barriers invalidate psychotherapy mechanisms, meaning only inpatient commitment without consent satisfies ethical care in rural depression",
      "Sleep loss after stopping meds is classical extinction of HPA activity, confirming that stigma advice was physiologically correct for major"
    ],
    "correct": 0,
    "correctFeedback": "Combat stigma and barriers; integrate psychosocial and biomedical thoughtfully (§16.5; stress; disorders).",
    "wrongFeedback": {
      "1": "People who pick this let TikTok stigma dictate biomedical exclusion.",
      "2": "People who pick this jump to coercive care as the only ethics.",
      "3": "People who pick this invent physiology that validates stigma myths."
    }
  },
  {
    "id": "c16-l4-05",
    "chapter": 16,
    "level": 4,
    "section": "§16.2 + Ch2/7",
    "question": "A hospital adopts a new “energy tapping” therapy after testimonials (availability) without controlled outcome data. Staff morale rises briefly (Hawthorne-ish attention). A methods psychologist asks for evidence hierarchies before replacing CBT for OCD. Best stance?",
    "options": [
      "Testimonials and attention effects don’t establish efficacy; keep empirically supported OCD treatments first-line until rigorous evidence for",
      "Availability of emotional testimonials outranks RCTs for OCD, so replacing ERP/CBT with tapping is methodologically conservative practice now",
      "Hawthorne effects prove long-term symptom remission equal to exposure therapy whenever staff feel enthusiastic during the rollout month",
      "Energy tapping’s lack of a clear learning mechanism makes it automatically superior to extinction-based ERP for contamination rituals"
    ],
    "correct": 0,
    "correctFeedback": "Evidence hierarchies before abandoning supported care (§16.2; methods; thinking).",
    "wrongFeedback": {
      "1": "People who pick this crown testimonials over rigorous tests.",
      "2": "People who pick this confuse brief morale with durable efficacy.",
      "3": "People who pick this treat mechanism vagueness as superiority."
    }
  },
  {
    "id": "c16-l4-06",
    "chapter": 16,
    "level": 4,
    "section": "§16.2 + Ch3/15",
    "question": "Family asks whether antipsychotics “mean the brain is permanently broken.” Education covers dopamine-related hypotheses, side-effect monitoring, and psychosocial rehab. A cousin says therapy is useless if meds exist. Best integrated message?",
    "options": [
      "Medications can reduce symptoms for many people while skills, support, and therapy address functioning—biology talk isn’t destiny, and",
      "Dopamine hypotheses prove psychosocial interventions cannot help psychosis-related disability once any medication has been prescribed even",
      "Side-effect monitoring is optional if a neurotransmitter is mentioned, because biological framing removes the need for informed consent",
      "Permanent brokenness is guaranteed by first-episode medication, making supported employment and CBT for psychosis scientifically futile"
    ],
    "correct": 0,
    "correctFeedback": "Biopsychosocial care > meds-only fatalism or meds-without-consent myths (§16.2; biopsych; disorders).",
    "wrongFeedback": {
      "1": "People who pick this erase psychosocial help once meds appear.",
      "2": "People who pick this dismiss consent/side-effect ethics.",
      "3": "People who pick this preach permanent futility against rehab evidence."
    }
  },
  {
    "id": "c16-l4-07",
    "chapter": 16,
    "level": 4,
    "section": "§16.3–16.4 + Ch9/12",
    "question": "Adolescent group for self-harm urges uses peer coping skills, but one charismatic member glamorizes scars (deviant peer contagion risk). Developmental need for belonging is strong. Facilitators must protect safety. Best move?",
    "options": [
      "Keep belonging through structured prosocial norms, interrupt glamorizing talk, strengthen adult-guided coping, and use clear safety in the vignette",
      "Belonging needs mean facilitators must allow glamorizing content, because interrupting peers destroys identity development more than self-harm",
      "Peer contagion cannot occur for self-harm, so charismatic modeling of scars is clinically irrelevant in adolescent groups with high affiliation now",
      "Safety protocols forbid any peer interaction, converting group therapy into simultaneous individual free association without social learning"
    ],
    "correct": 0,
    "correctFeedback": "Harness peer belonging carefully; block contagion of harm (§16.3; development; social).",
    "wrongFeedback": {
      "1": "People who pick this sacrifice safety to uncritical belonging.",
      "2": "People who pick this deny contagion risks.",
      "3": "People who pick this abolish therapeutic peer processes entirely."
    }
  },
  {
    "id": "c16-l4-08",
    "chapter": 16,
    "level": 4,
    "section": "§16.2 + Ch8/14",
    "question": "A client with PTSD and insomnia does trauma-focused work while a partner repeatedly “reminds” them of unverified details (suggestion risk) and pushes alcohol to “forget” (maladaptive coping). Therapist coordinates sleep, substance, and memory-safe trauma care. Best priority sketch?",
    "options": [
      "Stabilize sleep/substance risks, coach partners away from suggestive rehearsal and alcohol-for-forgetting, and proceed with evidence-based trauma",
      "Alcohol-assisted forgetting is preferred preparatory care before trauma therapy because suppression plus depressants erase episodic traces safely",
      "Partner suggestion improves trauma accuracy like collaborative free recall, so unverified details should be rehearsed nightly to strengthen",
      "Insomnia must remain untreated until all trauma narratives are completed, because sleep repair interferes with extinction learning in every PTSD"
    ],
    "correct": 0,
    "correctFeedback": "Safety, sleep, substance, and anti-suggestion hygiene alongside trauma therapy (§16.2; memory; stress).",
    "wrongFeedback": {
      "1": "People who pick this endorse dangerous alcohol forgetting myths.",
      "2": "People who pick this invite suggestive contamination of trauma memory.",
      "3": "People who pick this delay sleep care against usual clinical priorities."
    }
  },
  {
    "id": "c1-l5-01",
    "chapter": 1,
    "level": 5,
    "section": "§1.1",
    "question": "During orientation week, first-year student Priya tells her roommate, “Psychology isn’t a real science—people just talk about feelings, like philosophy.” Her roommate wants a reply that matches how OpenStax frames modern psychology. Which reply is best?",
    "options": [
      "Psychology is scientific only when it uses brain scans.",
      "Psychology uses scientific methods to study mind and behavior.",
      "Psychology abandoned studying the mind after Freud.",
      "Psychology is scientific because every claim is already proven true forever."
    ],
    "correct": 1,
    "correctFeedback": "Modern psychology is defined by empirical methods applied to mind and behavior (§1.1).",
    "wrongFeedback": {
      "0": "Trap: confuses one tool (neuroimaging) with science itself—many valid methods exist without scans.",
      "2": "Trap: erases cognitive/clinical work on mind; Freud did not end the scientific study of mental life.",
      "3": "Trap: confuses science with permanent certainty; claims remain open to revision with evidence."
    },
    "mode": "mock"
  },
  {
    "id": "c1-l5-02",
    "chapter": 1,
    "level": 5,
    "section": "§1.2",
    "question": "In a history-of-psychology seminar, Marcus argues that Freud’s couch therapy founded scientific psychology, while Aisha points to Wundt’s 1879 Leipzig laboratory instead. The TA asks why that laboratory is historically important. Wundt’s Leipzig laboratory is historically important mainly because it:",
    "options": [
      "It proved unconscious sexual conflict drives all behavior in every case.",
      "It showed that only animal behavior can ever be studied scientifically.",
      "It helped found psychology as an experimental lab science with controlled introspection.",
      "It invented random assignment of people to treatment conditions for experiments."
    ],
    "correct": 2,
    "correctFeedback": "Wundt’s 1879 lab and trained introspection helped push psychology toward controlled observation; Titchener later developed structuralism further (§1.2).",
    "wrongFeedback": {
      "0": "Trap: attributes Freud’s psychoanalytic focus to Wundt’s lab project.",
      "1": "Trap: extreme behaviorist caricature—Wundt studied human conscious experience.",
      "3": "Trap: random assignment is a research-methods tool (Ch 2), not Wundt’s claim to fame."
    },
    "mode": "mock"
  },
  {
    "id": "c1-l5-03",
    "chapter": 1,
    "level": 5,
    "section": "§1.2",
    "question": "Two classmates taste the same iced coffee after a morning lecture. Mei carefully lists every sensation she notices—cold, bitter, then sweet. Jun instead asks why so many students drink it before 9 a.m. classes. Whose question is closer to functionalism?",
    "options": [
      "Mei — cataloguing elements of experience is James’s method.",
      "Jun — asking how a mental process helps adaptation fits functionalism.",
      "Both equally — structuralism and functionalism are the same approach.",
      "Neither — functionalism only means modern evolutionary psychology surveys."
    ],
    "correct": 1,
    "correctFeedback": "Functionalism (James) asks what mental life is for; Mei’s inventory is nearer structuralist aims (§1.2).",
    "wrongFeedback": {
      "0": "Trap: swaps labels—element catalogues fit structuralism more than James’s functionalism.",
      "2": "Trap: collapses a classic contrast students must keep separate.",
      "3": "Trap: over-narrows “functional” to one modern specialty."
    },
    "mode": "mock"
  },
  {
    "id": "c1-l5-04",
    "chapter": 1,
    "level": 5,
    "section": "§1.2",
    "question": "On a popular podcast, the host declares, “If you forget a friend’s name, it secretly means you hate them—Freud proved it.” A listener who just finished Chapter 1 wants the best critique of that claim. Best critique?",
    "options": [
      "Freud founded the Leipzig experimental laboratory, so the podcast claim is scientifically solid.",
      "Freud was clinically influential, but unfalsifiable secret-meaning claims are not science’s standard.",
      "Behaviorists agree every slip of the tongue reveals repressed hatred toward that friend.",
      "Humanistic psychologists defined scientific proof as dream-symbol decoding of every forgetfulness."
    ],
    "correct": 1,
    "correctFeedback": "Freud matters historically; blanket symbolic “proofs” are not how empirical psychology validates claims (§1.2).",
    "wrongFeedback": {
      "0": "Trap: misattributes founding laboratory science (Wundt) to Freud.",
      "2": "Trap: invents behaviorist endorsement of Freudian slips.",
      "3": "Trap: mislabels humanism; Rogers/Maslow did not define science as dream symbolism."
    },
    "mode": "mock"
  },
  {
    "id": "c1-l5-05",
    "chapter": 1,
    "level": 5,
    "section": "§1.2",
    "question": "At halftime, Coach Rivera tells the team, “Don’t break the play into separate pixels—you have to see the whole pattern at once.” A sports-psychology student in the stands recognizes a historical idea. Which historical idea does this echo?",
    "options": [
      "Structuralism’s element-by-element inventory of consciousness",
      "Classical conditioning of glandular reflexes",
      "Gestalt emphasis that the whole percept can differ from the sum of parts",
      "Radical behaviorism’s ban on discussing perception"
    ],
    "correct": 2,
    "correctFeedback": "Gestalt: organization/wholes matter beyond isolated sensations (§1.2).",
    "wrongFeedback": {
      "0": "Trap: structuralism is the opposite impulse—break experience into elements.",
      "1": "Trap: Pavlovian learning, not perceptual organization.",
      "3": "Trap: overstates behaviorism and ignores the coach’s perceptual claim."
    },
    "mode": "mock"
  },
  {
    "id": "c1-l5-06",
    "chapter": 1,
    "level": 5,
    "section": "§1.2–1.3",
    "question": "A downtown clinic posts a banner: “We only study what people do, never thoughts—because thoughts aren’t scientific.” A visiting lecturer asks which historical stance that echoes and what later corrected it. Which historical stance is this closest to, and what’s the later correction?",
    "options": [
      "Humanism; it was later replaced wholesale by phrenology as the science of mind.",
      "Early behaviorism focused on observables; the cognitive revolution studied mind again.",
      "Structuralism; it was later replaced wholesale by astrology in university labs.",
      "Multicultural psychology; it later banned all experiments across the field."
    ],
    "correct": 1,
    "correctFeedback": "Watson/Skinner-era behaviorism prioritized observables; cognitive approaches reopened rigorous study of mental processes (§1.2–1.3).",
    "wrongFeedback": {
      "0": "Trap: scrambles schools—humanism is not “behavior only,” and phrenology is not its successor.",
      "2": "Trap: structuralism studied conscious elements, not a ban on thoughts; astrology is nonsense.",
      "3": "Trap: invents a ban; multicultural psychology expands samples/context, not forbids experiments."
    },
    "mode": "mock"
  },
  {
    "id": "c1-l5-07",
    "chapter": 1,
    "level": 5,
    "section": "§1.2 / diversity",
    "question": "A memory lab flyer recruits only students from one wealthy urban campus, then the PI claims “human memory works like this worldwide.” A methods-savvy undergrad flags a Chapter 1 concern. Which Ch 1 concern is most directly raised?",
    "options": [
      "Introspection is always more valid than any controlled experiment can be.",
      "Limited WEIRD samples threaten how far findings generalize across cultures.",
      "Clinical psychologists are barred from doing any empirical research at all.",
      "Random sampling is defined as identical to random assignment in every design."
    ],
    "correct": 1,
    "correctFeedback": "Narrow samples limit external validity; diversity-of-samples concerns are central (§1.2 / contemporary issues).",
    "wrongFeedback": {
      "0": "Trap: false method hierarchy—introspection is not always superior.",
      "2": "Trap: false career limit; clinicians can and do research.",
      "3": "Trap: classic Ch 2 confusion (sampling ≠ assignment) dressed as the Ch 1 issue."
    },
    "mode": "mock"
  },
  {
    "id": "c1-l5-08",
    "chapter": 1,
    "level": 5,
    "section": "§1.3–1.4",
    "question": "At a university career fair, booths advertise psychology jobs. Students compare flyers: an I-O hire redesigning interviews, a forensic consultant advising on competence questions, a biopsych lab studying sleep and transmitters, and a booth titled “Structuralist Therapist—run our only hospital ward.” Which statements correctly match a contemporary field to a realistic task? (Select all that apply.)",
    "options": [
      "I-O psychologist: redesign hiring interviews for a company",
      "Forensic psychologist: advise on jury selection / competence questions in a legal context",
      "Biopsychologist: map how sleep deprivation alters neurotransmitter activity",
      "Structuralist (as a mainstream 2020s career title): run the hospital’s only therapy ward",
      "Health psychologist: design a worksite program to improve stress-related habits"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "A/B/C/E are standard applied/scientific roles; “structuralist therapist” is not a current career label (§1.3–1.4).",
    "wrongFeedback": {
      "0": "Correct to select: I-O work commonly includes selection/interview redesign.",
      "1": "Correct to select: forensic psychology intersects legal questions such as competence and jury issues.",
      "2": "Correct to select: biopsychology links physiology (e.g., sleep, transmitters) to behavior.",
      "3": "Trap: structuralism is a historical school, not a mainstream 2020s therapy-ward job title.",
      "4": "Correct to select: health psychology targets stress-related habits and wellness programs."
    },
    "mode": "mock"
  },
  {
    "id": "c1-l5-09",
    "chapter": 1,
    "level": 5,
    "section": "§1.2",
    "question": "In a history review circle, five students read aloud claims about Wundt, Skinner, humanism, cognitive psychology, and Freud versus laboratory psychology. Their tutor asks which claims about psychology’s history are accurate. Which claims about psychology’s history are accurate? (Select all that apply.)",
    "options": [
      "Before Wundt/James, mind questions were largely philosophical.",
      "Skinner’s operant ideas are part of the behaviorist lineage emphasizing consequences of behavior.",
      "Humanism (e.g., Rogers/Maslow) emphasized growth and potential as a pushback against gloomy/mechanistic views.",
      "Cognitive psychology treats mental processes as illegitimate topics.",
      "Freud’s clinical focus on the unconscious differs from Wundt’s laboratory project."
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "D reverses the cognitive project—mind is the topic. A/B/C/E track OpenStax’s historical framing (§1.2).",
    "wrongFeedback": {
      "0": "Correct to select: pre-lab mind questions lived mainly in philosophy.",
      "1": "Correct to select: operant conditioning sits in the behaviorist lineage.",
      "2": "Correct to select: humanism stressed growth/potential vs gloomier/mechanistic frames.",
      "3": "Trap: common mix-up with behaviorism—cognitive psychology studies mental processes.",
      "4": "Correct to select: Freud’s clinical unconscious project ≠ Wundt’s lab introspection program."
    },
    "mode": "mock"
  },
  {
    "id": "c1-l5-10",
    "chapter": 1,
    "level": 5,
    "section": "§1.1–1.4",
    "question": "Before a midterm, five students in a study group trade bold claims about what psychology is and how it works. Their tutor asks which claims are methodologically or historically sound. Which are methodologically or historically sound? (Select all that apply.)",
    "options": [
      "Psychology equals common sense, so experiments are optional.",
      "A school of thought can be historically important yet still be limited or revised.",
      "Saying a finding “makes sense” is not the same as having controlled evidence.",
      "If two ideas are famous, they must be the same theory under different names.",
      "Career paths in psychology include research and many applied specialties, not only couch therapy."
    ],
    "correct": [
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Science revises; intuition ≠ evidence; careers are diverse (§1.1–1.4).",
    "wrongFeedback": {
      "0": "Trap: anti-science shortcut—common sense is not a substitute for controlled tests.",
      "1": "Correct to select: historical importance ≠ immunity from limits or revision.",
      "2": "Correct to select: “feels true” ≠ controlled evidence.",
      "3": "Trap: collapses distinctions (e.g., structuralism vs functionalism) because both are famous.",
      "4": "Correct to select: psychology careers span research and many applied specialties."
    },
    "mode": "mock"
  },
  {
    "id": "c2-l5-01",
    "chapter": 2,
    "level": 5,
    "section": "§2.1",
    "question": "Blogger Ken posts a viral thread: “My uncle smoked a pack a day and lived to 95, so smoking can’t really be harmful—science is overrated.” A public-health classmate wants the research lesson that best answers Ken. Which research lesson best answers this?",
    "options": [
      "Anecdotes from relatives can overturn large bodies of controlled public-health evidence overnight.",
      "Single cases are vivid but do not replace systematic population-level research on risks.",
      "If one person survives an exposure, the IV must be unrelated to the DV in every study.",
      "Archival research proves every personal longevity story is a causal demonstration of safety."
    ],
    "correct": 1,
    "correctFeedback": "Research evaluates patterns beyond vivid anecdotes (§2.1).",
    "wrongFeedback": {
      "0": "Trap: treats a story as stronger than cumulative evidence.",
      "2": "Trap: misuses IV/DV language for a non-experiment anecdote.",
      "3": "Trap: archival methods don’t make every story causal."
    },
    "mode": "mock"
  },
  {
    "id": "c2-l5-02",
    "chapter": 2,
    "level": 5,
    "section": "§2.2",
    "question": "Developmental researchers set up a one-way mirror beside a campus playground. They code how often toddlers share toys, without intervening or assigning kids to groups. A methods quiz asks for the best label of this approach. Best label?",
    "options": [
      "Laboratory experiment with random assignment",
      "Naturalistic observation",
      "Double-blind clinical trial",
      "Survey with a random sample"
    ],
    "correct": 1,
    "correctFeedback": "Behavior recorded in a real setting with minimal intervention is naturalistic observation (§2.2).",
    "wrongFeedback": {
      "0": "Trap: no manipulated IV or assignment here.",
      "2": "Trap: no treatment blinding or clinical trial design.",
      "3": "Trap: they are observing, not surveying."
    },
    "mode": "mock"
  },
  {
    "id": "c2-l5-03",
    "chapter": 2,
    "level": 5,
    "section": "§2.3",
    "question": "City data show ice-cream sales and drowning rates rising together each summer. Journalist Lena headlines, “Ice cream causes drowning—correlation proves it.” Which critique should her editor demand?",
    "options": [
      "A correlation of r = +1 is enough by itself to prove ice cream causes drowning.",
      "Third variables (e.g., heat) can explain both; correlation ≠ causation.",
      "A negative correlation alone is what licenses strong causal conclusions.",
      "Only survey research—not experiments—can establish that one variable causes another."
    ],
    "correct": 1,
    "correctFeedback": "Directionality and third-variable problems block causal leaps from correlation (§2.3).",
    "wrongFeedback": {
      "0": "Trap: strength of r ≠ proof of cause.",
      "2": "Trap: sign of r doesn’t unlock causation.",
      "3": "Trap: experiments, not surveys, best support cause."
    },
    "mode": "mock"
  },
  {
    "id": "c2-l5-04",
    "chapter": 2,
    "level": 5,
    "section": "§2.3",
    "question": "Dr. Okonkwo’s lab randomly assigns volunteers to 0 mg or 200 mg of caffeine in coffee, then measures their scores on a timed exam. A student must identify the independent and dependent variables. What are IV and DV?",
    "options": [
      "IV = exam scores; DV = caffeine dose",
      "IV = caffeine dose; DV = exam scores",
      "IV = random assignment; DV = coffee brand",
      "IV and DV are the same variable measured twice"
    ],
    "correct": 1,
    "correctFeedback": "IV is manipulated (dose); DV is measured outcome (scores) (§2.3).",
    "wrongFeedback": {
      "0": "Trap: swaps IV and DV.",
      "2": "Trap: assignment is a design feature, not the IV; brand isn’t the measured outcome.",
      "3": "Trap: collapses the IV/DV distinction."
    },
    "mode": "mock"
  },
  {
    "id": "c2-l5-05",
    "chapter": 2,
    "level": 5,
    "section": "§2.3",
    "question": "A campus wellness study emails every enrolled student but analyzes only those who reply. Responders are then randomly assigned to a meditation app or a waitlist. Which claim about this design is safest?",
    "options": [
      "Random assignment of responders guarantees they represent all students worldwide.",
      "Assignment aids causal comparison among responders; volunteer bias can still limit generalizability.",
      "Random sampling and random assignment are the same procedure under different names.",
      "Because assignment was random, informed consent can be skipped for this campus study."
    ],
    "correct": 1,
    "correctFeedback": "Assignment aids internal causal comparison; sampling/nonresponse affects external validity (§2.3).",
    "wrongFeedback": {
      "0": "Trap: assignment ≠ representative sampling.",
      "2": "Trap: classic sampling vs assignment confusion.",
      "3": "Trap: ethics still require consent."
    },
    "mode": "mock"
  },
  {
    "id": "c2-l5-06",
    "chapter": 2,
    "level": 5,
    "section": "§2.4",
    "question": "An IRB flags a memory study that delivers unexpected electric shocks with no advance warning and no debriefing afterward. Reviewers ask which ethical principle is most clearly violated. Which ethical principle is most clearly violated?",
    "options": [
      "Paying participants is always unethical, so the study should be rejected for that alone.",
      "Informed consent, risk minimization, and debriefing when deception or harm risks apply.",
      "Ethical review is required only for animal research, never for adult human participants.",
      "Correlation studies are exempt from IRB review because they never manipulate variables."
    ],
    "correct": 1,
    "correctFeedback": "Human research ethics emphasize consent, risk limits, and debriefing (§2.4).",
    "wrongFeedback": {
      "0": "Trap: payment rules aren’t the core issue here.",
      "2": "Trap: humans clearly need review.",
      "3": "Trap: IRB scope isn’t limited to experiments alone."
    },
    "mode": "mock"
  },
  {
    "id": "c2-l5-07",
    "chapter": 2,
    "level": 5,
    "section": "§2.2–2.3",
    "question": "Startup EduBoost claims its study app “causes” higher quiz scores after posting before/after averages from volunteers who chose to download it. A skeptical professor asks which design would best support a causal claim. Which design best supports a causal claim that a new study app improves quiz scores?",
    "options": [
      "Ask heavy app users whether they “feel smarter” after a week of casual use.",
      "Correlate self-reported app hours with GPA across campus without assigning conditions.",
      "Randomly assign app vs control, then compare quiz scores under controlled conditions.",
      "Interview only the top 1% of enthusiastic app fans and treat them as the population."
    ],
    "correct": 2,
    "correctFeedback": "Randomized controlled comparison is the standard path to causal inference (§2.3).",
    "wrongFeedback": {
      "0": "Trap: anecdotes/feelings ≠ controlled evidence.",
      "1": "Trap: correlation without assignment.",
      "3": "Trap: biased case selection."
    },
    "mode": "mock"
  },
  {
    "id": "c2-l5-08",
    "chapter": 2,
    "level": 5,
    "section": "§2.3",
    "question": "In lab section, twins Mina and Leo debate recruitment. Mina wants every dorm resident equally likely to enter the sample; Leo wants participants shuffled into treatment vs control after they arrive. Which statements correctly distinguish random sampling from random assignment? (Select all that apply.)",
    "options": [
      "Random sampling aims to help the sample represent a population.",
      "Random assignment aims to balance groups so IV differences are more interpretable as causal.",
      "If you randomly assign, you automatically have a random sample of the nation.",
      "A study can have random assignment without having a random sample.",
      "Random sampling alone is enough to prove that X causes Y."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "type": "multi",
    "correctFeedback": "Sampling → external representativeness; assignment → internal causal comparison (§2.3).",
    "wrongFeedback": {
      "0": "Correct to select: sampling targets population representation.",
      "1": "Correct to select: assignment supports causal group comparison.",
      "2": "Trap: assignment does not create a national random sample.",
      "3": "Correct to select: many lab experiments assign randomly within convenience samples.",
      "4": "Trap: sampling ≠ causal proof."
    },
    "mode": "mock"
  },
  {
    "id": "c2-l5-09",
    "chapter": 2,
    "level": 5,
    "section": "§2.2–2.3",
    "question": "A sleep team reports r = −.45 between nightly sleep hours and next-day irritability ratings in first-year students, with no experiment yet. Which interpretations are appropriate? (Select all that apply.)",
    "options": [
      "There is a moderate negative association in the data.",
      "We can conclude sleep loss is the sole proven cause for every irritability spike.",
      "A third variable (e.g., stress) might influence both sleep and irritability.",
      "Negative r means the correlation is “fake” and should be ignored.",
      "Directionality is still an open issue without an experiment."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Report association strength/direction; remember third variables and directionality (§2.3).",
    "wrongFeedback": {
      "0": "Correct to select: |r|~.45 is a moderate negative association.",
      "1": "Trap: leaps to sole causation.",
      "2": "Correct to select: third variables remain possible.",
      "3": "Trap: negative ≠ fake.",
      "4": "Correct to select: without experiment, causal direction stays uncertain."
    },
    "mode": "mock"
  },
  {
    "id": "c2-l5-10",
    "chapter": 2,
    "level": 5,
    "section": "§2.4",
    "question": "An IRB training video walks new RAs through a planned memory experiment with deception. The facilitator asks which practices belong in ethical human research as framed in OpenStax Ch 2. Which practices belong? (Select all that apply.)",
    "options": [
      "Informed consent when feasible",
      "IRB review for human participants research",
      "Debriefing after deception",
      "Hiding all risks forever so people never refuse",
      "Minimizing unnecessary harm"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Consent, review, debriefing, and harm minimization are core (§2.4).",
    "wrongFeedback": {
      "0": "Correct to select: informed consent is foundational.",
      "1": "Correct to select: IRB review protects participants.",
      "2": "Correct to select: debrief after deception.",
      "3": "Trap: concealing risks undermines consent.",
      "4": "Correct to select: minimize unnecessary harm."
    },
    "mode": "mock"
  },
  {
    "id": "c3-l5-01",
    "chapter": 3,
    "level": 5,
    "section": "§3.2",
    "question": "In a neuro lab demo, an action potential races down a motor neuron’s axon. At the terminals, vesicles spill neurotransmitter into the synaptic cleft toward a waiting dendrite. The instructor freezes the animation and asks what happens next at a typical chemical synapse. What happens next at a typical chemical synapse?",
    "options": [
      "The neurotransmitter becomes a permanent structural part of the receiving axon.",
      "Transmitters bind postsynaptic receptors, then are cleared (reuptake/breakdown).",
      "The myelin sheath digests the neurotransmitter as food.",
      "Glial cells permanently erase the synapse after one firing."
    ],
    "correct": 1,
    "correctFeedback": "Chemical transmission: release → receptor binding → clearance (§3.2).",
    "wrongFeedback": {
      "0": "Trap: transmitters are messengers, not permanent axon building blocks.",
      "2": "Trap: myelin insulates axons; it doesn’t “eat” transmitters.",
      "3": "Trap: synapses are not one-shot disposable by default."
    },
    "mode": "mock"
  },
  {
    "id": "c3-l5-02",
    "chapter": 3,
    "level": 5,
    "section": "§3.3",
    "question": "While walking home at night, Sam hears sudden footsteps behind him. His heart races, pupils widen, and digestion seems to pause as he spins around. Which autonomic division is most active in that moment?",
    "options": [
      "Parasympathetic nervous system",
      "Sympathetic nervous system",
      "Somatic nervous system only, with no autonomic change",
      "Only the enteric system with no spinal involvement"
    ],
    "correct": 1,
    "correctFeedback": "Sympathetic branch mobilizes fight-or-flight responses (§3.3).",
    "wrongFeedback": {
      "0": "Trap: parasympathetic is rest-and-digest, opposite pattern.",
      "2": "Trap: somatic is voluntary muscle; this is autonomic.",
      "3": "Trap: over-narrows to enteric gut control."
    },
    "mode": "mock"
  },
  {
    "id": "c3-l5-03",
    "chapter": 3,
    "level": 5,
    "section": "§3.4",
    "question": "After a stroke that damages hippocampus-related circuitry, patient Elena can chat about childhood holidays but keeps asking the same new visitors’ names minutes after introductions. Which deficit is most expected?",
    "options": [
      "An inability to regulate heart rate with no other cognitive changes expected.",
      "Severe new difficulty forming certain long-term declarative memories after the damage.",
      "Complete loss of all spinal reflexes below the neck with no brain involvement needed.",
      "A guaranteed increase in Broca’s fluent speech output after hippocampal injury alone."
    ],
    "correct": 1,
    "correctFeedback": "Hippocampal systems are crucial for forming many long-term declarative memories (§3.4).",
    "wrongFeedback": {
      "0": "Trap: brainstem/autonomic structures more directly pace heart rate.",
      "2": "Trap: spinal reflexes can survive cortical/hippocampal damage.",
      "3": "Trap: Broca’s area is language production, not hippocampus."
    },
    "mode": "mock"
  },
  {
    "id": "c3-l5-04",
    "chapter": 3,
    "level": 5,
    "section": "§3.2",
    "question": "Pharmacologist Dr. Cho explains a new compound that sits on postsynaptic receptors and mimics a natural neurotransmitter, boosting receptor activation even when little transmitter is released. A student must label the drug’s action. Best label?",
    "options": [
      "Antagonist",
      "Agonist",
      "Myelin inhibitor",
      "All-or-none threshold eraser"
    ],
    "correct": 1,
    "correctFeedback": "Agonists facilitate/mimic transmitter action; antagonists block (§3.2).",
    "wrongFeedback": {
      "0": "Trap: antagonist is the blocker/opposer.",
      "2": "Trap: invents a myelin role for the drug effect described.",
      "3": "Trap: garbles action-potential terminology."
    },
    "mode": "mock"
  },
  {
    "id": "c3-l5-05",
    "chapter": 3,
    "level": 5,
    "section": "§3.3",
    "question": "During rounds, an attending contrasts a spinal-cord injury with damage limited to a peripheral nerve in the arm. A junior student is asked which statement best distinguishes CNS from PNS. Which statement best distinguishes CNS from PNS?",
    "options": [
      "CNS = nerves in arms/legs only; PNS = brain only",
      "CNS = brain and spinal cord; PNS = nerves linking CNS to the body.",
      "PNS includes only the cortex; CNS includes only glands",
      "They are identical labels for the endocrine system"
    ],
    "correct": 1,
    "correctFeedback": "CNS = brain + spinal cord; PNS connects outward (§3.3).",
    "wrongFeedback": {
      "0": "Trap: reverses CNS/PNS.",
      "2": "Trap: misassigns cortex/glands.",
      "3": "Trap: confuses nervous with endocrine."
    },
    "mode": "mock"
  },
  {
    "id": "c3-l5-06",
    "chapter": 3,
    "level": 5,
    "section": "§3.5",
    "question": "After a prolonged threat, cortisol remains elevated. Which system is most directly implicated?",
    "options": [
      "Only the somatic motor system contracting biceps",
      "HPA-axis endocrine stress signaling with neural stress circuits.",
      "Rods and cones in the retina exclusively",
      "Broca’s area secreting cortisol into the synapse"
    ],
    "correct": 1,
    "correctFeedback": "Endocrine HPA signaling (including cortisol) is central to prolonged stress physiology (§3.5 / stress links).",
    "wrongFeedback": {
      "0": "Trap: somatic muscle ≠ cortisol pathway.",
      "2": "Trap: vision receptors aren’t the cortisol source.",
      "3": "Trap: Broca’s is language cortex, not a cortisol gland."
    },
    "mode": "mock"
  },
  {
    "id": "c3-l5-07",
    "chapter": 3,
    "level": 5,
    "section": "§3.4",
    "question": "A patient speaks fluently but with little meaning and poor comprehension after left-hemisphere damage. Which contrast is most relevant?",
    "options": [
      "Broca’s aphasia (production) vs Wernicke’s aphasia (comprehension/meaning)",
      "Sympathetic vs parasympathetic pupil size only",
      "Agonist vs antagonist at the neuromuscular junction only",
      "Nature vs nurture of eye color"
    ],
    "correct": 0,
    "correctFeedback": "Fluent but impaired-meaning speech with comprehension problems fits Wernicke-type patterns vs Broca’s nonfluent production issues (§3.4).",
    "wrongFeedback": {
      "1": "Trap: autonomic pupil contrast is unrelated to aphasia type.",
      "2": "Trap: drug action labels don’t classify aphasias.",
      "3": "Trap: genetics of eye color ≠ language localization."
    },
    "mode": "mock"
  },
  {
    "id": "c3-l5-08",
    "chapter": 3,
    "level": 5,
    "section": "§3.3",
    "question": "In a stress-physiology workshop, athletes track heart rate during a startle drill and then during cool-down yoga. The coach quizzes them on autonomic branches. Which statements about autonomic branches are accurate? (Select all that apply.)",
    "options": [
      "Sympathetic activity often supports fight-or-flight mobilization.",
      "Parasympathetic activity often supports rest-and-digest functions.",
      "The two branches always secrete identical hormones onto every organ.",
      "Both are typically involuntary relative to writing your name on purpose.",
      "“Sympathetic” means the system always creates sympathy/empathy feelings."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "type": "multi",
    "correctFeedback": "Sympathetic vs parasympathetic are complementary autonomic divisions (§3.3).",
    "wrongFeedback": {
      "0": "Correct to select: sympathetic ≈ mobilization.",
      "1": "Correct to select: parasympathetic ≈ rest/digest.",
      "2": "Trap: they are not identical in action/chemistry everywhere.",
      "3": "Correct to select: autonomic = largely involuntary vs voluntary somatic acts.",
      "4": "Trap: folk meaning of “sympathetic” ≠ physiological label."
    },
    "mode": "mock"
  },
  {
    "id": "c3-l5-09",
    "chapter": 3,
    "level": 5,
    "section": "§3.2",
    "question": "Which claims about neural communication are sound? (Select all that apply.)",
    "options": [
      "Action potentials are often described as all-or-none once threshold is reached.",
      "Neurotransmitters cross the synaptic cleft to affect the next cell.",
      "The resting potential is irrelevant; neurons never have polarity.",
      "Reuptake can clear transmitter from the synapse.",
      "Dendrites typically receive incoming signals."
    ],
    "correct": [
      0,
      1,
      3,
      4
    ],
    "type": "multi",
    "correctFeedback": "Standard neuron physiology: threshold/all-or-none, synaptic transmission, clearance, dendritic input (§3.2).",
    "wrongFeedback": {
      "0": "Correct to select: all-or-none framing at threshold.",
      "1": "Correct to select: chemical transmission across cleft.",
      "2": "Trap: resting potential/polarity are foundational.",
      "3": "Correct to select: reuptake is a clearance route.",
      "4": "Correct to select: dendrites receive."
    },
    "mode": "mock"
  },
  {
    "id": "c3-l5-10",
    "chapter": 3,
    "level": 5,
    "section": "§3.4",
    "question": "At a case conference, clinicians pin sticky notes pairing brain areas with functions for a teaching case. The attending asks which pairings are reasonable at the OpenStax textbook level. Which are reasonable textbook-level matches? (Select all that apply.)",
    "options": [
      "Occipital lobe: vision",
      "Frontal lobe: planning/movement-related functions (among others)",
      "Cerebellum: balance/coordination support",
      "Corpus callosum: hormone factory for cortisol only",
      "Amygdala: involved in emotion-related processing"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Classic localization sketches; corpus callosum connects hemispheres, not a cortisol gland (§3.4).",
    "wrongFeedback": {
      "0": "Correct to select: occipital ≈ vision.",
      "1": "Correct to select: frontal ≈ planning/motor among other roles.",
      "2": "Correct to select: cerebellum supports coordination.",
      "3": "Trap: corpus callosum connects hemispheres; adrenal/HPA handles cortisol.",
      "4": "Correct to select: amygdala–emotion links."
    },
    "mode": "mock"
  },
  {
    "id": "c4-l5-01",
    "chapter": 4,
    "level": 5,
    "section": "§4.1",
    "question": "In a late-night dorm debate, Rui says consciousness is “just being awake,” while Nora argues it includes awareness of internal and external stimuli across waking and altered states. They open OpenStax to settle it. Consciousness in OpenStax is best framed as:",
    "options": [
      "Only Freudian repressed wishes",
      "Awareness of internal and external stimuli",
      "Identical to Stage 3 NREM exclusively",
      "Impossible to discuss scientifically"
    ],
    "correct": 1,
    "correctFeedback": "Consciousness = awareness of internal/external stimuli (§4.1).",
    "wrongFeedback": {
      "0": "Trap: narrows to one psychoanalytic idea.",
      "2": "Trap: confuses a sleep stage with the whole concept.",
      "3": "Trap: Ch 4 treats consciousness as a scientific topic."
    },
    "mode": "mock"
  },
  {
    "id": "c4-l5-02",
    "chapter": 4,
    "level": 5,
    "section": "§4.3",
    "question": "Sleep tech Amir reviews an overnight polysomnogram: rapid eye movements, near-wake EEG patterns, and a dream report after the patient is awakened from that stage. Which claim about REM fits best?",
    "options": [
      "Sleepwalking as the defining feature",
      "Rapid eye movements, vivid dreaming likelihood, and muscle tone reduction",
      "Only growth-hormone secretion with zero neural activity",
      "Being identical to a coma"
    ],
    "correct": 1,
    "correctFeedback": "REM: REMs, dream-rich mentation, and reduced muscle tone (§4.3).",
    "wrongFeedback": {
      "0": "Trap: sleepwalking is more tied to NREM issues.",
      "2": "Trap: brain is highly active in REM.",
      "3": "Trap: REM ≠ coma."
    },
    "mode": "mock"
  },
  {
    "id": "c4-l5-03",
    "chapter": 4,
    "level": 5,
    "section": "§4.4",
    "question": "Roommate Diego snores loudly, stops breathing for stretches of the night, gasps awake, and then dozes through morning classes. The campus clinic nurse suspects a sleep disorder. Most fitting concern?",
    "options": [
      "Narcolepsy cataplexy only",
      "Sleep apnea",
      "Night terrors as the sole diagnosis",
      "Insomnia defined as too much REM"
    ],
    "correct": 1,
    "correctFeedback": "Repeated breathing pauses with daytime sleepiness suggest sleep apnea (§4.4).",
    "wrongFeedback": {
      "0": "Trap: narcolepsy/cataplexy is a different pattern.",
      "2": "Trap: night terrors ≠ apnea breathing stops.",
      "3": "Trap: insomnia is difficulty sleeping, not “too much REM.”"
    },
    "mode": "mock"
  },
  {
    "id": "c4-l5-04",
    "chapter": 4,
    "level": 5,
    "section": "§4.5",
    "question": "At a substance-use education fair, volunteers sort cards for alcohol, caffeine, and nicotine. A visitor asks how alcohol is primarily classified pharmacologically in the chapter. Alcohol is classified primarily as a:",
    "options": [
      "Stimulant that always increases GABA blockade of inhibition",
      "Depressant that can slow CNS activity",
      "Opioid identical to heroin in every receptor effect",
      "Hallucinogen that cannot produce dependence"
    ],
    "correct": 1,
    "correctFeedback": "Alcohol is a depressant with CNS-slowing effects (§4.5).",
    "wrongFeedback": {
      "0": "Trap: alcohol is not a stimulant class drug.",
      "2": "Trap: opioids are a different class though depressant-like risks overlap in some ways—not “identical.”",
      "3": "Trap: wrong class; dependence risk exists."
    },
    "mode": "mock"
  },
  {
    "id": "c4-l5-05",
    "chapter": 4,
    "level": 5,
    "section": "§4.2",
    "question": "Exchange student Hana flies from Hong Kong to New York and feels exhausted at local noon but wide awake at midnight for several days. Her professor links the jet lag to biological clocks. Circadian rhythms are most closely tied to:",
    "options": [
      "A mandatory 28-day lunar exam cycle that IRBs require for every sleep study.",
      "About-24-hour biological rhythms influenced by light and the SCN.",
      "Only Stage 2 sleep spindles defining the entire circadian system by themselves.",
      "Random assignment rules used in drug trials rather than biological timing systems."
    ],
    "correct": 1,
    "correctFeedback": "Circadian ≈ ~24h rhythms; SCN/light are key (§4.2).",
    "wrongFeedback": {
      "0": "Trap: invents lunar IRB rule.",
      "2": "Trap: spindles are a NREM feature, not the circadian definition.",
      "3": "Trap: methods concept from Ch 2."
    },
    "mode": "mock"
  },
  {
    "id": "c4-l5-06",
    "chapter": 4,
    "level": 5,
    "section": "§4.5",
    "question": "Tolerance means:",
    "options": [
      "Needing less drug over time for the same effect always",
      "Needing more of a drug to get the effect once produced by a smaller dose",
      "Zero risk of withdrawal",
      "That physical dependence is impossible"
    ],
    "correct": 1,
    "correctFeedback": "Tolerance: higher dose needed for prior effect (§4.5).",
    "wrongFeedback": {
      "0": "Trap: reverses tolerance.",
      "2": "Trap: tolerance often pairs with dependence/withdrawal risks.",
      "3": "Trap: false safety claim."
    },
    "mode": "mock"
  },
  {
    "id": "c4-l5-07",
    "chapter": 4,
    "level": 5,
    "section": "§4.3–4.4",
    "question": "Which contrast is most accurate?",
    "options": [
      "REM behavior disorder: acting out dreams vs sleep apnea: breathing stops",
      "Insomnia: excessive refreshing sleep every night",
      "Narcolepsy: inability to enter REM ever",
      "Night terrors: identical to lucid adult REM dreaming"
    ],
    "correct": 0,
    "correctFeedback": "RBD involves dream enactment; apnea involves breathing interruption (§4.4).",
    "wrongFeedback": {
      "1": "Trap: insomnia is insufficient/poor sleep.",
      "2": "Trap: narcolepsy often involves REM-related intrusion features, not “no REM ever.”",
      "3": "Trap: night terrors ≠ lucid REM dreaming."
    },
    "mode": "mock"
  },
  {
    "id": "c4-l5-08",
    "chapter": 4,
    "level": 5,
    "section": "§4.3",
    "question": "In a sleep-lab tutorial, students cycle a volunteer through EEG-defined stages and note muscle tone, eye movements, and dream reports. Which statements about sleep stages are reasonable? (Select all that apply.)",
    "options": [
      "NREM includes stages that progress toward deeper slow-wave sleep.",
      "REM is associated with vivid dreaming more than deep NREM typically is.",
      "A full night is usually one unbroken Stage 3 period with no cycling.",
      "Sleep architecture involves cycling across the night.",
      "EEG patterns help distinguish stages."
    ],
    "correct": [
      0,
      1,
      3,
      4
    ],
    "type": "multi",
    "correctFeedback": "Sleep cycles through NREM/REM with distinctive EEG signatures (§4.3).",
    "wrongFeedback": {
      "0": "Correct to select: NREM deepens across stages.",
      "1": "Correct to select: REM–dream association.",
      "2": "Trap: nights cycle; not one frozen Stage 3.",
      "3": "Correct to select: cycling is normal.",
      "4": "Correct to select: EEG defines stages."
    },
    "mode": "mock"
  },
  {
    "id": "c4-l5-09",
    "chapter": 4,
    "level": 5,
    "section": "§4.5",
    "question": "Which drug-class matches are textbook-consistent? (Select all that apply.)",
    "options": [
      "Caffeine: stimulant",
      "Nicotine: stimulant",
      "Alcohol: depressant",
      "LSD: typically discussed among hallucinogens",
      "Alcohol: stimulant that cannot impair driving"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Standard classifications in §4.5; E is false.",
    "wrongFeedback": {
      "0": "Correct to select: caffeine stimulant.",
      "1": "Correct to select: nicotine stimulant.",
      "2": "Correct to select: alcohol depressant.",
      "3": "Correct to select: LSD among hallucinogens.",
      "4": "Trap: alcohol is depressant and can impair driving."
    },
    "mode": "mock"
  },
  {
    "id": "c4-l5-10",
    "chapter": 4,
    "level": 5,
    "section": "§4.2–4.4",
    "question": "Night-shift nurse Priya finishes a 12-hour ward rotation, fights insomnia at home, and later catches herself microsleeping at a red light on the drive home. Which claims about her situation are sound? (Select all that apply.)",
    "options": [
      "Circadian misalignment can impair alertness.",
      "Sleep debt can increase accident risk.",
      "Microsleeps are harmless proof of perfect adaptation.",
      "Treating schedule/sleep problems matters for safety.",
      "Only Freudian dream analysis can fix shift-work sleep loss."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "type": "multi",
    "correctFeedback": "Circadian disruption and sleep loss have safety consequences (§4.2–4.4).",
    "wrongFeedback": {
      "0": "Correct to select: circadian misalignment hurts alertness.",
      "1": "Correct to select: sleep debt raises risk.",
      "2": "Trap: microsleeps are dangerous, not proof of adaptation.",
      "3": "Correct to select: addressing sleep/schedule is safety-relevant.",
      "4": "Trap: overclaims Freudian dream work as the only fix."
    },
    "mode": "mock"
  },
  {
    "id": "c5-l5-01",
    "chapter": 5,
    "level": 5,
    "section": "§5.1",
    "question": "In a museum gallery, light wavelengths hit visitors’ retinas (sensation), but only some people “see” a hidden animal in the same painting (perception). A docent asks for the best sensation–perception contrast. Sensation vs perception—best contrast?",
    "options": [
      "Sensation interprets meaning; perception is raw transduction only",
      "Sensation detects/transduces; perception organizes and interprets.",
      "They are identical terms for transduction",
      "Perception occurs only in the spinal cord"
    ],
    "correct": 1,
    "correctFeedback": "Sensation detects; perception organizes/interprets (§5.1).",
    "wrongFeedback": {
      "0": "Trap: swaps the definitions.",
      "2": "Trap: collapses the distinction.",
      "3": "Trap: perception involves brain organization, not “spinal only.”"
    },
    "mode": "mock"
  },
  {
    "id": "c5-l5-02",
    "chapter": 5,
    "level": 5,
    "section": "§5.1",
    "question": "Audiology student Kai plays ever-quieter tones until a participant first reports hearing the beep on half the trials. Kai is estimating a classic sensory limit. Absolute threshold is best described as:",
    "options": [
      "The smallest detectable difference between two stimuli 50% of the time (classic definition of difference threshold)",
      "Minimum stimulus energy to detect a stimulus about 50% of the time.",
      "The point where top-down processing becomes impossible",
      "Weber’s constant for every sense equally"
    ],
    "correct": 1,
    "correctFeedback": "Absolute threshold ≈ min energy for detection ~50% of time (§5.1).",
    "wrongFeedback": {
      "0": "Trap: describes difference threshold/JND.",
      "2": "Trap: invents a top-down cutoff.",
      "3": "Trap: Weber’s law concerns difference thresholds, not one universal constant for all senses."
    },
    "mode": "mock"
  },
  {
    "id": "c5-l5-03",
    "chapter": 5,
    "level": 5,
    "section": "§5.1",
    "question": "In a noisy café, Jordan does not notice the espresso machine or chatter—until someone across the room says Jordan’s name, which suddenly “cuts through.” Which idea fits best?",
    "options": [
      "Bottom-up processing only, with zero expectations",
      "Top-down influences (expectations/attention) shaping awareness.",
      "Absolute threshold means attention never matters",
      "Transduction cannot occur for sound"
    ],
    "correct": 1,
    "correctFeedback": "Cocktail-party-like effects highlight attention/top-down factors (§5.1).",
    "wrongFeedback": {
      "0": "Trap: ignores expectation/attention.",
      "2": "Trap: thresholds don’t erase attention effects.",
      "3": "Trap: hearing requires transduction."
    },
    "mode": "mock"
  },
  {
    "id": "c5-l5-04",
    "chapter": 5,
    "level": 5,
    "section": "§5.3",
    "question": "After leaving a bright sunny street, Mei steps into a dark cinema and at first sees almost nothing; over a few minutes the seats and screen edges become visible. Best concept?",
    "options": [
      "Sensory adaptation / dark adaptation processes in vision",
      "Opponent-process theory of color only, with no intensity change",
      "Frequency theory of pitch for light waves",
      "Gate-control theory of pain for photons"
    ],
    "correct": 0,
    "correctFeedback": "Eyes adjust after luminance change—dark adaptation (§5.3).",
    "wrongFeedback": {
      "1": "Trap: color opponent processes aren’t the main story for overall dark visibility.",
      "2": "Trap: frequency theory is audition.",
      "3": "Trap: gate control is pain."
    },
    "mode": "mock"
  },
  {
    "id": "c5-l5-05",
    "chapter": 5,
    "level": 5,
    "section": "§5.6",
    "question": "Designer Luis arranges five black dots on a transit-poster mockup during a studio critique. Viewers instantly report a “face” rather than five unrelated points, and Luis asks which Gestalt idea that reflects. Closest Gestalt idea?",
    "options": [
      "Transduction of sound waves inside the cochlea explaining why the dots look like a face.",
      "Perceptual organization principles (e.g., grouping/closure) beyond isolated elements.",
      "Hitting absolute taste thresholds on the tongue before any visual grouping can occur.",
      "Randomly assigning photoreceptors to facial features during a perception laboratory task."
    ],
    "correct": 1,
    "correctFeedback": "Gestalt: whole organization exceeds isolated parts (§5.6).",
    "wrongFeedback": {
      "0": "Trap: hearing transduction.",
      "2": "Trap: taste threshold.",
      "3": "Trap: methods jargon."
    },
    "mode": "mock"
  },
  {
    "id": "c5-l5-06",
    "chapter": 5,
    "level": 5,
    "section": "§5.4",
    "question": "Place theory of pitch primarily emphasizes:",
    "options": [
      "Which region of the basilar membrane is stimulated",
      "Only the exact match of neural firing rate to low frequencies as the sole mechanism forever",
      "That pitch is a pure top-down illusion with no cochlea",
      "That loudness equals wavelength of light"
    ],
    "correct": 0,
    "correctFeedback": "Place theory: different membrane places code different pitches (§5.4).",
    "wrongFeedback": {
      "1": "Trap: overstates frequency theory as exclusive/complete.",
      "2": "Trap: denies cochlear mechanics.",
      "3": "Trap: confuses audition with vision parameters."
    },
    "mode": "mock"
  },
  {
    "id": "c5-l5-07",
    "chapter": 5,
    "level": 5,
    "section": "§5.1",
    "question": "Weber’s law is most about:",
    "options": [
      "Difference thresholds scaling with stimulus magnitude",
      "Absolute threshold being identical for all people and senses",
      "Why correlation equals causation in perception labs",
      "Why rods detect only color hue"
    ],
    "correct": 0,
    "correctFeedback": "Weber: JND is a proportion of stimulus magnitude (§5.1).",
    "wrongFeedback": {
      "1": "Trap: absolute thresholds vary; Weber concerns differences.",
      "2": "Trap: methods fallacy.",
      "3": "Trap: rods are low-light oriented; cones more for color."
    },
    "mode": "mock"
  },
  {
    "id": "c5-l5-08",
    "chapter": 5,
    "level": 5,
    "section": "§5.1",
    "question": "A perception lab compares two tasks: reading blurry letters using only stimulus features, versus reading the same blur after being told the word will be food-related. Which statements correctly separate bottom-up and top-down processing? (Select all that apply.)",
    "options": [
      "Bottom-up builds from sensory input features.",
      "Top-down uses knowledge, expectations, and context.",
      "Top-down means the feet send all visual signals.",
      "Reading messy handwriting using word knowledge is partly top-down.",
      "They never interact in real perception."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "type": "multi",
    "correctFeedback": "Both contribute; context/knowledge guide interpretation (§5.1).",
    "wrongFeedback": {
      "0": "Correct to select: bottom-up from features.",
      "1": "Correct to select: top-down from knowledge/expectation.",
      "2": "Trap: folk reading of “top/down” as anatomy of feet.",
      "3": "Correct to select: handwriting example is classic top-down aid.",
      "4": "Trap: they interact constantly."
    },
    "mode": "mock"
  },
  {
    "id": "c5-l5-09",
    "chapter": 5,
    "level": 5,
    "section": "§5.3–5.4",
    "question": "Which sensory matches are reasonable? (Select all that apply.)",
    "options": [
      "Rods: better in dim light than cones, poorer color detail",
      "Cones: color and detail in brighter light",
      "Cochlea: key for auditory transduction",
      "Retina: visual photoreceptors",
      "Taste buds: primary organ of hearing"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Standard receptor/organ matches (§5.3–5.4).",
    "wrongFeedback": {
      "0": "Correct to select: rods/dim light.",
      "1": "Correct to select: cones/color-detail.",
      "2": "Correct to select: cochlea/hearing.",
      "3": "Correct to select: retina/vision.",
      "4": "Trap: taste ≠ hearing."
    },
    "mode": "mock"
  },
  {
    "id": "c5-l5-10",
    "chapter": 5,
    "level": 5,
    "section": "§5.5–5.6",
    "question": "A UX design team cites Gestalt and depth cues while redesigning a transit app map. Their mentor asks which perception claims are sound. Which claims are sound? (Select all that apply.)",
    "options": [
      "Gestalt grouping can make interfaces feel organized.",
      "Vestibular cues contribute to balance/spatial orientation.",
      "Pain has only one universal pathway with no modulation ever.",
      "Figure–ground organization affects what stands out.",
      "Perception is identical to the raw physical stimulus energy in every case."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "type": "multi",
    "correctFeedback": "Organization and vestibular function matter; pain can be modulated; perception ≠ raw energy copy (§5.5–5.6).",
    "wrongFeedback": {
      "0": "Correct to select: Gestalt aids organization.",
      "1": "Correct to select: vestibular–balance.",
      "2": "Trap: pain is modulable (e.g., gate-control ideas).",
      "3": "Correct to select: figure–ground.",
      "4": "Trap: perception is constructive/organized, not a perfect energy photocopy."
    },
    "mode": "mock"
  },
  {
    "id": "c6-l5-01",
    "chapter": 6,
    "level": 5,
    "section": "§6.2",
    "question": "In a classroom demo, Dr. Patel rings a bell just before placing food powder on a dog’s tongue. After several pairings, the bell alone elicits salivation. Students must label the salivation to the bell in Pavlovian terms. In Pavlovian terms, food is the US and salivation to food is the UR. After pairing, a bell elicits salivation. That salivation to the bell is the:",
    "options": [
      "US",
      "UR",
      "CS",
      "CR only before any pairing"
    ],
    "correct": 2,
    "correctFeedback": "CS is the once-neutral cue that comes to elicit the CR (§6.2).",
    "wrongFeedback": {
      "0": "Trap: US is the biologically potent food.",
      "1": "Trap: UR is the unlearned response to the US.",
      "3": "Trap: before pairing the bell isn’t producing the CR yet; label for the cue is CS."
    },
    "mode": "mock"
  },
  {
    "id": "c6-l5-02",
    "chapter": 6,
    "level": 5,
    "section": "§6.3",
    "question": "Ms. Chen starts praising students the moment homework arrives on time; on-time submissions rise over the next two weeks. A learning chapter quiz asks for the operant label. This is:",
    "options": [
      "Positive punishment",
      "Positive reinforcement",
      "Negative punishment",
      "Negative reinforcement"
    ],
    "correct": 1,
    "correctFeedback": "Add a pleasant stimulus → behavior increases = positive reinforcement (§6.3).",
    "wrongFeedback": {
      "0": "Trap: punishment decreases behavior; “positive” here means add, not “good.”",
      "2": "Trap: negative punishment removes something liked to decrease behavior.",
      "3": "Trap: negative reinforcement removes something aversive to increase behavior."
    },
    "mode": "mock"
  },
  {
    "id": "c6-l5-03",
    "chapter": 6,
    "level": 5,
    "section": "§6.3",
    "question": "After catching a student cheating on a take-home quiz, Coach Rivera removes weekend stadium privileges. Cheating incidents then drop over the next month, and the assistants debate the operant label. Best operant label?",
    "options": [
      "Positive reinforcement",
      "Negative reinforcement",
      "Negative punishment",
      "Classical extinction of a US"
    ],
    "correct": 2,
    "correctFeedback": "Remove valued stimulus → behavior decreases = negative punishment (§6.3).",
    "wrongFeedback": {
      "0": "Trap: reinforcement increases behavior.",
      "1": "Trap: neg. reinforcement increases behavior by removing aversives.",
      "3": "Trap: operant consequence ≠ classical US extinction."
    },
    "mode": "mock"
  },
  {
    "id": "c6-l5-04",
    "chapter": 6,
    "level": 5,
    "section": "§6.3",
    "question": "In an operant chamber, one rat earns pellets on a variable-ratio schedule and presses rapidly; another on a fixed-interval schedule shows the classic scallop and slower overall rate. Classic takeaway?",
    "options": [
      "All reinforcement schedules produce identical pausing patterns on every task.",
      "Schedules shape response rate/pattern; variable-ratio often yields high steady rates.",
      "Punishment schedules are required before any form of learning can take place.",
      "Classical conditioned responses ignore timing and schedules in every documented case."
    ],
    "correct": 1,
    "correctFeedback": "Reinforcement schedules differentially shape rates/patterns (§6.3).",
    "wrongFeedback": {
      "0": "Trap: patterns differ (e.g., FI scallops).",
      "2": "Trap: learning doesn’t require punishment.",
      "3": "Trap: overbroad classical claim."
    },
    "mode": "mock"
  },
  {
    "id": "c6-l5-05",
    "chapter": 6,
    "level": 5,
    "section": "§6.2",
    "question": "After weeks of presenting a tone without food, a dog’s salivation to the tone disappears. Days later the tone returns and a brief burst of salivation reappears. Term for that brief return?",
    "options": [
      "Spontaneous recovery",
      "Stimulus generalization only",
      "Positive punishment",
      "Latent learning of a cognitive map exclusively"
    ],
    "correct": 0,
    "correctFeedback": "Spontaneous recovery: extinguished CR reappears after a rest (§6.2).",
    "wrongFeedback": {
      "1": "Trap: generalization is responding to similar stimuli.",
      "2": "Trap: operant punishment label.",
      "3": "Trap: Tolman latent learning is a different phenomenon."
    },
    "mode": "mock"
  },
  {
    "id": "c6-l5-06",
    "chapter": 6,
    "level": 5,
    "section": "§6.4",
    "question": "A child learns a tennis serve by watching a coach, then later performs it. Bandura emphasizes:",
    "options": [
      "Only US–UR reflexes",
      "Observational learning / modeling (attention, retention, reproduction, motivation)",
      "That observation can never produce learning without reinforcement on every trial",
      "Negative punishment of mirror neurons"
    ],
    "correct": 1,
    "correctFeedback": "Observational learning via modeling processes (§6.4).",
    "wrongFeedback": {
      "0": "Trap: classical reflex language.",
      "2": "Trap: Bandura showed learning can occur via observation, not only direct reinforcement each time.",
      "3": "Trap: nonsense mash-up."
    },
    "mode": "mock"
  },
  {
    "id": "c6-l5-07",
    "chapter": 6,
    "level": 5,
    "section": "§6.3",
    "question": "Escape from a loud buzzer by pressing a lever, and pressing increases. This is:",
    "options": [
      "Positive punishment",
      "Negative reinforcement",
      "Negative punishment",
      "Classical conditioning of a US into a CS"
    ],
    "correct": 1,
    "correctFeedback": "Remove aversive stimulus → behavior increases = negative reinforcement (§6.3).",
    "wrongFeedback": {
      "0": "Trap: punishment decreases behavior.",
      "2": "Trap: removing liked things to decrease behavior.",
      "3": "Trap: this is operant contingency, not converting US→CS labels."
    },
    "mode": "mock"
  },
  {
    "id": "c6-l5-08",
    "chapter": 6,
    "level": 5,
    "section": "§6.2–6.3",
    "question": "A study group sorts flashcards for classical vs operant examples from campus life (cafeteria smells, late fees, praise, exam anxiety). Which distinctions are accurate? (Select all that apply.)",
    "options": [
      "Classical: CS predicts US; learning about stimulus contingencies.",
      "Operant: consequences shape voluntary-like behavior rates.",
      "Positive always means “morally good.”",
      "Reinforcement increases behavior; punishment decreases it.",
      "Extinction can occur when reinforcers or US pairings stop."
    ],
    "correct": [
      0,
      1,
      3,
      4
    ],
    "type": "multi",
    "correctFeedback": "Keep classical vs operant and +/− as add/remove, not moral valence (§6.2–6.3).",
    "wrongFeedback": {
      "0": "Correct to select: classical stimulus contingencies.",
      "1": "Correct to select: operant consequences.",
      "2": "Trap: “positive” = add stimulus.",
      "3": "Correct to select: reinforcement↑ / punishment↓.",
      "4": "Correct to select: extinction when maintaining events stop."
    },
    "mode": "mock"
  },
  {
    "id": "c6-l5-09",
    "chapter": 6,
    "level": 5,
    "section": "§6.3",
    "question": "A coach wants fewer late arrivals. Which options correctly apply operant labels? (Select all that apply.)",
    "options": [
      "Add extra wind sprints after lateness → positive punishment if lateness drops",
      "Remove a liked leadership role after lateness → negative punishment if lateness drops",
      "Add praise after on-time arrival → positive reinforcement if on-time rises",
      "Allow leaving early from a boring drill when on time → negative reinforcement if on-time rises",
      "Any added stimulus is automatically reinforcement"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Define by add/remove and whether behavior increases/decreases (§6.3).",
    "wrongFeedback": {
      "0": "Correct to select: add aversive → ↓ behavior = + punishment.",
      "1": "Correct to select: remove liked → ↓ = − punishment.",
      "2": "Correct to select: add liked → ↑ = + reinforcement.",
      "3": "Correct to select: remove aversive → ↑ = − reinforcement.",
      "4": "Trap: added stimuli can punish or reinforce depending on effect."
    },
    "mode": "mock"
  },
  {
    "id": "c6-l5-10",
    "chapter": 6,
    "level": 5,
    "section": "§6.2",
    "question": "Classical-conditioning review uses dentist-drill anxiety and cafeteria-nausea stories from classmates. Which classical-conditioning claims are sound? (Select all that apply.)",
    "options": [
      "Acquisition is learning the CS–US link.",
      "Generalization: similar stimuli elicit CR.",
      "Discrimination: responding differently to CS+ vs similar non-predictive cues.",
      "The CR is always identical in strength to the UR forever.",
      "Extinction: CS without US weakens CR."
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Standard classical phenomena (§6.2).",
    "wrongFeedback": {
      "0": "Correct to select: acquisition.",
      "1": "Correct to select: generalization.",
      "2": "Correct to select: discrimination.",
      "3": "Trap: CR often differs from UR; not locked identical forever.",
      "4": "Correct to select: extinction."
    },
    "mode": "mock"
  },
  {
    "id": "c7-l5-01",
    "chapter": 7,
    "level": 5,
    "section": "§7.1",
    "question": "While sorting library books, twin volunteers quickly group novels, textbooks, and comics without reading every page—using mental categories. Their methods TA asks what a concept is. A concept is best described as:",
    "options": [
      "A single neuron’s resting membrane potential measured in millivolts.",
      "A mental category grouping similar objects, events, ideas, or people.",
      "An IRB informed-consent form required before any classroom demonstration.",
      "A fixed-interval scallop pattern from an operant conditioning cumulative record."
    ],
    "correct": 1,
    "correctFeedback": "Concepts organize experience into categories (§7.1).",
    "wrongFeedback": {
      "0": "Trap: biopsych term.",
      "2": "Trap: ethics paperwork.",
      "3": "Trap: operant schedule pattern."
    },
    "mode": "mock"
  },
  {
    "id": "c7-l5-02",
    "chapter": 7,
    "level": 5,
    "section": "§7.3",
    "question": "Shopper Ava skips comparing nutrition labels and just grabs the brand she “feels” is healthiest because the choice is fast—even if sometimes biased. Using a mental shortcut that is fast but sometimes biased is a?",
    "options": [
      "Algorithm guaranteeing a solution if one exists and steps are followed",
      "Heuristic",
      "Prototype identical to an algorithm",
      "Phoneme"
    ],
    "correct": 1,
    "correctFeedback": "Heuristics are quick strategies; algorithms are step-by-step procedures (§7.3).",
    "wrongFeedback": {
      "0": "Trap: describes algorithm, not heuristic.",
      "2": "Trap: prototype is a typical category example.",
      "3": "Trap: language sound unit."
    },
    "mode": "mock"
  },
  {
    "id": "c7-l5-03",
    "chapter": 7,
    "level": 5,
    "section": "§7.3",
    "question": "IKEA assembler Ben insists on using only the included screwdriver even though a coin in his pocket would turn the screws faster; he cannot “see” the coin as a tool. This illustrates?",
    "options": [
      "Functional fixedness / mental set barriers",
      "Confirmation that algorithms never fail",
      "Availability heuristic about death rates only",
      "Morpheme segmentation"
    ],
    "correct": 0,
    "correctFeedback": "Functional fixedness/mental set block novel uses/approaches (§7.3).",
    "wrongFeedback": {
      "1": "Trap: algorithms can be inefficient; issue is fixation.",
      "2": "Trap: wrong heuristic context.",
      "3": "Trap: language morphology."
    },
    "mode": "mock"
  },
  {
    "id": "c7-l5-04",
    "chapter": 7,
    "level": 5,
    "section": "§7.4–7.5",
    "question": "In a debate on intelligence theories, Priya cites Spearman’s idea of a general factor underlying performance across many cognitive tasks. Spearman’s g emphasizes?",
    "options": [
      "Many completely unrelated intelligences with zero shared variance",
      "A general intelligence factor contributing across cognitive tasks.",
      "That IQ tests measure only shoe size",
      "That creativity is identical to crystallized vocabulary only"
    ],
    "correct": 1,
    "correctFeedback": "g = general factor across mental tests (§7.4–7.5).",
    "wrongFeedback": {
      "0": "Trap: opposite of g.",
      "2": "Trap: absurd reduction.",
      "3": "Trap: collapses creativity/crystallized distinctions."
    },
    "mode": "mock"
  },
  {
    "id": "c7-l5-05",
    "chapter": 7,
    "level": 5,
    "section": "§7.5",
    "question": "Counselor Dana re-administers the same aptitude test to a client under similar conditions a week later and gets wildly different scores. What does that pattern most clearly threaten?",
    "options": [
      "Reliability",
      "Norming is automatically perfect",
      "Standardization is irrelevant",
      "Validity is guaranteed if items look serious"
    ],
    "correct": 0,
    "correctFeedback": "Unstable scores threaten reliability (§7.5).",
    "wrongFeedback": {
      "1": "Trap: norms don’t fix instability.",
      "2": "Trap: standardization matters.",
      "3": "Trap: face seriousness ≠ validity; and reliability is the issue named."
    },
    "mode": "mock"
  },
  {
    "id": "c7-l5-06",
    "chapter": 7,
    "level": 5,
    "section": "§7.3",
    "question": "Judging event likelihood by how easily examples come to mind is the:",
    "options": [
      "Representativeness heuristic",
      "Availability heuristic",
      "Anchoring on g only",
      "Syntax"
    ],
    "correct": 1,
    "correctFeedback": "Availability: ease of retrieval guides probability judgments (§7.3).",
    "wrongFeedback": {
      "0": "Trap: representativeness = similarity to a prototype/stereotype.",
      "2": "Trap: mash-up.",
      "3": "Trap: language structure."
    },
    "mode": "mock"
  },
  {
    "id": "c7-l5-07",
    "chapter": 7,
    "level": 5,
    "section": "§7.2",
    "question": "Phonemes vs morphemes—best contrast?",
    "options": [
      "Phonemes are smallest meaning units; morphemes are sound units",
      "Phonemes are basic sound units; morphemes are smallest meaning units",
      "Both mean the same as semantics",
      "Morphemes exist only in written Chinese"
    ],
    "correct": 1,
    "correctFeedback": "Phoneme = sound; morpheme = meaning unit (§7.2).",
    "wrongFeedback": {
      "0": "Trap: swaps definitions.",
      "2": "Trap: semantics is meaning system broader than these units.",
      "3": "Trap: false language limit."
    },
    "mode": "mock"
  },
  {
    "id": "c7-l5-08",
    "chapter": 7,
    "level": 5,
    "section": "§7.3",
    "question": "A puzzle club tries algorithms, heuristics, and insight on escape-room locks, then reviews which problem-solving claims hold up. Which problem-solving claims are accurate? (Select all that apply.)",
    "options": [
      "Algorithms are step-by-step procedures.",
      "Heuristics trade speed for occasional error.",
      "Confirmation bias seeks supportive evidence and underweights disconfirming data.",
      "Mental set always improves creativity in every case.",
      "Insight feels sudden but still involves cognitive processing."
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Standard problem-solving toolkit and biases (§7.3).",
    "wrongFeedback": {
      "0": "Correct to select: algorithms.",
      "1": "Correct to select: heuristics tradeoff.",
      "2": "Correct to select: confirmation bias.",
      "3": "Trap: mental set often blocks fresh approaches.",
      "4": "Correct to select: insight is still cognitive."
    },
    "mode": "mock"
  },
  {
    "id": "c7-l5-09",
    "chapter": 7,
    "level": 5,
    "section": "§7.4–7.6",
    "question": "Which intelligence statements are defensible in OpenStax framing? (Select all that apply.)",
    "options": [
      "IQ tests can be standardized and normed.",
      "Nature and nurture both contribute to intelligence differences.",
      "A single test score captures every human talent forever with zero error.",
      "Fluid intelligence involves novel problem solving; crystallized involves acquired knowledge.",
      "Stereotype threat can affect test performance contexts."
    ],
    "correct": [
      0,
      1,
      3,
      4
    ],
    "type": "multi",
    "correctFeedback": "Measurement + heritability/environment + fluid/crystallized + social context (§7.5–7.6).",
    "wrongFeedback": {
      "0": "Correct to select: standardization/norms.",
      "1": "Correct to select: nature and nurture.",
      "2": "Trap: overclaims perfection/completeness.",
      "3": "Correct to select: fluid vs crystallized.",
      "4": "Correct to select: stereotype threat contexts."
    },
    "mode": "mock"
  },
  {
    "id": "c7-l5-10",
    "chapter": 7,
    "level": 5,
    "section": "§7.1–7.2",
    "question": "Linguistics TA Omar asks lab partners to map phonemes, morphemes, and syntax onto everyday speech errors. Which language/cognition matches are sound? (Select all that apply.)",
    "options": [
      "Syntax: rules for combining words",
      "Semantics: meaning",
      "Prototype: best/most typical example of a category",
      "Grammar is only about polite manners at dinner",
      "Concepts reduce the need to treat every object as wholly unique"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Language structure + categorization basics (§7.1–7.2).",
    "wrongFeedback": {
      "0": "Correct to select: syntax.",
      "1": "Correct to select: semantics.",
      "2": "Correct to select: prototype.",
      "3": "Trap: linguistic grammar ≠ etiquette.",
      "4": "Correct to select: concepts economize cognition."
    },
    "mode": "mock"
  },
  {
    "id": "c8-l5-01",
    "chapter": 8,
    "level": 5,
    "section": "§8.1",
    "question": "In a memory workshop, students trace how a phone number moves from a brief sensory echo into short-term holding. With rehearsal, some of that material seems to reach longer-term storage—the classic multistore sketch. Atkinson–Shiffrin-style flow emphasizes which sequence?",
    "options": [
      "Sensory → short-term/working → long-term memory stores",
      "Only procedural memory with no encoding",
      "That retrieval never fails if storage occurred",
      "That echoic memory lasts for years unchanged"
    ],
    "correct": 0,
    "correctFeedback": "Classic multi-store flow: sensory, short-term, long-term (§8.1).",
    "wrongFeedback": {
      "1": "Trap: ignores declarative stages/encoding.",
      "2": "Trap: retrieval failures happen.",
      "3": "Trap: sensory memory is brief."
    },
    "mode": "mock"
  },
  {
    "id": "c8-l5-02",
    "chapter": 8,
    "level": 5,
    "section": "§8.3",
    "question": "Exchange student Leah studied Spanish for a year, then intensively learned French last month. On a surprise Spanish quiz, French words keep blocking the Spanish vocabulary she needs. This is:",
    "options": [
      "Proactive interference",
      "Retroactive interference",
      "Anterograde encoding specificity only",
      "Flashbulb perfection guarantee"
    ],
    "correct": 1,
    "correctFeedback": "New learning disrupts old → retroactive interference (§8.3).",
    "wrongFeedback": {
      "0": "Trap: proactive = old blocks new.",
      "2": "Trap: mash-up of other terms.",
      "3": "Trap: flashbulb memories aren’t perfect."
    },
    "mode": "mock"
  },
  {
    "id": "c8-l5-03",
    "chapter": 8,
    "level": 5,
    "section": "§8.3",
    "question": "On the first day with a new gym locker, Theo keeps typing last year’s combination and getting locked out. He laughs that the old digits “won’t leave him alone” whenever he tries the new code. This interference pattern is which type?",
    "options": [
      "Retroactive interference",
      "Proactive interference",
      "Retrograde amnesia for the future",
      "Chunking failure only in iconic memory"
    ],
    "correct": 1,
    "correctFeedback": "Old learning disrupts new → proactive interference (§8.3).",
    "wrongFeedback": {
      "0": "Trap: retroactive is new→old disruption.",
      "2": "Trap: amnesia terms misuse.",
      "3": "Trap: wrong system details."
    },
    "mode": "mock"
  },
  {
    "id": "c8-l5-04",
    "chapter": 8,
    "level": 5,
    "section": "§8.1",
    "question": "During a timed exam, Mina juggles keeping the essay prompt in mind, retrieving lecture examples, and writing. She tells a friend afterward that it felt like a mental workspace under load, not a passive tape recorder. Working memory is best framed as which idea?",
    "options": [
      "Unlimited permanent storage of every life event without capacity limits.",
      "A limited-capacity system for holding and manipulating information now.",
      "A hippocampal store that records only motor skills and never facts or episodes.",
      "A forgetting mechanism identical to proactive and retroactive interference labels."
    ],
    "correct": 1,
    "correctFeedback": "Working memory: temporary storage + manipulation (§8.1).",
    "wrongFeedback": {
      "0": "Trap: describes long-term memory caricature.",
      "2": "Trap: hippocampus/skills oversimplification.",
      "3": "Trap: interference is a forgetting mechanism."
    },
    "mode": "mock"
  },
  {
    "id": "c8-l5-05",
    "chapter": 8,
    "level": 5,
    "section": "§8.3",
    "question": "After hippocampal surgery, patient “H.M.-like” case notes show intact childhood stories but almost no ability to form lasting memories of new people met after the surgery. Anterograde amnesia primarily involves:",
    "options": [
      "Loss of memories formed long before an injury only",
      "Difficulty forming new long-term memories after onset",
      "Perfect encoding with zero retrieval cues needed",
      "Only forgetting due to decay of iconic memory after 2 days"
    ],
    "correct": 1,
    "correctFeedback": "Anterograde: impaired new LTM formation (§8.3).",
    "wrongFeedback": {
      "0": "Trap: that leans retrograde.",
      "2": "Trap: false guarantee.",
      "3": "Trap: iconic memory is milliseconds–seconds scale."
    },
    "mode": "mock"
  },
  {
    "id": "c8-l5-06",
    "chapter": 8,
    "level": 5,
    "section": "§8.4",
    "question": "Elaborative rehearsal beats maintenance rehearsal for durable memory mainly because it:",
    "options": [
      "Repeats sound only without meaning",
      "It links new information to meaning and existing knowledge.",
      "Erases proactive interference automatically",
      "Converts all memories into procedural skills"
    ],
    "correct": 1,
    "correctFeedback": "Elaboration builds meaningful connections (§8.4).",
    "wrongFeedback": {
      "0": "Trap: that’s maintenance-ish shallow repetition.",
      "2": "Trap: overclaim.",
      "3": "Trap: false conversion claim."
    },
    "mode": "mock"
  },
  {
    "id": "c8-l5-07",
    "chapter": 8,
    "level": 5,
    "section": "§8.3",
    "question": "Loftus-style misinformation effects show:",
    "options": [
      "Eyewitness memory is immune to suggestion",
      "Post-event information can distort memory reports",
      "Only sensory memory can be distorted",
      "Chunking prevents all false memories"
    ],
    "correct": 1,
    "correctFeedback": "Misleading post-event info can alter reports (§8.3).",
    "wrongFeedback": {
      "0": "Trap: opposite of findings.",
      "2": "Trap: distortions hit long-term episodic reports.",
      "3": "Trap: chunking ≠ false-memory vaccine."
    },
    "mode": "mock"
  },
  {
    "id": "c8-l5-08",
    "chapter": 8,
    "level": 5,
    "section": "§8.1",
    "question": "A study-skills peer mentor contrasts shallow repetition of definitions with linking ideas to personal examples. Which encoding/storage claims are sound? (Select all that apply.)",
    "options": [
      "Encoding moves information into memory systems.",
      "Storage retains encoded information over time.",
      "Retrieval accesses stored information.",
      "Failure can occur at encoding, storage, or retrieval.",
      "If you once knew something, retrieval must succeed forever."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Encoding–storage–retrieval pipeline with multiple failure points (§8.1).",
    "wrongFeedback": {
      "0": "Correct to select: encoding.",
      "1": "Correct to select: storage.",
      "2": "Correct to select: retrieval.",
      "3": "Correct to select: multi-stage failure.",
      "4": "Trap: retrieval is fallible."
    },
    "mode": "mock"
  },
  {
    "id": "c8-l5-09",
    "chapter": 8,
    "level": 5,
    "section": "§8.3",
    "question": "Which interference/amnesia statements are accurate? (Select all that apply.)",
    "options": [
      "Proactive: old → blocks new.",
      "Retroactive: new → blocks old.",
      "Retrograde amnesia: trouble with pre-onset memories.",
      "Anterograde amnesia: trouble forming new LTMs.",
      "Interference only happens for procedural riding skills, never words."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Classic interference and amnesia contrasts (§8.3).",
    "wrongFeedback": {
      "0": "Correct to select: proactive.",
      "1": "Correct to select: retroactive.",
      "2": "Correct to select: retrograde.",
      "3": "Correct to select: anterograde.",
      "4": "Trap: verbal learning shows interference too."
    },
    "mode": "mock"
  },
  {
    "id": "c8-l5-10",
    "chapter": 8,
    "level": 5,
    "section": "§8.2–8.4",
    "question": "Peer tutors promote spacing, retrieval practice, sleep, mnemonics, and hippocampal role before finals week. Which memory-enhancement / brain claims are reasonable? (Select all that apply.)",
    "options": [
      "Spacing practice often beats massed cramming for long-term retention.",
      "Retrieval practice (testing) can strengthen learning.",
      "Hippocampus is implicated in forming many declarative memories.",
      "Mnemonics can organize encoding.",
      "Sleep is irrelevant to memory consolidation discussions."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Evidence-based study strategies + hippocampal role (§8.2–8.4).",
    "wrongFeedback": {
      "0": "Correct to select: spacing.",
      "1": "Correct to select: testing effect.",
      "2": "Correct to select: hippocampus/declarative.",
      "3": "Correct to select: mnemonics.",
      "4": "Trap: sleep–memory links are discussed in the text’s broader cognitive framing."
    },
    "mode": "mock"
  },
  {
    "id": "c9-l5-01",
    "chapter": 9,
    "level": 5,
    "section": "§9.1",
    "question": "At a family reunion, a developmental psychologist chats with a newborn cousin, a teen, and a grandparent. She notes both change and continuity from infancy through late life and asks students what the field studies. Lifespan development studies which span?",
    "options": [
      "Only prenatal weeks, then stops",
      "Change and continuity across the human life course",
      "Only college exam skills",
      "Only evolutionary history of dinosaurs"
    ],
    "correct": 1,
    "correctFeedback": "Development spans the life course (§9.1).",
    "wrongFeedback": {
      "0": "Trap: too narrow.",
      "2": "Trap: overspecific.",
      "3": "Trap: wrong field."
    },
    "mode": "mock"
  },
  {
    "id": "c9-l5-02",
    "chapter": 9,
    "level": 5,
    "section": "§9.2",
    "question": "Infant-lab volunteer Maya watches a 6-month-old explore objects by mouthing and batting them. Object permanence is just emerging on peekaboo trials, and the supervisor asks for Piaget’s stage label. Piaget’s sensorimotor stage is marked by which features?",
    "options": [
      "Abstract hypothetical-deductive reasoning as the first skill",
      "Learning through senses and motor actions; object permanence emerges",
      "Identity vs role confusion exclusively",
      "Formal operations from birth"
    ],
    "correct": 1,
    "correctFeedback": "Sensorimotor: sensing/acting; object permanence develops (§9.2).",
    "wrongFeedback": {
      "0": "Trap: formal operations feature.",
      "2": "Trap: Erikson adolescent crisis.",
      "3": "Trap: formal ops are later."
    },
    "mode": "mock"
  },
  {
    "id": "c9-l5-03",
    "chapter": 9,
    "level": 5,
    "section": "§9.2",
    "question": "Preschooler Noah watches juice poured from a short wide cup into a tall thin one. He insists the tall cup “has more juice,” failing conservation despite seeing the pour. Piaget would place him before which stage?",
    "options": [
      "Sensorimotor reflexes only",
      "Concrete operational mastery of conservation",
      "Trust vs mistrust",
      "Postconventional Kohlberg Stage 6 exclusively"
    ],
    "correct": 1,
    "correctFeedback": "Conservation is a concrete-operational achievement (§9.2).",
    "wrongFeedback": {
      "0": "Trap: wrong stage marker.",
      "2": "Trap: Erikson infancy crisis.",
      "3": "Trap: moral reasoning stage leap."
    },
    "mode": "mock"
  },
  {
    "id": "c9-l5-04",
    "chapter": 9,
    "level": 5,
    "section": "§9.2",
    "question": "Teenager Sofia spends the year trying on peer groups, career ideas, and values. She keeps asking “Who am I?” after every club fair, which her counselor maps to Erikson. Erikson’s adolescence crisis is primarily which conflict?",
    "options": [
      "Integrity vs despair",
      "Identity vs role confusion",
      "Industry vs inferiority in midlife only",
      "Generativity vs stagnation in infancy"
    ],
    "correct": 1,
    "correctFeedback": "Adolescence: identity vs role confusion (§9.2).",
    "wrongFeedback": {
      "0": "Trap: late adulthood.",
      "2": "Trap: industry is childhood; midlife is generativity.",
      "3": "Trap: swaps stages/ages."
    },
    "mode": "mock"
  },
  {
    "id": "c9-l5-05",
    "chapter": 9,
    "level": 5,
    "section": "§9.3",
    "question": "In the Strange Situation, baby Kai cries when the caregiver leaves the room. On return he seeks contact, calms quickly, and uses the caregiver as a secure base to explore again. Secure attachment in the Strange Situation is typically shown by which pattern?",
    "options": [
      "No distress and no seeking of caregiver ever",
      "Distress at separation, comfort on reunion, caregiver as secure base.",
      "Inconsolable anger with no recovery patterns studied",
      "Avoidance as the definition of security"
    ],
    "correct": 1,
    "correctFeedback": "Secure: upset then comforted; caregiver as secure base (§9.3).",
    "wrongFeedback": {
      "0": "Trap: more like avoidant extremes caricature.",
      "2": "Trap: not the secure pattern.",
      "3": "Trap: avoidance ≠ security."
    },
    "mode": "mock"
  },
  {
    "id": "c9-l5-06",
    "chapter": 9,
    "level": 5,
    "section": "§9.2",
    "question": "Nature vs nurture in development is best framed as:",
    "options": [
      "Only genes matter",
      "Only parenting scripts matter",
      "Genes and environment interact across development",
      "Development stops if either genes or environment exists"
    ],
    "correct": 2,
    "correctFeedback": "Modern framing: interaction of biology and experience (§9.1–9.2).",
    "wrongFeedback": {
      "0": "Trap: nativist extreme.",
      "1": "Trap: empiricist extreme.",
      "3": "Trap: nonsense."
    },
    "mode": "mock"
  },
  {
    "id": "c9-l5-07",
    "chapter": 9,
    "level": 5,
    "section": "§9.4",
    "question": "Kübler-Ross’s stages of dying are best treated as:",
    "options": [
      "A rigid universal ladder every dying person must climb in the same fixed order.",
      "A descriptive model of common reactions, not a mandatory sequence for everyone.",
      "Proof that grief is the same process as Piagetian formal operational reasoning.",
      "An attachment-classification system based on Strange Situation reunion behavior."
    ],
    "correct": 1,
    "correctFeedback": "Useful descriptive reactions—not a strict required sequence for everyone (§9.4).",
    "wrongFeedback": {
      "0": "Trap: over-rigid reading.",
      "2": "Trap: category error.",
      "3": "Trap: wrong construct."
    },
    "mode": "mock"
  },
  {
    "id": "c9-l5-08",
    "chapter": 9,
    "level": 5,
    "section": "§9.2",
    "question": "A teaching assistant lays out four Piaget stage cards beside classroom vignettes (peekaboo, conservation fails, abstract ethics debates). Which Piaget stage matches are accurate? (Select all that apply.)",
    "options": [
      "Sensorimotor: object permanence developing",
      "Preoperational: egocentrism/symbolic play common themes",
      "Concrete operational: conservation",
      "Formal operational: abstract/hypothetical reasoning",
      "Formal operational: begins prenatally with rooting only"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Classic Piaget stage markers (§9.2).",
    "wrongFeedback": {
      "0": "Correct to select: sensorimotor/object permanence.",
      "1": "Correct to select: preoperational themes.",
      "2": "Correct to select: concrete/conservation.",
      "3": "Correct to select: formal/abstract.",
      "4": "Trap: formal ops are adolescent/adult cognition, not prenatal reflexes."
    },
    "mode": "mock"
  },
  {
    "id": "c9-l5-09",
    "chapter": 9,
    "level": 5,
    "section": "§9.2–9.3",
    "question": "Which developmental claims are sound? (Select all that apply.)",
    "options": [
      "Attachment patterns relate to caregiver responsiveness themes.",
      "Teratogens can harm prenatal development.",
      "Adolescence involves identity work in Erikson’s model.",
      "Parenting style research discusses warmth and control dimensions.",
      "Cognitive development is finished at birth with zero later change."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Prenatal risk, attachment, identity, parenting (§9.2–9.3).",
    "wrongFeedback": {
      "0": "Correct to select: attachment–responsiveness.",
      "1": "Correct to select: teratogens.",
      "2": "Correct to select: adolescent identity.",
      "3": "Correct to select: parenting dimensions.",
      "4": "Trap: development continues."
    },
    "mode": "mock"
  },
  {
    "id": "c9-l5-10",
    "chapter": 9,
    "level": 5,
    "section": "§9.1–9.2",
    "question": "Methods day contrasts cross-sectional classroom snapshots with a longitudinal follow-up of the same kids. Which research-design ideas matter for development? (Select all that apply.)",
    "options": [
      "Longitudinal: same people over time",
      "Cross-sectional: different ages at one time",
      "Cohort effects can complicate cross-sectional age comparisons",
      "Cross-sectional always proves within-person change",
      "Continuous vs discontinuous change is a theoretical debate"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Designs and change debates in §9.1.",
    "wrongFeedback": {
      "0": "Correct to select: longitudinal.",
      "1": "Correct to select: cross-sectional.",
      "2": "Correct to select: cohort effects.",
      "3": "Trap: cross-sectional doesn’t track within-person change.",
      "4": "Correct to select: continuity debates."
    },
    "mode": "mock"
  },
  {
    "id": "c10-l5-01",
    "chapter": 10,
    "level": 5,
    "section": "§10.1",
    "question": "After skipping lunch, Jordan feels a rising hunger drive and walks straight to the cafeteria. After eating, the uneasy tension eases, which the TA ties to drive-reduction ideas. Drive theory most emphasizes which process?",
    "options": [
      "Intrinsic curiosity only with no biology",
      "Behavior pushing to reduce physiological unmet needs/tension",
      "That incentives never matter",
      "Maslow’s self-actualization as a stomach hormone"
    ],
    "correct": 1,
    "correctFeedback": "Drives: reduce physiological tension/needs (§10.1).",
    "wrongFeedback": {
      "0": "Trap: ignores drive biology.",
      "2": "Trap: incentives do matter in broader motivation.",
      "3": "Trap: mash-up."
    },
    "mode": "mock"
  },
  {
    "id": "c10-l5-02",
    "chapter": 10,
    "level": 5,
    "section": "§10.1",
    "question": "Art student Lila paints for hours because she loves the process; classmate Ben paints only when a cash prize is offered. Intrinsic vs extrinsic motivation—best contrast?",
    "options": [
      "Intrinsic: for external rewards only; extrinsic: for inherent interest only",
      "Intrinsic: inherent interest; extrinsic: separable outcomes/rewards.",
      "They are identical to James–Lange emotion",
      "Extrinsic always destroys all learning forever"
    ],
    "correct": 1,
    "correctFeedback": "Intrinsic = inherent; extrinsic = external outcomes (§10.1).",
    "wrongFeedback": {
      "0": "Trap: swaps definitions.",
      "2": "Trap: emotion theory confusion.",
      "3": "Trap: overclaim about rewards."
    },
    "mode": "mock"
  },
  {
    "id": "c10-l5-03",
    "chapter": 10,
    "level": 5,
    "section": "§10.4",
    "question": "On a roller coaster, Priya notices her heart pounding and shaky hands, then labels the feeling “terror.” A classmate cites James–Lange. James–Lange theory proposes emotions arise:",
    "options": [
      "Before any bodily change, purely as cognitive labels with no body",
      "From perceiving bodily responses to emotion-eliciting events.",
      "Only from Maslow’s hierarchy peaks",
      "Only from Schachter’s two factors without arousal"
    ],
    "correct": 1,
    "correctFeedback": "James–Lange: body response → felt emotion (§10.4).",
    "wrongFeedback": {
      "0": "Trap: more Cannon-ish / cognitive-first caricature.",
      "2": "Trap: motivation hierarchy ≠ emotion sequence theory.",
      "3": "Trap: two-factor needs arousal + label."
    },
    "mode": "mock"
  },
  {
    "id": "c10-l5-04",
    "chapter": 10,
    "level": 5,
    "section": "§10.4",
    "question": "In a classic-style demo, two groups receive the same arousal injection. One group is told why they feel stirred; the other is not, and they interpret the feeling using room cues. Schachter–Singer two-factor theory requires which combination?",
    "options": [
      "Arousal plus cognitive label/appraisal",
      "Facial feedback only with zero cognition",
      "Drive reduction of thirst only",
      "Yerkes–Dodson as a personality trait"
    ],
    "correct": 0,
    "correctFeedback": "Two-factor: physiological arousal + cognitive interpretation (§10.4).",
    "wrongFeedback": {
      "1": "Trap: facial-feedback idea is different.",
      "2": "Trap: hunger/thirst drive theory.",
      "3": "Trap: arousal–performance function, not a trait label."
    },
    "mode": "mock"
  },
  {
    "id": "c10-l5-05",
    "chapter": 10,
    "level": 5,
    "section": "§10.1",
    "question": "Exam coach Dana tells anxious students that a little arousal can help on a moderate test. She warns that extreme panic can wreck performance—an inverted-U style claim. Yerkes–Dodson law most nearly says which relationship?",
    "options": [
      "Performance level is completely unrelated to arousal in every laboratory task.",
      "Moderate arousal often aids peak performance; too little or too much can hurt.",
      "Maximum panic always maximizes accuracy on complex problem-solving tasks.",
      "Only extrinsic rewards can set arousal; intrinsic interest never changes it."
    ],
    "correct": 1,
    "correctFeedback": "Inverted-U style arousal–performance relation (§10.1).",
    "wrongFeedback": {
      "0": "Trap: denies the relation.",
      "2": "Trap: extreme arousal isn’t always best.",
      "3": "Trap: over-narrows causes of arousal."
    },
    "mode": "mock"
  },
  {
    "id": "c10-l5-06",
    "chapter": 10,
    "level": 5,
    "section": "§10.2",
    "question": "Set-point ideas about body weight suggest:",
    "options": [
      "Weight is infinitely plastic with no biological regulation talk",
      "Biological regulatory mechanisms may defend a weight range",
      "Hunger is only a cultural metaphor",
      "Anorexia is identical to set-point theory success"
    ],
    "correct": 1,
    "correctFeedback": "Set-point: regulatory defense of a weight range (§10.2).",
    "wrongFeedback": {
      "0": "Trap: ignores regulation.",
      "2": "Trap: hunger has physiological bases.",
      "3": "Trap: disorders ≠ proof the theory “succeeded.”"
    },
    "mode": "mock"
  },
  {
    "id": "c10-l5-07",
    "chapter": 10,
    "level": 5,
    "section": "§10.4",
    "question": "Cultural display rules primarily affect:",
    "options": [
      "Whether rods or cones fire in response to emotional faces in every culture.",
      "When and how emotions are expressed as appropriate within a given culture.",
      "Absolute auditory thresholds for detecting soft tones in a soundproof booth.",
      "Random assignment rules used when running emotion experiments in the lab."
    ],
    "correct": 1,
    "correctFeedback": "Display rules guide culturally appropriate expression (§10.4).",
    "wrongFeedback": {
      "0": "Trap: vision receptors.",
      "2": "Trap: hearing thresholds.",
      "3": "Trap: methods term."
    },
    "mode": "mock"
  },
  {
    "id": "c10-l5-08",
    "chapter": 10,
    "level": 5,
    "section": "§10.4",
    "question": "Emotion seminar students map James–Lange, Cannon–Bard, and two-factor accounts onto the same scare-film clip. Which emotion-theory statements are accurate? (Select all that apply.)",
    "options": [
      "James–Lange: body first, then emotion.",
      "Cannon–Bard: bodily arousal and emotion experience more simultaneous/independent pathways framing.",
      "Two-factor: arousal + label.",
      "All theories deny any role for cognition forever.",
      "Facial expressions have been studied as partly universal and partly culture-shaped."
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Classic emotion theories + expression research (§10.4).",
    "wrongFeedback": {
      "0": "Correct to select: James–Lange.",
      "1": "Correct to select: Cannon–Bard framing.",
      "2": "Correct to select: two-factor.",
      "3": "Trap: two-factor centers cognition.",
      "4": "Correct to select: universality + cultural shaping."
    },
    "mode": "mock"
  },
  {
    "id": "c10-l5-09",
    "chapter": 10,
    "level": 5,
    "section": "§10.1",
    "question": "Which motivation claims fit the chapter? (Select all that apply.)",
    "options": [
      "Maslow proposed a hierarchy of needs.",
      "Self-efficacy beliefs can influence motivation.",
      "Incentives can pull behavior.",
      "Drive reduction is the only modern account of all motivation.",
      "Intrinsic motivation is doing something for inherent interest."
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Hierarchy, efficacy, incentives, intrinsic (§10.1).",
    "wrongFeedback": {
      "0": "Correct to select: Maslow.",
      "1": "Correct to select: self-efficacy.",
      "2": "Correct to select: incentives.",
      "3": "Trap: multiple theories coexist.",
      "4": "Correct to select: intrinsic."
    },
    "mode": "mock"
  },
  {
    "id": "c10-l5-10",
    "chapter": 10,
    "level": 5,
    "section": "§10.2–10.3",
    "question": "Hunger, belonging, and sexual-motivation stations wrap the chapter with short textbook checks. Facilitators ask which claims stay consistent with OpenStax. Which statements are textbook-consistent? (Select all that apply.)",
    "options": [
      "Hunger involves physiological and psychological influences.",
      "Sexual behavior/motivation is discussed as multiply determined.",
      "Gender identity is the same construct as biological sex chromosomes in every sentence of the chapter.",
      "Eating disorders involve serious health risks.",
      "Metabolism and hormones can relate to energy regulation."
    ],
    "correct": [
      0,
      1,
      3,
      4
    ],
    "type": "multi",
    "correctFeedback": "Biopsychosocial complexity around hunger/sexuality; eating disorders are serious (§10.2–10.3).",
    "wrongFeedback": {
      "0": "Correct to select: hunger multi-determined.",
      "1": "Correct to select: sexuality multi-determined.",
      "2": "Trap: chapter distinguishes related but not identical constructs.",
      "3": "Correct to select: eating-disorder risks.",
      "4": "Correct to select: metabolic/hormonal regulation."
    },
    "mode": "mock"
  },
  {
    "id": "c11-l5-01",
    "chapter": 11,
    "level": 5,
    "section": "§11.1",
    "question": "Across seminars, clubs, and part-time jobs, friends notice that Ava stays organized, curious, and calm. Those patterns seem consistent over time and situations, which their personality unit calls a trait profile. Personality is best defined as which kind of pattern?",
    "options": [
      "A single mood lasting about five minutes in one narrow situation.",
      "Enduring traits and patterns guiding similar thought, feeling, and behavior.",
      "Only Freudian slips counted as the whole of what personality means.",
      "An IQ score treated as if it completely defined a person’s personality."
    ],
    "correct": 1,
    "correctFeedback": "Personality: enduring characteristic patterns (§11.1).",
    "wrongFeedback": {
      "0": "Trap: transient state ≠ personality.",
      "2": "Trap: too narrow.",
      "3": "Trap: intelligence ≠ personality whole."
    },
    "mode": "mock"
  },
  {
    "id": "c11-l5-02",
    "chapter": 11,
    "level": 5,
    "section": "§11.2",
    "question": "In a personality lecture, the instructor role-plays an impulsive urge to grab a classmate’s dessert. The bit is delivered as “it wants what it wants now,” then the class must label the Freudian structure. Freud’s id is primarily which idea?",
    "options": [
      "The moral conscience",
      "Pleasure-seeking unconscious drives",
      "The reality-oriented mediator only",
      "A Big Five trait"
    ],
    "correct": 1,
    "correctFeedback": "Id: pleasure principle / unconscious drives (§11.2).",
    "wrongFeedback": {
      "0": "Trap: that is superego-ish.",
      "2": "Trap: ego mediates reality.",
      "3": "Trap: trait model, not Freud structure."
    },
    "mode": "mock"
  },
  {
    "id": "c11-l5-03",
    "chapter": 11,
    "level": 5,
    "section": "§11.4–11.5",
    "question": "Roommate quizzes describe Sam as loving new cuisines, abstract art, and unusual ideas. Sam also prefers not to stick to rigid routines, which the inventory flags as a Big Five dimension. The Big Five trait openness most nearly involves which tendencies?",
    "options": [
      "Orderliness and dutifulness only",
      "Curiosity, imagination, and openness to experience",
      "Sociability only",
      "Emotional volatility only"
    ],
    "correct": 1,
    "correctFeedback": "Openness: intellect/imagination/curiosity themes (§11.5ish Big Five).",
    "wrongFeedback": {
      "0": "Trap: conscientiousness.",
      "2": "Trap: extraversion facet.",
      "3": "Trap: neuroticism."
    },
    "mode": "mock"
  },
  {
    "id": "c11-l5-04",
    "chapter": 11,
    "level": 5,
    "section": "§11.3",
    "question": "A twin registry finds identical (MZ) twins more alike on a personality trait than fraternal (DZ) twins. Both types were reared in similar homes, so the gap is used to discuss heritability. Higher MZ than DZ similarity for a trait most suggests which conclusion?",
    "options": [
      "Genetic factors contribute nothing to measured personality trait differences.",
      "Genetic factors contribute to individual differences (environment still matters).",
      "Personality differences come only from parenting scripts with no genetic role.",
      "Twin similarity proves projective inkblot scores equal Big Five inventories."
    ],
    "correct": 1,
    "correctFeedback": "MZ>DZ similarity patterns support genetic influence alongside environment (§11.3).",
    "wrongFeedback": {
      "0": "Trap: opposite reading.",
      "2": "Trap: denies genetics.",
      "3": "Trap: methods ≠ definition."
    },
    "mode": "mock"
  },
  {
    "id": "c11-l5-05",
    "chapter": 11,
    "level": 5,
    "section": "§11.6",
    "question": "Before a public speech, Jordan says, “I believe I can handle the Q&A even if I’m nervous,” and practices. The coach labels that belief Bandura’s self-efficacy rather than raw vanity. Self-efficacy (Bandura) refers to which belief?",
    "options": [
      "Belief in one’s capability to execute actions needed for desired outcomes.",
      "Freud’s reaction formation applied to everyday goal setting and studying.",
      "A projective inkblot score used as the definition of self-efficacy itself.",
      "Maslow’s physiological needs treated as identical to Bandura’s self-efficacy."
    ],
    "correct": 0,
    "correctFeedback": "Self-efficacy: perceived capability (§11.6 social-cognitive).",
    "wrongFeedback": {
      "1": "Trap: defense mechanism.",
      "2": "Trap: assessment tool.",
      "3": "Trap: wrong theory level."
    },
    "mode": "mock"
  },
  {
    "id": "c11-l5-06",
    "chapter": 11,
    "level": 5,
    "section": "§11.7",
    "question": "Projective tests (e.g., Rorschach/TAT) mainly assume:",
    "options": [
      "People project unconscious material onto ambiguous stimuli",
      "They are identical in reliability to all Big Five inventories always",
      "They measure only reaction time",
      "They replace the need for any ethics"
    ],
    "correct": 0,
    "correctFeedback": "Projectives: ambiguous stimuli → projected content (§11.7/assessment).",
    "wrongFeedback": {
      "1": "Trap: reliability/validity debates exist; not automatic equality.",
      "2": "Trap: not primarily RT tests.",
      "3": "Trap: ethics still apply."
    },
    "mode": "mock"
  },
  {
    "id": "c11-l5-07",
    "chapter": 11,
    "level": 5,
    "section": "§11.2",
    "question": "Defense mechanisms are:",
    "options": [
      "Conscious study strategies used only when preparing for an upcoming exam.",
      "Unconscious strategies that reduce anxiety by distorting reality in some way.",
      "Big Five agreeableness facets such as politeness and compassionate caring.",
      "Operant reinforcement schedules that shape bar-pressing rates in a Skinner box."
    ],
    "correct": 1,
    "correctFeedback": "Defenses: unconscious anxiety reduction via distortion (§11.2).",
    "wrongFeedback": {
      "0": "Trap: not merely conscious study tactics.",
      "2": "Trap: trait taxonomy confusion.",
      "3": "Trap: learning chapter."
    },
    "mode": "mock"
  },
  {
    "id": "c11-l5-08",
    "chapter": 11,
    "level": 5,
    "section": "§11.2–11.5",
    "question": "A review sheet contrasts psychodynamic, trait, humanistic, and social-cognitive portraits of the same client. Which personality approach matches are fair? (Select all that apply.)",
    "options": [
      "Psychodynamic: unconscious conflicts/early experience emphasis",
      "Humanistic: growth, self-actualization, congruence themes",
      "Trait: stable dimensions like Big Five",
      "Social-cognitive: reciprocal interactions of person, behavior, environment",
      "Trait theory claims personality changes every second with no stability"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Major perspectives in Ch 11.",
    "wrongFeedback": {
      "0": "Correct to select: psychodynamic.",
      "1": "Correct to select: humanistic.",
      "2": "Correct to select: trait.",
      "3": "Correct to select: social-cognitive.",
      "4": "Trap: traits assume relative stability."
    },
    "mode": "mock"
  },
  {
    "id": "c11-l5-09",
    "chapter": 11,
    "level": 5,
    "section": "§11.5",
    "question": "Which Big Five labels are correct? (Select all that apply.)",
    "options": [
      "Conscientiousness: organized/responsible",
      "Extraversion: outgoing/energetic",
      "Agreeableness: cooperative/trusting",
      "Neuroticism: emotional instability/anxiety vulnerability",
      "Openness: preference for rigid routine with zero curiosity as the core definition"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "OCEAN traits (§11.5).",
    "wrongFeedback": {
      "0": "Correct to select: C.",
      "1": "Correct to select: E.",
      "2": "Correct to select: A.",
      "3": "Correct to select: N.",
      "4": "Trap: openness is curiosity/openness to experience, not rigid closedness."
    },
    "mode": "mock"
  },
  {
    "id": "c11-l5-10",
    "chapter": 11,
    "level": 5,
    "section": "§11.6–11.7",
    "question": "Clinic trainees compare MMPI-style inventories with projective methods and reliability concerns. Which assessment claims are sound? (Select all that apply.)",
    "options": [
      "Self-report inventories are common for traits.",
      "Reliability and validity matter for tests.",
      "Cultural context can affect assessment interpretation.",
      "A single projective response proves a DSM diagnosis alone.",
      "Mischel sparked person–situation debate about cross-situational consistency."
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Assessment quality + situationism debate (§11.6–11.7).",
    "wrongFeedback": {
      "0": "Correct to select: inventories.",
      "1": "Correct to select: reliability/validity.",
      "2": "Correct to select: culture.",
      "3": "Trap: overclaim from one response.",
      "4": "Correct to select: person–situation debate."
    },
    "mode": "mock"
  },
  {
    "id": "c12-l5-01",
    "chapter": 12,
    "level": 5,
    "section": "§12.1",
    "question": "After a group project meltdown, classmates blame “personality flaws,” norms, and peer pressure. Their TA notes that social psychology focuses on how people think about, influence, and relate to others. Social psychology most centrally studies:",
    "options": [
      "Neuron membrane potentials and action-potential thresholds exclusively.",
      "How people think about, influence, and relate to one another in social contexts.",
      "Only IQ psychometrics and standardization samples for intelligence testing.",
      "Only sleep stages and circadian rhythms measured with overnight EEG records."
    ],
    "correct": 1,
    "correctFeedback": "Social psych: thoughts, influence, relationships (§12.1).",
    "wrongFeedback": {
      "0": "Trap: biopsych.",
      "2": "Trap: intelligence testing chapter.",
      "3": "Trap: consciousness chapter."
    },
    "mode": "mock"
  },
  {
    "id": "c12-l5-02",
    "chapter": 12,
    "level": 5,
    "section": "§12.1",
    "question": "When a driver cuts her off, Mina thinks “what a rude person,” ignoring a possible emergency rush. Her social-psych friend calls out the overweighting of disposition over situation. Fundamental attribution error is which bias?",
    "options": [
      "Overemphasizing situational causes for others’ behavior always",
      "Over-weighting others’ dispositions while under-weighting situations.",
      "Correctly balancing traits and situations every time",
      "A type of classical CS"
    ],
    "correct": 1,
    "correctFeedback": "FAE: over-disposition / under-situation for others (§12.1).",
    "wrongFeedback": {
      "0": "Trap: reverses FAE.",
      "2": "Trap: FAE is a bias, not perfect balance.",
      "3": "Trap: learning term."
    },
    "mode": "mock"
  },
  {
    "id": "c12-l5-03",
    "chapter": 12,
    "level": 5,
    "section": "§12.4",
    "question": "In a recreation of Asch’s setup, Omar hears several confederates give the wrong line-length answer. Before his turn he feels clear pressure to match the group despite seeing the correct line. Asch’s line studies primarily demonstrated which effect?",
    "options": [
      "Obedience to harmful authority shocks",
      "Conformity to a group’s wrong perceptual judgments",
      "Bystander diffusion only",
      "Cognitive dissonance from boring tasks"
    ],
    "correct": 1,
    "correctFeedback": "Asch: conformity to incorrect group consensus (§12.4).",
    "wrongFeedback": {
      "0": "Trap: Milgram obedience.",
      "2": "Trap: bystander research.",
      "3": "Trap: Festinger dissonance paradigms."
    },
    "mode": "mock"
  },
  {
    "id": "c12-l5-04",
    "chapter": 12,
    "level": 5,
    "section": "§12.4",
    "question": "Documentary night shows participants continuing to deliver what they believe are painful shocks. An experimenter in a lab coat insists they continue, and many obey farther than expected. Milgram’s obedience research most controversially showed which finding?",
    "options": [
      "People never obey authority when orders conflict with personal morals.",
      "Many delivered what they believed were severe shocks under authority pressure.",
      "Participants conformed only to wrong line-length judgments in a group setting.",
      "IRBs afterward banned every form of social psychology experiment permanently."
    ],
    "correct": 1,
    "correctFeedback": "Milgram: high obedience to authority instructions (§12.4).",
    "wrongFeedback": {
      "0": "Trap: opposite finding.",
      "2": "Trap: Asch paradigm.",
      "3": "Trap: ethics reformed research; didn’t erase the field."
    },
    "mode": "mock"
  },
  {
    "id": "c12-l5-05",
    "chapter": 12,
    "level": 5,
    "section": "§12.3",
    "question": "Eco-club member Riley publicly argues for zero waste but keeps buying single-use bottles. The mismatch creates unease, and Riley later changes either the habit or the attitude. Cognitive dissonance is discomfort from which conflict?",
    "options": [
      "Holding inconsistent cognitions or behaviors, often motivating change to reduce discomfort.",
      "Maintaining perfect consistency among attitudes and actions in every situation.",
      "Responding only to peripheral advertising cues such as celebrity endorsements.",
      "Achieving successful groupthink outcomes in highly cohesive decision-making teams."
    ],
    "correct": 0,
    "correctFeedback": "Dissonance: inconsistency → aversive arousal → change (§12.3).",
    "wrongFeedback": {
      "1": "Trap: dissonance is about inconsistency.",
      "2": "Trap: ELM route, different topic.",
      "3": "Trap: groupthink is flawed cohesion."
    },
    "mode": "mock"
  },
  {
    "id": "c12-l5-06",
    "chapter": 12,
    "level": 5,
    "section": "§12.5",
    "question": "Stereotype vs prejudice vs discrimination—best sketch?",
    "options": [
      "Stereotype: behavior; prejudice: belief; discrimination: feeling",
      "Stereotype: cognitive belief; prejudice: attitude/affect; discrimination: behavior",
      "All three are identical to obedience",
      "Discrimination is only private thoughts"
    ],
    "correct": 1,
    "correctFeedback": "Belief / attitude / behavior distinction (§12.5).",
    "wrongFeedback": {
      "0": "Trap: swaps components.",
      "2": "Trap: collapses constructs.",
      "3": "Trap: discrimination is behavior."
    },
    "mode": "mock"
  },
  {
    "id": "c12-l5-07",
    "chapter": 12,
    "level": 5,
    "section": "§12.7",
    "question": "Diffusion of responsibility helps explain:",
    "options": [
      "Why larger bystander groups can reduce individual helping",
      "Why FAE never occurs",
      "Why Asch had no confederates",
      "Why attitudes always predict behavior perfectly"
    ],
    "correct": 0,
    "correctFeedback": "More people → each feels less responsible to help (§12.7).",
    "wrongFeedback": {
      "1": "Trap: unrelated.",
      "2": "Trap: false history.",
      "3": "Trap: attitude–behavior gap exists."
    },
    "mode": "mock"
  },
  {
    "id": "c12-l5-08",
    "chapter": 12,
    "level": 5,
    "section": "§12.4",
    "question": "A social-influence unit pairs conformity, compliance, and obedience examples from dorm life and lab classics. Which social-influence matches are correct? (Select all that apply.)",
    "options": [
      "Conformity: yielding to group pressure/norms",
      "Compliance: agreeing to a direct request",
      "Obedience: following orders from authority",
      "Normative influence: desire for acceptance",
      "Informational influence: believing the group knows better"
    ],
    "correct": [
      0,
      1,
      2,
      3,
      4
    ],
    "type": "multi",
    "correctFeedback": "All are standard distinctions (§12.4).",
    "wrongFeedback": {
      "0": "Correct to select: conformity.",
      "1": "Correct to select: compliance.",
      "2": "Correct to select: obedience.",
      "3": "Correct to select: normative.",
      "4": "Correct to select: informational."
    },
    "mode": "mock"
  },
  {
    "id": "c12-l5-09",
    "chapter": 12,
    "level": 5,
    "section": "§12.1–12.3",
    "question": "Which attribution/attitude claims are sound? (Select all that apply.)",
    "options": [
      "Situational attributions cite external factors.",
      "Dispositional attributions cite internal traits.",
      "Self-serving bias credits self for success, blames situation for failure (common pattern).",
      "Central route persuasion uses deep message scrutiny.",
      "Peripheral route means the audience always analyzes arguments carefully."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Attribution biases + ELM routes (§12.1–12.3).",
    "wrongFeedback": {
      "0": "Correct to select: situational.",
      "1": "Correct to select: dispositional.",
      "2": "Correct to select: self-serving pattern.",
      "3": "Correct to select: central route.",
      "4": "Trap: peripheral uses cues, not deep scrutiny."
    },
    "mode": "mock"
  },
  {
    "id": "c12-l5-10",
    "chapter": 12,
    "level": 5,
    "section": "§12.5–12.7",
    "question": "After a campus bias workshop, students discuss stereotypes, prejudice, discrimination, and bystander effects using recent hallway incidents. Which intergroup/prosocial statements fit? (Select all that apply.)",
    "options": [
      "In-group bias favors one’s own group.",
      "Scapegoating blames out-groups for problems.",
      "Prosocial behavior aims to help others.",
      "Altruism debates whether helping is ever unselfish.",
      "Prejudice is identical to a neuron’s action potential."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Prejudice dynamics + helping (§12.5–12.7).",
    "wrongFeedback": {
      "0": "Correct to select: in-group bias.",
      "1": "Correct to select: scapegoating.",
      "2": "Correct to select: prosocial.",
      "3": "Correct to select: altruism debates.",
      "4": "Trap: category error."
    },
    "mode": "mock"
  },
  {
    "id": "c13-l5-01",
    "chapter": 13,
    "level": 5,
    "section": "§13.1",
    "question": "A consulting firm hires Dr. Nguyen to improve hiring, training, and team climate at a logistics company—classic applied workplace psychology. I-O psychology primarily applies psychology to:",
    "options": [
      "Only childhood attachment classifications from the Strange Situation procedure.",
      "Workplace behavior: selection, performance, and organizational life.",
      "Only Freudian dream interpretation in executive coaching sessions at work.",
      "Only clinical assessment of sleep apnea in occupational health clinics."
    ],
    "correct": 1,
    "correctFeedback": "I-O: work/organizational applications (§13.1).",
    "wrongFeedback": {
      "0": "Trap: developmental.",
      "2": "Trap: clinical/psychoanalytic caricature.",
      "3": "Trap: health/sleep specialty."
    },
    "mode": "mock"
  },
  {
    "id": "c13-l5-02",
    "chapter": 13,
    "level": 5,
    "section": "§13.2",
    "question": "Before rewriting a job ad, HR analyst Chris shadows warehouse leads and lists tasks and KSAOs. The write-up documents what “successful performance” requires for selection and training. Job analysis is used mainly to do which task?",
    "options": [
      "Identify tasks and KSAOs for a job to guide selection and performance appraisal.",
      "Measure REM cycles of employees as the main basis for promotion decisions.",
      "Replace all performance feedback forever with a single automated ranking score.",
      "Prove that a correlation between tenure and pay equals a causal hiring rule."
    ],
    "correct": 0,
    "correctFeedback": "Job analysis → duties and requirements for HR systems (§13.2).",
    "wrongFeedback": {
      "1": "Trap: sleep measure.",
      "2": "Trap: overclaim.",
      "3": "Trap: methods fallacy."
    },
    "mode": "mock"
  },
  {
    "id": "c13-l5-03",
    "chapter": 13,
    "level": 5,
    "section": "§13.2",
    "question": "Two firms hire for the same role: Firm A uses unstructured chats; Firm B uses the same scored questions. Candidates notice Firm B feels more consistent from interview to interview. Structured interviews typically improve selection by which mechanism?",
    "options": [
      "Asking different random questions to each applicant with no scoring rubric",
      "Job-related questions asked consistently with standardized scoring.",
      "Ignoring job analysis",
      "Selecting only by handshake firmness"
    ],
    "correct": 1,
    "correctFeedback": "Structure + job relevance boost reliability/validity (§13.2).",
    "wrongFeedback": {
      "0": "Trap: that’s unstructured chaos.",
      "2": "Trap: analysis informs content.",
      "3": "Trap: weak cue."
    },
    "mode": "mock"
  },
  {
    "id": "c13-l5-04",
    "chapter": 13,
    "level": 5,
    "section": "§13.3",
    "question": "Annual survey data at a hospital link higher job satisfaction and organizational commitment to lower quit rates. Nurse managers discuss how those attitudes relate to retention. Organizational commitment and job satisfaction research most often links to which outcomes?",
    "options": [
      "Random unrelated moods that have no meaning for workplace outcomes at all.",
      "Employee attitudes linked to retention, performance contexts, and well-being themes.",
      "Only Freudian oral-stage fixation explaining every workplace conflict pattern.",
      "Only retinal photoreceptor density predicting who stays in a job long term."
    ],
    "correct": 1,
    "correctFeedback": "Attitudes at work relate to key organizational outcomes (§13.3).",
    "wrongFeedback": {
      "0": "Trap: denies relevance.",
      "2": "Trap: wrong theory.",
      "3": "Trap: vision biology."
    },
    "mode": "mock"
  },
  {
    "id": "c13-l5-05",
    "chapter": 13,
    "level": 5,
    "section": "§13.3",
    "question": "Manager Adele trades rewards for meeting quotas in a transactional style. Manager Bao inspires a shared vision and challenges staff to grow in a transformational style. Transactional vs transformational leadership—which sketch is best?",
    "options": [
      "Transactional: inspire via vision/charisma only; transformational: exchange rewards for performance only",
      "Transactional = reward exchange; transformational = inspire/stimulate/consider.",
      "They are identical to Theory X only",
      "Leadership theories ban job analysis"
    ],
    "correct": 1,
    "correctFeedback": "Transactional = exchange; transformational = inspire/stimulate/consider (§13.3).",
    "wrongFeedback": {
      "0": "Trap: swaps labels.",
      "2": "Trap: Theory X/Y are separate motivation assumptions.",
      "3": "Trap: nonsense."
    },
    "mode": "mock"
  },
  {
    "id": "c13-l5-06",
    "chapter": 13,
    "level": 5,
    "section": "§13.4",
    "question": "Human factors / ergonomics focuses on:",
    "options": [
      "Designing tools and systems to fit human capabilities and reduce error risk.",
      "Increasing work hours without redesigning tools, displays, or task structure.",
      "Diagnosing schizophrenia using workplace attendance records as the main criterion.",
      "Teaching phoneme discrimination to improve customer-service call pronunciation."
    ],
    "correct": 0,
    "correctFeedback": "Human factors: fit design to humans (§13.4).",
    "wrongFeedback": {
      "1": "Trap: opposite of ergonomic aims.",
      "2": "Trap: clinical disorders.",
      "3": "Trap: language development."
    },
    "mode": "mock"
  },
  {
    "id": "c13-l5-07",
    "chapter": 13,
    "level": 5,
    "section": "§13.2",
    "question": "A test used in hiring should primarily be:",
    "options": [
      "Unrelated to job tasks but entertaining enough to keep applicants engaged.",
      "Reliable and valid for job-relevant KSAOs, with fairness considered in use.",
      "Kept secret from any validation study so competitors cannot copy the items.",
      "Based only on astrology charts matched to the job’s zodiac-related “fit.”"
    ],
    "correct": 1,
    "correctFeedback": "Selection tools need reliability, validity, job relevance, fairness (§13.2).",
    "wrongFeedback": {
      "0": "Trap: lacks job relevance.",
      "2": "Trap: validation matters.",
      "3": "Trap: pseudoscience."
    },
    "mode": "mock"
  },
  {
    "id": "c13-l5-08",
    "chapter": 13,
    "level": 5,
    "section": "§13.1–13.2",
    "question": "An I-O intern’s checklist covers job analysis, selection validation, and training needs assessment before a plant expansion. Which industrial psychology tasks fit? (Select all that apply.)",
    "options": [
      "Job analysis",
      "Designing selection systems",
      "Performance appraisal systems",
      "Training needs assessment",
      "Mapping only dream symbols of CEOs"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Core industrial side topics (§13.2).",
    "wrongFeedback": {
      "0": "Correct to select: job analysis.",
      "1": "Correct to select: selection.",
      "2": "Correct to select: appraisal.",
      "3": "Correct to select: training needs.",
      "4": "Trap: not I-O industrial core."
    },
    "mode": "mock"
  },
  {
    "id": "c13-l5-09",
    "chapter": 13,
    "level": 5,
    "section": "§13.3",
    "question": "Which organizational topics are chapter-consistent? (Select all that apply.)",
    "options": [
      "Motivation at work",
      "Job satisfaction",
      "Leadership styles",
      "Teams and organizational culture themes",
      "Only absolute sensory thresholds of keyboards"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Organizational psychology themes (§13.3).",
    "wrongFeedback": {
      "0": "Correct to select: motivation.",
      "1": "Correct to select: satisfaction.",
      "2": "Correct to select: leadership.",
      "3": "Correct to select: teams/culture.",
      "4": "Trap: sensation chapter."
    },
    "mode": "mock"
  },
  {
    "id": "c13-l5-10",
    "chapter": 13,
    "level": 5,
    "section": "§13.4",
    "question": "Safety walk-through lists display design, workload, and accident prevention as human-factors goals. Which human-factors claims are sound? (Select all that apply.)",
    "options": [
      "Poor design can increase human error.",
      "Displays/controls should match human perceptual-motor limits.",
      "Workplace safety benefits from ergonomic design.",
      "Human factors ignores user cognition entirely.",
      "Checklist/design interventions can reduce mistakes in complex systems."
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "type": "multi",
    "correctFeedback": "Ergonomics reduces error by fitting systems to people (§13.4).",
    "wrongFeedback": {
      "0": "Correct to select: poor design → error.",
      "1": "Correct to select: match human limits.",
      "2": "Correct to select: safety.",
      "3": "Trap: HF heavily uses cognition/perception.",
      "4": "Correct to select: design/checklists help."
    },
    "mode": "mock"
  },
  {
    "id": "c14-l5-01",
    "chapter": 14,
    "level": 5,
    "section": "§14.1",
    "question": "Two students get the same midterm grade. One appraises it as a disaster they cannot handle; the other sees it as tough but manageable with a new plan—and they report very different stress. Lazarus’s cognitive appraisal view says stress depends heavily on which process?",
    "options": [
      "Only the objective event, never interpretation",
      "How the person evaluates threat and coping resources.",
      "Only Selye’s animal ulcers with no cognition",
      "Only Type A speech rate"
    ],
    "correct": 1,
    "correctFeedback": "Appraisal of threat/resources shapes stress (§14.1).",
    "wrongFeedback": {
      "0": "Trap: denies appraisal.",
      "2": "Trap: GAS history ≠ full modern appraisal account.",
      "3": "Trap: Type A is a related but different construct."
    },
    "mode": "mock"
  },
  {
    "id": "c14-l5-02",
    "chapter": 14,
    "level": 5,
    "section": "§14.1",
    "question": "A stress lecture walks through lab animals (and human analogies) under prolonged threat. The pattern moves through alarm, resistance, and eventual exhaustion—Selye’s sketch. Selye’s General Adaptation Syndrome stages are which sequence?",
    "options": [
      "Alarm → resistance → exhaustion",
      "Denial → anger → bargaining only",
      "Encoding → storage → retrieval",
      "Id → ego → superego"
    ],
    "correct": 0,
    "correctFeedback": "GAS: alarm, resistance, exhaustion (§14.1).",
    "wrongFeedback": {
      "1": "Trap: Kübler-Ross.",
      "2": "Trap: memory stages.",
      "3": "Trap: Freud structures."
    },
    "mode": "mock"
  },
  {
    "id": "c14-l5-03",
    "chapter": 14,
    "level": 5,
    "section": "§14.2",
    "question": "Office worker Theo lists tiny chronic irritants—late trains, inbox pileups, noisy neighbors. He notices they wear him down as much as rare big crises do. Daily hassles research suggests which claim?",
    "options": [
      "Only major catastrophes—not everyday irritations—can create measurable stress.",
      "Cumulative minor stressors can significantly affect well-being over time.",
      "Daily hassles are identical to eustress and always improve performance.",
      "Stressors cannot be social; only physical injuries count in stress research."
    ],
    "correct": 1,
    "correctFeedback": "Hassles accumulate and matter (§14.2).",
    "wrongFeedback": {
      "0": "Trap: understates chronic minor stress.",
      "2": "Trap: hassles aren’t automatically positive stress.",
      "3": "Trap: many stressors are social."
    },
    "mode": "mock"
  },
  {
    "id": "c14-l5-04",
    "chapter": 14,
    "level": 5,
    "section": "§14.3",
    "question": "A health-psych seminar links chronic stress hormones to changes in immune markers in caregivers. Students are asked what interdisciplinary field most directly studies that bridge. Psychoneuroimmunology most directly links which domains?",
    "options": [
      "Personality trait scores directly to shoe size in large survey samples.",
      "Psychological stress processes to nervous-system and immune functioning.",
      "Only operant reinforcement schedules to taste-bud density on the tongue.",
      "Only IRB paperwork to circadian clock genes without stress physiology."
    ],
    "correct": 1,
    "correctFeedback": "PNI: mind–nervous–immune interactions (§14.3).",
    "wrongFeedback": {
      "0": "Trap: nonsense.",
      "2": "Trap: wrong systems.",
      "3": "Trap: mash-up."
    },
    "mode": "mock"
  },
  {
    "id": "c14-l5-05",
    "chapter": 14,
    "level": 5,
    "section": "§14.4",
    "question": "Before finals, Maya makes a revision timetable and emails professors about deadlines. She is changing the stressor itself rather than only venting feelings. Problem-focused coping aims to do which thing?",
    "options": [
      "Change the emotional reaction only, never the problem",
      "Acting to change the stressor or one’s relation to it.",
      "Increase denial as the first gold-standard for all controllable problems",
      "Eliminate the HPA axis surgically"
    ],
    "correct": 1,
    "correctFeedback": "Problem-focused: act on the stressor/situation (§14.4).",
    "wrongFeedback": {
      "0": "Trap: that’s emotion-focused leaning.",
      "2": "Trap: denial isn’t gold standard for controllable problems.",
      "3": "Trap: absurd."
    },
    "mode": "mock"
  },
  {
    "id": "c14-l5-06",
    "chapter": 14,
    "level": 5,
    "section": "§14.3",
    "question": "Type A behavior pattern historically emphasized:",
    "options": [
      "A relaxed, patient pace with little time urgency in daily work habits.",
      "Competitive, hurried, hostile themes linked in research to heart-risk discussions.",
      "High openness to experience with curiosity as the only defining feature.",
      "Secure attachment in infancy treated as the definition of Type A adulthood."
    ],
    "correct": 1,
    "correctFeedback": "Type A: competitive/time-urgent/hostile cluster (§14.3).",
    "wrongFeedback": {
      "0": "Trap: Type B-ish.",
      "2": "Trap: Big Five openness.",
      "3": "Trap: development/attachment."
    },
    "mode": "mock"
  },
  {
    "id": "c14-l5-07",
    "chapter": 14,
    "level": 5,
    "section": "§14.5",
    "question": "Positive psychology (Seligman et al.) emphasizes:",
    "options": [
      "Only disorder catalogs and symptom checklists without studying strengths.",
      "Strengths and well-being research alongside—not instead of—suffering research.",
      "A rule that happiness is illegal to measure in psychological laboratories.",
      "A claim that cognitive appraisal of threat never matters for stress outcomes."
    ],
    "correct": 1,
    "correctFeedback": "Positive psych studies strengths/well-being (§14.5).",
    "wrongFeedback": {
      "0": "Trap: too clinical-narrow.",
      "2": "Trap: nonsense.",
      "3": "Trap: appraisal is central earlier in chapter."
    },
    "mode": "mock"
  },
  {
    "id": "c14-l5-08",
    "chapter": 14,
    "level": 5,
    "section": "§14.1–14.2",
    "question": "Stress unit students map primary/secondary appraisal, GAS stages, and hassles onto a shared “exam week” story. Which stress concepts are accurate? (Select all that apply.)",
    "options": [
      "Primary appraisal: is it a threat/challenge?",
      "Secondary appraisal: what can I do / what resources do I have?",
      "Eustress can be beneficial/activating stress.",
      "Distress is typically harmful/overwhelming stress.",
      "Stressors are only physical injuries, never psychosocial."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Appraisal + eustress/distress (§14.1–14.2).",
    "wrongFeedback": {
      "0": "Correct to select: primary appraisal.",
      "1": "Correct to select: secondary appraisal.",
      "2": "Correct to select: eustress.",
      "3": "Correct to select: distress.",
      "4": "Trap: many stressors are psychosocial."
    },
    "mode": "mock"
  },
  {
    "id": "c14-l5-09",
    "chapter": 14,
    "level": 5,
    "section": "§14.4",
    "question": "Which coping/regulation claims fit? (Select all that apply.)",
    "options": [
      "Social support can buffer stress.",
      "Exercise is often discussed as a stress-regulation aid.",
      "Relaxation/meditation practices appear as regulation tools.",
      "Emotion-focused coping can help when the stressor is not immediately controllable.",
      "Perceived control is irrelevant to stress outcomes."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Support, lifestyle, and coping fit (§14.4).",
    "wrongFeedback": {
      "0": "Correct to select: social support.",
      "1": "Correct to select: exercise.",
      "2": "Correct to select: relaxation/meditation.",
      "3": "Correct to select: emotion-focused when control is low.",
      "4": "Trap: control perceptions matter."
    },
    "mode": "mock"
  },
  {
    "id": "c14-l5-10",
    "chapter": 14,
    "level": 5,
    "section": "§14.3–14.5",
    "question": "Health-psych fair covers stress–illness links, coping, and positive psychology booths. Which health-psychology statements are sound? (Select all that apply.)",
    "options": [
      "Chronic stress can relate to health vulnerability.",
      "Hostility components of Type A drew special heart-risk attention.",
      "Happiness research examines factors linked to well-being.",
      "Flow involves absorbed engagement in challenging activities.",
      "Immune function is completely sealed off from psychological states."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Stress–health + well-being topics (§14.3–14.5).",
    "wrongFeedback": {
      "0": "Correct to select: chronic stress–health.",
      "1": "Correct to select: hostility/heart risk.",
      "2": "Correct to select: happiness research.",
      "3": "Correct to select: flow.",
      "4": "Trap: PNI argues linkage."
    },
    "mode": "mock"
  },
  {
    "id": "c15-l5-01",
    "chapter": 15,
    "level": 5,
    "section": "§15.1–15.2",
    "question": "In clinic intake, a psychiatrist opens a manual to match symptom clusters to standardized labels. The goal is clearer communication and research—not a full childhood explanation by itself. The DSM is primarily used to do which task?",
    "options": [
      "Measure IQ only",
      "Classify/diagnose mental disorders with criteria",
      "Replace all psychotherapy",
      "Prove causation for every disorder via correlation alone"
    ],
    "correct": 1,
    "correctFeedback": "DSM: diagnostic classification system (§15.2).",
    "wrongFeedback": {
      "0": "Trap: testing chapter.",
      "2": "Trap: diagnosis ≠ treatment replacement.",
      "3": "Trap: methods fallacy."
    },
    "mode": "mock"
  },
  {
    "id": "c15-l5-02",
    "chapter": 15,
    "level": 5,
    "section": "§15.4",
    "question": "Client Ana plans her whole day around avoiding bridges after a panic-like episode on one. She knows the fear is excessive yet feels unable to ride across. Specific phobia involves which pattern?",
    "options": [
      "Excessive fear of a specific object/situation with avoidance",
      "Only manic episodes",
      "Only delusions of grandeur",
      "Personality rigidity across all contexts as the sole feature"
    ],
    "correct": 0,
    "correctFeedback": "Phobia: marked fear/avoidance of specific stimuli (§15.4).",
    "wrongFeedback": {
      "1": "Trap: bipolar mania.",
      "2": "Trap: schizophrenia-related delusions.",
      "3": "Trap: personality disorders broader."
    },
    "mode": "mock"
  },
  {
    "id": "c15-l5-03",
    "chapter": 15,
    "level": 5,
    "section": "§15.7",
    "question": "For three weeks, Jordan has pervasive low mood, loss of interest in soccer, sleep change, and worthless thoughts. Classes are impaired, and the intake team checks major depressive episode features. Major depressive episode core features include which signs?",
    "options": [
      "Only brief sadness lasting minutes with high mania",
      "Persistent depressed mood and/or anhedonia with other key symptoms.",
      "Always hallucinations by definition",
      "Fear of heights exclusively"
    ],
    "correct": 1,
    "correctFeedback": "Depression: enduring mood/anhedonia + accompanying symptoms (§15.7).",
    "wrongFeedback": {
      "0": "Trap: too brief / mixes mania.",
      "2": "Trap: psychosis not required for MDD.",
      "3": "Trap: phobia."
    },
    "mode": "mock"
  },
  {
    "id": "c15-l5-04",
    "chapter": 15,
    "level": 5,
    "section": "§15.8",
    "question": "Family members bring Leo to emergency care after weeks of hearing voices commenting on his actions. He firmly believes a neighbor controls his thoughts, and self-care has declined. Schizophrenia is characterized especially by which features?",
    "options": [
      "Only chronic worry about many topics without psychotic features required.",
      "Delusions/hallucinations and disorganization, often with negative symptoms.",
      "Only alternating mania and depression defining the disorder by themselves.",
      "Only intense fear of public speaking lasting a few minutes before a talk."
    ],
    "correct": 1,
    "correctFeedback": "Schizophrenia: psychosis + disorganization + negative symptoms themes (§15.8).",
    "wrongFeedback": {
      "0": "Trap: GAD-ish.",
      "2": "Trap: bipolar mood cycling.",
      "3": "Trap: social anxiety/phobia."
    },
    "mode": "mock"
  },
  {
    "id": "c15-l5-05",
    "chapter": 15,
    "level": 5,
    "section": "§15.6",
    "question": "Months after a serious car crash, Priya has intrusive memories, avoidance of driving, and hypervigilance. Negative mood changes stay tied to that trauma in follow-up sessions. PTSD requires which elements?",
    "options": [
      "Trauma plus intrusion, avoidance, mood/cognition, and arousal symptoms over time.",
      "Only one unpleasant dream with no other lasting symptom clusters afterward.",
      "Manic spending sprees as the required core feature instead of trauma exposure.",
      "Dissociative identity disorder required as a mandatory co-diagnosis for PTSD."
    ],
    "correct": 0,
    "correctFeedback": "PTSD: trauma + symptom clusters over time (§15.6).",
    "wrongFeedback": {
      "1": "Trap: insufficient.",
      "2": "Trap: bipolar feature.",
      "3": "Trap: DID is separate."
    },
    "mode": "mock"
  },
  {
    "id": "c15-l5-06",
    "chapter": 15,
    "level": 5,
    "section": "§15.3",
    "question": "Diathesis–stress models propose disorders emerge from:",
    "options": [
      "Vulnerability plus stressor interactions",
      "Stress alone with zero vulnerability differences",
      "Genes alone with zero environment",
      "Only bad parenting myths with no biology"
    ],
    "correct": 0,
    "correctFeedback": "Diathesis (predisposition) × stress (§15.3).",
    "wrongFeedback": {
      "1": "Trap: ignores diathesis.",
      "2": "Trap: ignores stress/environment.",
      "3": "Trap: incomplete and biased."
    },
    "mode": "mock"
  },
  {
    "id": "c15-l5-07",
    "chapter": 15,
    "level": 5,
    "section": "§15.11",
    "question": "Antisocial personality disorder emphasizes:",
    "options": [
      "Excessive social anxiety and avoidance of evaluation in everyday groups.",
      "Pervasive disregard for others’ rights with deceit and low remorse patterns.",
      "Only obsessions without any compulsive rituals across many hours each day.",
      "Only elevated mood lasting about one hour after receiving good news once."
    ],
    "correct": 1,
    "correctFeedback": "ASPD: chronic antisocial pattern (§15.11).",
    "wrongFeedback": {
      "0": "Trap: social anxiety.",
      "2": "Trap: OCD spectrum.",
      "3": "Trap: mood episode caricature."
    },
    "mode": "mock"
  },
  {
    "id": "c15-l5-08",
    "chapter": 15,
    "level": 5,
    "section": "§15.4–15.6",
    "question": "Anxiety-disorders workshop stations cover phobia, panic, GAD, and OCD with short client sketches. Teams must mark which disorder–feature matches are correct. Which anxiety-related matches are correct? (Select all that apply.)",
    "options": [
      "Panic disorder: recurrent unexpected panic attacks + concern/change",
      "GAD: persistent excessive worry across domains",
      "OCD: obsessions and/or compulsions that are time-consuming/distressing",
      "Specific phobia: marked fear of a circumscribed stimulus",
      "PTSD: requires mania by definition"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Anxiety/OCD/trauma distinctions (§15.4–15.6).",
    "wrongFeedback": {
      "0": "Correct to select: panic.",
      "1": "Correct to select: GAD.",
      "2": "Correct to select: OCD.",
      "3": "Correct to select: specific phobia.",
      "4": "Trap: PTSD ≠ mania requirement."
    },
    "mode": "mock"
  },
  {
    "id": "c15-l5-09",
    "chapter": 15,
    "level": 5,
    "section": "§15.7–15.8",
    "question": "Which mood/psychosis statements are sound? (Select all that apply.)",
    "options": [
      "Bipolar I involves manic episodes (depression often co-occurs in course).",
      "Persistent depressive patterns differ from a single brief sad day.",
      "Hallucinations are percepts without external stimulus.",
      "Delusions are fixed false beliefs resistant to contrary evidence.",
      "Negative symptoms of schizophrenia include flat affect/avolition themes."
    ],
    "correct": [
      0,
      1,
      2,
      3,
      4
    ],
    "type": "multi",
    "correctFeedback": "All align with chapter clinical descriptions.",
    "wrongFeedback": {
      "0": "Correct to select: bipolar mania.",
      "1": "Correct to select: depression duration/severity matters.",
      "2": "Correct to select: hallucinations.",
      "3": "Correct to select: delusions.",
      "4": "Correct to select: negative symptoms."
    },
    "mode": "mock"
  },
  {
    "id": "c15-l5-10",
    "chapter": 15,
    "level": 5,
    "section": "§15.1–15.3",
    "question": "A case formulation seminar debates DSM labeling, stigma, and diathesis–stress using one intake file. Which classification/etiology claims fit OpenStax framing? (Select all that apply.)",
    "options": [
      "Disorders involve dysfunction, distress/disability themes—not mere uniqueness.",
      "Comorbidity means co-occurrence of disorders.",
      "Biological, psychological, and sociocultural factors can all contribute.",
      "Labeling can carry stigma risks as well as communication benefits.",
      "Hearing voices once while falling asleep always equals schizophrenia."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Definition, comorbidity, biopsychosocial, stigma (§15.1–15.3).",
    "wrongFeedback": {
      "0": "Correct to select: dysfunction/distress framing.",
      "1": "Correct to select: comorbidity.",
      "2": "Correct to select: biopsychosocial.",
      "3": "Correct to select: stigma tradeoffs.",
      "4": "Trap: hypnagogic experiences ≠ automatic diagnosis."
    },
    "mode": "mock"
  },
  {
    "id": "c16-l5-01",
    "chapter": 16,
    "level": 5,
    "section": "§16.1",
    "question": "A history module shows nineteenth-century asylum images focused on custody and isolation. Community recovery is barely visible, prompting discussion of what those institutions emphasized. Historically, asylums often emphasized which priorities?",
    "options": [
      "Community outpatient CBT as the first universal standard",
      "Custodial confinement more than modern evidence-based psychotherapy.",
      "Only human factors ergonomics",
      "Only positive psychology coaching"
    ],
    "correct": 1,
    "correctFeedback": "Early institutional care was often custodial (§16.1).",
    "wrongFeedback": {
      "0": "Trap: modern therapy not historically first-line everywhere.",
      "2": "Trap: I-O human factors.",
      "3": "Trap: well-being coaching ≠ asylum history."
    },
    "mode": "mock"
  },
  {
    "id": "c16-l5-02",
    "chapter": 16,
    "level": 5,
    "section": "§16.2",
    "question": "Therapist Kim helps a client catch “I’m a total failure” thoughts after a B grade. They test the evidence together and generate more balanced alternatives. Cognitive therapy most directly targets which processes?",
    "options": [
      "Only unconscious dream symbols",
      "Maladaptive thoughts/beliefs that maintain distress",
      "Only token economies without cognition",
      "Only antipsychotic receptor blockade as talk therapy"
    ],
    "correct": 1,
    "correctFeedback": "Cognitive therapy: change thinking patterns (§16.2).",
    "wrongFeedback": {
      "0": "Trap: psychoanalytic dream focus.",
      "2": "Trap: pure behavioral contingency systems.",
      "3": "Trap: biomedical drug action ≠ cognitive talk therapy."
    },
    "mode": "mock"
  },
  {
    "id": "c16-l5-03",
    "chapter": 16,
    "level": 5,
    "section": "§16.2",
    "question": "For bridge phobia, a clinician pairs gradual imaginal then in vivo exposure with relaxation. The protocol is presented as systematic desensitization in supervision. Systematic desensitization is primarily a treatment for which problems?",
    "options": [
      "Mania via sleep deprivation",
      "Phobias/anxiety via gradual exposure paired with relaxation.",
      "Schizophrenia negative symptoms via free association only",
      "ASPD via inkblots"
    ],
    "correct": 1,
    "correctFeedback": "Desensitization: graded exposure + relaxation for fear (§16.2).",
    "wrongFeedback": {
      "0": "Trap: wrong problem/method.",
      "2": "Trap: wrong modality for that claim.",
      "3": "Trap: projective ≠ ASPD cure."
    },
    "mode": "mock"
  },
  {
    "id": "c16-l5-04",
    "chapter": 16,
    "level": 5,
    "section": "§16.2",
    "question": "A psychiatrist discusses first-line meds that increase serotonin availability for a client with depression. The client asks what drug class those pills belong to in the textbook. SSRIs are examples of which category?",
    "options": [
      "Humanistic empty-chair techniques",
      "Biomedical / psychopharmacological treatments",
      "Asch conformity pressures",
      "Job analysis tools"
    ],
    "correct": 1,
    "correctFeedback": "Medications are biomedical treatments (§16.2).",
    "wrongFeedback": {
      "0": "Trap: Gestalt/humanistic technique family.",
      "2": "Trap: social influence.",
      "3": "Trap: I-O method."
    },
    "mode": "mock"
  },
  {
    "id": "c16-l5-05",
    "chapter": 16,
    "level": 5,
    "section": "§16.2",
    "question": "In a recorded session, Dr. Hale offers unconditional positive regard, empathy, and genuineness. The client leads topics while the therapist stays non-directive—Rogers’s approach. Rogers’s client-centered therapy emphasizes which conditions?",
    "options": [
      "Unconditional positive regard, empathy, and genuineness",
      "Aversive shock for all clients",
      "Only challenging automatic thoughts with worksheets as the sole tool",
      "Interpreter of latent dream content as mandatory"
    ],
    "correct": 0,
    "correctFeedback": "Humanistic core conditions (§16.2).",
    "wrongFeedback": {
      "1": "Trap: not Rogers.",
      "2": "Trap: more CBT.",
      "3": "Trap: more psychoanalytic."
    },
    "mode": "mock"
  },
  {
    "id": "c16-l5-06",
    "chapter": 16,
    "level": 5,
    "section": "§16.3",
    "question": "Group therapy’s distinctive potential benefit is:",
    "options": [
      "Guaranteed faster SSRI metabolism",
      "Interpersonal learning/support among members with shared concerns",
      "Elimination of confidentiality considerations",
      "Replacement of all individual assessment"
    ],
    "correct": 1,
    "correctFeedback": "Groups offer interpersonal learning and mutual support (§16.3).",
    "wrongFeedback": {
      "0": "Trap: pharmacology nonsense.",
      "2": "Trap: confidentiality still matters.",
      "3": "Trap: overclaim."
    },
    "mode": "mock"
  },
  {
    "id": "c16-l5-07",
    "chapter": 16,
    "level": 5,
    "section": "§16.5",
    "question": "Barriers to treatment commonly include:",
    "options": [
      "Unlimited free access with zero stigma worldwide",
      "Stigma, cost, access, and cultural mistrust.",
      "Only too many therapists per block",
      "IRBs forbidding all therapy"
    ],
    "correct": 1,
    "correctFeedback": "Utilization barriers: stigma/cost/access/culture (§16.5).",
    "wrongFeedback": {
      "0": "Trap: unrealistic utopia.",
      "2": "Trap: opposite of shortage/access issues.",
      "3": "Trap: false."
    },
    "mode": "mock"
  },
  {
    "id": "c16-l5-08",
    "chapter": 16,
    "level": 5,
    "section": "§16.2",
    "question": "A treatment-planning meeting matches CBT, exposure, SSRIs, and humanistic stance to different presenting problems. Which therapy–target matches are reasonable? (Select all that apply.)",
    "options": [
      "CBT: thoughts, behaviors, and emotions interplay",
      "Behavioral therapy: contingencies, exposure, skills",
      "Psychodynamic: unconscious conflicts/patterns",
      "Biomedical: medications/procedures",
      "Humanistic: growth and therapeutic relationship conditions"
    ],
    "correct": [
      0,
      1,
      2,
      3,
      4
    ],
    "type": "multi",
    "correctFeedback": "All are standard modality sketches (§16.2).",
    "wrongFeedback": {
      "0": "Correct to select: CBT.",
      "1": "Correct to select: behavioral.",
      "2": "Correct to select: psychodynamic.",
      "3": "Correct to select: biomedical.",
      "4": "Correct to select: humanistic."
    },
    "mode": "mock"
  },
  {
    "id": "c16-l5-09",
    "chapter": 16,
    "level": 5,
    "section": "§16.2–16.4",
    "question": "Which treatment claims are sound? (Select all that apply.)",
    "options": [
      "Evidence-based practice integrates research, clinical expertise, and client characteristics.",
      "Exposure is central in many anxiety treatments.",
      "Medication can be first-line or adjunct depending on disorder/guidelines.",
      "Substance-use treatment may combine psychosocial and biomedical elements.",
      "One session of any therapy cures every DSM disorder permanently."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "EBP + modality facts; E overclaims (§16.2–16.4).",
    "wrongFeedback": {
      "0": "Correct to select: EBP triad.",
      "1": "Correct to select: exposure.",
      "2": "Correct to select: meds role varies.",
      "3": "Correct to select: combined SUD care.",
      "4": "Trap: magical one-session cure myth."
    },
    "mode": "mock"
  },
  {
    "id": "c16-l5-10",
    "chapter": 16,
    "level": 5,
    "section": "§16.3–16.5",
    "question": "A community mental-health panel discusses family therapy, cultural competence, involuntary care, and stigma. Students must select which utilization statements fit the chapter. Which sociocultural/utilization statements fit? (Select all that apply.)",
    "options": [
      "Family therapy treats the system, not only one identified patient in isolation.",
      "Cultural competence matters for engagement and formulation.",
      "Involuntary treatment raises ethical/legal tradeoffs.",
      "Stigma can deter help-seeking.",
      "Access barriers are purely imaginary in all communities."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "type": "multi",
    "correctFeedback": "Modalities + sociocultural utilization (§16.3–16.5).",
    "wrongFeedback": {
      "0": "Correct to select: family systems focus.",
      "1": "Correct to select: cultural competence.",
      "2": "Correct to select: involuntary care dilemmas.",
      "3": "Correct to select: stigma barrier.",
      "4": "Trap: access barriers are real."
    },
    "mode": "mock"
  }
];
