import { Outlet, Link, useLocation } from "react-router";
import { Home, Map, TreePine, AlertTriangle, User } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/map", icon: Map, label: "Map" },
    { path: "/plant-tree", icon: TreePine, label: "Plant" },
    { path: "/report-cutting", icon: AlertTriangle, label: "Report" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Compact Header */}
      <header className="bg-green-600 text-white p-3 shadow-md flex-shrink-0">
        <div className="flex items-center justify-center gap-2">
          <TreePine className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Tree Planting App</h1>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-auto pb-16">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 p-3 flex-1 transition-colors ${
                  active ? "text-green-600 bg-green-50" : "text-gray-600"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}