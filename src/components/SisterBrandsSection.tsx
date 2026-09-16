import React from 'react';
import { SISTER_BRANDS } from '../data/deckData';
import { ExternalLink } from 'lucide-react';

export const SisterBrandsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">DeckRite family of brands</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">MariDeck &amp; DeckRite RV</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">
            DeckRite LLC also supplies marine vinyl flooring and RV vinyl products. Visit each brand site for application-specific colors and details.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {SISTER_BRANDS.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl overflow-hidden border border-slate-200 bg-[#0c1b33] p-8 hover:shadow-lg"
            >
              <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
              <p className="text-white/70 text-sm mt-4">{brand.tagline}</p>
              <p className="text-white/85 text-sm mt-3 leading-relaxed">{brand.description}</p>
              <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-[#6ad0ca]">
                Visit {brand.name} <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
