import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ColorVisualizer } from '../components/ColorVisualizer';
import { ColorPattern, SampleCartItem } from '../types';
import { Sparkles, Package, Calculator, ShieldCheck, Sun, Info, ArrowRight } from 'lucide-react';

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
    <div id="visualizer-page" className="min-h-screen bg-slate-50">
      
      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          { label: 'Colors & Visualizer' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-800/60">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Interactive Color Studio
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                DeckRite Architectural Colors &amp; Visualizer
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Experience how DeckRite’s slip-resistant marble, slate, sandstone, and riverstone patterns look across different architectural backdrops and natural lighting conditions.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                <Package className="w-4 h-4" />
                <span>Review Sample Kit ({sampleCart.length}/4)</span>
              </button>

              <button
                onClick={() => onNavigate('estimator')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>Calculate Footage</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Visualizer Tool */}
      <div className="py-8">
        <ColorVisualizer
          onAddSample={onAddSample}
          sampleCart={sampleCart}
          onOpenSampleModal={onOpenSampleModal}
        />
      </div>

      {/* Guidance & Free Swatch Order Guarantee Banner */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 rounded-3xl p-8 border border-sky-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-800">
                <Sun className="w-4 h-4 text-cyan-600" />
                Color Accuracy Advice
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Computer Monitors Vary — Order Free 6&quot;×6&quot; Physical Swatches
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Because screen calibration, brightness, and ambient lighting differ across devices, we strongly recommend requesting our free DeckRite physical sample kit. You can touch the slip-resistant embossed tread and hold the swatches against your home&apos;s exterior siding under direct sunlight.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Package className="w-4 h-4" />
                <span>Order Free Swatches Now</span>
              </button>
              <button
                onClick={() => onNavigate('dealers')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Find Local Showroom &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
