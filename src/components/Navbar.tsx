import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Mail, Phone, Compass } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { STUDIO_DETAILS } from '../data/studioData';
import logo from '../assets/images/logo.png';

export type BackgroundTone = 'light' | 'dark' | 'emerald';

export const Navbar: React.FC = () => {
  const [bgTone, setBgTone] = useState<BackgroundTone>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navContainerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  // Dynamic background detection function
  const detectBackgroundTone = (): BackgroundTone => {
    let navY = 50; // Floating navbar vertical midpoint in viewport
    const navEl = navContainerRef.current || document.getElementById('main-navigation-bar');
    if (navEl) {
      const rect = navEl.getBoundingClientRect();
      navY = rect.top + rect.height / 2;
    }

    // 1. High-precision geometric bounding-box check for explicit data-theme sections
    try {
      const themedElements = document.querySelectorAll<HTMLElement>('[data-theme]');
      for (const el of Array.from(themedElements)) {
        if (el.closest('#main-navigation-bar') || el.id === 'main-navigation-bar') {
          continue;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top <= navY && rect.bottom >= navY) {
          const theme = el.getAttribute('data-theme');
          if (theme === 'dark') return 'dark';
          if (theme === 'emerald') return 'emerald';
          if (theme === 'light') return 'light';
        }
      }
    } catch {
      // Ignore DOM inspection errors
    }

    // 2. Route-level fallback heuristics:
    if (location.pathname === '/services' && !location.hash) {
      return 'dark';
    }

    // 3. Fallback to point sampling and computed luminance
    const sampleX = window.innerWidth / 2;
    const sampleY = navY;

    try {
      if (typeof document !== 'undefined' && document.elementsFromPoint) {
        const elements = document.elementsFromPoint(sampleX, sampleY);

        for (const el of elements) {
          // Skip the navbar itself and modal overlays
          if (
            el.closest('#main-navigation-bar') ||
            el.closest('#mobile-drawer-overlay') ||
            el.id === 'main-navigation-bar'
          ) {
            continue;
          }

          // Check explicit data-theme attribute on ancestor
          const themedEl = el.closest('[data-theme]') as HTMLElement | null;
          if (themedEl) {
            const theme = themedEl.getAttribute('data-theme');
            if (theme === 'dark') return 'dark';
            if (theme === 'light') return 'light';
            if (theme === 'emerald') return 'emerald';
          }

          // Traverse ancestors checking CSS class names
          let curr: HTMLElement | null = el as HTMLElement;
          while (curr && curr !== document.body && curr !== document.documentElement) {
            const classNames = curr.className || '';
            if (typeof classNames === 'string') {
              if (
                classNames.includes('hero-gradient') ||
                classNames.includes('bg-[#081c2d]') ||
                classNames.includes('bg-[#0d273d]') ||
                classNames.includes('bg-navy')
              ) {
                return 'dark';
              }
              if (classNames.includes('bg-[#1f7a63]')) {
                return 'emerald';
              }
              if (
                classNames.includes('bg-[#f5f7fa]') ||
                classNames.includes('bg-white')
              ) {
                return 'light';
              }
            }

            // Check computed background color
            const style = window.getComputedStyle(curr);
            const bg = style.backgroundColor;
            if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
              const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
              if (match) {
                const r = parseInt(match[1], 10);
                const g = parseInt(match[2], 10);
                const b = parseInt(match[3], 10);
                const a = match[4] !== undefined ? parseFloat(match[4]) : 1;

                if (a >= 0.25) {
                  if (g > 105 && g > r * 1.3 && g > b) {
                    return 'emerald';
                  }
                  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
                  return luminance < 0.45 ? 'dark' : 'light';
                }
              }
            }
            curr = curr.parentElement;
          }
        }
      }
    } catch {
      // Fallback
    }

    return 'light';
  };

  // Continuous listener on scroll, resize, and location changes
  useEffect(() => {
    let animationFrameId: number;

    const evaluateTone = () => {
      const tone = detectBackgroundTone();
      setBgTone(tone);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(evaluateTone);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Immediate + delayed evaluations
    evaluateTone();
    const t1 = setTimeout(evaluateTone, 60);
    const t2 = setTimeout(evaluateTone, 250);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Dynamic OPPOSITE Color Palette Mappings
  // Rule:
  // - When background is DARK: Navbar adapts to LIGHT (opposite high-contrast state)
  // - When background is LIGHT: Navbar adapts to DARK (opposite high-contrast state)
  // - When background is EMERALD: Navbar adapts to LIGHT (crisp opposite state)
  const isDarkBg = bgTone === 'dark';
  const isEmeraldBg = bgTone === 'emerald';
  const isNavbarLight = isDarkBg || isEmeraldBg;

  const containerClasses = isNavbarLight
    ? 'bg-white/95 border-black/10 text-[#081c2d] shadow-[0_16px_36px_-6px_rgba(0,0,0,0.5)] backdrop-blur-xl'
    : 'bg-[#081c2d]/92 border-white/15 text-[#f5f7fa] shadow-[0_16px_36px_-6px_rgba(8,28,45,0.45)] backdrop-blur-xl';

  const logoTextClasses = isNavbarLight ? 'text-[#081c2d]' : 'text-[#f5f7fa]';

  const logoMarkClasses = isNavbarLight
    ? 'bg-[#1f7a63]/15 border-[#1f7a63]/35 text-[#1f7a63] group-hover:bg-[#1f7a63] group-hover:text-white'
    : 'bg-[#1f7a63]/25 border-[#1f7a63]/50 text-[#1f7a63] group-hover:bg-[#1f7a63] group-hover:text-white';

  const ctaBtnClasses = isNavbarLight
    ? 'bg-[#081c2d] hover:bg-[#1f7a63] text-[#f5f7fa] shadow-sm'
    : 'bg-[#1f7a63] hover:bg-[#165b4a] text-white shadow-md';

  const mobileToggleClasses = isNavbarLight
    ? 'text-[#081c2d] hover:bg-black/5 active:bg-black/10'
    : 'text-[#f5f7fa] hover:bg-white/10 active:bg-white/20';

  return (
    <>
      <header
        id="main-navigation-bar"
        className="fixed top-3.5 sm:top-6 lg:top-7 left-0 right-0 z-[60] pointer-events-none px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          {/* Floating Navigation Pill */}
          <motion.div
            ref={navContainerRef}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`pointer-events-auto w-full max-w-[720px] h-[50px] sm:h-[52px] rounded-full transition-all duration-500 ease-out border flex items-center justify-between pl-4 sm:pl-5 pr-2.5 sm:pr-3 ${containerClasses}`}
          >
            {/* Brand Identity */}
            <Link
              id="nav-logo-link"
              to="/"
              className={`flex items-center gap-2 group shrink-0 mr-auto md:mr-6 lg:mr-10 pl-0.5 ${logoTextClasses}`}
            >
              {/* PNG Logo */}
              <img
                src={logo}
                alt={`${STUDIO_DETAILS.name} logo`}
                className="h-7 sm:h-8 md:h-9 w-auto max-w-[42px] object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Studio Name */}
              <span className="font-bold text-[13px] sm:text-sm tracking-tighter uppercase whitespace-nowrap">
                {STUDIO_DETAILS.name}
              </span>

              {/* Green Accent */}
              <span className="w-1.5 h-1.5 bg-[#1f7a63] rounded-full group-hover:scale-125 transition-transform" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              id="desktop-nav-menu"
              className="hidden md:flex items-center gap-5 lg:gap-7 text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap"
            >
              {navLinks.map((link) => {
                const isActive = link.path.includes('#')
                  ? location.pathname + location.hash === link.path
                  : location.pathname === link.path && !location.hash;
                let linkColor = '';

                if (isActive) {
                  linkColor = 'text-[#1f7a63] font-bold';
                } else if (isNavbarLight) {
                  linkColor = 'text-[#081c2d]/70 hover:text-[#081c2d] hover:opacity-100';
                } else {
                  linkColor = 'text-[#f5f7fa]/75 hover:text-white hover:opacity-100';
                }

                return (
                  <Link
                    key={link.name}
                    id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    to={link.path}
                    className={`relative py-1 transition-all duration-300 ${linkColor}`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full bg-[#1f7a63]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTA & Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-3">
              <Link
                id="nav-start-project-btn"
                to="/contact"
                className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[12px] font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${ctaBtnClasses}`}
              >
                <span className="hidden sm:inline">Start a project</span>
                <span className="sm:hidden">Inquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Toggle Icon */}
              <button
                id="nav-mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className={`md:hidden p-1.5 sm:p-2 rounded-full transition-colors flex items-center justify-center cursor-pointer ${mobileToggleClasses}`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[70] bg-[#081c2d]/98 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-10 pt-24 text-[#f5f7fa] overflow-y-auto"
          >
            <div className="space-y-6">
              {/* Drawer Top Status */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9aa3a8]">
                  <Compass className="w-3.5 h-3.5 text-[#1f7a63]" />
                  <span>Studio Atelier · Ngara, Nairobi</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  id="mobile-nav-link-home"
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-3 text-left border-b border-white/5 hover:border-white/20 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#1f7a63]">00</span>
                    <span className="text-2xl sm:text-3xl font-serif letter-tight text-[#f5f7fa] group-hover:text-[#9aa3a8] transition-colors">
                      Home
                    </span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#1f7a63]" />
                </Link>

                {navLinks.map((link, idx) => (
                  <Link
                    key={link.name}
                    id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-3 text-left border-b border-white/5 hover:border-white/20 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[11px] font-mono text-[#1f7a63]">0{idx + 1}</span>
                      <span className="text-2xl sm:text-3xl font-serif letter-tight text-[#f5f7fa] group-hover:text-[#9aa3a8] transition-colors">
                        {link.name}
                      </span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#1f7a63]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Contact */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                id="mobile-nav-inquiry-cta"
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-[#1f7a63] hover:bg-[#165b4a] text-[#f5f7fa] rounded-full font-medium tracking-wider uppercase text-[12px] flex items-center justify-center gap-2 transition-colors shadow-lg cursor-pointer"
              >
                <span>Initiate Project Brief</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-[#9aa3a8]/70 pt-2 font-mono">
                <a href={`mailto:${STUDIO_DETAILS.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#1f7a63]" />
                  <span>{STUDIO_DETAILS.email}</span>
                </a>
                <a href={`tel:${STUDIO_DETAILS.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#1f7a63]" />
                  <span>{STUDIO_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
