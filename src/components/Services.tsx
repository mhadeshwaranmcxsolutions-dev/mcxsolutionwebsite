const services = [
  {
    title: "Custom Software Development",
    desc: "Tailored software solutions built to match your exact business workflows and scale with you.",
    icon: "code",
  },
  {
    title: "System Integration",
    desc: "Connect your existing tools and data so everything works together seamlessly.",
    icon: "link",
  },
  {
    title: "Cloud & Hosting",
    desc: "Secure, scalable cloud hosting with 99.9% uptime and automatic backups.",
    icon: "cloud",
  },
  {
    title: "Training & Onboarding",
    desc: "Hands-on training so your team is productive from day one, not weeks later.",
    icon: "book",
  },
  {
    title: "24/7 Technical Support",
    desc: "Round-the-clock support to keep your operations running without interruption.",
    icon: "headset",
  },
  {
    title: "Data & Analytics",
    desc: "Turn your business data into actionable insights with real-time dashboards.",
    icon: "chart",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-navy sm:text-4xl text-balance">
            Everything you need to run smarter
          </h2>
          <p className="mt-4 text-slate-600">
            From software development to ongoing support, we cover the full
            journey so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-premium hover:border-brand-orange/30 animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                <ServiceIcon name={s.icon} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ name }: { name: string }) {
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
    case "code":
      return <svg {...p}><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg>;
    case "link":
      return <svg {...p}><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg>;
    case "cloud":
      return <svg {...p}><path d="M17.5 19a4.5 4.5 0 1 0 0-9h-1.8A7 7 0 1 0 4 15.9" /></svg>;
    case "book":
      return <svg {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></svg>;
    case "headset":
      return <svg {...p}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>;
    default:
      return <svg {...p}><path d="M3 3v18h18" /><path d="m7 14 4-4 4 4 5-6" /></svg>;
  }
}
