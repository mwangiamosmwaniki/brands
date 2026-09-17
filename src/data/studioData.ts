import {
  Project,
  Service,
  ProcessStep,
  WhyPillar,
  MaterialSwatch,
  WhyMoveReason,
  InHouseProcess,
} from '../types';

export const HERO_IMAGE = '/src/assets/images/shelterbrand_hero_visual_1788511234122.jpg';
export const ATELIER_IMAGE = '/src/assets/images/shelterbrand_atelier_press_1788511252573.jpg';
export const PROMOTIONAL_ITEMS_IMAGE = '/src/assets/images/Promotional_items.jpg';
export const BANNERS_IMAGE = '/src/assets/images/banners.jpg';
export const APPAREL_BRANDING_IMAGE = '/src/assets/images/Apparel_branding.jpg';
export const DIGITAL_PRINTING_IMAGE = '/src/assets/images/Digital_Printing.jpg';
export const SIGNAGE_IMAGE = '/src/assets/images/signage.jpg';
export const STICKERS_WALL_VEHICLE_BRANDING_IMAGE = '/src/assets/images/stickers2.jpg';
export const PRINT_READY_GRAPHIC_DESIGN_IMAGE = '/src/assets/images/print_ready.jpg';
export const ELECTIONS_IMAGE = '/src/assets/images/election2.jpg';
export const EVENT_DISPLAY_IMAGE = '/src/assets/images/event_display.jpg';
export const PACKAGE_IMAGE = '/src/assets/images/packaging.jpg';
export const PHOTO_PRINTING_IMAGE = '/src/assets/images/photo_Printing.jpg';
export const TRUST_IMAGE = '/src/assets/images/trust.webp';
export const EXPO_IMAGE = '/src/assets/images/expo.svg';
export const HOSPITALITY_IMAGE = '/src/assets/images/hosp.webp';
export const WORK_PROMO_IMAGE = '/src/assets/images/work-promo-1.svg';
export const OFFICE_BRANDING_IMAGE = '/src/assets/images/officebrand.svg';
export const LEGAL_IMAGE = '/src/assets/images/legal.svg';
export const PACKAGES_IMAGE = '/src/assets/images/packaging.svg';
export const FLEET_IMAGE = '/src/assets/images/fleet.svg'; 
export const DIGITAL_PRINT_IMAGE = '/src/assets/images/Digital_Printing2.jpg';
export const UV_PRINT_IMAGE = '/src/assets/images/uv_printing.png';
export const DTF_IMAGE = '/src/assets/images/dtf.jpg';
export const VINYL_PRINT_IMAGE = '/src/assets/images/vinyl.jpg';
export const LASER_ENGRAVING_IMAGE = '/src/assets/images/laser_engraving.jpg';
export const EMBROIDERY_IMAGE = '/src/assets/images/embroidery.jpg';
export const LARGE_PRINTING_IMAGE = '/src/assets/images/large_printing.jpg';
export const SUBLIMATION_IMAGE = '/src/assets/images/Sublimation.jpg';

export const HERO_SLIDES = [
  {
    image: FLEET_IMAGE,
    alt: 'Swift Logistics fleet of branded delivery vans in Nairobi',
    label: 'Fleet Branding & Vehicle Wraps',
    location: 'Atelier Archive · 2025',
  },
  {
    image: VINYL_PRINT_IMAGE,
    alt: 'Master Heidelberg letterpress and vintage cylinder relief machine in Westlands Nairobi',
    label: 'Letterpress & Relief Printing',
    location: 'The Mirage Atelier · Nairobi',
  },
  {
    image: OFFICE_BRANDING_IMAGE,
    alt: 'Moja Creative agency interior branding and wall graphics in Nairobi',
    label: 'Office Branding & Signage',
    location: 'Production Run · Materiality',
  },
  {
    image: HOSPITALITY_IMAGE,
    alt: 'Wellcare Hospital interior wayfinding signage and environmental graphics in Nairobi',
    label: 'Hospitality Branding & Wayfinding',
    location: 'Specialty Roastery Commission',
  },
  {
    image: EXPO_IMAGE,
    alt: 'NextGen Solutions exhibition booth and trade show display in Nairobi',
    label: 'Exhibition & Trade Show Display',
    location: 'East African Botanicals',
  },
];

