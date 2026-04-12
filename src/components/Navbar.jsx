import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
        ${scrolled ? "bg-black/95" : "bg-black/90"} 
        border-b border-cyan-400/30`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <img 
            src={logo} 
            className="w-10 h-10 rounded-lg object-cover" 
            alt="A5X Logo"
          />
          <div>
            <p className="text-white font-bold text-lg tracking-wide">A5X</p>
            <p className="text-cyan-400 text-xs font-semibold tracking-wider">
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
                `px-4 py-2 text-sm font-semibold rounded-lg transition-colors
                ${
                  isActive
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden text-white text-2xl p-2 rounded-lg bg-cyan-400/20 z-50 w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE DRAWER - Simplified without Framer Motion */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/90 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 w-full h-full bg-[#050b11] z-40 lg:hidden pt-28 px-8 overflow-y-auto">
            <div className="flex flex-col gap-6 text-2xl font-bold tracking-wide pb-10">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              <div className="pt-10 text-center text-gray-400 text-sm">
                A5X Robotics © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
