import { useState } from "react";
import client from "../../utils/axiosClient";

export default function UploadManager() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFile(e) {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  async function handleUpload(e) {
    e.preventDefault();
    setMsg("");

    if (!file) {
      return setMsg("⚠️ Please select an image first");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file); // ✅ must match upload.single("file")

      // ✅ STEP 1 — Upload file
      const uploadRes = await client.post("/uploads", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imageUrl = uploadRes.data?.url;
      if (!imageUrl) {
        setLoading(false);
        return setMsg("❌ Server did not return image URL");
      }

      // ✅ STEP 2 — Save in gallery
      await client.post("/gallery", {
        url: imageUrl,
        title,
        description: desc,
        fileType: "image",
      });

      setMsg("✅ Workshop photo uploaded successfully!");
      setFile(null);
      setPreview(null);
      setTitle("");
      setDesc("");
    } catch (err) {
      console.error("UPLOAD ERROR:", err);
      setMsg(err.response?.data?.message || "❌ Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-24 min-h-screen bg-black text-white px-6">
      <form
        onSubmit={handleUpload} // ✅ MUST BE HERE
        className="max-w-lg mx-auto p-6 bg-[#0a0f14] rounded-xl border border-[#0ff]/20"
      >
        <h2 className="text-2xl font-bold mb-3">Upload Workshop Image</h2>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="h-56 w-full object-cover rounded-lg mb-3"
          />
        )}

        <input type="file" onChange={handleFile} required />

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-3 p-2 bg-[#09121a] border border-[#0ff]/30 rounded"
        />

        <textarea
          placeholder="Description"
          rows="3"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full mt-3 p-2 bg-[#09121a] border border-[#0ff]/30 rounded"
        />

        <button
          type="submit"      // ✅ ABSOLUTELY REQUIRED
          disabled={loading}
          className="w-full mt-4 bg-[#0ff] text-black py-2 font-bold rounded disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        {msg && <p className="mt-2 text-center text-[#0ff]">{msg}</p>}
      </form>
    </main>
  );
}
