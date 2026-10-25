import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { KosShowcaseSection } from './components/KosShowcaseSection';
import { BookingSection } from './components/BookingSection';
import { FutureExpansionSection } from './components/FutureExpansionSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackgroundDoodles, SectionWaveDivider } from './components/BackgroundDoodles';
import type { RoomType } from './data/kosData';
import { getFeaturedKos } from './data/kosData';

export function App() {
  const featuredKos = getFeaturedKos();
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(featuredKos.roomTypes[0]);
  const [selectedDuration, setSelectedDuration] = useState<string>('3 Bulan (Paket Kuartal)');

  const handleSelectRoomForBooking = (room: RoomType, durationName: string) => {
    setSelectedRoom(room);
    setSelectedDuration(durationName);
    
    // Smooth scroll to booking section
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFFDF9] text-[#423028] flex flex-col font-sans selection:bg-[#FCECEE] selection:text-[#E0707D]">
      
      {/* Texture, Dots & Atmosphere Background */}
      <BackgroundDoodles />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Halaman 1: Brand Kos Connect, Logo, Banner Resmi, Kontak Person Kos ABS & IG */}
        <HeroSection />

        {/* Wavy transition */}
        <SectionWaveDivider color="#FAF3E8" />

        {/* Tentang Kos Connect & Alasan Mahasiswa PU Move Out Dari Dormy */}
        <AboutSection />

        {/* Wavy transition */}
        <SectionWaveDivider flip color="#FAF3E8" />

        {/* Halaman 2: Foto Tipe Kamar, Fasilitas Lengkap + Harga Transparan Kos ABS & Kalkulator Biaya */}
        <KosShowcaseSection onSelectRoomForBooking={handleSelectRoomForBooking} />

        {/* Wavy transition */}
        <SectionWaveDivider color="#FAF3E8" />

        {/* Halaman Terakhir / Bawah: Link Direct Book Kos ke WhatsApp PIC Kos ABS */}
        <BookingSection
          selectedRoom={selectedRoom}
          selectedDuration={selectedDuration}
        />

        {/* Wavy transition */}
        <SectionWaveDivider flip color="#FAF3E8" />

        {/* Persiapan Penambahan Kos Baru (Target s.d Desember Kos ABS, Multi-kos selanjutnya) */}
        <FutureExpansionSection />

        {/* FAQ Mahasiswa President University */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
