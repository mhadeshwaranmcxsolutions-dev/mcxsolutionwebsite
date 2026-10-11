"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "fade";
  as?: "div" | "section" | "article" | "li" | "span";
}

const variantClasses: Record<string, string> = {
  up: "translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  scale: "scale-95",
  fade: "",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as = "div",
}: RevealProps) {
  const { ref, visible } = useScrollReveal();
  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${variantClasses[variant]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
