import { useRef, useState } from "react";
import axios from "axios";

export default function Contact() {
  const formRef = useRef(null);

  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setDone(false);

    try {
      const formData = new FormData(formRef.current);

      // ✅ SAME FIELD NAMES (as your EmailJS form)
      const payload = {
        user_name: formData.get("user_name"),
        user_email: formData.get("user_email"),
        user_phone: formData.get("user_phone"),
        organization: formData.get("organization"),
        project_type: formData.get("project_type"),
        budget: formData.get("budget"),
        message: formData.get("message"),
      };

      const res = await axios.post(
        "http://localhost:5000/api/contact/send",
        payload
      );

      if (res.data.success) {
        setDone(true);
        formRef.current.reset();
      } else {
        alert("❗ Something went wrong. Try again.");
      }
    } catch (err) {
      console.log(err);
      alert("❗ Something went wrong. Try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="pt-24 bg-black text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-4xl font-bold">
          Contact <span className="text-[#0ff]">A5X Robotics</span>
        </h1>

        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          Tell us about your requirements. We reply within <b>24–48 hours</b>.
        </p>

        {/* ✅ SAME FORM + SAME FIELDS */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="mt-10 grid gap-4 text-sm"
        >
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

          {/* ✅ Phone Number (Only 9 Digits Allowed) */}
          <input
            name="user_phone"
            placeholder="Phone Number"
            required
            type="tel"
            inputMode="numeric"
            maxLength={10}
            pattern="\d{10}"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
            }}
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
