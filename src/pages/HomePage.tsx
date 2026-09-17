import React from 'react';
import { Hero } from '../components/Hero';
import { ColorSwatchGrid } from '../components/ColorSwatchGrid';
import { ArrowRight, FileSpreadsheet, Home, Building2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div id="home-page">
      {/* 1. Hero with clear branding, client copy & primary actions */}
      <Hero
        onExploreVisualizer={() => onNavigate('colors')}
        onFindDealer={() => onNavigate('contact')}
        onExploreProducts={() => onNavigate('products')}
      />

      {/* 2. Weatherdek-inspired Dual-Audience Pathway: Homeowners vs. Contractors/Architects */}
      {/* <section className="bg-sand/60 py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            Homeowners / Property Owners
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-3">
                  <Home className="w-3.5 h-3.5 text-navy" />
                  <span>For Homeowners &amp; Property Owners</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Upgrade to a Maintenance-Free Deck</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Forget about power washing, sanding, and resealing every year. DeckRite gives you an attractive, slip-resistant, 100% waterproof walking surface that won't rot, splinter, or peel.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('colors')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-navy hover:bg-navy-dark text-white text-xs font-bold transition-colors"
                >
                  Browse Colors &amp; Textures <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 hover:border-navy text-slate-800 text-xs font-bold bg-white transition-colors"
                >
                  View Deck Photos
                </button>
              </div>
            </div>

            Contractors, Builders & Architects
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-3">
                  <Building2 className="w-3.5 h-3.5 text-rose" />
                  <span>For Contractors &amp; Architects</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Engineered Waterproofing Details</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Full technical specifications for 50 mil and 60 mil membranes, standard CAD flashing details (DR-101 through DR-116), Technical Data Sheets, and cold-weather installation specs.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('resources')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-navy hover:bg-navy-dark text-white text-xs font-bold transition-colors"
                >
                  CAD Details &amp; Bulletins <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 hover:border-navy text-slate-800 text-xs font-bold bg-white transition-colors"
                >
                  50 &amp; 60 mil Series Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>  */}

       {/* 3. Core Product & Overview: A Waterproof Walking Surface */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">A waterproof walking surface</h2>
            <p className="text-slate-600 leading-relaxed text-base">
              With DeckRite you can forget about power washing, sanding, and resealing your deck every year. No more slivers, exposed nails, or rotting wood. The product is slip resistant, mildew resistant, and waterproof, with a proven track record since the 1970's in some of the harshest climates in North America.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              DeckRite is a popular choice for second-story walkout balconies that require a waterproof installation yet can be walked on. Traditional methods require building a deck or installing carpet on a waterproofing membrane. With DeckRite, one surface provides the waterproofing and the walking surface.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Although designed for the residential market, DeckRite is a preferred choice on commercial properties including apartment complexes, condominiums, retirement communities, and hotels.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy text-white font-semibold text-xs hover:bg-navy-dark shadow-sm transition-colors"
              >
                View 500 &amp; 600 Series Products <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('estimator')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 font-semibold text-xs hover:border-navy bg-white transition-colors"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-navy" />
                Material Estimator
              </button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/brand/lifestyle-vinyl-deck.jpeg"
              alt="Finished DeckRite Dove Grey vinyl deck with outdoor table"
              className="w-full h-auto aspect-[4/3] object-cover rounded-2xl border border-slate-200 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 4. Swatch & Color Selector (Clean, user-friendly interactive grid) */}
      <section className="py-12 bg-sand/40 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-rose">Available Colors</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Click a color for a close-up</h2>
              <p className="text-slate-600 text-sm mt-1">
                Tap any swatch to view the embossed texture, thickness availability, and coordinate pairings.
              </p>
            </div>
            <button
              onClick={() => onNavigate('colors')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:underline shrink-0"
            >
              Side-by-side color comparison →
            </button>
          </div>
          <ColorSwatchGrid />
        </div>
      </section>

      {/* 5. Teaser → dedicated Why DeckRite page */}
      <section className="py-12 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Why DeckRite</p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">Waterproofing and walking surface in one system</h2>
            <p className="text-white/80 mt-3 text-sm leading-relaxed">
              See how DeckRite compares to traditional membranes plus finish flooring — benefits, applications, and performance since the 1970&apos;s.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('why-deckrite')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-navy font-semibold text-sm hover:bg-sand shrink-0"
          >
            Why DeckRite <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. Simple Bottom Banner: Where to Buy / Distributor Referral */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Ready to start your deck project?</h3>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              DeckRite L.L.C. is a manufacturer headquartered in North Little Rock, Arkansas. We refer homeowners and contractors to stocking distributors and installing contractors in their area.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-lg bg-navy hover:bg-navy-dark text-white font-semibold text-xs shadow-sm transition-colors"
            >
              Find Local Distributor / Contact
            </button>
            <a
              href="tel:18884503325"
              className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 font-semibold text-xs hover:border-navy bg-white transition-colors"
            >
              Call (888) 450-DECK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
