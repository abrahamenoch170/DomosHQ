import { useRef } from 'react';
import { useScroll, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { UserX, ShieldAlert, FileX, User, Building, Network, Twitter, Linkedin, Facebook, Instagram, ReceiptText, BadgeCheck, Database } from 'lucide-react';
import { BackgroundMap } from './components/BackgroundMap';
import { HeroIllustration } from './components/HeroIllustration';
import { WaitlistSection } from './components/WaitlistSection';
import { FAQSection } from './components/FAQSection';
import { SearchHouseAnimation, ShieldLockAnimation, PaymentCalendarAnimation } from './components/HowItWorksAnimations';
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
    <main ref={containerRef} className="w-full bg-[#FFF9F6] relative min-h-[400vh] font-sans text-[#1F2937] selection:bg-[#FF6B35] selection:text-white">
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
              <div className="uppercase text-[11px] tracking-[0.12em] opacity-60 font-bold mb-3 text-[#FF6B35]">
                The New Standard
              </div>
              <motion.h1
                variants={itemVariants}
                className="text-[2.5rem] lg:text-[3.5rem] font-[700] text-[#FF6B35] leading-[1.08] tracking-[-0.04em] mb-3"
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
                <a href="#waitlist" className="bg-[#FF6B35] text-white font-bold text-[1rem] px-[32px] py-[12px] rounded-[40px] hover:scale-[1.02] hover:shadow-[0_10px_25px_-5px_rgba(255,107,53,0.4)] transition-all duration-300 ease-in-out flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35]">
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
              <div className="uppercase text-[11px] tracking-[0.12em] opacity-60 font-bold mb-3 text-[#FF6B35]">
                The Problem
              </div>
              <h2 className="text-[2rem] lg:text-[2.5rem] font-[700] text-[#FF6B35] leading-[1.08] tracking-[-0.04em] mb-4">
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
                whileHover={{ scale: 1.02 }}
                className="bg-white/60 backdrop-blur-md border border-black/[0.06] rounded-[24px] p-8 flex flex-col items-start gap-6 relative overflow-hidden group"
              >
                <div className="w-full bg-white/80 rounded-xl p-4 border border-black/[0.04] shadow-sm flex items-center gap-3 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <ReceiptText size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Transaction Failed</span>
                    <span className="text-sm font-mono font-medium text-gray-900">₦450,000.00</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-auto">
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
                whileHover={{ scale: 1.02 }}
                className="bg-white/60 backdrop-blur-md border border-black/[0.06] rounded-[24px] p-8 flex flex-col items-start gap-6 relative overflow-hidden group md:translate-y-8"
              >
                <div className="w-full bg-white/80 rounded-xl p-4 border border-black/[0.04] shadow-sm flex items-center gap-3 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <BadgeCheck size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Verification Status</span>
                    <span className="text-sm font-mono font-medium text-gray-900">Unverified Tenant</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-auto">
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
                whileHover={{ scale: 1.02 }}
                className="bg-white/60 backdrop-blur-md border border-black/[0.06] rounded-[24px] p-8 flex flex-col items-start gap-6 relative overflow-hidden group"
              >
                <div className="w-full bg-white/80 rounded-xl p-4 border border-black/[0.04] shadow-sm flex items-center gap-3 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#FFEBE2] flex items-center justify-center text-[#FF6B35]">
                    <Database size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Record Found</span>
                    <span className="text-sm font-mono font-medium text-gray-900">0 Documents</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-auto">
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
              className="text-[1.5rem] lg:text-[2rem] font-bold text-[#FF6B35] mb-4"
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
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 pointer-events-auto relative z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[1.5rem] lg:text-[2rem] font-bold text-[#FF6B35] text-center mb-16"
            >
              How It Works
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="bg-[rgba(255,248,240,0.9)] rounded-[16px] p-6 shadow-sm border border-[#FF6B35]/10 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold mb-4 shrink-0">
                  1
                </div>
                <h3 className="text-[#1F2937] font-bold text-[1.25rem] leading-snug mb-6">
                  Find any house anywhere
                </h3>
                <div className="w-full aspect-square">
                  <SearchHouseAnimation />
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-[rgba(255,248,240,0.9)] rounded-[16px] p-6 shadow-sm border border-[#FF6B35]/10 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold mb-4 shrink-0">
                  2
                </div>
                <h3 className="text-[#1F2937] font-bold text-[1.25rem] leading-snug mb-6">
                  Check safety and lock terms with MyDomos
                </h3>
                <div className="w-full aspect-square">
                  <ShieldLockAnimation />
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="bg-[rgba(255,248,240,0.9)] rounded-[16px] p-6 shadow-sm border border-[#FF6B35]/10 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold mb-4 shrink-0">
                  3
                </div>
                <h3 className="text-[#1F2937] font-bold text-[1.25rem] leading-snug mb-6">
                  Pay safely with clear shared records and monthly options
                </h3>
                <div className="w-full aspect-square">
                  <PaymentCalendarAnimation />
                </div>
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
              className="text-[1.5rem] lg:text-[2rem] font-bold text-[#FF6B35] text-center mb-16"
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
                className="bg-[rgba(255,248,240,0.9)] rounded-[16px] p-6 shadow-sm border border-[#FF6B35]/5 hover:border-[#FF6B35]/20 hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-in-out flex flex-col items-start text-left"
              >
                <div className="card-icon w-[60px] h-[60px] rounded-[12px] bg-[#FFF0EA] flex items-center justify-center text-[#FF6B35] mb-6 shrink-0">
                  <User size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1F2937] font-bold text-[1.25rem] leading-snug mb-3">
                  Tenant
                </h3>
                <p className="text-[#4B5563] text-[1rem] leading-relaxed">
                  Save monthly, keep proof, and rent with peace of mind. Pay monthly, move in today.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-[rgba(255,248,240,0.9)] rounded-[16px] p-6 shadow-sm border border-[#FF6B35]/5 hover:border-[#FF6B35]/20 hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-in-out flex flex-col items-start text-left"
              >
                <div className="card-icon w-[60px] h-[60px] rounded-[12px] bg-[#FFF0EA] flex items-center justify-center text-[#FF6B35] mb-6 shrink-0">
                  <Building size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1F2937] font-bold text-[1.25rem] leading-snug mb-3">
                  Landlord & Agent
                </h3>
                <p className="text-[#4B5563] text-[1rem] leading-relaxed">
                  Get paid on time, keep records, and build a trusted track record.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="bg-[rgba(255,248,240,0.9)] rounded-[16px] p-6 shadow-sm border border-[#FF6B35]/5 hover:border-[#FF6B35]/20 hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-in-out flex flex-col items-start text-left"
              >
                <div className="card-icon w-[60px] h-[60px] rounded-[12px] bg-[#FFF0EA] flex items-center justify-center text-[#FF6B35] mb-6 shrink-0">
                  <Network size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1F2937] font-bold text-[1.25rem] leading-snug mb-3">
                  Proptech & Listing Site
                </h3>
                <p className="text-[#4B5563] text-[1rem] leading-relaxed">
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
            <div className="uppercase text-[11px] tracking-[0.12em] opacity-60 font-bold mb-3 text-[#FF6B35]">
              Transparency
            </div>

            <h2 className="text-[2rem] lg:text-[2.5rem] font-[700] text-[#FF6B35] leading-[1.08] tracking-[-0.04em] mb-4">
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
                className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.06] flex items-center justify-center text-[#FF6B35] hover:text-[#E0531E] cursor-pointer"
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
                className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.06] flex items-center justify-center text-[#FF6B35] hover:text-[#E0531E] cursor-pointer"
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
                className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.06] flex items-center justify-center text-[#FF6B35] hover:text-[#E0531E] cursor-pointer"
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
                className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.06] flex items-center justify-center text-[#FF6B35] hover:text-[#E0531E] cursor-pointer"
              >
                <Instagram size={20} />
              </motion.a>
            </div>

            <p className="text-[0.875rem] text-[#6B7280]">
              Still hiring equity, volunteers, and interns – email <a href="mailto:careers@mydomos.org" className="text-[#FF6B35] hover:underline font-medium">careers@mydomos.org</a>
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

            {/* Row 2: Tagline */}
            <div className="text-[0.875rem] font-semibold text-[#FF6B35]">
              MyDomos — Africa's rental trust infrastructure
            </div>

            {/* Row 3: Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://x.com/DomosHQ" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-[#6B7280] hover:text-[#FF6B35] hover:scale-110 transition-all cursor-pointer">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/domoshq/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#6B7280] hover:text-[#FF6B35] hover:scale-110 transition-all cursor-pointer">
                <Linkedin size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576522395409" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#6B7280] hover:text-[#FF6B35] hover:scale-110 transition-all cursor-pointer">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/domoshq?igsh=MTE1b2xmamxwcDZlag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#6B7280] hover:text-[#FF6B35] hover:scale-110 transition-all cursor-pointer">
                <Instagram size={18} />
              </a>
            </div>

            {/* Row 4: Links */}
            <div className="text-[0.75rem] text-[#4B5563] flex items-center justify-center gap-x-3 gap-y-2 flex-wrap">
              <Link to="/privacy" className="hover:text-[#FF6B35] transition-colors">Privacy Policy</Link>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <Link to="/terms" className="hover:text-[#FF6B35] transition-colors">Terms of Use</Link>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <a href="mailto:hello@mydomos.org" className="hover:text-[#FF6B35] transition-colors font-medium">hello@mydomos.org</a>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <a href="/sitemap.xml" className="hover:text-[#FF6B35] transition-colors">Sitemap</a>
            </div>

            {/* Office Addresses */}
            <div className="text-[0.65rem] text-[#9CA3AF] flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 mt-1">
              <span>🇳🇬 Lagos, Nigeria</span>
              <span className="text-gray-300 hidden sm:inline">·</span>
              <span>🇬🇭 Accra, Ghana</span>
              <span className="text-gray-300 hidden sm:inline">·</span>
              <span>🇿🇦 Johannesburg, South Africa</span>
            </div>

            {/* Row 5: Copyright */}
            <div className="text-[0.7rem] text-[#9CA3AF] mt-2">
              © {new Date().getFullYear()} DomosHQ. All rights reserved.
            </div>

          </div>
        </motion.footer>

      </div>
    </main>
  );
}
