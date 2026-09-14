import React from 'react';
import { ExternalLink, Phone, MapPin, Package, ShieldCheck } from 'lucide-react';
import { SampleCartItem } from '../types';

interface SisterBrandBannerProps {
  sampleCart: SampleCartItem[];
  onOpenSampleModal: () => void;
  onNavigateToDealers: () => void;
}

export const SisterBrandBanner: React.FC<SisterBrandBannerProps> = ({
  sampleCart,
  onOpenSampleModal,
  onNavigateToDealers,
}) => {
  return (
    <div id="sister-brand-banner" className="bg-slate-900 text-slate-200 border-b border-slate-800 text-xs font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          
          {/* Left: Brand Family Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <span className="text-slate-400 font-medium tracking-wide uppercase text-[10px] flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              DeckRite Family of Brands:
            </span>

            {/* MariDeck Sister Brand */}
            <a
              id="link-marideck"
              href="https://marideck.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/60 transition-all duration-150"
              title="Visit MariDeck - Marine Grade Vinyl Flooring"
            >
              {/* MariDeck Stylized Logo */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" strokeOpacity="0.3" />
                  <circle cx="12" cy="5" r="2" fill="currentColor" />
                  <path d="M12 7v10M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4" />
                  <path d="M6 18c2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0" />
                </svg>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    Mari<span className="text-cyan-400">Deck</span>
                  </span>
                  <span className="text-[9px] text-slate-400 -mt-0.5">Marine Vinyl Flooring</span>
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* DeckRite RV Sister Brand */}
            <a
              id="link-deckrite-rv"
              href="https://deckriterv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-amber-500/60 transition-all duration-150"
              title="Visit DeckRite RV - RV Vinyl Flooring & Roofing Solutions"
            >
              {/* DeckRite RV Stylized Logo */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="15" height="11" rx="2" />
                  <path d="M17 10h4l2 3v4h-6v-7z" />
                  <circle cx="7" cy="17" r="2" fill="currentColor" />
                  <circle cx="17" cy="17" r="2" fill="currentColor" />
                </svg>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    DeckRite <span className="text-amber-400">RV</span>
                  </span>
                  <span className="text-[9px] text-slate-400 -mt-0.5">RV Flooring & Slide-Outs</span>
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-400 transition-colors" />
            </a>
          </div>

          {/* Right: Customer Service & Quick Utilities */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-300">
            {/* Phone Support */}
            <a
              id="header-phone-link"
              href="tel:18884503325"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              title="Call DeckRite Toll Free"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden lg:inline text-slate-400">Toll Free:</span>
              <span className="font-semibold text-white">(888) 450-DECK</span>
            </a>

            <span className="text-slate-700 hidden sm:inline">|</span>

            {/* Dealer Locator Button */}
            <button
              id="header-dealer-locator-btn"
              onClick={onNavigateToDealers}
              className="inline-flex items-center gap-1 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Dealer</span> Locator
            </button>

            <span className="text-slate-700 hidden sm:inline">|</span>

            {/* Free Sample Swatches Indicator */}
            <button
              id="header-sample-swatches-btn"
              onClick={onOpenSampleModal}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 hover:bg-cyan-900/90 text-cyan-200 transition-colors cursor-pointer"
              title="Request Free Physical Swatches (Mailed Free)"
            >
              <Package className="w-3 h-3 text-cyan-400" />
              <span>Free Swatches</span>
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-cyan-500 text-slate-950 font-bold text-[10px]">
                {sampleCart.length}
              </span>
            </button>

            {/* Code compliance badge */}
            <span className="hidden xl:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/60">
              <ShieldCheck className="w-3 h-3" />
              CGSB 37.54 & ICC-ES Tested
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
