import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { WHY_PILLARS } from '../data/studioData';

export const WhyShelterBrand: React.FC = () => {
  return (
    <section
      id="why"
      className="py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-14 bg-[#081c2d] text-[#f5f7fa] relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60 text-[#9aa3a8]">
                Why Work With Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-[0.95] letter-tight text-[#f5f7fa]">
              Why ShelterBrand
            </h2>
          </div>

          <p className="max-w-md text-[13px] sm:text-[14px] text-[#9aa3a8]/90 leading-relaxed font-sans">
            We bring thoughtful design and in-house printing together. That means you get strategic brand thinking, clean artwork, and dependable quality from one friendly team.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-12 sm:pt-16">
          {WHY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] bg-[#0c2438] border border-white/10 hover:border-[#1f7a63]/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono text-[#1f7a63] uppercase tracking-[0.2em]">
                    Pillar 0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9aa3a8]">
                    <Sparkles className="w-3.5 h-3.5 text-[#1f7a63]" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#f5f7fa] mb-2 letter-tight">
                  {pillar.title}
                </h3>

                <p className="text-sm italic text-[#9aa3a8] mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-[13px] sm:text-[14px] text-[#f5f7fa]/70 leading-relaxed mb-6 font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2">
                {pillar.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-xs text-[#f5f7fa]/80 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
