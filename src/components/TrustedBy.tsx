import React from 'react';

interface BrandLogo {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

const BRAND_LOGOS: BrandLogo[] = [
  {
  id: 'kibo',
  name: 'Kibo Roast Co.',
  renderLogo: () => (
    <div className="flex items-center select-none">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3TpviQDx5FDqOlJxZcw3W54w1Oe4vf2HpKrdMSWQqTsjU1UtzX94WX7t5&s=10"
        alt="Kibo Roast Co. logo"
        className="w-12 h-12 sm:w-14 sm:h-14 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  ),
},
  {
    id: 'savanna',
    name: 'Savanna & Silk',
    renderLogo: () => (
      <div className="flex items-center gap-2.5 select-none">
        {/* Luxury Star Crest */}
        <svg
          className="w-7 h-7 text-[#1f7a63] group-hover:text-white transition-colors duration-300"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2L17 11L26 14L17 17L14 26L11 17L2 14L11 11L14 2Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-serif italic tracking-wide text-base sm:text-lg text-white/85 group-hover:text-white transition-colors">
          Savanna <span className="font-sans font-light not-italic text-xs text-[#1f7a63] group-hover:text-white">&amp;</span> Silk
        </span>
      </div>
    ),
  },
  {
    id: 'vanguard',
    name: 'Vanguard Mobility',
    renderLogo: () => (
      <div className="flex items-center gap-3 select-none">
        {/* Sharp Modern Chevron Bolt */}
        <svg
          className="w-7 h-7 text-[#1f7a63] group-hover:text-white transition-colors duration-300"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 7L14 22L22 7H17L14 14L11 7H6Z"
            fill="currentColor"
          />
          <path
            d="M14 4L16 9H12L14 4Z"
            fill="currentColor"
            fillOpacity="0.6"
          />
        </svg>
        <span className="font-sans font-extrabold tracking-[0.25em] text-xs sm:text-sm uppercase text-white/80 group-hover:text-white transition-colors">
          VANGUARD
        </span>
      </div>
    ),
  },
  {
    id: 'mara',
    name: 'Mara Botanicals',
    renderLogo: () => (
      <div className="flex items-center gap-2.5 select-none">
        {/* Botanical Organic Leaf */}
        <svg
          className="w-7 h-7 text-[#1f7a63] group-hover:text-white transition-colors duration-300"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 4C8 10 7 19 14 24C21 19 20 10 14 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path
            d="M14 7V22M14 13C17 11 18 10 18 10M14 17C11 15 10 14 10 14"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-serif tracking-[0.18em] text-sm sm:text-base uppercase text-white/85 group-hover:text-white transition-colors">
          MARA
        </span>
      </div>
    ),
  },
  {
    id: 'amani',
    name: 'Amani Capital',
    renderLogo: () => (
      <div className="flex items-center gap-3 select-none">
        {/* Faceted Monogram / Prism */}
        <svg
          className="w-7 h-7 text-[#1f7a63] group-hover:text-white transition-colors duration-300"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 21L14 7L21 21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 16H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="font-sans font-bold tracking-[0.3em] text-xs sm:text-sm uppercase text-white/80 group-hover:text-white transition-colors">
          AMANI
        </span>
      </div>
    ),
  },
  {
    id: 'boma',
    name: 'Boma Living',
    renderLogo: () => (
      <div className="flex items-center gap-3 select-none">
        {/* Architectural Grid Blocks */}
        <svg
          className="w-7 h-7 text-[#1f7a63] group-hover:text-white transition-colors duration-300"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="5" y="5" width="7" height="7" rx="1.5" fill="currentColor" />
          <rect x="16" y="5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="5" y="16" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="16" y="16" width="7" height="7" rx="1.5" fill="currentColor" fillOpacity="0.4" />
        </svg>
        <span className="font-mono tracking-[0.22em] text-xs sm:text-sm font-semibold uppercase text-white/85 group-hover:text-white transition-colors">
          BOMA
        </span>
      </div>
    ),
  },
  {
    id: 'zuri',
    name: 'Zuri Health Labs',
    renderLogo: () => (
      <div className="flex items-center gap-3 select-none">
        {/* Hexagon Biotech Node */}
        <svg
          className="w-7 h-7 text-[#1f7a63] group-hover:text-white transition-colors duration-300"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 4L22 8.5V19.5L14 24L6 19.5V8.5L14 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="14" cy="14" r="3" fill="currentColor" />
        </svg>
        <span className="font-sans tracking-[0.25em] text-xs sm:text-sm font-semibold uppercase text-white/80 group-hover:text-white transition-colors">
          ZURI
        </span>
      </div>
    ),
  },
  {
    id: 'distillers',
    name: 'Nairobi Distillers',
    renderLogo: () => (
      <div className="flex items-center gap-3 select-none">
        {/* Heritage Seal */}
        <svg
          className="w-8 h-8 text-[#1f7a63] group-hover:text-white transition-colors duration-300"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1" />
          <path d="M16 11V21M12 16H20" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
        <span className="font-serif tracking-[0.16em] text-xs sm:text-sm font-bold uppercase text-white/80 group-hover:text-white transition-colors">
          NBI DISTILLERS
        </span>
      </div>
    ),
  },
  {
    id: 'kilima',
    name: 'Kilima Tea Estate',
    renderLogo: () => (
      <div className="flex items-center gap-2.5 select-none">
        {/* Three Leaves Tea Crest */}
        <svg
          className="w-7 h-7 text-[#1f7a63] group-hover:text-white transition-colors duration-300"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 20C14 20 8 16 8 11C8 7 14 6 14 6C14 6 20 7 20 11C20 16 14 20 14 20Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path d="M14 6V22" stroke="currentColor" strokeWidth="1.25" />
        </svg>
        <span className="font-serif tracking-[0.2em] text-xs sm:text-sm font-bold uppercase text-white/85 group-hover:text-white transition-colors">
          KILIMA
        </span>
      </div>
    ),
  },
  {
    id: 'equator',
    name: 'Equator Energy',
    renderLogo: () => (
      <div className="flex items-center gap-3 select-none">
        {/* Orbit Ring */}
        <svg
          className="w-7 h-7 text-[#1f7a63] group-hover:text-white transition-colors duration-300"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="14" cy="14" rx="12" ry="4" stroke="currentColor" strokeWidth="1.25" strokeDasharray="2 1.5" transform="rotate(-25 14 14)" />
        </svg>
        <span className="font-sans font-bold tracking-[0.25em] text-xs sm:text-sm uppercase text-white/80 group-hover:text-white transition-colors">
          EQUATOR
        </span>
      </div>
    ),
  },
];

export const TrustedBy: React.FC = () => {
  // Duplicate list to achieve a seamless, continuous -50% CSS translation
  const marqueeItems = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section
      id="trusted-by-section"
      className="relative py-14 sm:py-16 bg-[#081c2d] text-[#f5f7fa] overflow-hidden border-y border-white/10"
      aria-label="Trusted By Ambitious Brands"
    >
      {/* Subtle Background Grain */}
      <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1f7a63]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        {/* Minimalist Logo Bar Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1f7a63] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono text-[#9aa3a8]">
              Trusted By Ambitious Brands
            </span>
          </div>

          <span className="text-xs text-[#9aa3a8]/80 font-sans">
            East Africa · Regional · Global
          </span>
        </div>
      </div>

      {/* Marquee Carousel Track (Logos Only) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Gradient Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 z-20 pointer-events-none bg-gradient-to-r from-[#081c2d] to-transparent" />
        {/* Right Gradient Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 z-20 pointer-events-none bg-gradient-to-l from-[#081c2d] to-transparent" />

        {/* Marquee Inner Scroller - Logos Only */}
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 lg:gap-16 py-3">
          {marqueeItems.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              id={`brand-logo-mark-${brand.id}-${index}`}
              className="group flex items-center justify-center px-4 py-2 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default select-none flex-shrink-0"
              title={brand.name}
            >
              {brand.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
