import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhyDeckRite } from '../components/WhyDeckRite';
import { ShieldCheck, Layers, Leaf, Sparkles, CheckCircle2, ArrowRight, Package, Calculator, Droplets, Sun, Wind, Umbrella } from 'lucide-react';

interface WhyDeckRitePageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const WhyDeckRitePage: React.FC<WhyDeckRitePageProps> = ({
  onNavigate,
  onOpenSampleModal,
}) => {
  return (
    <div id="why-deckrite-page" className="min-h-screen bg-white">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Why DeckRite' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e920_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e920_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              The 3-Ply Advantage
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Why Homeowners &amp; Architects Choose DeckRite
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Unlike gapped composite planks or splintered wood decks that leak rainwater through the boards, DeckRite creates a 100% watertight single-ply roof over your outdoor and indoor living spaces.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-colors cursor-pointer"
              >
                <Package className="w-4 h-4" />
                <span>Order Free Sample Kit</span>
              </button>

              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Explore 60 &amp; 50 Mil Systems</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded 3-Ply Architecture & Head-to-Head Comparison */}
      <WhyDeckRite />

      {/* Environmental & "DeckRite is Green" Section (Modeled after Weatherdek's environmental commitment) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Sustainable lush forest and eco-friendly deck"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-bold w-fit mb-1">
                    <Leaf className="w-3.5 h-3.5" />
                    Sustainable Outdoor Building
                  </div>
                  <h4 className="font-bold text-lg">Eco-Responsible Building Practices</h4>
                  <p className="text-xs text-slate-300">Protecting forests and watersheds for over four decades</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5 text-emerald-700" />
                DeckRite Environmental Commitment
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Better for Your Family, Better for the Environment
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Traditional treated wood decks require annual washing, harsh chemical bleaching, and toxic petroleum-based stains that leach chemicals directly into surrounding garden soil and rainwater runoff. DeckRite completely eliminates these hazards:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Chemical Leaching</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    No toxic chemical sealants, biocides, or volatile organic compounds washing into soil, storm drains, or lakes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Prevents Deforestation</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Eliminates the repeated replacement of slow-growth cedar, redwood, and pressure-treated pine lumber.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Sun className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Thermal Solar Reflectance</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    High solar reflectance index reduces heat absorption on rooftop terraces and lowers building cooling loads.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">25+ Year Service Life</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Engineered with virgin PVC resins and woven polyester matrix for multi-decade durability, reducing landfill waste.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('resources')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow transition-colors cursor-pointer"
                >
                  <span>Review Code Approvals &amp; Testing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
