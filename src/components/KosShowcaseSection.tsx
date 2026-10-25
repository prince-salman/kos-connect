import React, { useState } from 'react';
import type { RoomType } from '../data/kosData';
import { getFeaturedKos } from '../data/kosData';
import {
  Bed,
  Check,
  MapPin,
  Sparkles,
  ShieldCheck,
  Coffee,
  ArrowRight,
  Calculator,
  BadgePercent,
  CheckCircle2,
  Clock,
  Navigation,
  Bath
} from 'lucide-react';

interface KosShowcaseProps {
  onSelectRoomForBooking: (room: RoomType, durationName: string, totalPrice: number) => void;
}

export const KosShowcaseSection: React.FC<KosShowcaseProps> = ({ onSelectRoomForBooking }) => {
  const kos = getFeaturedKos();
  const singleRoom = kos.roomTypes[0]; // 1 tipe kamar fokus

  // Active Photo in Main Showcase
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  
  // State Kalkulator Sewa
  const [calcDuration, setCalcDuration] = useState<'1' | '3' | '6' | '12'>('6');

  // Photo labels
  const photoLabels = [
    { label: 'Kamar & AC', icon: '🪟' },
    { label: 'Kamar Mandi Dalam', icon: '🚿' },
    { label: 'Kasur & Dipan', icon: '🛏️' },
    { label: 'Lemari 2 Pintu', icon: '🚪' },
    { label: 'Meja Belajar', icon: '💻' }
  ];

  // Hitung harga kalkulator
  const calculateTotal = () => {
    switch (calcDuration) {
      case '1':
        return {
          total: singleRoom.priceMonthly,
          monthly: singleRoom.priceMonthly,
          discount: 0,
          label: '1 Bulan'
        };
      case '3':
        return {
          total: singleRoom.priceQuarterly,
          monthly: Math.round(singleRoom.priceQuarterly / 3),
          discount: singleRoom.priceMonthly * 3 - singleRoom.priceQuarterly,
          label: '3 Bulan (Paket Kuartal)'
        };
      case '6':
        return {
          total: singleRoom.priceSemester,
          monthly: Math.round(singleRoom.priceSemester / 6),
          discount: singleRoom.priceMonthly * 6 - singleRoom.priceSemester,
          label: '6 Bulan (1 Semester PU)'
        };
      case '12':
        return {
          total: singleRoom.priceYearly,
          monthly: Math.round(singleRoom.priceYearly / 12),
          discount: singleRoom.priceMonthly * 12 - singleRoom.priceYearly,
          label: '12 Bulan (1 Tahun)'
        };
    }
  };

  const calcResult = calculateTotal();

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="tipe-kamar" className="py-14 sm:py-20 bg-transparent relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2EC] text-[#3D6B49] text-xs font-bold mb-3 border border-[#D1E4D6]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#568763]" />
            <span>Foto Kamar Asli & Terverifikasi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#423028] tracking-tight">
            Fasilitas Kamar <span className="text-[#E0707D]">{kos.name}</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#755C51] leading-relaxed">
            Kamar full-furnished dengan fasilitas kamar mandi dalam pribadi. Bersih, tenang, dan siap huni untuk mahasiswa President University.
          </p>

          {/* Quick Distance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#EBDAC8] text-xs font-semibold text-[#5E4339] shadow-xs">
              <Navigation className="w-3 h-3 text-[#E0707D]" />
              {kos.distanceToCampus.distanceKm} ke Kampus PU
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#EBDAC8] text-xs font-semibold text-[#5E4339] shadow-xs">
              <Clock className="w-3 h-3 text-[#F6B84A]" />
              {kos.distanceToCampus.motorbike}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#EBDAC8] text-xs font-semibold text-[#5E4339] shadow-xs">
              <MapPin className="w-3 h-3 text-[#568763]" />
              {kos.area}
            </span>
          </div>
        </div>

        {/* Promo Banner if available */}
        {kos.promoInfo && (
          <div className="mb-10 sm:mb-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FCECEE] via-[#FEF4E0] to-[#FCECEE] border border-[#F8C8CE] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E0707D] text-white flex items-center justify-center shrink-0">
                <BadgePercent className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E0707D] bg-white px-2 py-0.5 rounded-md">
                    {kos.promoInfo.badge}
                  </span>
                  <span className="text-[11px] text-[#755C51] font-medium">
                    {kos.promoInfo.expiryDate}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#423028] mt-0.5">
                  {kos.promoInfo.discountText}
                </p>
              </div>
            </div>
            <a
              href="#booking"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#E0707D] hover:bg-[#CF5D6B] transition-colors shrink-0 shadow-xs"
            >
              <span>Klaim Promo Ini</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* MASTER FEATURE SHOWCASE (1 TIPE KAMAR KOS ABS) */}
        <div className="bg-white rounded-3xl border-2 border-[#EBDAC8] shadow-sm overflow-hidden mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Column: Interactive Real Photo Viewer */}
            <div className="lg:col-span-7 p-4 sm:p-6 bg-[#FAF4EB]/50 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EBDAC8]">
              
              {/* Main Photo Display */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#EBDAC8] aspect-[4/3] sm:aspect-[16/11] shadow-xs">
                <img
                  src={singleRoom.images[activePhotoIdx]}
                  alt={photoLabels[activePhotoIdx]?.label || singleRoom.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />

                {/* Badges on Top */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#E0707D] text-white shadow-xs flex items-center gap-1">
                    <Bath className="w-3.5 h-3.5" />
                    Kamar Mandi Dalam
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#568763] text-white shadow-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Sisa {singleRoom.availableRooms} Kamar
                  </span>
                </div>

                {/* Bottom Caption Pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/65 backdrop-blur-xs px-3 py-1.5 rounded-xl text-white text-xs font-medium flex items-center justify-between">
                  <span>{photoLabels[activePhotoIdx]?.icon} {photoLabels[activePhotoIdx]?.label}</span>
                  <span className="text-[10px] text-white/80">{activePhotoIdx + 1} dari {singleRoom.images.length} Foto</span>
                </div>
              </div>

              {/* 5 Clickable Thumbnail Selectors */}
              <div className="mt-3.5">
                <div className="text-[11px] font-bold text-[#755C51] uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Pilih Foto Bagian Kamar:</span>
                  <span className="text-[10px] text-[#E0707D] font-normal">Klik untuk melihat detail</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {singleRoom.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhotoIdx(i)}
                      className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all group ${
                        activePhotoIdx === i
                          ? 'border-[#E0707D] ring-2 ring-[#E0707D]/30 shadow-xs'
                          : 'border-[#EBDAC8] opacity-75 hover:opacity-100 hover:border-[#D8BEA8]'
                      }`}
                    >
                      <img src={img} alt={photoLabels[i]?.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-1">
                        <span className="text-[9px] sm:text-[10px] font-bold text-white leading-tight truncate">
                          {photoLabels[i]?.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Room Details, Pricing & Facilities */}
            <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                
                {/* Room Title */}
                <div className="flex items-center gap-1.5 text-xs text-[#E0707D] font-bold uppercase tracking-wider mb-1">
                  <Bath className="w-4 h-4" />
                  <span>Kamar Utama Kos ABS</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#423028] leading-tight">
                  {singleRoom.name}
                </h3>

                <p className="text-xs text-[#755C51] mt-1.5 leading-relaxed">
                  {singleRoom.tagline}
                </p>

                {/* Price Box */}
                <div className="mt-4 p-4 rounded-2xl bg-[#FAF3E8] border border-[#EBDAC8]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[11px] text-[#755C51] font-medium">Harga Sewa Bulanan</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#423028]">
                        {formatRupiah(singleRoom.priceMonthly)}
                        <span className="text-xs font-normal text-[#755C51]"> /bln</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-[#3D6B49] bg-[#EAF2EC] px-2.5 py-1 rounded-md">
                        Inc. WiFi & Air
                      </span>
                      <div className="text-[10px] text-[#755C51] mt-1">
                        Deposit: {formatRupiah(singleRoom.deposit)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Specs Pills */}
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#FFFDF9] border border-[#EFE4D6]">
                    <span className="text-[#755C51] block text-[10px]">Ukuran Kamar:</span>
                    <strong className="text-[#423028] font-bold">{singleRoom.size}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FFFDF9] border border-[#EFE4D6]">
                    <span className="text-[#755C51] block text-[10px]">Tipe Kasur:</span>
                    <strong className="text-[#423028] font-bold">Royal Foam + Dipan</strong>
                  </div>
                </div>

                {/* Facilities Checklist */}
                <div className="mt-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#423028] mb-2.5">
                    Fasilitas yang Didapatkan:
                  </div>
                  <div className="space-y-2">
                    {singleRoom.roomFacilities.map((fac, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5E4339]">
                        <div className="w-4 h-4 rounded-full bg-[#EAF2EC] text-[#568763] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#F1E4D6]">
                <button
                  onClick={() => {
                    onSelectRoomForBooking(singleRoom, '1 Semester (6 Bulan)', singleRoom.priceSemester);
                  }}
                  className="w-full py-4 px-5 rounded-2xl bg-[#E0707D] hover:bg-[#CF5D6B] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-md shadow-[#E0707D]/25 transition-all active:scale-[0.98]"
                >
                  <span>Pilih & Booking Kamar Ini</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-[#755C51] text-center mt-2">
                  ⚡ Bisa jadwalkan survei lokasi langsung sebelum fix sewa.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* KALKULATOR SEWA */}
        <div className="mb-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#EBDAC8] shadow-xs">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-[#FEF4E0] text-[#D98A1E] shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#423028]">
                  Simulasi Biaya Sewa Khusus Mahasiswa PU
                </h3>
                <p className="text-xs text-[#755C51]">
                  Pilih durasi sewa untuk melihat diskon paket semesteran atau tahunan
                </p>
              </div>
            </div>

            {/* Duration Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#423028] mb-2 uppercase tracking-wider">
                Pilih Durasi Sewa:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { key: '1', label: '1 Bulan', note: 'Bulanan' },
                  { key: '3', label: '3 Bulan', note: 'Hemat 150rb' },
                  { key: '6', label: '1 Semester', note: 'Rekomendasi PU' },
                  { key: '12', label: '1 Tahun', note: 'Hemat s.d 1.7jt' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setCalcDuration(item.key as any)}
                    className={`p-3 rounded-xl text-center border transition-all ${
                      calcDuration === item.key
                        ? 'border-[#E0707D] bg-[#E0707D] text-white shadow-xs'
                        : 'border-[#EBDAC8] bg-[#FAF3E8] text-[#423028] hover:border-[#D8BEA8]'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold">{item.label}</div>
                    <div
                      className={`text-[10px] mt-0.5 ${
                        calcDuration === item.key ? 'text-white/90' : 'text-[#568763] font-semibold'
                      }`}
                    >
                      {item.note}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Calculation Result */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF3E8] border border-[#EBDAC8]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E8D6C3]">
                <div>
                  <span className="text-[11px] text-[#755C51]">Estimasi Total Sewa ({calcResult.label})</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#423028]">
                    {formatRupiah(calcResult.total)}
                  </div>
                  <div className="text-xs text-[#755C51] mt-0.5">
                    Setara <strong className="text-[#423028]">{formatRupiah(calcResult.monthly)}</strong> / bulan
                  </div>
                </div>

                {calcResult.discount > 0 && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EAF2EC] text-[#3D6B49] text-xs font-bold border border-[#D1E4D6] self-start sm:self-auto">
                    <Sparkles className="w-3.5 h-3.5 text-[#568763]" />
                    <span>Hemat {formatRupiah(calcResult.discount)}!</span>
                  </div>
                )}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-[11px] text-[#755C51]">
                  Sudah termasuk: Air, Iuran Sampah & WiFi Unlimited.
                </div>
                <button
                  onClick={() => {
                    onSelectRoomForBooking(singleRoom, calcResult.label, calcResult.total);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E0707D] hover:bg-[#CF5D6B] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span>Pilih Paket & Chat WA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* FASILITAS LENGKAP KOS ABS */}
        <div id="fasilitas" className="pt-4 mb-14 scroll-mt-24">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#5E4339] bg-[#FAF3E8] px-3 py-1 rounded-full border border-[#EBDAC8]">
              Fasilitas Seluruh Area
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#423028] mt-2">
              Kelengkapan di {kos.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#755C51] mt-1.5">
              Dirancang untuk kenyamanan istirahat dan efisiensi belajar mahasiswa President University.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {kos.facilities.map((group, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EBDAC8] shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#F1E4D6]">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF3E8] text-[#E0707D] flex items-center justify-center font-bold shrink-0">
                    {idx === 0 ? <Bed className="w-4 h-4" /> : idx === 1 ? <Coffee className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#423028]">
                    {group.category}
                  </h4>
                </div>

                <div className="space-y-3">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E0707D] mt-1.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-[#423028]">
                          {item.name}
                        </div>
                        <p className="text-[11px] text-[#755C51] mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ATURAN & LINGKUNGAN KOS */}
        <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF3E8] border border-[#EBDAC8]">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-base sm:text-lg font-bold text-[#423028] text-center mb-1">
              Tata Tertib & Ketertiban Bersama {kos.name}
            </h4>
            <p className="text-xs text-[#755C51] text-center mb-5">
              Lingkungan tenang agar seluruh mahasiswa PU dapat beristirahat dan belajar nyaman
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {kos.rules.map((rule, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#EFE2D3] shadow-2xs">
                  <div className="text-xs font-bold text-[#423028] flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#568763] shrink-0" />
                    <span>{rule.title}</span>
                  </div>
                  <p className="text-[11px] text-[#755C51] leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
