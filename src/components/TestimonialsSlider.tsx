import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Building2,
  Pause,
  Play,
  Quote,
} from 'lucide-react';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  serviceTag: string;
  metricBadge: string;
  avatarInitials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'mara-lodges',
    quote:
      'ShelterBrand transformed how our guests perceive our luxury lodges before they even step foot in the Mara. The linen-embossed menus, bespoke guest room leather folios, and staff uniforms feel exceptionally premium and durable.',
    author: 'Amina Warsame',
    role: 'Creative Director & Partner',
    company: 'Mara Safari Lodges',
    location: 'Nairobi & Masai Mara',
    serviceTag: 'Hospitality Identity',
    metricBadge: '8 Seasons Durability',
    avatarInitials: 'AW',
  },
  {
    id: 'apex-capital',
    quote:
      'Finding a studio in Nairobi that understands both high-level typographic nuance and hands-on press mechanics used to be impossible. ShelterBrand delivered our rebrand and investor dossiers with laser-sharp registration.',
    author: 'David Mwangi',
    role: 'Managing Partner',
    company: 'Apex Capital Kenya',
    location: 'Westlands, Nairobi',
    serviceTag: 'Corporate Identity',
    metricBadge: 'Ahead of Summit',
    avatarInitials: 'DM',
  },
  {
    id: 'kibo-roast',
    quote:
      'Our specialty coffee packaging needed to stand out on retail shelves in London and Tokyo while honoring our Kenyan origins. The micro-embossed foil and compostable pouch craftsmanship exceeded all our expectations.',
    author: 'Sarah Chebet',
    role: 'Co-Founder & Head of Roasting',
    company: 'Kibo Roast Co.',
    location: 'Nairobi & Nyeri',
    serviceTag: 'Retail Packaging',
    metricBadge: '+42% Retail Growth',
    avatarInitials: 'SC',
  },
  {
    id: 'savanna-logistics',
    quote:
      'Equipping over 450 fleet drivers and warehouse team members across East Africa requires workwear that stands up to grueling conditions. ShelterBrand’s embroidered apparel and heavy drill jackets look pristine after 18 months.',
    author: 'Peter Ochieng',
    role: 'VP of Fleet Operations',
    company: 'Savanna Logistics',
    location: 'Mombasa Road, Nairobi',
    serviceTag: 'Industrial Workwear',
    metricBadge: 'Zero Defects (1.2k Kits)',
    avatarInitials: 'PO',
  },
  {
    id: 'zuri-apothecary',
    quote:
      'The custom textured rigid boxes and amber glass bottle silkscreening ShelterBrand crafted for our botanical skincare line elevated us from a boutique local label into luxury department stores across Kenya and Rwanda.',
    author: 'Zainab Hassan',
    role: 'Founder & Formulator',
    company: 'Zuri Apothecary',
    location: 'Nairobi & Kigali',
    serviceTag: 'Luxury Packaging',
    metricBadge: '14 Luxury Boutiques',
    avatarInitials: 'ZH',
  },
  {
    id: 'rift-valley-wines',
    quote:
      'The debossed cotton wine labels and wax-sealed presentation cartons created for our reserve vintages brought an international level of refinement to Kenyan viticulture and cellar door experiences.',
    author: 'Marcus Thorne',
    role: 'Estate Director',
    company: 'Rift Valley Viticulture',
    location: 'Naivasha & Nairobi',
    serviceTag: 'Bespoke Labeling',
    metricBadge: 'Design Trophy Winner',
    avatarInitials: 'MT',
  },
];

interface TestimonialsSliderProps {
  sectionNumber?: string;
}

