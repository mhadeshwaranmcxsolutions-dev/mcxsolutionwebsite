"use client";

import { useEffect, useMemo, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";

interface Client {
  id: string;
  name: string;
  contact: string;
  phone: string;
  email: string;
  product: "MCX Stock" | "MCX HR" | "Bundle" | "Other";
  status: "Lead" | "Active" | "Churned" | "Pending";
  dealValue: number;
  monthlyFee: number;
  startDate: string;
  renewalDate: string;
  notes: string;
}

const PRODUCTS: Client["product"][] = ["MCX Stock", "MCX HR", "Bundle", "Other"];
const STATUSES: Client["status"][] = ["Lead", "Active", "Churned", "Pending"];

const STORAGE_KEY = "mcx-clients-v1";

const SEED: Client[] = [
  {
    id: "1",
    name: "Ahmad Trading Sdn Bhd",
    contact: "Ahmad Bin Ismail",
    phone: "012-3456789",
    email: "ahmad@ahmadtrading.com",
    product: "Bundle",
    status: "Active",
    dealValue: 8000,
    monthlyFee: 400,
    startDate: "2025-01-15",
    renewalDate: "2026-01-15",
    notes: "Full HR + Stock system. Happy client, referrer.",
  },
  {
    id: "2",
    name: "Saravanan Mini Market",
    contact: "Saravanan",
    phone: "016-9876543",
    email: "sara@minimarket.com",
    product: "MCX Stock",
    status: "Active",
    dealValue: 4500,
    monthlyFee: 200,
    startDate: "2025-03-01",
    renewalDate: "2026-03-01",
    notes: "Retail shop with 2 warehouses.",
  },
  {
    id: "3",
    name: "Koperasi Maju Jaya",
    contact: "Encik Rosli",
    phone: "019-1112233",
    email: "rosli@koperasi.com",
    product: "MCX HR",
    status: "Pending",
    dealValue: 5500,
    monthlyFee: 250,
    startDate: "",
    renewalDate: "",
    notes: "Sent proposal, waiting for approval.",
  },
];

const emptyForm: Omit<Client, "id"> = {
  name: "",
  contact: "",
  phone: "",
  email: "",
  product: "MCX Stock",
  status: "Lead",
  dealValue: 0,
  monthlyFee: 0,
  startDate: "",
  renewalDate: "",
  notes: "",
};

function loadClients(): Client[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return SEED;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : SEED;
  } catch {
    return SEED;
  }
}

const fmt = (n: number) =>
  new Intl.NumberFormat("ms-MY", { style: "currency", currency: "MYR", maximumFractionDigits: 0 }).format(n);

const statusColor: Record<Client["status"], string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Lead: "bg-blue-100 text-blue-700",
  Pending: "bg-amber-100 text-amber-700",
  Churned: "bg-rose-100 text-rose-700",
};

