"use client";

import { useDateRange } from "@/context/DateRangeContext";
import { cn } from "@/lib/utils";
import type { DateRange } from "@/lib/mock-data";

const ranges: { label: string; value: DateRange }[] = [
  { label: "7D", value: "7d" },
  { label: "30D", value: "30d" },
  { label: "90D", value: "90d" },
  { label: "1Y", value: "1y" },
];

export default function DateRangeFilter() {
  const { range, setRange } = useDateRange();

  return (
    <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
      {ranges.map((r) => (
        <button
          key={r.value}
          onClick={() => setRange(r.value)}
          className={cn(
            "px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-150",
            range === r.value
              ? "bg-white text-indigo-700 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          )}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
