// frontend/src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from "../assets/A5Xlogo.jpg";

const LINKS = {
  Solutions: [
    { label: "Robotics",     to: "/robotics" },
    { label: "AI Systems",   to: "/services" },
    { label: "Drones",       to: "/services" },
    { label: "Automation",   to: "/services" },
    { label: "Software",     to: "/services" },
    { label: "Digital Marketing", to: "/services" },
  ],
  Company: [
    { label: "About Us",  to: "/about" },
    { label: "Our Team",  to: "/team" },
    { label: "Projects",  to: "/projects" },
    { label: "Lab",       to: "/lab" },
    { label: "Contact",   to: "/contact" },
  ],
  Resources: [
    { label: "Workshops", to: "/workshops" },
    { label: "Projects",  to: "/projects" },
    { label: "Gallery",   to: "/gallery" },
    { label: "Blog",      to: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#020508] text-gray-400 border-t border-white/6">

      {/* ── MAIN GRID ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <img src={logo} alt="A5X" className="w-9 h-9 rounded-sm object-cover" />
            <div>
              <p className="text-white font-extrabold text-base tracking-wider">A5X INDUSTRIES</p>
              <p className="text-[10px] text-[#00AEEF] tracking-[0.2em] uppercase">Engineering Intelligence</p>
            </div>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs text-gray-500">
            Engineering Intelligent Systems for Tomorrow.
          </p>

          {/* Contact */}
          <div className="mt-6 space-y-2 text-sm">
            <a href="mailto:a5x.industries@gmail.com"
              className="block hover:text-[#00AEEF] transition-colors">
              a5x.industries@gmail.com
            </a>
            <a href="tel:+918269858259"
              className="block hover:text-[#00AEEF] transition-colors">
              +91-80-2345-6789
            </a>
            <p className="text-gray-600 text-xs">Bengaluru, India</p>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([section, links]) => (
          <div key={section}>
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-5">
              {section}
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}
                    className="text-sm hover:text-[#00AEEF] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} A5X Industries. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5 text-lg">
            <a href="https://www.instagram.com/a5x.in/" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" className="hover:text-[#00AEEF] transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn" className="hover:text-[#00AEEF] transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com/@a5x_ind" target="_blank" rel="noopener noreferrer"
              aria-label="YouTube" className="hover:text-[#00AEEF] transition-colors">
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              aria-label="Twitter" className="hover:text-[#00AEEF] transition-colors">
              <FaTwitter />
            </a>
          </div>

          <div className="flex gap-5 text-xs text-gray-600">
            <a href="/" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="/" className="hover:text-gray-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
