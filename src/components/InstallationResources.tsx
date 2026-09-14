import React from 'react';
import { DETAIL_DRAWINGS, RESOURCE_DOCUMENTS, INSTALL_VIDEOS } from '../data/deckData';
import { ExternalLink } from 'lucide-react';

export const InstallationResources: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Technical data</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Specs, details &amp; installation</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {RESOURCE_DOCUMENTS.slice(0, 4).map((doc) => (
            <a
              key={doc.id}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-5 hover:border-navy"
            >
              <p className="text-[11px] font-bold uppercase tracking-wide text-navy">{doc.category}</p>
              <h3 className="font-semibold text-slate-900 mt-1">{doc.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{doc.description}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-navy">
                Download PDF <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>

        <h3 className="font-bold text-slate-900 mb-4">Standard detail drawings</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {DETAIL_DRAWINGS.map((drawing) => (
            <a
              key={drawing.id}
              href={drawing.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 bg-white p-2 hover:border-navy text-center"
            >
              <img src={drawing.image} alt={drawing.title} className="w-full h-24 object-contain" />
              <p className="text-[11px] font-bold text-navy mt-1">{drawing.code}</p>
              <p className="text-[11px] text-slate-600 leading-tight">{drawing.title}</p>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-slate-900 mb-4">Installation video series</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INSTALL_VIDEOS.slice(0, 3).map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-navy"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900">{video.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{video.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
