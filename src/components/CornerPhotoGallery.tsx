import React, { useState } from 'react';
import { CornerPhotoGuide } from '../types';
import {
  Maximize2,
  X,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
} from 'lucide-react';

interface CornerPhotoGalleryProps {
  guides: CornerPhotoGuide[];
}

export const CornerPhotoGallery: React.FC<CornerPhotoGalleryProps> = ({ guides }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'inside' | 'outside'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<CornerPhotoGuide | null>(null);

  const filtered = guides.filter((g) => (activeTab === 'all' ? true : g.type === activeTab));

  return (
    <div className="space-y-6">
      {/* Category filter tabs & count */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-2 bg-slate-100 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-1 sm:gap-2">
          {[
            { id: 'all', label: 'All Corner Steps (4)' },
            { id: 'inside', label: 'Inside Corners (Step 1 & 2)' },
            { id: 'outside', label: 'Outside Corners (Step 1 & 2)' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as 'all' | 'inside' | 'outside')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-navy text-white shadow-sm'
                  : 'text-slate-700 hover:text-navy hover:bg-white/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 pr-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Field Workmanship Standards</span>
        </div>
      </div>

      {/* Visual Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl border border-slate-200 hover:border-navy bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Photo Viewport - Crisp light canvas for architectural diagram */}
              <div
                onClick={() => setSelectedPhoto(item)}
                className="relative bg-slate-50 border-b border-slate-100 aspect-[4/3] p-4 flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-slate-100/70 transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  loading="lazy"
                />

                {/* Corner Type & Step Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${
                      item.type === 'inside' ? 'bg-navy' : 'bg-rose'
                    }`}
                  >
                    {item.type === 'inside' ? 'Inside Corner' : 'Outside Corner'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white text-slate-900 border border-slate-200 text-[10px] font-extrabold shadow-sm">
                    Step {item.stepNumber}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-navy text-white text-[11px] font-bold shadow-md">
                    <Maximize2 className="w-3 h-3 text-rose" /> Inspect Diagram
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-slate-900 leading-snug group-hover:text-navy transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {item.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 pt-1 border-t border-slate-100">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <a
                href={`/pdf/${item.drawingRef}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-navy hover:text-navy-dark"
              >
                <FileText className="w-3 h-3 text-rose" />
                {item.drawingRef} CAD Detail
              </a>
              <button
                type="button"
                onClick={() => setSelectedPhoto(item)}
                className="text-xs font-bold text-slate-600 hover:text-navy inline-flex items-center gap-1 cursor-pointer"
              >
                View Details <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Best Practices Note */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-700">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Pro Contractor Tip:</strong> Always dry-fit and fold corners prior to adhesive application. Hot-air weld corner seams with a 1-1/2" lap and test all probe seams with a dull cotter-pin probe after cooling.
          </span>
        </div>
        <a
          href="/pdf/Install417.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1 font-bold text-navy hover:underline"
        >
          Full Manual PDF <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Full-Screen / Modal Zoom View */}
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
            {/* Modal Header */}
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
                  <span className="text-xs font-semibold text-white/80">
                    Step {selectedPhoto.stepNumber} of 2
                  </span>
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

            {/* Big Image Viewport - Clean architectural drawing canvas */}
            <div className="bg-slate-100/90 border-b border-slate-200 p-6 flex items-center justify-center min-h-[280px] max-h-[55vh] relative overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[48vh] w-auto object-contain rounded-lg shadow-sm border border-slate-200 bg-white"
              />
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                <a
                  href={selectedPhoto.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-white/90 hover:bg-white text-slate-700 hover:text-navy text-[11px] font-bold shadow-sm border border-slate-200 inline-flex items-center gap-1 transition-colors"
                >
                  <ExternalLink className="w-3 h-3 text-rose" /> Full Res
                </a>
              </div>
            </div>

            {/* Modal Explanatory Content */}
            <div className="p-6 space-y-4 bg-white">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose">
                  Step Instructions
                </h4>
                <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-sand/60 border border-amber-200/70">
                <span className="text-xs font-bold text-slate-900 block mb-0.5">
                  Contractor Seaming Technique:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedPhoto.technique}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
                <a
                  href={`/pdf/${selectedPhoto.drawingRef}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy hover:bg-navy-dark text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5 text-rose" />
                  Open Matching CAD Detail Sheet ({selectedPhoto.drawingRef}.pdf)
                </a>

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
