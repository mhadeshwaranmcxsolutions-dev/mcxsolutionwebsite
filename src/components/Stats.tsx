const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "10M+", label: "Orders Processed" },
  { value: "99.9%", label: "System Uptime" },
  { value: "24/7", label: "Dedicated Support" },
];

export default function Stats() {
  return (
    <section className="gradient-navy relative overflow-hidden py-20">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="bg-gradient-to-b from-brand-orangeLight to-brand-orange bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
