import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/studioData';

interface ProcessProps {
  sectionNumber?: string;
  subtitle?: string;
}

export const Process: React.FC<ProcessProps> = ({
  sectionNumber = '04 / Workflow & Production Rigor',
  subtitle = 'How we work',
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="process"
      data-theme="light"
      className="py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-14 bg-[#f5f7fa] text-[#081c2d] relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#081c2d]/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-semibold text-[#1f7a63]">
                {sectionNumber}
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-[0.95] letter-tight text-[#081c2d]">
              {subtitle}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-[#081c2d]/60 uppercase tracking-widest">Interactive Timeline:</span>
            <div className="flex gap-1.5 bg-[#081c2d]/5 p-1.5 rounded-full border border-[#081c2d]/10">
              {PROCESS_STEPS.map((step, idx) => (
                <button
                  key={step.number}
                  id={`process-tab-${step.number}`}
                  onClick={() => setActiveStep(idx)}
                  className={`w-7 h-7 rounded-full text-xs font-mono font-bold transition-all ${
                    activeStep === idx
                      ? 'bg-[#081c2d] text-[#f5f7fa] shadow-sm'
                      : 'text-[#081c2d]/70 hover:bg-[#081c2d]/10'
                  }`}
                >
                  {step.number}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Minimalist Horizontal Step Track (Desktop Horizontal / Mobile Vertical) */}
        <div className="pt-12 sm:pt-16">
          {/* Active Step Highlight Card (Editorial Deep Dive) */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 p-8 sm:p-12 rounded-[28px] sm:rounded-[32px] bg-[#081c2d] text-[#f5f7fa] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-8xl sm:text-9xl font-serif font-bold text-white/[0.03] pointer-events-none select-none">
              {PROCESS_STEPS[activeStep].number}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1f7a63]/20 border border-[#1f7a63]/40 text-[#9aa3a8] text-[10px] font-mono uppercase tracking-widest">
                  <span>Phase {PROCESS_STEPS[activeStep].number}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#1f7a63]" />
                    {PROCESS_STEPS[activeStep].timeline}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif letter-tight text-[#f5f7fa]">
                  {PROCESS_STEPS[activeStep].title}
                </h3>

                <p className="text-[11px] uppercase tracking-[0.2em] text-[#9aa3a8] font-mono">
                  {PROCESS_STEPS[activeStep].tagline}
                </p>

                <p className="text-[14px] sm:text-base text-[#f5f7fa]/80 leading-relaxed pt-2 font-sans">
                  {PROCESS_STEPS[activeStep].description}
                </p>
              </div>

              <div className="lg:col-span-7 bg-[#0c2438] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#1f7a63]">
                  Tangible Deliverables at this Stage
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f5f7fa]/90">
                      <CheckCircle className="w-4 h-4 text-[#1f7a63] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-between items-center text-xs text-[#9aa3a8]/70 border-t border-white/10">
                  <span>All stages documented in client portal</span>
                  <button
                    onClick={() => setActiveStep((activeStep + 1) % PROCESS_STEPS.length)}
                    className="inline-flex items-center gap-1 text-[#1f7a63] hover:text-white font-medium transition-colors"
                  >
                    <span>Next: {PROCESS_STEPS[(activeStep + 1) % PROCESS_STEPS.length].title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sequential 5-Step Process Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  id={`process-card-${step.number}`}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#081c2d] shadow-md -translate-y-1 ring-1 ring-[#081c2d]'
                      : 'bg-white/70 border-[#081c2d]/10 hover:border-[#081c2d]/30 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-sm font-mono font-bold ${
                          isSelected ? 'text-[#1f7a63]' : 'text-[#081c2d]/40'
                        }`}
                      >
                        {step.number}
                      </span>
                      <span className="text-[11px] font-mono text-[#081c2d]/50">
                        {step.timeline}
                      </span>
                    </div>

                    <h4 className="text-xl font-display font-bold text-[#081c2d] mb-2">
                      {step.title}
                    </h4>

                    <p className="text-xs text-[#081c2d]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#081c2d]/10 flex items-center justify-between text-xs font-medium">
                    <span className={isSelected ? 'text-[#1f7a63]' : 'text-[#081c2d]/60'}>
                      {isSelected ? 'Active Phase' : 'View Scope'}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'translate-x-1 text-[#1f7a63]' : 'text-[#081c2d]/40'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
