import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";

export default function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#0A0F14] text-white pt-24 flex">

      {/* MOBILE SIDEBAR OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <Sidebar
        user={user}
        handleLogout={handleLogout}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 px-6 lg:px-10 pb-10">

        {/* MOBILE HEADER */}
        <div className="lg:hidden flex items-center gap-4 mb-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl text-[#0ff]"
          >
            <HiMenu />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        {/* DESKTOP HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:block text-4xl font-semibold"
        >
          Dashboard
        </motion.h1>

        <p className="text-gray-400 mt-2">
          Manage website data — Team, Gallery, Content, Uploads.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 mt-10">
          <AdminCard title="👥 Team Manager" desc="Create new team members" to="/admin/team" />
          <AdminCard title="🧾 Team List" desc="Edit or delete members" to="/admin/team-list" />
          <AdminCard title="📁 Upload Center" desc="Upload media files" to="/admin/uploads" />
          <AdminCard title="🖼️ Gallery Manager" desc="View & delete gallery items" to="/admin/gallery" />
          <AdminCard title="💬 Feedback Manager" desc="View and manage feedback" to="/admin/feedback" />
        </div>

        <footer className="mt-20 text-gray-500 text-sm text-center">
          A5X Robotics Admin © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

/* ===================== SIDEBAR ===================== */
function Sidebar({ handleLogout, user, sidebarOpen, setSidebarOpen }) {
  return (
    <div
      className={`
        fixed lg:static top-0 left-0 h-full w-64
        bg-[#0C131A] border-r border-[#0ff]/10
        z-50 transform transition-transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* USER */}
      <div className="p-6 text-center mt-20 lg:mt-6">
        <div className="mx-auto w-14 h-14 rounded-full bg-[#fff] flex items-center justify-center text-xl font-bold text-[black]">
          {getInitials(user)}
        </div>
        <h3 className="mt-3 text-lg font-semibold">{getDisplayName(user)}</h3>
        <p className="text-gray-400 text-xs">Admin</p>
      </div>

      {/* LINKS */}
      <nav className="flex flex-col gap-1 px-5 mt-6">
        <SidebarItem to="/admin/dashboard" label="Dashboard" />
        <SidebarItem to="/admin/team" label="Team Manager" />
        <SidebarItem to="/admin/team-list" label="Team List" />
        <SidebarItem to="/admin/uploads" label="Upload Center" />
        <SidebarItem to="/admin/gallery" label="Gallery Manager" />
        <SidebarItem to="/admin/feedback" label="Feedback Manager" />
      </nav>

      {/* LOGOUT */}
      <div className="mt-auto p-6">
        <button
          onClick={handleLogout}
          className="w-full text-red-400 border border-red-500/40 py-2 rounded-lg hover:bg-red-500/10"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

/* ===================== HELPERS ===================== */
function getDisplayName(user) {
  if (!user) return "Admin";
  return user.name || user.fullName || user.email?.split("@")[0] || "Admin";
}

function getInitials(user) {
  const name = getDisplayName(user);
  const parts = name.split(" ");
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : (parts[0][0] + parts[1][0]).toUpperCase();
}

function SidebarItem({ to, label }) {
  return (
    <Link to={to}>
      <div className="px-4 py-2 rounded-md text-gray-300 hover:text-[#0ff] hover:bg-[#0ff]/10 text-sm transition">
        {label}
      </div>
    </Link>
  );
}

function AdminCard({ title, desc, to }) {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="p-6 rounded-xl bg-[#0F1821] border border-[#0ff]/10 hover:border-[#0ff]/60 transition shadow-md"
      >
        <h2 className="text-lg font-semibold text-[#0ff]">{title}</h2>
        <p className="text-gray-300 mt-2 text-sm">{desc}</p>
        <p className="mt-3 text-xs text-[#0ff] font-medium">Manage →</p>
      </motion.div>
    </Link>
  );
}
