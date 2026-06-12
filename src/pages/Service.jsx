// frontend/src/pages/Service.jsx
import { Link } from "react-router-dom";
import solutionBg  from "../assets/solutionbg.png";
import RCImg       from "../assets/RC.jpeg";
import FPVImg      from "../assets/fpv.jpeg";
import DRImg       from "../assets/DRrobo.png";
import CozmoImg    from "../assets/cozmo.jpg";
import Project2Img from "../assets/Project2.png";
import WorkshopImg from "../assets/workshop.png";

function Label({ children }) {
  return (
    <p className="text-[10px] tracking-[0.35em] text-[#00AEEF] uppercase font-bold mb-3">
      {children}
    </p>
  );
}

export default function ServicePage() {
  return (
    <main className="bg-[#050505] text-white">

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "clamp(500px, 88vh, 900px)" }}>
        <img src={solutionBg} alt="Solutions"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "65% center", opacity: 0.7 }} />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, rgba(5,5,5,1) 0%, rgba(5,5,5,0.94) 30%, rgba(5,5,5,0.6) 58%, rgba(5,5,5,0.08) 85%, rgba(5,5,5,0) 100%)"
        }} />
        <div className="absolute inset-x-0 top-0 h-24" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.85), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-36" style={{ background: "linear-gradient(to top, rgba(5,5,5,1), transparent)" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 flex flex-col justify-center"
          style={{ minHeight: "clamp(500px, 88vh, 900px)", paddingTop: "120px", paddingBottom: "70px" }}>
          <div style={{ maxWidth: "560px" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-[2px] bg-[#00AEEF]" />
              <span className="text-[10px] tracking-[0.4em] text-[#00AEEF] uppercase font-bold">Our Solutions</span>
            </div>
            <h1 className="font-black text-white tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", lineHeight: "1.0" }}>
              INTELLIGENT SOLUTIONS
              <br />FOR{" "}<span style={{ color: "#00AEEF" }}>REAL-WORLD</span>
              <br />CHALLENGES
            </h1>
            <div className="mt-6 w-10 h-[3px] bg-[#00AEEF]" />
            <p className="mt-5 text-gray-300 leading-[1.8]" style={{ fontSize: "14px", maxWidth: "440px" }}>
              From Robotics and AI Systems to Drones, Automation and Software,
              we build intelligent solutions that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/projects"
                className="inline-flex items-center gap-2 font-bold uppercase hover:bg-white transition-colors"
                style={{ background: "#00AEEF", color: "#050505", padding: "12px 26px", fontSize: "11px", letterSpacing: "0.14em" }}>
                EXPLORE PROJECTS
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 font-bold uppercase border transition-colors hover:border-[#00AEEF] hover:text-[#00AEEF]"
                style={{ border: "1px solid rgba(255,255,255,0.25)", color: "white", padding: "12px 26px", fontSize: "11px", letterSpacing: "0.14em" }}>
                START A PROJECT
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-7">
              {["Robotics", "AI Systems", "Drones", "Automation", "Software"].map((t) => (
                <span key={t} className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-600 border border-white/8 px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/6" />

      {/* ── WHAT WE BUILD ── */}
      <section className="py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-14">
            <Label>What We Build</Label>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              End-to-End Solutions That Drive Innovation
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/6 border border-white/6 overflow-hidden">
            {[
              { icon: <svg className="w-10 h-10" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2" /></svg>, title: "Robotics", desc: "Custom robots for competition, research and industry." },
              { icon: <svg className="w-10 h-10" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>, title: "Drones", desc: "High-performance drones for surveillance, mapping and inspection." },
              { icon: <svg className="w-10 h-10" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: "AI Systems", desc: "Intelligent systems using computer vision, machine learning and AI." },
              { icon: <svg className="w-10 h-10" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: "Automation", desc: "IoT and automation solutions for smart and efficient operations." },
              { icon: <svg className="w-10 h-10" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, title: "Software", desc: "Powerful software solutions for web, mobile and enterprise needs." },
            ].map((s) => (
              <div key={s.title} className="group bg-[#0A0A0A] hover:bg-[#111] transition-colors duration-300 p-8 flex flex-col items-center text-center cursor-pointer">
                <div className="mb-5">{s.icon}</div>
                <h3 className="text-white font-bold text-sm tracking-wider mb-3">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                <div className="mt-6 w-5 h-[1.5px] bg-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/6" />

      {/* ── OUR PROJECTS ── */}
      <section className="py-14 sm:py-24 bg-[#020508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-14">
            <Label>Our Projects</Label>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Real Projects. Real Impact.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            {[
              { img: DRImg,       tag: "Robotics",  title: "DEX BOT" },
              { img: FPVImg,      tag: "Drones",    title: "FPV Drone" },
              { img: Project2Img, tag: "Robotics",  title: "Robo Soccer" },
            ].map((p) => (
              <div key={p.title} className="group relative overflow-hidden cursor-pointer border border-white/6">
                <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={p.img} alt={p.title} loading="lazy"
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[9px] tracking-[0.3em] text-[#00AEEF] uppercase font-bold">{p.tag}</span>
                  <h3 className="text-white font-bold text-sm mt-1">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { img: RCImg,       tag: "Robotics",  title: "Obstacle Avoiding Robot" },
              { img: CozmoImg,    tag: "AI Systems", title: "AURA AI" },
              { img: WorkshopImg, tag: "Software",   title: "A5X Community" },
            ].map((p) => (
              <div key={p.title} className="group relative overflow-hidden cursor-pointer border border-white/6">
                <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={p.img} alt={p.title} loading="lazy"
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[9px] tracking-[0.3em] text-[#00AEEF] uppercase font-bold">{p.tag}</span>
                  <h3 className="text-white font-bold text-sm mt-1">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects"
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase border border-[#00AEEF]/30 px-7 py-3 hover:bg-[#00AEEF]/10 transition-colors">
              VIEW ALL PROJECTS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-white/6" />

      {/* ── HOW WE WORK ── */}
      <section className="py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-14">
            <Label>How We Work</Label>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">A Simple Process. Powerful Results.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 border border-white/6 overflow-hidden">
            {[
              { num: "01", title: "Discovery", desc: "Understanding your ideas, requirements and goals.", icon: <svg className="w-6 h-6" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
              { num: "02", title: "Design", desc: "Planning, prototyping and designing the perfect solution.", icon: <svg className="w-6 h-6" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg> },
              { num: "03", title: "Build", desc: "Developing and integrating with precision and care.", icon: <svg className="w-6 h-6" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
              { num: "04", title: "Deploy", desc: "Testing, deployment and long-term support.", icon: <svg className="w-6 h-6" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" /></svg> },
            ].map((step) => (
              <div key={step.num} className="bg-[#0A0A0A] hover:bg-[#111] transition-colors duration-300 p-9 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold tracking-[0.3em] text-[#00AEEF]">{step.num}</span>
                  <div className="flex-1 h-px bg-white/8" />
                  {step.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/6" />

      {/* ── TECHNOLOGIES ── */}
      <section className="py-12 sm:py-20 bg-[#020508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-12">
            <Label>Technologies We Use</Label>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Modern Tools. Better Solutions.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Python", color: "#3776AB" }, { name: "ROS", color: "#22314E" },
              { name: "OpenCV", color: "#5C3EE8" }, { name: "Arduino", color: "#00979D" },
              { name: "ESP32",  color: "#E7352B" }, { name: "AWS",    color: "#FF9900" },
              { name: "React",  color: "#61DAFB" }, { name: "Node.js", color: "#339933" },
            ].map((t) => (
              <div key={t.name}
                className="flex flex-col items-center gap-2 border border-white/8 bg-[#0A0A0A] hover:border-white/20 transition-colors px-6 py-5 cursor-default"
                style={{ minWidth: "90px" }}>
                <div className="w-8 h-8 rounded flex items-center justify-center"
                  style={{ background: `${t.color}22`, border: `1px solid ${t.color}40` }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: t.color }} />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-gray-400">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/6" />

      {/* ── INDUSTRIES ── */}
      <section className="py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-14">
            <Label>Industries We Serve</Label>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Empowering Innovation Across Industries</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/6 border border-white/6 overflow-hidden">
            {[
              { icon: <svg className="w-7 h-7" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>, label: "Education" },
              { icon: <svg className="w-7 h-7" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, label: "Research" },
              { icon: <svg className="w-7 h-7" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, label: "Manufacturing" },
              { icon: <svg className="w-7 h-7" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: "Startups" },
            ].map((ind) => (
              <div key={ind.label} className="bg-[#0A0A0A] hover:bg-[#111] transition-colors px-8 py-10 flex flex-col items-center text-center gap-4 cursor-default">
                {ind.icon}
                <span className="text-xs text-gray-400 font-bold tracking-widest uppercase">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/6" />

      {/* ── STATS ── */}
      <section className="py-0 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="border border-white/6 bg-[#0A0A0A] grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/6">
            {[
              { icon: <svg className="w-6 h-6" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>, value: "50+",  label: "Projects Completed" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, value: "500+", label: "Students Mentored" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, value: "10+",  label: "Technologies" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="#00AEEF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, value: "24/7", label: "Support" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-10 flex items-center gap-4">
                {s.icon}
                <div>
                  <div className="text-2xl font-extrabold text-white" style={{ lineHeight: 1 }}>{s.value}</div>
                  <div className="text-[11px] text-gray-500 mt-1.5 tracking-wider uppercase">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/6" />

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <img src={solutionBg} alt="" className="absolute inset-0 loading="lazy" w-full h-full object-cover brightness-[0.12]"
          style={{ objectPosition: "center bottom" }} />
        <div className="absolute inset-0 bg-[#050505]/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <p className="text-[10px] tracking-[0.35em] text-[#00AEEF] uppercase font-bold mb-4">
                Let's Build the Future Together
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Ready To Build Something
                <br /><span style={{ color: "#00AEEF" }}>Extraordinary?</span>
              </h2>
              <p className="mt-5 text-gray-400 text-base leading-relaxed max-w-lg">
                Let's turn your ideas into intelligent, scalable and high-impact solutions.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2.5 font-bold uppercase hover:bg-white transition-colors"
                style={{ background: "#00AEEF", color: "#050505", padding: "14px 30px", fontSize: "11px", letterSpacing: "0.15em" }}>
                START A PROJECT
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2.5 font-bold uppercase border transition-colors hover:border-[#00AEEF] hover:text-[#00AEEF]"
                style={{ border: "1px solid rgba(255,255,255,0.25)", color: "white", padding: "14px 30px", fontSize: "11px", letterSpacing: "0.15em" }}>
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
