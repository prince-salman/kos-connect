import React from 'react';

export const BackgroundDoodles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      
      {/* 1. Subtle Paper Dot Matrix Grid (Japanese stationery vibe) */}
      <div className="absolute inset-0 bg-stationery-dots opacity-45" />

      {/* 2. Soft Ambient Radial Light Spots */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#F6B84A]/12 blur-3xl" />
      <div className="absolute top-10 right-0 w-[480px] h-[480px] rounded-full bg-[#E0707D]/10 blur-3xl" />
      <div className="absolute top-[800px] left-1/4 w-[600px] h-[600px] rounded-full bg-[#F6B84A]/8 blur-3xl" />
      <div className="absolute top-[1600px] right-10 w-[500px] h-[500px] rounded-full bg-[#E0707D]/8 blur-3xl" />

      {/* 3. Cute Illustrated Sun (matches user's banner top-right) */}
      <div className="absolute top-20 right-8 sm:right-24 w-20 h-20 sm:w-28 sm:h-28 opacity-85 animate-float-gentle hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#F6B84A]">
          {/* Sun Rays */}
          <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.8">
            <line x1="50" y1="10" x2="50" y2="2" />
            <line x1="50" y1="90" x2="50" y2="98" />
            <line x1="10" y1="50" x2="2" y2="50" />
            <line x1="90" y1="50" x2="98" y2="50" />
            <line x1="22" y1="22" x2="16" y2="16" />
            <line x1="78" y1="78" x2="84" y2="84" />
            <line x1="22" y1="78" x2="16" y2="84" />
            <line x1="78" y1="22" x2="84" y2="16" />
          </g>
          {/* Sun Body */}
          <circle cx="50" cy="50" r="28" fill="#FCE1A8" stroke="#F6B84A" strokeWidth="3" />
          {/* Smiling Face */}
          <circle cx="42" cy="46" r="3" fill="#5E4339" />
          <circle cx="58" cy="46" r="3" fill="#5E4339" />
          {/* Cheeks */}
          <ellipse cx="37" cy="52" rx="3.5" ry="2" fill="#E0707D" opacity="0.6" />
          <ellipse cx="63" cy="52" rx="3.5" ry="2" fill="#E0707D" opacity="0.6" />
          {/* Smile */}
          <path d="M44 54 Q50 60 56 54" fill="none" stroke="#5E4339" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 4. Cute Floating Cloud 1 (Top Left) */}
      <div className="absolute top-28 left-6 sm:left-16 w-24 sm:w-36 opacity-75 animate-cloud-drift hidden sm:block">
        <svg viewBox="0 0 120 70" fill="none" className="w-full h-auto">
          <path
            d="M25 55H95C106 55 115 46 115 35C115 24 106 15 95 15C93 15 91 15.5 89 16C84 6 73 0 60 0C46 0 35 8 31 20C29 19 27 19 25 19C11 19 0 30 0 44C0 50 5 55 25 55Z"
            fill="#FFFFFF"
            stroke="#EBD5C2"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* 5. Cute Floating Cloud 2 (Top Center-Right) */}
      <div className="absolute top-44 right-1/4 w-20 sm:w-28 opacity-60 animate-float-reverse hidden lg:block">
        <svg viewBox="0 0 120 70" fill="none" className="w-full h-auto">
          <path
            d="M25 55H95C106 55 115 46 115 35C115 24 106 15 95 15C93 15 91 15.5 89 16C84 6 73 0 60 0C46 0 35 8 31 20C29 19 27 19 25 19C11 19 0 30 0 44C0 50 5 55 25 55Z"
            fill="#FFFFFF"
            stroke="#EBD5C2"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* 6. Hand-drawn Sparkles & Floating Hearts */}
      {/* Sparkle 1 */}
      <div className="absolute top-40 left-1/3 text-[#F6B84A] opacity-70 animate-float-gentle text-lg">
        ✦
      </div>
      {/* Sparkle 2 */}
      <div className="absolute top-96 right-16 text-[#E0707D] opacity-70 animate-float-reverse text-base">
        ✧
      </div>
      {/* Small Heart 1 */}
      <div className="absolute top-72 left-10 text-[#E0707D] opacity-60 animate-float-gentle text-sm">
        ♥
      </div>
      {/* Small Heart 2 */}
      <div className="absolute top-[650px] right-1/3 text-[#F6B84A] opacity-70 animate-float-reverse text-xs">
        ★
      </div>
      {/* Sparkle 3 */}
      <div className="absolute top-[1200px] left-12 text-[#F6B84A] opacity-60 text-lg">
        ✦
      </div>
      {/* Small Heart 3 */}
      <div className="absolute top-[1500px] right-20 text-[#E0707D] opacity-65 text-sm">
        ♥
      </div>

    </div>
  );
};

// Organic Wavy Section Divider (matches the soft pink wave at bottom of the banner)
export const SectionWaveDivider: React.FC<{ flip?: boolean; color?: string }> = ({
  flip = false,
  color = "#FAF3E8"
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="w-full h-8 sm:h-14 block"
        viewBox="0 0 1440 90"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C320,85 480,10 720,48 C960,86 1120,20 1440,55 L1440,90 L0,90 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
