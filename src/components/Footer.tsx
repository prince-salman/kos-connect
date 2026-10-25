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
    <footer className="bg-[#FAF3E8]/80 border-t border-[#EBDAC8] pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#EBDAC8]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            {/* Natural transparent logo without box */}
            <a href="#beranda" className="inline-block">
              <img
                src="/assets/kos-connect-logo-clean.png"
                alt="Kos Connect"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </a>

            <p className="text-xs sm:text-sm text-[#755C51] leading-relaxed max-w-sm">
              Platform penghubung resmi mahasiswa President University dengan hunian kos terverifikasi setelah masa asrama (dormy).
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={platformConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#EBDAC8] text-xs font-bold text-[#E0707D] hover:bg-[#FCECEE] transition-colors shadow-2xs"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{platformConfig.instagram.handle}</span>
              </a>

              <a
                href={`https://wa.me/${featuredKos.contactPerson.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#5E4339] text-white text-xs font-bold hover:bg-[#423028] transition-colors shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#F6B84A]" />
                <span>PIC {featuredKos.name}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-[#423028] uppercase tracking-wider mb-3">
              Navigasi Halaman
            </div>
            <ul className="space-y-2 text-xs text-[#755C51]">
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
            <div className="text-xs font-bold text-[#423028] uppercase tracking-wider mb-3">
              Informasi Mitra Terpilih
            </div>
            
            <div className="p-4 rounded-2xl bg-white border border-[#EBDAC8] text-xs shadow-2xs">
              <div className="font-bold text-[#423028] text-sm">{featuredKos.name}</div>
              <div className="text-[#755C51] mt-1 leading-relaxed">
                {featuredKos.address}
              </div>
              <div className="mt-2.5 pt-2 border-t border-[#F1E4D6] flex items-center justify-between text-[11px]">
                <span className="text-[#3D6B49] font-bold">
                  {featuredKos.distanceToCampus.distanceKm} ke Kampus PU
                </span>
                <span className="font-mono font-bold text-[#423028]">
                  {featuredKos.contactPerson.displayPhone}
                </span>
              </div>
            </div>

            <div className="text-[11px] text-[#755C51] flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#F6B84A]" />
              <span>Didedikasikan untuk Komunitas President University</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#755C51]">
          <div className="flex items-center gap-1">
            <span>© 2026 Kos Connect. Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-[#E0707D] fill-[#E0707D]" />
            <span>untuk anak President University.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#EBDAC8] text-xs font-bold text-[#423028] hover:bg-[#FAF3E8] transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
