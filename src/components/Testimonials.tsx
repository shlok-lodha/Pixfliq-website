import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Pixfliq redesigned our entire travel platform in under a month. The animations, the Supabase backend, the booking flow — everything was beyond expectation. Our online enquiries increased by 40% within weeks.",
      name: "Arjun Chatterjee",
      role: "Founder, WanderNest Travels",
      location: "Kolkata",
      initials: "AC",
      avatarBg: "bg-emerald-100 text-[#1a3a2a]"
    },
    {
      quote: "They gave Aurum a digital presence that matches our luxury positioning. The gold editorial aesthetic, the parallax effects, the portfolio gallery — our Mumbai and Dubai clients constantly compliment the website.",
      name: "Priya Mehta",
      role: "Creative Director, Aurum Interiors",
      location: "Mumbai",
      initials: "PM",
      avatarBg: "bg-amber-100 text-[#2d1f00]"
    },
    {
      quote: "Sovereign Gym's launch presence became the heartbeat of the city. The booking flows, class showcases, and membership-first branding elevated every campaign.",
      name: "Rahul Deshmukh",
      role: "Founder, Sovereign Gym",
      location: "Bhubaneswar",
      initials: "RD",
      avatarBg: "bg-violet-100 text-[#2c0f4c]"
    }
  ];

  return (
    <section id="testimonials" className="bg-base pt-28 pb-32 text-white relative z-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-coral font-bold mb-4 font-mono"
          >
            // Client Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-black text-ink leading-tight"
          >
            Loved By <span className="text-coral">Founders</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 font-body text-sm md:text-lg mt-6"
          >
            Read how elite creators, founders, and directors leverage Pixfliq design systems to build digital authority and trust.
          </motion.p>
        </div>

        {/* 3-Column Testimonial Cards Grid (Light bg-white cards for outstanding contrast) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col justify-between shadow-xl hover:-translate-y-1.5 transition-transform duration-300 relative text-slate-900"
            >
              <div>
                {/* Large Coral Opening Quotation Mark */}
                <div className="text-7xl font-display leading-none text-coral select-none text-left mb-2">
                  “
                </div>
                {/* Quote Text - set for rich legibility */}
                  <p className="text-gray-700 font-body text-sm md:text-lg leading-relaxed mb-6 text-left">
                  {t.quote}
                </p>
              </div>

              <div>
                {/* Horizontal Rule */}
                <hr className="border-gray-200 my-6" />

                {/* Author Block */}
                <div className="flex items-center gap-4 text-left">
                  {/* Initials Avatar Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-sm tracking-tight shrink-0 ${t.avatarBg}`}>
                    {t.initials}
                  </div>
                  
                  {/* Name and Role */}
                  <div>
                      <div className="font-extrabold text-slate-900 text-sm md:text-base font-body leading-tight">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500 font-body mt-1 leading-normal">
                      {t.role}, <span className="font-semibold">{t.location}</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
