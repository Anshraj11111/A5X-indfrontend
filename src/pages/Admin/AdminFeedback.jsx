import { useEffect, useState } from "react";
import axios from "../../utils/axiosClient";

export default function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  // Fetch all feedbacks (admin)
  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("/feedback/admin");
      setFeedbacks(res.data);
    } catch (error) {
      console.error("Failed to fetch feedbacks");
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Approve feedback
  const approveFeedback = async (id) => {
    try {
      setLoadingId(id);
      await axios.put(`/feedback/approve/${id}`);
      await fetchFeedbacks();
    } catch {
      alert("Failed to approve feedback");
    } finally {
      setLoadingId(null);
    }
  };

  // Reject pending feedback
  const rejectFeedback = async (id) => {
    if (!window.confirm("Are you sure you want to reject this feedback?")) return;

    try {
      setLoadingId(id);
      await axios.delete(`/feedback/${id}`);
      await fetchFeedbacks();
    } catch {
      alert("Failed to reject feedback");
    } finally {
      setLoadingId(null);
    }
  };

  // Delete approved feedback
  const deleteFeedback = async (id) => {
    if (!window.confirm("Are you sure you want to delete this approved feedback?")) return;

    try {
      setLoadingId(id);
      await axios.delete(`/feedback/${id}`);
      await fetchFeedbacks();
    } catch {
      alert("Failed to delete feedback");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    // 👇 pt-28 fixes navbar overlap
    <section className="min-h-screen bg-black text-white pt-28 px-6">
      {/* HEADER */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          {/* <span className="text-cyan-400 text-sm tracking-widest uppercase">
            Admin Panel
          </span> */}

          <h1 className="mt-2 text-4xl font-semibold">
            Feedback Management
          </h1>

          <div className="mt-3 w-20 h-[2px] bg-cyan-400 rounded-full" />
        </div>

        <div className="text-gray-400 text-sm">
          Total feedbacks:{" "}
          <b className="text-white">{feedbacks.length}</b>
        </div>
      </div>

      {/* EMPTY STATE */}
      {feedbacks.length === 0 && (
        <div className="text-center text-gray-400 mt-24">
          No feedback found.
        </div>
      )}

      {/* FEEDBACK LIST */}
      <div className="space-y-5">
        {feedbacks.map((fb) => (
          <div
            key={fb._id}
            className="
              group
              bg-[#0b0f19]
              border border-white/10
              rounded-2xl
              p-6
              flex flex-col md:flex-row
              md:justify-between
              gap-6
              transition-all duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
            "
          >
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <h4 className="text-lg font-semibold text-white">
                {fb.name}
              </h4>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {fb.message}
              </p>

              <div className="flex items-center gap-1 text-cyan-400 mt-3">
                {"★".repeat(fb.rating)}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-3">
              {!fb.isApproved ? (
                <>
                  <button
                    onClick={() => approveFeedback(fb._id)}
                    disabled={loadingId === fb._id}
                    className="
                      px-5 py-2.5 rounded-lg
                      bg-cyan-400 text-black font-medium
                      transition-all duration-300
                      hover:bg-cyan-300 hover:scale-105
                      active:scale-95
                      disabled:opacity-60
                    "
                  >
                    {loadingId === fb._id ? "Approving..." : "Approve"}
                  </button>

                  <button
                    onClick={() => rejectFeedback(fb._id)}
                    disabled={loadingId === fb._id}
                    className="
                      px-5 py-2.5 rounded-lg
                      border border-red-400 text-red-400
                      transition-all duration-300
                      hover:bg-red-400 hover:text-black hover:scale-105
                      active:scale-95
                      disabled:opacity-60
                    "
                  >
                    Reject
                  </button>
                </>
              ) : (
                <>
                  <span className="text-green-400 font-medium">
                    Approved
                  </span>

                  <button
                    onClick={() => deleteFeedback(fb._id)}
                    disabled={loadingId === fb._id}
                    className="
                      px-5 py-2.5 rounded-lg
                      border border-red-400 text-red-400
                      transition-all duration-300
                      hover:bg-red-400 hover:text-black hover:scale-105
                      active:scale-95
                      disabled:opacity-60
                    "
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}