export const STUDIO_DETAILS = {
  name: 'ShelterBrand',
  location: 'Nairobi / Kenya',
  fullAddress: 'Ayden Plaza, Ngara Road, Ngara, Nairobi, Kenya',
  email: 'hello@shelterbrand.co.ke',
  phone: '+254 768 737 198',
  secondaryPhone: '+254 768 737 198',
  coordinates: '1.2743° S, 36.8242° E',
  foundingYear: '2026',
  socialLinks: [
    {
      name: 'Instagram',
      handle: '@shelterbrand.ke',
      url: 'https://www.instagram.com/shelterlinksolutions/',
      description: 'Daily print proofs & studio archive',
    },
    {
      name: 'LinkedIn',
      handle: 'ShelterBrand East Africa',
      url: 'https://linkedin.com/company/shelterbrand',
      description: 'Corporate case studies & announcements',
    },
    {
      name: 'Facebook',
      handle: 'ShelterBrand Nairobi',
      url: 'https://facebook.com/shelterbrand',
      description: 'Community & client updates',
    },
    {
      name: 'Twitter / X',
      handle: '@shelterbrandke',
      url: 'https://twitter.com/shelterbrand',
      description: 'Design insights & news',
    },
    {
      name: 'WhatsApp Business',
      handle: '+254 719 480 320',
      url: 'https://wa.me/254768737198?text=Hello%20ShelterBrand%2C%20I%27d%20like%20to%20inquire%20about%20a%20branding%20and%20print%20project',
      description: 'Instant press & quotation chat',
    },
  ],
  headline: 'We build brands people remember.',
  subheadline: 'ShelterBrand is a Nairobi creative studio shaping bold identities, powerful visuals, and tangible brand experiences for ambitious businesses.',
  manifestoHeading: 'Good design gets attention. Great brands stay with you.',
  manifestoBody:
    'We believe great brands aren’t just seen on screens—they are felt in everyday life. In a world full of fast, forgettable content, people remember things that feel real, thoughtful, and well-made. At ShelterBrand, we bring together smart design thinking with genuine hands-on craftsmanship. From our studio and workshop in Westlands, Nairobi, we help ambitious businesses build distinct visual identities, packaging, and print work that connect warmly with people here at home and anywhere in the world.',
  brandStatement: 'From the first sketch to the final print.',
  statementSub:
    'Most agencies design on a computer and leave the printing to an unknown third party. We do both together under one roof. Our designers and printmakers collaborate every day so the colors match, the materials feel right, and what you see on screen turns out even better in your hands.',
};

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Promotional Items',
    headline: 'Branded merchandise your clients and staff actually keep.',
    description:
      'Notebooks, pens, mugs, flasks, water bottles, umbrellas, tote bags and corporate gifts, produced in-house and finished to a standard that reflects the brand on them.',
    deliverables: [
      'Notebooks & Executive Journals',
      'Branded Metal & Soft-touch Pens',
      'Ceramic Mugs & Stainless Vacuum Flasks',
      'Sports & Thermal Water Bottles',
      'Wind-resistant Golf Umbrellas',
      'Heavyweight Cotton Canvas Tote Bags',
      'Curated VIP Corporate Gift Hampers',
    ],
    ctaText: 'Explore promotional items →',
    tag: 'Merchandise & Corporate Gifting',
    image: PROMOTIONAL_ITEMS_IMAGE,
  },
  {
    number: '02',
    title: 'Banners',
    headline: 'Large-format display built to survive real-world conditions.',
    description:
      'Large-format display that has to survive a Nairobi week outdoors and still look sharp. Roll-up, media, telescopic and teardrop banners, flags and billboards: printed on our own large-format equipment.',
    deliverables: [
      'Deluxe Roll-Up Pull Banners',
      'Media Photo Walls & Step-and-Repeats',
      'Telescopic Adjustable Banners',
      'Teardrop & Sharkfin Flying Flags',
      'High-Tension PVC Billboards',
      'Wind-Permeable Mesh Displays',
    ],
    ctaText: 'Explore banners →',
    tag: 'Large-Format & Event Display',
    image: BANNERS_IMAGE,
  },
  {
    number: '03',
    title: 'Apparel Branding',
    headline: 'Uniforms and staff kit branded using the right process for each fabric.',
    description:
      'Uniforms and staff kit branded by the right process for the fabric: embroidery where it needs to last, DTF and heat transfer where the artwork is complex. Caps, hoodies, t-shirts, jackets, polos, overalls, dustcoats, reflectors and full uniform sets.',
    deliverables: [
      'Structured 5-Panel & 6-Panel Caps',
      'Heavy-Blend Hoodies & Fleece Jackets',
      'Combed Cotton Piqué Polos',
      'Ring-spun Fitted & Oversized T-Shirts',
      'Heavy Drill Overalls & Lab Dustcoats',
      'Reflective Safety Vests & Workwear Sets',
    ],
    ctaText: 'Explore apparel branding →',
    tag: 'Embroidery, DTF & Staff Kit',
    image: APPAREL_BRANDING_IMAGE,
  },
  {
    number: '04',
    title: 'Digital Printing',
    headline: 'The everyday print a business runs on.',
    description:
      'The everyday print a business runs on, done properly: business cards, flyers, brochures, company profiles, catalogues, booklets, letterheads, certificates, menus, price lists and posters.',
    deliverables: [
      'Ultra-thick 400–600gsm Business Cards',
      'Corporate Company Profiles & Annual Reports',
      'Saddle-Stitched & Perfect-Bound Booklets',
      'Multi-fold Marketing Brochures & Flyers',
      'Official Watermarked Letterheads',
      'Gold Foil Accreditation Certificates',
      'Waterproof Restaurant Menus & Posters',
    ],
    ctaText: 'Explore digital printing →',
    tag: 'Everyday Corporate Collateral',
    image: DIGITAL_PRINTING_IMAGE,
  },
  {
    number: '05',
    title: 'Signage',
    headline: 'Indoor and outdoor signage fabricated and installed by our own team.',
    description:
      '3D and 2D letters, neon, lightboxes, acrylic, directional, safety and roadside signs. Installation is bespoke to the site, not a standard bracket and a hope.',
    deliverables: [
      '3D Built-Up Channel & Halo Letters',
      'Custom Silicon LED Neon Displays',
      'Ultra-Slim Aluminum Lightboxes',
      'Laser-Polished Acrylic Reception Plaques',
      'Architectural Directional & Wayfinding Systems',
      'Heavy-Duty Roadside & Pylon Signs',
    ],
    ctaText: 'Explore signage →',
    tag: 'Architectural & Fabrication',
    image: SIGNAGE_IMAGE,
  },
  {
    number: '06',
    title: 'Stickers, Wall & Vehicle Branding',
    headline: 'Vinyl cut and applied on site.',
    description:
      'Vinyl cut and applied on site: full and partial vehicle wraps, wall branding for offices and retail, and window graphics. The application is where these jobs are won or lost, so we do it ourselves.',
    deliverables: [
      'Full Commercial Van & Fleet Wraps',
      'Precision Cut Vinyl Door Decals',
      'Full-Height Office Wall Murals',
      'Retail Storefront Window Graphics',
      'Frosted Privacy Vinyl with Cut-outs',
      'Waterproof Die-Cut Product Stickers',
    ],
    ctaText: 'Explore branding →',
    tag: 'Fleet, Murals & Window Graphics',
    image: FLEET_IMAGE,
  },
  {
    number: '07',
    title: 'Print-Ready Graphic Design',
    headline: 'Design created specifically for production.',
    description:
      'Design on its own, when you are printing elsewhere: including abroad. You get correctly set-up, print-ready artwork with the bleed, colour profile, file format and technical setup the production house needs, so nothing is lost in translation.',
    deliverables: [
      'Pre-press Bleed & Slug Configuration',
      'CMYK & Pantone Color Matching Proofs',
      'Packaging Dielines & Structural Geometry',
      'Vector Asset Packages & Outline Conversions',
      'Universal Production-Ready Master PDFs',
    ],
    ctaText: 'Explore graphic design →',
    tag: 'Pre-Press Art Direction & Setup',
    image: PRINT_READY_GRAPHIC_DESIGN_IMAGE,
  },
  {
    number: '08',
    title: 'Election Printing',
    headline: 'Campaign material produced at campaign speed.',
    description:
      'Campaign material produced at campaign speed: posters, banners, flyers, stickers, wheel covers and branded display, printed in the volumes and on the deadlines an election actually runs to.',
    deliverables: [
      'High-Speed Web & Offset Posters',
      'Rally PVC Banners & Stage Backdrops',
      'High-Volume Voter Flyers & Manifestos',
      'Branded Weatherproof Wheel Covers',
      'Reflective Outdoor Bumper Stickers',
      'Campaign T-Shirts & Branded Caps',
    ],
    ctaText: 'Explore election printing →',
    tag: 'High-Volume Campaign Speed',
    image: ELECTIONS_IMAGE,
  },
  {
    number: '09',
    title: 'Events Display',
    headline: 'Everything required to make a stand, launch or conference look considered and complete.',
    description:
      'Everything that makes a stand, a launch or a conference look like it was planned: backdrops, roll-ups, teardrops, gazebos, brochure stands, nametags and selfie frames.',
    deliverables: [
      'Seamless Fabric Tension Media Backdrops',
      'Heavy-Duty Aluminum Branded Gazebos',
      'Literature & Brochure Display Stands',
      'VIP Acrylic Nametags & Woven Lanyards',
      'Custom Social Photo & Selfie Frames',
      'Lectern & Stage Podium Wraps',
    ],
    ctaText: 'Explore events display →',
    tag: 'Stands, Launches & Conferences',
    image: EVENT_DISPLAY_IMAGE,
  },
  {
    number: '10',
    title: 'Packaging',
    headline: 'Printed cartons, gift boxes, kraft bags, jute bags and adhesive labels.',
    editorialQuote: 'The last thing your customer touches is often the first thing they remember.',
    description:
      'Printed cartons, gift boxes, kraft and jute bags, and the adhesive labels that go on them. Branded packaging is the last thing a customer touches and the part they photograph.',
    deliverables: [
      'Custom Die-Cut Printed Cartons',
      'Rigid Board Magnetic Gift Boxes',
      'Reinforced Twisted-Handle Kraft Bags',
      'Eco-Friendly Screenprinted Jute Bags',
      'Embossed Foil Product Roll Labels',
      'Custom Tissue Paper & Packaging Tape',
    ],
    ctaText: 'Explore packaging →',
    tag: 'Cartons, Bags & Unboxing',
    image: PACKAGE_IMAGE,
  },
  {
    number: '11',
    title: 'Photo Printing & Framing',
    headline: 'Photographic printing, mounting, canvas and framing for offices, reception walls, awards, exhibitions and premium displays.',
    description:
      'Photographic printing, mounting, canvas and framing: for offices, reception walls, awards, exhibitions and anything that deserves to be on a wall rather than on a phone.',
    deliverables: [
      'Museum-Grade Archival Pigment Prints',
      'Polished Acrylic Float & Foam-Board Mounting',
      'Heavyweight Gallery-Wrapped Stretched Canvas',
      'Custom Kenyan Hardwood & Metal Frames',
      'Executive Recognition Plaques & Awards',
      'Reception Wall Art Gallery Installations',
    ],
    ctaText: 'Explore photo printing →',
    tag: 'Archival Mounting & Framing',
    image: PHOTO_PRINTING_IMAGE,
  },
];

