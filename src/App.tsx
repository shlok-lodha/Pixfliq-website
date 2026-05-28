import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>('Website Design');

  // Offset smooth scrolling helper
  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // Height of floating navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStartProject = () => {
    setPreselectedService('Full Package');
    setTimeout(() => scrollToAnchor('contact'), 50);
  };

  const handleSelectServiceFromCard = (serviceVal: string) => {
    setPreselectedService(serviceVal);
    setTimeout(() => scrollToAnchor('contact'), 50);
  };

  const handleTalkToShlok = () => {
    setPreselectedService('Website Design');
    setTimeout(() => scrollToAnchor('contact'), 50);
  };

  return (
    <div className="relative bg-base selection:bg-coral/20 min-h-screen text-ink overflow-x-hidden font-body">
      
      {/* Floating dot overlay visual element for craft */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-coral/3 blur-3xl pointer-events-none" />
      <div className="absolute top-3/4 right-1/10 w-96 h-80 rounded-full bg-violet/3 blur-3xl pointer-events-none" />

      {/* Section 1: Navigation header */}
      <Navbar 
        onStartProject={handleStartProject}
      />

      {/* Section 2: Fullscreen backing video Hero */}
      <Hero 
        onViewWork={() => scrollToAnchor('portfolio')}
        onTalkShlok={handleTalkToShlok}
      />

      {/* Section 3: Infinite Trust Marquee Bar */}
      <TrustBar />

      {/* Section 4: Asymmetric Service blocks */}
      <Services 
        onSelectService={handleSelectServiceFromCard} 
      />

      {/* Section 5: Highlight portfolio with browser case-studies */}
      <Portfolio 
        onStartProject={handleStartProject}
      />

      {/* Section 6: About Shlok & Studio Team */}
      <About />

      {/* Section 7: Live Quotes review */}
      <Testimonials />

      {/* Section 8: Split-Contact Lead card */}
      <ContactForm 
        preselectedService={preselectedService}
      />

      {/* Section 9: Branding Footer with GST Details */}
      <Footer />

    </div>
  );
}
