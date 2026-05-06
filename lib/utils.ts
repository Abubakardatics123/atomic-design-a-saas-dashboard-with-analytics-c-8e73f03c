import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, compact = false): string {
  if (compact && value >= 1000000) {
    return "$" + (value / 1000000).toFixed(1) + "M";
  }
  if (compact && value >= 1000) {
    return "$" + (value / 1000).toFixed(1) + "K";
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number, compact = false): string {
  if (compact && value >= 1000000) {
    return (value / 1000000).toFixed(1) + "M";
  }
  if (compact && value >= 1000) {
    return (value / 1000).toFixed(1) + "K";
  }
  return new Intl.NumberFormat("en-US").format(value);
}
