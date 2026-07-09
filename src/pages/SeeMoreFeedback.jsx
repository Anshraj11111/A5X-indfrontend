import { useEffect, useState } from "react";
import axios from "../utils/axiosClient";
import FeedbackCard from "../components/Feedback/FeedbackCard";

const API = import.meta.env.VITE_API_URL;

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
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <span className="text-cyan-400 text-sm tracking-widest uppercase">
            Customer Feedback
          </span>

          <h1 className="mt-2 text-4xl font-semibold">
            Workshop Feedback & Reviews
          </h1>

          <div className="mt-3 w-20 h-[2px] bg-cyan-400 rounded-full mx-auto" />

          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Read what our workshop participants have to say about their experience.
          </p>
        </div>

        {/* EXISTING FEEDBACK DISPLAY */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">What Our Participants Say</h2>
          
          {/* EMPTY STATE */}
          {feedbacks.length === 0 && (
            <p className="text-gray-400 text-center mt-12">
              No approved feedback yet. Check back later for reviews!
            </p>
          )}

          {/* FEEDBACK GRID */}
          {feedbacks.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feedbacks.map((fb) => (
                <FeedbackCard key={fb._id} data={fb} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}