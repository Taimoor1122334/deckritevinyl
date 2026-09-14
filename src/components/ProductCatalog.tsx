import React, { useState } from 'react';
import { ShieldCheck, Layers, Award, FileText, CheckCircle, ArrowRight, Download, Package } from 'lucide-react';
import { DECKRITE_PRODUCTS } from '../data/deckData';
import { ProductItem } from '../types';

interface ProductCatalogProps {
  onOpenSampleModal: () => void;
  onOpenCalculator: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenSampleModal,
  onOpenCalculator,
}) => {
  const [activeTab, setActiveTab] = useState<'membranes' | 'railings' | 'accessories'>('membranes');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(DECKRITE_PRODUCTS[0]);

  const displayedProducts = DECKRITE_PRODUCTS.filter(p => {
    if (activeTab === 'membranes') return p.category === 'membranes';
    if (activeTab === 'railings') return p.category === 'railings';
    return p.category === 'accessories';
  });

  return (
    <section id="products" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-sky-700" />
            DeckRite Product Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Roof-Grade Vinyl Membranes, Railings &amp; Accessories
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every component is engineered as an integrated system — from our heavy-duty polyester-reinforced sheet membranes to PVC-clad metal perimeters and architectural aluminum railings.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => {
                setActiveTab('membranes');
                setSelectedProduct(DECKRITE_PRODUCTS[0]);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'membranes'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-cyan-600" />
              <span>Vinyl Deck Membranes (60 &amp; 50 Mil)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('railings');
                setSelectedProduct(DECKRITE_PRODUCTS[2]);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'railings'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-cyan-600" />
              <span>DeckRail™ Aluminum Railings</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('accessories');
                setSelectedProduct(DECKRITE_PRODUCTS[3]);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'accessories'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4 text-cyan-600" />
              <span>Waterproofing Accessories &amp; Drip Edges</span>
            </button>
          </div>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Selection Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
              Select System Specification:
            </div>
            {displayedProducts.map(product => {
              const isSelected = selectedProduct.id === product.id;
              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'border-cyan-600 bg-cyan-50/40 shadow-md ring-1 ring-cyan-200'
                      : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-cyan-700 bg-cyan-100 px-2.5 py-0.5 rounded-full">
                      {product.mil || product.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{product.warranty}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg">{product.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-cyan-700">
                    <span>View Specifications &amp; Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}

            {/* Quick Estimator CTA Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md">
              <h4 className="font-bold text-sm">Need a Material Takeoff?</h4>
              <p className="text-xs text-slate-300 mt-1">
                Calculate square footage, rolls, drip edges, and adhesive requirements for your deck dimensions.
              </p>
              <button
                onClick={onOpenCalculator}
                className="mt-3 w-full py-2 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Deck Material Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Detailed Specs View */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            <div className="relative rounded-xl overflow-hidden aspect-[21/9] bg-slate-900 shadow">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div>
                  <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">{selectedProduct.warranty}</div>
                  <h3 className="text-xl font-extrabold text-white">{selectedProduct.title}</h3>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Overview</h4>
              <p className="text-sm text-slate-700 leading-relaxed">{selectedProduct.description}</p>
            </div>

            {/* Key Features List */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Engineered Performance Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Applications */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ideal Architectural Applications</h4>
              <ul className="space-y-1.5">
                {selectedProduct.applications.map((app, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications Table */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">Technical Specifications</h4>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
                {Object.entries(selectedProduct.specifications).map(([key, val]) => (
                  <div key={key} className="grid grid-cols-3 p-2.5 px-4">
                    <span className="font-semibold text-slate-600 col-span-1">{key}:</span>
                    <span className="font-bold text-slate-900 col-span-2">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow transition-colors cursor-pointer"
              >
                <Package className="w-4 h-4" />
                <span>Request Free Physical Samples</span>
              </button>

              <a
                href="#resources"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-cyan-700"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Download Architectural CAD / CSI Spec</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
