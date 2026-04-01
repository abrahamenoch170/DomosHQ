import { motion } from 'motion/react';
import { ShieldCheck, Home, FileText, CheckCircle2 } from 'lucide-react';

export const HeroIllustration = () => {
  return (
    <div className="w-full max-w-lg mx-auto relative aspect-square flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Main Central Card: Verified Property */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-20 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50 w-64 flex flex-col gap-4"
      >
        <div className="w-full h-32 bg-blue-50 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50"></div>
          <Home className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-300 w-12 h-12" />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <CheckCircle2 size={12} className="text-emerald-500" />
            <span className="text-[10px] font-bold text-gray-700">Verified</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-gray-200 rounded-full"></div>
          <div className="h-3 w-1/2 bg-gray-100 rounded-full"></div>
        </div>
        <div className="flex justify-between items-center mt-2 pt-4 border-t border-gray-100">
          <div className="h-5 w-1/3 bg-blue-100 rounded-full"></div>
          <div className="h-6 w-1/4 bg-blue-600 rounded-full"></div>
        </div>
      </motion.div>

      {/* Floating Card 1: Secure Payment */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 20 }}
        animate={{ opacity: 1, x: -40, y: -40 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
        className="absolute z-30 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
        style={{ top: '20%', left: '10%' }}
      >
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
          <ShieldCheck size={20} />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-800">Payment Secured</div>
          <div className="text-[10px] text-gray-500">Held in escrow</div>
        </div>
      </motion.div>

      {/* Floating Card 2: Digital Lease */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 20 }}
        animate={{ opacity: 1, x: 40, y: 40 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
        className="absolute z-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
        style={{ bottom: '20%', right: '5%' }}
      >
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
          <FileText size={20} />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-800">Smart Lease</div>
          <div className="text-[10px] text-gray-500">Signed & Active</div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[120%] h-[120%] border-[1px] border-dashed border-blue-200 rounded-full -z-20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[90%] h-[90%] border-[1px] border-dashed border-indigo-200 rounded-full -z-20"
      />
    </div>
  );
};
