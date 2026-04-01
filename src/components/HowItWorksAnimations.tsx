import { motion } from 'motion/react';
import { Search, Home, ShieldCheck, Lock, CalendarDays, CreditCard, Server, Database, Zap, RefreshCw } from 'lucide-react';

export const SearchHouseAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[200px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-xl overflow-hidden border border-blue-100/50">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4"
      >
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <Home size={24} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-2 bg-gray-100 rounded-full"></div>
        </div>
      </motion.div>
      
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0, 1, 0],
          x: [-20, 20, -20],
          y: [20, -20, 20]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-20 text-blue-500 bg-white p-2 rounded-full shadow-md"
      >
        <Search size={20} />
      </motion.div>
    </div>
  );
};

export const ShieldLockAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[200px] flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-xl overflow-hidden border border-amber-100/50">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 bg-white p-5 rounded-2xl shadow-lg border border-amber-100 flex items-center justify-center"
      >
        <ShieldCheck size={48} className="text-amber-500" />
        
        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-2 -right-2 bg-green-500 text-white p-1.5 rounded-full shadow-sm"
        >
          <Lock size={14} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export const PaymentCalendarAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[200px] flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-xl overflow-hidden border border-emerald-100/50">
      <div className="relative z-10 flex items-center gap-4">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white p-4 rounded-xl shadow-md border border-emerald-100 flex flex-col items-center gap-2"
        >
          <CalendarDays size={28} className="text-emerald-600" />
          <div className="w-12 h-1.5 bg-emerald-100 rounded-full"></div>
        </motion.div>
        
        <motion.div
          animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-emerald-400"
        >
          &rarr;
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="bg-white p-4 rounded-xl shadow-md border border-emerald-100 flex flex-col items-center gap-2"
        >
          <CreditCard size={28} className="text-emerald-600" />
          <div className="w-12 h-1.5 bg-emerald-100 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export const InfrastructureAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-[#0B1121] rounded-3xl overflow-hidden border border-white/10 p-8 shadow-2xl">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-16 w-full max-w-3xl">
        
        {/* Central Platform */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.15)] border border-white/10 flex flex-col items-center gap-5 z-20 w-full max-w-[340px] group"
        >
          {/* Glowing ring */}
          <div className="absolute inset-0 rounded-3xl border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(37,99,235,0.2)]" />
          
          <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-2xl border border-white/20 border-dashed"
            />
            <ShieldCheck size={40} strokeWidth={1.5} />
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-white tracking-tight">MyDomos Trust Layer</div>
            <div className="text-[11px] text-blue-300/80 uppercase tracking-[0.25em] mt-2 font-medium">Single Source of Truth</div>
          </div>
        </motion.div>
        
        <div className="flex justify-between w-full relative px-2 sm:px-6">
          {/* Connecting Animated Lines */}
          <svg className="absolute top-[-70px] left-0 w-full h-[70px] -z-10" overflow="visible">
            {/* Left Line */}
            <motion.path 
              d="M 16% 70 C 16% 20, 50% 40, 50% 0" 
              fill="transparent" 
              stroke="url(#gradient-left)" 
              strokeWidth="2"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Center Line */}
            <motion.path 
              d="M 50% 70 L 50% 0" 
              fill="transparent" 
              stroke="url(#gradient-center)" 
              strokeWidth="2"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Right Line */}
            <motion.path 
              d="M 84% 70 C 84% 20, 50% 40, 50% 0" 
              fill="transparent" 
              stroke="url(#gradient-right)" 
              strokeWidth="2"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="gradient-left" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient-center" x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient-right" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#34D399" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Before */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            className="bg-white/5 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col items-center gap-4 w-[30%] relative overflow-hidden group hover:bg-white/10 transition-colors shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Search size={24} strokeWidth={2} />
            </div>
            <div className="text-center relative z-10">
              <div className="text-base font-bold text-white">Before</div>
              <div className="text-[10px] sm:text-xs text-indigo-200/70 font-medium mt-1 uppercase tracking-wider">Search & Apply</div>
            </div>
          </motion.div>
          
          {/* During */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="bg-white/5 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col items-center gap-4 w-[30%] relative overflow-hidden group hover:bg-white/10 transition-colors shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <Lock size={24} strokeWidth={2} />
            </div>
            <div className="text-center relative z-10">
              <div className="text-base font-bold text-white">During</div>
              <div className="text-[10px] sm:text-xs text-amber-200/70 font-medium mt-1 uppercase tracking-wider">Rent & Manage</div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="bg-white/5 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col items-center gap-4 w-[30%] relative overflow-hidden group hover:bg-white/10 transition-colors shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <RefreshCw size={24} strokeWidth={2} />
            </div>
            <div className="text-center relative z-10">
              <div className="text-base font-bold text-white">After</div>
              <div className="text-[10px] sm:text-xs text-emerald-200/70 font-medium mt-1 uppercase tracking-wider">Renew & Move</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
