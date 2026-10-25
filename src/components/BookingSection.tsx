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
        ? 'Jadwal Survei Lokasi Kos'
        : bookingType === 'booking'
        ? 'Booking Kamar Kos'
        : 'Tanya Ketersediaan Kamar';

    return `Halo Pengelola ${kos.name} & Tim Kos Connect! 👋

Saya mahasiswa President University yang mau mencari hunian setelah move out dari asrama (dormy):

• Nama: ${studentName || '[Nama Mahasiswa]'}
• Kontak WA: ${studentPhone || '[Nomor WA]'}
• Kampus / Batch: ${majorBatch || 'President University'}
• Pilihan Kamar: ${roomChoice}
• Durasi: ${selectedDuration || '1 Semester (6 Bulan)'}
• Keperluan: ${purposeText}
${moveInDate ? `• Rencana Masuk: ${moveInDate}\n` : ''}${notes ? `• Catatan: ${notes}\n` : ''}
Saya mendapatkan info ini via platform Kos Connect. Mohon info ketersediaan kamar dan jadwal surveinya ya kak. Terima kasih! 🙏`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#E0707D', '#F6B84A', '#568763', '#5E4339']
      });
    } catch (err) {
      console.log('Confetti triggered', err);
    }

    const message = generateWaMessage();
    const waUrl = `https://wa.me/${kos.contactPerson.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const handleCopyMessage = () => {
    const message = generateWaMessage();
    navigator.clipboard.writeText(message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="booking" className="py-14 sm:py-20 bg-transparent relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCECEE] text-[#E0707D] text-xs font-bold mb-3 border border-[#F8C8CE]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Booking & Kontak WhatsApp</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#423028] tracking-tight">
            Booking & Hubungi <span className="text-[#E0707D]">{kos.name}</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#755C51] leading-relaxed">
            Langsung terhubung ke WhatsApp PIC {kos.name}. Bebas calo dan biaya admin, aman untuk anak President University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Form Assistant */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#EBDAC8] shadow-xs">
            
            <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#F1E4D6]">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#423028]">
                  Formulir Pemesanan & Survei
                </h3>
                <p className="text-xs text-[#755C51]">
                  Pesan otomatis terformat rapi untuk dikirim ke WhatsApp PIC
                </p>
              </div>
              <span className="w-9 h-9 rounded-xl bg-[#EAF2EC] text-[#568763] flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4" />
              </span>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              
              {/* Jenis Keperluan */}
              <div>
                <label className="block text-xs font-bold text-[#423028] mb-1.5 uppercase tracking-wider">
                  Tujuan Menghubungi:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'survei', label: 'Jadwal Survei', note: 'Lihat lokasi fisik' },
                    { id: 'booking', label: 'Booking Kamar', note: 'Kunci slot langsung' },
                    { id: 'tanya', label: 'Tanya Info', note: 'Konsultasi ketersediaan' }
                  ].map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setBookingType(t.id as any)}
                      className={`p-2.5 rounded-xl text-center border transition-all ${
                        bookingType === t.id
                          ? 'border-[#E0707D] bg-[#FCECEE] text-[#423028] font-bold shadow-xs'
                          : 'border-[#EBDAC8] bg-white text-[#755C51] hover:border-[#D8BEA8]'
                      }`}
                    >
                      <div className="text-xs font-bold">{t.label}</div>
                      <div className="text-[10px] text-[#755C51] mt-0.5">{t.note}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nama & Nomor WA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#423028] mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#E0707D]" />
                    Nama Mahasiswa:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#423028] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#423028] mb-1 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#568763]" />
                    Nomor WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#423028] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                  />
                </div>
              </div>

              {/* Major & Move In Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#423028] mb-1 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#F6B84A]" />
                    Jurusan & Batch di PU:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: IT Batch 2024"
                    value={majorBatch}
                    onChange={(e) => setMajorBatch(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#423028] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#423028] mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E0707D]" />
                    Rencana Tanggal Masuk:
                  </label>
                  <input
                    type="date"
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#423028] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                  />
                </div>
              </div>

              {/* Pilihan Tipe Kamar */}
              <div>
                <label className="block text-xs font-bold text-[#423028] mb-1">
                  Pilihan Tipe Kamar di {kos.name}:
                </label>
                <select
                  value={roomChoice}
                  onChange={(e) => setRoomChoice(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#423028] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
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
                <label className="block text-xs font-bold text-[#423028] mb-1">
                  Catatan Tambahan (Opsional):
                </label>
                <textarea
                  rows={2}
                  placeholder="Misal: Apakah bisa survei hari Sabtu jam 2 siang?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#EBDAC8] bg-[#FFFDF9] text-xs sm:text-sm text-[#423028] focus:outline-none focus:ring-2 focus:ring-[#E0707D]/30 focus:border-[#E0707D]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#E0707D] hover:bg-[#CF5D6B] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-[#E0707D]/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim & Buka WhatsApp PIC {kos.name}</span>
                </button>
              </div>

            </form>

          </div>

          {/* Right Column: Live WA Message Preview & Quick Contacts */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Live Message Preview Card */}
            <div className="bg-[#FAF3E8] p-4 sm:p-5 rounded-2xl border border-[#EBDAC8] shadow-2xs">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#568763]" />
                  <span className="text-[11px] font-bold text-[#423028] uppercase tracking-wider">
                    Preview Format WhatsApp
                  </span>
                </div>
                <button
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E0707D] hover:underline"
                >
                  {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{isCopied ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>

              {/* WhatsApp Chat Bubble Mockup */}
              <div className="bg-[#E7F3E9] p-3.5 rounded-xl rounded-tr-none border border-[#CFE6D4] text-[#2F4F38] text-xs font-sans whitespace-pre-wrap leading-relaxed">
                {generateWaMessage()}
              </div>

              <div className="text-[11px] text-[#755C51] mt-2.5 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-[#F6B84A] shrink-0" />
                <span>Pesan langsung terkirim begitu tombol diklik.</span>
              </div>
            </div>

            {/* Direct Instant Contact Box */}
            <div className="bg-white p-5 rounded-2xl border border-[#EBDAC8] shadow-xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#E0707D] mb-1">
                Kontak Langsung PIC:
              </div>
              <h4 className="text-base font-bold text-[#423028] mb-3">
                {kos.name} (Mitra Kerja Sama Kos Connect)
              </h4>

              <div className="space-y-2 mb-4 text-xs text-[#423028]">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF3E8]">
                  <span className="text-[#755C51]">PIC Kos:</span>
                  <span className="font-bold">{kos.contactPerson.picName}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF3E8]">
                  <span className="text-[#755C51]">WhatsApp:</span>
                  <span className="font-mono font-bold text-[#E0707D]">
                    {kos.contactPerson.displayPhone}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF3E8]">
                  <span className="text-[#755C51]">Jam Survei:</span>
                  <span className="font-medium">{kos.contactPerson.operatingHours}</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-col gap-2">
                <a
                  href={`https://wa.me/${kos.contactPerson.whatsappNumber}?text=${encodeURIComponent(
                    `Halo ${kos.contactPerson.picName}, saya mahasiswa President University mau tanya kamar di ${kos.name}...`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#5E4339] hover:bg-[#423028] text-white text-xs font-bold transition-colors text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#F6B84A]" />
                  <span>Chat WA PIC {kos.name}</span>
                </a>

                <a
                  href={platformConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-[#FCECEE] hover:bg-[#FAD9DC] text-[#E0707D] text-xs font-bold border border-[#F8C8CE] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram: {platformConfig.instagram.handle}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
