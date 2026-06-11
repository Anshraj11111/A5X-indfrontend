// frontend/src/pages/ProjectDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";

import ResumeImg    from "../assets/Project1.png";
import BreedImg     from "../assets/Project2.png";
import AutomationImg from "../assets/Project3.png";
import DRImg        from "../assets/Project4.png";
import ProIMG       from "../assets/projectpage.png";

/* ─── Project Data ─────────────────────────────────────────────── */
const projects = [
  {
    id: "resume-book",
    tag: "Web Development",
    category: "Full-Stack Web Application",
    duration: "3 Months",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    title: "Resume Book – Portfolio Engine",
    subtitle: "Centralised resume + project showcase system",
    heroImg: ResumeImg,
    gallery: [ResumeImg, BreedImg, AutomationImg],
    overview:
      "Resume Book is a full-stack web platform that transforms how students and professionals present themselves. Instead of static PDFs, users get a dynamic, shareable profile with live project links, skills and experience all in one place.",
    problem:
      "Students and professionals struggle with outdated, static PDF resumes that don't showcase their work interactively. Recruiters waste time sifting through files that can't be updated or linked to live projects.",
    solution:
      "We built a centralized resume engine where each user gets a unique public profile URL. The platform dynamically renders their resume, project gallery and skill set — always up-to-date, always shareable, always accessible from any device.",
    features: [
      "Custom resume sections with live inline editing",
      "Public shareable profile link for each user",
      "Project gallery with screenshots, links and descriptions",
      "Real-time preview as you build your profile",
      "Mobile-responsive design for viewing on any device",
      "Admin dashboard for platform management",
    ],
    techStack: [
      { name: "React", role: "Frontend UI" },
      { name: "Tailwind CSS", role: "Styling" },
      { name: "Node.js", role: "Backend API" },
      { name: "Express", role: "REST Framework" },
      { name: "MongoDB", role: "Database" },
    ],
    process: [
      { step: "01", title: "Research & Planning", desc: "Analysed how students share portfolios and identified pain points with static resumes and scattered links." },
      { step: "02", title: "UI/UX Design", desc: "Designed wireframes and high-fidelity mockups focused on clarity, speed and professional appearance." },
      { step: "03", title: "Frontend Development", desc: "Built the React-based interface with real-time editing, live previews and responsive layouts." },
      { step: "04", title: "Backend & Database", desc: "Created the Node.js API and MongoDB schema to store, retrieve and update profile data securely." },
      { step: "05", title: "Testing & Launch", desc: "Conducted end-to-end testing, fixed edge cases and deployed to production with CI/CD." },
    ],
    results: [
      { value: "200+", label: "Profiles Created" },
      { value: "95%",  label: "User Satisfaction" },
      { value: "3×",   label: "Faster Profile Sharing" },
      { value: "100%", label: "Mobile Responsive" },
    ],
  },
  {
    id: "breed-recognition",
    tag: "Machine Learning",
    category: "AI / Computer Vision",
    duration: "2 Months",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    title: "Breed Recognition System",
    subtitle: "Image-based breed classification using ML",
    heroImg: BreedImg,
    gallery: [BreedImg, ResumeImg, DRImg],
    overview:
      "An end-to-end machine learning system that identifies animal breeds directly from uploaded images. Built with a convolutional neural network and exposed as a REST API that can integrate with any web or mobile frontend.",
    problem:
      "Identifying animal breeds requires expert knowledge. There was no accessible, fast tool that non-experts could use to get accurate breed predictions from a simple photo.",
    solution:
      "We trained a CNN model on a large labelled dataset, built a preprocessing pipeline and wrapped it in a Flask API. Users upload an image and instantly receive the top breed predictions with confidence scores.",
    features: [
      "Image preprocessing and data augmentation pipeline",
      "CNN-based classifier with high accuracy",
      "REST API endpoint for easy integration",
      "Top-3 breed predictions with confidence scores",
      "Supports JPEG, PNG and WebP formats",
      "Fast inference — results in under 2 seconds",
    ],
    techStack: [
      { name: "Python",     role: "Core Language" },
      { name: "TensorFlow", role: "ML Framework" },
      { name: "Keras",      role: "Model Building" },
      { name: "OpenCV",     role: "Image Processing" },
      { name: "Flask",      role: "API Server" },
    ],
    process: [
      { step: "01", title: "Dataset Collection", desc: "Gathered and labelled a diverse dataset of animal breed images from multiple sources." },
      { step: "02", title: "Preprocessing Pipeline", desc: "Built image normalization, resizing and augmentation steps to improve model generalization." },
      { step: "03", title: "Model Architecture", desc: "Designed and trained a CNN with multiple convolutional and pooling layers, tuned for accuracy." },
      { step: "04", title: "API Development", desc: "Wrapped the trained model in a Flask API with file upload handling and JSON response formatting." },
      { step: "05", title: "Integration & Testing", desc: "Integrated with a sample frontend and tested across various image types and edge cases." },
    ],
    results: [
      { value: "92%",  label: "Classification Accuracy" },
      { value: "< 2s", label: "Inference Time" },
      { value: "50+",  label: "Breeds Supported" },
      { value: "3",    label: "Top Predictions Returned" },
    ],
  },
  {
    id: "instagram-automation",
    tag: "Automation",
    category: "Process Automation",
    duration: "1.5 Months",
    technologies: ["Node.js", "Cron Jobs", "Instagram API", "MongoDB"],
    title: "Instagram Event Automation",
    subtitle: "Poster scheduling + auto-upload for events",
    heroImg: AutomationImg,
    gallery: [AutomationImg, ResumeImg, BreedImg],
    overview:
      "A fully automated Instagram posting system for clubs and communities. Users upload event posters with captions once, set a schedule and the system handles everything — posting at the right time without any manual intervention.",
    problem:
      "Clubs and event organizers struggle to maintain consistent Instagram presence. Manual posting is time-consuming, error-prone and often missed when team members are busy with the actual event.",
    solution:
      "We built a scheduling engine that stores posters, captions and hashtags linked to event dates. Cron jobs automatically trigger uploads at the specified time, ensuring the account stays active and on-brand effortlessly.",
    features: [
      "Upload posters once, schedule for multiple dates",
      "Captions and hashtags stored with each poster",
      "Automatic posting when event date arrives",
      "Dashboard to view upcoming and past posts",
      "Failure retry logic for failed uploads",
      "Multi-account support for different communities",
    ],
    techStack: [
      { name: "Node.js",       role: "Backend Engine" },
      { name: "Cron Jobs",     role: "Task Scheduling" },
      { name: "Instagram API", role: "Platform Integration" },
      { name: "MongoDB",       role: "Data Storage" },
    ],
    process: [
      { step: "01", title: "Requirements Mapping", desc: "Understood the workflow of event teams and mapped out the full automation pipeline." },
      { step: "02", title: "API Research", desc: "Investigated Instagram's API limits, authentication flow and media upload endpoints." },
      { step: "03", title: "Scheduler Build", desc: "Implemented cron-based scheduling with timezone-aware triggers and queue management." },
      { step: "04", title: "Dashboard UI", desc: "Built a simple admin panel to manage posts, view scheduled items and review history." },
      { step: "05", title: "Testing & Deployment", desc: "Stress-tested with real event calendars and deployed with monitoring for failed jobs." },
    ],
    results: [
      { value: "100%", label: "Posts Published On Time" },
      { value: "80%",  label: "Time Saved Per Week" },
      { value: "15+",  label: "Events Automated" },
      { value: "0",    label: "Missed Posts" },
    ],
  },
  {
    id: "dr-robot",
    tag: "Robotics",
    category: "Embedded Systems & Robotics",
    duration: "4 Months",
    technologies: ["Embedded C", "Custom PCB", "Motor Drivers", "Sensors", "3D Printing"],
    title: "Dr Robot – Smart Assistance Bot",
    subtitle: "A robotics project built for real-world interaction",
    heroImg: DRImg,
    gallery: [DRImg, AutomationImg, BreedImg],
    overview:
      "Dr Robot is a fully custom-built robotics platform designed for assistance and interaction tasks. From the chassis to the PCB to the embedded firmware — everything was engineered in-house at A5X.",
    problem:
      "Generic robotics kits are too limited for real-world assistance tasks. They lack the sensor integration, structural rigidity and custom firmware needed for reliable, adaptable operation in dynamic environments.",
    solution:
      "We designed a modular robot from scratch — custom PCB for clean wiring, 3D-printed body panels for precise fit, sensor arrays for environment awareness and embedded C firmware for real-time control.",
    features: [
      "Sensor-based navigation and obstacle detection",
      "Modular body for future tools and add-ons",
      "Custom PCB for reliable, low-noise control",
      "Real-time motor control with PID tuning",
      "Wireless communication module",
      "Designed for both competition and real-world use",
    ],
    techStack: [
      { name: "Embedded C",    role: "Firmware" },
      { name: "Custom PCB",    role: "Hardware Design" },
      { name: "Motor Drivers", role: "Actuation" },
      { name: "Sensors",       role: "Environment Sensing" },
      { name: "3D Printing",   role: "Chassis Fabrication" },
    ],
    process: [
      { step: "01", title: "Concept & Design", desc: "Sketched the mechanical layout, defined sensor placement and planned the PCB schematic." },
      { step: "02", title: "PCB Design & Fabrication", desc: "Designed the custom PCB in EDA software, sent for fabrication and assembled components." },
      { step: "03", title: "Chassis & 3D Printing", desc: "Modelled body parts in CAD and printed iteratively, tuning tolerances for clean mechanical fit." },
      { step: "04", title: "Firmware Development", desc: "Wrote real-time embedded C firmware for motor control, sensor reading and communication." },
      { step: "05", title: "Integration & Testing", desc: "Assembled all subsystems, tested in multiple scenarios and refined PID tuning for smooth motion." },
    ],
    results: [
      { value: "100%", label: "Custom Built" },
      { value: "6+",   label: "Sensors Integrated" },
      { value: "4",    label: "Months to Build" },
      { value: "1st",  label: "Competition Ready" },
    ],
  },
];

