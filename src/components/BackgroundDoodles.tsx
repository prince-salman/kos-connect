import React from 'react';

export const BackgroundDoodles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      
      {/* 1. Subtle Paper Dot Grid (Stationery pattern, responsive & uniform) */}
      <div className="absolute inset-0 bg-stationery-dots opacity-35" />

      {/* 2. Soft Ambient Radial Light Spots (Placed far in corners so they never interfere with text) */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#F6B84A]/10 blur-[100px]" />
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-[#E0707D]/8 blur-[120px]" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] rounded-full bg-[#F6B84A]/6 blur-[120px]" />

      {/* 3. Subtle Corner Accents (Visible only on very wide desktop screens >1280px to prevent mobile/tablet collision) */}
      <div className="hidden xl:block absolute top-28 right-12 w-24 h-24 opacity-70 animate-float-gentle">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#F6B84A]">
          <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7">
            <line x1="50" y1="12" x2="50" y2="4" />
            <line x1="50" y1="88" x2="50" y2="96" />
            <line x1="12" y1="50" x2="4" y2="50" />
            <line x1="88" y1="50" x2="96" y2="50" />
            <line x1="23" y1="23" x2="18" y2="18" />
            <line x1="77" y1="77" x2="82" y2="82" />
            <line x1="23" y1="77" x2="18" y2="82" />
            <line x1="77" y1="23" x2="82" y2="18" />
          </g>
          <circle cx="50" cy="50" r="26" fill="#FCE1A8" stroke="#F6B84A" strokeWidth="2.5" />
          <circle cx="43" cy="46" r="2.5" fill="#5E4339" />
          <circle cx="57" cy="46" r="2.5" fill="#5E4339" />
          <ellipse cx="38" cy="52" rx="3" ry="1.5" fill="#E0707D" opacity="0.6" />
          <ellipse cx="62" cy="52" rx="3" ry="1.5" fill="#E0707D" opacity="0.6" />
          <path d="M45 53 Q50 58 55 53" fill="none" stroke="#5E4339" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="hidden xl:block absolute top-36 left-10 w-28 opacity-60 animate-cloud-drift">
        <svg viewBox="0 0 120 70" fill="none" className="w-full h-auto">
          <path
            d="M25 55H95C106 55 115 46 115 35C115 24 106 15 95 15C93 15 91 15.5 89 16C84 6 73 0 60 0C46 0 35 8 31 20C29 19 27 19 25 19C11 19 0 30 0 44C0 50 5 55 25 55Z"
            fill="#FFFFFF"
            stroke="#E8D2BF"
            strokeWidth="1.5"
          />
        </svg>
      </div>

    </div>
  );
};
