import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import MobileNav from "./components/MobileNav";
import BottomNav from "./components/BottomNav";
import AdmissionModal from "./components/AdmissionModal";
import ApplyButton from "./components/ApplyButton";
import PWARegister from "./components/PWARegister";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.olivemountglobalschool.com"),
  title: {
    default: "OLIVEMOUNT Global School | Best CBSE School in Hyderabad | Attapur",
    template: "%s | OLIVEMOUNT Global School – Best CBSE School Hyderabad",
  },
  description:
    "OLIVEMOUNT Global School is one of the best CBSE schools in Hyderabad, located in Attapur. Offering holistic education from Pre-KG to Class XII with modern facilities, experienced faculty, and a proven 5 C's framework. Admissions open for 2026-27.",
  keywords: [
    "best CBSE school in Hyderabad",
    "top CBSE school Hyderabad",
    "CBSE school Attapur Hyderabad",
    "OLIVEMOUNT Global School",
    "best school in Attapur",
    "CBSE school near me Hyderabad",
    "CBSE school admissions Hyderabad 2026",
    "top school in Hyderabad",
    "international standard school Hyderabad",
    "school admissions Hyderabad 2026-27",
    "holistic education Hyderabad",
    "CBSE affiliated school Hyderabad",
  ],
  openGraph: {
    title: "OLIVEMOUNT Global School | Best CBSE School in Hyderabad",
    description:
      "One of Hyderabad's best CBSE schools in Attapur — offering Pre-KG to Class XII with modern facilities, expert faculty, and the globally inspired 5 C's framework for holistic development.",
    url: "https://www.olivemountglobalschool.com",
    siteName: "OLIVEMOUNT Global School",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OLIVEMOUNT Global School | Best CBSE School in Hyderabad",
    description:
      "One of Hyderabad's best CBSE schools in Attapur — Pre-KG to Class XII. Admissions open 2026-27. Call 040-29701555.",
  },
  manifest: "/manifest.webmanifest",
  applicationName: "OLIVEMOUNT Global School",
  appleWebApp: {
    capable: true,
    title: "OLIVEMOUNT",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon-192.png",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="site-shell">
          <header className="site-header">
            <div className="container header-inner">
              <Link href="/" className="brand" aria-label="OLIVEMOUNT Global School home">
                <Image
                  src="/logo.jpeg"
                  alt="OLIVEMOUNT Global School logo"
                  width={180}
                  height={58}
                  priority
                />
              </Link>

              {/* Desktop nav — hidden on mobile via CSS */}
              <div className="desktop-nav-wrap">
                <nav className="main-nav" aria-label="Primary navigation">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/academics">Academics</Link>
                  <Link href="/admissions">Admissions</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
                <ApplyButton className="button button-small">
                  Apply Now
                </ApplyButton>
              </div>

              {/* Mobile hamburger — hidden on desktop via CSS */}
              <MobileNav />
            </div>
          </header>

          <main>{children}</main>

          {/* Mobile bottom nav — hidden on desktop via CSS */}
          <BottomNav />

          <PWARegister />

          {/* Admission enquiry modal — triggered by Apply buttons sitewide */}
          <AdmissionModal />

          <footer className="site-footer">
            <div className="footer-inner">
              {/* Brand strip */}
              <div className="container footer-brand">
                <img src="/dark-logo.jpeg" alt="OLIVEMOUNT Global School" className="footer-logo" height={56} />
                <div className="footer-brand-body">
                  <p className="footer-brand-name">OLIVEMOUNT Global School</p>
                  <p className="footer-brand-desc">
                    A premium CBSE school in Attapur, Hyderabad — shaping confident global citizens
                    through the 5&nbsp;C&apos;s framework of Communication, Confidence, Creativity,
                    Competency, and Character.
                  </p>
                  <p className="footer-brand-address">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    Street No. 15, Nalanda Nagar, Attapur, Hyderabad — 500048
                  </p>
                </div>
                <div className="footer-affil">
                  <div className="footer-affil-badge">
                    <span>CBSE Affiliated<br /><strong>No: 3630314</strong></span>
                  </div>
                  <div className="footer-affil-badge">
                    <span>Grades<br /><strong>Pre-KG to XII</strong></span>
                  </div>
                </div>
              </div>

              {/* Link columns */}
              <div className="container footer-links-grid">
                {/* Site Map */}
                <div className="footer-col">
                  <h4>Site Map</h4>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/admissions">Admissions</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li><Link href="/news-events">News &amp; Events</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                  </ul>
                </div>

                {/* Useful Links — two sub-columns */}
                <div className="footer-col footer-col--wide">
                  <h4>Useful Links</h4>
                  <div className="footer-col-inner">
                    <ul>
                      <li><Link href="/about">Our Story</Link></li>
                      <li><Link href="/about">Our Team</Link></li>
                      <li><Link href="/about">Vision &amp; Mission</Link></li>
                      <li><Link href="/about">Principal&apos;s Message</Link></li>
                      <li><Link href="/about">Awards &amp; Achievement</Link></li>
                      <li><Link href="/academics">Curriculum &amp; Activities</Link></li>
                      <li><Link href="/about">Faculty</Link></li>
                      <li><Link href="/facilities">Facilities</Link></li>
                    </ul>
                    <ul>
                      <li><a href="#">Transfer Certificate</a></li>
                      <li><Link href="/admissions">FAQs</Link></li>
                      <li><a href="#">Public Disclosure</a></li>
                      <li><Link href="/admissions">Admission Procedure</Link></li>
                      <li><Link href="/admissions">Admission Enquiry</Link></li>
                      <li><Link href="/gallery">Images</Link></li>
                      <li><a href="#">Videos</a></li>
                      <li><a href="#">Media</a></li>
                    </ul>
                  </div>
                </div>

                {/* Our Support */}
                <div className="footer-col">
                  <h4>Our Support</h4>
                  <ul>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><Link href="/contact">Contact Support</Link></li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                  <h4>Contact</h4>
                  <div className="footer-contact-info">
                    <div className="footer-contact-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/>
                      </svg>
                      <div>
                        <a href="tel:+917998877669">7998877669</a>
                        &nbsp;/&nbsp;
                        <a href="tel:+914029701555">040-29701555</a>
                      </div>
                    </div>
                    <div className="footer-contact-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                      <a href="mailto:info@olivemountglobalschool.com">
                        info@olivemountglobalschool.com
                      </a>
                    </div>
                  </div>
                  <div className="footer-social">
                    <a href="https://www.youtube.com/@olivemountschool-g5w" target="_blank" rel="noreferrer" aria-label="YouTube">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/olivemountschool.hyd" target="_blank" rel="noreferrer" aria-label="Facebook">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.886v2.286h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/olivemount_global_school" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href="https://twitter.com/olivemountschool" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="container footer-bottom">
                <span>© 2026 OLIVEMOUNT Global School. All rights reserved.</span>
                <div className="footer-bottom-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Use</a>
                  <a href="#">Public Disclosure</a>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
