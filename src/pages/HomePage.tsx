import React from 'react';
import { Hero } from '../components/Hero';
import { AboutIntro } from '../components/AboutIntro';
import { TrustedBy } from '../components/TrustedBy';
import { WhatWeDo } from '../components/WhatWeDo';
import { NineProcesses } from '../components/NineProcesses';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { CtaSection } from '../components/CtaSection';

export const HomePage: React.FC = () => {
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

      {/* 5. Nine processes. One roof. (Redesigned Cards with In-House Imagery) */}
      <NineProcesses sectionNumber="02 / In-House Production Workshop" />

      {/* 6. Testimonials Slider (Quotes from Past Clients) */}
      <TestimonialsSlider sectionNumber="03 / Client Endorsements" />

      {/* 7. New Engagements Section & Direct Studio Channels */}
      <CtaSection />
    </div>
  );
};
