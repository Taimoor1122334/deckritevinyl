import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhyDeckRite } from '../components/WhyDeckRite';
import { INSTALL_VIDEOS } from '../data/deckData';

interface WhyDeckRitePageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const WhyDeckRitePage: React.FC<WhyDeckRitePageProps> = ({ onNavigate, onOpenSampleModal }) => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Why DeckRite' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Why Choose DeckRite?</h1>
          <p className="text-white/80 mt-3 max-w-2xl">
            Watch the overview, then review the four-part installation series covering surface prep, drip edge, membrane layout, and hot-air welding.
          </p>
        </div>
      </section>
      <WhyDeckRite />
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Installation videos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {INSTALL_VIDEOS.map((video) => (
              <div key={video.id} className="rounded-xl overflow-hidden border border-slate-200">
                <div className="aspect-video">
                  <iframe
                    title={video.title}
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900">{video.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={onOpenSampleModal}
            className="mt-8 px-5 py-3 rounded-md bg-rose text-white font-semibold text-sm"
          >
            Request free samples
          </button>
        </div>
      </section>
    </div>
  );
};
