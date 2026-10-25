import React, { useState, useEffect } from 'react';
import { getFeaturedKos } from '../data/kosData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const kos = getFeaturedKos();
  const [showTooltip, setShowTooltip] = useState(false);

  // Show friendly tooltip after 3 seconds, then auto-hide after 7 seconds to not obstruct screen on mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const waUrl = `https://wa.me/${kos.contactPerson.whatsappNumber}?text=${encodeURIComponent(
    `Halo Pengelola ${kos.name} & Tim Kos Connect! Saya mahasiswa President University ingin menanyakan ketersediaan kamar...`
  )}`;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-1.5 group select-none">
      {/* Speech Bubble Tooltip (Subtle, non-obtrusive) */}
      {showTooltip && (
        <div className="relative bg-white/95 backdrop-blur-md text-[#423028] px-3 py-1.5 rounded-xl shadow-md border border-[#EBDAC8] text-[11px] font-semibold max-w-[210px] animate-in fade-in slide-in-from-bottom-2 flex items-center justify-between gap-1.5">
          <span>👋 Tanya / survei ke {kos.name}?</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#755C51] hover:text-[#E0707D] p-0.5 rounded-md"
            aria-label="Tutup pesan"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat WhatsApp Pengelola Kos"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full" />
        </div>
        <span className="text-xs font-bold pr-1 hidden sm:inline-block">
          Chat PIC Kos ABS
        </span>
      </a>
    </div>
  );
};
