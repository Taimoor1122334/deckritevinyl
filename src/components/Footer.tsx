import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenSampleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSampleModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top CTA Banner in Footer */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to Upgrade to a 100% Waterproof Deck?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Order your free sample kit or get connected with a certified DeckRite installer today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenSampleModal}
              className="px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg transition-colors cursor-pointer"
            >
              Order Free Sample Kit
            </button>
            <button
              onClick={() => onNavigate('estimator')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
            >
              Launch Material Estimator
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 via-sky-700 to-slate-900 flex items-center justify-center text-white shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 7h18M3 12h18M3 17h18" />
                  <path d="M19 12a7 7 0 0 1-14 0" stroke="cyan" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white font-display">
                  DECK<span className="text-cyan-500">RITE</span>®
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider -mt-0.5">
                  Waterproof Decking Systems
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              DeckRite L.L.C., part of the Little Rock Holdings group of companies, has manufactured premium calendered vinyl membranes and PVC systems for the North American construction, roofing, and marine industries since the late 1970s.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <span className="text-[11px] font-semibold flex items-center gap-1 text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
                <ShieldCheck className="w-3.5 h-3.5" />
                CGSB 37.54 &amp; ICC-ES ESR Compliant
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Headquarters (USA)
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-400">
                DeckRite L.L.C.<br />
                3912 East Progress<br />
                North Little Rock, AR 72114
              </p>
              <p className="pt-1">
                <span className="text-slate-500 block">Toll-Free Phone:</span>
                <a href="tel:18884503325" className="text-cyan-400 hover:underline font-bold text-sm">
                  (888) 450-DECK (3325)
                </a>
              </p>
              <p>
                <span className="text-slate-500 block">Local / Fax:</span>
                <span className="text-slate-300 font-medium">(501) 945-1919</span>
              </p>
              <p>
                <span className="text-slate-500 block">Email Support:</span>
                <a href="mailto:DeckRitesupport@deckrite.com" className="text-slate-300 hover:text-cyan-400">
                  DeckRitesupport@deckrite.com
                </a>
              </p>
            </div>
          </div>

          {/* Canada Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              DeckRite Canada
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-400">
                DeckRite Canada Sundecks Ltd.<br />
                Unit 3, 20133 – 102nd Avenue<br />
                Langley, BC V1M 4B4
              </p>
              <p className="pt-1">
                <span className="text-slate-500 block">Toll-Free Phone:</span>
                <a href="tel:18883032792" className="text-cyan-400 hover:underline font-bold text-sm">
                  1-888-303-2792
                </a>
              </p>
              <p>
                <span className="text-slate-500 block">Local Phone:</span>
                <span className="text-slate-300 font-medium">604-513-0416</span>
              </p>
              <p>
                <span className="text-slate-500 block">Fax:</span>
                <span className="text-slate-300 font-medium">604-513-0428</span>
              </p>
            </div>
          </div>

          {/* Sister Brands & Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Sister Brands
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://marideck.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors"
              >
                <div>
                  <span className="font-bold block text-white">MariDeck</span>
                  <span className="text-[10px] text-slate-500">Marine Vinyl Flooring</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>

              <a
                href="https://deckriterv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-amber-300 border border-slate-800 transition-colors"
              >
                <div>
                  <span className="font-bold block text-white">DeckRite RV</span>
                  <span className="text-[10px] text-slate-500">RV Flooring Solutions</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-white block mb-1.5">Quick Links:</span>
              <div className="grid grid-cols-2 gap-1 text-[11px]">
                <button onClick={() => onNavigate('products')} className="text-left text-slate-400 hover:text-white">Products</button>
                <button onClick={() => onNavigate('visualizer')} className="text-left text-slate-400 hover:text-white">Visualizer</button>
                <button onClick={() => onNavigate('why-deckrite')} className="text-left text-slate-400 hover:text-white">Why Vinyl</button>
                <button onClick={() => onNavigate('gallery')} className="text-left text-slate-400 hover:text-white">Gallery</button>
                <button onClick={() => onNavigate('resources')} className="text-left text-slate-400 hover:text-white">Specs &amp; Code</button>
                <button onClick={() => onNavigate('dealers')} className="text-left text-slate-400 hover:text-white">Dealer Locator</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar with Back to Top */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} DeckRite L.L.C. All rights reserved. Registered trademark of Little Rock Holdings.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Engineered &amp; Tested in North America</span>
            <span className="text-slate-800">|</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
