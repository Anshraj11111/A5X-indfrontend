import { useEffect, useState } from "react";
import client from "../../utils/axiosClient";

export default function AdminGallery() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Load gallery
  async function load() {
    try {
      const res = await client.get("/api/gallery");
      setList(res.data);
    } catch (err) {
      alert("Failed to load gallery");
    }
    setLoading(false);
  }

  // ✅ Delete image
  async function deleteItem(id) {
    if (!window.confirm("❗ Delete this image permanently?")) return;

    try {
      await client.delete(`/api/gallery/${id}`);
      setList((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  }

  useEffect(() => {
    load();
  }, []);

  const BACKEND_URL = import.meta.env.VITE_API_URL;

  return (
    <main className="pt-24 px-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold text-[#0ff]">🖼️ Gallery Manager</h1>
      <p className="text-gray-400 mt-2">Delete gallery items</p>

      {/* ✅ LOADING */}
      {loading && (
        <p className="text-center text-gray-400 mt-10">Loading...</p>
      )}

      {/* ✅ EMPTY */}
      {!loading && list.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No images uploaded yet
        </p>
      )}

      {/* ✅ GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {list.map((item) => (
          <div
            key={item._id}
            className="bg-[#070d12]/80 p-4 rounded-xl border border-[#0ff]/20"
          >
            ✅✅✅ {/* ✅ LIVE IMAGE URL */}
            <img
              src={`${BACKEND_URL}${item.url}`}
              alt={item.title}
              className="w-full h-56 object-cover rounded"
            />

            <p className="mt-3 font-semibold text-[#0ff]">
              {item.title || "Untitled"}
            </p>

            <p className="text-gray-400 text-sm">
              {item.description || "No Description"}
            </p>

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
