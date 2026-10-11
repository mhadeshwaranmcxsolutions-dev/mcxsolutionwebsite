import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";

const stats = [
  { end: 500, suffix: "+", label: "Businesses Served" },
  { end: 10, suffix: "M+", label: "Orders Processed" },
  { end: 99.9, suffix: "%", label: "System Uptime", decimals: 1 },
  { value: "24/7", label: "Dedicated Support", isText: true },
];

export default function Stats() {
  return (
    <section className="gradient-navy relative overflow-hidden py-20">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl animate-pulse-soft" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-soft" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} variant="scale">
              <div className="group text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-b from-brand-orangeLight to-brand-orange bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
                  {s.isText ? (
                    s.value
                  ) : (
                    <AnimatedCounter
                      end={s.end!}
                      suffix={s.suffix}
                      decimals={s.decimals || 0}
                    />
                  )}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
