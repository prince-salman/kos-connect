import React from 'react';
import { platformConfig } from '../data/kosData';
import { Handshake, ArrowRight } from 'lucide-react';

export const FutureExpansionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#F4E8DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-r from-[#FAF4EB] via-[#FFFDF9] to-[#FAF4EB] border-2 border-[#EBDAC8] p-8 sm:p-12 relative overflow-hidden">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF4E0] text-[#7A5210] text-xs font-bold mb-4 border border-[#F6DEB0]">
              <Handshake className="w-3.5 h-3.5 text-[#F6B84A]" />
              <span>Program Kemitraan Kos Connect</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#5E4339] tracking-tight">
              Punya Kos Dekat Kampus President University?
            </h3>

            <p className="mt-3 text-xs sm:text-base text-[#7E6359] leading-relaxed">
              Hingga Desember 2026, fokus utama kami adalah memastikan kepuasan dan pelayanan optimal bersama mitra eksklusif perdana kami, <span className="font-bold text-[#5E4339]">Kos ABS</span>. 
            </p>

            <p className="mt-2 text-xs sm:text-sm text-[#7E6359] leading-relaxed">
              Bagi pemilik kos lain di area Simprug, Jababeka, atau sekitar kampus PU yang ingin membuka kuota kamar untuk gelombang move-out berikutnya, Anda dapat mendaftarkan kos Anda untuk diverifikasi oleh tim Kos Connect.
            </p>

            {/* Steps to partner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 mb-8">
              <div className="p-3.5 rounded-2xl bg-white border border-[#EFE2D3] shadow-xs">
                <div className="text-xs font-bold text-[#E0707D]">01. Verifikasi Lokasi</div>
                <div className="text-xs text-[#7E6359] mt-1">Tim kami survei kenyamanan & fasilitas kos Anda.</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#EFE2D3] shadow-xs">
                <div className="text-xs font-bold text-[#F6B84A]">02. Kurasi Katalog</div>
                <div className="text-xs text-[#7E6359] mt-1">Foto tipe kamar dan spesifikasi diunggah ke Kos Connect.</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#EFE2D3] shadow-xs">
                <div className="text-xs font-bold text-[#6B9577]">03. Akses Ribuan Mahasiswa PU</div>
                <div className="text-xs text-[#7E6359] mt-1">Mahasiswa langsung booking via WhatsApp ke pemilik.</div>
              </div>
            </div>

            {/* CTA to Partner */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${platformConfig.teamContact.whatsappNumber}?text=${encodeURIComponent(
                  'Halo Tim Kos Connect, saya pemilik kos di sekitar President University ingin menanyakan info kemitraan kos...'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#5E4339] hover:bg-[#3F2B23] text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
              >
                <span>Ajukan Kemitraan Kos Baru</span>
                <ArrowRight className="w-4 h-4 text-[#F6B84A]" />
              </a>

              <span className="text-xs text-[#7E6359]">
                atau hubungi kami via Instagram: <strong className="text-[#E0707D]">{platformConfig.instagram.handle}</strong>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
