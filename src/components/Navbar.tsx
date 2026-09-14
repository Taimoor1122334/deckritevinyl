import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Package, Search, Phone } from 'lucide-react';
import { SampleCartItem } from '../types';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  sampleCart: SampleCartItem[];
  onOpenSampleModal: () => void;
  onOpenSearch: () => void;
}

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Premium Flooring' },
  { id: 'colors', label: 'Colors' },
  { id: 'gallery', label: 'Photo Gallery' },
  { id: 'resources', label: 'Technical Data' },
  { id: 'faq', label: 'FAQ' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact Us' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  sampleCart,
  onOpenSampleModal,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (pageId: string) => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    onNavigate(pageId);
  };

  const isActive = (id: string) => {
    if (id === 'products') return ['products', 'deckrail'].includes(currentPage);
    if (id === 'resources') return ['resources', 'estimator'].includes(currentPage);
    if (id === 'about') return currentPage === 'about' || currentPage === 'why-deckrite' || currentPage === 'sister-brands';
    if (id === 'faq') return false;
    if (id === 'colors') return currentPage === 'colors' || currentPage === 'visualizer';
    return currentPage === id;
  };

  return (
    <nav
      id="main-navigation"
      className={`sticky top-0 z-40 w-full bg-white transition-shadow ${
        isScrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px] gap-4">
          <button
            id="nav-logo-btn"
            onClick={() => go('home')}
            className="shrink-0 focus:outline-none"
            aria-label="DeckRite home"
          >
            <img
              src="/brand/deckrite-logo.png"
              alt="DeckRite"
              className="h-10 sm:h-11 w-auto"
            />
          </button>

          <div className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) => {
              if (item.id === 'products') {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <button
                      onClick={() => go('products')}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-[13px] font-semibold uppercase tracking-wide rounded-md ${
                        isActive(item.id)
                          ? 'text-navy bg-slate-100'
                          : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {productsOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                        <button onClick={() => go('products')} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 text-slate-800">
                          50 &amp; 60 mil Vinyl Membrane
                        </button>
                        <button onClick={() => go('colors')} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 text-slate-800">
                          Available Colors
                        </button>
                        <button onClick={() => go('deckrail')} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 text-slate-800">
                          DeckRail Infinity Glass
                        </button>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id === 'faq' ? 'resources' : item.id === 'about' ? 'about' : item.id)}
                  className={`px-3 py-2 text-[13px] font-semibold uppercase tracking-wide rounded-md ${
                    isActive(item.id)
                      ? 'text-navy bg-slate-100'
                      : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <a
              href="tel:18884503325"
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-navy"
            >
              <Phone className="w-4 h-4" />
              (888) 450-DECK
            </a>
            <button
              id="nav-sample-kit-btn"
              onClick={onOpenSampleModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-rose hover:bg-rose-dark text-white text-sm font-semibold"
            >
              <Package className="w-4 h-4" />
              Free Samples
              {sampleCart.length > 0 && (
                <span className="bg-white text-rose text-xs px-1.5 rounded-full font-bold">
                  {sampleCart.length}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button onClick={onOpenSearch} className="p-2 text-slate-600" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
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
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 shadow-xl">
          {[
            ['home', 'Home'],
            ['products', 'Premium Flooring'],
            ['colors', 'Colors'],
            ['deckrail', 'DeckRail'],
            ['gallery', 'Photo Gallery'],
            ['resources', 'Technical Data & FAQ'],
            ['why-deckrite', 'Why DeckRite'],
            ['dealers', 'Find a Distributor'],
            ['sister-brands', 'Sister Brands'],
            ['about', 'About Us'],
            ['contact', 'Contact Us'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`w-full text-left px-3 py-2.5 rounded-md font-semibold text-sm ${
                currentPage === id ? 'bg-slate-100 text-navy' : 'text-slate-800'
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href="tel:18884503325"
            className="block w-full mt-3 py-3 rounded-md brand-gradient text-white font-semibold text-sm text-center"
          >
            Call (888) 450-DECK
          </a>
        </div>
      )}
    </nav>
  );
};
