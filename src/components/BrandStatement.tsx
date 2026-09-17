import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers } from 'lucide-react';
import { ATELIER_IMAGE, STUDIO_DETAILS } from '../data/studioData';

export const BrandStatement: React.FC = () => {
  const scrollToProcess = () => {
    const el = document.getElementById('process');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="brand-statement"
      className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-8"
    >
      {/* Background Photography of Printing Atelier & Creative Workshop */}
      <div className="absolute inset-0 z-0">
        <img
          src={ATELIER_IMAGE}
          alt="ShelterBrand printing atelier and craft workshop"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Rich dark editorial film tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081c2d]/95 via-[#081c2d]/80 to-[#081c2d]/90" />
        <div className="absolute inset-0 bg-[#1f7a63]/20 mix-blend-color-burn" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f7fa]/10 backdrop-blur-md border border-[#f5f7fa]/20 text-[10px] font-mono uppercase tracking-[0.2em] text-[#9aa3a8] mb-8"
        >
          <Layers className="w-3.5 h-3.5 text-[#1f7a63]" />
          <span>Design Studio & Print Workshop</span>
        </motion.div>

        {/* Oversized Statement Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif letter-tight text-[#f5f7fa] leading-[0.98] mb-6 sm:mb-8"
        >
          “From the first sketch <br className="hidden sm:inline" />
          to the{' '}
          <span className="italic text-[#1f7a63]">
            final print.”
          </span>
        </motion.h2>

        {/* Supporting Typography */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-[14px] sm:text-base text-[#f5f7fa]/80 leading-relaxed mb-10 font-sans"
        >
          {STUDIO_DETAILS.statementSub}
        </motion.p>

        {/* Interactive CTA */}
        <motion.button
          id="statement-cta-btn"
          onClick={scrollToProcess}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#f5f7fa] hover:bg-[#1f7a63] text-[#081c2d] hover:text-[#f5f7fa] text-[12px] font-medium tracking-wide uppercase transition-all duration-300 shadow-xl cursor-pointer"
        >
          <span>See how we work</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </section>
  );
};
