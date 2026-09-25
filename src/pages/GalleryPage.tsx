import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { CUSTOMER_PROJECTS, GALLERY_IMAGES } from '../data/deckData';
import { CustomerProject, GalleryCategory, GalleryImage } from '../types';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

interface LightboxPhoto {
  src: string;
  title: string;
  caption: string;
  eyebrow: string;
}

const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  deck: 'Deck & porch',
  balcony: 'Balcony',
  lakefront: 'Lakefront',
  pool: 'Pool & patio',
  walkway: 'Walkway',
};

const officialPhotos: LightboxPhoto[] = GALLERY_IMAGES.map((image) => ({
  src: image.full,
  title: image.title,
  caption: image.caption,
  eyebrow: CATEGORY_LABELS[image.category],
}));

const projectPhotos = (project: CustomerProject): LightboxPhoto[] =>
  project.images.map((image) => ({
    src: image.src,
    title: project.title,
    caption: project.caption,
    eyebrow: project.pattern ? `${project.location} · ${project.pattern}` : project.location,
  }));

const projectGridClass = (count: number) => {
  if (count <= 1) return 'grid-cols-1 auto-rows-[20rem]';
  return 'grid-cols-1 auto-rows-[16rem] sm:grid-cols-2 sm:auto-rows-[18rem]';
};

const projectImageClass = (count: number, index: number) => {
  if (count === 3 && index === 0) return 'sm:col-span-2';
  return '';
};

const CLICK_ZOOM = 2.35;

const ZoomablePhoto: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const stageRef = useRef<HTMLButtonElement>(null);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setZoomed(false);
    setOrigin({ x: 50, y: 50 });
  }, [src]);

  const originFromEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    const box = stageRef.current?.getBoundingClientRect();
    if (!box) return { x: 50, y: 50 };
    return {
      x: Math.min(100, Math.max(0, ((event.clientX - box.left) / box.width) * 100)),
      y: Math.min(100, Math.max(0, ((event.clientY - box.top) / box.height) * 100)),
    };
  };

  return (
    <button
      type="button"
      ref={stageRef}
      aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
      className={`relative block h-[min(78vh,760px)] w-full overflow-hidden bg-white ${
        zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
      }`}
      onMouseMove={(event) => {
        if (zoomed) setOrigin(originFromEvent(event));
      }}
      onMouseLeave={() => {
        if (!zoomed) setOrigin({ x: 50, y: 50 });
      }}
      onClick={(event) => {
        event.stopPropagation();
        if (zoomed) {
          setZoomed(false);
          setOrigin({ x: 50, y: 50 });
          return;
        }
        setOrigin(originFromEvent(event));
        setZoomed(true);
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="h-full w-full object-contain will-change-transform"
        style={{
          transform: `scale(${zoomed ? CLICK_ZOOM : 1})`,
          transformOrigin: `${origin.x}% ${origin.y}%`,
          transition: zoomed ? 'transform 180ms ease-out' : 'transform 280ms ease-out',
        }}
      />
      <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold text-white/90">
        {zoomed ? 'Click to zoom out' : 'Click to zoom'}
      </p>
    </button>
  );
};

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [lightbox, setLightbox] = useState<{ photos: LightboxPhoto[]; index: number } | null>(null);
  const active = lightbox ? lightbox.photos[lightbox.index] ?? null : null;

  const openOfficial = (image: GalleryImage) => {
    setLightbox({
      photos: officialPhotos,
      index: GALLERY_IMAGES.findIndex((item) => item.id === image.id),
    });
  };

  const openProject = (project: CustomerProject, index: number) => {
    setLightbox({ photos: projectPhotos(project), index });
  };

  const showPrev = () => {
    if (!lightbox) return;
    setLightbox({
      photos: lightbox.photos,
      index: (lightbox.index - 1 + lightbox.photos.length) % lightbox.photos.length,
    });
  };

  const showNext = () => {
    if (!lightbox) return;
    setLightbox({
      photos: lightbox.photos,
      index: (lightbox.index + 1) % lightbox.photos.length,
    });
  };

  useEffect(() => {
    if (!lightbox) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
      if (event.key === 'ArrowLeft') {
        setLightbox((current) =>
          current
            ? {
                photos: current.photos,
                index: (current.index - 1 + current.photos.length) % current.photos.length,
              }
            : current
        );
      }
      if (event.key === 'ArrowRight') {
        setLightbox((current) =>
          current
            ? { photos: current.photos, index: (current.index + 1) % current.photos.length }
            : current
        );
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Inspiration' }]} onNavigate={onNavigate} />

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Inspiration</h1>
          <p className="mt-3 max-w-2xl text-white/80 leading-relaxed">
            Completed DeckRite projects from homeowners across the country.<br />
            Photos are grouped by location — click any image for a closer look.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {CUSTOMER_PROJECTS.map((project) => (
            <article key={project.id}>
              <div className="mb-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy">
                  {project.location}
                  {project.pattern ? ` · ${project.pattern}` : ''}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">{project.title}</h2>
                <p className="mt-1 max-w-2xl text-sm text-slate-600">{project.caption}</p>
              </div>
              <div className={`grid gap-3 ${projectGridClass(project.images.length)}`}>
                {project.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => openProject(project, index)}
                    aria-label={image.alt}
                    className={`group relative overflow-hidden rounded-2xl bg-slate-100 text-left ${projectImageClass(
                      project.images.length,
                      index
                    )}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">More completed projects</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Additional decks, balconies, and outdoor living spaces finished in DeckRite vinyl.
            </p>
          </div>
          <div className="grid grid-flow-dense grid-cols-1 auto-rows-[17rem] gap-4 sm:grid-cols-2 sm:auto-rows-[18rem] lg:grid-cols-3">
            {GALLERY_IMAGES.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => openOfficial(image)}
                className={`group relative overflow-hidden rounded-2xl bg-slate-100 text-left ${
                  image.featured ? 'sm:col-span-2' : ''
                }`}
              >
                <img
                  src={image.full}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-5 pb-5 pt-10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/90">
                    {CATEGORY_LABELS[image.category]}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white drop-shadow-sm">{image.title}</h3>
                  <p className="mt-1 max-w-md text-sm text-white/95 line-clamp-2">{image.caption}</p>
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

      {active && lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
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
            className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <ZoomablePhoto src={active.src} alt={active.title} />
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-navy">
                  {active.eyebrow} · {lightbox.index + 1} of {lightbox.photos.length}
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
