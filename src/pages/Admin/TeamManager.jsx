// import { useState } from "react";
// import client from "../../utils/axiosClient";

// export default function TeamManager() {
//   const [data, setData] = useState({
//     name: "",
//     designation: "",
//     bio: "",
//     linkedin: "",
//     instagram: "",
//     showOnHome: false,
//   });

//   const [file, setFile] = useState(null);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("");

//     try {
//       const formData = new FormData();

//       // ✅ Required fields
//       formData.append("name", data.name);
//       formData.append("designation", data.designation);
//       formData.append("bio", data.bio);

//       // ✅ Optional Socials
//       if (data.linkedin?.trim()) formData.append("linkedin", data.linkedin);
//       if (data.instagram?.trim()) formData.append("instagram", data.instagram);

//       // ✅ Homepage toggle
//       formData.append("showOnHome", data.showOnHome);

//       // ✅ PHOTO — must match backend upload.single("photo")
//       if (file) {
//         formData.append("photo", file);
//       }

//       await client.post("/team", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

    
//       setMsg("✅ Member Added Successfully!");
//       setData({
//         name: "",
//         designation: "",
//         bio: "",
//         linkedin: "",
//         instagram: "",
//         showOnHome: false,
//       });
//       setFile(null);

//     } catch (err) {
//       console.error(err);
//       setMsg(err.response?.data?.message || "❌ Error while adding member");
//     }

//     setLoading(false);
//   }

//   return (
//     <div className="min-h-screen bg-[#020409] text-white flex justify-center items-start pt-28 px-6">
//       <div className="w-full max-w-2xl bg-[#0a0f14] mx-auto p-10 rounded-3xl border border-[#0ff]/20 shadow-[0_0_30px_#0ff3] backdrop-blur-md">

//         <h1 className="text-3xl font-semibold text-center mb-2">
//           👥 Team Manager
//         </h1>
//         <p className="text-gray-400 text-sm text-center">
//           Add new team members to the website
//         </p>

//         <form className="grid gap-6 mt-10" onSubmit={handleSubmit}>

//           {/* ✅ Full Name */}
//           <div>
//             <label className="text-xs text-gray-300">Full Name</label>
//             <input
//               className="input-field"
//               placeholder="Ansh Raj"
//               value={data.name}
//               required
//               onChange={(e) => setData({ ...data, name: e.target.value })}
//             />
//           </div>

//           {/* ✅ Designation */}
//           <div>
//             <label className="text-xs text-gray-300">Designation</label>
//             <input
//               className="input-field"
//               placeholder="Founder | AI Lead"
//               value={data.designation}
//               required
//               onChange={(e) => setData({ ...data, designation: e.target.value })}
//             />
//           </div>

//           {/* ✅ Bio */}
//           <div>
//             <label className="text-xs text-gray-300">Short Bio</label>
//             <textarea
//               className="input-field resize-none"
//               rows="3"
//               placeholder="Describe specialization, role…"
//               value={data.bio}
//               required
//               onChange={(e) => setData({ ...data, bio: e.target.value })}
//             />
//           </div>

//           {/* ✅ Social Row */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="text-xs text-gray-300">LinkedIn</label>
//               <input
//                 className="input-field"
//                 placeholder="https://linkedin.com/in/.."
//                 value={data.linkedin}
//                 onChange={(e) => setData({ ...data, linkedin: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="text-xs text-gray-300">Instagram</label>
//               <input
//                 className="input-field"
//                 placeholder="https://instagram.com/.."
//                 value={data.instagram}
//                 onChange={(e) => setData({ ...data, instagram: e.target.value })}
//               />
//             </div>
//           </div>

//           {/* ✅ Photo */}
//           <div>
//             <label className="text-xs text-gray-300">Profile Photo</label>
//             <input
//               type="file"
//               className="input-field cursor-pointer"
//               required
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//             <p className="text-[10px] text-gray-500 mt-1">
//               Use square resolution (1:1) recommended
//             </p>
//           </div>

//           {/* ✅ Checkbox */}
//           <label className="flex items-center gap-3 bg-[#0f1a23] border border-gray-700 px-4 py-3 rounded-lg cursor-pointer hover:border-[#0ff] transition">
//             <input
//               type="checkbox"
//               className="accent-[#0ff]"
//               checked={data.showOnHome}
//               onChange={(e) =>
//                 setData({ ...data, showOnHome: e.target.checked })
//               }
//             />
//             <span className="text-sm">Show on Homepage Highlight?</span>
//           </label>

//           {/* ✅ Submit */}
//           <button
//             disabled={loading}
//             className="py-3 bg-[#0ff] text-black rounded-xl font-bold hover:bg-[#06e3e3] shadow-[0_0_15px_#0ff7] active:scale-95 transition disabled:opacity-50"
//           >
//             {loading ? "Uploading..." : "➕ Add Team Member"}
//           </button>

