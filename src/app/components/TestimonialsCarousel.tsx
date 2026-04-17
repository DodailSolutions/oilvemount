"use client";
import { useState, useEffect, useRef, useCallback } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  /** Replace each value with the real YouTube video ID once available */
  videoId: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Priya Reddy",
    role: "Parent of Arjun · Class IV",
    quote:
      "OLIVEMOUNT has been the best decision for our family. Arjun looks forward to school every single day — his confidence, curiosity, and communication skills have grown tremendously in just two years.",
    videoId: "REPLACE_WITH_VIDEO_ID_1",
    rating: 5,
  },
  {
    name: "Suresh & Kavitha Sharma",
    role: "Parents of Meera · Class VII",
    quote:
      "The teachers here genuinely care about every child. Meera was quite shy when she joined, but the 5 C's framework helped her speak up, lead projects, and truly shine. We couldn't be prouder.",
    videoId: "REPLACE_WITH_VIDEO_ID_2",
    rating: 5,
  },
  {
    name: "Mohammed Rashid",
    role: "Parent of Zara · Class X",
    quote:
      "The balance of academic rigour and character development is rare to find. Zara is preparing for her board exams with clarity and calm — the structured CBSE approach at OLIVEMOUNT really delivers.",
    videoId: "REPLACE_WITH_VIDEO_ID_3",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (idx: number) => {
      setActive(((idx % total) + total) % total);
      setPlaying(false);
    },
    [total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Auto-advance — pause while video is playing or user is hovering
  useEffect(() => {
    if (paused || playing) {
      timerRef.current && clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, 6000);
    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, [paused, playing, next]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const t = testimonials[active];

  return (
    <div
      className="tc-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* key={active} triggers re-mount → CSS fade-in animation on each slide */}
      <div className="tc-stage" key={active}>

        {/* ── Video ─────────────────────────────────── */}
        <div className="tc-video-wrap">
          {playing ? (
            <iframe
              key={t.videoId}
              src={`https://www.youtube-nocookie.com/embed/${t.videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={`${t.name} — parent testimonial`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-presentation allow-fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              className="tc-iframe"
            />
          ) : (
            <button
              className="tc-play-btn"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${t.name}'s testimonial video`}
            >
              {/* YouTube thumbnail — replace videoId in data above to get real thumbnails */}
              <img
                src={`https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`}
                alt={`${t.name} testimonial thumbnail`}
                className="tc-thumb-img"
              />
              {/* Fallback gradient shown if thumbnail 404s */}
              <span className="tc-thumb-fallback" aria-hidden="true" />
              <span className="tc-play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>

        {/* ── Quote ─────────────────────────────────── */}
        <blockquote className="tc-quote">
          <svg
            className="tc-qmark"
            viewBox="0 0 44 34"
            fill="currentColor"
            aria-hidden="true"
            width="38"
            height="30"
          >
            <path d="M0 34V21.4C0 13.35 4.2 6.65 12.6 1.35L15.4 5.85C11.2 8.25 8.9 11.9 8.6 16.8H17V34H0ZM27 34V21.4C27 13.35 31.2 6.65 39.6 1.35L42.4 5.85C38.2 8.25 35.9 11.9 35.6 16.8H44V34H27Z" />
          </svg>

          <p className="tc-text">{t.quote}</p>

          <footer className="tc-footer">
            <div
              className="tc-stars"
              aria-label={`${t.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 20 20"
                  width="17"
                  height="17"
                  aria-hidden="true"
                  fill={i < t.rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <cite className="tc-cite">
              <strong className="tc-name">{t.name}</strong>
              <span className="tc-role">{t.role}</span>
            </cite>
          </footer>
        </blockquote>
      </div>

      {/* ── Controls ──────────────────────────────── */}
      <nav className="tc-controls" aria-label="Testimonial navigation">
        <button
          className="tc-arrow"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="tc-dots" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial ${i + 1} of ${total}`}
              className={`tc-dot${i === active ? " tc-dot--active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button
          className="tc-arrow"
          onClick={next}
          aria-label="Next testimonial"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </nav>
    </div>
  );
}
