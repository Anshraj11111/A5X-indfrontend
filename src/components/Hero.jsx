// frontend/src/components/Hero.jsx
import { motion } from "framer-motion";
import useGsapHeroText from "../hooks/useGsapHeroText";

export default function Hero() {
  const ref = useGsapHeroText();

  const bgImage =
    "https://images.unsplash.com/photo-1643990331688-68ff3eb61675?fm=jpg&q=80&w=1920&ixlib=rb-4.1.0";

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      {/* ====== BACKGROUND ====== */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.18 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 16,
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
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.08]"
      >
        <div className="w-[900px] h-[900px] rounded-full border border-[#0ff]/30" />
      </motion.div>

      {/* ====== CONTENT ====== */}
      <div className="relative z-10 w-full max-w-[800px] px-6 text-center flex flex-col items-center">

        {/* Top tags */}
        <p className="text-[11px] md:text-[13px] tracking-[0.3em] text-[#0ff] uppercase mb-6">
          Automation • Bots • Drones
        </p>

        {/* TITLE */}
        <h1 className="hero-title text-[50px] md:text-[78px] leading-[1.05] font-bold">
          Engineering the
          <span className="block text-[#0ff]">
            Future of Robotics
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="hero-subtext mt-6 text-[16px] md:text-[19px] text-gray-300 leading-relaxed max-w-[600px] mx-auto">
          We design competition–grade robots, automation systems and drones for
          universities, startups and industries that want real performance —
          not just projects.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-6 justify-center">
          <button className="hero-btn px-7 py-3 rounded-full bg-[#0ff] text-black font-semibold hover:bg-[#0cf] shadow-[0_0_25px_#0ff8] transition">
            Start a project
          </button>
          <button className="hero-btn px-7 py-3 rounded-full border border-[#0ff] text-[#0ff] hover:bg-[#0ff1] transition">
            Explore robotics
          </button>
        </div>

        {/* STATS */}
        <div className="mt-12 flex gap-8 justify-center text-sm text-gray-300">
          <div className="hero-stat text-center">
            <div className="text-white text-[30px] font-bold leading-none">
              25+
            </div>
            Systems Delivered
          </div>
          <div className="hero-stat text-center">
            <div className="text-white text-[30px] font-bold leading-none">
              10+
            </div>
            Bots Built
          </div>
          <div className="hero-stat text-center">
            <div className="text-white text-[30px] font-bold leading-none">
              ∞
            </div>
            Iterations
          </div>
        </div>
      </div>
    </section>
  );
}
