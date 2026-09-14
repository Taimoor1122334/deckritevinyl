export type MembraneThickness = '50 mil' | '60 mil' | 'Both';
export type ColorTone = 'warm' | 'cool' | 'neutral' | 'earth';

export interface ColorPattern {
  id: string;
  name: string;
  series?: 'Platinum Series' | 'Standard Series' | 'Industrial Series';
  thickness: MembraneThickness;
  tone: ColorTone;
  description: string;
  texturePattern: string;
  colorHex: string;
  secondaryHex: string;
  accentColor: string;
  features: string[];
  bestFor: string;
  isPopular?: boolean;
  isNew?: boolean;
  textureStyle: 'marble' | 'slate' | 'sand' | 'granite' | 'riverstone' | 'quartz' | 'wood' | 'stone';
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
  beforeImage?: string;
  features: string[];
}

export interface Dealer {
  id: string;
  name: string;
  type: 'Authorized Distributor' | 'Certified Master Installer' | 'Decking Contractor';
  address: string;
  city: string;
  stateOrProvince: string;
  country: 'USA' | 'Canada';
  postalCode: string;
  phone: string;
  email: string;
  servesRegions: string[];
}

export interface ResourceDoc {
  id: string;
  title: string;
  category: 'Architectural & Specs' | 'Installation Guides' | 'Building Codes' | 'Warranty & Care';
  docType: 'PDF' | 'CAD / DWG' | 'DOC';
  fileSize: string;
  description: string;
}

export interface SampleCartItem {
  id: string;
  name: string;
  pattern: string;
  colorHex: string;
}
