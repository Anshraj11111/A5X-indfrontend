import { useEffect, useState } from "react";
import axios from "../../utils/axiosClient";
import FeedbackCard from "./FeedbackCard";
import { Link } from "react-router-dom";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("/feedback/top").then((res) => {
      setFeedbacks(res.data);
    });
  }, []);

  if (!feedbacks.length) {
    return <p className="text-gray-400">No feedback yet</p>;
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((item) => (
          <FeedbackCard key={item._id} data={item} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/feedbacks"
          className="text-cyan-400 hover:underline"
        >
          See more feedback →
        </Link>
      </div>
    </>
  );
}