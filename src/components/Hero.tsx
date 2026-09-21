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
      <div className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-navy-dark">
        <img
          src="/brand/hero-waterfront-deck.jpg"
          alt="Expansive elevated waterproof deck with lounge seating overlooking a lake"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_62%]"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/5"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/55 via-slate-950/5 to-transparent"
          aria-hidden="true"
        />

        <div className="relative w-full max-w-7xl mx-auto px-4 pb-12 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-40">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-10 shrink-0 rounded-full bg-teal" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/90">
              Waterproof Exterior Vinyl Decking
            </p>
          </div>

          <h1 className="mt-6 max-w-4xl text-[1.75rem] font-extrabold leading-[1] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(2,6,23,0.6)] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem]">
            Waterproof Your Deck.
            <br />
            Protect What&apos;s Below.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 drop-shadow-[0_1px_12px_rgba(2,6,23,0.6)] sm:text-lg">
            DeckRite&apos;s waterproof exterior vinyl creates a durable, attractive walking surface while providing a
            complete waterproof membrane for decks, balconies, porches, and more.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreProducts}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 text-sm font-bold text-navy shadow-lg transition-colors hover:bg-sand"
            >
              Explore DeckRite
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={onFindDealer}
              className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <MapPin className="h-4 w-4" />
              Find a Distributor
            </button>
          </div>
        </div>
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
