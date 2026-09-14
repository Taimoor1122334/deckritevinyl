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
  category: 'membranes' | 'railings' | 'accessories';
  mil?: string;
  tagline: string;
  description: string;
  warranty: string;
  applications: string[];
  specifications: { [key: string]: string };
  features: string[];
  image: string;
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
  image: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
