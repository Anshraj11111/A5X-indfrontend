import { useEffect, useState, useCallback } from "react";
import client from "../utils/axiosClient";

const CATEGORIES = ["Workshop", "Competition", "Office"];

const CAT_META = {
  Workshop:    { emoji: "🛠️", color: "from-cyan-500 to-blue-600",     desc: "Hands-on robotics & tech workshops at schools and colleges" },
  Competition: { emoji: "🏆", color: "from-yellow-500 to-orange-500", desc: "Competition builds, events and award-winning moments" },
  Office:      { emoji: "🏢", color: "from-purple-500 to-pink-500",   desc: "Office visits, client meetings and behind-the-scenes moments" },
};

const fmt = (d) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

/* ── Cloudinary URL optimizer ──
   Injects w_400,q_auto,f_auto for thumbnails (4x smaller files)
   Full-size URL kept for lightbox */
function thumbUrl(url, width = 400) {
  if (!url) return url;
  // Only transform Cloudinary URLs
  if (!url.includes("res.cloudinary.com")) return url;
  return url.replace("/upload/", `/upload/w_${width},q_auto,f_auto/`);
}

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export default function Gallery() {
  const [events,    setEvents]    = useState([]);
  const [allImages, setAllImages] = useState([]);   // for "All" tab
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  // event detail view
  const [openEvent,  setOpenEvent]  = useState(null);
  const [eventImgs,  setEventImgs]  = useState([]);
  const [evtLoading, setEvtLoading] = useState(false);

  // lightbox — used both in All tab and event detail
  const [lightbox,     setLightbox]     = useState(null);
  const [lightboxSrc,  setLightboxSrc]  = useState([]);  // which array to use

  /* ── fetch event list ── */
  useEffect(() => {
    // Fetch all images first — always works
    client.get("/gallery")
      .then((r) => {
        const allItems = Array.isArray(r.data) ? r.data : [];
        setAllImages(allItems);

        // Group client-side by category + eventName
        // Images with no category only appear in "All" tab
        const map = {};
        allItems.forEach((img) => {
          if (!img.category) return; // no category → only in All tab
          const cat = img.category;
          const evt = img.eventName || "General";
          const key = `${cat}__${evt}`;
          if (!map[key]) {
            map[key] = {
              category:  cat,
              eventName: evt,
              location:  img.location || "",
              cover:     img.url,
              count:     0,
              createdAt: img.createdAt,
            };
          }
          map[key].count++;
        });
        setEvents(Object.values(map));
      })
      .catch(() => setError("Failed to load gallery"))
      .finally(() => setLoading(false));
  }, []);

  /* ── open event → filter from allImages (no extra API call needed) ── */
  async function openEventView(ev) {
    setOpenEvent(ev);
    setEvtLoading(true);
    setLightbox(null);
    const filtered = allImages.filter(
      (i) => i.category === ev.category && (i.eventName || "General") === ev.eventName
    );
    setEventImgs(filtered);
    setLightboxSrc(filtered);
    setEvtLoading(false);
  }

  /* ── keyboard nav ── */
  const handleKey = useCallback(
    (e) => {
      if (lightbox === null) return;
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % lightboxSrc.length);
      if (e.key === "ArrowLeft")  setLightbox((i) => (i - 1 + lightboxSrc.length) % lightboxSrc.length);
      if (e.key === "Escape")     setLightbox(null);
    },
    [lightbox, lightboxSrc.length]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  /* ── filtered events for active tab ── */
  const tabEvents = events.filter((e) => e.category === activeTab);

  /* ══════════════════════════════════════
     LOADING — skeleton cards instead of spinner
  ══════════════════════════════════════ */
  if (loading) {
    return (
      <main className="min-h-screen bg-[#020609] text-white overflow-x-hidden">
        {/* skeleton hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-[#0a0f14] animate-pulse" />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <div className="h-3 w-24 bg-white/10 rounded-full mx-auto mb-6 animate-pulse" />
            <div className="h-14 w-72 bg-white/10 rounded-2xl mx-auto mb-4 animate-pulse" />
            <div className="h-4 w-56 bg-white/8 rounded-full mx-auto animate-pulse" />
            <div className="mt-8 flex justify-center gap-10">
              {[1,2,3].map(i => (
                <div key={i} className="text-center">
                  <div className="h-8 w-12 bg-white/10 rounded-lg mx-auto mb-2 animate-pulse" />
                  <div className="h-3 w-16 bg-white/6 rounded-full mx-auto animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* skeleton tabs */}
        <div className="bg-[#020609]/95 border-b border-white/8 px-6 py-4">
          <div className="max-w-7xl mx-auto flex gap-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-9 w-24 bg-white/8 rounded-full animate-pulse" />
            ))}
          </div>
        </div>
        {/* skeleton cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/8 bg-[#070d12] animate-pulse">
                <div className="aspect-[4/3] bg-white/8" />
                <div className="p-5 space-y-3">
                  <div className="h-5 w-3/4 bg-white/8 rounded-lg" />
                  <div className="h-3 w-1/2 bg-white/6 rounded-full" />
                  <div className="h-3 w-1/3 bg-white/6 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#020609] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-6">{error}</p>
          <button onClick={() => window.location.reload()}
            className="px-8 py-3 bg-cyan-400 text-black rounded-full font-bold hover:bg-cyan-300 transition">
            Retry
          </button>
        </div>
      </div>
    );
  }

  /* ══════════════════════════════════════
     EVENT DETAIL VIEW (overlay page)
  ══════════════════════════════════════ */
  if (openEvent) {
    return (
      <div className="min-h-screen bg-[#020609] text-white">

        {/* ── top bar ── */}
        <div className="sticky top-0 z-30 bg-[#020609]/95 border-b border-white/8 px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => { setOpenEvent(null); setLightbox(null); }}
            className="flex items-center gap-2 text-cyan-400 hover:text-white transition text-sm font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Gallery
          </button>
          <div className="w-px h-5 bg-white/15" />
          <span className="text-xs text-gray-500 uppercase tracking-wider">{openEvent.category}</span>
        </div>

        {/* ── event hero ── */}
        <div className="relative overflow-hidden">
          {eventImgs[0] && (
            <img
              src={eventImgs[0].url}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover brightness-[0.15] scale-110 blur-sm"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020609]" />
          <div className="relative z-10 px-6 py-16 sm:py-20 max-w-4xl mx-auto text-center">
            <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4
              bg-gradient-to-r ${CAT_META[openEvent.category]?.color} text-white`}>
              {CAT_META[openEvent.category]?.emoji} {openEvent.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{openEvent.eventName}</h1>
            {openEvent.location && (
              <p className="mt-3 text-gray-400 text-base flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {openEvent.location}
              </p>
            )}
            <p className="mt-2 text-cyan-400 font-semibold">{eventImgs.length} Photos</p>
          </div>
        </div>

        {/* ── COLLAGE + GRID ── */}
        <div className="px-4 sm:px-6 pb-24 max-w-7xl mx-auto">
          {evtLoading ? (
            <div className="text-center py-20 text-gray-500">Loading images…</div>
          ) : eventImgs.length === 0 ? (
            <div className="text-center py-20 text-gray-500">No images found for this event.</div>
          ) : (
            <>
              {/* ── COLLAGE (first 5 images) ── */}
              {eventImgs.length >= 2 && (
                <div className="mb-6">
                  {eventImgs.length === 2 ? (
                    /* 2 images: side by side */
                    <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden h-72 sm:h-96">
                      {eventImgs.slice(0, 2).map((img, idx) => (
                        <div key={img._id} onClick={() => { setLightboxSrc(eventImgs); setLightbox(idx); }}
                          className="relative overflow-hidden cursor-pointer group">
                          <img src={thumbUrl(img.url, 700)} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </div>
                      ))}
                    </div>
                  ) : eventImgs.length === 3 ? (
                    /* 3 images: 1 big left + 2 stacked right */
                    <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden h-72 sm:h-96">
                      <div onClick={() => { setLightboxSrc(eventImgs); setLightbox(0); }}
                        className="relative overflow-hidden cursor-pointer group row-span-2">
                        <img src={thumbUrl(eventImgs[0].url, 900)} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                      </div>
                      {eventImgs.slice(1, 3).map((img, idx) => (
                        <div key={img._id} onClick={() => { setLightboxSrc(eventImgs); setLightbox(idx + 1); }}
                          className="relative overflow-hidden cursor-pointer group">
                          <img src={thumbUrl(img.url, 700)} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* 4+ images: 1 big left + 3 grid right (last shows +N) */
                    <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden h-72 sm:h-[420px]">
                      {/* big left */}
                      <div onClick={() => { setLightboxSrc(eventImgs); setLightbox(0); }}
                        className="col-span-2 relative overflow-hidden cursor-pointer group">
                        <img src={thumbUrl(eventImgs[0].url, 900)} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        {/* title overlay */}
                        {eventImgs[0].title && (
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                            <p className="text-white font-semibold text-sm">{eventImgs[0].title}</p>
                          </div>
                        )}
                      </div>
                      {/* right 3 */}
                      <div className="grid grid-rows-3 gap-2">
                        {eventImgs.slice(1, 4).map((img, idx) => (
                          <div key={img._id}
                            onClick={() => { setLightboxSrc(eventImgs); setLightbox(idx + 1); }}
                            className="relative overflow-hidden cursor-pointer group rounded-lg">
                            <img src={thumbUrl(img.url, 400)} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                            {/* +N overlay on last */}
                            {idx === 2 && eventImgs.length > 4 && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white font-extrabold text-2xl">+{eventImgs.length - 4}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── THUMBNAIL STRIP (carousel) ── */}
              {eventImgs.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
                  {eventImgs.map((img, idx) => (
                    <button key={img._id}
                      onClick={() => { setLightboxSrc(eventImgs); setLightbox(idx); }}
                      className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-white/10
                                 hover:border-cyan-400 hover:scale-105 transition-all duration-200">
                      <img src={thumbUrl(img.url, 200)} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              )}

              {/* ── FULL MASONRY GRID ── */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-5 bg-cyan-400 rounded-full" />
                <h2 className="text-base font-bold uppercase tracking-wider text-gray-400">
                  All Photos <span className="text-gray-600 font-normal normal-case">({eventImgs.length})</span>
                </h2>
              </div>
              <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
                {eventImgs.map((img, idx) => (
                  <div key={img._id}
                    onClick={() => { setLightboxSrc(eventImgs); setLightbox(idx); }}
                    className="break-inside-avoid group relative rounded-xl overflow-hidden border border-white/8 cursor-pointer
                               hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300">
                    <img src={thumbUrl(img.url, 500)} alt={img.title || ""}
                      loading="lazy" decoding="async"
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      {img.title && <p className="text-white font-semibold text-xs line-clamp-1">{img.title}</p>}
                      <p className="text-cyan-400 text-xs mt-0.5">{fmt(img.createdAt)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* ── lightbox ── */}
        {lightbox !== null && lightboxSrc[lightbox] && (
          <Lightbox
            images={lightboxSrc}
            index={lightbox}
            onClose={() => setLightbox(null)}
            onPrev={() => setLightbox((i) => (i - 1 + lightboxSrc.length) % lightboxSrc.length)}
            onNext={() => setLightbox((i) => (i + 1) % lightboxSrc.length)}
          />
        )}
      </div>
    );
  }

  /* ══════════════════════════════════════
     MAIN GALLERY PAGE
  ══════════════════════════════════════ */
  return (
    <main className="min-h-screen bg-[#020609] text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        {events[0] && (
          <img src={events[0].cover} alt="" aria-hidden
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm brightness-[0.15]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020609]/40 via-transparent to-[#020609]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.35em] text-cyan-400 uppercase font-semibold mb-4">A5X Robotics</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Gallery
            </span>
          </h1>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Workshops, competitions and curriculum moments from the A5X lab.
          </p>
          {/* stats */}
          <div className="mt-8 flex justify-center gap-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{events.length}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Events</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{allImages.length}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Photos</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">3</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY TABS ── */}
      <div className="sticky top-0 z-20 bg-[#020609]/95 border-b border-white/8 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">

          {/* ALL tab */}
          <button
            onClick={() => setActiveTab("All")}
            className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-200
              ${activeTab === "All"
                ? "bg-gradient-to-r from-gray-600 to-gray-500 text-white border-transparent shadow-lg"
                : "border-white/15 text-gray-400 hover:border-white/30 hover:text-white"}`}
          >
            <span>🌐</span>
            <span>All</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${activeTab === "All" ? "bg-white/20" : "bg-white/10"}`}>
              {allImages.length}
            </span>
          </button>

          {/* Category tabs */}
          {CATEGORIES.map((cat) => {
            const m = CAT_META[cat];
            const count = events.filter((e) => e.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-200
                  ${activeTab === cat
                    ? `bg-gradient-to-r ${m.color} text-white border-transparent shadow-lg`
                    : "border-white/15 text-gray-400 hover:border-white/30 hover:text-white"}`}
              >
                <span>{m.emoji}</span>
                <span>{cat}</span>
                {count > 0 && (
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold
                    ${activeTab === cat ? "bg-white/20" : "bg-white/10"}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── ALL PHOTOS TAB ── */}
      {activeTab === "All" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-white/40 rounded-full" />
            <h2 className="text-xl font-bold tracking-wide uppercase text-gray-300">
              All Photos
              <span className="ml-3 text-sm text-gray-500 normal-case font-normal">
                ({allImages.length})
              </span>
            </h2>
          </div>

          {allImages.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">📸</div>
              <p className="text-gray-500 text-lg">No photos yet</p>
              <p className="text-gray-600 text-sm mt-2">Upload images from the admin panel</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {allImages.map((img, idx) => (
                <div
                  key={img._id}
                  onClick={() => { setLightboxSrc(allImages); setLightbox(idx); }}
                  className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-white/8 cursor-pointer
                             hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300"
                >
                  <img
                    src={thumbUrl(img.url, 400)}
                    alt={img.title || ""}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    {/* category + event badge */}
                    <div className="flex gap-2 mb-2 flex-wrap">
                      {img.category && (
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold bg-gradient-to-r
                          ${CAT_META[img.category]?.color || "from-gray-600 to-gray-500"} text-white`}>
                          {CAT_META[img.category]?.emoji} {img.category}
                        </span>
                      )}
                      {img.eventName && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-black/60 border border-white/20 text-gray-300">
                          {img.eventName}
                        </span>
                      )}
                    </div>
                    {img.title && <p className="text-white font-semibold text-sm line-clamp-1">{img.title}</p>}
                    <p className="text-cyan-400 text-xs mt-1">{fmt(img.createdAt)}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20
                                  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ── CATEGORY DESCRIPTION + EVENT CARDS ── */}
      {activeTab !== "All" && (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4">
            <p className="text-gray-500 text-sm">{CAT_META[activeTab]?.desc}</p>
          </div>

      {/* ── EVENT CARDS ── */}
      {activeTab !== "All" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          {tabEvents.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">{CAT_META[activeTab]?.emoji}</div>
              <p className="text-gray-500 text-lg">No {activeTab.toLowerCase()} events yet</p>
              <p className="text-gray-600 text-sm mt-2">
                Upload images from the admin panel to see them here
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tabEvents.map((ev) => (
                <EventCard
                  key={`${ev.category}-${ev.eventName}`}
                  event={ev}
                  catMeta={CAT_META[ev.category]}
                  onClick={() => openEventView(ev)}
                />
              ))}
            </div>
          )}
        </section>
      )}
        </>
      )}

      {/* ── GLOBAL LIGHTBOX (All tab) ── */}
      {lightbox !== null && lightboxSrc[lightbox] && !openEvent && (
        <Lightbox
          images={lightboxSrc}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((i) => (i - 1 + lightboxSrc.length) % lightboxSrc.length)}
          onNext={() => setLightbox((i) => (i + 1) % lightboxSrc.length)}
        />
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}

/* ══════════════════════════════════════════════════════════════
   EVENT CARD
══════════════════════════════════════════════════════════════ */
function EventCard({ event, catMeta, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-2xl overflow-hidden border border-white/8 bg-[#070d12]
                 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/10
                 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
    >
      {/* cover image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {event.cover ? (
          <img
            src={thumbUrl(event.cover, 600)}
            alt={event.eventName}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-[#0a1118] flex items-center justify-center text-4xl">
            {catMeta?.emoji}
          </div>
        )}
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* category badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold
          bg-gradient-to-r ${catMeta?.color} text-white`}>
          {catMeta?.emoji} {event.category}
        </div>

        {/* photo count */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold
          bg-black/60 border border-white/20 text-white">
          {event.count} 📷
        </div>
      </div>

      {/* info */}
      <div className="p-5">
        <h3 className="text-white font-bold text-lg leading-snug group-hover:text-cyan-400 transition-colors">
          {event.eventName}
        </h3>
        {event.location && (
          <p className="text-gray-500 text-sm mt-1 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-600">{fmt(event.createdAt)}</span>
          <span className="text-cyan-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            View Photos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}

/* ══════════════════════════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════════════════════════ */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const img = images[index];
  return (
    <div
      className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20
                   flex items-center justify-center text-white hover:bg-red-500 transition z-10"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                   bg-white/10 border border-white/20 flex items-center justify-center text-white
                   hover:bg-cyan-400 hover:text-black transition z-10"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* image */}
      <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={img.url}
          alt={img.title || ""}
          className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
        />
        {(img.title || img.description) && (
          <div className="mt-4 text-center max-w-2xl px-4">
            {img.title && <h3 className="text-white font-bold text-lg">{img.title}</h3>}
            {img.description && <p className="text-gray-400 text-sm mt-1">{img.description}</p>}
            <p className="text-cyan-400 text-xs mt-2">{fmt(img.createdAt)}</p>
          </div>
        )}
        <div className="mt-3 text-gray-600 text-xs">{index + 1} / {images.length}</div>
      </div>

      {/* next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                   bg-white/10 border border-white/20 flex items-center justify-center text-white
                   hover:bg-cyan-400 hover:text-black transition z-10"
        aria-label="Next"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
