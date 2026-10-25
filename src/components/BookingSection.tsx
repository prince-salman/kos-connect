import React, { useState } from 'react';
import type { RoomType } from '../data/kosData';
import { platformConfig, getFeaturedKos } from '../data/kosData';
import confetti from 'canvas-confetti';
import {
  MessageCircle,
  PhoneCall,
  Calendar,
  User,
  GraduationCap,
  Send,
  Sparkles,
  Clock,
  Copy,
  Check
} from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface BookingSectionProps {
  selectedRoom: RoomType | null;
  selectedDuration: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedRoom,
  selectedDuration
}) => {
  const kos = getFeaturedKos();

  // Form states
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [majorBatch, setMajorBatch] = useState('President University');
  const [roomChoice, setRoomChoice] = useState(
    selectedRoom ? selectedRoom.name : kos.roomTypes[0].name
  );
  const [bookingType, setBookingType] = useState<'survei' | 'booking' | 'tanya'>('survei');
  const [moveInDate, setMoveInDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedRoom) {
      setRoomChoice(selectedRoom.name);
    }
  }, [selectedRoom]);

  // Generate polite, structured WhatsApp message
  const generateWaMessage = () => {
    const purposeText =
      bookingType === 'survei'
        ? 'Jadwalkan Survei Lokasi Kos'
        : bookingType === 'booking'
        ? 'Booking / Kunci Kamar Kos'
        : 'Tanya Ketersediaan Kamar';

    return `Halo Pengelola ${kos.name} & Tim Kos Connect! 👋

Saya mahasiswa President University yang berencana mencari hunian setelah move out dari Dormitory (Asrama):

• Nama: ${studentName || '[Nama Mahasiswa]'}
• Kontak WA: ${studentPhone || '[Nomor WA]'}
• Kampus / Batch: ${majorBatch || 'President University'}
• Pilihan Kamar: ${roomChoice}
• Durasi Rencana: ${selectedDuration || '1 Semester (6 Bulan)'}
• Keperluan: ${purposeText}
${moveInDate ? `• Rencana Tanggal Masuk: ${moveInDate}\n` : ''}${notes ? `• Catatan Tambahan: ${notes}\n` : ''}
Saya mendapatkan info ini melalui platform resmi Kos Connect. Mohon informasi ketersediaan kamar dan jadwal surveinya ya kak. Terima kasih banyak! 🙏`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger cute confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#E0707D', '#F6B84A', '#6B9577', '#5E4339']
      });
    } catch (err) {
      console.log('Confetti triggered', err);
    }

    const message = generateWaMessage();
    const waUrl = `https://wa.me/${kos.contactPerson.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank');
  };

  const handleCopyMessage = () => {
    const message = generateWaMessage();
    navigator.clipboard.writeText(message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-transparent relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCECEE] text-[#E0707D] text-xs font-bold mb-3 border border-[#F8C8CE]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Booking & Kontak Langsung</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#5E4339] tracking-tight">
            Booking & Hubungi <span className="text-[#E0707D]">{kos.name}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#7E6359] leading-relaxed">
            Terhubung langsung ke WhatsApp Pengelola {kos.name}. Bebas biaya perantara atau calo, aman & 100% transparan untuk mahasiswa President University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Assistant */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#EBDAC8] shadow-md">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F1E4D6]">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#5E4339]">
                  Formulir Pemesanan & Survei Kamar
                </h3>
                <p className="text-xs text-[#7E6359]">
                  Isi data singkat untuk membuat pesan WhatsApp otomatis yang rapi
                </p>
              </div>
              <span className="w-10 h-10 rounded-2xl bg-[#EBF3ED] text-[#6B9577] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </span>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              
              {/* Jenis Keperluan */}
              <div>
                <label className="block text-xs font-bold text-[#5E4339] mb-2 uppercase tracking-wider">
                  Tujuan Menghubungi:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'survei', label: 'Jadwal Survei', note: 'Lihat lokasi dulu' },
                    { id: 'booking', label: 'Booking Kamar', note: 'Kunci slot langsung' },
                    { id: 'tanya', label: 'Tanya Info', note: 'Konsultasi santai' }
                  ].map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setBookingType(t.id as any)}
                      className={`p-2.5 sm:p-3 rounded-2xl text-center border-2 transition-all ${
                        bookingType === t.id
                          ? 'border-[#E0707D] bg-[#FCECEE] text-[#5E4339] font-bold shadow-xs'
                          : 'border-[#EBDAC8] bg-white text-[#7E6359] hover:border-[#D8BEA8]'
                      }`}
                    >
                      <div className="text-xs font-extrabold">{t.label}</div>
                      <div className="text-[10px] text-[#7E6359] mt-0.5 hidden sm:block">{t.note}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nama & Nomor WA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#5E4339] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#E0707D]" />
                    Nama Lengkap Mahasiswa:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#5E4339] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5E4339] mb-1.5 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#6B9577]" />
                    Nomor WhatsApp Kamu:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#5E4339] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                  />
                </div>
              </div>

              {/* Major / Batch di PU */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#5E4339] mb-1.5 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#F6B84A]" />
                    Jurusan & Batch di PU:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: IT Batch 2024 / Manajemen"
                    value={majorBatch}
                    onChange={(e) => setMajorBatch(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#5E4339] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5E4339] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E0707D]" />
                    Rencana Tanggal Masuk (Move In):
                  </label>
                  <input
                    type="date"
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#5E4339] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                  />
                </div>
              </div>

              {/* Pilihan Tipe Kamar */}
              <div>
                <label className="block text-xs font-bold text-[#5E4339] mb-1.5">
                  Pilihan Tipe Kamar di {kos.name}:
                </label>
                <select
                  value={roomChoice}
                  onChange={(e) => setRoomChoice(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#5E4339] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                >
                  {kos.roomTypes.map((r) => (
                    <option key={r.id} value={r.name}>
                      {r.name} - Rp {r.priceMonthly.toLocaleString('id-ID')}/bln (Sisa {r.availableRooms} Kamar)
                    </option>
                  ))}
                </select>
              </div>

              {/* Catatan Tambahan */}
              <div>
                <label className="block text-xs font-bold text-[#5E4339] mb-1.5">
                  Catatan / Pertanyaan Khusus (Opsional):
                </label>
                <textarea
                  rows={2}
                  placeholder="Misal: Apakah bisa survei hari Sabtu jam 2 siang? Bawa motor 1 unit."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#5E4339] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#E0707D] hover:bg-[#C95362] text-white text-sm sm:text-base font-extrabold flex items-center justify-center gap-2.5 shadow-md shadow-[#E0707D]/30 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim & Buka WhatsApp PIC {kos.name}</span>
                </button>
                <p className="text-[11px] text-[#7E6359] text-center mt-2">
                  🔒 Data kamu langsung dialihkan ke WhatsApp resmi tanpa pihak ketiga.
                </p>
              </div>

            </form>

          </div>

          {/* Right Column: Live WA Message Preview & Quick Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Message Preview Card */}
            <div className="bg-[#FAF4EB] p-5 sm:p-6 rounded-3xl border-2 border-[#EBDAC8] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#6B9577]" />
                  <span className="text-xs font-bold text-[#5E4339] uppercase tracking-wider">
                    Preview Format WhatsApp
                  </span>
                </div>
                <button
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E0707D] hover:underline"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'Tersalin!' : 'Salin Teks'}</span>
                </button>
              </div>

              {/* WhatsApp Chat Bubble Mockup */}
              <div className="bg-[#E7F3E9] p-4 rounded-2xl rounded-tr-none border border-[#CFE6D4] text-[#2F4F38] text-xs font-sans whitespace-pre-wrap leading-relaxed shadow-xs">
                {generateWaMessage()}
              </div>

              <div className="text-[11px] text-[#7E6359] mt-3 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-[#F6B84A]" />
                <span>Format pesan di atas otomatis siap dikirim begitu kamu klik tombol!</span>
              </div>
            </div>

            {/* Direct Instant Contact Box */}
            <div className="bg-white p-6 rounded-3xl border-2 border-[#EBDAC8] shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#E0707D] mb-1">
                Atau Hubungi Langsung:
              </div>
              <h4 className="text-lg font-bold text-[#5E4339] mb-3">
                Kontak Person {kos.name} (PIC Kerja Sama)
              </h4>

              <div className="space-y-3 mb-5 text-xs text-[#5E4339]">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF4EB]">
                  <span className="text-[#7E6359]">Nama PIC:</span>
                  <span className="font-bold">{kos.contactPerson.picName}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF4EB]">
                  <span className="text-[#7E6359]">WhatsApp:</span>
                  <span className="font-mono font-bold text-[#E0707D]">
                    {kos.contactPerson.displayPhone}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF4EB]">
                  <span className="text-[#7E6359]">Jam Pelayanan Survei:</span>
                  <span className="font-semibold">{kos.contactPerson.operatingHours}</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${kos.contactPerson.whatsappNumber}?text=${encodeURIComponent(
                    `Halo ${kos.contactPerson.picName}, saya mahasiswa President University mau tanya kamar di ${kos.name}...`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5E4339] hover:bg-[#3F2B23] text-white text-xs font-bold transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#F6B84A]" />
                  <span>Langsung Chat WA PIC {kos.name}</span>
                </a>

                <a
                  href={platformConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FCECEE] hover:bg-[#FAD9DC] text-[#E0707D] text-xs font-bold border border-[#F8C8CE] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Kunjungi Instagram: {platformConfig.instagram.handle}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
