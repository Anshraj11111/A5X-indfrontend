import { Link } from "react-router-dom";
import useGsapContactCTA from "../hooks/useGsapContactCTA";

export default function ContactCTA() {
  const ref = useGsapContactCTA();

  return (
    <section
      ref={ref}
      className="relative bg-[#050608] text-white py-28 border-t border-white/5"
    >
      {/* Glow behind — no click blocking */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[80%] h-[260px] blur-[180px] bg-[#00fff7]/18 rounded-full translate-y-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-black/40 rounded-3xl 
          border border-[#0ff]/30 backdrop-blur-xl
          shadow-[0_0_40px_rgba(0,255,255,0.12)]
          p-10 md:p-14 text-center">

          {/* Title */}
          <h2 className="cta-title text-4xl md:text-5xl font-bold leading-snug">
            Ready to build your next
            <span className="block text-[#0ff] mt-2">
              Robot • Drone • Automation • Web Project
            </span>
          </h2>

          {/* Subtitle */}
          <p className="cta-subtext mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
            We work hands-on — from idea to prototype to deployment.
            Clean roadmap, exact cost, real deadlines. No overpromises.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="cta-btn px-8 py-3.5 rounded-full bg-[#0ff] text-black 
              font-semibold text-base tracking-wide
              hover:bg-[#00e4e4]
              hover:shadow-[0_0_28px_#0ff]
              transition duration-300"
            >
              Start a project
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="cta-btn px-8 py-3.5 rounded-full border border-[#0ff] text-[#0ff]
              hover:bg-[#0ff0] hover:shadow-[0_0_22px_#0ff]
              text-base font-semibold transition duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-[12px] text-gray-400">
            <span className="cta-point flex items-center gap-1">
              ✔ Real hardware experience
            </span>
            <span className="cta-point flex items-center gap-1">
              ✔ Industry tools (PID, PLC, CV)
            </span>
            <span className="cta-point flex items-center gap-1">
              ✔ IIT Techfest ready bots
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
