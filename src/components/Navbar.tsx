import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Package, Calculator, MapPin, Sparkles, Layers, ShieldCheck, PhoneCall, Search, FileText, Compass, Info } from 'lucide-react';
import { SampleCartItem } from '../types';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  sampleCart: SampleCartItem[];
  onOpenSampleModal: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  sampleCart,
  onOpenSampleModal,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageId: string) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setResourcesDropdownOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navigation"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
          : 'bg-white border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* DeckRite Main Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            {/* Architectural DeckRite SVG Icon */}
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-600 via-sky-700 to-slate-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h18" />
                <path d="M3 12h18" />
                <path d="M3 17h18" />
                <path d="M12 3v18" strokeDasharray="2 2" strokeOpacity="0.4" />
                <path d="M19 12a7 7 0 0 1-14 0" stroke="cyan" strokeWidth="2.5" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-2xl tracking-tight text-slate-900 font-display">
                  DECK<span className="text-cyan-600">RITE</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">®</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider -mt-1">
                Waterproof Decking Systems
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Home */}
            <button
              id="nav-home-btn"
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-cyan-700 bg-cyan-50'
                  : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                id="nav-products-dropdown"
                onClick={() => handleLinkClick('products')}
                className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                  currentPage === 'products'
                    ? 'text-cyan-700 bg-cyan-50'
                    : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Waterproof Deck Membranes
                  </div>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left px-4 py-2.5 hover:bg-cyan-50 transition-colors flex items-start gap-3 cursor-pointer group"
                  >
                    <div className="p-1.5 rounded-lg bg-cyan-100 text-cyan-700 mt-0.5 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-cyan-700">60 mil Commercial &amp; Roof-Grade</div>
                      <div className="text-xs text-slate-500">ICC-ES &amp; CGSB 37.54 tested for living spaces below</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left px-4 py-2.5 hover:bg-cyan-50 transition-colors flex items-start gap-3 cursor-pointer group"
                  >
                    <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700 mt-0.5 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-cyan-700">50 mil Residential Sundeck</div>
                      <div className="text-xs text-slate-500">Durable, slip-resistant exterior protection</div>
                    </div>
                  </button>

                  <div className="border-t border-slate-100 my-2"></div>
                  <div className="px-4 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Systems &amp; Railings
                  </div>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left px-4 py-2 hover:bg-cyan-50 transition-colors block text-sm font-semibold text-slate-800 hover:text-cyan-700 cursor-pointer"
                  >
                    DeckRail™ Architectural Aluminum Railings
                  </button>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left px-4 py-2 hover:bg-cyan-50 transition-colors block text-sm font-semibold text-slate-800 hover:text-cyan-700 cursor-pointer"
                  >
                    PVC Drip Edges, #100 &amp; #200 Adhesives
                  </button>
                </div>
              )}
            </div>

            {/* Colors & Visualizer */}
            <button
              id="nav-visualizer-btn"
              onClick={() => handleLinkClick('visualizer')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'visualizer'
                  ? 'text-cyan-700 bg-cyan-50'
                  : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              Colors &amp; Visualizer
            </button>

            {/* Why DeckRite / Comparison */}
            <button
              id="nav-why-btn"
              onClick={() => handleLinkClick('why-deckrite')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'why-deckrite'
                  ? 'text-cyan-700 bg-cyan-50'
                  : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              Why DeckRite
            </button>

            {/* Project Gallery */}
            <button
              id="nav-gallery-btn"
              onClick={() => handleLinkClick('gallery')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'gallery'
                  ? 'text-cyan-700 bg-cyan-50'
                  : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              Gallery
            </button>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button
                id="nav-resources-dropdown"
                onClick={() => handleLinkClick('resources')}
                className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                  currentPage === 'resources' || currentPage === 'estimator'
                    ? 'text-cyan-700 bg-cyan-50'
                    : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
                }`}
              >
                Resources &amp; Guides
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleLinkClick('resources')}
                    className="w-full text-left px-4 py-2 hover:bg-cyan-50 text-sm text-slate-800 hover:text-cyan-700 font-medium cursor-pointer"
                  >
                    Architectural Specs &amp; CAD Details
                  </button>
                  <button
                    onClick={() => handleLinkClick('resources')}
                    className="w-full text-left px-4 py-2 hover:bg-cyan-50 text-sm text-slate-800 hover:text-cyan-700 font-medium cursor-pointer"
                  >
                    Building Code Approvals (CGSB &amp; ICC-ES)
                  </button>
                  <button
                    onClick={() => handleLinkClick('estimator')}
                    className="w-full text-left px-4 py-2 hover:bg-cyan-50 text-sm text-slate-800 hover:text-cyan-700 font-medium flex items-center justify-between cursor-pointer"
                  >
                    <span>Deck Material Estimator</span>
                    <span className="text-[10px] bg-cyan-100 text-cyan-800 font-bold px-1.5 py-0.5 rounded">Calculator</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('resources')}
                    className="w-full text-left px-4 py-2 hover:bg-cyan-50 text-sm text-slate-800 hover:text-cyan-700 font-medium cursor-pointer"
                  >
                    Installation Details &amp; FAQs
                  </button>
                </div>
              )}
            </div>

            {/* Find a Dealer */}
            <button
              id="nav-dealers-btn"
              onClick={() => handleLinkClick('dealers')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'dealers'
                  ? 'text-cyan-700 bg-cyan-50'
                  : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              <MapPin className="w-4 h-4 text-cyan-600" />
              Find a Dealer
            </button>

            {/* Sister Brands Page */}
            <button
              id="nav-sister-brands-btn"
              onClick={() => handleLinkClick('sister-brands')}
              className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'sister-brands'
                  ? 'text-cyan-700 bg-cyan-50'
                  : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-slate-500" />
              <span>Sister Brands</span>
            </button>

            {/* Contact */}
            <button
              id="nav-contact-btn"
              onClick={() => handleLinkClick('contact')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-cyan-700 bg-cyan-50'
                  : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            
            {/* Search Trigger */}
            <button
              id="nav-search-btn"
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Search patterns, products, and documents (Cmd+K)"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Estimator Quick Link */}
            <button
              id="nav-calc-trigger"
              onClick={() => handleLinkClick('estimator')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                currentPage === 'estimator'
                  ? 'bg-cyan-100 text-cyan-900'
                  : 'text-slate-700 hover:text-cyan-700 hover:bg-slate-100'
              }`}
              title="Calculate Materials for your Deck"
            >
              <Calculator className="w-4 h-4 text-slate-500" />
              Estimator
            </button>

            {/* Request Free Samples Primary CTA */}
            <button
              id="nav-sample-kit-btn"
              onClick={onOpenSampleModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-cyan-500 hover:to-sky-600 text-white text-sm font-bold shadow-sm hover:shadow transition-all cursor-pointer"
              title="Request Free Physical Swatches (Mailed Free)"
            >
              <Package className="w-4 h-4" />
              <span>Free Swatches</span>
              {sampleCart.length > 0 && (
                <span className="bg-white text-cyan-800 text-xs px-1.5 py-0.2 rounded-full font-extrabold">
                  {sampleCart.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Hamburger & Search */}
          <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              id="mobile-sample-btn"
              onClick={onOpenSampleModal}
              className="p-2 rounded-md bg-cyan-50 text-cyan-700 relative"
            >
              <Package className="w-5 h-5" />
              {sampleCart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-600 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                  {sampleCart.length}
                </span>
              )}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-xl max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handleLinkClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm ${currentPage === 'home' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-800 hover:bg-slate-100'}`}
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('products')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-between ${currentPage === 'products' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-800 hover:bg-slate-100'}`}
          >
            <span>Products (60 &amp; 50 Mil Systems)</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <button
            onClick={() => handleLinkClick('visualizer')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 ${currentPage === 'visualizer' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-800 hover:bg-slate-100'}`}
          >
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Deck Visualizer &amp; Color Swatches</span>
          </button>
          <button
            onClick={() => handleLinkClick('why-deckrite')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm ${currentPage === 'why-deckrite' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-800 hover:bg-slate-100'}`}
          >
            Why DeckRite (The 3-Ply Advantage)
          </button>
          <button
            onClick={() => handleLinkClick('gallery')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm ${currentPage === 'gallery' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-800 hover:bg-slate-100'}`}
          >
            Project Inspiration Gallery
          </button>
          <button
            onClick={() => handleLinkClick('resources')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm ${currentPage === 'resources' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-800 hover:bg-slate-100'}`}
          >
            Architectural Specs &amp; Building Codes
          </button>
          <button
            onClick={() => handleLinkClick('estimator')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 ${currentPage === 'estimator' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-800 hover:bg-slate-100'}`}
          >
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>Deck Material Estimator</span>
          </button>
          <button
            onClick={() => handleLinkClick('dealers')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 ${currentPage === 'dealers' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-800 hover:bg-slate-100'}`}
          >
            <MapPin className="w-4 h-4 text-cyan-600" />
            <span>Find a Dealer or Certified Installer</span>
          </button>
          <button
            onClick={() => handleLinkClick('sister-brands')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 ${currentPage === 'sister-brands' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-800 hover:bg-slate-100'}`}
          >
            <Compass className="w-4 h-4 text-slate-500" />
            <span>Sister Brands (MariDeck &amp; DeckRite RV)</span>
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm ${currentPage === 'contact' ? 'bg-cyan-50 text-cyan-700' : 'text-slate-800 hover:bg-slate-100'}`}
          >
            About Us &amp; Contact
          </button>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSampleModal();
              }}
              className="w-full py-3 px-4 rounded-lg bg-cyan-600 text-white font-bold text-sm text-center shadow flex items-center justify-center gap-2"
            >
              <Package className="w-4 h-4" />
              Request Free Swatches (Mailed Free)
            </button>

            <a
              href="tel:18884503325"
              className="w-full py-2.5 px-4 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-cyan-600" />
              Call Toll-Free: (888) 450-DECK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
