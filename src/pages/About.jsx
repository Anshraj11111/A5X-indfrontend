// frontend/src/pages/About.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutHero from "../assets/About.png";
import AboutCrausel from "../assets/Aboutcrausel.png";
import TrainerImg from "../assets/trainerabout.png";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const animationsInitialized = useRef(false);

  // Simple fade-in animations without SplitType
  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationsInitialized.current || typeof window === "undefined") return;

      try {
        const titleEl = document.querySelector(".about-title");
        const subEl = document.querySelector(".about-sub");

        if (titleEl) {
          gsap.from(titleEl, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2,
          });
        }

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

    return () => clearTimeout(timer);
  }, []);

  // Scroll reveal animations
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
            },
          });
        });
      } catch (err) {
        console.error("Scroll reveal error:", err);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      try {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger && trigger.kill) trigger.kill();
        });
      } catch (e) {}
    };
  }, []);

  return (
    <main className="bg-black text-white pt-16 md:pt-0">

      {/* HERO */}
      <section
        className="relative min-h-[70vh] md:min-h-screen pt-20 md:pt-0 flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${AboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />

        <div className="relative z-10 px-4 sm:px-6 max-w-4xl">
          <h1 className="about-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block text-white">We Engineer</span>
            <span className="block text-cyan-400 mt-2">
              The Future
            </span>
          </h1>

          <p className="about-sub text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-6 md:mt-8 leading-relaxed max-w-2xl mx-auto">
            Robotics • Industrial Automation • AI • Web Systems
            <br className="hidden sm:inline" />
            <span className="text-cyan-400 font-bold block mt-4">
              Real systems that win competitions and solve real-world problems.
            </span>
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 md:py-28 reveal bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-14">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              We don't do PPT projects —
              <span className="block text-cyan-400 mt-3">
                We build working systems.
              </span>
            </h2>

            <p className="mt-6 md:mt-8 text-gray-300 text-base md:text-lg leading-relaxed">
              Mechatronics • Control systems • Industrial automation • AI ops
              <br />
              <span className="text-cyan-400 block mt-4 font-bold">
                If it doesn't move, detect, respond → we rebuild it.
              </span>
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-cyan-400/30 shadow-xl">
            <img src={AboutCrausel} alt="A5X workshops" loading="lazy" className="object-cover w-full h-64 sm:h-80 md:h-96" />
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="py-20 md:py-28 reveal bg-[#080F14]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">What We Deliver</h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 max-w-xl mx-auto">
            Robotics • Embedded systems • Industrial automation • AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">
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
                className="p-6 sm:p-8 bg-[#0c151b] border border-cyan-400/20 rounded-3xl hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] transition flex flex-col items-center text-center"
              >
                <div className="text-5xl md:text-6xl">{c.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mt-4">{c.title}</h3>
                <p className="mt-3 text-gray-300 text-sm sm:text-base">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIONS */}
      <section className="py-20 md:py-28 reveal bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Built to win
              <span className="text-cyan-400 ml-3">
                Competitions
              </span>
            </h2>

            <p className="mt-6 md:mt-7 text-gray-300 text-base md:text-lg leading-relaxed">
              IIT Techfest • E-Yantra • SIH • Robowars
            </p>

            <div className="flex gap-3 md:gap-4 flex-wrap mt-6 md:mt-8">
              {["Techfest", "E-Yantra", "SIH", "Robowars"].map((i) => (
                <span
                  key={i}
                  className="px-4 md:px-5 py-2 border border-cyan-400/40 text-cyan-400 rounded-full bg-cyan-400/10 text-sm md:text-base"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-cyan-400/20 shadow-xl">
            <img src={TrainerImg} alt="A5X trainer" loading="lazy" className="object-cover w-full h-64 sm:h-80 md:h-96" />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 reveal text-center bg-gradient-to-r from-[#001012] to-black px-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Ready to build something{" "}
          <span className="text-cyan-400">
            Extraordinary?
          </span>
        </h3>

        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Let's create competition-grade systems together.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/contact"
            className="w-full sm:w-auto px-8 py-3 bg-cyan-400 text-black font-bold rounded-full hover:bg-cyan-300 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>

    </main>
  );
}
