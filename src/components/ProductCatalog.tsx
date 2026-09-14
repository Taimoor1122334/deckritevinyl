import React from 'react';
import { DECKRITE_PRODUCTS } from '../data/deckData';
import { ArrowRight } from 'lucide-react';

interface ProductCatalogProps {
  onOpenCalculator: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenCalculator,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Products</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">500 Series, 600 Series &amp; DeckRail</h2>
          <p className="text-slate-600 mt-2">
            DeckRite is a three-ply laminated membrane: a printed, embossed vinyl wear layer, a polyester fabric core, and a vinyl bonding layer. Rolls are 68 inches wide by 90 feet long.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {DECKRITE_PRODUCTS.map((product) => (
            <article key={product.id} className="rounded-xl border border-slate-200 overflow-hidden bg-white">
              <img src={product.image} alt={product.title} className="w-full h-44 object-cover" />
              <div className="p-6">
                {product.mil && (
                  <span className="text-[11px] font-bold uppercase tracking-wide text-navy">{product.mil}</span>
                )}
                <h3 className="text-lg font-bold text-slate-900 mt-1">{product.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{product.tagline}</p>
                <ul className="mt-4 space-y-1.5">
                  {product.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="text-sm text-slate-700 pl-3 border-l-2 border-rose/40">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={onOpenCalculator}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 font-semibold text-sm"
          >
            Material estimator <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
