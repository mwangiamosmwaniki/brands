import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutAtelierImage from '../assets/images/About-atelier.jpg';

export const AboutIntro: React.FC = () => {
  return (
    <section
      id="about-intro"
      className="relative bg-[#f5f7fa] text-[#081c2d] py-14 sm:py-18 lg:py-20 border-t border-[#081c2d]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column: Heading, Story & Link */}
          <div className="lg:col-span-7">

            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63]" />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono text-[#1f7a63] font-semibold">
                About ShelterBrand
              </span>

              <span className="text-[10px] sm:text-[11px] font-mono text-[#081c2d]/40">
                · Nairobi, Kenya
              </span>
            </div>

            {/* Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif letter-tight text-[#081c2d] leading-[1.08] mb-5">
              A creative studio shaping bold identities and tangible brand experiences.
            </h2>

            {/* Body Copy */}
            <p className="text-xs sm:text-sm text-[#081c2d]/75 leading-relaxed font-sans mb-8 max-w-2xl">
              We believe great brands aren’t just seen on screens—they are felt in everyday life. From our integrated design studio and production workshop in Westlands, Nairobi, we combine thoughtful brand strategy with hands-on craftsmanship. We help ambitious companies create distinct identities, branded merchandise, packaging, and large-format displays that connect warmly with audiences.
            </p>

            {/* Direct Link to Full About Page */}
            <Link
              to="/about"
              id="about-intro-learn-more"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#1f7a63] hover:text-[#081c2d] transition-colors group"
            >
              <span>Explore Our Full Story & Philosophy</span>

              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right Column: Your Custom Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-[#081c2d]/10 group"
            >
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-black/10">
                <img
                  src={aboutAtelierImage}
                  alt="ShelterBrand production atelier in Westlands, Nairobi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};