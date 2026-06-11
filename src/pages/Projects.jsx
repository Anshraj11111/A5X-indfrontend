// frontend/src/pages/Projects.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

import FPVImg   from "../assets/fpv.jpeg";
import DRImg    from "../assets/DRrobo.png";
import RCImg    from "../assets/RC.jpeg";
import Proj2Img from "../assets/Project2.png";

/* ─── Featured Projects ─────────────────────────────────────────── */
const featured = [
  {
    id: "dr-robot",
    category: "Robotics",
    title: "DEX Bot",
    desc: "A fully custom-engineered robotics platform built from the ground up — custom PCB, 3D-printed chassis and real-time embedded firmware for autonomous operation.",
    img: DRImg,
    tags: ["Embedded C", "Custom PCB", "3D Printing"],
    details: {
      overview: "DEX Bot is A5X's flagship robotics build. Every component — from the PCB traces to the body panels — was engineered in-house. The bot features sensor-based navigation, modular attachment points and a real-time control system capable of responding in milliseconds.",
      highlights: [
        "Custom PCB designed and fabricated in-house",
        "3D-printed modular chassis for easy hardware upgrades",
        "Real-time embedded C firmware with PID motor control",
        "Obstacle detection via ultrasonic and IR sensors",
        "Wireless control interface for remote operation",
      ],
    },
  },
  {
    id: "fpv-drone",
    category: "Drone Technology",
    title: "FPV Racing Drone",
    desc: "High-performance FPV drone designed and assembled in-house. Tuned for agility and precision with custom motor configurations and flight controller firmware.",
    img: FPVImg,
    tags: ["Flight Controller", "Motor Tuning", "FPV Systems"],
    details: {
      overview: "Built entirely by the A5X team, this FPV racing drone was designed for speed, agility and reliability. Every component was hand-selected and tuned — from the brushless motors to the flight controller PID loops — to deliver a machine that performs under real race conditions.",
      highlights: [
        "Custom frame geometry optimised for high-speed flight",
        "Brushless motors with hand-tuned PID flight controller",
        "Low-latency FPV camera and video transmission system",
        "Carbon fibre arms for maximum rigidity at minimum weight",
        "Designed and tested at A5X workshop facilities",
      ],
    },
  },
  {
    id: "robo-soccer",
    category: "Robotics",
    title: "Robo Soccer Bot",
    desc: "Competition-grade soccer bot engineered for precision movement, real-time strategy and robust mechanical design. Built for inter-college robotics tournaments.",
    img: Proj2Img,
    tags: ["Motor Control", "C++", "Mechanical Design", "Circuit"],
    details: {
      overview: "The Robo Soccer Bot was built for inter-college competition, where every millisecond and millimeter counts. A5X engineered it with a low-center-of-gravity chassis, omni-directional drive for tight manoeuvring and a real-time strategy controller that handles both attack and defense autonomously.",
      highlights: [
        "Omni-directional drive system for 360° movement",
        "Custom C++ firmware with real-time strategy logic",
        "Robust mechanical frame with impact-absorbing joints",
        "IR-based ball detection and tracking system",
        "Competition-tested at inter-college robotics events",
      ],
    },
  },
  {
    id: "robo-race",
    category: "Robotics",
    title: "Robo Race",
    desc: "A high-speed autonomous racing robot engineered for line-following and maze-solving competitions. Precision-tuned sensors and a reactive control system built for speed.",
    img: RCImg,
    tags: ["Line Following", "Embedded C", "Sensor Array", "PID Control"],
    details: {
      overview: "Robo Race is A5X's competition-grade autonomous racing bot. Designed to dominate line-following and maze-solving events, it uses a high-density IR sensor array paired with a finely tuned PID algorithm that makes split-second course corrections at full speed. Lightweight, fast and battle-tested.",
      highlights: [
        "8-sensor IR array for precise line detection",
        "PID control loop tuned for high-speed cornering",
        "Lightweight chassis designed for minimal drag",
        "Embedded C firmware with real-time sensor processing",
        "Competed and placed at multiple inter-college robotics events",
      ],
    },
  },
];

/* ─── Technology Areas ──────────────────────────────────────────── */
const techAreas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.309 48.309 0 01-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    label: "Robotics",
    desc: "Custom bots, mechatronic systems and competition-grade machines.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    label: "Drone Technology",
    desc: "FPV systems, autonomous UAVs and precision aerial platforms.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    label: "AI Systems",
    desc: "Machine learning models, CV pipelines and intelligent dashboards.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
      </svg>
    ),
    label: "Embedded Systems",
    desc: "Custom PCBs, microcontroller firmware and real-time control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Computer Vision",
    desc: "Object detection, image classification and real-time video analysis.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    label: "IoT Solutions",
    desc: "Connected devices, sensor networks and smart infrastructure.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "Automation",
    desc: "Process automation, scheduling systems and workflow engines.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    label: "Web Platforms",
    desc: "Full-stack applications, APIs and enterprise-grade dashboards.",
  },
];

