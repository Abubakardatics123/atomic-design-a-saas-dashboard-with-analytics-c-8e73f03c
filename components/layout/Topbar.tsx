"use client";

import { useState } from "react";
import { Bell, Search, Menu, X, Check } from 'lucide-react';
import { cn } from "@/lib/utils";

const notifications = [
  { id: 1, title: "New Enterprise signup", desc: "TechVault upgraded to Enterprise plan", time: "2 min ago", unread: true },
  { id: 2, title: "Churn alert", desc: "Elena Vasquez cancelled their subscription", time: "1 hr ago", unread: true },
  { id: 3, title: "MRR milestone reached", desc: "Monthly recurring revenue hit $48K", time: "3 hr ago", unread: true },
  { id: 4, title: "New user signup", desc: "Lena Park joined on Starter plan", time: "5 hr ago", unread: false },
  { id: 5, title: "Payment failed", desc: "Elena Vasquez — $29 payment declined", time: "1 day ago", unread: false },
];

interface TopbarProps {
  onMenuClick: () => void;
  pageTitle?: string;
}

export default function Topbar({ onMenuClick, pageTitle = "Dashboard" }: TopbarProps) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [notifs, setNotifs] = useState(notifications);

  const unreadCount = notifs.filter((n) => n.unread).length;

  const markAllRead = () => setNotifs((prev) => prev.map((n) => ({ ...n, unread: false })));

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 h-16 flex items-center gap-4">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Page title */}
      <div className="hidden md:block">
        <h1 className="text-lg font-semibold text-slate-800">{pageTitle}</h1>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-md mx-auto md:mx-0 md:ml-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-indigo-300 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => { setNotifOpen((o) => !o); setUserOpen(false); }}
            className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-white" />
            )}
          </button>

          {notifOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setNotifOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                  <span className="font-semibold text-slate-800 text-sm">Notifications</span>
                  <button onClick={markAllRead} className="text-xs text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                    <Check className="w-3 h-3" /> Mark all read
                  </button>
                </div>
                <div className="max-h-72 overflow-y-auto divide-y divide-slate-50">
                  {notifs.map((n) => (
                    <div key={n.id} className={cn("px-4 py-3 hover:bg-slate-50 transition-colors cursor-pointer", n.unread ? "bg-indigo-50/50" : "")}>
                      <div className="flex items-start gap-2">
                        {n.unread && <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />}
                        {!n.unread && <div className="w-2 h-2 mt-1.5 flex-shrink-0" />}
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-slate-800 truncate">{n.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{n.desc}</p>
                          <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-slate-100">
                  <button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">View all notifications</button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Avatar */}
        <div className="relative">
          <button
            onClick={() => { setUserOpen((o) => !o); setNotifOpen(false); }}
            className="flex items-center gap-2 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
              AK
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-slate-800 leading-tight">Alex Kim</p>
              <p className="text-xs text-slate-500 leading-tight">Admin</p>
            </div>
          </button>

          {userOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setUserOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden py-1">
                {["Profile", "Account Settings", "Billing", "Sign out"].map((item) => (
                  <button key={item} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
