import { useEffect, useState } from "react";
import axios from "../../utils/axiosClient";

export default function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loadingId, setLoadingId] = useState(null);

  // Fetch all feedbacks (admin)
  const fetchFeedbacks = async () => {
    try {
      console.log('Fetching feedbacks...');
      const res = await axios.get("/feedback/admin");
      console.log('Fetched feedbacks:', res.data);
      setFeedbacks(res.data);
      
      // Apply current filter to the new data
      handleFilterChange(activeFilter, res.data);
    } catch (error) {
      console.error("Failed to fetch feedbacks", error);
      console.error('Error response:', error.response);
    }
  };

  // Filter feedbacks based on status
  const handleFilterChange = (filter, feedbackList = feedbacks) => {
    console.log('Filtering with:', filter, 'Data:', feedbackList);
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredFeedbacks(feedbackList);
    } else {
      const filtered = feedbackList.filter(fb => 
        filter === 'pending' ? (!fb.status || fb.status === 'pending') : fb.status === filter
      );
      console.log('Filtered result:', filtered);
      setFilteredFeedbacks(filtered);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Remove this useEffect as it's causing issues
  // useEffect(() => {
  //   handleFilterChange(activeFilter);
  // }, [feedbacks]);

  // Approve feedback
  const approveFeedback = async (id) => {
    try {
      setLoadingId(id);
      console.log('Approving feedback with ID:', id);
      
      // Make API call
      const response = await axios.put(`/feedback/approve/${id}`);
      console.log('Approve response:', response.data);
      
      // Instead of refetching, update state directly
      setFeedbacks(prev => prev.map(fb => 
        fb._id === id 
          ? { ...fb, status: 'approved', isApproved: true }
          : fb
      ));
      
      // Update filtered feedbacks immediately
      setFilteredFeedbacks(prev => prev.map(fb => 
        fb._id === id 
          ? { ...fb, status: 'approved', isApproved: true }
          : fb
      ));
      
      console.log('Frontend state updated immediately');
      
      // Also fetch fresh data in background
      setTimeout(() => fetchFeedbacks(), 1000);
      
    } catch (error) {
      console.error('Error approving feedback:', error);
      console.error('Error response:', error.response);
      alert(`Failed to approve feedback: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoadingId(null);
    }
  };

  // Reject feedback (instead of deleting)
  const rejectFeedback = async (id) => {
    if (!window.confirm("Are you sure you want to reject this feedback?")) return;

    try {
      setLoadingId(id);
      console.log('Rejecting feedback with ID:', id);
      const response = await axios.put(`/feedback/reject/${id}`);
      console.log('Reject response:', response.data);
      
      // Update state directly
      setFeedbacks(prev => prev.map(fb => 
        fb._id === id 
          ? { ...fb, status: 'rejected', isApproved: false }
          : fb
      ));
      
      // Update filtered feedbacks immediately
      setFilteredFeedbacks(prev => prev.map(fb => 
        fb._id === id 
          ? { ...fb, status: 'rejected', isApproved: false }
          : fb
      ));
      
      // Fetch fresh data in background
      setTimeout(() => fetchFeedbacks(), 1000);
      
    } catch (error) {
      console.error('Error rejecting feedback:', error);
      console.error('Error response:', error.response);
      alert(`Failed to reject feedback: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoadingId(null);
    }
  };

  // Delete approved feedback
  const deleteFeedback = async (id) => {
    if (!window.confirm("Are you sure you want to delete this approved feedback?")) return;

    try {
      setLoadingId(id);
      console.log('Deleting feedback with ID:', id);
      const response = await axios.delete(`/feedback/${id}`);
      console.log('Delete response:', response.data);
      await fetchFeedbacks();
    } catch (error) {
      console.error('Error deleting feedback:', error);
      console.error('Error response:', error.response);
      alert(`Failed to delete feedback: ${error.response?.data?.message || error.message}`);
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

        <div className="text-gray-400 text-sm flex items-center gap-4">
          <span>Total: <b className="text-white">{feedbacks.length}</b></span>
          <span>Showing: <b className="text-white">{filteredFeedbacks.length}</b></span>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="mb-8 flex gap-2">
        {[
          { key: 'all', label: 'All', count: feedbacks.length },
          { key: 'pending', label: 'Pending', count: feedbacks.filter(f => !f.status || f.status === 'pending').length },
          { key: 'approved', label: 'Approved', count: feedbacks.filter(f => f.status === 'approved').length },
          { key: 'rejected', label: 'Rejected', count: feedbacks.filter(f => f.status === 'rejected').length },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleFilterChange(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
              activeFilter === tab.key 
                ? 'bg-cyan-400 text-black' 
                : 'bg-[#0b0f19] border border-white/10 text-gray-300 hover:border-cyan-400/40'
            }`}
          >
            {tab.label}
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              activeFilter === tab.key 
                ? 'bg-black/20' 
                : 'bg-white/10'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredFeedbacks.length === 0 && (
        <div className="text-center text-gray-400 mt-24">
          {activeFilter === 'all' ? 'No feedback found.' : `No ${activeFilter} feedback found.`}
        </div>
      )}

      {/* FEEDBACK LIST */}
      <div className="space-y-5">
        {filteredFeedbacks.map((fb) => (
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
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-lg font-semibold text-white">
                  {fb.name}
                </h4>
                {/* Status badge */}
                <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                  fb.status === 'approved' ? 'bg-green-400/20 text-green-400' :
                  fb.status === 'rejected' ? 'bg-red-400/20 text-red-400' :
                  'bg-yellow-400/20 text-yellow-400'
                }`}>
                  {fb.status ? fb.status.toUpperCase() : 'PENDING'}
                </span>
              </div>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {fb.message}
              </p>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1 text-cyan-400">
                  {"★".repeat(fb.rating)}
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(fb.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-3">
              {fb.status === 'pending' || !fb.status ? (
                <>
                  <button
                    onClick={() => approveFeedback(fb._id)}
                    disabled={loadingId === fb._id}
                    className="
                      px-5 py-2.5 rounded-lg
                      bg-green-500 text-white font-medium
                      transition-all duration-300
                      hover:bg-green-400 hover:scale-105
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
                      bg-red-500 text-white font-medium
                      transition-all duration-300
                      hover:bg-red-400 hover:scale-105
                      active:scale-95
                      disabled:opacity-60
                    "
                  >
                    {loadingId === fb._id ? "Rejecting..." : "Reject"}
                  </button>
                </>
              ) : fb.status === 'approved' ? (
                <>
                  <span className="text-green-400 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Approved
                  </span>

                  <button
                    onClick={() => deleteFeedback(fb._id)}
                    disabled={loadingId === fb._id}
                    className="
                      px-4 py-2 rounded-lg
                      border border-red-400 text-red-400
                      transition-all duration-300
                      hover:bg-red-400 hover:text-white hover:scale-105
                      active:scale-95
                      disabled:opacity-60
                      text-sm
                    "
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <span className="text-red-400 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Rejected
                  </span>

                  <button
                    onClick={() => approveFeedback(fb._id)}
                    disabled={loadingId === fb._id}
                    className="
                      px-4 py-2 rounded-lg
                      border border-green-400 text-green-400
                      transition-all duration-300
                      hover:bg-green-400 hover:text-white hover:scale-105
                      active:scale-95
                      disabled:opacity-60
                      text-sm
                    "
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => deleteFeedback(fb._id)}
                    disabled={loadingId === fb._id}
                    className="
                      px-4 py-2 rounded-lg
                      border border-red-400 text-red-400
                      transition-all duration-300
                      hover:bg-red-400 hover:text-white hover:scale-105
                      active:scale-95
                      disabled:opacity-60
                      text-sm
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