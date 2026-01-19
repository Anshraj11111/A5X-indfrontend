import React from "react";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SocialFloat() {
  const LINKS = {
    youtube: "https://youtube.com/@a5x_ind?si=aHYApTrooJuZJNhj", // change
    instagram: "https://www.instagram.com/a5x.ind?igsh=OXBpaXRramx3czcx", // change
    whatsapp: "https://chat.whatsapp.com/HtO8wM0l6OW3pUbCgQuwep", // change
  };

  const btnBase =
    "w-12 h-12 rounded-full flex items-center justify-center " +
    "text-white shadow-lg backdrop-blur-md " +
    "bg-cyan-500/10 border border-cyan-400/30 " +
    "hover:scale-110 transition-all duration-200 " +
    "hover:shadow-cyan-400/30";

  return (
    <div className="fixed right-5 bottom-5 z-[999999] flex flex-col gap-3">
      <a
        href={LINKS.youtube}
        target="_blank"
        rel="noreferrer"
        title="YouTube"
        className={`${btnBase} hover:border-red-500/40 hover:bg-red-500/10 hover:shadow-red-500/30`}
      >
        <FaYoutube size={22} />
      </a>

      <a
        href={LINKS.instagram}
        target="_blank"
        rel="noreferrer"
        title="Instagram"
        className={`${btnBase} hover:border-pink-500/40 hover:bg-pink-500/10 hover:shadow-pink-500/30`}
      >
        <FaInstagram size={22} />
      </a>

      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        title="WhatsApp Group"
        className={`${btnBase} hover:border-green-500/40 hover:bg-green-500/10 hover:shadow-green-500/30`}
      >
        <FaWhatsapp size={22} />
      </a>
    </div>
  );
}
