import React from 'react';
import {
  GraduationCap,
  Building,
  HeartHandshake,
  CheckCircle,
  Sparkles,
  ArrowDownCircle
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 sm:py-24 bg-[#FAF3E8]/80 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCECEE] text-[#E0707D] text-xs font-bold mb-3 border border-[#F8C8CE]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cerita di Balik Kos Connect</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#5E4339] tracking-tight">
            Transisi Nyaman dari <span className="text-[#E0707D]">Dormy PU</span> ke Kos Incaran
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#7E6359] leading-relaxed">
            Sebagai mahasiswa President University, momen pindah dari asrama (Student Housing) seringkali bikin pusing: survei kesana-kemari, harga tidak jelas, atau fasilitas tidak sesuai ekspektasi.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Problem Dormy */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF4EB] border border-[#EBDAC8] relative hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#FEF4E0] text-[#D98A1E] flex items-center justify-center mb-5 shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#5E4339] mb-2.5">
              1. Pusing Saat Move Out Dormy?
            </h3>
            <p className="text-xs sm:text-sm text-[#7E6359] leading-relaxed">
              Setelah selesai masa wajib tinggal di asrama President University, mahasiswa harus mencari hunian mandiri. Kos Connect hadir agar kamu tidak perlu keliling panas-panasan di Cikarang hanya untuk cari kos.
            </p>
          </div>

          {/* Card 2: Kos Terverifikasi */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF4EB] border border-[#EBDAC8] relative hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF3ED] text-[#6B9577] flex items-center justify-center mb-5 shadow-xs">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#5E4339] mb-2.5">
              2. Kemitraan Riil & Terverifikasi
            </h3>
            <p className="text-xs sm:text-sm text-[#7E6359] leading-relaxed">
              Kami tidak asal mencantumkan kos. Setiap mitra seperti <span className="font-semibold text-[#5E4339]">Kos ABS</span> telah kami cek kelayakan kamar, keamanan CCTV, air bersih, serta kepastian pemilik yang ramah dan kooperatif.
            </p>
          </div>

          {/* Card 3: Direct Booking WhatsApp */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF4EB] border border-[#EBDAC8] relative hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#FCECEE] text-[#E0707D] flex items-center justify-center mb-5 shadow-xs">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#5E4339] mb-2.5">
              3. Tanpa Calo & No Biaya Admin
            </h3>
            <p className="text-xs sm:text-sm text-[#7E6359] leading-relaxed">
              Mahasiswa langsung terhubung dengan pemilik / PIC kos via WhatsApp. Harga sewa 100% transparan tanpa mark-up perantara, bahkan ada diskon durasi sewa khusus mahasiswa PU!
            </p>
          </div>

        </div>

        {/* Milestone Target & Status */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FAF4EB] via-[#FFFDF9] to-[#FAF4EB] border-2 border-[#EBDAC8] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#EBDAC8] flex items-center justify-center text-[#E0707D] shrink-0 shadow-xs">
              <CheckCircle className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold text-[#5E4339]">
                  Target Fase 1 (s.d. Desember 2026): Mitra Utama Kos ABS
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#EBF3ED] text-[#476A50] text-[11px] font-bold">
                  Active
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#7E6359] mt-0.5">
                Kami memprioritaskan kualitas pelayanan dan ketersediaan kamar terbaik di Kos ABS sebelum membuka gelombang kemitraan kos baru di tahun 2027.
              </p>
            </div>
          </div>

          <a
            href="#tipe-kamar"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#5E4339] hover:bg-[#3F2B23] text-white text-xs sm:text-sm font-bold shrink-0 transition-colors shadow-xs"
          >
            <span>Eksplor Kamar Kos ABS</span>
            <ArrowDownCircle className="w-4 h-4 text-[#F6B84A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
