// frontend/src/pages/Workshop.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import workshopImg from "../assets/workshop.png";
import droneImg from "../assets/Droneus.png";
import roboImg from "../assets/robo.png"

gsap.registerPlugin(ScrollTrigger);

export default function WorkshopPage() {

  const heroRef = useRef(null);

  // ===================== TEXT SPLIT =====================
  useEffect(() => {
    if (!heroRef.current) return;

    // Only split the first span ("Premium Robotics") to avoid splitting the second line
    const splitTitle = new SplitType(".workshop-title span:first-child", { types: "chars" });
    const splitSub = new SplitType(".workshop-sub", { types: "words" });

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
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(splitSub.words, {
      opacity: 0,
      y: 24,
      stagger: 0.06,
      duration: 0.65,
      delay: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
      },
    });
  }, []);

  // ===================== CARD ANIMATION =====================
  useEffect(() => {
    gsap.utils.toArray(".ws-card").forEach((card) => {
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
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  // ===================== BADGE FADE =====================
  useEffect(() => {
    gsap.utils.toArray(".ws-badge").forEach((b) => {
      gsap.fromTo(
        b,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: b,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const workshops = [
    {
      title: "Robotics Fundamentals",
      tag: "Robotics",
      img: roboImg,
      desc:
        "Line follower, maze solver bots — sensors, PID, curve prediction, memory mapping and competitive tuning.",
    },
    {
      title: "Automation & PLC Bootcamp",
      tag: "Industry 4.0",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1800",
      desc:
        "PLC Ladder, VFD, Actuators, SCADA basics — build real automation flows like factories do.",
    },
    {
      title: "Drone & UAV Workshop",
      tag: "Aero",
      img: droneImg,
      desc:
        "ESC tuning, brushless motors, flight control, GPS hold, PID stabilization — from parts to air.",
    },
    {
      title: "Coding + Web Dev Labs",
      tag: "Software",
      img: "https://cdn.mos.cms.futurecdn.net/xCSAEp8DjjrT2UQB87AoFN-1920-80.jpg",
      desc:
        "Frontend basics, APIs, auth, dashboards, UI/UX — build portfolio grade products.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">

      {/* ============== HERO ============== */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] md:min-h-screen pt-32 md:pt-0 flex items-start md:items-center justify-center overflow-hidden text-center"
      >
        {/* BG Image Zoom Animation (same as video) */}
        <motion.img
          src={workshopImg}
          initial={{ scale: 1.25 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/95" />

        <div className="relative z-10 px-4 sm:px-6 max-w-7xl">
          <h1 className="workshop-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug md:leading-tight text-center break-normal">
            <span className="block whitespace-normal">Premium Robotics</span>
            <span className="block whitespace-normal">Workshops</span>
          </h1>

          <p className="workshop-sub mt-5 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Real machines • Real sensors • Real competitions.<br className="hidden sm:inline"/>
            Learn robotics the only way that works — hands-on.
          </p>
        </div>
      </section>

      {/* ============== WORKSHOP CARDS ============== */}
      <section className="py-20 bg-[#05080E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-4xl md:text-5xl font-semibold">
            Workshops We Offer
          </h2>
          <p className="mt-3 text-center text-gray-400 max-w-2xl mx-auto">
            Every session is engineered like a competition lab — not a slide-show class.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {workshops.map((w, i) => (
              <div
                key={i}
                className="ws-card rounded-3xl overflow-hidden border border-[#0ff2]/30 bg-[#05080F]/60 backdrop-blur-md hover:shadow-[0_0_40px_#00fff3] transition duration-300 flex flex-col"
              >
                <img src={w.img} alt={w.title} loading="lazy" className="w-full h-44 sm:h-56 md:h-64 object-cover" />

                <div className="p-6">
                  <span className="text-[#0ff] uppercase tracking-[0.25em] text-xs">
                    {w.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-3">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
                    {w.desc}
                  </p>
                  {/* <button className="mt-5 text-[#0ff] hover:text-white hover:underline text-sm">
                    View full workshop →
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== BADGES ============== */}
      <section className="py-14 bg-[#060C12] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold">Tools We Teach</h3>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs md:text-sm">
            {[
              "PID","ESP32","OpenCV","STM32","ROS",
              "LIDAR","Drone ESC","Tensorflow","Arduino","Computer Vision",
            ].map((t, i) => (
              <span
                key={i}
                className="ws-badge px-5 py-2 border border-[#0ff4] text-[#0ff]
                rounded-full bg-black/30 hover:bg-[#0ff1] hover:text-black transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="py-24 bg-[#02060D] border-t border-white/10">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-4xl font-bold">
            Want a workshop at your campus?
          </h2>
          <p className="mt-4 text-gray-400">
            Schools • Universities • Tech clubs<br/>
            We provide complete equipment, instructors and robot kits.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a
              href="/contact"
              className="block w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#0ff] text-black font-semibold hover:bg-[#00e4e4]"
              aria-label="Book a Workshop"
            >
              Book a Workshop
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="block w-full sm:w-auto text-center px-6 py-3 rounded-full border border-[#0ff] text-[#0ff] hover:bg-[#0ff1]"
              aria-label="Contact on WhatsApp"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
