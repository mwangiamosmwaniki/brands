import React from 'react';
import {
  ArrowUp,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { STUDIO_DETAILS } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/254719480320?text=Hello%20ShelterBrand%2C%20I%27d%20like%20to%20inquire%20about%20a%20project',
      icon: MessageCircle,
    },
    { name: 'Instagram', href: 'https://instagram.com/shelterbrand', icon: Instagram },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/shelterbrand', icon: Linkedin },
    { name: 'Facebook', href: 'https://facebook.com/shelterbrand', icon: Facebook },
    { name: 'Twitter / X', href: 'https://twitter.com/shelterbrand', icon: Twitter },
  ];

  return (
    <footer id="footer" data-theme="dark" className="bg-[#081c2d] text-[#f5f7fa] pt-20 pb-12 px-4 sm:px-8 lg:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Tier: Logo & Large Statement */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <Link to="/" className="inline-block text-3xl sm:text-4xl font-serif letter-tight text-[#f5f7fa] hover:text-[#9aa3a8] transition-colors">
              {STUDIO_DETAILS.name}
            </Link>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9aa3a8] mt-2">
              Branding · Design · Print · Production
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#9aa3a8]/80">
              <Globe className="w-3.5 h-3.5 text-[#1f7a63]" />
              <span>Nairobi, Kenya · East Africa</span>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/15 hover:border-[#9aa3a8] hover:text-[#9aa3a8] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Navigation and Social Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Studio Office */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1f7a63] block">
              Studio & Atelier
            </span>
            <p className="text-xs text-[#f5f7fa]/80 leading-relaxed font-sans">
              {STUDIO_DETAILS.fullAddress}
            </p>
            <p className="text-[11px] text-[#9aa3a8]/60 font-mono">
              Co-ordinates: {STUDIO_DETAILS.coordinates}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1f7a63] block">
              Navigation
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[12px] text-[#f5f7fa]/70 hover:text-[#f5f7fa] transition-colors uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1f7a63] block">
              Follow Us
            </span>
            <ul className="space-y-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[12px] text-[#f5f7fa]/70 hover:text-white transition-colors uppercase tracking-wider group"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#1f7a63] group-hover:text-white transition-colors" />
                      <span>{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1f7a63] block">
              Inquiries
            </span>
            <p className="text-xs text-[#f5f7fa]/90 font-mono">
              {STUDIO_DETAILS.email}
            </p>
            <p className="text-xs text-[#f5f7fa]/90 font-mono">
              {STUDIO_DETAILS.phone}
            </p>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9aa3a8]/60">
          <p>© 2026 ShelterBrand. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Crafted in Nairobi</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a63]" />
            <span>Built for the world</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
