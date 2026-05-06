// ─── KPI Data ────────────────────────────────────────────────────────────────
export const kpiData = {
  mrr: { value: 48320, change: 12.4, label: "MRR", prefix: "$" },
  arr: { value: 579840, change: 12.4, label: "ARR", prefix: "$" },
  activeUsers: { value: 14280, change: 8.1, label: "Active Users", prefix: "" },
  churnRate: { value: 2.4, change: -0.3, label: "Churn Rate", suffix: "%" },
  revenue: { value: 127450, change: 18.2, label: "Total Revenue", prefix: "$" },
  ltv: { value: 1840, change: 5.6, label: "Avg LTV", prefix: "$" },
  newUsers: { value: 1342, change: 22.5, label: "New Users", prefix: "" },
  conversionRate: { value: 3.8, change: 0.4, label: "Conversion Rate", suffix: "%" },
};

// ─── Revenue / MRR Over Time ─────────────────────────────────────────────────
export const revenueData = {
  "7d": [
    { date: "Jun 18", revenue: 4200, mrr: 46800 },
    { date: "Jun 19", revenue: 3800, mrr: 47100 },
    { date: "Jun 20", revenue: 5100, mrr: 47300 },
    { date: "Jun 21", revenue: 4600, mrr: 47600 },
    { date: "Jun 22", revenue: 5800, mrr: 47900 },
    { date: "Jun 23", revenue: 4900, mrr: 48100 },
    { date: "Jun 24", revenue: 5200, mrr: 48320 },
  ],
  "30d": [
    { date: "May 25", revenue: 3200, mrr: 43200 },
    { date: "May 28", revenue: 3600, mrr: 43800 },
    { date: "Jun 1", revenue: 4100, mrr: 44500 },
    { date: "Jun 4", revenue: 3900, mrr: 44900 },
    { date: "Jun 7", revenue: 4400, mrr: 45400 },
    { date: "Jun 10", revenue: 4800, mrr: 45900 },
    { date: "Jun 13", revenue: 4600, mrr: 46500 },
    { date: "Jun 16", revenue: 5100, mrr: 47200 },
    { date: "Jun 19", revenue: 4900, mrr: 47700 },
    { date: "Jun 22", revenue: 5400, mrr: 48000 },
    { date: "Jun 24", revenue: 5200, mrr: 48320 },
  ],
  "90d": [
    { date: "Mar 26", revenue: 28000, mrr: 38000 },
    { date: "Apr 2", revenue: 31000, mrr: 39200 },
    { date: "Apr 9", revenue: 29500, mrr: 40100 },
    { date: "Apr 16", revenue: 33000, mrr: 41000 },
    { date: "Apr 23", revenue: 35000, mrr: 42200 },
    { date: "Apr 30", revenue: 34000, mrr: 43100 },
    { date: "May 7", revenue: 37000, mrr: 44000 },
    { date: "May 14", revenue: 36000, mrr: 44900 },
    { date: "May 21", revenue: 39000, mrr: 45800 },
    { date: "May 28", revenue: 41000, mrr: 46700 },
    { date: "Jun 4", revenue: 43000, mrr: 47400 },
    { date: "Jun 11", revenue: 44500, mrr: 47900 },
    { date: "Jun 18", revenue: 46000, mrr: 48320 },
  ],
  "1y": [
    { date: "Jul '23", revenue: 68000, mrr: 28000 },
    { date: "Aug '23", revenue: 72000, mrr: 30000 },
    { date: "Sep '23", revenue: 75000, mrr: 32500 },
    { date: "Oct '23", revenue: 80000, mrr: 34000 },
    { date: "Nov '23", revenue: 85000, mrr: 36000 },
    { date: "Dec '23", revenue: 95000, mrr: 38500 },
    { date: "Jan '24", revenue: 88000, mrr: 40000 },
    { date: "Feb '24", revenue: 92000, mrr: 42000 },
    { date: "Mar '24", revenue: 98000, mrr: 43500 },
    { date: "Apr '24", revenue: 105000, mrr: 45000 },
    { date: "May '24", revenue: 115000, mrr: 46800 },
    { date: "Jun '24", revenue: 127450, mrr: 48320 },
  ],
};

