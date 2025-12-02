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

    const splitTitle = new SplitType(".service-title", { types: "chars" });
    const splitSub = new SplitType(".service-sub", { types: "words" });

    // Heading chars
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
        toggleActions: "play reverse play reverse", // aao -> jao
      },
    });

    // Sub text words
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

    return () => {
      splitTitle.revert();
      splitSub.revert();
    };
  }, []);

  // ======== CARD BATCH ANIMATION ========
  useEffect(() => {
    const cards = gsap.utils.toArray(".service-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  // ======== BADGE FADE ========
  useEffect(() => {
    const badges = gsap.utils.toArray(".service-badge");
    badges.forEach((badge) => {
      gsap.fromTo(
        badge,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: badge,
            start: "top 90%",
            end: "bottom 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <main className="pt-24 bg-[#02060D] text-white min-h-screen overflow-hidden">
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden"
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
            Engineering • Automation • Digital
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
