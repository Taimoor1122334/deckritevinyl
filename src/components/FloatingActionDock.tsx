import React, { useEffect, useState } from 'react';
import { Package, MapPin, ArrowUp, Phone } from 'lucide-react';
import { SampleCartItem } from '../types';

interface FloatingActionDockProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  sampleCart: SampleCartItem[];
  onOpenSampleModal: () => void;
}

export const FloatingActionDock: React.FC<FloatingActionDockProps> = ({
  onNavigate,
  sampleCart,
  onOpenSampleModal,
}) => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2.5 rounded-full bg-navy text-white shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
      <a href="tel:18884503325" className="p-2.5 rounded-full bg-white border border-slate-200 shadow-lg text-navy" aria-label="Call DeckRite">
        <Phone className="w-4 h-4" />
      </a>
      <button
        onClick={() => onNavigate('dealers')}
        className="p-2.5 rounded-full bg-white border border-slate-200 shadow-lg text-navy"
        aria-label="Find a distributor"
      >
        <MapPin className="w-4 h-4" />
      </button>
      <button
        onClick={onOpenSampleModal}
        className="relative p-2.5 rounded-full bg-rose text-white shadow-lg"
        aria-label="Free samples"
      >
        <Package className="w-4 h-4" />
        {sampleCart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-navy text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {sampleCart.length}
          </span>
        )}
      </button>
    </aside>
  );
};
