import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_s8btk3p",       // <-- change
        "template_j9d3edi",      // <-- change
        formRef.current,
        "d1wa1vtbzpzowdtCg"       // <-- change
      )
      .then(
        (res) => {
          setSending(false);
          setDone(true);
          formRef.current.reset();
        },
        (err) => {
          setSending(false);
          alert("❗ Something went wrong. Try again.");
        }
      );
  };

  return (
    <main className="pt-24 bg-black text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 pb-16">

        <h1 className="text-4xl font-bold">
          Contact <span className="text-[#0ff]">A5X Robotics</span>
        </h1>
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          Tell us about your requirements.  
          We reply within <b>24–48 hours</b>.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="mt-10 grid gap-4 text-sm">

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="user_name"
              required
              placeholder="Your Name"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#0ff]"
            />

            <input
              name="user_email"
              type="email"
              required
              placeholder="Email"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#0ff]"
            />
          </div>

          <input
            name="user_phone"
            placeholder="Phone Number"
            required
            className="bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#0ff]"
          />

          <input
            name="organization"
            placeholder="Organisation / Institute (Optional)"
            className="bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#0ff]"
          />

          <select
            name="project_type"
            className="bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#0ff]"
          >
            <option value="">Select Project Type</option>
            <option>Robotics</option>
            <option>Automation / PLC</option>
            <option>AI / ML</option>
            <option>Website / Software</option>
            <option>Workshop / Training</option>
            <option>Industrial Project</option>
          </select>

          <input
            name="budget"
            placeholder="Budget Range (Optional)"
            className="bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#0ff]"
          />

          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us about what you want to build..."
            className="bg-black border border-white/10 rounded-lg px-4 py-3 outline-none resize-none focus:border-[#0ff]"
          />

          <button
            disabled={sending}
            className="mt-2 w-full px-5 py-3 rounded-full bg-[#0ff] text-black font-semibold text-sm"
          >
            {sending ? "Sending..." : "Submit Enquiry"}
          </button>

          {done && (
            <p className="text-[#0ff] text-center text-sm mt-2">
              ✔️ Thank you! Your enquiry has been sent.
            </p>
          )}
        </form>

       
      </section>
    </main>
  );
}
