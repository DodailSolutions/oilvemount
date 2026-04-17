import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OLIVEMOUNT Global School, its vision, mission, and the values-led approach shaping student growth in Hyderabad.",
};

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <section className="subpage-hero">
        <div className="container subpage-grid">
          <div className="subpage-intro">
            <span className="eyebrow">About the School</span>
            <h1>A school identity built on trust, values, and future readiness.</h1>
            <p>
              OLIVEMOUNT Global School is positioned to reflect the confidence, clarity, and
              premium parent experience associated with modern international-school websites.
            </p>
          </div>
          <article className="info-card">
            <h3>Vision</h3>
            <p>
              To empower children to adapt to a rapidly changing world and become responsible
              global citizens through a thoughtful 5 C’s approach.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid two-col">
          <article className="info-card">
            <h3>Mission</h3>
            <ul className="list-clean">
              <li>Provide a safe, inclusive campus where every child thrives and belongs.</li>
              <li>Deliver a broad, balanced CBSE curriculum with real-world relevance.</li>
              <li>Cultivate curiosity, critical thinking, and lifelong learning habits.</li>
              <li>Foster compassion, integrity, and a strong sense of social responsibility.</li>
            </ul>
          </article>

          <article className="info-card">
            <h3>The 5 C's Framework</h3>
            <ul className="list-clean">
              <li><strong>Communication</strong> — Express ideas with clarity and confidence</li>
              <li><strong>Confidence</strong> — Face challenges with resilience and self-belief</li>
              <li><strong>Creativity</strong> — Think originally and solve problems innovatively</li>
              <li><strong>Competency</strong> — Master skills that matter in the modern world</li>
              <li><strong>Character</strong> — Lead with values, empathy, and integrity</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
