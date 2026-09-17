import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, ShieldCheck, Clock, Palette, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHY_BRANDS_MOVE_TO_US } from '../data/studioData';
import { WhatWeDo } from './WhatWeDo';
import { NineProcesses } from './NineProcesses';

export const Services: React.FC = () => {
  const getWhyIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return ShieldCheck;
      case 1:
        return Clock;
      case 2:
        return Palette;
      case 3:
      default:
        return PenTool;
    }
  };

  return (
    <section id="services" className="relative text-[#f5f7fa] overflow-hidden scroll-mt-20">
      {/* ──────────────────────────────────────────────────────────
          SECTION 1: WHAT WE DO (11 Full Service Cards)
      ────────────────────────────────────────────────────────── */}
      <WhatWeDo sectionNumber="01 / Capabilities & Scope" />

      {/* ──────────────────────────────────────────────────────────
          SECTION 2: WHY BRANDS MOVE TO US (4 Problem-Solver Cards)
      ────────────────────────────────────────────────────────── */}
      <div className="py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-14 border-t border-[#081c2d]/10 bg-[#f5f7fa] text-[#081c2d]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#081c2d]/10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono text-[#1f7a63] font-semibold">
                  02 / The ShelterBrand Distinction
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif letter-tight text-[#081c2d]">
                Why brands move to us
              </h2>
            </div>

            <p className="max-w-md text-xs sm:text-sm text-[#081c2d]/70 font-sans leading-relaxed">
              Four problems we hear on almost every first call. Here is how we eliminate them completely.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-12">
            {WHY_BRANDS_MOVE_TO_US.map((item, idx) => {
              const Icon = getWhyIcon(idx);
              return (
                <motion.div
                  key={item.number}
                  id={`why-card-${item.number}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className="relative p-8 sm:p-10 rounded-[28px] bg-white border border-[#081c2d]/10 hover:border-[#1f7a63]/70 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-10px_rgba(8,28,45,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(31,122,99,0.18)] overflow-hidden"
                >
                  {/* Luminous Animated Top Accent Hairline on Hover */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#1f7a63] to-transparent opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-out origin-center pointer-events-none" />

                  <div>
                    {/* Top Icon & Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#1f7a63]/10 border border-[#1f7a63]/20 flex items-center justify-center text-[#1f7a63] group-hover:bg-[#1f7a63] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-sm text-[#081c2d]/40 font-semibold group-hover:text-[#1f7a63] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#081c2d] mb-4 leading-tight group-hover:text-[#1f7a63] transition-colors">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-[#081c2d]/75 leading-relaxed font-sans mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Outcome Highlight Tag */}
                  <div className="pt-6 border-t border-[#081c2d]/10 group-hover:border-[#081c2d]/20 transition-colors flex items-center justify-between">
                    <span className="text-xs font-medium font-mono text-[#081c2d]/90 flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#1f7a63]" />
                      <span>{item.highlight}</span>
                    </span>

                    <Link
                      to="/contact"
                      className="text-[11px] font-mono font-semibold text-[#1f7a63] hover:text-[#081c2d] transition-colors flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3: NINE PROCESSES. ONE ROOF.
      ────────────────────────────────────────────────────────── */}
      <NineProcesses sectionNumber="03 / In-House Production House" />
    </section>
  );
};
