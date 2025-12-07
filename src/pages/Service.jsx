// frontend/src/pages/Service.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import workshopImg from "../assets/workshop.png";
import guidenceImg from "../assets/guidence.png";
import backgroundImg from "../assets/background.png";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePage() {
  // ======== TEXT SPLIT ANIMATION ========
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    let splitTitle;
    let splitSub;
    try {
      const titleEl = heroRef.current.querySelector(".service-title");
      const subEl = heroRef.current.querySelector(".service-sub");
      if (titleEl) splitTitle = new SplitType(titleEl, { types: "chars" });
      if (subEl) splitSub = new SplitType(subEl, { types: "words" });

      if (splitTitle && splitTitle.chars) {
        gsap.from(splitTitle.chars, {
          y: 60,
          opacity: 0,
          rotationX: -90,
          stagger: 0.035,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      if (splitSub && splitSub.words) {
        gsap.from(splitSub.words, {
          opacity: 0,
          y: 25,
          stagger: 0.07,
          duration: 0.6,
          delay: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });
      }
    } catch (e) {
      // Fail gracefully if SplitType/DOM not ready
      // eslint-disable-next-line no-console
      console.warn("ServicePage: SplitType animation skipped", e);
    }

    return () => {
      if (splitTitle && typeof splitTitle.revert === "function") splitTitle.revert();
      if (splitSub && typeof splitSub.revert === "function") splitSub.revert();
      // cleanup ScrollTrigger instances created by these animations
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch (e) {
        // ignore
      }
    };
  }, []);

  // ======== CARD BATCH ANIMATION ========
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card, .agency-card");
    if (!cards || !cards.length) return;

    ScrollTrigger.batch(cards, {
      start: "top 85%",
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        }),
      onLeave: (batch) =>
        gsap.to(batch, { opacity: 0, y: 60, duration: 0.45 }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }),
      onLeaveBack: (batch) =>
        gsap.to(batch, { opacity: 0, y: -40, duration: 0.4 }),
    });

    return () => {
      try {
        ScrollTrigger.killAll();
      } catch (e) {}
    };
  }, []);

  // ======== BADGE FADE ========
  useEffect(() => {
    const badges = document.querySelectorAll(".service-badge");
    if (!badges || !badges.length) return;

    ScrollTrigger.batch(badges, {
      start: "top 92%",
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, scale: 1, duration: 0.45, stagger: 0.06, ease: "back.out(1.4)" }),
      onLeave: (batch) => gsap.to(batch, { opacity: 0, scale: 0.9, duration: 0.3 }),
    });

    return () => {
      try {
        ScrollTrigger.killAll();
      } catch (e) {}
    };
  }, []);

  return (
    <main className="pt-24 bg-[#02060D] text-white min-h-screen overflow-hidden">
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden"
      >
        {/* Background image zoom */}
        <motion.img
          src={backgroundImg}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/90" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="service-title text-5xl md:text-7xl font-bold leading-tight">
            Engineering • <span className="whitespace-nowrap">Automation</span> • Digital
          </h1>

          <p className="service-sub mt-5 text-gray-300 text-lg max-w-3xl mx-auto">
            We build robotics, industrial automation and technical digital
            systems engineered to perform — not just “projects”.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-[#05080E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-5xl font-semibold">
            Core Services
          </h2>

          <p className="mt-3 text-center text-gray-400 max-w-2xl mx-auto">
            From factory-floor automation to premium technical web experiences —
            our systems are designed to go from prototype to production.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: "https://data.tecniforge.com/2025/06/ai.jpg",
                title: "AI Automation",
                tag: "Automation",
                desc: "Computer vision, sensor fusion and PID-based control that run directly on your lines and test rigs.",
              },
              {
                img: "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2023/07/25174434/efc290acf4d2f1573b4a87aa3999508b.png",
                title: "Robotics Design + Manufacturing",
                tag: "Engineering",
                desc: "Line followers, AGVs, 5-DOF arms and drone systems — machined, wired and tuned like competition robots.",
              },
              {
                img: "https://cdn.mos.cms.futurecdn.net/xCSAEp8DjjrT2UQB87AoFN-1920-80.jpg",
                title: "Web Apps + Automation Dashboards",
                tag: "Digital",
                desc: "Real-time dashboards, admin panels and control UIs that talk directly to your bots and PLCs.",
              },
              {
                img: workshopImg,
                title: "Robotics & Tech Workshops",
                tag: "Education",
                desc: "Hands-on sessions on PID tuning, CV, ESP32 bots, maze solvers and complete competition-ready builds.",
              },
              {
                img: guidenceImg,
                title: "Competition Robotics Guidance",
                tag: "Mentorship",
                desc: "Help with IIT Techfest and other events — strategy, path planning, scoring mechanisms and debugging.",
              },
              {
                img: "https://tiimg.tistatic.com/fp/2/004/401/brochure-logo-banner-graphic-designing-service-306.jpg",
                title: "Brand + Logo Engineering",
                tag: "Digital",
                desc: "Futuristic, minimal branding and decks tailored for robotics, automation and deep-tech founders.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="service-card rounded-3xl overflow-hidden
                           border border-[#0ff4]/30 bg-[#061018]/60 backdrop-blur-md
                           hover:shadow-[0_0_40px_#0ff7]
                           transition duration-300 cursor-pointer"
              >
                <img src={s.img} className="w-full h-60 object-cover" />
                <div className="p-6">
                  <span className="text-[#0ff] text-xs tracking-[0.2em] uppercase">
                    {s.tag}
                  </span>

                  <h3 className="mt-3 text-xl md:text-2xl font-bold">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-gray-300 leading-relaxed text-sm">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Agency section (mirrors Services component) */}
          <div className="mt-12 relative">
            <div className="agency-card rounded-3xl overflow-hidden
                       border border-[#0ff4]/30 bg-[#061018]/60 backdrop-blur-md
                       transition duration-300">
              <div className="p-6 md:flex md:items-center md:justify-between">
                <div className="md:flex-1">
                  <div className="text-[#0ff] text-xs tracking-[0.2em] uppercase">
                    Agency
                  </div>

                  <h3 className="mt-3 text-2xl md:text-3xl font-bold">
                    Full-service Robotics & Tech Agency
                  </h3>

                  <p className="mt-3 text-gray-300 leading-relaxed max-w-3xl">
                    We craft product strategies, UX-focused dashboards, identity and go-to-market plans for robotics and automation companies — from prototype to launch.
                  </p>

                  <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-[#0ff] mt-1">●</span>
                      <span>Product strategy & roadmap tailored for hardware+software teams.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0ff] mt-1">●</span>
                      <span>Design and build of operator dashboards and admin portals.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0ff] mt-1">●</span>
                      <span>Branding, launch campaigns and partner integrations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0ff] mt-1">●</span>
                      <span>Retention & growth — telemetry-driven product improvements.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                  <a
                    href="/Agency"
                    className="inline-flex items-center gap-3
                               bg-gradient-to-r from-[#06f] to-[#0ff] text-black
                               px-5 py-3 rounded-lg font-semibold shadow-lg
                               transform transition-all duration-300 hover:scale-105"
                  >
                    Explore Agency
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-16 bg-[#060C12]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Technology Stack
          </h2>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Our robotics ecosystem blends embedded hardware, real-time control,
            cloud APIs and computer vision.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {[
              "ESP32",
              "STM32",
              "ROS",
              "OpenCV",
              "PID",
              "MongoDB",
              "Node.js",
              "React",
              "CAN-Bus",
              "LIDAR",
              "PLC",
              "TensorFlow",
            ].map((tag) => (
              <span
                key={tag}
                className="service-badge px-5 py-2 rounded-full
                           border border-[#0ff4] text-[#0ff]
                           bg-black/30 hover:bg-[#0ff1] hover:text-black
                           transition duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
