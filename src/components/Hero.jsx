// frontend/src/components/Hero.jsx
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
      {/* ====== BACKGROUND (Simplified for TV) ====== */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          className="w-full h-full object-cover brightness-[0.35]"
          draggable="false"
          alt="Robotics background"
        />
      </div>

      {/* radial aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,.12),transparent_60%)]" />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* ====== CONTENT ====== */}
      <div className="relative z-10 w-full max-w-[900px] px-4 sm:px-6 text-center flex flex-col items-center pt-16 sm:pt-20 md:pt-28 lg:pt-32">

        {/* Top tags */}
        <div className="flex items-center gap-3 justify-center flex-wrap mb-4">
          <span className="text-[11px] sm:text-[12px] md:text-[14px] tracking-[0.25em] text-cyan-400 uppercase font-semibold">
            Automation
          </span>
          <span className="text-cyan-400 opacity-90 select-none">•</span>
          <span className="text-[11px] sm:text-[12px] md:text-[14px] tracking-[0.25em] text-cyan-400 uppercase font-semibold">
            Bots
          </span>
          <span className="text-cyan-400 opacity-90 select-none">•</span>
          <span className="text-[11px] sm:text-[12px] md:text-[14px] tracking-[0.25em] text-cyan-400 uppercase font-semibold">
            Drones
          </span>
        </div>

        {/* TITLE - Simplified gradient for TV compatibility */}
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-extrabold tracking-tight">
          <span className="block text-white">Engineering the</span>
          <span className="block text-cyan-400">
            Future of Robotics
          </span>
        </h1>

        {/* decorative accent */}
        <div className="mt-4 w-20 sm:w-28 h-1 rounded-full bg-cyan-400 opacity-90" />

        {/* SUBTEXT */}
        <p className="hero-subtext mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-[600px] mx-auto">
          We design competition–grade robots, automation systems and drones for
          universities, startups and industries that want real performance —
          not just projects.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center relative z-20 w-full sm:w-auto">
          <Link 
            to="/projects" 
            className="hero-btn w-full sm:w-auto text-center px-8 py-4 rounded-full bg-cyan-400 text-black font-bold text-lg hover:bg-cyan-300 transition-colors"
          >
            Start a project
          </Link>
          <Link 
            to="/robotics" 
            className="hero-btn w-full sm:w-auto text-center px-8 py-4 rounded-full border-2 border-cyan-400 text-cyan-400 font-bold text-lg hover:bg-cyan-400/10 transition-colors"
          >
            Explore robotics
          </Link>
        </div>

        {/* STATS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 justify-center text-sm text-gray-300 w-full max-w-[720px]">
          <div className="hero-stat text-center bg-black/40 px-6 py-5 rounded-2xl border border-cyan-400/20">
            <div className="text-white text-3xl sm:text-4xl font-bold leading-none">25+</div>
            <div className="text-sm mt-2 text-gray-400">Systems Delivered</div>
          </div>
          <div className="hero-stat text-center bg-black/40 px-6 py-5 rounded-2xl border border-cyan-400/20">
            <div className="text-white text-3xl sm:text-4xl font-bold leading-none">10+</div>
            <div className="text-sm mt-2 text-gray-400">Bots Built</div>
          </div>
          <div className="hero-stat text-center bg-black/40 px-6 py-5 rounded-2xl border border-cyan-400/20">
            <div className="text-white text-3xl sm:text-4xl font-bold leading-none">∞</div>
            <div className="text-sm mt-2 text-gray-400">Iterations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
