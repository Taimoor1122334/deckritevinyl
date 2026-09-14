import React from 'react';
import { ArrowRight, Package, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreVisualizer: () => void;
  onOpenSampleModal: () => void;
  onFindDealer: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreVisualizer,
  onOpenSampleModal,
  onFindDealer,
  onExploreProducts,
}) => {
  return (
    <section id="hero">
      <div className="relative w-full bg-navy">
        <img
          src="/brand/hero.jpg"
          alt="DeckRite vinyl decking — simple, clean and fast installation. Slip resistant, mildew resistant, waterproof."
          className="w-full h-auto object-cover max-h-[420px] lg:max-h-[520px]"
        />
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose">
              Waterproof vinyl decking since the late 1970s
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              DeckRite Premium Flooring
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              DeckRite Exterior Floor Covering is a popular alternative to high-maintenance wood decks and concrete patios. The system installs over existing or new decks and is a cost-efficient option for exterior walkways, balconies, docks, and sun porches.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 pt-1">
              {['Slip resistant (ADA tested)', 'Mildew resistant', 'Waterproof over living space', 'No annual staining or sealing'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-navy hover:bg-navy-dark text-white font-semibold text-sm"
              >
                View Premium Flooring
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 hover:border-navy text-slate-800 font-semibold text-sm"
              >
                <Package className="w-4 h-4 text-rose" />
                Free Color Swatches
              </button>
              <button
                onClick={onFindDealer}
                className="inline-flex items-center gap-1.5 px-3 py-3 text-navy font-semibold text-sm"
              >
                <MapPin className="w-4 h-4" />
                Find a Distributor
              </button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="/brand/lifestyle.jpg" alt="DeckRite finished deck with outdoor furniture" className="w-full h-56 object-cover" />
              <div className="p-5 bg-sand">
                <p className="text-sm font-semibold text-slate-900">One surface. Waterproofing and walking deck.</p>
                <p className="text-sm text-slate-600 mt-1">
                  Traditional methods build a deck on top of a roof membrane. With DeckRite, a single 3-ply vinyl covering does both jobs.
                </p>
                <button onClick={onExploreVisualizer} className="mt-3 text-sm font-semibold text-navy hover:underline">
                  See colors up close →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold">Late 1970s</div>
            <div className="text-xs text-white/80">Serving North America</div>
          </div>
          <div>
            <div className="text-xl font-bold">20 million+ sq ft</div>
            <div className="text-xs text-white/80">Installed across the continent</div>
          </div>
          <div>
            <div className="text-xl font-bold">50 &amp; 60 mil</div>
            <div className="text-xs text-white/80">3-ply laminated membrane</div>
          </div>
          <div>
            <div className="text-xl font-bold">68" × 90'</div>
            <div className="text-xs text-white/80">Standard roll size</div>
          </div>
        </div>
      </div>
    </section>
  );
};
