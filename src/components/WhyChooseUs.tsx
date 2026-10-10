const features = [
  {
    title: "Reliable Systems",
    desc: "Stable and secure solutions you can trust for mission-critical operations.",
    icon: "shield",
    color: "blue",
  },
  {
    title: "Easy to Use",
    desc: "Simple and user-friendly design for everyone on your team.",
    icon: "bulb",
    color: "orange",
  },
  {
    title: "Business Growth",
    desc: "Tools to help your business grow faster and scale with confidence.",
    icon: "chart",
    color: "green",
  },
  {
    title: "Dedicated Support",
    desc: "We are here to support you whenever you need us, 24/7.",
    icon: "headset",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  orange: "bg-orange-50 text-orange-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
};

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Why Choose MCX Solutions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-navy sm:text-4xl text-balance">
              Your Trusted Technology Partner
            </h2>
            <p className="mt-5 max-w-lg text-slate-600 leading-relaxed">
              We combine technology, experience and a customer-focused approach
              to deliver practical solutions for businesses of all sizes.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navyDeep"
            >
              Talk to an Expert
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-premium animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorMap[f.color]}`}>
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-navy">{f.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const p = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
  };
  switch (name) {
    case "shield":
      return <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>;
    case "bulb":
      return <svg {...p}><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z" /></svg>;
    case "chart":
      return <svg {...p}><path d="M3 3v18h18" /><path d="m7 14 4-4 4 4 5-6" /></svg>;
    default:
      return <svg {...p}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>;
  }
}
