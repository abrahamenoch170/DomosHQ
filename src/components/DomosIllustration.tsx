import React from 'react';
import { motion } from 'motion/react';

export const DomosIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Simple Guilloche path generator inside the component for clean vector assets
  const generateSpirographD = (cx: number, cy: number, R: number, r: number, p: number, scale: number = 1, steps: number = 180) => {
    let path = "";
    for (let i = 0; i <= steps; i++) {
      const theta = (i * 2 * Math.PI) / steps;
      const x = (R - r) * Math.cos(theta) + p * Math.cos(((R - r) / r) * theta);
      const y = (R - r) * Math.sin(theta) - p * Math.sin(((R - r) / r) * theta);
      
      const sx = x * scale + cx;
      const sy = y * scale + cy;
      
      if (i === 0) {
        path += `M ${sx} ${sy}`;
      } else {
        path += ` L ${sx} ${sy}`;
      }
    }
    return path;
  };

  return (
    <div className={`relative w-full aspect-[4/3] max-w-[800px] mx-auto flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        <defs>
          {/* Brand color gradients for a beautiful high-fidelity aesthetic */}
          <linearGradient id="shieldGrad" x1="600" y1="150" x2="600" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F57E2A" />
            <stop offset="50%" stopColor="#FFA45B" />
            <stop offset="100%" stopColor="#DE6310" />
          </linearGradient>
          <linearGradient id="shieldInnerGrad" x1="600" y1="180" x2="600" y2="580" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFCEB4" />
            <stop offset="100%" stopColor="#FFEADF" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="35" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="15" stdDeviation="20" floodColor="#F57E2A" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* --- Background Guilloche Medallions --- */}
        <g opacity="0.2" stroke="#F57E2A">
          <path d={generateSpirographD(250, 220, 100, 60, 45, 1.2)} strokeWidth="0.8" strokeDasharray="2 3" />
          <path d={generateSpirographD(250, 220, 120, 80, 50, 1.2)} strokeWidth="0.5" strokeDasharray="10 4" />
          <circle cx="250" cy="220" r="145" strokeWidth="0.5" strokeDasharray="5 5" />

          <path d={generateSpirographD(950, 200, 90, 45, 40, 1.1)} strokeWidth="0.8" strokeDasharray="2 3" />
          <path d={generateSpirographD(950, 200, 110, 55, 60, 1.1)} strokeWidth="0.5" strokeDasharray="10 4" />
          <circle cx="950" cy="200" r="120" strokeWidth="0.5" strokeDasharray="4 4" />
        </g>

        {/* Background Africa Map Outline as a Guilloche outline */}
        <path 
          d="M 800 150 C 900 100, 1000 150, 1050 200 C 1100 250, 1120 300, 1100 350 C 1050 450, 1000 550, 950 650 C 900 750, 850 800, 800 750 C 750 700, 700 600, 650 550 C 600 450, 550 350, 600 250 C 650 150, 700 100, 800 150 Z" 
          stroke="#F57E2A" strokeWidth="1.5" strokeDasharray="8 6" fill="none" opacity="0.25"
        />
        <path 
          d="M 800 150 C 900 100, 1000 150, 1050 200 C 1100 250, 1120 300, 1100 350 C 1050 450, 1000 550, 950 650 C 900 750, 850 800, 800 750 C 750 700, 700 600, 650 550 C 600 450, 550 350, 600 250 C 650 150, 700 100, 800 150 Z" 
          stroke="#F57E2A" strokeWidth="0.8" strokeDasharray="2 3" fill="none" opacity="0.2"
          transform="translate(8, 8)"
        />

        {/* Dotted lines intersecting the map */}
        <g stroke="#F57E2A" strokeWidth="0.8" opacity="0.3">
          <line x1="600" y1="100" x2="600" y2="700" strokeDasharray="15 5" />
          <line x1="400" y1="400" x2="800" y2="400" strokeDasharray="15 5" />
        </g>

        {/* Madagascar as Guilloche */}
        <path d="M 1050 500 C 1070 480, 1090 520, 1070 580 C 1050 620, 1030 600, 1050 500 Z" stroke="#F57E2A" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.3" />

        {/* Floating crosshairs */}
        <path d="M 180 300 L 200 300 M 190 290 L 190 310" stroke="#F57E2A" strokeWidth="2" opacity="0.4" />
        <path d="M 850 400 L 870 400 M 860 390 L 860 410" stroke="#F57E2A" strokeWidth="2" opacity="0.4" />
        <circle cx="350" cy="450" r="6" fill="#F57E2A" opacity="0.4" />
        <circle cx="800" cy="450" r="6" fill="#F57E2A" opacity="0.4" />

        {/* Glowing Shield rebranded to #F57E2A */}
        <g filter="url(#glow)">
          <path d="M 600 150 L 850 220 L 850 450 C 850 600, 700 680, 600 720 C 500 680, 350 600, 350 450 L 350 220 Z" fill="url(#shieldGrad)" opacity="0.95" />
          <path d="M 600 180 L 820 240 L 820 440 C 820 570, 690 640, 600 680 C 510 640, 380 570, 380 440 L 380 240 Z" fill="url(#shieldInnerGrad)" />
          
          {/* Concentric Guilloche dotted loops inside Shield Background for security appearance */}
          <path d={generateSpirographD(600, 420, 70, 35, 30, 0.9, 120)} stroke="#F57E2A" strokeWidth="0.8" opacity="0.35" strokeDasharray="3 3" />
          <path d={generateSpirographD(600, 420, 50, 25, 20, 0.9, 120)} stroke="#F57E2A" strokeWidth="0.8" opacity="0.25" strokeDasharray="8 4" />

          {/* Fortress/Castle inside shield but stylized in deep brand color */}
          <path d="M 450 500 L 450 350 L 490 350 L 490 400 L 530 400 L 530 320 L 600 280 L 670 320 L 670 400 L 710 400 L 710 350 L 750 350 L 750 500 Z" fill="#DE6310" opacity="0.9" stroke="#F57E2A" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M 570 500 L 570 420 C 570 390, 630 390, 630 420 L 630 500 Z" fill="#FFF0EA" opacity="0.9" />
        </g>

        {/* Curved Ground built as overlapping Guilloche waves */}
        <path d="M 100 800 Q 600 680 1100 800" stroke="#F57E2A" strokeWidth="1.5" strokeDasharray="6 3" fill="none" />
        <path d="M 100 790 Q 600 670 1100 790" stroke="#F57E2A" strokeWidth="1" strokeDasharray="2 3" fill="none" />
        <path d="M 100 800 Q 600 680 1100 800 L 1100 900 L 100 900 Z" fill="#FFF9F6" opacity="0.6" />

        {/* Plants & Trees (Background layer with rebranded warm orange/brown colors) */}
        <path d="M 300 750 C 250 650, 350 600, 400 700 Z" fill="#FF8E3C" stroke="#DE6310" strokeWidth="2.5" />
        <path d="M 350 760 C 300 680, 400 580, 450 720 Z" fill="#FFA45B" stroke="#DE6310" strokeWidth="2.5" />
        <path d="M 900 750 C 950 650, 850 600, 800 700 Z" fill="#FF8E3C" stroke="#DE6310" strokeWidth="2.5" />
        <path d="M 850 760 C 900 680, 800 580, 750 720 Z" fill="#FFA45B" stroke="#DE6310" strokeWidth="2.5" />
        
        {/* Palm Tree Right */}
        <path d="M 850 720 Q 870 600 920 520" stroke="#8B4513" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M 920 520 Q 850 520 830 570" stroke="#DE6310" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />
        <path d="M 920 520 Q 950 470 1000 500" stroke="#DE6310" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />
        <path d="M 920 520 Q 980 550 970 600" stroke="#DE6310" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />
        <path d="M 920 520 Q 890 460 850 470" stroke="#DE6310" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />

        {/* Modern House rebranded block architecture */}
        <g filter="url(#softShadow)">
          {/* Left Block */}
          <rect x="420" y="550" width="150" height="180" fill="#FFA45B" stroke="#DE6310" strokeWidth="3" />
          <rect x="460" y="620" width="80" height="70" fill="#FFF9F6" stroke="#DE6310" strokeWidth="3" />
          <line x1="500" y1="620" x2="500" y2="690" stroke="#DE6310" strokeWidth="3" />
          
          {/* Center Main Block */}
          <rect x="520" y="460" width="180" height="270" fill="#FFF0EA" stroke="#DE6310" strokeWidth="3" />
          <rect x="550" y="490" width="120" height="80" fill="#FFCEB4" stroke="#DE6310" strokeWidth="3" />
          <line x1="610" y1="490" x2="610" y2="570" stroke="#DE6310" strokeWidth="3" />
          <rect x="550" y="600" width="120" height="80" fill="#FFCEB4" stroke="#DE6310" strokeWidth="3" />
          <line x1="610" y1="600" x2="610" y2="680" stroke="#DE6310" strokeWidth="3" />
          
          {/* Right Block */}
          <rect x="700" y="520" width="150" height="210" fill="#FFF9F6" stroke="#DE6310" strokeWidth="3" />
          <rect x="730" y="620" width="90" height="70" fill="#FFF0EA" stroke="#DE6310" strokeWidth="3" />
          <line x1="775" y1="620" x2="775" y2="690" stroke="#DE6310" strokeWidth="3" />
          <rect x="730" y="550" width="90" height="40" fill="#FFF0EA" stroke="#DE6310" strokeWidth="3" />
          
          {/* Roofs */}
          <rect x="400" y="530" width="190" height="20" fill="#DE6310" />
          <rect x="500" y="440" width="220" height="20" fill="#DE6310" />
          <rect x="680" y="500" width="190" height="20" fill="#DE6310" />

          {/* Door */}
          <rect x="620" y="630" width="60" height="100" fill="#FF8E3C" stroke="#DE6310" strokeWidth="3" />
          <rect x="630" y="640" width="40" height="30" fill="#F57E2A" />
          <rect x="630" y="680" width="40" height="30" fill="#F57E2A" />
          <circle cx="670" cy="685" r="4" fill="#FFFFFF" />

          {/* Planters */}
          <rect x="460" y="710" width="80" height="30" fill="#DE6310" stroke="#F57E2A" strokeWidth="2.5" />
          <path d="M 470 710 C 470 680, 500 680, 500 710" fill="#FF8E3C" />
          <path d="M 500 710 C 500 680, 530 680, 530 710" fill="#FF8E3C" />
          
          <rect x="730" y="710" width="90" height="30" fill="#DE6310" stroke="#F57E2A" strokeWidth="2.5" />
          <path d="M 740 710 C 740 680, 770 680, 770 710" fill="#FF8E3C" />
          <path d="M 770 710 C 770 680, 800 680, 800 710" fill="#FF8E3C" />
        </g>

        {/* Foreground Plants */}
        <path d="M 200 800 C 300 750, 400 820, 450 760 C 470 800, 300 850, 200 800 Z" fill="#DE6310" stroke="#F57E2A" strokeWidth="3.5" opacity="0.85" />
        <path d="M 1000 800 C 900 750, 800 820, 750 760 C 730 800, 900 850, 1000 800 Z" fill="#DE6310" stroke="#F57E2A" strokeWidth="3.5" opacity="0.85" />
      </svg>
    </div>
  );
};
