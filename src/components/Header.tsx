import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Join Waitlist', href: '#waitlist', isButton: true },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full bg-[#FFF9F6]/80 backdrop-blur-md border-b border-[#FF6B35]/10 px-6 py-4 flex items-center justify-between"
    >
      <div className="text-xl font-bold text-[#FF6B35] tracking-tight">MyDomos Africa</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={
              link.isButton
                ? 'bg-[#FF6B35] text-white text-sm font-bold px-5 py-2 rounded-full hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35]'
                : 'text-sm font-medium text-[#1F2937] hover:text-[#FF6B35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded'
            }
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden p-2 text-[#FF6B35] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#FFF9F6] border-b border-[#FF6B35]/10 flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  link.isButton
                    ? 'bg-[#FF6B35] text-white text-center font-bold px-5 py-3 rounded-full hover:scale-[1.02] transition-transform duration-200'
                    : 'text-lg font-medium text-[#1F2937] hover:text-[#FF6B35] transition-colors py-2'
                }
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
