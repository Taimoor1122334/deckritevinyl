import React, { useState } from 'react';
import { Sparkles, Package, ZoomIn, Check, Info, Sun, Sunset, Sliders, Shield } from 'lucide-react';
import { ColorPattern, SampleCartItem } from '../types';
import { DECKRITE_PATTERNS } from '../data/deckData';

interface ColorVisualizerProps {
  onAddSample: (pattern: ColorPattern) => void;
  sampleCart: SampleCartItem[];
  onOpenSampleModal: () => void;
}

interface SceneOption {
  id: string;
  name: string;
  setting: string;
  image: string;
  deckAreaStyle: string; // CSS overlay styling simulation
}

const SCENES: SceneOption[] = [
  {
    id: 'lakefront',
    name: 'Lakefront Walkout Deck',
    setting: 'Scenic lakeside home with covered lower patio',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    deckAreaStyle: 'bottom-0 left-0 right-0 h-2/5'
  },
  {
    id: 'rooftop',
    name: 'Urban Penthouse Rooftop',
    setting: 'Contemporary flat rooftop terrace overlooking skyline',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80',
    deckAreaStyle: 'bottom-0 left-0 right-0 h-1/2'
  },
  {
    id: 'suburban',
    name: 'Two-Story Suburban Sundeck',
    setting: 'Family dining sundeck with dry space underneath',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    deckAreaStyle: 'bottom-0 left-0 right-0 h-4/9'
  },
  {
    id: 'poolside',
    name: 'Poolside Lounge & Veranda',
    setting: 'Resort pool deck with waterproof slip-resistant surround',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80',
    deckAreaStyle: 'bottom-0 left-0 right-0 h-1/2'
  }
];

