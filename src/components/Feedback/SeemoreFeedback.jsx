import { useEffect, useState } from "react";
import axios from "../../utils/axiosClient";
import FeedbackCard from "./FeedbackCard";

export default function SeeMoreFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("/feedback/approved").then((res) => {
      setFeedbacks(res.data);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-8">
        All Feedback
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((item) => (
          <FeedbackCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}