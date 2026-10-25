import React from 'react';
import { platformConfig, getFeaturedKos } from '../data/kosData';
import {
  ArrowRight,
  MessageCircle,
  Clock,
  ShieldCheck,
  Search,
  Home,
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const HeroSection: React.FC = () => {
  const featuredKos = getFeaturedKos();
  const totalAvailable = featuredKos.roomTypes.reduce((acc, r) => acc + r.availableRooms, 0);

  return (
    <section id="beranda" className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E8] border border-[#EEDCC9] text-[#5E4339] text-xs font-semibold shadow-xs text-center max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#E0707D] shrink-0" />
            <span className="truncate">Platform Move-Out Dormitory • President University</span>
          </div>
        </div>

        {/* Clean Hero Headline & Description */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#423028] tracking-tight leading-[1.2]">
            Cari kos impian anak PU,{' '}
            <span className="text-[#E0707D] relative inline-block whitespace-nowrap">
              lebih gampang.
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-[#F6B84A]"
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

          <p className="mt-3.5 sm:mt-4 text-xs sm:text-base text-[#755C51] max-w-xl mx-auto leading-relaxed px-2">
            Koneksi langsung antara mahasiswa President University dengan pemilik kos terpercaya tanpa calo. Siap huni setelah masa tinggal di asrama selesai.
          </p>

          {/* Action Buttons: Stacks cleanly on mobile, row on tablet/desktop */}
          <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 max-w-md sm:max-w-none mx-auto">
            <a
              href="#tipe-kamar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#E0707D] hover:bg-[#CF5D6B] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#E0707D]/25 active:scale-[0.98] transition-all"
            >
              <span>Eksplor Kamar Kos ABS</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <a
              href={`https://wa.me/${featuredKos.contactPerson.whatsappNumber}?text=${encodeURIComponent(
                'Halo PIC Kos ABS & Tim Kos Connect, saya mahasiswa President University mau tanya ketersediaan kamar...'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-[#FAF3E8] text-[#5E4339] border border-[#E8D6C3] text-xs sm:text-sm font-bold active:scale-[0.98] transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#E0707D] shrink-0" />
              <span>Chat WhatsApp PIC</span>
            </a>

            <a
              href={platformConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl bg-white hover:bg-[#FAF3E8] text-[#755C51] border border-[#EFE4D6] text-xs font-semibold transition-colors shadow-xs"
              title="Instagram Kos Connect"
            >
              <InstagramIcon className="w-4 h-4 text-[#E0707D] shrink-0" />
              <span>{platformConfig.instagram.handle}</span>
            </a>
          </div>
        </div>

        {/* PANORAMIC BANNER CONTAINER */}
        {/* Free from overlapping elements: clean, responsive, fully readable on all devices */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EADAC9] bg-[#FAF3E8] shadow-md shadow-[#5E4339]/5">
          <div className="w-full overflow-hidden bg-[#FAF3E8]">
            <img
              src="/assets/kos-connect-banner.jpg"
              alt="Ilustrasi Banner Resmi Kos Connect Mahasiswa President University"
              className="w-full h-auto max-h-[460px] object-contain sm:object-cover mx-auto block"
              loading="eager"
            />
          </div>

          {/* Clean Meta Strip Below Image (Replaces overlapping floating pills) */}
          <div className="p-3 sm:p-4 bg-white/95 border-t border-[#EBDAC8] flex flex-wrap items-center justify-between gap-2.5 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EAF2EC] text-[#3D6B49] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#568763]" />
                Mitra Resmi: {featuredKos.name}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF3E8] text-[#5E4339] font-medium">
                <Navigation className="w-3.5 h-3.5 text-[#E0707D]" />
                {featuredKos.distanceToCampus.distanceKm} ke Kampus PU
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF3E8] text-[#5E4339] font-medium">
                <Clock className="w-3.5 h-3.5 text-[#F6B84A]" />
                {featuredKos.distanceToCampus.motorbike}
              </span>
            </div>

            <div className="text-[11px] sm:text-xs font-semibold text-[#5E4339] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#568763] animate-pulse" />
              <span>Sisa {totalAvailable} Kamar Siap Huni</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars (Responsive: 1 col on xs mobile, 2 col on sm, 4 col on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-white border border-[#EFE4D6] shadow-xs">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-8 h-8 rounded-xl bg-[#FAF3E8] text-[#D98A1E] flex items-center justify-center shrink-0">
                <Search className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#423028]">Filter Sesuai Kebutuhan</div>
            </div>
            <p className="text-[11px] sm:text-xs text-[#755C51] leading-relaxed">
              Pilihan kamar AC, kamar mandi dalam, dan opsi durasi fleksibel.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EFE4D6] shadow-xs">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-8 h-8 rounded-xl bg-[#FCECEE] text-[#E0707D] flex items-center justify-center shrink-0">
                <Home className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#423028]">Info Lengkap & Terpercaya</div>
            </div>
            <p className="text-[11px] sm:text-xs text-[#755C51] leading-relaxed">
              Foto kamar asli, spesifikasi real, dan transparansi harga tanpa mark-up.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EFE4D6] shadow-xs">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-8 h-8 rounded-xl bg-[#EAF2EC] text-[#568763] flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#423028]">Langsung Hubungi Pemilik</div>
            </div>
            <p className="text-[11px] sm:text-xs text-[#755C51] leading-relaxed">
              No calo & no admin fee. Terhubung langsung via WhatsApp ke PIC kos.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EFE4D6] shadow-xs">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-8 h-8 rounded-xl bg-[#FAF3E8] text-[#5E4339] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#568763]" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#423028]">Aman, Tenang & Nyaman</div>
            </div>
            <p className="text-[11px] sm:text-xs text-[#755C51] leading-relaxed">
              CCTV 24 jam, gerbang kunci sendiri, dan lingkungan kondusif belajar.
            </p>
          </div>
        </div>

        {/* Dedicated Partner Spotlight Bar */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#EADAC9] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#FAF3E8] border border-[#EADAC9] flex items-center justify-center font-extrabold text-[#E0707D] text-base shrink-0">
              ABS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-[#423028]">
                  {featuredKos.name}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#EAF2EC] text-[#3D6B49] text-[10px] font-bold">
                  Mitra Resmi PU
                </span>
              </div>
              <p className="text-xs text-[#755C51] mt-0.5">
                {featuredKos.address}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <a
              href="#tipe-kamar"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E0707D] hover:bg-[#CF5D6B] text-white text-xs font-bold transition-colors text-center"
            >
              <span>Lihat Foto Kamar & Harga</span>
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
