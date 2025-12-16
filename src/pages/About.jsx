// frontend/src/pages/About.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutHero from "../assets/About.png";
import AboutCrausel from "../assets/Aboutcrausel.png";
import TrainerImg from "../assets/trainerabout.png";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const splitRefs = useRef([]);
  const animationsInitialized = useRef(false);

  // 🔥 Hero text animation - simple fade-in without SplitType
  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationsInitialized.current || typeof window === "undefined") return;

      try {
        const titleEl = document.querySelector(".about-title");
        const subEl = document.querySelector(".about-sub");

        // Fade in title
        if (titleEl) {
          gsap.from(titleEl, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2,
          });
        }

        // Fade in subtitle
        if (subEl) {
          gsap.from(subEl, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.6,
          });
        }

        animationsInitialized.current = true;
      } catch (err) {
        console.error("Hero animation error:", err);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      splitRefs.current.forEach((split) => {
        try {
          if (split && typeof split.revert === "function") {
            split.revert();
          }
        } catch (e) {}
      });
    };
  }, []);

  // 🔥 Scroll reveal animations - separate effect for scroll triggers
  useEffect(() => {
    if (typeof window === "undefined") return;

    const timer = setTimeout(() => {
      try {
        const revealEls = document.querySelectorAll(".reveal");
        if (revealEls.length === 0) return;

        revealEls.forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 60,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
              markers: false,
            },
          });
        });
      } catch (err) {
        console.error("Scroll reveal error:", err);
      }
    }, 500); // Wait longer for scroll triggers to be ready

    return () => {
      clearTimeout(timer);
      try {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger && trigger.kill) {
            trigger.kill();
          }
        });
      } catch (e) {}
    };
  }, []);

  return (
    <main className="bg-black text-white pt-16 md:pt-0">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[55vh] md:min-h-screen pt-16 md:pt-0 flex items-start md:items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${AboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* 🔥 DARK OVERLAY (LOW OPACITY) */}
        <div className="absolute inset-0 bg-black/65 z-0" />

        {/* CONTENT ALWAYS ABOVE */}
        <div className="relative z-10 px-4 sm:px-6 max-w-4xl mt-2 sm:mt-4">
          <h1 className="about-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-tight">
            <span className="block">We Engineer</span>
            <span className="block text-transparent bg-gradient-to-r from-[#0ff] via-[#00e4e4] to-[#0ff] bg-clip-text mt-2">
              The Future
            </span>
          </h1>

          <p className="about-sub text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-4 md:mt-6 leading-relaxed max-w-2xl mx-auto">
            Robotics • Industrial Automation • AI • Web Systems
            <br className="hidden sm:inline" />
            <span className="text-[#0ff] font-semibold block mt-3">
              Real systems that win competitions and solve real-world problems.
            </span>
          </p>
        </div>
      </section>

      {/* ================ STORY ================== */}
      <section className="py-28 reveal bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              We don’t do PPT projects —
              <span className="block text-transparent bg-gradient-to-r from-[#0ff] to-[#00e4e4] bg-clip-text mt-3">
                We build working systems.
              </span>
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed">
              Mechatronics • Control systems • Industrial automation • AI ops
              <br />
              <span className="text-[#0ff] block mt-4 font-semibold">
                If it doesn’t move, detect, respond → we rebuild it.
              </span>
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#0ff]/30 shadow-xl">
            <img src={AboutCrausel} alt="A5X workshops" loading="lazy" className="object-cover w-full h-56 sm:h-72 md:h-96" />
          </div>
        </div>
      </section>

      {/* ================ DELIVERY ================== */}
      <section className="py-28 reveal bg-[#080F14]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">What We Deliver</h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Robotics • Embedded systems • Industrial automation • AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {[
              {
                icon: "🤖",
                title: "Robotics",
                desc: "PID • UAV • Maze Solver • Servos • CV",
              },
              {
                icon: "⚙️",
                title: "Industrial Automation",
                desc: "PLC • SCADA • VFD • Sensors • Industry 4.0",
              },
              {
                icon: "💻",
                title: "AI Systems",
                desc: "Dashboards • CV • IoT • Admin panels",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="p-6 sm:p-8 bg-[#0c151b] border border-[#0ff]/20 rounded-3xl hover:border-[#0ff] hover:shadow-[0_0_35px_#0ff4] transition flex flex-col items-start sm:items-center text-left sm:text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl">{c.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mt-4">{c.title}</h3>
                <p className="mt-3 text-gray-300 text-sm sm:text-base">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ COMPETITIONS ================== */}
      <section className="py-28 reveal bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Built to win
              <span className="text-transparent bg-gradient-to-r from-[#0ff] to-[#00e4e4] bg-clip-text ml-3">
                Competitions
              </span>
            </h2>

            <p className="mt-7 text-gray-300 text-lg leading-relaxed">
              IIT Techfest • E-Yantra • SIH • Robowars
            </p>

            <div className="flex gap-4 flex-wrap mt-8">
              {["Techfest", "E-Yantra", "SIH", "Robowars"].map((i) => (
                <span
                  key={i}
                  className="px-5 py-2 border border-[#0ff]/40 text-[#0ff] rounded-full bg-[#0ff]/10"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#0ff]/20 shadow-xl">
            <img src={TrainerImg} alt="A5X trainer" loading="lazy" className="object-cover w-full h-64 sm:h-80 md:h-96" />
          </div>

        </div>
      </section>

      {/* ================ CTA ================== */}
      <section className="py-16 reveal text-center bg-gradient-to-r from-[#001012] to-black px-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Ready to build something{" "}
          <span className="text-transparent bg-gradient-to-r from-[#0ff] to-[#00e4e4] bg-clip-text">
            Extraordinary?
          </span>
        </h3>

        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Let’s create competition-grade systems together.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="w-full sm:w-auto px-6 py-3 bg-[#0ff] text-black font-semibold rounded-full hover:scale-105 transition">
            Start Your Project
          </button>
        </div>
      </section>

    </main>
  );
}
