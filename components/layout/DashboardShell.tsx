"use client";

import { useSidebar } from "@/hooks/useSidebar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/analytics": "Analytics",
  "/users": "Users",
  "/revenue": "Revenue",
  "/settings": "Settings",
};

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const { collapsed, toggle, mobileOpen, toggleMobile, closeMobile } = useSidebar();
  const pathname = usePathname();
  const pageTitle = pageTitles[pathname] ?? "Dashboard";

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar
        collapsed={collapsed}
        onToggle={toggle}
        mobileOpen={mobileOpen}
        onCloseMobile={closeMobile}
      />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar onMenuClick={toggleMobile} pageTitle={pageTitle} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
