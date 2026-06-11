// frontend/src/pages/About.jsx
import { Link } from "react-router-dom";

import OfficeImg      from "../assets/office.jpeg";
import AboutCrausel from "../assets/Aboutcrausel.png";
import WorkshopImg  from "../assets/workshop1.png";

// Team photos
import AnshImg    from "../assets/Ansh.png";
import AnupamImg  from "../assets/Anupam.jpg";
import ChrisImg   from "../assets/Chris.jpg";
import AdityaImg  from "../assets/Aditya.jpg";
import AmitImg    from "../assets/Amit.jpg";

/* ─── Helper ────────────────────────────────────────────────────── */
function Label({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}>
      <div className="w-6 h-[2px] bg-[#00A8FF]" />
      <span className="text-[10px] tracking-[0.45em] text-[#00A8FF] uppercase font-bold">{children}</span>
      {center && <div className="w-6 h-[2px] bg-[#00A8FF]" />}
    </div>
  );
}

function Divider() {
  return <div className="border-t border-white/6" />;
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main className="bg-[#050505] text-white overflow-x-hidden">

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* office photo — right side */}
        {/* RIGHT — photo pinned to right half only */}
        <div className="absolute right-0 top-0 h-full" style={{ width: "50%", zIndex: 1 }}>
          <img src={OfficeImg} alt="A5X Team"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }} />
          {/* fade left edge into black */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(5,5,5,1) 0%, rgba(5,5,5,.5) 25%, rgba(5,5,5,0) 55%)" }} />
          {/* top + bottom shade */}
          <div className="absolute inset-x-0 top-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(5,5,5,1), transparent)" }} />
          <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(5,5,5,1), transparent)" }} />
        </div>

        {/* subtle PCB grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,168,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,168,255,0.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        {/* blue glow behind text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,168,255,0.06) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20 pt-32 pb-24">
          <div style={{ maxWidth: "480px" }}>
            <Label>About A5X Industries</Label>
            <h1 className="font-black text-white leading-[1.05]"
              style={{ fontSize: "clamp(2rem,3.8vw,3.6rem)", letterSpacing: "-0.02em" }}>
              Building Technology<br />That Solves{" "}
              <span style={{ color: "#00A8FF" }}>Real Problems.</span>
            </h1>
            <p className="mt-5 text-gray-400 leading-[1.8]" style={{ fontSize: "13px" }}>
              A5X Industries Pvt Ltd develops innovative solutions across robotics, AI,
              drones, automation, embedded systems and software platforms — transforming
              ideas into practical technologies that create real impact.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/projects"
                className="inline-flex items-center gap-2 font-bold uppercase hover:bg-[#0090e0] transition-colors"
                style={{ background: "#00A8FF", color: "#050505", padding: "11px 22px", fontSize: "10px", letterSpacing: "0.16em" }}>
                Explore Our Work
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 font-bold uppercase border transition-colors hover:border-[#00A8FF] hover:text-[#00A8FF]"
                style={{ border: "1px solid rgba(255,255,255,0.18)", color: "white", padding: "11px 22px", fontSize: "10px", letterSpacing: "0.16em" }}>
                Contact Us
              </Link>
            </div>

            {/* stat strip */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/8 pt-8">
              {[
                { v: "50+",  l: "Projects" },
                { v: "500+", l: "Students" },
                { v: "20+",  l: "Workshops" },
                { v: "2024", l: "Incorporated" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-xl font-extrabold text-white" style={{ letterSpacing: "-0.02em" }}>{s.v}</div>
                  <div className="text-[10px] text-gray-500 tracking-wider uppercase mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. OUR STORY
      ══════════════════════════════════════════ */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Label>Our Story</Label>
              <h2 className="font-extrabold text-white leading-tight"
                style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
                From Innovation<br />To Impact
              </h2>
              <div className="mt-7 flex flex-col gap-5 text-gray-400 text-base leading-[1.9]">
                <p>
                  A5X Industries began with a simple vision — to make advanced technology practical,
                  accessible and impactful.
                </p>
                <p>
                  What started as engineering experimentation evolved into a technology company focused
                  on building real-world solutions across robotics, AI, drones, automation and software development.
                </p>
                <p>
                  Today, A5X works with students, educational institutions, startups and organizations to
                  develop innovative technologies, conduct industry-focused workshops and build platforms
                  that solve meaningful problems.
                </p>
                <p className="text-white font-medium">
                  We believe innovation should not remain inside laboratories. It should reach classrooms,
                  businesses and communities where it can create real value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden border border-white/8"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
                <img src={AboutCrausel} alt="A5X Story"
                  className="w-full object-cover" style={{ height: "500px", objectPosition: "center" }} />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top,rgba(5,5,5,.35) 0%,transparent 50%)" }} />
              </div>
              <div className="absolute -bottom-5 -right-5 grid gap-1.5 pointer-events-none"
                style={{ gridTemplateColumns: "repeat(6,6px)" }}>
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-[3px] h-[3px] rounded-full bg-[#00A8FF]/20" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          3. WHAT WE DO
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#071426]/30">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="text-center mb-16">
            <Label center>What We Do</Label>
            <h2 className="font-extrabold text-white"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
              Our Core Domains
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 border border-white/6">
            {[
              {
                title: "Robotics Solutions",
                desc: "Design and development of autonomous robots, competition platforms, industrial prototypes and intelligent robotic systems.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.309 48.309 0 01-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
              },
              {
                title: "Artificial Intelligence",
                desc: "AI assistants, computer vision systems, automation workflows and intelligent software solutions powered by modern AI technologies.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                ),
              },
              {
                title: "Drone Technology",
                desc: "Custom FPV drones, aerial inspection platforms, UAV systems and drone-based engineering solutions.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                ),
              },
              {
                title: "Software Development",
                desc: "Web applications, community platforms, business systems and custom software designed for scalability and performance.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title}
                className="group bg-[#050505] hover:bg-[#071426] transition-colors duration-300 p-8 flex flex-col gap-4">
                <div className="w-11 h-11 border border-[#00A8FF]/20 flex items-center justify-center text-[#00A8FF] group-hover:border-[#00A8FF]/50 group-hover:bg-[#00A8FF]/5 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-sm tracking-wide">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          4. IMPACT STATS
      ══════════════════════════════════════════ */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="text-center mb-16">
            <Label center>Our Impact</Label>
            <h2 className="font-extrabold text-white"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
              Numbers That Matter
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 border border-white/6">
            {[
              { value: "50+",  label: "Projects Delivered" },
              { value: "500+", label: "Students Trained" },
              { value: "20+",  label: "Workshops Conducted" },
              { value: "10+",  label: "Technology Domains" },
            ].map((s) => (
              <div key={s.label}
                className="bg-[#050505] hover:bg-[#071426] transition-colors p-10 flex flex-col items-center text-center gap-3">
                <div className="font-extrabold text-white"
                  style={{ fontSize: "clamp(2.8rem,5vw,4rem)", lineHeight: 1, letterSpacing: "-0.03em" }}>
                  {s.value}
                </div>
                <div className="w-8 h-[2px] bg-[#00A8FF]" />
                <div className="text-gray-400 text-xs tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          5. MISSION & VISION
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#071426]/25">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-px bg-white/6 border border-white/6">
            <div className="bg-[#050505] p-12 lg:p-16 flex flex-col gap-5">
              <Label>Our Mission</Label>
              <h3 className="font-extrabold text-white text-xl leading-snug">
                Making Innovation Practical & Accessible
              </h3>
              <p className="text-gray-400 text-sm leading-[1.9]">
                To develop practical technology solutions that solve real-world challenges while
                making innovation more accessible through engineering, education and collaboration.
              </p>
            </div>
            <div className="bg-[#0A0A12] p-12 lg:p-16 flex flex-col gap-5">
              <Label>Our Vision</Label>
              <h3 className="font-extrabold text-white text-xl leading-snug">
                An Ecosystem of Technology & Learning
              </h3>
              <p className="text-gray-400 text-sm leading-[1.9]">
                To create an ecosystem where technology, innovation and learning come together to
                empower the next generation of builders, engineers and entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          6. WHY CHOOSE A5X
      ══════════════════════════════════════════ */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="text-center mb-16">
            <Label center>Why Choose A5X</Label>
            <h2 className="font-extrabold text-white"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
              The A5X Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6 border border-white/6">
            {[
              { title: "Real Engineering Expertise",   desc: "Every solution is built using practical engineering principles and real-world testing." },
              { title: "End-To-End Development",       desc: "From concept and design to development and deployment, we handle the complete lifecycle." },
              { title: "Innovation Driven",            desc: "We continuously explore emerging technologies to create smarter and more efficient solutions." },
              { title: "Fast Execution",               desc: "Agile development processes help us move from ideas to implementation quickly." },
              { title: "Long-Term Support",            desc: "Our commitment extends beyond delivery through ongoing support and continuous improvement." },
              { title: "Industry-Focused Solutions",   desc: "We build technologies designed to solve practical problems rather than showcase concepts." },
            ].map((item) => (
              <div key={item.title}
                className="group bg-[#050505] hover:bg-[#071426] transition-colors duration-300 p-8 flex flex-col gap-4">
                <div className="w-8 h-[2px] bg-[#00A8FF]" />
                <h4 className="text-white font-bold text-sm tracking-wide">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          7. TEAM
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#071426]/20">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="text-center mb-16">
            <Label center>Our Team</Label>
            <h2 className="font-extrabold text-white"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
              Meet The Co-Founders
            </h2>
            <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              A5X Industries is built by five co-founders who bring together expertise across
              robotics, AI, drones, hardware and software to create real engineering solutions.
            </p>
          </div>

          {/* 5 co-founder cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/6 border border-white/6">
            {[
              { name: "Ansh Raj Baghel", domain: "Full Stack Dev", img: AnshImg },
              { name: "Anupam Mishra",   domain: "AI & ML",        img: AnupamImg },
              { name: "Chris",           domain: "Operations",     img: ChrisImg },
              { name: "Aditya Singh",    domain: "Robotics",       img: AdityaImg },
              { name: "Amit Kumar",      domain: "Hardware",       img: AmitImg },
            ].map((m) => (
              <div key={m.name}
                className="group bg-[#050505] hover:bg-[#071426] transition-colors duration-300 flex flex-col">
                {/* photo */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img src={m.img} alt={m.name}
                    className="w-full h-full object-cover object-top brightness-85 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-700" />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(5,5,5,.7) 0%,transparent 50%)" }} />
                  <div className="absolute top-3 left-3">
                    <span className="text-[8px] tracking-[0.25em] text-[#00A8FF] uppercase font-bold bg-[#050505]/85 border border-[#00A8FF]/25 px-2 py-1">
                      {m.domain}
                    </span>
                  </div>
                </div>
                {/* info */}
                <div className="px-5 py-4 flex flex-col gap-1">
                  <h4 className="text-white font-extrabold text-sm leading-snug">{m.name}</h4>
                  <p className="text-[#00A8FF] text-[10px] font-bold tracking-[0.22em] uppercase">Co-Founder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          8. WORKSHOPS & TRAINING
      ══════════════════════════════════════════ */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Label>Workshops & Training</Label>
              <h2 className="font-extrabold text-white leading-tight"
                style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
                Training Future<br />Innovators
              </h2>
              <p className="mt-6 text-gray-400 text-sm leading-[1.9]">
                A5X conducts hands-on workshops, STEM programs and technology training sessions
                designed to inspire the next generation of engineers and innovators.
              </p>
              <p className="mt-3 text-gray-400 text-sm leading-[1.9]">
                Our programs focus on practical learning through robotics, AI, drones, electronics
                and software development.
              </p>
              <div className="mt-8">
                <p className="text-[10px] tracking-[0.35em] text-[#00A8FF] uppercase font-bold mb-4">Areas Covered</p>
                <div className="grid grid-cols-2 gap-px bg-white/6 border border-white/6">
                  {[
                    "Robotics Workshops", "Artificial Intelligence",
                    "Drone Technology", "Embedded Systems",
                    "IoT Development", "Innovation Programs",
                    "STEM Education", "Technical Training",
                  ].map((area) => (
                    <div key={area}
                      className="bg-[#050505] hover:bg-[#071426] transition-colors px-5 py-3 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A8FF] flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden border border-white/8"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
                <img src={WorkshopImg} alt="A5X Workshops"
                  className="w-full object-cover" style={{ height: "500px", objectPosition: "center 60%" }} />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top,rgba(5,5,5,.4) 0%,transparent 55%)" }} />
                <div className="absolute bottom-5 left-6">
                  <div className="text-2xl font-extrabold text-white">500+</div>
                  <div className="text-[10px] tracking-wider text-gray-400 uppercase">Students Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          9. COMMUNITY
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#071426]/30">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="relative overflow-hidden border border-white/8 bg-[#071426]"
            style={{ padding: "56px 64px" }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(0,168,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,168,255,0.06) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
            <div className="absolute right-0 top-0 w-96 h-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse at right,rgba(0,168,255,0.06) 0%,transparent 70%)" }} />

            <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <Label>Community</Label>
                <h2 className="font-extrabold text-white leading-tight"
                  style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "-0.02em" }}>
                  Join The A5X<br />Community
                </h2>
                <p className="mt-4 text-gray-400 text-sm leading-[1.9] max-w-md">
                  Connect with students, developers, innovators and technology enthusiasts from across
                  the country. Share projects, learn from experts, participate in challenges and
                  collaborate on ideas that shape the future.
                </p>
                <Link to="/contact"
                  className="mt-8 inline-flex items-center gap-3 font-bold uppercase hover:bg-[#0090e0] transition-colors"
                  style={{ background: "#00A8FF", color: "#050505", padding: "14px 28px", fontSize: "11px", letterSpacing: "0.16em" }}>
                  Join Community
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-px bg-white/6 border border-white/6">
                {[
                  "Showcase Your Projects",
                  "Connect With Builders",
                  "Learn New Technologies",
                  "Join Discussions",
                  "Participate In Challenges",
                  "Access Exclusive Resources",
                ].map((b) => (
                  <div key={b}
                    className="bg-[#050505]/80 hover:bg-[#071426] transition-colors px-5 py-4 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A8FF] flex-shrink-0" />
                    <span className="text-gray-300 text-xs leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          10. FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,168,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,168,255,0.03) 1px,transparent 1px),linear-gradient(rgba(0,168,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(0,168,255,0.015) 1px,transparent 1px)",
            backgroundSize: "80px 80px,80px 80px,20px 20px,20px 20px",
          }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%,rgba(0,168,255,0.04) 0%,transparent 65%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20 text-center">
          <Label center>Let's Build Together</Label>
          <h2 className="font-black text-white mx-auto"
            style={{ fontSize: "clamp(2.8rem,7vw,6rem)", letterSpacing: "-0.03em", lineHeight: "0.95", maxWidth: "860px" }}>
            Let's Build The<br />
            <span style={{ color: "#00A8FF" }}>Future Together.</span>
          </h2>
          <p className="mt-8 text-gray-400 text-base leading-[1.9] mx-auto" style={{ maxWidth: "580px" }}>
            Whether you're looking for robotics solutions, AI systems, drone technologies, software
            development or technical training, A5X Industries is ready to help turn your ideas into reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Link to="/contact"
              className="inline-flex items-center gap-3 font-bold uppercase hover:bg-[#0090e0] transition-colors"
              style={{ background: "#00A8FF", color: "#050505", padding: "16px 36px", fontSize: "12px", letterSpacing: "0.16em" }}>
              Start A Project
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
