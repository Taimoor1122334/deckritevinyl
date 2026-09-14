import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SisterBrandsSection } from '../components/SisterBrandsSection';
import { Compass, Anchor, Truck, ExternalLink, ShieldCheck, CheckCircle, Award, ArrowRight } from 'lucide-react';

interface SisterBrandsPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const SisterBrandsPage: React.FC<SisterBrandsPageProps> = ({
  onNavigate,
  onOpenSampleModal,
}) => {
  return (
    <div id="sister-brands-page" className="min-h-screen bg-slate-50">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Sister Brands (MariDeck & DeckRite RV)' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-800">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              Little Rock Holdings Family of Brands
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Specialized Vinyl Solutions for Marine &amp; RV
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              DeckRite L.L.C. is proud to engineer industry-leading vinyl solutions across architectural, marine, and recreational vehicle markets. Our shared manufacturing facilities in North Little Rock, Arkansas produce high-performance membranes trusted by leading OEM boat builders and RV manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Sister Brand Cards */}
      <div className="py-4">
        <SisterBrandsSection />
      </div>

      {/* Formulation Comparison Matrix */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Shared Engineering Heritage, Specialized Formulations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Each product line utilizes our proprietary calendered vinyl compounding tailored to its specific operational environment:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* DeckRite Architectural */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-cyan-700 font-bold text-base">
                <ShieldCheck className="w-5 h-5" />
                <span>DeckRite Architectural</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designed specifically for residential sundecks and walk-on roofs over living areas. Prioritizes pedestrian slip resistance, solar reflectance, hot-air seam weldability, and building code compliance (CGSB 37.54 &amp; ICC-ES).
              </p>
              <div className="pt-2 border-t border-slate-200 text-xs font-semibold text-slate-700">
                Primary Thickness: 50 mil &amp; 60 mil
              </div>
            </div>

            {/* MariDeck Marine */}
            <div className="p-6 rounded-2xl bg-cyan-950 text-white border border-cyan-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-base">
                  <Anchor className="w-5 h-5" />
                  <span>MariDeck Marine</span>
                </div>
                <a
                  href="https://marideck.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Formulated for constant water exposure, gasoline splatters, fish blood, and harsh marine sun on pontoon boats and docks. Engineered to permanently replace foul, rotting marine carpet.
              </p>
              <div className="pt-2 border-t border-cyan-800/80 text-xs font-semibold text-cyan-200">
                Primary Thickness: 34 mil &amp; 80 mil
              </div>
            </div>

            {/* DeckRite RV */}
            <div className="p-6 rounded-2xl bg-amber-950 text-white border border-amber-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                  <Truck className="w-5 h-5" />
                  <span>DeckRite RV</span>
                </div>
                <a
                  href="https://deckriterv.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineered for extreme abrasion resistance against slide-out rollers, chassis vibration, and severe winter storage temperature swings. Lightweight and moisture-impermeable.
              </p>
              <div className="pt-2 border-t border-amber-800/80 text-xs font-semibold text-amber-200">
                Primary Focus: Slide-Outs &amp; RV Flooring
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
