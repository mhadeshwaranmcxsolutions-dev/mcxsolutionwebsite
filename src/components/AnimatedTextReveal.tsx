"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function AnimatedTextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 40,
}: AnimatedTextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
        >
          <span
            className="inline-block transition-all duration-700 ease-out"
            style={{
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transitionDelay: `${delay + i * stagger}ms`,
              marginRight: "0.25em",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
