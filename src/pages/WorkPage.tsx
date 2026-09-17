import React from 'react';
import { motion } from 'motion/react';
import { SelectedWork } from '../components/SelectedWork';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WorkPageProps {
  onSelectProject: (project: Project) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectProject }) => {
  return (
    <div className="pt-20 sm:pt-28 min-h-screen">
      {/* Portfolio Showcase Grid with Scroll-Triggered Reveal Animations */}
      <SelectedWork onSelectProject={onSelectProject} />

      {/* Commission Project Callout Banner with Scroll Reveal */}
      <section
        data-theme="dark"
        className="py-20 px-4 sm:px-8 lg:px-14 bg-[#081c2d] text-[#f5f7fa] border-t border-white/10"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#2dd4bf]">
              Ready to create something enduring?
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif letter-tight text-[#f5f7fa] mt-2">
              Commission your identity or print edition
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#1f7a63] hover:bg-[#165b4a] text-[#f5f7fa] rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>Initiate Project Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="px-6 py-4 rounded-full border border-white/20 hover:border-white/60 text-xs font-medium uppercase tracking-wider text-[#f5f7fa] transition-all duration-300 hover:bg-white/5 active:scale-95 cursor-pointer"
            >
              Explore Capabilities
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
