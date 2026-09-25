import React from 'react';
import { ArrowRight, MapPin, Droplets, Footprints, Wrench, Star, Map, Leaf } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onFindDealer: () => void;
}

const BENEFITS = [
  { icon: Droplets, title: '100% Waterproof' },
  { icon: Footprints, title: 'Slip Resistant' },
  { icon: Wrench, title: 'Low Maintenance', caption: 'No annual staining or sealing' },
];

const TRUST_STATS = [
  { icon: Star, value: "Since the 1970's", caption: 'Proven performance' },
  { icon: Map, value: '20M+ Sq. Ft.', caption: 'Installed across North America' },
  { icon: Droplets, value: '100% Waterproof', caption: 'Protection + walking surface' },
  { icon: Leaf, value: 'Low Maintenance', caption: 'No annual staining or sealing' },
];

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onFindDealer }) => {
  return (
    <section id="hero">
      <div className="relative overflow-hidden bg-white lg:min-h-[36rem] xl:min-h-[40rem]">
        <img
          src="/brand/hero_image.png"
          alt="Elevated waterproof deck with lounge seating above a covered living space"
          className="absolute inset-0 h-full w-full object-cover object-[82%_36%] lg:object-contain lg:object-right-bottom"
        />
        <div aria-hidden="true" className="hero-text-gradient absolute inset-0" />

        <p className="script-accent absolute bottom-6 right-5 z-10 text-2xl text-white drop-shadow-[0_2px_12px_rgba(2,6,23,0.45)] sm:bottom-48 sm:right-18 transform rotate-[-25deg] sm:text-3xl">
          Beautiful Above.
          <br />
          Protected Below.
        </p>

        <div className="relative z-10 flex items-center px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:min-h-[36rem] lg:px-10 lg:pt-24 lg:pb-16 xl:min-h-[40rem] xl:pt-28 xl:pl-[max(2.5rem,calc(50vw-38rem))]">
          <div className="max-w-xl ">
            <h1 className="font-display text-[2rem] font-semibold leading-[1.12] tracking-normal text-navy sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem]">
              Waterproof Your Deck.
              <br />
              Protect What&apos;s Below.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              DeckRite&apos;s waterproof exterior vinyl creates a durable, attractive walking surface while providing a
              complete waterproof membrane for decks, balconies, porches, and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
              {BENEFITS.map((item) => (
                <div key={item.title} className="max-w-[8.5rem] text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-2 text-sm font-bold leading-tight text-navy">{item.title}</p>
                  {item.caption && (
                    <p className="mt-0.5 text-xs leading-snug text-slate-500">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-dark"
              >
                Explore DeckRite
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onFindDealer}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-navy"
              >
                <MapPin className="h-4 w-4" />
                Find a Distributor
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-5 py-6 lg:grid-cols-4">
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
