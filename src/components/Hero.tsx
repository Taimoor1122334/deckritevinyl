import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Package, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroProps {
  onExploreVisualizer: () => void;
  onOpenSampleModal: () => void;
  onFindDealer: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreVisualizer,
  onOpenSampleModal,
  onFindDealer,
  onExploreProducts,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background imagery with subtle atmospheric gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
          alt="Modern luxury sundeck with waterproof vinyl decking overlooking serene lake"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60"></div>
        {/* Subtle grid pattern for technical architectural aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wide shadow-sm">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>CGSB 37.54 & ICC-ES Approved Roof-Grade Membrane</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300">Waterproof Vinyl Decking</span> &amp; Roof Systems
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Transform your sundeck, rooftop patio, or walkout into a beautiful, 100% waterproof outdoor living space. Engineered in North America since 1978 for harsh freeze-thaw climates, zero annual staining, and decades of barefoot enjoyment.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Waterproof over living spaces</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero annual staining, sealing, or splinters</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Embossed slip-resistant texture</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Up to 15-year warranty protection</span>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="hero-launch-visualizer-btn"
                onClick={onExploreVisualizer}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-900/40 hover:shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Design with Color Visualizer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-free-samples-btn"
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <Package className="w-4 h-4 text-cyan-400" />
                <span>Order Free Sample Kit</span>
              </button>

              <button
                id="hero-find-installer-btn"
                onClick={onFindDealer}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Find an Installer</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visualizer Card & Quick Swatches */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div>
                  <h3 className="text-base font-bold text-white">DeckRite Architectural Finishes</h3>
                  <p className="text-xs text-slate-400">Embossed 3-ply heavy-duty PVC membranes</p>
                </div>
                <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-800">
                  60 &amp; 50 Mil
                </span>
              </div>

              {/* Interactive Swatch Preview Previewer in Hero */}
              <div className="relative rounded-xl overflow-hidden aspect-video group bg-slate-900 border border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="DeckRite membrane finished deck"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white">Lakewood Marble</span>
                      <p className="text-[11px] text-slate-300">Modern veined stone aesthetics</p>
                    </div>
                    <button
                      onClick={onExploreVisualizer}
                      className="text-xs bg-cyan-500 text-slate-950 px-3 py-1.5 rounded-lg font-bold hover:bg-cyan-400 transition-colors"
                    >
                      Try on Your Deck
                    </button>
                  </div>
                </div>
              </div>

              {/* Mini Swatch Strip */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-300 flex justify-between">
                  <span>Popular DeckRite Colorways:</span>
                  <button onClick={onExploreVisualizer} className="text-cyan-400 hover:underline text-[11px]">View All 8 &rarr;</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-center hover:border-cyan-500 transition-colors">
                    <div className="w-full h-8 rounded bg-[#d8d4cc] border border-slate-600 mb-1"></div>
                    <span className="text-[10px] text-slate-300 font-medium truncate block">Lakewood</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-center hover:border-cyan-500 transition-colors">
                    <div className="w-full h-8 rounded bg-[#64748b] border border-slate-600 mb-1"></div>
                    <span className="text-[10px] text-slate-300 font-medium truncate block">Slate Gray</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-center hover:border-cyan-500 transition-colors">
                    <div className="w-full h-8 rounded bg-[#e2d5c3] border border-slate-600 mb-1"></div>
                    <span className="text-[10px] text-slate-300 font-medium truncate block">Sahara Tan</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-center hover:border-cyan-500 transition-colors">
                    <div className="w-full h-8 rounded bg-[#94a3b8] border border-slate-600 mb-1"></div>
                    <span className="text-[10px] text-slate-300 font-medium truncate block">Riverstone</span>
                  </div>
                </div>
              </div>

              {/* Quick Specs Footnote */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-700/60">
                <span>Direct Manufacturer Support</span>
                <span className="text-slate-300 font-medium">Headquarters: North Little Rock, AR</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Trust & Spec Bar Strip below hero */}
      <div className="bg-slate-950 border-t border-slate-800 text-slate-300 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center">
            <div className="px-2 pt-2 md:pt-0">
              <div className="text-lg sm:text-xl font-bold text-white">40+ Years</div>
              <div className="text-xs text-slate-400">North American Manufacturing</div>
            </div>
            <div className="px-2 pt-2 md:pt-0">
              <div className="text-lg sm:text-xl font-bold text-white">100% Watertight</div>
              <div className="text-xs text-slate-400">Certified Walk-On Roof Grade</div>
            </div>
            <div className="px-2 pt-2 md:pt-0">
              <div className="text-lg sm:text-xl font-bold text-white">15-Year</div>
              <div className="text-xs text-slate-400">Material Warranty Protection</div>
            </div>
            <div className="px-2 pt-2 md:pt-0">
              <div className="text-lg sm:text-xl font-bold text-white">Zero Splinters</div>
              <div className="text-xs text-slate-400">Low-Maintenance Living</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
