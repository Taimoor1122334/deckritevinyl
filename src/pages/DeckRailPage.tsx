import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ExternalLink } from 'lucide-react';

interface DeckRailPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const DeckRailPage: React.FC<DeckRailPageProps> = ({ onNavigate, onOpenSampleModal }) => {
  const docs = [
    { label: 'Architectural Binder', href: 'https://www.deckrite.com/assets/files/pdf/DR_Architectural_Binder.pdf' },
    { label: 'Glass Installation Guide', href: 'https://www.deckrite.com/assets/files/pdf/DR_Glass_Installation.pdf' },
    { label: 'Handrail Support Detail (DR-108)', href: 'https://www.deckrite.com/assets/files/pdf/DR-108.pdf' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'DeckRail', page: 'products' }, { label: 'Infinity Glass System' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">DeckRail — Infinity Glass System</h1>
          <p className="text-white/80 mt-3 max-w-2xl">
            The Infinity topless railing system offers strength, style, and versatility while eliminating the upper and lower rails — providing the ultimate fashion statement for your deck.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <img src="/gallery/balcony-8.jpg" alt="Deck with open views" className="w-full h-80 object-cover rounded-xl border border-slate-200" />
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed">
              Enhance breathtaking scenes with the Infinity railing system and enjoy a true million-dollar view. Patent-pending designs are engineered to exceed national building codes while providing elegant lines that complement residential projects.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Topless glass — no upper or lower rails</li>
              <li>Companion glass, stair, and welded picket installation guides</li>
              <li>Waterproofing details for handrail supports (DR-108)</li>
              <li>Pairs with DeckRite 50 mil and 60 mil membranes</li>
            </ul>
            <div className="space-y-2 pt-2">
              {docs.map((doc) => (
                <a
                  key={doc.label}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold hover:border-navy"
                >
                  {doc.label}
                  <ExternalLink className="w-4 h-4 text-navy" />
                </a>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={() => onNavigate('contact')} className="px-5 py-3 rounded-md bg-navy text-white font-semibold text-sm">
                Contact us about DeckRail
              </button>
              <button onClick={onOpenSampleModal} className="px-5 py-3 rounded-md border border-slate-300 font-semibold text-sm">
                Membrane samples
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
