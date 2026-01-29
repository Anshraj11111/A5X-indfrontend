import { motion } from "framer-motion";
import useGsapRoboticsHero from "../hooks/useGsapRoboticsHero";
import useGsapSlideIn from "../hooks/useGsapSlideIn";
import cozmoImg from "../assets/cozmo.jpg";
import droneImg from "../assets/drone.png";

import { useGsapFromLeft, useGsapFromRight } from "../hooks/useGsapLeftRight";

export default function RoboticsPage() {

  // Hero text animation
  const heroRef = useGsapRoboticsHero();

  // Project cards slide from bottom
  useGsapSlideIn(".robotics-card");

  // Tech stack badges slide from left
  useGsapFromLeft(".robotics-badge");

  return (
    <main className="pt-24 bg-black text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-[55vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <motion.img
          src="https://img.freepik.com/premium-photo/robot-with-black-background-dark-background_916191-348637.jpg?auto=format&w=1920&q=80"
          initial={{ scale: 1.15, y: 0, rotate: 0 }}
          animate={{
            scale: [1.15, 1.06, 1.15],
            y: [0, -10, 0],
            rotate: [0, 0.45, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.38] will-change-transform"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <h1 className="robotics-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Robotics Designed <br /> Real-World Application
          </h1>

          <p className="robotics-sub mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            From PID line followers to industrial robotic arms — we engineer bots that compete, automate and deliver.
          </p>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="py-20 bg-[#05080F] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
            Featured Robotics
          </h2>
          <p className="mt-3 text-center text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Built like competition machines — not prototypes.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: droneImg,
                title: "Parm size drone ",
                desc: "2600mm/s track speed, PID tuning, curve prediction.",
              },
              {
                img: "https://hackster.imgix.net/uploads/attachments/1205773/slfr-v4-010_CZ8bCyDJ8M.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
                title: "Maze Solver — DFS Memory",
                desc: "Memory mapping, path reconstruction, no external input.",
              },
              {
                img: cozmoImg,
                title: "Cozmoclanche Bot ",
                desc: "Servo kinematics, arc welding, industrial automation.",
              },
              

            ].map((p) => (
              <div
                key={p.title}
                className="robotics-card rounded-3xl overflow-hidden border border-[#0ff3]/40
                           bg-[#061018]/70 backdrop-blur-lg
                           hover:shadow-[0_0_40px_#0ff7] transition duration-300 flex flex-col"
              >
                <img src={p.img} className="w-full h-44 sm:h-56 md:h-60 object-cover" />
                <div className="p-5 sm:p-6 flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-gray-300 text-sm leading-relaxed">{p.desc}</p>
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
            Hardware + AI Stack
          </h2>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            The tech we use to make robots move, sense and adapt.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            {[
              "PID",
              "STM32",
              "ESP32",
              "ROS",
              "OpenCV",
              "Arduino",
              "Optical Sensors",
              "AI Motion",
              "LIDAR",
              "OLED Displays",
            ].map((s) => (
              <span
                key={s}
                className="robotics-badge px-5 py-2 rounded-full border border-[#0ff6] text-[#0ff]
                           bg-black/30 hover:bg-[#0ff1] hover:text-black transition duration-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
