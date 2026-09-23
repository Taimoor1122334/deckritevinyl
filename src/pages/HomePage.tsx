import React from 'react';
import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { ColorStrip } from '../components/ColorStrip';
import { ArrowRight, FileSpreadsheet, Home, Building2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div id="home-page">
      {/* 1. Hero (~70%): photography, headline, key benefits & primary actions */}
      <Hero onFindDealer={() => onNavigate('contact')} onExploreProducts={() => onNavigate('products')} />

      {/* 2. Supporting value proposition (~30%) */}
      <ValueProposition onWhyDeckRite={() => onNavigate('why-deckrite')} />

      {/* 3. Colors */}
      <ColorStrip onViewAllColors={() => onNavigate('colors')} />

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

       {/* 4. Core Product & Overview: A Waterproof Walking Surface */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <div className="flex flex-col justify-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">A waterproof walking surface</h2>
            <p className="text-slate-600 leading-relaxed text-base">
              With DeckRite you can forget the yearly routine of power washing, sanding, and resealing — along with the
              slivers, exposed nails, and rotting boards that come with a traditional wood deck. The membrane is slip
              resistant, mildew resistant, and completely waterproof, with a proven track record since the 1970&apos;s in
              some of the harshest climates in North America.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              It is a popular choice for second-story walkout balconies that need a waterproof installation yet still have
              to be walked on. Traditional methods require building a separate deck or laying carpet over a waterproofing
              membrane; with DeckRite, one surface does both jobs. Although designed for the residential market, it is
              equally at home on commercial properties including apartment complexes, condominiums, retirement
              communities, and hotels.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-navy text-white font-bold text-base hover:bg-navy-dark shadow-sm transition-colors"
              >
                Explore Decking Products <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('estimator')}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-slate-300 text-slate-800 font-bold text-base hover:border-navy bg-white transition-colors"
              >
                <FileSpreadsheet className="w-5 h-5 text-navy" />
                Material Estimator
              </button>
            </div>
          </div>
          <div className="min-h-[20rem]">
            <img
              src="/brand/Side-walk.png"
              alt="Covered residential porch with lounge seating opening onto a wooded backyard"
              className="w-full h-full min-h-[20rem] object-cover object-[55%_center] rounded-2xl border border-slate-200 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 5. Simple Bottom Banner: Where to Buy / Distributor Referral */}
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
              className="px-6 py-3.5 rounded-lg bg-navy hover:bg-navy-dark text-white font-bold text-sm shadow-sm transition-colors"
            >
              Find Local Distributor / Contact
            </button>
            <a
              href="tel:18884503325"
              className="px-6 py-3.5 rounded-lg border border-slate-300 text-slate-800 font-bold text-sm hover:border-navy bg-white transition-colors"
            >
              Call (888) 450-DECK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