// ─── User Signups Per Month ───────────────────────────────────────────────────
export const signupsData = {
  "7d": [
    { month: "Mon", signups: 42 },
    { month: "Tue", signups: 58 },
    { month: "Wed", signups: 51 },
    { month: "Thu", signups: 67 },
    { month: "Fri", signups: 73 },
    { month: "Sat", signups: 38 },
    { month: "Sun", signups: 29 },
  ],
  "30d": [
    { month: "May 25", signups: 180 },
    { month: "Jun 1", signups: 210 },
    { month: "Jun 8", signups: 195 },
    { month: "Jun 15", signups: 240 },
    { month: "Jun 22", signups: 265 },
  ],
  "90d": [
    { month: "Apr", signups: 820 },
    { month: "May", signups: 940 },
    { month: "Jun", signups: 1100 },
  ],
  "1y": [
    { month: "Jul", signups: 620 },
    { month: "Aug", signups: 710 },
    { month: "Sep", signups: 680 },
    { month: "Oct", signups: 790 },
    { month: "Nov", signups: 850 },
    { month: "Dec", signups: 920 },
    { month: "Jan", signups: 780 },
    { month: "Feb", signups: 860 },
    { month: "Mar", signups: 940 },
    { month: "Apr", signups: 1020 },
    { month: "May", signups: 1180 },
    { month: "Jun", signups: 1342 },
  ],
};

// ─── Traffic Source Breakdown ─────────────────────────────────────────────────
export const trafficData = [
  { name: "Organic Search", value: 38, color: "#6366f1" },
  { name: "Direct", value: 24, color: "#8b5cf6" },
  { name: "Referral", value: 18, color: "#06b6d4" },
  { name: "Social Media", value: 12, color: "#f59e0b" },
  { name: "Email", value: 8, color: "#10b981" },
];

// ─── Revenue by Plan ──────────────────────────────────────────────────────────
export const revenueByPlanData = [
  { name: "Enterprise", value: 42, color: "#6366f1" },
  { name: "Pro", value: 35, color: "#8b5cf6" },
  { name: "Starter", value: 16, color: "#06b6d4" },
  { name: "Free", value: 7, color: "#e2e8f0" },
];

