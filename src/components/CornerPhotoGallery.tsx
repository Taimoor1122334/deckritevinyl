import React, { useEffect, useState } from 'react';
import { CornerPhotoGuide } from '../types';
import {
  Maximize2,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

interface CornerPhotoGalleryProps {
  guides: CornerPhotoGuide[];
}

const INITIAL_COUNT = 4;

function CloseUpViewer({
  guides,
  index,
  onClose,
  onChange,
}: {
  guides: CornerPhotoGuide[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const photo = guides[index];
  const hasMany = guides.length > 1;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onChange((index + 1) % guides.length);
      if (event.key === 'ArrowLeft') onChange((index - 1 + guides.length) % guides.length);
    };
    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [guides.length, index, onChange, onClose]);

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.title} close-up`}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 bg-navy px-4 py-3 text-white">
          <span className="text-sm font-bold">{photo.title}</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white hover:bg-white/15 cursor-pointer"
            aria-label="Close photo"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative flex items-center justify-center bg-white px-11 py-4 sm:px-16 sm:py-6">
          {hasMany && (
            <button
              type="button"
              onClick={() => onChange((index - 1 + guides.length) % guides.length)}
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm hover:border-navy cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          <img
            src={photo.image}
            alt={photo.title}
            className="max-h-[52vh] w-auto max-w-full object-contain sm:max-h-[70vh]"
          />

          {hasMany && (
            <button
              type="button"
              onClick={() => onChange((index + 1) % guides.length)}
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm hover:border-navy cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export const CornerPhotoGallery: React.FC<CornerPhotoGalleryProps> = ({ guides }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleGuides = guides.slice(0, visibleCount);
  const hasMore = visibleCount < guides.length;

  const openPhoto = (id: string) => {
    const index = guides.findIndex((guide) => guide.id === id);
    if (index >= 0) setSelectedIndex(index);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
        {visibleGuides.map((item) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => openPhoto(item.id)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openPhoto(item.id);
              }
            }}
            className="group flex cursor-zoom-in flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-navy hover:shadow-md"
          >
            <div>
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-slate-100 bg-white p-1 transition-colors group-hover:bg-slate-50 sm:p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-1.5 top-1.5 z-10 sm:left-3 sm:top-3">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm sm:px-2.5 sm:text-[10px] ${
                      item.type === 'inside' ? 'bg-navy' : 'bg-rose'
                    }`}
                  >
                    {item.type === 'inside' ? 'Inside Corner' : 'Outside Corner'}
                  </span>
                </div>
                <div className="absolute bottom-2.5 right-2.5 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-navy px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
                    <Maximize2 className="h-3 w-3" /> Enlarge
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <h4 className="text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-navy">
                  {item.title}
                </h4>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-end border-t border-slate-100 px-3 pb-3 pt-0 sm:p-4 sm:pt-0">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 group-hover:text-navy">
                View photo <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount(guides.length)}
            className="cursor-pointer rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-navy"
          >
            Load more
          </button>
        </div>
      )}

      <div className="flex flex-col items-start justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
          <span>
            Photos of inside and outside corner pieces. Follow the 2026 installation instructions for folding, adhesive, and hot-air welding.
          </span>
        </div>
        <a
          href="/pdf/DeckRite Installation Instructions 2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 font-bold text-navy hover:underline"
        >
          Installation instructions <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {selectedIndex !== null && (
        <CloseUpViewer
          guides={guides}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onChange={setSelectedIndex}
        />
      )}
    </div>
  );
};
