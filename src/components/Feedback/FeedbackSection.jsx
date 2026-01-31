import { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

export default function FeedbackSection() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <section className="relative bg-black overflow-hidden">
      {/* subtle cyan background glow (same as hero vibe) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-cyan-400 text-sm tracking-widest uppercase">
              Testimonials
            </span>

            <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-white leading-tight">
              What People Say
            </h2>

            <div className="mt-4 w-16 h-[2px] bg-cyan-400 rounded-full" />

            <p className="mt-5 text-gray-400 max-w-xl">
              Honest feedback from students, institutions and partners who
              experienced A5X robotics & automation solutions.
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setOpenForm(true)}
            className="
              mt-4 md:mt-0
              px-6 py-3 rounded-lg font-medium
              border border-cyan-400 text-cyan-400
              hover:bg-cyan-400 hover:text-black
              transition-all duration-300
            "
          >
            Give Feedback
          </button>
        </div>

        {/* FEEDBACK LIST */}
        <div>
          <FeedbackList />
        </div>
      </div>

      {/* MODAL */}
      {openForm && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <FeedbackForm onClose={() => setOpenForm(false)} />
        </div>
      )}
    </section>
  );
}