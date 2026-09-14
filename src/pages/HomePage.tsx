import React from 'react';
import { Hero } from '../components/Hero';
import { ColorVisualizer } from '../components/ColorVisualizer';
import { ProductCatalog } from '../components/ProductCatalog';
import { WhyDeckRite } from '../components/WhyDeckRite';
import { ProjectGallery } from '../components/ProjectGallery';
import { InstallationResources } from '../components/InstallationResources';
import { EstimatorCalculator } from '../components/EstimatorCalculator';
import { DealerLocator } from '../components/DealerLocator';
import { SisterBrandsSection } from '../components/SisterBrandsSection';
import { ColorPattern, SampleCartItem } from '../types';
import { ArrowRight, ShieldCheck, Sparkles, Layers, BookOpen, MapPin, Calculator, Award, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
  onAddSample: (pattern: ColorPattern) => void;
  sampleCart: SampleCartItem[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenSampleModal,
  onAddSample,
  sampleCart,
}) => {
  return (
    <div id="home-page" className="space-y-0">
      
      {/* 1. High Impact Hero */}
      <Hero
        onExploreVisualizer={() => onNavigate('visualizer')}
        onOpenSampleModal={onOpenSampleModal}
        onFindDealer={() => onNavigate('dealers')}
        onExploreProducts={() => onNavigate('products')}
      />

      {/* Weatherdek-inspired Quick Feature Gateway Cards */}
      <section className="bg-slate-100 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: 60 mil Roof Grade */}
            <div
              onClick={() => onNavigate('products')}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-cyan-500 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-cyan-700 transition-colors">
                  60 Mil Roof Grade
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Certified single-ply walk-on roofing membrane approved for habitable living spaces, bedrooms, and dry storage below.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-700">
                <span>View 60 Mil Specs</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Interactive Visualizer */}
            <div
              onClick={() => onNavigate('visualizer')}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-cyan-500 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-cyan-700 transition-colors">
                  Deck Visualizer
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Preview 8 authentic slip-resistant patterns in high definition across suburban, lakefront, and rooftop architectural scenes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
                <span>Launch Visualizer</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Free Samples Kit */}
            <div
              onClick={onOpenSampleModal}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-cyan-500 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-cyan-700 transition-colors">
                  Free Sample Swatches
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Feel the embossed texture and inspect the genuine color under natural sunlight with up to 4 free 6&quot;×6&quot; swatches mailed free.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                <span>Order Free Kit ({sampleCart.length}/4)</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Find Installer */}
            <div
              onClick={() => onNavigate('dealers')}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-cyan-500 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-cyan-700 transition-colors">
                  Certified Installers
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Connect with authorized stocking distributors and certified master applicators across the United States and Canada.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span>Locate Dealer</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Interactive Color Visualizer Section with Full Page Link */}
      <div className="relative">
        <div className="bg-slate-50 py-3 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Interactive Deck Visualizer Preview
            </span>
            <button
              onClick={() => onNavigate('visualizer')}
              className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1"
            >
              <span>Open Full-Screen Visualizer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <ColorVisualizer
          onAddSample={onAddSample}
          sampleCart={sampleCart}
          onOpenSampleModal={onOpenSampleModal}
        />
      </div>

      {/* 3. Product Catalog with Dedicated Page Link */}
      <div className="relative">
        <ProductCatalog
          onOpenSampleModal={onOpenSampleModal}
          onOpenCalculator={() => onNavigate('estimator')}
        />
        <div className="bg-white py-6 border-b border-slate-200 text-center">
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition-colors cursor-pointer"
          >
            <span>Explore All Product Lines &amp; Technical Specifications</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>

      {/* 4. Why DeckRite - 3-Ply Anatomy & Comparison */}
      <WhyDeckRite />

      {/* 5. Project Inspiration Gallery */}
      <div className="relative">
        <ProjectGallery
          onSelectPatternForVisualizer={() => {
            onNavigate('visualizer');
          }}
        />
        <div className="bg-slate-50 py-6 border-b border-slate-200 text-center">
          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs border border-slate-300 shadow-2xs transition-colors cursor-pointer"
          >
            <span>Browse Full Gallery &amp; Before/After Transformations</span>
            <ArrowRight className="w-4 h-4 text-cyan-600" />
          </button>
        </div>
      </div>

      {/* 6. Architectural Specs & Guides */}
      <div className="relative">
        <InstallationResources />
        <div className="bg-white py-6 border-b border-slate-200 text-center">
          <button
            onClick={() => onNavigate('resources')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Visit Complete Architectural Specs &amp; CAD Download Center</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 7. Quick Estimator Strip */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/80 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            Deck Planning Tool
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Calculate Roll Linear Footage &amp; Adhesive Requirements
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Input your deck length, width, stair steps, and overhang to calculate required master rolls (68&quot; wide), PVC drip edge trim, and DeckRite bonding adhesives.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('estimator')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-sm shadow-lg transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch Interactive Material Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Authorized Dealers & Installers */}
      <DealerLocator />

      {/* 9. Sister Brands Section (MariDeck & DeckRite RV) */}
      <SisterBrandsSection />

    </div>
  );
};
