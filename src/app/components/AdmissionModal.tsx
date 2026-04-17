"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

const grades = [
  "Pre-KG", "KG",
  ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
];

export default function AdmissionModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openAdmissionModal", handler);
    return () => window.removeEventListener("openAdmissionModal", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      dialogRef.current?.showModal();
    } else {
      document.body.style.overflow = "";
      dialogRef.current?.close();
      const t = setTimeout(() => setSubmitted(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <dialog
      ref={dialogRef}
      className="adm-dialog"
      onClose={close}
      onClick={(e) => { if (e.target === dialogRef.current) close(); }}
    >
      <div className="adm-panel">
        <button className="adm-close" onClick={close} aria-label="Close form">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="adm-success">
            <div className="adm-success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3>Enquiry Received!</h3>
            <p>Thank you. Our admissions team will call you within 24 hours to guide you through the next steps.</p>
            <button className="button adm-done-btn" onClick={close}>Done</button>
          </div>
        ) : (
          <>
            <div className="adm-header">
              <div className="adm-badge">Admissions Open 2025–26</div>
              <h2>Apply for Admission</h2>
              <p>Fill in your details and we&apos;ll get back to you shortly.</p>
            </div>

            <form className="adm-form" onSubmit={handleSubmit} noValidate>
              <div className="adm-row">
                <label className="adm-field">
                  <span>Student&apos;s Name <em>*</em></span>
                  <input type="text" name="studentName" placeholder="Full name" required autoComplete="off" />
                </label>
                <label className="adm-field">
                  <span>Class Applying For <em>*</em></span>
                  <select name="grade" required defaultValue="">
                    <option value="" disabled>Select class</option>
                    {grades.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="adm-row">
                <label className="adm-field">
                  <span>Parent&apos;s Name <em>*</em></span>
                  <input type="text" name="parentName" placeholder="Father / Mother name" required />
                </label>
                <label className="adm-field">
                  <span>Mobile Number <em>*</em></span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    pattern="[0-9+\s\-]{7,15}"
                  />
                </label>
              </div>

              <label className="adm-field">
                <span>Email Address <em className="adm-optional">(optional)</em></span>
                <input type="email" name="email" placeholder="For written confirmation" />
              </label>

              <label className="adm-field">
                <span>Message / Any Questions <em className="adm-optional">(optional)</em></span>
                <textarea name="message" rows={3} placeholder="Tell us anything you'd like us to know…" />
              </label>

              <button type="submit" className="button adm-submit" disabled={loading}>
                {loading ? (
                  <span className="adm-spinner" aria-hidden="true" />
                ) : null}
                {loading ? "Submitting…" : "Submit Enquiry →"}
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
