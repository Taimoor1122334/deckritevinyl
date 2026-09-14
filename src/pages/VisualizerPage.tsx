import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ColorVisualizer } from '../components/ColorVisualizer';
import { ColorSwatchGrid } from '../components/ColorSwatchGrid';
import { ColorPattern, SampleCartItem } from '../types';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ColorSwatchGrid
          onAddSample={onAddSample}
          sampleCart={sampleCart}
          onOpenSampleModal={onOpenSampleModal}
        />
      </div>
      <ColorVisualizer
        onAddSample={onAddSample}
        sampleCart={sampleCart}
        onOpenSampleModal={onOpenSampleModal}
      />
    </div>
  );
};
