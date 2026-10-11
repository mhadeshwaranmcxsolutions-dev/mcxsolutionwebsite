"use client";

import { useEffect, useRef, useState } from "react";

export default function DashboardMockup() {
  const lineRef = useRef<SVGPathElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [kpi, setKpi] = useState({ orders: 1200, sales: 45000, customers: 300 });

  // Animate chart line draw
  useEffect(() => {
    const path = lineRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    const t = setTimeout(() => {
      path.style.transition = "stroke-dashoffset 2.2s ease-out";
      path.style.strokeDashoffset = "0";
      setDrawn(true);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  // Live-tick KPIs
  useEffect(() => {
    const interval = setInterval(() => {
      setKpi((p) => ({
        orders: p.orders + Math.floor(Math.random() * 4),
        sales: p.sales + Math.floor(Math.random() * 250),
        customers: p.customers + (Math.random() > 0.7 ? 1 : 0),
      }));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const fmt = (n: number) => n.toLocaleString("en-MY");

  return (
    <div className="rounded-2xl bg-white p-3 shadow-premium ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 rounded-t-xl bg-slate-100 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400 transition-transform hover:scale-125" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400 transition-transform hover:scale-125" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400 transition-transform hover:scale-125" />
        <span className="ml-3 text-xs font-medium text-slate-500">
          app.mcxsolutions.com/dashboard
        </span>
      </div>

      <div className="flex">
        <aside className="hidden w-44 shrink-0 space-y-1 rounded-bl-xl bg-brand-navy p-3 sm:block">
          <div className="mb-4 flex items-center gap-2 px-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-orange text-xs font-bold text-white">
              M
            </div>
            <span className="text-xs font-bold text-white">MCX</span>
          </div>
          {[
            { label: "Dashboard", active: true, icon: "M3 12h4l3-9 4 18 3-9h4" },
            { label: "Orders", icon: "M9 11V7a3 3 0 0 1 6 0v4M5 11h14l-1 10H6z" },
            { label: "Products", icon: "m21 16-9 5-9-5V8l9-5 9 5z" },
            { label: "Customers", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" },
            { label: "Settings", icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-3a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2l-.4-2.5H9.8l-.4 2.5a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2l.4 2.5h4.4l.4-2.5a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs transition-colors ${
                item.active
                  ? "bg-brand-orange text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
              {item.label}
            </div>
          ))}
        </aside>

        <div className="flex-1 rounded-br-xl bg-slate-50 p-3">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-brand-navy">Dashboard</div>
              <div className="text-[10px] text-slate-400">Welcome back 👋</div>
            </div>
            <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-brand-navy">
              AD
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-green-500 ring-2 ring-white animate-pulse" />
            </div>
          </div>

          <div className="mb-3 grid grid-cols-3 gap-2">
            <Kpi label="Total Orders" value={fmt(kpi.orders)} delta="+12%" color="orange" />
            <Kpi label="Total Sales" value={`RM ${fmt(kpi.sales)}`} delta="+15%" color="green" />
            <Kpi label="New Customers" value={fmt(kpi.customers)} delta="+10%" color="blue" />
          </div>

          <div className="mb-3 rounded-xl bg-white p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-brand-navy">Sales Overview</span>
              <span className="flex items-center gap-1 text-[9px] text-green-500">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                ▲ 15%
              </span>
            </div>
            <svg viewBox="0 0 200 70" className="h-16 w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 55 L25 48 L50 52 L75 38 L100 42 L125 28 L150 22 L175 30 L200 12 L200 70 L0 70 Z"
                fill="url(#areaGrad)"
                style={{ opacity: drawn ? 1 : 0, transition: "opacity 0.6s ease 1.8s" }}
              />
              <path
                ref={lineRef}
                d="M0 55 L25 48 L50 52 L75 38 L100 42 L125 28 L150 22 L175 30 L200 12"
                fill="none"
                stroke="#FF7A00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* moving dot */}
              <circle r="3" fill="#FF7A00" style={{ opacity: drawn ? 1 : 0, transition: "opacity 0.4s ease 2s" }}>
                <animateMotion dur="4s" repeatCount="indefinite" path="M0 55 L25 48 L50 52 L75 38 L100 42 L125 28 L150 22 L175 30 L200 12" />
              </circle>
            </svg>
          </div>

          <div className="rounded-xl bg-white p-3">
            <div className="mb-2 text-[11px] font-semibold text-brand-navy">Recent Orders</div>
            <div className="space-y-1.5">
              {[
                { id: "#1001", amt: "RM 150.00", status: "Completed", color: "green" },
                { id: "#1002", amt: "RM 320.00", status: "Processing", color: "blue" },
                { id: "#1003", amt: "RM 210.00", status: "Completed", color: "green" },
                { id: "#1004", amt: "RM 450.00", status: "Pending", color: "amber" },
              ].map((o, i) => (
                <div
                  key={o.id}
                  className="flex items-center justify-between text-[10px]"
                  style={{
                    opacity: drawn ? 1 : 0,
                    transform: drawn ? "translateX(0)" : "translateX(-8px)",
                    transition: `all 0.4s ease ${2.2 + i * 0.12}s`,
                  }}
                >
                  <span className="font-medium text-brand-navy">{o.id}</span>
                  <span className="text-slate-500">{o.amt}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-medium ${
                      o.color === "green"
                        ? "bg-green-50 text-green-600"
                        : o.color === "blue"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {o.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  delta,
  color,
}: {
  label: string;
  value: string;
  delta: string;
  color: "orange" | "green" | "blue";
}) {
  const map = {
    orange: "bg-orange-50 text-orange-600",
    green: "bg-green-50 text-green-600",
    blue: "bg-blue-50 text-blue-600",
  };
  return (
    <div className="rounded-xl bg-white p-2.5 transition-transform duration-200 hover:scale-[1.03]">
      <div className="text-[9px] text-slate-400">{label}</div>
      <div className="mt-0.5 text-sm font-bold text-brand-navy transition-all duration-300">{value}</div>
      <span className={`inline-block rounded px-1 text-[9px] font-semibold ${map[color]}`}>
        {delta}
      </span>
    </div>
  );
}
