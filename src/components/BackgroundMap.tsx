import { motion, useScroll, useTransform } from 'motion/react';

export const BackgroundMap = () => {
  const { scrollY } = useScroll();
  // Move the background down at half the speed of the scroll (parallax)
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#FEF7E6] flex items-center justify-center pointer-events-none">
      {/* Subtle ambient glows for a premium fintech feel */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-200 rounded-full blur-[120px] opacity-60" 
      />
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-200 rounded-full blur-[120px] opacity-40" 
      />

      <motion.div
        style={{ y }}
        className="relative w-[1000px] h-[1200px] max-w-[200vw] max-h-[200vh] flex items-center justify-center origin-center scale-[1.5] -translate-y-[10%]"
      >
        {/* Africa SVG with 3D, Gloss, and Pulse Effects */}
        <svg 
          viewBox="0 0 400 500" 
          className="w-full h-full origin-center"
        >
          <defs>
            {/* 3D Embossed Stipple Pattern */}
            <pattern id="stipple" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#FFFFFF" opacity="0.8" /> {/* Highlight */}
              <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C0B2" /> {/* Shadow/Base */}
            </pattern>
            
            {/* Glossy Overlay Gradient */}
            <linearGradient id="gloss" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="70%" stopColor="#FEF7E6" stopOpacity="0.0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
            </linearGradient>

            {/* Premium Soft Drop Shadow */}
            <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="15" dy="25" stdDeviation="20" floodColor="#D7D3C8" floodOpacity="0.6" />
              <feDropShadow dx="-5" dy="-5" stdDeviation="15" floodColor="#FFFFFF" floodOpacity="0.9" />
            </filter>
          </defs>
          
          {/* Base map with shadow and embossed stipple */}
          <path
            d="M 100 180 C 140 120, 220 120, 260 140 C 280 150, 300 170, 340 200 C 360 215, 380 230, 360 250 C 340 270, 300 320, 280 380 C 270 410, 250 460, 220 460 C 200 460, 190 420, 180 380 C 170 340, 160 300, 120 300 C 80 300, 40 260, 60 220 C 70 200, 80 190, 100 180 Z"
            fill="url(#stipple)"
            filter="url(#mapShadow)"
          />

          {/* Dynamic Color Tint Overlay */}
          <path
            d="M 100 180 C 140 120, 220 120, 260 140 C 280 150, 300 170, 340 200 C 360 215, 380 230, 360 250 C 340 270, 300 320, 280 380 C 270 410, 250 460, 220 460 C 200 460, 190 420, 180 380 C 170 340, 160 300, 120 300 C 80 300, 40 260, 60 220 C 70 200, 80 190, 100 180 Z"
            style={{ fill: '#D7D3C8', mixBlendMode: 'color', opacity: 0.8 }}
          />
          
          {/* Gloss overlay for premium sheen */}
          <path
            d="M 100 180 C 140 120, 220 120, 260 140 C 280 150, 300 170, 340 200 C 360 215, 380 230, 360 250 C 340 270, 300 320, 280 380 C 270 410, 250 460, 220 460 C 200 460, 190 420, 180 380 C 170 340, 160 300, 120 300 C 80 300, 40 260, 60 220 C 70 200, 80 190, 100 180 Z"
            fill="url(#gloss)"
            style={{ mixBlendMode: 'overlay' }}
          />
          
          {/* Inner highlight stroke for 3D beveled edge */}
          <path
            d="M 100 180 C 140 120, 220 120, 260 140 C 280 150, 300 170, 340 200 C 360 215, 380 230, 360 250 C 340 270, 300 320, 280 380 C 270 410, 250 460, 220 460 C 200 460, 190 420, 180 380 C 170 340, 160 300, 120 300 C 80 300, 40 260, 60 220 C 70 200, 80 190, 100 180 Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeOpacity="0.9"
          />
          
          {/* Inner shadow stroke for depth */}
          <path
            d="M 100 180 C 140 120, 220 120, 260 140 C 280 150, 300 170, 340 200 C 360 215, 380 230, 360 250 C 340 270, 300 320, 280 380 C 270 410, 250 460, 220 460 C 200 460, 190 420, 180 380 C 170 340, 160 300, 120 300 C 80 300, 40 260, 60 220 C 70 200, 80 190, 100 180 Z"
            fill="none"
            style={{ stroke: '#D7D3C8' }}
            strokeWidth="1.5"
            strokeOpacity="0.6"
            transform="translate(2, 2)"
          />
        </svg>
      </motion.div>
    </div>
  );
};
