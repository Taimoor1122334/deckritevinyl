import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

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
            {/* Prominent Business Name & Official Logo */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-rose" />
                <span>North Little Rock, AR • Since the 1970's</span>
              </div>
              
              {/* <div className="pt-1">
                <img
                  src="/brand/deckrite-logo.png"
                  alt="DeckRite"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div> */}

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Waterproof Exterior Vinyl Decking
              </h1>
            </div>

            {/* Exact Client Requested Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              DeckRite's waterproof exterior vinyl is a popular alternative to high-maintenance wood decks and concrete patios. The system installs over existing or new decks and is a cost-efficient option for exterior walkways, balconies, docks, and sun porches.
            </p>

            {/* Core Feature Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                <span>Slip resistant (ADA tested)</span>
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
                src="/brand/hero-deck.jpg"
                alt="DeckRite waterproof exterior vinyl sundeck overlooking lake"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold">Since the 1970's</div>
            <div className="text-xs text-white/80">Serving North America</div>
          </div>
          <div>
            <div className="text-xl font-bold">20M+ Sq. Ft.</div>
            <div className="text-xs text-white/80">Installed across the continent</div>
          </div>
          <div>
            <div className="text-xl font-bold">50 &amp; 60 mil</div>
            <div className="text-xs text-white/80">Heavy-duty 3-ply membrane</div>
          </div>
          <div>
            <div className="text-xl font-bold">68" × 90'</div>
            <div className="text-xs text-white/80">Standard roll dimensions</div>
          </div>
        </div>
      </div>
    </section>
  );
};
