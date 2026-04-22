// frontend/src/components/Footer.jsx
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050608] text-gray-300 pt-20 border-t border-white/10">

      {/* Top grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            A5X Robotics
          </h3>
          <p className="mt-4 text-base leading-relaxed text-gray-400 max-w-xs">
            Precision robotics, drones & automation solutions — built for
            real-world performance.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-sm tracking-wider uppercase text-cyan-400 font-bold mb-6">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3 text-base">
            <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="/robotics" className="hover:text-cyan-400 transition-colors">Robotics</a>
            <a href="/services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="/workshops" className="hover:text-cyan-400 transition-colors">Workshops</a>
            <a href="/team" className="hover:text-cyan-400 transition-colors">Team</a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm tracking-wider uppercase text-cyan-400 font-bold mb-6">
            Contact
          </h4>

          <div className="text-base leading-loose">
            <a
              href="mailto:a5xrobotics@gmail.com"
              className="hover:text-cyan-400 transition-colors block mb-3"
              aria-label="Email A5X Robotics"
            >
              📩 a5x.industries@gmail.com
            </a>

            <div className="flex flex-col gap-2">
              <a href="tel:+918269858259" className="hover:text-cyan-400 transition-colors" aria-label="Call 8269858259">📞 +91 8269858259</a>
              <a href="tel:+918839076135" className="hover:text-cyan-400 transition-colors" aria-label="Call 8839076135">📞 +91 8839076135</a>
              <a href="tel:+919340212224" className="hover:text-cyan-400 transition-colors" aria-label="Call 9340212224">📞 +91 9340212224</a>
              <a href="tel:+917389391711" className="hover:text-cyan-400 transition-colors" aria-label="Call 7389391711">📞 +91 7389391711</a>
              <a href="tel:+919302031109" className="hover:text-cyan-400 transition-colors" aria-label="Call 9302031109">📞 +91 9302031109</a>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-sm tracking-wider uppercase text-cyan-400 font-bold mb-6">
            Socials
          </h4>
          <div className="flex gap-6 text-2xl">
            <a 
              href="https://www.instagram.com/a5x.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors" 
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors" 
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://youtube.com/@a5x_ind" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors" 
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom credits */}
      <div className="mt-16 border-t border-white/10 py-6 text-center text-base text-gray-400">
        © {new Date().getFullYear()} A5X Robotics • Robotics • Automation • MERN Dev
      </div>
    </footer>
  );
}

