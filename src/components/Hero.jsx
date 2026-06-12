// frontend/src/components/Hero.jsx
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Video hosted on Cloudinary CDN — works on Vercel and all deployments
const homeBg = "https://res.cloudinary.com/dkugn8sdg/video/upload/v1781242353/a5x_homebg.mp4";

const STATS = [
  { value: "50+",  label: "Projects Delivered" },
  { value: "500+", label: "Students Trained" },
  { value: "10+",  label: "Technologies" },
  { value: "24/7", label: "Technical Support" },
];

export default function Hero() {
  const videoRef   = useRef(null);
  const sectionRef = useRef(null);

  /* ── Auto audio: on when hero visible, off when scrolled away ── */
  useEffect(() => {
    const video   = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // IntersectionObserver — unmute when hero ≥30% visible, mute otherwise
    const observer = new IntersectionObserver(
      ([entry]) => {
        video.muted = !entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    observer.observe(section);

    // Browser autoplay policy: first user interaction unmutes if hero is still visible
    const onFirstInteract = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        video.muted = false;
      }
    };
    document.addEventListener("click", onFirstInteract, { once: true });
    document.addEventListener("keydown", onFirstInteract, { once: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("click", onFirstInteract);
      document.removeEventListener("keydown", onFirstInteract);
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
          muted        /* starts muted — IntersectionObserver unmutes on view */
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",  /* show top portion — drone is visible at top */
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
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20"
        style={{ paddingTop: "140px", paddingBottom: "80px" }}
      >
        <div style={{ maxWidth: "560px" }}>

          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <div style={{ width: "20px", height: "2px", background: "#00AEEF" }} />
            <span style={{ color: "#00AEEF", fontSize: "10px", fontWeight: "700", letterSpacing: "0.4em", textTransform: "uppercase" }}>
              A5X Industries
            </span>
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 5rem)", fontWeight: "900", color: "white", lineHeight: "0.95", letterSpacing: "-0.02em", margin: 0 }}>
            ENGINEERING
            <br />
            <span style={{ color: "#00AEEF" }}>INTELLIGENCE</span>
            <br />
            FOR TOMORROW
          </h1>

          {/* Blue line */}
          <div style={{ width: "48px", height: "3px", background: "#00AEEF", marginTop: "28px" }} />

          {/* Description */}
          <p style={{ color: "#9CA3AF", fontSize: "16px", lineHeight: "1.85", marginTop: "24px", maxWidth: "420px" }}>
            Robotics. AI Systems. Automation. Drones.
            <br />
            We build intelligent solutions that solve real-world challenges.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "36px" }}>
            <Link to="/services" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#00AEEF", color: "#050505",
              padding: "14px 30px", fontSize: "11px", fontWeight: "700",
              letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
            }}>
              EXPLORE SOLUTIONS
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/projects" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              border: "1px solid rgba(255,255,255,0.3)", color: "white",
              padding: "14px 30px", fontSize: "11px", fontWeight: "700",
              letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
            }}>
              VIEW PROJECTS
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px",
            marginTop: "52px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.08)",
          }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.1rem)", fontWeight: "800", color: "white", lineHeight: "1" }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "10px", color: "#6B7280", marginTop: "8px", textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: "1.4" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIVE R&D BADGE — bottom right ── */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        right: "40px",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "rgba(10,10,10,0.85)",
        border: "1px solid rgba(255,255,255,0.1)",
        padding: "10px 18px",
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
