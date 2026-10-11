import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const solutions = [
  {
    name: "MCX Order",
    tagline: "Online Ordering System",
    description:
      "Take orders easily and manage your business online with a seamless ordering experience.",
    icon: "cart",
    color: "orange",
  },
  {
    name: "MCX HR",
    tagline: "Human Resource System",
    description:
      "Manage your team, attendance and payroll efficiently in one unified platform.",
    icon: "users",
    color: "blue",
  },
  {
    name: "MCX Stock",
    tagline: "Inventory Management",
    description:
      "Track your stock in real time and avoid shortages with smart inventory insights.",
    icon: "box",
    color: "green",
  },
  {
    name: "MCX POS",
    tagline: "Point of Sale System",
    description:
      "Fast, simple and reliable point of sale for your daily business operations.",
    icon: "monitor",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  orange: "bg-orange-50 text-orange-600",
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
};

export default function Solutions() {
  return (
    <section id="solutions" className="relative -mt-12 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.name} delay={i * 100} variant="up" as="article">
              <TiltCard max={6} scale={1.02} className="h-full">
                <div className="card-glow group relative h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-premium">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${colorMap[s.color]}`}
                  >
                    <ProductIcon name={s.icon} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">{s.name}</h3>
                  <p className="text-sm font-medium text-brand-orange">{s.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {s.description}
                  </p>
                  <a
                    href="#contact"
                    className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange transition-all"
                  >
                    Learn More
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductIcon({ name }: { name: string }) {
  const p = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-7 w-7",
  };
  switch (name) {
    case "cart":
      return (
        <svg {...p}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></svg>
      );
    case "users":
      return (
        <svg {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      );
    case "box":
      return (
        <svg {...p}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
      );
    default:
      return (
        <svg {...p}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
      );
  }
}
