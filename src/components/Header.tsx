import { motion } from 'motion/react';

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full bg-[#FEF7E6]/80 backdrop-blur-md border-b border-black/[0.06] px-6 py-4 flex items-center justify-between"
    >
      <div className="text-xl font-bold text-[#1E3A8A]">DomosHQ</div>
      <nav className="flex items-center gap-6" aria-label="Main navigation">
        <a href="#problem" className="text-sm font-medium text-[#1F2937] hover:text-[#2563EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded">Problem</a>
        <a href="#solution" className="text-sm font-medium text-[#1F2937] hover:text-[#2563EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded">Solution</a>
        <a href="#waitlist" className="bg-[#2563EB] text-white text-sm font-bold px-5 py-2 rounded-full hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB]">
          Join Waitlist
        </a>
      </nav>
    </motion.header>
  );
};
