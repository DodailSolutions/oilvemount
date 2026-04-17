import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Admissions 2026-27 | Apply to CBSE School in Hyderabad",
  description:
    "Apply for admission to OLIVEMOUNT Global School, one of Hyderabad's best CBSE schools in Attapur. Enrol for Pre-KG to Class XII. Simple 4-step process. Call 040-29701555 or enquire online.",
};

const steps = [
  ["01", "Enquire", "Submit an online enquiry or call us directly. Our admissions team responds quickly and helps you understand the next steps."],
  ["02", "Campus Interaction", "Visit the school, explore the campus, and attend a short interaction guided by our admissions team."],
  ["03", "Registration", "Complete the registration form and share the required documents with support from our staff."],
  ["04", "Confirmation", "Complete the formalities and secure your child’s place at OLIVEMOUNT with confidence."],
];

export default function AdmissionsPage() {
  return (
    <div className="page-wrap admissions-page">
      <section className="subpage-hero admissions-hero">
        <div className="container admissions-hero-grid">
          <ScrollReveal variant="fade-up" className="subpage-intro admissions-intro">
            <span className="eyebrow">Admissions Open 2026–27</span>
            <h1>A smooth, transparent admissions experience for every family</h1>
            <p>
              Joining OLIVEMOUNT is designed to be simple, supportive, and parent-friendly. From first enquiry to final confirmation, our team guides you clearly at every step.
            </p>
            <div className="about-actions">
              <Link href="/contact" className="button">Enquire Now</Link>
              <Link href="tel:+914029701555" className="button button-secondary">Call Admissions</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" className="academics-hero-panel admissions-side-panel">
            <span className="about-panel-badge">Admission Support</span>
            <h2>Everything you need to begin with clarity</h2>
            <div className="academics-hero-metrics" role="list" aria-label="Admission highlights">
              <div className="academics-metric" role="listitem"><strong>4 Steps</strong><span>Easy Process</span></div>
              <div className="academics-metric" role="listitem"><strong>Pre-KG–XII</strong><span>All Grades</span></div>
              <div className="academics-metric" role="listitem"><strong>Fast Response</strong><span>Friendly Team</span></div>
            </div>
            <ul className="about-panel-points">
              <li>Clear admission guidance from our support team</li>
              <li>Simple documentation and transparent process</li>
              <li>Campus visits available for interested families</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Admission Journey</span>
            <h2>Four clear steps to join OLIVEMOUNT</h2>
            <p className="section-sub">
              We keep the process easy to understand, responsive, and welcoming for parents and students.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={80} stagger className="timeline admissions-timeline">
            {steps.map(([number, label, desc]) => (
              <article key={label} className="timeline-step admissions-step-card">
                <span>{number} — {label}</span>
                <p>{desc}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container card-grid two-col">
          <ScrollReveal variant="fade-left" className="info-card admissions-docs-card">
            <h3>Documents to Keep Ready</h3>
            <ul className="list-clean">
              <li>Recent passport-size photographs of the student</li>
              <li>Birth certificate and supporting identity documents</li>
              <li>Previous academic report cards or progress reports</li>
              <li>Parent / guardian contact and ID details</li>
              <li>Transfer certificate if moving from another school</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" className="info-card admissions-help-card">
            <h3>Need help with admissions?</h3>
            <p>
              Call <strong>040-29701555</strong> or <strong>7998877669</strong> to speak with our admissions team. You can also visit the campus in Attapur, Hyderabad for a guided visit.
            </p>
            <div className="about-actions">
              <Link href="/contact" className="button">Talk to Our Team</Link>
              <Link href="tel:+917998877669" className="button button-secondary">Call Now</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
