import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioProps {
  onStartProject: () => void;
}

const portfolioAssetModules = import.meta.glob('/assets/portfolio/*.jpg', { eager: true, as: 'url' }) as Record<string, string>;

const imageMap = Object.entries(portfolioAssetModules).reduce((acc, [path, url]) => {
  const match = path.match(/\/assets\/portfolio\/([^/]+)-(\d+)\.jpg$/);
  if (!match) return acc;
  const [ , id, page ] = match;
  const index = Number(page);
  if (!acc[id]) acc[id] = [];
  acc[id].push({ index, url });
  return acc;
}, {} as Record<string, Array<{ index: number; url: string }>>);

export default function Portfolio({ onStartProject }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const projects = [
    {
      id: "wandernest",
      title: "WanderNest",
      subTitle: "WanderNest Tour & Travels",
      tag: "Travel · Web App",
      tagBg: "bg-lime text-slate-900",
      description: "A luxury travel platform with custom tour discovery, booking flows, INR/USD dual-currency support, and clean editorial structure.",
      tech: ["React", "Supabase", "Framer Motion"],
      stats: { "Conversion Boost": "+40%", "Load Time": "0.6s", "Mobile Score": "99%" }
    },
    {
      id: "aurum",
      title: "Aurum Interiors",
      subTitle: "Aurum Interiors Group",
      tag: "Interior Design · Luxury",
      tagBg: "bg-[#C8A96E] text-white",
      description: "A premium gold-themed visual website for a Jharsuguda–Dubai interior atelier. Serif typography, scroll effects, and luxury client registration.",
      tech: ["React", "GSAP", "Tailwind CSS"],
      stats: { "Luxury Leads": "+62%", "Asset Size": "Opt-2.1MB", "Retention": "+25%" }
    },
    {
      id: "sovereign",
      title: "Sovereign Gym",
      subTitle: "Sovereign Performance Club",
      tag: "Fitness · Brand Experience",
      tagBg: "bg-[#0f172a] text-white",
      description: "A premium fitness and wellness website built for performance-driven boxing, strength training, and elite member engagement.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      stats: { "Membership Growth": "+38%", "Class Attendance": "96%", "Lead Rate": "+42%" }
    }
  ].map(project => ({
    ...project,
    images: (imageMap[project.id] ?? [])
      .sort((a, b) => a.index - b.index)
      .map(item => item.url)
  }));

  const currentProjData = projects.find(p => p.id === selectedProject);
  const totalPages = currentProjData?.images.length ?? 0;

  const openProject = (id: string) => {
    setCurrentPage(0);
    setSelectedProject(id);
  };

  return (
    <section id="portfolio" className="bg-base pt-24 pb-32 text-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-coral text-xs tracking-widest uppercase font-mono mb-4 font-bold"
          >
            // Selected Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-black text-white leading-tight"
          >
            Brands We've <span className="text-coral">Built</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-sm md:text-lg mt-6 text-gray-400"
          >
            Every pixel is intentional. Every load time is optimized. We design and deliver bespoke high-contrast platforms that make your business impossible to ignore.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {projects.map((proj, idx) => {
            const isFullWidth = idx === 0;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                onClick={() => openProject(proj.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group border border-white/5 shadow-2xl flex flex-col justify-end ${
                  isFullWidth ? 'md:col-span-2 h-125' : 'col-span-1 h-110 md:h-115'
                }`}
              >
                {/* BG image + fallback */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#1A1917]">
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <ExternalLink className="w-7 h-7 text-white/20" />
                    </div>
                    <p className="text-white/20 text-xs font-mono text-center px-8 leading-relaxed">
                      Add {proj.id}-1.jpg to<br />/public/assets/portfolio/
                    </p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                {/* Top bar */}
                <div className="p-6 md:p-8 absolute top-0 left-0 right-0 z-20 flex justify-between items-center pointer-events-none">
                  <span className={`text-[10px] md:text-xs uppercase font-extrabold px-3 py-1.5 rounded-full tracking-wider shadow-md ${proj.tagBg}`}>
                    {proj.tag}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Search className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom content */}
                <div className="p-6 md:p-8 relative z-20 mt-auto text-left">
                  <h3 className="text-3xl md:text-4xl font-display font-black text-white group-hover:text-coral transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-gray-300 font-body text-xs md:text-sm max-w-2xl mb-4 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[10px] bg-white/10 text-white border border-white/10 rounded-md px-2 py-0.5 font-mono">{t}</span>
                    ))}
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 bg-coral text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                      View All Pages →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && currentProjData && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-4 md:p-8 overflow-y-auto flex items-center justify-center"
            onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}
          >
            <div className="w-full max-w-5xl bg-[#161514] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh]">

              {/* Left: image viewer */}
              <div className="w-full md:w-3/5 bg-black/50 flex flex-col border-b md:border-b-0 md:border-r border-white/10">
                {/* Browser chrome */}
                <div className="bg-[#1A1814] px-4 py-2 border-b border-white/5 flex items-center gap-2 shrink-0">
                  <div className="flex gap-1">
                    <span onClick={() => setSelectedProject(null)} className="w-2.5 h-2.5 rounded-full bg-rose-500 cursor-pointer block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block" />
                  </div>
                  <div className="flex-1 bg-black/40 rounded px-3 py-1 text-[10px] text-gray-500 font-mono text-center truncate">
                    pixfliq.in/{selectedProject} — Page {currentPage + 1} of {totalPages}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 overflow-y-auto max-h-[40vh] md:max-h-[75vh] relative bg-[#1A1917]">
                  <img
                    key={currentProjData.images[currentPage]}
                    src={currentProjData.images[currentPage]}
                    alt={`${currentProjData.title} page ${currentPage + 1}`}
                    className="w-full h-auto object-cover object-top relative z-10"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <ExternalLink className="w-9 h-9 text-white/20" />
                    </div>
                    <p className="text-white/30 text-xs font-mono text-center">
                      /public/assets/portfolio/{selectedProject}-{currentPage + 1}.jpg
                    </p>
                  </div>
                </div>

                {/* Page nav */}
                <div className="shrink-0 bg-base border-t border-white/5 px-4 py-3 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                    disabled={currentPage === 0}
                    className="flex items-center gap-1.5 text-[11px] font-bold text-white/60 hover:text-white disabled:opacity-25 transition-all px-3 py-1.5 rounded-full hover:bg-white/5"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" /> Prev
                  </button>
                  <div className="flex gap-1.5">
                    {currentProjData.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`rounded-full transition-all duration-300 ${
                          i === currentPage ? 'w-5 h-2 bg-coral' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                    disabled={currentPage === totalPages - 1}
                    className="flex items-center gap-1.5 text-[11px] font-bold text-white/60 hover:text-white disabled:opacity-25 transition-all px-3 py-1.5 rounded-full hover:bg-white/5"
                  >
                    Next <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right: case study */}
              <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-[90vh]">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-coral uppercase font-bold">// Studio Case File</span>
                    <button onClick={() => setSelectedProject(null)} className="p-1.5 text-gray-400 hover:text-white bg-white/5 rounded-full transition-colors cursor-pointer">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-3xl font-display font-black text-white mb-2">{currentProjData.title}</h3>
                  <p className="text-sm font-semibold text-coral mb-4">{currentProjData.subTitle}</p>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    This project highlights a high-fidelity digital presence customized from the ground up for elite client engagement. Focused entirely on clean typography grids, precise visual alignment, responsive breakpoints, and cinematic layouts that elevate the brand value instantly.
                  </p>

                  {/* Thumbnails */}
                  <div className="mb-6">
                    <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-2">All Pages</p>
                    <div className="flex gap-2 flex-wrap">
                      {currentProjData.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i)}
                          className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-[#1A1917] ${
                            i === currentPage ? 'border-coral shadow-lg shadow-coral/30' : 'border-white/10 hover:border-white/30'
                          }`}
                        >
                          <img
                            src={img} alt={`Page ${i + 1}`}
                            className="w-full h-full object-cover object-top"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                          />
                          <span className="absolute bottom-0.5 right-1 text-[8px] font-bold text-white/60">{i + 1}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* CTAs */}
                <div className="border-t border-white/5 pt-6 flex flex-col gap-3 mt-6">
                  <button
                    onClick={() => { setSelectedProject(null); onStartProject(); }}
                    className="w-full bg-coral hover:bg-coral/90 text-white font-bold text-xs py-3 rounded-full shadow-lg transition-all"
                  >
                    Build Something Similar
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full border border-white/10 hover:bg-white/5 text-white/80 font-semibold text-xs py-3 rounded-full transition-all"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}