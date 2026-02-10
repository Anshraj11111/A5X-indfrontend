// frontend/src/components/Footer.jsx
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050608] text-gray-300 pt-20 border-t border-white/10">

      {/* Top grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-semibold text-white">
            A5X Robotics
          </h3>
          <p className="mt-4 text-base leading-relaxed text-gray-400 max-w-xs">
            Precision robotics, drones & automation solutions — built for
            real-world performance.
          </p>
        </div>

        {/* LINKS (use anchors to avoid Link usage outside Router) */}
        <div>
          <h4 className="text-[13px] tracking-[0.25em] uppercase text-[#0ff]">
            Quick Links
          </h4>
          <div className="mt-6 flex flex-col gap-3 text-[15px]">
            <a href="/" className="hover:text-[#0ff] transition">Home</a>
            <a href="/robotics" className="hover:text-[#0ff] transition">Robotics</a>
            <a href="/services" className="hover:text-[#0ff] transition">Services</a>
            <a href="/workshops" className="hover:text-[#0ff] transition">Workshops</a>
            <a href="/team" className="hover:text-[#0ff] transition">Team</a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-[13px] tracking-[0.25em] uppercase text-[#0ff]">
            Contact
          </h4>

          <div className="mt-6 text-[15px] leading-loose">
            <a
              href="mailto:a5xrobotics@gmail.com"
              className="hover:text-[#0ff] transition block"
              aria-label="Email A5X Robotics"
            >
              📩 a5xrobotics@gmail.com
            </a>

            <div className="mt-3 flex flex-col gap-1">
              <a href="tel:+918269858259" className="hover:text-[#0ff] transition block" aria-label="Call 8269858259">📞 +91 8269858259</a>
              <a href="tel:+918839076135" className="hover:text-[#0ff] transition block" aria-label="Call 8839076135">📞 +91 8839076135</a>
              <a href="tel:+919340212224" className="hover:text-[#0ff] transition block" aria-label="Call 9340212224">📞 +91 9340212224</a>
              <a href="tel:+917389391711" className="hover:text-[#0ff] transition block" aria-label="Call 7389391711">📞 +91 7389391711</a>
              <a href="tel:+919302031109" className="hover:text-[#0ff] transition block" aria-label="Call 9302031109">📞 +91 9302031109</a>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-[13px] tracking-[0.25em] uppercase text-[#0ff]">
            Socials
          </h4>
          <div className="mt-6 flex gap-6 text-xl">
            <a href="https://www.instagram.com/a5x.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0ff] transition" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0ff] transition" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com/@a5x_ind" target="_blank" rel="noopener noreferrer" className="hover:text-[#0ff] transition" aria-label="YouTube">
              <FaYoutube />
            </a>
            {/* <a href="https://x.com/A5x_ind?t=vE4Hs3obYbOVRcbTOjPr8Q&s=09" target="_blank" className="hover:text-[#0ff] transition">
              <FaSpaceX />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom credits */}
      <div className="mt-16 border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} A5X Robotics • Robotics • Automation • MERN Dev
      </div>
    </footer>
  );
}
