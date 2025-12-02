import { useState } from "react";
import client from "../utils/axiosClient";

export default function EditMemberModal({ member, onClose, onUpdate }) {
  const [form, setForm] = useState(member);
  const [loading, setLoading] = useState(false);

  async function updateMember() {
    setLoading(true);
    try {
      const res = await client.put(`/team/${member._id}`, form);
      onUpdate(res.data);
      onClose();
    } catch (err) {
      alert("Update failed");
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center p-6 z-50">
      <div className="bg-[#0d141b] text-white w-full max-w-md rounded-xl p-6 border border-[#0ff]/20 shadow-xl">

        <h2 className="text-xl font-semibold mb-4">
          Edit Team Member
        </h2>

        <input
          className="input-field"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input-field mt-3"
          value={form.designation}
          onChange={(e) => setForm({ ...form, designation: e.target.value })}
        />

        <textarea
          className="input-field mt-3"
          rows={4}
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
        />

        <input
          className="input-field mt-3"
          value={form.linkedin || ""}
          placeholder="LinkedIn URL"
          onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
        />

        <input
          className="input-field mt-3"
          value={form.instagram || ""}
          placeholder="Instagram URL"
          onChange={(e) => setForm({ ...form, instagram: e.target.value })}
        />

        <div className="flex gap-3 mt-5">
          <button
            disabled={loading}
            onClick={updateMember}
            className="flex-1 py-2 bg-[#0ff] text-black rounded-lg
                       font-semibold hover:bg-[#0ee2e2] transition disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save"}
          </button>

          <button
            className="flex-1 py-2 border border-white/20 rounded-lg hover:border-white/40"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
