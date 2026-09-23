import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { GALLERY_IMAGES } from '../data/deckData';
import { GalleryCategory, GalleryImage } from '../types';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  deck: 'Deck & porch',
  balcony: 'Balcony',
  lakefront: 'Lakefront',
  pool: 'Pool & patio',
  walkway: 'Walkway',
};

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : GALLERY_IMAGES[activeIndex] ?? null;

  const openPhoto = (image: GalleryImage) => {
    setActiveIndex(GALLERY_IMAGES.findIndex((item) => item.id === image.id));
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        );
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === null ? current : (current + 1) % GALLERY_IMAGES.length));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Inspiration' }]} onNavigate={onNavigate} />

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Inspiration</h1>
          <p className="mt-3 max-w-2xl text-white/80 leading-relaxed">
            Completed DeckRite decks, balconies, and outdoor living spaces. Click any photo for a closer look.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-flow-dense grid-cols-1 auto-rows-[17rem] gap-4 sm:grid-cols-2 sm:auto-rows-[18rem] lg:grid-cols-3">
            {GALLERY_IMAGES.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => openPhoto(image)}
                className={`group relative overflow-hidden rounded-2xl bg-slate-100 text-left ${
                  image.featured ? 'sm:col-span-2' : ''
                }`}
              >
                <img
                  src={image.full}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">
                    {CATEGORY_LABELS[image.category]}
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-white">{image.title}</h2>
                  <p className="mt-1 max-w-md text-sm text-white/85 line-clamp-2">{image.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900">Ready to plan a project like these?</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              DeckRite manufactures the membrane and refers homeowners and contractors to stocking distributors and
              installing contractors. Tell us where you are and we will connect you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy-dark"
            >
              <MapPin className="h-4 w-4" />
              Find a distributor
            </button>
            <button
              type="button"
              onClick={() => onNavigate('colors')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-navy hover:border-navy"
            >
              View colors
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 text-white/80 hover:text-white sm:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 text-white/80 hover:text-white sm:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div
            className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={active.full} alt={active.alt} className="max-h-[70vh] w-full object-contain bg-slate-950" />
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-navy">
                  {CATEGORY_LABELS[active.category]} · {activeIndex + 1} of {GALLERY_IMAGES.length}
                </p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">{active.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{active.caption}</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-dark"
              >
                Find a distributor
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
