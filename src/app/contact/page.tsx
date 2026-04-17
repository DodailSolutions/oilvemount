import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | OLIVEMOUNT Global School Hyderabad",
  description:
    "Get in touch with OLIVEMOUNT Global School in Attapur, Hyderabad. Visit us at Street No. 15, Nalanda Nagar, Attapur — 500048. Call 040-29701555 for admissions and campus visits.",
};

export default function ContactPage() {
  return (
    <div className="page-wrap">
      <section className="subpage-hero">
        <div className="container subpage-intro">
          <span className="eyebrow">Contact</span>
          <h1>Reach OLIVEMOUNT Global School — We're Here to Help</h1>
          <p>
            Whether you have a question about admissions, want to schedule a campus visit, or
            simply need to speak with someone — our team at OLIVEMOUNT is happy to assist.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <article className="contact-card">
            <h3>Campus Address</h3>
            <p>Street No. 15, Nalanda Nagar, Attapur, Hyderabad — 500048, Telangana, India</p>
          </article>
          <article className="contact-card">
            <h3>Phone</h3>
            <p>040-29701555<br />040-29701666<br />7998877669</p>
          </article>
          <article className="contact-card">
            <h3>Email</h3>
            <p>info@olivemountglobalschool.com</p>
          </article>
          <article className="contact-card">
            <h3>School Hours</h3>
            <p>Monday to Friday: 8:00 AM – 4:00 PM<br />Saturday: 9:00 AM – 1:00 PM<br />Admissions office open on all school days.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
