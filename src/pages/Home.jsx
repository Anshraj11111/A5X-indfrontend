import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import usePWAInstall from "../hooks/usePWAInstall";

// Project images
import BreedImg    from "../assets/Project2.png";
import WorkshopImg from "../assets/workshop.png";
import FPVImg from "../assets/fpv.jpeg";
import RCImg from "../assets/RC.jpeg"
import DRIMG from "../assets/DRrobo.png";

/* ── Section label ── */
function SectionLabel({ children }) {
  return (
    <p className="text-[10px] tracking-[0.35em] text-[#00AEEF] uppercase font-semibold mb-4">
      {children}
    </p>
  );
}

/* ══════════════════════════════════════════════════════ */
export default function Home() {
  const { isInstallable, installApp } = usePWAInstall();
  const [showInstallPopup, setShowInstallPopup] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(ua) && !window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  useEffect(() => {
    if (isInstallable || isIOS) {
      const t = setTimeout(() => setShowInstallPopup(true), 2500);
      return () => clearTimeout(t);
    }
  }, [isInstallable, isIOS]);

  return (
    <main className="bg-[#03060A] text-white">

      {/* ═══════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════ */}
      <Hero />

      {/* ═══════════════════════════════════
          SECTION 2 — WHAT WE BUILD
      ═══════════════════════════════════ */}
      <section className="py-24 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Build</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white max-w-xl">
                Intelligent solutions<br />for a better tomorrow.
              </h2>
            </div>
            <Link to="/services"
              className="text-sm font-semibold text-[#00AEEF] flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap">
              VIEW ALL SOLUTIONS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/6 border border-white/6 rounded-sm overflow-hidden">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                  </svg>
                ),
                title: "Robotics",
                desc: "Custom robots for research, education and industry applications.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "AI Systems",
                desc: "Computer vision, machine learning and intelligent AI solutions.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                ),
                title: "Drones",
                desc: "Autonomous drones for surveillance, mapping and inspection.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Automation",
                desc: "Industrial automation and IoT solutions for smart systems.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Software",
                desc: "Web, mobile and cloud applications that drive business growth.",
              },
            ].map((s) => (
              <div key={s.title}
                className="group bg-[#060B10] p-8 hover:bg-[#0A1520] transition-colors duration-300 cursor-pointer">
                <div className="text-[#00AEEF] mb-5">{s.icon}</div>
                <h3 className="text-white font-bold text-base mb-3 tracking-wide">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 text-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 3 — FEATURED PROJECTS
      ═══════════════════════════════════ */}
      <section className="py-24 border-t border-white/6 bg-[#020508]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Featured Projects</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Innovation in action.
              </h2>
            </div>
            <Link to="/projects"
              className="text-sm font-semibold text-[#00AEEF] flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap">
              VIEW ALL PROJECTS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 border border-white/6 rounded-sm overflow-hidden">
            {[
              { img: RCImg,     title: "RC BOT",              desc: "Advanced robotics platform built for competition-live environments." },
              { img: FPVImg, title: "FPV Drone",     desc: "Autonomous UAV for surveying, inspection and surveillance." },
              { img: BreedImg,  title: "Robo Soccer",     desc: "Real-time object detection using vision intelligence systems." },
              { img: DRIMG,   title: "Dr. Robot", desc: "Smart automation solutions for modern industries." },
            ].map((p) => (
              <div key={p.title} className="group bg-[#060B10] hover:bg-[#0A1520] transition-colors duration-300 flex flex-col">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75 group-hover:brightness-90" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-sm tracking-wide mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed flex-1">{p.desc}</p>
                  <Link to="/projects"
                    className="mt-5 text-xs font-semibold text-[#00AEEF] flex items-center gap-1.5 hover:gap-2.5 transition-all">
                    VIEW CASE STUDY
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 4 — INSIDE A5X LAB
      ═══════════════════════════════════ */}
      <section className="py-24 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-0 border border-white/6 rounded-sm overflow-hidden">

            {/* Left text */}
            <div className="bg-[#060B10] p-10 sm:p-14 flex flex-col justify-center">
              <SectionLabel>Inside A5X Lab</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Where ideas<br />turn into reality.
              </h2>
              <p className="mt-6 text-gray-400 text-base leading-relaxed max-w-md">
                Our lab is a place where imagination meets engineering. We experiment,
                build, test and iterate to create technology that makes an impact.
              </p>
              <Link to="/lab"
                className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#00AEEF] tracking-wider hover:gap-3 transition-all">
                EXPLORE THE LAB
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right image */}
            <div className="relative min-h-[320px] sm:min-h-[420px]">
              <img
                src={WorkshopImg}
                alt="A5X Engineering Lab"
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060B10]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 5 — INDUSTRIES WE SERVE
      ═══════════════════════════════════ */}
      <section className="py-24 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Industries We Serve</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Built for real-world sectors.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/6 border border-white/6 overflow-hidden">
            {[
              { icon: "🎓", label: "Education & Research" },
              { icon: "🏭", label: "Manufacturing" },
              { icon: "🌾", label: "Agriculture" },
              { icon: "🛡️", label: "Defense & Security" },
              { icon: "💡", label: "Startups & Innovation" },
              { icon: "🏙️", label: "Smart Infrastructure" },
            ].map((ind) => (
              <div key={ind.label}
                className="bg-[#060B10] hover:bg-[#0A1520] transition-colors duration-300 px-6 py-10 flex flex-col items-center text-center gap-4 cursor-default">
                <span className="text-4xl">{ind.icon}</span>
                <span className="text-xs text-gray-400 font-semibold tracking-wide leading-relaxed">
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 7 — COMMUNITY
      ═══════════════════════════════════ */}
      <section className="py-24 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="border border-white/6 bg-[#060B10] overflow-hidden">

            {/* Top accent bar */}
            <div className="h-[2px] bg-gradient-to-r from-[#00AEEF] via-[#00AEEF]/40 to-transparent" />

            <div className="grid lg:grid-cols-2 gap-0">

              {/* Left — text */}
              <div className="p-10 sm:p-14 flex flex-col justify-center">
                <SectionLabel>A5X Community</SectionLabel>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Join the community
                  <br />
                  <span className="text-[#00AEEF]">of builders.</span>
                </h2>
                <p className="mt-6 text-gray-400 text-base leading-relaxed max-w-md">
                  Connect with robotics engineers, AI developers and drone enthusiasts
                  from across India. Share projects, ask questions, collaborate on builds
                  and grow together with the A5X community.
                </p>

                {/* Community stats */}
                <div className="mt-8 flex gap-8 border-t border-white/8 pt-6">
                  {[
                    { value: "500+", label: "Members" },
                    { value: "100+", label: "Projects Shared" },
                    { value: "Active", label: "Daily Discussions" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-lg font-extrabold text-white">{s.value}</div>
                      <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{s.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://community.a5x.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-[#050505] font-bold text-xs tracking-[0.18em] uppercase hover:bg-white transition-colors w-fit"
                >
                  JOIN COMMUNITY
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Right — feature list */}
              <div className="border-l border-white/6 p-10 sm:p-14 flex flex-col justify-center gap-7">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    ),
                    title: "Discussion Forums",
                    desc: "Ask questions, share knowledge and get help from experienced engineers.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ),
                    title: "Project Showcase",
                    desc: "Share your robotics and automation projects with the community.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                    title: "Learning Resources",
                    desc: "Access tutorials, guides and resources curated by A5X engineers.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Collaborations",
                    desc: "Find teammates for competitions, hackathons and open-source projects.",
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4 items-start">
                    <div className="w-9 h-9 flex-shrink-0 border border-white/10 bg-[#0A1520] flex items-center justify-center text-[#00AEEF]">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide">{f.title}</h4>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 8 — CTA
      ═══════════════════════════════════ */}
      <section className="py-24 border-t border-white/6 bg-[#020508]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 border border-white/6 bg-[#060B10] rounded-sm p-10 sm:p-14">

            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                LET'S BUILD THE<br />
                <span className="text-[#00AEEF]">FUTURE TOGETHER</span>
              </h2>
              <p className="mt-5 text-gray-400 text-base leading-relaxed">
                Have a project in mind? Let's discuss how we can turn your ideas into intelligent solutions.
              </p>
            </div>

            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-black font-bold text-sm tracking-wider rounded-sm hover:bg-[#00c4ff] transition-colors"
            >
              START A PROJECT
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PWA INSTALL POPUP
      ═══════════════════════════════════ */}
      {showInstallPopup && (
        <div className="fixed bottom-4 left-4 right-4 z-[9999]">
          <div className="bg-[#060B10] border border-white/10 rounded-sm p-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold text-sm">Install A5X App</h4>
              <p className="text-gray-400 text-xs mt-0.5">Get faster access & app-like experience</p>
            </div>
            <div className="flex gap-3">
              {!isIOS && isInstallable && (
                <button onClick={installApp}
                  className="bg-[#00AEEF] text-black px-4 py-2 rounded-sm font-bold text-xs hover:bg-[#00c4ff] transition">
                  Install
                </button>
              )}
              {isIOS && (
                <span className="text-gray-300 text-xs">Tap <b>Share</b> → <b>Add to Home Screen</b></span>
              )}
              <button onClick={() => setShowInstallPopup(false)}
                className="text-gray-500 hover:text-white transition text-xs">
                Later
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
