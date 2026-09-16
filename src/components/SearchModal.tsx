import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { DECKRITE_PATTERNS, DECKRITE_PRODUCTS, RESOURCE_DOCUMENTS } from '../data/deckData';
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
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();
  const patterns = q
    ? DECKRITE_PATTERNS.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    : DECKRITE_PATTERNS;
  const products = q
    ? DECKRITE_PRODUCTS.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    : DECKRITE_PRODUCTS;
  const docs = q
    ? RESOURCE_DOCUMENTS.filter((d) => d.title.toLowerCase().includes(q) || d.description.toLowerCase().includes(q))
    : RESOURCE_DOCUMENTS;

  const go = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden">
        <div className="flex items-center px-4 py-3 border-b border-slate-200">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search colors, products, specs…"
            className="w-full px-3 py-2 text-sm focus:outline-none"
          />
          <button onClick={onClose} aria-label="Close">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          <div>
            <p className="text-[11px] font-bold uppercase text-slate-400 mb-2">Colors</p>
            {patterns.slice(0, 6).map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  go('colors');
                }}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm"
              >
                {p.name}
              </button>
            ))}
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase text-slate-400 mb-2">Products</p>
            {products.map((p) => (
              <button key={p.id} onClick={() => go('products')} className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">
                {p.title}
              </button>
            ))}
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase text-slate-400 mb-2">Documents</p>
            {docs.slice(0, 5).map((d) => (
              <button key={d.id} onClick={() => go('resources')} className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">
                {d.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
