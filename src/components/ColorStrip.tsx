import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ColorPattern } from '../types';
import { DECKRITE_PATTERNS } from '../data/deckData';
import { SwatchLightbox } from './SwatchLightbox';

interface ColorStripProps {
  onViewAllColors: () => void;
}

const COUNT_WORDS = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

export const ColorStrip: React.FC<ColorStripProps> = ({ onViewAllColors }) => {
  const [active, setActive] = useState<ColorPattern | null>(null);
  const colorCount = COUNT_WORDS[DECKRITE_PATTERNS.length] ?? String(DECKRITE_PATTERNS.length);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-10 sm:px-10 sm:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-rose">Explore the possibilities</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-[2rem]">
            {colorCount} Beautiful Colors. Endless Possibilities.
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            From classic neutrals to rich, modern tones, DeckRite offers a color for every style.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {DECKRITE_PATTERNS.map((pattern) => (
            <button key={pattern.id} type="button" onClick={() => setActive(pattern)} className="group text-center">
              <div className="aspect-square overflow-hidden rounded-lg border border-slate-200 bg-white transition-all group-hover:border-navy group-hover:shadow-md">
                <img
                  src={pattern.image}
                  alt={`${pattern.name} vinyl membrane`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-xs font-semibold text-slate-800">{pattern.name}</p>
              <p className="text-[11px] font-semibold text-navy opacity-0 transition-opacity group-hover:opacity-100">
                Click for close-up
              </p>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onViewAllColors}
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-navy-dark"
          >
            View Color Details
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        </div>
      </div>

      <SwatchLightbox pattern={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  );
};
