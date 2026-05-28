import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export default function Navbar({ onStartProject }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className={`transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${scrolled ? 'mx-4 md:mx-8 mt-3' : 'mx-0 mt-0'}`}>
          <div
            className={`relative transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${scrolled ? 'rounded-2xl' : 'rounded-none'}`}
            style={{
              background: scrolled ? 'rgba(20, 19, 18, 0.55)' : 'rgba(12, 12, 11, 0.30)',
              backdropFilter: 'blur(28px) saturate(200%) brightness(1.08)',
              WebkitBackdropFilter: 'blur(28px) saturate(200%) brightness(1.08)',
              border: scrolled ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.06)',
              borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.04)',
              boxShadow: scrolled
                ? 'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)'
                : 'inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 0 rgba(0,0,0,0.2)',
            }}
          >
            {/* Iridescent shimmer */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                borderRadius: 'inherit',
                background: `linear-gradient(105deg, rgba(255,255,255,0.00) 0%, rgba(120,180,255,0.04) 25%, rgba(255,180,120,0.03) 50%, rgba(180,120,255,0.04) 75%, rgba(255,255,255,0.00) 100%)`,
              }}
            />

            <div className="max-w-7xl mx-auto px-5 md:px-6 py-3.5 flex items-center justify-between relative z-10">
              {/* Logo */}
              <div onClick={() => scrollToSection('home')} className="cursor-pointer select-none">
                <span className="font-display text-xl md:text-2xl font-black tracking-tight text-white drop-shadow-sm">
                  Pixfliq<span className="text-[#FF5C3A]">.</span>
                </span>
              </div>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-1">
                {['home', 'services', 'portfolio', 'about', 'contact'].map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="relative px-4 py-2 text-sm font-semibold capitalize rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={onStartProject}
                  className="cursor-pointer text-white text-sm font-bold px-5 py-2 rounded-xl transition-all duration-300 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #FF5C3A 0%, #FF3A5C 100%)',
                    boxShadow: '0 2px 12px rgba(255,92,58,0.4), inset 0 1px 0 rgba(255,255,255,0.25)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(255,92,58,0.6), inset 0 1px 0 rgba(255,255,255,0.3)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 12px rgba(255,92,58,0.4), inset 0 1px 0 rgba(255,255,255,0.25)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  }}
                >
                  Start a Project
                </button>
              </div>

              {/* Mobile hamburger */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-white/90 hover:text-white rounded-xl hover:bg-white/10 transition-all"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-4 mt-2 rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(18, 17, 16, 0.85)',
                backdropFilter: 'blur(32px) saturate(200%)',
                WebkitBackdropFilter: 'blur(32px) saturate(200%)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 16px 48px rgba(0,0,0,0.5)',
              }}
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {['home', 'services', 'portfolio', 'about', 'contact'].map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-left text-base font-bold text-white/80 hover:text-white py-2.5 px-3 rounded-xl hover:bg-white/10 transition-all capitalize"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
                <div className="my-2 h-px bg-white/10" />
                <button
                  onClick={() => { setMobileMenuOpen(false); onStartProject(); }}
                  className="w-full text-center text-white font-bold py-3 rounded-xl text-sm"
                  style={{
                    background: 'linear-gradient(135deg, #FF5C3A 0%, #FF3A5C 100%)',
                    boxShadow: '0 2px 16px rgba(255,92,58,0.4)',
                  }}
                >
                  Start a Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}