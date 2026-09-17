import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STUDIO_DETAILS } from '../data/studioData';

export const CtaSection: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(STUDIO_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="new-engagements"
      data-theme="dark"
      className="relative min-h-[90vh] sm:min-h-screen py-24 sm:py-36 px-4 sm:px-8 lg:px-14 bg-[#081c2d] text-[#f5f7fa] flex flex-col justify-between overflow-hidden scroll-mt-20"
    >
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1f7a63]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between flex-1">
        {/* Section Label */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60 text-[#9aa3a8]">
              05 / New Engagements
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#9aa3a8]/60 uppercase tracking-widest">
            Accepting Q2 & Q3 2026 Commissions
          </span>
        </div>

        {/* Center Dramatic Full-Screen CTA */}
        <div className="py-16 sm:py-24 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-7xl lg:text-[6rem] font-serif letter-tight text-[#f5f7fa] leading-[0.95] mb-6 sm:mb-8"
          >
            Have a brand <br />
            <span className="italic text-[#1f7a63]">
              worth building?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-xl text-[#9aa3a8] font-light max-w-2xl leading-relaxed mb-10 sm:mb-12 font-sans"
          >
            Let's turn your next idea into something people can see, feel and remember.
          </motion.p>

          {/* Magnetic Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link
              id="cta-start-project-btn"
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#1f7a63] hover:bg-[#165b4a] text-[#f5f7fa] text-[13px] font-medium tracking-wide uppercase transition-all duration-300 shadow-xl"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white text-[12px] font-mono tracking-wider border border-white/10 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-[#1f7a63]" /> : <Copy className="w-4 h-4 text-[#1f7a63]" />}
              <span>{copied ? 'Email Copied!' : STUDIO_DETAILS.email}</span>
            </button>
          </motion.div>
        </div>

        {/* Contact Information Footer Strip */}
        <div className="pt-12 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1f7a63]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location</span>
            </div>
            <p className="text-base font-display font-semibold text-[#f5f7fa]">Nairobi, Kenya</p>
            <p className="text-xs text-[#9aa3a8]/70">{STUDIO_DETAILS.fullAddress}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1f7a63]">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Inquiries</span>
            </div>
            <a
              href={`mailto:${STUDIO_DETAILS.email}`}
              className="text-base font-display font-semibold text-[#f5f7fa] hover:text-[#1f7a63] transition-colors block"
            >
              {STUDIO_DETAILS.email}
            </a>
            <p className="text-xs text-[#9aa3a8]/70">Average proposal response: &lt; 24 hours</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1f7a63]">
              <Phone className="w-3.5 h-3.5" />
              <span>Studio Desk</span>
            </div>
            <a
              href={`tel:${STUDIO_DETAILS.phone.replace(/\s+/g, '')}`}
              className="text-base font-display font-semibold text-[#f5f7fa] hover:text-[#1f7a63] transition-colors block font-mono"
            >
              {STUDIO_DETAILS.phone}
            </a>
            <p className="text-xs text-[#9aa3a8]/70">Mon — Fri, 8:30 AM – 6:00 PM EAT</p>
          </div>
        </div>
      </div>
    </section>
  );
};
