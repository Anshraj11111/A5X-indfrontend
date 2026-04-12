// frontend/src/pages/Service.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import workshopImg from "../assets/workshop.png";
import guidenceImg from "../assets/guidence.png";
import backgroundImg from "../assets/background.png";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePage() {

  // Card batch animation
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
    });

    return () => {
      try {
        ScrollTrigger.killAll();
      } catch (e) {}
    };
  }, []);

  // Badge fade
  useEffect(() => {
    const badges = document.querySelectorAll(".service-badge");
    if (!badges || !badges.length) return;

    ScrollTrigger.batch(badges, {
      start: "top 92%",
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, scale: 1, duration: 0.45, stagger: 0.06, ease: "back.out(1.4)" }),
    });

    return () => {
      try {
        ScrollTrigger.killAll();
      } catch (e) {}
    };
  }, []);

  return (
    <main className="pt-24 bg-[#02060D] text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">
        <img
          src={backgroundImg}
          alt="Service background"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35] bg-zoom-animation"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/90" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="service-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Engineering • Automation • Digital
          </h1>

          <p className="service-sub mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            We build robotics, industrial automation and technical digital
            systems engineered to perform — not just "projects".
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[#05080E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
            Core Services
          </h2>

          <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            From factory-floor automation to premium technical web experiences —
            our systems are designed to go from prototype to production.
          </p>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                className="service-card opacity-0 translate-y-10 rounded-3xl overflow-hidden
                           border border-cyan-400/30 bg-[#061018]/60 backdrop-blur-md
                           hover:shadow-[0_0_40px_rgba(0,255,255,0.5)]
                           transition duration-300 cursor-pointer"
              >
                <img src={s.img} alt={s.title} className="w-full h-52 sm:h-60 object-cover" />
                <div className="p-5 sm:p-6">
                  <span className="text-cyan-400 text-xs tracking-wider uppercase">
                    {s.tag}
                  </span>

                  <h3 className="mt-3 text-xl md:text-2xl font-bold">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-gray-300 leading-relaxed text-sm md:text-base">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Agency section */}
          <div className="mt-12 relative">
            <div className="agency-card opacity-0 translate-y-10 rounded-3xl overflow-hidden
                       border border-cyan-400/30 bg-[#061018]/60 backdrop-blur-md
                       transition duration-300">
              <div className="p-6 md:p-8 md:flex md:items-center md:justify-between gap-8">
                <div className="md:flex-1">
                  <div className="text-cyan-400 text-xs tracking-wider uppercase">
                    Agency
                  </div>

                  <h3 className="mt-3 text-2xl md:text-3xl font-bold">
                    Full-service Robotics & Tech Agency
                  </h3>

                  <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl text-base md:text-lg">
                    We craft product strategies, UX-focused dashboards, identity and go-to-market plans for robotics and automation companies — from prototype to launch.
                  </p>

                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">●</span>
                      <span>Product strategy & roadmap tailored for hardware+software teams.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">●</span>
                      <span>Design and build of operator dashboards and admin portals.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">●</span>
                      <span>Branding, launch campaigns and partner integrations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">●</span>
                      <span>Retention & growth — telemetry-driven product improvements.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 md:mt-0 flex-shrink-0">
                  <a
                    href="/Agency"
                    className="inline-flex items-center gap-3
                               bg-gradient-to-r from-blue-600 to-cyan-400 text-black
                               px-6 py-3 rounded-lg font-bold shadow-lg
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

      {/* TECH STACK */}
      <section className="py-16 md:py-20 bg-[#060C12]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Technology Stack
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Our robotics ecosystem blends embedded hardware, real-time control,
            cloud APIs and computer vision.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base">
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
                className="service-badge opacity-0 scale-90 px-4 md:px-5 py-2 rounded-full
                           border border-cyan-400/40 text-cyan-400
                           bg-black/30 hover:bg-cyan-400/10 hover:text-cyan-300
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