export const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({
  sectionNumber = '02 / Client Testimonials',
}) => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const total = TESTIMONIALS.length;

  const handleNext = useCallback(() => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setDirection(index > startIndex ? 1 : -1);
    setStartIndex(index);
  };

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Compute 3 items visible on desktop, 2 on tablet, 1 on mobile
  const visibleItems = [
    TESTIMONIALS[startIndex % total],
    TESTIMONIALS[(startIndex + 1) % total],
    TESTIMONIALS[(startIndex + 2) % total],
  ];

  return (
    <section
      id="client-testimonials"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 bg-[#f5f7fa] text-[#081c2d] border-t border-[#081c2d]/10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 sm:pb-10 border-b border-[#081c2d]/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63]" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-[#1f7a63] font-semibold">
                {sectionNumber}
              </span>
              <span className="text-[10px] font-mono text-[#081c2d]/40">
                · Verified Commissions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif letter-tight text-[#081c2d]">
              Endorsements from our partners
            </h2>
          </div>

          {/* Compact Slider Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* Slide Index Counter */}
            <div className="text-xs font-mono text-[#081c2d]/60">
              <span className="font-semibold text-[#1f7a63]">
                {String(startIndex + 1).padStart(2, '0')}
              </span>
              <span className="mx-1 opacity-40">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="w-8 h-8 rounded-full border border-[#081c2d]/15 bg-white text-[#081c2d]/70 hover:text-[#1f7a63] hover:border-[#1f7a63] flex items-center justify-center transition-colors cursor-pointer"
              title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            >
              {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            </button>

            {/* Directional Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                id="testimonial-prev-button"
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-[#081c2d]/15 bg-white flex items-center justify-center text-[#081c2d] hover:bg-[#1f7a63] hover:text-white hover:border-[#1f7a63] transition-all cursor-pointer active:scale-95 shadow-xs"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                id="testimonial-next-button"
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-[#081c2d]/15 bg-white flex items-center justify-center text-[#081c2d] hover:bg-[#1f7a63] hover:text-white hover:border-[#1f7a63] transition-all cursor-pointer active:scale-95 shadow-xs"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Compact Cards Track */}
        <div className="mt-8 sm:mt-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={startIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {visibleItems.map((item, idx) => {
                // Responsive visibility: 1 on mobile, 2 on tablet, 3 on desktop
                const isHiddenOnMobile = idx > 0;
                const isHiddenOnTablet = idx > 1;

                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className={`h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#081c2d]/10 hover:border-[#1f7a63]/40 shadow-[0_4px_20px_-4px_rgba(8,28,45,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(31,122,99,0.12)] transition-all duration-300 relative group overflow-hidden ${
                      isHiddenOnTablet ? 'hidden lg:flex' : isHiddenOnMobile ? 'hidden md:flex' : 'flex'
                    }`}
                  >
                    {/* Top Accent Hairline on Hover */}
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#1f7a63] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      {/* Top Meta: Stars + Service Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <div className="flex items-center gap-0.5 text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <span className="text-[10px] font-mono text-[#1f7a63] bg-[#1f7a63]/10 border border-[#1f7a63]/20 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                          {item.serviceTag}
                        </span>
                      </div>

                      {/* Smaller, Legible Quote */}
                      <blockquote className="text-xs sm:text-[13px] leading-relaxed text-[#081c2d]/85 font-sans italic relative">
                        “{item.quote}”
                      </blockquote>

                      {/* Project Outcome Badge */}
                      <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#081c2d]/5 text-[10px] font-mono text-[#081c2d]/70">
                        <ShieldCheck className="w-3 h-3 text-[#1f7a63]" />
                        <span>{item.metricBadge}</span>
                      </div>
                    </div>

                    {/* Bottom Author Row */}
                    <div className="pt-4 mt-4 border-t border-[#081c2d]/10 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#081c2d] text-white flex items-center justify-center font-serif text-xs font-bold shrink-0 shadow-xs">
                        {item.avatarInitials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-serif font-bold text-[#081c2d] truncate">
                          {item.author}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-[#081c2d]/65 font-sans truncate">
                          <Building2 className="w-3 h-3 text-[#1f7a63] shrink-0" />
                          <span className="truncate">{item.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-1.5">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === startIndex
                  ? 'w-6 bg-[#1f7a63]'
                  : 'w-1.5 bg-[#081c2d]/20 hover:bg-[#081c2d]/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
