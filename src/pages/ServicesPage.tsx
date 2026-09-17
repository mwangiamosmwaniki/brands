import React from 'react';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { motion } from 'motion/react';
import { ArrowUpRight, Printer, Layers, Compass, Scissors, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const atelierEquipment = [
    {
      icon: Printer,
      title: 'Letterpress & Relief Printing',
      detail: 'Classic Heidelberg letterpresses that press deep, crisp textures into thick, premium paper.',
    },
    {
      icon: Layers,
      title: 'Foil Stamping & Embossing',
      detail: 'Metallic foils in gold, silver, copper, or custom colors, paired with sharp raised 3D textures.',
    },
    {
      icon: Scissors,
      title: 'Custom Boxes & Packaging',
      detail: 'Custom shapes, sturdy rigid boxes with magnetic lids, luxury sleeves, and hand-bound booklets.',
    },
    {
      icon: Compass,
      title: 'Screen Printing & Colored Edges',
      detail: 'Vibrant inks printed on colored papers, finished with painted or metallic foiled edges on thick cards.',
    },
  ];

  const processFaqs = [
    {
      q: 'How long does a typical complete identity & print project take?',
      a: 'Comprehensive brand identity and bespoke print execution typically spans 6 to 10 weeks. This ensures ample time for physical ink proofs, tactile paper dummies, and iterative craftsmanship.',
    },
    {
      q: 'Can we be involved in the press-check in person?',
      a: 'Absolutely. We encourage clients to join us at the atelier during the initial pull proofs to approve ink weights, registration, and foil impressions under studio lighting.',
    },
    {
      q: 'Do you work with international clients outside Kenya?',
      a: 'Yes. Over 40% of our commissions originate in Europe, North America, and across the African continent. We dispatch sample kits and physical paper proofs internationally via tracked courier.',
    },
    {
      q: 'What is required to initiate a project?',
      a: 'We begin with an exploratory dialogue to review your goals, scope, and target milestones. A formal proposal and production schedule is issued within 48 hours.',
    },
  ];

  return (
    <div className="pt-20 sm:pt-28 min-h-screen bg-[#081c2d] text-[#f5f7fa]">
      {/* Quick In-Page Anchor Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none text-[11px] font-mono uppercase tracking-wider text-[#9aa3a8]">
          <span className="text-[#1f7a63] font-semibold shrink-0">Jump To:</span>
          <a
            href="#what-we-do"
            className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors shrink-0"
          >
            Capabilities
          </a>
          <a
            href="#machinery"
            className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors shrink-0"
          >
            Equipment
          </a>
          <a
            href="#process"
            className="px-3 py-1 rounded-full bg-[#1f7a63]/20 text-[#2dd4bf] hover:bg-[#1f7a63]/30 transition-colors shrink-0 font-bold"
          >
            5-Step Process
          </a>
          <a
            href="#faqs"
            className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors shrink-0"
          >
            FAQs
          </a>
        </div>
      </div>

      {/* 1. Main Capabilities Overview (What We Do + Problem Solvers + 9 In-House Workshops) */}
      <Services />

      {/* 2. Production Infrastructure / Atelier Standards Section */}
      <section
        id="machinery"
        data-theme="dark"
        className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 border-t border-white/10 bg-[#081c2d] scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#2dd4bf]">
                In-House Printing Workshop
              </span>
              <h3 className="text-3xl sm:text-5xl font-serif letter-tight text-[#f5f7fa] mt-2">
                Our Printing Equipment & Techniques
              </h3>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[#9aa3a8]/90 font-sans leading-relaxed">
              We print everything in our own shop rather than outsourcing to third parties, giving us direct control over print quality, colors, and finishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            {atelierEquipment.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-6 rounded-[24px] bg-[#0c2438] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[#1f7a63]">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-serif text-[#f5f7fa] mb-3 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#f5f7fa]/70 leading-relaxed font-sans">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs font-mono text-[#9aa3a8]">
              Need custom sizes, unique paper samples, or a prototype?
            </span>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#1f7a63] hover:bg-[#165b4a] text-[#f5f7fa] rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0 shadow-lg cursor-pointer"
            >
              <span>Talk to Our Print Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. The 5-Phase End-to-End Production Process (Moved from Process page) */}
      <Process sectionNumber="04 / End-to-End Production Process" />

      {/* 4. Process & Production FAQs Section */}
      <section
        id="faqs"
        data-theme="light"
        className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 border-t border-[#081c2d]/10 bg-[#f5f7fa] text-[#081c2d] scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#081c2d]/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-[#1f7a63]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-semibold text-[#1f7a63]">
                  Engagement Transparency
                </span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-serif letter-tight text-[#081c2d]">
                Frequently Asked Inquiries
              </h3>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[#081c2d]/70 font-sans leading-relaxed">
              Everything you need to know about commissioning an atelier engagement from discovery and proofs to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            {processFaqs.map((faq, idx) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 rounded-[24px] bg-white border border-[#081c2d]/10 shadow-xs hover:border-[#1f7a63]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-[10px] font-mono text-[#1f7a63] font-bold">Q0{idx + 1}</span>
                  <h4 className="text-lg font-serif text-[#081c2d] leading-snug">
                    {faq.q}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#081c2d]/75 leading-relaxed font-sans pl-6">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Action Callout */}
          <div className="mt-16 pt-10 border-t border-[#081c2d]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs font-mono text-[#081c2d]/70">
              Have specific constraints, tight turnaround deadlines, or unique technical parameters?
            </span>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#081c2d] hover:bg-[#1f7a63] text-[#f5f7fa] rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0 shadow-sm cursor-pointer"
            >
              <span>Discuss Your Timeline</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
