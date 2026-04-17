import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics | CBSE Curriculum Pre-KG to Class XII | Hyderabad",
  description:
    "Explore the CBSE academic programme at OLIVEMOUNT Global School, Hyderabad — structured learning from Pre-KG (Foundational Stage) to Class XII (Secondary Stage) with experienced educators, modern labs, and a future-ready curriculum.",
};

const stages = [
  ["Foundational Stage (Pre-KG to Class II)", "Play-based discovery, early literacy, numeracy readiness, and joyful daily routines that nurture curiosity, social skills, and a love of learning from day one."],
  ["Preparatory Stage (Classes III–V)", "Structured concept-building, active communication practice, curiosity-led projects, and guided independence that prepares students for the next stage of their CBSE journey."],
  ["Middle Stage (Classes VI–VIII)", "Critical thinking, interactive labs, collaborative projects, and deeper subject exploration that builds real confidence in core CBSE subjects and beyond."],
  ["Secondary Stage (Classes IX–XII)", "Rigorous CBSE board preparation, career direction, academic discipline, and personalised support that equips students for university and professional life."],
];

export default function AcademicsPage() {
  return (
    <div className="page-wrap">
      <section className="subpage-hero">
        <div className="container subpage-intro">
          <span className="eyebrow">Academics</span>
          <h1>CBSE Curriculum Designed for Depth, Confidence &amp; Career Readiness</h1>
          <p>
            At OLIVEMOUNT Global School, Hyderabad's CBSE curriculum is delivered with depth,
            rigour, and genuine care. Our structured pathway from Pre-KG to Class XII ensures
            every learner builds strong foundations and is fully prepared for board exams
            and the world beyond school.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid two-col">
          {stages.map(([title, desc]) => (
            <article key={title} className="info-card">
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container card-grid three-col">
          <article className="info-card">
            <h3>Digital Readiness</h3>
            <p>Computer labs, smart classrooms, and technology-integrated lessons prepare students for a connected, digital-first world.</p>
          </article>
          <article className="info-card">
            <h3>Concept Mastery</h3>
            <p>CBSE concepts are taught for deep understanding — not just exam scores. Students progress from grasping ideas to applying, analysing, and creating.</p>
          </article>
          <article className="info-card">
            <h3>Whole-Child Growth</h3>
            <p>Sports, performing arts, visual arts, and character education are woven into every school year — because grades alone don't define a great student.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
