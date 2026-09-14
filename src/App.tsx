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

// Dedicated Page Views
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

import { ColorPattern, SampleCartItem } from './types';
import { DECKRITE_PATTERNS } from './data/deckData';
import { Check } from 'lucide-react';

export default function App() {
  // Page state with hash synchronization
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [sampleModalOpen, setSampleModalOpen] = useState<boolean>(false);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize sample cart with 2 popular DeckRite swatches
  const [sampleCart, setSampleCart] = useState<SampleCartItem[]>([
    {
      id: DECKRITE_PATTERNS[0].id,
      name: DECKRITE_PATTERNS[0].name,
      pattern: DECKRITE_PATTERNS[0].texturePattern,
      colorHex: DECKRITE_PATTERNS[0].colorHex
    },
    {
      id: DECKRITE_PATTERNS[1].id,
      name: DECKRITE_PATTERNS[1].name,
      pattern: DECKRITE_PATTERNS[1].texturePattern,
      colorHex: DECKRITE_PATTERNS[1].colorHex
    }
  ]);

  // Sync with window.location.hash for true browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash && ['home', 'products', 'visualizer', 'why-deckrite', 'gallery', 'resources', 'estimator', 'dealers', 'sister-brands', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    // On mount check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut Cmd+K or Ctrl+K for Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleNavigate = (pageId: string) => {
    // Normalize aliases
    let target = pageId.toLowerCase();
    if (target === 'calculator') target = 'estimator';
    if (target === 'specs' || target === 'codes' || target === 'faq') target = 'resources';
    if (target === 'about') target = 'contact';

    setCurrentPage(target);
    window.location.hash = target === 'home' ? '' : target;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddSample = (pattern: ColorPattern) => {
    if (sampleCart.some(item => item.id === pattern.id)) {
      showToast(`${pattern.name} is already in your sample kit!`);
      return;
    }
    if (sampleCart.length >= 4) {
      showToast('Maximum of 4 free swatches per kit reached.');
      setSampleModalOpen(true);
      return;
    }

    const newItem: SampleCartItem = {
      id: pattern.id,
      name: pattern.name,
      pattern: pattern.texturePattern,
      colorHex: pattern.colorHex
    };

    setSampleCart([...sampleCart, newItem]);
    showToast(`Added ${pattern.name} to your free sample kit!`);
  };

  const handleRemoveSample = (id: string) => {
    setSampleCart(sampleCart.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setSampleCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* 1. Sister Brand Top Banner (Featuring both MariDeck and DeckRite RV with external links) */}
      <SisterBrandBanner
        sampleCart={sampleCart}
        onOpenSampleModal={() => setSampleModalOpen(true)}
        onNavigateToDealers={() => handleNavigate('dealers')}
      />

      {/* 2. Main Navigation Bar with Active Page Highlight & Search */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        sampleCart={sampleCart}
        onOpenSampleModal={() => setSampleModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* 3. Main Multi-Page Body Content */}
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

        {currentPage === 'visualizer' && (
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

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
      </main>

      {/* 4. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* 5. Floating Quick Action Dock (Visualizer, Estimator, Find Dealer, Free Samples, Back to Top) */}
      <FloatingActionDock
        currentPage={currentPage}
        onNavigate={handleNavigate}
        sampleCart={sampleCart}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* 6. Universal Quick Search Modal (Cmd+K) */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
        onAddSample={handleAddSample}
      />

      {/* 7. Free Sample Kit Drawer / Modal */}
      <SampleKitModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        cart={sampleCart}
        onRemoveItem={handleRemoveSample}
        onAddItem={handleAddSample}
        onClearCart={handleClearCart}
      />

      {/* 8. Responsive Toast Notifications */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
