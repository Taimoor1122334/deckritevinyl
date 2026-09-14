/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SisterBrandBanner } from './components/SisterBrandBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SampleKitModal } from './components/SampleKitModal';
import { SearchModal } from './components/SearchModal';
import { FloatingActionDock } from './components/FloatingActionDock';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { VisualizerPage } from './pages/VisualizerPage';
import { WhyDeckRitePage } from './pages/WhyDeckRitePage';
import { GalleryPage } from './pages/GalleryPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { DealersPage } from './pages/DealersPage';
import { SisterBrandsPage } from './pages/SisterBrandsPage';
import { ContactPage } from './pages/ContactPage';
import { DeckRailPage } from './pages/DeckRailPage';

import { ColorPattern, SampleCartItem } from './types';
import { DECKRITE_PATTERNS } from './data/deckData';
import { Check } from 'lucide-react';

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
  'deckrail',
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [sampleCart, setSampleCart] = useState<SampleCartItem[]>([
    {
      id: DECKRITE_PATTERNS[0].id,
      name: DECKRITE_PATTERNS[0].name,
      pattern: DECKRITE_PATTERNS[0].name,
      colorHex: DECKRITE_PATTERNS[0].colorHex,
      image: DECKRITE_PATTERNS[0].thumb,
    },
    {
      id: DECKRITE_PATTERNS[1].id,
      name: DECKRITE_PATTERNS[1].name,
      pattern: DECKRITE_PATTERNS[1].name,
      colorHex: DECKRITE_PATTERNS[1].colorHex,
      image: DECKRITE_PATTERNS[1].thumb,
    },
  ]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash && PAGES.includes(hash)) {
        setCurrentPage(hash === 'visualizer' ? 'colors' : hash === 'faq' ? 'resources' : hash);
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

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const handleNavigate = (pageId: string) => {
    let target = pageId.toLowerCase();
    if (target === 'calculator') target = 'estimator';
    if (target === 'specs' || target === 'codes' || target === 'faq') target = 'resources';
    if (target === 'visualizer') target = 'colors';
    setCurrentPage(target);
    window.location.hash = target === 'home' ? '' : target;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddSample = (pattern: ColorPattern) => {
    if (sampleCart.some((item) => item.id === pattern.id)) {
      showToast(`${pattern.name} is already in your sample kit.`);
      return;
    }
    if (sampleCart.length >= 4) {
      showToast('Maximum of 4 free swatches per kit.');
      setSampleModalOpen(true);
      return;
    }
    setSampleCart([
      ...sampleCart,
      {
        id: pattern.id,
        name: pattern.name,
        pattern: pattern.name,
        colorHex: pattern.colorHex,
        image: pattern.thumb,
      },
    ]);
    showToast(`Added ${pattern.name} to your free sample kit.`);
  };

  const handleRemoveSample = (id: string) => {
    setSampleCart(sampleCart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <SisterBrandBanner
        sampleCart={sampleCart}
        onOpenSampleModal={() => setSampleModalOpen(true)}
        onNavigateToDealers={() => handleNavigate('dealers')}
      />
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        sampleCart={sampleCart}
        onOpenSampleModal={() => setSampleModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
            onAddSample={handleAddSample}
            sampleCart={sampleCart}
          />
        )}
        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
            onAddSample={handleAddSample}
            sampleCart={sampleCart}
          />
        )}
        {currentPage === 'colors' && (
          <VisualizerPage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
            onAddSample={handleAddSample}
            sampleCart={sampleCart}
          />
        )}
        {currentPage === 'why-deckrite' && (
          <WhyDeckRitePage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
        {currentPage === 'resources' && (
          <ResourcesPage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
        {currentPage === 'estimator' && (
          <EstimatorPage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
            onAddSample={handleAddSample}
          />
        )}
        {currentPage === 'dealers' && (
          <DealersPage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
        {currentPage === 'sister-brands' && (
          <SisterBrandsPage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
        {currentPage === 'deckrail' && (
          <DeckRailPage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
        {(currentPage === 'contact' || currentPage === 'about') && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
            showAbout={currentPage === 'about'}
          />
        )}
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      <FloatingActionDock
        currentPage={currentPage}
        onNavigate={handleNavigate}
        sampleCart={sampleCart}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
        onAddSample={handleAddSample}
      />

      <SampleKitModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        cart={sampleCart}
        onRemoveItem={handleRemoveSample}
        onAddItem={handleAddSample}
        onClearCart={() => setSampleCart([])}
      />

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-navy text-white px-4 py-3 rounded-lg shadow-2xl text-xs font-semibold flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-teal text-navy flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
