import React from 'react';
import { Hero } from '../components/Hero';
import { AboutIntro } from '../components/AboutIntro';
import { TrustedBy } from '../components/TrustedBy';
import { WhatWeDo } from '../components/WhatWeDo';
import { NineProcesses } from '../components/NineProcesses';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { CtaSection } from '../components/CtaSection';

export const HomePage: React.FC = () => {
  const faqs = [
    {
      question: 'What services does ShelterBrand provide?',
      answer:
        'ShelterBrand provides corporate branding, office branding, vehicle branding, signage, graphic design and print production for businesses in Nairobi and across Kenya.',
    },
    {
      question: 'Do you offer both design and production?',
      answer:
        'Yes. ShelterBrand handles the design, production and installation side of branding projects so the final work stays consistent from concept to delivery.',
    },
    {
      question: 'Do you do office branding and signage?',
      answer:
        'Yes. We work on reception branding, wall graphics, glass branding, directional signage and other physical brand applications for office and commercial spaces.',
    },
    {
      question: 'Do you brand vehicles and company fleets?',
      answer:
        'Yes. We design and install vehicle branding, vinyl graphics and branded fleet graphics for businesses that need visibility on the move.',
    },
    {
      question: 'Where are your branding services available?',
      answer:
        'ShelterBrand is based in Nairobi and works with businesses across Kenya, as well as clients needing consistent branded environments or print work across East Africa.',
    },
    {
      question: 'What types of businesses does ShelterBrand work with?',
      answer:
        'ShelterBrand works with offices, retail businesses, healthcare providers, hospitality brands, logistics companies, startups, institutions and commercial organizations that need consistent physical branding and printed materials.',
    },
    {
      question: 'What types of signage and physical branding does ShelterBrand provide?',
      answer:
        'We provide office branding, wall graphics, glass branding, reception signage, wayfinding systems, lightboxes, vehicle graphics and branded environmental graphics for commercial spaces.',
    },
    {
      question: 'Does ShelterBrand provide branding services outside Nairobi?',
      answer:
        'Yes. ShelterBrand is based in Nairobi and works with businesses across Kenya, supporting client projects that require office branding, vehicle graphics, signage and print production beyond the city limits.',
    },
    {
      question: 'How can I request a quote?',
      answer:
        'You can contact ShelterBrand through the website contact form or WhatsApp to discuss your branding, signage, print or production requirement.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Small About Us Section */}
      <AboutIntro />

      {/* 3. Trusted By Social Proof Marquee */}
      {/*ustedBy />*/}

      {/* 4. What We Do (Soft White Background) */}
      <WhatWeDo sectionNumber="01 / What We Do" theme="light" />

      <section className="bg-[#f5f7fa] px-4 py-16 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[#1f7a63] font-semibold">
              FAQ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#081c2d]">
              Common questions about ShelterBrand
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#081c2d]/10 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#081c2d] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed text-[#081c2d]/75">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Nine processes. One roof. (Redesigned Cards with In-House Imagery) */}
      <NineProcesses sectionNumber="02 / In-House Production Workshop" />

      {/* 6. Testimonials Slider (Quotes from Past Clients) */}
      <TestimonialsSlider sectionNumber="03 / Client Endorsements" />

      {/* 7. New Engagements Section & Direct Studio Channels */}
      <CtaSection />
    </div>
  );
};
