import React, { useState } from 'react';
import { CornerPhotoGuide } from '../types';
import {
  Maximize2,
  X,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

interface CornerPhotoGalleryProps {
  guides: CornerPhotoGuide[];
}

export const CornerPhotoGallery: React.FC<CornerPhotoGalleryProps> = ({ guides }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<CornerPhotoGuide | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {guides.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl border border-slate-200 hover:border-navy bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div
                onClick={() => setSelectedPhoto(item)}
                className="relative bg-white border-b border-slate-100 aspect-[4/3] p-4 flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-slate-50 transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${
                      item.type === 'inside' ? 'bg-navy' : 'bg-rose'
                    }`}
                  >
                    {item.type === 'inside' ? 'Inside Corner' : 'Outside Corner'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white text-slate-900 border border-slate-200 text-[10px] font-extrabold shadow-sm">
                    {item.viewLabel}
                  </span>
                </div>
                <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-navy text-white text-[11px] font-bold shadow-md">
                    <Maximize2 className="w-3 h-3" /> Enlarge
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-slate-900 leading-snug group-hover:text-navy transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium">{item.subtitle}</p>
                <ul className="pt-1 border-t border-slate-100 space-y-1">
                  {item.dimensions.map((dimension) => (
                    <li key={dimension} className="text-xs font-semibold text-slate-700">
                      {dimension}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 pt-0 flex items-center justify-end border-t border-slate-100 mt-2">
              <button
                type="button"
                onClick={() => setSelectedPhoto(item)}
                className="text-xs font-bold text-slate-600 hover:text-navy inline-flex items-center gap-1 cursor-pointer"
              >
                View photo <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-700">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            These are the current inside and outside corner samples with field dimensions. Follow the 2026 installation instructions for folding, adhesive, and hot-air welding.
          </span>
        </div>
        <a
          href="/pdf/DeckRite Installation Instructions 2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1 font-bold text-navy hover:underline"
        >
          Installation instructions <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-navy text-white px-5 py-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white ${
                      selectedPhoto.type === 'inside' ? 'bg-rose' : 'bg-emerald-600'
                    }`}
                  >
                    {selectedPhoto.type === 'inside' ? 'Inside Corner' : 'Outside Corner'}
                  </span>
                  <span className="text-xs font-semibold text-white/80">{selectedPhoto.viewLabel}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">{selectedPhoto.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-white border-b border-slate-200 p-6 flex items-center justify-center min-h-[280px] max-h-[55vh] relative overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[48vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 space-y-4 bg-white">
              <p className="text-slate-700 text-sm leading-relaxed">{selectedPhoto.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedPhoto.dimensions.map((dimension) => (
                  <span
                    key={dimension}
                    className="px-2.5 py-1 rounded-full bg-sand text-slate-800 text-xs font-semibold"
                  >
                    {dimension}
                  </span>
                ))}
              </div>
              <div className="flex justify-end pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
