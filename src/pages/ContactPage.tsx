import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Navigation,
  MapPin,
  Car,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { STUDIO_DETAILS } from '../data/studioData';

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const routeState = location.state as { service?: string; projectTitle?: string } | null;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    if (routeState?.service) {
      setFormData((prev) => ({
        ...prev,
        subject: prev.subject || `Inquiry: ${routeState.service}`,
        message: prev.message || `Hello ShelterBrand, I am interested in commissioning ${routeState.service}.`,
      }));
    } else if (routeState?.projectTitle) {
      setFormData((prev) => ({
        ...prev,
        subject: prev.subject || `Project: ${routeState.projectTitle}`,
        message:
          prev.message ||
          `Hello ShelterBrand, I would love to commission a project similar to "${routeState.projectTitle}".`,
      }));
    }
  }, [routeState]);

  const copyEmail = () => {
    navigator.clipboard.writeText(STUDIO_DETAILS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(STUDIO_DETAILS.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Ayden+Plaza+Ngara+Road+Ngara+Nairobi';

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/shelterbrand',
      label: 'ShelterBrand on Facebook',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/shelterbrand',
      label: 'ShelterBrand on X / Twitter',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/shelterbrand',
      label: 'ShelterBrand on Instagram',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/shelterbrand',
      label: 'ShelterBrand on LinkedIn',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/254719480320?text=Hello%20ShelterBrand%2C%20I%27d%20like%20to%20inquire%20about%20a%20branding%20and%20print%20project',
      label: 'Chat on WhatsApp',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#081c2d] pt-24 sm:pt-32 pb-20">
      {/* Main Contact Section */}
      <section className="px-4 sm:px-8 lg:px-14">
        <div className="max-w-6xl mx-auto">
          {/* Header Row: Title & Overlapping Circular "Hire Us" Badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 sm:mb-16">
            <div>
              {/* Category indicator line with Brand Emerald Green */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-[3px] bg-[#1f7a63] rounded-full" />
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#1f7a63] uppercase font-mono">
                  Contact Us
                </span>
                <span className="text-xs font-mono text-[#9aa3a8]">· Nairobi Atelier</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-bold tracking-tight text-[#081c2d] leading-[1.1] max-w-2xl">
                Contact ShelterBrand for Branding &amp; Print Services in Nairobi
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#081c2d]/75">
                Looking for branding, signage, print production or physical brand installations in Nairobi? Contact ShelterBrand to discuss your project, request a quotation or arrange a studio visit.
              </p>
            </div>

            {/* Overlapping Badge Component with Brand Colors (Emerald & Obsidian) */}
            <div className="relative flex items-center justify-end shrink-0 self-start md:self-center pr-4">
              {/* Brand Signature Emerald Green Background Circle */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1f7a63] translate-x-4 shrink-0 shadow-md" />

              {/* Brand Obsidian Navy Foreground Circular Stamp Badge */}
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#081c2d] text-white flex items-center justify-center -translate-x-3 shrink-0 shadow-xl cursor-pointer group border border-white/10"
                title="ShelterBrand · Commission Us"
              >
                {/* Circular Text SVG */}
                <svg className="absolute inset-0 w-full h-full p-1 animate-[spin_16s_linear_infinite]" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] uppercase tracking-[0.24em] fill-[#f5f7fa] font-mono font-bold">
                    <textPath href="#circlePath">
                      • HIRE US • HIRE US • HIRE US
                    </textPath>
                  </text>
                </svg>

                {/* Center Arrow Icon in Emerald Green */}
                <div className="w-6 h-6 rounded-full bg-[#1f7a63] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form & Brand Emerald Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Side: Clean Form Inputs */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[28px] border border-[#e2e8f0] shadow-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-14 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1f7a63]/15 border border-[#1f7a63] text-[#1f7a63] flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#081c2d]">
                    Message Dispatched
                  </h3>
                  <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed font-sans">
                    Thank you, {formData.firstName || 'valued client'}. Our atelier team at Ayden Plaza will review your inquiry and connect with you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#081c2d] hover:bg-[#0c2438] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="First Name *"
                        className="w-full px-5 py-4 rounded-2xl bg-[#f5f7fa] border border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#1f7a63] focus:bg-white text-sm text-[#081c2d] placeholder:text-[#9aa3a8] focus:outline-none focus:ring-1 focus:ring-[#1f7a63]/30 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Last Name *"
                        className="w-full px-5 py-4 rounded-2xl bg-[#f5f7fa] border border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#1f7a63] focus:bg-white text-sm text-[#081c2d] placeholder:text-[#9aa3a8] focus:outline-none focus:ring-1 focus:ring-[#1f7a63]/30 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email *"
                        className="w-full px-5 py-4 rounded-2xl bg-[#f5f7fa] border border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#1f7a63] focus:bg-white text-sm text-[#081c2d] placeholder:text-[#9aa3a8] focus:outline-none focus:ring-1 focus:ring-[#1f7a63]/30 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone Number *"
                        className="w-full px-5 py-4 rounded-2xl bg-[#f5f7fa] border border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#1f7a63] focus:bg-white text-sm text-[#081c2d] placeholder:text-[#9aa3a8] focus:outline-none focus:ring-1 focus:ring-[#1f7a63]/30 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Subject *"
                      className="w-full px-5 py-4 rounded-2xl bg-[#f5f7fa] border border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#1f7a63] focus:bg-white text-sm text-[#081c2d] placeholder:text-[#9aa3a8] focus:outline-none focus:ring-1 focus:ring-[#1f7a63]/30 transition-all font-sans"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Message *"
                      className="w-full px-5 py-4 rounded-2xl bg-[#f5f7fa] border border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#1f7a63] focus:bg-white text-sm text-[#081c2d] placeholder:text-[#9aa3a8] focus:outline-none focus:ring-1 focus:ring-[#1f7a63]/30 transition-all resize-none font-sans"
                    />
                  </div>

                  {/* Submit Button Row (Brand Emerald Green pill with Obsidian circular arrow button) */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 group cursor-pointer"
                    >
                      {/* Emerald Green Pill */}
                      <span className="px-7 py-3.5 rounded-full bg-[#1f7a63] hover:bg-[#165b4a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md">
                        Send Message
                      </span>

                      {/* Adjacent Obsidian Navy Circle with Arrow */}
                      <span className="w-11 h-11 rounded-full bg-[#081c2d] group-hover:bg-[#0c2438] text-white flex items-center justify-center transition-all group-hover:translate-x-1 shadow-md">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Side: Solid ShelterBrand Emerald Green Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1f7a63] to-[#17624f] text-white p-8 sm:p-10 rounded-[32px] shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
              {/* Subtle Atelier Grain Highlight */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              {/* Section 1: Address */}
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold tracking-tight text-white mb-2">
                  Address
                </h3>
                <p className="text-sm text-[#f5f7fa]/90 font-sans leading-relaxed">
                  Ayden Plaza, Ngara Road, Ngara,
                  <br />
                  Nairobi, Kenya
                </p>
                <div className="mt-2.5 flex items-center gap-3">
                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium underline decoration-white/40 hover:decoration-white text-[#f5f7fa] transition-colors cursor-pointer"
                  >
                    {copiedAddress ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAddress ? 'Address Copied' : 'Copy Address'}</span>
                  </button>
                  <span className="text-white/40">·</span>
                  <a
                    href="#map-section"
                    className="text-xs font-mono font-medium underline decoration-white/40 hover:decoration-white text-[#f5f7fa] transition-colors cursor-pointer"
                  >
                    View Map
                  </a>
                </div>
              </div>

              {/* Section 2: Contact */}
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold tracking-tight text-white mb-2">
                  Contact
                </h3>
                <div className="space-y-1.5 text-sm font-sans text-[#f5f7fa]/90">
                  <p>
                    <span className="text-white/70">Phone : </span>
                    <a
                      href={`tel:${STUDIO_DETAILS.phone}`}
                      className="hover:underline font-mono font-medium"
                    >
                      {STUDIO_DETAILS.phone}
                    </a>
                  </p>
                  <p>
                    <span className="text-white/70">Email : </span>
                    <a
                      href={`mailto:${STUDIO_DETAILS.email}`}
                      className="hover:underline font-serif"
                    >
                      {STUDIO_DETAILS.email}
                    </a>
                  </p>
                </div>
                <button
                  onClick={copyEmail}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono font-medium underline decoration-white/40 hover:decoration-white text-[#f5f7fa] transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
                </button>
              </div>

              {/* Section 3: Open Time */}
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold tracking-tight text-white mb-2">
                  Open Time
                </h3>
                <p className="text-sm font-sans text-[#f5f7fa]/90 leading-relaxed">
                  Monday – Friday : 08:30 – 17:30 EAT
                  <br />
                  Saturday : 09:00 – 14:00 EAT
                </p>
              </div>

              {/* Section 4: Stay Connected (Round Obsidian Navy Social Badges) */}
              <div className="pt-2 relative z-10">
                <h3 className="text-xl font-serif font-bold tracking-tight text-white mb-4">
                  Stay Connected
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full bg-[#081c2d] hover:bg-[#0c2438] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer border border-white/10"
                      >
                        <Icon className="w-4 h-4 text-[#f5f7fa]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section: Ayden Plaza, Ngara */}
      <section id="map-section" className="mt-20 sm:mt-28 px-4 sm:px-8 lg:px-14 border-t border-[#e2e8f0] pt-16">
        <div className="max-w-6xl mx-auto">
          {/* Header & Quick Navigation Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#1f7a63]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#475569]">
                  Location & Directions
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#081c2d]">
                Ayden Plaza · Ngara, Nairobi
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#081c2d] hover:bg-[#0c2438] text-white text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#1f7a63]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Location Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-white border border-[#e2e8f0] flex items-start gap-3 shadow-xs">
              <MapPin className="w-4 h-4 text-[#1f7a63] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#081c2d] font-mono uppercase tracking-wider">Exact Location</h4>
                <p className="text-xs text-[#475569] mt-0.5">
                  Ayden Plaza, Ngara Road, Ngara, Nairobi
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#e2e8f0] flex items-start gap-3 shadow-xs">
              <Car className="w-4 h-4 text-[#1f7a63] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#081c2d] font-mono uppercase tracking-wider">Access & Parking</h4>
                <p className="text-xs text-[#475569] mt-0.5">
                  Convenient access from Murang'a Rd with dedicated parking.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#e2e8f0] flex items-start gap-3 shadow-xs">
              <Clock className="w-4 h-4 text-[#1f7a63] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#081c2d] font-mono uppercase tracking-wider">Atelier Hours</h4>
                <p className="text-xs text-[#475569] mt-0.5">
                  Mon – Fri: 8:30am – 5:30pm · Proofing visits welcomed
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Container */}
          <div className="relative rounded-[28px] overflow-hidden border border-[#e2e8f0] shadow-md bg-white">
            <iframe
              title="Ayden Plaza Ngara Nairobi Map"
              src="https://maps.google.com/maps?q=Ayden+Plaza,+Ngara+Road,+Ngara,+Nairobi,+Kenya&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[380px] sm:h-[420px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