export const WHY_BRANDS_MOVE_TO_US: WhyMoveReason[] = [
  {
    number: '01',
    title: 'One supplier, not four',
    description:
      'A designer, a printer, a signage contractor and a merchandise broker each own a piece of your brand, and none of them owns the outcome. The result drifts. We hold the whole job.',
    highlight: 'We hold the whole job.',
  },
  {
    number: '02',
    title: 'Deadlines that hold',
    description:
      'Events, launches and tenders do not move. When work is brokered across workshops nobody controls the schedule. Producing in-house means the timeline is ours to keep.',
    highlight: 'Producing in-house means the timeline is ours to keep.',
  },
  {
    number: '03',
    title: 'Consistent, on-brand output',
    description:
      'Faded print, drifting colour and cheap merchandise do not read as a saving: they read as the brand. We match colour across every process because we run every process.',
    highlight: 'We match colour across every process because we run every process.',
  },
  {
    number: '04',
    title: 'Design included, not outsourced',
    description:
      'Most suppliers print only what you hand them. If you do not have artwork, we will develop it: concept through to production-ready files.',
    highlight: 'Concept through to production-ready files.',
  },
];

export const NINE_PROCESSES: InHouseProcess[] = [
  {
    number: '01',
    title: 'Digital Printing',
    description:
      'Short-to-medium runs with fast setup: the workhorse behind cards, flyers, profiles and everyday collateral.',
    image: DIGITAL_PRINT_IMAGE,
    tag: 'Commercial & Collateral',
    substrates: ['300–600gsm Artcards', 'Textured Linen', 'Kraft Paper', 'Synthetic Tear-Proof'],
    bestFor: 'Cards, flyers, company profiles & fast-turnaround collateral',
  },
  {
    number: '02',
    title: 'UV Printing',
    description:
      'Ink cured instantly with ultraviolet light, so it prints onto rigid and awkward surfaces, acrylic, wood, metal, promotional items, and resists scratching.',
    image: UV_PRINT_IMAGE,
    tag: 'Rigid Substrates & Tech',
    substrates: ['Cast Acrylic', 'Solid Hardwood', 'Anodized Aluminum', 'Tempered Glass'],
    bestFor: 'VIP desk plaques, branded electronics, wood gifts & awards',
  },
  {
    number: '03',
    title: 'Vinyl Cutting',
    description:
      'Precision-cut adhesive vinyl for wall branding, vehicle graphics, window work and signage lettering.',
    image:VINYL_PRINT_IMAGE,
    tag: 'Fleet & Architectural',
    substrates: ['Polymeric Cast Vinyl', 'Frosted Privacy Film', 'Reflective Safety Sheeting'],
    bestFor: 'Fleet wraps, frosted boardroom privacy & storefront glass',
  },
  {
    number: '04',
    title: 'DTF Printing',
    description:
      'Direct-to-film transfers that carry full-colour, detailed artwork onto fabric: including blends that resist conventional screen printing.',
    image:DTF_IMAGE,
    tag: 'Direct-To-Film Textile',
    substrates: ['100% Combed Cotton', 'Poly-Cotton Blends', 'Heavyweight Canvas', 'Spandex'],
    bestFor: 'Multi-colour graphic tees, detailed event apparel & hoodies',
  },
  {
    number: '05',
    title: 'Heat Transfer Pressing',
    description:
      'Heat and pressure to bond transfers permanently to garments and textiles: the finishing step behind much of our apparel work.',
    image:
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=1200&q=80',
    tag: 'Pneumatic Thermal Bonding',
    substrates: ['Piqué Cotton Polos', 'Fleece Jackets', 'High-Vis Safety Twill', 'Sport Jersey'],
    bestFor: 'Corporate uniform sets, industrial workwear & staff badges',
  },
  {
    number: '06',
    title: 'Large Format Printing',
    description:
      'Wide-format output for banners, billboards, roll-ups, gazebos and building wraps at full outdoor scale.',
    image: LARGE_PRINTING_IMAGE,
    tag: 'Outdoor & Structural Media',
    substrates: ['Heavy PVC Tarpaulin', 'Seamless Tension Fabric', 'Wind-Permeable Mesh'],
    bestFor: 'Highway billboards, summit backdrops, teardrops & gazebos',
  },
  {
    number: '07',
    title: 'Embroidery',
    description:
      'Stitched branding for caps, polos, jackets and uniforms: the finish corporate clients expect where a print would wear off.',
    image: EMBROIDERY_IMAGE,
    tag: 'Multi-Needle Dimensional',
    substrates: ['Structured Cotton Twill', 'Knitted Piqué', 'Heavy Softshell Fleece'],
    bestFor: 'Corporate caps, executive polo shirts & field team jackets',
  },
  {
    number: '08',
    title: 'Laser Engraving',
    description:
      'Precision engraving for corporate gifts, plaques, trophies, signage, metal items, wood products, and branded merchandise.',
    image: LASER_ENGRAVING_IMAGE,
    tag: 'Precision Laser Etching',
    substrates: ['Anodized Aluminum', 'Solid Hardwood', 'Acrylic & Glass'],
    bestFor: 'Corporate awards, executive gifts, signage & branded merchandise',
  },
  {
    number: '09',
    title: 'Sublimation',
    description:
      'Dye bonded into the material itself rather than sitting on top: used for mugs, flasks, mousepads and polyester apparel that will not crack or peel.',
    image: SUBLIMATION_IMAGE,
    tag: 'Molecular Dye Infusion',
    substrates: ['Coated Ceramic & Stoneware', 'Polymer Mousepads', 'Woven Lanyards'],
    bestFor: 'Corporate ceramic mugs, travel tumblers & event lanyards',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'Trust-Axis',
    title: 'Trust Axis',
    client: 'Nairobi Specialty in Finance',
    category: 'Brand Identity',
    year: '2025',
    image: TRUST_IMAGE,
    aspectRatio: 'aspect-[4/5]',
    description:
      'A bold, geometric visual identity for a Nairobi-based financial services firm, combining a modernist typographic system with a warm, approachable color palette.',
    disciplines: ['Brand Strategy', 'Custom Lettering', 'Eco-Pouch Packaging', 'Letterpress Menu Systems'],
    printSpecifications: [
      'Office Branding & Signage',
    ],
    impact: 'Expanded into 18 regional boutique retailers; +140% direct-to-consumer subscriber surge in 6 months.',
  },
  {
    id: 'NextGen-Solutions',
    title: 'NextGen Solutions',
    client: 'NextGen solutions Ltd.',
    category: 'Exhibition & Trade Show',
    year: '2024',
    image: EXPO_IMAGE,
    aspectRatio: 'aspect-[1/1]',
    description:
      'A dynamic exhibition booth and trade show display for a Nairobi-based technology solutions provider, featuring modular components, interactive digital screens, and sustainable materials.',
    disciplines: ['Structural Design', 'Label Engineering', 'Material Sourcing', 'Retail Display Trays'],
    printSpecifications: [
    ],
    impact: 'Increased booth traffic by 75% during the trade show; generated 200+ qualified leads and secured 5 new partnerships within the first month post-event.',
  },
  {
    id: 'Wellcare-hospital',
    title: 'Wellcare Hospital',
    client: 'Wellcare Medical Center',
    category: 'Branding & Signage',
    year: '2025',
      image: HOSPITALITY_IMAGE,
    aspectRatio: 'aspect-[16/10]',
    description:
      'A comprehensive branding and wayfinding system for a multi-specialty hospital, integrating patient-centric signage, staff uniforms, and environmental graphics to enhance navigation and patient experience.',
    disciplines: ['Environmental Graphics', 'Wayfinding Signage', 'Staff Uniforms', 'Patient Information Systems'],
    printSpecifications: [
    ],
    impact: 'Reduced patient navigation complaints by 65% within the first quarter post-launch; improved staff identification and workflow efficiency.',
  },
  {
    id: 'velora-lifestyle',
    title: 'Velora Lifestyle',
    client: 'Velora Lifestyle & Wellness',
    category: 'Brand Identity & Packaging',
    year: '2024',
    image: WORK_PROMO_IMAGE,
    aspectRatio: 'aspect-[4/5]',
    description:
      'A vibrant brand identity and packaging suite for a lifestyle and wellness company, emphasizing natural elements, holistic wellness, and premium product presentation.',
    disciplines: ['Visual System', 'Fleet Wrap System', 'Employee Uniforms', 'Executive Stationery'],
    printSpecifications: [
    ],
    impact: 'Achieved a 50% increase in brand recognition and customer engagement within the first six months of launch; secured distribution in 10+ high-end retail outlets.',
  },
  {
    id: 'moja-creative',
    title: 'Moja Creative',
    client: 'Moja Creative Agency',
    category: 'Shop Branding & Collateral',
    year: '2025',
    image: OFFICE_BRANDING_IMAGE,
    aspectRatio: 'aspect-[1/1]',
    description:
      'A cohesive shop branding and collateral package for a creative agency, including interior graphics, promotional materials, and client-facing touchpoints that reflect the agency’s innovative approach.',
    disciplines: ['Interior Graphics', 'Promotional Materials', 'Client Touchpoints', 'Brand Collateral'],
    printSpecifications: [
    ],
    impact: 'Enhanced client experience and brand perception, leading to a 30% increase in client retention and positive feedback on the agency’s physical space.',
  },
  {
    id: 'riverside-legal',
    title: 'Riverside Legal',
    client: 'Riverside Legal Services',
    category: 'Brand Identity & Marketing Collateral',
    year: '2024',
    image: LEGAL_IMAGE,
    aspectRatio: 'aspect-[16/10]',
    description:
      'A professional brand identity and marketing collateral package for a legal services firm, focusing on trust, clarity, and authority in visual communication.',
    disciplines: ['Brand Positioning', 'Visual Identity', 'Marketing Materials', 'Client Communications'],
    printSpecifications: [
    ],
    impact: 'Increased client inquiries by 40% within the first quarter post-launch; strengthened brand credibility and market positioning in the legal sector.',
  },
  {
    id: 'nATURA-BOX',
    title: 'NATURA Box',
    client: 'NATURA Products',
    category: 'Packaging Design',
    year: '2024',
    image: PACKAGES_IMAGE,
    aspectRatio: 'aspect-[16/10]',
    description:
      'A sustainable packaging design for NATURA, a natural skincare brand, emphasizing eco-friendly materials and minimalist aesthetics to enhance product appeal and environmental responsibility.',
    disciplines: ['Brand Positioning', 'Visual Identity', 'Marketing Materials', 'Client Communications'],
    printSpecifications: [
    ],
    impact: 'Achieved a 25% reduction in packaging waste and improved customer perception of the brand’s commitment to sustainability, leading to increased sales and positive media coverage.',
  },
  {
    id: 'Swift-fleet',
    title: 'Swift Fleet',
    client: 'Swift Logistics',
    category: 'Brand Identity & Marketing Collateral',
    year: '2024',
    image: FLEET_IMAGE,
    aspectRatio: 'aspect-[16/10]',
    description:
      'A professional brand identity and marketing collateral package for a logistics company, focusing on reliability, efficiency, and modernity in visual communication.',
    disciplines: ['Brand Positioning', 'Visual Identity', 'Marketing Materials', 'Client Communications'],
    printSpecifications: [
    ],
    impact: 'Increased client inquiries by 40% within the first quarter post-launch; strengthened brand credibility and market positioning in the logistics sector.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Immersion & Ground Truth',
    description: 'Understand the business, audience and opportunity.',
    deliverables: [
      'Stakeholder & Leadership Interviews',
      'Competitive Landscape & Market Gap Audit',
      'Nairobi & Regional Cultural Touchpoints',
      'Audience Persona Archetypes & Jobs to be Done',
    ],
    timeline: 'Week 1 — 2',
  },
  {
    number: '02',
    title: 'Define',
    tagline: 'Strategic North Star',
    description: 'Build the strategy and creative direction.',
    deliverables: [
      'Brand Positioning & Value Proposition',
      'Verbal Tone of Voice & Manifesto',
      'Three Distinct Creative Territories',
      'Material & Physical Finish Moodboards',
    ],
    timeline: 'Week 3 — 4',
  },
  {
    number: '03',
    title: 'Design',
    tagline: 'Form, Color & Identity',
    description: 'Develop the identity and visual system.',
    deliverables: [
      'Logo Systems & Dynamic Micro-variants',
      'Color Harmonies with Pantone Formulations',
      'Typography Hierarchy & Custom Ligatures',
      'Application Mockups (Print, Packaging, Digital)',
    ],
    timeline: 'Week 5 — 7',
  },
  {
    number: '04',
    title: 'Produce',
    tagline: 'Tactile Transformation',
    description: 'Bring the brand into the real world.',
    deliverables: [
      'In-house Pre-press Color Proofing',
      'Physical Substrate Testing & Paper Dummies',
      'Die-cutting, Foil Tooling & Emboss Plates',
      'On-press Supervised Quality Control',
    ],
    timeline: 'Week 8 — 9',
  },
  {
    number: '05',
    title: 'Launch',
    tagline: 'Activation & Evolution',
    description: 'Deliver, activate and evolve.',
    deliverables: [
      'Production-Ready Vector & Print Master Files',
      'Comprehensive Digital Brand Portal',
      'Team Asset Training & Brand Guardian Guidelines',
      'Launch Marketing Collateral Deployment',
    ],
    timeline: 'Week 10+',
  },
];

