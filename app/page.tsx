"use client";

import Link from "next/link";
import { Sparkles, BarChart2, Users, TrendingUp, Shield, Zap, ArrowRight, Check } from 'lucide-react';

const features = [
  { icon: BarChart2, title: "Real-Time Analytics", desc: "Interactive charts for revenue, MRR, signups, and active users — updated live with date-range filtering.", color: "bg-indigo-50 text-indigo-600" },
  { icon: TrendingUp, title: "Revenue Intelligence", desc: "Track MRR, ARR, churn rate, and LTV in one place. Spot expansion and contraction trends at a glance.", color: "bg-violet-50 text-violet-600" },
  { icon: Users, title: "User Management", desc: "Searchable user table with plan, status, and last-active data. Identify at-risk accounts before they churn.", color: "bg-cyan-50 text-cyan-600" },
  { icon: Shield, title: "Churn Prevention", desc: "Churn trend charts and retention metrics help you act before customers leave.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Zap, title: "Instant Insights", desc: "KPI summary cards surface the numbers that matter — revenue, active users, conversion rate — front and center.", color: "bg-amber-50 text-amber-600" },
  { icon: BarChart2, title: "Traffic Breakdown", desc: "Donut charts reveal which channels drive the most signups and revenue so you invest in what works.", color: "bg-pink-50 text-pink-600" },
];

const plans = [
  { name: "Starter", price: "$29", desc: "Perfect for early-stage SaaS products.", features: ["Up to 1,000 tracked users", "Core KPI dashboard", "30-day data history", "Email support"], cta: "Start free trial", highlight: false },
  { name: "Pro", price: "$79", desc: "For growing teams that need deeper insights.", features: ["Up to 25,000 tracked users", "All analytics pages", "1-year data history", "Slack alerts", "Priority support"], cta: "Start free trial", highlight: true },
  { name: "Enterprise", price: "$2,400", desc: "Custom analytics for large-scale operations.", features: ["Unlimited users", "Custom dashboards", "Unlimited history", "SSO & audit logs", "Dedicated CSM"], cta: "Contact sales", highlight: false },
];

const stats = [
  { value: "14,280", label: "Active users tracked" },
  { value: "$48K", label: "MRR monitored" },
  { value: "2.4%", label: "Avg churn rate" },
  { value: "99.9%", label: "Uptime SLA" },
];

const kpis = [
  { label: "MRR", value: "$48,320", change: "+12.4%", up: true },
  { label: "Active Users", value: "14,280", change: "+8.1%", up: true },
  { label: "Churn Rate", value: "2.4%", change: "-0.3%", up: false },
  { label: "New Signups", value: "1,342", change: "+22.5%", up: true },
];

const barHeights = [40, 55, 48, 62, 58, 70, 65, 80, 75, 88, 92, 100];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-900 text-lg">Pulse</span>
            <span className="text-slate-400 font-medium text-lg">Analytics</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#stats" className="hover:text-indigo-600 transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Sign in</Link>
            <Link href="/dashboard" style={{ backgroundColor: "#ef4444" }} className="inline-flex items-center gap-1.5 px-4 py-2 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
              Open Dashboard <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#1e1b4b] text-white">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(139,92,246,0.25) 0%, transparent 60%)" }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Now with AI-powered churn prediction
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            The analytics dashboard
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300"> your SaaS deserves</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Pulse gives you a single pane of glass for MRR, churn, user growth, and revenue — with beautiful interactive charts and zero setup time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl transition-all shadow-lg text-base">
              View Live Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20 text-base">
              See all features
            </a>
          </div>
          <p className="mt-6 text-indigo-300 text-sm">No credit card required · 14-day free trial · Cancel anytime</p>
        </div>

        {/* Dashboard preview mockup */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-0 relative z-10">
          <div className="rounded-t-2xl border border-indigo-700/40 bg-slate-900/80 backdrop-blur overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-amber-400/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
              <div className="flex-1 mx-4 h-6 bg-slate-700/60 rounded-md flex items-center px-3">
                <span className="text-slate-400 text-xs">app.pulse.io/dashboard</span>
              </div>
            </div>
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/40">
                  <p className="text-slate-400 text-xs mb-1">{kpi.label}</p>
                  <p className="text-white font-bold text-lg leading-tight">{kpi.value}</p>
                  <p className={kpi.up ? "text-emerald-400 text-xs font-semibold mt-1" : "text-red-400 text-xs font-semibold mt-1"}>{kpi.change}</p>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4 grid grid-cols-3 gap-3">
              <div className="col-span-2 bg-slate-800/60 rounded-lg p-3 border border-slate-700/40 h-28 flex flex-col justify-between">
                <p className="text-slate-400 text-xs font-medium">Revenue and MRR Trend</p>
                <div className="flex items-end gap-1 h-16">
                  {barHeights.map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-indigo-500 to-violet-500 opacity-80" style={{ height: h + "%" }} />
                  ))}
                </div>
              </div>
              <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/40 h-28 flex flex-col justify-between">
                <p className="text-slate-400 text-xs font-medium">Traffic Sources</p>
                <div className="flex items-center justify-center flex-1">
                  <div className="w-14 h-14 rounded-full" style={{ background: "conic-gradient(#6366f1 0% 38%, #8b5cf6 38% 62%, #06b6d4 62% 80%, #f59e0b 80% 92%, #10b981 92% 100%)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section id="stats" className="bg-indigo-600 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-white">{s.value}</p>
              <p className="text-indigo-200 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Everything you need to grow faster</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Pulse brings together every metric that matters for SaaS growth into one cohesive, beautiful dashboard.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className={"w-10 h-10 rounded-lg flex items-center justify-center mb-4 " + f.color}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Start free for 14 days. No credit card required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div key={plan.name} className={"rounded-2xl border p-8 flex flex-col " + (plan.highlight ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200 md:scale-105" : "bg-white border-slate-200 text-slate-900")}>
                <p className={"text-sm font-semibold mb-1 " + (plan.highlight ? "text-indigo-200" : "text-indigo-600")}>{plan.name}</p>
                <p className={"text-4xl font-extrabold mb-1 " + (plan.highlight ? "text-white" : "text-slate-900")}>
                  {plan.price}<span className="text-base font-medium opacity-60">/mo</span>
                </p>
                <p className={"text-sm mb-6 " + (plan.highlight ? "text-indigo-200" : "text-slate-500")}>{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm">
                      <Check className={"w-4 h-4 flex-shrink-0 " + (plan.highlight ? "text-indigo-200" : "text-indigo-500")} />
                      <span className={plan.highlight ? "text-indigo-100" : "text-slate-600"}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/dashboard" className={"w-full text-center py-3 rounded-xl font-bold text-sm transition-all " + (plan.highlight ? "bg-white text-indigo-700 hover:bg-indigo-50" : "bg-indigo-600 text-white hover:bg-indigo-700")}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#1e1b4b] text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to understand your SaaS?</h2>
          <p className="text-indigo-200 text-lg mb-8">Join hundreds of SaaS teams using Pulse to reduce churn and accelerate growth.</p>
          <Link href="/dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl transition-all shadow-lg text-base">
            Open the Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white font-bold">Pulse Analytics</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            {["Dashboard", "Analytics", "Users", "Revenue", "Settings"].map((page) => (
              <Link key={page} href={"/" + page.toLowerCase()} className="hover:text-white transition-colors">{page}</Link>
            ))}
          </nav>
          <p className="text-xs text-slate-500">2024 Pulse Analytics. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}