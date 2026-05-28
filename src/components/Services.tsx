import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: "web-dev",
      name: "Website Design & Development",
      description: "From stunning bespoke landing pages to heavy loaded full-stack platforms. We obsess over speed, absolute perfect responsive layout, conversion, and artistic digital craft.",
      price: "₹15,000 onwards",
      badgeColor: "border-coral",
      selectValue: "Website Design"
    },
    {
      id: "brand-id",
      name: "Brand Identity & Logo Design",
      description: "Logos, comprehensive brand systems, style guides, typo pairings, and visual languages that ensure your business stands out and makes you impossible to ignore.",
      price: "₹8,000 onwards",
      badgeColor: "border-violet",
      selectValue: "Brand Identity & Logo"
    },
    {
      id: "uiux-campaign",
      name: "UI/UX & Digital Campaigns",
      description: "High fidelity interface screens, research audits, interactive Figma prototypes, and viral digital social creatives that convert scrollers into lifelong buyers.",
      price: "₹10,000 onwards",
      badgeColor: "border-lime",
      selectValue: "UI/UX Design"
    }
  ];

  const techStack = [
    "React", "Next.js", "Webflow", "Framer", "Shopify", 
    "WordPress", "Figma", "Supabase", "Tailwind CSS",
    "TypeScript", "Astra", "Node.js", "Vite"
  ];

  return (
    <section id="services" className="pt-24 pb-16 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Asymmetric 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs uppercase tracking-widest text-[#7B5CF0] font-bold mb-4">// Core Services</div>
              <h2 className="text-5xl md:text-6xl font-display font-black text-ink leading-tight">
                What We <br />
                <span className="text-coral">Build</span>.
              </h2>
              <p className="text-muted font-body mt-6 text-lg max-w-sm">
                We bridge the gap between heavy technical engineering and exquisite premium design, serving clients from Jharsuguda to the global stage.
              </p>
              
              <div className="mt-10 flex items-center gap-3">
                <span className="text-xs font-semibold text-ink bg-white/[0.04] border border-border/60 rounded-full px-3 py-1">₹ Local pricing tier active</span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">✓ Free consultation</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stacked items starting lower (mt-16 offset) */}
          <div className="lg:col-span-7 lg:mt-16 space-y-8">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#151413] rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-border hover:shadow-[0_20px_50px_rgba(255,92,58,0.06)] transition-all duration-300 relative group"
              >
                {/* 4px horizontal border accent left side */}
                <div className={`absolute top-8 left-0 bottom-8 w-1.5 rounded-r-md border-l-[6px] ${svc.badgeColor}`} />

                <div className="pl-6">
                  {/* Service Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-display font-bold text-ink group-hover:text-coral transition-colors">
                      {svc.name}
                    </h3>
                    <span className="bg-lime text-[#111110] font-body text-xs font-extrabold rounded-full px-4 py-1.5 shadow-sm">
                      {svc.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted font-body text-base leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Actions */}
                  <button
                    onClick={() => onSelectService(svc.selectValue)}
                    className="inline-flex items-center gap-2 text-coral font-bold font-body group-hover:translate-x-1.5 transition-transform cursor-pointer"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Tech Marquee strip below */}
        <div className="mt-24 overflow-hidden rounded-2xl bg-[#111110] border border-border/10 py-5 select-none relative shadow-lg">
          <div className="flex w-max">
            <motion.div
              animate={{ x: [0, -800] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 18,
                ease: 'linear',
              }}
              className="flex whitespace-nowrap gap-8"
            >
              {Array(6).fill(techStack).flat().map((tech, i) => (
                <span
                  key={i}
                  className="text-violet font-display font-medium text-sm tracking-uppercase hover:text-lime transition-colors"
                >
                  {tech} <span className="opacity-40 text-xs ml-4">·</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
