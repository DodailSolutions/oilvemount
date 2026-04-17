"use client";
import { useEffect, useRef, type ReactNode, type CSSProperties, type ElementType } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Animation variant */
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";
  /** Extra delay in ms on top of stagger */
  delay?: number;
  /** Stagger children automatically */
  stagger?: boolean;
  /** Extra inline styles */
  style?: CSSProperties;
  as?: ElementType;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  stagger = false,
  style,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("sr-visible");
              if (stagger) {
                el.querySelectorAll(":scope > *").forEach((child, i) => {
                  (child as HTMLElement).style.transitionDelay = `${i * 80}ms`;
                  child.classList.add("sr-child-visible");
                });
              }
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger]);

  return (
    <Tag
      ref={ref}
      className={`sr sr-${variant}${stagger ? " sr-stagger" : ""} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
