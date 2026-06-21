import { motion } from 'motion/react';

// Generates mathematical concentric curves for backgrounds to preserve the Guilloche identity
const sSpiro = (cx: number, cy: number, R: number, r: number, p: number, scale: number = 0.5, steps: number = 120) => {
  let path = "";
  for (let i = 0; i <= steps; i++) {
    const theta = (i * 2 * Math.PI) / steps;
    const x = (R - r) * Math.cos(theta) + p * Math.cos(((R - r) / r) * theta);
    const y = (R - r) * Math.sin(theta) - p * Math.sin(((R - r) / r) * theta);
    const sx = x * scale + cx;
    const sy = y * scale + cy;
    if (i === 0) path += `M ${sx} ${sy}`;
    else path += ` L ${sx} ${sy}`;
  }
  return path;
};

export const SearchHouseAnimation = () => {
  // Cowrywise-style: Rounded friendly geometry, sitting on a solid geometric platform with subtle depth
  return (
    <div className="relative w-full h-full min-h-[220px] flex items-center justify-center bg-[#FFF9F6] rounded-2xl overflow-hidden border border-[#F57E2A]/10">
      
      {/* Background Guilloche Base */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 200 200">
        <path d={sSpiro(100, 100, 70, 35, 25, 0.9)} fill="none" stroke="#F57E2A" strokeWidth="0.6" strokeDasharray="3 3"/>
        <circle cx="100" cy="100" r="85" fill="none" stroke="#F57E2A" strokeWidth="0.5" strokeDasharray="6 3"/>
      </svg>

      <div className="relative flex flex-col items-center">
        {/* Solid Geometric Base Platform */}
        <div className="absolute bottom-[-16px] w-48 h-4 bg-gradient-to-r from-[#FFCEB4] to-[#F57E2A]/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-[-8px] w-40 h-3 bg-white border border-[#F57E2A]/20 rounded-full shadow-sm z-0"></div>

        {/* Dynamic Vector Illustration: Soft Rounded Villa */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-32 h-32 bg-white rounded-3xl border border-[#F57E2A]/15 shadow-md flex flex-col justify-end p-3 overflow-hidden"
        >
          {/* Internal gradient representation */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#FFF2EC] to-transparent" />
          
          {/* Rounded Roof Contour */}
          <div className="absolute top-4 left-6 right-6 h-6 bg-[#F57E2A] rounded-t-xl opacity-90 border-b border-[#DE6310]"></div>
          
          {/* Windows (Rounded geometry) */}
          <div className="grid grid-cols-2 gap-3 mb-5 px-3 z-10">
            <div className="aspect-square bg-[#FDF0E7] rounded-lg border border-[#F57E2A]/20"></div>
            <div className="aspect-square bg-[#FDF0E7] rounded-lg border border-[#F57E2A]/20"></div>
          </div>
          
          {/* Rounded Friendly Main Door */}
          <div className="w-8 h-10 bg-[#DE6310] rounded-t-lg mx-auto z-10 flex items-center justify-center shadow-inner">
            <div className="w-1.5 h-1.5 bg-white rounded-full ml-3"></div>
          </div>
        </motion.div>

        {/* The Precise Scanning Laser Frame - Restricted Speed (Cubic Bezier Easing) */}
        <motion.div
          animate={{ y: [-48, 48, -48] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: [0.25, 1, 0.5, 1] // Custom cubic bezier
          }}
          className="absolute left-[-20px] right-[-20px] pointer-events-none z-20 flex flex-col items-center"
        >
          {/* Scanning alignment wire */}
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#F57E2A] to-transparent shadow-[0_0_8px_#F57E2A]" />
          {/* Scanning concentric wave disk projecting depth */}
          <div className="w-24 h-6 bg-[#F57E2A]/5 rounded-full border border-[#F57E2A]/40 opacity-70 blur-[0.5px]" />
        </motion.div>
      </div>
    </div>
  );
};

export const ShieldLockAnimation = () => {
  // Built on geometric platform, highly stable shape representing custody
  return (
    <div className="relative w-full h-full min-h-[220px] flex items-center justify-center bg-[#FFF9F6] rounded-2xl overflow-hidden border border-[#F57E2A]/10">
      
      {/* Background Guilloche Wave Line */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 200 200">
        <path d="M 0 100 Q 50 60 100 100 T 200 100" fill="none" stroke="#F57E2A" strokeWidth="0.8" strokeDasharray="4 2"/>
        <path d="M 0 110 Q 50 70 100 110 T 200 110" fill="none" stroke="#F57E2A" strokeWidth="0.5" strokeDasharray="2 3"/>
      </svg>

      <div className="relative flex flex-col items-center">
        {/* Foundation circle */}
        <div className="absolute bottom-[-10px] w-36 h-3 bg-[#FFCEB4]/30 rounded-full blur-[2px]"></div>

        {/* Central Protective Shield Graphic with Rounded Corners */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-28 h-32 bg-white rounded-b-[40px] rounded-t-2xl border-2 border-[#F57E2A] shadow-lg flex items-center justify-center overflow-hidden"
        >
          {/* Background lining inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF2EC] to-white" />
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 120">
            <circle cx="50" cy="60" r="35" fill="none" stroke="#F57E2A" strokeWidth="0.5" strokeDasharray="3 2" />
          </svg>

          {/* Locked/Secured State - Rotating Lock core shackle */}
          <div className="relative z-10 flex flex-col items-center">
            <svg width="44" height="54" viewBox="0 0 44 54" fill="none" className="overflow-visible">
              {/* Shackle: Animates opening/locking action smoothly */}
              <motion.path
                d="M 12 24 L 12 18 C 12 11, 32 11, 32 18 L 32 24"
                fill="none"
                stroke="#F57E2A"
                strokeWidth="4"
                strokeLinecap="round"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
              {/* Base body */}
              <rect x="6" y="22" width="32" height="24" rx="6" fill="#DE6310" stroke="#F57E2A" strokeWidth="2" />
              {/* Keyhole */}
              <circle cx="22" cy="31" r="3" fill="white" />
              <path d="M 22 34 L 22 41" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        {/* Orbit loop behind shield */}
        <div className="absolute inset-0 w-36 h-36 border border-dashed border-[#F57E2A]/25 rounded-full z-0 translate-y-[-12px] opacity-60"></div>
      </div>
    </div>
  );
};

export const PaymentCalendarAnimation = () => {
  // Representing systematic monthly installment payment flow
  return (
    <div className="relative w-full h-full min-h-[220px] flex items-center justify-center bg-[#FFF9F6] rounded-2xl overflow-hidden border border-[#F57E2A]/10">
      
      {/* Background Guilloche Spiral Matrix */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 200 200">
        <path d={sSpiro(100, 100, 60, 45, 15, 1.1)} fill="none" stroke="#F57E2A" strokeWidth="0.5" strokeDasharray="1 3" />
      </svg>

      <div className="relative w-full max-w-[280px] h-[140px] flex items-center justify-between px-4 z-10">
        {/* Solid Base Underneath Both Assets */}
        <div className="absolute bottom-1 left-2 right-2 h-2 bg-[#F57E2A]/10 rounded-full blur-[1px]"></div>

        {/* 1. Monthly Calendar Card */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="w-20 h-24 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#F57E2A] h-5 w-full flex items-center justify-center">
            <span className="text-[8px] font-bold text-white tracking-widest uppercase">MONTH</span>
          </div>
          {/* Simple Rounded Calendar Grid Blocks */}
          <div className="p-2 grid grid-cols-3 gap-1.5 flex-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div 
                key={i} 
                className={`rounded-[3px] aspect-square border-[0.5px] ${i === 4 ? 'bg-[#FDF0E7] border-[#F57E2A]' : 'bg-gray-50 border-gray-100'}`}
              ></div>
            ))}
          </div>
        </motion.div>

        {/* Continuous Flow Channel line */}
        <div className="absolute left-[84px] right-[84px] top-[50%] h-[1.5px] bg-dashed border-t-[1.5px] border-dashed border-[#F57E2A]/40 z-0"></div>

        {/* Moving coin representing periodic financial transfer along a secure line */}
        <motion.div
          animate={{ x: [0, 80, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1] // Controlled speed curve
          }}
          className="absolute left-[90px] top-[41%] w-6 h-6 rounded-full bg-[#DE6310] border border-white flex items-center justify-center shadow-md z-20 text-[10px] font-bold text-white font-mono"
        >
          ₦
        </motion.div>

        {/* 2. Secure Ledger Card / Escrow Lock Plate */}
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="w-20 h-24 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between p-2 relative"
        >
          {/* Micro chip */}
          <div className="w-5 h-4 bg-[#FDF0E7] rounded-md border border-[#F57E2A]/30"></div>
          
          <div className="space-y-1">
            <div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
            <div className="h-1 w-3/4 bg-gray-50 rounded-full"></div>
          </div>

          {/* Mini dynamic safe status mark */}
          <div className="h-4 w-full bg-[#F57E2A] rounded-md flex items-center justify-center">
            <span className="text-[7px] font-bold text-white font-mono uppercase tracking-wide">SECURE</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const InfrastructureAnimation = () => {
  return null; // Not needed on main page but kept as clean stub to prevent typing issues
};
