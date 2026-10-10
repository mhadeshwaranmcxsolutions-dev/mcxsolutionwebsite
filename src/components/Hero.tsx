import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section
      id="home"
      className="gradient-navy relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl animate-pulse-soft" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-soft" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-orangeLight">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
            Smart Solutions. Simple Business.
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
            Technology Solutions for a{" "}
            <span className="gradient-text">Better Tomorrow</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            MCX Solutions provides modern, reliable and easy-to-use software
            systems to help businesses grow, operate efficiently and achieve
            success.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-brand-orangeDark hover:shadow-glow hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              Our Solutions
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <Stat value="500+" label="Businesses Served" />
            <div className="h-10 w-px bg-white/15" />
            <Stat value="99.9%" label="Uptime" />
            <div className="h-10 w-px bg-white/15" />
            <Stat value="24/7" label="Support" />
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-orange/30 to-brand-blue/30 blur-2xl" />
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
    <div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}
