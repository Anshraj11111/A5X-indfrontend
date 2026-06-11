// frontend/src/pages/Contact.jsx
import { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function Label({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
      <div className="w-6 h-[2px] bg-[#00A8FF]" />
      <span className="text-[10px] tracking-[0.45em] text-[#00A8FF] uppercase font-bold">{children}</span>
      {center && <div className="w-6 h-[2px] bg-[#00A8FF]" />}
    </div>
  );
}

const inp = "w-full bg-[#0A0A0A] border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#00A8FF] transition-colors placeholder:text-gray-600";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [done, setDone]       = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setDone(false);
    try {
      const formData = new FormData(formRef.current);
      const payload = {
        user_name:    formData.get("user_name"),
        user_email:   formData.get("user_email"),
        user_phone:   formData.get("user_phone"),
        organization: formData.get("organization"),
        project_type: formData.get("project_type"),
        budget:       formData.get("budget"),
        message:      formData.get("message"),
      };
      const res = await axios.post(`${API}/api/contact/send`, payload, { timeout: 60000 });
      if (res.data.success) {
        setDone(true);
        formRef.current.reset();
      } else {
        alert(res.data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert(err?.response?.data?.message || err?.message || "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen overflow-x-hidden">

      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* PCB grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,168,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,168,255,0.03) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        {/* glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,168,255,0.06) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20 text-center">
          <Label center>Get In Touch</Label>
          <h1 className="font-black text-white"
            style={{ fontSize: "clamp(2.4rem,5vw,4.8rem)", letterSpacing: "-0.03em", lineHeight: "1.0" }}>
            Let's Build Something<br />
            <span style={{ color: "#00A8FF" }}>Together.</span>
          </h1>
          <p className="mt-6 text-gray-400 text-sm leading-[1.9] mx-auto" style={{ maxWidth: "500px" }}>
            Have a project idea, need a workshop or want to collaborate with A5X Industries?
            Fill in the form below and we'll get back to you within 24–48 hours.
          </p>
        </div>
      </section>

      {/* ══════════ CONTACT INFO + FORM ══════════ */}
      <section className="pb-28 border-t border-white/6">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="grid lg:grid-cols-5 gap-px bg-white/6 border border-white/6 mt-0">

            {/* LEFT — contact details */}
            <div className="lg:col-span-2 bg-[#071426]/60 p-10 flex flex-col gap-10">
              <div>
                <Label>Contact Information</Label>
                <h2 className="font-extrabold text-white text-xl mb-6" style={{ letterSpacing: "-0.01em" }}>
                  Reach Us Directly
                </h2>
                <div className="flex flex-col gap-5">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#00A8FF]/25 flex items-center justify-center text-[#00A8FF] flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-bold mb-1">Email</p>
                      <a href="mailto:a5x.industries@gmail.com"
                        className="text-gray-200 text-sm hover:text-[#00A8FF] transition-colors">
                        a5x.industries@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#00A8FF]/25 flex items-center justify-center text-[#00A8FF] flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-bold mb-1">Phone</p>
                      <a href="tel:+918269858259"
                        className="text-gray-200 text-sm hover:text-[#00A8FF] transition-colors">
                        +91 82698 58259
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#00A8FF]/25 flex items-center justify-center text-[#00A8FF] flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-bold mb-1">Location</p>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        Jabalpur, Madhya Pradesh<br />
                        India — 482001
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#00A8FF]/25 flex items-center justify-center text-[#00A8FF] flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-bold mb-1">Working Hours</p>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        Mon – Sat: 10:00 AM – 7:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="border-t border-white/8 pt-8">
                <p className="text-[10px] tracking-[0.35em] text-gray-500 uppercase font-bold mb-4">Quick Links</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Explore Projects", to: "/projects" },
                    { label: "Book a Workshop", to: "/workshops" },
                    { label: "About A5X", to: "/about" },
                  ].map((l) => (
                    <Link key={l.to} to={l.to}
                      className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#00A8FF] transition-colors">
                      <span className="w-1 h-1 rounded-full bg-[#00A8FF]" />
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="border-t border-white/8 pt-8">
                <p className="text-[10px] tracking-[0.35em] text-gray-500 uppercase font-bold mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { label: "Instagram", href: "https://instagram.com/a5xindustries" },
                    { label: "YouTube",   href: "https://youtube.com/@a5xindustries" },
                    { label: "LinkedIn",  href: "https://linkedin.com/company/a5xindustries" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                      className="text-[10px] tracking-wider text-gray-500 border border-white/10 px-3 py-1.5 uppercase font-bold hover:border-[#00A8FF] hover:text-[#00A8FF] transition-colors">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="lg:col-span-3 bg-[#050505] p-10">
              <Label>Send A Message</Label>
              <h2 className="font-extrabold text-white text-xl mb-8" style={{ letterSpacing: "-0.01em" }}>
                Tell Us About Your Project
              </h2>

              {done ? (
                <div className="border border-[#00A8FF]/30 bg-[#00A8FF]/5 p-12 text-center">
                  <div className="text-[#00A8FF] text-5xl font-bold mb-4">✓</div>
                  <h3 className="text-white font-bold text-lg mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">We'll get back to you within 24–48 hours.</p>
                  <button onClick={() => setDone(false)}
                    className="mt-6 text-xs text-[#00A8FF] underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Your Name *</label>
                      <input name="user_name" required placeholder="Full name" className={inp} />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Email *</label>
                      <input name="user_email" type="email" required placeholder="Email address" className={inp} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Phone *</label>
                      <input name="user_phone" type="tel" required placeholder="Phone number"
                        inputMode="numeric" maxLength={10}
                        onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10); }}
                        className={inp} />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Organisation</label>
                      <input name="organization" placeholder="College / Company (optional)" className={inp} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Project Type</label>
                      <select name="project_type" className={inp + " cursor-pointer"}>
                        <option value="">Select a category</option>
                        <option>Robotics</option>
                        <option>Automation / PLC</option>
                        <option>AI / ML</option>
                        <option>Drone Technology</option>
                        <option>Website / Software</option>
                        <option>Workshop / Training</option>
                        <option>Industrial Project</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Budget Range</label>
                      <input name="budget" placeholder="e.g. ₹10,000 – ₹50,000" className={inp} />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Message *</label>
                    <textarea name="message" rows={5} required
                      placeholder="Describe what you want to build or achieve..."
                      className={inp + " resize-none"} />
                  </div>

                  <button type="submit" disabled={sending}
                    className="mt-2 w-full py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50"
                    style={{ background: "#00A8FF", color: "#050505", fontSize: "11px", letterSpacing: "0.16em" }}>
                    {sending ? "Sending..." : "Submit Enquiry →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ MAP — Jabalpur ══════════ */}
      <section className="border-t border-white/6">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20 py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <Label>Our Location</Label>
              <h2 className="font-extrabold text-white text-2xl" style={{ letterSpacing: "-0.01em" }}>
                Find Us In Jabalpur
              </h2>
              <p className="text-gray-500 text-sm mt-1">Jabalpur, Madhya Pradesh, India — 482001</p>
            </div>
            <a href="https://maps.google.com/?q=Jabalpur,Madhya+Pradesh,India"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#00A8FF] uppercase border border-[#00A8FF]/30 px-5 py-2.5 hover:bg-[#00A8FF]/10 transition-colors self-start">
              Open In Google Maps →
            </a>
          </div>

          {/* Embedded Google Map — Jabalpur */}
          <div className="w-full overflow-hidden border border-white/8" style={{ height: "420px" }}>
            <iframe
              title="A5X Industries Location — Jabalpur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117871.32810898754!2d79.87419!3d23.18147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981af240f8d97e3%3A0x7e68f9046def1b69!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ══════════ BOTTOM CTA ══════════ */}
      <section className="py-20 border-t border-white/6 bg-[#071426]/20">
        <div className="max-w-[1400px] mx-auto px-8 sm:px-14 xl:px-20">
          <div className="grid sm:grid-cols-3 gap-px bg-white/6 border border-white/6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Fast Response",
                desc: "We reply to all enquiries within 24–48 hours on business days.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Free Consultation",
                desc: "Initial project consultations are always free with no obligation.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                title: "Dedicated Support",
                desc: "Every project gets a dedicated point of contact from our team.",
              },
            ].map((item) => (
              <div key={item.title}
                className="bg-[#050505] hover:bg-[#071426] transition-colors p-8 flex flex-col gap-4">
                <div className="w-10 h-10 border border-[#00A8FF]/25 flex items-center justify-center text-[#00A8FF]">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-sm">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
