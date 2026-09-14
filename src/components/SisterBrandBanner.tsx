import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { SampleCartItem } from '../types';

interface SisterBrandBannerProps {
  sampleCart: SampleCartItem[];
  onOpenSampleModal: () => void;
  onNavigateToDealers: () => void;
}

export const SisterBrandBanner: React.FC<SisterBrandBannerProps> = ({
  onOpenSampleModal,
  onNavigateToDealers,
}) => {
  return (
    <div id="sister-brand-banner" className="bg-[#0c1b33] text-white">
      {/* Row 1: sister brand logos — same pattern as MariDeck.com */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-4 sm:gap-6">
          <a
            id="link-marideck"
            href="https://marideck.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center opacity-90 hover:opacity-100 transition-opacity"
            title="Visit MariDeck marine vinyl flooring"
          >
            <img
              src="/brand/marideck-logo.png"
              alt="MariDeck"
              className="h-7 sm:h-8 w-auto"
            />
          </a>
          <span className="text-white/40 text-lg font-light select-none" aria-hidden="true">
            –
          </span>
          <a
            id="link-deckrite-rv"
            href="https://deckriterv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center opacity-90 hover:opacity-100 transition-opacity"
            title="Visit DeckRite RV vinyl flooring"
          >
            <img
              src="/brand/deckrite-rv-logo.png"
              alt="DeckRite RV"
              className="h-7 sm:h-8 w-auto"
            />
          </a>
        </div>
      </div>

      {/* Row 2: contact + social, matching the MariDeck utility bar */}
      <div className="bg-[#081225]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px]">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-white/85">
            <a
              href="mailto:DeckRitesupport@deckrite.com"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Mail className="w-3.5 h-3.5 text-[#6ad0ca]" />
              DeckRitesupport@deckrite.com
            </a>
            <a
              id="header-phone-link"
              href="tel:18884503325"
              className="inline-flex items-center gap-1.5 hover:text-white font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#6ad0ca]" />
              888-450-DECK (3325)
            </a>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <button
              onClick={onNavigateToDealers}
              className="hover:text-white"
            >
              Find a Distributor
            </button>
            <button
              onClick={onOpenSampleModal}
              className="hover:text-white"
            >
              Free Samples
            </button>
            <span className="hidden sm:inline text-white/50">Follow us:</span>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/DeckRite" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
                Facebook
              </a>
              <a href="https://www.instagram.com/deckritellc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
                Instagram
              </a>
              <a href="https://x.com/deckritellc" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-white">
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
