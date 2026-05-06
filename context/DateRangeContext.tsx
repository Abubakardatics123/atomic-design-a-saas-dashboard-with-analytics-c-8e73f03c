"use client";

import React, { createContext, useContext, useState } from "react";
import type { DateRange } from "@/lib/mock-data";
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { revenueData, signupsData, activeUsersData, trafficData, revenueByPlanData, churnTrendData } from "@/lib/mock-data";
import { formatCurrency, formatNumber } from "@/lib/utils";

// ─── Context ──────────────────────────────────────────────────────────────────
interface DateRangeContextValue {
  range: DateRange;
  setRange: (r: DateRange) => void;
}

const DateRangeContext = createContext<DateRangeContextValue>({
  range: "30d",
  setRange: () => {},
});

export function DateRangeProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState<DateRange>("30d");
  return (
    <DateRangeContext.Provider value={{ range, setRange }}>
      {children}
    </DateRangeContext.Provider>
  );
}

export function useDateRange() {
  return useContext(DateRangeContext);
}

// ─── Shared Tooltip ───────────────────────────────────────────────────────────
function ChartTooltip({ active, payload, label, currency = false }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-3 text-xs">
      <p className="font-semibold text-slate-700 mb-2">{label}</p>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-slate-500">{p.name}:</span>
          <span className="font-semibold text-slate-800">
            {currency ? formatCurrency(p.value) : formatNumber(p.value)}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Revenue Line Chart ───────────────────────────────────────────────────────
export function RevenueLineChart() {
  const { range } = useDateRange();
  const data = revenueData[range];
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => formatCurrency(v, true)} width={55} />
        <Tooltip content={<ChartTooltip currency />} />
        <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }} />
        <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#6366f1" strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: "#6366f1" }} />
        <Line type="monotone" dataKey="mrr" name="MRR" stroke="#8b5cf6" strokeWidth={2.5} dot={false} strokeDasharray="5 3" activeDot={{ r: 5, fill: "#8b5cf6" }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

// ─── Signups Bar Chart ────────────────────────────────────────────────────────
export function SignupsBarChart() {
  const { range } = useDateRange();
  const data = signupsData[range];
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} width={40} />
        <Tooltip content={<ChartTooltip />} />
        <Bar dataKey="signups" name="Signups" fill="#6366f1" radius={[4, 4, 0, 0]} maxBarSize={48} />
      </BarChart>
    </ResponsiveContainer>
  );
}

// ─── Active Users Area Chart ──────────────────────────────────────────────────
export function ActiveUsersAreaChart() {
  const { range } = useDateRange();
  const data = activeUsersData[range];
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="sessionsGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.12} />
            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => formatNumber(v, true)} width={45} />
        <Tooltip content={<ChartTooltip />} />
        <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }} />
        <Area type="monotone" dataKey="users" name="Active Users" stroke="#6366f1" strokeWidth={2.5} fill="url(#usersGrad)" dot={false} activeDot={{ r: 5 }} />
        <Area type="monotone" dataKey="sessions" name="Sessions" stroke="#8b5cf6" strokeWidth={2} fill="url(#sessionsGrad)" dot={false} activeDot={{ r: 4 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// ─── Traffic Donut Chart ──────────────────────────────────────────────────────
const RADIAN = Math.PI / 180;
function renderLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
  const r = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  if (percent < 0.08) return null;
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
      {(percent * 100).toFixed(0)}%
    </text>
  );
}

export function TrafficDonutChart({ data = trafficData }: { data?: typeof trafficData }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <ResponsiveContainer width={180} height={180}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={85} dataKey="value" labelLine={false} label={renderLabel}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(v: any) => [v + "%", ""]} contentStyle={{ fontSize: "12px", borderRadius: "8px" }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
              <span className="text-xs text-slate-600 font-medium truncate">{item.name}</span>
            </div>
            <span className="text-xs font-bold text-slate-800 flex-shrink-0">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Revenue by Plan Donut ────────────────────────────────────────────────────
export function RevenueByPlanChart() {
  return <TrafficDonutChart data={revenueByPlanData} />;
}

// ─── Churn Trend Line Chart ───────────────────────────────────────────────────
export function ChurnTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={churnTrendData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => v + "%"} width={40} domain={[0, 5]} />
        <Tooltip formatter={(v: any) => [v + "%", ""]} contentStyle={{ fontSize: "12px", borderRadius: "8px" }} />
        <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }} />
        <Line type="monotone" dataKey="churn" name="Churn Rate" stroke="#ef4444" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

// ─── ChartCard Wrapper ────────────────────────────────────────────────────────
interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

export function ChartCard({ title, subtitle, children, className, action }: ChartCardProps) {
  const cn = (...classes: (string | undefined | false)[]) => classes.filter(Boolean).join(" ");
  return (
    <div className={cn("bg-white rounded-xl border border-slate-200 overflow-hidden", className)}>
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-800 text-sm">{title}</h3>
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