export const WHY_PILLARS: WhyPillar[] = [
  {
    title: 'Design that makes sense',
    subtitle: 'Every creative choice has a clear reason behind it.',
    description:
      'We don’t chase short-lived design trends or make things complicated just to look clever. We take the time to understand your customers, your market, and your goals so your brand looks fresh, works smoothly, and builds lasting trust.',
    details: [
      'We listen and research before putting pen to paper',
      'Clear, honest messaging that connects with customers',
      'Timeless visuals that stay relevant for years',
    ],
  },
  {
    title: 'Rooted in the real world',
    subtitle: 'We know how materials behave outside of a screen.',
    description:
      'A design can look stunning in a computer mockup, but what matters is how it feels in your customer’s hands. Because we run our own print machinery, we know exactly how paper, fabric, ink, and packaging perform in everyday life.',
    details: [
      'No surprise mistakes or letdowns when your print arrives',
      'Experienced craftspeople who check every item by hand',
      'Carefully selected papers, fabrics, and long-lasting inks',
    ],
  },
  {
    title: 'Proudly Kenyan. Ready for the world.',
    subtitle: 'Local warmth, vibrant energy, and international standards.',
    description:
      'Nairobi is full of creativity, energy, and innovation. We bring that lively spirit and warmth to our work, while maintaining the clean, polished finish you would expect from top studios anywhere in the world.',
    details: [
      'Distinctive design inspired by modern East African life',
      'Crisp, easy-to-read typography and balanced layouts',
      'Branding that travels seamlessly across borders',
    ],
  },
  {
    title: 'One friendly team from start to finish',
    subtitle: 'Everything handled under one roof, without the runaround.',
    description:
      'Instead of hiring a designer, chasing a separate printer, and coordinating an installer, you work with one supportive team that cares about your project from the very first conversation to final delivery.',
    details: [
      'A direct point of contact who truly knows your project',
      'Save time, reduce stress, and avoid miscommunication',
      'Consistent colors and quality across every branded piece',
    ],
  },
];

