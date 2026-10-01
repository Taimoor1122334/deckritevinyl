import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ColorSwatchGrid } from '../components/ColorSwatchGrid';
import { ColorVisualizer } from '../components/ColorVisualizer';
import { DECKRITE_ADHESIVES, DECKRITE_PRODUCTS } from '../data/deckData';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
}) => {
  const [selectedId, setSelectedId] = useState(DECKRITE_PRODUCTS[0].id);
  const selected = DECKRITE_PRODUCTS.find((p) => p.id === selectedId) ?? DECKRITE_PRODUCTS[0];
  const isAdhesivesTab = selected.id === 'adhesives-accessories';

  return (
    <div id="products-page" className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Products' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Product information</p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2">Premium Flooring</h1>
            <p className="text-white/80 mt-3 leading-relaxed">
              DeckRite is a three-ply reinforced vinyl membrane: an embossed wear layer, a high-strength polyester reinforcement grid, and a solid vinyl bonding layer. Finish thickness is 50 mils and 60 mils. The wear layer is a durable embossed vinyl surface; the polyester grid adds dimensional stability and tear resistance; the bonding layer is solid vinyl engineered to adhere to the substrate.
            </p>
          </div>
        </div>
      </section>

      <section id="product-series" className="scroll-mt-24 py-10">
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

          <div className="grid items-start lg:grid-cols-2 gap-10">
            {isAdhesivesTab ? (
              <button
                type="button"
                onClick={() => onNavigate('resources')}
                className="relative block w-full self-start overflow-hidden text-left group"
              >
                <img
                  src={selected.image}
                  alt="DeckRite vinyl stair landing with coated drip edge and termination"
                  className="w-full h-72 object-cover rounded-xl border border-slate-200 object-[center_40%] group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t rounded-b-xl from-navy/85 via-navy/40 to-transparent" />
                <p className="absolute left-5 bottom-5 right-5 text-white text-2xl sm:text-3xl font-extrabold leading-tight drop-shadow-md bg-slate-200/50 hover:bg-slate-200/70 transition-colors p-2 rounded-lg">
                  Watch Our Installation Process!
                </p>
              </button>
            ) : (
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-80 md:h-[22rem] object-cover object-[center_58%] rounded-xl border border-slate-200"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{selected.title}</h2>
              <p className="text-slate-600 mt-3 leading-relaxed">{selected.description}</p>
              <p className="text-sm font-medium text-navy mt-3">{selected.warranty}</p>
              {isAdhesivesTab && (
                <p className="mt-4 text-sm text-slate-700 leading-relaxed bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <strong>IMPORTANT:</strong> If the recommended DeckRite adhesive is not used, ensure the alternative adhesive is PVC-compatible to prevent adverse effects on the appearance, adhesion, and performance of the vinyl.
                </p>
              )}
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
        </div>
      </section>

      <section id="product-colors" className="scroll-mt-24 py-12 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Colors</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Available colors</h2>
            <p className="text-slate-600 mt-2 leading-relaxed leading-loose">
            Standard colors are Sahara Tan, Slate Gray, Gray Storm, Tropical Cream, Lakewood Marble, and Tuscany Sand; <br />
Harvest and Riverstone are also offered. <br />
Click any color for a large close-up of the membrane texture. <br />
Because screens vary, DeckRite will mail free material samples. Send your mailing address from the <a  onClick={() => onNavigate('contact')} className="underline hover:cursor-pointer hover:text-navy transition-colors">Contact page</a>. <br />
            </p>
          </div>
          <div className="mt-8">
            <ColorSwatchGrid />
          </div>
        </div>
      </section>

      <ColorVisualizer />

      <section id="product-adhesives" className="scroll-mt-24 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Adhesives</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">DeckRite adhesives</h2>
          <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Browse the lineup below to find the best match for your surface — unsealed wood, sealed wood, or concrete.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {DECKRITE_ADHESIVES.map((adhesive) => (
              <article key={adhesive.id} className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
                <div className="bg-white px-6 py-5">
                  <img
                    src={adhesive.image}
                    alt={adhesive.title}
                    className="w-full h-56 object-contain"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wide bg-navy text-white px-2.5 py-1 rounded">
                    Best for: {adhesive.bestFor}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-3">{adhesive.title}</h4>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{adhesive.description}</p>
                  <dl className="mt-4 grid grid-cols-1 gap-2">
                    <div className="rounded-lg bg-white border border-slate-200 p-3">
                      <dt className="text-[11px] font-bold uppercase text-slate-500">Coverage</dt>
                      <dd className="text-sm text-slate-800 mt-0.5">{adhesive.coverage}</dd>
                    </div>
                    <div className="rounded-lg bg-white border border-slate-200 p-3">
                      <dt className="text-[11px] font-bold uppercase text-slate-500">Application</dt>
                      <dd className="text-sm text-slate-800 mt-0.5">{adhesive.application}</dd>
                    </div>
                    {adhesive.voc && (
                      <div className="rounded-lg bg-white border border-slate-200 p-3">
                        <dt className="text-[11px] font-bold uppercase text-slate-500">VOC</dt>
                        <dd className="text-sm text-slate-800 mt-0.5">{adhesive.voc}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-navy text-white font-bold text-base hover:bg-navy-dark transition-colors">
              Contact for a distributor
            </button>
            <a
              href="/pdf/DeckRite 8.5x14 Legal Trifold Brochure"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-slate-300 font-bold text-base hover:border-navy transition-colors"
            >
              Download brochure
            </a>
            <button onClick={() => onNavigate('resources')} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-slate-300 font-bold text-base hover:border-navy transition-colors">
              Architectural &amp; Detail Drawings
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
