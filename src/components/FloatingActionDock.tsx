import React, { useState, useEffect } from 'react';
import { Sparkles, Calculator, Package, MapPin, ArrowUp, PhoneCall, ChevronUp, ChevronDown } from 'lucide-react';
import { SampleCartItem } from '../types';

interface FloatingActionDockProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  sampleCart: SampleCartItem[];
  onOpenSampleModal: () => void;
}

export const FloatingActionDock: React.FC<FloatingActionDockProps> = ({
  currentPage,
  onNavigate,
  sampleCart,
  onOpenSampleModal,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick Actions Dock" className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Back To Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-950 text-white shadow-xl border border-slate-700/80 backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Action Dock Container */}
      <div className="pointer-events-auto bg-slate-900/95 backdrop-blur-md text-white p-1.5 rounded-2xl shadow-2xl border border-slate-700/90 flex items-center gap-1.5 animate-in fade-in slide-in-from-bottom-3 duration-300">
        
        {/* Toggle Minimize/Expand on mobile */}
        <button
          onClick={() => setMinimized(!minimized)}
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer sm:hidden"
          title={minimized ? "Expand Actions" : "Minimize"}
        >
          {minimized ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {!minimized && (
          <>
            {/* 1. Visualizer Shortcut */}
            <button
              onClick={() => onNavigate('visualizer')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentPage === 'visualizer'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/80'
              }`}
              title="Open Color Visualizer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">Visualizer</span>
            </button>

            {/* 2. Estimator Shortcut */}
            <button
              onClick={() => onNavigate('estimator')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentPage === 'estimator'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/80'
              }`}
              title="Launch Material Estimator"
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">Estimator</span>
            </button>

            {/* 3. Dealer Locator Shortcut */}
            <button
              onClick={() => onNavigate('dealers')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentPage === 'dealers'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/80'
              }`}
              title="Find Authorized Dealer"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Find Dealer</span>
            </button>

            {/* Separator */}
            <div className="w-px h-6 bg-slate-700 mx-0.5"></div>
          </>
        )}

        {/* 4. Free Sample Swatches CTA with live badge */}
        <button
          onClick={onOpenSampleModal}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white text-xs font-extrabold shadow-md hover:shadow-cyan-500/20 transition-all cursor-pointer relative"
          title="Request Free Physical Swatches (Mailed Free)"
        >
          <Package className="w-3.5 h-3.5 text-white" />
          <span>Swatches</span>
          {sampleCart.length > 0 && (
            <span className="bg-white text-cyan-900 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center -mr-1">
              {sampleCart.length}
            </span>
          )}
        </button>

      </div>

    </aside>
  );
};
