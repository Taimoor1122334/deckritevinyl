import React from 'react';
import { ExternalLink, Anchor, Truck, Compass, CheckCircle } from 'lucide-react';
import { SISTER_BRANDS } from '../data/deckData';

export const SisterBrandsSection: React.FC = () => {
  return (
    <section id="sister-brands" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-600" />
            DeckRite Family of Brands
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Vinyl Solutions for Marine &amp; RV
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Beyond architectural deck membranes, our manufacturing facility engineers premium vinyl flooring trusted by North America’s leading boat builders and RV manufacturers.
          </p>
        </div>

        {/* 2 Sister Brand Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* MariDeck Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950 text-white shadow-xl border border-cyan-800/40 relative overflow-hidden flex flex-col justify-between group">
            
            {/* Background water ripple accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-900/80 text-cyan-300 border border-cyan-700/60">
                  Marine Grade Flooring
                </span>
                <a
                  href="https://marideck.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cyan-300 hover:text-white flex items-center gap-1 group-hover:underline"
                >
                  <span>marideck.net</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Logo & Headline */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    <Anchor className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">
                      Mari<span className="text-cyan-400">Deck</span>
                    </h3>
                    <p className="text-xs text-cyan-200">Marine Vinyl Flooring Systems</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mt-4">
                  The original slip-resistant vinyl flooring for pontoon boats, aluminum fishing boats, runabouts, houseboats, and marine docks. Formulated to withstand saltwater, gasoline, engine oil, fish blood, and harsh UV rays without degrading.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-2 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Installed by major pontoon boat manufacturers across North America</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Embossed wood plank, woven textures, and classic non-skid grain</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Eliminates wet rotting carpet and foul marine mildew odors</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-cyan-900/60 flex items-center justify-between">
              <span className="text-xs text-slate-400">Available in master rolls &amp; DIY replacement kits</span>
              <a
                href="https://marideck.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow transition-colors flex items-center gap-1.5"
              >
                <span>Visit MariDeck Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* DeckRite RV Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-amber-950/80 via-slate-900 to-slate-950 text-white shadow-xl border border-amber-800/40 relative overflow-hidden flex flex-col justify-between group">
            
            {/* Background warm road accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-900/80 text-amber-300 border border-amber-700/60">
                  RV &amp; Slide-Out Flooring
                </span>
                <a
                  href="https://deckriterv.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-300 hover:text-white flex items-center gap-1 group-hover:underline"
                >
                  <span>deckriterv.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Logo & Headline */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">
                      DeckRite <span className="text-amber-400">RV</span>
                    </h3>
                    <p className="text-xs text-amber-200">Recreational Vehicle Flooring &amp; Roofing</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mt-4">
                  High-durability ULTRA woven and sheet PVC flooring engineered specifically for motorhomes, travel trailers, toy haulers, and RV slide-outs. Lightweight, puncture-resistant, and 100% moisture impermeable.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-2 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>OEM-grade abrasion resistance for high-friction RV slide-out floors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Resists road vibration, sub-zero winter storage, and summer heat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Stain-resistant to spilled coffee, muddy boots, and pet messes</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-amber-900/60 flex items-center justify-between">
              <span className="text-xs text-slate-400">Engineered for factory OEM &amp; aftermarket upgrades</span>
              <a
                href="https://deckriterv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition-colors flex items-center gap-1.5"
              >
                <span>Visit DeckRite RV Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
