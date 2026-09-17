import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'colors', label: 'Colors' },
  { id: 'gallery', label: 'Inspiration' },
  { id: 'why-deckrite', label: 'Why DeckRite' },
  { id: 'resources', label: 'Resources' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (pageId: string) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  const isActive = (id: string) => {
    if (id === 'products') return currentPage === 'products';
    if (id === 'why-deckrite') return currentPage === 'why-deckrite';
    if (id === 'resources') return ['resources', 'estimator'].includes(currentPage);
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
        <div
          className={`flex items-center justify-between gap-6 transition-[height] duration-300 ease-out ${
            isScrolled ? 'h-[68px]' : 'h-[80px]'
          }`}
        >
          <button id="nav-logo-btn" onClick={() => go('home')} className="shrink-0" aria-label="DeckRite home">
            <img
              src="/brand/deckrite-logo.png"
              alt="DeckRite"
              className={`w-auto transition-[height] duration-300 ease-out ${
                isScrolled ? 'h-10 sm:h-11' : 'h-14 sm:h-16'
              }`}
            />
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
            <a
              href="tel:18884503325"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-navy hover:bg-navy-dark text-white text-sm font-semibold"
            >
              (888) 450-DECK
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
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
          <a href="tel:18884503325" className="block px-3 py-2.5 text-sm font-semibold text-navy">
            (888) 450-DECK
          </a>
        </div>
      )}
    </nav>
  );
};
