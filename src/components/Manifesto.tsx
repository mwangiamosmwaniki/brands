import React from 'react';
import { motion } from 'motion/react';
import { STUDIO_DETAILS } from '../data/studioData';
import { CheckCircle2, Award, Printer, ShieldCheck } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto overflow-hidden scroll-mt-20 text-[#081c2d]"
    >
      <span id="manifesto" className="sr-only" />
      {/* Editorial Section Label */}
      <div className="flex items-center gap-3 mb-10 sm:mb-14">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60 text-[#081c2d]">
          Our Story & Approach
        </span>
        <div className="h-px w-12 bg-[#1f7a63]/30" />
      </div>

      {/* Huge Typographic Statement with generous whitespace */}
      <div className="space-y-8 lg:space-y-12 mb-16 sm:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-[4.75rem] font-serif leading-[0.98] letter-tight text-[#081c2d]"
        >
          Good design gets attention.{' '}
          <span className="italic font-normal text-[#1f7a63]">
            Great brands stay with you.
          </span>
        </motion.h2>

        {/* Supporting Editorial Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 pt-6 border-t border-[#081c2d]/10"
        >
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60 text-[#081c2d]">
              The ShelterBrand Way
            </p>
            <p className="text-sm text-[#1f7a63] mt-2 font-medium">
              Nairobi · Thoughtful Design · In-House Craft
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-2xl font-light text-[#081c2d]/90 leading-relaxed font-serif">
              {STUDIO_DETAILS.manifestoBody}
            </p>

            <p className="text-sm sm:text-base text-[#081c2d]/70 leading-relaxed font-sans">
              Design should never feel like surface decoration. Good design solves real problems, tells an honest story, and builds lasting trust. When thoughtful ideas are paired with quality materials—crisp papers, rich inks, and careful finishing—your brand becomes something tangible that customers want to hold on to, share, and remember.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Editorial Proof Numbers / Credibility Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-b border-[#081c2d]/10 py-10"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-[#1f7a63] font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Experience</span>
          </div>
          <div className="text-3xl sm:text-4xl font-serif letter-tight text-[#081c2d]">2+</div>
          <p className="text-xs text-[#081c2d]/60 leading-tight">Years helping businesses grow and stand out</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-[#1f7a63] font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Brands Built</span>
          </div>
          <div className="text-3xl sm:text-4xl font-serif letter-tight text-[#081c2d]">10+</div>
          <p className="text-xs text-[#081c2d]/60 leading-tight">Unique brand identities created with care</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-[#1f7a63] font-mono">
            <Printer className="w-3.5 h-3.5" />
            <span>Items Printed</span>
          </div>
          <div className="text-3xl sm:text-4xl font-serif letter-tight text-[#081c2d]">50+</div>
          <p className="text-xs text-[#081c2d]/60 leading-tight">Quality pieces printed and delivered</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-[#1f7a63] font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Hand-Checked</span>
          </div>
          <div className="text-3xl sm:text-4xl font-serif letter-tight text-[#081c2d]">100%</div>
          <p className="text-xs text-[#081c2d]/60 leading-tight">Inspected by hand before leaving our shop</p>
        </div>
      </motion.div>
    </section>
  );
};
