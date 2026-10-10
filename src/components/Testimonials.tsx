const testimonials = [
  {
    quote:
      "MCX Solutions transformed how we manage orders. The system is fast, reliable and our team picked it up in a day.",
    name: "Ahmad Faizal",
    role: "Owner, Restoran Selera",
    initials: "AF",
  },
  {
    quote:
      "Switching to MCX POS cut our checkout time in half. The reports give us real clarity on what's selling.",
    name: "Siti Nurhaliza",
    role: "Manager, Boutique Ria",
    initials: "SN",
  },
  {
    quote:
      "MCX HR made attendance and payroll effortless. Support is always there when we need them.",
    name: "Rajesh Kumar",
    role: "HR Lead, TechWorks",
    initials: "RK",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-navy sm:text-4xl text-balance">
            Trusted by Growing Businesses
          </h2>
          <p className="mt-4 text-slate-600">
            Hear from the businesses that power their operations with MCX Solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-premium animate-fade-up"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="flex gap-1 text-brand-orange">
                {Array.from({ length: 5 }).map((_, k) => (
                  <svg key={k} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 7.1-1z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-600">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-navy">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
