import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { ColorPattern } from '../types';
import { DECKRITE_PATTERNS, SHOWCASE_PROJECTS } from '../data/deckData';
import { SwatchLightbox } from './SwatchLightbox';

function ColorPanel({
  pattern,
  label,
  active,
  onActivate,
  onEnlarge,
}: {
  pattern: ColorPattern;
  label: string;
  active: boolean;
  onActivate: () => void;
  onEnlarge: () => void;
}) {
  return (
    <div className={`rounded-2xl overflow-hidden border bg-white ${active ? 'border-navy ring-2 ring-navy/20' : 'border-slate-200'}`}>
      <button type="button" onClick={onActivate} className="w-full text-left" aria-pressed={active}>
        <div className="relative">
          <img src={pattern.image} alt={`${pattern.name} membrane texture`} className="w-full aspect-square object-cover" />
          <span className="absolute top-3 left-3 bg-white/95 text-navy text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
            {label}
          </span>
        </div>
      </button>
      <div className="p-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{pattern.name}</h3>
          <p className="text-sm text-slate-600 mt-1">{pattern.description}</p>
        </div>
        <button
          type="button"
          onClick={onEnlarge}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md border border-slate-300 text-sm font-semibold shrink-0"
        >
          <ZoomIn className="w-4 h-4" />
          Close-up
        </button>
      </div>
    </div>
  );
}

export const ColorVisualizer: React.FC = () => {
  const [left, setLeft] = useState<ColorPattern>(DECKRITE_PATTERNS[0]);
  const [right, setRight] = useState<ColorPattern>(DECKRITE_PATTERNS[1]);
  const [slot, setSlot] = useState<'left' | 'right'>('left');
  const [lightbox, setLightbox] = useState<ColorPattern | null>(null);

  const assign = (pattern: ColorPattern) => {
    if (slot === 'left') setLeft(pattern);
    else setRight(pattern);
  };

  return (
    <section id="visualizer" className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Compare colors</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">See the membrane, not a fake overlay</h2>
          <p className="text-slate-600 mt-2">
            Screens cannot paint vinyl onto a photo accurately. Compare two real DeckRite textures side by side, enlarge either one, then look at actual installed decks. If you need a physical swatch, send your mailing address on the Contact page — the same way the original DeckRite site handles samples.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <ColorPanel
            pattern={left}
            label="Color A"
            active={slot === 'left'}
            onActivate={() => setSlot('left')}
            onEnlarge={() => setLightbox(left)}
          />
          <ColorPanel
            pattern={right}
            label="Color B"
            active={slot === 'right'}
            onActivate={() => setSlot('right')}
            onEnlarge={() => setLightbox(right)}
          />
        </div>

        <p className="text-sm text-slate-600 mt-6 mb-3">
          Selecting for <span className="font-semibold text-navy">{slot === 'left' ? 'Color A' : 'Color B'}</span> — click a swatch to change it.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {DECKRITE_PATTERNS.map((pattern) => {
            const isLeft = left.id === pattern.id;
            const isRight = right.id === pattern.id;
            return (
              <button
                key={pattern.id}
                type="button"
                onClick={() => assign(pattern)}
                className={`rounded-xl overflow-hidden border bg-white text-left ${
                  isLeft || isRight ? 'border-navy ring-2 ring-navy/20' : 'border-slate-200 hover:border-navy'
                }`}
              >
                <img src={pattern.image} alt={pattern.name} className="w-full h-24 object-cover" />
                <span className="block px-2 py-2 text-[11px] font-bold text-slate-800 leading-tight">
                  {pattern.name}
                  {isLeft ? ' · A' : isRight ? ' · B' : ''}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-12">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Installed DeckRite decks</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {SHOWCASE_PROJECTS.slice(0, 4).map((project) => (
              <figure key={project.id} className="rounded-xl overflow-hidden border border-slate-200 bg-white">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                <figcaption className="px-3 py-2 text-xs font-medium text-slate-700">{project.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <SwatchLightbox pattern={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
    </section>
  );
};
