// frontend/src/components/RoboticsShowcase.jsx
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      delay: i * 0.08,
      ease: [0.19, 1, 0.22, 1], // Premium spring-like UI
    },
  }),
};

const projects = [
  {
    name: "LFR — Line Follower Robot",
    detail: "PID tuned • encoder based feedback • 2.6m/s track performance.",
    badge: "Competition",
  },
  {
    name: "Maze Solver — DFS / BFS",
    detail: "Adaptive shortest path mapping using DFS + FloodFill memory.",
    badge: "Navigation",
  },
  {
    name: "Gesture Controlled Bot",
    detail: "IMU glove • wireless RF packet stream • servo mapping.",
    badge: "Human–Robot",
  },
  {
    name: "Autonomous Drone",
    detail: "GPS + telemetry • mission control • multi-rotor platform.",
    badge: "Aerial",
  },
];

export default function RoboticsShowcase() {
  return (
    <section className="bg-black text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* ======= HEADER ======= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-150px" }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-xs uppercase tracking-[0.35em] text-[#0ff]"
          >
            Robotics
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={0.15}
            className="mt-3 text-3xl md:text-5xl font-semibold max-w-3xl"
          >
            Bots engineered for competitions & real-world applications.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.25}
            className="mt-3 text-gray-400 max-w-xl"
          >
            From PID tuned line followers to IMU controlled systems — each robot
            is designed with precision, tuning and measurable performance.
          </motion.p>
        </motion.div>

        {/* ======= GRID ======= */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              custom={idx + 1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              className="group p-6 rounded-2xl border border-white/10 bg-[#070B12]/70 
                         hover:border-[#0ff]/60 hover:shadow-[0_0_45px_#0ff3]
                         backdrop-blur-md transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {p.name}
                </h3>

                <span className="text-[10px] px-2 py-1 rounded-full border border-[#0ff] text-[#0ff]">
                  {p.badge}
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                {p.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
