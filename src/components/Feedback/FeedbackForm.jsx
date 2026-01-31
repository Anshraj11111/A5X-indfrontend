import { useState } from "react";
import axios from "../../utils/axiosClient";

const blockedWords = [
  "bc", "mc", "madarchod", "bhenchod",
  "chutiya", "gandu", "fuck", "shit", "asshole" , "gaand" ,
  "bkl" , "bhosdike" , "lund", "randi", "behenchod" ,
  "sex", "porn", "nude", "naked", "dick", "pussy","choot" ,
];

export default function FeedbackForm({ onClose }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const containsAbuse = (text) => {
    const lower = text.toLowerCase();
    return blockedWords.some(word => lower.includes(word));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (containsAbuse(name) || containsAbuse(message)) {
      setError("madarchod banao ge to feedback kaise milega?");
      return;
    }

    setLoading(true);

    try {
      await axios.post("/feedback", { name, message, rating });
      onClose();
      alert("Feedback submitted 👍");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <form
        onSubmit={submitHandler}
        className="
          w-full max-w-md
          bg-[#0b0f19]
          border border-white/10
          rounded-2xl
          p-7
          shadow-xl
          transition-all
        "
      >
        {/* HEADER */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white">
            Share your feedback
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Your experience helps us improve A5X
          </p>
        </div>

        {/* NAME */}
        <input
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            w-full mb-4 px-4 py-3 rounded-lg
            bg-black border border-[#394957]
            text-white text-sm
            focus:border-cyan-400 focus:outline-none
            transition
          "
        />

        {/* MESSAGE */}
        <textarea
          required
          rows={4}
          placeholder="Write your feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="
            w-full mb-5 px-4 py-3 rounded-lg
            bg-black border border-[#394957]
            text-white text-sm
            focus:border-cyan-400 focus:outline-none
            transition
          "
        />

        {/* STAR RATING */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">
            Rate your experience
          </p>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="text-2xl transition-transform hover:scale-110"
              >
                <span
                  className={
                    (hoverRating || rating) >= star
                      ? "text-cyan-400"
                      : "text-gray-600"
                  }
                >
                  ★
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-400 text-sm mb-4">
            {error}
          </p>
        )}

        {/* ACTIONS */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            className="
              px-5 py-2.5 rounded-lg font-medium
              bg-cyan-400 text-black
              hover:bg-cyan-300
              transition
              disabled:opacity-60
            "
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}