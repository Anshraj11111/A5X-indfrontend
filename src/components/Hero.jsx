// frontend/src/components/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useGsapHeroText from "../hooks/useGsapHeroText";

export default function Hero() {
  const ref = useGsapHeroText();

  const bgImage =
    "https://images.unsplash.com/photo-1643990331688-68ff3eb61675?fm=jpg&q=80&w=1920&ixlib=rb-4.1.0";

  return (
    <section
      ref={ref}
      className="relative min-h-[75vh] md:min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      {/* ====== BACKGROUND ====== */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={{ scale: 1.18, x: [0, 18, 0], y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 6, // faster background zoom + subtle parallax
          ease: "easeInOut",
        }}
      >
        <img
          src={bgImage}
          className="w-full h-full object-cover brightness-[0.35]"
          draggable="false"
        />
      </motion.div>

      {/* radial aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,.12),transparent_60%)]" />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none"
      >
        <div className="w-[60vw] max-w-[900px] h-[60vw] max-h-[900px] rounded-full border border-[#0ff]/30" />
      </motion.div>

      {/* ====== CONTENT ====== */}
      <div className="relative z-10 w-full max-w-[900px] px-4 sm:px-6 text-center flex flex-col items-center pt-16 sm:pt-20 md:pt-28 lg:pt-32">

        {/* Top tags (responsive: separated items to avoid awkward wrapping and clipping) */}
        <div className="flex items-center gap-3 justify-center flex-wrap mb-4">
          <span className="text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.28em] text-[#0ff] uppercase">
            Automation
          </span>
          <span className="text-[#0ff] opacity-90 select-none">•</span>
          <span className="text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.28em] text-[#0ff] uppercase">
            Bots
          </span>
          <span className="text-[#0ff] opacity-90 select-none">•</span>
          <span className="text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.28em] text-[#0ff] uppercase">
            Drones
          </span>
        </div>

        {/* TITLE */}
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-tight font-extrabold tracking-tight">
          <span className="block">Engineering the</span>
          <span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] via-[#00e4e4] to-[#0ff] inline-block"
            style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
          >
            Future of Robotics
          </span>
        </h1>

        {/* decorative accent */}
        <div className="mt-4 w-20 sm:w-28 h-1 rounded-full bg-gradient-to-r from-[#0ff] to-[#00e4e4] opacity-90" />

        {/* SUBTEXT */}
        <p className="hero-subtext mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-[520px] mx-auto">
          We design competition–grade robots, automation systems and drones for
          universities, startups and industries that want real performance —
          not just projects.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center relative z-20 w-full sm:w-auto">
          <Link to="/projects" className="hero-btn w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#0ff] text-black font-semibold hover:bg-[#00e4e4] shadow-[0_10px_40px_rgba(0,255,255,0.12)] transform-gpu hover:scale-105 transition">
            Start a project
          </Link>
          <Link to="/robotics" className="hero-btn w-full sm:w-auto text-center px-6 py-3 rounded-full border border-[#0ff] text-[#0ff] hover:bg-[#0ff1] transition hover:scale-[1.03]">
            Explore robotics
          </Link>
        </div>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 justify-center text-sm text-gray-300 w-full max-w-[720px]">
          <div className="hero-stat text-center bg-black/30 px-6 py-4 rounded-2xl border border-[#0ff]/8">
            <div className="text-white text-2xl sm:text-[30px] font-bold leading-none">25+</div>
            <div className="text-xs mt-1">Systems Delivered</div>
          </div>
          <div className="hero-stat text-center bg-black/30 px-6 py-4 rounded-2xl border border-[#0ff]/8">
            <div className="text-white text-2xl sm:text-[30px] font-bold leading-none">10+</div>
            <div className="text-xs mt-1">Bots Built</div>
          </div>
          <div className="hero-stat text-center bg-black/30 px-6 py-4 rounded-2xl border border-[#0ff]/8">
            <div className="text-white text-2xl sm:text-[30px] font-bold leading-none">∞</div>
            <div className="text-xs mt-1">Iterations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
