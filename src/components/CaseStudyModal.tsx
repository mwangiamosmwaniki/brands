import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Printer, Sparkles, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireSimilar?: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  const navigate = useNavigate();
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#081c2d]/90 backdrop-blur-xl"
        />

        {/* Content Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#f5f7fa] text-[#081c2d] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-[#081c2d]/10 z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-[#081c2d]/10 bg-white/70 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1f7a63]">
                Case Study / {project.category}
              </span>
              <span className="text-[10px] font-mono text-[#081c2d]/40">· Year {project.year}</span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close case study modal"
              className="w-8 h-8 rounded-full bg-[#081c2d]/5 hover:bg-[#081c2d] hover:text-[#f5f7fa] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
            {/* Hero Image */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#081c2d] border border-[#081c2d]/10 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between text-white gap-4">
                <div>
                  <h3 className="text-3xl sm:text-5xl font-serif letter-tight">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#9aa3a8] mt-1 uppercase tracking-widest">{project.client}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#1f7a63]" />
                  Verified Production
                </span>
              </div>
            </div>

            {/* Editorial Overview & Challenge */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#1f7a63] mb-2">
                    Project Rationale & Execution
                  </h4>
                  <p className="text-lg sm:text-xl font-light text-[#081c2d] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#081c2d]/5 border border-[#081c2d]/10 space-y-2">
                  <h5 className="text-xs font-mono uppercase tracking-widest text-[#081c2d]/60">
                    Commercial & Cultural Impact
                  </h5>
                  <p className="text-sm sm:text-base font-medium text-[#081c2d]">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Disciplines Scope */}
              <div className="lg:col-span-4 bg-white/70 p-6 rounded-2xl border border-[#081c2d]/10 space-y-4">
                <h5 className="text-xs font-mono uppercase tracking-widest text-[#081c2d]/60">
                  Disciplines Executed
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.disciplines.map((d, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white rounded-lg text-xs font-medium text-[#081c2d] border border-[#081c2d]/10"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tactile Print Specifications Section */}
            <div className="pt-6 border-t border-[#081c2d]/10">
              <div className="flex items-center gap-2 mb-4">
                <Printer className="w-4 h-4 text-[#1f7a63]" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#1f7a63]">
                  Physical Print & Substrate Specifications
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {project.printSpecifications.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-white border border-[#081c2d]/10 flex items-start gap-2.5 text-xs font-mono text-[#081c2d]/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1f7a63] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footer CTA */}
            <div className="pt-6 border-t border-[#081c2d]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#081c2d]/60 font-mono">
                Looking for similar brand transformation or packaging architecture?
              </p>

              <button
                onClick={() => {
                  onClose();
                  navigate('/contact', {
                    state: {
                      projectTitle: project.title,
                      service: project.category,
                    },
                  });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#081c2d] hover:bg-[#1f7a63] text-[#f5f7fa] font-semibold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                <span>Inquire About Similar Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
