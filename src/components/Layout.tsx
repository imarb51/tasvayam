import { useState, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";
import profilePic from "../assets/profile.png";
import overviewIcon from "../assets/overview.png";
import workoutIcon from "../assets/workout.png";
import dietIcon from "../assets/diet.png";
import goalIcon from "../assets/goal.png";
import scheduleIcon from "../assets/schedule.png";
import progressIcon from "../assets/progress.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {logout } = useAuth();

  const menuItems = [
    {
      path: "/dashboard",
      icon: overviewIcon,
      label: "Overview",
      isImage: true,
    },
    { path: "/workout", icon: workoutIcon, label: "Workout", isImage: true },
    { path: "/diet", icon: dietIcon, label: "Diet Plan", isImage: true },
    { path: "/goals", icon: goalIcon, label: "Goals", isImage: true },
    {
      path: "/schedule",
      icon: scheduleIcon,
      label: "My Schedule",
      isImage: true,
    },
    {
      path: "/progress",
      icon: progressIcon,
      label: "Progress",
      isImage: true,
      hasArrow: true,
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-[#f8fafc]">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out
      `}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-primary">Fitness</h1>
              <div className="flex gap-1">
                <img
                  src={logo}
                  alt="Fitness Dashboard Logo"
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="w-6 h-6" />
            </button>
          </div>
          {/* Grey line below header */}
          <div className="mt-4 border-b border-gray-200"></div>
        </div>

        <nav className="px-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center justify-between px-4 py-3 mb-2 rounded-lg transition-colors group
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center gap-3">
                  {item.isImage ? (
                    <img
                      src={item.icon as string}
                      alt={item.label}
                      className={`w-5 h-5 object-contain ${
                        isActive ? "brightness-0 invert" : ""
                      }`}
                    />
                  ) : (
                    <Icon />
                  )}
                  <span className="text-[15px]">{item.label}</span>
                </div>
                {item.hasArrow && (
                  <ChevronRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 
                      ${isActive ? "text-white" : "text-gray-400"}`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors w-full">
            <HelpCircle className="w-5 h-5" />
            <span className="text-[15px]">Help</span>
          </button>

          {/* Grey line between Help and Logout */}
          <div className="my-2 mx-4 border-b border-gray-200"></div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-[15px]">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-4 lg:px-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <p className="text-sm text-gray-500">Good Morning</p>
                <h2 className="text-lg font-medium">Welcome Back!</h2>
              </div>
            </div>



            {/* Extended search for larger screens */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Search for tablets/medium screens */}
              <div className="hidden md:block lg:hidden relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-48 md:w-56 text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Search icon for mobile */}
              <button className="p-2 hover:bg-gray-100 rounded-lg md:hidden">
                <Search className="w-5 h-5 text-gray-600" />
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <Link
                to="/password-change"
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </Link>

              <img
                src={profilePic}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
