import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../utils/axiosClient";

export default function AdminLabManager() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingModule, setEditingModule] = useState(null);
  const [expandedModules, setExpandedModules] = useState(new Set());
  const [deletingId, setDeletingId] = useState(null);

  const navigate = useNavigate();

  // Fetch all modules
  const fetchModules = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await client.get("/lab/modules");
      setModules(res.data);
    } catch (err) {
      console.error("Failed to fetch modules:", err);
      setError("Failed to load lab modules");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  // Toggle module expansion
  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  // Delete module with confirmation
  const handleDelete = async (moduleId) => {
    if (!window.confirm("Are you sure you want to delete this module? All components will also be deleted.")) {
      return;
    }

    try {
      setDeletingId(moduleId);
      await client.delete(`/lab/modules/${moduleId}`);
      await fetchModules();
    } catch (err) {
      console.error("Failed to delete module:", err);
      alert("Failed to delete module");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#020409] text-white pt-28 px-6 pb-16">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-semibold">🧪 Lab Management</h1>
            <p className="text-gray-400 text-sm mt-1">
              Manage lab modules and components
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="px-6 py-2.5 rounded-xl bg-gray-700 text-white font-bold hover:bg-gray-600 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                setShowCreateForm(true);
                setEditingModule(null);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#0ff] text-black font-bold hover:opacity-90 transition shadow-[0_0_15px_#0ff6]"
            >
              + Create Module
            </button>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
            {error}
          </div>
        )}

        {/* Create/Edit Form */}
        {(showCreateForm || editingModule) && (
          <ModuleForm
            module={editingModule}
            onClose={() => {
              setShowCreateForm(false);
              setEditingModule(null);
            }}
            onSuccess={() => {
              setShowCreateForm(false);
              setEditingModule(null);
              fetchModules();
            }}
          />
        )}

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ff]"></div>
            <p className="mt-4 text-gray-400">Loading modules...</p>
          </div>
        ) : modules.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No modules found. Create your first module to get started.
          </div>
        ) : (
          /* Module List */
          <div className="space-y-4">
            {modules.map((module) => (
              <div
                key={module._id}
                className="bg-[#0a0f14] border border-[#0ff]/20 rounded-xl overflow-hidden hover:border-[#0ff]/40 transition"
              >
                {/* Module Header */}
                <div className="p-5 flex items-center justify-between">
                  <div className="flex-1">
                    <button
                      onClick={() => toggleModule(module._id)}
                      className="text-left w-full"
                    >
                      <h3 className="text-lg font-semibold text-[#0ff]">
                        {module.emoji} {module.title}
                      </h3>
                      {module.classRange && (
                        <p className="text-sm text-gray-400 mt-1">
                          {module.classRange}
                        </p>
                      )}
                      {module.price && (
                        <p className="text-sm text-[#0ff] font-semibold mt-1">
                          💰 {module.price}
                        </p>
                      )}
                      {module.subtitle && (
                        <p className="text-sm text-gray-300 mt-1">
                          {module.subtitle}
                        </p>
                      )}
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => toggleModule(module._id)}
                      className="px-4 py-2 rounded-lg bg-gray-700 text-white text-sm hover:bg-gray-600 transition"
                    >
                      {expandedModules.has(module._id) ? "Collapse" : "Expand"}
                    </button>
                    <button
                      onClick={() => setEditingModule(module)}
                      className="px-4 py-2 rounded-lg bg-[#0ff]/20 text-[#0ff] text-sm hover:bg-[#0ff]/30 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(module._id)}
                      disabled={deletingId === module._id}
                      className="px-4 py-2 rounded-lg border border-red-400 text-red-400 text-sm hover:bg-red-400 hover:text-black transition disabled:opacity-50"
                    >
                      {deletingId === module._id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>

                {/* Expanded Content - Components */}
                {expandedModules.has(module._id) && (
                  <div className="px-5 pb-5 border-t border-[#0ff]/10">
                    <h4 className="text-sm font-semibold text-gray-300 mt-4 mb-3">
                      Components ({module.components?.length || 0})
                    </h4>
                    {module.components && module.components.length > 0 ? (
                      <div className="overflow-hidden rounded-lg border border-[#0ff]/10">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-[#061016] text-gray-400">
                            <tr>
                              <th className="p-3">Component</th>
                              <th className="p-3">Quantity</th>
                              <th className="p-3">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {module.components
                              .sort((a, b) => a.order - b.order)
                              .map((component) => (
                                <tr
                                  key={component._id}
                                  className="border-t border-[#0ff]/10"
                                >
                                  <td className="p-3 text-gray-300">
                                    {component.name}
                                  </td>
                                  <td className="p-3 text-gray-300">
                                    {component.quantity}
                                  </td>
                                  <td className="p-3 text-[#0ff] font-semibold">
                                    {component.price}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400">
                        No components added yet.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* Module Form Component */
function ModuleForm({ module, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: module?.title || "",
    subtitle: module?.subtitle || "",
    emoji: module?.emoji || "🔹",
    classRange: module?.classRange || "",
    price: module?.price || "Coming Soon",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (module) {
        // Update existing module
        await client.put(`/lab/modules/${module._id}`, formData);
      } else {
        // Create new module
        await client.post("/lab/modules", formData);
      }
      onSuccess();
    } catch (err) {
      console.error("Failed to save module:", err);
      setError(
        err.response?.data?.message ||
          `Failed to ${module ? "update" : "create"} module`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8 bg-[#0a0f14] border border-[#0ff]/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#0ff]">
          {module ? "Edit Module" : "Create New Module"}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition"
        >
          ✕ Close
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* Title */}
        <div>
          <label className="text-xs text-gray-300 block mb-1">
            Title <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="MODULE A: FOUNDATION ELECTRONICS"
            value={formData.title}
            required
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        {/* Subtitle */}
        <div>
          <label className="text-xs text-gray-300 block mb-1">Subtitle</label>
          <input
            type="text"
            className="input-field"
            placeholder="Detailed breakdown coming soon"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
          />
        </div>

        {/* Emoji and Class Range */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-300 block mb-1">Emoji</label>
            <input
              type="text"
              className="input-field"
              placeholder="🟢"
              value={formData.emoji}
              onChange={(e) =>
                setFormData({ ...formData, emoji: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-xs text-gray-300 block mb-1">
              Class Range
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Class 5–6"
              value={formData.classRange}
              onChange={(e) =>
                setFormData({ ...formData, classRange: e.target.value })
              }
            />
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="text-xs text-gray-300 block mb-1">
            Module Price
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="₹15,000 or Coming Soon"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 py-3 bg-[#0ff] text-black rounded-xl font-bold hover:bg-[#06e3e3] shadow-[0_0_15px_#0ff7] active:scale-95 transition disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : module
              ? "Update Module"
              : "Create Module"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
