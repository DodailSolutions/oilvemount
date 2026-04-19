"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* Escape key + body scroll lock */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="nav-hamburger"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-drawer"
      >
        <span className={`hline${open ? " hline--open" : ""}`} />
        <span className={`hline${open ? " hline--open" : ""}`} />
        <span className={`hline${open ? " hline--open" : ""}`} />
      </button>

      {/* Backdrop */}
      <div
        className={`mobile-backdrop${open ? " mobile-backdrop--visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-down drawer */}
      <nav
        id="mobile-drawer"
        className={`mobile-drawer${open ? " mobile-drawer--open" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul className="drawer-list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`drawer-link${pathname === l.href ? " drawer-link--active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="button drawer-cta"
          onClick={() => {
            setOpen(false);
            window.dispatchEvent(new Event("openAdmissionModal"));
          }}
        >
          Apply Now
        </button>
      </nav>
    </>
  );
}
