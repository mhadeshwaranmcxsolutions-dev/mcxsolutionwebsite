"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl gradient-navy relative">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-brand-orange/25 blur-3xl" />
          <div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />

          <div className="relative grid gap-10 p-8 lg:grid-cols-2 lg:p-14">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orangeLight">
                Get in Touch
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
                Ready to grow your business?
              </h2>
              <p className="mt-5 max-w-md text-slate-300 leading-relaxed">
                Let's talk about how MCX Solutions can streamline your operations,
                boost efficiency and help you achieve success.
              </p>

              <div className="mt-8 space-y-4">
                <ContactItem
                  icon="pin"
                  title="Visit us"
                  value="Kuala Lumpur, Malaysia"
                />
                <ContactItem
                  icon="mail"
                  title="Email us"
                  value="hello@mcxsolutions.com"
                />
                <ContactItem
                  icon="phone"
                  title="Call us"
                  value="+60 3-1234 5678"
                />
              </div>
            </div>

            <form
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/15 sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="John Doe" />
                <Field label="Email" name="email" type="email" placeholder="john@company.com" />
              </div>
              <div className="mt-4">
                <Field label="Company" name="company" placeholder="Your company" />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold text-white/90">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your needs..."
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/40"
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-orangeDark hover:shadow-glow"
              >
                Send Message
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4Z" /></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-white/90">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/40"
      />
    </div>
  );
}

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-orangeLight">
        <ContactIcon name={icon} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-slate-400">{title}</div>
        <div className="text-sm font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}

function ContactIcon({ name }: { name: string }) {
  const p = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
  };
  switch (name) {
    case "pin":
      return <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "mail":
      return <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>;
    default:
      return <svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" /></svg>;
  }
}
