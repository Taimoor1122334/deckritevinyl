import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ColorSwatchGrid } from '../components/ColorSwatchGrid';
import { DECKRITE_PRODUCTS } from '../data/deckData';
import { ExternalLink } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
}) => {
  const [selectedId, setSelectedId] = useState(DECKRITE_PRODUCTS[0].id);
  const selected = DECKRITE_PRODUCTS.find((p) => p.id === selectedId) ?? DECKRITE_PRODUCTS[0];

  return (
    <div id="products-page" className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Premium Flooring' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Product information</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">Premium Flooring</h1>
          <p className="text-white/80 mt-3 leading-relaxed">
            DeckRite is a three-ply laminated membrane consisting of a heavy-duty polyester fabric encapsulated between two vinyl films. Finish thickness is 50 mils and 60 mils. The top film is color printed and embossed; the polyester core provides dimensional stability, puncture strength, and tear resistance; the bottom film is the bonding layer and allows two pieces to be molecularly fused during seaming.
          </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {DECKRITE_PRODUCTS.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedId(product.id)}
                className={`px-4 py-2 rounded-md text-sm font-semibold ${
                  selectedId === product.id ? 'bg-navy text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                {product.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <img src={selected.image} alt={selected.title} className="w-full h-72 object-cover rounded-xl border border-slate-200" />
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{selected.title}</h2>
              <p className="text-slate-600 mt-3 leading-relaxed">{selected.description}</p>
              <p className="text-sm font-medium text-navy mt-3">{selected.warranty}</p>
              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(selected.specifications).map(([key, value]) => (
                  <div key={key} className="rounded-lg bg-sand p-3">
                    <dt className="text-[11px] font-bold uppercase text-slate-500">{key}</dt>
                    <dd className="text-sm text-slate-800 mt-0.5">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-14 mb-2">Available colors</h3>
          <p className="text-sm text-slate-600 mb-6">Click a color for a large close-up of the membrane texture, the same way the original DeckRite site shows samples.</p>
          <ColorSwatchGrid />

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-navy text-white font-semibold text-sm">
              Contact for a distributor
            </button>
            <a
              href="https://www.deckrite.com/assets/files/pdf/DR_Innovative_2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 font-semibold text-sm"
            >
              Download brochure <ExternalLink className="w-4 h-4" />
            </a>
            <button onClick={() => onNavigate('deckrail')} className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 font-semibold text-sm">
              DeckRail Infinity Glass
            </button>
          </div>

          <div className="mt-12 p-5 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-950">
            <p className="font-bold">California Proposition 65</p>
            <p className="mt-1">
              WARNING: This product can expose you to chemicals known to the State of California to cause cancer and birth defects or other reproductive harm. For more information go to{' '}
              <a href="https://www.P65Warnings.ca.gov" className="underline" target="_blank" rel="noopener noreferrer">
                www.P65Warnings.ca.gov
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
