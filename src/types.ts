export type MembraneThickness = '50 mil' | '60 mil' | 'Both';
export type ColorTone = 'warm' | 'cool' | 'neutral';

export interface ColorPattern {
  id: string;
  name: string;
  thickness: MembraneThickness;
  tone: ColorTone;
  description: string;
  colorHex: string;
  image: string;
  thumb: string;
  isStandard: boolean;
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'membranes' | 'accessories';
  mil?: string;
  tagline: string;
  description: string;
  warranty: string;
  applications: string[];
  specifications: { [key: string]: string };
  features: string[];
  image: string;
}

export type GalleryCategory = 'deck' | 'balcony' | 'lakefront' | 'pool' | 'walkway';

export interface GalleryImage {
  id: string;
  title: string;
  category: GalleryCategory;
  caption: string;
  alt: string;
  thumb: string;
  full: string;
  featured?: boolean;
}

export interface CustomerProjectImage {
  src: string;
  alt: string;
}

export interface CustomerProject {
  id: string;
  location: string;
  title: string;
  pattern?: string;
  caption: string;
  images: CustomerProjectImage[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  location: string;
  category: 'residential' | 'rooftop' | 'lakefront' | 'commercial';
  patternUsed: string;
  patternId: string;
  description: string;
  image: string;
  thumb: string;
}

export interface Dealer {
  id: string;
  name: string;
  type: 'Headquarters' | 'Canadian Affiliate';
  address: string;
  city: string;
  stateOrProvince: string;
  country: 'USA' | 'Canada';
  postalCode: string;
  phone: string;
  email: string;
  website?: string;
  servesRegions: string[];
}

export interface ResourceDoc {
  id: string;
  title: string;
  category: 'Architectural & Specs' | 'Installation Guides' | 'Technical Data' | 'Warranty & Care';
  docType: 'PDF';
  fileSize: string;
  description: string;
  url: string;
}

export interface DetailDrawing {
  id: string;
  code: string;
  title: string;
  description?: string;
  updated?: string;
  system?: string;
  isNew?: boolean;
  image: string;
  url?: string;
  steps?: string[];
  notes?: string[];
  callouts?: string[];
}

export interface CornerPhotoGuide {
  id: string;
  type: 'inside' | 'outside';
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  technique: string;
  drawingRef: string;
  image: string;
}

export interface TechnicalBulletin {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  purpose: string;
  pdfUrl?: string;
  status?: 'published' | 'pending';
  regularProcedure?: {
    step: number;
    title: string;
    description: string;
  }[];
  cleanerMatrix?: {
    condition: string;
    cleaner: string;
    instructions: string;
  }[];
  recommendedPractices: string[];
  avoidPractices: string[];
  importantNotice: string;
  fieldChecks?: string[];
  specRows?: { label: string; value: string }[];
}

export interface TechnicalDataSheet {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: 'Accessories' | 'Flashing' | 'Perimeter Edge';
  pdfUrl: string;
  image: string;
  overview: string;
  description: string;
  construction: string;
  colors: string[];
  specs: { property: string; value: string }[];
  applicationPoints: string[];
  storageNotes?: string;
  precautions?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
