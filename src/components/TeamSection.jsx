// frontend/src/components/TeamSection.jsx
import { useEffect, useRef } from "react";
import useTeam from "../hooks/useTeam";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// === images ===
import anshImg from "../assets/Ansh.png";
import adityaImg from "../assets/Aditya.jpg";
import amitImg from "../assets/Amit.jpg";
import chrisImg from "../assets/Chris.jpg";
import anupamImg from "../assets/Anupam.jpg"

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const heroRef = useRef(null);
  
  const Team = useTeam();

  useEffect(() => {
    if (!heroRef.current) return;

    const splitTitle = new SplitType(".team-title", { types: "chars" });
    const splitSub = new SplitType(".team-sub", { types: "words" });

    gsap.from(splitTitle.chars, {
      y: 70,
      opacity: 0,
      rotationX: -70,
      stagger: 0.035,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 75%",
      },
    });

    gsap.from(splitSub.words, {
      y: 25,
      opacity: 0,
      stagger: 0.07,
      duration: 0.6,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const team = [
    {
      name: "Ansh Raj Baghel",
      role: "Co-Founder & Full-Stack Lead",
      photo: anshImg,
      bio: "💻 Turns caffeine into clean code. The backbone of every digital magic we create. ☕✨",
    },
    {
      name: "Aditya Mishra",
      role: "Co-Founder & Software Dev",
      photo: adityaImg,
      bio: "🧠 Writes code so smooth, even bugs give up. UI? Logic? Speed? He owns it. ⚡🖥️",
    },
    {
      name: "Anupam Mishra",
      role: "Co-Founder & AIML Software Lead",
      photo: anupamImg,
      bio: "Predicts the future before algorithms even learn it. Brains + Machine = Innovation. 🧠⚙️",
    },
    {
      name: "Chris Alex Francis",
      role: "Co-Founder & IoT + Robotics Lead",
      photo: chrisImg,
      bio: "Makes ideas move, blink & fly. If it's hardware, Chris already cracked it. ⚡🤖",
    },
    {
      name: "Amit Payasi",
      role: "Co-Founder & Hardware Lead",
      photo: amitImg,
      bio: "🔩 Soldering, circuits, sensors — if it's noisy & technical, Amit loves it. 🔥🔌",
    },
  ];

  return (
    <section className="pb-24">
      {/* ===== HERO ===== */}
      <div
        ref={heroRef}
        className="relative min-h-[60vh] flex flex-col justify-center items-center text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,.15),transparent_70%)]"
        />

        <div className="relative z-10 px-6">
          <h1 className="team-title text-5xl md:text-7xl font-bold">
            Meet the Co-Founders
          </h1>

          <p className="team-sub mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Engineers who design, code and build robots — not PPTs.
          </p>
        </div>
      </div>

      {/* ===== CARDS ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="group rounded-3xl backdrop-blur-md bg-[#0a0d11]/60
              border border-[#0ff4]/20 overflow-hidden relative hover:border-[#0ff]"
          >
            {/* FIXED IMAGE — Bigger Height */}
            <div className="w-full h-80 sm:h-96 overflow-hidden">
              <img
                src={m.photo}
                alt={m.name}
                className="w-full h-full object-cover object-top 
                group-hover:scale-110 transition duration-[800ms]"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{m.name}</h3>
              <p className="text-[#0ff] text-xs tracking-[0.15em] uppercase mt-1">
                {m.role}
              </p>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">{m.bio}</p>
            </div>

            {/* Neon hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none transition">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.4),transparent_70%)]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <div className="mt-24 text-center">
        <h3 className="text-3xl font-semibold">
          Want to collaborate or join?
        </h3>
        <p className="mt-2 text-gray-400">
          We love real builders — not theorists.
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <a
            href="/contact"
            className="px-8 py-3 bg-[#0ff] text-black font-bold rounded-full hover:bg-[#06e3e3] shadow-[0_0_25px_#0ff6]"
          >
            Contact Team
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="px-8 py-3 border border-[#0ff] text-[#0ff] rounded-full hover:bg-[#0ff1]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
