import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "4.5★", label: "Client Rating" },
    { value: "3+", label: "Countries Reached" },
    { value: "100%", label: "Devoted Craft" }
  ];

  const skills = ["React", "Figma", "Supabase", "Branding", "UI/UX"];

  return (
    <section id="about" className="bg-[#111110] pt-28 pb-32 text-white relative z-20 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Identity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Side Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-coral text-xs tracking-widest uppercase font-mono mb-4 font-bold animate-pulse"
            >
              // Our Story
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#FAF8F4] leading-tight"
            >
              Built from Odisha.<br />
              Trusted Across <span className="text-coral">India</span>.
            </motion.h2>
          </div>

          {/* Right Side Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-base lg:text-lg text-gray-300 leading-relaxed space-y-6"
            >
              <p>
                Pixfliq started with one belief — that exceptional digital design shouldn't be limited to metros. We're a Jharsuguda-native creative studio delivering world-class websites, brand identities, and digital experiences to businesses across India and beyond.
              </p>
              <p>
                Our founder Shlok Lodha picked up his first line of code at 16. Today, at 21, he leads a skilled team of designers, developers, and strategists who bring together technical precision and visual storytelling. Every project we take on is treated like our own brand.
              </p>
              <p>
                From luxury travel platforms to fashion e-commerce stores and interior design portfolios — we've shipped 50+ projects with a 4.9-star average client rating. We don't just build websites. We build digital trust.
              </p>
            </motion.div>
          </div>

        </div>

        {/* 4 Stat Cards in a row (High Contrast High End White Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-28">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-[#282725] rounded-2xl p-6 md:p-8 text-center shadow-lg hover:scale-102 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-display font-black text-[#111110]">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-bold font-body mt-2.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Meet the Mind subsection */}
        <div className="border-t border-white/5 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Avatar placeholder card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 flex justify-center w-full"
            >
              <div className="rounded-3xl bg-gradient-to-br from-[#7B5CF0]/20 to-[#FF5C3A]/20 w-full max-w-sm h-80 flex items-center justify-center border border-white/10 shadow-xl group overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                <span className="text-6xl font-display font-black text-[#7B5CF0] select-none tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  SL
                </span>
                {/* Visual grid decor inside placeholder avatar */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[10px] text-white/40 tracking-widest font-mono font-bold uppercase mr-1">DESIGNER & CODER ORIGINAL</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: bio, skills */}
            <div className="md:col-span-7 text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="text-coral text-xs tracking-widest uppercase font-mono font-bold">
                  // Leadership
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-black text-white">
                  Shlok Lodha
                </h3>
                <p className="text-sm font-semibold tracking-wide text-violet font-body uppercase">
                  Founder & Lead Developer, Pixfliq
                </p>
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-body font-normal pt-2">
                  Shlok is a self-taught developer and designer from Jharsuguda, Odisha. He started freelancing at 16, built his first commercial product at 18, and founded Pixfliq to give Indian businesses a genuine world-class digital presence. His team combines deep technical skill with a sharp eye for aesthetics.
                </p>
              </motion.div>

              {/* Skills pills */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-2.5 pt-4"
              >
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-bold text-gray-200 transition-all select-none cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
