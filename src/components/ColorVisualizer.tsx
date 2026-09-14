import React, { useState } from 'react';
import { Package, Check } from 'lucide-react';
import { ColorPattern, SampleCartItem } from '../types';
import { DECKRITE_PATTERNS } from '../data/deckData';

interface ColorVisualizerProps {
  onAddSample: (pattern: ColorPattern) => void;
  sampleCart: SampleCartItem[];
  onOpenSampleModal: () => void;
}

const SCENES = [
  { id: 'lake', name: 'Lakefront walkout', image: '/gallery/balcony-1.jpg' },
  { id: 'covered', name: 'Covered sundeck', image: '/gallery/balcony-2.jpg' },
  { id: 'balcony', name: 'Second-story balcony', image: '/gallery/balcony-3.jpg' },
  { id: 'view', name: 'View deck', image: '/gallery/balcony-7.jpg' },
];

export const ColorVisualizer: React.FC<ColorVisualizerProps> = ({
  onAddSample,
  sampleCart,
  onOpenSampleModal,
}) => {
  const [selected, setSelected] = useState<ColorPattern>(DECKRITE_PATTERNS[0]);
  const [scene, setScene] = useState(SCENES[0]);
  const inCart = sampleCart.some((item) => item.id === selected.id);

  return (
    <section id="visualizer" className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Color preview</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">See DeckRite colors on a real deck</h2>
          <p className="text-slate-600 mt-2">
            Select a standard color and overlay it on official DeckRite project photography. Order free mailed swatches to confirm color in natural light.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[4/3]">
              <img src={scene.image} alt={scene.name} className="w-full h-full object-cover" />
              <div
                className="absolute inset-x-0 bottom-0 h-[42%] mix-blend-multiply opacity-80"
                style={{
                  backgroundImage: `url(${selected.image})`,
                  backgroundSize: 'cover',
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/95 rounded-md px-3 py-2">
                <div>
                  <p className="text-sm font-bold text-slate-900">{selected.name}</p>
                  <p className="text-xs text-slate-500">{scene.name}</p>
                </div>
                <button
                  onClick={() => (inCart ? onOpenSampleModal() : onAddSample(selected))}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-navy text-white text-xs font-semibold"
                >
                  {inCart ? <Check className="w-3.5 h-3.5" /> : <Package className="w-3.5 h-3.5" />}
                  {inCart ? 'In sample kit' : 'Add swatch'}
                </button>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              {SCENES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setScene(s)}
                  className={`flex-1 rounded-md overflow-hidden border ${scene.id === s.id ? 'border-navy ring-2 ring-navy/20' : 'border-slate-200'}`}
                >
                  <img src={s.image} alt={s.name} className="h-14 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {DECKRITE_PATTERNS.map((pattern) => {
                const active = selected.id === pattern.id;
                return (
                  <button
                    key={pattern.id}
                    onClick={() => setSelected(pattern)}
                    className={`rounded-lg border bg-white p-2 text-left ${active ? 'border-navy ring-2 ring-navy/15' : 'border-slate-200'}`}
                  >
                    <img src={pattern.thumb} alt={pattern.name} className="w-full h-24 object-contain" />
                    {pattern.isStandard && (
                      <span className="text-[10px] font-bold uppercase tracking-wide text-navy">Standard</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
