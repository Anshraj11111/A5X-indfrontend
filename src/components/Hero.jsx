// frontend/src/components/Hero.jsx
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Video hosted on Cloudinary CDN — streaming optimized for production
const homeBg = "https://res.cloudinary.com/dkugn8sdg/video/upload/vc_auto,q_auto,fl_progressive/v1781242353/a5x_homebg.mp4";

const STATS = [
  { value: "50+",  label: "Projects Delivered" },
  { value: "500+", label: "Students Trained" },
  { value: "10+",  label: "Technologies" },
  { value: "24/7", label: "Technical Support" },
];

export default function Hero() {
  const videoRef   = useRef(null);
  const sectionRef = useRef(null);

  /* ── Video play logic — handles scroll freeze on Vercel ── */
  useEffect(() => {
    const video   = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.muted = true;

    // Play helper
    const safePlay = () => {
      video.play().catch(() => {});
    };

    // Try to play immediately, then on multiple events as fallback
    safePlay();
    video.addEventListener("canplay",    safePlay, { once: true });
    video.addEventListener("loadeddata", safePlay, { once: true });

    // Periodic check — every 2s, if paused and visible, resume
    const interval = setInterval(() => {
      if (!video.paused) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        safePlay();
      }
    }, 2000);

    // IntersectionObserver — resume when hero scrolls back into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        video.muted = !entry.isIntersecting;
        if (entry.isIntersecting) safePlay();
      },
      { threshold: 0.05 }
    );
    observer.observe(section);

    // First user interaction — try unmute
    const onFirstInteract = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        video.muted = false;
        safePlay();
      }
    };
    document.addEventListener("click",      onFirstInteract, { once: true });
    document.addEventListener("touchstart", onFirstInteract, { once: true });

    return () => {
      observer.disconnect();
      clearInterval(interval);
      video.removeEventListener("canplay",    safePlay);
      video.removeEventListener("loadeddata", safePlay);
      document.removeEventListener("click",      onFirstInteract);
      document.removeEventListener("touchstart", onFirstInteract);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#050505]"
      style={{ minHeight: "100vh" }}
    >
      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        >
          <source src={homeBg} type="video/mp4" />
        </video>

        {/* Left solid fade — text readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(5,5,5,1) 0%, rgba(5,5,5,0.92) 30%, rgba(5,5,5,0.55) 55%, rgba(5,5,5,0.08) 80%, rgba(5,5,5,0) 100%)",
        }} />

        {/* Top vignette */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "160px",
          background: "linear-gradient(to bottom, rgba(5,5,5,0.8), transparent)",
        }} />

        {/* Bottom vignette */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
          background: "linear-gradient(to top, rgba(5,5,5,1), transparent)",
        }} />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-14 xl:px-20"
        style={{ paddingTop: "120px", paddingBottom: "60px" }}
      >
        <div className="max-w-[560px]">

          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: "20px", height: "2px", background: "#00AEEF" }} />
            <span style={{ color: "#00AEEF", fontSize: "10px", fontWeight: "700", letterSpacing: "0.4em", textTransform: "uppercase" }}>
              A5X Industries
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-black text-white" style={{ fontSize: "clamp(2rem, 8vw, 5rem)", lineHeight: "0.95", letterSpacing: "-0.02em", margin: 0 }}>
            ENGINEERING
            <br />
            <span style={{ color: "#00AEEF" }}>INTELLIGENCE</span>
            <br />
            FOR TOMORROW
          </h1>

          {/* Blue line */}
          <div style={{ width: "48px", height: "3px", background: "#00AEEF", marginTop: "24px" }} />

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mt-5" style={{ fontSize: "clamp(13px, 2vw, 16px)", maxWidth: "420px" }}>
            Robotics. AI Systems. Automation. Drones.
            <br />
            We build intelligent solutions that solve real-world challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/services" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#00AEEF", color: "#050505",
              padding: "12px 22px", fontSize: "10px", fontWeight: "700",
              letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
            }}>
              EXPLORE SOLUTIONS
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/projects" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              border: "1px solid rgba(255,255,255,0.3)", color: "white",
              padding: "12px 22px", fontSize: "10px", fontWeight: "700",
              letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
            }}>
              VIEW PROJECTS
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-6 border-t border-white/8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "clamp(1.3rem, 4vw, 2rem)", fontWeight: "800", color: "white", lineHeight: "1" }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "9px", color: "#6B7280", marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: "1.4" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIVE R&D BADGE — bottom right, hidden on mobile ── */}
      <div className="hidden sm:flex" style={{
        position: "absolute",
        bottom: "24px",
        right: "24px",
        zIndex: 20,
        alignItems: "center",
        gap: "10px",
        background: "rgba(10,10,10,0.85)",
        border: "1px solid rgba(255,255,255,0.1)",
        padding: "8px 14px",
        backdropFilter: "blur(12px)",
      }}>
        <div style={{
          width: "8px", height: "8px", borderRadius: "50%",
          background: "#00AEEF", animation: "pulse 2s infinite",
        }} />
        <span style={{
          color: "#9CA3AF", fontSize: "9px", fontWeight: "600",
          letterSpacing: "0.25em", textTransform: "uppercase",
        }}>
          Live R&amp;D Operations
        </span>
      </div>

    </section>
  );
}
