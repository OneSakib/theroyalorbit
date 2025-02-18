"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "918865832516";
  const message = encodeURIComponent(
    "Hello! I'm interested in booking a room."
  );
  return (
    <Link
      style={{ zIndex: 9 }}
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center gap-2"
    >
      <FaWhatsapp size={24} />
      <span className="hidden sm:inline">Chat with Us</span>
    </Link>
  );
}
