import { motion } from 'motion/react';
import { ShieldCheck, Home, FileText, CheckCircle2 } from 'lucide-react';

export const HeroIllustration = () => {
  // Generate spirograph coordinates for the circular decorative guilloche
  const generateSpiroSVG = (R: number, r: number, p: number, scale: number = 1, steps: number = 180) => {
    let path = "";
    for (let i = 0; i <= steps; i++) {
      const theta = (i * 2 * Math.PI) / steps;
      const x = (R - r) * Math.cos(theta) + p * Math.cos(((R - r) / r) * theta);
      const y = (R - r) * Math.sin(theta) - p * Math.sin(((R - r) / r) * theta);
      
      const sx = x * scale + 150;
      const sy = y * scale + 150;
      
      if (i === 0) {
        path += `M ${sx} ${sy}`;
      } else {
        path += ` L ${sx} ${sy}`;
      }
    }
    return path;
  };

  return (
    <div className="w-full max-w-lg mx-auto relative aspect-square flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 bg-[#FF6B35]/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Main Central Card: Verified Property with redesign */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-20 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-[0_20px_50px_rgba(255,107,53,0.15)] border border-white/60 w-64 flex flex-col gap-4"
      >
        <div className="w-full h-32 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF2EC] to-[#FFE6DC]"></div>
          
          {/* Subtle Guilloche mesh in the card background */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
            <path d="M-10,30 Q30,10 70,50 T150,30" fill="none" stroke="#FF6B35" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M-10,50 Q40,30 60,70 T150,50" fill="none" stroke="#FF6B35" strokeWidth="0.8" strokeDasharray="4 2" />
          </svg>

          <Home className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF6B35] w-12 h-12" />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-[#FF6B35]/10">
            <CheckCircle2 size={12} className="text-[#FF6B35]" />
            <span className="text-[10px] font-bold text-gray-700">Verified</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-gray-200 rounded-full"></div>
          <div className="h-3 w-1/2 bg-gray-100 rounded-full"></div>
        </div>
        <div className="flex justify-between items-center mt-2 pt-4 border-t border-gray-100">
          <div className="h-5 w-1/3 bg-[#FFEBE2] rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold text-[#FF6B35]">₦ Monthly</span>
          </div>
          <div className="h-7 w-16 bg-[#FF6B35] hover:bg-[#E0531E] rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-[0_4px_10px_rgba(255,107,53,0.3)]">
            <span className="text-[10px] font-bold text-white">Secure</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Secure Payment */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 20 }}
        animate={{ opacity: 1, x: -40, y: -45 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
        className="absolute z-30 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-[#FF6B35]/15 flex items-center gap-3"
        style={{ top: '22%', left: '8%' }}
      >
        <div className="w-10 h-10 rounded-full bg-[#FFEBE2] flex items-center justify-center text-[#FF6B35]">
          <ShieldCheck size={20} />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-800">Secure Escrow</div>
          <div className="text-[10px] text-gray-500">₦ Proof of rent</div>
        </div>
      </motion.div>

      {/* Floating Card 2: Digital Lease */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 20 }}
        animate={{ opacity: 1, x: 40, y: 45 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
        className="absolute z-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
        style={{ bottom: '22%', right: '3%' }}
      >
        <div className="w-10 h-10 rounded-full bg-[#FFF0EA] flex items-center justify-center text-[#FF6B35]/80">
          <FileText size={20} />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-800">Verified Landlord</div>
          <div className="text-[10px] text-gray-500">Verified & Secure</div>
        </div>
      </motion.div>

      {/* 3D Decorative Mathematical Guilloche Spirographs and Orbits */}
      <div className="absolute w-[120%] h-[120%] -z-20 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 300 300" className="w-full h-full opacity-35">
          {/* Animated Spirograph 1: Dotted Guilloche */}
          <motion.path
            d={generateSpiroSVG(80, 48, 40, 1.2)}
            fill="none"
            stroke="#FF6B35"
            strokeWidth="0.8"
            strokeDasharray="2 3"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ originX: '150px', originY: '150px' }}
          />

          {/* Animated Spirograph 2: Striped Guilloche */}
          <motion.path
            d={generateSpiroSVG(100, 50, 60, 1.1)}
            fill="none"
            stroke="#FF6B35"
            strokeWidth="1"
            strokeDasharray="8 4"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            style={{ originX: '150px', originY: '150px' }}
          />

          {/* Regular circular bands representing outer Guilloche limits */}
          <motion.circle
            cx="150"
            cy="150"
            r="135"
            fill="none"
            stroke="#FF6B35"
            strokeWidth="0.5"
            strokeDasharray="12 4"
            animate={{ rotate: 180 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="150"
            cy="150"
            r="125"
            fill="none"
            stroke="#FF6B35"
            strokeWidth="0.8"
            strokeDasharray="2 4"
            animate={{ rotate: -180 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </div>
  );
};