/* ─── Process Steps ─────────────────────────────────────────────── */
const process = [
  {
    step: "01",
    label: "Discover",
    desc: "Define goals and constraints",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
  },
  {
    step: "02",
    label: "Design",
    desc: "Architecture and system planning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    step: "03",
    label: "Build",
    desc: "Engineering and development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    step: "04",
    label: "Test",
    desc: "Validation and quality assurance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "05",
    label: "Deploy",
    desc: "Launch and handover",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

/* ─── Stats ─────────────────────────────────────────────────────── */
const stats = [
  { value: "20+",  label: "Projects Delivered",    sub: "Across robotics, AI, software & drones" },
  { value: "1000+", label: "Students Trained",       sub: "Through workshops and bootcamps" },
  { value: "50+",  label: "Workshops Conducted",    sub: "At schools, colleges and organisations" },
  { value: "20+",  label: "Technologies Mastered",  sub: "From embedded to cloud platforms" },
];

/* ─── Page ──────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [expanded, setExpanded] = useState(null);

  function toggle(id) {
    setExpanded((prev) => (prev === id ? null : id));
  }

  return (
    <main className="bg-[#050505] text-white overflow-x-hidden">

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20 pb-0 overflow-hidden">

        {/* subtle grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,168,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,168,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* radial glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,168,255,0.07) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">

            {/* LEFT — text */}
            <div className="py-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-[#00A8FF]" />
                <span className="text-[10px] tracking-[0.45em] text-[#00A8FF] uppercase font-bold">A5X Industries — Our Work</span>
              </div>

              <h1 className="font-black text-white leading-[1.0]"
                style={{ fontSize: "clamp(2.8rem,5.5vw,5.2rem)", letterSpacing: "-0.03em" }}>
                Engineering<br />
                Innovation.<br />
                <span style={{ color: "#00A8FF" }}>Built For The<br />Real World.</span>
              </h1>

              <p className="mt-8 text-gray-400 leading-[1.85]" style={{ fontSize: "16px", maxWidth: "480px" }}>
                From autonomous robots and FPV drones to AI systems and full-stack platforms —
                A5X Industries engineers real solutions that work outside the lab.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a href="#featured"
                  className="inline-flex items-center gap-3 font-bold uppercase transition-colors hover:bg-[#0090e0]"
                  style={{ background: "#00A8FF", color: "#050505", padding: "14px 28px", fontSize: "11px", letterSpacing: "0.16em" }}>
                  Explore Solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link to="/contact"
                  className="inline-flex items-center gap-3 font-bold uppercase border transition-colors hover:border-[#00A8FF] hover:text-[#00A8FF]"
                  style={{ border: "1px solid rgba(255,255,255,0.18)", color: "white", padding: "14px 28px", fontSize: "11px", letterSpacing: "0.16em" }}>
                  Start A Project
                </Link>
              </div>

              {/* quick stat strip */}
              <div className="mt-14 flex gap-10 border-t border-white/8 pt-10">
                {[{ v: "50+", l: "Projects" }, { v: "500+", l: "Students" }, { v: "10+", l: "Technologies" }].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-extrabold text-white">{s.v}</div>
                    <div className="text-[11px] text-gray-500 tracking-wider uppercase mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — project photo composition */}
            <div className="hidden lg:flex items-center justify-end py-20">
              <div className="relative w-full" style={{ maxWidth: "580px", height: "600px" }}>

                {/* main large card */}
                <div className="absolute"
                  style={{ top: 0, left: "10%", width: "75%", height: "62%", zIndex: 3 }}>
                  <div className="w-full h-full overflow-hidden border border-white/10"
                    style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.7)" }}>
                    <img src={DRImg} alt="DEX Bot" className="w-full h-full object-cover object-center brightness-90" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,.6) 0%, transparent 50%)" }} />
                    <div className="absolute bottom-4 left-5">
                      <span className="text-[9px] tracking-[0.35em] text-[#00A8FF] uppercase font-bold">Robotics</span>
                      <p className="text-white font-bold text-sm mt-0.5">DEX Bot</p>
                    </div>
                  </div>
                </div>

                {/* bottom-left card */}
                <div className="absolute"
                  style={{ bottom: 0, left: 0, width: "48%", height: "42%", zIndex: 4 }}>
                  <div className="w-full h-full overflow-hidden border border-white/10"
                    style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
                    <img src={FPVImg} alt="FPV Drone" className="w-full h-full object-cover brightness-90" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,.65) 0%, transparent 55%)" }} />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-[9px] tracking-[0.35em] text-[#00A8FF] uppercase font-bold">Drones</span>
                      <p className="text-white font-bold text-xs mt-0.5">FPV Drone</p>
                    </div>
                  </div>
                </div>

                {/* bottom-right card */}
                <div className="absolute"
                  style={{ bottom: 0, right: 0, width: "48%", height: "42%", zIndex: 4 }}>
                  <div className="w-full h-full overflow-hidden border border-white/10"
                    style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
                    <img src={Proj2Img} alt="Aura AI" className="w-full h-full object-cover brightness-90" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,.65) 0%, transparent 55%)" }} />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-[9px] tracking-[0.35em] text-[#00A8FF] uppercase font-bold">AI Systems</span>
                      <p className="text-white font-bold text-xs mt-0.5">Aura AI</p>
                    </div>
                  </div>
                </div>

                {/* accent dot grid */}
                <div className="absolute top-4 right-2 grid gap-1.5 pointer-events-none" style={{ gridTemplateColumns: "repeat(5,6px)", zIndex: 1 }}>
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-[3px] h-[3px] rounded-full bg-[#00A8FF]/25" />
                  ))}
                </div>

                {/* accent corner line */}
                <div className="absolute bottom-16 left-[-20px] w-10 h-[2px] bg-[#00A8FF]/40 pointer-events-none" />
                <div className="absolute bottom-16 left-[-20px] w-[2px] h-10 bg-[#00A8FF]/40 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. FEATURED WORK
      ══════════════════════════════════════════ */}
      <section id="featured" className="py-28 border-t border-white/6">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">

          {/* section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#00A8FF]" />
                <span className="text-[10px] tracking-[0.4em] text-[#00A8FF] uppercase font-bold">Featured Work</span>
              </div>
              <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Projects That<br />Define Us
              </h2>
            </div>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/6 border border-white/6">
            {featured.map((p) => (
              <article key={p.id} className="group bg-[#050505] hover:bg-[#071426] transition-colors duration-300 flex flex-col">
                {/* image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover brightness-80 group-hover:brightness-95 group-hover:scale-[1.03] transition-all duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,.7) 0%, rgba(5,5,5,.1) 50%, transparent 100%)" }} />
                  <div className="absolute top-5 left-5">
                    <span className="text-[9px] tracking-[0.35em] text-[#00A8FF] uppercase font-bold bg-[#050505]/80 border border-[#00A8FF]/25 px-3 py-1.5 backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-white font-extrabold text-xl mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-[1.8] flex-1">{p.desc}</p>

                  {/* tech tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] tracking-wider text-gray-500 border border-white/8 px-2.5 py-1 uppercase font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* View Details toggle */}
                  <button
                    onClick={() => toggle(p.id)}
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#00A8FF] uppercase hover:gap-4 transition-all self-start"
                  >
                    {expanded === p.id ? "Hide Details" : "View Details"}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded === p.id ? "rotate-90" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  {/* Inline expand panel */}
                  {expanded === p.id && (
                    <div className="mt-6 border-t border-white/8 pt-6 animate-fadeIn">
                      <p className="text-gray-300 text-sm leading-[1.9] mb-5">{p.details.overview}</p>
                      <ul className="flex flex-col gap-2.5">
                        {p.details.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#00A8FF] flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. TECHNOLOGY AREAS
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/6 bg-[#071426]/40">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#00A8FF]" />
              <span className="text-[10px] tracking-[0.4em] text-[#00A8FF] uppercase font-bold">Capabilities</span>
              <div className="w-6 h-[2px] bg-[#00A8FF]" />
            </div>
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
              Technology Areas
            </h2>
            <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Eight core domains where A5X builds, trains and deploys real engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/6 border border-white/6">
            {techAreas.map((t) => (
              <div key={t.label}
                className="group bg-[#050505] hover:bg-[#071426] transition-colors duration-300 p-8 flex flex-col gap-4 cursor-default">
                <div className="w-11 h-11 border border-[#00A8FF]/20 flex items-center justify-center text-[#00A8FF] group-hover:border-[#00A8FF]/50 group-hover:bg-[#00A8FF]/5 transition-colors">
                  {t.icon}
                </div>
                <h4 className="text-white font-bold text-sm tracking-wide">{t.label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. IMPACT — STATS
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/6">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-[2px] bg-[#00A8FF]" />
                <span className="text-[10px] tracking-[0.4em] text-[#00A8FF] uppercase font-bold">Impact</span>
              </div>
              <h2 className="font-extrabold text-white leading-tight" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
                Real Numbers.<br />Real Impact.
              </h2>
              <p className="mt-5 text-gray-400 text-sm leading-[1.9] max-w-md">
                A5X Industries has delivered engineering solutions, trained the next generation of builders
                and built technology that works beyond the classroom.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/6 border border-white/6">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#050505] hover:bg-[#071426] transition-colors duration-300 p-8 flex flex-col gap-2">
                  <div className="font-extrabold text-white" style={{ fontSize: "clamp(2.4rem,4vw,3.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}>
                    {s.value}
                  </div>
                  <div className="w-8 h-[2px] bg-[#00A8FF]" />
                  <div className="text-white font-bold text-sm mt-1">{s.label}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. DEVELOPMENT PROCESS
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/6 bg-[#071426]/30">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#00A8FF]" />
              <span className="text-[10px] tracking-[0.4em] text-[#00A8FF] uppercase font-bold">How We Work</span>
              <div className="w-6 h-[2px] bg-[#00A8FF]" />
            </div>
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
              Development Process
            </h2>
          </div>

          {/* horizontal timeline */}
          <div className="relative">
            {/* connector line */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-white/8 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((s, i) => (
                <div key={s.step} className="relative z-10 flex flex-col items-center text-center group">
                  {/* icon circle */}
                  <div className="w-14 h-14 border border-[#00A8FF]/25 bg-[#050505] flex items-center justify-center text-[#00A8FF] mb-5 group-hover:border-[#00A8FF]/70 group-hover:bg-[#00A8FF]/5 transition-colors">
                    {s.icon}
                  </div>
                  <span className="text-[9px] tracking-[0.3em] text-[#00A8FF] uppercase font-bold mb-1">{s.step}</span>
                  <h4 className="text-white font-bold text-sm mb-2">{s.label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                  {/* connector arrow — desktop only */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] text-white/15 text-xs">›</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. COMMUNITY BANNER
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/6">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="relative overflow-hidden border border-white/8 bg-[#071426]"
            style={{ padding: "60px 64px" }}>

            {/* subtle blueprint grid */}
            <div className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,168,255,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,168,255,0.08) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
            {/* glow */}
            <div className="absolute right-0 top-0 w-96 h-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse at right, rgba(0,168,255,0.06) 0%, transparent 70%)" }} />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-[2px] bg-[#00A8FF]" />
                  <span className="text-[10px] tracking-[0.4em] text-[#00A8FF] uppercase font-bold">Community</span>
                </div>
                <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                  Join The A5X<br />Community
                </h2>
                <p className="mt-4 text-gray-400 text-sm leading-[1.85] max-w-md">
                  Connect with innovators, students, developers and engineers who are building
                  the future of technology together.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/contact"
                  className="inline-flex items-center gap-3 font-bold uppercase transition-all hover:gap-5"
                  style={{ background: "#00A8FF", color: "#050505", padding: "15px 32px", fontSize: "11px", letterSpacing: "0.16em" }}>
                  Join Community
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. CLIENT CTA
      ══════════════════════════════════════════ */}
      <section className="relative py-36 border-t border-white/6 overflow-hidden">

        {/* PCB / blueprint pattern background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,168,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,168,255,0.035) 1px, transparent 1px),
              linear-gradient(rgba(0,168,255,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,168,255,0.015) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
          }}
        />
        {/* PCB dot nodes */}
        {[
          { top: "20%", left: "15%" }, { top: "60%", left: "8%" },
          { top: "35%", right: "12%" }, { top: "75%", right: "20%" },
          { top: "50%", left: "45%" },
        ].map((pos, i) => (
          <div key={i} className="absolute w-2 h-2 rounded-full border border-[#00A8FF]/20 pointer-events-none" style={pos} />
        ))}
        {/* glow center */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,168,255,0.04) 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-[#00A8FF]" />
            <span className="text-[10px] tracking-[0.4em] text-[#00A8FF] uppercase font-bold">Let's Build Together</span>
            <div className="w-6 h-[2px] bg-[#00A8FF]" />
          </div>

          <h2 className="font-black text-white mx-auto" style={{ fontSize: "clamp(2.8rem,7vw,6.5rem)", letterSpacing: "-0.03em", lineHeight: "0.95", maxWidth: "900px" }}>
            Have An Idea?<br />
            <span style={{ color: "#00A8FF" }}>Let's Build It<br />Together.</span>
          </h2>

          <p className="mt-8 text-gray-400 text-base leading-[1.9] mx-auto" style={{ maxWidth: "560px" }}>
            From robotics and AI to software and automation, A5X Industries transforms
            concepts into real-world solutions that work, scale and last.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Link to="/contact"
              className="inline-flex items-center gap-3 font-bold uppercase transition-all hover:bg-[#0090e0]"
              style={{ background: "#00A8FF", color: "#050505", padding: "16px 36px", fontSize: "12px", letterSpacing: "0.16em" }}>
              Start Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/contact"
              className="inline-flex items-center gap-3 font-bold uppercase border transition-colors hover:border-[#00A8FF] hover:text-[#00A8FF]"
              style={{ border: "1px solid rgba(255,255,255,0.18)", color: "white", padding: "16px 36px", fontSize: "12px", letterSpacing: "0.16em" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
