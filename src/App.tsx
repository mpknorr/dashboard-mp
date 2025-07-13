import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DefaultDashboard from "@/pages/dashboards/DefaultDashboard";
import CRMDashboard from "@/pages/dashboards/CRMDashboard";
import SmartHomeDashboard from "@/pages/dashboards/SmartHomeDashboard";
import AutomotiveDashboard from "@/pages/dashboards/AutomotiveDashboard";
import VRDashboard from "@/pages/dashboards/VRDashboard";
import Analytics from "@/pages/applications/Analytics";
import Calendar from "@/pages/applications/Calendar";
import Kanban from "@/pages/applications/Kanban";
import DataTables from "@/pages/applications/DataTables";
import Wizard from "@/pages/applications/Wizard";
import Profile from "@/pages/pages/Profile";
import Projects from "@/pages/pages/Projects";
import Charts from "@/pages/pages/Charts";
import Notifications from "@/pages/pages/Notifications";
import Widgets from "@/pages/pages/Widgets";
import EcommerceOverview from "@/pages/ecommerce/Overview";
import ProductsList from "@/pages/ecommerce/ProductsList";
import SignIn from "@/pages/authentication/SignIn";
import SignUp from "@/pages/authentication/SignUp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen w-full bg-background">
            <Routes>
              {/* Authentication Routes */}
              <Route path="/auth/signin" element={<SignIn />} />
              <Route path="/auth/signup" element={<SignUp />} />
              
              {/* Dashboard Routes */}
              <Route path="/" element={<DashboardLayout />}>
                <Route index element={<DefaultDashboard />} />
                <Route path="dashboards/default" element={<DefaultDashboard />} />
                <Route path="dashboards/crm" element={<CRMDashboard />} />
                <Route path="dashboards/smart-home" element={<SmartHomeDashboard />} />
                <Route path="dashboards/automotive" element={<AutomotiveDashboard />} />
                <Route path="dashboards/vr" element={<VRDashboard />} />
                
                {/* Applications */}
                <Route path="applications/analytics" element={<Analytics />} />
                <Route path="applications/calendar" element={<Calendar />} />
                <Route path="applications/kanban" element={<Kanban />} />
                <Route path="applications/datatables" element={<DataTables />} />
                <Route path="applications/wizard" element={<Wizard />} />
                
                {/* Pages */}
                <Route path="pages/profile" element={<Profile />} />
                <Route path="pages/projects" element={<Projects />} />
                <Route path="pages/charts" element={<Charts />} />
                <Route path="pages/notifications" element={<Notifications />} />
                <Route path="pages/widgets" element={<Widgets />} />
                
                {/* E-commerce */}
                <Route path="ecommerce/overview" element={<EcommerceOverview />} />
                <Route path="ecommerce/products" element={<ProductsList />} />
              </Route>
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
