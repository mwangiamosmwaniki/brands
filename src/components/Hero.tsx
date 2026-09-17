import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../data/studioData';

const HERO_HEADLINE_PHRASES = [
  'people remember.',
  'that command respect.',
  'crafted to endure.',
  'that stand apart.',
  'built with purpose.'
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [nairobiTime, setNairobiTime] = useState('');
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const [rippleActive, setRippleActive] = useState(false);
  const heroContainerRef = useRef<HTMLDivElement>(null);

  // Nairobi Time Clock (UTC+3)
  useEffect(() => {
    const updateNairobiTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Nairobi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setNairobiTime(formatter.format(now));
      } catch {
        setNairobiTime('12:00:00');
      }
    };

    updateNairobiTime();
    const interval = setInterval(updateNairobiTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Automatic slideshow cycle
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Dynamic cycling headline phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HERO_HEADLINE_PHRASES.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  // Subtle 3D mouse tilt tracking for floating card on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
    // Mild tilt: max 3 degrees
    setCardTilt({
      x: -yRatio * 3,
      y: xRatio * 3
    });
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setCardTilt({ x: 0, y: 0 });
  };

  const scrollToNext = () => {
    const el = document.getElementById('about-intro') || document.getElementById('what-we-do') || document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerMonogramRipple = () => {
    setRippleActive(true);
    setTimeout(() => setRippleActive(false), 900);
  };

  return (
    <section
      id="hero-section"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-10 flex flex-col justify-between overflow-hidden"
    >
      {/* Editorial Canvas Container with data-theme="dark" for Navbar Detection */}
      <motion.div
        ref={heroContainerRef}
        id="hero-canvas"
        data-theme="dark"
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        className="relative w-full flex-1 rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] hero-gradient overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-12 border border-[#081c2d]/20 shadow-2xl min-h-[660px] sm:min-h-[720px] lg:min-h-[760px]"
      >
        {/* Ambient Subtle Grid Pattern */}
        <div className="hero-pattern absolute inset-0 pointer-events-none z-10 opacity-30" />

        {/* Ambient Photography Slideshow with Ken Burns Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].alt}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {/* Editorial Vignettes & Dark Contrast Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c2d] via-[#081c2d]/75 to-[#081c2d]/40" />
              <div className="absolute inset-0 bg-[#081c2d]/25 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Kinetic Concentric Astrolabe Monogram in Upper Right */}
        <div
          className="absolute top-6 sm:top-10 right-6 sm:right-10 w-56 sm:w-72 lg:w-[380px] h-56 sm:h-72 lg:h-[380px] flex items-center justify-center pointer-events-none z-10 select-none group"
        >
          {/* Concentric Outer Ring 1 - Slow Clockwise Spin */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 55, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-white/15"
          />

          {/* Concentric Middle Ring 2 - Counter-Clockwise Spin with Cardinal Ticks */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            className="absolute inset-8 sm:inset-10 lg:inset-12 rounded-full border border-white/20 flex items-center justify-center"
          >
            <span className="absolute top-1 text-[8px] font-mono text-white/35 tracking-widest">
              00° NAIROBI
            </span>
            <span className="absolute right-1 text-[8px] font-mono text-white/35 tracking-widest">
              90°
            </span>
            <span className="absolute bottom-1 text-[8px] font-mono text-white/35 tracking-widest">
              1.277° S
            </span>
            <span className="absolute left-1 text-[8px] font-mono text-white/35 tracking-widest">
              270°
            </span>

            {/* Orbiting Satellite Emerald Bead */}
            <div className="absolute -top-1 w-2 h-2 rounded-full bg-[#2dd4bf] shadow-[0_0_12px_#2dd4bf]" />
          </motion.div>

          {/* Central Breathing Emerald Nebula Glow */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.65, 0.3]
            }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="w-24 sm:w-36 lg:w-44 h-24 sm:h-36 lg:h-44 rounded-full bg-[#1f7a63]/40 blur-3xl"
          />

          {/* Central Monogram "S" with Click & Ripple Interaction */}
          <motion.button
            type="button"
            onClick={triggerMonogramRipple}
            whileHover={{ scale: 1.15, rotate: 4 }}
            className="font-serif italic text-white/40 hover:text-white/85 transition-colors text-5xl sm:text-7xl lg:text-8xl z-20 drop-shadow-lg cursor-pointer pointer-events-auto p-4 focus:outline-none"
            title="Click to interact with the Studio Atelier Astrolabe"
          >
            S
          </motion.button>

          {/* Click Ripple Wave */}
          <AnimatePresence>
            {rippleActive && (
              <motion.div
                initial={{ scale: 0.3, opacity: 0.8 }}
                animate={{ scale: 2.2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute w-44 h-44 rounded-full border-2 border-[#2dd4bf] pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Editorial Content: Floating Card + Slideshow Corner Capsule */}
        <div className="relative z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8 pt-10 sm:pt-14 mt-auto">
          {/* Floating Editorial Card with 3D Perspective Tilt */}
          <motion.div
            id="hero-floating-card"
            data-theme="light"
            style={{
              transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
              transition: 'transform 0.15s ease-out'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 bg-[#f5f7fa] p-7 sm:p-9 lg:p-11 rounded-[26px] sm:rounded-[32px] w-full max-w-[480px] lg:max-w-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/60 text-[#081c2d] overflow-hidden"
          >
            {/* Glossy highlight sweep */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-white/80 to-transparent rounded-bl-full pointer-events-none" />

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f7a63]/10 border border-[#1f7a63]/20 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1f7a63]">
                Brand Identity · Production Atelier
              </span>
            </div>

            {/* Kinetic Cycling Editorial Headline */}
            <h1 className="font-serif text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.06] tracking-tight mb-4 sm:mb-5 text-[#081c2d]">
              We build brands <br />
              <span className="block min-h-[1.25em] pt-0.5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={headlineIndex}
                    initial={{ y: 16, opacity: 0, filter: 'blur(3px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -16, opacity: 0, filter: 'blur(3px)' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="block italic text-[#1f7a63] drop-shadow-sm pb-1"
                  >
                    {HERO_HEADLINE_PHRASES[headlineIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Paragraph copy */}
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#081c2d]/80 mb-6 sm:mb-7 max-w-[380px]">
              ShelterBrand is a Nairobi creative studio shaping bold identities, tactile printcraft, and tangible brand experiences for ambitious businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                id="hero-cta-explore-work"
                to="/work"
                className="group relative overflow-hidden bg-[#081c2d] hover:bg-[#1f7a63] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-medium tracking-wide flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Explore our work</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                id="hero-cta-start-project"
                to="/contact"
                className="group border border-[#081c2d]/25 hover:border-[#1f7a63] hover:bg-[#1f7a63]/5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-medium tracking-wide transition-all duration-300 text-[#081c2d] hover:text-[#1f7a63] flex items-center gap-1.5 active:scale-95 cursor-pointer"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1f7a63] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Interactive Slideshow Control Capsule (Positioned in Bottom-Right Corner) */}
          <div className="self-end md:absolute md:bottom-6 md:right-6 lg:bottom-8 lg:right-10 z-30 max-w-full">
            <div className="relative overflow-hidden flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3.5 bg-[#081c2d]/90 backdrop-blur-xl px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/20 text-[#f5f7fa] shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              {/* Dynamic Slideshow Progress Line across capsule bottom */}
              <motion.div
                key={`progress-${currentSlide}-${isPaused}`}
                initial={{ width: '0%' }}
                animate={{ width: isPaused ? '0%' : '100%' }}
                transition={{ duration: 5.5, ease: 'linear' }}
                className="absolute bottom-0 left-0 h-[2px] bg-[#2dd4bf]"
              />

              {/* Slide Counter */}
              <div className="flex items-center gap-1 font-mono text-[11px] sm:text-xs font-semibold text-[#2dd4bf] shrink-0">
                <span>0{currentSlide + 1}</span>
                <span className="text-white/30 font-normal">/</span>
                <span className="text-white/60 font-normal">0{HERO_SLIDES.length}</span>
              </div>

              <span className="h-4 w-[1px] bg-white/20 shrink-0" />

              {/* Active Slide Title */}
              <div className="relative overflow-hidden min-w-0 max-w-[130px] sm:max-w-[210px] md:max-w-[250px] lg:max-w-[290px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.22 }}
                    className="truncate text-[11px] sm:text-xs font-medium text-[#f5f7fa]"
                  >
                    {HERO_SLIDES[currentSlide].label}
                  </motion.div>
                </AnimatePresence>
              </div>

              <span className="h-4 w-[1px] bg-white/20 shrink-0 hidden xs:block" />

              {/* Integrated Slide Indicators (Clickable) */}
              <div className="hidden xs:flex items-center gap-1.5 shrink-0">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentSlide
                        ? 'w-6 bg-[#2dd4bf]'
                        : 'w-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}: ${slide.label}`}
                  />
                ))}
              </div>

              <span className="h-4 w-[1px] bg-white/20 shrink-0" />

              {/* Refined Prev / Next Circular Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={prevSlide}
                  className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 text-white/90 hover:text-white transition-all active:scale-90 cursor-pointer shadow-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 text-white/90 hover:text-white transition-all active:scale-90 cursor-pointer shadow-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Editorial Bottom Exploration Strip with data-theme="light" for Navbar Sensing */}
      <div
        data-theme="light"
        className="flex flex-col md:flex-row justify-between items-start md:items-center mt-7 sm:mt-8 px-2 sm:px-4 gap-5 sm:gap-6"
      >
        {/* Animated Scroll Indicator Button */}
        <button
          onClick={scrollToNext}
          className="flex items-center gap-3.5 group cursor-pointer"
          aria-label="Scroll to explore atelier work"
        >
          <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:border-[#1f7a63] group-hover:bg-[#081c2d] group-hover:text-[#f5f7fa] transition-all duration-300 shadow-sm">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </motion.div>
          </div>
          <span className="text-[10px] uppercase tracking-widest font-semibold opacity-60 group-hover:opacity-100 transition-opacity text-[#081c2d]">
            Scroll to explore
          </span>
        </button>

        {/* Live Nairobi EAT Time Capsule */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081c2d]/5 border border-[#081c2d]/10 text-[#081c2d] text-xs font-mono shadow-sm">
          <Clock className="w-3.5 h-3.5 text-[#1f7a63]" />
          <span>NAIROBI</span>
          <span className="opacity-40">·</span>
          <span className="font-semibold text-[#1f7a63]">{nairobiTime || 'EAT'}</span>
          <span className="opacity-40">·</span>
          <span className="text-[10px] uppercase tracking-wider text-[#9aa3a8]">Studio Open</span>
        </div>

        {/* Studio Disciplines Summary with Interactive Hover Indicators */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 lg:gap-12">
          <div className="group flex flex-col cursor-default">
            <span className="text-[9px] uppercase tracking-widest text-[#9aa3a8] mb-0.5 group-hover:text-[#1f7a63] transition-colors">
              01 · Branding
            </span>
            <span className="text-xs font-medium text-[#081c2d]">Identity Systems</span>
          </div>
          <div className="group flex flex-col cursor-default">
            <span className="text-[9px] uppercase tracking-widest text-[#9aa3a8] mb-0.5 group-hover:text-[#1f7a63] transition-colors">
              02 · Production
            </span>
            <span className="text-xs font-medium text-[#081c2d]">Physical Printcraft</span>
          </div>
          <div className="group flex flex-col cursor-default">
            <span className="text-[9px] uppercase tracking-widest text-[#9aa3a8] mb-0.5 group-hover:text-[#1f7a63] transition-colors">
              03 · Design
            </span>
            <span className="text-xs font-medium text-[#081c2d]">Packaging & Signage</span>
          </div>
        </div>
      </div>

      {/* Subtle Angled Hairline Accent */}
      <div className="absolute -bottom-24 -left-12 w-[1200px] h-[1px] bg-[#1f7a63]/15 -rotate-2 pointer-events-none" />
    </section>
  );
};
