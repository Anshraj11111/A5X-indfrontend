import { useEffect, useState } from "react";
import client from "../utils/axiosClient";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    client.get("/gallery")
      .then(res => setImages(res.data))
      .catch(err => console.log("Gallery fetch error:", err));
  }, []);

  return (
    <main className="pt-24 px-6 bg-black min-h-screen text-white">
      <h1 className="text-center text-4xl font-bold text-[#0ff] mb-10">
        📸 Gallery
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {images.map((item) => (
          <div
            key={item._id}
            className="bg-[#0a0f14] rounded-xl overflow-hidden border border-[#0ff]/10 shadow-md"
          >
            <img
              src={`http://localhost:5000${item.url}`}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg"
            />


            <div className="p-4">
              <h3 className="text-[#0ff] font-semibold text-sm">
                {item.title || "Untitled"}
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                {item.description || "No description"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
