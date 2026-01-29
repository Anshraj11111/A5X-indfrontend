import { useEffect, useState } from "react";
import client from "../utils/axiosClient";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .get("/gallery")
      .then((res) => setImages(res.data))
      .catch((err) => console.error("Failed to load gallery:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Loading gallery...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-[#0ff] mb-4">Gallery</h1>
        <p className="text-gray-400 text-lg">
          Explore our workshop projects and achievements
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        {images.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No images yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img) => (
              <div
                key={img._id}
                className="bg-[#0a0f14] rounded-xl overflow-hidden border border-[#0ff]/20 hover:border-[#0ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0ff]/20"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-black h-48 sm:h-56">
                  <img
                    src={img.url}
                    alt={img.title || "Gallery image"}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content Container */}
                <div className="p-5">
                  {/* Title */}
                  {img.title && (
                    <h3 className="text-lg font-bold text-[#0ff] mb-2 line-clamp-2">
                      {img.title}
                    </h3>
                  )}

                  {/* Description */}
                  {img.description && (
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                      {img.description}
                    </p>
                  )}

                  {/* Metadata */}
                  <div className="pt-3 border-t border-[#0ff]/20">
                    <p className="text-xs text-gray-500">
                      {new Date(img.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
