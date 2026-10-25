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
  Navigation
} from 'lucide-react';

interface KosShowcaseProps {
  onSelectRoomForBooking: (room: RoomType, durationName: string, totalPrice: number) => void;
}

export const KosShowcaseSection: React.FC<KosShowcaseProps> = ({ onSelectRoomForBooking }) => {
  const kos = getFeaturedKos();
  const [selectedRoomId, setSelectedRoomId] = useState<string>(kos.roomTypes[0].id);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'semua' | 'kamar' | 'fasilitas' | 'lingkungan'>('semua');
  
  // State Kalkulator Sewa
  const [calcRoomId, setCalcRoomId] = useState<string>(kos.roomTypes[0].id);
  const [calcDuration, setCalcDuration] = useState<'1' | '3' | '6' | '12'>('3');

  const calcRoom = kos.roomTypes.find((r) => r.id === calcRoomId) || kos.roomTypes[0];

  // Hitung harga kalkulator
  const calculateTotal = () => {
    switch (calcDuration) {
      case '1':
        return {
          total: calcRoom.priceMonthly,
          monthly: calcRoom.priceMonthly,
          discount: 0,
          label: '1 Bulan'
        };
      case '3':
        return {
          total: calcRoom.priceQuarterly,
          monthly: Math.round(calcRoom.priceQuarterly / 3),
          discount: calcRoom.priceMonthly * 3 - calcRoom.priceQuarterly,
          label: '3 Bulan (Paket Kuartal)'
        };
      case '6':
        return {
          total: calcRoom.priceSemester,
          monthly: Math.round(calcRoom.priceSemester / 6),
          discount: calcRoom.priceMonthly * 6 - calcRoom.priceSemester,
          label: '6 Bulan (1 Semester Kuliah PU)'
        };
      case '12':
        return {
          total: calcRoom.priceYearly,
          monthly: Math.round(calcRoom.priceYearly / 12),
          discount: calcRoom.priceMonthly * 12 - calcRoom.priceYearly,
          label: '12 Bulan (1 Tahun Penuh)'
        };
    }
  };

  const calcResult = calculateTotal();

  const filteredGallery = activeGalleryTab === 'semua' 
    ? kos.gallery 
    : kos.gallery.filter(item => item.category === activeGalleryTab);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="kos-abs" className="py-16 sm:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3ED] text-[#476A50] text-xs font-bold mb-3 border border-[#CDE3D2]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6B9577]" />
            <span>Mitra Terpilih Kos Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#5E4339] tracking-tight">
            Eksplor <span className="text-[#E0707D]">{kos.name}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#7E6359] leading-relaxed">
            {kos.tagline}. Cek foto kamar riil, rincian fasilitas lengkap, serta daftar harga transparan di bawah ini.
          </p>

          {/* Quick Distance Badges to Campus */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#EBDAC8] text-xs font-semibold text-[#5E4339] shadow-xs">
              <Navigation className="w-3.5 h-3.5 text-[#E0707D]" />
              {kos.distanceToCampus.distanceKm} ke Kampus PU
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#EBDAC8] text-xs font-semibold text-[#5E4339] shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#F6B84A]" />
              {kos.distanceToCampus.motorbike}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#EBDAC8] text-xs font-semibold text-[#5E4339] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#6B9577]" />
              {kos.area}
            </span>
          </div>
        </div>

        {/* Promo Banner if available */}
        {kos.promoInfo && (
          <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FCECEE] via-[#FEF4E0] to-[#FCECEE] border-2 border-[#F8C8CE] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E0707D] text-white flex items-center justify-center shrink-0">
                <BadgePercent className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#E0707D] bg-white px-2 py-0.5 rounded-md">
                    {kos.promoInfo.badge}
                  </span>
                  <span className="text-xs text-[#7E6359] font-medium hidden sm:inline">
                    {kos.promoInfo.expiryDate}
                  </span>
                </div>
                <p className="text-sm font-bold text-[#5E4339] mt-0.5">
                  {kos.promoInfo.discountText}
                </p>
              </div>
            </div>
            <a
              href="#booking"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#E0707D] hover:bg-[#C95362] transition-colors shrink-0 shadow-xs"
            >
              <span>Klaim Promo Ini</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Photo Gallery Grid with Category Filter */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#5E4339]">
                Galeri Foto & Lingkungan {kos.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#7E6359]">
                Foto asli kamar, fasilitas bersama, dan lingkungan kos yang siap huni
              </p>
            </div>

            {/* Gallery Category Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#FAF4EB] rounded-2xl border border-[#EBDAC8] self-start sm:self-auto">
              {(['semua', 'kamar', 'fasilitas', 'lingkungan'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveGalleryTab(tab)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                    activeGalleryTab === tab
                      ? 'bg-white text-[#5E4339] shadow-xs'
                      : 'text-[#7E6359] hover:text-[#5E4339]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-[#EBDAC8] bg-white shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF4EB]">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 bg-white border-t border-[#F1E4D6]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#5E4339] truncate">
                      {item.title}
                    </span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-[#FAF4EB] text-[#7E6359]">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TIPE KAMAR & HARGA */}
        <div id="tipe-kamar" className="pt-6 mb-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E0707D] bg-[#FCECEE] px-3 py-1 rounded-full border border-[#F8C8CE]">
              Pilihan Kamar Mahasiswa
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#5E4339] mt-2">
              Tipe Kamar, Fasilitas & Harga
            </h3>
            <p className="text-xs sm:text-sm text-[#7E6359] mt-2">
              Pilih tipe kamar yang paling sesuai dengan budget dan kenyamanan kamu. Semua kamar sudah siap langsung ditempati.
            </p>
          </div>

          {/* Cards Tipe Kamar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {kos.roomTypes.map((room) => {
              const isSelected = selectedRoomId === room.id;

              return (
                <div
                  key={room.id}
                  className={`rounded-3xl bg-white border-2 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#E0707D] shadow-lg ring-2 ring-[#E0707D]/20'
                      : 'border-[#EBDAC8] hover:border-[#D8BEA8] shadow-sm'
                  }`}
                >
                  {/* Card Header & Badge */}
                  <div>
                    {/* Top Image Preview Carousel */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF4EB]">
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Floating Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {room.badge && (
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E0707D] text-white shadow-sm">
                            {room.badge}
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#6B9577] text-white shadow-sm flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {room.availableRooms} Kamar Tersedia
                        </span>
                      </div>

                      {/* Bottom Title on Image */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-xl sm:text-2xl font-extrabold drop-shadow-sm">
                          {room.name}
                        </div>
                        <div className="text-xs text-white/90 font-medium">
                          Ukuran: {room.size} • Kasur: {room.bedType}
                        </div>
                      </div>
                    </div>

                    {/* Room Specs & Pricing */}
                    <div className="p-6">
                      
                      {/* Price Box */}
                      <div className="p-4 rounded-2xl bg-[#FAF4EB] border border-[#EBDAC8] mb-5 flex items-baseline justify-between">
                        <div>
                          <div className="text-xs text-[#7E6359] font-medium">Harga Sewa Bulanan</div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-[#5E4339]">
                            {formatRupiah(room.priceMonthly)}
                            <span className="text-xs font-medium text-[#7E6359]"> /bulan</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-semibold text-[#476A50] bg-[#EBF3ED] px-2 py-1 rounded-md">
                            Sudah Termasuk WiFi & Air
                          </span>
                          <div className="text-[11px] text-[#7E6359] mt-1">
                            Deposit: {formatRupiah(room.deposit)}
                          </div>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="text-xs sm:text-sm text-[#7E6359] mb-5 leading-relaxed">
                        {room.tagline}
                      </p>

                      {/* Key Features Quick Pills */}
                      <div className="mb-5">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#5E4339] mb-2.5">
                          Fitur Unggulan Kamar:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {room.keyFeatures.map((feat, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs font-semibold text-[#5E4339]"
                            >
                              <div className="w-4 h-4 rounded-full bg-[#EBF3ED] text-[#6B9577] flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Detail Fasilitas Kamar */}
                      <div className="pt-4 border-t border-[#F1E4D6]">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#5E4339] mb-2.5">
                          Semua Fasilitas di Dalam Kamar:
                        </div>
                        <ul className="space-y-1.5">
                          {room.roomFacilities.map((fac, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#7E6359]">
                              <span className="text-[#E0707D] font-bold">•</span>
                              <span>{fac}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => {
                        setSelectedRoomId(room.id);
                        onSelectRoomForBooking(room, '1 Bulan', room.priceMonthly);
                      }}
                      className={`w-full py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${
                        isSelected
                          ? 'bg-[#E0707D] hover:bg-[#C95362] text-white shadow-[#E0707D]/30'
                          : 'bg-[#5E4339] hover:bg-[#3F2B23] text-white'
                      }`}
                    >
                      <span>Booking Tipe {room.name.split('(')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* KALKULATOR SIMULASI SEWA & DISKON ANAK PU */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FAF4EB] via-white to-[#FAF4EB] border-2 border-[#EBDAC8] shadow-sm">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-[#FEF4E0] text-[#D98A1E]">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#5E4339]">
                  Simulasi Biaya Sewa Khusus Mahasiswa PU
                </h3>
                <p className="text-xs sm:text-sm text-[#7E6359]">
                  Pilih durasi sewa untuk melihat diskon paket semesteran atau tahunan
                </p>
              </div>
            </div>

            {/* Room Selector */}
            <div className="mt-6">
              <label className="block text-xs font-bold text-[#5E4339] mb-2 uppercase tracking-wider">
                Pilih Tipe Kamar:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kos.roomTypes.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setCalcRoomId(r.id)}
                    className={`p-3.5 rounded-2xl text-left border-2 transition-all ${
                      calcRoomId === r.id
                        ? 'border-[#E0707D] bg-[#FCECEE]/50 font-bold text-[#5E4339]'
                        : 'border-[#EBDAC8] bg-white text-[#7E6359] hover:border-[#D8BEA8]'
                    }`}
                  >
                    <div className="text-sm font-bold text-[#5E4339]">{r.name}</div>
                    <div className="text-xs text-[#7E6359] mt-0.5">
                      {formatRupiah(r.priceMonthly)} / bulan
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Selector */}
            <div className="mt-6">
              <label className="block text-xs font-bold text-[#5E4339] mb-2 uppercase tracking-wider">
                Pilih Durasi Sewa:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { key: '1', label: '1 Bulan', note: 'Standar' },
                  { key: '3', label: '3 Bulan', note: 'Hemat 150rb' },
                  { key: '6', label: '1 Semester', note: 'Rekomendasi PU' },
                  { key: '12', label: '1 Tahun', note: 'Hemat s.d 1.7jt' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setCalcDuration(item.key as any)}
                    className={`p-3 rounded-2xl text-center border-2 transition-all ${
                      calcDuration === item.key
                        ? 'border-[#E0707D] bg-[#E0707D] text-white shadow-xs'
                        : 'border-[#EBDAC8] bg-white text-[#5E4339] hover:border-[#D8BEA8]'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-extrabold">{item.label}</div>
                    <div
                      className={`text-[10px] mt-0.5 ${
                        calcDuration === item.key ? 'text-white/90' : 'text-[#6B9577] font-semibold'
                      }`}
                    >
                      {item.note}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Calculation Result Breakdown */}
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#EBDAC8] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F1E4D6]">
                <div>
                  <span className="text-xs text-[#7E6359] font-medium">Estimasi Total Biaya Sewa ({calcResult.label})</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#5E4339]">
                    {formatRupiah(calcResult.total)}
                  </div>
                  <div className="text-xs text-[#7E6359] mt-0.5">
                    Setara <span className="font-bold text-[#5E4339]">{formatRupiah(calcResult.monthly)}</span> per bulan
                  </div>
                </div>

                {calcResult.discount > 0 && (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#EBF3ED] text-[#476A50] text-xs font-bold border border-[#CDE3D2]">
                    <Sparkles className="w-4 h-4 text-[#6B9577]" />
                    <span>Hemat {formatRupiah(calcResult.discount)} untuk Mahasiswa PU!</span>
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#7E6359]">
                  💡 Sudah termasuk: Air, Iuran Sampah, WiFi Unlimited & Pemeliharaan Fasilitas.
                </div>
                <button
                  onClick={() => {
                    onSelectRoomForBooking(calcRoom, calcResult.label, calcResult.total);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#E0707D] hover:bg-[#C95362] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span>Pilih Paket Ini & Chat WA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* FASILITAS LENGKAP KOS ABS */}
        <div id="fasilitas" className="pt-6 mb-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E4339] bg-[#FEF4E0] px-3 py-1 rounded-full border border-[#F6DEB0]">
              Kelengkapan Tempat Tinggal
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#5E4339] mt-2">
              Fasilitas Lengkap di {kos.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#7E6359] mt-2">
              Didesain khusus untuk memenuhi kebutuhan belajar dan istirahat mahasiswa President University.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kos.facilities.map((group, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EBDAC8] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#F1E4D6]">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF4EB] text-[#E0707D] flex items-center justify-center font-bold">
                      {idx === 0 ? <Bed className="w-5 h-5" /> : idx === 1 ? <Coffee className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#5E4339]">
                      {group.category}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {group.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#E0707D] mt-1.5 shrink-0" />
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-[#5E4339]">
                            {item.name}
                          </div>
                          <p className="text-[11px] sm:text-xs text-[#7E6359] mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ATURAN & LINGKUNGAN KOS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF4EB] border border-[#EBDAC8]">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-lg sm:text-xl font-bold text-[#5E4339] text-center mb-2">
              Tata Tertib & Kenyamanan Bersama {kos.name}
            </h4>
            <p className="text-xs sm:text-sm text-[#7E6359] text-center mb-6">
              Lingkungan yang kondusif agar seluruh mahasiswa PU dapat beristirahat dan belajar dengan optimal
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {kos.rules.map((rule, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#EFE2D3] shadow-xs">
                  <div className="text-xs sm:text-sm font-bold text-[#5E4339] flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#6B9577] shrink-0" />
                    <span>{rule.title}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#7E6359] leading-relaxed">
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
