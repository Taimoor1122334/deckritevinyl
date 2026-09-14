import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ColorVisualizer } from '../components/ColorVisualizer';
import { ColorPattern, SampleCartItem } from '../types';
import { DECKRITE_PATTERNS } from '../data/deckData';

interface VisualizerPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
  onAddSample: (pattern: ColorPattern) => void;
  sampleCart: SampleCartItem[];
}

export const VisualizerPage: React.FC<VisualizerPageProps> = ({
  onNavigate,
  onOpenSampleModal,
  onAddSample,
  sampleCart,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Colors' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Available Colors</h1>
          <p className="text-white/80 mt-3 max-w-2xl">
            Standard colors: Sahara Tan, Slate Gray, Tropical Cream, Lakewood Marble, and Tuscany Sand. Harvest and Riverstone are also offered. Request free mailed swatches to confirm color in natural light — screens vary.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DECKRITE_PATTERNS.map((pattern) => (
          <article key={pattern.id} className="rounded-xl border border-slate-200 p-4 bg-white">
            <img src={pattern.thumb} alt={pattern.name} className="w-full h-40 object-contain" />
            <h2 className="font-bold text-slate-900 mt-2">{pattern.name}</h2>
            <p className="text-sm text-slate-600 mt-1">{pattern.description}</p>
            <button
              onClick={() => onAddSample(pattern)}
              className="mt-3 text-sm font-semibold text-navy hover:underline"
            >
              {sampleCart.some((s) => s.id === pattern.id) ? 'In sample kit' : 'Add to sample kit'}
            </button>
          </article>
        ))}
      </div>
      <ColorVisualizer
        onAddSample={onAddSample}
        sampleCart={sampleCart}
        onOpenSampleModal={onOpenSampleModal}
      />
    </div>
  );
};
