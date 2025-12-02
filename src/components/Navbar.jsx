import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/A5Xlogo.jpg";
import { AuthContext } from "../context/AuthContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/robotics", label: "Robotics" },
  { to: "/services", label: "Services" },
  { to: "/workshops", label: "Workshops" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { user, logout } = useContext(AuthContext);

  // Scroll blur UI
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl
        ${scrolled
          ? "bg-black/85 border-b border-[#0ff]/20 py-2"
          : "bg-black/70 border-b border-white/10 py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 select-none">
          <img src={logo} className="w-10 h-10 rounded-lg" />
          <div className="leading-tight">
            <p className="text-white font-bold text-lg">A5X</p>
            <p className="text-[#0ff] text-xs">Robotics & Automation</p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">

          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm rounded-lg transition-all
                 ${isActive
                   ? "text-[#0ff]"
                   : "text-gray-300 hover:text-white hover:bg-white/5"
                 }`
              }
            >
              {n.label}
            </NavLink>
          ))}

          {/* ========== AUTH BUTTON ========== */}
          {!user && (
            <Link
              to="/admin/login"
              className="ml-4 px-5 py-2 rounded-full text-sm font-semibold 
                         border border-[#0ff] text-[#0ff]
                         hover:bg-[#0ff] hover:text-black transition"
            >
              Admin
            </Link>
          )}

          {/* Logged in */}
          {user && (
            <>
              <Link
                to="/admin/dashboard"
                className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold 
                           bg-[#0ff] text-black hover:bg-[#07e2e2] transition"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="ml-2 px-4 py-2 text-sm text-red-400 hover:text-red-500"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-white text-2xl p-2 rounded-lg bg-white/10"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 w-[85vw] max-w-sm h-full
                         bg-[#04080e]/95 border-l border-[#0ff]/20 z-50
                         flex flex-col px-6 pt-20"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 240, damping: 30 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white text-2xl"
              >
                <HiOutlineX />
              </button>

              <div className="flex flex-col gap-4 mt-8">
                {navItems.map(({ to, label }) => (
                  <NavLink key={to} to={to} className="text-gray-300 text-lg">
                    {label}
                  </NavLink>
                ))}

                {!user && (
                  <Link
                    to="/admin/login"
                    className="mt-6 border border-[#0ff] rounded-xl text-[#0ff] py-3 text-center
                               hover:bg-[#0ff] hover:text-black"
                  >
                    Admin Login
                  </Link>
                )}

                {user && (
                  <>
                    <Link
                      to="/admin/dashboard"
                      className="mt-6 bg-[#0ff] text-black py-3 rounded-xl text-center"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="py-3 border border-red-500/30 rounded-xl text-red-400"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>

              <div className="mt-auto py-10 text-center text-gray-500 text-sm">
                A5X Robotics © {new Date().getFullYear()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
