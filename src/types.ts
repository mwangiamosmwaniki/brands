export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
  aspectRatio: string;
  description: string;
  disciplines: string[];
  printSpecifications: string[];
  impact: string;
}

export interface Service {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  image: string;
  tag: string;
  editorialQuote?: string;
  ctaText: string;
}

export interface WhyMoveReason {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface InHouseProcess {
  number: string;
  title: string;
  description: string;
  image?: string;
  tag?: string;
  substrates?: string[];
  bestFor?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export interface WhyPillar {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface MaterialSwatch {
  id: string;
  name: string;
  category: string;
  colorHex: string;
  specs: string;
  description: string;
}

export interface ProjectInquiry {
  name: string;
  email: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
}
