import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/A5Xlogo.jpg";

const navItems = [
  { to: "/",          label: "Home" },
  { to: "/services",  label: "Solutions" },
  { to: "/projects",  label: "Projects" },
  { to: "/workshops", label: "Workshop" },
  { to: "/store",     label: "Store" },
  { to: "/about",     label: "About" },
  { to: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? "bg-[#03060A]/98 border-b border-white/8 backdrop-blur-md"
        : "bg-transparent border-b border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <img src={logo} className="w-8 h-8 rounded-sm object-cover" alt="A5X" />
          <div>
            <p className="text-white font-extrabold text-sm tracking-widest">A5X INDUSTRIES</p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors
                ${isActive
                  ? "text-[#00AEEF]"
                  : "text-gray-400 hover:text-white"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </div>

        {/* GET IN TOUCH — desktop */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#00AEEF] text-black
                     font-bold text-xs tracking-wider rounded-sm hover:bg-[#00c4ff] transition-colors"
        >
          GET IN TOUCH
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden text-white text-xl p-2 z-50 focus:outline-none"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <>
          <div className="fixed inset-0 bg-black/80 z-40 lg:hidden" onClick={() => setOpen(false)} />
          <div className="fixed top-0 right-0 w-72 h-full bg-[#060B10] border-l border-white/8 z-40 lg:hidden pt-20 px-8 overflow-y-auto">
            <div className="flex flex-col gap-1 pb-10">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `py-3 text-sm font-semibold tracking-wider uppercase border-b border-white/6 transition-colors
                    ${isActive ? "text-[#00AEEF]" : "text-gray-400 hover:text-white"}`
                  }
                >
                  {label}
                </NavLink>
              ))}

              <Link to="/contact"
                className="mt-6 py-3 bg-[#00AEEF] text-black text-center font-bold text-sm tracking-wider rounded-sm hover:bg-[#00c4ff] transition-colors">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
