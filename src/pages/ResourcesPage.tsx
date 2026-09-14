import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { InstallationResources } from '../components/InstallationResources';
import { FAQ_ITEMS, PHYSICAL_PROPERTIES, RESOURCE_DOCUMENTS } from '../data/deckData';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Technical Data' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Technical Data &amp; FAQ</h1>
          <p className="text-white/80 mt-3 max-w-2xl">
            Physical properties, architectural specs, installation instructions, and frequently asked questions from DeckRite LLC.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Material physical properties</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Property</th>
                  <th className="text-left px-4 py-3 font-semibold">Test method</th>
                  <th className="text-left px-4 py-3 font-semibold">DeckRite</th>
                </tr>
              </thead>
              <tbody>
                {PHYSICAL_PROPERTIES.map((row, i) => (
                  <tr key={row.property} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-800">{row.property}</td>
                    <td className="px-4 py-3 text-slate-600">{row.method}</td>
                    <td className="px-4 py-3 text-slate-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Downloads</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESOURCE_DOCUMENTS.map((doc) => (
              <a key={doc.id} href={doc.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 p-5 hover:border-navy">
                <p className="text-[11px] font-bold uppercase text-navy">{doc.category}</p>
                <h3 className="font-semibold mt-1">{doc.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{doc.description}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-navy">
                  Open PDF <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <InstallationResources />

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently asked questions</h2>
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
            {FAQ_ITEMS.map((item, i) => (
              <div key={item.question}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900"
                >
                  {item.question}
                  <ChevronDown className={`w-4 h-4 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">{item.answer}</p>}
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <button onClick={() => onNavigate('estimator')} className="px-5 py-3 rounded-md border border-slate-300 font-semibold text-sm">
              Material estimator
            </button>
            <button onClick={() => onNavigate('contact')} className="px-5 py-3 rounded-md bg-navy text-white font-semibold text-sm">
              Contact DeckRite
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
