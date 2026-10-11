import Link from "next/link";

const products = [
  {
    id: "stock",
    name: "MCX Stock",
    tagline: "Inventory Management System",
    icon: "📦",
    color: "emerald",
    gradient: "from-emerald-500 to-green-600",
    ring: "ring-emerald-200",
    badge: "Most Popular",
    oneTime: { low: 3500, high: 6000 },
    monthly: { low: 150, high: 300 },
    features: [
      "Products, Stock Levels & Warehouses",
      "Purchase Orders & Suppliers",
      "Sales Orders & Customers",
      "Tax, Discounts & Price Lists",
      "Unit of Measure & Conversions",
      "Batch & Serial Number Tracking",
      "Stocktakes & Physical Counts",
      "Returns Management",
      "Barcode Labels & Scanning",
      "Reports & Analytics (Charts)",
      "Auto Reorder Points & Auto-PO",
      "Notifications & Low Stock Alerts",
      "Bulk Import / Export (CSV)",
      "Audit Log & Activity History",
      "E-commerce Integrations",
      "Dark Mode & PWA (Mobile App)",
      "Role-based Access Control",
    ],
  },
  {
    id: "hr",
    name: "MCX HR",
    tagline: "Human Resource System",
    icon: "👥",
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    ring: "ring-blue-200",
    badge: null,
    oneTime: { low: 4000, high: 7000 },
    monthly: { low: 180, high: 350 },
    features: [
      "Employee Management",
      "Attendance & Time Tracking",
      "Leave Management",
      "Payroll Management",
      "Departments & Positions",
      "Recruitment & Applicants",
      "Document Management",
      "Performance Management",
      "Audit Log & Activity History",
      "Role-based Access Control",
      "Dark Mode & PWA (Mobile App)",
    ],
  },
];

const bundles = [
  {
    name: "Starter Bundle",
    desc: "MCX Stock — perfect for retail & trading businesses",
    price: "from RM 3,500",
    monthly: "RM 150/mo",
    color: "from-emerald-500 to-green-600",
    items: ["MCX Stock", "3 user accounts", "1 warehouse", "Email support"],
    cta: "Choose Starter",
  },
  {
    name: "Growth Bundle",
    desc: "MCX Stock + MCX HR — manage inventory & team in one place",
    price: "from RM 6,500",
    monthly: "RM 300/mo",
    color: "from-orange-500 to-amber-500",
    popular: true,
    items: ["MCX Stock + MCX HR", "10 user accounts", "Unlimited warehouses", "Priority support", "Free data migration"],
    cta: "Choose Growth",
  },
  {
    name: "Enterprise Bundle",
    desc: "Full suite with custom modules & dedicated support",
    price: "Custom",
    monthly: "Custom",
    color: "from-navy to-blue-600",
    items: ["MCX Stock + MCX HR", "Unlimited users", "Custom module development", "Dedicated account manager", "On-site training", "SLA 4-hour response"],
    cta: "Contact Sales",
  },
];

const addOns = [
  { name: "Custom Module Development", price: "from RM 500", desc: "Build features unique to your business" },
  { name: "White-label Branding", price: "RM 2,000", desc: "Remove MCX branding, add your logo & colors" },
  { name: "Data Migration Service", price: "RM 300 – 800", desc: "Import your existing products, employees, customers" },
  { name: "On-site Training", price: "RM 500 / session", desc: "Hands-on training at your office" },
  { name: "Priority Support SLA", price: "+ RM 200 / mo", desc: "4-hour response time, dedicated support" },
  { name: "Additional User License", price: "RM 30 / user / mo", desc: "Add more team members anytime" },
];

const faqs = [
  {
    q: "What's included in the one-time price?",
    a: "Full system setup and deployment to your own cloud (Vercel + Supabase), custom branding (your logo, company name, colors), 2–3 user training sessions, 14 days of free support, and data import from your old system.",
  },
  {
    q: "What does the monthly maintenance cover?",
    a: "Hosting costs (Vercel + Supabase), bug fixes and minor feature tweaks, system updates and security patches, automated cloud backups, and email/WhatsApp support with 24-hour response time.",
  },
  {
    q: "Do I own the system?",
    a: "Yes — with the one-time purchase model, the system is deployed to your own Vercel and Supabase accounts. You own the data and the deployment. MCX Solutions only provides maintenance and support.",
  },
  {
    q: "Can I pay monthly instead of one-time?",
    a: "Yes! We offer a SaaS subscription model starting from RM 25/user/month for MCX Stock and RM 30/user/month for MCX HR. Contact us for a custom quote based on your team size.",
  },
  {
    q: "How long does setup take?",
    a: "Standard setup takes 3–5 working days, including deployment, branding, and data migration. Custom modules may take additional time depending on complexity.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All data is stored in your own Supabase (PostgreSQL) database with Row-Level Security. Backups run automatically, and you can export your data at any time.",
  },
];

