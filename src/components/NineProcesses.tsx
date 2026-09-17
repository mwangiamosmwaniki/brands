import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Sparkles, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NINE_PROCESSES } from '../data/studioData';
import { InHouseProcess } from '../types';

interface NineProcessesProps {
  sectionNumber?: string;
  className?: string;
}

export const NineProcesses: React.FC<NineProcessesProps> = ({
  sectionNumber = '02 / In-House Machinery & Craft',
  className = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Commercial & Collateral',
    'Direct-To-Film Textile',
    'Multi-Needle Dimensional',
    'Outdoor & Structural Media',
    'Precision Fiber Laser',
  ];

  const filteredProcesses =
    selectedCategory === 'All'
      ? NINE_PROCESSES
      : NINE_PROCESSES.filter(
          (p) =>
            p.tag?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            p.title.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <section
  id="nine-processes"
  data-theme="light"
  className={`py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-14 bg-[#f5f7fa] text-[#081c2d] relative overflow-hidden scroll-mt-20 ${className}`}
> 
      {/* Ambient Atelier Glow in Background */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-[#1f7a63]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-[#1f7a63]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 sm:pb-12 border-b border-[#081c2d]/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono text-[#081c2d]/60">
  {sectionNumber}
</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif letter-tight text-[#1f7a63]">
  Nine processes. One roof.
</h2>
          </div>

          <div className="max-w-lg">
            <p className="text-xs sm:text-sm text-[#081c2d]/75 font-sans leading-relaxed mb-4">
              Most Nairobi suppliers broker jobs across scattered third-party workshops. Every single process below runs directly inside our own Ngara atelier: guaranteeing color fidelity, uncompromised quality control, and hard-deadline delivery.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1f7a63]/15 border border-[#1f7a63]/30 text-[11px] font-mono text-[#1f7a63]">
              <Sparkles className="w-3 h-3" />
              <span>100% In-House Machinery · Zero Third-Party Brokers</span>
            </div>
          </div>
        </div>

        {/* Process Counter and Filter Tabs */}
        <div className="mt-8 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#081c2d]/70">
  Featuring <span className="text-[#1f7a63] font-semibold">{NINE_PROCESSES.length}</span> In-House Disciplines
</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#081c2d]/20" />
<span className="hidden sm:inline-block text-[11px] font-mono text-[#081c2d]/50">
  Ngara Workshop · Nairobi
</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['All', 'Paper & Print', 'Apparel & Fabric', 'Rigid & Laser', 'Signage'].map((cat) => {
              const isActive =
                (cat === 'All' && selectedCategory === 'All') ||
                (cat === 'Paper & Print' && selectedCategory === 'Commercial & Collateral') ||
                (cat === 'Apparel & Fabric' &&
                  (selectedCategory === 'Direct-To-Film Textile' || selectedCategory === 'Multi-Needle Dimensional')) ||
                (cat === 'Rigid & Laser' && selectedCategory === 'Precision Fiber Laser') ||
                (cat === 'Signage' && selectedCategory === 'Outdoor & Structural Media');

              const handleClick = () => {
                if (cat === 'All') setSelectedCategory('All');
                else if (cat === 'Paper & Print') setSelectedCategory('Commercial & Collateral');
                else if (cat === 'Apparel & Fabric') setSelectedCategory('Direct-To-Film Textile');
                else if (cat === 'Rigid & Laser') setSelectedCategory('Precision Fiber Laser');
                else if (cat === 'Signage') setSelectedCategory('Outdoor & Structural Media');
              };

              return (
                <button
                  key={cat}
                  onClick={handleClick}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1f7a63] text-white shadow-md font-semibold'
                      : 'bg-white hover:bg-slate-50 text-[#081c2d]/70 border border-[#081c2d]/15 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Redesigned 9 Process Cards Grid (Compact & Sleek) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProcesses.map((process, idx) => (
            <motion.div
              key={process.number}
              id={`homepage-process-card-${process.number}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } 
              }}
              whileTap={{ scale: 0.99 }}
              className="relative rounded-[20px] bg-[#0c2438] border border-white/10 hover:border-[#1f7a63] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-[0_22px_45px_-10px_rgba(31,122,99,0.35)] select-none cursor-pointer"
            >
              {/* Luminous Animated Top Accent Hairline on Hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#1f7a63] to-transparent opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-out origin-center z-20 pointer-events-none" />

              {/* Card Image Header (Compact Aspect Ratio) */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
                {process.image && (
                  <img
                    src={process.image}
                    alt={`${process.title} production at ShelterBrand Nairobi`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100 pointer-events-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2438] via-[#0c2438]/40 to-transparent" />

                {/* Badges Over Image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-full bg-[#081c2d]/85 backdrop-blur-md text-[#f5f7fa] border border-white/10 group-hover:border-[#1f7a63] transition-colors">
                    {process.number}
                  </span>
                  {process.tag && (
                    <span className="text-[9px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-[#081c2d]/85 backdrop-blur-md text-[#9aa3a8] border border-white/10 group-hover:border-[#1f7a63]/40 group-hover:text-white transition-colors">
                      {process.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif text-[#f5f7fa] group-hover:text-white transition-colors leading-snug mb-1.5">
                    {process.title}
                  </h3>

                  <p className="text-xs text-[#f5f7fa]/75 leading-relaxed font-sans mb-3 line-clamp-3">
                    {process.description}
                  </p>

                  {/* Best For Tagline */}
                  {process.bestFor && (
                    <div className="pt-1 pb-2">
                      <span className="text-[10.5px] font-mono text-[#1f7a63] flex items-center gap-1.5 leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63] shrink-0" />
                        <span className="line-clamp-1">Best for: {process.bestFor}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Action Link to /contact */}
                <div className="mt-3 pt-3 border-t border-white/10 group-hover:border-white/20 transition-colors flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#9aa3a8]/70">
                    In-House Equipment
                  </span>
                  <Link
                    to="/contact"
                    state={{ service: process.title }}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#1f7a63] group-hover:text-white transition-colors"
                  >
                    <span>Request Run</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Atelier Guarantee Footer Banner */}
        <div className="mt-14 sm:mt-16 p-8 sm:p-10 rounded-[28px] bg-gradient-to-r from-[#0c2438] to-[#081c2d] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#1f7a63]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#1f7a63] font-semibold">
                Multi-Process Bundling
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#f5f7fa] leading-tight">
              Combine multiple processes into one unified project run
            </h3>
            <p className="text-xs sm:text-sm text-[#9aa3a8]/90 mt-2 font-sans leading-relaxed">
              Have branded apparel, corporate merchandise, office vinyl, and presentation boxes all coordinated together on a single schedule with zero third-party markups.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0">
            <Link
              to="/services"
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-mono uppercase tracking-wider text-center transition-colors"
            >
              Explore All Specs
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-full bg-[#1f7a63] hover:bg-[#165b4a] text-white text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors shadow-lg cursor-pointer"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
