import React from 'react';

export const DomosIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] max-w-[800px] mx-auto flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        {/* Defs for gradients and glows */}
        <defs>
          <linearGradient id="shieldGrad" x1="600" y1="150" x2="600" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4196F1" />
            <stop offset="50%" stopColor="#5CD7A9" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="shieldInnerGrad" x1="600" y1="180" x2="600" y2="580" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7CC1F7" />
            <stop offset="100%" stopColor="#8BE8C4" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="40" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="15" stdDeviation="20" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Background Africa Map Outline (Simplified) */}
        <path 
          d="M 800 150 C 900 100, 1000 150, 1050 200 C 1100 250, 1120 300, 1100 350 C 1050 450, 1000 550, 950 650 C 900 750, 850 800, 800 750 C 750 700, 700 600, 650 550 C 600 450, 550 350, 600 250 C 650 150, 700 100, 800 150 Z" 
          stroke="#CBD5E1" strokeWidth="3" fill="none" opacity="0.4"
        />
        {/* Madagascar roughly */}
        <path d="M 1050 500 C 1070 480, 1090 520, 1070 580 C 1050 620, 1030 600, 1050 500 Z" stroke="#CBD5E1" strokeWidth="3" fill="none" opacity="0.4" />

        {/* Floating elements */}
        <circle cx="250" cy="200" r="6" fill="#94A3B8" opacity="0.5" />
        <circle cx="950" cy="180" r="8" fill="#94A3B8" opacity="0.3" />
        <path d="M 180 300 L 200 300 M 190 290 L 190 310" stroke="#94A3B8" strokeWidth="3" opacity="0.5" />
        <path d="M 850 400 L 870 400 M 860 390 L 860 410" stroke="#94A3B8" strokeWidth="3" opacity="0.5" />
        <circle cx="350" cy="450" r="5" fill="#34D399" opacity="0.6" />
        <circle cx="800" cy="450" r="7" fill="#34D399" opacity="0.6" />

        {/* Glowing Shield */}
        <g filter="url(#glow)">
          <path d="M 600 150 L 850 220 L 850 450 C 850 600, 700 680, 600 720 C 500 680, 350 600, 350 450 L 350 220 Z" fill="url(#shieldGrad)" opacity="0.9" />
          <path d="M 600 180 L 820 240 L 820 440 C 820 570, 690 640, 600 680 C 510 640, 380 570, 380 440 L 380 240 Z" fill="url(#shieldInnerGrad)" />
          
          {/* Fortress/Castle inside shield */}
          <path d="M 450 500 L 450 350 L 490 350 L 490 400 L 530 400 L 530 320 L 600 280 L 670 320 L 670 400 L 710 400 L 710 350 L 750 350 L 750 500 Z" fill="#2563EB" opacity="0.8" stroke="#1E3A8A" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 570 500 L 570 420 C 570 390, 630 390, 630 420 L 630 500 Z" fill="#8BE8C4" opacity="0.9" />
        </g>

        {/* Curved Ground */}
        <path d="M 100 800 Q 600 680 1100 800" stroke="#1E293B" strokeWidth="3" fill="none" />
        <path d="M 100 800 Q 600 680 1100 800 L 1100 900 L 100 900 Z" fill="#F8FAFC" opacity="0.5" />

        {/* Plants & Trees (Background layer) */}
        <path d="M 300 750 C 250 650, 350 600, 400 700 Z" fill="#10B981" stroke="#065F46" strokeWidth="3" />
        <path d="M 350 760 C 300 680, 400 580, 450 720 Z" fill="#34D399" stroke="#065F46" strokeWidth="3" />
        <path d="M 900 750 C 950 650, 850 600, 800 700 Z" fill="#10B981" stroke="#065F46" strokeWidth="3" />
        <path d="M 850 760 C 900 680, 800 580, 750 720 Z" fill="#34D399" stroke="#065F46" strokeWidth="3" />
        
        {/* Palm Tree Right */}
        <path d="M 850 720 Q 870 600 920 520" stroke="#8B4513" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M 920 520 Q 850 520 830 570" stroke="#059669" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M 920 520 Q 950 470 1000 500" stroke="#059669" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M 920 520 Q 980 550 970 600" stroke="#059669" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M 920 520 Q 890 460 850 470" stroke="#059669" strokeWidth="10" fill="none" strokeLinecap="round" />

        {/* Modern House */}
        <g filter="url(#softShadow)">
          {/* Left Block */}
          <rect x="420" y="550" width="150" height="180" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="4" />
          <rect x="460" y="620" width="80" height="70" fill="#E0F2FE" stroke="#1E3A8A" strokeWidth="4" />
          <line x1="500" y1="620" x2="500" y2="690" stroke="#1E3A8A" strokeWidth="4" />
          
          {/* Center Main Block */}
          <rect x="520" y="460" width="180" height="270" fill="#FEF3C7" stroke="#1E3A8A" strokeWidth="4" />
          <rect x="550" y="490" width="120" height="80" fill="#E0F2FE" stroke="#1E3A8A" strokeWidth="4" />
          <line x1="610" y1="490" x2="610" y2="570" stroke="#1E3A8A" strokeWidth="4" />
          <rect x="550" y="600" width="120" height="80" fill="#E0F2FE" stroke="#1E3A8A" strokeWidth="4" />
          <line x1="610" y1="600" x2="610" y2="680" stroke="#1E3A8A" strokeWidth="4" />
          
          {/* Right Block */}
          <rect x="700" y="520" width="150" height="210" fill="#F8FAFC" stroke="#1E3A8A" strokeWidth="4" />
          <rect x="730" y="620" width="90" height="70" fill="#E0F2FE" stroke="#1E3A8A" strokeWidth="4" />
          <line x1="775" y1="620" x2="775" y2="690" stroke="#1E3A8A" strokeWidth="4" />
          <rect x="730" y="550" width="90" height="40" fill="#E0F2FE" stroke="#1E3A8A" strokeWidth="4" />
          
          {/* Roofs */}
          <rect x="400" y="530" width="190" height="20" fill="#1E3A8A" />
          <rect x="500" y="440" width="220" height="20" fill="#1E3A8A" />
          <rect x="680" y="500" width="190" height="20" fill="#1E3A8A" />

          {/* Door */}
          <rect x="620" y="630" width="60" height="100" fill="#B45309" stroke="#1E3A8A" strokeWidth="4" />
          <rect x="630" y="640" width="40" height="30" fill="#92400E" />
          <rect x="630" y="680" width="40" height="30" fill="#92400E" />
          <circle cx="670" cy="685" r="4" fill="#FCD34D" />

          {/* Planters */}
          <rect x="460" y="710" width="80" height="30" fill="#D97706" stroke="#1E3A8A" strokeWidth="4" />
          <path d="M 470 710 C 470 680, 500 680, 500 710" fill="#10B981" />
          <path d="M 500 710 C 500 680, 530 680, 530 710" fill="#10B981" />
          
          <rect x="730" y="710" width="90" height="30" fill="#D97706" stroke="#1E3A8A" strokeWidth="4" />
          <path d="M 740 710 C 740 680, 770 680, 770 710" fill="#10B981" />
          <path d="M 770 710 C 770 680, 800 680, 800 710" fill="#10B981" />
        </g>

        {/* Foreground Plants */}
        <path d="M 200 800 C 300 750, 400 820, 450 760 C 470 800, 300 850, 200 800 Z" fill="#059669" stroke="#064E3B" strokeWidth="4" />
        <path d="M 1000 800 C 900 750, 800 820, 750 760 C 730 800, 900 850, 1000 800 Z" fill="#059669" stroke="#064E3B" strokeWidth="4" />
      </svg>
    </div>
  );
};
