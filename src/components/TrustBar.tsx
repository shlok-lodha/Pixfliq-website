import { motion } from 'motion/react';

export default function TrustBar() {
  const marqueeText = "As seen in · 50+ Projects · India · UAE · UK · 4.5★ Average Rating · Trusted by Startups & Enterprises · ";
  const repeatedArray = Array(8).fill(marqueeText);

  return (
    <div className="relative w-full overflow-hidden bg-base border-t border-b border-border/10 py-5 select-none z-20 shadow-lg">
      <div className="flex w-max">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 22,
            ease: 'linear',
          }}
          className="flex whitespace-nowrap gap-4"
        >
          {repeatedArray.map((text, i) => (
            <span
              key={i}
              className="text-lime font-display font-extrabold uppercase text-sm md:text-base tracking-widest flex items-center"
            >
              {text}
              <span className="text-coral mx-3">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
