import { useEffect, useState } from "react";
import axios from "../utils/axiosClient";
import FeedbackCard from "../components/Feedback/FeedbackCard";

export default function SeeMoreFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("/feedback/approved").then((res) => {
      setFeedbacks(res.data);
    });
  }, []);

  return (
    // 🔥 pt-28 fixes navbar overlap
    <section className="min-h-screen bg-black text-white pt-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <span className="text-cyan-400 text-sm tracking-widest uppercase">
            Testimonials
          </span>

          <h1 className="mt-2 text-4xl font-semibold">
            All Feedback
          </h1>

          <div className="mt-3 w-20 h-[2px] bg-cyan-400 rounded-full" />
        </div>

        {/* EMPTY STATE */}
        {feedbacks.length === 0 && (
          <p className="text-gray-400 text-center mt-20">
            No feedback available.
          </p>
        )}

        {/* FEEDBACK GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((fb) => (
            <FeedbackCard key={fb._id} data={fb} />
          ))}
        </div>
      </div>
    </section>
  );
}