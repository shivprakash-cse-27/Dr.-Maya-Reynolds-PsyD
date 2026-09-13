import { NavLink, ServiceItem, WhoWeHelpItem, ModalityItem, FAQItem } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "How I Work", href: "#who-i-work-with" },
  { name: "Approach", href: "#approach" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Anxiety Therapy in Santa Monica",
    badge: "In-Person & Telehealth",
    description:
      "Therapy can help when constant worry, overthinking, panic, physical tension, or difficulty sleeping begins to affect daily life. Dr. Maya Reynolds offers a warm, structured space to better understand anxiety and develop more grounded ways of responding.",
    focus: [
      "Panic & Nervous System Regulation",
      "Cognitive Overthinking & Worry",
      "Sleep Difficulties & Somatic Tension",
    ],
  },
  {
    number: "02",
    title: "Trauma Therapy in Santa Monica",
    badge: "EMDR & Stabilization",
    description:
      "Trauma therapy offers a carefully paced space to process difficult experiences while building safety, stabilization, and greater emotional regulation. Dr. Maya integrates EMDR, mindfulness-based practices, and body-oriented techniques according to each client's needs.",
    focus: [
      "Single-Incident & Complex Trauma",
      "EMDR Memory Reprocessing",
      "Safe Nervous System Pacing",
    ],
  },
  {
    number: "03",
    title: "Burnout & Perfectionism Therapy",
    badge: "Professionals & Creatives",
    description:
      "For professionals, entrepreneurs, and creatives, high expectations and constant pressure can eventually lead to exhaustion and disconnection. Therapy can create space to slow down, reconnect with yourself, and develop more sustainable ways of living and working.",
    focus: [
      "High Internal Expectations",
      "Disconnection from Self",
      "Sustainable Life & Work Rhythms",
    ],
  },
];

export const WHO_WE_HELP_DATA: WhoWeHelpItem[] = [
  {
    title: "High-Achieving Professionals",
    tag: "Burnout & Overthinking",
    description:
      "Professionals navigating the exhaustion of high demands, constant perfectionism, and feeling disconnected from themselves after years of pushing through relentless stress.",
  },
  {
    title: "Entrepreneurs & Creatives",
    tag: "Pacing & Sustainability",
    description:
      "Visionaries dealing with intense internal pressure, constant responsibility, and fast-paced environments where slowing down feels counterintuitive but is deeply needed.",
  },
  {
    title: "Adults Experiencing Anxiety & Panic",
    tag: "Somatic Tension & Worry",
    description:
      "Individuals dealing with persistent worry, overthinking, panic, sleep disruption, or the physical feeling of always bracing for something to go wrong.",
  },
  {
    title: "Adults Navigating Trauma & Past Patterns",
    tag: "EMDR & Stabilization",
    description:
      "Those processing single-incident trauma or long-standing relational patterns from childhood or chronic stress that continue affecting confidence and safety.",
  },
  {
    title: "Thoughtful & Self-Aware Adults",
    tag: "Depth-Oriented Insight",
    description:
      "People who understand their issues intellectually but struggle to feel regulated, safe, and emotionally at peace in their daily lives and bodies.",
  },
  {
    title: "Individuals Navigating High Internal Pressure",
    tag: "Resilience & Self-Compassion",
    description:
      "High-performers wanting to replace harsh self-criticism and tension with grounded self-trust, resilience, and a healthier relationship with themselves.",
  },
];

export const CLINICAL_FOCUS_DATA: string[] = [
  "Generalized & Chronic Anxiety",
  "Panic Attacks & Acute Stress",
  "Professional Burnout & Exhaustion",
  "High Internal Pressure & Perfectionism",
  "Single-Incident Trauma Processing",
  "Complex, Long-Standing Trauma Patterns",
  "Somatic Tension & Sleep Difficulties",
  "Overthinking & Cognitive Rumination",
  "Emotional & Physiological Regulation",
  "Restoring Self-Connection & Grounding",
  "Adult Relational Patterns & Safety",
  "Navigating Fast-Paced Environments",
];

export const MODALITIES_DATA: ModalityItem[] = [
  {
    name: "Cognitive-Behavioral Therapy (CBT)",
    description:
      "Helps identify and reframe patterns of overthinking, catastrophic worry, and internal pressure into practical, grounded cognitive tools.",
  },
  {
    name: "EMDR (Eye Movement Desensitization and Reprocessing)",
    description:
      "An evidence-based method to process distressing memories and unresolved trauma without becoming overwhelmed.",
  },
  {
    name: "Mindfulness-Based Practices",
    description:
      "Fosters intentional awareness and presence, helping you slow down rapid cognitive rumination and step out of automatic stress reactions.",
  },
  {
    name: "Body-Oriented (Somatic) Techniques",
    description:
      "Targets the physiological side of anxiety and panic—releasing chronic muscle bracing, regulating the nervous system, and restoring physical calm.",
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "Where does Dr. Maya Reynolds offer therapy?",
    answer:
      "Dr. Maya Reynolds offers in-person therapy from her private office in Santa Monica, California (123th Street 45 W, Santa Monica, CA 90401) and secure telehealth sessions for adult clients located throughout California.",
  },
  {
    question: "Who does Dr. Maya work with?",
    answer:
      "She works specifically with adults, including high-achieving professionals, entrepreneurs, and creatives experiencing anxiety, stress, trauma-related difficulties, burnout, perfectionism, or high internal pressure.",
  },
  {
    question: "What therapy approaches and modalities does she use?",
    answer:
      "Her approach integrates evidence-based methods including Cognitive-Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), mindfulness-based practices, and body-oriented (somatic) techniques to address both emotional and physiological experiences.",
  },
  {
    question: "What is her approach to trauma therapy?",
    answer:
      "Trauma work is carefully paced and emphasizes safety, stabilization, and helping clients feel more regulated in daily life—not just during sessions. She supports adults navigating single-incident trauma as well as complex, long-standing patterns.",
  },
  {
    question: "What is the office environment like?",
    answer:
      "Her Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease upon arrival.",
  },
];
