"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center animate-pulse"
      >
        <FaWhatsapp className="w-8 h-8 text-green-600" />
      </a>

      {/* Call */}
      <a
        href="tel:+91XXXXXXXXXX"
        className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center animate-pulse"
      >
        <FaPhoneAlt className="w-7 h-7 text-blue-600" />
      </a>

    </div>
  );
}
