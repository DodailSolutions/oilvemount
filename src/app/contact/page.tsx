import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us | OLIVEMOUNT Global School Hyderabad",
  description:
    "Get in touch with OLIVEMOUNT Global School in Attapur, Hyderabad. Visit us at Street No. 15, Nalanda Nagar, Attapur — 500048. Call 040-29701555 for admissions and campus visits.",
};

const contactCards = [
  {
    title: "Campus Address",
    body: "Street No. 15, Nalanda Nagar, Attapur, Hyderabad — 500048, Telangana, India",
    actionLabel: "Open in Maps",
    actionHref: "https://maps.google.com/?q=Street%20No.%2015%2C%20Nalanda%20Nagar%2C%20Attapur%2C%20Hyderabad%20500048",
  },
  {
    title: "Call Us",
    body: "040-29701555 / 040-29701666 / 7998877669",
    actionLabel: "Call Now",
    actionHref: "tel:+914029701555",
  },
  {
    title: "Email",
    body: "info@olivemountglobalschool.com",
    actionLabel: "Send Email",
    actionHref: "mailto:info@olivemountglobalschool.com",
  },
  {
    title: "School Hours",
    body: "Monday to Friday: 8:00 AM – 4:00 PM • Saturday: 9:00 AM – 1:00 PM",
    actionLabel: "Plan a Visit",
    actionHref: "/admissions",
  },
];

export default function ContactPage() {
  return (
    <div className="page-wrap contact-page">
      <section className="subpage-hero contact-hero">
        <div className="container contact-hero-grid">
          <ScrollReveal variant="fade-up" className="subpage-intro contact-intro">
            <span className="eyebrow">Contact Us</span>
            <h1>Let’s connect and help you take the next step with confidence</h1>
            <p>
              Whether you’re exploring admissions, planning a campus visit, or looking for more
              information, the OLIVEMOUNT team is ready to support you with prompt and friendly guidance.
            </p>
            <div className="about-actions">
              <Link href="tel:+914029701555" className="button">Call Admissions</Link>
              <Link href="mailto:info@olivemountglobalschool.com" className="button button-secondary">Email Us</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" className="contact-hero-panel">
            <span className="about-panel-badge">Quick Response</span>
            <h2>Admissions, visits, and support — all in one place</h2>
            <ul className="about-panel-points">
              <li>Fast assistance for parent and admission queries</li>
              <li>Easy campus visit planning for interested families</li>
              <li>Clear communication from our school support team</li>
            </ul>
            <div className="contact-mini-grid" role="list" aria-label="Quick contact details">
              <div className="contact-mini-card" role="listitem"><strong>Call</strong><span>040-29701555</span></div>
              <div className="contact-mini-card" role="listitem"><strong>Email</strong><span>info@olivemountglobalschool.com</span></div>
              <div className="contact-mini-card" role="listitem"><strong>Location</strong><span>Attapur, Hyderabad</span></div>
              <div className="contact-mini-card" role="listitem"><strong>Hours</strong><span>Mon–Sat</span></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">How Can We Help?</span>
            <h2>Choose the quickest way to reach our team</h2>
            <p className="section-sub">
              We’ve made it simple for parents to connect with us for admissions, general enquiries, and campus visits.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={80} stagger className="contact-grid contact-grid-modern">
            {contactCards.map((item) => (
              <article key={item.title} className="contact-card contact-card-modern">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.actionHref} className="contact-link-button">
                  {item.actionLabel}
                </Link>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <ScrollReveal variant="fade-up" className="academics-cta-strip">
            <div>
              <span className="eyebrow">Visit OLIVEMOUNT</span>
              <h2>See our campus and speak with our team in person</h2>
              <p>
                Book a school visit to experience our environment, meet our team, and understand how we support every learner.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/admissions" className="button">Start Admission</Link>
              <Link href="https://maps.google.com/?q=Street%20No.%2015%2C%20Nalanda%20Nagar%2C%20Attapur%2C%20Hyderabad%20500048" className="button button-secondary">Get Directions</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
