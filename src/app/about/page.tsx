import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OLIVEMOUNT Global School, its vision, mission, story, and the values-led CBSE approach shaping confident learners in Hyderabad.",
};

const foundations = [
  {
    label: "Vision",
    title: "A future-ready education rooted in values",
    text: "We empower children to grow into thoughtful, capable, and responsible global citizens.",
  },
  {
    label: "Mission",
    title: "Strong academics with personal care",
    text: "Our CBSE learning environment balances rigour, wellbeing, creativity, and communication.",
  },
  {
    label: "Our Promise",
    title: "A school experience families can trust",
    text: "Every child is supported through a culture of discipline, warmth, inclusion, and progress.",
  },
];

const values = [
  {
    title: "Care for Every Child",
    text: "A safe, inclusive, and nurturing environment where every learner feels seen, supported, and encouraged to grow.",
  },
  {
    title: "Academic Depth",
    text: "Strong CBSE foundations combined with real understanding, communication skills, and future-ready learning habits.",
  },
  {
    title: "Character & Confidence",
    text: "We help students lead with empathy, integrity, resilience, and self-belief in school and beyond.",
  },
];

const teamHighlights = [
  {
    initials: "AL",
    title: "Academic Leadership",
    role: "Curriculum & learning excellence",
    text: "Guiding classroom quality, student progress, and strong CBSE foundations across every stage.",
  },
  {
    initials: "SW",
    title: "Student Wellbeing",
    role: "Care, safety, and personal growth",
    text: "Creating a campus culture where children feel secure, supported, and confident every day.",
  },
  {
    initials: "CC",
    title: "Co-Curricular Mentors",
    role: "Arts, sports, and life skills",
    text: "Helping learners discover interests, teamwork, discipline, and creativity beyond the classroom.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-wrap about-page">
      <section className="subpage-hero about-hero">
        <div className="container about-hero-grid">
          <ScrollReveal variant="fade-up" className="subpage-intro about-intro">
            <span className="eyebrow">About OLIVEMOUNT</span>
            <h1>Building strong values, bright minds, and confident global citizens.</h1>
            <p>
              OLIVEMOUNT Global School, Attapur is built around a simple belief: children thrive
              when academic rigour, personal care, and character development grow together. Our
              school culture combines CBSE excellence with global outlook, student confidence, and
              meaningful life skills.
            </p>

            <div className="about-actions">
              <Link href="/admissions" className="button">Start Admission</Link>
              <Link href="/contact" className="button button-secondary">Visit Campus</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" className="about-hero-panel">
            <div className="about-panel-badge">Trusted by Hyderabad families</div>
            <p className="about-panel-kicker">Why parents choose us</p>
            <h2 className="about-panel-title">A premium school experience built on care, clarity, and excellence.</h2>

            <div className="about-panel-stats" role="list" aria-label="School highlights">
              <div className="about-panel-stat" role="listitem">
                <strong>750+</strong>
                <span>Students</span>
              </div>
              <div className="about-panel-stat" role="listitem">
                <strong>50+</strong>
                <span>Educators</span>
              </div>
              <div className="about-panel-stat" role="listitem">
                <strong>Gr I–XII</strong>
                <span>Full School</span>
              </div>
              <div className="about-panel-stat" role="listitem">
                <strong>5 C&apos;s</strong>
                <span>Core Framework</span>
              </div>
            </div>

            <ul className="about-panel-points">
              <li>CBSE-aligned academics with future-ready learning</li>
              <li>Safe, inclusive, and values-led campus culture</li>
              <li>Holistic growth across communication, confidence, and character</li>
            </ul>

            <div className="about-panel-note">Admissions open from Pre-KG to Class XII</div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Our Foundation</span>
            <h2>Clear purpose, modern learning, and a values-first school culture</h2>
            <p className="section-sub">
              Every part of the OLIVEMOUNT experience is designed to help children grow with confidence and direction.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={80} stagger className="card-grid three-col about-foundation-grid">
            {foundations.map((item) => (
              <article key={item.title} className="info-card about-foundation-card">
                <span className="team-role">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={120} className="about-method-strip">
            <div className="about-method-copy">
              <span className="eyebrow">The 5 C&apos;s Framework</span>
              <h3>How we shape learners for school, life, and the future</h3>
              <p>
                Communication, Confidence, Creativity, Competency, and Character guide the way we teach,
                mentor, and support every child across academics and co-curricular growth.
              </p>
            </div>
            <div className="about-chip-row" aria-label="5 Cs pillars">
              <span className="about-chip">Communication</span>
              <span className="about-chip">Confidence</span>
              <span className="about-chip">Creativity</span>
              <span className="about-chip">Competency</span>
              <span className="about-chip">Character</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Leadership Message</span>
            <h2>From our Director / Chairman</h2>
            <p className="section-sub">
              A message of purpose, care, and commitment to every student’s future.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" className="leadership-card">
            <div className="leadership-avatar" aria-hidden="true">DG</div>
            <div className="leadership-copy">
              <span className="leadership-role">Director &amp; Chairman</span>
              <h3>Guiding OLIVEMOUNT with vision and values</h3>
              <p>
                At OLIVEMOUNT Global School, we believe education must do more than prepare children
                for exams — it must prepare them for life. Our commitment is to nurture confident,
                compassionate, and capable learners through strong academics, character building,
                and meaningful opportunities for growth.
              </p>
              <p>
                We welcome every family into a school culture built on trust, discipline, care, and
                future readiness. Together, we aim to shape students who are not only successful,
                but also responsible global citizens.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">What Sets Us Apart</span>
            <h2>An education designed for today and tomorrow</h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={80} stagger className="card-grid three-col">
            {values.map((item) => (
              <article key={item.title} className="info-card about-value-card">
                <span className="about-value-dot" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Our Team</span>
            <h2>The people behind every child’s progress</h2>
            <p className="section-sub">
              Our educators, mentors, and student-support teams work together to create a caring and high-performing school experience.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={80} stagger className="card-grid three-col team-grid">
            {teamHighlights.map((item) => (
              <article key={item.title} className="info-card team-card">
                <div className="team-avatar" aria-hidden="true">{item.initials}</div>
                <span className="team-role">{item.role}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <ScrollReveal variant="fade-up" className="about-cta-card">
            <span className="eyebrow">Meet Us</span>
            <h2>See how OLIVEMOUNT can support your child’s journey</h2>
            <p>
              Explore our campus, speak with our team, and discover how our values-led approach
              can help your child learn with confidence.
            </p>
            <div className="about-actions about-actions-centered">
              <Link href="/contact" className="button">Book a Visit</Link>
              <Link href="/admissions" className="button button-secondary">Admissions Info</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
