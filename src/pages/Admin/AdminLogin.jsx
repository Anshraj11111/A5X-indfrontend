import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import client from "../../utils/axiosClient";

export default function AdminLogin() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    adminCode: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
       // ✅ CORRECT API ROUTE
      const res = await client.post("/api/auth/login", data);

      // ✅ Store token & user
      login(res.data.token, res.data.user);

      // ✅ Redirect after login
      navigate("/admin/dashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#020409] text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="p-7 w-full max-w-md bg-[#0a0f14] rounded-2xl border border-[#0ff]/20 shadow-lg shadow-[#0ff1]/10 backdrop-blur-md"
      >
        <h1 className="text-2xl font-semibold text-center">Admin Login</h1>
        <p className="text-xs text-gray-400 mt-1 text-center">
          Login with approved admin credentials
        </p>

        {/* ✅ EMAIL */}
        <div className="mt-6">
          <label className="text-xs text-gray-300">Email</label>
          <input
            type="email"
            required
            placeholder="Enter admin email"
            className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0f1a23] border border-gray-700 text-sm outline-none focus:border-[#0ff]"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        {/* ✅ PASSWORD */}
        <div className="mt-4">
          <label className="text-xs text-gray-300">Password</label>
          <input
            type="password"
            required
            placeholder="Enter admin password"
            className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0f1a23] border border-gray-700 text-sm outline-none focus:border-[#0ff]"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        {/* ✅ ADMIN CODE */}
        <div className="mt-4">
          <label className="text-xs text-gray-300">Admin Code</label>
          <input
            required
            placeholder="Your unique admin code"
            className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0f1a23] border border-gray-700 text-sm outline-none focus:border-[#0ff]"
            onChange={(e) => setData({ ...data, adminCode: e.target.value })}
          />
        </div>

        {/* ✅ BUTTON */}
        <button
          disabled={loading}
          className="mt-6 w-full py-2.5 rounded-lg bg-[#0ff] text-black font-semibold hover:bg-[#0ee2e2] transition-all disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* ✅ ERROR */}
        {error && (
          <p className="mt-2 text-center text-red-400 text-xs">{error}</p>
        )}

        {/* ✅ SIGNUP LINK */}
        <p className="text-gray-400 text-xs mt-6 text-center">
          Not registered?{" "}
          <Link
            to="/admin/signup"
            className="text-[#0ff] hover:text-white underline"
          >
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
}
