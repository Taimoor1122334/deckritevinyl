import React from 'react';
import { ArrowRight, MapPin, Droplets, Star, Map, Leaf } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onFindDealer: () => void;
}

const TRUST_STATS = [
  { icon: Star, value: "Since the 1970's", caption: 'Proven performance' },
  { icon: Map, value: '20M+ Sq. Ft.', caption: 'Installed across North America' },
  { icon: Droplets, value: '100% Waterproof', caption: 'Protection + walking surface' },
  { icon: Leaf, value: 'Low Maintenance', caption: 'No annual staining or sealing' },
];

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onFindDealer }) => {
  return (
    <section id="hero">
      <div className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-sand">
        <img
          src="/brand/hero-vinyl-deck.jpeg"
          alt="DeckRite waterproof vinyl membrane installed on a residential sundeck"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_30%]"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-900/45 via-slate-900/20 to-slate-900/5"
          aria-hidden="true"
        />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-xl space-y-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 sm:p-9">
            <h1 className="text-[2rem] sm:text-4xl lg:text-[2.9rem] font-extrabold tracking-tight leading-[1.1] text-navy">
              Waterproof Your Deck.
              <br />
              Protect What&apos;s Below.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              DeckRite&apos;s waterproof exterior vinyl creates a durable, attractive walking surface while providing a
              complete waterproof membrane for decks, balconies, porches, and more.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-dark"
              >
                Explore DeckRite
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onFindDealer}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-navy hover:bg-slate-50"
              >
                <MapPin className="h-4 w-4 text-navy" />
                Find a Distributor
              </button>
            </div>
          </div>
        </div>

        <p className="absolute bottom-4 right-20 hidden rounded bg-navy/70 px-2.5 py-1 text-[11px] font-medium text-white lg:block">
          Actual DeckRite installation
        </p>
      </div>

      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-5 py-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
            {TRUST_STATS.map((stat) => (
              <div key={stat.value} className="flex items-center gap-3 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <stat.icon className="h-7 w-7 shrink-0 text-white/80" strokeWidth={1.5} />
                <div>
                  <div className="text-sm font-bold leading-tight sm:text-base">{stat.value}</div>
                  <div className="mt-0.5 text-[11px] leading-tight text-white/70 sm:text-xs">{stat.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
