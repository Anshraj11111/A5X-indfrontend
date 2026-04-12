// frontend/src/pages/Projects.jsx
import ResumeImg from "../assets/Project1.png";
import BreedImg from "../assets/Project2.png";
import AutomationImg from "../assets/Project3.png";
import DRImg from "../assets/Project4.png";
import ProIMG from "../assets/projectpage.png";

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
    img: DRImg,
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
      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] overflow-hidden" aria-label="Projects hero">
        <img
          className="absolute inset-0 z-0 w-full h-full object-cover object-center brightness-[0.35] bg-zoom-animation"
          src={ProIMG}
          alt="projects background"
          loading="eager"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.12),_transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-32">
          <p className="text-xs md:text-sm uppercase tracking-wider text-cyan-400 mb-4">
            Projects
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-tight">
            Real builds across{" "}
            <span className="text-cyan-400">
              Web, ML, Automation & Robotics.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed">
            A snapshot of systems we've actually shipped — from resume engines
            and ML models to Insta automation pipelines and our Dr Robot build.
          </p>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="py-16 md:py-20 bg-[#050812] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 space-y-10 md:space-y-14">
          {projects.map((p, index) => (
            <article
              key={p.title}
              className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center 
                         rounded-3xl border border-cyan-400/15 bg-gradient-to-br 
                         from-[#050915] via-[#050915] to-[#020409] overflow-hidden"
            >
              {/* IMAGE SIDE */}
              <div className="relative h-full">
                <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center 
                               hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>

              {/* TEXT SIDE */}
              <div className="p-6 md:p-8 lg:p-10">
                <p className="text-xs uppercase tracking-wider text-cyan-400">
                  {p.tag}
                </p>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm md:text-base text-gray-400">{p.subtitle}</p>

                <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
                  {p.description}
                </p>

                {/* Highlight bullets */}
                <ul className="mt-5 space-y-2 text-sm md:text-base text-gray-300">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 items-start">
                      <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack pills */}
                <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-sm">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full border border-cyan-400/40 text-cyan-400 bg-black/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 md:py-20 bg-[#020409] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Want something like this for your{" "}
            <span className="text-cyan-400">college, startup or lab?</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            We can extend these projects or build completely new systems —
            resume platforms, ML tools, automation flows, or full robotics
            stacks tailored for your use case.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm md:text-base">
            <a
              href="/contact"
              className="px-7 py-3 rounded-full bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition-colors"
            >
              Discuss a project
            </a>
            <a
              href="/services"
              className="px-7 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors"
            >
              View services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
