import Link from "next/link";
import Image from "next/image";
import FiveCs from "./components/FiveCs";
import ApplyButton from "./components/ApplyButton";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ScrollReveal from "./components/ScrollReveal";
import HeroFloatingIcons from "./components/HeroFloatingIcons";

const trustSignals = [
  { value: "CBSE", label: "Board Affiliated", note: "Aff. No: 3630314" },
  { value: "Gr I–XII", label: "Full Schooling", note: "Pre-KG to Class XII" },
  { value: "5 C's", label: "Proven Framework", note: "Global Citizen Approach" },
];

const checkList = [
  "Global-citizen learning through our 5 C's framework",
  "Holistic development across academics, arts and sports",
  "Safe, inclusive campus trusted by Hyderabad families",
  "Modern curriculum designed for a fast-changing world",
];

const programmes = [
  {
    number: "01",
    title: "Foundational Stage",
    grades: "Pre-KG to Class II",
    desc: "Play-based discovery, early literacy, numeracy readiness, and joyful routines that nurture curiosity from day one.",
  },
  {
    number: "02",
    title: "Preparatory Stage",
    grades: "Classes III to V",
    desc: "Strong subject grounding, communication practice, curiosity-led projects, and guided independence for growing learners.",
  },
  {
    number: "03",
    title: "Middle Stage",
    grades: "Classes VI to VIII",
    desc: "Critical thinking, interactive labs, collaboration, and concept-building that prepares students for advanced study.",
  },
  {
    number: "04",
    title: "Secondary Stage",
    grades: "Classes IX to XII",
    desc: "Board readiness, career direction, discipline, and future-facing academic support guiding students through senior school.",
  },
];

const facilities = [
  {
    name: "Library",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    name: "Maths Lab",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    name: "Computer Lab",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: "Art & Craft",
    image: "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Music Studio",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    name: "Science Lab",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 3h6" /><path d="M10 3v7l-4.5 9A1 1 0 0 0 6.4 21h11.2a1 1 0 0 0 .9-1.45L14 10V3" />
      </svg>
    ),
  },
];

const newsItems = [
  {
    featured: true,
    category: "School Events",
    badgeClass: "news-badge--event",
    title: "Investiture Ceremony 2025–26",
    date: "18 Mar 2026",
    readTime: "3 min read",
    excerpt:
      "A momentous occasion celebrating student leadership — badges of responsibility ceremonially conferred upon the student council amid proud families and a buzzing school community.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80&auto=format&fit=crop",
    href: "/news-events",
  },
  {
    featured: false,
    category: "STEM",
    badgeClass: "news-badge--stem",
    title: "Galaxy Strikers Space Club at OLIVEMOUNT!",
    date: "12 Feb 2026",
    readTime: "4 min read",
    excerpt:
      "Students explored the cosmos through hands-on science experiments, model rockets, and interactive astronomy sessions.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700&q=80&auto=format&fit=crop",
    href: "/news-events",
  },
  {
    featured: false,
    category: "Guest Lecture",
    badgeClass: "news-badge--lecture",
    title: "Inspiring Minds: Guest Lecture by ISRO Scientist",
    date: "25 Jan 2026",
    readTime: "2 min read",
    excerpt:
      "A distinguished senior scientist from ISRO inspired our students with stories of exploration, research, and national service.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80&auto=format&fit=crop",
    href: "/news-events",
  },
];

const galleryItems = [
  {
    label: "Annual Day 2025",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80&auto=format&fit=crop",
  },
  {
    label: "Science Exhibition",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=700&q=80&auto=format&fit=crop",
  },
  {
    label: "Sports Day",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=700&q=80&auto=format&fit=crop",
  },
  {
    label: "Art Show",
    image: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=700&q=80&auto=format&fit=crop",
  },
  {
    label: "Music Fest",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=700&q=80&auto=format&fit=crop",
  },
  {
    label: "Graduation Day",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80&auto=format&fit=crop",
  },
];