export const ColorVisualizer: React.FC<ColorVisualizerProps> = ({
  onAddSample,
  sampleCart,
  onOpenSampleModal,
}) => {
  const [selectedPattern, setSelectedPattern] = useState<ColorPattern>(DECKRITE_PATTERNS[0]);
  const [selectedScene, setSelectedScene] = useState<SceneOption>(SCENES[0]);
  const [lightingMode, setLightingMode] = useState<'daylight' | 'sunset'>('daylight');
  const [railingType, setRailingType] = useState<'black-aluminum' | 'glass-view' | 'white-picket'>('black-aluminum');
  const [filterTone, setFilterTone] = useState<string>('all');
  const [filterThickness, setFilterThickness] = useState<string>('all');
  const [zoomModalOpen, setZoomModalOpen] = useState(false);

  const filteredPatterns = DECKRITE_PATTERNS.filter(p => {
    const matchTone = filterTone === 'all' || p.tone === filterTone;
    const matchThickness =
      filterThickness === 'all' ||
      p.thickness === 'Both' ||
      p.thickness.includes(filterThickness);
    return matchTone && matchThickness;
  });

  const isAlreadyInCart = sampleCart.some(item => item.id === selectedPattern.id);

  return (
    <section id="visualizer" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Interactive Deck Visualizer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Preview DeckRite Patterns on Real Outdoor Living Spaces
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Select a scene, choose your DeckRite vinyl membrane pattern, and inspect textures up-close. Order free physical samples delivered directly to your doorstep.
          </p>
        </div>

        {/* Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Stage Viewport (Left / Top) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Interactive Preview Canvas */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-900 aspect-[16/10] sm:aspect-[16/9] border border-slate-300">
              
              {/* Scene Photo Background */}
              <img
                src={selectedScene.image}
                alt={selectedScene.name}
                className="w-full h-full object-cover object-center"
              />

              {/* Dynamic Deck Flooring Color / Texture Simulation Overlay */}
              <div
                className={`absolute ${selectedScene.deckAreaStyle} pointer-events-none transition-all duration-300`}
                style={{
                  backgroundColor: selectedPattern.colorHex,
                  opacity: lightingMode === 'sunset' ? 0.72 : 0.68,
                  mixBlendMode: 'multiply',
                  boxShadow: 'inset 0 20px 40px rgba(0,0,0,0.3)',
                }}
              ></div>

              {/* Secondary Texture Granule / Emboss Simulation */}
              <div
                className={`absolute ${selectedScene.deckAreaStyle} pointer-events-none transition-all duration-300`}
                style={{
                  backgroundImage: `radial-gradient(${selectedPattern.secondaryHex} 1.5px, transparent 1.5px), radial-gradient(${selectedPattern.accentColor} 1px, transparent 1px)`,
                  backgroundSize: '14px 14px',
                  backgroundPosition: '0 0, 7px 7px',
                  opacity: 0.35,
                  mixBlendMode: 'overlay',
                }}
              ></div>

              {/* Sunset ambient lighting wash */}
              {lightingMode === 'sunset' && (
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 via-orange-500/20 to-transparent pointer-events-none mix-blend-color-burn"></div>
              )}

              {/* Glass Railing / Black Aluminum Overlay Badge */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 shadow flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedPattern.colorHex }}></span>
                  Pattern: {selectedPattern.name} ({selectedPattern.thickness})
                </span>
                <span className="bg-slate-900/85 backdrop-blur-md text-cyan-300 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-700 shadow">
                  Scene: {selectedScene.name}
                </span>
              </div>

              {/* Top Right Controls: Daylight / Sunset Toggle & Zoom */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <div className="bg-slate-900/85 backdrop-blur-md rounded-lg p-1 border border-slate-700 flex items-center gap-1 shadow">
                  <button
                    onClick={() => setLightingMode('daylight')}
                    className={`p-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                      lightingMode === 'daylight' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Simulate midday bright daylight"
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Daylight</span>
                  </button>
                  <button
                    onClick={() => setLightingMode('sunset')}
                    className={`p-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                      lightingMode === 'sunset' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Simulate golden sunset lighting"
                  >
                    <Sunset className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Golden Hour</span>
                  </button>
                </div>

                <button
                  onClick={() => setZoomModalOpen(true)}
                  className="bg-slate-900/85 hover:bg-slate-800 backdrop-blur-md text-white p-2 rounded-lg border border-slate-700 shadow cursor-pointer transition-colors"
                  title="Inspect Texture Magnifier"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Overlay Action: Quick Sample Add */}
              <div className="absolute bottom-4 right-4 z-10">
                <button
                  onClick={() => onAddSample(selectedPattern)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2 cursor-pointer transition-all ${
                    isAlreadyInCart
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                      : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                  }`}
                >
                  {isAlreadyInCart ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>In Sample Kit</span>
                    </>
                  ) : (
                    <>
                      <Package className="w-4 h-4" />
                      <span>Order Free Swatch</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Scene Selectors Bar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Choose Deck Scenario:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SCENES.map(scene => (
                  <button
                    key={scene.id}
                    onClick={() => setSelectedScene(scene)}
                    className={`relative rounded-lg overflow-hidden border-2 text-left transition-all p-1 cursor-pointer group ${
                      selectedScene.id === scene.id
                        ? 'border-cyan-600 ring-2 ring-cyan-200 bg-cyan-50/50'
                        : 'border-slate-200 hover:border-slate-400 bg-white'
                    }`}
                  >
                    <img
                      src={scene.image}
                      alt={scene.name}
                      className="w-full h-14 object-cover rounded"
                    />
                    <div className="mt-1.5 px-1">
                      <div className="text-xs font-bold text-slate-800 group-hover:text-cyan-700 truncate">
                        {scene.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Pattern Picker & Swatch Details (Right Column) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Swatch Filter Header */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Select DeckRite Pattern</h3>
                  <p className="text-xs text-slate-500">8 Proven North American Colorways</p>
                </div>
                <span className="text-xs bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded">
                  {filteredPatterns.length} of 8
                </span>
              </div>

              {/* Tone Filter Buttons */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-400 font-medium">Tone:</span>
                {['all', 'neutral', 'cool', 'warm'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setFilterTone(tone)}
                    className={`px-2.5 py-1 rounded-md capitalize font-medium cursor-pointer transition-colors ${
                      filterTone === tone
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>

              {/* Pattern Swatches Grid */}
              <div className="grid grid-cols-2 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
                {filteredPatterns.map(pattern => {
                  const isSelected = selectedPattern.id === pattern.id;
                  const inCart = sampleCart.some(i => i.id === pattern.id);

                  return (
                    <button
                      key={pattern.id}
                      onClick={() => setSelectedPattern(pattern)}
                      className={`relative rounded-xl p-2.5 border-2 text-left transition-all cursor-pointer group flex flex-col justify-between ${
                        isSelected
                          ? 'border-cyan-600 bg-cyan-50/70 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      {/* Swatch Color Visual Disk */}
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-8 h-8 rounded-lg shadow-inner border border-slate-300 shrink-0 relative overflow-hidden"
                          style={{ backgroundColor: pattern.colorHex }}
                        >
                          {/* Stipple accent */}
                          <div
                            className="absolute inset-0 opacity-40"
                            style={{
                              backgroundImage: `radial-gradient(${pattern.secondaryHex} 1.5px, transparent 1.5px)`,
                              backgroundSize: '4px 4px',
                            }}
                          ></div>
                        </div>

                        <div className="overflow-hidden">
                          <span className="text-xs font-bold text-slate-900 block truncate group-hover:text-cyan-700">
                            {pattern.name}
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium block">
                            {pattern.thickness}
                          </span>
                        </div>
                      </div>

                      {/* Pill info */}
                      <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200/60">
                        <span className="capitalize">{pattern.textureStyle}</span>
                        {inCart && (
                          <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                            <Check className="w-2.5 h-2.5" /> Kit
                          </span>
                        )}
                      </div>

                      {/* Selected check ring */}
                      {isSelected && (
                        <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]">
                          ✓
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Swatch Information Card */}
              <div className="pt-3 border-t border-slate-200 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">{selectedPattern.name}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{selectedPattern.description}</p>
                  </div>
                  <button
                    onClick={() => setZoomModalOpen(true)}
                    className="p-1.5 text-slate-500 hover:text-cyan-600 bg-slate-100 hover:bg-slate-200 rounded-lg shrink-0"
                    title="Enlarge Texture"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Best for & Features */}
                <div className="text-xs text-slate-600 bg-slate-50 rounded-lg p-2.5 border border-slate-200">
                  <span className="font-bold text-slate-800">Ideal For: </span>
                  {selectedPattern.bestFor}
                </div>

                {/* Free Sample Cart Trigger */}
                <div className="flex gap-2">
                  <button
                    onClick={() => onAddSample(selectedPattern)}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      isAlreadyInCart
                        ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                        : 'bg-cyan-600 text-white hover:bg-cyan-500 shadow-sm'
                    }`}
                  >
                    {isAlreadyInCart ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Sample Kit</span>
                      </>
                    ) : (
                      <>
                        <Package className="w-3.5 h-3.5" />
                        <span>Add to Free Sample Kit</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={onOpenSampleModal}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
                  >
                    View Kit ({sampleCart.length})
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Texture Zoom Inspection Modal */}
      {zoomModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">{selectedPattern.name} – Macro Texture Zoom</h3>
                <p className="text-xs text-slate-400">Embossed non-skid surface &amp; color fleck detail</p>
              </div>
              <button
                onClick={() => setZoomModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* High-res simulated texture swatch */}
            <div
              className="w-full h-64 relative border-b border-slate-200"
              style={{
                backgroundColor: selectedPattern.colorHex,
              }}
            >
              {/* Macro embossed surface grain */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 50% 50%, ${selectedPattern.secondaryHex} 3px, transparent 3px),
                    radial-gradient(circle at 20% 30%, ${selectedPattern.accentColor} 2px, transparent 2px),
                    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.4) 2px, transparent 2px)
                  `,
                  backgroundSize: '24px 24px, 32px 32px, 28px 28px',
                  boxShadow: 'inset 0 0 40px rgba(0,0,0,0.15)'
                }}
              ></div>

              <div className="absolute bottom-3 left-3 bg-slate-950/80 text-white text-[11px] px-2.5 py-1 rounded-md backdrop-blur">
                Actual 3-Ply Membrane Texture Simulation
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-800">Texture Pattern:</span> {selectedPattern.texturePattern}
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-800">Thickness Options:</span> {selectedPattern.thickness}
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedPattern.features.map((feat, i) => (
                  <span key={i} className="text-[11px] bg-cyan-50 text-cyan-800 font-semibold px-2 py-0.5 rounded border border-cyan-200">
                    {feat}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button
                  onClick={() => setZoomModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onAddSample(selectedPattern);
                    setZoomModalOpen(false);
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-cyan-600 text-white hover:bg-cyan-500 shadow-sm"
                >
                  Add Free Swatch to Kit
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
