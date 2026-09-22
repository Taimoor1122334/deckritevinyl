/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SisterBrandBanner } from './components/SisterBrandBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { FloatingActionDock } from './components/FloatingActionDock';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { ContactPage } from './pages/ContactPage';
import { WhyDeckRitePage } from './pages/WhyDeckRitePage';

const PAGES = [
  'home',
  'products',
  'colors',
  'visualizer',
  'why-deckrite',
  'gallery',
  'resources',
  'faq',
  'estimator',
  'dealers',
  'sister-brands',
  'contact',
  'about',
];

/** Colors live on the products page, so these routes deep-link to a section instead of a page. */
const COLOR_SECTION_ROUTES: Record<string, string> = {
  colors: 'product-colors',
  visualizer: 'visualizer',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      const hash = rawHash === 'deckrail' ? 'products' : rawHash;
      if (hash && PAGES.includes(hash)) {
        if (COLOR_SECTION_ROUTES[hash]) {
          setCurrentPage('products');
          setPendingSection(COLOR_SECTION_ROUTES[hash]);
        }
        else if (hash === 'faq') setCurrentPage('contact');
        else if (hash === 'about' || hash === 'dealers' || hash === 'sister-brands') setCurrentPage('contact');
        else setCurrentPage(hash);
      } else if (rawHash === 'techdata' || rawHash === 'tech-data' || rawHash === 'technical-data' || rawHash === 'corners') {
        setCurrentPage('resources');
      } else if (!hash) {
        setCurrentPage('home');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!pendingSection) return;
    const sectionId = pendingSection;
    let attempts = 0;
    let frame = 0;

    const tryScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        setPendingSection(null);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < 20) frame = requestAnimationFrame(tryScroll);
      else setPendingSection(null);
    };

    frame = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(frame);
  }, [pendingSection, currentPage]);

  const handleNavigate = (pageId: string, sectionId?: string) => {
    let target = pageId.toLowerCase();
    if (target === 'deckrail') target = 'products';
    if (target === 'calculator') target = 'estimator';
    if (target === 'specs' || target === 'codes' || target === 'faq') target = 'resources';
    if (target === 'about' || target === 'dealers' || target === 'sister-brands') target = 'contact';

    const colorSection = COLOR_SECTION_ROUTES[target];
    if (colorSection) {
      target = 'products';
      sectionId = colorSection;
    }

    setCurrentPage(target);
    window.location.hash = target === 'home' ? '' : target;
    if (sectionId) setPendingSection(sectionId);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <SisterBrandBanner onNavigateToDealers={() => handleNavigate('dealers')} />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'why-deckrite' && <WhyDeckRitePage onNavigate={handleNavigate} />}
        {currentPage === 'products' && <ProductsPage onNavigate={handleNavigate} />}
        {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
        {currentPage === 'resources' && <ResourcesPage onNavigate={handleNavigate} />}
        {currentPage === 'estimator' && <EstimatorPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />

      <FloatingActionDock onNavigate={handleNavigate} />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
