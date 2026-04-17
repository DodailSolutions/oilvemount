import type { ReactNode } from "react";

/* ─── Data ─────────────────────────────────────────────────── */
interface FiveCItem {
  id: string;
  label: string;
  tagline: string;
  description: string;
  traits: [string, string, string];
  icon: ReactNode;
  iconColor: string;   // colored stroke for rail (pastel bg)
  cardIcon: ReactNode; // white stroke for dark card bg
}

/* Shared icon paths — rendered twice with different stroke colors */
const makeIcon = (color: string) => ({
  communication: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  ),
  confidence: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8v7" />
      <path d="M7 11l-2 5M17 11l2 5" />
      <path d="M7 11l5 3 5-3" />
      <path d="M9 21h6" />
    </svg>
  ),
  creativity: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18h6M10 21h4" />
      <path d="M12 2a7 7 0 00-4.9 11.9l.9.9V17h8v-2.2l.9-.9A7 7 0 0012 2z" />
      <path d="M9.5 14.5V12M14.5 14.5V12" />
    </svg>
  ),
  competency: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  character: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
});

const coloredIcons  = makeIcon("currentColor");
const whiteIcons    = makeIcon("white");

const fiveCs: FiveCItem[] = [
  {
    id: "communication",
    label: "Communication",
    tagline: "Clarity in Expression and Thought",
    description:
      "Students learn to listen actively, express ideas with precision, and engage confidently with the world — building the most essential skill behind every relationship and career.",
    traits: ["Active Listening", "Articulate Expression", "Confident Presentation"],
    icon: coloredIcons.communication,
    iconColor: "white",
    cardIcon: whiteIcons.communication,
  },
  {
    id: "confidence",
    label: "Confidence",
    tagline: '"I\'M POSSIBLE" in every challenge',
    description:
      "Guided challenge and consistent achievement build an unshakeable belief in one's own ability — transforming obstacles into opportunities and shaping leaders for tomorrow.",
    traits: ["Self-Belief", "Leadership Readiness", "Growth Mindset"],
    icon: coloredIcons.confidence,
    iconColor: "white",
    cardIcon: whiteIcons.confidence,
  },
  {
    id: "creativity",
    label: "Creativity",
    tagline: "Igniting Imagination, Innovation & Aesthetic Sense",
    description:
      "Creativity lives in every subject — from science to the arts. Students imagine, invent, and explore new possibilities, shaping original thinkers ready for a complex world.",
    traits: ["Original Thinking", "Design & Arts", "Problem Solving"],
    icon: coloredIcons.creativity,
    iconColor: "white",
    cardIcon: whiteIcons.creativity,
  },
  {
    id: "competency",
    label: "Competency",
    tagline: "Reasoning, Logical & Critical Thinking",
    description:
      "Academic mastery goes beyond memorisation. Students develop deep reasoning and conceptual fluency — the intellectual tools needed to excel in every discipline and career path.",
    traits: ["Analytical Thinking", "Conceptual Mastery", "Applied Learning"],
    icon: coloredIcons.competency,
    iconColor: "white",
    cardIcon: whiteIcons.competency,
  },
  {
    id: "character",
    label: "Character",
    tagline: "Trustworthiness, Respect, Responsibility & Care",
    description:
      "Values are built through daily action. Students develop integrity, empathy, and a strong moral compass — growing into responsible people who make their community genuinely better.",
    traits: ["Integrity & Honesty", "Empathy & Care", "Responsible Citizenship"],
    icon: coloredIcons.character,
    iconColor: "white",
    cardIcon: whiteIcons.character,
  },
];

/* Node gradient backgrounds — brand palette */
const nodeColors: Record<string, string> = {
  communication: "linear-gradient(145deg,#07172a,#1d4ed8)",
  confidence:    "linear-gradient(145deg,#0f2a4a,#2563eb)",
  creativity:    "linear-gradient(145deg,#1e3a8a,#60a5fa)",
  competency:    "linear-gradient(145deg,#07172a,#27c2ff)",
  character:     "linear-gradient(145deg,#07172a,#4d6480)",
};

/* Glow ring colors */
const glowColors: Record<string, string> = {
  communication: "#1d4ed8",
  confidence:    "#2563eb",
  creativity:    "#60a5fa",
  competency:    "#27c2ff",
  character:     "#4d6480",
};

/* Connector-line gradients */
const lineColors = [
  "linear-gradient(90deg,#1d4ed8,#2563eb)",
  "linear-gradient(90deg,#2563eb,#60a5fa)",
  "linear-gradient(90deg,#60a5fa,#27c2ff)",
  "linear-gradient(90deg,#27c2ff,#4d6480)",
];

/* ─── Component ─────────────────────────────────────────────── */
export default function FiveCs() {
  return (
    <div className="fivecs-infographic">

      {/* ── Connector rail (infographic overview) ────────────── */}
      <div className="fivecs-connector" role="presentation" aria-hidden="true">
        {fiveCs.flatMap((c, i) => {
          const items = [];
          if (i > 0) {
            items.push(
              <div
                key={`line-${i}`}
                className="fc-line"
                style={{ background: lineColors[i - 1] }}
              >
                <span className="fc-arrow" />
              </div>
            );
          }
          items.push(
            <div key={c.id} className="fc-slot">
              <div
                className={`fc-node fc-node--${c.id}`}
                style={{
                  background: nodeColors[c.id],
                  color: c.iconColor,
                  "--glow-color": glowColors[c.id],
                } as React.CSSProperties}
              >
                {/* Pulsing ring */}
                <span
                  className="fc-ring"
                  style={{
                    borderColor: glowColors[c.id],
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
                {/* Step badge */}
                <span className="fc-num-badge">0{i + 1}</span>
                {/* Icon */}
                <div className="fc-icon-wrap">{c.icon}</div>
              </div>
              {/* Label below the circle */}
              <span className="fc-label">{c.label}</span>
            </div>
          );
          return items;
        })}
      </div>

      {/* ── Detail cards ─────────────────────────────────────── */}
      <div
        className="fivecs-grid"
        role="list"
        aria-label="The 5 C's of OLIVEMOUNT Global School"
      >
        {fiveCs.map((c, idx) => (
          <article
            key={c.id}
            className={`c-card c-card--${c.id}`}
            data-letter={c.label[0]}
            style={{ animationDelay: `${idx * 0.1}s` }}
            role="listitem"
          >
            {/* Header row: icon + number badge */}
            <div className="c-header">
              <div className="c-icon">{c.cardIcon}</div>
              <span className="c-num" aria-hidden="true">0{idx + 1}</span>
            </div>

            {/* Name + tagline */}
            <div className="c-heading">
              <h3 className="c-label">{c.label}</h3>
              <p className="c-tagline">&ldquo;{c.tagline}&rdquo;</p>
            </div>

            {/* Colored divider */}
            <div className="c-divider" aria-hidden="true" />

            {/* Description */}
            <p className="c-desc">{c.description}</p>

            {/* Trait chips */}
            <ul className="c-traits" aria-label={`${c.label} traits`}>
              {c.traits.map((trait) => (
                <li key={trait} className="c-trait">
                  <span className="c-trait-dot" aria-hidden="true" />
                  {trait}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

