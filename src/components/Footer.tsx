import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="main-footer" className="bg-white text-slate-700 text-sm border-t border-slate-200">
      <div className="bg-navy text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Need a distributor near you?</h3>
            <p className="text-sm text-white/85 mt-1">
              DeckRite manufactures the membrane. Call or write for a stocking distributor or installer in your area.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-md bg-white text-navy font-semibold text-sm hover:bg-slate-100"
            >
              Contact DeckRite
            </button>
            <a
              href="tel:18884503325"
              className="px-5 py-3 rounded-md border border-white/40 text-white font-semibold text-sm hover:bg-white/10"
            >
              (888) 450-DECK
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#f3eee6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center gap-8">
          <img src="/brand/dws.png" alt="Darby's Warrior Support" className="h-24 w-auto object-contain" />
          <p className="text-sm text-slate-700 leading-relaxed">
            DeckRite is very proud to be associated with{' '}
            <a href="https://darbyswarriorsupport.org/" target="_blank" rel="noopener noreferrer" className="text-navy font-semibold underline">
              Darby&apos;s Warrior Support
            </a>
            , which offers combat veterans of the 9/11 Generation free, all-inclusive Arkansas duck hunting in luxury accommodations. They also provide educational scholarship assistance for the severely wounded and permanently disabled veteran seeking a college degree. Since 2012 we have enjoyed helping make hunting trips possible for these heroes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <img src="/brand/deckrite-logo.png" alt="DeckRite" className="h-10 w-auto" />
          <p className="text-sm text-slate-600 leading-relaxed">
            DeckRite L.L.C. is a manufacturer of vinyl films and membranes — not an installation contractor. Headquartered in North Little Rock, Arkansas, serving the construction, marine, and RV industries since the 1970's.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">Headquarters</h4>
          <p className="text-sm text-slate-600">
            3912 East Progress<br />
            North Little Rock, AR 72114
          </p>
          <p className="mt-3">
            <a href="tel:18884503325" className="inline-flex items-center gap-1.5 text-navy font-semibold">
              <Phone className="w-4 h-4" />
              (888) 450-DECK (3325)
            </a>
          </p>
          <p className="mt-1 text-sm text-slate-600">Local / Fax: (501) 945-1919</p>
          <p className="mt-1">
            <a href="mailto:DeckRitesupport@deckrite.com" className="inline-flex items-center gap-1.5 text-slate-700 hover:text-navy">
              <Mail className="w-4 h-4" />
              DeckRitesupport@deckrite.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">Explore</h4>
          <div className="grid grid-cols-1 gap-1.5 text-sm">
            <button onClick={() => onNavigate('products')} className="text-left hover:text-navy">Products</button>
            <button onClick={() => onNavigate('gallery')} className="text-left hover:text-navy">Inspiration</button>
            <button onClick={() => onNavigate('why-deckrite')} className="text-left hover:text-navy">Why DeckRite</button>
            <button onClick={() => onNavigate('resources')} className="text-left hover:text-navy">Resources &amp; Tech Data</button>
            <button onClick={() => onNavigate('contact')} className="text-left hover:text-navy">Contact &amp; FAQs</button>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">Sister Brands</h4>
          <a href="https://marideck.net/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 mb-2 hover:border-navy">
            <img src="/brand/marideck-logo.png" alt="MariDeck" className="h-6 w-auto bg-[#0c1b33] px-2 py-1 rounded" />
            <span className="text-sm font-medium">MariDeck</span>
          </a>
          <a href="https://deckriterv.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-navy">
            <img src="/brand/deckrite-rv-logo.png" alt="DeckRite RV" className="h-6 w-auto bg-[#0c1b33] px-2 py-1 rounded" />
            <span className="text-sm font-medium">DeckRite RV</span>
          </a>
          <p className="mt-4 text-xs text-slate-500">
            In Canada, visit{' '}
            <a href="https://deckritecanada.com/" target="_blank" rel="noopener noreferrer" className="text-navy underline">
              DeckRite Canada
            </a>
            .
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} DeckRite L.L.C. All rights reserved.</div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1 hover:text-navy"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
