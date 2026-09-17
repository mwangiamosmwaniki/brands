import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Search,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/studioData';
import { Service } from '../types';

interface WhatWeDoProps {
  showTag?: boolean;
  sectionNumber?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({
  showTag = true,
  sectionNumber = '01 / Capabilities & Scope',
  className = '',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  // Animation & Hover States
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState<boolean>(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const filterCategories = [
    'All',
    'Promotional & Gifting',
    'Display & Banners',
    'Apparel',
    'Collateral & Print',
    'Signage & Fleet',
    'Packaging & Framing',
  ];

  const filteredServices = SERVICES.filter((service: Service) => {
    const matchesFilter =
      selectedFilter === 'All' ||
      (selectedFilter === 'Promotional & Gifting' && service.title === 'Promotional Items') ||
      (selectedFilter === 'Display & Banners' && (service.title === 'Banners' || service.title === 'Events Display')) ||
      (selectedFilter === 'Apparel' && service.title === 'Apparel Branding') ||
      (selectedFilter === 'Collateral & Print' &&
        (service.title === 'Digital Printing' ||
          service.title === 'Print-Ready Graphic Design' ||
          service.title === 'Election Printing')) ||
      (selectedFilter === 'Signage & Fleet' &&
        (service.title === 'Signage' || service.title === 'Stickers, Wall & Vehicle Branding')) ||
      (selectedFilter === 'Packaging & Framing' &&
        (service.title === 'Packaging' || service.title === 'Photo Printing & Framing'));

    const matchesSearch =
      searchQuery.trim() === '' ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const checkScrollBounds = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const firstChild = carouselRef.current.firstElementChild as HTMLElement;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth + 24; // width + gap
        const index = Math.round(scrollLeft / itemWidth);
        setCurrentIndex(Math.max(0, Math.min(index, filteredServices.length - 1)));
      }
    }
  }, [filteredServices.length]);

  useEffect(() => {
    checkScrollBounds();
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollBounds, { passive: true });
      window.addEventListener('resize', checkScrollBounds);
      return () => {
        el.removeEventListener('scroll', checkScrollBounds);
        window.removeEventListener('resize', checkScrollBounds);
      };
    }
  }, [checkScrollBounds]);

  // Reset scroll when filter or search changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
    setCurrentIndex(0);
    setCanScrollLeft(false);
    setCanScrollRight(filteredServices.length > 1);
  }, [selectedFilter, searchQuery, filteredServices.length]);

  const scrollPrev = () => {
    if (carouselRef.current) {
      const firstChild = carouselRef.current.firstElementChild as HTMLElement;
      const scrollStep = firstChild ? firstChild.offsetWidth + 24 : 440;
      carouselRef.current.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    }
  };

  const scrollNext = useCallback(() => {
    if (carouselRef.current) {
      const el = carouselRef.current;
      const firstChild = el.firstElementChild as HTMLElement;
      const scrollStep = firstChild ? firstChild.offsetWidth + 24 : 440;
      const maxScroll = el.scrollWidth - el.clientWidth - 15;

      if (el.scrollLeft >= maxScroll) {
        // Loop back to start smoothly
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }
  }, []);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const firstChild = carouselRef.current.firstElementChild as HTMLElement;
      const scrollStep = firstChild ? firstChild.offsetWidth + 24 : 440;
      carouselRef.current.scrollTo({ left: index * scrollStep, behavior: 'smooth' });
    }
  };

  // Carousel Autoplay Animation:
  // Runs automatically every 3.2s, but STAYS COMPLETELY STILL when mouse is above a card or paused!
  const isAnimationActive = !isHovered && !isManuallyPaused && filteredServices.length > 1;

  useEffect(() => {
    if (!isAnimationActive) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 3200);

    return () => clearInterval(interval);
  }, [isAnimationActive, scrollNext]);

  return (
    <section
      id="what-we-do"
      data-theme={isLight ? 'light' : 'dark'}
      className={`relative overflow-hidden scroll-mt-20 transition-colors duration-500 ${
        isLight ? 'text-[#081c2d] bg-[#f5f7fa]' : 'text-[#f5f7fa] bg-[#081c2d]'
      } ${className}`}
    >
      <div className="py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 sm:pb-12 border-b ${
            isLight ? 'border-[#081c2d]/10' : 'border-white/10'
          }`}
        >
          <div>
            {showTag && (
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63]" />
                <span
                  className={`text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono ${
                    isLight ? 'text-[#1f7a63] font-semibold' : 'text-[#9aa3a8]'
                  }`}
                >
                  {sectionNumber}
                </span>
              </div>
            )}
            <h2
              className={`text-4xl sm:text-6xl lg:text-7xl font-serif leading-[0.95] letter-tight ${
                isLight ? 'text-[#081c2d]' : 'text-[#f5f7fa]'
              }`}
            >
              What we do
            </h2>
          </div>

          <div className="max-w-md">
            <p
              className={`text-xs sm:text-sm leading-relaxed font-sans mb-4 ${
                isLight ? 'text-[#081c2d]/70' : 'text-[#9aa3a8]/90'
              }`}
            >
              Branded merchandise your clients keep, large-format outdoor display, apparel branded with the right process, everyday digital printing, custom signage, and archival packaging—all under one roof.
            </p>
            <div className="text-[11px] font-mono text-[#1f7a63] font-medium">
              11 In-House Disciplines · In-House Prepress & Production
            </div>
          </div>
        </div>

        {/* Search & Filter Controls with Carousel Navigation */}
        <div className="mt-8 mb-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    selectedFilter === category
                      ? 'bg-[#1f7a63] text-white shadow-md font-semibold'
                      : isLight
                      ? 'bg-white hover:bg-[#081c2d]/5 text-[#081c2d]/75 border border-[#081c2d]/15 shadow-sm'
                      : 'bg-white/5 hover:bg-white/10 text-[#f5f7fa]/70 border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${
                  isLight ? 'text-[#081c2d]/45' : 'text-[#9aa3a8]/60'
                }`}
              />
              <input
                type="text"
                placeholder="Search deliverables, items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-9 pr-4 py-2 rounded-full text-xs transition-colors focus:outline-none focus:border-[#1f7a63] ${
                  isLight
                    ? 'bg-white border border-[#081c2d]/15 text-[#081c2d] placeholder:text-[#081c2d]/40 shadow-sm'
                    : 'bg-white/5 border border-white/10 text-[#f5f7fa] placeholder:text-[#f5f7fa]/40'
                }`}
              />
            </div>
          </div>

          {/* Carousel Status & Directional Controls */}
          {filteredServices.length > 0 && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              {/* Left Side: Counter */}
              <div className="flex items-center gap-3">
                <span className={`text-xs font-mono ${isLight ? 'text-[#081c2d]/70' : 'text-[#9aa3a8]'}`}>
                  Showing <span className="text-[#1f7a63] font-semibold">{String(currentIndex + 1).padStart(2, '0')}</span> of{' '}
                  <span className={isLight ? 'text-[#081c2d] font-semibold' : 'text-white'}>
                    {String(filteredServices.length).padStart(2, '0')}
                  </span>{' '}
                  Disciplines
                </span>
                <span
                  className={`hidden sm:inline-block w-1 h-1 rounded-full ${
                    isLight ? 'bg-[#081c2d]/20' : 'bg-white/20'
                  }`}
                />
                <span
                  className={`hidden sm:inline-block text-[11px] font-mono ${
                    isLight ? 'text-[#081c2d]/40' : 'text-white/40'
                  }`}
                >
                  Swipe or use arrows to browse
                </span>
              </div>

              {/* Right Side: Directional & Play/Pause Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                {/* Play / Pause Toggle Button */}
                <button
                  onClick={() => setIsManuallyPaused((prev) => !prev)}
                  id="what-we-do-carousel-toggle-play"
                  aria-label={isManuallyPaused ? 'Play carousel animation' : 'Pause carousel animation'}
                  title={isManuallyPaused ? 'Resume auto-animation' : 'Pause auto-animation'}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    isLight
                      ? 'border-[#081c2d]/15 bg-white hover:bg-[#081c2d]/5 text-[#081c2d] shadow-sm'
                      : 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                  }`}
                >
                  {isManuallyPaused ? (
                    <Play className="w-3.5 h-3.5 text-[#1f7a63] ml-0.5" />
                  ) : (
                    <Pause className={`w-3.5 h-3.5 ${isLight ? 'text-[#081c2d]/80' : 'text-white/80'}`} />
                  )}
                </button>

                {/* Prev Carousel Button */}
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollLeft}
                  id="what-we-do-carousel-prev"
                  aria-label="Previous discipline card"
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    canScrollLeft
                      ? isLight
                        ? 'bg-white hover:bg-[#1f7a63] text-[#081c2d] hover:text-white border-[#081c2d]/15 hover:border-[#1f7a63] shadow-sm hover:scale-105 active:scale-95'
                        : 'bg-white/5 hover:bg-[#1f7a63] text-white border-white/20 hover:border-[#1f7a63] shadow-md hover:scale-105 active:scale-95'
                      : isLight
                      ? 'bg-[#081c2d]/[0.03] text-[#081c2d]/25 border-[#081c2d]/10 cursor-not-allowed'
                      : 'bg-white/[0.02] text-white/25 border-white/5 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Carousel Button */}
                <button
                  onClick={scrollNext}
                  id="what-we-do-carousel-next"
                  aria-label="Next discipline card"
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    isLight
                      ? 'bg-white hover:bg-[#1f7a63] text-[#081c2d] hover:text-white border-[#081c2d]/15 hover:border-[#1f7a63] shadow-sm hover:scale-105 active:scale-95'
                      : 'bg-white/5 hover:bg-[#1f7a63] text-white border-white/20 hover:border-[#1f7a63] shadow-md hover:scale-105 active:scale-95'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 11 Services Carousel Track */}
        {filteredServices.length === 0 ? (
          <div
            className={`py-20 text-center rounded-3xl border my-6 ${
              isLight ? 'bg-white border-[#081c2d]/10 shadow-sm' : 'bg-white/[0.02] border-white/10'
            }`}
          >
            <Sparkles className="w-8 h-8 text-[#1f7a63] mx-auto mb-3 opacity-60" />
            <h3 className={`text-xl font-serif mb-2 ${isLight ? 'text-[#081c2d]' : 'text-[#f5f7fa]'}`}>
              No matching disciplines found
            </h3>
            <p className={`text-xs max-w-sm mx-auto mb-6 ${isLight ? 'text-[#081c2d]/70' : 'text-[#9aa3a8]'}`}>
              We couldn't find any services matching "{searchQuery}". Try a different keyword or reset your filter.
            </p>
            <button
              onClick={() => {
                setSelectedFilter('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-[#1f7a63] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#165b4a] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="relative">
            {/* Carousel Horizontal Scroll Container */}
            <div
              ref={carouselRef}
              id="what-we-do-carousel-track"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
              className="flex gap-6 sm:gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-8 pt-2 -mx-4 sm:-mx-8 lg:-mx-14 px-4 sm:px-8 lg:px-14"
            >
              {filteredServices.map((service) => (
                <div
                  key={service.number}
                  id={`service-carousel-card-${service.number}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`w-[85vw] sm:w-[380px] md:w-[420px] lg:w-[450px] shrink-0 snap-start relative rounded-[24px] sm:rounded-[28px] border transition-all duration-300 flex flex-col justify-between overflow-hidden group select-none hover:-translate-y-1.5 ${
                    isLight
                      ? 'bg-white border-[#081c2d]/10 hover:border-[#1f7a63] shadow-[0_8px_30px_rgba(8,28,45,0.06)] hover:shadow-[0_22px_44px_-12px_rgba(31,122,99,0.25)]'
                      : 'bg-[#0c2438] border border-white/10 hover:border-[#1f7a63] shadow-xl hover:shadow-[0_22px_44px_-12px_rgba(31,122,99,0.3)]'
                  }`}
                >
                  {/* Luminous Animated Top Accent Hairline on Hover */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#1f7a63] to-transparent opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-out origin-center z-20 pointer-events-none" />

                  {/* Card Image Header */}
                  <div className={`relative aspect-[16/10] overflow-hidden ${isLight ? 'bg-[#081c2d]/5' : 'bg-black/40'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100 pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isLight ? 'from-white via-white/30 to-transparent' : 'from-[#0c2438] via-[#0c2438]/40 to-transparent'
                      }`}
                    />

                    {/* Monospaced Counter & Category Tag */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span
                        className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border transition-colors ${
                          isLight
                            ? 'bg-white/90 text-[#081c2d] border-[#081c2d]/10 group-hover:border-[#1f7a63] group-hover:text-[#1f7a63]'
                            : 'bg-[#081c2d]/85 text-[#9aa3a8] border-white/10 group-hover:border-[#1f7a63]/40 group-hover:text-white'
                        }`}
                      >
                        {service.number}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full backdrop-blur-md border transition-colors ${
                          isLight
                            ? 'bg-white/90 text-[#081c2d]/80 border-[#081c2d]/10'
                            : 'bg-[#081c2d]/85 text-[#9aa3a8]/80 border-white/10 group-hover:border-[#1f7a63]/40'
                        }`}
                      >
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Core Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-2xl sm:text-3xl font-serif leading-tight mb-2 transition-colors ${
                          isLight
                            ? 'text-[#081c2d] group-hover:text-[#1f7a63]'
                            : 'text-[#f5f7fa] group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-[13px] font-medium mb-3 leading-snug ${
                          isLight ? 'text-[#1f7a63]' : 'text-[#9aa3a8]'
                        }`}
                      >
                        {service.headline}
                      </p>

                      <p
                        className={`text-xs leading-relaxed mb-5 font-sans line-clamp-3 ${
                          isLight ? 'text-[#081c2d]/70' : 'text-[#f5f7fa]/75'
                        }`}
                      >
                        {service.description}
                      </p>

                      {/* Special Editorial Quote if present */}
                      {service.editorialQuote && (
                        <div
                          className={`mb-5 pl-3 py-2 border-l-2 border-[#1f7a63] rounded-r-lg transition-colors ${
                            isLight ? 'bg-[#081c2d]/[0.03]' : 'bg-white/[0.03] group-hover:bg-white/[0.05]'
                          }`}
                        >
                          <span
                            className={`text-[10px] uppercase tracking-widest font-mono block mb-1 ${
                              isLight ? 'text-[#081c2d]/60 font-semibold' : 'text-[#9aa3a8]'
                            }`}
                          >
                            Editorial Statement
                          </span>
                          <p
                            className={`font-serif italic text-xs sm:text-[13px] leading-snug ${
                              isLight ? 'text-[#081c2d]/90' : 'text-[#f5f7fa]/90'
                            }`}
                          >
                            "{service.editorialQuote}"
                          </p>
                        </div>
                      )}

                      {/* Deliverables / Item Tags */}
                      <div>
                        <span
                          className={`text-[10px] uppercase font-mono tracking-wider block mb-2 ${
                            isLight ? 'text-[#081c2d]/50' : 'text-white/40'
                          }`}
                        >
                          In-House Production Scope:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.deliverables.map((item, dIdx) => (
                            <span
                              key={dIdx}
                              className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-colors flex items-center gap-1.5 ${
                                isLight
                                  ? 'bg-[#081c2d]/5 border-[#081c2d]/10 text-[#081c2d]/80 group-hover:border-[#1f7a63]/30 group-hover:bg-[#1f7a63]/10 group-hover:text-[#1f7a63]'
                                  : 'bg-white/5 border-white/5 text-[#f5f7fa]/80 group-hover:border-white/10 group-hover:bg-white/[0.07]'
                              }`}
                            >
                              <span className="w-1 h-1 rounded-full bg-[#1f7a63] group-hover:scale-125 transition-transform" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Direct Action Link to /contact */}
                    <div
                      className={`mt-8 pt-5 border-t transition-colors flex items-center justify-between ${
                        isLight
                          ? 'border-[#081c2d]/10 group-hover:border-[#081c2d]/20'
                          : 'border-white/10 group-hover:border-white/20'
                      }`}
                    >
                      <Link
                        to="/contact"
                        state={{ service: service.title }}
                        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                          isLight
                            ? 'text-[#1f7a63] group-hover:text-[#165b4a]'
                            : 'text-[#1f7a63] group-hover:text-white'
                        }`}
                      >
                        <span>{service.ctaText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>

                      <span
                        className={`text-[10px] font-mono transition-opacity ${
                          isLight ? 'text-[#081c2d]/40' : 'opacity-40 group-hover:opacity-70 text-[#9aa3a8]'
                        }`}
                      >
                        In-House Atelier
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Indicators Bar */}
            {filteredServices.length > 1 && (
              <div className="flex items-center justify-center gap-1.5 mt-2">
                {filteredServices.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Jump to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === i
                        ? 'w-7 bg-[#1f7a63]'
                        : isLight
                        ? 'w-1.5 bg-[#081c2d]/20 hover:bg-[#081c2d]/40'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
