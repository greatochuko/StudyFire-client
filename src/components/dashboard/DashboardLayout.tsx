import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { DoorOpenIcon, PanelLeftIcon, XIcon } from "lucide-react";

export default function DashboardLayout(): React.JSX.Element {
  const { user, logout } = useAuth();
  const location = useLocation();

  // Mobile-first state: default sidebar to closed on mobile, open on desktop
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768; // true on desktop, false on mobile
    }
    return true;
  });

  // Close the mobile sidebar drawer automatically when switching links/routes
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "My Documents", path: "/dashboard/materials", icon: "📁" },
    { name: "Flashcards", path: "/dashboard/flashcards", icon: "🎴" },
    { name: "AI Quizzes", path: "/dashboard/quizzes", icon: "📝" },
    { name: "Study Coach", path: "/dashboard/coach", icon: "✨" },
    { name: "Settings", path: "/dashboard/settings", icon: "⚙️" },
  ];

  return (
    <div className="bg-bg text-text relative flex min-h-screen w-full overflow-hidden font-sans antialiased">
      {/* ── MOBILE BACKING DIMMER OVERLAY ── */}
      {/* Renders when sidebar is active/visible to dim background viewport */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isSidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* ── HIGH-CONTRAST MOBILE-FIRST SIDEBAR DRAWERSYSTEM ── */}
      <aside
        className={`bg-surface border-border/60 fixed top-0 bottom-0 left-0 z-50 flex h-screen w-64 flex-col justify-between border-r p-4 transition-all duration-300 ease-in-out md:sticky ${
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:w-20 md:translate-x-0 md:px-2.5"
        }`}
      >
        <div className="flex flex-col gap-6">
          {/* Logo Brand Identifier Panel Workspace Header */}
          <div className="mt-2 flex items-center justify-between px-2 md:justify-center md:px-0">
            {/* Show full brand identity if open on mobile/desktop */}
            <div
              className={`flex flex-col ${!isSidebarOpen ? "md:hidden" : "flex"}`}
            >
              <Link
                to="/dashboard"
                className="text-text font-serif text-base leading-tight font-bold tracking-tight"
              >
                Study<span className="text-accent">Fire</span>
              </Link>
              <span className="text-muted mt-0.5 text-[0.62rem] font-semibold tracking-wider uppercase">
                Smarter study tool for everyone
              </span>
            </div>

            {/* Show mini monogram logo slot when condensed on desktop rails */}
            <span
              className={`text-accent hidden font-serif text-lg font-bold md:block ${isSidebarOpen ? "md:hidden" : "md:block"}`}
            >
              SF
            </span>

            {/* Accessible closing button option only visible inside mobile drawer view */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-muted hover:text-text rounded-lg p-1 md:hidden"
            >
              <XIcon size={18} />
            </button>
          </div>

          {/* Render Link Navigation Collection Stack */}
          <nav className="mt-4 flex flex-col gap-0.5">
            {menuItems.map((item) => {
              const isActive =
                item.path === "/dashboard"
                  ? location.pathname === "/dashboard"
                  : location.pathname.startsWith(item.path);

              const showText = isSidebarOpen;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-accent-lo text-accent shadow-xs"
                      : "text-muted hover:text-text hover:bg-bg/50"
                  }`}
                >
                  <span className="shrink-0 text-sm select-none">
                    {item.icon}
                  </span>
                  <span className={`${showText ? "block" : "block md:hidden"}`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Brand Core Tracker Usage Plan Framework */}
        <div className="border-border/60 flex flex-col gap-3 border-t py-4">
          <div
            className={`bg-bg/40 border-border relative overflow-hidden rounded-2xl border p-4 text-xs ${isSidebarOpen ? "block" : "block md:hidden"}`}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-accent text-[0.65rem] font-bold tracking-wider uppercase">
                Plan Status
              </span>
              <span className="bg-accent-lo text-accent rounded-md px-1.5 py-0.5 text-[0.6rem] font-bold tracking-wide uppercase">
                Active
              </span>
            </div>
            <h4 className="text-text mb-1 text-sm font-bold">Free Beta</h4>
            <p className="text-muted mb-3 text-[0.7rem] leading-snug">
              0 of 3 monthly generations used.
            </p>
            <div className="bg-border mb-3 h-1 w-full overflow-hidden rounded-full">
              <div className="bg-accent h-1 w-[10%] rounded-full" />
            </div>
            <Link
              to="/billing"
              className="bg-accent hover:bg-accent/95 shadow-accent/15 block w-full rounded-lg py-1.5 text-center text-[0.7rem] font-bold text-white shadow-sm transition duration-150"
            >
              Upgrade Plan
            </Link>
          </div>

          <button
            onClick={() => logout()}
            className={`text-muted hover:text-accent hover:bg-bg/50 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs font-bold transition-colors duration-150 ${isSidebarOpen ? "justify-start" : "justify-start md:justify-center"}`}
          >
            <DoorOpenIcon size={16} className="shrink-0" />
            <span
              className={`translate-y-px ${isSidebarOpen ? "block" : "block md:hidden"}`}
            >
              Sign Out
            </span>
          </button>
        </div>
      </aside>

      {/* ── MAIN VIEWPORT DATA STREAM WRAPPER ── */}
      <div className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden">
        {/* HORIZONTAL INTERACTION HEADER */}
        <header className="bg-surface/80 border-border/60 z-30 flex h-14 shrink-0 items-center justify-between border-b px-4 backdrop-blur-md md:px-6">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-muted hover:text-text hover:bg-bg cursor-pointer rounded-xl p-1.5 text-sm transition duration-150"
          >
            <PanelLeftIcon size={16} />
          </button>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button className="bg-text text-bg cursor-pointer rounded-xl px-3 py-2 text-[0.68rem] font-bold shadow-xs transition duration-150 hover:opacity-90 sm:px-3.5 sm:text-[0.7rem]">
              + New Study Set
            </button>
            <div className="bg-bg text-text border-border flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border font-serif text-[0.7rem] font-bold select-none">
              {user?.fullName?.charAt(0).toUpperCase() || "A"}
            </div>
          </div>
        </header>

        {/* Outer Application Layout Context Viewport Block Layer */}
        <div className="overflow-y-auto">
          <div className="bg-bg mx-auto flex w-9/10 max-w-7xl flex-1 py-4 sm:py-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
