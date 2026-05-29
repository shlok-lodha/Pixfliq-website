import { Globe, MapPin, Phone, Mail, FileCheck } from 'lucide-react';

export default function Footer() {
  const scrollSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 85; 
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-base text-stone-200 pt-20 pb-12 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Tagline */}
          <div className="text-left space-y-4">
            <span className="font-display text-2xl font-black text-white tracking-tight">
              Pixfliq<span className="text-coral">.</span>
            </span>
            <p className="font-serif italic text-stone-300 font-medium text-sm leading-relaxed max-w-xs">
              “Your Vision, Our Pixel, World's Attention.”
            </p>
            <div className="text-stone-500 text-xs font-mono pt-2">
              Premium Digital Design Atelier
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-lime font-mono">
              // Services
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400 font-body">
              <li>
                <button onClick={() => scrollSection('services')} className="hover:text-coral transition-colors text-left cursor-pointer">
                  Website Design & Dev
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('services')} className="hover:text-coral transition-colors text-left cursor-pointer">
                  Brand Identity & Logo Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('services')} className="hover:text-coral transition-colors text-left cursor-pointer">
                  UI/UX & Creative Assets
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('services')} className="hover:text-coral transition-colors text-left cursor-pointer">
                  Digital Marketing Campaigns
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-violet font-mono">
              // Studio Desk
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400 font-body">
              <li>
                <button onClick={() => scrollSection('services')} className="hover:text-coral transition-colors cursor-pointer">
                  Solutions & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('portfolio')} className="hover:text-coral transition-colors cursor-pointer">
                  Featured Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('about')} className="hover:text-coral transition-colors cursor-pointer">
                  Our Identity & Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('contact')} className="hover:text-coral transition-colors cursor-pointer">
                  Start Project Brief
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 font-mono">
              // Reach Us
            </h4>
            <ul className="space-y-3 text-sm text-stone-400 font-body">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <span>Jharsuguda, Odisha, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-violet shrink-0" />
                <a href="tel:+919692054343" className="hover:text-coral transition-colors">
                  +91 96920 54343
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-lime shrink-0" />
                <a href="mailto:pixfliqconnect@gmail.com" className="hover:text-coral transition-colors">
                  pixfliqconnect@gmail.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500 font-mono">
            © Copyright 2025 Pixfliq. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-stone-500 font-mono">
            <span className="hover:text-white transition-colors cursor-help">Terms of Services</span>
            <span className="hover:text-white transition-colors cursor-help">Privacy Protocols</span>
            <span className="text-violet font-semibold">Crafted in Odisha</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
