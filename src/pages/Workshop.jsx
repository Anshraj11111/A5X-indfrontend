// frontend/src/pages/Workshop.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import workshop1Img from "../assets/workshop1.png";
import workshopImg  from "../assets/workshop.png";
import RCImg        from "../assets/RC.jpeg";
import FPVImg       from "../assets/fpv.jpeg";
import DroneImg     from "../assets/Droneus.png";
import CozmoImg     from "../assets/cozmo.jpg";
import Project2Img  from "../assets/Project2.png";
import Project3Img  from "../assets/Project3.png";
import TrainerImg   from "../assets/trainerabout.png";
import RobotImg     from "../assets/robotworkshop.jpeg";
import workImg      from "../assets/workshop2.jpeg";
import worksImg     from "../assets/Work3.jpeg"

const API = import.meta.env.VITE_API_URL;

function Divider() {
  return <div className="border-t border-white/6" />;
}

function Label({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-5 h-[2px] bg-[#00AEEF]" />
      <span className="text-[10px] tracking-[0.4em] text-[#00AEEF] uppercase font-bold">{children}</span>
    </div>
  );
}

// Feedback Form Component
function FeedbackFormSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "", rating: 5 });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [approvedFeedbacks, setApprovedFeedbacks] = useState([]);

  // Fetch approved feedbacks
  useEffect(() => {
    const fetchApprovedFeedbacks = async () => {
      try {
        const response = await axios.get(`${API}/api/feedback/approved`);
        setApprovedFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching approved feedbacks:', error);
      }
    };

    fetchApprovedFeedbacks();
    
    // Refresh every 30 seconds to check for new approvals
    const interval = setInterval(fetchApprovedFeedbacks, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setSubmitting(true);
    try {
      await axios.post(`${API}/api/feedback`, formData);
      setSubmitted(true);
      setFormData({ name: "", message: "", rating: 5 });
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
      }, 2000);
    } catch (error) {
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Feedback Form Section */}
      {!showForm ? (
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2.5 font-bold uppercase hover:bg-white transition-colors"
            style={{ background: "#00AEEF", color: "#050505", padding: "13px 26px", fontSize: "11px", letterSpacing: "0.14em" }}
          >
            SHARE YOUR FEEDBACK
          </button>
        </div>
      ) : (
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Write Your Feedback</h3>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-[#00AEEF] text-5xl mb-4">✓</div>
              <h4 className="text-lg font-semibold mb-2 text-white">Thank You!</h4>
              <p className="text-gray-400 text-sm">
                Your feedback has been submitted and is pending review.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full bg-[#050505] border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] transition-colors px-4 py-3"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">
                  Rating *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleInputChange("rating", star)}
                      className={`text-2xl transition-colors ${
                        star <= formData.rating ? "text-[#00AEEF]" : "text-gray-600"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                  <span className="ml-3 text-sm text-gray-400 self-center">
                    ({formData.rating} star{formData.rating !== 1 ? 's' : ''})
                  </span>
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">
                  Your Feedback *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="w-full bg-[#050505] border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] transition-colors resize-none px-4 py-3"
                  placeholder="Share your workshop experience..."
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50"
                  style={{ background: "#00AEEF", color: "#050505", fontSize: "11px", letterSpacing: "0.15em" }}
                >
                  {submitting ? "SUBMITTING..." : "SUBMIT FEEDBACK"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 border border-white/20 text-gray-300 rounded-lg hover:border-white/40 hover:text-white transition-colors text-xs uppercase tracking-wider"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Approved Feedbacks Display */}
      {approvedFeedbacks.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">What Our Participants Say</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedFeedbacks.slice(0, 6).map((feedback) => (
              <div key={feedback._id} className="bg-[#0A0A0A] hover:bg-[#111] transition-colors p-6 rounded-xl border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-white text-lg">{feedback.name}</h4>
                    <span className="text-gray-500 text-xs">
                      {new Date(feedback.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex text-[#00AEEF]">
                    {"★".repeat(feedback.rating)}
                    <span className="text-gray-600 ml-1">
                      {"★".repeat(5 - feedback.rating)}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  "{feedback.message}"
                </p>
                
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00AEEF]/20 to-[#00AEEF]/5 border border-[#00AEEF]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#00AEEF]/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span className="text-gray-400 text-xs">Workshop Participant</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {approvedFeedbacks.length > 6 && (
            <div className="text-center mt-8">
              <Link
                to="/feedback"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase border border-[#00AEEF]/30 px-6 py-3 hover:bg-[#00AEEF]/10 transition-colors"
              >
                VIEW ALL FEEDBACK →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function WorkshopPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", institution: "",
    workshopType: "", participants: "", date: "", message: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function setField(key, val) {
    setForm((p) => ({ ...p, [key]: val }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/api/contact/send`, {
        user_name:    form.name,
        user_email:   form.email,
        user_phone:   form.phone,
        organization: form.institution,
        project_type: `Workshop Booking: ${form.workshopType}`,
        message:      `Participants: ${form.participants}\nDate: ${form.date}\n\n${form.message}`,
      });
      setSent(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const inp = "w-full bg-[#0A0A0A] border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#00AEEF] transition-colors placeholder:text-gray-600";

  /* ─────────────────────────────── */
  return (
    <main className="bg-[#050505] text-white">

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "clamp(500px, 90vh, 900px)" }}>
        <img src={workshop1Img} alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "70% center" }} />
        {/* top dark band so transparent navbar text stays readable */}
        <div className="absolute inset-x-0 top-0 h-24" style={{ background: "linear-gradient(to bottom,rgba(3,6,10,.95) 0%,rgba(3,6,10,.5) 60%,transparent 100%)" }} />
        {/* left-side text readability gradient only — right side stays fully visible */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right,rgba(5,5,5,.92) 0%,rgba(5,5,5,.75) 30%,rgba(5,5,5,.2) 55%,rgba(5,5,5,0) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24" style={{ background: "linear-gradient(to top,rgba(5,5,5,.7),transparent)" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 flex flex-col justify-center"
          style={{ minHeight: "clamp(500px, 90vh, 900px)", paddingTop: "120px", paddingBottom: "80px" }}>
          <div style={{ maxWidth: "600px" }}>
            <Label>Workshops by A5X</Label>
            <h1 className="font-black text-white" style={{ fontSize: "clamp(2.8rem,6vw,5.5rem)", lineHeight: "0.95", letterSpacing: "-0.02em" }}>
              LEARN.
              <br />BUILD.
              <br /><span style={{ color: "#00AEEF" }}>INNOVATE.</span>
            </h1>
            <div className="mt-7 w-12 h-[3px] bg-[#00AEEF]" />
            <p className="mt-6 text-gray-300 leading-[1.85]" style={{ fontSize: "15px", maxWidth: "460px" }}>
              Hands-on workshops designed to inspire, educate and empower the next generation
              of innovators, engineers and problem solvers.
            </p>
            <div className="flex flex-wrap gap-4 mt-9">
              <a href="#book" className="inline-flex items-center gap-2.5 font-bold uppercase hover:bg-white transition-colors"
                style={{ background: "#00AEEF", color: "#050505", padding: "13px 26px", fontSize: "11px", letterSpacing: "0.14em" }}>
                BOOK A WORKSHOP
              </a>
              <a href="#workshops" className="inline-flex items-center gap-2 font-bold uppercase border transition-colors hover:border-[#00AEEF] hover:text-[#00AEEF]"
                style={{ border: "1px solid rgba(255,255,255,0.25)", color: "white", padding: "13px 26px", fontSize: "11px", letterSpacing: "0.14em" }}>
                EXPLORE WORKSHOPS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-t border-white/6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/6">
            {[
              { value: "20+",  label: "Workshops Conducted" },
              { value: "500+", label: "Students Trained" },
              { value: "10+",  label: "Partner Institutions" },
              { value: "100%", label: "Hands-On Learning" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-8 text-center">
                <div className="text-3xl font-extrabold text-white" style={{ lineHeight: 1 }}>{s.value}</div>
                <div className="text-[11px] text-gray-500 mt-2 tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── WORKSHOPS ── */}
      <section id="workshops" className="py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <Label>Our Workshops</Label>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Workshops For Every Learner</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/6 border border-white/6 overflow-hidden">
            {[
              { img: RobotImg ,       title: "Robotics Workshop",               desc: "Build, program and control intelligent robots.",              tag: "Robotics"  },
              { img: CozmoImg,    title: "AI & Machine Learning Workshop",   desc: "Learn AI concepts and build smart applications.",             tag: "AI & ML"   },
              { img: DroneImg,    title: "Drone Building Workshop",          desc: "Design, build and fly your own drone.",                       tag: "Drones"    },
              { img: Project3Img, title: "IoT Workshop",                     desc: "Learn IoT and build connected real-world projects.",          tag: "IoT"       },
              { img: Project2Img, title: "Embedded Systems Workshop",        desc: "Master embedded systems and real-time programming.",          tag: "Embedded"  },
            ].map((w) => (
              <div key={w.title} className="group bg-[#0A0A0A] hover:bg-[#111] transition-colors duration-300 flex flex-col">
                <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={w.img} alt={w.title}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[9px] tracking-[0.35em] text-[#00AEEF] uppercase font-bold mb-3">{w.tag}</span>
                  <h3 className="text-white font-bold text-sm mb-2">{w.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{w.desc}</p>
                  <a href="#book" className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase hover:gap-3 transition-all">
                    VIEW DETAILS →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── GALLERY + FORM ── */}
      <section className="py-14 sm:py-24 bg-[#020508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Gallery */}
            <div>
              <Label>Workshop Gallery</Label>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">Moments From Our Workshops</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  {[RobotImg ,RCImg, Project2Img].map((img, i) => (
                    <div key={i} className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <img src={img} alt="" loading="lazy" className="w-full h-full object-cover brightness-75 hover:brightness-90 hover:scale-105 transition-all duration-500" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                    <img src={worksImg} alt="" loading="lazy" className="w-full h-full object-cover brightness-75 hover:brightness-90 hover:scale-105 transition-all duration-500" />
                  </div>
                  {[workImg, FPVImg].map((img, i) => (
                    <div key={i} className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <img src={img} alt="" loading="lazy" className="w-full h-full object-cover brightness-75 hover:brightness-90 hover:scale-105 transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Link to="/gallery" className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase border border-[#00AEEF]/30 px-6 py-3 hover:bg-[#00AEEF]/10 transition-colors">
                  VIEW FULL GALLERY →
                </Link>
              </div>
            </div>

            {/* Booking Form */}
            <div id="book">
              <Label>Book A Workshop</Label>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">Request A Workshop</h2>
              {sent ? (
                <div className="border border-[#00AEEF]/30 bg-[#00AEEF]/5 p-10 text-center">
                  <div className="text-[#00AEEF] text-5xl mb-4 font-bold">✓</div>
                  <h3 className="text-white font-bold text-lg mb-2">Request Submitted!</h3>
                  <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-xs text-[#00AEEF] underline">Submit another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Your Name *</label>
                    <input required placeholder="Enter your name" value={form.name} onChange={(e) => setField("name", e.target.value)} className={inp} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Email *</label>
                      <input required type="email" placeholder="Email address" value={form.email} onChange={(e) => setField("email", e.target.value)} className={inp} />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Phone *</label>
                      <input required type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => setField("phone", e.target.value)} className={inp} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Institution *</label>
                    <input required placeholder="School / College / Organization" value={form.institution} onChange={(e) => setField("institution", e.target.value)} className={inp} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Workshop Type</label>
                      <select value={form.workshopType} onChange={(e) => setField("workshopType", e.target.value)} className={inp + " cursor-pointer"}>
                        <option value="">Select Workshop</option>
                        <option>Robotics Workshop</option>
                        <option>AI & Machine Learning</option>
                        <option>Drone Building</option>
                        <option>IoT Workshop</option>
                        <option>Embedded Systems</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Participants</label>
                      <input type="number" placeholder="Number of participants" value={form.participants} onChange={(e) => setField("participants", e.target.value)} className={inp} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Preferred Date</label>
                    <input type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} className={inp} />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold block mb-1.5">Additional Message</label>
                    <textarea rows={3} placeholder="Any specific requirements..." value={form.message} onChange={(e) => setField("message", e.target.value)} className={inp + " resize-none"} />
                  </div>
                  <button type="submit" disabled={sending}
                    className="w-full py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50"
                    style={{ background: "#00AEEF", color: "#050505", fontSize: "11px", letterSpacing: "0.15em" }}>
                    {sending ? "Submitting..." : "SUBMIT REQUEST"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── WHY CHOOSE A5X ── */}
      <section className="py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-14">
            <Label>Why Choose A5X Workshops?</Label>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The A5X Difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/6 border border-white/6 overflow-hidden">
            {[
              { title: "Hands-On Learning",         desc: "100% practical and project-based." },
              { title: "Expert Mentors",             desc: "Learn from experienced engineers." },
              { title: "Industry Relevant Projects", desc: "Work on real-world projects and tools." },
              { title: "Certification",              desc: "Get a certificate of participation." },
              { title: "Support & Resources",        desc: "Study material and community support." },
            ].map((f) => (
              <div key={f.title} className="bg-[#0A0A0A] hover:bg-[#111] transition-colors p-8 flex flex-col items-center text-center gap-4 cursor-default">
                <div className="w-10 h-10 border border-[#00AEEF]/30 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#00AEEF]" />
                </div>
                <h4 className="text-white font-bold text-xs tracking-wider uppercase">{f.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── WHO CAN JOIN ── */}
      <section className="py-12 sm:py-20 bg-[#020508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-12">
            <Label>Who Can Join</Label>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Workshops for Everyone</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/6 border border-white/6 overflow-hidden">
            {[
              { label: "School Students",  sub: "For curious minds who love to build." },
              { label: "College Students", sub: "For engineering and tech students." },
              { label: "Educators",        sub: "For teachers and faculty development." },
              { label: "Tech Enthusiasts", sub: "For hobbyists and technology lovers." },
              { label: "Organizations",    sub: "For corporate and institutional training." },
            ].map((item) => (
              <div key={item.label} className="bg-[#0A0A0A] hover:bg-[#111] transition-colors p-8 flex flex-col items-center text-center gap-3 cursor-default">
                <div className="w-8 h-8 border border-[#00AEEF]/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-[#00AEEF]" />
                </div>
                <h4 className="text-white font-bold text-xs tracking-wider uppercase">{item.label}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-14">
            <Label>What Our Participants Say</Label>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Real Feedback. Real Impact.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/6 border border-white/6 overflow-hidden">
            {[
              { name: "Rahul Sharma",  role: "Workshop Participant", text: "The robotics workshop by A5X was amazing! Very well structured and practical. I built my first robot and learned so much." },
              { name: "Ananya Verma",  role: "Workshop Participant", text: "The drone workshop was super fun and informative. I learned about drone design, electronics and flying. Highly recommended!" },
              { name: "Aman Singhal",  role: "Workshop Participant", text: "Great hands-on experience with IoT and embedded systems. The mentors explain everything so well!" },
            ].map((t, index) => (
              <div key={t.name} className="bg-[#0A0A0A] hover:bg-[#111] transition-colors p-8 flex flex-col gap-5">
                <div className="text-[#00AEEF] text-4xl font-bold leading-none">"</div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                  {/* Generic avatar placeholder instead of founder photos */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00AEEF]/20 to-[#00AEEF]/5 border border-[#00AEEF]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#00AEEF]/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">{t.name}</div>
                    <div className="text-gray-600 text-[10px] tracking-wider uppercase mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FEEDBACK FORM ── */}
      <section className="py-14 sm:py-24 bg-[#020508]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center mb-10">
            <Label>Share Your Experience</Label>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Workshop Feedback</h2>
            <div className="mt-4 w-20 h-[2px] bg-[#00AEEF] rounded-full mx-auto" />
            <p className="mt-4 text-gray-400 max-w-lg mx-auto">
              Help us improve by sharing your workshop experience. All reviews are moderated before being displayed.
            </p>
          </div>

          <FeedbackFormSection />
        </div>
      </section>

      <Divider />

      {/* ── FINAL CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <img src={workshop1Img} alt="" className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.35]" />
        <div className="absolute inset-0 bg-[#050505]/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <p className="text-[10px] tracking-[0.35em] text-[#00AEEF] uppercase font-bold mb-4">Get Started Today</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                READY TO START<br /><span style={{ color: "#00AEEF" }}>LEARNING?</span>
              </h2>
              <p className="mt-5 text-gray-400 text-base leading-relaxed max-w-lg">
                Book a workshop for your school, college or organization and empower your
                team with practical engineering skills.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
              <a href="#book" className="inline-flex items-center justify-center gap-2.5 font-bold uppercase hover:bg-white transition-colors"
                style={{ background: "#00AEEF", color: "#050505", padding: "14px 28px", fontSize: "11px", letterSpacing: "0.15em" }}>
                BOOK A WORKSHOP NOW
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2.5 font-bold uppercase border transition-colors hover:border-[#00AEEF] hover:text-[#00AEEF]"
                style={{ border: "1px solid rgba(255,255,255,0.25)", color: "white", padding: "14px 28px", fontSize: "11px", letterSpacing: "0.15em" }}>
                DOWNLOAD BROCHURE
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
