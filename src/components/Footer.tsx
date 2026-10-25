import React from 'react';
import { platformConfig, getFeaturedKos } from '../data/kosData';
import { MessageCircle, Heart, GraduationCap, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  const featuredKos = getFeaturedKos();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF4EB] border-t border-[#EBDAC8] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#EBDAC8]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/kos-connect-logo.jpg"
                alt="Kos Connect Mascot"
                className="w-12 h-12 rounded-2xl object-cover border border-[#EBDAC8] shadow-xs"
              />
              <div>
                <span className="text-2xl font-extrabold text-[#5E4339]">
                  kos<span className="text-[#E0707D]">connect</span>
                </span>
                <p className="text-xs text-[#7E6359] font-medium">
                  {platformConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#7E6359] leading-relaxed max-w-sm">
              Inisiatif platform penghubung mahasiswa President University dengan hunian kos berkualitas dan terpercaya setelah masa asrama (dormy).
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={platformConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#EBDAC8] text-xs font-bold text-[#E0707D] hover:bg-[#FCECEE] transition-colors shadow-xs"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{platformConfig.instagram.handle}</span>
              </a>

              <a
                href={`https://wa.me/${featuredKos.contactPerson.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#5E4339] text-white text-xs font-bold hover:bg-[#3F2B23] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#F6B84A]" />
                <span>PIC {featuredKos.name}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-[#5E4339] uppercase tracking-wider mb-3">
              Navigasi Halaman
            </div>
            <ul className="space-y-2 text-xs text-[#7E6359]">
              <li>
                <a href="#beranda" className="hover:text-[#E0707D] transition-colors">
                  Beranda & Info Kos Connect
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#E0707D] transition-colors">
                  Tentang Move Out Dormy PU
                </a>
              </li>
              <li>
                <a href="#kos-abs" className="hover:text-[#E0707D] transition-colors">
                  Mitra Resmi: Kos ABS
                </a>
              </li>
              <li>
                <a href="#tipe-kamar" className="hover:text-[#E0707D] transition-colors">
                  Daftar Tipe Kamar & Harga
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-[#E0707D] transition-colors">
                  Fasilitas & Aturan Kos
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#E0707D] font-bold text-[#E0707D] transition-colors">
                  Booking Cepat ke WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Mitra & Lokasi */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-[#5E4339] uppercase tracking-wider mb-3">
              Informasi Mitra Terpilih
            </div>
            
            <div className="p-4 rounded-2xl bg-white border border-[#EBDAC8] text-xs">
              <div className="font-bold text-[#5E4339] text-sm">{featuredKos.name}</div>
              <div className="text-[#7E6359] mt-1 leading-relaxed">
                {featuredKos.address}
              </div>
              <div className="mt-2 pt-2 border-t border-[#F1E4D6] flex items-center justify-between text-[11px]">
                <span className="text-[#6B9577] font-semibold">
                  Jarak: {featuredKos.distanceToCampus.distanceKm} ke Kampus PU
                </span>
                <span className="font-mono font-bold text-[#5E4339]">
                  {featuredKos.contactPerson.displayPhone}
                </span>
              </div>
            </div>

            <div className="text-[11px] text-[#7E6359] flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#F6B84A]" />
              <span>Didedikasikan untuk Komunitas President University</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E6359]">
          <div className="flex items-center gap-1">
            <span>© 2026 Kos Connect. Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-[#E0707D] fill-[#E0707D]" />
            <span>untuk anak President University.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#EBDAC8] text-xs font-bold text-[#5E4339] hover:bg-[#F9F4EB] transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
