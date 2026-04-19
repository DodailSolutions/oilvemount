import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Academics | CBSE Curriculum Pre-KG to Class XII | Hyderabad",
  description:
    "Explore the CBSE academic programme at OLIVEMOUNT Global School, Hyderabad — structured learning from Pre-KG (Foundational Stage) to Class XII (Secondary Stage) with experienced educators, modern labs, and a future-ready curriculum.",
};

const stages = [
  {
    number: "01",
    title: "Foundational Stage",
    grades: "Pre-KG to Class II",
    desc: "Play-based discovery, early literacy, numeracy readiness, and joyful daily routines that nurture curiosity, confidence, and a love of learning from day one.",
  },
  {
    number: "02",
    title: "Preparatory Stage",
    grades: "Classes III–V",
    desc: "Structured concept-building, active communication practice, curiosity-led projects, and guided independence that prepare students for their next academic step.",
  },
  {
    number: "03",
    title: "Middle Stage",
    grades: "Classes VI–VIII",
    desc: "Critical thinking, collaborative learning, deeper subject exploration, and interactive labs that strengthen confidence across all core disciplines.",
  },
  {
    number: "04",
    title: "Secondary Stage",
    grades: "Classes IX–XII",
    desc: "Focused CBSE preparation, academic discipline, personalised guidance, and future-oriented mentoring for higher education and life beyond school.",
  },
];

const highlights = [
  {
    title: "Digital Readiness",
    text: "Smart classrooms, computer labs, and technology-integrated lessons prepare students for a connected, digital-first world.",
  },
  {
    title: "Concept Mastery",
    text: "Students move beyond memorisation to understanding, applying, analysing, and creating with confidence.",
  },
  {
    title: "Whole-Child Growth",
    text: "Sports, arts, values education, and life skills are woven into every academic year for balanced growth.",
  },
];

export default function AcademicsPage() {
  return (
    <div className="page-wrap academics-page">
      <section className="subpage-hero academics-hero">
        <div className="container academics-hero-grid">
          <ScrollReveal variant="fade-up" className="subpage-intro academics-intro">
            <span className="eyebrow">Academics</span>
            <h1>CBSE learning designed for depth, confidence, and future readiness</h1>
            <p>
              At OLIVEMOUNT Global School, our academic pathway from Pre-KG to Class XII combines
              strong CBSE foundations with conceptual understanding, communication, and real-world preparation.
            </p>
            <div className="about-actions">
              <Link href="/admissions" className="button">Admissions Open</Link>
              <Link href="/contact" className="button button-secondary">Speak to Us</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" className="academics-hero-panel">
            <span className="about-panel-badge">Academic Excellence</span>
            <h2>Every stage of learning is structured with purpose.</h2>
            <div className="academics-hero-metrics" role="list" aria-label="Academic highlights">
              <div className="academics-metric" role="listitem"><strong>CBSE</strong><span>Curriculum</span></div>
              <div className="academics-metric" role="listitem"><strong>Pre-KG–XII</strong><span>Full Pathway</span></div>
              <div className="academics-metric" role="listitem"><strong>Future Ready</strong><span>Skills Focus</span></div>
            </div>
            <ul className="about-panel-points">
              <li>Strong foundations and progressive concept-building</li>
              <li>Student-centred teaching with personal attention</li>
              <li>Balanced growth across academics, life skills, and creativity</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Academic Approach</span>
            <h2>A learning model that builds clarity, confidence, and consistency</h2>
            <p className="section-sub">
              Our classrooms are designed to help students understand deeply, express clearly, and progress steadily at every stage.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={80} stagger className="card-grid three-col">
            {highlights.map((item) => (
              <article key={item.title} className="info-card academics-highlight-card">
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
            <span className="eyebrow">Academic Pathway</span>
            <h2>Structured progression from early years to board success</h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100} stagger className="stages-grid">
            {stages.map((stage) => (
              <article key={stage.title} className="stage-card academics-stage-card">
                <span className="stage-num" aria-hidden="true">{stage.number}</span>
                <div className="stage-body">
                  <h3>{stage.title}</h3>
                  <small className="stage-grades">{stage.grades}</small>
                  <p>{stage.desc}</p>
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal variant="fade-up" className="academics-cta-strip">
            <div>
              <span className="eyebrow">Ready to Explore More?</span>
              <h2>Discover the right academic environment for your child</h2>
              <p>
                Connect with our team to learn how OLIVEMOUNT supports each learner from foundation to future goals.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/contact" className="button">Book a Campus Visit</Link>
              <Link href="/admissions" className="button button-secondary">Admission Process</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
