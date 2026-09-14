import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Package, RefreshCw, Sparkles, MapPin } from 'lucide-react';
import { DECKRITE_PATTERNS } from '../data/deckData';
import { ColorPattern } from '../types';

interface EstimatorCalculatorProps {
  onAddSample: (pattern: ColorPattern) => void;
  onNavigateToDealers: () => void;
}

export const EstimatorCalculator: React.FC<EstimatorCalculatorProps> = ({
  onAddSample,
  onNavigateToDealers,
}) => {
  const [lengthFt, setLengthFt] = useState<number>(20);
  const [widthFt, setWidthFt] = useState<number>(12);
  const [stairsCount, setStairsCount] = useState<number>(4);
  const [selectedMil, setSelectedMil] = useState<'60 mil' | '50 mil'>('60 mil');
  const [selectedPatternId, setSelectedPatternId] = useState<string>('lakewood-marble');
  const [quoteRequested, setQuoteRequested] = useState<boolean>(false);
  const [quoteName, setQuoteName] = useState<string>('');
  const [quoteEmail, setQuoteEmail] = useState<string>('');
  const [quoteZip, setQuoteZip] = useState<string>('');

  // Calculations
  const deckSqFt = lengthFt * widthFt;
  const stairsSqFt = stairsCount * 12; // 3ft wide step x 4ft tread/riser run approx
  const totalSqFt = deckSqFt + stairsSqFt;

  // DeckRite rolls are 68" wide (5.66 ft) or 72" (6.0 ft). With 2" overlap, effective width is ~5.5 ft.
  // Add 10% waste factor for cuts and wall flashings.
  const sqFtWithWaste = Math.ceil(totalSqFt * 1.10);
  const linearFeetMembrane = Math.ceil(sqFtWithWaste / 5.66);
  
  // Perimeter drip edge: 2 * (length + width) - assuming 1 side attached to house, so (length + 2*width)
  const perimeterTrimLinearFt = Math.ceil(lengthFt + 2 * widthFt + (stairsCount * 4));

  // DeckRite MD-101 Water-Based Adhesive spread rate: 100 to 125 sq ft per gallon
  const adhesiveGallons = Math.max(1, Math.ceil(totalSqFt / 115));
  // DeckRite MD-102 Contact Adhesive for perimeter drip edges and 6" vertical wall flashings
  const contactCementQuarts = Math.max(1, Math.ceil(perimeterTrimLinearFt / 40));

  const selectedPattern = DECKRITE_PATTERNS.find(p => p.id === selectedPatternId) || DECKRITE_PATTERNS[0];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteRequested(true);
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            DeckRite Project Material Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Materials &amp; Budget for Your Deck
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Enter your deck dimensions below to instantly calculate required 68" membrane yardage, PVC-clad perimeter drip edges, adhesive gallons, and estimated material budget.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column (Left) */}
          <div className="lg:col-span-6 bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <h3 className="text-lg font-bold text-white">Deck Dimensions &amp; Specs</h3>
              <span className="text-xs text-cyan-400 font-semibold">Instant Real-Time Math</span>
            </div>

            {/* Dimension Sliders & Inputs */}
            <div className="space-y-4">
              
              {/* Length */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <label htmlFor="deck-length" className="text-slate-300">Deck Length (along the house):</label>
                  <span className="text-cyan-400 text-sm font-extrabold">{lengthFt} ft</span>
                </div>
                <input
                  id="deck-length"
                  type="range"
                  min="6"
                  max="60"
                  value={lengthFt}
                  onChange={(e) => setLengthFt(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              {/* Width / Projection */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <label htmlFor="deck-width" className="text-slate-300">Deck Width (projection outward):</label>
                  <span className="text-cyan-400 text-sm font-extrabold">{widthFt} ft</span>
                </div>
                <input
                  id="deck-width"
                  type="range"
                  min="4"
                  max="40"
                  value={widthFt}
                  onChange={(e) => setWidthFt(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              {/* Stairs Steps */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <label htmlFor="deck-stairs" className="text-slate-300">Number of Exterior Stair Steps:</label>
                  <span className="text-cyan-400 text-sm font-extrabold">{stairsCount} steps</span>
                </div>
                <input
                  id="deck-stairs"
                  type="range"
                  min="0"
                  max="20"
                  value={stairsCount}
                  onChange={(e) => setStairsCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

            </div>

            {/* Membrane Thickness Selection */}
            <div className="pt-2 border-t border-slate-700">
              <label className="block text-xs font-bold text-slate-300 mb-2">
                Select System Grade:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedMil('60 mil')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedMil === '60 mil'
                      ? 'border-cyan-500 bg-cyan-950/60 ring-1 ring-cyan-400'
                      : 'border-slate-700 bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="font-bold text-sm text-white">60 mil Roof-Grade</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Approved for living areas below</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMil('50 mil')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedMil === '50 mil'
                      ? 'border-cyan-500 bg-cyan-950/60 ring-1 ring-cyan-400'
                      : 'border-slate-700 bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="font-bold text-sm text-white">50 mil Residential</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Standard walkout sundecks</div>
                </button>
              </div>
            </div>

            {/* Pattern Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">
                Preferred Color Pattern:
              </label>
              <select
                id="pattern-select-input"
                value={selectedPatternId}
                onChange={(e) => setSelectedPatternId(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                {DECKRITE_PATTERNS.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.thickness})
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Results & Takeoff Summary (Right) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Calculated Materials</span>
                  <h3 className="text-xl font-bold text-white">Estimated Project Breakdown</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-cyan-400">{totalSqFt}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Total Sq Ft</div>
                </div>
              </div>

              {/* Material Takeoff List */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                  <div className="text-slate-400">Deck Surface Area</div>
                  <div className="text-base font-extrabold text-white mt-0.5">{deckSqFt} sq ft</div>
                  <div className="text-[10px] text-slate-500">{lengthFt}' × {widthFt}'</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                  <div className="text-slate-400">Stair Treads Area</div>
                  <div className="text-base font-extrabold text-white mt-0.5">{stairsSqFt} sq ft</div>
                  <div className="text-[10px] text-slate-500">{stairsCount} steps calculated</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                  <div className="text-slate-400">DeckRite 68" Rolls</div>
                  <div className="text-base font-extrabold text-cyan-300 mt-0.5">{linearFeetMembrane} lin ft</div>
                  <div className="text-[10px] text-slate-500">Includes 10% overlap/waste</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                  <div className="text-slate-400">PVC-Clad Drip Edge</div>
                  <div className="text-base font-extrabold text-cyan-300 mt-0.5">{perimeterTrimLinearFt} lin ft</div>
                  <div className="text-[10px] text-slate-500">Perimeter + step nosing</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                  <div className="text-slate-400">DeckRite MD-101 Adhesive</div>
                  <div className="text-base font-extrabold text-white mt-0.5">{adhesiveGallons} Gallon{adhesiveGallons > 1 ? 's' : ''}</div>
                  <div className="text-[10px] text-slate-500">Water-based subfloor (100–125 sq ft/gal)</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                  <div className="text-slate-400">DeckRite MD-102 Contact</div>
                  <div className="text-base font-extrabold text-white mt-0.5">{contactCementQuarts} Quart{contactCementQuarts > 1 ? 's' : ''}</div>
                  <div className="text-[10px] text-slate-500">Perimeter metal &amp; 6" wall turn-up</div>
                </div>

              </div>

              {/* Dealer Distribution & Purchasing Notice */}
              <div className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Purchased Through Authorized Dealers</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    No Direct Online Sales — Exclusive Dealer Network
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5 max-w-md">
                    DeckRite materials are sold exclusively through authorized stocking distributors and certified installer contractors. Request a local quote below.
                  </div>
                </div>
                <button
                  onClick={() => onAddSample(selectedPattern)}
                  className="px-3.5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                  title="Add this pattern to your free sample kit"
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>Get Free Swatch</span>
                </button>
              </div>

              {/* Dealer Quote Lead Form */}
              {!quoteRequested ? (
                <form onSubmit={handleQuoteSubmit} className="pt-2 border-t border-slate-700 space-y-3">
                  <div className="text-xs font-bold text-slate-300">
                    Connect With a Certified Installer for an Official Quote:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                      className="bg-slate-700/80 border border-slate-600 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={quoteEmail}
                      onChange={(e) => setQuoteEmail(e.target.value)}
                      className="bg-slate-700/80 border border-slate-600 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder="ZIP or Postal Code (US / Canada)"
                      value={quoteZip}
                      onChange={(e) => setQuoteZip(e.target.value)}
                      className="flex-1 bg-slate-700/80 border border-slate-600 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow"
                    >
                      <span>Send to Dealer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800 text-emerald-200 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-400">
                    <Check className="w-4 h-4" />
                    <span>Estimate Sent to Nearest DeckRite Certified Dealer!</span>
                  </div>
                  <p>
                    Thank you, {quoteName}! A certified dealer in your area ({quoteZip}) has received your {totalSqFt} sq ft {selectedMil} specification and will contact you at {quoteEmail} with an itemized proposal.
                  </p>
                  <button
                    onClick={() => setQuoteRequested(false)}
                    className="text-cyan-400 hover:underline font-semibold"
                  >
                    Calculate another deck size
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
