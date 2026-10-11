"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Solutions", href: "/#solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement;
      const height = h.scrollHeight - h.clientHeight;
      setProgress(height > 0 ? (h.scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links
      .map((l) => (l.href.includes("#") ? l.href.split("#")[1] : null))
      .filter(Boolean) as string[];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkColor = scrolled
    ? "text-brand-navy/70 hover:text-brand-navy"
    : "text-white/80 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/80 shadow-[0_8px_30px_-12px_rgba(11,31,58,0.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-brand-orange via-brand-orangeLight to-brand-orange transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 lg:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a
          href="#home"
          aria-label="MCX Solutions home"
          className="transition-transform duration-300 hover:scale-105"
        >
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isRoute = !l.href.includes("#");
            const isActive = isRoute ? pathname === l.href : active === l.href.replace(/^\//, "");
            return (
              <li key={l.href}>
                {isRoute ? (
                  <Link
                    href={l.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-brand-orange" : linkColor
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-orange transition-all duration-300 ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-brand-orange" : linkColor
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-orange transition-all duration-300 ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:scale-105 hover:bg-brand-orangeDark hover:shadow-glow active:scale-95"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22l-4-9-9-4Z" />
            </svg>
            Get in Touch
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`relative flex h-11 w-11 items-center justify-center rounded-lg transition-colors lg:hidden ${
            scrolled ? "text-brand-navy" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "top-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "top-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-200/60 bg-white/95 backdrop-blur-xl">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {links.map((l, i) => {
              const isRoute = !l.href.includes("#");
              const isActive = isRoute ? pathname === l.href : active === l.href.replace(/^\//, "");
              return (
                <li key={l.href}>
                  {isRoute ? (
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-orange-50 text-brand-orange"
                          : "text-brand-navy/80 hover:bg-slate-50 hover:text-brand-navy"
                      }`}
                      style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                    >
                      {l.label}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      )}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-orange-50 text-brand-orange"
                          : "text-brand-navy/80 hover:bg-slate-50 hover:text-brand-navy"
                      }`}
                      style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                    >
                      {l.label}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      )}
                    </a>
                  )}
                </li>
              );
            })}
            <li className="mt-3">
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-brand-orange px-6 py-3.5 text-center text-sm font-semibold text-white shadow-card transition-all hover:bg-brand-orangeDark"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
