// import { useEffect, useState } from "react";
// import client from "../../utils/axiosClient";

// export default function AdminGallery() {
//   const [list, setList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   async function load() {
//     try {
//       const res = await client.get("/gallery");
//       setList(res.data);
//     } catch (err) {
//       alert("Failed to load gallery");
//     }
//     setLoading(false);
//   }

//   async function deleteItem(id) {
//     if (!window.confirm("❗ Delete this image permanently?")) return;

//     try {
//       await client.delete(`/gallery/${id}`); // ✅ NO /api here
//       setList((prev) => prev.filter((item) => item._id !== id));
//     } catch (err) {
//       alert("Delete failed");
//     }
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   const BACKEND = import.meta.env.VITE_API_URL;

//   return (
//     <main className="pt-24 px-6 bg-black min-h-screen text-white">
//       <h1 className="text-3xl font-bold text-[#0ff]">🖼️ Gallery Manager</h1>

//       {loading && <p className="text-center mt-10">Loading...</p>}

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
//         {list.map((item) => (
//           <div
//             key={item._id}
//             className="bg-[#070d12]/80 p-4 rounded-xl border border-[#0ff]/20"
//           >
//             <img
//               src={`${BACKEND}${item.url}`}   // ✅ Correct absolute URL
//               className="w-full h-56 object-cover rounded"
//               alt={item.title}
//             />

//             <p className="mt-3 font-semibold text-[#0ff]">
//               {item.title || "Untitled"}
//             </p>

//             <p className="text-gray-400 text-sm">
//               {item.description || "No Description"}
//             </p>

//             <button
//               onClick={() => deleteItem(item._id)}
//               className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../utils/axiosClient";

export default function AdminGallery() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  /* =====================
     LOAD GALLERY
  ====================== */
  async function loadGallery() {
    try {
      const res = await client.get("/gallery");
      setList(res.data || []);
    } catch (err) {
      console.error("Gallery load failed:", err);
      alert("Failed to load gallery");
    } finally {
      setLoading(false);
    }
  }

  /* =====================
     DELETE IMAGE (AUTH)
  ====================== */
  async function deleteItem(id) {
    if (!window.confirm("❗ Delete this image permanently?")) return;

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Admin login required");
        return;
      }

      await client.delete(`/gallery/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // remove from UI
      setList((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Delete failed");
    }
  }

  useEffect(() => {
    loadGallery();
  }, []);

  const BACKEND = import.meta.env.VITE_API_URL;

  return (
    <main className="pt-24 px-6 bg-black min-h-screen text-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#0ff]">
          🖼️ Gallery Manager
        </h1>

        <button
          onClick={() => navigate("/admin/dashboard")}
          className="px-5 py-2 rounded-xl bg-[#0ff] text-black font-bold hover:opacity-90 transition"
        >
          Dashboard
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center mt-10 text-gray-400">
          Loading gallery...
        </p>
      )}

      {/* EMPTY */}
      {!loading && list.length === 0 && (
        <p className="text-center mt-10 text-gray-400">
          No images uploaded yet.
        </p>
      )}

      {/* GALLERY GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {list.map((item) => (
          <div
            key={item._id}
            className="bg-[#070d12]/80 p-4 rounded-xl border border-[#0ff]/20"
          >
            {/* IMAGE */}
            <img
              src={
                item.url.startsWith("http")
                  ? item.url
                  : `${BACKEND}${item.url}`
              }
              alt={item.title || "Gallery Image"}
              className="w-full h-56 object-cover rounded"
            />

            {/* TEXT */}
            <p className="mt-3 font-semibold text-[#0ff]">
              {item.title || "Untitled"}
            </p>

            <p className="text-gray-400 text-sm">
              {item.description || "No description"}
            </p>

            {/* DELETE */}
            <button
              onClick={() => deleteItem(item._id)}
              className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

