import { useEffect, useState } from "react";
import client from "../utils/axiosClient";
import TeamSection from "../components/TeamSection";

export default function TeamPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    client.get("/team")
      .then(res => setMembers(res.data))
      .catch(() => console.log("Failed to fetch team"));
  }, []);

  return (
    <main className="pt-24 bg-black text-white min-h-screen overflow-hidden">

      {/* === STATIC FOUNDERS COMPONENT === */}
      <TeamSection />

      {/* === DYNAMIC MEMBERS FROM DB === */}
      <section className="max-w-6xl mx-auto px-6 mt-10 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          🚀 Core Team Members
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map(member => (
            <div
              key={member._id}
              className="bg-[#0a0f14] border border-[#0ff]/15 rounded-2xl p-5 shadow-md"
            >
              <img
                src={member.photo || "/default-avatar.png"}
                alt={member.name}
                className="w-full h-60 object-cover rounded-xl"
              />

              <h2 className="text-xl font-semibold mt-4">{member.name}</h2>

              {member.designation && (
                <p className="text-[#0ff] text-xs uppercase tracking-wide mt-1">
                  {member.designation}
                </p>
              )}

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {member.bio}
              </p>

              <div className="flex gap-4 mt-4 text-xs">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="text-[#0ff] underline"
                  >
                    LinkedIn
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    className="text-[#0ff] underline"
                  >
                    Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
