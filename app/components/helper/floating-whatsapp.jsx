"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { personalData } from "@/utils/data/personal-data";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || !personalData.whatsapp) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-6 z-[85] sm:bottom-24 sm:right-8">
      <div className="relative">
        <a
          href={personalData.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Open WhatsApp chat"
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/50 bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.55)] transition-all duration-300 hover:scale-110 hover:bg-emerald-400"
        >
          <FaWhatsapp size={30} className="transition-transform duration-300 group-hover:scale-110" />
        </a>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Close WhatsApp button"
          className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/70 bg-red-500 text-white shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-110"
        >
          <IoClose size={16} />
        </button>
      </div>
    </div>
  );
}
