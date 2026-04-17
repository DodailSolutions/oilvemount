import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions 2026-27 | Apply to CBSE School in Hyderabad",
  description:
    "Apply for admission to OLIVEMOUNT Global School, one of Hyderabad's best CBSE schools in Attapur. Enrol for Pre-KG to Class XII. Simple 4-step process. Call 040-29701555 or enquire online.",
};

const steps = [
  ["Step 1 — Enquire", "Submit an online enquiry or call us directly at 040-29701555 / 7998877669. Our admissions team will respond within 24 hours."],
  ["Step 2 — Interaction", "Attend a brief school visit or student interaction as guided by our admissions team. See the campus and meet our faculty."],
  ["Step 3 — Registration", "Complete the registration form and submit the required documents. Our team will guide you through every step."],
  ["Step 4 — Confirmation", "Confirm your child's place by completing the fee formalities. Welcome to the OLIVEMOUNT family!"],
];

export default function AdmissionsPage() {
  return (
    <div className="page-wrap">
      <section className="subpage-hero">
        <div className="container subpage-intro">
          <span className="eyebrow">Admissions Open 2026-27</span>
          <h1>Simple, Transparent Admissions to One of Hyderabad's Best CBSE Schools</h1>
          <p>
            Securing a place at OLIVEMOUNT Global School is straightforward. Follow our
            four-step process to join a community of 750+ learners, 50+ dedicated educators,
            and a campus built for your child's best years — in Attapur, Hyderabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container timeline">
          {steps.map(([label, desc]) => (
            <article key={label} className="timeline-step">
              <span>{label}</span>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container card-grid two-col">
          <article className="info-card">
            <h3>Documents to Keep Ready</h3>
            <ul className="list-clean">
              <li>Recent passport-size photographs of the student</li>
              <li>Birth certificate (original + photocopy)</li>
              <li>Previous academic report cards or progress reports</li>
              <li>Parent/guardian ID proof and contact details</li>
              <li>Transfer certificate (TC) if transferring from another school</li>
            </ul>
          </article>

          <article className="info-card">
            <h3>Need Help? We're Here.</h3>
            <p>
              Call <strong>040-29701555</strong> or <strong>7998877669</strong> to speak with
              our admissions team. You can also visit us at Street No. 15, Nalanda Nagar,
              Attapur, Hyderabad — 500048, Monday to Saturday, 9 AM to 4 PM.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
