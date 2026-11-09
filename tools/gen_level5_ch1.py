# -*- coding: utf-8 -*-
"""Chapter 1 Level 5 Mock — user-approved draft."""

def sc(id_, section, question, options, correct, correctFeedback, wrongFeedback, mode="mock"):
    return {
        "id": id_,
        "chapter": 1,
        "level": 5,
        "section": section,
        "question": question,
        "options": options,
        "correct": correct,
        "correctFeedback": correctFeedback,
        "wrongFeedback": {str(k): v for k, v in wrongFeedback.items()},
        "mode": mode,
    }

def ms(id_, section, question, options, correct, correctFeedback, wrongFeedback, mode="mock"):
    return {
        "id": id_,
        "chapter": 1,
        "level": 5,
        "section": section,
        "question": question,
        "options": options,
        "correct": correct,
        "type": "multi",
        "correctFeedback": correctFeedback,
        "wrongFeedback": {str(k): v for k, v in wrongFeedback.items()},
        "mode": mode,
    }

CH1 = [
    sc(
        "c1-l5-01", "§1.1",
        "A first-year student says: “Psychology isn’t a real science because people just talk about feelings, like philosophy.” Which reply best matches OpenStax’s framing of psychology?",
        [
            "Psychology is scientific only when it uses brain scans.",
            "Psychology uses scientific methods to study mind and behavior, not only armchair speculation.",
            "Psychology abandoned studying the mind after Freud.",
            "Psychology is scientific because every claim is already proven true forever.",
        ],
        1,
        "Modern psychology is defined by empirical methods applied to mind and behavior (§1.1).",
        {
            0: "Trap: confuses one tool (neuroimaging) with science itself—many valid methods exist without scans.",
            2: "Trap: erases cognitive/clinical work on mind; Freud did not end the scientific study of mental life.",
            3: "Trap: confuses science with permanent certainty; claims remain open to revision with evidence.",
        },
    ),
    sc(
        "c1-l5-02", "§1.2",
        "Wundt’s Leipzig laboratory is historically important mainly because it:",
        [
            "Proved unconscious sexual conflict drives all behavior.",
            "Showed that only animal behavior can be studied scientifically.",
            "Helped establish psychology as an experimental laboratory science using controlled introspection.",
            "Invented random assignment to treatment conditions.",
        ],
        2,
        "Wundt’s 1879 lab and trained introspection helped push psychology toward controlled observation; Titchener later developed structuralism further (§1.2).",
        {
            0: "Trap: attributes Freud’s psychoanalytic focus to Wundt’s lab project.",
            1: "Trap: extreme behaviorist caricature—Wundt studied human conscious experience.",
            3: "Trap: random assignment is a research-methods tool (Ch 2), not Wundt’s claim to fame.",
        },
    ),
    sc(
        "c1-l5-03", "§1.2",
        "Two classmates taste the same iced coffee. Mei lists every sensation (cold, bitter, sweet). Jun asks why people drink it before 9 a.m. lectures. Whose question is closer to functionalism?",
        [
            "Mei — cataloguing elements of experience is James’s method.",
            "Jun — asking how a mental process helps adaptation fits functionalism.",
            "Both equally — structuralism and functionalism are the same approach.",
            "Neither — functionalism only means modern evolutionary psychology surveys.",
        ],
        1,
        "Functionalism (James) asks what mental life is for; Mei’s inventory is nearer structuralist aims (§1.2).",
        {
            0: "Trap: swaps labels—element catalogues fit structuralism more than James’s functionalism.",
            2: "Trap: collapses a classic contrast students must keep separate.",
            3: "Trap: over-narrows “functional” to one modern specialty.",
        },
    ),
    sc(
        "c1-l5-04", "§1.2",
        "A podcast claims: “If you forget a friend’s name, it secretly means you hate them—Freud proved it.” Best critique?",
        [
            "Freud founded experimental psychology at Leipzig, so the claim is solid.",
            "Psychoanalytic ideas about the unconscious were influential clinically, but such unfalsifiable “secret meaning” claims are not the scientific standard for all psychology.",
            "Behaviorists agree that every slip of the tongue reveals repressed hate.",
            "Humanistic psychologists defined science as dream symbolism.",
        ],
        1,
        "Freud matters historically; blanket symbolic “proofs” are not how empirical psychology validates claims (§1.2).",
        {
            0: "Trap: misattributes founding laboratory science (Wundt) to Freud.",
            2: "Trap: invents behaviorist endorsement of Freudian slips.",
            3: "Trap: mislabels humanism; Rogers/Maslow did not define science as dream symbolism.",
        },
    ),
    sc(
        "c1-l5-05", "§1.2",
        "A sports coach says players “see the whole play at once, not a list of separate pixels.” Which historical idea does this echo?",
        [
            "Structuralism’s element-by-element inventory of consciousness",
            "Classical conditioning of glandular reflexes",
            "Gestalt emphasis that the whole percept can differ from the sum of parts",
            "Radical behaviorism’s ban on discussing perception",
        ],
        2,
        "Gestalt: organization/wholes matter beyond isolated sensations (§1.2).",
        {
            0: "Trap: structuralism is the opposite impulse—break experience into elements.",
            1: "Trap: Pavlovian learning, not perceptual organization.",
            3: "Trap: overstates behaviorism and ignores the coach’s perceptual claim.",
        },
    ),
    sc(
        "c1-l5-06", "§1.2–1.3",
        "A clinic posts: “We only study what people do, never thoughts—because thoughts aren’t scientific.” Which historical stance is this closest to, and what’s the later correction?",
        [
            "Humanism; later replaced by phrenology",
            "Early behaviorism’s focus on observable behavior; the cognitive revolution later treated mind as scientifically studyable again",
            "Structuralism; later replaced by astrology",
            "Multicultural psychology; later banned experiments",
        ],
        1,
        "Watson/Skinner-era behaviorism prioritized observables; cognitive approaches reopened rigorous study of mental processes (§1.2–1.3).",
        {
            0: "Trap: scrambles schools—humanism is not “behavior only,” and phrenology is not its successor.",
            2: "Trap: structuralism studied conscious elements, not a ban on thoughts; astrology is nonsense.",
            3: "Trap: invents a ban; multicultural psychology expands samples/context, not forbids experiments.",
        },
    ),
    sc(
        "c1-l5-07", "§1.2 / diversity",
        "A research flyer recruits only students from one wealthy urban campus, then generalizes “human memory works like this worldwide.” Which Ch 1 concern is most directly raised?",
        [
            "Introspection is always more valid than experiments",
            "WEIRD / limited samples threaten how far findings generalize across cultures",
            "Clinical psychologists cannot do research",
            "Random sampling is identical to random assignment",
        ],
        1,
        "Narrow samples limit external validity; diversity-of-samples concerns are central (§1.2 / contemporary issues).",
        {
            0: "Trap: false method hierarchy—introspection is not always superior.",
            2: "Trap: false career limit; clinicians can and do research.",
            3: "Trap: classic Ch 2 confusion (sampling ≠ assignment) dressed as the Ch 1 issue.",
        },
    ),
    ms(
        "c1-l5-08", "§1.3–1.4",
        "A university fair has booths. Which statements correctly match a contemporary field to a realistic task? (Select all that apply.)",
        [
            "I-O psychologist: redesign hiring interviews for a company",
            "Forensic psychologist: advise on jury selection / competence questions in a legal context",
            "Biopsychologist: map how sleep deprivation alters neurotransmitter activity",
            "Structuralist (as a mainstream 2020s career title): run the hospital’s only therapy ward",
            "Health psychologist: design a worksite program to improve stress-related habits",
        ],
        [0, 1, 2, 4],
        "A/B/C/E are standard applied/scientific roles; “structuralist therapist” is not a current career label (§1.3–1.4).",
        {
            0: "Correct to select: I-O work commonly includes selection/interview redesign.",
            1: "Correct to select: forensic psychology intersects legal questions such as competence and jury issues.",
            2: "Correct to select: biopsychology links physiology (e.g., sleep, transmitters) to behavior.",
            3: "Trap: structuralism is a historical school, not a mainstream 2020s therapy-ward job title.",
            4: "Correct to select: health psychology targets stress-related habits and wellness programs.",
        },
    ),
    ms(
        "c1-l5-09", "§1.2",
        "Which claims about psychology’s history are accurate? (Select all that apply.)",
        [
            "Before Wundt/James, mind questions were largely philosophical.",
            "Skinner’s operant ideas are part of the behaviorist lineage emphasizing consequences of behavior.",
            "Humanism (e.g., Rogers/Maslow) emphasized growth and potential as a pushback against gloomy/mechanistic views.",
            "Cognitive psychology treats mental processes as illegitimate topics.",
            "Freud’s clinical focus on the unconscious differs from Wundt’s laboratory project.",
        ],
        [0, 1, 2, 4],
        "D reverses the cognitive project—mind is the topic. A/B/C/E track OpenStax’s historical framing (§1.2).",
        {
            0: "Correct to select: pre-lab mind questions lived mainly in philosophy.",
            1: "Correct to select: operant conditioning sits in the behaviorist lineage.",
            2: "Correct to select: humanism stressed growth/potential vs gloomier/mechanistic frames.",
            3: "Trap: common mix-up with behaviorism—cognitive psychology studies mental processes.",
            4: "Correct to select: Freud’s clinical unconscious project ≠ Wundt’s lab introspection program.",
        },
    ),
    ms(
        "c1-l5-10", "§1.1–1.4",
        "A student study group makes these claims before a midterm. Which are methodologically or historically sound? (Select all that apply.)",
        [
            "Psychology equals common sense, so experiments are optional.",
            "A school of thought can be historically important yet still be limited or revised.",
            "Saying a finding “makes sense” is not the same as having controlled evidence.",
            "If two ideas are famous, they must be the same theory under different names.",
            "Career paths in psychology include research and many applied specialties, not only couch therapy.",
        ],
        [1, 2, 4],
        "Science revises; intuition ≠ evidence; careers are diverse (§1.1–1.4).",
        {
            0: "Trap: anti-science shortcut—common sense is not a substitute for controlled tests.",
            1: "Correct to select: historical importance ≠ immunity from limits or revision.",
            2: "Correct to select: “feels true” ≠ controlled evidence.",
            3: "Trap: collapses distinctions (e.g., structuralism vs functionalism) because both are famous.",
            4: "Correct to select: psychology careers span research and many applied specialties.",
        },
    ),
]

if __name__ == "__main__":
    import json
    print(json.dumps(CH1, ensure_ascii=False, indent=2))
    print("COUNT", len(CH1))
