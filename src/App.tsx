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
import { VisualizerPage } from './pages/VisualizerPage';
import { GalleryPage } from './pages/GalleryPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { ContactPage } from './pages/ContactPage';

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

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      const hash = rawHash === 'deckrail' ? 'products' : rawHash;
      if (hash && PAGES.includes(hash)) {
        if (hash === 'visualizer') setCurrentPage('colors');
        else if (hash === 'faq') setCurrentPage('contact');
        else if (hash === 'why-deckrite') setCurrentPage('resources');
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

  const handleNavigate = (pageId: string) => {
    let target = pageId.toLowerCase();
    if (target === 'deckrail') target = 'products';
    if (target === 'calculator') target = 'estimator';
    if (target === 'specs' || target === 'codes' || target === 'faq' || target === 'why-deckrite') target = 'resources';
    if (target === 'visualizer') target = 'colors';
    if (target === 'about' || target === 'dealers' || target === 'sister-brands') target = 'contact';
    setCurrentPage(target);
    window.location.hash = target === 'home' ? '' : target;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <SisterBrandBanner onNavigateToDealers={() => handleNavigate('dealers')} />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'products' && <ProductsPage onNavigate={handleNavigate} />}
        {currentPage === 'colors' && <VisualizerPage onNavigate={handleNavigate} />}
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
