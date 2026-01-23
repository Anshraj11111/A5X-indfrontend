import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/A5Xlogo.jpg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/robotics", label: "Robotics" },
  { to: "/services", label: "Services" },
  { to: "/workshops", label: "Workshops" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/Lab", label: "Lab" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setOpen(false), [location]);

  // Lock scroll when drawer is open and allow Escape to close it
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-[9999]
        ${scrolled ? "bg-black/95" : "bg-black/90"} 
        border-b border-[#00ffff]/30`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 z-[10000]">
          <img src={logo} className="w-10 h-10 rounded-lg object-cover" />
          <div>
            <p className="text-white font-extrabold text-lg tracking-wide">A5X</p>
            <p className="text-[#00ffff] text-xs font-semibold tracking-widest">
              Robotics & Automation
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-lg transition
                ${
                  isActive
                    ? "text-[#00ffff]"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}

          {/* ✅ ADMIN BUTTON */}
          <NavLink
            to="/admin/login"
            className="ml-4 px-5 py-2 text-sm font-bold rounded-full
                       border border-[#00ffff] text-[#00ffff]
                       hover:bg-[#00ffff] hover:text-black transition"
          >
            Admin
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON (toggles open/close; shows X when open) */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden text-white text-2xl p-2 rounded-lg bg-[#00ffff]/20 z-[10001] w-10 h-10 flex items-center justify-center focus:outline-none"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/90 z-[9998]"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed top-0 right-0 w-full h-full 
                         bg-[#050b11] z-[9999]
                         flex flex-col px-8 pt-28"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-6 text-2xl font-extrabold tracking-wide">
                {navItems.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className="text-white hover:text-[#00ffff]"
                  >
                    {label}
                  </NavLink>
                ))}

                {/* ✅ ADMIN BUTTON – MOBILE */}
                <NavLink
                  to="/admin/login"
                  className="mt-6 text-[#00ffff] border border-[#00ffff]
                             px-6 py-3 rounded-full text-center
                             hover:bg-[#00ffff] hover:text-black transition"
                >
                  Admin
                </NavLink>
              </div>

              <div className="mt-auto py-10 text-center text-gray-400 text-sm">
                A5X Robotics © {new Date().getFullYear()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