export const MATERIAL_SWATCHES: MaterialSwatch[] = [
  {
    id: 'cotton-400',
    name: 'Soft White Cotton 400gsm',
    category: 'Paper Substrate',
    colorHex: '#f5f7fa',
    specs: 'FSC Certified / 100% Recycled Cotton / Deep Tactile Tooth',
    description: 'Heavyweight organic paper providing immense tactile depth for luxury stationery and packaging inserts.',
  },
  {
    id: 'emerald-foil',
    name: 'Emerald Green Hot Foil',
    category: 'Specialty Finish',
    colorHex: '#1f7a63',
    specs: 'Precision Hot Stamp / Micro-embossed Texture / Semi-matte Sheen',
    description: 'Distinctive emerald metallic finish capturing light with prestige and clarity without gaudy gloss.',
  },
  {
    id: 'navy-board',
    name: 'Deep Navy Blue Greyboard',
    category: 'Rigid Substrate',
    colorHex: '#081c2d',
    specs: '1200gsm Rigid Core / Dyed-through Pulp / Crisp Edge Retention',
    description: 'Structural bedrock for presentation boxes, hardback dossiers, and VIP invitation folios.',
  },
  {
    id: 'cool-gray-vellum',
    name: 'Cool Gray Translucent Vellum',
    category: 'Overlay Material',
    colorHex: '#9aa3a8',
    specs: '115gsm Cloud-formed Cellulose / Translucent Matte Finish',
    description: 'Adds an enigmatic editorial veil to brand monographs, certificates, and lookbooks.',
  },
];
