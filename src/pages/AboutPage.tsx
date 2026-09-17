import React from 'react';
import { Manifesto } from '../components/Manifesto';
import { BrandStatement } from '../components/BrandStatement';
import { WhyShelterBrand } from '../components/WhyShelterBrand';
import { motion } from 'motion/react';
import { Award, Compass, HeartHandshake, ShieldCheck, ArrowUpRight, Sparkles, Box } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const comparisonItems = [
    {
      criterion: 'From Design to Final Print',
      traditional:
        'Files are emailed to external print brokers, which often causes color shifts, delays, and misaligned trims.',
      shelterBrand:
        'Our design team works in the same space as our print specialists, testing colors and proofs together before running your job.',
    },
    {
      criterion: 'Paper & Material Selection',
      traditional:
        'Limited to standard glossy or matte flyer papers that look generic and get thrown away quickly.',
      shelterBrand:
        'A handpicked library of textured papers, warm cotton stocks, and sturdy boards you can see and feel in person.',
    },
    {
      criterion: 'Real Samples & Proofing',
      traditional:
        'You only see 3D computer previews, so you never really know how the finished item will feel until it arrives.',
      shelterBrand:
        'We make real physical mockups, paper dummies, and ink samples so you can hold your item and approve with total peace of mind.',
    },
    {
      criterion: 'Made to Last',
      traditional:
        'Fast, disposable materials that get handed out quickly and often end up in the trash.',
      shelterBrand:
        'Carefully crafted packaging, stationery, and branded items that people want to keep, use, and enjoy.',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Care in Every Detail',
      description:
        'We take genuine pride in the little things—from the spacing between letters and the richness of ink to the feel of a folded edge.',
    },
    {
      icon: ShieldCheck,
      title: 'Responsible, Quality Materials',
      description:
        'We source certified papers, long-lasting inks, and durable fabrics so your branded items look wonderful and hold up well over time.',
    },
    {
      icon: Compass,
      title: 'Rooted in Nairobi, Open to All',
      description:
        'We love the warmth and creativity of our city. We welcome local startups and international teams with the same attentive, friendly service.',
    },
    {
      icon: HeartHandshake,
      title: 'A True Partnership',
      description:
        'We treat you as a collaborator, not an order number. We listen to your ideas, keep you updated openly, and review samples together.',
    },
  ];

  return (
    <div className="pt-20 sm:pt-28 min-h-screen bg-[#f5f7fa] text-[#081c2d]">
      {/* ──────────────────────────────────────────────────────────
          1. STUDIO MANIFESTO & ORIGIN STORY
      ────────────────────────────────────────────────────────── */}
      <Manifesto />

      {/* ──────────────────────────────────────────────────────────
          2. BRAND VISUAL STATEMENT (The Atelier Press)
      ────────────────────────────────────────────────────────── */}
      <BrandStatement />

      {/* ──────────────────────────────────────────────────────────
          3. WHY SHELTERBRAND: 4 CORE STRATEGIC PILLARS
          Anchor: #why
      ────────────────────────────────────────────────────────── */}
      <WhyShelterBrand />

      {/* ──────────────────────────────────────────────────────────
          4. HOW WE COMPARE: TRADITIONAL AGENCIES VS SHELTERBRAND
      ────────────────────────────────────────────────────────── */}
      <section
        data-theme="dark"
        className="py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-14 border-t border-white/10 bg-[#081c2d] text-[#f5f7fa]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono text-[#9aa3a8]">
                  How We Compare
                </span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-serif letter-tight text-[#f5f7fa]">
                How we do things differently
              </h3>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[#9aa3a8]/90 font-sans leading-relaxed">
              Why business owners, marketing teams, and creative directors enjoy working directly with our workshop instead of traditional middlemen agencies.
            </p>
          </div>

          {/* Comparison Cards Matrix */}
          <div className="pt-12 space-y-4 sm:space-y-6">
            {comparisonItems.map((item, idx) => (
              <motion.div
                key={item.criterion}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 sm:p-8 rounded-[24px] bg-[#0c2438] border border-white/10 hover:border-white/20 transition-all items-center"
              >
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-mono text-[#1f7a63] uppercase tracking-wider block mb-1">
                    Point 0{idx + 1}
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif text-[#f5f7fa]">
                    {item.criterion}
                  </h4>
                </div>

                <div className="lg:col-span-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-[#f5f7fa]/60 font-sans leading-relaxed">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9aa3a8]/60 block mb-1.5">
                    Traditional Agencies
                  </span>
                  {item.traditional}
                </div>

                <div className="lg:col-span-4 p-4 sm:p-5 rounded-2xl bg-[#1f7a63]/10 border border-[#1f7a63]/30 text-xs text-[#f5f7fa] font-sans leading-relaxed">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#1f7a63] font-semibold block mb-1.5">
                    ShelterBrand Studio & Workshop
                  </span>
                  {item.shelterBrand}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          5. GUIDING VALUES
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#081c2d]/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#1f7a63]">
                What We Care About
              </span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-serif letter-tight text-[#081c2d]">
              The values that guide our work
            </h3>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#081c2d]/70 font-sans leading-relaxed">
            Founded in {STUDIO_DETAILS.foundingYear}, ShelterBrand was created to help ambitious businesses build real, memorable connections through thoughtful design and dependable craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-12">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 sm:p-10 rounded-[28px] bg-white/70 border border-[#081c2d]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#081c2d]/5 flex items-center justify-center mb-6 text-[#1f7a63]">
                  <val.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl sm:text-2xl font-serif text-[#081c2d] mb-3 letter-tight">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#081c2d]/75 leading-relaxed font-sans">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ──────────────────────────────────────────────────────────
            6. UNIFIED ACTION BANNER (Studio Visit & Sample Kit)
        ────────────────────────────────────────────────────────── */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-[32px] bg-[#081c2d] text-[#f5f7fa] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#1f7a63]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#9aa3a8]">
                Come Say Hello
              </span>
            </div>
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif letter-tight text-[#f5f7fa]">
              Want to see our work in person?
            </h4>
            <p className="text-xs sm:text-sm text-[#9aa3a8]/90 font-sans leading-relaxed">
              Drop by our Westlands studio to flip through paper swatches, see our printers in action, and chat about your project over a cup of coffee. Or if you prefer, we can send a curated sample box straight to your desk.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="px-7 py-3.5 bg-[#1f7a63] hover:bg-[#165b4a] text-[#f5f7fa] rounded-full text-xs font-medium uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Book a Studio Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              state={{ service: 'Sample Kit' }}
              className="px-6 py-3.5 border border-white/20 hover:border-white/60 text-[#f5f7fa] rounded-full text-xs font-medium uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Box className="w-3.5 h-3.5 text-[#9aa3a8]" />
              <span>Request a Sample Kit</span>
            </Link>

            <Link
              to="/process"
              className="text-xs font-mono text-white/50 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 ml-1"
            >
              See How Our Process Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
