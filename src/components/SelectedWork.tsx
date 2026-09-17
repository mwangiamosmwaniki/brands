import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Filter, Layers } from 'lucide-react';
import { PROJECTS } from '../data/studioData';
import { Project } from '../types';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
  title?: string;
  subtitle?: string;
  showIntroHeader?: boolean;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProject,
  title = 'Selected work',
  subtitle = 'A curated archive of brand identities, packaging engineering, and tactile print editions produced in Nairobi for ambitious regional and global brands.',
  showIntroHeader = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Brand Identity',
    'Packaging',
    'Campaign',
    'Corporate Identity',
    'Print Campaign',
  ];

  const getCategoryCount = (category: string) => {
    if (category === 'All') return PROJECTS.length;
    return PROJECTS.filter((p) =>
      p.category.toLowerCase().includes(category.toLowerCase())
    ).length;
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <section
      id="work"
      className="pt-6 sm:pt-10 pb-24 sm:pb-32 lg:pb-40 px-4 sm:px-8 lg:px-14 bg-[#f5f7fa] text-[#081c2d] relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Category Filter Controls */}
        {showIntroHeader && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 sm:pb-14 border-b border-[#081c2d]/10"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#1f7a63] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.22em] font-mono font-semibold text-[#1f7a63]">
                  01 / Portfolio Showcase
                </span>
                <span className="text-[#081c2d]/30 font-mono text-xs">·</span>
                <span className="text-[10px] font-mono text-[#081c2d]/60">
                  {PROJECTS.length} Works Catalogued
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-[0.95] letter-tight text-[#081c2d]">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-[#081c2d]/70 max-w-xl">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-1.5 text-[10px] text-[#081c2d]/60 font-mono uppercase tracking-widest">
                <Filter className="w-3.5 h-3.5 text-[#1f7a63]" />
                <span>Filter Discipline:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {categories.map((cat) => {
                  const count = getCategoryCount(cat);
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setSelectedCategory(cat)}
                      className={`group relative px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none ${
                        isSelected
                          ? 'bg-[#081c2d] text-[#f5f7fa] shadow-md'
                          : 'bg-[#081c2d]/5 hover:bg-[#081c2d]/10 text-[#081c2d]/80'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full transition-colors ${
                          isSelected
                            ? 'bg-white/20 text-[#2dd4bf]'
                            : 'bg-black/5 text-[#081c2d]/50 group-hover:text-[#081c2d]'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Asymmetric Editorial Portfolio Grid with Staggered Scroll Reveal */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 pt-10 sm:pt-14"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Asymmetric editorial column balance (7 + 5, 5 + 7 rhythm)
              let colSpan = 'md:col-span-6';
              if (index % 4 === 0) colSpan = 'md:col-span-7';
              else if (index % 4 === 1) colSpan = 'md:col-span-5';
              else if (index % 4 === 2) colSpan = 'md:col-span-5';
              else if (index % 4 === 3) colSpan = 'md:col-span-7';

              // Harmonic stagger delay: offset adjacent columns so they breathe naturally into view
              const columnStaggerDelay = (index % 2) * 0.12;

              return (
                <motion.article
                  key={project.id}
                  id={`project-card-${project.id}`}
                  layout
                  initial={{ opacity: 0, y: 48, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.85,
                    delay: columnStaggerDelay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`${colSpan} group cursor-pointer flex flex-col justify-between`}
                  onClick={() => onSelectProject(project)}
                >
                  {/* Image Container with Scroll Curtain & Settle Reveal */}
                  <div
                    className={`relative w-full ${project.aspectRatio} rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#081c2d] border border-[#081c2d]/10 shadow-[0_10px_30px_rgba(8,28,45,0.06)] group-hover:shadow-[0_24px_54px_rgba(8,28,45,0.16)] transition-all duration-500`}
                  >
                    {/* Subtle Translucent Scroll Curtain (Softens ink contrast upon entering viewport) */}
                    <motion.div
                      initial={{ opacity: 0.3 }}
                      whileInView={{ opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: columnStaggerDelay + 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute inset-0 bg-[#081c2d]/25 z-10 pointer-events-none"
                    />

                    {/* Inner Image with Gentle Scroll Zoom-Settle & Hover Zoom */}
                    <motion.img
                      src={project.image}
                      alt={`${project.title} - ${project.category}`}
                      initial={{ scale: 1.08 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: columnStaggerDelay,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Ambient Contrast Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081c2d]/75 via-[#081c2d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                    {/* Quick View Tag on Hover with Smooth Floating Scale */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-11 h-11 rounded-full bg-[#f5f7fa]/95 backdrop-blur-md text-[#081c2d] flex items-center justify-center shadow-lg border border-white/60 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-[#1f7a63] group-hover:text-[#f5f7fa] transition-all duration-300 z-20">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    {/* Tactile Print Badge Indicator with Slide-in */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081c2d]/85 backdrop-blur-md text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#f5f7fa] border border-white/15 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-xl">
                      <Sparkles className="w-3.5 h-3.5 text-[#2dd4bf]" />
                      <span>Inspect Case Specs</span>
                    </div>
                  </div>

                  {/* Scroll-Triggered Hairline Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.75,
                      delay: columnStaggerDelay + 0.18,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="origin-left h-[1px] bg-[#081c2d]/10 w-full mt-5 sm:mt-6 mb-3"
                  />

                  {/* Project Metadata Information */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#081c2d] group-hover:text-[#1f7a63] transition-colors duration-300 letter-tight">
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#081c2d]/60 mt-1">
                        {project.category} <span className="text-[#081c2d]/30">·</span> {project.client}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono text-[#1f7a63] font-semibold bg-[#1f7a63]/10 px-2.5 py-0.5 rounded-full">
                        {project.year}
                      </span>
                      <span className="text-xs text-[#081c2d]/40 font-mono hidden sm:inline group-hover:text-[#081c2d] transition-colors">
                        [Details]
                      </span>
                    </div>
                  </div>

                  {/* Discipline Tags Preview */}
                  {project.disciplines && project.disciplines.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {project.disciplines.slice(0, 3).map((disc, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-0.5 rounded-full bg-[#081c2d]/5 text-[10px] font-mono text-[#081c2d]/70 tracking-wide"
                        >
                          {disc}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Portfolio Confidential Callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-3xl bg-white/85 backdrop-blur-sm border border-[#081c2d]/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1f7a63]/10 text-[#1f7a63] flex items-center justify-center shrink-0 hidden sm:flex">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-[#081c2d]">
                Looking for confidential or enterprise case studies?
              </h4>
              <p className="text-xs sm:text-sm text-[#081c2d]/70 mt-1 max-w-xl">
                We manage protected portfolios across banking, pharmaceutical security packaging, and regional luxury hospitality.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else window.location.href = '/contact';
            }}
            className="shrink-0 px-6 py-3 rounded-full bg-[#081c2d] hover:bg-[#1f7a63] text-[#f5f7fa] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            Request Private Folio
          </button>
        </motion.div>
      </div>
    </section>
  );
};
