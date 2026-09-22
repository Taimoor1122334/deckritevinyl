import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Compass,
  Camera,
  PlayCircle,
  FileSpreadsheet,
  FolderArchive,
  FileText,
  Layers,
  Calculator,
  ArrowRight,
} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, section?: string) => void;
}

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'gallery', label: 'Inspiration' },
  { id: 'why-deckrite', label: 'Why DeckRite' },
  { id: 'resources', label: 'Resources' },
  { id: 'contact', label: 'Contact' },
];

const RESOURCE_GROUPS = [
  {
    title: 'Drawings & field guides',
    items: [
      { page: 'resources', section: 'section-drawings', label: 'CAD Drawings', description: 'Installation and flashing details', icon: Compass },
      { page: 'resources', section: 'section-corners', label: 'Corner Photos', description: 'Step-by-step field guides', icon: Camera },
      { page: 'resources', section: 'section-videos', label: 'Installation Videos', description: 'Contractor video series', icon: PlayCircle },
    ],
  },
  {
    title: 'Specs & data',
    items: [
      { page: 'resources', section: 'section-tds', label: 'Data Sheets', description: 'Product technical data', icon: FileSpreadsheet },
      { page: 'resources', section: 'section-docs', label: 'Documents & Specs', description: 'Specifications and downloads', icon: FolderArchive },
      { page: 'resources', section: 'section-bulletin', label: 'Technical Bulletins', description: 'Important product guidance', icon: FileText },
      { page: 'resources', section: 'section-properties', label: 'Physical Properties', description: 'Test methods and results', icon: Layers },
    ],
  },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesPinned = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!resourcesWrapRef.current?.contains(event.target as Node)) {
        resourcesPinned.current = false;
        setResourcesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        resourcesPinned.current = false;
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openResources = () => {
    clearCloseTimer();
    setResourcesOpen(true);
  };

  const scheduleCloseResources = () => {
    if (resourcesPinned.current) return;
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setResourcesOpen(false), 160);
  };

  const go = (pageId: string, section?: string) => {
    clearCloseTimer();
    resourcesPinned.current = false;
    setResourcesOpen(false);
    setMobileMenuOpen(false);
    onNavigate(pageId, section);
  };

  const isActive = (id: string) => {
    if (id === 'products') return currentPage === 'products';
    if (id === 'why-deckrite') return currentPage === 'why-deckrite';
    if (id === 'resources') return ['resources', 'estimator'].includes(currentPage);
    if (id === 'contact') return ['contact', 'about', 'dealers'].includes(currentPage);
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
          className={`flex items-center transition-[height] duration-300 ease-out ${
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

          <div className="flex-1 flex items-center justify-center min-w-0 px-2">
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV.map((item) =>
              item.id === 'resources' ? (
                <div
                  key={item.id}
                  ref={resourcesWrapRef}
                  className="relative"
                  onMouseEnter={openResources}
                  onMouseLeave={scheduleCloseResources}
                >
                  <button
                    type="button"
                    onClick={() => go('resources')}
                    aria-expanded={resourcesOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1 px-2.5 xl:px-3.5 py-2 text-sm font-semibold rounded-md whitespace-nowrap ${
                      isActive(item.id) || resourcesOpen
                        ? 'text-navy bg-slate-100'
                        : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {resourcesOpen && (
                    <div className="absolute right-0 top-full z-50 w-[36rem] max-w-[min(36rem,calc(100vw-1.5rem))] pt-2">
                      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
                        <div className="grid grid-cols-2 gap-6">
                          {RESOURCE_GROUPS.map((group) => (
                            <div key={group.title}>
                              <p className="px-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                {group.title}
                              </p>
                              <div className="mt-2 space-y-0.5">
                                {group.items.map((entry) => {
                                  const Icon = entry.icon;
                                  return (
                                    <button
                                      key={entry.section}
                                      type="button"
                                      onClick={() => go(entry.page, entry.section)}
                                      className="flex w-full items-start gap-3 rounded-xl px-2 py-2 text-left hover:bg-slate-50"
                                    >
                                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                                        <Icon className="h-4 w-4" />
                                      </span>
                                      <span>
                                        <span className="block text-sm font-semibold text-slate-900">{entry.label}</span>
                                        <span className="mt-0.5 block text-xs text-slate-500">{entry.description}</span>
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-3">
                          <button
                            type="button"
                            onClick={() => go('estimator')}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-dark"
                          >
                            <Calculator className="h-4 w-4" />
                            Material Estimator
                          </button>
                          <button
                            type="button"
                            onClick={() => go('resources')}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-navy"
                          >
                            View all resources
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`px-2.5 xl:px-3.5 py-2 text-sm font-semibold rounded-md whitespace-nowrap ${
                    isActive(item.id) ? 'text-navy bg-slate-100' : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
          </div>

          <div className="shrink-0 flex items-center">
            <a
              href="tel:18884503325"
              className="hidden lg:inline-flex items-center gap-2 shrink-0 px-3 xl:px-4 py-2 xl:py-2.5 rounded-md bg-navy hover:bg-navy-dark text-white text-xs xl:text-sm font-semibold whitespace-nowrap"
            >
              (888) 450-DECK
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1 shadow-xl">
          {NAV.map((item) =>
            item.id === 'resources' ? (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setResourcesOpen((open) => !open)}
                  className={`flex w-full items-center justify-between px-3 py-2.5 rounded-md font-semibold text-sm ${
                    isActive(item.id) ? 'bg-slate-100 text-navy' : 'text-slate-800'
                  }`}
                  aria-expanded={resourcesOpen}
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesOpen && (
                  <div className="ml-2 mt-1 mb-2 space-y-0.5 border-l border-slate-200 pl-2">
                    <button
                      type="button"
                      onClick={() => go('resources')}
                      className="w-full rounded-md px-3 py-2 text-left text-sm font-semibold text-navy"
                    >
                      View all resources
                    </button>
                    {RESOURCE_GROUPS.flatMap((group) => group.items).map((entry) => (
                      <button
                        key={entry.section}
                        type="button"
                        onClick={() => go(entry.page, entry.section)}
                        className="w-full rounded-md px-3 py-2 text-left text-sm text-slate-700"
                      >
                        {entry.label}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => go('estimator')}
                      className="w-full rounded-md px-3 py-2 text-left text-sm text-slate-700"
                    >
                      Material Estimator
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md font-semibold text-sm ${
                  isActive(item.id) ? 'bg-slate-100 text-navy' : 'text-slate-800'
                }`}
              >
                {item.label}
              </button>
            )
          )}
          <a href="tel:18884503325" className="block px-3 py-2.5 text-sm font-semibold text-navy">
            (888) 450-DECK
          </a>
        </div>
      )}
    </nav>
  );
};