//           {msg && (
//             <p className="text-center text-[#0ff] text-sm font-medium">
//               {msg}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const formData = new FormData();

      // ✅ Required fields
      formData.append("name", data.name);
      formData.append("designation", data.designation);
      formData.append("bio", data.bio);

      // ✅ Optional Socials
      if (data.linkedin?.trim()) formData.append("linkedin", data.linkedin);
      if (data.instagram?.trim()) formData.append("instagram", data.instagram);

      // ✅ Homepage toggle
      formData.append("showOnHome", data.showOnHome);

      // ✅ PHOTO — must match backend upload.single("photo")
      if (file) {
        formData.append("photo", file);
      }

      await client.post("/team", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMsg("✅ Member Added Successfully!");
      setData({
        name: "",
        designation: "",
        bio: "",
        linkedin: "",
        instagram: "",
        showOnHome: false,
      });
      setFile(null);
    } catch (err) {
      console.error(err);
      setMsg(err.response?.data?.message || "❌ Error while adding member");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#020409] text-white pt-28 px-6 pb-16">
      {/* ✅ Outer Container */}
      <div className="w-full max-w-2xl mx-auto bg-[#0a0f14] p-6 sm:p-10 rounded-3xl border border-[#0ff]/20 shadow-[0_0_30px_#0ff3] backdrop-blur-md">
        
        {/* ✅ Header Row (Responsive Fix) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
          <h1 className="text-3xl font-semibold">👥 Team Manager</h1>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="
              w-full sm:w-auto
              px-6 py-2.5
              rounded-xl
              bg-[#0ff] text-black font-bold
              hover:opacity-90 transition
              shadow-[0_0_15px_#0ff6]
            "
          >
            Dashboard
          </button>
        </div>

        {/* ✅ Subtitle (Aligned nicely) */}
        <p className="text-gray-400 text-sm sm:text-left text-center">
          Add new team members to the website
        </p>

        <form className="grid gap-6 mt-10" onSubmit={handleSubmit}>
          {/* ✅ Full Name */}
          <div>
            <label className="text-xs text-gray-300">Full Name</label>
            <input
              className="input-field"
              placeholder="Ansh Raj"
              value={data.name}
              required
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          {/* ✅ Designation */}
          <div>
            <label className="text-xs text-gray-300">Designation</label>
            <input
              className="input-field"
              placeholder="Founder | AI Lead"
              value={data.designation}
              required
              onChange={(e) =>
                setData({ ...data, designation: e.target.value })
              }
            />
          </div>

          {/* ✅ Bio */}
          <div>
            <label className="text-xs text-gray-300">Short Bio</label>
            <textarea
              className="input-field resize-none"
              rows="3"
              placeholder="Describe specialization, role…"
              value={data.bio}
              required
              onChange={(e) => setData({ ...data, bio: e.target.value })}
            />
          </div>

          {/* ✅ Social Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs text-gray-300">LinkedIn</label>
              <input
                className="input-field"
                placeholder="https://linkedin.com/in/.."
                value={data.linkedin}
                onChange={(e) => setData({ ...data, linkedin: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs text-gray-300">Instagram</label>
              <input
                className="input-field"
                placeholder="https://instagram.com/.."
                value={data.instagram}
                onChange={(e) =>
                  setData({ ...data, instagram: e.target.value })
                }
              />
            </div>
          </div>

          {/* ✅ Photo */}
          <div>
            <label className="text-xs text-gray-300">Profile Photo</label>
            <input
              type="file"
              className="input-field cursor-pointer"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
            <p className="text-[10px] text-gray-500 mt-1">
              Use square resolution (1:1) recommended
            </p>
          </div>

          {/* ✅ Checkbox */}
          <label className="flex items-center gap-3 bg-[#0f1a23] border border-gray-700 px-4 py-3 rounded-lg cursor-pointer hover:border-[#0ff] transition">
            <input
              type="checkbox"
              className="accent-[#0ff]"
              checked={data.showOnHome}
              onChange={(e) =>
                setData({ ...data, showOnHome: e.target.checked })
              }
            />
            <span className="text-sm">Show on Homepage Highlight?</span>
          </label>

          {/* ✅ Submit */}
          <button
            disabled={loading}
            className="py-3 bg-[#0ff] text-black rounded-xl font-bold hover:bg-[#06e3e3] shadow-[0_0_15px_#0ff7] active:scale-95 transition disabled:opacity-50"
          >
            {loading ? "Uploading..." : "➕ Add Team Member"}
          </button>

          {msg && (
            <p className="text-center text-[#0ff] text-sm font-medium">{msg}</p>
          )}
        </form>
      </div>
    </div>
  );
}
