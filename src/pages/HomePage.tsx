import React from 'react';
import { Hero } from '../components/Hero';
import { ColorVisualizer } from '../components/ColorVisualizer';
import { ProductCatalog } from '../components/ProductCatalog';
import { WhyDeckRite } from '../components/WhyDeckRite';
import { ProjectGallery } from '../components/ProjectGallery';
import { InstallationResources } from '../components/InstallationResources';
import { DealerLocator } from '../components/DealerLocator';
import { SisterBrandsSection } from '../components/SisterBrandsSection';
import { ColorPattern, SampleCartItem } from '../types';
import { DECKRITE_PATTERNS } from '../data/deckData';
import { ArrowRight, ShieldCheck, Layers, MapPin, Palette } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
  onAddSample: (pattern: ColorPattern) => void;
  sampleCart: SampleCartItem[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenSampleModal,
  onAddSample,
  sampleCart,
}) => {
  return (
    <div id="home-page">
      <Hero
        onExploreVisualizer={() => onNavigate('colors')}
        onOpenSampleModal={onOpenSampleModal}
        onFindDealer={() => onNavigate('dealers')}
        onExploreProducts={() => onNavigate('products')}
      />

      <section className="bg-sand py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Premium Flooring', copy: '50 mil and 60 mil three-ply vinyl membrane for decks, balconies, docks, and sun porches.', page: 'products', icon: Layers },
              { title: 'Colors', copy: 'Sahara Tan, Slate Gray, Tropical Cream, Lakewood Marble, Tuscany Sand, Harvest, and Riverstone.', page: 'colors', icon: Palette },
              { title: 'Photo Gallery', copy: 'Real DeckRite decks and balconies — see the finished walking surface in place.', page: 'gallery', icon: ShieldCheck },
              { title: 'Find a Distributor', copy: 'Call (888) 450-DECK or contact us for a stocking distributor or installer near you.', page: 'dealers', icon: MapPin },
            ].map((card) => (
              <button
                key={card.title}
                onClick={() => onNavigate(card.page)}
                className="text-left bg-white p-6 rounded-xl border border-slate-200 hover:border-navy hover:shadow-md transition-all group"
              >
                <card.icon className="w-6 h-6 text-navy mb-3" />
                <h3 className="font-bold text-slate-900 group-hover:text-navy">{card.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{card.copy}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">A waterproof walking surface</h2>
            <p className="text-slate-600 leading-relaxed">
              With DeckRite you can forget about power washing, sanding, and resealing your deck every year. No more slivers, exposed nails, or rotting wood. The product is slip resistant, mildew resistant, and waterproof, with a proven track record of over 20 years in some of the harshest climates in North America.
            </p>
            <p className="text-slate-600 leading-relaxed">
              DeckRite is a popular choice for second-story walkout balconies that require a waterproof installation yet can be walked on. Traditional methods require building a deck or installing carpet on a waterproofing membrane. With DeckRite, one surface provides the waterproofing and the walking surface.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Although designed for the residential market, DeckRite is a preferred choice on commercial properties including apartment complexes, condominiums, retirement communities, and hotels.
            </p>
            <p className="text-sm text-slate-500">
              If you are in Canada, please visit{' '}
              <a href="https://deckritecanada.com/" target="_blank" rel="noopener noreferrer" className="text-navy underline">
                DeckRite Canada
              </a>{' '}
              for Canadian products.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Available colors</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {DECKRITE_PATTERNS.map((pattern) => (
                <button
                  key={pattern.id}
                  onClick={() => onNavigate('colors')}
                  className="rounded-lg border border-slate-200 bg-white p-2 hover:border-navy"
                >
                  <img src={pattern.thumb} alt={pattern.name} className="w-full h-28 object-contain" />
                </button>
              ))}
            </div>
            <button
              onClick={onOpenSampleModal}
              className="mt-4 text-sm font-semibold text-navy hover:underline"
            >
              Request free swatches ({sampleCart.length} selected) →
            </button>
          </div>
        </div>
      </section>

      <ColorVisualizer
        onAddSample={onAddSample}
        sampleCart={sampleCart}
        onOpenSampleModal={onOpenSampleModal}
      />

      <ProductCatalog
        onOpenSampleModal={onOpenSampleModal}
        onOpenCalculator={() => onNavigate('estimator')}
      />
      <div className="bg-white pb-10 text-center">
        <button
          onClick={() => onNavigate('products')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-navy text-white font-semibold text-sm"
        >
          Full product specifications <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <WhyDeckRite />
      <ProjectGallery onSelectPatternForVisualizer={() => onNavigate('colors')} />
      <div className="bg-sand py-8 text-center border-y border-slate-200">
        <button
          onClick={() => onNavigate('gallery')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-slate-300 font-semibold text-sm"
        >
          Browse the photo gallery <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <InstallationResources />
      <DealerLocator />
      <SisterBrandsSection />
    </div>
  );
};
