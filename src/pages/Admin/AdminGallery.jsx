import { useEffect, useState } from "react";
import client from "../../utils/axiosClient";

export default function AdminGallery() {
  const [list, setList] = useState([]);

  async function load() {
    const res = await client.get("/gallery");
    setList(res.data);
  }

  async function deleteItem(id) {
    if (!confirm("Delete this image?")) return;

    await client.delete(`/gallery/${id}`);
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="pt-24 px-6 bg-black min-h-screen text-white">

      <h1 className="text-3xl font-bold text-[#0ff]">🖼️ Gallery Manager</h1>
      <p className="text-gray-400 mt-2">Delete gallery items</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {list.map(item => (
          <div key={item._id}
            className="bg-[#070d12]/80 p-4 rounded-xl border border-[#0ff]/20"
          >
            <img
              src={`http://localhost:5000${item.url}`}
              className="w-full h-56 object-cover rounded"
            />
            <p className="mt-3 font-semibold text-[#0ff]">{item.title}</p>
            <p className="text-gray-400 text-sm">{item.description}</p>

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