const blogPosts = [
  {
    tag: "Parenting",
    title: "How to Build Confidence in Your Child from an Early Age",
    excerpt:
      "Confidence is a life skill, not a personality trait. Here's how parents and teachers can nurture it together through daily habits and positive reinforcement.",
    date: "14 Apr 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format&fit=crop",
    featured: true,
    href: "/blogs",
  },
  {
    tag: "Academics",
    title: "Why Curiosity-Led Learning Outperforms Rote Memorisation",
    excerpt:
      "Modern education research consistently shows that students who ask questions retain concepts longer and develop a genuine love for learning.",
    date: "8 Apr 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80&auto=format&fit=crop",
    featured: false,
    href: "/blogs",
  },
  {
    tag: "School Life",
    title: "A Day in the Life of an OLIVEMOUNT Student",
    excerpt:
      "From morning assembly to after-school clubs, here's how a vibrant, balanced day unfolds for our learners.",
    date: "1 Apr 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80&auto=format&fit=crop",
    featured: false,
    href: "/blogs",
  },
];

export default function HomePage() {
  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "OLIVEMOUNT Global School",
    description:
      "One of Hyderabad's best CBSE-affiliated schools in Attapur, offering Pre-KG to Class XII education with modern facilities, expert faculty, and a globally inspired 5 C's framework for holistic development.",
    url: "https://www.olivemountglobalschool.com",
    telephone: ["+91-7998877669", "+91-40-29701555"],
    email: "info@olivemountglobalschool.com",
    foundingDate: "2016",
    numberOfStudents: 750,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Street Number 15, Nalanda Nagar, Attapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500048",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.3850",
      longitude: "78.4867",
    },
    isAccreditedBy: {
      "@type": "Organization",
      name: "Central Board of Secondary Education (CBSE)",
      identifier: "3630314",
    },
    sameAs: [
      "https://www.instagram.com/olivemount_global_school",
      "https://www.facebook.com/olivemountschool.hyd",
      "https://www.youtube.com/@olivemountschool-g5w",
    ],
  };

  return (
    <div className="page-wrap">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero-section" aria-label="Hero">
        <HeroFloatingIcons />
        <div className="container hero-grid">

          {/* Left copy */}
          <div className="hero-copy">
            <span className="eyebrow">Best CBSE School · Attapur, Hyderabad</span>
            <h1>Hyderabad's Premier CBSE School — Shaping Confident Global Citizens</h1>
            <p>
              OLIVEMOUNT Global School, Attapur — one of Hyderabad's most trusted CBSE schools,
              nurturing students from Pre-KG to Class XII with world-class facilities, expert
              educators, and a values-driven 5&nbsp;C&apos;s framework.
            </p>

            <div className="hero-actions">
              <ApplyButton className="button">Apply for Admission</ApplyButton>
              <Link href="/about" className="button button-secondary">Our Story</Link>
            </div>

            {/* Trust bar */}
            <div className="trust-bar" role="list" aria-label="School credentials">
              {trustSignals.map((t) => (
                <div key={t.value} className="trust-item" role="listitem">
                  <strong>{t.value}</strong>
                  <span>{t.label}</span>
                  <small>{t.note}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="hero-visual" aria-label="School highlights">
            {/* Decorative orbs */}
            <div className="hv-orb hv-orb-1" aria-hidden="true" />
            <div className="hv-orb hv-orb-2" aria-hidden="true" />

            {/* Brand */}
            <div className="hv-brand">
              <span className="hv-badge">
                <span className="hv-dot" />
                CBSE Affiliated · Est. 2016
              </span>
              <p className="hv-school-name">OLIVEMOUNT<br />Global School</p>
            </div>

            {/* Stats */}
            <div className="hv-stats" role="list" aria-label="School statistics">
              <div className="hv-stat" role="listitem">
                <strong>750+</strong>
                <span>Students</span>
              </div>
              <div className="hv-stat-div" aria-hidden="true" />
              <div className="hv-stat" role="listitem">
                <strong>50+</strong>
                <span>Educators</span>
              </div>
              <div className="hv-stat-div" aria-hidden="true" />
              <div className="hv-stat" role="listitem">
                <strong>Gr I–XII</strong>
                <span>Full School</span>
              </div>
            </div>

            {/* Checklist */}
            <div className="hv-promise">
              <p className="hv-prompt">Why families choose us</p>
              <ul className="check-list">
                {checkList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 C's INFOGRAPHIC ────────────────────────────────── */}
      <section className="section fivecs-section" aria-labelledby="fivecs-heading">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">The OLIVEMOUNT Approach</span>
            <h2 id="fivecs-heading">Five Pillars That Shape Every CBSE Learner at OLIVEMOUNT</h2>
            <p className="section-sub">
              Our 5&nbsp;C&apos;s framework goes beyond marks — building the mindset, values,
              and life skills that set Hyderabad&apos;s top students apart from the rest.
            </p>
          </ScrollReveal>
          <FiveCs />
        </div>
      </section>

      {/* ── ACADEMIC STAGES ──────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="stages-heading">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading">
            <span className="eyebrow">Academic Journey</span>
            <h2 id="stages-heading">CBSE Academic Pathways from Pre-KG to Class XII</h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100} stagger className="stages-grid">
            {programmes.map((p) => (
              <article key={p.number} className="stage-card">
                <span className="stage-num" aria-hidden="true">{p.number}</span>
                <div className="stage-body">
                  <h3>{p.title}</h3>
                  <small className="stage-grades">{p.grades}</small>
                  <p>{p.desc}</p>
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── FACILITIES ───────────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="facilities-heading">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Campus Life</span>
            <h2 id="facilities-heading">Our Facilities</h2>
            <p className="section-sub">
              Purpose-built spaces that spark curiosity, creativity, and hands-on learning every day.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={80} stagger className="facilities-grid">
            {facilities.map((f) => (
              <Link key={f.name} href="/facilities" className="facility-card">
                <div className="facility-thumb">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="facility-img-overlay" aria-hidden="true" />
                  <span className="facility-icon" aria-hidden="true">{f.icon}</span>
                  <span className="facility-name">{f.name}</span>
                </div>
              </Link>
            ))}
          </ScrollReveal>
          <div className="facilities-cta">
            <Link href="/facilities" className="button button-secondary">Browse All Facilities</Link>
          </div>
        </div>
      </section>

      {/* ── ALIGN YOUR GOALS — DUAL CTA ──────────────────────── */}
      <section className="section" aria-labelledby="align-heading">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Start to Success</span>
            <h2 id="align-heading">Align Your Goals With OLIVEMOUNT School</h2>
          </ScrollReveal>
          <div className="dual-cta-grid">
            {/* Card 1 — Careers */}
            <Link href="/careers" className="dual-cta-card">
              <div className="dual-cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="dual-cta-eyebrow">Join Our Team</span>
              <h3>Become a Mentor, Shape the Future</h3>
              <p>
                Faculty openings are available at our school. Join our dynamic team, shape young minds,
                and inspire the next generation of global citizens.
              </p>
              <span className="button button-small">View Openings</span>
            </Link>

            {/* Card 2 — About */}
            <Link href="/about" className="dual-cta-card">
              <div className="dual-cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <span className="dual-cta-eyebrow">Discover More</span>
              <h3>Discover, Learn, Thrive — Future Starts Here</h3>
              <p>
                Modern facilities enhance learning — well-equipped classrooms, state-of-the-art labs,
                an expansive library, sports arenas, and a nurturing environment.
              </p>
              <span className="button button-small">View More</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWS & EVENTS ────────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="news-heading">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Stay Updated</span>
            <h2 id="news-heading">News &amp; Events</h2>
            <p className="section-sub">
              Celebrations, achievements, and milestones from across the OLIVEMOUNT community.
            </p>
          </ScrollReveal>

          <div className="news-layout">
            {/* ── Featured card ── */}
            <Link href={newsItems[0].href} className="news-card news-card--featured">
              <div className="news-img-wrap">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  sizes="(max-width: 860px) 100vw, 58vw"
                  style={{ objectFit: "cover" }}
                />
                <span className={`news-badge ${newsItems[0].badgeClass}`}>{newsItems[0].category}</span>
              </div>
              <div className="news-body">
                <div className="news-date-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{newsItems[0].date}</span>
                  <span className="news-date-sep" />
                  <span>{newsItems[0].readTime}</span>
                </div>
                <p className="news-title">{newsItems[0].title}</p>
                <p className="news-excerpt">{newsItems[0].excerpt}</p>
                <span className="news-readmore">
                  Read Full Story
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* ── Side column: compact cards ── */}
            <div className="news-side">
              {newsItems.slice(1).map((n) => (
                <Link key={n.title} href={n.href} className="news-card news-card--compact">
                  <div className="news-img-wrap">
                    <Image
                      src={n.image}
                      alt={n.title}
                      fill
                      sizes="(max-width: 860px) 100vw, 136px"
                      style={{ objectFit: "cover" }}
                    />
                    <span className={`news-badge ${n.badgeClass}`}>{n.category}</span>
                  </div>
                  <div className="news-body">
                    <div className="news-date-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{n.date}</span>
                      <span className="news-date-sep" />
                      <span>{n.readTime}</span>
                    </div>
                    <p className="news-title">{n.title}</p>
                    <p className="news-excerpt">{n.excerpt}</p>
                    <span className="news-readmore">
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="news-cta">
            <Link href="/news-events" className="button button-secondary">
              View All News &amp; Events
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ──────────────────────────────────── */}
      <section className="section" aria-labelledby="gallery-heading">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Campus Moments</span>
            <h2 id="gallery-heading">Life at OLIVEMOUNT</h2>
            <p className="section-sub">
              A glimpse into the vibrant events, celebrations, and everyday moments that make our campus special.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="zoom-in" delay={60} stagger className="gallery-grid">
            {galleryItems.map((g) => (
              <Link key={g.label} href="/gallery" className="gallery-item">
                <div className="gallery-thumb">
                  <Image
                    src={g.image}
                    alt={g.label}
                    fill
                    sizes="(max-width: 560px) 50vw, (max-width: 860px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="gallery-overlay">
                  <span>{g.label}</span>
                </div>
              </Link>
            ))}
          </ScrollReveal>
          <div className="gallery-cta">
            <Link href="/gallery" className="button button-secondary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="blog-heading">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Insights &amp; Stories</span>
            <h2 id="blog-heading">From Our Blog</h2>
            <p className="section-sub">
              Perspectives on parenting, learning, and school life — written by our educators and community.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={80} stagger className="blog-grid">
            {blogPosts.map((b) => (
              <Link
                key={b.title}
                href={b.href}
                className={`blog-card${b.featured ? " blog-card--featured" : ""}`}
              >
                <div className="blog-thumb">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    sizes={b.featured ? "(max-width: 860px) 100vw, 60vw" : "(max-width: 860px) 50vw, 140px"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="blog-body">
                  <span className="blog-tag">{b.tag}</span>
                  <p className="blog-title">{b.title}</p>
                  <p className="blog-excerpt">{b.excerpt}</p>
                  <div className="blog-meta">
                    <span>{b.date}</span>
                    <span className="blog-meta-dot" aria-hidden="true" />
                    <span>{b.readTime}</span>
                  </div>
                  <span className="blog-readmore">
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </ScrollReveal>
          <div className="blog-cta">
            <Link href="/blogs" className="button button-secondary">Read All Articles</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="section section-testimonials" aria-labelledby="testimonials-heading">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading centered">
            <span className="eyebrow">Parent Stories</span>
            <h2 id="testimonials-heading">Hear From Our OLIVEMOUNT Families</h2>
            <p className="section-sub">
              Real experiences, in their own words — from parents who chose OLIVEMOUNT for their children.
            </p>
          </ScrollReveal>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section className="cta-band" aria-label="Admissions">
        <div className="container">
          <div className="cta-box">
            <div className="cta-copy">
              <span className="eyebrow eyebrow-light">Admissions Open</span>
              <h2>Join Hyderabad&apos;s Most Trusted CBSE School — Visit Our Campus Today</h2>
              <p>Call 040-29701555 or fill the online enquiry to begin your child&apos;s journey at OLIVEMOUNT.</p>
            </div>
            <div className="cta-actions">
              <ApplyButton className="button button-white">Apply Online</ApplyButton>
              <Link href="/contact" className="button button-ghost-white">Contact School</Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escape </script> sequences to prevent XSS via JSON-LD injection
          __html: JSON.stringify(schoolSchema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}

