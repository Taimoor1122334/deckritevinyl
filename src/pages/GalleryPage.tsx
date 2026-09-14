import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { GALLERY_IMAGES, SHOWCASE_PROJECTS } from '../data/deckData';
import { X } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenSampleModal }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Photo Gallery' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Photo Gallery</h1>
          <p className="text-white/80 mt-3 max-w-2xl">
            Completed DeckRite decks, balconies, and outdoor living spaces from the official project gallery.
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {SHOWCASE_PROJECTS.map((project) => (
              <button key={project.id} onClick={() => setActive(project.image)} className="text-left rounded-xl overflow-hidden border border-slate-200">
                <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h2 className="font-bold text-slate-900">{project.title}</h2>
                  <p className="text-sm text-slate-600 mt-1">{project.description}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {GALLERY_IMAGES.map((img) => (
              <button key={img.id} onClick={() => setActive(img.full)} className="aspect-square overflow-hidden rounded border border-slate-200">
                <img src={img.thumb} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <button onClick={onOpenSampleModal} className="mt-10 px-5 py-3 rounded-md bg-rose text-white font-semibold text-sm">
            Request free samples
          </button>
        </div>
      </section>
      {active && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button className="absolute top-4 right-4 text-white" aria-label="Close">
            <X className="w-8 h-8" />
          </button>
          <img src={active} alt="DeckRite project" className="max-h-[90vh] max-w-full rounded" />
        </div>
      )}
    </div>
  );
};
