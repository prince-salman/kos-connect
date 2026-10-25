import React, { useState } from 'react';
import { getFeaturedKos } from '../data/kosData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const kos = getFeaturedKos();
  const [showTooltip, setShowTooltip] = useState(true);

  const waUrl = `https://wa.me/${kos.contactPerson.whatsappNumber}?text=${encodeURIComponent(
    `Halo Pengelola ${kos.name} & Tim Kos Connect! Saya mahasiswa President University ingin menanyakan ketersediaan kamar...`
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 group">
      {/* Speech Bubble Tooltip */}
      {showTooltip && (
        <div className="relative bg-white text-[#5E4339] px-3.5 py-2 rounded-2xl shadow-lg border border-[#EBDAC8] text-xs font-semibold max-w-xs animate-bounce flex items-center gap-2">
          <span>👋 Mau tanya atau survei ke {kos.name}?</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#7E6359] hover:text-[#E0707D] p-0.5 rounded-full"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow indicator */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-[#EBDAC8] transform rotate-45" />
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold shadow-lg shadow-[#25D366]/30 hover:scale-105 transition-all duration-300"
        aria-label="Chat WhatsApp Pengelola Kos"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-ping" />
        </div>
        <span className="text-xs sm:text-sm font-extrabold pr-1 hidden sm:inline-block">
          Chat PIC Kos ABS
        </span>
      </a>
    </div>
  );
};
