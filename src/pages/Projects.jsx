// frontend/src/pages/Projects.jsx
import { motion } from "framer-motion";
import ResumeImg from "../assets/Project1.png";
import BreedImg from "../assets/Project2.png";
import AutomationImg from "../assets/Project3.png";
import DRImg from "../assets/Project4.png";

const projects = [
  {
    tag: "Web Development",
    title: "Resume Book – Portfolio Engine",
    subtitle: "Centralised resume + project showcase system",
    img: ResumeImg,
    stack: ["React", "Tailwind", "Node.js", "MongoDB"],
    description:
      "A web platform where users can create, store and share resume-style profiles with live project links. Built to replace static PDFs with a dynamic, sharable portfolio system.",
    highlights: [
      "Custom resume sections with live editing",
      "Public share link for each profile",
      "Project gallery for screenshots, links and descriptions",
    ],
  },
  {
    tag: "Machine Learning",
    title: "Breed Recognition System",
    subtitle: "Image-based breed classification using ML",
    img: BreedImg,
    stack: ["Python", "TensorFlow / Keras", "OpenCV"],
    description:
      "An ML model that identifies animal breeds directly from images. Designed to take input from web or mobile UI and return top breed predictions with confidence scores.",
    highlights: [
      "Image preprocessing + augmentation pipeline",
      "Convolutional Neural Network based classifier",
      "Can integrate into web UI or mobile app as an API",
    ],
  },
  {
    tag: "Automation",
    title: "Instagram Event Automation",
    subtitle: "Poster scheduling + auto-upload for events",
    img: AutomationImg,
    stack: ["Node.js", "Automation APIs", "Cron Jobs"],
    description:
      "A system that takes pre-designed event posters and automatically schedules Instagram uploads. Perfect for clubs and communities to stay consistent without manual posting.",
    highlights: [
      "Upload once → schedule for multiple event dates",
      "Captions + hashtags stored with each poster",
      "Hands-free posting when the event date arrives",
    ],
  },
  {
    tag: "Robotics",
    title: "Dr Robot – Smart Assistance Bot",
    subtitle: "A robotics project built for real-world interaction",
    img: DRImg ,
    stack: ["Embedded C", "Sensors", "Motor Drivers", "Custom PCB"],
    description:
      "Dr Robot is a robotics project focused on assistance and interaction. Built with multiple sensors, motion control and a robust chassis tuned like a competition-level robot.",
    highlights: [
      "Sensor-based navigation and obstacle detection",
      "Modular body for future tools and add-ons",
      "Designed with competition + real use cases in mind",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-24 bg-[#020409] text-white min-h-screen">
      {/* ========= HERO ========= */}
      <section className="relative overflow-hidden">
        {/* soft gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.16),_transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#0ff] mb-4">
            Projects
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight"
          >
            Real builds across{" "}
            <span className="text-[#0ff]">
              Web, ML, Automation & Robotics.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-5 text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed"
          >
            A snapshot of systems we’ve actually shipped — from resume engines
            and ML models to Insta automation pipelines and our Dr Robot build.
          </motion.p>
        </div>
      </section>

      {/* ========= PROJECT CARDS ========= */}
      <section className="py-10 md:py-16 bg-[#050812] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 space-y-10 md:space-y-14">
          {projects.map((p, index) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center 
                         rounded-3xl border border-[#0ff]/15 bg-gradient-to-br 
                         from-[#050915] via-[#050915] to-[#020409] overflow-hidden"
            >
              {/* IMAGE SIDE */}
              <div className="relative h-full">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover object-center 
                               hover:scale-110 transition-transform duration-[900ms]"
                  />
                </div>
                {/* subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>

              {/* TEXT SIDE */}
              <div className="p-6 md:p-8 lg:p-10">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#0ff]">
                  {p.tag}
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold leading-snug">
                  {p.title}
                </h2>
                <p className="mt-1 text-sm text-gray-400">{p.subtitle}</p>

                <p className="mt-4 text-sm md:text-[15px] text-gray-200 leading-relaxed">
                  {p.description}
                </p>

                {/* Highlight bullets */}
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 items-start">
                      <span className="mt-[3px] h-[6px] w-[6px] rounded-full bg-[#0ff]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack pills */}
                <div className="mt-5 flex flex-wrap gap-2 text-[11px] md:text-xs">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full border border-[#0ff]/40 text-[#0ff] bg-black/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ========= BOTTOM CTA ========= */}
      <section className="py-16 bg-[#020409] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Want something like this for your{" "}
            <span className="text-[#0ff]">college, startup or lab?</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
            We can extend these projects or build completely new systems —
            resume platforms, ML tools, automation flows, or full robotics
            stacks tailored for your use case.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
            <a
              href="/contact"
              className="px-7 py-3 rounded-full bg-[#0ff] text-black font-semibold hover:bg-[#00e4e4] transition"
            >
              Discuss a project
            </a>
            <a
              href="/services"
              className="px-7 py-3 rounded-full border border-[#0ff] text-[#0ff] hover:bg-[#0ff1] transition"
            >
              View services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
