"use client";
import { useEffect, useRef } from "react";

interface Icon {
  id: number;
  x: number;   // % from left
  y: number;   // % from top
  size: number; // px
  depth: number; // 0–1, how much it moves (parallax layer)
  rotate: number; // initial rotation deg
  type: "book" | "pen" | "pencil" | "ruler" | "star" | "atom";
}

const ICONS: Icon[] = [
  { id: 0,  x: 6,   y: 12,  size: 44, depth: 0.04, rotate: -15, type: "book"   },
  { id: 1,  x: 18,  y: 72,  size: 32, depth: 0.07, rotate: 25,  type: "pen"    },
  { id: 2,  x: 30,  y: 18,  size: 28, depth: 0.05, rotate: -8,  type: "pencil" },
  { id: 3,  x: 55,  y: 8,   size: 36, depth: 0.03, rotate: 12,  type: "ruler"  },
  { id: 4,  x: 72,  y: 82,  size: 30, depth: 0.06, rotate: -20, type: "star"   },
  { id: 5,  x: 85,  y: 20,  size: 26, depth: 0.08, rotate: 30,  type: "atom"   },
  { id: 6,  x: 92,  y: 60,  size: 40, depth: 0.04, rotate: -5,  type: "book"   },
  { id: 7,  x: 43,  y: 88,  size: 24, depth: 0.09, rotate: 18,  type: "pencil" },
  { id: 8,  x: 78,  y: 45,  size: 34, depth: 0.05, rotate: -30, type: "pen"    },
  { id: 9,  x: 12,  y: 48,  size: 22, depth: 0.07, rotate: 8,   type: "ruler"  },
  { id: 10, x: 62,  y: 30,  size: 28, depth: 0.06, rotate: -12, type: "star"   },
  { id: 11, x: 38,  y: 55,  size: 20, depth: 0.10, rotate: 22,  type: "atom"   },
];

function IconSVG({ type, size }: { type: Icon["type"]; size: number }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.3",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (type) {
    case "book":
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case "pen":
      return (
        <svg {...props}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case "pencil":
      return (
        <svg {...props}>
          <line x1="18" y1="2" x2="22" y2="6" />
          <path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z" />
        </svg>
      );
    case "ruler":
      return (
        <svg {...props}>
          <path d="M5 3l14 14-3 3L2 6l3-3z" />
          <line x1="8"  y1="8"  x2="6"  y2="10" />
          <line x1="12" y1="12" x2="10" y2="14" />
          <line x1="16" y1="16" x2="14" y2="18" />
        </svg>
      );
    case "star":
      return (
        <svg {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "atom":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="1" />
          <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z" />
          <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z" />
        </svg>
      );
  }
}

export default function HeroFloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // Normalise to -0.5 … 0.5
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top)  / rect.height - 0.5,
      };
    };

    const animate = () => {
      const { x, y } = mouseRef.current;
      iconsRef.current.forEach((el, i) => {
        if (!el) return;
        const icon = ICONS[i];
        const dx = x * icon.depth * 320;
        const dy = y * icon.depth * 320;
        el.style.transform = `translate(${dx}px, ${dy}px) rotate(${icon.rotate}deg)`;
      });
      rafRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-float-icons" aria-hidden="true">
      {ICONS.map((icon, i) => (
        <div
          key={icon.id}
          ref={(el) => { iconsRef.current[i] = el; }}
          className="hero-float-icon"
          style={{
            left: `${icon.x}%`,
            top:  `${icon.y}%`,
            transform: `rotate(${icon.rotate}deg)`,
            color: "rgba(29,78,216,0.10)",
          }}
        >
          <IconSVG type={icon.type} size={icon.size} />
        </div>
      ))}
    </div>
  );
}
