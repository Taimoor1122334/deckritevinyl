import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { DealerLocator } from '../components/DealerLocator';

interface DealersPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const DealersPage: React.FC<DealersPageProps> = ({ onNavigate, onOpenSampleModal }) => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Find a Distributor' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Find a Distributor</h1>
          <p className="text-white/80 mt-3 max-w-2xl">
            Contact DeckRite today for distributors near you. Call (888) 450-DECK (3325) or email DeckRitesupport@deckrite.com.
          </p>
        </div>
      </section>
      <DealerLocator />
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <button onClick={onOpenSampleModal} className="px-5 py-3 rounded-md bg-rose text-white font-semibold text-sm">
          Request free samples
        </button>
      </div>
    </div>
  );
};
