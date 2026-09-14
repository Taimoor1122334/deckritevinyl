import React, { useState } from 'react';
import { ColorPattern } from '../types';
import { DECKRITE_PATTERNS } from '../data/deckData';
import { SwatchLightbox } from './SwatchLightbox';

export const ColorSwatchGrid: React.FC = () => {
  const [active, setActive] = useState<ColorPattern | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {DECKRITE_PATTERNS.map((pattern) => (
          <button
            key={pattern.id}
            type="button"
            onClick={() => setActive(pattern)}
            className="group rounded-2xl border border-slate-200 bg-white p-3 text-left hover:border-navy hover:shadow-md transition-all"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-100">
              <img
                src={pattern.image}
                alt={pattern.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="mt-3 font-bold text-slate-900">{pattern.name}</p>
            <p className="text-xs text-navy font-semibold mt-0.5">Click for close-up</p>
          </button>
        ))}
      </div>
      <SwatchLightbox pattern={active} onClose={() => setActive(null)} onChange={setActive} />
    </>
  );
};
