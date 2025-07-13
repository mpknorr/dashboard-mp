import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Home,
  Car,
  Headphones,
  BarChart3,
  Calendar,
  Kanban,
  Database,
  Wand2,
  User,
  FolderOpen,
  TrendingUp,
  Bell,
  Grid3X3,
  ShoppingCart,
  Package
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const dashboardItems = [
  { title: "Default", url: "/", icon: LayoutDashboard },
  { title: "CRM", url: "/dashboards/crm", icon: Users },
  { title: "Smart Home", url: "/dashboards/smart-home", icon: Home },
  { title: "Automotive", url: "/dashboards/automotive", icon: Car },
  { title: "VR", url: "/dashboards/vr", icon: Headphones },
];

const applicationItems = [
  { title: "Analytics", url: "/applications/analytics", icon: BarChart3 },
  { title: "Calendar", url: "/applications/calendar", icon: Calendar },
  { title: "Kanban", url: "/applications/kanban", icon: Kanban },
  { title: "DataTables", url: "/applications/datatables", icon: Database },
  { title: "Wizard", url: "/applications/wizard", icon: Wand2 },
];

const pageItems = [
  { title: "Profile", url: "/pages/profile", icon: User },
  { title: "Projects", url: "/pages/projects", icon: FolderOpen },
  { title: "Charts", url: "/pages/charts", icon: TrendingUp },
  { title: "Notifications", url: "/pages/notifications", icon: Bell },
  { title: "Widgets", url: "/pages/widgets", icon: Grid3X3 },
];

const ecommerceItems = [
  { title: "Overview", url: "/ecommerce/overview", icon: ShoppingCart },
  { title: "Products", url: "/ecommerce/products", icon: Package },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible>
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          {!collapsed && <span className="font-semibold text-lg">Soft UI</span>}
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup defaultOpen>
          <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {applicationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pageItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>E-commerce</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {ecommerceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}