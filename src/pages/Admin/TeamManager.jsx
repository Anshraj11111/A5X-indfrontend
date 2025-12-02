import { useState } from "react";
import client from "../../utils/axiosClient";

export default function TeamManager() {
  const [data, setData] = useState({
    name: "",
    designation: "",
    bio: "",
    linkedin: "",
    instagram: "",
    showOnHome: false,
  });

  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

 async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData();
  
  // Required fields
  formData.append("name", data.name);
  formData.append("designation", data.designation);
  formData.append("bio", data.bio);

  // Optional Socials
  if (data.linkedin?.trim()) formData.append("linkedin", data.linkedin);
  if (data.instagram?.trim()) formData.append("instagram", data.instagram);

  // Homepage toggle
  formData.append("showOnHome", data.showOnHome);

  // image
  if (file) formData.append("photo", file);

  try {
    await client.post("/team", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setMsg("Member Added ✔");
  } catch (err) {
    setMsg(err.response?.data?.message || "Error");
  }
}


  return (
    <div className="min-h-screen bg-[#020409] text-white flex justify-center items-start pt-28 px-6">
      <div className="w-full max-w-2xl bg-[#0a0f14] mx-auto p-10 rounded-3xl border border-[#0ff]/20 shadow-[0_0_30px_#0ff3] backdrop-blur-md">

        <h1 className="text-3xl font-semibold text-center mb-2">
          👥 Team Manager
        </h1>
        <p className="text-gray-400 text-sm text-center">
          Add new team members to the website
        </p>

        <form className="grid gap-6 mt-10" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="text-xs text-gray-300">Full Name</label>
            <input
              className="input-field"
              placeholder="Ansh Raj"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          {/* Designation */}
          <div>
            <label className="text-xs text-gray-300">Designation</label>
            <input
              className="input-field"
              placeholder="Founder | AI Lead"
              onChange={(e) => setData({ ...data, designation: e.target.value })}
            />
          </div>

          {/* Bio */}
          <div>
            <label className="text-xs text-gray-300">Short Bio</label>
            <textarea
              className="input-field resize-none"
              rows="3"
              placeholder="Describe specialization, role…"
              onChange={(e) => setData({ ...data, bio: e.target.value })}
            />
          </div>

          {/* Social Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs text-gray-300">LinkedIn</label>
              <input
                className="input-field"
                placeholder="https://linkedin.com/in/.."
                onChange={(e) => setData({ ...data, linkedin: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs text-gray-300">Instagram</label>
              <input
                className="input-field"
                placeholder="https://instagram.com/.."
                onChange={(e) => setData({ ...data, instagram: e.target.value })}
              />
            </div>
          </div>

          {/* Photo */}
          <div>
            <label className="text-xs text-gray-300">Profile Photo</label>
            <input
              type="file"
              className="input-field cursor-pointer"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <p className="text-[10px] text-gray-500 mt-1">
              Use square resolution (1:1) 500–1000px recommended
            </p>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-3 bg-[#0f1a23] border border-gray-700 px-4 py-3 rounded-lg cursor-pointer hover:border-[#0ff] transition">
            <input
              type="checkbox"
              className="accent-[#0ff]"
              onChange={(e) =>
                setData({ ...data, showOnHome: e.target.checked })
              }
            />
            <span className="text-sm">Show on Homepage Highlight?</span>
          </label>

          {/* Submit */}
          <button
            disabled={loading}
            className="py-3 bg-[#0ff] text-black rounded-xl font-bold hover:bg-[#06e3e3] shadow-[0_0_15px_#0ff7] active:scale-95 transition disabled:opacity-50"
          >
            {loading ? "Uploading..." : "➕ Add Team Member"}
          </button>

          {msg && (
            <p className="text-center text-[#0ff] text-sm font-medium">
              {msg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
