import React, { useState, useEffect } from 'react';
import { platformConfig, getFeaturedKos } from '../data/kosData';
import { MessageCircle, Menu, X, Home, Bed, Sparkles, PhoneCall } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const featuredKos = getFeaturedKos();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda', icon: Home },
    { name: 'Tentang', href: '#tentang', icon: Sparkles },
    { name: 'Kos ABS (Mitra)', href: '#kos-abs', icon: Bed },
    { name: 'Tipe Kamar & Harga', href: '#tipe-kamar' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Booking WA', href: '#booking', isSpecial: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-sm border-b border-[#F4E8DB] py-2.5'
          : 'bg-[#FFFDF9] border-b border-[#F5ECE0] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/assets/kos-connect-logo.jpg"
                alt="Kos Connect Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl object-cover shadow-sm border border-[#EBDAC8] group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 bg-[#6B9577] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-[#FFFDF9]">
                PU
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#5E4339]">
                  kos<span className="text-[#E0707D]">connect</span>
                </span>
                <span className="text-[#F6B84A] text-lg">✨</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#7E6359] font-medium hidden sm:block">
                Platform Kos Mahasiswa President University
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                  link.isSpecial
                    ? 'bg-[#E0707D] text-white hover:bg-[#C95362] shadow-sm shadow-[#E0707D]/30 ml-2'
                    : 'text-[#5E4339] hover:text-[#E0707D] hover:bg-[#F9F4EB]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: IG & WA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Instagram Project */}
            <a
              href={platformConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#E0707D] bg-[#FCECEE] hover:bg-[#FAD9DC] transition-colors border border-[#F8C8CE]"
              title="Kunjungi Instagram Kos Connect"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{platformConfig.instagram.handle}</span>
            </a>

            {/* WA PIC Kos ABS */}
            <a
              href={`https://wa.me/${featuredKos.contactPerson.whatsappNumber}?text=${encodeURIComponent(
                'Halo Pengelola Kos ABS & Tim Kos Connect, saya mahasiswa President University mau tanya kamar kos...'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#5E4339] hover:bg-[#3F2B23] transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#F6B84A]" />
              <span>Kontak Kos ABS</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={platformConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[#E0707D] bg-[#FCECEE]"
              aria-label="Instagram Kos Connect"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#5E4339] bg-[#F9F4EB] hover:bg-[#EEDDCC] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FFFDF9] border-b border-[#F4E8DB] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  link.isSpecial
                    ? 'bg-[#E0707D] text-white shadow-sm'
                    : 'text-[#5E4339] hover:bg-[#F9F4EB]'
                }`}
              >
                <span>{link.name}</span>
                {link.icon && <link.icon className="w-4 h-4 opacity-70" />}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-[#F1E4D6] flex flex-col gap-2">
              <a
                href={platformConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-[#E0707D] bg-[#FCECEE]"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram: {platformConfig.instagram.handle}</span>
              </a>
              <a
                href={`https://wa.me/${featuredKos.contactPerson.whatsappNumber}?text=${encodeURIComponent(
                  'Halo Pengelola Kos ABS & Tim Kos Connect, saya mahasiswa President University mau tanya ketersediaan kamar...'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-[#5E4339]"
              >
                <PhoneCall className="w-4 h-4 text-[#F6B84A]" />
                <span>Chat PIC Kos ABS ({featuredKos.contactPerson.displayPhone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
