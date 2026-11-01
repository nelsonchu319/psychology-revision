/**
 * Topic multi-select practice items (5 big topics).
 * Schema: { id, topic, topicLabel, chapters, scenario, statements[{text,correct,explain}], mode, type }
 * Scoring: exact set match (all true selected, no false selected).
 * Each statement explain is a full teaching paragraph shown after Check.
 */
window.PSYCH_TOPIC_MS = [
  {
    "id": "t1-ms-01",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "A wellness startup posts that customers who buy its $199 “neuro-optimization” subscription later report higher life satisfaction than non-buyers. The founder tells investors this proves the app *causes* well-being, citing a survey sent only to paying users (35% response) and a blogger who says psychology is “just common sense anyway.” An intern notes the company also runs a simultaneous sleep-coaching email for subscribers. A board member wants to A/B test a free vs paid group next quarter but refuses random assignment “because VIPs must get the paid tier.”",
    "statements": [
      {
        "text": "The survey design can support a causal claim that the subscription improves life satisfaction because paying users are a naturally occurring treatment group.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A wellness startup posts that customers who buy its $199 “neuro-optimization” subscription later report higher life satisfaction than non-buyers), the claim is not a sound application of random assignment and internal validity. People who endorse this confuse a self-selected correlational comparison with an experiment. Without random assignment and controls, third variables (income, motivation, concurrent sleep coaching) remain. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Nonresponse among surveyed subscribers can bias the estimated association if happier users are more likely to reply.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies survey nonresponse bias to this vignette (A wellness startup posts that customers who buy its $199 “neuro-optimization” subscription later report higher life satisfaction than non-buyers). Selective responding is a classic survey threat: if satisfied customers answer more, the observed link inflates. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Running sleep-coaching emails only for subscribers introduces a confound that rivals the app itself as an explanation for any well-being difference.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies confounds and rival explanations to this vignette (A wellness startup posts that customers who buy its $199 “neuro-optimization” subscription later report higher life satisfaction than non-buyers). A concurrent intervention that covaries with membership blocks clean attribution to the app. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Refusing random assignment for VIP reasons preserves internal validity while still allowing a true experiment on causation.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A wellness startup posts that customers who buy its $199 “neuro-optimization” subscription later report higher life satisfaction than non-buyers), the claim is not a sound application of random assignment and internal validity. Blocking randomization for preferred customers reintroduces selection; that is not a true experiment’s internal-validity advantage. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "If psychology were only common sense, contradictory “obvious” predictions would never appear and controlled methods would be unnecessary—but history shows intuitions often conflict, which is why research designs matter.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies limits of common-sense psychology to this vignette (A wellness startup posts that customers who buy its $199 “neuro-optimization” subscription later report higher life satisfaction than non-buyers). Common-sense claims pull both ways; methods adjudicate. This statement correctly challenges the blogger’s dismissal. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t1-ms-02",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "A school counselor reads that “all behavior is unconscious sexual conflict” and begins interpreting every student’s lateness as Freudian resistance. Meanwhile a classmate argues psychology isn’t a science because therapists use empathy. A research methods teacher asks the class to map perspectives and to design a study of whether a new attendance app reduces lateness, with some students proposing only testimonials from friends who already like the app.",
    "statements": [
      {
        "text": "Contemporary psychology treats Freud’s claim as a complete, testable account that replaces behavioral, cognitive, and biological perspectives for school lateness.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A school counselor reads that “all behavior is unconscious sexual conflict” and begins interpreting every student’s lateness as Freudian resistance), the claim is not a sound application of psychoanalytic ideas in historical context. Freud is historical; modern psychology is multi-perspective. Unfalsifiable blanket sexual-conflict claims are not the standard explanatory toolkit for lateness. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Using empathy in therapy does not by itself remove psychology from science; scientific status hinges more on systematic observation, measurement, and testable claims in research.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (A school counselor reads that “all behavior is unconscious sexual conflict” and begins interpreting every student’s lateness as Freudian resistance). Clinical warmth and scientific methods address different goals; empathy ≠ anti-science. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Testimonials from students who already like the app are weak evidence for efficacy because of selection and expectancy biases.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies anecdotal / selected-testimonial evidence to this vignette (A school counselor reads that “all behavior is unconscious sexual conflict” and begins interpreting every student’s lateness as Freudian resistance). Friends who opted in are not a control comparison. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "A stronger test would assign comparable students to app vs no-app (or alternative support) and track lateness with predefined measures.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies random assignment and internal validity to this vignette (A school counselor reads that “all behavior is unconscious sexual conflict” and begins interpreting every student’s lateness as Freudian resistance). Randomized or otherwise controlled comparisons beat anecdotal endorsement. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Structuralism’s introspection method is the best modern tool for proving the attendance app causes fewer late arrivals.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A school counselor reads that “all behavior is unconscious sexual conflict” and begins interpreting every student’s lateness as Freudian resistance), the claim is not a sound application of correlation-versus-causation limits. Introspection is historical and subjective; causal claims about apps need behavioral outcome designs, not structuralist introspection. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t1-ms-03",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "City hall correlates neighborhood park acreage with lower self-reported stress and announces that building parks *causes* mental health gains. Critics note richer areas have more parks, better clinics, and less crime. A consultant proposes a longitudinal study following families who move, and an aide suggests photographing smiling park users as “qualitative proof.” Another aide wants to reverse the conclusion: stress causes people to avoid parks, so acreage is irrelevant.",
    "statements": [
      {
        "text": "The cross-sectional acreage–stress correlation alone is enough for a causal policy claim that parks reduce stress.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (City hall correlates neighborhood park acreage with lower self-reported stress and announces that building parks *causes* mental health gains), the claim is not a sound application of correlation-versus-causation limits. Correlation ≠ causation; wealth, clinics, and crime are plausible confounds. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Socioeconomic and healthcare differences across neighborhoods are credible third variables that can create a spurious park–stress association.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies correlation-versus-causation limits to this vignette (City hall correlates neighborhood park acreage with lower self-reported stress and announces that building parks *causes* mental health gains). On correlation-versus-causation limits, this statement is right: socioeconomic and healthcare differences across neighborhoods are credible third variables that can create a spurious park–stress association. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "A longitudinal design following movers can help by examining within-person change, though it still needs careful controls for why families move.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (City hall correlates neighborhood park acreage with lower self-reported stress and announces that building parks *causes* mental health gains). Within-person change helps but selection into moving remains. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Photos of smiling visitors are sufficient experimental evidence that acreage causes population-level stress reduction.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (City hall correlates neighborhood park acreage with lower self-reported stress and announces that building parks *causes* mental health gains), the claim is not a sound application of stress and health. On stress and health, this statement goes wrong: it is not the case that photos of smiling visitors are sufficient experimental evidence that acreage causes population-level stress reduction. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Reverse causality (stress reducing park use) is conceptually possible and is one reason a simple correlation cannot settle directionality.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies correlation-versus-causation limits to this vignette (City hall correlates neighborhood park acreage with lower self-reported stress and announces that building parks *causes* mental health gains). On correlation-versus-causation limits, this statement is right: reverse causality (stress reducing park use) is conceptually possible and is one reason a simple correlation cannot settle directionality. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t1-ms-04",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "A hospital IRBs a study comparing two brief anxiety workshops. Researchers plan deception about the study’s full hypothesis to reduce demand characteristics, with a planned debrief. One surgeon says deception is always unethical so the study must be canceled; a nurse says informed consent is unnecessary for staff participants; a resident wants to publish identifiable case vignettes without consent because “science needs stories.”",
    "statements": [
      {
        "text": "IRB review and informed consent norms exist to protect participants even when the topic seems low-risk or participants are employees.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research ethics (IRB, consent, deception, confidentiality) to this vignette (A hospital IRBs a study comparing two brief anxiety workshops). Role as staff does not waive human-subjects protections. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Limited deception can be ethically considered when justified, minimized, and paired with prompt debriefing—but it is not a blank check.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research ethics (IRB, consent, deception, confidentiality) to this vignette (A hospital IRBs a study comparing two brief anxiety workshops). Ethics allows constrained deception with safeguards, not casual lying. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Because workshops teach coping, no consent or debrief is required under any research ethics framework.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A hospital IRBs a study comparing two brief anxiety workshops), the claim is not a sound application of research ethics (IRB, consent, deception, confidentiality). Teaching content doesn’t erase consent/debrief duties when collecting research data. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Publishing identifiable clinical stories without consent violates confidentiality/privacy expectations central to research ethics.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research ethics (IRB, consent, deception, confidentiality) to this vignette (A hospital IRBs a study comparing two brief anxiety workshops). On research ethics (IRB, consent, deception, confidentiality), this statement is right: publishing identifiable clinical stories without consent violates confidentiality/privacy expectations central to research ethics. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Demand characteristics only occur in animal research, so deception about hypotheses is irrelevant in human workshop studies.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A hospital IRBs a study comparing two brief anxiety workshops), the claim is not a sound application of research ethics (IRB, consent, deception, confidentiality). Humans famously show demand characteristics; that’s often why limited deception is discussed. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t1-ms-05",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "A podcast host says Wilhelm Wundt “invented therapy couches,” that functionalists only cared about dream symbols, and that the cognitive revolution made Skinner’s reinforcement obsolete for all applied behavior problems. A student fact-checks with OpenStax-style history: Wundt’s lab introspection, James/functionalism on purpose of mind, behaviorism’s observable learning, and cognition’s return to mental processes—without erasing reinforcement science.",
    "statements": [
      {
        "text": "Wundt is better associated with early experimental psychology laboratories and introspection than with inventing psychoanalytic couches.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies psychoanalytic ideas in historical context to this vignette (A podcast host says Wilhelm Wundt “invented therapy couches,” that functionalists only cared about dream symbols, and that the…). Couch therapy tracks more with psychoanalytic clinical tradition, not Wundt’s lab project. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Functionalism emphasized functions of mind/behavior in adaptation more than exclusive focus on dream symbolism.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies functionalism to this vignette (A podcast host says Wilhelm Wundt “invented therapy couches,” that functionalists only cared about dream symbols, and that the…). On functionalism, this statement is right: functionalism emphasized functions of mind/behavior in adaptation more than exclusive focus on dream symbolism. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "The cognitive revolution renewed scientific study of mental processes; it did not empirically abolish operant reinforcement as a useful analysis of many behaviors.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operant conditioning to this vignette (A podcast host says Wilhelm Wundt “invented therapy couches,” that functionalists only cared about dream symbols, and that the…). Cognitive science complements rather than deletes behavioral principles in applied settings. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Skinnerian reinforcement has zero remaining relevance anywhere after cognitive psychology emerged.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A podcast host says Wilhelm Wundt “invented therapy couches,” that functionalists only cared about dream symbols, and that the…), the claim is not a sound application of operant conditioning. Applied behavior analysis and learning science still use reinforcement extensively. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Saying psychology has a single founder who also created all modern clinical methods is historically accurate.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A podcast host says Wilhelm Wundt “invented therapy couches,” that functionalists only cared about dream symbols, and that the…), the claim is not a sound application of research methods and psychology’s foundations. Psychology’s history is multi-threaded across labs, clinics, and schools of thought. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t1-ms-06",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "An education NGO reports r = .45 between hours of tutoring and exam scores in a volunteer sample. Marketing claims each extra hour *raises* scores by a fixed amount causally. A statistician notes restriction of range (only motivated volunteers) and that tutors also provide snacks and encouragement. Someone proposes splitting volunteers by birth month as a “random” experiment.",
    "statements": [
      {
        "text": "r = .45 shows a positive association but does not by itself prove each hour causally increments scores by a fixed amount.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies correlation-versus-causation limits to this vignette (An education NGO reports r = .45 between hours of tutoring and exam scores in a volunteer sample). On correlation-versus-causation limits, this statement is right: r = .45 shows a positive association but does not by itself prove each hour causally increments scores by a fixed amount. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Volunteer-only samples can distort estimates via selection and restricted range relative to all students.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (An education NGO reports r = .45 between hours of tutoring and exam scores in a volunteer sample). Who enters the sample matters for generalizability and observed correlations. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Snacks and encouragement bundled with tutoring are potential confounds for attributing gains solely to instructional hours.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies confounds and rival explanations to this vignette (An education NGO reports r = .45 between hours of tutoring and exam scores in a volunteer sample). On confounds and rival explanations, this statement is right: snacks and encouragement bundled with tutoring are potential confounds for attributing gains solely to instructional hours. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Birth-month splitting of volunteers is genuine random assignment of the tutoring manipulation.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (An education NGO reports r = .45 between hours of tutoring and exam scores in a volunteer sample), the claim is not a sound application of random assignment and internal validity. Birth month doesn’t randomly assign the treatment; it’s not a randomized experiment of tutoring. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "If r is positive, third variables are mathematically impossible.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (An education NGO reports r = .45 between hours of tutoring and exam scores in a volunteer sample), the claim is not a sound application of confounds and rival explanations. On confounds and rival explanations, this statement goes wrong: it is not the case that if r is positive, third variables are mathematically impossible. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t1-ms-07",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "A clinical team wants to know whether a new mindfulness audio reduces ICU nurse burnout. They propose: (A) a case study of one nurse’s diary, (B) a survey correlating minutes listened with burnout scores, (C) randomly assigning units to audio vs matched quiet break, measuring burnout with a validated scale. Budget allows only one primary design for a causal claim to the hospital board.",
    "statements": [
      {
        "text": "If the board needs causal evidence about the audio’s effect, the randomized unit assignment (C) is the strongest of the three options listed.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies random assignment and internal validity to this vignette (A clinical team wants to know whether a new mindfulness audio reduces ICU nurse burnout). On random assignment and internal validity, this statement is right: if the board needs causal evidence about the audio’s effect, the randomized unit assignment (C) is the strongest of the three options listed. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "A single diary case study (A) can vividly illustrate experience but cannot securely establish general causal efficacy for the workforce.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (A clinical team wants to know whether a new mindfulness audio reduces ICU nurse burnout). Case studies are rich but limited for causal generalization. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "The correlational survey (B) alone is equally strong as (C) for proving the audio causes burnout reduction.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A clinical team wants to know whether a new mindfulness audio reduces ICU nurse burnout), the claim is not a sound application of random assignment and internal validity. On random assignment and internal validity, this statement goes wrong: it is not the case that the correlational survey (B) alone is equally strong as (C) for proving the audio causes burnout reduction. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Validated outcome measures help with construct validity regardless of design, but they do not convert a correlation into an experiment.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies correlation-versus-causation limits to this vignette (A clinical team wants to know whether a new mindfulness audio reduces ICU nurse burnout). On correlation-versus-causation limits, this statement is right: validated outcome measures help with construct validity regardless of design, but they do not convert a correlation into an experiment. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Quiet-break controls are useless because placebo and time-off effects never threaten wellness-intervention conclusions.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A clinical team wants to know whether a new mindfulness audio reduces ICU nurse burnout), the claim is not a sound application of expectancy, placebo, and blinding issues. Nonspecific break/rest effects are exactly why controls matter. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t1-ms-08",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "During a methods debate, Student A says operational definitions make concepts too “narrow” so we should never define variables. Student B says experimenter bias and placebo effects only matter in drug trials, not psychology. Student C wants double-blind procedures for a study of praise type on puzzle persistence. The TA asks which claims survive scrutiny.",
    "statements": [
      {
        "text": "Operational definitions specify how constructs are measured or manipulated so claims can be tested and replicated—even if they feel narrow.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operational definitions to this vignette (During a methods debate, Student A says operational definitions make concepts too “narrow” so we should never define variables). On operational definitions, this statement is right: operational definitions specify how constructs are measured or manipulated so claims can be tested and replicated—even if they feel narrow. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Refusing to define variables at all protects scientific rigor better than imperfect operationalizations.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (During a methods debate, Student A says operational definitions make concepts too “narrow” so we should never define variables), the claim is not a sound application of operational definitions. On operational definitions, this statement goes wrong: it is not the case that refusing to define variables at all protects scientific rigor better than imperfect operationalizations. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Experimenter expectancy and placebo-like expectancy effects can bias psychological studies, not only pharmacology.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies expectancy, placebo, and blinding issues to this vignette (During a methods debate, Student A says operational definitions make concepts too “narrow” so we should never define variables). On expectancy, placebo, and blinding issues, this statement is right: experimenter expectancy and placebo-like expectancy effects can bias psychological studies, not only pharmacology. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Double-blind designs can reduce some bias when neither participant nor interacting researcher knows condition assignment.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies expectancy, placebo, and blinding issues to this vignette (During a methods debate, Student A says operational definitions make concepts too “narrow” so we should never define variables). That’s the double-blind logic Student C is reaching for. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "If a study is about praise, expectancy effects are impossible because praise is not a pill.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (During a methods debate, Student A says operational definitions make concepts too “narrow” so we should never define variables), the claim is not a sound application of expectancy, placebo, and blinding issues. Social interventions still carry expectancy and demand risks. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t1-ms-09",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "A journalist writes that a psychology lab’s failed replication means “the whole field is fake,” while quietly ignoring that the original effect was small, the new study was underpowered, and operational details differed. A scientist explains replication as a continuum and notes pre-registration and open data as reforms. The comments section claims peer review guarantees perpetual truth.",
    "statements": [
      {
        "text": "A single failed replication can have many explanations (power, moderation, fidelity); it does not automatically license “whole field fake.”",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (A journalist writes that a psychology lab’s failed replication means “the whole field is fake,” while quietly ignoring that the…). Replication is informative but not a binary field funeral. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Underpowered replications can miss real effects; power matters for interpreting nulls.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (A journalist writes that a psychology lab’s failed replication means “the whole field is fake,” while quietly ignoring that the…). On research methods and psychology’s foundations, this statement is right: underpowered replications can miss real effects; power matters for interpreting nulls. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Changed operational details can mean the replication tests a related but not identical claim.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operational definitions to this vignette (A journalist writes that a psychology lab’s failed replication means “the whole field is fake,” while quietly ignoring that the…). On operational definitions, this statement is right: changed operational details can mean the replication tests a related but not identical claim. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Peer review guarantees that published findings remain true forever without further testing.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A journalist writes that a psychology lab’s failed replication means “the whole field is fake,” while quietly ignoring that the…), the claim is not a sound application of sleep and consciousness. Peer review is a filter, not eternal verification. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Open science practices like pre-registration can reduce some questionable research practices, though they don’t magically end all error.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (A journalist writes that a psychology lab’s failed replication means “the whole field is fake,” while quietly ignoring that the…). On research methods and psychology’s foundations, this statement is right: open science practices like pre-registration can reduce some questionable research practices, though they don’t magically end all error. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t1-ms-10",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "A university requires every psych major to complete a methods module after students confuse independent/dependent variables on a midterm: they labeled “hours of sleep” as DV when researchers manipulated sleep opportunity and measured reaction time. Others called a naturalistic observation of cafeteria seating an experiment because “they watched carefully.”",
    "statements": [
      {
        "text": "In the sleep study described, sleep opportunity is the independent variable and reaction time is a dependent variable.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (A university requires every psych major to complete a methods module after students confuse independent/dependent variables on a…). On sleep and consciousness, this statement is right: in the sleep study described, sleep opportunity is the independent variable and reaction time is a dependent variable. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Careful observation alone turns naturalistic cafeteria watching into a true experiment with random assignment.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A university requires every psych major to complete a methods module after students confuse independent/dependent variables on a…), the claim is not a sound application of random assignment and internal validity. Experiments require manipulation (typically) and control features—not merely careful looking. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Confusing IV/DV undermines students’ ability to interpret causal graphs and method sections.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (A university requires every psych major to complete a methods module after students confuse independent/dependent variables on a…). On research methods and psychology’s foundations, this statement is right: confusing IV/DV undermines students’ ability to interpret causal graphs and method sections. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Naturalistic observation can be valuable for description even when it is not experimental.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (A university requires every psych major to complete a methods module after students confuse independent/dependent variables on a…). On research methods and psychology’s foundations, this statement is right: naturalistic observation can be valuable for description even when it is not experimental. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Dependent variables are always manipulated by the experimenter while independent variables are only measured.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A university requires every psych major to complete a methods module after students confuse independent/dependent variables on a…), the claim is not a sound application of research methods and psychology’s foundations. On research methods and psychology’s foundations, this statement goes wrong: it is not the case that dependent variables are always manipulated by the experimenter while independent variables are only measured. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t1-ms-11",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "A marketer claims: every smile in an ad is an operational definition of happiness; a correlational dashboard proves causation; random assignment is unethical always; placebos never affect psychology studies; peer review makes replication unnecessary. A methods instructor asks students to evaluate each slogan.",
    "statements": [
      {
        "text": "Every smile in an ad is automatically a valid operational definition of happiness for scientific claims.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A marketer claims: every smile in an ad is an operational definition of happiness; a correlational dashboard proves causation;…), the claim is not a sound application of operational definitions. Operations must fit the construct and study goals; ad smiles are not automatically valid happiness measures. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "A correlational dashboard alone proves causation of purchase by ad exposure.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A marketer claims: every smile in an ad is an operational definition of happiness; a correlational dashboard proves causation;…), the claim is not a sound application of correlation-versus-causation limits. On correlation-versus-causation limits, this statement goes wrong: it is not the case that a correlational dashboard alone proves causation of purchase by ad exposure. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Random assignment is always unethical in all human research contexts, so experiments are impossible.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A marketer claims: every smile in an ad is an operational definition of happiness; a correlational dashboard proves causation;…), the claim is not a sound application of random assignment and internal validity. Many experiments randomize ethically with consent; blanket ban is false. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Placebo/expectancy effects never appear in psychology—only in drug trials.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A marketer claims: every smile in an ad is an operational definition of happiness; a correlational dashboard proves causation;…), the claim is not a sound application of expectancy, placebo, and blinding issues. On expectancy, placebo, and blinding issues, this statement goes wrong: it is not the case that placebo/expectancy effects never appear in psychology—only in drug trials. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Peer review removes any need for replication forever.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A marketer claims: every smile in an ad is an operational definition of happiness; a correlational dashboard proves causation;…), the claim is not a sound application of sleep and consciousness. On sleep and consciousness, this statement goes wrong: it is not the case that peer review removes any need for replication forever. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t1-ms-12",
    "topic": 1,
    "topicLabel": "Foundations & Methods",
    "chapters": [
      1,
      2
    ],
    "scenario": "After tutoring, a methods lab correctly notes: hypotheses should be testable; IVs are manipulated when possible; DVs are measured; confounds threaten internal validity; representative sampling supports generalization.",
    "statements": [
      {
        "text": "Testable hypotheses are central to empirical psychology.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (After tutoring, a methods lab correctly notes: hypotheses should be testable; IVs are manipulated when possible; DVs are measured…). On research methods and psychology’s foundations, this statement is right: testable hypotheses are central to empirical psychology. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "In experiments, independent variables are manipulated (when the design is experimental).",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (After tutoring, a methods lab correctly notes: hypotheses should be testable; IVs are manipulated when possible; DVs are measured…). On research methods and psychology’s foundations, this statement is right: in experiments, independent variables are manipulated (when the design is experimental). Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Dependent variables are measured as outcomes.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (After tutoring, a methods lab correctly notes: hypotheses should be testable; IVs are manipulated when possible; DVs are measured…). On research methods and psychology’s foundations, this statement is right: dependent variables are measured as outcomes. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Confounds threaten internal validity of causal claims.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies random assignment and internal validity to this vignette (After tutoring, a methods lab correctly notes: hypotheses should be testable; IVs are manipulated when possible; DVs are measured…). On random assignment and internal validity, this statement is right: confounds threaten internal validity of causal claims. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "More representative sampling generally supports broader generalization (external validity concerns).",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies research methods and psychology’s foundations to this vignette (After tutoring, a methods lab correctly notes: hypotheses should be testable; IVs are manipulated when possible; DVs are measured…). On research methods and psychology’s foundations, this statement is right: more representative sampling generally supports broader generalization (external validity concerns). Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t2-ms-01",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "After a concussion clinic visit, Maya hears three takes: (1) “neurons touch and electricity jumps like wires,” (2) “her mood dip is only hormones from the pituitary painting the cortex,” (3) “sleepiness means her RAS is offline so absolute thresholds for sound became photographic.” A biopsych tutor redraws synapse, action potential, endocrine slower messaging, and sensory threshold concepts.",
    "statements": [
      {
        "text": "Neurons typically communicate across synapses via chemical neurotransmitters rather than literal wire-to-wire touching as the clinic's first take claimed.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biological / neural mechanisms to this vignette (After a concussion clinic visit, Maya hears three takes: (1) “neurons touch and electricity jumps like wires,” (2) “her mood dip…). Synaptic chemical transmission is the standard picture; the wire metaphor misleads. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Endocrine signals can influence mood, but a monocausal “pituitary paints the cortex” story is too thin for a post-concussion mood dip.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biological / neural mechanisms to this vignette (After a concussion clinic visit, Maya hears three takes: (1) “neurons touch and electricity jumps like wires,” (2) “her mood dip…). On biological / neural mechanisms, this statement is right: endocrine signals can influence mood, but a monocausal “pituitary paints the cortex” story is too thin for a post-concussion mood dip. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Sleepiness from arousal-network disruption expands iconic sensory memory so absolute threshold becomes photographic for hours.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (After a concussion clinic visit, Maya hears three takes: (1) “neurons touch and electricity jumps like wires,” (2) “her mood dip…), the claim is not a sound application of sleep and consciousness. Lower arousal does not unlock unlimited sensory storage or photographic thresholds. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Absolute threshold means she now consciously stores every photon as a permanent episodic memory of the clinic visit.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (After a concussion clinic visit, Maya hears three takes: (1) “neurons touch and electricity jumps like wires,” (2) “her mood dip…), the claim is not a sound application of memory processes. On memory processes, this statement goes wrong: it is not the case that absolute threshold means she now consciously stores every photon as a permanent episodic memory of the clinic visit. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Action potentials grow stronger without limit as they travel axons, which is why concussion recovery is guaranteed in milliseconds.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (After a concussion clinic visit, Maya hears three takes: (1) “neurons touch and electricity jumps like wires,” (2) “her mood dip…), the claim is not a sound application of biological / neural mechanisms. Action potentials are all-or-none regenerations, not endlessly amplifying; recovery isn’t millisecond-guaranteed. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t2-ms-02",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "Night-shift workers drink espresso at 4 a.m., doomscroll bright phones in bed, and still feel “wired but tired.” One claims caffeine permanently stores adenosine receptors in REM only; another says bright light can’t affect circadian timing because vision is only cones for color. A colleague micro-sleeps at the wheel yet denies impairment.",
    "statements": [
      {
        "text": "Caffeine’s alerting effects relate in part to adenosine antagonism; it does not permanently store adenosine receptors “in REM only.”",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (Night-shift workers drink espresso at 4 a.m., doomscroll bright phones in bed, and still feel “wired but tired.” One claims…). The REM-only permanent storage claim is garbled; adenosine antagonism is the relevant teaching point. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Bright phone light at night cannot affect circadian timing because circadian photoreception only names daytime colors via cones.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Night-shift workers drink espresso at 4 a.m., doomscroll bright phones in bed, and still feel “wired but tired.” One claims…), the claim is not a sound application of sleep and consciousness. Non-image-forming pathways can shift circadian timing; the daytime-cones-only claim is false. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "If workers feel subjectively alert after espresso, micro-sleep risk while driving is scientifically impossible.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Night-shift workers drink espresso at 4 a.m., doomscroll bright phones in bed, and still feel “wired but tired.” One claims…), the claim is not a sound application of sleep and consciousness. Subjective confidence ≠ objective alertness; sleep debt still impairs. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "REM rebound after deprivation means you can safely skip nightly sleep whenever espresso is available.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Night-shift workers drink espresso at 4 a.m., doomscroll bright phones in bed, and still feel “wired but tired.” One claims…), the claim is not a sound application of sleep and consciousness. Stimulants don’t erase sleep need or make deprivation safe. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Homeostatic sleep pressure can be deleted forever by a single 4 a.m. espresso, so the two-process model is obsolete.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Night-shift workers drink espresso at 4 a.m., doomscroll bright phones in bed, and still feel “wired but tired.” One claims…), the claim is not a sound application of sleep and consciousness. Espresso does not delete homeostatic pressure; circadian + homeostatic processes still apply. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t2-ms-03",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "In a sensation lab, Ken detects a quiet tone more often when paid for hits (liberal criterion) and racks up false alarms. Lea says he “lowered his absolute threshold permanently.” Omar says Gestalt closure made the tone objectively louder. A TA introduces signal detection: d′ vs bias.",
    "statements": [
      {
        "text": "Payoff-driven liberal criteria can raise hits and false alarms without necessarily changing sensitivity (d′).",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies motivation and emotion to this vignette (In a sensation lab, Ken detects a quiet tone more often when paid for hits (liberal criterion) and racks up false alarms). On motivation and emotion, this statement is right: payoff-driven liberal criteria can raise hits and false alarms without necessarily changing sensitivity (d′). Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Lea’s claim that incentives permanently rewired absolute threshold as a sensory hardware constant mismarks a decision-criterion shift.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sensation and perception to this vignette (In a sensation lab, Ken detects a quiet tone more often when paid for hits (liberal criterion) and racks up false alarms). On sensation and perception, this statement is right: lea’s claim that incentives permanently rewired absolute threshold as a sensory hardware constant mismarks a decision-criterion shift. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Gestalt closure can organize perception of incomplete figures but does not literally increase the physical decibel level of the tone in the apparatus.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sensation and perception to this vignette (In a sensation lab, Ken detects a quiet tone more often when paid for hits (liberal criterion) and racks up false alarms). On sensation and perception, this statement is right: gestalt closure can organize perception of incomplete figures but does not literally increase the physical decibel level of the tone in the apparatus. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Signal detection theory is irrelevant to psychology because thresholds are always fixed intensities with zero false alarms by definition.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (In a sensation lab, Ken detects a quiet tone more often when paid for hits (liberal criterion) and racks up false alarms), the claim is not a sound application of sensation and perception. SDT was developed precisely because false alarms and bias matter. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "If Ken’s d′ is unchanged, calling his performance “better hearing” is misleading; he may simply be saying “yes” more.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (In a sensation lab, Ken detects a quiet tone more often when paid for hits (liberal criterion) and racks up false alarms). Liberal bias looks like more detections including false ones. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t2-ms-04",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "A stroke survivor points toward moving lights he denies seeing (blindsight-like). A relative concludes “eyes are fine so consciousness is faking.” Another says neuromuscular junction dopamine explains conscious sight. A sensory neuroscience nurse distinguishes retina, visual cortex, and residual pathways.",
    "statements": [
      {
        "text": "Intact eyes do not guarantee conscious visual report if cortical visual processing is damaged.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (A stroke survivor points toward moving lights he denies seeing (blindsight-like)). On biopsychology, consciousness, or sensation/perception, this statement is right: intact eyes do not guarantee conscious visual report if cortical visual processing is damaged. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Blindsight-like dissociations show some visually guided behavior can occur without normal conscious seeing.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (A stroke survivor points toward moving lights he denies seeing (blindsight-like)). On biopsychology, consciousness, or sensation/perception, this statement is right: blindsight-like dissociations show some visually guided behavior can occur without normal conscious seeing. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Dopamine at the neuromuscular junction explains conscious visual experience of lights.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A stroke survivor points toward moving lights he denies seeing (blindsight-like)), the claim is not a sound application of biopsychology, consciousness, or sensation/perception. NMJ chemistry is about muscle activation, not visual awareness. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Primary visual cortex damage can disrupt conscious vision even when subcortical routes support limited responding.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (A stroke survivor points toward moving lights he denies seeing (blindsight-like)). On biopsychology, consciousness, or sensation/perception, this statement is right: primary visual cortex damage can disrupt conscious vision even when subcortical routes support limited responding. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "If someone denies seeing, all visually guided pointing must be fraudulent acting.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A stroke survivor points toward moving lights he denies seeing (blindsight-like)), the claim is not a sound application of biopsychology, consciousness, or sensation/perception. On biopsychology, consciousness, or sensation/perception, this statement goes wrong: it is not the case that if someone denies seeing, all visually guided pointing must be fraudulent acting. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t2-ms-05",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "At a loud concert, Priya’s pupils and heart race (sympathetic), later she feels drained. A friend says sympathetic and parasympathetic branches always fire at maximum together. Another says only the central nervous system matters for stress, so peripheral nerves are irrelevant. Someone attributes her ear ringing solely to “top-down Gestalt” ignoring intense sound exposure.",
    "statements": [
      {
        "text": "Sympathetic activation fits fight-or-flight style arousal during the concert; later recovery often involves parasympathetic rebalancing—not perpetual dual-max firing.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (At a loud concert, Priya’s pupils and heart race (sympathetic), later she feels drained). ANS branches are often opposing/complementary, not locked at dual max. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "The peripheral nervous system carries critical traffic; saying only CNS matters for stress responding is incomplete.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies stress and health to this vignette (At a loud concert, Priya’s pupils and heart race (sympathetic), later she feels drained). On stress and health, this statement is right: the peripheral nervous system carries critical traffic; saying only CNS matters for stress responding is incomplete. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Intense sound exposure is a biologically plausible contributor to tinnitus-like ringing; dismissing it as pure Gestalt top-down is risky.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sensation and perception to this vignette (At a loud concert, Priya’s pupils and heart race (sympathetic), later she feels drained). On sensation and perception, this statement is right: intense sound exposure is a biologically plausible contributor to tinnitus-like ringing; dismissing it as pure Gestalt top-down is risky. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Sympathetic and parasympathetic systems are identical to the endocrine system’s glands and ducts.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (At a loud concert, Priya’s pupils and heart race (sympathetic), later she feels drained), the claim is not a sound application of biopsychology, consciousness, or sensation/perception. On biopsychology, consciousness, or sensation/perception, this statement goes wrong: it is not the case that sympathetic and parasympathetic systems are identical to the endocrine system’s glands and ducts. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Bottom-up sensory intensity and top-down interpretation can jointly shape experience; extreme loudness still warrants hearing-health caution.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (At a loud concert, Priya’s pupils and heart race (sympathetic), later she feels drained). On sleep and consciousness, this statement is right: bottom-up sensory intensity and top-down interpretation can jointly shape experience; extreme loudness still warrants hearing-health caution. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t2-ms-06",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "A dorm debates psychoactive drugs: one student calls alcohol a stimulant because it makes shy people talkative; another says opioids and caffeine share identical receptor actions; a third claims hallucinogens only affect the spinal cord. Someone sleeping off a binge is told “you can’t have REM rebound later because alcohol improves sleep architecture.”",
    "statements": [
      {
        "text": "Alcohol is generally classed as a depressant; talkativeness can reflect loosened inhibition, not stimulant classification.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies psychoactive drugs to this vignette (A dorm debates psychoactive drugs: one student calls alcohol a stimulant because it makes shy people talkative; another says…). On psychoactive drugs, this statement is right: alcohol is generally classed as a depressant; talkativeness can reflect loosened inhibition, not stimulant classification. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Different drug classes act on different neurotransmitter systems; opioids and caffeine are not identical in receptor action.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biological / neural mechanisms to this vignette (A dorm debates psychoactive drugs: one student calls alcohol a stimulant because it makes shy people talkative; another says…). On biological / neural mechanisms, this statement is right: different drug classes act on different neurotransmitter systems; opioids and caffeine are not identical in receptor action. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Hallucinogens primarily alter brain synaptic signaling related to perception/cognition—not “only spinal cord.”",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies psychoactive drugs to this vignette (A dorm debates psychoactive drugs: one student calls alcohol a stimulant because it makes shy people talkative; another says…). On psychoactive drugs, this statement is right: hallucinogens primarily alter brain synaptic signaling related to perception/cognition—not “only spinal cord.”. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Alcohol often disrupts normal sleep architecture; rebound phenomena can appear as use patterns change—so “alcohol improves architecture, no rebound” is misleading.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (A dorm debates psychoactive drugs: one student calls alcohol a stimulant because it makes shy people talkative; another says…). On sleep and consciousness, this statement is right: alcohol often disrupts normal sleep architecture; rebound phenomena can appear as use patterns change—so “alcohol improves architecture, no rebound” is misleading. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Because alcohol increases social talk, it must raise dopamine at the neuromuscular junction to create vocabulary.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A dorm debates psychoactive drugs: one student calls alcohol a stimulant because it makes shy people talkative; another says…), the claim is not a sound application of biopsychology, consciousness, or sensation/perception. NMJ story is irrelevant to intoxication’s social disinhibition. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t2-ms-07",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "An artist with monocular depth cues in a painting fools viewers into depth; a critic says binocular disparity is required for any depth perception. Separately, a patient with conductive hearing loss struggles in noise; a classmate says place theory on the basilar membrane means hearing loss must be “only psychological.” A Gestalt demo of figure-ground flips; a student claims attention cannot affect perception.",
    "statements": [
      {
        "text": "Monocular cues can support depth perception in paintings even without binocular disparity.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sensation and perception to this vignette (An artist with monocular depth cues in a painting fools viewers into depth; a critic says binocular disparity is required for any depth perception). On sensation and perception, this statement is right: monocular cues can support depth perception in paintings even without binocular disparity. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Binocular disparity is important in real scenes but not the sole possible depth cue.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (An artist with monocular depth cues in a painting fools viewers into depth; a critic says binocular disparity is required for any depth perception). On biopsychology, consciousness, or sensation/perception, this statement is right: binocular disparity is important in real scenes but not the sole possible depth cue. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Conductive hearing problems are physical transmission issues—not “only psychological” because place theory exists.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (An artist with monocular depth cues in a painting fools viewers into depth; a critic says binocular disparity is required for any depth perception). On biopsychology, consciousness, or sensation/perception, this statement is right: conductive hearing problems are physical transmission issues—not “only psychological” because place theory exists. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Figure–ground organization illustrates constructive perception; attention can modulate what becomes figure.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sensation and perception to this vignette (An artist with monocular depth cues in a painting fools viewers into depth; a critic says binocular disparity is required for any depth perception). On sensation and perception, this statement is right: figure–ground organization illustrates constructive perception; attention can modulate what becomes figure. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Attention never influences perception; sensory receptors alone determine all organized experience without top-down factors.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (An artist with monocular depth cues in a painting fools viewers into depth; a critic says binocular disparity is required for any depth perception), the claim is not a sound application of sensation and perception. On sensation and perception, this statement goes wrong: it is not the case that attention never influences perception; sensory receptors alone determine all organized experience without top-down factors. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t2-ms-08",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "During hypnosis for procedural anxiety, a patient still reports pain but less distress. A skeptic says hypnosis equals stage mind-control that deletes nociceptors. A nurse frames dissociation and focused attention; an anesthesiologist notes hypnosis isn’t a substitute for indicated anesthesia in surgery. Meditation users nearby claim they stopped needing sleep.",
    "statements": [
      {
        "text": "Clinical hypnosis accounts often emphasize focused attention/dissociation altering experience—not literal deletion of nociceptors.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (During hypnosis for procedural anxiety, a patient still reports pain but less distress). On biopsychology, consciousness, or sensation/perception, this statement is right: clinical hypnosis accounts often emphasize focused attention/dissociation altering experience—not literal deletion of nociceptors. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Stage show tropes of total mind-control poorly represent ethical clinical hypnosis practice.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (During hypnosis for procedural anxiety, a patient still reports pain but less distress). On judgment heuristics and biases, this statement is right: stage show tropes of total mind-control poorly represent ethical clinical hypnosis practice. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Hypnosis is not an automatic replacement for medically indicated anesthesia.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (During hypnosis for procedural anxiety, a patient still reports pain but less distress). On biopsychology, consciousness, or sensation/perception, this statement is right: hypnosis is not an automatic replacement for medically indicated anesthesia. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Meditation practice does not scientifically license never sleeping again.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (During hypnosis for procedural anxiety, a patient still reports pain but less distress). On sleep and consciousness, this statement is right: meditation practice does not scientifically license never sleeping again. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "If distress drops under hypnosis, pain pathways and nervous system activity are proven completely offline forever.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (During hypnosis for procedural anxiety, a patient still reports pain but less distress), the claim is not a sound application of stress and health. On stress and health, this statement goes wrong: it is not the case that if distress drops under hypnosis, pain pathways and nervous system activity are proven completely offline forever. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t2-ms-09",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "A genetics article on heritability of sleep duration is misread as “genes 100% fix my insomnia, environment zero.” A twin-study student clarifies heritability is population variance, not personal destiny. Separately, a bio psych myth claims left-hemisphere people can’t feel emotion because amygdalae are only right-sided decorative tissue.",
    "statements": [
      {
        "text": "Heritability estimates describe variance in a population/context—not a sealed personal percentage that zeroes environment.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (A genetics article on heritability of sleep duration is misread as “genes 100% fix my insomnia, environment zero.” A twin-study…). On biopsychology, consciousness, or sensation/perception, this statement is right: heritability estimates describe variance in a population/context—not a sealed personal percentage that zeroes environment. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Insomnia interventions targeting behavior/environment can still matter even when traits show heritability.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (A genetics article on heritability of sleep duration is misread as “genes 100% fix my insomnia, environment zero.” A twin-study…). On sleep and consciousness, this statement is right: insomnia interventions targeting behavior/environment can still matter even when traits show heritability. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Emotion involves distributed neural systems; the “left-brained people have no amygdala emotion” story is a mythic oversimplification.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biological / neural mechanisms to this vignette (A genetics article on heritability of sleep duration is misread as “genes 100% fix my insomnia, environment zero.” A twin-study…). On biological / neural mechanisms, this statement is right: emotion involves distributed neural systems; the “left-brained people have no amygdala emotion” story is a mythic oversimplification. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "If heritability is nonzero, environmental sleep hygiene is logically impossible to help anyone.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A genetics article on heritability of sleep duration is misread as “genes 100% fix my insomnia, environment zero.” A twin-study…), the claim is not a sound application of sleep and consciousness. On sleep and consciousness, this statement goes wrong: it is not the case that if heritability is nonzero, environmental sleep hygiene is logically impossible to help anyone. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Epigenetic and experiential factors can influence how genetic predispositions are expressed in health behaviors.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (A genetics article on heritability of sleep duration is misread as “genes 100% fix my insomnia, environment zero.” A twin-study…). On biopsychology, consciousness, or sensation/perception, this statement is right: epigenetic and experiential factors can influence how genetic predispositions are expressed in health behaviors. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t2-ms-10",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "Lab partners argue about rods/cones after leaving a bright lecture hall into a dark theater. One insists cones alone handle all night vision; another says dark adaptation is purely psychological expectancy. A third confuses transduction with perception, claiming the retina “understands Shakespearean metaphors.”",
    "statements": [
      {
        "text": "Rods contribute heavily to vision in low light; cones dominate bright, detailed, color vision.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (Lab partners argue about rods/cones after leaving a bright lecture hall into a dark theater). On biopsychology, consciousness, or sensation/perception, this statement is right: rods contribute heavily to vision in low light; cones dominate bright, detailed, color vision. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Dark adaptation has substantial peripheral physiological components (photopigment recovery, etc.), not expectancy alone.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies expectancy, placebo, and blinding issues to this vignette (Lab partners argue about rods/cones after leaving a bright lecture hall into a dark theater). On expectancy, placebo, and blinding issues, this statement is right: dark adaptation has substantial peripheral physiological components (photopigment recovery, etc.), not expectancy alone. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Transduction converts physical stimulus energy into neural signals; it is not semantic literary comprehension in the retina.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sensation and perception to this vignette (Lab partners argue about rods/cones after leaving a bright lecture hall into a dark theater). On sensation and perception, this statement is right: transduction converts physical stimulus energy into neural signals; it is not semantic literary comprehension in the retina. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Expectancy and attention can influence reports, but they don’t replace photoreceptor physiology in explaining dark adaptation curves.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies expectancy, placebo, and blinding issues to this vignette (Lab partners argue about rods/cones after leaving a bright lecture hall into a dark theater). On expectancy, placebo, and blinding issues, this statement is right: expectancy and attention can influence reports, but they don’t replace photoreceptor physiology in explaining dark adaptation curves. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Cones exclusively mediate all scotopic night vision while rods only detect color hue.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Lab partners argue about rods/cones after leaving a bright lecture hall into a dark theater), the claim is not a sound application of biopsychology, consciousness, or sensation/perception. On biopsychology, consciousness, or sensation/perception, this statement goes wrong: it is not the case that cones exclusively mediate all scotopic night vision while rods only detect color hue. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t2-ms-11",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "A viral thread insists: coffee permanently deletes the need for sleep; cones see best in pitch dark; sympathetic nerves secrete insulin as their primary job; absolute threshold means noticing every photon consciously; blindsight proves eyes are unnecessary for vision forever in everyone.",
    "statements": [
      {
        "text": "Coffee permanently deletes the biological need for sleep.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A viral thread insists: coffee permanently deletes the need for sleep; cones see best in pitch dark; sympathetic nerves secrete…), the claim is not a sound application of sleep and consciousness. Caffeine masks sleepiness; it doesn’t erase sleep need. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Cones mediate the best vision in pitch darkness compared with rods.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A viral thread insists: coffee permanently deletes the need for sleep; cones see best in pitch dark; sympathetic nerves secrete…), the claim is not a sound application of biopsychology, consciousness, or sensation/perception. On biopsychology, consciousness, or sensation/perception, this statement goes wrong: it is not the case that cones mediate the best vision in pitch darkness compared with rods. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Sympathetic nerves’ primary job is secreting insulin.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A viral thread insists: coffee permanently deletes the need for sleep; cones see best in pitch dark; sympathetic nerves secrete…), the claim is not a sound application of biopsychology, consciousness, or sensation/perception. Insulin is pancreatic endocrine; SNS is autonomic arousal circuitry. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Absolute threshold means conscious detection of every single photon every time.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A viral thread insists: coffee permanently deletes the need for sleep; cones see best in pitch dark; sympathetic nerves secrete…), the claim is not a sound application of sensation and perception. Thresholds are probabilistic, not perfect photon counters for experience. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Blindsight cases prove that literally everyone can see without eyes forever.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A viral thread insists: coffee permanently deletes the need for sleep; cones see best in pitch dark; sympathetic nerves secrete…), the claim is not a sound application of biopsychology, consciousness, or sensation/perception. Blindsight concerns brain pathway dissociations given eyes/retina input—not eyeless vision for all. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t2-ms-12",
    "topic": 2,
    "topicLabel": "Biology & Consciousness",
    "chapters": [
      3,
      4,
      5
    ],
    "scenario": "A neuro clinic correctly teaches: action potentials are all-or-none along the axon; photoreceptor rods dominate scotopic vision; circadian timing involves the SCN; selective attention filters limited capacity streams; top-down expectations can bias ambiguous percepts. A board exam asks which claims survive.",
    "statements": [
      {
        "text": "Action potentials are typically described as all-or-none events once threshold is reached at the axon hillock/initial segment.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biological / neural mechanisms to this vignette (A neuro clinic correctly teaches: action potentials are all-or-none along the axon; photoreceptor rods dominate scotopic vision;…). On biological / neural mechanisms, this statement is right: action potentials are typically described as all-or-none events once threshold is reached at the axon hillock/initial segment. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Rods dominate vision under scotopic (very dim) conditions relative to cones.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (A neuro clinic correctly teaches: action potentials are all-or-none along the axon; photoreceptor rods dominate scotopic vision;…). On biopsychology, consciousness, or sensation/perception, this statement is right: rods dominate vision under scotopic (very dim) conditions relative to cones. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "The SCN is central to circadian timing in mammals.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (A neuro clinic correctly teaches: action potentials are all-or-none along the axon; photoreceptor rods dominate scotopic vision;…). On sleep and consciousness, this statement is right: the SCN is central to circadian timing in mammals. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Selective attention reflects limited-capacity filtering of sensory streams.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biopsychology, consciousness, or sensation/perception to this vignette (A neuro clinic correctly teaches: action potentials are all-or-none along the axon; photoreceptor rods dominate scotopic vision;…). On biopsychology, consciousness, or sensation/perception, this statement is right: selective attention reflects limited-capacity filtering of sensory streams. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Top-down expectations can bias how ambiguous stimuli are perceived.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sensation and perception to this vignette (A neuro clinic correctly teaches: action potentials are all-or-none along the axon; photoreceptor rods dominate scotopic vision;…). On sensation and perception, this statement is right: top-down expectations can bias how ambiguous stimuli are perceived. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t3-ms-01",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "A parent stops buying candy after checkout tantrums (extinction burst follows). Simultaneously a twin’s teacher uses intermittent praise for raising hands, and an older sibling learns swear words from a YouTube “cool failure” model who gets laughs. Dad calls all three “classical conditioning of the hippocampus with flashbulb IQ.” Mom wants a functional analysis.",
    "statements": [
      {
        "text": "Withholding candy after tantrums can put the behavior on extinction; temporary escalation (extinction burst) is possible.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operant conditioning to this vignette (A parent stops buying candy after checkout tantrums (extinction burst follows)). On operant conditioning, this statement is right: withholding candy after tantrums can put the behavior on extinction; temporary escalation (extinction burst) is possible. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Intermittent praise can maintain hand-raising more durably than continuous praise once behavior is established.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operant conditioning to this vignette (A parent stops buying candy after checkout tantrums (extinction burst follows)). On operant conditioning, this statement is right: intermittent praise can maintain hand-raising more durably than continuous praise once behavior is established. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Observational learning can transmit swear words when a model is attended to, remembered, and the behavior is motivated/reproduced—laugh tracks can function as vicarious reinforcement.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies observational learning to this vignette (A parent stops buying candy after checkout tantrums (extinction burst follows)). On observational learning, this statement is right: observational learning can transmit swear words when a model is attended to, remembered, and the behavior is motivated/reproduced—laugh tracks can function as vicarious reinforcement. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Labeling all three as classical conditioning of the hippocampus with flashbulb IQ correctly identifies the shared mechanism.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A parent stops buying candy after checkout tantrums (extinction burst follows)), the claim is not a sound application of classical conditioning. Mixes classical vs operant vs observational and misuses memory/IQ jargon. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Classical conditioning requires a voluntary skeletal response reinforced by candy removal.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A parent stops buying candy after checkout tantrums (extinction burst follows)), the claim is not a sound application of classical conditioning. That confuses classical with operant; candy removal here is operant extinction contingency talk. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t3-ms-02",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "Med students cram with highlighting (fluency illusion) vs peers who self-test elaboratively. On a transfer case, self-testers win. A classmate says iconic memory lasted the whole semester so highlighting encoded permanently. Another uses availability: “I remember the bright page, so I must know sepsis criteria.” A tutor mentions desirable difficulties.",
    "statements": [
      {
        "text": "Retrieval practice/elaboration often beats passive highlighting for transfer, despite highlighting feeling fluent.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies memory processes to this vignette (Med students cram with highlighting (fluency illusion) vs peers who self-test elaboratively). On memory processes, this statement is right: retrieval practice/elaboration often beats passive highlighting for transfer, despite highlighting feeling fluent. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Metacognitive fluency is a poor guarantee of durable, transferable knowledge.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (Med students cram with highlighting (fluency illusion) vs peers who self-test elaboratively). On learning, thinking, intelligence, or memory, this statement is right: metacognitive fluency is a poor guarantee of durable, transferable knowledge. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Iconic sensory memory lasting a whole semester explains highlighting’s superiority.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Med students cram with highlighting (fluency illusion) vs peers who self-test elaboratively), the claim is not a sound application of learning, thinking, intelligence, or memory. On learning, thinking, intelligence, or memory, this statement goes wrong: it is not the case that iconic sensory memory lasting a whole semester explains highlighting’s superiority. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Availability of a bright visual memory for the page does not ensure retrieval of sepsis decision criteria.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies memory processes to this vignette (Med students cram with highlighting (fluency illusion) vs peers who self-test elaboratively). On memory processes, this statement is right: availability of a bright visual memory for the page does not ensure retrieval of sepsis decision criteria. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "If something feels hard during practice, it must be ineffective encoding by definition.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Med students cram with highlighting (fluency illusion) vs peers who self-test elaboratively), the claim is not a sound application of memory processes. Desirable difficulties can feel harder yet yield better retention. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t3-ms-03",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "A hiring manager rejects a candidate for “not looking like a typical engineer” (representativeness) after a viral story about one bad hire (availability). HR shows base rates of successful atypical candidates. The manager says heuristics are always irrational algorithms and that IQ tests measure only phoneme awareness.",
    "statements": [
      {
        "text": "Representativeness can lead to base-rate neglect in person judgments.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (A hiring manager rejects a candidate for “not looking like a typical engineer” (representativeness) after a viral story about one bad hire (availability)). On judgment heuristics and biases, this statement is right: representativeness can lead to base-rate neglect in person judgments. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "A vivid single story can inflate perceived likelihood via availability.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (A hiring manager rejects a candidate for “not looking like a typical engineer” (representativeness) after a viral story about one bad hire (availability)). On judgment heuristics and biases, this statement is right: a vivid single story can inflate perceived likelihood via availability. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Providing relevant base rates is a rational corrective step against prototype matching alone.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (A hiring manager rejects a candidate for “not looking like a typical engineer” (representativeness) after a viral story about one bad hire (availability)). On judgment heuristics and biases, this statement is right: providing relevant base rates is a rational corrective step against prototype matching alone. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Heuristics are identical to guaranteed-correct algorithms in every hiring context.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A hiring manager rejects a candidate for “not looking like a typical engineer” (representativeness) after a viral story about one bad hire (availability)), the claim is not a sound application of judgment heuristics and biases. Heuristics are shortcuts—sometimes useful, sometimes biased—not guaranteed algorithms. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Standard IQ tests are primarily phoneme-awareness batteries, so they settle engineering fit without other evidence.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A hiring manager rejects a candidate for “not looking like a typical engineer” (representativeness) after a viral story about one bad hire (availability)), the claim is not a sound application of intelligence constructs and measurement. IQ tests target cognitive abilities more broadly; phoneme awareness is a language skill, and hiring needs job-related evidence. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t3-ms-04",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "After a smash-and-grab, witnesses watch a newscast saying the thief “crashed through glass.” Later they report glass that wasn’t there. Confidence is high. A detective trusts confidence; a psychologist cites misinformation and poor encoding under stress/dim light. A juror says flashbulb means perfect verbatim storage.",
    "statements": [
      {
        "text": "Post-event misleading language can alter memory reports.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (After a smash-and-grab, witnesses watch a newscast saying the thief “crashed through glass.” Later they report glass that wasn’t there). On learning, thinking, intelligence, or memory, this statement is right: post-event misleading language can alter memory reports. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Eyewitness confidence is an imperfect accuracy indicator under many conditions.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (After a smash-and-grab, witnesses watch a newscast saying the thief “crashed through glass.” Later they report glass that wasn’t there). On learning, thinking, intelligence, or memory, this statement is right: eyewitness confidence is an imperfect accuracy indicator under many conditions. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Stress and poor viewing conditions can weaken encoding quality.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies memory processes to this vignette (After a smash-and-grab, witnesses watch a newscast saying the thief “crashed through glass.” Later they report glass that wasn’t there). On memory processes, this statement is right: stress and poor viewing conditions can weaken encoding quality. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Flashbulb-like vividness guarantees verbatim, unchangeable memory for peripheral details like glass.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (After a smash-and-grab, witnesses watch a newscast saying the thief “crashed through glass.” Later they report glass that wasn’t there), the claim is not a sound application of learning, thinking, intelligence, or memory. On learning, thinking, intelligence, or memory, this statement goes wrong: it is not the case that flashbulb-like vividness guarantees verbatim, unchangeable memory for peripheral details like glass. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "If memory were a perfect video recording, suggestion would never create glass reports—so reconstructive models fit this case better than a video model.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (After a smash-and-grab, witnesses watch a newscast saying the thief “crashed through glass.” Later they report glass that wasn’t there). On judgment heuristics and biases, this statement is right: if memory were a perfect video recording, suggestion would never create glass reports—so reconstructive models fit this case better than a video model. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t3-ms-05",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "A stroke patient relearns mirror tracing across days but cannot declare the practice sessions (procedural/declarative dissociation). A PT aide says dopamine at the NMJ is “the engram.” A cognitive tutor separates skill circuits from episodic report and warns against massed one-day slideshows for emergency checklists versus spaced simulation.",
    "statements": [
      {
        "text": "Procedural skill can improve without intact episodic verbal report.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (A stroke patient relearns mirror tracing across days but cannot declare the practice sessions (procedural/declarative dissociation)). On learning, thinking, intelligence, or memory, this statement is right: procedural skill can improve without intact episodic verbal report. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Neuromuscular-junction dopamine is not a complete theory of memory engrams for mirror tracing.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (A stroke patient relearns mirror tracing across days but cannot declare the practice sessions (procedural/declarative dissociation)). On learning, thinking, intelligence, or memory, this statement is right: neuromuscular-junction dopamine is not a complete theory of memory engrams for mirror tracing. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Spaced, retrieval-rich simulation often beats one-day massed slideshows for durable checklist performance.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies memory processes to this vignette (A stroke patient relearns mirror tracing across days but cannot declare the practice sessions (procedural/declarative dissociation)). On memory processes, this statement is right: spaced, retrieval-rich simulation often beats one-day massed slideshows for durable checklist performance. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "If episodic report fails, no learning of any kind is possible by definition.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A stroke patient relearns mirror tracing across days but cannot declare the practice sessions (procedural/declarative dissociation)), the claim is not a sound application of learning, thinking, intelligence, or memory. On learning, thinking, intelligence, or memory, this statement goes wrong: it is not the case that if episodic report fails, no learning of any kind is possible by definition. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Massed slideshows uniquely create permanent episodic flashbulb memories of procedures under stress.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A stroke patient relearns mirror tracing across days but cannot declare the practice sessions (procedural/declarative dissociation)), the claim is not a sound application of memory processes. Massing often hurts long-term retention relative to spacing. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t3-ms-06",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "A language-learning app uses variable-ratio streaks. Users feel proud “insight,” then cling to wrong grammar (mental set/fixation) despite counterexamples. They call the pride proof they used perfect algorithms. A cognitive scientist distinguishes insight feelings from correctness and notes reinforcement maintaining engagement.",
    "statements": [
      {
        "text": "Variable-ratio rewards can maintain high rates of app engagement.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (A language-learning app uses variable-ratio streaks). On learning, thinking, intelligence, or memory, this statement is right: variable-ratio rewards can maintain high rates of app engagement. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Subjective insight/pride does not guarantee the rule learned is correct.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (A language-learning app uses variable-ratio streaks). On learning, thinking, intelligence, or memory, this statement is right: subjective insight/pride does not guarantee the rule learned is correct. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Mental set can blind learners to counterexamples that should revise a grammar rule.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (A language-learning app uses variable-ratio streaks). On learning, thinking, intelligence, or memory, this statement is right: mental set can blind learners to counterexamples that should revise a grammar rule. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Algorithms, by definition, never fail—so wrong grammar after “insight” is impossible if any algorithm was used.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A language-learning app uses variable-ratio streaks), the claim is not a sound application of judgment heuristics and biases. People often use heuristics; even algorithms need correct application. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Affective labeling of success can coexist with operant maintenance of study behavior.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operant conditioning to this vignette (A language-learning app uses variable-ratio streaks). On operant conditioning, this statement is right: affective labeling of success can coexist with operant maintenance of study behavior. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t3-ms-07",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "Parents demand an IQ retest after one low group screen. The child has noisy classrooms, anxiety, and stereotype threat before timed sections. A teacher wants to cut recess to “raise crystallized g.” A counselor frames confidence intervals around scores and situational suppressors.",
    "statements": [
      {
        "text": "A single group screening score should not be treated as immutable destiny.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (Parents demand an IQ retest after one low group screen). On learning, thinking, intelligence, or memory, this statement is right: a single group screening score should not be treated as immutable destiny. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Anxiety, noise, and threat can depress timed performance without rewriting the construct of g by themselves.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies disorders and therapy to this vignette (Parents demand an IQ retest after one low group screen). On disorders and therapy, this statement is right: anxiety, noise, and threat can depress timed performance without rewriting the construct of g by themselves. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Cutting recess is not an evidence-based method to raise crystallized intelligence.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies intelligence constructs and measurement to this vignette (Parents demand an IQ retest after one low group screen). On intelligence constructs and measurement, this statement is right: cutting recess is not an evidence-based method to raise crystallized intelligence. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Crystallized intelligence lives on the basilar membrane and grows when recess is removed.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Parents demand an IQ retest after one low group screen), the claim is not a sound application of intelligence constructs and measurement. On intelligence constructs and measurement, this statement goes wrong: it is not the case that crystallized intelligence lives on the basilar membrane and grows when recess is removed. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Interpreting scores requires attention to measurement error and testing conditions.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (Parents demand an IQ retest after one low group screen). On sleep and consciousness, this statement is right: interpreting scores requires attention to measurement error and testing conditions. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t3-ms-08",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "A podcast sells “neuroplasticity gum” said to raise Sternberg practical intelligence by coating the hippocampus with crystallized g, citing self-report correlations among gum chewers. Methods students smell expectancy and non-equivalent groups.",
    "statements": [
      {
        "text": "Self-report correlations among chewers do not validate causal practical-intelligence gains.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies correlation-versus-causation limits to this vignette (A podcast sells “neuroplasticity gum” said to raise Sternberg practical intelligence by coating the hippocampus with crystallized…). On correlation-versus-causation limits, this statement is right: self-report correlations among chewers do not validate causal practical-intelligence gains. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "The biological mechanism stated is implausible as pitched.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies biological / neural mechanisms to this vignette (A podcast sells “neuroplasticity gum” said to raise Sternberg practical intelligence by coating the hippocampus with crystallized…). On biological / neural mechanisms, this statement is right: the biological mechanism stated is implausible as pitched. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Expectancy/placebo-like effects can inflate self-rated “street smarts.”",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies expectancy, placebo, and blinding issues to this vignette (A podcast sells “neuroplasticity gum” said to raise Sternberg practical intelligence by coating the hippocampus with crystallized…). On expectancy, placebo, and blinding issues, this statement is right: expectancy/placebo-like effects can inflate self-rated “street smarts.”. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Mentioning the hippocampus converts correlational marketing into a randomized experiment.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A podcast sells “neuroplasticity gum” said to raise Sternberg practical intelligence by coating the hippocampus with crystallized…), the claim is not a sound application of random assignment and internal validity. On random assignment and internal validity, this statement goes wrong: it is not the case that mentioning the hippocampus converts correlational marketing into a randomized experiment. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Sternberg’s triarchic ideas still require serious measurement—not gum slogans—to assess practical intelligence.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies intelligence constructs and measurement to this vignette (A podcast sells “neuroplasticity gum” said to raise Sternberg practical intelligence by coating the hippocampus with crystallized…). On intelligence constructs and measurement, this statement is right: sternberg’s triarchic ideas still require serious measurement—not gum slogans—to assess practical intelligence. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t3-ms-09",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "Two roommates study: A rereads notes in the same order nightly (maintenance-ish / serial); B elaborates with why-questions and varies contexts. Exam asks near transfer and far transfer. A attributes B’s success to “photographic iconic storage.” B cites levels of processing and encoding specificity.",
    "statements": [
      {
        "text": "Deeper, elaborative encoding often supports better long-term retrieval than shallow rereading.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies memory processes to this vignette (Two roommates study: A rereads notes in the same order nightly (maintenance-ish / serial); B elaborates with why-questions and varies contexts). On memory processes, this statement is right: deeper, elaborative encoding often supports better long-term retrieval than shallow rereading. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Varying contexts can aid transfer when tests change surface features.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies memory processes to this vignette (Two roommates study: A rereads notes in the same order nightly (maintenance-ish / serial); B elaborates with why-questions and varies contexts). On memory processes, this statement is right: varying contexts can aid transfer when tests change surface features. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Iconic memory duration does not provide semester-long photographic notes.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (Two roommates study: A rereads notes in the same order nightly (maintenance-ish / serial); B elaborates with why-questions and varies contexts). On learning, thinking, intelligence, or memory, this statement is right: iconic memory duration does not provide semester-long photographic notes. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Encoding specificity implies retrieval cues matching study conditions can help—but exclusive identical order rereading still may be shallow.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies memory processes to this vignette (Two roommates study: A rereads notes in the same order nightly (maintenance-ish / serial); B elaborates with why-questions and varies contexts). On memory processes, this statement is right: encoding specificity implies retrieval cues matching study conditions can help—but exclusive identical order rereading still may be shallow. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Far transfer is guaranteed whenever serial order is held constant in study.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Two roommates study: A rereads notes in the same order nightly (maintenance-ish / serial); B elaborates with why-questions and varies contexts), the claim is not a sound application of learning, thinking, intelligence, or memory. On learning, thinking, intelligence, or memory, this statement goes wrong: it is not the case that far transfer is guaranteed whenever serial order is held constant in study. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t3-ms-10",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "A jury hears an expert say the defendant “matches the prototype of fraudsters” after media montages. Dim lighting and fatigue hit jurors. Defense attorney explains base rates and cognitive load. Prosecution claims heuristics equal Bayesian rationality always.",
    "statements": [
      {
        "text": "Prototype matching can mislead relative to base-rate information.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (A jury hears an expert say the defendant “matches the prototype of fraudsters” after media montages). On judgment heuristics and biases, this statement is right: prototype matching can mislead relative to base-rate information. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Fatigue and poor perceptual conditions can undermine careful systematic processing.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies learning, thinking, intelligence, or memory to this vignette (A jury hears an expert say the defendant “matches the prototype of fraudsters” after media montages). On learning, thinking, intelligence, or memory, this statement is right: fatigue and poor perceptual conditions can undermine careful systematic processing. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Heuristics sometimes approximate good judgments but are not always Bayesian-optimal.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (A jury hears an expert say the defendant “matches the prototype of fraudsters” after media montages). On judgment heuristics and biases, this statement is right: heuristics sometimes approximate good judgments but are not always Bayesian-optimal. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Media montages can inflate availability of a “fraudster look.”",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (A jury hears an expert say the defendant “matches the prototype of fraudsters” after media montages). On judgment heuristics and biases, this statement is right: media montages can inflate availability of a “fraudster look.”. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "If a face feels typical, d′ sensitivity must have increased, making base rates irrelevant by signal-detection law.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A jury hears an expert say the defendant “matches the prototype of fraudsters” after media montages), the claim is not a sound application of judgment heuristics and biases. On judgment heuristics and biases, this statement goes wrong: it is not the case that if a face feels typical, d′ sensitivity must have increased, making base rates irrelevant by signal-detection law. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t3-ms-11",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "A study-tips influencer asserts: classical CS–US pairing is identical to positive reinforcement; extinction means the animal forgets the CS forever as tissue deletion; chunking expands iconic memory to hours; misinformation only affects procedural biking skill; IQ equals the Flynn effect number for a person.",
    "statements": [
      {
        "text": "Classical CS–US pairing is identical to positive reinforcement.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A study-tips influencer asserts: classical CS–US pairing is identical to positive reinforcement; extinction means the animal…), the claim is not a sound application of classical conditioning. On classical conditioning, this statement goes wrong: it is not the case that classical CS–US pairing is identical to positive reinforcement. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Extinction deletes the CS from neural tissue forever so return of responding is impossible.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A study-tips influencer asserts: classical CS–US pairing is identical to positive reinforcement; extinction means the animal…), the claim is not a sound application of learning, thinking, intelligence, or memory. On learning, thinking, intelligence, or memory, this statement goes wrong: it is not the case that extinction deletes the CS from neural tissue forever so return of responding is impossible. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Chunking expands iconic sensory memory duration to multi-hour storage.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A study-tips influencer asserts: classical CS–US pairing is identical to positive reinforcement; extinction means the animal…), the claim is not a sound application of memory processes. On memory processes, this statement goes wrong: it is not the case that chunking expands iconic sensory memory duration to multi-hour storage. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Misinformation effects only alter procedural memories for riding bikes.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A study-tips influencer asserts: classical CS–US pairing is identical to positive reinforcement; extinction means the animal…), the claim is not a sound application of learning, thinking, intelligence, or memory. On learning, thinking, intelligence, or memory, this statement goes wrong: it is not the case that misinformation effects only alter procedural memories for riding bikes. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "A person’s IQ score is the Flynn effect itself.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A study-tips influencer asserts: classical CS–US pairing is identical to positive reinforcement; extinction means the animal…), the claim is not a sound application of intelligence constructs and measurement. Flynn effect is generational score rise, not an individual’s IQ synonym. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t3-ms-12",
    "topic": 3,
    "topicLabel": "Learning & Cognition",
    "chapters": [
      6,
      7,
      8
    ],
    "scenario": "Only one statement is worth keeping in a TA’s answer key about memory: elaborative rehearsal generally beats shallow repetition for meaning-based long-term retention. The other slogans are traps.",
    "statements": [
      {
        "text": "Elaborative rehearsal linking to meaning typically supports better long-term retention than shallow rote repetition alone.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies memory processes to this vignette (Only one statement is worth keeping in a TA’s answer key about memory: elaborative rehearsal generally beats shallow repetition…). On memory processes, this statement is right: elaborative rehearsal linking to meaning typically supports better long-term retention than shallow rote repetition alone. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Sensory memory stores textbooks verbatim for years without consolidation.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Only one statement is worth keeping in a TA’s answer key about memory: elaborative rehearsal generally beats shallow repetition…), the claim is not a sound application of learning, thinking, intelligence, or memory. On learning, thinking, intelligence, or memory, this statement goes wrong: it is not the case that sensory memory stores textbooks verbatim for years without consolidation. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Retrieval practice weakens memory every time you test yourself.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Only one statement is worth keeping in a TA’s answer key about memory: elaborative rehearsal generally beats shallow repetition…), the claim is not a sound application of memory processes. On memory processes, this statement goes wrong: it is not the case that retrieval practice weakens memory every time you test yourself. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "All forgetting is only decay of iconic memory after 30 seconds in adults.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Only one statement is worth keeping in a TA’s answer key about memory: elaborative rehearsal generally beats shallow repetition…), the claim is not a sound application of memory processes. On memory processes, this statement goes wrong: it is not the case that all forgetting is only decay of iconic memory after 30 seconds in adults. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Flashbulb vividness guarantees courtroom-perfect accuracy.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Only one statement is worth keeping in a TA’s answer key about memory: elaborative rehearsal generally beats shallow repetition…), the claim is not a sound application of learning, thinking, intelligence, or memory. On learning, thinking, intelligence, or memory, this statement goes wrong: it is not the case that flashbulb vividness guarantees courtroom-perfect accuracy. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t4-ms-01",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "A daycare advertises that Mozart flashcards cause formal operations by age four, citing kids whose parents opted in versus opt-out waitlists, plus kids parroting conservation phrases after heavy prompting. A Piagetian and a methods consultant visit.",
    "statements": [
      {
        "text": "Opt-in enrichment groups are non-equivalent to opt-out waitlists, threatening causal claims.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies correlation-versus-causation limits to this vignette (A daycare advertises that Mozart flashcards cause formal operations by age four, citing kids whose parents opted in versus…). On correlation-versus-causation limits, this statement is right: opt-in enrichment groups are non-equivalent to opt-out waitlists, threatening causal claims. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Prompted jargon is not the same as spontaneous formal operational reasoning.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operational definitions to this vignette (A daycare advertises that Mozart flashcards cause formal operations by age four, citing kids whose parents opted in versus…). On operational definitions, this statement is right: prompted jargon is not the same as spontaneous formal operational reasoning. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Mozart packages have not been shown to yank children into formal operations as advertised.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies development, motivation/emotion, or personality to this vignette (A daycare advertises that Mozart flashcards cause formal operations by age four, citing kids whose parents opted in versus…). On development, motivation/emotion, or personality, this statement is right: mozart packages have not been shown to yank children into formal operations as advertised. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Waitlists equal random assignment whenever parents self-select.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A daycare advertises that Mozart flashcards cause formal operations by age four, citing kids whose parents opted in versus…), the claim is not a sound application of random assignment and internal validity. On random assignment and internal validity, this statement goes wrong: it is not the case that waitlists equal random assignment whenever parents self-select. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Object permanence failure in infants proves flashcards are the only route to hypothetico-deductive thought.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A daycare advertises that Mozart flashcards cause formal operations by age four, citing kids whose parents opted in versus…), the claim is not a sound application of developmental psychology. On developmental psychology, this statement goes wrong: it is not the case that object permanence failure in infants proves flashcards are the only route to hypothetico-deductive thought. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t4-ms-02",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "Nine-month-old cries at daycare drop-off but explores with a secure base at home and calms on sensitive reunion. Relatives urge ignoring all distress (extinction) or continuous candy for silence. An attachment-informed clinician reframes.",
    "statements": [
      {
        "text": "Separation protest can be normative; reunion quality and secure-base use are central to attachment interpretation.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies developmental psychology to this vignette (Nine-month-old cries at daycare drop-off but explores with a secure base at home and calms on sensitive reunion). On developmental psychology, this statement is right: separation protest can be normative; reunion quality and secure-base use are central to attachment interpretation. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Blanket ignoring of distress is not a sensitive shortcut to security.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies stress and health to this vignette (Nine-month-old cries at daycare drop-off but explores with a secure base at home and calms on sensitive reunion). On stress and health, this statement is right: blanket ignoring of distress is not a sensitive shortcut to security. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Candy-for-silence continuous reinforcement may suppress crying without building secure working models.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operant conditioning to this vignette (Nine-month-old cries at daycare drop-off but explores with a secure base at home and calms on sensitive reunion). On operant conditioning, this statement is right: candy-for-silence continuous reinforcement may suppress crying without building secure working models. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Any daycare crying proves irreversible disorganized attachment requiring candy classical conditioning of the id.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Nine-month-old cries at daycare drop-off but explores with a secure base at home and calms on sensitive reunion), the claim is not a sound application of classical conditioning. On classical conditioning, this statement goes wrong: it is not the case that any daycare crying proves irreversible disorganized attachment requiring candy classical conditioning of the id. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Attachment patterns are relationship-and-history informed, not a one-cry diagnosis.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies developmental psychology to this vignette (Nine-month-old cries at daycare drop-off but explores with a secure base at home and calms on sensitive reunion). On developmental psychology, this statement is right: attachment patterns are relationship-and-history informed, not a one-cry diagnosis. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t4-ms-03",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "A prenatal client drinks heavily and says heritability of IQ means environment is powerless. Clinic staff discuss teratogens and sensitive periods. A relative adds that twins prove parenting never matters.",
    "statements": [
      {
        "text": "Heritability ≠ immutability; environmental teratogens can alter developmental trajectories.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies developmental psychology to this vignette (A prenatal client drinks heavily and says heritability of IQ means environment is powerless). On developmental psychology, this statement is right: heritability ≠ immutability; environmental teratogens can alter developmental trajectories. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Alcohol is a known teratogen with fetal neurodevelopmental risks tied to exposure timing/amount.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies developmental psychology to this vignette (A prenatal client drinks heavily and says heritability of IQ means environment is powerless). On developmental psychology, this statement is right: alcohol is a known teratogen with fetal neurodevelopmental risks tied to exposure timing/amount. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Twin heritability findings do not imply parenting or prenatal environment are irrelevant for individuals.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies development, motivation/emotion, or personality to this vignette (A prenatal client drinks heavily and says heritability of IQ means environment is powerless). On development, motivation/emotion, or personality, this statement is right: twin heritability findings do not imply parenting or prenatal environment are irrelevant for individuals. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "If a trait is heritable at all, teratogen advice is scientifically meaningless.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A prenatal client drinks heavily and says heritability of IQ means environment is powerless), the claim is not a sound application of developmental psychology. On developmental psychology, this statement goes wrong: it is not the case that if a trait is heritable at all, teratogen advice is scientifically meaningless. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Sensitive periods mean some exposures matter more at certain developmental windows.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies developmental psychology to this vignette (A prenatal client drinks heavily and says heritability of IQ means environment is powerless). On developmental psychology, this statement is right: sensitive periods mean some exposures matter more at certain developmental windows. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t4-ms-04",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "Night-shift nurses call candy “drive reduction for willpower glucose.” A health psychologist points to stress cues and intermittent reinforcement of snacking; an emotion researcher notes labeling stress as “need sugar.” Performance varies when arousal is labeled threat vs challenge before a simulation.",
    "statements": [
      {
        "text": "Habit cues and reinforcement can maintain snacking beyond a simple emptied-glucose drive slogan.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operant conditioning to this vignette (Night-shift nurses call candy “drive reduction for willpower glucose.” A health psychologist points to stress cues and…). On operant conditioning, this statement is right: habit cues and reinforcement can maintain snacking beyond a simple emptied-glucose drive slogan. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Appraisal of arousal as threat vs challenge can relate to different performance patterns.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies motivation and emotion to this vignette (Night-shift nurses call candy “drive reduction for willpower glucose.” A health psychologist points to stress cues and…). On motivation and emotion, this statement is right: appraisal of arousal as threat vs challenge can relate to different performance patterns. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Drive-reduction slogans uniquely explain all human eating under stress with no role for learning.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Night-shift nurses call candy “drive reduction for willpower glucose.” A health psychologist points to stress cues and…), the claim is not a sound application of intelligence constructs and measurement. On intelligence constructs and measurement, this statement goes wrong: it is not the case that drive-reduction slogans uniquely explain all human eating under stress with no role for learning. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Affect labeling and contingency awareness can be part of changing coping responses.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies stress and health to this vignette (Night-shift nurses call candy “drive reduction for willpower glucose.” A health psychologist points to stress cues and…). On stress and health, this statement is right: affect labeling and contingency awareness can be part of changing coping responses. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Variable-ratio candy wins at work cannot influence behavior when cortisol is high.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Night-shift nurses call candy “drive reduction for willpower glucose.” A health psychologist points to stress cues and…), the claim is not a sound application of operant conditioning. On operant conditioning, this statement goes wrong: it is not the case that variable-ratio candy wins at work cannot influence behavior when cortisol is high. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t4-ms-05",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "After a breakup, Sam forecasts permanent misery (affective forecasting error) and rehearses “I’ll never recover” nightly (fluent retrieval of a bleak prediction). Friends suggest behavioral activation and evidence-gathering rather than prophecy rehearsal. Sam cites current dysphoria as perfect future data.",
    "statements": [
      {
        "text": "People often mis-predict future emotional intensity/duration.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies motivation and emotion to this vignette (After a breakup, Sam forecasts permanent misery (affective forecasting error) and rehearses “I’ll never recover” nightly (fluent…). On motivation and emotion, this statement is right: people often mis-predict future emotional intensity/duration. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Fluent rehearsal of bleak forecasts can increase their subjective believability without proving accuracy.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies development, motivation/emotion, or personality to this vignette (After a breakup, Sam forecasts permanent misery (affective forecasting error) and rehearses “I’ll never recover” nightly (fluent…). On development, motivation/emotion, or personality, this statement is right: fluent rehearsal of bleak forecasts can increase their subjective believability without proving accuracy. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Behavioral activation and checking evidence can counteract withdrawal that maintains dysphoria.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies psychoactive drugs to this vignette (After a breakup, Sam forecasts permanent misery (affective forecasting error) and rehearses “I’ll never recover” nightly (fluent…). On psychoactive drugs, this statement is right: behavioral activation and checking evidence can counteract withdrawal that maintains dysphoria. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Current mood is an infallible crystal ball for multi-year outcomes, so forecasting research is irrelevant.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (After a breakup, Sam forecasts permanent misery (affective forecasting error) and rehearses “I’ll never recover” nightly (fluent…), the claim is not a sound application of development, motivation/emotion, or personality. On development, motivation/emotion, or personality, this statement goes wrong: it is not the case that current mood is an infallible crystal ball for multi-year outcomes, so forecasting research is irrelevant. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Retrieval practice of doom predictions is desirable difficulty that reliably builds optimistic explanatory style.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (After a breakup, Sam forecasts permanent misery (affective forecasting error) and rehearses “I’ll never recover” nightly (fluent…), the claim is not a sound application of memory processes. On memory processes, this statement goes wrong: it is not the case that retrieval practice of doom predictions is desirable difficulty that reliably builds optimistic explanatory style. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t4-ms-06",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "HR wants a 10-item Facebook Big Five quiz to reject “low agreeableness” nursing applicants. I-O and personality psychologists cite reliability/validity and job analysis. A manager says traits beat structured interviews always.",
    "statements": [
      {
        "text": "Unvalidated viral quizzes lack the psychometric evidence needed for high-stakes hiring.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies development, motivation/emotion, or personality to this vignette (HR wants a 10-item Facebook Big Five quiz to reject “low agreeableness” nursing applicants). On development, motivation/emotion, or personality, this statement is right: unvalidated viral quizzes lack the psychometric evidence needed for high-stakes hiring. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Job-related structured interviews/work samples often have stronger validity evidence than informal trait cut scores from social media.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies development, motivation/emotion, or personality to this vignette (HR wants a 10-item Facebook Big Five quiz to reject “low agreeableness” nursing applicants). On development, motivation/emotion, or personality, this statement is right: job-related structured interviews/work samples often have stronger validity evidence than informal trait cut scores from social media. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Agreeableness cut scores from 10 meme items are automatically content-valid for all nursing tasks.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (HR wants a 10-item Facebook Big Five quiz to reject “low agreeableness” nursing applicants), the claim is not a sound application of development, motivation/emotion, or personality. On development, motivation/emotion, or personality, this statement goes wrong: it is not the case that agreeableness cut scores from 10 meme items are automatically content-valid for all nursing tasks. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Personality can inform fit but must meet reliability/validity/fairness scrutiny in selection.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies personality to this vignette (HR wants a 10-item Facebook Big Five quiz to reject “low agreeableness” nursing applicants). On personality, this statement is right: personality can inform fit but must meet reliability/validity/fairness scrutiny in selection. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "If a quiz is popular, adverse impact and validity concerns disappear legally and scientifically.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (HR wants a 10-item Facebook Big Five quiz to reject “low agreeableness” nursing applicants), the claim is not a sound application of development, motivation/emotion, or personality. On development, motivation/emotion, or personality, this statement goes wrong: it is not the case that if a quiz is popular, adverse impact and validity concerns disappear legally and scientifically. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t4-ms-07",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "A school runs self-esteem week plus tutoring and sleep workshops the same month; grades rise. Rogers-inspired posters get the credit. Motivation data show mastery goals rose mainly in tutored students. Methods teachers cough “confound.”",
    "statements": [
      {
        "text": "Simultaneous interventions confound causal credit to self-esteem week alone.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies random assignment and internal validity to this vignette (A school runs self-esteem week plus tutoring and sleep workshops the same month; grades rise). On random assignment and internal validity, this statement is right: simultaneous interventions confound causal credit to self-esteem week alone. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Tutoring and sleep support are plausible drivers of grade changes.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (A school runs self-esteem week plus tutoring and sleep workshops the same month; grades rise). On sleep and consciousness, this statement is right: tutoring and sleep support are plausible drivers of grade changes. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Mastery-goal shifts concentrated in tutored students weaken the posters-only story.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies development, motivation/emotion, or personality to this vignette (A school runs self-esteem week plus tutoring and sleep workshops the same month; grades rise). On development, motivation/emotion, or personality, this statement is right: mastery-goal shifts concentrated in tutored students weaken the posters-only story. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Unconditional positive regard posters are sufficient to prove causation of grade rises even without tutoring.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A school runs self-esteem week plus tutoring and sleep workshops the same month; grades rise), the claim is not a sound application of development, motivation/emotion, or personality. On development, motivation/emotion, or personality, this statement goes wrong: it is not the case that unconditional positive regard posters are sufficient to prove causation of grade rises even without tutoring. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Humanistic climate can be helpful for rapport but does not automatically license monocausal credit in confounded rollouts.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies confounds and rival explanations to this vignette (A school runs self-esteem week plus tutoring and sleep workshops the same month; grades rise). On confounds and rival explanations, this statement is right: humanistic climate can be helpful for rapport but does not automatically license monocausal credit in confounded rollouts. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t4-ms-08",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "A teen explores identity by rejecting a parent’s political club. Parent calls it authoritarian-obedience failure and low conscientiousness; cites peer conformity as proof of no real self. A developmentalist discusses exploration/commitment and social influence without erasing agency.",
    "statements": [
      {
        "text": "Identity development can include questioning inherited values.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies developmental psychology to this vignette (A teen explores identity by rejecting a parent’s political club). On developmental psychology, this statement is right: identity development can include questioning inherited values. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Peer influence is real but does not reduce identity work to “no self.”",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies development, motivation/emotion, or personality to this vignette (A teen explores identity by rejecting a parent’s political club). On development, motivation/emotion, or personality, this statement is right: peer influence is real but does not reduce identity work to “no self.”. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Authoritarian obedience is not the same construct as healthy identity achievement.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social psychology to this vignette (A teen explores identity by rejecting a parent’s political club). On social psychology, this statement is right: authoritarian obedience is not the same construct as healthy identity achievement. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Asch-like conformity means teens are incapable of principled reasoning in all domains.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A teen explores identity by rejecting a parent’s political club), the claim is not a sound application of social psychology. On social psychology, this statement goes wrong: it is not the case that asch-like conformity means teens are incapable of principled reasoning in all domains. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Trait labels alone, without developmental context, poorly explain a single political disagreement.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies developmental psychology to this vignette (A teen explores identity by rejecting a parent’s political club). On developmental psychology, this statement is right: trait labels alone, without developmental context, poorly explain a single political disagreement. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t4-ms-09",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "Bike-arousal then rating a neutral person as hotter (excitation transfer). Student A: James–Lange means arousal is attraction. Student B: Cannon–Bard forbids misattribution. Student C: two-factor/misattribution fits better.",
    "statements": [
      {
        "text": "Residual arousal can be misattributed to a salient social target.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies motivation and emotion to this vignette (Bike-arousal then rating a neutral person as hotter (excitation transfer)). On motivation and emotion, this statement is right: residual arousal can be misattributed to a salient social target. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Equating raw arousal with the emotion of attraction without appraisal oversimplifies James–Lange-style teaching debates.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (Bike-arousal then rating a neutral person as hotter (excitation transfer)). On judgment heuristics and biases, this statement is right: equating raw arousal with the emotion of attraction without appraisal oversimplifies James–Lange-style teaching debates. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Cannon–Bard does not magically make misattribution experiments impossible.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social psychology to this vignette (Bike-arousal then rating a neutral person as hotter (excitation transfer)). On social psychology, this statement is right: cannon–Bard does not magically make misattribution experiments impossible. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "NMJ dopamine stores attraction engrams during bike pedaling, replacing cognitive labels.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Bike-arousal then rating a neutral person as hotter (excitation transfer)), the claim is not a sound application of development, motivation/emotion, or personality. On development, motivation/emotion, or personality, this statement goes wrong: it is not the case that nMJ dopamine stores attraction engrams during bike pedaling, replacing cognitive labels. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Two-factor-style ideas highlight arousal + cognitive interpretation.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies motivation and emotion to this vignette (Bike-arousal then rating a neutral person as hotter (excitation transfer)). On motivation and emotion, this statement is right: two-factor-style ideas highlight arousal + cognitive interpretation. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t4-ms-10",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "A pop reel says childhood “anal stage” explains email hoarding. Records show anxiety after job loss, family modeling of saving, high conscientiousness/scrupulosity. Clinician prefers multi-factor formulation.",
    "statements": [
      {
        "text": "Unverifiable stage slogans are weak as sole explanations compared with anxiety, modeling, and traits.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies observational learning to this vignette (A pop reel says childhood “anal stage” explains email hoarding). On observational learning, this statement is right: unverifiable stage slogans are weak as sole explanations compared with anxiety, modeling, and traits. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Stressors like job loss can exacerbate saving/hoarding-like behaviors.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies stress and health to this vignette (A pop reel says childhood “anal stage” explains email hoarding). On stress and health, this statement is right: stressors like job loss can exacerbate saving/hoarding-like behaviors. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Family modeling is a plausible learning contribution.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies observational learning to this vignette (A pop reel says childhood “anal stage” explains email hoarding). On observational learning, this statement is right: family modeling is a plausible learning contribution. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "A TikTok Freudian label is sufficient assessment with DSM reliability.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A pop reel says childhood “anal stage” explains email hoarding), the claim is not a sound application of psychoanalytic ideas in historical context. On psychoanalytic ideas in historical context, this statement goes wrong: it is not the case that a TikTok Freudian label is sufficient assessment with DSM reliability. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Trait scrupulosity/anxiety themes can inform CBT targets better than reel destiny talk.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies disorders and therapy to this vignette (A pop reel says childhood “anal stage” explains email hoarding). On disorders and therapy, this statement is right: trait scrupulosity/anxiety themes can inform CBT targets better than reel destiny talk. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t4-ms-11",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "All of the following slogans are wrong: genes seal attachment at birth without caregivers; Maslow proved leaderboards always raise intrinsic mentoring; grit posters extinguish unpredictable punishment effects; display rules mean infants show no emotion; neuroticism scores forbid any coping skill learning.",
    "statements": [
      {
        "text": "Genes seal attachment at birth with no role for caregivers.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (All of the following slogans are wrong: genes seal attachment at birth without caregivers; Maslow proved leaderboards always…), the claim is not a sound application of developmental psychology. On developmental psychology, this statement goes wrong: it is not the case that genes seal attachment at birth with no role for caregivers. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Maslow proved public leaderboards always increase intrinsic mentoring.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (All of the following slogans are wrong: genes seal attachment at birth without caregivers; Maslow proved leaderboards always…), the claim is not a sound application of motivation and emotion. On motivation and emotion, this statement goes wrong: it is not the case that maslow proved public leaderboards always increase intrinsic mentoring. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Grit posters extinguish effects of unpredictable punishment without contingency change.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (All of the following slogans are wrong: genes seal attachment at birth without caregivers; Maslow proved leaderboards always…), the claim is not a sound application of operant conditioning. On operant conditioning, this statement goes wrong: it is not the case that grit posters extinguish effects of unpredictable punishment without contingency change. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Display rules mean infants show no emotion.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (All of the following slogans are wrong: genes seal attachment at birth without caregivers; Maslow proved leaderboards always…), the claim is not a sound application of motivation and emotion. Infants show affect; display rules are socialization of expression. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Neuroticism forbids learning coping skills.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (All of the following slogans are wrong: genes seal attachment at birth without caregivers; Maslow proved leaderboards always…), the claim is not a sound application of stress and health. On stress and health, this statement goes wrong: it is not the case that neuroticism forbids learning coping skills. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t4-ms-12",
    "topic": 4,
    "topicLabel": "Development, Motivation & Personality",
    "chapters": [
      9,
      10,
      11
    ],
    "scenario": "Only this claim is solid for a midterm: secure-base behavior and reunion responses are more informative for attachment than counting cries alone. The distractors are absolute myths.",
    "statements": [
      {
        "text": "Secure-base use and reunion patterns inform attachment assessment more than cry counts alone.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies developmental psychology to this vignette (Only this claim is solid for a midterm: secure-base behavior and reunion responses are more informative for attachment than counting cries alone). On developmental psychology, this statement is right: secure-base use and reunion patterns inform attachment assessment more than cry counts alone. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Piaget’s formal operations begin prenatally when teratogens are absent.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Only this claim is solid for a midterm: secure-base behavior and reunion responses are more informative for attachment than counting cries alone), the claim is not a sound application of developmental psychology. On developmental psychology, this statement goes wrong: it is not the case that piaget’s formal operations begin prenatally when teratogens are absent. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Drive reduction uniquely explains human art motivation with zero cognition.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Only this claim is solid for a midterm: secure-base behavior and reunion responses are more informative for attachment than counting cries alone), the claim is not a sound application of intelligence constructs and measurement. On intelligence constructs and measurement, this statement goes wrong: it is not the case that drive reduction uniquely explains human art motivation with zero cognition. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Big Five traits are measured only by inkblots in modern I-O selection.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Only this claim is solid for a midterm: secure-base behavior and reunion responses are more informative for attachment than counting cries alone), the claim is not a sound application of personality. Self-report inventories dominate; projective not gold standard for Big Five hiring. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Identity achievement requires total isolation from peers forever.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Only this claim is solid for a midterm: secure-base behavior and reunion responses are more informative for attachment than counting cries alone), the claim is not a sound application of development, motivation/emotion, or personality. On development, motivation/emotion, or personality, this statement goes wrong: it is not the case that identity achievement requires total isolation from peers forever. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t5-ms-01",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "After a viral CEO scandal montage, employees rate a quiet new manager as unethical (availability + representativeness + FAE). HR has rumor-level data. A consultant urges base rates and situational constraints. Break-room gossip cites “once a cheat, always.”",
    "statements": [
      {
        "text": "Salient scandals can bias person perception via availability.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (After a viral CEO scandal montage, employees rate a quiet new manager as unethical (availability + representativeness + FAE)). On judgment heuristics and biases, this statement is right: salient scandals can bias person perception via availability. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Prototype matching can ignore base rates of managerial honesty.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (After a viral CEO scandal montage, employees rate a quiet new manager as unethical (availability + representativeness + FAE)). On judgment heuristics and biases, this statement is right: prototype matching can ignore base rates of managerial honesty. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Fundamental attribution error themes appear when character is overweighted vs situation.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social psychology to this vignette (After a viral CEO scandal montage, employees rate a quiet new manager as unethical (availability + representativeness + FAE)). On social psychology, this statement is right: fundamental attribution error themes appear when character is overweighted vs situation. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Rumor-level data are enough for decisive character causation claims.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (After a viral CEO scandal montage, employees rate a quiet new manager as unethical (availability + representativeness + FAE)), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that rumor-level data are enough for decisive character causation claims. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Base-rate and situational information are rational correctives to prototype gossip.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (After a viral CEO scandal montage, employees rate a quiet new manager as unethical (availability + representativeness + FAE)). On judgment heuristics and biases, this statement is right: base-rate and situational information are rational correctives to prototype gossip. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t5-ms-02",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "A crowded hallway: student collapses; many stare (pluralistic ignorance / diffusion). Later a witness “remembers” someone helped first (reconstruction). Exam stress is high. RA training is redesigned.",
    "statements": [
      {
        "text": "Diffusion of responsibility can reduce helping as group size increases.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social psychology to this vignette (A crowded hallway: student collapses; many stare (pluralistic ignorance / diffusion)). On social psychology, this statement is right: diffusion of responsibility can reduce helping as group size increases. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Pluralistic ignorance can lead people to interpret nonresponse as a cue that help isn’t needed.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies survey nonresponse bias to this vignette (A crowded hallway: student collapses; many stare (pluralistic ignorance / diffusion)). On survey nonresponse bias, this statement is right: pluralistic ignorance can lead people to interpret nonresponse as a cue that help isn’t needed. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Memory after the fact can reconstruct helpers who didn’t act.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (A crowded hallway: student collapses; many stare (pluralistic ignorance / diffusion)). On social, stress/health, I-O, or clinical psychology, this statement is right: memory after the fact can reconstruct helpers who didn’t act. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Stress always increases helping via broaden-and-build, so training is unnecessary.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (A crowded hallway: student collapses; many stare (pluralistic ignorance / diffusion)), the claim is not a sound application of stress and health. On stress and health, this statement goes wrong: it is not the case that stress always increases helping via broaden-and-build, so training is unnecessary. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Training that assigns responsibility and concrete steps can improve bystander intervention.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social psychology to this vignette (A crowded hallway: student collapses; many stare (pluralistic ignorance / diffusion)). On social psychology, this statement is right: training that assigns responsibility and concrete steps can improve bystander intervention. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t5-ms-03",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "Call center pays only for call count; mentoring collapses; complaints rise. Managers quote Theory Y posters while punishing “wasted” coaching time. I-O and learning analyses focus on contingencies.",
    "statements": [
      {
        "text": "Outcome-only incentives can distort behavior toward speed over quality and citizenship.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Call center pays only for call count; mentoring collapses; complaints rise). On social, stress/health, I-O, or clinical psychology, this statement is right: outcome-only incentives can distort behavior toward speed over quality and citizenship. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Punishing mentoring while rewarding count predicts less mentoring.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operant conditioning to this vignette (Call center pays only for call count; mentoring collapses; complaints rise). On operant conditioning, this statement is right: punishing mentoring while rewarding count predicts less mentoring. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Theory Y posters override pay contingencies automatically.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Call center pays only for call count; mentoring collapses; complaints rise), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that theory Y posters override pay contingencies automatically. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Aligning rewards with quality and helping can reshape climate more than slogans alone.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Call center pays only for call count; mentoring collapses; complaints rise). On social, stress/health, I-O, or clinical psychology, this statement is right: aligning rewards with quality and helping can reshape climate more than slogans alone. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Diffusion of responsibility is the sole possible explanation, so incentives are irrelevant.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Call center pays only for call count; mentoring collapses; complaints rise), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that diffusion of responsibility is the sole possible explanation, so incentives are irrelevant. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t5-ms-04",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "Mayor cites SRRS-style talking points after one viral illness story to claim traffic noise alone causes all hypertension, ignoring poverty, heat, and clinic access confounds. Availability is high in speeches.",
    "statements": [
      {
        "text": "Ecological correlations with confounds cannot isolate noise as sole cause.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies confounds and rival explanations to this vignette (Mayor cites SRRS-style talking points after one viral illness story to claim traffic noise alone causes all hypertension,…). On confounds and rival explanations, this statement is right: ecological correlations with confounds cannot isolate noise as sole cause. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Vivid cases inflate availability of a monocausal story.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies judgment heuristics and biases to this vignette (Mayor cites SRRS-style talking points after one viral illness story to claim traffic noise alone causes all hypertension,…). On judgment heuristics and biases, this statement is right: vivid cases inflate availability of a monocausal story. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Poverty and healthcare access are plausible third variables for stress/health links.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies confounds and rival explanations to this vignette (Mayor cites SRRS-style talking points after one viral illness story to claim traffic noise alone causes all hypertension,…). On confounds and rival explanations, this statement is right: poverty and healthcare access are plausible third variables for stress/health links. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "SRRS checklist points are experimental manipulations proving causation by themselves.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Mayor cites SRRS-style talking points after one viral illness story to claim traffic noise alone causes all hypertension,…), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that sRRS checklist points are experimental manipulations proving causation by themselves. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Policy claims need better causal designs than a single correlation + viral anecdote.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies correlation-versus-causation limits to this vignette (Mayor cites SRRS-style talking points after one viral illness story to claim traffic noise alone causes all hypertension,…). On correlation-versus-causation limits, this statement is right: policy claims need better causal designs than a single correlation + viral anecdote. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t5-ms-05",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "Elevator panic: CS–US panic pairing then avoidance maintained by relief (negative reinforcement). Work stress raises arousal. Friend recommends cathartic “one big scare.” Clinician plans graded exposure with response prevention.",
    "statements": [
      {
        "text": "Avoidance can be maintained by negative reinforcement (relief).",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operant conditioning to this vignette (Elevator panic: CS–US panic pairing then avoidance maintained by relief (negative reinforcement)). On operant conditioning, this statement is right: avoidance can be maintained by negative reinforcement (relief). Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Exposure/extinction logic targets learned fear more than catharsis theater.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Elevator panic: CS–US panic pairing then avoidance maintained by relief (negative reinforcement)). On social, stress/health, I-O, or clinical psychology, this statement is right: exposure/extinction logic targets learned fear more than catharsis theater. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Cathartic re-traumatization is the gold-standard mandatory first step for every phobia.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Elevator panic: CS–US panic pairing then avoidance maintained by relief (negative reinforcement)), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that cathartic re-traumatization is the gold-standard mandatory first step for every phobia. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Stress can potentiate anxiety responding without rewriting the learning account of avoidance.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies stress and health to this vignette (Elevator panic: CS–US panic pairing then avoidance maintained by relief (negative reinforcement)). On stress and health, this statement is right: stress can potentiate anxiety responding without rewriting the learning account of avoidance. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "If classical acquisition occurred, operant avoidance maintenance is logically impossible.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Elevator panic: CS–US panic pairing then avoidance maintained by relief (negative reinforcement)), the claim is not a sound application of classical conditioning. On classical conditioning, this statement goes wrong: it is not the case that if classical acquisition occurred, operant avoidance maintenance is logically impossible. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t5-ms-06",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "Depression: anhedonia, mood-congruent recall, “I’ll always fail” schema, night-shift sleep collapse. Friends push forced gratitude only. Care team discusses CBT/BA, sleep, and possible meds without shame.",
    "statements": [
      {
        "text": "Cognitive schemas and mood-congruent memory can maintain depressive outlook.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies memory processes to this vignette (Depression: anhedonia, mood-congruent recall, “I’ll always fail” schema, night-shift sleep collapse). On memory processes, this statement is right: cognitive schemas and mood-congruent memory can maintain depressive outlook. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Sleep disruption can worsen mood regulation.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (Depression: anhedonia, mood-congruent recall, “I’ll always fail” schema, night-shift sleep collapse). On sleep and consciousness, this statement is right: sleep disruption can worsen mood regulation. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Forced gratitude alone rarely replaces structured depression care.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies disorders and therapy to this vignette (Depression: anhedonia, mood-congruent recall, “I’ll always fail” schema, night-shift sleep collapse). On disorders and therapy, this statement is right: forced gratitude alone rarely replaces structured depression care. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Anhedonia means success memories were never encoded, so BA cannot help.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Depression: anhedonia, mood-congruent recall, “I’ll always fail” schema, night-shift sleep collapse), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that anhedonia means success memories were never encoded, so BA cannot help. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Combined psychosocial and biomedical options can be appropriate depending on severity.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Depression: anhedonia, mood-congruent recall, “I’ll always fail” schema, night-shift sleep collapse). On social, stress/health, I-O, or clinical psychology, this statement is right: combined psychosocial and biomedical options can be appropriate depending on severity. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t5-ms-07",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "PTSD survivor: intrusions, avoidance, hypervigilance. Forums urge hypnosis to “erase the tape.” Legal interviewers risk leading questions. Clinician protects against suggestion while offering evidence-based trauma care and sleep support.",
    "statements": [
      {
        "text": "Trauma memories are not literal erasable videotapes.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (PTSD survivor: intrusions, avoidance, hypervigilance). On social, stress/health, I-O, or clinical psychology, this statement is right: trauma memories are not literal erasable videotapes. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Leading questions risk contaminating reports (misinformation).",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (PTSD survivor: intrusions, avoidance, hypervigilance). On social, stress/health, I-O, or clinical psychology, this statement is right: leading questions risk contaminating reports (misinformation). Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Evidence-based trauma therapies exist that don’t rely on erase-the-tape hypnosis myths.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (PTSD survivor: intrusions, avoidance, hypervigilance). On social, stress/health, I-O, or clinical psychology, this statement is right: evidence-based trauma therapies exist that don’t rely on erase-the-tape hypnosis myths. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Hypnosis guarantees deletion of episodic trauma without suggestion risk.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (PTSD survivor: intrusions, avoidance, hypervigilance), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that hypnosis guarantees deletion of episodic trauma without suggestion risk. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Avoidance can be reinforced by short-term anxiety reduction, maintaining PTSD cycles.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operant conditioning to this vignette (PTSD survivor: intrusions, avoidance, hypervigilance). On operant conditioning, this statement is right: avoidance can be reinforced by short-term anxiety reduction, maintaining PTSD cycles. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t5-ms-08",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "Rural client stops antidepressants after TikTok stigma (“meds = weakness”), sleep crashes, depression worsens. Barriers to care are high. Plan: stigma counseling, telehealth CBT, collaborative med education, safety planning.",
    "statements": [
      {
        "text": "Stigma is a real barrier to treatment utilization.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Rural client stops antidepressants after TikTok stigma (“meds = weakness”), sleep crashes, depression worsens). On social, stress/health, I-O, or clinical psychology, this statement is right: stigma is a real barrier to treatment utilization. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Abrupt medication changes and sleep loss can worsen clinical status—coordinate care.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies sleep and consciousness to this vignette (Rural client stops antidepressants after TikTok stigma (“meds = weakness”), sleep crashes, depression worsens). On sleep and consciousness, this statement is right: abrupt medication changes and sleep loss can worsen clinical status—coordinate care. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Telehealth can reduce some access barriers when available.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Rural client stops antidepressants after TikTok stigma (“meds = weakness”), sleep crashes, depression worsens). On social, stress/health, I-O, or clinical psychology, this statement is right: telehealth can reduce some access barriers when available. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Stigma posts prove medications are never appropriate for depression.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Rural client stops antidepressants after TikTok stigma (“meds = weakness”), sleep crashes, depression worsens), the claim is not a sound application of disorders and therapy. On disorders and therapy, this statement goes wrong: it is not the case that stigma posts prove medications are never appropriate for depression. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Psychosocial and biomedical tools can be integrated rather than framed as mutually exclusive morality.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Rural client stops antidepressants after TikTok stigma (“meds = weakness”), sleep crashes, depression worsens). On social, stress/health, I-O, or clinical psychology, this statement is right: psychosocial and biomedical tools can be integrated rather than framed as mutually exclusive morality. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t5-ms-09",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "Hospital replaces ERP for OCD with “energy tapping” based on testimonials (availability) after a morale boost during rollout (attention effects). Methods psychologist demands outcome evidence before dropping exposure.",
    "statements": [
      {
        "text": "Testimonials are weak efficacy evidence compared with controlled outcome studies.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies anecdotal / selected-testimonial evidence to this vignette (Hospital replaces ERP for OCD with “energy tapping” based on testimonials (availability) after a morale boost during rollout (attention effects)). On anecdotal / selected-testimonial evidence, this statement is right: testimonials are weak efficacy evidence compared with controlled outcome studies. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Transient morale/attention effects can mimic early improvement without durable specific efficacy.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Hospital replaces ERP for OCD with “energy tapping” based on testimonials (availability) after a morale boost during rollout (attention effects)). On social, stress/health, I-O, or clinical psychology, this statement is right: transient morale/attention effects can mimic early improvement without durable specific efficacy. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "ERP/exposure-based care has a stronger evidence tradition for OCD than energy tapping testimonials.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies anecdotal / selected-testimonial evidence to this vignette (Hospital replaces ERP for OCD with “energy tapping” based on testimonials (availability) after a morale boost during rollout (attention effects)). On anecdotal / selected-testimonial evidence, this statement is right: eRP/exposure-based care has a stronger evidence tradition for OCD than energy tapping testimonials. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Availability of emotional stories outranks RCTs for deciding first-line OCD care.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Hospital replaces ERP for OCD with “energy tapping” based on testimonials (availability) after a morale boost during rollout (attention effects)), the claim is not a sound application of judgment heuristics and biases. On judgment heuristics and biases, this statement goes wrong: it is not the case that availability of emotional stories outranks RCTs for deciding first-line OCD care. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Mechanism vagueness does not make tapping superior to extinction-based approaches.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Hospital replaces ERP for OCD with “energy tapping” based on testimonials (availability) after a morale boost during rollout (attention effects)). On social, stress/health, I-O, or clinical psychology, this statement is right: mechanism vagueness does not make tapping superior to extinction-based approaches. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t5-ms-10",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "Online pile-on: likes reinforce harsher posts (VR), outrage videos leave residual arousal that transfers to new targets, moderators blame “true aggressive personality only.” Policy debate on redesigning contingencies.",
    "statements": [
      {
        "text": "Intermittent social rewards can escalate aggressive posting.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies operant conditioning to this vignette (Online pile-on: likes reinforce harsher posts (VR), outrage videos leave residual arousal that transfers to new targets,…). On operant conditioning, this statement is right: intermittent social rewards can escalate aggressive posting. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Residual arousal can amplify aggressive responses to new targets.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Online pile-on: likes reinforce harsher posts (VR), outrage videos leave residual arousal that transfers to new targets,…). On social, stress/health, I-O, or clinical psychology, this statement is right: residual arousal can amplify aggressive responses to new targets. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Platform design contingencies are intervention points beyond trait fatalism.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Online pile-on: likes reinforce harsher posts (VR), outrage videos leave residual arousal that transfers to new targets,…). On social, stress/health, I-O, or clinical psychology, this statement is right: platform design contingencies are intervention points beyond trait fatalism. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Variable-ratio likes extinguish posting by definition, so reinforcement cannot explain escalation.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Online pile-on: likes reinforce harsher posts (VR), outrage videos leave residual arousal that transfers to new targets,…), the claim is not a sound application of operant conditioning. On operant conditioning, this statement goes wrong: it is not the case that variable-ratio likes extinguish posting by definition, so reinforcement cannot explain escalation. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Trait explanations can coexist with situational amplifiers—but traits alone rarely excuse ignoring contingencies.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies social, stress/health, I-O, or clinical psychology to this vignette (Online pile-on: likes reinforce harsher posts (VR), outrage videos leave residual arousal that transfers to new targets,…). On social, stress/health, I-O, or clinical psychology, this statement is right: trait explanations can coexist with situational amplifiers—but traits alone rarely excuse ignoring contingencies. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      }
    ]
  },
  {
    "id": "t5-ms-11",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "Every statement here is a clinical/social myth trap: bystander effect means larger crowds always help more; Type A hostility is unrelated to health research themes; SSRIs prove therapy is useless; graphology is gold-standard leadership selection; obedience research implies modern authority cues never influence harm-doing.",
    "statements": [
      {
        "text": "Bystander effect means larger crowds always help more.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Every statement here is a clinical/social myth trap: bystander effect means larger crowds always help more; Type A hostility is…), the claim is not a sound application of social psychology. On social psychology, this statement goes wrong: it is not the case that bystander effect means larger crowds always help more. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Hostility components in Type A research were never linked to health discussions.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Every statement here is a clinical/social myth trap: bystander effect means larger crowds always help more; Type A hostility is…), the claim is not a sound application of stress and health. On stress and health, this statement goes wrong: it is not the case that hostility components in Type A research were never linked to health discussions. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "SSRIs prove psychotherapy is useless for all conditions.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Every statement here is a clinical/social myth trap: bystander effect means larger crowds always help more; Type A hostility is…), the claim is not a sound application of disorders and therapy. On disorders and therapy, this statement goes wrong: it is not the case that sSRIs prove psychotherapy is useless for all conditions. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Graphology is a gold-standard, validated leadership selection tool.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Every statement here is a clinical/social myth trap: bystander effect means larger crowds always help more; Type A hostility is…), the claim is not a sound application of I-O psychology. On I-O psychology, this statement goes wrong: it is not the case that graphology is a gold-standard, validated leadership selection tool. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Modern authority cues never influence harm-doing because classic obedience work failed to replicate at 100%.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Every statement here is a clinical/social myth trap: bystander effect means larger crowds always help more; Type A hostility is…), the claim is not a sound application of social psychology. On social psychology, this statement goes wrong: it is not the case that modern authority cues never influence harm-doing because classic obedience work failed to replicate at 100%. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  },
  {
    "id": "t5-ms-12",
    "topic": 5,
    "topicLabel": "Social, Health & Clinical",
    "chapters": [
      12,
      13,
      14,
      15,
      16
    ],
    "scenario": "Keep only the accurate public-health persuasion claim: fear appeals about binge drinking work better when paired with specific, credible response-efficacy steps; fear alone can trigger reactance or denial.",
    "statements": [
      {
        "text": "Fear plus clear efficacy/action steps is generally wiser than fear-only messaging.",
        "correct": true,
        "explain": "Select this statement. It belongs in the exact set because it correctly applies developmental psychology to this vignette (Keep only the accurate public-health persuasion claim: fear appeals about binge drinking work better when paired with specific,…). On developmental psychology, this statement is right: fear plus clear efficacy/action steps is generally wiser than fear-only messaging. Marking it selected (while leaving false near-misses unchecked) is what an exact-set score requires."
      },
      {
        "text": "Maximum fear without efficacy advice is always optimal for every audience.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Keep only the accurate public-health persuasion claim: fear appeals about binge drinking work better when paired with specific,…), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that maximum fear without efficacy advice is always optimal for every audience. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Reactance never occurs in health campaigns.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Keep only the accurate public-health persuasion claim: fear appeals about binge drinking work better when paired with specific,…), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that reactance never occurs in health campaigns. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Celebrity liking is definitionally central-route processing of vaccine statistics.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Keep only the accurate public-health persuasion claim: fear appeals about binge drinking work better when paired with specific,…), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that celebrity liking is definitionally central-route processing of vaccine statistics. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      },
      {
        "text": "Optimistic bias means no health message can ever influence anyone, so drop efficacy content.",
        "correct": false,
        "explain": "Leave this statement unchecked. In this vignette (Keep only the accurate public-health persuasion claim: fear appeals about binge drinking work better when paired with specific,…), the claim is not a sound application of social, stress/health, I-O, or clinical psychology. On social, stress/health, I-O, or clinical psychology, this statement goes wrong: it is not the case that optimistic bias means no health message can ever influence anyone, so drop efficacy content. Selecting it is a common trap: adding an incorrect or overreaching option to the set when an exact match requires leaving it off."
      }
    ]
  }
];
