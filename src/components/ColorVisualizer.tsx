import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { ColorPattern } from '../types';
import { DECKRITE_PATTERNS } from '../data/deckData';
import { SwatchLightbox } from './SwatchLightbox';

function ColorPanel({
  pattern,
  label,
  onSelect,
  onEnlarge,
}: {
  pattern: ColorPattern;
  label: string;
  onSelect: (id: string) => void;
  onEnlarge: () => void;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
      <div className="relative">
        <img
          src={pattern.image}
          alt={`${pattern.name} membrane texture`}
          className="w-full h-64 sm:h-80 lg:h-auto lg:aspect-square object-cover"
        />
        <span className="absolute top-3 left-3 bg-white/95 text-navy text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
          {label}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <select
            value={pattern.id}
            onChange={(event) => onSelect(event.target.value)}
            aria-label={`Choose ${label}`}
            className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base font-bold text-slate-900 focus:border-navy focus:outline-none"
          >
            {DECKRITE_PATTERNS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={onEnlarge}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md border border-slate-300 text-sm font-semibold shrink-0 hover:border-navy transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
            Close-up
          </button>
        </div>
        <p className="text-sm text-slate-600 mt-3">{pattern.description}</p>
      </div>
    </div>
  );
}

export const ColorVisualizer: React.FC = () => {
  const [left, setLeft] = useState<ColorPattern>(DECKRITE_PATTERNS[0]);
  const [right, setRight] = useState<ColorPattern>(DECKRITE_PATTERNS[1]);
  const [lightbox, setLightbox] = useState<ColorPattern | null>(null);

  const patternFor = (id: string) => DECKRITE_PATTERNS.find((pattern) => pattern.id === id) ?? DECKRITE_PATTERNS[0];

  return (
    <section id="visualizer" className="scroll-mt-24 py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Compare colors</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">See the membrane, not a fake overlay</h2>
          <p className="text-slate-600 mt-2">
            Screens cannot paint vinyl onto a photo accurately. Pick any two DeckRite colors to see the real membrane
            textures side by side, then enlarge either one for a full-size close-up.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <ColorPanel
            pattern={left}
            label="Color A"
            onSelect={(id) => setLeft(patternFor(id))}
            onEnlarge={() => setLightbox(left)}
          />
          <ColorPanel
            pattern={right}
            label="Color B"
            onSelect={(id) => setRight(patternFor(id))}
            onEnlarge={() => setLightbox(right)}
          />
        </div>
      </div>

      <SwatchLightbox pattern={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
    </section>
  );
};
