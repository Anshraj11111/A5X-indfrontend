import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../utils/axiosClient";

const CATEGORIES = ["Workshop", "Competition", "Office"];

const EMPTY_FORM = {
  title: "",
  description: "",
  category: "",      // empty = no category (only shows in All)
  eventName: "",
  location: "",
};

export default function AdminGallery() {
  const navigate = useNavigate();

  const [list,      setList]      = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [uploading, setUploading] = useState(false);
  const [progress,  setProgress]  = useState(0);   // 0-100
  const [form,      setForm]      = useState(EMPTY_FORM);
  const [files,     setFiles]     = useState([]);   // File[]
  const [previews,  setPreviews]  = useState([]);   // blob URLs
  const [filterCat, setFilterCat] = useState("All");
  const [filterEvt, setFilterEvt] = useState("All");
  const [toast,     setToast]     = useState(null);
  const fileRef = useRef();

  /* ── load ── */
  async function load() {
    setLoading(true);
    try {
      const res = await client.get("/gallery");
      setList(res.data || []);
    } catch {
      showToast("Failed to load gallery", "error");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { load(); }, []);

  /* ── toast ── */
  function showToast(msg, type = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  }

  /* ── file pick (multiple) ── */
  function onFiles(e) {
    const picked = Array.from(e.target.files);
    if (!picked.length) return;
    setFiles(picked);
    setPreviews(picked.map((f) => URL.createObjectURL(f)));
  }

  function removeFile(idx) {
    setFiles((p) => p.filter((_, i) => i !== idx));
    setPreviews((p) => p.filter((_, i) => i !== idx));
  }

  /* ── upload (all files sequentially with progress) ── */
  async function handleUpload(e) {
    e.preventDefault();
    if (files.length === 0) return showToast("Please select at least one image", "error");
    if (!form.eventName)    return showToast("Event name is required", "error");

    setUploading(true);
    setProgress(0);

    const fd = new FormData();
    files.forEach((f) => fd.append("files", f));
    fd.append("title",       form.title);
    fd.append("description", form.description);
    fd.append("category",    form.category);
    fd.append("eventName",   form.eventName);
    fd.append("location",    form.location);

    try {
      const res = await client.post("/gallery", fd, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (ev) => {
          setProgress(Math.round((ev.loaded * 100) / ev.total));
        },
      });

      const uploaded = Array.isArray(res.data) ? res.data : [res.data];
      setList((p) => [...uploaded, ...p]);
      setForm(EMPTY_FORM);
      setFiles([]);
      setPreviews([]);
      if (fileRef.current) fileRef.current.value = "";
      showToast(`✅ ${uploaded.length} image${uploaded.length > 1 ? "s" : ""} uploaded!`);
    } catch (err) {
      showToast(err.response?.data?.message || "Upload failed", "error");
    } finally {
      setUploading(false);
      setProgress(0);
    }
  }

  /* ── delete ── */
  async function deleteItem(id) {
    if (!window.confirm("Delete this image permanently?")) return;
    try {
      await client.delete(`/gallery/${id}`);
      setList((p) => p.filter((i) => i._id !== id));
      showToast("🗑️ Image deleted");
    } catch (err) {
      if (err.response?.status === 401) {
        showToast("Not authorized – please login again", "error");
        navigate("/admin/login");
      } else {
        showToast(err.response?.data?.message || "Delete failed", "error");
      }
    }
  }

  /* ── derived ── */
  const filtered = list.filter((i) => {
    if (filterCat !== "All" && i.category !== filterCat) return false;
    if (filterEvt !== "All" && i.eventName !== filterEvt) return false;
    return true;
  });

  const eventOptions = [
    "All",
    ...Array.from(
      new Set(
        list
          .filter((i) => filterCat === "All" || i.category === filterCat)
          .map((i) => i.eventName)
          .filter(Boolean)
      )
    ),
  ];

  /* ══════════════════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════════════════ */
  return (
    <main className="pt-24 px-4 sm:px-6 bg-[#020609] min-h-screen text-white pb-20">
      <div className="max-w-7xl mx-auto">

        {/* ── TOAST ── */}
        {toast && (
          <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl font-semibold text-sm shadow-xl
            ${toast.type === "error" ? "bg-red-500 text-white" : "bg-cyan-400 text-black"}`}>
            {toast.msg}
          </div>
        )}

        {/* ── HEADER ── */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-cyan-400">🖼️ Gallery Manager</h1>
            <p className="text-gray-500 text-sm mt-1">Upload multiple images grouped by category and event</p>
          </div>
          <button onClick={() => navigate("/admin/dashboard")}
            className="px-5 py-2 rounded-xl bg-cyan-400 text-black font-bold hover:opacity-90 transition">
            ← Dashboard
          </button>
        </div>

        {/* ══════════════════════════════════════
            UPLOAD FORM
        ══════════════════════════════════════ */}
        <section className="bg-[#070d12] border border-cyan-400/20 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-cyan-400 rounded-full inline-block" />
            Upload Images
            <span className="text-xs text-gray-500 font-normal ml-2">— select multiple at once</span>
          </h2>

          <form onSubmit={handleUpload} className="space-y-5">

            {/* ── FILE DROP ZONE ── */}
            <div>
              <label
                htmlFor="file-input"
                className={`flex flex-col items-center justify-center w-full rounded-xl border-2 border-dashed cursor-pointer transition min-h-[140px]
                  ${previews.length > 0 ? "border-cyan-400/60 p-4" : "border-white/15 hover:border-cyan-400/40 p-8"}`}
              >
                {previews.length === 0 ? (
                  <div className="text-center">
                    <div className="text-5xl mb-3">📁</div>
                    <p className="text-gray-300 font-semibold">Click to select images</p>
                    <p className="text-gray-500 text-sm mt-1">JPG, PNG, WEBP — select multiple files at once</p>
                  </div>
                ) : (
                  <div className="w-full">
                    <p className="text-cyan-400 text-sm font-semibold mb-3">
                      {files.length} file{files.length > 1 ? "s" : ""} selected
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-2">
                      {previews.map((src, i) => (
                        <div key={i} className="relative group aspect-square rounded-lg overflow-hidden border border-white/10">
                          <img src={src} alt="" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); removeFile(i); }}
                            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition
                                       flex items-center justify-center text-red-400 text-lg font-bold"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                      {/* add more */}
                      <label htmlFor="file-input"
                        className="aspect-square rounded-lg border-2 border-dashed border-white/20 hover:border-cyan-400/50
                                   flex items-center justify-center text-gray-500 hover:text-cyan-400 cursor-pointer transition text-2xl">
                        +
                      </label>
                    </div>
                  </div>
                )}
              </label>
              <input
                id="file-input"
                ref={fileRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={onFiles}
              />
            </div>

            {/* ── FIELDS ROW ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Category */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-wider">
                  Category
                  <span className="ml-1 text-gray-600 normal-case">(optional — leave blank to show only in All)</span>
                </label>
                <div className="flex gap-2 flex-wrap">
                  {/* None option */}
                  <button key="none" type="button"
                    onClick={() => setForm((p) => ({ ...p, category: "" }))}
                    className={`px-3 py-2 rounded-lg text-xs font-bold border transition
                      ${form.category === "" ? "bg-gray-500 text-white border-gray-500" : "border-white/15 text-gray-500 hover:border-white/30"}`}>
                    None
                  </button>
                  {CATEGORIES.map((c) => (
                    <button key={c} type="button"
                      onClick={() => setForm((p) => ({ ...p, category: c }))}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold border transition
                        ${form.category === c ? "bg-cyan-400 text-black border-cyan-400" : "border-white/15 text-gray-400 hover:border-cyan-400/40"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Event Name */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-wider">Event / School Name *</label>
                <input
                  value={form.eventName}
                  onChange={(e) => setForm((p) => ({ ...p, eventName: e.target.value }))}
                  placeholder="e.g. Anuppur Workshop"
                  className="w-full bg-[#0a1118] border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-cyan-400 transition"
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-wider">Location</label>
                <input
                  value={form.location}
                  onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
                  placeholder="e.g. Anuppur, MP"
                  className="w-full bg-[#0a1118] border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Title */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-wider">Caption (optional)</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  placeholder="Applied to all selected images"
                  className="w-full bg-[#0a1118] border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-wider">Description (optional)</label>
                <input
                  value={form.description}
                  onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                  placeholder="Applied to all selected images"
                  className="w-full bg-[#0a1118] border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-cyan-400 transition"
                />
              </div>
            </div>

            {/* ── PROGRESS BAR ── */}
            {uploading && (
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* ── SUBMIT ── */}
            <button
              type="submit"
              disabled={uploading || files.length === 0}
              className="w-full py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm
                         hover:bg-cyan-300 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {uploading
                ? `Uploading ${files.length} image${files.length > 1 ? "s" : ""}… ${progress}%`
                : `Upload ${files.length > 0 ? files.length : ""} Image${files.length !== 1 ? "s" : ""}`}
            </button>
          </form>
        </section>

        {/* ── FILTER BAR ── */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex gap-2 flex-wrap">
            {["All", ...CATEGORIES].map((c) => (
              <button key={c}
                onClick={() => { setFilterCat(c); setFilterEvt("All"); }}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition
                  ${filterCat === c ? "bg-cyan-400 text-black border-cyan-400" : "border-white/15 text-gray-400 hover:border-cyan-400/40 hover:text-white"}`}>
                {c}
              </button>
            ))}
          </div>

          {eventOptions.length > 1 && (
            <select value={filterEvt} onChange={(e) => setFilterEvt(e.target.value)}
              className="bg-[#0a1118] border border-white/15 text-gray-300 text-sm rounded-full px-4 py-1.5 outline-none focus:border-cyan-400">
              {eventOptions.map((ev) => <option key={ev} value={ev}>{ev}</option>)}
            </select>
          )}

          <span className="ml-auto text-gray-500 text-sm self-center">
            {filtered.length} image{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* ── IMAGE GRID ── */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading…</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No images found.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filtered.map((item) => (
              <div key={item._id}
                className="group relative rounded-xl overflow-hidden border border-white/8 bg-[#070d12]">
                <img src={item.url} alt={item.title || "Gallery"}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3">
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{item.category}</span>
                    {item.eventName && <p className="text-white text-xs font-semibold mt-0.5 line-clamp-1">{item.eventName}</p>}
                    {item.title && <p className="text-gray-300 text-xs mt-1 line-clamp-2">{item.title}</p>}
                  </div>
                  <button onClick={() => deleteItem(item._id)}
                    className="w-full py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