const productColor: Record<Client["product"], string> = {
  "MCX Stock": "bg-green-100 text-green-700",
  "MCX HR": "bg-blue-100 text-blue-700",
  Bundle: "bg-orange-100 text-orange-700",
  Other: "bg-slate-100 text-slate-700",
};

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [form, setForm] = useState<Omit<Client, "id">>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [filterProduct, setFilterProduct] = useState<string>("All");

  useEffect(() => {
    setClients(loadClients());
  }, []);

  useEffect(() => {
    if (clients.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
    }
  }, [clients]);

  const stats = useMemo(() => {
    const active = clients.filter((c) => c.status === "Active");
    const mrr = active.reduce((s, c) => s + c.monthlyFee, 0);
    const arr = active.reduce((s, c) => s + c.monthlyFee * 12, 0);
    const totalDealValue = clients.reduce((s, c) => s + c.dealValue, 0);
    const today = new Date();
    const upcoming = clients
      .filter((c) => c.renewalDate && c.status === "Active")
      .map((c) => ({ ...c, days: Math.ceil((new Date(c.renewalDate).getTime() - today.getTime()) / 86400000) }))
      .filter((c) => c.days <= 60 && c.days >= -30)
      .sort((a, b) => a.days - b.days);
    return { active, mrr, arr, totalDealValue, upcoming, total: clients.length };
  }, [clients]);

  const filtered = useMemo(() => {
    return clients.filter((c) => {
      const matchSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.contact.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === "All" || c.status === filterStatus;
      const matchProduct = filterProduct === "All" || c.product === filterProduct;
      return matchSearch && matchStatus && matchProduct;
    });
  }, [clients, search, filterStatus, filterProduct]);

  function openAdd() {
    setForm(emptyForm);
    setEditingId(null);
    setShowModal(true);
  }

  function openEdit(c: Client) {
    const { id, ...rest } = c;
    setForm(rest);
    setEditingId(id);
    setShowModal(true);
  }

  function save(e: React.FormEvent) {
    e.preventDefault();
    if (editingId) {
      setClients((prev) => prev.map((c) => (c.id === editingId ? { ...form, id: editingId } : c)));
    } else {
      setClients((prev) => [...prev, { ...form, id: Date.now().toString() }]);
    }
    setShowModal(false);
  }

  function remove(id: string) {
    if (!confirm("Delete this client?")) return;
    setClients((prev) => prev.filter((c) => c.id !== id));
  }

  function exportCSV() {
    const headers = ["Name", "Contact", "Phone", "Email", "Product", "Status", "Deal Value", "Monthly Fee", "Start Date", "Renewal Date", "Notes"];
    const rows = clients.map((c) => [
      c.name, c.contact, c.phone, c.email, c.product, c.status,
      c.dealValue, c.monthlyFee, c.startDate, c.renewalDate, c.notes,
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mcx-clients-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-brand-navy">Client Management</h1>
            <p className="mt-1 text-slate-500">Track your clients, deals, subscriptions and recurring revenue</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={exportCSV}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50"
            >
              📥 Export CSV
            </button>
            <button
              onClick={openAdd}
              className="rounded-full bg-brand-orange px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-brand-orangeDark"
            >
              + Add Client
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0} variant="up">
            <StatCard label="Total Clients" value={String(stats.total)} icon="👥" tint="bg-blue-50 text-blue-600" />
          </Reveal>
          <Reveal delay={80} variant="up">
            <StatCard label="Active Clients" value={String(stats.active.length)} icon="✅" tint="bg-emerald-50 text-emerald-600" />
          </Reveal>
          <Reveal delay={160} variant="up">
            <StatCard label="Monthly MRR" value={fmt(stats.mrr)} icon="💵" tint="bg-orange-50 text-orange-600" sub="Recurring monthly" />
          </Reveal>
          <Reveal delay={240} variant="up">
            <StatCard label="Annual ARR" value={fmt(stats.arr)} icon="📈" tint="bg-purple-50 text-purple-600" sub="MRR × 12" />
          </Reveal>
        </div>

        {/* Upcoming renewals */}
        {stats.upcoming.length > 0 && (
          <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
            <h3 className="mb-3 flex items-center gap-2 font-bold text-amber-800">
              ⏰ Upcoming Renewals (next 60 days)
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {stats.upcoming.slice(0, 6).map((c) => (
                <div key={c.id} className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2 text-sm">
                  <span className="font-medium text-slate-700">{c.name}</span>
                  <span className={c.days < 0 ? "text-rose-600 font-semibold" : c.days < 15 ? "text-amber-600 font-semibold" : "text-slate-500"}>
                    {c.days < 0 ? `${Math.abs(c.days)}d overdue` : `in ${c.days}d`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-4 flex flex-wrap gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, contact, email…"
            className="min-w-[220px] flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-orange/40"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-orange/40"
          >
            <option>All</option>
            {STATUSES.map((s) => <option key={s}>{s}</option>)}
          </select>
          <select
            value={filterProduct}
            onChange={(e) => setFilterProduct(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-orange/40"
          >
            <option>All</option>
            {PRODUCTS.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-5 py-3">Client</th>
                  <th className="px-5 py-3">Product</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Deal Value</th>
                  <th className="px-5 py-3">Monthly</th>
                  <th className="px-5 py-3">Renewal</th>
                  <th className="px-5 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-5 py-12 text-center text-slate-400">
                      No clients found. Click "Add Client" to get started.
                    </td>
                  </tr>
                ) : (
                  filtered.map((c, i) => (
                    <tr
                      key={c.id}
                      className="border-b border-slate-50 transition-all duration-300 hover:bg-slate-50/60 hover:shadow-sm"
                      style={{
                        animation: `fadeUp 0.4s ease-out both`,
                        animationDelay: `${Math.min(i * 40, 400)}ms`,
                      }}
                    >
                      <td className="px-5 py-4">
                        <div className="font-semibold text-brand-navy">{c.name}</div>
                        <div className="text-xs text-slate-400">{c.contact} · {c.phone}</div>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${productColor[c.product]}`}>
                          {c.product}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusColor[c.status]}`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-medium text-slate-700">{fmt(c.dealValue)}</td>
                      <td className="px-5 py-4 font-medium text-emerald-600">{fmt(c.monthlyFee)}/mo</td>
                      <td className="px-5 py-4 text-slate-500">{c.renewalDate || "—"}</td>
                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => openEdit(c)}
                            className="rounded-lg px-2.5 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-50"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => remove(c.id)}
                            className="rounded-lg px-2.5 py-1 text-xs font-semibold text-rose-600 hover:bg-rose-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          💾 Data is saved locally in your browser (localStorage). Export CSV to back up.
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 animate-fade-in" onClick={() => setShowModal(false)}>
          <form
            onSubmit={save}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl animate-fade-up"
            style={{ animationDuration: "0.35s" }}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-brand-navy">
                {editingId ? "Edit Client" : "Add New Client"}
              </h2>
              <button type="button" onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">✕</button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Company / Client Name">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" />
              </Field>
              <Field label="Contact Person">
                <input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="input" />
              </Field>
              <Field label="Phone">
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" />
              </Field>
              <Field label="Email">
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" />
              </Field>
              <Field label="Product">
                <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value as Client["product"] })} className="input">
                  {PRODUCTS.map((p) => <option key={p}>{p}</option>)}
                </select>
              </Field>
              <Field label="Status">
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Client["status"] })} className="input">
                  {STATUSES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Deal Value (RM)">
                <input type="number" min={0} value={form.dealValue || ""} onChange={(e) => setForm({ ...form, dealValue: Number(e.target.value) })} className="input" />
              </Field>
              <Field label="Monthly Fee (RM)">
                <input type="number" min={0} value={form.monthlyFee || ""} onChange={(e) => setForm({ ...form, monthlyFee: Number(e.target.value) })} className="input" />
              </Field>
              <Field label="Start Date">
                <input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className="input" />
              </Field>
              <Field label="Renewal Date">
                <input type="date" value={form.renewalDate} onChange={(e) => setForm({ ...form, renewalDate: e.target.value })} className="input" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Notes">
                  <textarea rows={2} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="input resize-none" />
                </Field>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button type="button" onClick={() => setShowModal(false)} className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                Cancel
              </button>
              <button type="submit" className="rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-orangeDark">
                {editingId ? "Save Changes" : "Add Client"}
              </button>
            </div>
          </form>
        </div>
      )}

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          outline: none;
          background: white;
          color: #0f172a;
        }
        .input:focus {
          box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.15);
          border-color: #FF7A00;
        }
      `}</style>
    </div>
  );
}

function StatCard({ label, value, icon, tint, sub }: { label: string; value: string; icon: string; tint: string; sub?: string }) {
  return (
    <div className="lift-card card-glow group rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:shadow-premium">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
        <span className={`icon-bounce flex h-9 w-9 items-center justify-center rounded-lg text-lg ${tint}`}>{icon}</span>
      </div>
      <div className="mt-2 text-2xl font-extrabold text-brand-navy transition-transform duration-300 group-hover:scale-105">{value}</div>
      {sub && <div className="text-xs text-slate-400">{sub}</div>}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-600">{label}</span>
      {children}
    </label>
  );
}
