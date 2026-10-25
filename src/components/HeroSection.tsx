import React from 'react';
import { platformConfig, getFeaturedKos } from '../data/kosData';
import {
  ArrowRight,
  MessageCircle,
  Clock,
  ShieldCheck,
  Search,
  Home
} from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const HeroSection: React.FC = () => {
  const featuredKos = getFeaturedKos();

  return (
    <section id="beranda" className="pt-24 sm:pt-28 pb-14 sm:pb-20 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow */}
        <div className="flex items-center justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E8] border border-[#EEDCC9] text-[#5E4339] text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E0707D]" />
            <span>Platform Resmi Move-Out Dormitory • President University</span>
          </div>
        </div>

        {/* Clean, Non-Slop Display Typography */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#423028] tracking-tight leading-[1.12]">
            Cari kos impian anak PU,{' '}
            <span className="text-[#E0707D] relative inline-block">
              lebih gampang.
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#F6B84A]"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 10 Q50 0 100 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#755C51] max-w-xl mx-auto leading-relaxed">
            Menghubungkan mahasiswa President University langsung dengan pemilik kos terpercaya tanpa calo. Siap huni setelah masa asrama selesai.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#tipe-kamar"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#E0707D] hover:bg-[#CF5D6B] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#E0707D]/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Eksplor Kamar Kos ABS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${featuredKos.contactPerson.whatsappNumber}?text=${encodeURIComponent(
                'Halo PIC Kos ABS & Tim Kos Connect, saya mahasiswa President University mau tanya ketersediaan kamar...'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#FAF3E8] hover:bg-[#F2E5D5] text-[#5E4339] border border-[#E8D6C3] text-xs sm:text-sm font-bold active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-[#E0707D]" />
              <span>Chat WhatsApp PIC</span>
            </a>

            <a
              href={platformConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-2xl bg-white hover:bg-[#FFFDF9] text-[#755C51] border border-[#EFE4D6] text-xs font-semibold transition-colors"
              title="Instagram Kos Connect"
            >
              <InstagramIcon className="w-4 h-4 text-[#E0707D]" />
              <span className="hidden sm:inline">{platformConfig.instagram.handle}</span>
            </a>
          </div>
        </div>

        {/* BESPOKE PANORAMIC BANNER SHOWCASE */}
        {/* Lets the authentic illustration artwork shine in its native aspect ratio */}
        <div className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden border-2 border-[#EADAC9] bg-[#FAF3E8] shadow-lg shadow-[#5E4339]/5 group">
          <div className="relative w-full aspect-[2/1] sm:aspect-[2.3/1] max-h-[520px] overflow-hidden bg-[#FAF3E8]">
            <img
              src="/assets/kos-connect-banner.jpg"
              alt="Ilustrasi Banner Resmi Kos Connect Mahasiswa President University"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
            {/* Subtle aesthetic gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#423028]/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Interactive Floating Pill: Campus Distance */}
          <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl border border-[#EBDAC8] shadow-sm flex items-center gap-2 text-xs font-bold text-[#423028]">
            <Clock className="w-3.5 h-3.5 text-[#F6B84A]" />
            <span>4–5 Menit ke PU Campus</span>
          </div>

          {/* Interactive Floating Pill: Verified Kos ABS */}
          <div className="absolute bottom-3.5 left-3.5 sm:bottom-5 sm:left-5 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-2xl border border-[#EBDAC8] shadow-sm flex items-center gap-2 text-xs font-bold text-[#423028]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#568763] animate-pulse" />
            <span>Mitra Aktif: {featuredKos.name} ({featuredKos.roomTypes[0].availableRooms + featuredKos.roomTypes[1].availableRooms} Kamar Tersedia)</span>
          </div>
        </div>

        {/* 4 Pillars Under the Banner with Non-Slop Editorial Design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-white border border-[#EFE4D6] shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-[#FAF3E8] text-[#5E4339] flex items-center justify-center mb-2.5">
              <Search className="w-4 h-4 text-[#F6B84A]" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#423028]">Filter Sesuai Kebutuhan</div>
            <p className="text-[11px] text-[#755C51] mt-0.5 leading-snug">
              Pilihan kamar AC, kamar mandi dalam/luar, dan durasi fleksibel.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EFE4D6] shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-[#FAF3E8] text-[#E0707D] flex items-center justify-center mb-2.5">
              <Home className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#423028]">Info Lengkap & Terpercaya</div>
            <p className="text-[11px] text-[#755C51] mt-0.5 leading-snug">
              Spesifikasi real, foto kamar asli, dan rincian biaya transparan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EFE4D6] shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-[#FAF3E8] text-[#568763] flex items-center justify-center mb-2.5">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#423028]">Langsung Hubungi Pemilik</div>
            <p className="text-[11px] text-[#755C51] mt-0.5 leading-snug">
              No calo, no biaya admin. Langsung chat WhatsApp PIC Kos ABS.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EFE4D6] shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-[#FAF3E8] text-[#5E4339] flex items-center justify-center mb-2.5">
              <ShieldCheck className="w-4 h-4 text-[#568763]" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#423028]">Aman, Tenang & Nyaman</div>
            <p className="text-[11px] text-[#755C51] mt-0.5 leading-snug">
              CCTV 24 jam, gerbang kunci sendiri, dan lingkungan kondusif belajar.
            </p>
          </div>
        </div>

        {/* Dedicated Partner Spotlight Strip */}
        <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-[#FAF3E8] border border-[#EADAC9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#EADAC9] flex items-center justify-center font-extrabold text-[#E0707D] text-lg shadow-xs shrink-0">
              ABS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-extrabold text-[#423028]">
                  {featuredKos.name}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#EAF2EC] text-[#3D6B49] text-[10px] font-bold border border-[#D1E4D6]">
                  Mitra Resmi Tahap 1
                </span>
              </div>
              <p className="text-xs text-[#755C51] mt-0.5">
                {featuredKos.address} • PIC: <strong className="text-[#423028]">{featuredKos.contactPerson.picName}</strong> ({featuredKos.contactPerson.displayPhone})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="#tipe-kamar"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E0707D] hover:bg-[#CF5D6B] text-white text-xs font-bold transition-colors"
            >
              <span>Pilihan Kamar & Harga</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={`https://wa.me/${featuredKos.contactPerson.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#5E4339] hover:bg-[#423028] text-white transition-colors"
              title="Chat WhatsApp PIC"
            >
              <MessageCircle className="w-4 h-4 text-[#F6B84A]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
