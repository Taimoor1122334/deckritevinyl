import React, { useState, useEffect } from 'react';
import { Search, X, Layers, Sparkles, FileText, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { DECKRITE_PATTERNS, DECKRITE_PRODUCTS, RESOURCE_DOCUMENTS, AUTHORIZED_DEALERS } from '../data/deckData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle handled by caller
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingPatterns = DECKRITE_PATTERNS.filter(
    p =>
      p.name.toLowerCase().includes(cleanQuery) ||
      p.description.toLowerCase().includes(cleanQuery) ||
      p.texturePattern.toLowerCase().includes(cleanQuery)
  );

  const matchingProducts = DECKRITE_PRODUCTS.filter(
    p =>
      p.title.toLowerCase().includes(cleanQuery) ||
      p.description.toLowerCase().includes(cleanQuery) ||
      p.tagline.toLowerCase().includes(cleanQuery)
  );

  const matchingDocs = RESOURCE_DOCUMENTS.filter(
    d =>
      d.title.toLowerCase().includes(cleanQuery) ||
      d.description.toLowerCase().includes(cleanQuery) ||
      d.category.toLowerCase().includes(cleanQuery)
  );

  const matchingDealers = AUTHORIZED_DEALERS.filter(
    d =>
      d.name.toLowerCase().includes(cleanQuery) ||
      d.city.toLowerCase().includes(cleanQuery) ||
      d.stateOrProvince.toLowerCase().includes(cleanQuery) ||
      d.country.toLowerCase().includes(cleanQuery)
  );

  const handleSelect = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-200 flex items-center px-4 py-3.5">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search patterns (e.g. Slate Gray), products, CAD specs, dealers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          
          {/* Default Quick Jumps when query is empty */}
          {!cleanQuery && (
            <div className="space-y-4">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Popular Quick Destinations:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => handleSelect('visualizer')}
                  className="p-3 rounded-xl bg-cyan-50/70 hover:bg-cyan-100 text-left transition-colors border border-cyan-100 flex items-center gap-2.5 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-cyan-700 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Color Visualizer</div>
                    <div className="text-[10px] text-slate-500">Preview 8 patterns</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('products')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-left transition-colors border border-slate-200 flex items-center gap-2.5 cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-slate-700 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">60 &amp; 50 Mil Systems</div>
                    <div className="text-[10px] text-slate-500">Roof grade membranes</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('estimator')}
                  className="p-3 rounded-xl bg-emerald-50/70 hover:bg-emerald-100 text-left transition-colors border border-emerald-100 flex items-center gap-2.5 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Deck Estimator</div>
                    <div className="text-[10px] text-slate-500">Rolls &amp; glue calculator</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('resources')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-left transition-colors border border-slate-200 flex items-center gap-2.5 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-slate-700 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">CAD &amp; Code Reports</div>
                    <div className="text-[10px] text-slate-500">CGSB 37.54 specs</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('dealers')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-left transition-colors border border-slate-200 flex items-center gap-2.5 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-slate-700 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Dealer Locator</div>
                    <div className="text-[10px] text-slate-500">US &amp; Canada network</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('why-deckrite')}
                  className="p-3 rounded-xl bg-sky-50/70 hover:bg-sky-100 text-left transition-colors border border-sky-100 flex items-center gap-2.5 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Why DeckRite</div>
                    <div className="text-[10px] text-slate-500">3-ply construction</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Patterns Matches */}
          {matchingPatterns.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                Color Patterns ({matchingPatterns.length})
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchingPatterns.slice(0, 4).map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect('visualizer')}
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 text-left flex items-center gap-3 transition-colors cursor-pointer"
                  >
                    <div
                      className="w-8 h-8 rounded-lg shrink-0 border border-slate-300 shadow-2xs"
                      style={{ backgroundColor: p.colorHex }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-900 truncate">{p.name}</div>
                      <div className="text-[10px] text-slate-500 truncate">{p.thickness} · {p.texturePattern}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product Matches */}
          {matchingProducts.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-slate-600" />
                Products &amp; Systems ({matchingProducts.length})
              </div>
              <div className="space-y-1.5">
                {matchingProducts.map(prod => (
                  <button
                    key={prod.id}
                    onClick={() => handleSelect('products')}
                    className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-slate-50 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{prod.title}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">{prod.tagline}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-cyan-600 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Document Matches */}
          {matchingDocs.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                Architectural Specs &amp; Guides ({matchingDocs.length})
              </div>
              <div className="space-y-1.5">
                {matchingDocs.slice(0, 3).map(doc => (
                  <button
                    key={doc.id}
                    onClick={() => handleSelect('resources')}
                    className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-slate-50 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{doc.title}</div>
                      <div className="text-[10px] text-slate-500">{doc.category} · {doc.docType} ({doc.fileSize})</div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      View
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Dealer Matches */}
          {matchingDealers.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-600" />
                Authorized Dealers &amp; Installers ({matchingDealers.length})
              </div>
              <div className="space-y-1.5">
                {matchingDealers.slice(0, 3).map(dealer => (
                  <button
                    key={dealer.id}
                    onClick={() => handleSelect('dealers')}
                    className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-slate-50 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{dealer.name}</div>
                      <div className="text-[10px] text-slate-500">{dealer.city}, {dealer.stateOrProvince} ({dealer.country}) · {dealer.type}</div>
                    </div>
                    <span className="text-[10px] font-bold text-cyan-700">Contact</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {cleanQuery && matchingPatterns.length === 0 && matchingProducts.length === 0 && matchingDocs.length === 0 && matchingDealers.length === 0 && (
            <div className="text-center py-10 text-slate-500">
              <p className="text-sm font-semibold">No direct results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for &quot;60 mil&quot;, &quot;adhesive&quot;, &quot;drip edge&quot;, &quot;warranty&quot;, or &quot;installation&quot;.</p>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px]">ESC</kbd> to close</span>
          <span className="text-cyan-700 font-medium">Toll Free: (888) 450-DECK</span>
        </div>

      </div>
    </div>
  );
};
