"use client";

import { useEffect, useRef } from "react";
import DashboardMockup from "./DashboardMockup";
import Magnetic from "./Magnetic";
import AnimatedTextReveal from "./AnimatedTextReveal";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const blobs = section.querySelectorAll<HTMLElement>("[data-parallax]");
      blobs.forEach((el, i) => {
        const depth = (i + 1) * 8;
        el.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };
    section.addEventListener("mousemove", handleMove);
    return () => section.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="gradient-navy relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div
        data-parallax
        className="parallax-layer absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl animate-pulse-soft transition-transform duration-300 ease-out"
      />
      <div
        data-parallax
        className="parallax-layer absolute right-0 top-1/3 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-soft transition-transform duration-300 ease-out"
      />
      <div
        data-parallax
        className="parallax-layer absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-orangeLight/10 blur-3xl animate-pulse-soft transition-transform duration-300 ease-out"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-orangeLight">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
            Smart Solutions. Simple Business.
          </span>

          <h1 className="mt-6 animate-fade-up text-4xl font-extrabold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl" style={{ animationDelay: "80ms" }}>
            <AnimatedTextReveal text="Technology Solutions for a" />{" "}
            <span className="gradient-text-animated">
              <AnimatedTextReveal text="Better Tomorrow" stagger={60} />
            </span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-300" style={{ animationDelay: "160ms" }}>
            MCX Solutions provides modern, reliable and easy-to-use software
            systems to help businesses grow, operate efficiently and achieve
            success.
          </p>

          <div className="mt-9 flex flex-wrap animate-fade-up gap-4" style={{ animationDelay: "240ms" }}>
            <Magnetic strength={0.4}>
              <a
                href="#solutions"
                className="group btn-shine inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:bg-brand-orangeDark hover:shadow-glow"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                Our Solutions
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Contact Us
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </Magnetic>
          </div>

          <div className="mt-12 flex animate-fade-up items-center gap-8" style={{ animationDelay: "320ms" }}>
            <Stat value="500+" label="Businesses Served" />
            <div className="h-10 w-px bg-white/15" />
            <Stat value="99.9%" label="Uptime" />
            <div className="h-10 w-px bg-white/15" />
            <Stat value="24/7" label="Support" />
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-orange/30 to-brand-blue/30 blur-2xl animate-pulse-soft" />
          <div className="relative animate-float">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="transition-transform duration-300 hover:-translate-y-1">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}
