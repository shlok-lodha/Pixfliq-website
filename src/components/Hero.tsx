import { motion } from 'motion/react';
import { ArrowRight, Star, Globe, Target } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onTalkShlok: () => void;
}

export default function Hero({ onViewWork, onTalkShlok }: HeroProps) {
  // Stagger configurations for words
  const titleWordsLine1 = ["We", "Build"];
  const titleWordsLine3 = ["That", "Win."];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Loop Background Video & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none opacity-80"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        {/* Sophisticated dark semi-transparent overlay */}
        <div className="absolute inset-0 bg-base/55 mix-blend-normal" />
      </div>

      {/* Hero Content (z-10) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-coral text-coral bg-coral/5 text-xs font-semibold tracking-wide mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-coral animate-ping" />
          ✦ Web Design Studio · Jharsuguda, India
        </motion.div>

        {/* H1 Title with Staggered Words */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-black tracking-tight leading-[0.95] flex flex-col items-center select-none px-2">
          {/* Line 1: We Build */}
          <div className="overflow-hidden flex flex-wrap gap-4 mb-2 justify-center">
            {titleWordsLine1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-ink inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Line 2: Websites (with SVG Underline Squiggle) */}
          <div className="overflow-hidden py-1.5 mb-2 relative px-2 sm:px-4">
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.25,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-ink relative inline-block pb-1"
            >
              Websites
              {/* Violet SVG underline squiggle */}
              <svg 
                className="absolute left-0 right-0 -bottom-1 w-full h-4 text-violet pointer-events-none" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <motion.path 
                  d="M1,5 C 20,9 40,2 60,8 C 80,2 95,9 99,5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.7, duration: 1, ease: 'easeInOut' }}
                />
              </svg>
            </motion.span>
          </div>

          {/* Line 3: That Win. */}
          <div className="overflow-hidden flex flex-wrap gap-4 justify-center">
            {titleWordsLine3.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4 + i * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-coral inline-block font-black"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 font-body max-w-2xl mx-auto mt-8 leading-relaxed font-normal"
        >
          From Odisha to the world — Pixfliq crafts high-performance websites, brand identities, and digital experiences for founders, startups, and businesses ready to grow.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full"
        >
          <button
            onClick={onViewWork}
            className="group cursor-pointer bg-coral hover:bg-coral/95 text-slate-50 font-semibold rounded-full px-8 py-4 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            View Our Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onTalkShlok}
            className="group cursor-pointer border border-ink text-slate-900 font-semibold rounded-full px-8 py-4 hover:bg-ink hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            Talk to Shlok
            <span className="text-coral">→</span>
          </button>
        </motion.div>

        {/* Stat strip below CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap gap-x-12 gap-y-6 mt-20 justify-center border-t border-border/60 pt-10 w-full"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-coral/10 hover:bg-coral/15 flex items-center justify-center text-coral transition-colors">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-display font-extrabold text-ink text-lg leading-none">50+ Projects</div>
              <div className="text-xs text-gray-400 font-body mt-0.5">Delivered Worldwide</div>
            </div>
          </div>
          
          <div className="hidden sm:block w-px bg-border/60 self-stretch my-2" />

          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center text-ink">
              <Star className="w-5 h-5 fill-lime stroke-ink" />
            </div>
            <div className="text-left">
              <div className="font-display font-extrabold text-ink text-lg leading-none">4.5★ Rating</div>
              <div className="text-xs text-gray-400 font-body mt-0.5">Client Satisfaction</div>
            </div>
          </div>

          <div className="hidden sm:block w-px bg-border/60 self-stretch my-2" />

          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-violet/10 flex items-center justify-center text-violet">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-display font-extrabold text-ink text-lg leading-none">3 Countries</div>
              <div className="text-xs text-gray-400 font-body mt-0.5">Reached Globally</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
