import { motion, useScroll, useTransform } from 'motion/react';

export const BackgroundMap = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  // Generate multi-layered wavy linear Guilloche bands
  const generateGuillocheBand = (waveCount: number, amplitude: number, frequency: number, phaseShift: number, gap: number, width: number, yOffset: number) => {
    const paths = [];
    for (let i = 0; i < waveCount; i++) {
      const currentPhase = i * phaseShift;
      const currentYOffset = yOffset + (i * gap);
      
      let path = `M 0 ${currentYOffset + amplitude * Math.sin(currentPhase)}`;
      for (let x = 5; x <= width; x += 5) {
        const yVal = currentYOffset + amplitude * Math.sin((x * frequency) + currentPhase);
        path += ` L ${x} ${yVal}`;
      }
      paths.push(path);
    }
    return paths;
  };

  // Generate circular mathematical Guilloche rosette (spirograph)
  const generateSpiroPath = (R: number, r: number, p: number, cX: number, cY: number, scale: number = 1, steps: number = 360) => {
    let path = "";
    for (let i = 0; i <= steps; i++) {
      const theta = (i * Math.PI) / 180;
      const x = (R - r) * Math.cos(theta) + p * Math.cos(((R - r) / r) * theta);
      const yStr = (R - r) * Math.sin(theta) - p * Math.sin(((R - r) / r) * theta);
      
      const sx = x * scale + cX;
      const sy = yStr * scale + cY;
      
      if (i === 0) {
        path += `M ${sx} ${sy}`;
      } else {
        path += ` L ${sx} ${sy}`;
      }
    }
    return path;
  };

  const bgWidth = 1400;
  const bgHeight = 800;

  // We define dynamic premium Guilloche wavy ribbons
  const ribbon1 = generateGuillocheBand(12, 25, 0.008, 0.25, 4, bgWidth, 150);
  const ribbon2 = generateGuillocheBand(10, 30, 0.012, 0.35, 5, bgWidth, 450);

  // Africa shape contour paths
  const africaPathD = "M 480 180 C 530 110, 635 110, 680 135 C 705 145, 740 170, 780 200 C 805 215, 830 230, 810 255 C 785 285, 740 335, 715 400 C 700 435, 680 495, 645 495 C 620 495, 610 450, 600 410 C 590 365, 575 320, 525 320 C 480 320, 435 275, 455 230 C 465 210, 460 195, 480 180 Z";

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#FFF9F6] flex items-center justify-center pointer-events-none">
      {/* Subtle organic brand color ambient glows */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[65%] h-[65%] bg-[#F57E2A]/8 rounded-full blur-[140px] opacity-70 animate-pulse" 
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute bottom-[-15%] right-[-10%] w-[65%] h-[65%] bg-[#FF8E3C]/6 rounded-full blur-[140px] opacity-60 animate-pulse" 
        style={{ animationDuration: '12s' }}
      />

      <motion.div
        style={{ y }}
        className="relative w-[1400px] h-[800px] max-w-[200vw] max-h-[200vh] flex items-center justify-center origin-center scale-[1.3] -translate-y-[5%]"
      >
        <svg 
          viewBox={`0 0 ${bgWidth} ${bgHeight}`}
          className="w-full h-full opacity-60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Guilloche Mask of Africa */}
            <mask id="africaGuillocheMask">
              <rect width={bgWidth} height={bgHeight} fill="#000000" />
              <path 
                d={africaPathD}
                fill="#FFFFFF" 
                transform="translate(180, 50) scale(1.1)"
              />
            </mask>

            {/* Linear Glow Gradients */}
            <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F57E2A" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FFCCB4" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#F57E2A" stopOpacity="0.6" />
            </linearGradient>

            <filter id="premiumShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="8" dy="16" stdDeviation="12" floodColor="#F57E2A" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* 1. Global Background Linear Wavy Guilloche Bands (Subdued) */}
          <g opacity="0.1" stroke="#F57E2A">
            {ribbon1.map((path, idx) => (
              <path 
                key={`bg-ribbon1-${idx}`} 
                d={path} 
                fill="none" 
                strokeWidth="0.8" 
                strokeDasharray={idx % 2 === 0 ? "3 3" : "10 5"} 
              />
            ))}
            {ribbon2.map((path, idx) => (
              <path 
                key={`bg-ribbon2-${idx}`} 
                d={path} 
                fill="none" 
                strokeWidth="0.8" 
                strokeDasharray={idx % 3 === 0 ? "5 5" : "none"} 
              />
            ))}
          </g>

          {/* 2. Rotating Spirograph Guilloche Medallions (Decorations/Assets) */}
          <g opacity="0.12">
            {/* Medallion Left */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ originX: '200px', originY: '400px' }}
            >
              <path d={generateSpiroPath(120, 80, 60, 200, 400, 1.2)} fill="none" stroke="#F57E2A" strokeWidth="1" />
              <path d={generateSpiroPath(150, 75, 45, 200, 400, 1.2)} fill="none" stroke="#F57E2A" strokeWidth="0.8" strokeDasharray="3 4" />
              <path d={generateSpiroPath(100, 50, 75, 200, 400, 1.2)} fill="none" stroke="#F57E2A" strokeWidth="1.2" strokeDasharray="12 4" />
            </motion.g>

            {/* Medallion Right */}
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ originX: '1200px', originY: '300px' }}
            >
              <path d={generateSpiroPath(140, 70, 50, 1200, 300, 1.1)} fill="none" stroke="#F57E2A" strokeWidth="1.1" />
              <path d={generateSpiroPath(110, 55, 65, 1200, 300, 1.1)} fill="none" stroke="#F57E2A" strokeWidth="0.8" strokeDasharray="2 3" />
              <path d={generateSpiroPath(160, 80, 40, 1200, 300, 1.1)} fill="none" stroke="#F57E2A" strokeWidth="1" strokeDasharray="8 6" />
            </motion.g>
          </g>

          {/* 3. Concentric Guilloche Weave Masked to the Africa Boundary */}
          <g mask="url(#africaGuillocheMask)" filter="url(#premiumShadow)">
            {/* The base Africa shape gradient fill */}
            <path 
              d={africaPathD}
              fill="url(#orangeGlow)"
              transform="translate(180, 50) scale(1.1)"
              opacity="0.15"
            />
            {/* Dense, high-precision Guilloche curves weave specifically inside Africa */}
            <g stroke="#F57E2A" opacity="0.75">
              {/* Vertical sinusoidal wave lines inside Africa */}
              {Array.from({ length: 45 }).map((_, idx) => {
                const xPos = 400 + (idx * 11);
                const amplitude = 12 + Math.sin(idx * 0.2) * 8;
                let wavePath = `M ${xPos} 0`;
                for (let yVal = 0; yVal <= 800; yVal += 10) {
                  const xVal = xPos + amplitude * Math.sin((yVal * 0.02) + (idx * 0.4));
                  wavePath += ` L ${xVal} ${yVal}`;
                }
                return (
                  <path 
                    key={`africa-wave-v-${idx}`} 
                    d={wavePath} 
                    fill="none" 
                    strokeWidth="0.9" 
                    strokeDasharray={idx % 4 === 0 ? "8 4" : (idx % 2 === 0 ? "2 3" : "none")} 
                  />
                );
              })}

              {/* Horizontal waves crossing Africa to complete the Guilloche guillotine-cut mesh */}
              {Array.from({ length: 30 }).map((_, idx) => {
                const yPos = 100 + (idx * 20);
                const amplitude = 15;
                let wavePath = `M 400 ${yPos}`;
                for (let xVal = 400; xVal <= 1100; xVal += 10) {
                  const yVal = yPos + amplitude * Math.cos((xVal * 0.015) - (idx * 0.5));
                  wavePath += ` L ${xVal} ${yVal}`;
                }
                return (
                  <path 
                    key={`africa-wave-h-${idx}`} 
                    d={wavePath} 
                    fill="none" 
                    strokeWidth="0.6" 
                    opacity="0.4"
                    strokeDasharray={idx % 3 === 0 ? "6 3" : "none"} 
                  />
                );
              })}
            </g>
          </g>

          {/* 4. Elegant Double Dotted Contour of the Africa Outline */}
          <g stroke="#F57E2A" fill="none">
            <path 
              d={africaPathD}
              strokeWidth="2.5"
              strokeDasharray="12 4"
              opacity="0.6"
              transform="translate(180, 50) scale(1.1)"
            />
            <path 
              d={africaPathD}
              strokeWidth="1.2"
              strokeDasharray="2 4"
              opacity="0.7"
              transform="translate(180, 50) scale(1.1) translate(4, 4)"
            />
            <path 
              d={africaPathD}
              strokeWidth="0.8"
              opacity="0.3"
              transform="translate(180, 50) scale(1.1) translate(-3, -3)"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};
