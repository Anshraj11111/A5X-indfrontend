import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import client from "../../utils/axiosClient";
import { AuthContext } from "../../context/AuthContext";

export default function AdminSignup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    adminCode: "",
  });

  const auth = useContext(AuthContext);

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      // send signup, receive token + user
      const res = await client.post("/auth/signup", form);

      const { token, user } = res.data || {};

      // if AuthContext available, save token & user for immediate auth
      if (token && user && auth?.login) {
        auth.login(token, user);
      }

      setMsg("🎉 Signup successful — Redirecting...");
      navigate("/admin/dashboard");
      
    } catch (err) {
      setMsg(err.response?.data?.message || "❌ Signup Failed");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-start justify-center px-4 pt-20 md:pt-28 lg:pt-32 pb-12 bg-[#020409]">
      <div className="w-full max-w-xl bg-[#081018] border border-[#0ff]/30 rounded-2xl shadow-[0_0_30px_#0ff2] p-8 text-white backdrop-blur-md mt-4">

        {/* ✅ Heading */}
        <h1 className="text-3xl font-semibold text-center tracking-wide">
          Create Admin Account
        </h1>
        <p className="text-gray-400 text-sm text-center mt-2">
          Manage uploads, team & content
        </p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>

          {/* ✅ Name */}
          <div>
            <label className="text-xs text-gray-300">Full Name</label>
            <input
              className="w-full mt-1 px-4 py-2.5 rounded-lg bg-[#101b24] 
                         border border-gray-700 text-sm outline-none
                         focus:border-[#0ff] focus:bg-[#0a1118] transition"
              placeholder="John Doe"
              required
              value={form.name}
              autoFocus
              aria-label="Full name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* ✅ Email */}
          <div>
            <label className="text-xs text-gray-300">Email Address</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2.5 rounded-lg bg-[#101b24] 
                         border border-gray-700 text-sm outline-none
                         focus:border-[#0ff] focus:bg-[#0a1118] transition"
              placeholder="admin@example.com"
              required
              value={form.email}
              aria-label="Email address"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* ✅ Password */}
          <div>
            <label className="text-xs text-gray-300">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2.5 rounded-lg bg-[#101b24] 
                         border border-gray-700 text-sm outline-none
                         focus:border-[#0ff] focus:bg-[#0a1118] transition"
              placeholder="Minimum 8 characters"
              required
              value={form.password}
              aria-label="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          {/* ✅ Admin Code */}
          <div>
            <label className="text-xs text-gray-300">Admin Code</label>
            <input
              className="w-full mt-1 px-4 py-2.5 rounded-lg bg-[#101b24] 
                         border border-gray-700 text-sm outline-none
                         focus:border-[#0ff] focus:bg-[#0a1118] transition"
              placeholder="Provided by founder"
              required
              value={form.adminCode}
              aria-label="Admin code"
              onChange={(e) => setForm({ ...form, adminCode: e.target.value })}
            />
          </div>

          {/* ✅ Button */}
          <button
            disabled={loading}
            className="w-full py-2.5 mt-2 bg-[#0ff] text-black rounded-xl font-semibold
                       hover:bg-[#07e2e2] shadow-[0_0_15px_#0ff7]
                       active:scale-95 transition disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          {/* ✅ Response */}
          {msg && (
            <p className="text-center text-[#0ff] text-xs mt-3">
              {msg}
            </p>
          )}
        </form>

        {/* ✅ Divider */}
        <div className="border-t border-[#0ff]/10 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-xs">
            Already registered?
            <Link
              to="/admin/login"
              className="text-[#0ff] ml-1 hover:text-white underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
