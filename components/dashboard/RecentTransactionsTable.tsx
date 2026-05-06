import { recentTransactions } from "@/lib/mock-data";
import { cn, formatCurrency } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  paid: "bg-emerald-50 text-emerald-700 border-emerald-200",
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  failed: "bg-red-50 text-red-600 border-red-200",
};

const planStyles: Record<string, string> = {
  Enterprise: "bg-indigo-50 text-indigo-700",
  Pro: "bg-violet-50 text-violet-700",
  Starter: "bg-slate-100 text-slate-600",
};

export default function RecentTransactionsTable() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-800 text-sm">Recent Transactions</h3>
          <p className="text-xs text-slate-500 mt-0.5">Latest billing activity</p>
        </div>
        <button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Transaction</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Customer</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden md:table-cell">Plan</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Amount</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {recentTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-5 py-3.5">
                  <span className="font-mono text-xs text-slate-500">{tx.id}</span>
                </td>
                <td className="px-4 py-3.5">
                  <div>
                    <p className="font-medium text-slate-800 text-sm">{tx.user}</p>
                    <p className="text-xs text-slate-400">{tx.email}</p>
                  </div>
                </td>
                <td className="px-4 py-3.5 hidden md:table-cell">
                  <span className={cn("px-2 py-0.5 rounded-md text-xs font-medium", planStyles[tx.plan] ?? "bg-slate-100 text-slate-600")}>
                    {tx.plan}
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <span className="font-semibold text-slate-800">{formatCurrency(tx.amount)}</span>
                </td>
                <td className="px-4 py-3.5">
                  <span className={cn("px-2 py-0.5 rounded-full text-xs font-semibold border capitalize", statusStyles[tx.status])}>
                    {tx.status}
                  </span>
                </td>
                <td className="px-4 py-3.5 hidden lg:table-cell">
                  <span className="text-xs text-slate-500">{tx.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
