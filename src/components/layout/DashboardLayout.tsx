import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex w-full bg-slate-50 dark:bg-slate-950">
      <AppSidebar />
      
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}