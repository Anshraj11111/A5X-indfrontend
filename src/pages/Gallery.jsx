import { useEffect, useState } from "react";
import client from "../utils/axiosClient";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 BACKEND BASE URL (LOCAL + LIVE SAFE)
  const API_BASE =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const SERVER_URL = API_BASE.replace("/api", "");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await client.get("/gallery");
        setImages(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Gallery fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // 🔥 IMAGE URL RESOLVER (MAIN FIX)
  const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url; // Cloudinary / external
    return `${SERVER_URL}${url}`; // local uploads
  };

  return (
    <main className="pt-24 px-6 bg-black min-h-screen text-white">
      <h1 className="text-center text-4xl font-bold text-[#0ff] mb-10">
        📸 Gallery
      </h1>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-400">Loading gallery...</p>
      )}

      {/* Empty */}
      {!loading && images.length === 0 && (
        <p className="text-center text-gray-400">
          No images uploaded yet.
        </p>
      )}

      {/* Gallery */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {images.map((item) => (
          <div
            key={item._id}
            className="bg-[#0a0f14] rounded-xl overflow-hidden border border-[#0ff]/10 shadow-md hover:scale-[1.02] transition"
          >
            <img
              src={getImageUrl(item.url)}
              alt={item.title || "Gallery Image"}
              loading="lazy"
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x300?text=Image+Not+Found";
              }}
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
