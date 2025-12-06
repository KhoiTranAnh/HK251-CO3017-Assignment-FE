import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Logo } from "../components/Logo/Logo";

const SidebarItem = ({ icon: Icon, label, to, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
      active
        ? "bg-blue-50 text-blue-600 font-medium"
        : "text-gray-600 hover:bg-gray-50"
    }`}
  >
    <Icon className={active ? "text-blue-600" : "text-gray-400"} />
    <span>{label}</span>
  </Link>
);

const InstructorLayout = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-100 flex items-center gap-2">
          <Logo />
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="mb-6">
            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Main Menu
            </p>
            <SidebarItem
              icon={DashboardIcon}
              label="Dashboard"
              to="/instructor/dashboard"
              active={isActive("/instructor/dashboard")}
            />
            <SidebarItem
              icon={BookIcon}
              label="My Courses"
              to="/instructor/courses"
              active={isActive("/instructor/courses")}
            />
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <SidebarItem
            icon={SettingsIcon}
            label="Settings"
            to="/instructor/settings"
          />
          <SidebarItem icon={LogoutIcon} label="Log Out" to="/logout" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-gray-800">Instructor Portal</h1>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
              <NotificationsNoneIcon />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-700">
                  FirstName LastName
                </p>
                <p className="text-xs text-gray-500">Instructor</p>
              </div>
              <AccountCircleIcon
                className="text-gray-400 w-10 h-10"
                fontSize="large"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default InstructorLayout;
