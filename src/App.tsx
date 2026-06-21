import { useRef } from 'react';
import { useScroll, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { UserX, ShieldAlert, FileX, User, Building, Network, Twitter, Linkedin, Facebook, Instagram, ReceiptText, BadgeCheck, Database } from 'lucide-react';
import { BackgroundMap } from './components/BackgroundMap';
import { HeroIllustration } from './components/HeroIllustration';
import { Logo } from './components/Logo';
import { WaitlistSection } from './components/WaitlistSection';
import { FAQSection } from './components/FAQSection';
import { Header } from './components/Header';

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Animation variants for a staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
  };

  return (
    // Changed to #FFF9F6 as requested for rebranding
    <main ref={containerRef} className="w-full bg-[#FFF9F6] relative min-h-[400vh] font-sans text-[#1F2937] selection:bg-[#F57E2A] selection:text-white">
      <Header />
      {/* Container for your content, illustrations, and text */}
      <div className="relative z-10 pointer-events-none w-full h-full">
        
        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 pointer-events-auto overflow-hidden">
          {/* The background map is now static and confined to the Hero section */}
          <BackgroundMap />
          
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Text Content (60% on desktop) */}
            <motion.div 
              className="w-full lg:w-[60%] text-center lg:text-left flex flex-col items-center lg:items-start z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="uppercase text-[11px] tracking-[0.12em] opacity-60 font-bold mb-3 text-[#F57E2A]">
                The New Standard
              </div>
              <motion.h1 
                variants={itemVariants}
                className="text-[2.5rem] lg:text-[3.5rem] font-[700] text-[#F57E2A] leading-[1.08] tracking-[-0.04em] mb-3"
              >
                Rent without getting scammed.
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-[1.25rem] font-normal text-[#1F2937] mb-8 max-w-xl"
              >
                Pay monthly. Keep proof. Move in with confidence.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start w-full">
                <a href="#waitlist" className="bg-[#F57E2A] text-white font-bold text-[1rem] px-[32px] py-[12px] rounded-[40px] hover:scale-[1.02] hover:shadow-[0_10px_25px_-5px_rgba(255,107,53,0.4)] transition-all duration-300 ease-in-out flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F57E2A]">
                  Join the Waitlist &rarr;
                </a>
                <p className="text-[0.75rem] text-[#6B7280] mt-4 max-w-md">
                  Rolling access begins soon. Top users get priority onboarding + perks.
                </p>
              </motion.div>
            </motion.div>

            {/* Illustration (40% on desktop) */}
            <motion.div 
              className="w-[80%] lg:w-[40%] flex justify-center lg:justify-end z-10 mt-12 lg:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HeroIllustration />
            </motion.div>

          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="w-full px-6 md:px-12 lg:px-24 py-32 pointer-events-auto relative z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col items-center text-center mb-16"
            >
              <div className="uppercase text-[11px] tracking-[0.12em] opacity-60 font-bold mb-3 text-[#F57E2A]">
                The Problem
              </div>
              <h2 className="text-[2rem] lg:text-[2.5rem] font-[700] text-[#F57E2A] leading-[1.08] tracking-[-0.04em] mb-4">
                Renting in Africa still hurts too many people.
              </h2>
              <p className="text-[#6B7280] text-[1.125rem] max-w-2xl">
                Connecting people to houses is easy. Making renting safe, fair, and predictable is the hard part.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/80 backdrop-blur-md border border-[#F57E2A]/15 rounded-[24px] p-8 flex flex-col items-start gap-6 relative overflow-hidden group shadow-[0_4px_20px_rgba(255,107,53,0.02)]"
              >
                {/* Embedded Touch-Not Guilloche background accent */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 100 100">
                  <path d="M-10,30 Q30,10 70,50 T150,30" fill="none" stroke="#F57E2A" strokeWidth="0.8" strokeDasharray="1 1" />
                  <path d="M-10,50 Q40,30 60,70 T150,50" fill="none" stroke="#F57E2A" strokeWidth="0.5" strokeDasharray="3 1" />
                </svg>

                <div className="w-full bg-white rounded-xl p-4 border border-[#F57E2A]/10 shadow-sm flex items-center gap-3 transform group-hover:-translate-y-1 transition-transform duration-300 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                    <ReceiptText size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 font-mono">Transfer Error</span>
                    <span className="text-sm font-mono font-bold text-gray-800">₦450,000.00</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-auto relative z-10">
                  <h3 className="text-[#1F2937] font-[700] text-xl leading-[1.08] tracking-[-0.04em]">
                    You send money. Agent disappears.
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    Fake agents and unverified listings cost renters millions every year.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                whileHover={{ y: 4 }}
                className="bg-white/80 backdrop-blur-md border border-[#F57E2A]/15 rounded-[24px] p-8 flex flex-col items-start gap-6 relative overflow-hidden group md:translate-y-8 shadow-[0_4px_20px_rgba(255,107,53,0.02)]"
              >
                {/* Embedded Touch-Not Guilloche background accent */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 100 100">
                  <path d="M0,80 Q50,40 100,80 T200,80" fill="none" stroke="#F57E2A" strokeWidth="0.8" strokeDasharray="1 1" />
                </svg>

                <div className="w-full bg-white rounded-xl p-4 border border-[#F57E2A]/10 shadow-sm flex items-center gap-3 transform group-hover:-translate-y-1 transition-transform duration-300 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                    <BadgeCheck size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 font-mono">Verification Status</span>
                    <span className="text-sm font-mono font-bold text-gray-800">Unverified Tenant</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-auto relative z-10">
                  <h3 className="text-[#1F2937] font-[700] text-xl leading-[1.08] tracking-[-0.04em]">
                    Landlords chase payments.
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    Zero protection against defaults and property damage.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                whileHover={{ y: -4 }}
                className="bg-white/80 backdrop-blur-md border border-[#F57E2A]/15 rounded-[24px] p-8 flex flex-col items-start gap-6 relative overflow-hidden group shadow-[0_4px_20px_rgba(255,107,53,0.02)]"
              >
                {/* Embedded Touch-Not Guilloche background accent */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 100 100">
                  <path d="M-10,30 Q30,10 70,50 T150,30" fill="none" stroke="#F57E2A" strokeWidth="0.8" strokeDasharray="1 1" />
                </svg>

                <div className="w-full bg-white rounded-xl p-4 border border-[#F57E2A]/10 shadow-sm flex items-center gap-3 transform group-hover:-translate-y-1 transition-transform duration-300 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#FDF0E7] flex items-center justify-center text-[#F57E2A]">
                    <Database size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 font-mono">Agreement Status</span>
                    <span className="text-sm font-mono font-bold text-gray-800">No Documents</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-auto relative z-10">
                  <h3 className="text-[#1F2937] font-[700] text-xl leading-[1.08] tracking-[-0.04em]">
                    No records. No proof.
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    Verbal agreements lead to endless disputes and lost money.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
              className="text-center text-[#6B7280] text-[1rem] md:text-[1.125rem] leading-relaxed max-w-2xl mt-4"
            >
              <p>Connecting people to houses is easy.</p>
              <p>Making renting safe, fair, and predictable is the hard part.</p>
              <p className="font-medium mt-2 text-[#1F2937]">That's exactly why MyDomos exists.</p>
            </motion.div>

          </div>
        </section>

        {/* Infrastructure Solution Section */}
        <section id="solution" className="w-full px-6 md:px-12 lg:px-24 py-24 pointer-events-auto relative z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[1.5rem] lg:text-[2rem] font-bold text-[#F57E2A] mb-4"
            >
              MyDomos is the missing trust layer for African renting.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[1.25rem] text-[#1F2937] font-light mb-16 max-w-3xl"
            >
              One platform for the entire rental lifecycle – before, during, and after.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-[1rem] text-[#4B5563] leading-[1.6] max-w-[700px] mx-auto text-center"
            >
              We don't list properties. We make every rental safe, transparent, and predictable — whether you found the house on any listing site, social platform, or offline.
            </motion.p>

          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full px-6 md:px-12 lg:px-24 py-24 bg-[#FFF8F0] pointer-events-auto relative z-10">
          <div className="max-w-[1200px] mx-auto w-full text-center">
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[42px] font-bold text-[#1A1A1A] mb-3"
            >
              How It Works
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[18px] text-[#666] mb-[60px]"
            >
              Three simple steps to secure your next home
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Step 1: Pay Safely */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="bg-white rounded-[24px] p-10 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 text-left"
              >
                <img src="https://i.postimg.cc/ht6W1x91/68b07306391b4b688a5d4596ab51e043.png" alt="Pay safely with clear shared records and monthly options" className="w-full max-h-[260px] object-contain mb-6 mx-auto mix-blend-multiply" style={{ filter: "brightness(1.2) contrast(1.2)" }} />
                <div className="text-[48px] font-extrabold text-[#FF6B00] mb-3">01</div>
                <h3 className="text-[24px] font-semibold text-[#1A1A1A] mb-3">Pay Safely</h3>
                <p className="text-[16px] text-[#666] leading-[1.6]">Clear shared records and flexible monthly payment options. No hidden fees, full transparency.</p>
              </motion.div>
              
              {/* Step 2: Find Any House */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-white rounded-[24px] p-10 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 text-left"
              >
                <img src="https://i.postimg.cc/66YPhnKX/17edfa9a13084286b0997ff2c75b0f71.png" alt="Find any house anywhere" className="w-full max-h-[260px] object-contain mb-6 mx-auto mix-blend-multiply" style={{ filter: "brightness(1.2) contrast(1.2)" }} />
                <div className="text-[48px] font-extrabold text-[#FF6B00] mb-3">02</div>
                <h3 className="text-[24px] font-semibold text-[#1A1A1A] mb-3">Find Anywhere</h3>
                <p className="text-[16px] text-[#666] leading-[1.6]">Search and discover properties across any location. Your next home is just a tap away.</p>
              </motion.div>
              
              {/* Step 3: Check Safety */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="bg-white rounded-[24px] p-10 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 text-left"
              >
                <img src="https://i.postimg.cc/xdp5WDf0/8f25619786f64909af838117d6f66f5d.png" alt="Check safety and lock terms with MyDomos" className="w-full max-h-[260px] object-contain mb-6 mx-auto mix-blend-multiply" style={{ filter: "brightness(1.2) contrast(1.2)" }} />
                <div className="text-[48px] font-extrabold text-[#FF6B00] mb-3">03</div>
                <h3 className="text-[24px] font-semibold text-[#1A1A1A] mb-3">Stay Secure</h3>
                <p className="text-[16px] text-[#666] leading-[1.6]">Check safety ratings and lock in terms with MyDomos protection. Rent with confidence.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Built for Everyone Section */}
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 pointer-events-auto relative z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[1.5rem] lg:text-[2rem] font-bold text-[#F57E2A] text-center mb-16"
            >
              Built for Everyone
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="bg-white/80 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-[#F57E2A]/10 hover:border-[#F57E2A]/20 hover:shadow-[0_12px_40px_rgba(255,107,53,0.06)] hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col items-start text-left relative overflow-hidden group"
              >
                {/* Subtle Guilloche mesh element in the card background */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100">
                  <path d="M-10,30 Q30,10 70,50 T150,30" fill="none" stroke="#F57E2A" strokeWidth="0.8" strokeDasharray="1 1" />
                </svg>

                <div className="relative mb-6 shrink-0 flex items-center justify-center">
                  {/* Structured base geometric framework for the icon */}
                  <div className="absolute inset-0 scale-[1.4] opacity-20 pointer-events-none group-hover:scale-[1.6] group-hover:rotate-12 transition-all duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#F57E2A] fill-none" strokeWidth="1" strokeDasharray="3 3">
                      <circle cx="50" cy="50" r="30" />
                      <circle cx="50" cy="50" r="20" strokeWidth="0.6" strokeDasharray="1 2" />
                    </svg>
                  </div>
                  <div className="card-icon w-[60px] h-[60px] rounded-2xl bg-[#FDF0E7] flex items-center justify-center text-[#F57E2A] relative z-10 border border-[#F57E2A]/15 shadow-sm transform group-hover:scale-105 transition-transform duration-300">
                    <User size={28} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-[#1F2937] font-bold text-[1.25rem] leading-snug mb-3">
                  Tenant
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  Save monthly, keep proof, and rent with peace of mind. Pay monthly, move in today.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-white/80 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-[#F57E2A]/10 hover:border-[#F57E2A]/20 hover:shadow-[0_12px_40px_rgba(255,107,53,0.06)] hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col items-start text-left relative overflow-hidden group"
              >
                {/* Subtle Guilloche mesh element in the card background */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100">
                  <path d="M-10,30 Q30,10 70,50 T150,30" fill="none" stroke="#F57E2A" strokeWidth="0.8" strokeDasharray="1 1" />
                </svg>

                <div className="relative mb-6 shrink-0 flex items-center justify-center">
                  {/* Structured base geometric framework for the icon */}
                  <div className="absolute inset-0 scale-[1.4] opacity-20 pointer-events-none group-hover:scale-[1.6] group-hover:rotate-12 transition-all duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#F57E2A] fill-none" strokeWidth="1" strokeDasharray="3 3">
                      <circle cx="50" cy="50" r="30" />
                      <circle cx="50" cy="50" r="20" strokeWidth="0.6" strokeDasharray="1 2" />
                    </svg>
                  </div>
                  <div className="card-icon w-[60px] h-[60px] rounded-2xl bg-[#FDF0E7] flex items-center justify-center text-[#F57E2A] relative z-10 border border-[#F57E2A]/15 shadow-sm transform group-hover:scale-105 transition-transform duration-300">
                    <Building size={28} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-[#1F2937] font-bold text-[1.25rem] leading-snug mb-3">
                  Landlord & Agent
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  Get paid on time, keep records, and build a trusted track record.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="bg-white/80 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-[#F57E2A]/10 hover:border-[#F57E2A]/20 hover:shadow-[0_12px_40px_rgba(255,107,53,0.06)] hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col items-start text-left relative overflow-hidden group"
              >
                {/* Subtle Guilloche mesh element in the card background */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100">
                  <path d="M-10,30 Q30,10 70,50 T150,30" fill="none" stroke="#F57E2A" strokeWidth="0.8" strokeDasharray="1 1" />
                </svg>

                <div className="relative mb-6 shrink-0 flex items-center justify-center">
                  {/* Structured base geometric framework for the icon */}
                  <div className="absolute inset-0 scale-[1.4] opacity-20 pointer-events-none group-hover:scale-[1.6] group-hover:rotate-12 transition-all duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#F57E2A] fill-none" strokeWidth="1" strokeDasharray="3 3">
                      <circle cx="50" cy="50" r="30" />
                      <circle cx="50" cy="50" r="20" strokeWidth="0.6" strokeDasharray="1 2" />
                    </svg>
                  </div>
                  <div className="card-icon w-[60px] h-[60px] rounded-2xl bg-[#FDF0E7] flex items-center justify-center text-[#F57E2A] relative z-10 border border-[#F57E2A]/15 shadow-sm transform group-hover:scale-105 transition-transform duration-300">
                    <Network size={28} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-[#1F2937] font-bold text-[1.25rem] leading-snug mb-3">
                  Proptech & Listing Site
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  Plug MyDomos in and give users safety and trust tools.
                </p>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Waitlist Section */}
        <WaitlistSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Build in Public Section */}
        <section className="w-full px-6 md:px-12 lg:px-24 py-32 pointer-events-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="max-w-3xl mx-auto w-full flex flex-col items-center text-center"
          >
            <div className="uppercase text-[11px] tracking-[0.12em] opacity-60 font-bold mb-3 text-[#F57E2A]">
              Transparency
            </div>
            
            <h2 className="text-[2rem] lg:text-[2.5rem] font-[700] text-[#F57E2A] leading-[1.08] tracking-[-0.04em] mb-4">
              Building in public, every week.
            </h2>
            
            <p className="text-[1.125rem] text-[#4B5563] leading-[1.5] max-w-[600px] mb-8">
              We're building to fix renting across Africa.<br className="hidden sm:block" />
              Follow our journey.
            </p>
            
            <div className="flex items-center gap-4 mb-10">
              <motion.a 
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://x.com/DomosHQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on X (Twitter)"
                className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.06] flex items-center justify-center text-[#F57E2A] hover:text-[#DE6310] cursor-pointer"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://www.linkedin.com/company/domoshq/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on LinkedIn"
                className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.06] flex items-center justify-center text-[#F57E2A] hover:text-[#DE6310] cursor-pointer"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://www.facebook.com/profile.php?id=61576522395409" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Facebook"
                className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.06] flex items-center justify-center text-[#F57E2A] hover:text-[#DE6310] cursor-pointer"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://www.instagram.com/domoshq?igsh=MTE1b2xmamxwcDZlag==" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Instagram"
                className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.06] flex items-center justify-center text-[#F57E2A] hover:text-[#DE6310] cursor-pointer"
              >
                <Instagram size={20} />
              </motion.a>
            </div>

            <p className="text-[0.875rem] text-[#6B7280]">
              Still hiring equity, volunteers, and interns – email <a href="mailto:careers@mydomos.org" className="text-[#F57E2A] hover:underline font-medium">careers@mydomos.org</a>
            </p>
          </motion.div>
        </section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/60 backdrop-blur-md border-t border-[#E5E7EB] py-16 px-6 pointer-events-auto relative z-10 mt-16"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
            
            {/* Row 1: Regions */}
            <div className="text-[0.75rem] text-[#6B7280] flex items-center justify-center gap-2 flex-wrap font-medium tracking-wide uppercase">
              <span>🇳🇬 Nigeria</span>
              <span className="text-gray-300">|</span>
              <span>🇬🇭 Ghana</span>
              <span className="text-gray-300">|</span>
              <span>🇿🇦 South Africa</span>
            </div>

            <Logo className="w-12 h-12 text-[#F57E2A]" color="#F57E2A" />

            {/* Row 2: Tagline */}
            <div className="text-[0.875rem] font-semibold text-[#F57E2A]">
              MyDomos — Africa's rental trust infrastructure
            </div>

            {/* Row 3: Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://x.com/DomosHQ" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-[#6B7280] hover:text-[#F57E2A] hover:scale-110 transition-all cursor-pointer">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/domoshq/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#6B7280] hover:text-[#F57E2A] hover:scale-110 transition-all cursor-pointer">
                <Linkedin size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576522395409" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#6B7280] hover:text-[#F57E2A] hover:scale-110 transition-all cursor-pointer">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/domoshq?igsh=MTE1b2xmamxwcDZlag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#6B7280] hover:text-[#F57E2A] hover:scale-110 transition-all cursor-pointer">
                <Instagram size={18} />
              </a>
            </div>

            {/* Row 4: Links */}
            <div className="text-[0.75rem] text-[#4B5563] flex items-center justify-center gap-x-3 gap-y-2 flex-wrap">
              <Link to="/privacy" className="hover:text-[#F57E2A] transition-colors">Privacy Policy</Link>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <Link to="/terms" className="hover:text-[#F57E2A] transition-colors">Terms of Use</Link>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <a href="mailto:hello@mydomos.org" className="hover:text-[#F57E2A] transition-colors font-medium">hello@mydomos.org</a>
            </div>

            {/* Row 5: Copyright */}
            <div className="text-[0.7rem] text-[#9CA3AF] mt-2">
              © {new Date().getFullYear()} MyDomos. All rights reserved.
            </div>

          </div>
        </motion.footer>

      </div>
    </main>
  );
}
