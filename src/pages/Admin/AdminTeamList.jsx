import { useEffect, useState } from "react";
import client from "../../utils/axiosClient";
import EditMemberModal from "../../components/EditMemberModal";

export default function AdminTeamList() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);

  // ✅ FETCH TEAM
  const fetchTeam = async () => {
    try {
      const res = await client.get("/team");
      setTeam(res.data);
    } catch (err) {
      alert("Failed to fetch team members");
    }
    setLoading(false);
  };

  // ✅ DELETE TEAM MEMBER
  const deleteMember = async (id) => {
    if (!window.confirm("❗ Delete this member permanently?")) return;

    try {
      // ❌ Wrong → /api/team  
      // ✅ Correct:
      await client.delete(`/team/${id}`);

      setTeam((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  // Backend base URL (for images)
  const BASE_URL = import.meta.env.VITE_API_URL.replace("/api", "");

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#020409] text-white">
      <h1 className="text-3xl font-bold mb-6">Team Members</h1>

      {loading && (
        <p className="text-gray-400 text-center">Loading...</p>
      )}

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {team.map((member) => (
          <div
            key={member._id}
            className="bg-[#0a0f14] border border-[#0ff]/20 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* IMAGE FIX */}
            <img
              src={
                member.photo
                  ? BASE_URL + member.photo
                  : "/default-avatar.png"
              }
              alt={member.name}
              className="h-60 w-full object-cover object-center"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{member.name}</h2>

              {member.title && (
                <p className="text-[#0ff] text-xs uppercase mt-1 tracking-wide">
                  {member.title}
                </p>
              )}

              <p className="text-gray-300 text-sm mt-3 line-clamp-3">
                {member.bio}
              </p>

              <div className="flex gap-3 mt-3 text-xs">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0ff] underline"
                  >
                    LinkedIn
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0ff] underline"
                  >
                    Instagram
                  </a>
                )}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setEditing(member)}
                  className="flex-1 py-2 rounded-lg bg-[#0ff] text-black font-semibold"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteMember(member._id)}
                  className="flex-1 py-2 rounded-lg text-red-400 border border-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <EditMemberModal
          member={editing}
          onClose={() => setEditing(null)}
          onUpdate={(data) =>
            setTeam((prev) =>
              prev.map((m) => (m._id === data._id ? data : m))
            )
          }
        />
      )}
    </div>
  );
}
