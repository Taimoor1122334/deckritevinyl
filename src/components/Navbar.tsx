import React, { useState, useEffect } from 'react';
import { Menu, X, Package } from 'lucide-react';
import { SampleCartItem } from '../types';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  sampleCart: SampleCartItem[];
  onOpenSampleModal: () => void;
}

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'colors', label: 'Colors' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'resources', label: 'Resources' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  sampleCart,
  onOpenSampleModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (pageId: string) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  const isActive = (id: string) => {
    if (id === 'products') return ['products', 'deckrail'].includes(currentPage);
    if (id === 'resources') return ['resources', 'estimator', 'why-deckrite'].includes(currentPage);
    if (id === 'contact') return ['contact', 'about', 'dealers'].includes(currentPage);
    if (id === 'colors') return currentPage === 'colors' || currentPage === 'visualizer';
    return currentPage === id;
  };

  return (
    <nav
      id="main-navigation"
      className={`sticky top-0 z-40 w-full bg-white ${
        isScrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] gap-6">
          <button id="nav-logo-btn" onClick={() => go('home')} className="shrink-0" aria-label="DeckRite home">
            <img src="/brand/deckrite-logo.png" alt="DeckRite" className="h-10 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-md ${
                  isActive(item.id) ? 'text-navy bg-slate-100' : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button
              id="nav-sample-kit-btn"
              onClick={onOpenSampleModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-rose hover:bg-rose-dark text-white text-sm font-semibold"
            >
              <Package className="w-4 h-4" />
              Free Samples
              {sampleCart.length > 0 && (
                <span className="bg-white text-rose text-xs px-1.5 rounded-full font-bold">{sampleCart.length}</span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button onClick={onOpenSampleModal} className="p-2 text-rose relative" aria-label="Samples">
              <Package className="w-5 h-5" />
              {sampleCart.length > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-rose text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                  {sampleCart.length}
                </span>
              )}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1 shadow-xl">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md font-semibold text-sm ${
                isActive(item.id) ? 'bg-slate-100 text-navy' : 'text-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
