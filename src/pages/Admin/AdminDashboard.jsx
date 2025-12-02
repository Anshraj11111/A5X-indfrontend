import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-[#0A0F14] text-white">

      {/* 🧊 LEFT SIDEBAR */}
      <Sidebar handleLogout={handleLogout} user={user} />

      {/* 📦 MAIN CONTENT */}
      <div className="flex-1 p-10">

        {/* PAGE HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold"
        >
          Dashboard
        </motion.h1>

        <p className="text-gray-400 mt-2">
          Manage website data — Team, Gallery, Content, Uploads.
        </p>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 mt-10">

          <AdminCard
            title="👥 Team Manager"
            desc="Create new team members"
            to="/admin/team"
          />

          <AdminCard
            title="🧾 Team List"
            desc="Edit or delete members"
            to="/admin/team-list"
          />

          <AdminCard
            title="📁 Upload Center"
            desc="Upload media files"
            to="/admin/uploads"
          />

          <AdminCard
            title="🖼️ Gallery Manager"
            desc="View & delete gallery items"
            to="/admin/gallery"
          />

          

        </div>

        <footer className="mt-20 text-gray-500 text-sm text-center">
          A5X Robotics Admin © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

/* 🧊 SIDEBAR
----------------------------------------*/
function Sidebar({ handleLogout, user }) {
  return (
    <div className="w-64 border-r border-[#0ff]/10 bg-[#0C131A] flex flex-col">

      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold text-[#0ff] flex gap-2 justify-center">
          ⚙️ Admin
        </h2>
        <p className="text-gray-400 text-sm mt-1">{user?.email}</p>
      </div>

      {/* NAV LINKS */}
      <nav className="flex flex-col gap-1 px-5">
        <SidebarItem to="/admin/dashboard" label="Dashboard" />
        <SidebarItem to="/admin/team" label="Team Manager" />
        <SidebarItem to="/admin/team-list" label="Team List" />
        <SidebarItem to="/admin/uploads" label="Upload Center" />
        <SidebarItem to="/admin/gallery" label="Gallery Manager" />
        
      </nav>

      {/* LOGOUT BUTTON */}
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

/* 🧭 SIDEBAR SINGLE ITEM */
function SidebarItem({ to, label }) {
  return (
    <Link to={to}>
      <div className="px-4 py-2 rounded-md text-gray-300 hover:text-[#0ff] hover:bg-[#0ff]/10 cursor-pointer text-sm transition">
        {label}
      </div>
    </Link>
  );
}

/* 🧊 DASHBOARD CARD */
function AdminCard({ title, desc, to }) {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 rounded-xl bg-[#0F1821] border border-[#0ff]/10 hover:border-[#0ff]/60 transition shadow-md cursor-pointer"
      >
        <h2 className="text-lg font-semibold text-[#0ff]">{title}</h2>
        <p className="text-gray-300 mt-2 text-sm">{desc}</p>
        <p className="mt-3 text-xs text-[#0ff] font-medium">Manage →</p>
      </motion.div>
    </Link>
  );
}