export const metadata = {
  title: "Pricing — MCX Stock & MCX HR | MCX Solutions",
  description:
    "Transparent pricing for MCX Stock (Inventory Management) and MCX HR (Human Resource). One-time purchase with monthly maintenance, or SaaS subscription.",
};

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-orange-300 ring-1 ring-white/15">
            💎 Simple, transparent pricing
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Choose the right plan for <span className="gradient-text">your business</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Powerful inventory and HR systems built for Malaysian SMEs. Pay once and own it,
            or subscribe monthly — your choice.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:scale-105 hover:bg-brand-orangeDark"
            >
              Get a Free Demo
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition-all hover:bg-white/15"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing toggle note */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-brand-navy">Two ways to pay</h3>
              <p className="text-sm text-slate-500">
                <strong>One-time purchase</strong> — own the system forever + low monthly maintenance.
                Or <strong>SaaS subscription</strong> — pay per user, no upfront cost.
              </p>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-600">✅ No hidden fees</span>
              <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-600">✅ Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Pricing Cards */}
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">Product Pricing</h2>
          <p className="mt-2 text-slate-500">Pick the system that fits your business needs</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.id}
              className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-premium"
            >
              {p.badge && (
                <div className={`absolute right-6 top-6 rounded-full bg-gradient-to-r ${p.gradient} px-3 py-1 text-xs font-bold text-white shadow`}>
                  {p.badge}
                </div>
              )}
              <div className={`bg-gradient-to-br ${p.gradient} p-8 text-white`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{p.name}</h3>
                    <p className="text-sm text-white/80">{p.tagline}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 p-5 text-center">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">One-time</div>
                    <div className="mt-1 text-2xl font-extrabold text-brand-navy">
                      RM {p.oneTime.low.toLocaleString()}
                      <span className="text-sm font-medium text-slate-400">+</span>
                    </div>
                    <div className="text-xs text-slate-400">RM {p.oneTime.high.toLocaleString()} max</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-5 text-center">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Monthly</div>
                    <div className="mt-1 text-2xl font-extrabold text-brand-navy">
                      RM {p.monthly.low}
                      <span className="text-sm font-medium text-slate-400">+</span>
                    </div>
                    <div className="text-xs text-slate-400">RM {p.monthly.high} max</div>
                  </div>
                </div>

                <h4 className="mt-8 mb-3 text-sm font-bold uppercase tracking-wide text-slate-400">
                  Everything included
                </h4>
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block w-full rounded-full bg-gradient-to-r ${p.gradient} py-3.5 text-center text-sm font-semibold text-white shadow-card transition-all hover:scale-[1.02]`}
                >
                  Get Started with {p.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bundle comparison */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-brand-navy">Bundle & Save</h2>
            <p className="mt-2 text-slate-500">Get both systems at a discounted bundle price</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {bundles.map((b) => (
              <div
                key={b.name}
                className={`relative rounded-3xl bg-white p-8 shadow-card transition-all hover:-translate-y-1 ${
                  b.popular ? "ring-2 ring-brand-orange shadow-premium lg:scale-105" : ""
                }`}
              >
                {b.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-4 py-1 text-xs font-bold text-white shadow">
                    ⭐ Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-brand-navy">{b.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{b.desc}</p>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold text-brand-navy">{b.price}</div>
                  <div className="text-sm text-slate-400">{b.monthly} maintenance</div>
                </div>
                <ul className="mt-6 space-y-3">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block w-full rounded-full py-3.5 text-center text-sm font-semibold transition-all hover:scale-[1.02] ${
                    b.popular
                      ? "bg-brand-orange text-white shadow-card hover:bg-brand-orangeDark"
                      : "bg-slate-100 text-brand-navy hover:bg-slate-200"
                  }`}
                >
                  {b.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">Optional Add-ons</h2>
          <p className="mt-2 text-slate-500">Extend your system with these extras</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((a) => (
            <div key={a.name} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all hover:shadow-premium">
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-bold text-brand-navy">{a.name}</h4>
                <span className="whitespace-nowrap rounded-full bg-orange-50 px-3 py-1 text-sm font-bold text-brand-orange">{a.price}</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-brand-navy">Frequently Asked Questions</h2>
            <p className="mt-2 text-slate-500">Everything you need to know about pricing</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h4 className="font-semibold text-brand-navy">{f.q}</h4>
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-navy p-10 text-center shadow-premium sm:p-16">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Get a free demo and a custom quote. No obligation, no pressure.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:scale-105 hover:bg-brand-orangeDark"
              >
                💬 WhatsApp Us
              </a>
              <a
                href="mailto:sales@mcxsolutions.com"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition-all hover:bg-white/15"
              >
                ✉️ Email Sales
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              📍 Based in Malaysia · 🌐 Serving SMEs nationwide
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
