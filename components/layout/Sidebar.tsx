"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Activity, Users, FileText, Settings, ChevronRight, Sparkles, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Layout },
  { href: "/analytics", label: "Analytics", icon: Activity },
  { href: "/users", label: "Users", icon: Users },
  { href: "/revenue", label: "Revenue", icon: FileText },
  { href: "/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export default function Sidebar({ collapsed, onToggle, mobileOpen, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={cn(
        "flex items-center gap-3 px-4 py-5 border-b border-indigo-800/50",
        collapsed ? "justify-center px-2" : ""
      )}>
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center shadow-lg">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <div className="flex flex-col min-w-0">
            <span className="text-white font-bold text-sm leading-tight">Pulse</span>
            <span className="text-indigo-300 text-xs leading-tight">Analytics</span>
          </div>
        )}
        {/* Mobile close */}
        <button
          onClick={onCloseMobile}
          className="ml-auto md:hidden text-indigo-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              onClick={onCloseMobile}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group relative",
                active
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-indigo-200 hover:bg-indigo-800/60 hover:text-white",
                collapsed ? "justify-center px-2" : ""
              )}
            >
              <Icon className={cn("w-5 h-5 flex-shrink-0", active ? "text-white" : "text-indigo-300 group-hover:text-white")} />
              {!collapsed && <span className="truncate">{label}</span>}
              {!collapsed && active && (
                <ChevronRight className="w-4 h-4 ml-auto text-indigo-300" />
              )}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                  {label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Upgrade Banner */}
      {!collapsed && (
        <div className="mx-3 mb-4 p-3 rounded-xl bg-gradient-to-br from-indigo-600/40 to-violet-600/40 border border-indigo-500/30">
          <p className="text-white text-xs font-semibold mb-1">Upgrade to Enterprise</p>
          <p className="text-indigo-200 text-xs mb-2 leading-relaxed">Unlock advanced analytics and priority support.</p>
          <button className="w-full py-1.5 px-3 bg-white text-indigo-700 text-xs font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
            Upgrade Now
          </button>
        </div>
      )}

      {/* Collapse Toggle */}
      <div className="border-t border-indigo-800/50 p-2">
        <button
          onClick={onToggle}
          className={cn(
            "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-indigo-300 hover:text-white hover:bg-indigo-800/60 text-xs font-medium transition-all",
            collapsed ? "justify-center" : ""
          )}
        >
          <ChevronRight className={cn("w-4 h-4 transition-transform duration-300", collapsed ? "" : "rotate-180")} />
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex flex-col h-screen sticky top-0 bg-[#1e1b4b] border-r border-indigo-900/50 transition-all duration-300 ease-in-out flex-shrink-0",
          collapsed ? "w-16" : "w-60"
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-[#1e1b4b] z-50 md:hidden transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