/* ─── Helper Components ─────────────────────────────────────────── */
function Label({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-5 h-[2px] bg-[#00AEEF]" />
      <span className="text-[10px] tracking-[0.4em] text-[#00AEEF] uppercase font-bold">{children}</span>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-white/6" />;
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center gap-6">
        <p className="text-gray-400 text-lg">Project not found.</p>
        <Link to="/projects" className="text-[#00AEEF] underline text-sm">← Back to Projects</Link>
      </main>
    );
  }

  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="bg-[#050505] text-white">

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "88vh" }}>
        <img
          src={project.heroImg}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        {/* top navbar gradient */}
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: "linear-gradient(to bottom,rgba(3,6,10,.95) 0%,rgba(3,6,10,.4) 70%,transparent 100%)" }} />
        {/* left text gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right,rgba(5,5,5,.97) 0%,rgba(5,5,5,.85) 35%,rgba(5,5,5,.3) 60%,rgba(5,5,5,0) 100%)" }} />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(to top,rgba(5,5,5,1),transparent)" }} />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20 flex flex-col justify-end"
          style={{ minHeight: "88vh", paddingBottom: "80px", paddingTop: "140px" }}
        >
          {/* breadcrumb */}
          <button
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] text-gray-400 uppercase hover:text-[#00AEEF] transition-colors self-start"
          >
            ← Back to Projects
          </button>

          <div style={{ maxWidth: "640px" }}>
            <Label>{project.tag}</Label>
            <h1
              className="font-black text-white"
              style={{ fontSize: "clamp(2.4rem,5.5vw,5rem)", lineHeight: "1.0", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h1>
            <p className="mt-4 text-gray-400 text-base leading-relaxed">{project.subtitle}</p>

            {/* meta pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-[11px] tracking-wider text-gray-300">
                <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full" />
                {project.category}
              </span>
              <span className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-[11px] tracking-wider text-gray-300">
                <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full" />
                Duration: {project.duration}
              </span>
            </div>

            {/* tech tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-3 py-1 bg-[#00AEEF]/10 border border-[#00AEEF]/25 text-[#00AEEF] text-[10px] tracking-wider uppercase font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-8 sm:px-14">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2">
              <Label>Project Overview</Label>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">About This Project</h2>
              <p className="text-gray-300 text-base leading-[1.9]">{project.overview}</p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Category",    value: project.category },
                { label: "Duration",    value: project.duration },
                { label: "Technologies", value: project.technologies.join(", ") },
              ].map((item) => (
                <div key={item.label} className="border border-white/8 bg-[#050505] p-5">
                  <p className="text-[10px] tracking-[0.3em] text-[#00AEEF] uppercase font-bold mb-1">{item.label}</p>
                  <p className="text-gray-200 text-sm leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PROBLEM & SOLUTION ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 sm:px-14">
          <div className="grid lg:grid-cols-2 gap-px bg-white/6 border border-white/6">
            <div className="bg-[#050505] p-10 lg:p-14">
              <Label>Problem Statement</Label>
              <h2 className="text-2xl font-extrabold text-white mb-5">The Challenge</h2>
              <p className="text-gray-300 text-base leading-[1.9]">{project.problem}</p>
            </div>
            <div className="bg-[#0A0A0A] p-10 lg:p-14">
              <Label>Our Solution</Label>
              <h2 className="text-2xl font-extrabold text-white mb-5">How We Solved It</h2>
              <p className="text-gray-300 text-base leading-[1.9]">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── KEY FEATURES ── */}
      <section className="py-20 bg-[#020508]">
        <div className="max-w-7xl mx-auto px-8 sm:px-14">
          <div className="text-center mb-14">
            <Label>Key Features</Label>
            <h2 className="text-3xl font-extrabold text-white">What Makes It Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6 border border-white/6">
            {project.features.map((f, i) => (
              <div key={i} className="bg-[#0A0A0A] hover:bg-[#111] transition-colors p-8 flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-[#00AEEF]/30 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-[#00AEEF]" />
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── TECH STACK ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 sm:px-14">
          <Label>Technology Stack</Label>
          <h2 className="text-3xl font-extrabold text-white mb-12">Built With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/6 border border-white/6">
            {project.techStack.map((t) => (
              <div key={t.name} className="bg-[#0A0A0A] hover:bg-[#111] transition-colors p-8 flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 border border-[#00AEEF]/30 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#00AEEF]" />
                </div>
                <h4 className="text-white font-bold text-sm">{t.name}</h4>
                <p className="text-gray-500 text-[11px] tracking-wider uppercase">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── DEVELOPMENT PROCESS ── */}
      <section className="py-20 bg-[#020508]">
        <div className="max-w-7xl mx-auto px-8 sm:px-14">
          <div className="text-center mb-14">
            <Label>Development Process</Label>
            <h2 className="text-3xl font-extrabold text-white">How We Built It</h2>
          </div>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/8 hidden sm:block" />
            <div className="flex flex-col gap-0">
              {project.process.map((step, i) => (
                <div key={i} className="relative sm:pl-20 group">
                  {/* step dot */}
                  <div className="hidden sm:flex absolute left-0 top-8 w-12 h-12 border border-[#00AEEF]/40 bg-[#050505] items-center justify-center z-10">
                    <span className="text-[#00AEEF] text-xs font-extrabold tracking-wider">{step.step}</span>
                  </div>
                  <div className="border border-white/6 bg-[#0A0A0A] group-hover:bg-[#111] transition-colors p-8 mb-px">
                    <div className="sm:hidden text-[#00AEEF] text-xs font-extrabold tracking-wider mb-2">{step.step}</div>
                    <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── RESULTS ── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-8 sm:px-14">
          <div className="text-center mb-14">
            <Label>Results & Impact</Label>
            <h2 className="text-3xl font-extrabold text-white">The Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 border border-white/6">
            {project.results.map((r) => (
              <div key={r.label} className="bg-[#050505] p-10 flex flex-col items-center text-center gap-3">
                <div className="text-4xl font-extrabold text-white" style={{ lineHeight: 1 }}>{r.value}</div>
                <div className="text-[11px] text-gray-500 tracking-wider uppercase">{r.label}</div>
                <div className="w-6 h-[2px] bg-[#00AEEF]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── IMAGE GALLERY ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 sm:px-14">
          <Label>Image Gallery</Label>
          <h2 className="text-3xl font-extrabold text-white mb-12">Project Visuals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/6 border border-white/6">
            {project.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  className="w-full h-full object-cover brightness-90 hover:brightness-100 hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── RELATED PROJECTS ── */}
      <section className="py-20 bg-[#020508]">
        <div className="max-w-7xl mx-auto px-8 sm:px-14">
          <Label>Related Projects</Label>
          <h2 className="text-3xl font-extrabold text-white mb-12">More Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/6 border border-white/6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="group bg-[#0A0A0A] hover:bg-[#111] transition-colors flex flex-col"
              >
                <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={p.heroImg}
                    alt={p.title}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[9px] tracking-[0.35em] text-[#00AEEF] uppercase font-bold mb-2">{p.tag}</span>
                  <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{p.subtitle}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase group-hover:gap-3 transition-all">
                    VIEW PROJECT →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── CALL TO ACTION ── */}
      <section className="relative py-28 overflow-hidden">
        <img src={ProIMG} alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.2]" />
        <div className="absolute inset-0 bg-[#050505]/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <p className="text-[10px] tracking-[0.35em] text-[#00AEEF] uppercase font-bold mb-4">Let's Build Together</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                WANT SOMETHING<br /><span style={{ color: "#00AEEF" }}>LIKE THIS?</span>
              </h2>
              <p className="mt-5 text-gray-400 text-base leading-relaxed max-w-lg">
                We can build similar projects tailored for your college, startup or organization.
                Let's talk about your idea.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 font-bold uppercase hover:bg-white transition-colors"
                style={{ background: "#00AEEF", color: "#050505", padding: "14px 28px", fontSize: "11px", letterSpacing: "0.15em" }}
              >
                DISCUSS YOUR PROJECT
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2.5 font-bold uppercase border transition-colors hover:border-[#00AEEF] hover:text-[#00AEEF]"
                style={{ border: "1px solid rgba(255,255,255,0.25)", color: "white", padding: "14px 28px", fontSize: "11px", letterSpacing: "0.15em" }}
              >
                VIEW ALL PROJECTS
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
