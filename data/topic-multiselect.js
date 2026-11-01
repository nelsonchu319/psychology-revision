/**
 * Topic multi-select practice items (5 big topics).
 * Schema: { id, topic, topicLabel, chapters, scenario, statements[{text,correct,explain}], mode, type }
 * Scoring: exact set match (all true selected, no false selected).
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
        "explain": "People who endorse this confuse a self-selected correlational comparison with an experiment. Without random assignment and controls, third variables (income, motivation, concurrent sleep coaching) remain."
      },
      {
        "text": "Nonresponse among surveyed subscribers can bias the estimated association if happier users are more likely to reply.",
        "correct": true,
        "explain": "Selective responding is a classic survey threat: if satisfied customers answer more, the observed link inflates."
      },
      {
        "text": "Running sleep-coaching emails only for subscribers introduces a confound that rivals the app itself as an explanation for any well-being difference.",
        "correct": true,
        "explain": "A concurrent intervention that covaries with membership blocks clean attribution to the app."
      },
      {
        "text": "Refusing random assignment for VIP reasons preserves internal validity while still allowing a true experiment on causation.",
        "correct": false,
        "explain": "Blocking randomization for preferred customers reintroduces selection; that is not a true experiment’s internal-validity advantage."
      },
      {
        "text": "If psychology were only common sense, contradictory “obvious” predictions would never appear and controlled methods would be unnecessary—but history shows intuitions often conflict, which is why research designs matter.",
        "correct": true,
        "explain": "Common-sense claims pull both ways; methods adjudicate. This statement correctly challenges the blogger’s dismissal."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Freud is historical; modern psychology is multi-perspective. Unfalsifiable blanket sexual-conflict claims are not the standard explanatory toolkit for lateness."
      },
      {
        "text": "Using empathy in therapy does not by itself remove psychology from science; scientific status hinges more on systematic observation, measurement, and testable claims in research.",
        "correct": true,
        "explain": "Clinical warmth and scientific methods address different goals; empathy ≠ anti-science."
      },
      {
        "text": "Testimonials from students who already like the app are weak evidence for efficacy because of selection and expectancy biases.",
        "correct": true,
        "explain": "Friends who opted in are not a control comparison."
      },
      {
        "text": "A stronger test would assign comparable students to app vs no-app (or alternative support) and track lateness with predefined measures.",
        "correct": true,
        "explain": "Randomized or otherwise controlled comparisons beat anecdotal endorsement."
      },
      {
        "text": "Structuralism’s introspection method is the best modern tool for proving the attendance app causes fewer late arrivals.",
        "correct": false,
        "explain": "Introspection is historical and subjective; causal claims about apps need behavioral outcome designs, not structuralist introspection."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Correlation ≠ causation; wealth, clinics, and crime are plausible confounds."
      },
      {
        "text": "Socioeconomic and healthcare differences across neighborhoods are credible third variables that can create a spurious park–stress association.",
        "correct": true,
        "explain": "Confounds threaten causal inference from ecological correlations."
      },
      {
        "text": "A longitudinal design following movers can help by examining within-person change, though it still needs careful controls for why families move.",
        "correct": true,
        "explain": "Within-person change helps but selection into moving remains."
      },
      {
        "text": "Photos of smiling visitors are sufficient experimental evidence that acreage causes population-level stress reduction.",
        "correct": false,
        "explain": "Selective images are not controlled outcome data."
      },
      {
        "text": "Reverse causality (stress reducing park use) is conceptually possible and is one reason a simple correlation cannot settle directionality.",
        "correct": true,
        "explain": "Directionality ambiguity is a core correlational limit."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Role as staff does not waive human-subjects protections."
      },
      {
        "text": "Limited deception can be ethically considered when justified, minimized, and paired with prompt debriefing—but it is not a blank check.",
        "correct": true,
        "explain": "Ethics allows constrained deception with safeguards, not casual lying."
      },
      {
        "text": "Because workshops teach coping, no consent or debrief is required under any research ethics framework.",
        "correct": false,
        "explain": "Teaching content doesn’t erase consent/debrief duties when collecting research data."
      },
      {
        "text": "Publishing identifiable clinical stories without consent violates confidentiality/privacy expectations central to research ethics.",
        "correct": true,
        "explain": "Identifiable disclosure needs permission or robust de-identification."
      },
      {
        "text": "Demand characteristics only occur in animal research, so deception about hypotheses is irrelevant in human workshop studies.",
        "correct": false,
        "explain": "Humans famously show demand characteristics; that’s often why limited deception is discussed."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Couch therapy tracks more with psychoanalytic clinical tradition, not Wundt’s lab project."
      },
      {
        "text": "Functionalism emphasized functions of mind/behavior in adaptation more than exclusive focus on dream symbolism.",
        "correct": true,
        "explain": "Dream symbolism is not the functionalist core."
      },
      {
        "text": "The cognitive revolution renewed scientific study of mental processes; it did not empirically abolish operant reinforcement as a useful analysis of many behaviors.",
        "correct": true,
        "explain": "Cognitive science complements rather than deletes behavioral principles in applied settings."
      },
      {
        "text": "Skinnerian reinforcement has zero remaining relevance anywhere after cognitive psychology emerged.",
        "correct": false,
        "explain": "Applied behavior analysis and learning science still use reinforcement extensively."
      },
      {
        "text": "Saying psychology has a single founder who also created all modern clinical methods is historically accurate.",
        "correct": false,
        "explain": "Psychology’s history is multi-threaded across labs, clinics, and schools of thought."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Correlation magnitude ≠ causal slope guarantee."
      },
      {
        "text": "Volunteer-only samples can distort estimates via selection and restricted range relative to all students.",
        "correct": true,
        "explain": "Who enters the sample matters for generalizability and observed correlations."
      },
      {
        "text": "Snacks and encouragement bundled with tutoring are potential confounds for attributing gains solely to instructional hours.",
        "correct": true,
        "explain": "Multiple elements covary with “tutoring hours.”"
      },
      {
        "text": "Birth-month splitting of volunteers is genuine random assignment of the tutoring manipulation.",
        "correct": false,
        "explain": "Birth month doesn’t randomly assign the treatment; it’s not a randomized experiment of tutoring."
      },
      {
        "text": "If r is positive, third variables are mathematically impossible.",
        "correct": false,
        "explain": "Confounds can produce positive r."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Manipulation + comparison is the experimental advantage."
      },
      {
        "text": "A single diary case study (A) can vividly illustrate experience but cannot securely establish general causal efficacy for the workforce.",
        "correct": true,
        "explain": "Case studies are rich but limited for causal generalization."
      },
      {
        "text": "The correlational survey (B) alone is equally strong as (C) for proving the audio causes burnout reduction.",
        "correct": false,
        "explain": "Correlation lacks the control of random assignment."
      },
      {
        "text": "Validated outcome measures help with construct validity regardless of design, but they do not convert a correlation into an experiment.",
        "correct": true,
        "explain": "Good measurement ≠ causal design."
      },
      {
        "text": "Quiet-break controls are useless because placebo and time-off effects never threaten wellness-intervention conclusions.",
        "correct": false,
        "explain": "Nonspecific break/rest effects are exactly why controls matter."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Operations make empirical debate possible."
      },
      {
        "text": "Refusing to define variables at all protects scientific rigor better than imperfect operationalizations.",
        "correct": false,
        "explain": "Undefined variables cannot be systematically studied."
      },
      {
        "text": "Experimenter expectancy and placebo-like expectancy effects can bias psychological studies, not only pharmacology.",
        "correct": true,
        "explain": "Expectancy threats are broad."
      },
      {
        "text": "Double-blind designs can reduce some bias when neither participant nor interacting researcher knows condition assignment.",
        "correct": true,
        "explain": "That’s the double-blind logic Student C is reaching for."
      },
      {
        "text": "If a study is about praise, expectancy effects are impossible because praise is not a pill.",
        "correct": false,
        "explain": "Social interventions still carry expectancy and demand risks."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Replication is informative but not a binary field funeral."
      },
      {
        "text": "Underpowered replications can miss real effects; power matters for interpreting nulls.",
        "correct": true,
        "explain": "Null results need design context."
      },
      {
        "text": "Changed operational details can mean the replication tests a related but not identical claim.",
        "correct": true,
        "explain": "Conceptual vs direct replication distinctions matter."
      },
      {
        "text": "Peer review guarantees that published findings remain true forever without further testing.",
        "correct": false,
        "explain": "Peer review is a filter, not eternal verification."
      },
      {
        "text": "Open science practices like pre-registration can reduce some questionable research practices, though they don’t magically end all error.",
        "correct": true,
        "explain": "Reforms help; they aren’t omnipotent."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "IV = manipulated; DV = measured outcome."
      },
      {
        "text": "Careful observation alone turns naturalistic cafeteria watching into a true experiment with random assignment.",
        "correct": false,
        "explain": "Experiments require manipulation (typically) and control features—not merely careful looking."
      },
      {
        "text": "Confusing IV/DV undermines students’ ability to interpret causal graphs and method sections.",
        "correct": true,
        "explain": "The labels encode design roles."
      },
      {
        "text": "Naturalistic observation can be valuable for description even when it is not experimental.",
        "correct": true,
        "explain": "Descriptive methods have legitimate uses."
      },
      {
        "text": "Dependent variables are always manipulated by the experimenter while independent variables are only measured.",
        "correct": false,
        "explain": "That reverses the standard IV/DV roles."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Operations must fit the construct and study goals; ad smiles are not automatically valid happiness measures."
      },
      {
        "text": "A correlational dashboard alone proves causation of purchase by ad exposure.",
        "correct": false,
        "explain": "Correlation ≠ causation."
      },
      {
        "text": "Random assignment is always unethical in all human research contexts, so experiments are impossible.",
        "correct": false,
        "explain": "Many experiments randomize ethically with consent; blanket ban is false."
      },
      {
        "text": "Placebo/expectancy effects never appear in psychology—only in drug trials.",
        "correct": false,
        "explain": "Expectancy effects appear widely."
      },
      {
        "text": "Peer review removes any need for replication forever.",
        "correct": false,
        "explain": "Replication remains essential; peer review isn’t omniscience."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Unfalsifiable slogans stall science."
      },
      {
        "text": "In experiments, independent variables are manipulated (when the design is experimental).",
        "correct": true,
        "explain": "IV role."
      },
      {
        "text": "Dependent variables are measured as outcomes.",
        "correct": true,
        "explain": "DV role."
      },
      {
        "text": "Confounds threaten internal validity of causal claims.",
        "correct": true,
        "explain": "Core validity threat."
      },
      {
        "text": "More representative sampling generally supports broader generalization (external validity concerns).",
        "correct": true,
        "explain": "Sampling ↔ generalization."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Synaptic chemical transmission is the standard picture; the wire metaphor misleads."
      },
      {
        "text": "Endocrine signals can influence mood, but a monocausal “pituitary paints the cortex” story is too thin for a post-concussion mood dip.",
        "correct": true,
        "explain": "Hormones matter; monocausal pituitary-painting does not."
      },
      {
        "text": "Sleepiness from arousal-network disruption expands iconic sensory memory so absolute threshold becomes photographic for hours.",
        "correct": false,
        "explain": "Lower arousal does not unlock unlimited sensory storage or photographic thresholds."
      },
      {
        "text": "Absolute threshold means she now consciously stores every photon as a permanent episodic memory of the clinic visit.",
        "correct": false,
        "explain": "Threshold ≠ photographic episodic encoding."
      },
      {
        "text": "Action potentials grow stronger without limit as they travel axons, which is why concussion recovery is guaranteed in milliseconds.",
        "correct": false,
        "explain": "Action potentials are all-or-none regenerations, not endlessly amplifying; recovery isn’t millisecond-guaranteed."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "The REM-only permanent storage claim is garbled; adenosine antagonism is the relevant teaching point."
      },
      {
        "text": "Bright phone light at night cannot affect circadian timing because circadian photoreception only names daytime colors via cones.",
        "correct": false,
        "explain": "Non-image-forming pathways can shift circadian timing; the daytime-cones-only claim is false."
      },
      {
        "text": "If workers feel subjectively alert after espresso, micro-sleep risk while driving is scientifically impossible.",
        "correct": false,
        "explain": "Subjective confidence ≠ objective alertness; sleep debt still impairs."
      },
      {
        "text": "REM rebound after deprivation means you can safely skip nightly sleep whenever espresso is available.",
        "correct": false,
        "explain": "Stimulants don’t erase sleep need or make deprivation safe."
      },
      {
        "text": "Homeostatic sleep pressure can be deleted forever by a single 4 a.m. espresso, so the two-process model is obsolete.",
        "correct": false,
        "explain": "Espresso does not delete homeostatic pressure; circadian + homeostatic processes still apply."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Bias ≠ sensitivity."
      },
      {
        "text": "Lea’s claim that incentives permanently rewired absolute threshold as a sensory hardware constant mismarks a decision-criterion shift.",
        "correct": true,
        "explain": "Classic SDT teaching point."
      },
      {
        "text": "Gestalt closure can organize perception of incomplete figures but does not literally increase the physical decibel level of the tone in the apparatus.",
        "correct": true,
        "explain": "Organization ≠ amplifier physics."
      },
      {
        "text": "Signal detection theory is irrelevant to psychology because thresholds are always fixed intensities with zero false alarms by definition.",
        "correct": false,
        "explain": "SDT was developed precisely because false alarms and bias matter."
      },
      {
        "text": "If Ken’s d′ is unchanged, calling his performance “better hearing” is misleading; he may simply be saying “yes” more.",
        "correct": true,
        "explain": "Liberal bias looks like more detections including false ones."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Seeing involves brain pathways beyond the eyeball."
      },
      {
        "text": "Blindsight-like dissociations show some visually guided behavior can occur without normal conscious seeing.",
        "correct": true,
        "explain": "That’s the phenomenon’s teaching value."
      },
      {
        "text": "Dopamine at the neuromuscular junction explains conscious visual experience of lights.",
        "correct": false,
        "explain": "NMJ chemistry is about muscle activation, not visual awareness."
      },
      {
        "text": "Primary visual cortex damage can disrupt conscious vision even when subcortical routes support limited responding.",
        "correct": true,
        "explain": "Rough clinical teaching model."
      },
      {
        "text": "If someone denies seeing, all visually guided pointing must be fraudulent acting.",
        "correct": false,
        "explain": "Dissociations challenge that assumption."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "ANS branches are often opposing/complementary, not locked at dual max."
      },
      {
        "text": "The peripheral nervous system carries critical traffic; saying only CNS matters for stress responding is incomplete.",
        "correct": true,
        "explain": "PNS matters."
      },
      {
        "text": "Intense sound exposure is a biologically plausible contributor to tinnitus-like ringing; dismissing it as pure Gestalt top-down is risky.",
        "correct": true,
        "explain": "Bottom-up damage/risk is real."
      },
      {
        "text": "Sympathetic and parasympathetic systems are identical to the endocrine system’s glands and ducts.",
        "correct": false,
        "explain": "ANS ≠ endocrine, though they interact."
      },
      {
        "text": "Bottom-up sensory intensity and top-down interpretation can jointly shape experience; extreme loudness still warrants hearing-health caution.",
        "correct": true,
        "explain": "Both levels matter; caution stands."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Behavioral disinhibition ≠ stimulant category."
      },
      {
        "text": "Different drug classes act on different neurotransmitter systems; opioids and caffeine are not identical in receptor action.",
        "correct": true,
        "explain": "Lumping them erases pharmacology."
      },
      {
        "text": "Hallucinogens primarily alter brain synaptic signaling related to perception/cognition—not “only spinal cord.”",
        "correct": true,
        "explain": "Spinal-only claim is wrong."
      },
      {
        "text": "Alcohol often disrupts normal sleep architecture; rebound phenomena can appear as use patterns change—so “alcohol improves architecture, no rebound” is misleading.",
        "correct": true,
        "explain": "Sleep + alcohol myths are common."
      },
      {
        "text": "Because alcohol increases social talk, it must raise dopamine at the neuromuscular junction to create vocabulary.",
        "correct": false,
        "explain": "NMJ story is irrelevant to intoxication’s social disinhibition."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Artists rely on monocular cues."
      },
      {
        "text": "Binocular disparity is important in real scenes but not the sole possible depth cue.",
        "correct": true,
        "explain": "Multiple cue systems exist."
      },
      {
        "text": "Conductive hearing problems are physical transmission issues—not “only psychological” because place theory exists.",
        "correct": true,
        "explain": "Place theory doesn’t psychologize conductive loss away."
      },
      {
        "text": "Figure–ground organization illustrates constructive perception; attention can modulate what becomes figure.",
        "correct": true,
        "explain": "Selection shapes awareness."
      },
      {
        "text": "Attention never influences perception; sensory receptors alone determine all organized experience without top-down factors.",
        "correct": false,
        "explain": "Top-down/attentional effects are well established."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Experience modulation ≠ receptor erasure."
      },
      {
        "text": "Stage show tropes of total mind-control poorly represent ethical clinical hypnosis practice.",
        "correct": true,
        "explain": "Popular myth vs clinical framing."
      },
      {
        "text": "Hypnosis is not an automatic replacement for medically indicated anesthesia.",
        "correct": true,
        "explain": "Scope limits matter."
      },
      {
        "text": "Meditation practice does not scientifically license never sleeping again.",
        "correct": true,
        "explain": "Sleep remains a biological need."
      },
      {
        "text": "If distress drops under hypnosis, pain pathways and nervous system activity are proven completely offline forever.",
        "correct": false,
        "explain": "Reduced distress ≠ permanent pathway shutdown."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Standard heritability literacy."
      },
      {
        "text": "Insomnia interventions targeting behavior/environment can still matter even when traits show heritability.",
        "correct": true,
        "explain": "Heritable ≠ unchangeable."
      },
      {
        "text": "Emotion involves distributed neural systems; the “left-brained people have no amygdala emotion” story is a mythic oversimplification.",
        "correct": true,
        "explain": "Pop lateralization myths mislead."
      },
      {
        "text": "If heritability is nonzero, environmental sleep hygiene is logically impossible to help anyone.",
        "correct": false,
        "explain": "False dichotomy."
      },
      {
        "text": "Epigenetic and experiential factors can influence how genetic predispositions are expressed in health behaviors.",
        "correct": true,
        "explain": "Gene–environment interplay theme."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Classic division of labor."
      },
      {
        "text": "Dark adaptation has substantial peripheral physiological components (photopigment recovery, etc.), not expectancy alone.",
        "correct": true,
        "explain": "Not purely psychological wish."
      },
      {
        "text": "Transduction converts physical stimulus energy into neural signals; it is not semantic literary comprehension in the retina.",
        "correct": true,
        "explain": "Keep levels of analysis straight."
      },
      {
        "text": "Expectancy and attention can influence reports, but they don’t replace photoreceptor physiology in explaining dark adaptation curves.",
        "correct": true,
        "explain": "Both can matter; physiology is central here."
      },
      {
        "text": "Cones exclusively mediate all scotopic night vision while rods only detect color hue.",
        "correct": false,
        "explain": "Reverses rod/cone roles."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Caffeine masks sleepiness; it doesn’t erase sleep need."
      },
      {
        "text": "Cones mediate the best vision in pitch darkness compared with rods.",
        "correct": false,
        "explain": "Rods dominate scotopic vision."
      },
      {
        "text": "Sympathetic nerves’ primary job is secreting insulin.",
        "correct": false,
        "explain": "Insulin is pancreatic endocrine; SNS is autonomic arousal circuitry."
      },
      {
        "text": "Absolute threshold means conscious detection of every single photon every time.",
        "correct": false,
        "explain": "Thresholds are probabilistic, not perfect photon counters for experience."
      },
      {
        "text": "Blindsight cases prove that literally everyone can see without eyes forever.",
        "correct": false,
        "explain": "Blindsight concerns brain pathway dissociations given eyes/retina input—not eyeless vision for all."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Core neuron physiology."
      },
      {
        "text": "Rods dominate vision under scotopic (very dim) conditions relative to cones.",
        "correct": true,
        "explain": "Rod/cone specialization."
      },
      {
        "text": "The SCN is central to circadian timing in mammals.",
        "correct": true,
        "explain": "Biological clock hub."
      },
      {
        "text": "Selective attention reflects limited-capacity filtering of sensory streams.",
        "correct": true,
        "explain": "Attention capacity."
      },
      {
        "text": "Top-down expectations can bias how ambiguous stimuli are perceived.",
        "correct": true,
        "explain": "Perception is constructive."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Operant extinction pattern."
      },
      {
        "text": "Intermittent praise can maintain hand-raising more durably than continuous praise once behavior is established.",
        "correct": true,
        "explain": "Partial reinforcement durability."
      },
      {
        "text": "Observational learning can transmit swear words when a model is attended to, remembered, and the behavior is motivated/reproduced—laugh tracks can function as vicarious reinforcement.",
        "correct": true,
        "explain": "Social learning ingredients."
      },
      {
        "text": "Labeling all three as classical conditioning of the hippocampus with flashbulb IQ correctly identifies the shared mechanism.",
        "correct": false,
        "explain": "Mixes classical vs operant vs observational and misuses memory/IQ jargon."
      },
      {
        "text": "Classical conditioning requires a voluntary skeletal response reinforced by candy removal.",
        "correct": false,
        "explain": "That confuses classical with operant; candy removal here is operant extinction contingency talk."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Desirable difficulty / testing effect themes."
      },
      {
        "text": "Metacognitive fluency is a poor guarantee of durable, transferable knowledge.",
        "correct": true,
        "explain": "Ease ≠ learning."
      },
      {
        "text": "Iconic sensory memory lasting a whole semester explains highlighting’s superiority.",
        "correct": false,
        "explain": "Iconic memory is ultra-brief, not semester storage."
      },
      {
        "text": "Availability of a bright visual memory for the page does not ensure retrieval of sepsis decision criteria.",
        "correct": true,
        "explain": "Remembering the page ≠ knowing the content."
      },
      {
        "text": "If something feels hard during practice, it must be ineffective encoding by definition.",
        "correct": false,
        "explain": "Desirable difficulties can feel harder yet yield better retention."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Classic heuristic pitfall."
      },
      {
        "text": "A vivid single story can inflate perceived likelihood via availability.",
        "correct": true,
        "explain": "Availability bias."
      },
      {
        "text": "Providing relevant base rates is a rational corrective step against prototype matching alone.",
        "correct": true,
        "explain": "Base-rate use helps."
      },
      {
        "text": "Heuristics are identical to guaranteed-correct algorithms in every hiring context.",
        "correct": false,
        "explain": "Heuristics are shortcuts—sometimes useful, sometimes biased—not guaranteed algorithms."
      },
      {
        "text": "Standard IQ tests are primarily phoneme-awareness batteries, so they settle engineering fit without other evidence.",
        "correct": false,
        "explain": "IQ tests target cognitive abilities more broadly; phoneme awareness is a language skill, and hiring needs job-related evidence."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Misinformation effect."
      },
      {
        "text": "Eyewitness confidence is an imperfect accuracy indicator under many conditions.",
        "correct": true,
        "explain": "Confidence ≠ accuracy."
      },
      {
        "text": "Stress and poor viewing conditions can weaken encoding quality.",
        "correct": true,
        "explain": "Encoding limits."
      },
      {
        "text": "Flashbulb-like vividness guarantees verbatim, unchangeable memory for peripheral details like glass.",
        "correct": false,
        "explain": "Vividness ≠ perfect accuracy."
      },
      {
        "text": "If memory were a perfect video recording, suggestion would never create glass reports—so reconstructive models fit this case better than a video model.",
        "correct": true,
        "explain": "Reconstructive memory framing."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Multiple memory systems."
      },
      {
        "text": "Neuromuscular-junction dopamine is not a complete theory of memory engrams for mirror tracing.",
        "correct": true,
        "explain": "NMJ ≠ declarative/procedural memory theory."
      },
      {
        "text": "Spaced, retrieval-rich simulation often beats one-day massed slideshows for durable checklist performance.",
        "correct": true,
        "explain": "Spacing/retrieval."
      },
      {
        "text": "If episodic report fails, no learning of any kind is possible by definition.",
        "correct": false,
        "explain": "Denies dissociations."
      },
      {
        "text": "Massed slideshows uniquely create permanent episodic flashbulb memories of procedures under stress.",
        "correct": false,
        "explain": "Massing often hurts long-term retention relative to spacing."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "VR schedules sustain responding."
      },
      {
        "text": "Subjective insight/pride does not guarantee the rule learned is correct.",
        "correct": true,
        "explain": "Metacognitive trap."
      },
      {
        "text": "Mental set can blind learners to counterexamples that should revise a grammar rule.",
        "correct": true,
        "explain": "Rigidity in problem solving."
      },
      {
        "text": "Algorithms, by definition, never fail—so wrong grammar after “insight” is impossible if any algorithm was used.",
        "correct": false,
        "explain": "People often use heuristics; even algorithms need correct application."
      },
      {
        "text": "Affective labeling of success can coexist with operant maintenance of study behavior.",
        "correct": true,
        "explain": "Motivation + learning together."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Assessment caution."
      },
      {
        "text": "Anxiety, noise, and threat can depress timed performance without rewriting the construct of g by themselves.",
        "correct": true,
        "explain": "Situational influences."
      },
      {
        "text": "Cutting recess is not an evidence-based method to raise crystallized intelligence.",
        "correct": true,
        "explain": "Wrong intervention."
      },
      {
        "text": "Crystallized intelligence lives on the basilar membrane and grows when recess is removed.",
        "correct": false,
        "explain": "Anatomy/intelligence mash-up myth."
      },
      {
        "text": "Interpreting scores requires attention to measurement error and testing conditions.",
        "correct": true,
        "explain": "Psychometric humility."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Methods 101."
      },
      {
        "text": "The biological mechanism stated is implausible as pitched.",
        "correct": true,
        "explain": "Buzzword biology."
      },
      {
        "text": "Expectancy/placebo-like effects can inflate self-rated “street smarts.”",
        "correct": true,
        "explain": "Expectancy threat."
      },
      {
        "text": "Mentioning the hippocampus converts correlational marketing into a randomized experiment.",
        "correct": false,
        "explain": "Anatomical nouns ≠ design."
      },
      {
        "text": "Sternberg’s triarchic ideas still require serious measurement—not gum slogans—to assess practical intelligence.",
        "correct": true,
        "explain": "Construct ≠ product claim."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Levels-of-processing theme."
      },
      {
        "text": "Varying contexts can aid transfer when tests change surface features.",
        "correct": true,
        "explain": "Flexible encoding."
      },
      {
        "text": "Iconic memory duration does not provide semester-long photographic notes.",
        "correct": true,
        "explain": "Sensory memory limits."
      },
      {
        "text": "Encoding specificity implies retrieval cues matching study conditions can help—but exclusive identical order rereading still may be shallow.",
        "correct": true,
        "explain": "Cue match helps; shallowness still hurts."
      },
      {
        "text": "Far transfer is guaranteed whenever serial order is held constant in study.",
        "correct": false,
        "explain": "Serial constancy doesn’t guarantee far transfer."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Representativeness risk."
      },
      {
        "text": "Fatigue and poor perceptual conditions can undermine careful systematic processing.",
        "correct": true,
        "explain": "Load/fatigue."
      },
      {
        "text": "Heuristics sometimes approximate good judgments but are not always Bayesian-optimal.",
        "correct": true,
        "explain": "Nuance."
      },
      {
        "text": "Media montages can inflate availability of a “fraudster look.”",
        "correct": true,
        "explain": "Availability."
      },
      {
        "text": "If a face feels typical, d′ sensitivity must have increased, making base rates irrelevant by signal-detection law.",
        "correct": false,
        "explain": "Confuses prototype feel with d′."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Classical vs operant are distinct procedures."
      },
      {
        "text": "Extinction deletes the CS from neural tissue forever so return of responding is impossible.",
        "correct": false,
        "explain": "Extinction isn’t unlearning-as-deletion; spontaneous recovery etc. exist."
      },
      {
        "text": "Chunking expands iconic sensory memory duration to multi-hour storage.",
        "correct": false,
        "explain": "Chunking aids working memory; iconic stays brief."
      },
      {
        "text": "Misinformation effects only alter procedural memories for riding bikes.",
        "correct": false,
        "explain": "Episodic report is the usual classroom example."
      },
      {
        "text": "A person’s IQ score is the Flynn effect itself.",
        "correct": false,
        "explain": "Flynn effect is generational score rise, not an individual’s IQ synonym."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Core encoding idea."
      },
      {
        "text": "Sensory memory stores textbooks verbatim for years without consolidation.",
        "correct": false,
        "explain": "Sensory memory is fleeting."
      },
      {
        "text": "Retrieval practice weakens memory every time you test yourself.",
        "correct": false,
        "explain": "Testing often strengthens learning."
      },
      {
        "text": "All forgetting is only decay of iconic memory after 30 seconds in adults.",
        "correct": false,
        "explain": "Multiple forgetting mechanisms exist."
      },
      {
        "text": "Flashbulb vividness guarantees courtroom-perfect accuracy.",
        "correct": false,
        "explain": "Vivid ≠ verified accuracy."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Selection confound."
      },
      {
        "text": "Prompted jargon is not the same as spontaneous formal operational reasoning.",
        "correct": true,
        "explain": "Stage criteria ≠ parroting."
      },
      {
        "text": "Mozart packages have not been shown to yank children into formal operations as advertised.",
        "correct": true,
        "explain": "Overclaim."
      },
      {
        "text": "Waitlists equal random assignment whenever parents self-select.",
        "correct": false,
        "explain": "Self-selection ≠ randomization."
      },
      {
        "text": "Object permanence failure in infants proves flashcards are the only route to hypothetico-deductive thought.",
        "correct": false,
        "explain": "Non sequitur across stages."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Attachment assessment emphasis."
      },
      {
        "text": "Blanket ignoring of distress is not a sensitive shortcut to security.",
        "correct": true,
        "explain": "Caregiver sensitivity matters."
      },
      {
        "text": "Candy-for-silence continuous reinforcement may suppress crying without building secure working models.",
        "correct": true,
        "explain": "Different goals."
      },
      {
        "text": "Any daycare crying proves irreversible disorganized attachment requiring candy classical conditioning of the id.",
        "correct": false,
        "explain": "Overdiagnosis + conceptual mash-up."
      },
      {
        "text": "Attachment patterns are relationship-and-history informed, not a one-cry diagnosis.",
        "correct": true,
        "explain": "Contextual."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Gene–environment literacy."
      },
      {
        "text": "Alcohol is a known teratogen with fetal neurodevelopmental risks tied to exposure timing/amount.",
        "correct": true,
        "explain": "Prenatal risk."
      },
      {
        "text": "Twin heritability findings do not imply parenting or prenatal environment are irrelevant for individuals.",
        "correct": true,
        "explain": "Misread of heritability."
      },
      {
        "text": "If a trait is heritable at all, teratogen advice is scientifically meaningless.",
        "correct": false,
        "explain": "False dichotomy."
      },
      {
        "text": "Sensitive periods mean some exposures matter more at certain developmental windows.",
        "correct": true,
        "explain": "Timing matters."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Multiple motivation accounts."
      },
      {
        "text": "Appraisal of arousal as threat vs challenge can relate to different performance patterns.",
        "correct": true,
        "explain": "Emotion/stress appraisal."
      },
      {
        "text": "Drive-reduction slogans uniquely explain all human eating under stress with no role for learning.",
        "correct": false,
        "explain": "Overclaim."
      },
      {
        "text": "Affect labeling and contingency awareness can be part of changing coping responses.",
        "correct": true,
        "explain": "Clinical/practical."
      },
      {
        "text": "Variable-ratio candy wins at work cannot influence behavior when cortisol is high.",
        "correct": false,
        "explain": "Reinforcement still operates under stress."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Forecasting errors."
      },
      {
        "text": "Fluent rehearsal of bleak forecasts can increase their subjective believability without proving accuracy.",
        "correct": true,
        "explain": "Metacognition/memory fluency."
      },
      {
        "text": "Behavioral activation and checking evidence can counteract withdrawal that maintains dysphoria.",
        "correct": true,
        "explain": "Motivation/clinical bridge."
      },
      {
        "text": "Current mood is an infallible crystal ball for multi-year outcomes, so forecasting research is irrelevant.",
        "correct": false,
        "explain": "Mood-as-oracle myth."
      },
      {
        "text": "Retrieval practice of doom predictions is desirable difficulty that reliably builds optimistic explanatory style.",
        "correct": false,
        "explain": "Wrong application of desirable difficulty."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Assessment standards."
      },
      {
        "text": "Job-related structured interviews/work samples often have stronger validity evidence than informal trait cut scores from social media.",
        "correct": true,
        "explain": "I-O evidence themes."
      },
      {
        "text": "Agreeableness cut scores from 10 meme items are automatically content-valid for all nursing tasks.",
        "correct": false,
        "explain": "Validity doesn’t transfer by assertion."
      },
      {
        "text": "Personality can inform fit but must meet reliability/validity/fairness scrutiny in selection.",
        "correct": true,
        "explain": "Responsible use."
      },
      {
        "text": "If a quiz is popular, adverse impact and validity concerns disappear legally and scientifically.",
        "correct": false,
        "explain": "Popularity ≠ validity."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Internal validity."
      },
      {
        "text": "Tutoring and sleep support are plausible drivers of grade changes.",
        "correct": true,
        "explain": "Rival explanations."
      },
      {
        "text": "Mastery-goal shifts concentrated in tutored students weaken the posters-only story.",
        "correct": true,
        "explain": "Pattern of data."
      },
      {
        "text": "Unconditional positive regard posters are sufficient to prove causation of grade rises even without tutoring.",
        "correct": false,
        "explain": "Overclaim."
      },
      {
        "text": "Humanistic climate can be helpful for rapport but does not automatically license monocausal credit in confounded rollouts.",
        "correct": true,
        "explain": "Nuanced."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Adolescent process."
      },
      {
        "text": "Peer influence is real but does not reduce identity work to “no self.”",
        "correct": true,
        "explain": "Nuance."
      },
      {
        "text": "Authoritarian obedience is not the same construct as healthy identity achievement.",
        "correct": true,
        "explain": "Don’t conflate."
      },
      {
        "text": "Asch-like conformity means teens are incapable of principled reasoning in all domains.",
        "correct": false,
        "explain": "Overgeneralization."
      },
      {
        "text": "Trait labels alone, without developmental context, poorly explain a single political disagreement.",
        "correct": true,
        "explain": "Context > snap trait."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Excitation transfer / two-factor flavor."
      },
      {
        "text": "Equating raw arousal with the emotion of attraction without appraisal oversimplifies James–Lange-style teaching debates.",
        "correct": true,
        "explain": "Appraisal/label matters in modern framing."
      },
      {
        "text": "Cannon–Bard does not magically make misattribution experiments impossible.",
        "correct": true,
        "explain": "Caricatures aside."
      },
      {
        "text": "NMJ dopamine stores attraction engrams during bike pedaling, replacing cognitive labels.",
        "correct": false,
        "explain": "Biomyth."
      },
      {
        "text": "Two-factor-style ideas highlight arousal + cognitive interpretation.",
        "correct": true,
        "explain": "Core lesson."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Formulation humility."
      },
      {
        "text": "Stressors like job loss can exacerbate saving/hoarding-like behaviors.",
        "correct": true,
        "explain": "Stress link."
      },
      {
        "text": "Family modeling is a plausible learning contribution.",
        "correct": true,
        "explain": "Social learning."
      },
      {
        "text": "A TikTok Freudian label is sufficient assessment with DSM reliability.",
        "correct": false,
        "explain": "Pop diagnosis ≠ assessment."
      },
      {
        "text": "Trait scrupulosity/anxiety themes can inform CBT targets better than reel destiny talk.",
        "correct": true,
        "explain": "Treatment relevance."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Attachment is relational/developmental."
      },
      {
        "text": "Maslow proved public leaderboards always increase intrinsic mentoring.",
        "correct": false,
        "explain": "Misuses Maslow; extrinsic evaluation can crowd out."
      },
      {
        "text": "Grit posters extinguish effects of unpredictable punishment without contingency change.",
        "correct": false,
        "explain": "Posters ≠ contingency repair."
      },
      {
        "text": "Display rules mean infants show no emotion.",
        "correct": false,
        "explain": "Infants show affect; display rules are socialization of expression."
      },
      {
        "text": "Neuroticism forbids learning coping skills.",
        "correct": false,
        "explain": "Traits aren’t absolute learning bans."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Ainsworth-informed teaching point."
      },
      {
        "text": "Piaget’s formal operations begin prenatally when teratogens are absent.",
        "correct": false,
        "explain": "Stages timing wrong."
      },
      {
        "text": "Drive reduction uniquely explains human art motivation with zero cognition.",
        "correct": false,
        "explain": "Overclaim."
      },
      {
        "text": "Big Five traits are measured only by inkblots in modern I-O selection.",
        "correct": false,
        "explain": "Self-report inventories dominate; projective not gold standard for Big Five hiring."
      },
      {
        "text": "Identity achievement requires total isolation from peers forever.",
        "correct": false,
        "explain": "Absurd."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Media salience."
      },
      {
        "text": "Prototype matching can ignore base rates of managerial honesty.",
        "correct": true,
        "explain": "Representativeness."
      },
      {
        "text": "Fundamental attribution error themes appear when character is overweighted vs situation.",
        "correct": true,
        "explain": "FAE."
      },
      {
        "text": "Rumor-level data are enough for decisive character causation claims.",
        "correct": false,
        "explain": "Evidence quality low."
      },
      {
        "text": "Base-rate and situational information are rational correctives to prototype gossip.",
        "correct": true,
        "explain": "Debiasing."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Bystander classic."
      },
      {
        "text": "Pluralistic ignorance can lead people to interpret nonresponse as a cue that help isn’t needed.",
        "correct": true,
        "explain": "Ambiguity."
      },
      {
        "text": "Memory after the fact can reconstruct helpers who didn’t act.",
        "correct": true,
        "explain": "Reconstructive memory."
      },
      {
        "text": "Stress always increases helping via broaden-and-build, so training is unnecessary.",
        "correct": false,
        "explain": "Not reliable."
      },
      {
        "text": "Training that assigns responsibility and concrete steps can improve bystander intervention.",
        "correct": true,
        "explain": "Practical."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Incentive distortion."
      },
      {
        "text": "Punishing mentoring while rewarding count predicts less mentoring.",
        "correct": true,
        "explain": "Operant workplace."
      },
      {
        "text": "Theory Y posters override pay contingencies automatically.",
        "correct": false,
        "explain": "Rhetoric < contingencies."
      },
      {
        "text": "Aligning rewards with quality and helping can reshape climate more than slogans alone.",
        "correct": true,
        "explain": "Design fix."
      },
      {
        "text": "Diffusion of responsibility is the sole possible explanation, so incentives are irrelevant.",
        "correct": false,
        "explain": "Monocause fail."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Methods."
      },
      {
        "text": "Vivid cases inflate availability of a monocausal story.",
        "correct": true,
        "explain": "Heuristics."
      },
      {
        "text": "Poverty and healthcare access are plausible third variables for stress/health links.",
        "correct": true,
        "explain": "Confounds."
      },
      {
        "text": "SRRS checklist points are experimental manipulations proving causation by themselves.",
        "correct": false,
        "explain": "Checklists ≠ experiments."
      },
      {
        "text": "Policy claims need better causal designs than a single correlation + viral anecdote.",
        "correct": true,
        "explain": "Evidence hierarchy."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Two-factor-ish maintenance."
      },
      {
        "text": "Exposure/extinction logic targets learned fear more than catharsis theater.",
        "correct": true,
        "explain": "Treatment."
      },
      {
        "text": "Cathartic re-traumatization is the gold-standard mandatory first step for every phobia.",
        "correct": false,
        "explain": "Myth."
      },
      {
        "text": "Stress can potentiate anxiety responding without rewriting the learning account of avoidance.",
        "correct": true,
        "explain": "Interaction."
      },
      {
        "text": "If classical acquisition occurred, operant avoidance maintenance is logically impossible.",
        "correct": false,
        "explain": "Both can chain."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Cognitive model."
      },
      {
        "text": "Sleep disruption can worsen mood regulation.",
        "correct": true,
        "explain": "Biopsych/health."
      },
      {
        "text": "Forced gratitude alone rarely replaces structured depression care.",
        "correct": true,
        "explain": "Limits of positive gimmicks."
      },
      {
        "text": "Anhedonia means success memories were never encoded, so BA cannot help.",
        "correct": false,
        "explain": "False absolute."
      },
      {
        "text": "Combined psychosocial and biomedical options can be appropriate depending on severity.",
        "correct": true,
        "explain": "Stepped care spirit."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Memory science."
      },
      {
        "text": "Leading questions risk contaminating reports (misinformation).",
        "correct": true,
        "explain": "Suggestibility."
      },
      {
        "text": "Evidence-based trauma therapies exist that don’t rely on erase-the-tape hypnosis myths.",
        "correct": true,
        "explain": "Treatment literacy."
      },
      {
        "text": "Hypnosis guarantees deletion of episodic trauma without suggestion risk.",
        "correct": false,
        "explain": "Myth."
      },
      {
        "text": "Avoidance can be reinforced by short-term anxiety reduction, maintaining PTSD cycles.",
        "correct": true,
        "explain": "Learning."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Sociocultural."
      },
      {
        "text": "Abrupt medication changes and sleep loss can worsen clinical status—coordinate care.",
        "correct": true,
        "explain": "Clinical caution."
      },
      {
        "text": "Telehealth can reduce some access barriers when available.",
        "correct": true,
        "explain": "Systems."
      },
      {
        "text": "Stigma posts prove medications are never appropriate for depression.",
        "correct": false,
        "explain": "Ideology ≠ evidence."
      },
      {
        "text": "Psychosocial and biomedical tools can be integrated rather than framed as mutually exclusive morality.",
        "correct": true,
        "explain": "Biopsychosocial."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Methods."
      },
      {
        "text": "Transient morale/attention effects can mimic early improvement without durable specific efficacy.",
        "correct": true,
        "explain": "Nonspecific effects."
      },
      {
        "text": "ERP/exposure-based care has a stronger evidence tradition for OCD than energy tapping testimonials.",
        "correct": true,
        "explain": "Evidence hierarchy."
      },
      {
        "text": "Availability of emotional stories outranks RCTs for deciding first-line OCD care.",
        "correct": false,
        "explain": "Inverted hierarchy."
      },
      {
        "text": "Mechanism vagueness does not make tapping superior to extinction-based approaches.",
        "correct": true,
        "explain": "Logic."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Operant."
      },
      {
        "text": "Residual arousal can amplify aggressive responses to new targets.",
        "correct": true,
        "explain": "Excitation transfer."
      },
      {
        "text": "Platform design contingencies are intervention points beyond trait fatalism.",
        "correct": true,
        "explain": "Situationism + design."
      },
      {
        "text": "Variable-ratio likes extinguish posting by definition, so reinforcement cannot explain escalation.",
        "correct": false,
        "explain": "VR typically maintains."
      },
      {
        "text": "Trait explanations can coexist with situational amplifiers—but traits alone rarely excuse ignoring contingencies.",
        "correct": true,
        "explain": "Both/and with priority on design."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Opposite of classic finding direction."
      },
      {
        "text": "Hostility components in Type A research were never linked to health discussions.",
        "correct": false,
        "explain": "Hostility emphasized in later discussions."
      },
      {
        "text": "SSRIs prove psychotherapy is useless for all conditions.",
        "correct": false,
        "explain": "False opposition."
      },
      {
        "text": "Graphology is a gold-standard, validated leadership selection tool.",
        "correct": false,
        "explain": "Lacks validity."
      },
      {
        "text": "Modern authority cues never influence harm-doing because classic obedience work failed to replicate at 100%.",
        "correct": false,
        "explain": "Nuanced replication ≠ zero influence."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
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
        "explain": "Fear appeal literacy."
      },
      {
        "text": "Maximum fear without efficacy advice is always optimal for every audience.",
        "correct": false,
        "explain": "Backfire risk."
      },
      {
        "text": "Reactance never occurs in health campaigns.",
        "correct": false,
        "explain": "Reactance is real."
      },
      {
        "text": "Celebrity liking is definitionally central-route processing of vaccine statistics.",
        "correct": false,
        "explain": "Peripheral vs central mix-up."
      },
      {
        "text": "Optimistic bias means no health message can ever influence anyone, so drop efficacy content.",
        "correct": false,
        "explain": "Overgeneralization."
      }
    ],
    "mode": "topic-ms",
    "type": "multiselect"
  }
];
