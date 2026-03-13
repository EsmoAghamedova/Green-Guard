// import { Outlet, Link, useLocation } from "react-router";
// import { Home, Map, TreePine, AlertTriangle, User } from "lucide-react";

// export function Layout() {
//   const location = useLocation();

//   const navItems = [
//     { path: "/", icon: Home, label: "Home" },
//     { path: "/map", icon: Map, label: "Map" },
//     { path: "/plant-tree", icon: TreePine, label: "Plant" },
//     { path: "/report-cutting", icon: AlertTriangle, label: "Report" },
//     { path: "/profile", icon: User, label: "Profile" },
//   ];

//   const isActive = (path: string) => {
//     if (path === "/") return location.pathname === "/";
//     return location.pathname.startsWith(path);
//   };

//   return (
//     <div className="h-screen flex flex-col bg-gray-50">
//       {/* Compact Header */}
//       <header className="bg-green-600 text-white p-3 shadow-md flex-shrink-0">
//         <div className="flex items-center justify-center gap-2">
//           <TreePine className="w-6 h-6" />
//           <h1 className="text-lg font-semibold">Tree Planting App</h1>
//         </div>
//       </header>

//       {/* Main Content - Scrollable */}
//       <main className="flex-1 overflow-auto pb-16">
//         <Outlet />
//       </main>

//       {/* Bottom Navigation */}
//       <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-50">
//         <div className="flex justify-around">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             const active = isActive(item.path);
//             return (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`flex flex-col items-center gap-1 p-3 flex-1 transition-colors ${
//                   active ? "text-green-600 bg-green-50" : "text-gray-600"
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span className="text-xs font-medium">{item.label}</span>
//               </Link>
//             );
//           })}
//         </div>
//       </nav>
//     </div>
//   );
// }


import { Outlet, Link, useNavigate } from 'react-router'
import { useAuthStore } from '../../store/authStore'
import { useEffect } from 'react'
import { Leaf, Menu, LogOut, User, Home } from 'lucide-react'

export function Layout() {
  const { user, getCurrentUser, loading } = useAuthStore()
  const navigate = useNavigate()

  // Check if user is still logged in when component mounts
  useEffect(() => {
    getCurrentUser()
  }, [])

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login')
    }
  }, [user, loading, navigate])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Leaf className="w-8 h-8" />
            TreeApp
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-green-100 transition">
              Home
            </Link>
            <Link to="/map" className="hover:text-green-100 transition">
              Map
            </Link>
            <Link to="/ai-advisor" className="hover:text-green-100 transition">
              AI Advisor
            </Link>
            <Link to="/community" className="hover:text-green-100 transition">
              Community
            </Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-800 rounded-lg transition"
            >
              <User size={20} />
              <span className="hidden sm:inline">{user.username || 'Profile'}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 TreeApp. Planting trees for a greener future.</p>
      </footer>
    </div>
  )
}