// ─── Active Users Trend ───────────────────────────────────────────────────────
export const activeUsersData = {
  "7d": [
    { date: "Jun 18", users: 11200, sessions: 28400 },
    { date: "Jun 19", users: 11800, sessions: 29100 },
    { date: "Jun 20", users: 12400, sessions: 31200 },
    { date: "Jun 21", users: 12100, sessions: 30500 },
    { date: "Jun 22", users: 13200, sessions: 33800 },
    { date: "Jun 23", users: 12800, sessions: 32100 },
    { date: "Jun 24", users: 14280, sessions: 36200 },
  ],
  "30d": [
    { date: "May 25", users: 9800, sessions: 24200 },
    { date: "May 28", users: 10200, sessions: 25600 },
    { date: "Jun 1", users: 10800, sessions: 27100 },
    { date: "Jun 4", users: 11200, sessions: 28400 },
    { date: "Jun 7", users: 11600, sessions: 29200 },
    { date: "Jun 10", users: 12100, sessions: 30800 },
    { date: "Jun 13", users: 12400, sessions: 31500 },
    { date: "Jun 16", users: 12900, sessions: 32800 },
    { date: "Jun 19", users: 13400, sessions: 34100 },
    { date: "Jun 22", users: 13800, sessions: 35200 },
    { date: "Jun 24", users: 14280, sessions: 36200 },
  ],
  "90d": [
    { date: "Mar 26", users: 7200, sessions: 18100 },
    { date: "Apr 2", users: 7800, sessions: 19600 },
    { date: "Apr 9", users: 8200, sessions: 20800 },
    { date: "Apr 16", users: 8900, sessions: 22400 },
    { date: "Apr 23", users: 9400, sessions: 23800 },
    { date: "Apr 30", users: 9800, sessions: 24900 },
    { date: "May 7", users: 10400, sessions: 26200 },
    { date: "May 14", users: 10900, sessions: 27600 },
    { date: "May 21", users: 11600, sessions: 29400 },
    { date: "May 28", users: 12200, sessions: 30900 },
    { date: "Jun 4", users: 12800, sessions: 32400 },
    { date: "Jun 11", users: 13500, sessions: 34200 },
    { date: "Jun 18", users: 14280, sessions: 36200 },
  ],
  "1y": [
    { date: "Jul '23", users: 4200, sessions: 10800 },
    { date: "Aug '23", users: 4800, sessions: 12200 },
    { date: "Sep '23", users: 5400, sessions: 13800 },
    { date: "Oct '23", users: 6100, sessions: 15600 },
    { date: "Nov '23", users: 6800, sessions: 17400 },
    { date: "Dec '23", users: 7200, sessions: 18400 },
    { date: "Jan '24", users: 7800, sessions: 19900 },
    { date: "Feb '24", users: 8600, sessions: 21800 },
    { date: "Mar '24", users: 9400, sessions: 23900 },
    { date: "Apr '24", users: 10800, sessions: 27400 },
    { date: "May '24", users: 12400, sessions: 31600 },
    { date: "Jun '24", users: 14280, sessions: 36200 },
  ],
};

// ─── Churn Trend ──────────────────────────────────────────────────────────────
export const churnTrendData = [
  { month: "Jul '23", churn: 3.8, retained: 96.2 },
  { month: "Aug '23", churn: 3.5, retained: 96.5 },
  { month: "Sep '23", churn: 3.2, retained: 96.8 },
  { month: "Oct '23", churn: 3.0, retained: 97.0 },
  { month: "Nov '23", churn: 2.9, retained: 97.1 },
  { month: "Dec '23", churn: 2.7, retained: 97.3 },
  { month: "Jan '24", churn: 2.8, retained: 97.2 },
  { month: "Feb '24", churn: 2.6, retained: 97.4 },
  { month: "Mar '24", churn: 2.5, retained: 97.5 },
  { month: "Apr '24", churn: 2.4, retained: 97.6 },
  { month: "May '24", churn: 2.4, retained: 97.6 },
  { month: "Jun '24", churn: 2.4, retained: 97.6 },
];

// ─── Recent Transactions ──────────────────────────────────────────────────────
export const recentTransactions = [
  { id: "TXN-8821", user: "Acme Corp", email: "billing@acme.com", plan: "Enterprise", amount: 2400, status: "paid", date: "Jun 24, 2024" },
  { id: "TXN-8820", user: "Sarah Johnson", email: "sarah@techflow.io", plan: "Pro", amount: 79, status: "paid", date: "Jun 24, 2024" },
  { id: "TXN-8819", user: "DataSync Ltd", email: "admin@datasync.co", plan: "Enterprise", amount: 2400, status: "paid", date: "Jun 23, 2024" },
  { id: "TXN-8818", user: "Marcus Chen", email: "m.chen@startup.dev", plan: "Pro", amount: 79, status: "pending", date: "Jun 23, 2024" },
  { id: "TXN-8817", user: "Pixel Studio", email: "hello@pixelstudio.com", plan: "Starter", amount: 29, status: "paid", date: "Jun 22, 2024" },
  { id: "TXN-8816", user: "Nova Analytics", email: "finance@nova.ai", plan: "Enterprise", amount: 2400, status: "paid", date: "Jun 22, 2024" },
  { id: "TXN-8815", user: "Elena Vasquez", email: "elena@freelance.me", plan: "Starter", amount: 29, status: "failed", date: "Jun 21, 2024" },
  { id: "TXN-8814", user: "CloudBase Inc", email: "ops@cloudbase.io", plan: "Pro", amount: 79, status: "paid", date: "Jun 21, 2024" },
];

