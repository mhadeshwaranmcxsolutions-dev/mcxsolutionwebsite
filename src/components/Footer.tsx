import Logo from "./Logo";

const columns = [
  {
    title: "Solutions",
    links: ["MCX Order", "MCX HR", "MCX Stock", "MCX POS"],
  },
  {
    title: "Company",
    links: ["About Us", "Services", "Portfolio", "Careers"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help Center", "Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="gradient-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              MCX Solutions provides modern, reliable and easy-to-use software
              systems to help businesses grow, operate efficiently and achieve
              success.
            </p>
            <div className="mt-6 flex gap-3">
              {["facebook", "linkedin", "twitter", "instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-brand-orange hover:text-white"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition hover:text-brand-orange"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} MCX Solutions. All rights reserved.</p>
          <p>Smart Solutions. Simple Business.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "h-4 w-4",
  } as const;
  switch (name) {
    case "facebook":
      return (
        <svg {...common}><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></svg>
      );
    case "linkedin":
      return (
        <svg {...common}><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.3 18.3H5.7V9.7h2.6v8.6ZM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2h.1c.4-.7 1.3-1.4 2.6-1.4 2.7 0 3.2 1.8 3.2 4.1v4.7Z"/></svg>
      );
    case "twitter":
      return (
        <svg {...common}><path d="M18.2 2H21l-6.5 7.4L22 22h-6.8l-5.3-6.9L3.8 22H1l7-8L1.7 2h6.9l4.8 6.3L18.2 2Zm-1.2 18h1.9L7.1 3.9H5.1L17 20Z"/></svg>
      );
    default:
      return (
        <svg {...common}><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 5 5 .1 1.3.1 1.6.1 4.8s0 3.5-.1 4.8c-.1 3.3-1.7 4.8-5 5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-5-5C2 15.5 2 15.2 2 12s0-3.5.1-4.8c.1-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2Zm0 5.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm5.8-.4a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 9.4a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2Z"/></svg>
      );
  }
}
