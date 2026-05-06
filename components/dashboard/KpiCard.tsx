"use client";

import { cn, formatCurrency, formatNumber } from "@/lib/utils";
import { ArrowUp, ArrowDown } from 'lucide-react';
import type { LucideIcon } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: number;
  change: number;
  prefix?: string;
  suffix?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  compact?: boolean;
}

export default function KpiCard({
  label,
  value,
  change,
  prefix = "",
  suffix = "",
  icon: Icon,
  iconColor = "text-indigo-600",
  iconBg = "bg-indigo-50",
  compact = false,
}: KpiCardProps) {
  const isPositive = change >= 0;
  const isNeutralMetric = label.toLowerCase().includes("churn");
  const isGood = isNeutralMetric ? !isPositive : isPositive;

  const displayValue = prefix === "$"
    ? formatCurrency(value, true)
    : suffix === "%"
    ? value.toFixed(1) + "%"
    : formatNumber(value, true);

  return (
    <div className={cn(
      "bg-white rounded-xl border border-slate-200 p-5 shadow-card hover:shadow-card-hover transition-all duration-200 group relative overflow-hidden",
    )}>
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-50/60 to-transparent rounded-bl-full pointer-events-none" />

      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", iconBg)}>
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
        <div className={cn(
          "flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full",
          isGood
            ? "bg-emerald-50 text-emerald-700"
            : "bg-red-50 text-red-600"
        )}>
          {isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold text-slate-900 tracking-tight">{displayValue}</p>
        <p className="text-sm text-slate-500 mt-1 font-medium">{label}</p>
      </div>

      <p className="text-xs text-slate-400 mt-3">
        <span className={isGood ? "text-emerald-600 font-medium" : "text-red-500 font-medium"}>
          {isPositive ? "+" : ""}{change}%
        </span>
        {" "}vs last period
      </p>
    </div>
  );
}
