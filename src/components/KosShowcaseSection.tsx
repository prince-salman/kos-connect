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
  const [selectedRoomId, setSelectedRoomId] = useState<string>(kos.roomTypes[0].id);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'semua' | 'kamar' | 'fasilitas' | 'lingkungan'>('semua');
  
  // Track active photo index per room card
  const [roomActivePhoto, setRoomActivePhoto] = useState<Record<string, number>>({
    'deluxe-ac': 0,
    'standard-ac': 0
  });

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
          label: '6 Bulan (1 Semester PU)'
        };
      case '12':
        return {
          total: calcRoom.priceYearly,
          monthly: Math.round(calcRoom.priceYearly / 12),
          discount: calcRoom.priceMonthly * 12 - calcRoom.priceYearly,
          label: '12 Bulan (1 Tahun)'
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
    <section id="tipe-kamar" className="py-14 sm:py-20 bg-transparent relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2EC] text-[#3D6B49] text-xs font-bold mb-3 border border-[#D1E4D6]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#568763]" />
            <span>Katalog Resmi & Harga Terverifikasi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#423028] tracking-tight">
            Pilihan Kamar & Fasilitas <span className="text-[#E0707D]">{kos.name}</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#755C51] leading-relaxed">
            Semua kamar sudah dilengkapi perabot lengkap siap huni. Tinggal bawa koper setelah pindah dari asrama.
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

        {/* CARDS TIPE KAMAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {kos.roomTypes.map((room) => {
            const isSelected = selectedRoomId === room.id;
            const currentImgIndex = roomActivePhoto[room.id] || 0;
            const isInsideBath = room.bathroomInside;

            return (
              <div
                key={room.id}
                className={`rounded-2xl sm:rounded-3xl bg-white border-2 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#E0707D] shadow-md ring-2 ring-[#E0707D]/20'
                    : 'border-[#EBDAC8] hover:border-[#D8BEA8] shadow-xs'
                }`}
              >
                <div>
                  {/* Photo Display with Interactive Thumbnail Switcher */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF4EB]">
                    <img
                      src={room.images[currentImgIndex]}
                      alt={room.name}
                      className="w-full h-full object-cover transition-all duration-300"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[90%] z-10">
                      {isInsideBath ? (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-[#E0707D] text-white shadow-xs flex items-center gap-1">
                          <Bath className="w-3 h-3" />
                          Kamar Mandi Dalam
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-[#5E4339] text-white shadow-xs">
                          Kamar Mandi Luar
                        </span>
                      )}

                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#568763] text-white shadow-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Sisa {room.availableRooms} Kamar
                      </span>
                    </div>

                    {/* Interactive Photo Switcher (Bottom Right of Image) */}
                    <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1 bg-black/60 backdrop-blur-xs p-1 rounded-lg">
                      {room.images.map((_, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setRoomActivePhoto(prev => ({ ...prev, [room.id]: imgIdx }));
                          }}
                          className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${
                            currentImgIndex === imgIdx
                              ? 'bg-white text-[#423028]'
                              : 'text-white/80 hover:text-white'
                          }`}
                        >
                          {imgIdx === 0 ? 'Kamar' : imgIdx === 1 && isInsideBath ? 'K. Mandi' : `Foto ${imgIdx + 1}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Room Info Body */}
                  <div className="p-5 sm:p-6">
                    
                    {/* Room Title & Specs */}
                    <div className="mb-3">
                      <div className="flex items-center gap-1.5 text-xs text-[#E0707D] font-bold uppercase tracking-wider mb-1">
                        {isInsideBath ? '🚿 Private En-Suite Bathroom' : '💡 Shared Bathroom Bersih'}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#423028] leading-snug">
                        {room.name}
                      </h3>
                      <div className="text-xs text-[#755C51] mt-1">
                        Ukuran: <strong className="text-[#423028]">{room.size}</strong> • Kasur: <strong className="text-[#423028]">{room.bedType}</strong>
                      </div>
                    </div>

                    {/* Price Box */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF3E8] border border-[#EBDAC8] mb-4 flex items-baseline justify-between">
                      <div>
                        <div className="text-[11px] text-[#755C51] font-medium">Harga Sewa Bulanan</div>
                        <div className="text-xl sm:text-2xl font-extrabold text-[#423028]">
                          {formatRupiah(room.priceMonthly)}
                          <span className="text-xs font-normal text-[#755C51]"> /bln</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] sm:text-[11px] font-bold text-[#3D6B49] bg-[#EAF2EC] px-2 py-0.5 rounded-md">
                          Inc. WiFi & Air
                        </span>
                        <div className="text-[10px] text-[#755C51] mt-1">
                          Deposit: {formatRupiah(room.deposit)}
                        </div>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs text-[#755C51] mb-4 leading-relaxed">
                      {room.tagline}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#423028] mb-2">
                        Fasilitas Kamar:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {room.keyFeatures.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs font-medium text-[#423028]"
                          >
                            <div className="w-3.5 h-3.5 rounded-full bg-[#EAF2EC] text-[#568763] flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Detail Fasilitas Tambahan */}
                    <div className="pt-3 border-t border-[#F1E4D6]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#755C51] mb-1.5">
                        Detail Lengkap:
                      </div>
                      <ul className="space-y-1">
                        {room.roomFacilities.slice(0, 4).map((fac, idx) => (
                          <li key={idx} className="text-xs text-[#755C51] flex items-start gap-1.5">
                            <span className="text-[#E0707D]">•</span>
                            <span>{fac}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Card Action Button (Fixed duplicate text bug) */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => {
                      setSelectedRoomId(room.id);
                      onSelectRoomForBooking(room, '1 Bulan', room.priceMonthly);
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs ${
                      isSelected
                        ? 'bg-[#E0707D] hover:bg-[#CF5D6B] text-white shadow-[#E0707D]/25'
                        : 'bg-[#5E4339] hover:bg-[#423028] text-white'
                    }`}
                  >
                    <span>Pilih & Booking Kamar Ini</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
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
                  Simulasi Biaya Sewa Mahasiswa PU
                </h3>
                <p className="text-xs text-[#755C51]">
                  Pilih durasi sewa untuk melihat diskon paket semesteran atau tahunan
                </p>
              </div>
            </div>

            {/* Room Selector */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-[#423028] mb-2 uppercase tracking-wider">
                1. Pilih Tipe Kamar:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {kos.roomTypes.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setCalcRoomId(r.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      calcRoomId === r.id
                        ? 'border-[#E0707D] bg-[#FCECEE]/50 font-bold text-[#423028]'
                        : 'border-[#EBDAC8] bg-white text-[#755C51] hover:border-[#D8BEA8]'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold text-[#423028]">{r.name}</div>
                    <div className="text-[11px] text-[#755C51] mt-0.5">
                      {formatRupiah(r.priceMonthly)} / bulan
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#423028] mb-2 uppercase tracking-wider">
                2. Pilih Durasi Sewa:
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
                    className={`p-2.5 rounded-xl text-center border transition-all ${
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
                    onSelectRoomForBooking(calcRoom, calcResult.label, calcResult.total);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#E0707D] hover:bg-[#CF5D6B] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span>Pilih Paket & Chat WA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#423028]">
                Galeri Foto & Fasilitas {kos.name}
              </h3>
              <p className="text-xs text-[#755C51]">
                Foto kamar tidur, fasilitas kamar mandi dalam, ruang komunal, dan lingkungan
              </p>
            </div>

            {/* Gallery Category Tabs */}
            <div className="flex items-center gap-1 p-1 bg-[#FAF3E8] rounded-xl border border-[#EBDAC8] self-start sm:self-auto overflow-x-auto max-w-full">
              {(['semua', 'kamar', 'fasilitas', 'lingkungan'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveGalleryTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all whitespace-nowrap ${
                    activeGalleryTab === tab
                      ? 'bg-white text-[#423028] shadow-xs'
                      : 'text-[#755C51] hover:text-[#423028]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
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
                <div className="p-3 bg-white border-t border-[#F1E4D6] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#423028] truncate pr-2">
                    {item.title}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-[#FAF4EB] text-[#755C51] shrink-0">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
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
