import React from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreVisualizer: () => void;
  onFindDealer: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreVisualizer,
  onFindDealer,
  onExploreProducts,
}) => {
  return (
    <section id="hero" className="bg-white">
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Business Brand, Headline, Client Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h1 className="font-extrabold tracking-tight text-slate-900 leading-tight">
                <span className="block text-[1.75rem] sm:text-4xl text-navy">Waterproof Your Deck</span>
                <span className="block text-3xl sm:text-[2.75rem] lg:text-5xl mt-1.5">Protect What&apos;s Below</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              DeckRite&apos;s waterproof exterior vinyl creates a durable, attractive walking surface while providing a complete waterproof membrane for decks, balconies, porches, and more.
            </p>

            {/* Core Feature Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                <span>Slip resistant — meets ADA standards</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                <span>100% waterproof walking deck</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                <span>Mildew resistant membrane</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                <span>No annual staining or sealing</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-navy hover:bg-navy-dark text-white font-semibold text-sm shadow-sm transition-all"
              >
                View DeckRite Products
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreVisualizer}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-slate-300 hover:border-navy text-slate-800 font-semibold text-sm bg-white hover:bg-slate-50 transition-all"
              >
                View Colors
              </button>
              <button
                onClick={onFindDealer}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-navy font-semibold text-sm hover:underline"
              >
                <MapPin className="w-4 h-4 text-rose" />
                Find a Distributor
              </button>
            </div>
          </div>

          {/* Right Column: Crisp, High-Resolution Architectural Photography (No Blur) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="/brand/hero-vinyl-deck.jpeg"
                alt="Finished DeckRite Dove Grey waterproof vinyl deck"
                className="w-full h-auto aspect-[16/10] object-cover object-center"
              />
              <div className="p-5 bg-sand/70 border-t border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Dual Function: Waterproofing &amp; Walking Surface
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    A single 3-ply membrane serves as both roof-grade waterproofing and durable walking deck.
                  </p>
                </div>
                <button
                  onClick={onExploreVisualizer}
                  className="shrink-0 text-xs font-bold text-navy hover:text-navy-dark hover:underline flex items-center gap-1"
                >
                  See colors →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Specification Bar */}
      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="space-y-1.5">
            <div className="text-2xl sm:text-[1.65rem] font-bold leading-snug">Since the 1970&apos;s</div>
            <div className="text-sm sm:text-base text-white/85">Proven performance</div>
          </div>
          <div className="space-y-1.5">
            <div className="text-2xl sm:text-[1.65rem] font-bold leading-snug">20M+ Sq. Ft.</div>
            <div className="text-sm sm:text-base text-white/85">Installed across North America</div>
          </div>
          <div className="space-y-1.5">
            <div className="text-2xl sm:text-[1.65rem] font-bold leading-snug">100%</div>
            <div className="text-sm sm:text-base text-white/85">Waterproof</div>
          </div>
          <div className="space-y-1.5">
            <div className="text-2xl sm:text-[1.65rem] font-bold leading-snug">Low Maintenance</div>
            <div className="text-sm sm:text-base text-white/85">No annual staining or sealing</div>
          </div>
        </div>
      </div>
    </section>
  );
};
