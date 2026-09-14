import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SisterBrandsSection } from '../components/SisterBrandsSection';

interface SisterBrandsPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const SisterBrandsPage: React.FC<SisterBrandsPageProps> = ({ onNavigate, onOpenSampleModal }) => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Sister Brands' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Sister Brands</h1>
          <p className="text-white/80 mt-3 max-w-2xl">
            DeckRite LLC also manufactures MariDeck marine vinyl flooring and DeckRite RV products. Use the logos in the top banner anytime to visit each site.
          </p>
        </div>
      </section>
      <SisterBrandsSection />
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <button onClick={onOpenSampleModal} className="px-5 py-3 rounded-md bg-rose text-white font-semibold text-sm">
          Request DeckRite samples
        </button>
      </div>
    </div>
  );
};
