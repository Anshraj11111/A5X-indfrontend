import { useEffect, useState } from "react";
import client from "../utils/axiosClient";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    console.log("🔄 Fetching gallery images...");
    client
      .get("/gallery")
      .then((res) => {
        console.log("✅ Gallery response:", res.data);
        setImages(res.data);
      })
      .catch((err) => {
        console.error("❌ Failed to load gallery:", err);
        console.error("Error details:", err.response?.data || err.message);
        setError(err.response?.data?.message || err.message || "Failed to load gallery");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center pt-24">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400 mb-4"></div>
          <p className="text-xl">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center pt-24">
        <div className="text-center max-w-md px-6">
          <p className="text-red-400 text-xl mb-4">⚠️ {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-bold hover:bg-cyan-300 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-4">Gallery</h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl">
          Explore our workshop projects and achievements
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        {images.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📸</div>
            <p className="text-gray-400 text-xl mb-4">No images yet</p>
            <p className="text-gray-500 text-sm">Gallery images will appear here once uploaded by admin</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {images.map((img) => (
              <div
                key={img._id}
                className="bg-[#0a0f14] rounded-xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 flex flex-col"
                onMouseEnter={() => setExpandedCard(img._id)}
                onMouseLeave={() => setExpandedCard(null)}
              >
                {/* Image Container - Better aspect ratio */}
                <div className="relative overflow-hidden bg-black">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={img.url}
                      alt={img.title || "Gallery image"}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Title */}
                  {img.title && (
                    <div className="mb-2">
                      <h3
                        className={`text-lg sm:text-xl font-bold text-cyan-400 ${
                          expandedCard === img._id ? "" : "line-clamp-2"
                        } transition-all duration-200`}
                        title={img.title}
                      >
                        {img.title}
                      </h3>
                    </div>
                  )}

                  {/* Description */}
                  {img.description && (
                    <div className="mb-3 flex-grow">
                      <p
                        className={`text-gray-300 text-sm sm:text-base ${
                          expandedCard === img._id ? "" : "line-clamp-3"
                        } transition-all duration-200`}
                        title={img.description}
                      >
                        {img.description}
                      </p>
                    </div>
                  )}

                  {/* Metadata */}
                  <div className="pt-3 mt-auto border-t border-cyan-400/20">
                    <p className="text-xs sm:text-sm text-gray-400 font-medium">
                      📅 {new Date(img.createdAt).toLocaleDateString("en-US", {
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
