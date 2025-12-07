import { useState } from "react";
import client from "../../utils/axiosClient";

export default function UploadManager() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleFile(e) {
    const f = e.target.files[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  async function handleUpload(e) {
    e.preventDefault();
    setMsg("");

    if (!file) return setMsg("⚠️ Select a file first!");

    try {
      const form = new FormData();
      form.append("file", file);

      // STEP 1 — upload file
      // client baseURL already points to /api, so call the uploads route relative to that
      const uploadRes = await client.post("/uploads", form);

      // Ensure the image URL is absolute so the browser can load it (avoid frontend 404)
      // Example: server returns "/uploads/abc.jpg" — prepend server origin
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const serverOrigin = apiBase.replace(/\/api$/, "");
      const returnedUrl = uploadRes.data?.url || uploadRes.data?.path || "";
      const publicUrl = returnedUrl.startsWith("http") ? returnedUrl : `${serverOrigin}${returnedUrl}`;

      // STEP 2 — save in gallery
      await client.post("/gallery", {
        url: publicUrl,
        title,
        description: desc,
        fileType: "image",
      });

      setMsg("✔ Image uploaded successfully!");
      setFile(null);
      setPreview(null);
      setTitle("");
      setDesc("");
    } catch (err) {
      setMsg(err.response?.data?.message || "❌ Upload failed");
    }
  }

  return (
    <main className="pt-24 min-h-screen bg-black text-white px-6">
      <form
        onSubmit={handleUpload}
        className="max-w-lg mx-auto p-6 bg-[#0a0f14] rounded-xl border border-[#0ff]/20"
      >
        <h2 className="text-2xl font-bold mb-3">Upload Gallery Image</h2>

        {preview && (
          <img src={preview} className="h-56 w-full object-cover rounded-lg mb-3" />
        )}

        <input type="file" onChange={handleFile} />

        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-3 p-2 bg-[#09121a] border border-[#0ff]/30 rounded"
        />

        <textarea
          placeholder="Description"
          rows="3"
          onChange={(e) => setDesc(e.target.value)}
          className="w-full mt-3 p-2 bg-[#09121a] border border-[#0ff]/30 rounded"
        />

        <button
          className="w-full mt-4 bg-[#0ff] text-black py-2 font-bold rounded"
        >
          Upload
        </button>

        {msg && <p className="mt-2 text-center text-[#0ff]">{msg}</p>}
      </form>
    </main>
  );
}
