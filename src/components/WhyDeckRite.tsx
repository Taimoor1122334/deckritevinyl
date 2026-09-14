import React, { useState } from 'react';
import { ShieldCheck, Check, X, Layers, Droplets, Sun, Sparkles, AlertCircle } from 'lucide-react';
import { COMPARISON_DATA } from '../data/deckData';

export const WhyDeckRite: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const layers = [
    {
      id: 1,
      title: 'Top Layer: UV-Inhibited & Embossed Pedestrian Film',
      details: 'Formulated with specialized heat-reflective pigments, mildew inhibitors, and deep embossing that provides barefoot slip-resistance in wet and dry conditions. Resists chlorine, sunscreens, BBQ grease, and pet claws.',
      thickness: '22-25 mils',
      color: 'bg-cyan-500'
    },
    {
      id: 2,
      title: 'Core: Heavy-Duty 1000-Denier Woven Polyester Scrim',
      details: 'The structural skeleton of DeckRite. High-tensile woven polyester fabric encapsulated between the two vinyl films prevents stretching, punctures, and thermal expansion across extreme -40°F to 120°F temperatures.',
      thickness: 'Core Reinforcement',
      color: 'bg-sky-400'
    },
    {
      id: 3,
      title: 'Bottom Layer: High-Adhesion Bonding Vinyl Film',
      details: 'Engineered specifically for superior molecular adhesion to DeckRite #100 water-based acrylic subfloor adhesive over 3/4" exterior tongue-and-groove plywood. Won’t delaminate or bubble.',
      thickness: '22-25 mils',
      color: 'bg-slate-700'
    }
  ];

  return (
    <section id="why-deckrite" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            The Vinyl Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Why DeckRite Outperforms Wood, Composite &amp; Liquid Coatings
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Traditional wood decks rot, warp, and require constant staining. Gapped composite boards let rainwater pour through. DeckRite’s engineered 3-ply vinyl system delivers a completely waterproof, walk-on surface that lasts decades.
          </p>
        </div>

        {/* 3-Ply Membrane Anatomy Explorer */}
        <div className="mb-20 bg-slate-800/80 rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Graphic Representation */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Engineered 3-Ply Construction
              </div>
              <h3 className="text-2xl font-bold text-white">
                Molecularly Fused for Unrivaled Puncture &amp; Weather Resistance
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Unlike cheaper single-layer vinyl membranes that tear or stretch under summer heat, DeckRite encapsulates a continuous woven polyester matrix between two custom-calendered PVC films.
              </p>

              {/* Layer Selection Buttons */}
              <div className="space-y-3 pt-2">
                {layers.map((layer, index) => (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      activeLayer === index
                        ? 'border-cyan-500 bg-cyan-950/60 shadow-md ring-1 ring-cyan-400'
                        : 'border-slate-700 hover:border-slate-600 bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-3.5 h-3.5 rounded-full ${layer.color}`}></span>
                        <span className="text-sm font-bold text-white">{layer.title}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-semibold">{layer.thickness}</span>
                    </div>
                    {activeLayer === index && (
                      <p className="text-xs text-slate-300 mt-2 pl-6 leading-relaxed">
                        {layer.details}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Exploded 3D-style Layer Diagram */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-700/60">
              <div className="w-full max-w-sm space-y-3 py-6">
                
                {/* Top layer plank */}
                <div
                  className={`p-4 rounded-xl border-2 transition-all transform duration-300 ${
                    activeLayer === 0
                      ? 'scale-105 border-cyan-400 bg-cyan-900/60 shadow-lg shadow-cyan-900/50 -translate-y-2'
                      : 'border-slate-600 bg-slate-800/80 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-cyan-400" />
                      1. UV Textured Walk Surface
                    </span>
                    <span className="text-cyan-300">Slip-Resistant Emboss</span>
                  </div>
                </div>

                {/* Core scrim layer */}
                <div
                  className={`p-4 rounded-xl border-2 transition-all transform duration-300 ${
                    activeLayer === 1
                      ? 'scale-105 border-sky-400 bg-sky-900/60 shadow-lg shadow-sky-900/50'
                      : 'border-slate-600 bg-slate-800/80 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-sky-400" />
                      2. Woven Polyester Core
                    </span>
                    <span className="text-sky-300">1000 Denier Reinforcement</span>
                  </div>
                </div>

                {/* Bottom layer */}
                <div
                  className={`p-4 rounded-xl border-2 transition-all transform duration-300 ${
                    activeLayer === 2
                      ? 'scale-105 border-cyan-400 bg-cyan-900/60 shadow-lg shadow-cyan-900/50 translate-y-2'
                      : 'border-slate-600 bg-slate-800/80 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-cyan-400" />
                      3. Subfloor Bonding Vinyl
                    </span>
                    <span className="text-slate-300">Permanent Substrate Fuse</span>
                  </div>
                </div>

                {/* Subfloor foundation representation */}
                <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-800/40 text-center text-xs text-amber-200 font-semibold">
                  3/4" Exterior Tongue &amp; Groove (T&amp;G) Plywood Subfloor
                </div>

              </div>

              <div className="text-center text-xs text-slate-400 mt-2">
                Click any layer above to inspect engineered details
              </div>
            </div>

          </div>
        </div>

        {/* Comprehensive Comparison Matrix Table */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white">Head-to-Head Material Comparison</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              How DeckRite compares to other decking alternatives over a 10-year lifespan.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-800/90 shadow-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-900/80 text-slate-300">
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] w-1/4">Feature / Benefit</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] text-cyan-400 bg-cyan-950/40 border-x border-cyan-800/60 w-1/4">
                    DeckRite Vinyl Membrane
                  </th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] text-slate-300 w-1/6">Composite Planks</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] text-slate-300 w-1/6">Pressure-Treated Wood</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] text-slate-300 w-1/6">Liquid Deck Coatings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-750 transition-colors">
                    <td className="p-4 font-bold text-white">{row.feature}</td>

                    {/* DeckRite Column (Highlighted) */}
                    <td className="p-4 bg-cyan-950/20 border-x border-cyan-800/40 text-slate-200">
                      <div className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold text-cyan-100">{row.deckrite.text}</span>
                      </div>
                    </td>

                    {/* Composite Column */}
                    <td className="p-4 text-slate-400">
                      <div className="flex items-start gap-1.5">
                        {row.composite.value === true ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        ) : row.composite.value === 'partial' ? (
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        )}
                        <span>{row.composite.text}</span>
                      </div>
                    </td>

                    {/* Wood Column */}
                    <td className="p-4 text-slate-400">
                      <div className="flex items-start gap-1.5">
                        {row.wood.value === true ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        )}
                        <span>{row.wood.text}</span>
                      </div>
                    </td>

                    {/* Liquid Coatings Column */}
                    <td className="p-4 text-slate-400">
                      <div className="flex items-start gap-1.5">
                        {row.coatings.value === 'partial' ? (
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        )}
                        <span>{row.coatings.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
