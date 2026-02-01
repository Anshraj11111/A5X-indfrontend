import { useEffect, useState } from "react";
import axios from "../../utils/axiosClient";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    viewed: 0,
    replied: 0,
    unread: 0,
  });
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [selectedContact, setSelectedContact] = useState(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});

  // Fetch all contacts
  const fetchContacts = async (pageNum = 1, filterStatus = "all") => {
    try {
      setLoading(true);
      const params = { page: pageNum, limit: 10 };

      if (filterStatus !== "all") {
        params.status = filterStatus;
      }

      const res = await axios.get("/admin/contacts", { params });
      setContacts(res.data.contacts);
      setPagination(res.data.pagination);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch stats
  const fetchStats = async () => {
    try {
      const res = await axios.get("/admin/contacts/stats");
      setStats(res.data.stats);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  };

  useEffect(() => {
    fetchContacts(page, filter);
    fetchStats();
  }, []);

  // Handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setPage(1);
    fetchContacts(1, newFilter);
  };

  // Update contact status
  const updateStatus = async (id, newStatus) => {
    try {
      setLoadingId(id);
      await axios.put(`/admin/contacts/${id}/status`, { status: newStatus });
      await fetchContacts(page, filter);
      await fetchStats();
      if (selectedContact?._id === id) {
        setSelectedContact(null);
      }
    } catch (error) {
      alert("Failed to update status");
    } finally {
      setLoadingId(null);
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;

    try {
      setLoadingId(id);
      await axios.delete(`/admin/contacts/${id}`);
      await fetchContacts(page, filter);
      await fetchStats();
      if (selectedContact?._id === id) {
        setSelectedContact(null);
      }
    } catch (error) {
      alert("Failed to delete contact");
    } finally {
      setLoadingId(null);
    }
  };

  // Handle pagination
  const handleNextPage = () => {
    if (page < pagination.pages) {
      const newPage = page + 1;
      setPage(newPage);
      fetchContacts(newPage, filter);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      fetchContacts(newPage, filter);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white pt-28 px-6">
      {/* HEADER */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold">Contact Enquiries</h1>
          <div className="mt-3 w-20 h-[2px] bg-cyan-400 rounded-full" />
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { label: "Total", value: stats.total, color: "bg-blue-500" },
          { label: "New", value: stats.new, color: "bg-green-500" },
          { label: "Viewed", value: stats.viewed, color: "bg-yellow-500" },
          { label: "Replied", value: stats.replied, color: "bg-purple-500" },
          { label: "Unread", value: stats.unread, color: "bg-red-500" },
        ].map((stat, idx) => (
          <div key={idx} className={`${stat.color} p-4 rounded-lg text-center`}>
            <p className="text-sm text-white/70">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {["all", "new", "viewed", "replied"].map((f) => (
          <button
            key={f}
            onClick={() => handleFilterChange(f)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
              filter === f
                ? "bg-cyan-400 text-black font-semibold"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* CONTACTS LIST */}
        <div className="md:col-span-2">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            {loading ? (
              <div className="p-6 text-center text-gray-400">
                Loading contacts...
              </div>
            ) : contacts.length === 0 ? (
              <div className="p-6 text-center text-gray-400">
                No contacts found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800 border-b border-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Email
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {contacts.map((contact) => (
                      <tr
                        key={contact._id}
                        onClick={() => setSelectedContact(contact)}
                        className={`hover:bg-gray-800 cursor-pointer transition ${
                          selectedContact?._id === contact._id
                            ? "bg-gray-800"
                            : ""
                        } ${!contact.isRead ? "bg-gray-800/50" : ""}`}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            {!contact.isRead && (
                              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                            )}
                            <span>{contact.user_name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-400">
                          {contact.user_email}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              contact.status === "new"
                                ? "bg-green-500/20 text-green-400"
                                : contact.status === "viewed"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-purple-500/20 text-purple-400"
                            }`}
                          >
                            {contact.status.charAt(0).toUpperCase() +
                              contact.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-400">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* PAGINATION */}
            {pagination.pages > 1 && (
              <div className="flex justify-between items-center px-4 py-3 border-t border-gray-700 bg-gray-800">
                <button
                  onClick={handlePrevPage}
                  disabled={page === 1}
                  className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="text-sm text-gray-400">
                  Page {page} of {pagination.pages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={page >= pagination.pages}
                  className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          {selectedContact ? (
            <div className="bg-gray-900 rounded-lg p-6 sticky top-32">
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-400">Name</p>
                  <p className="text-white font-semibold">
                    {selectedContact.user_name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-cyan-400 break-all">
                    {selectedContact.user_email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">{selectedContact.user_phone}</p>
                </div>

                {selectedContact.organization && (
                  <div>
                    <p className="text-sm text-gray-400">Organization</p>
                    <p className="text-white">
                      {selectedContact.organization}
                    </p>
                  </div>
                )}

                {selectedContact.project_type && (
                  <div>
                    <p className="text-sm text-gray-400">Project Type</p>
                    <p className="text-white">
                      {selectedContact.project_type}
                    </p>
                  </div>
                )}

                {selectedContact.budget && (
                  <div>
                    <p className="text-sm text-gray-400">Budget</p>
                    <p className="text-white">{selectedContact.budget}</p>
                  </div>
                )}

                <div>
                  <p className="text-sm text-gray-400">Message</p>
                  <p className="text-white text-sm bg-gray-800 p-3 rounded mt-2">
                    {selectedContact.message}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Submitted</p>
                  <p className="text-white">
                    {new Date(selectedContact.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* STATUS BUTTONS */}
              <div className="space-y-2 mb-4">
                <button
                  onClick={() => updateStatus(selectedContact._id, "viewed")}
                  disabled={
                    loadingId === selectedContact._id ||
                    selectedContact.status === "viewed"
                  }
                  className="w-full px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded hover:bg-yellow-500/30 disabled:opacity-50"
                >
                  Mark as Viewed
                </button>

                <button
                  onClick={() => updateStatus(selectedContact._id, "replied")}
                  disabled={
                    loadingId === selectedContact._id ||
                    selectedContact.status === "replied"
                  }
                  className="w-full px-4 py-2 bg-purple-500/20 text-purple-400 rounded hover:bg-purple-500/30 disabled:opacity-50"
                >
                  Mark as Replied
                </button>

                <button
                  onClick={() => deleteContact(selectedContact._id)}
                  disabled={loadingId === selectedContact._id}
                  className="w-full px-4 py-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 disabled:opacity-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gray-900 rounded-lg p-6 text-center text-gray-400">
              Select a contact to view details
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