// ─── Users ────────────────────────────────────────────────────────────────────
export const usersData = [
  { id: 1, name: "Acme Corp", email: "billing@acme.com", plan: "Enterprise", status: "active", joined: "Jan 12, 2024", lastActive: "2 min ago", mrr: 2400, avatar: "AC" },
  { id: 2, name: "Sarah Johnson", email: "sarah@techflow.io", plan: "Pro", status: "active", joined: "Feb 3, 2024", lastActive: "1 hr ago", mrr: 79, avatar: "SJ" },
  { id: 3, name: "DataSync Ltd", email: "admin@datasync.co", plan: "Enterprise", status: "active", joined: "Nov 8, 2023", lastActive: "3 hr ago", mrr: 2400, avatar: "DS" },
  { id: 4, name: "Marcus Chen", email: "m.chen@startup.dev", plan: "Pro", status: "trial", joined: "Jun 18, 2024", lastActive: "5 hr ago", mrr: 0, avatar: "MC" },
  { id: 5, name: "Pixel Studio", email: "hello@pixelstudio.com", plan: "Starter", status: "active", joined: "Mar 22, 2024", lastActive: "1 day ago", mrr: 29, avatar: "PS" },
  { id: 6, name: "Nova Analytics", email: "finance@nova.ai", plan: "Enterprise", status: "active", joined: "Sep 14, 2023", lastActive: "2 days ago", mrr: 2400, avatar: "NA" },
  { id: 7, name: "Elena Vasquez", email: "elena@freelance.me", plan: "Starter", status: "churned", joined: "Apr 5, 2024", lastActive: "5 days ago", mrr: 0, avatar: "EV" },
  { id: 8, name: "CloudBase Inc", email: "ops@cloudbase.io", plan: "Pro", status: "active", joined: "Dec 1, 2023", lastActive: "3 hr ago", mrr: 79, avatar: "CB" },
  { id: 9, name: "Bright Minds", email: "team@brightminds.edu", plan: "Pro", status: "active", joined: "Jan 30, 2024", lastActive: "6 hr ago", mrr: 79, avatar: "BM" },
  { id: 10, name: "TechVault", email: "cto@techvault.com", plan: "Enterprise", status: "active", joined: "Oct 20, 2023", lastActive: "1 hr ago", mrr: 2400, avatar: "TV" },
  { id: 11, name: "Lena Park", email: "lena@designco.io", plan: "Starter", status: "trial", joined: "Jun 20, 2024", lastActive: "30 min ago", mrr: 0, avatar: "LP" },
  { id: 12, name: "Orbit Systems", email: "hello@orbitsys.net", plan: "Pro", status: "active", joined: "Feb 14, 2024", lastActive: "4 hr ago", mrr: 79, avatar: "OS" },
];

// ─── Monthly Revenue Table ────────────────────────────────────────────────────
export const monthlyRevenueTable = [
  { month: "Jun 2024", newMRR: 4820, expansion: 1240, contraction: -380, churn: -620, netMRR: 48320, growth: 12.4 },
  { month: "May 2024", newMRR: 4200, expansion: 980, contraction: -290, churn: -540, netMRR: 46800, growth: 10.8 },
  { month: "Apr 2024", newMRR: 3800, expansion: 860, contraction: -310, churn: -490, netMRR: 45000, growth: 9.2 },
  { month: "Mar 2024", newMRR: 3400, expansion: 720, contraction: -280, churn: -460, netMRR: 43500, growth: 8.1 },
  { month: "Feb 2024", newMRR: 3100, expansion: 640, contraction: -260, churn: -420, netMRR: 42000, growth: 7.4 },
  { month: "Jan 2024", newMRR: 2900, expansion: 580, contraction: -240, churn: -400, netMRR: 40000, growth: 6.8 },
];

export type DateRange = "7d" | "30d" | "90d" | "1y";
