import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { EstimatorCalculator } from '../components/EstimatorCalculator';
import { ColorPattern } from '../types';
import { Calculator, Layers, FileSpreadsheet, MapPin, Package, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface EstimatorPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
  onAddSample: (pattern: ColorPattern) => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({
  onNavigate,
  onOpenSampleModal,
  onAddSample,
}) => {
  return (
    <div id="estimator-page" className="min-h-screen bg-slate-50">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Deck Material & Cost Estimator' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-800">
                <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                Project Planning &amp; Takeoff Tool
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                DeckRite Material &amp; Roll Estimator
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Plan your project with accuracy. Calculate exact linear feet of 68&quot; wide master rolls, linear feet of PVC-clad perimeter drip edge, and adhesive bucket requirements for your deck dimensions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                <Package className="w-4 h-4" />
                <span>Order Free Sample Kit</span>
              </button>

              <button
                onClick={() => onNavigate('dealers')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Send Takeoff to Local Dealer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Estimator Calculator Component */}
      <div className="py-4">
        <EstimatorCalculator
          onAddSample={onAddSample}
          onNavigateToDealers={() => onNavigate('dealers')}
        />
      </div>

      {/* Technical Material Calculation Guide */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h3 className="text-xl font-bold text-slate-900">
              Contractor Calculation Standard &amp; Yield Guidelines
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              DeckRite master rolls are manufactured at a standard 68&quot; width (5 ft 8 in) to optimize seams over typical 4 ft plywood sheet layouts. When ordering, always factor a minimum of 10% additional linear footage for overlapping hot-air welded seams (1.5&quot; to 2&quot; overlap), 6&quot; perimeter wall turn-ups, and drip-edge termination trims.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('resources')}
                className="text-xs font-bold text-cyan-700 hover:underline inline-flex items-center gap-1"
              >
                <span>Read Full Plywood Subfloor Specification Guide &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
