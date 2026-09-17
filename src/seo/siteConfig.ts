export const SITE_CONFIG = {
  name: 'ShelterBrand',
  siteName: 'ShelterBrand',
  url: 'https://shelterbrand.co.ke',
  title: 'Branding & Print Production Company in Nairobi, Kenya',
  description:
    'ShelterBrand provides corporate branding, office branding, signage, vehicle branding, graphic design and print production for businesses in Nairobi and across Kenya.',
  image: 'https://shelterbrand.co.ke/logo.png',
  phone: '+254768737198',
  email: 'hello@shelterbrand.co.ke',
  address: {
    streetAddress: 'Ayden Plaza, Ngara Road, Ngara',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  socialLinks: [
    'https://instagram.com/shelterbrand',
    'https://linkedin.com/company/shelterbrand',
    'https://facebook.com/shelterbrand',
    'https://twitter.com/shelterbrand',
  ],
};

export const routeMeta: Record<string, { title: string; description: string; type?: string }> = {
  '/': {
    title: 'Branding & Print Production Company in Nairobi, Kenya | ShelterBrand',
    description:
      'ShelterBrand is a Nairobi branding and print production company helping businesses with corporate branding, office branding, signage, vehicle branding, graphic design and printed marketing materials.',
    type: 'website',
  },
  '/about': {
    title: 'About ShelterBrand | Nairobi Branding Studio & Print Production',
    description:
      'Meet ShelterBrand, a Nairobi-based branding studio and print production company helping ambitious businesses build memorable identity systems, print assets and physical brand experiences.',
    type: 'website',
  },
  '/services': {
    title: 'Branding, Signage & Print Services in Nairobi | ShelterBrand',
    description:
      'Explore ShelterBrand services including corporate branding, office branding, vehicle branding, signage, print production, promotional items and graphic design for businesses in Nairobi.',
    type: 'website',
  },
  '/work': {
    title: 'Branding Portfolio & Case Studies | ShelterBrand',
    description:
      'View ShelterBrand portfolio projects spanning office branding, vehicle branding, signage, packaging, print production and corporate identity work for businesses across Kenya.',
    type: 'website',
  },
  '/process': {
    title: 'Branding Process | From Design to Print Production | ShelterBrand',
    description:
      'See how ShelterBrand takes branding projects from consultation and design through proofing, production, installation and final delivery in Nairobi.',
    type: 'website',
  },
  '/contact': {
    title: 'Contact ShelterBrand | Branding & Print Quote in Nairobi',
    description:
      'Request a quote from ShelterBrand for branding, signage, graphic design, print production and custom brand experiences for your business in Nairobi, Kenya.',
    type: 'website',
  },
};

export const getCanonicalUrl = (pathname: string): string => {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '') || '/';
  return `${SITE_CONFIG.url}${normalizedPath === '/' ? '' : normalizedPath}`;
};

export const buildBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      inLanguage: 'en-KE',
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: SITE_CONFIG.image,
      image: SITE_CONFIG.image,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      description: SITE_CONFIG.description,
      areaServed: {
        '@type': 'City',
        name: 'Nairobi',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.streetAddress,
        addressLocality: SITE_CONFIG.address.addressLocality,
        addressCountry: SITE_CONFIG.address.addressCountry,
      },
      sameAs: SITE_CONFIG.socialLinks,
      priceRange: '$$-$$$',
    },
  ],
});
