import React from "react";
import { Menu, LayoutDashboard, FileText, Power, X } from "lucide-react";

type Tab = "overview" | "blogs";

interface BlogSidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (c: boolean) => void;
  handleLogoutClick: () => void;
}

interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
  collapsed: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  active,
  collapsed,
  onClick,
}) => (
  <div className="relative group w-full flex justify-center">
    <button
      onClick={onClick}
      className={`w-full flex items-center ${collapsed ? "justify-center px-0 h-11" : "justify-start gap-3 px-4 py-3"} rounded-sm transition-colors cursor-pointer ${
        active
          ? "bg-[#F38335] text-white shadow-md shadow-[#F38335]/25"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
      }`}
      aria-label={label}
    >
      <Icon className={`w-5 h-5 shrink-0 ${active ? "text-white" : "text-slate-500"}`} />
      {!collapsed && <span className="text-sm font-semibold">{label}</span>}
    </button>

    {/* Tooltip shown on hover when collapsed */}
    {collapsed && (
      <div
        role="tooltip"
        className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2.5 z-50 px-2.5 py-1 text-xs font-medium text-slate-100 bg-slate-900 rounded-md shadow-md border border-slate-800 whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 ease-out select-none"
      >
        {label}
      </div>
    )}
  </div>
);

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  activeTab,
  setActiveTab,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isCollapsed,
  setIsCollapsed,
  handleLogoutClick,
}) => {
  const nav = (tab: Tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <aside
      className={`
        fixed md:static inset-y-0 left-0 z-50 md:z-30
        bg-white border-r border-slate-200 shadow-xl md:shadow-none
        transform transition-all duration-300 ease-in-out flex flex-col
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        ${isCollapsed ? "md:w-[80px] overflow-visible" : "w-[280px] md:w-[260px]"}
      `}
    >
      {/* Header */}
      <div className={`h-16 ${isCollapsed ? "px-3 justify-center" : "px-6 justify-between"} border-b border-slate-100 flex items-center shrink-0`}>
        {!isCollapsed && (
          <div className="animate-in fade-in zoom-in duration-200 flex items-center h-full">
            <img src="/images/logo/logo.svg" alt="Teck Solar" className="h-8 w-auto object-contain select-none pointer-events-none drop-shadow-sm" />
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex p-2 rounded-sm bg-slate-50 hover:bg-slate-200 text-slate-500 transition-colors !cursor-ew-resize"
          aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <Menu className="w-4 h-4 pointer-events-none" />
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden p-1.5 rounded-sm bg-slate-50 hover:bg-slate-100 text-slate-400 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Nav */}
      <div
        className={`p-4 flex-1 ${isCollapsed ? "overflow-visible" : "overflow-y-auto"}`}
        data-lenis-prevent
      >
        <nav className="space-y-2">
          <NavItem
            icon={LayoutDashboard}
            label="Overview"
            active={activeTab === "overview"}
            collapsed={isCollapsed}
            onClick={() => nav("overview")}
          />
          <NavItem
            icon={FileText}
            label="Blog Posts"
            active={activeTab === "blogs"}
            collapsed={isCollapsed}
            onClick={() => nav("blogs")}
          />
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-100">
        <button
          onClick={handleLogoutClick}
          className={`w-full flex items-center ${isCollapsed ? "justify-center px-0 h-11" : "justify-center gap-2 px-4 py-3"} rounded-sm text-slate-500 bg-slate-50 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer shadow-sm border border-slate-100`}
          aria-label="Logout"
        >
          <Power className="w-4 h-4 shrink-0" />
          {!isCollapsed && <span className="font-semibold">Logout</span>}
        </button>
      </div>
    </aside>
  );
};
