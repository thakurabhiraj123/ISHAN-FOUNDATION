import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/navigation';
import logoImg from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter regular links from the highlighted Contact Us button
  const mainNavLinks = navLinks.filter(link => link.name !== 'Contact Us');

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-2.5 border-b border-slate-200/70'
          : 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-slate-100/80 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Circular Logo & Foundation Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
            <img
              src={logoImg}
              alt="Ishaan Foundation Official Logo"
              className="h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-contain shrink-0 aspect-square group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col justify-center text-left">
              <span className="font-heading font-extrabold text-base sm:text-lg md:text-xl tracking-tight text-[#08203E] leading-tight group-hover:text-primary-600 transition-colors duration-300">
                ISHAAN FOUNDATION
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-emerald-600 tracking-wider uppercase leading-tight mt-0.5">
                Healthcare & Community NGO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {mainNavLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-primary-500 font-semibold'
                      : 'text-slate-700 hover:text-primary-500'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Highlighted Blue Contact Us CTA Button */}
            <Link
              to="/contact"
              className="bg-primary-500 text-white hover:bg-primary-600 px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md shadow-primary-500/20 hover:shadow-primary-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shrink-0"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5 text-left">
              {mainNavLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-500 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-primary-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 px-1">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary-500 text-white hover:bg-primary-600 py-3 rounded-full text-base font-bold shadow-md shadow-primary-500/25 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
