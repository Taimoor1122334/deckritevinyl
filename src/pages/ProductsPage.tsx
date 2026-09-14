import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { DECKRITE_PRODUCTS, DECKRITE_PATTERNS } from '../data/deckData';
import { ProductItem, ColorPattern, SampleCartItem } from '../types';
import { ShieldCheck, Layers, Award, FileText, CheckCircle, ArrowRight, Download, Package, Calculator, MapPin, Check, Sparkles } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
  onAddSample: (pattern: ColorPattern) => void;
  sampleCart: SampleCartItem[];
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onOpenSampleModal,
  onAddSample,
  sampleCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'membranes' | 'railings' | 'accessories'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(DECKRITE_PRODUCTS[0]);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const filteredProducts = DECKRITE_PRODUCTS.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const matchingPatterns = DECKRITE_PATTERNS.filter(pattern => {
    if (selectedProduct.id === 'deckrite-60') {
      return pattern.thickness === '60 mil' || pattern.thickness === 'Both';
    }
    if (selectedProduct.id === 'deckrite-50') {
      return pattern.thickness === '50 mil' || pattern.thickness === 'Both';
    }
    return true;
  });

  const handleSimulateDownload = (productTitle: string) => {
    setDownloadSuccess(`Downloaded Technical Data Sheet for ${productTitle}`);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <div id="products-page" className="min-h-screen bg-white">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Products & Systems' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf820_1px,transparent_1px),linear-gradient(to_bottom,#38bdf820_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              DeckRite System Catalog
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Roof-Grade Vinyl Membranes &amp; Decking Systems
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Engineered calendered PVC membranes designed for harsh North American weather extremes. Complete waterproofing systems including 60 mil roof-grade membranes, 50 mil residential membranes, architectural aluminum railings, and PVC-clad drip edge perimeters.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-colors cursor-pointer"
              >
                <Package className="w-4 h-4" />
                <span>Order Free Sample Kit ({sampleCart.length}/4)</span>
              </button>

              <button
                onClick={() => onNavigate('estimator')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Estimate Required Rolls &amp; Glue</span>
              </button>

              <button
                onClick={() => onNavigate('visualizer')}
                className="inline-flex items-center gap-2 px-4 py-3 text-cyan-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Visualizer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Official Dealer Distribution Notice */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-cyan-700" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <span>How DeckRite Products Are Sold</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    No Direct Online Sales
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
                  DeckRite is an engineered building material manufacturer. All membranes, trims, and railings are distributed exclusively through our North American network of wholesale distributors, building supply yards, and certified contractor dealers.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('dealers')}
              className="px-4 py-2 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Find Stocking Dealer</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Products ({DECKRITE_PRODUCTS.length})
              </button>
              <button
                onClick={() => setActiveCategory('membranes')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'membranes'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Membranes (60 &amp; 50 Mil)
              </button>
              <button
                onClick={() => setActiveCategory('railings')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'railings'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                DeckRail™ Railings
              </button>
              <button
                onClick={() => setActiveCategory('accessories')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'accessories'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                PVC Trims &amp; Adhesives
              </button>
            </div>

            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredProducts.length} engineered systems
            </span>
          </div>

          {/* Interactive Product Explorer: Master Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Selection List (Col 4) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                Select Product Line:
              </div>
              {filteredProducts.map(product => {
                const isSelected = selectedProduct.id === product.id;
                return (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'bg-white border-cyan-600 shadow-md ring-2 ring-cyan-500/20'
                        : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        product.category === 'membranes'
                          ? 'bg-cyan-100 text-cyan-800'
                          : product.category === 'railings'
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {product.category}
                      </span>
                      {product.mil && (
                        <span className="text-[11px] font-bold text-slate-700">
                          {product.mil}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{product.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {product.tagline}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-cyan-700">
                      <span>{product.warranty}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-cyan-600' : 'text-slate-400'}`} />
                    </div>
                  </div>
                );
              })}

              {/* Code Approval Reminder Card */}
              <div className="p-5 rounded-2xl bg-emerald-950 text-white border border-emerald-800/80 space-y-2 mt-6">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  ICC-ES &amp; CGSB Certified
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  DeckRite 60 mil membrane has been independently evaluated under ICC-ES AC75 and Canadian CGSB 37.54-95 standards as a single-ply roof covering for exterior decks over habitable rooms.
                </p>
                <button
                  onClick={() => onNavigate('resources')}
                  className="text-xs font-bold text-emerald-300 hover:text-white underline pt-1 block"
                >
                  View Engineering Test Reports &rarr;
                </button>
              </div>
            </div>

            {/* Right Detailed Showcase (Col 8) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
              
              {/* Product Header & Image */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                      {selectedProduct.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {selectedProduct.title}
                    </h2>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                    {selectedProduct.warranty}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Hero Showcase Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-video max-h-80 border border-slate-200 bg-slate-100">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-4">
                    <div className="text-white text-xs font-bold flex items-center justify-between">
                      <span>{selectedProduct.tagline}</span>
                      <button
                        onClick={() => handleSimulateDownload(selectedProduct.title)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-900 text-xs font-bold backdrop-blur-xs transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-cyan-600" />
                        <span>Download Spec PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications Table */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-600" />
                  <span>Technical &amp; Physical Specifications</span>
                </h3>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50">
                  <table className="w-full text-xs text-left">
                    <tbody className="divide-y divide-slate-200">
                      {Object.entries(selectedProduct.specifications).map(([key, val], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                          <td className="py-2.5 px-4 font-bold text-slate-700 w-1/3 border-r border-slate-200">
                            {key}
                          </td>
                          <td className="py-2.5 px-4 font-medium text-slate-900">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recommended Applications */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600" />
                  <span>Engineered Applications</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.applications.map((app, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1 shrink-0"></div>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Matching Color Patterns (If Membrane) */}
              {selectedProduct.category === 'membranes' && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-600" />
                      <span>Available DeckRite Colorways for this System</span>
                    </h3>
                    <button
                      onClick={() => onNavigate('visualizer')}
                      className="text-xs font-bold text-cyan-700 hover:underline"
                    >
                      Open Full Visualizer &rarr;
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {matchingPatterns.map(pattern => (
                      <div
                        key={pattern.id}
                        className="p-3 rounded-xl border border-slate-200 bg-white text-center hover:border-cyan-500 transition-colors shadow-2xs group"
                      >
                        <div
                          className="w-full h-12 rounded-lg border border-slate-300 mb-2 shadow-inner"
                          style={{ backgroundColor: pattern.colorHex }}
                        />
                        <div className="font-bold text-xs text-slate-900 truncate">{pattern.name}</div>
                        <div className="text-[10px] text-slate-500 mb-2 truncate">{pattern.texturePattern}</div>
                        <button
                          onClick={() => onAddSample(pattern)}
                          className="w-full py-1 rounded bg-slate-100 group-hover:bg-cyan-600 group-hover:text-white text-slate-700 font-bold text-[10px] transition-colors"
                        >
                          + Free Swatch
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={onOpenSampleModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow transition-colors cursor-pointer"
                  >
                    <Package className="w-4 h-4" />
                    <span>Order Free Swatch Samples</span>
                  </button>
                  <button
                    onClick={() => onNavigate('estimator')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-slate-600" />
                    <span>Calculate Materials</span>
                  </button>
                </div>

                <button
                  onClick={() => onNavigate('dealers')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-cyan-700 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span>Find Authorized Installer &rarr;</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Toast confirmation for simulated download */}
      {downloadSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3">
          <div className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{downloadSuccess}</span>
        </div>
      )}

    </div>
  );
};
