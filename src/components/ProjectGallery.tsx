import React, { useState } from 'react';
import { Camera, MapPin, Sparkles, Sliders, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '../data/deckData';
import { ProjectShowcase } from '../types';

interface ProjectGalleryProps {
  onSelectPatternForVisualizer: (patternId: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  onSelectPatternForVisualizer,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectShowcase | null>(null);

  const filteredProjects = SHOWCASE_PROJECTS.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  // Featured project with before/after comparison
  const featuredProject = SHOWCASE_PROJECTS[0];

  return (
    <section id="gallery" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-cyan-600" />
            Project Inspiration Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Deck Transformations Across North America
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Explore stunning residential sundecks, commercial condominium balconies, and luxury rooftop sanctuaries protected by DeckRite waterproof membranes.
          </p>
        </div>

        {/* Interactive Before & After Transformation Slider */}
        <div className="mb-16 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
                Interactive Transformation Slider
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                {featuredProject.title} – {featuredProject.location}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                Slide back and forth to see how DeckRite {featuredProject.patternUsed} completely sealed the leaking boathouse below and restored the outdoor entertaining sundeck.
              </p>
            </div>
            <div className="text-xs font-semibold text-slate-500 flex items-center gap-2">
              <span>← Drag Slider →</span>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative h-[320px] sm:h-[440px] rounded-2xl overflow-hidden select-none shadow-inner bg-slate-950">
            {/* After Image (Full Background) */}
            <img
              src={featuredProject.image}
              alt="After: DeckRite installed waterproof deck"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-slate-950/80 text-cyan-300 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur">
              AFTER: DeckRite Lakewood Marble 60 mil
            </div>

            {/* Before Image (Clipped Left) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={featuredProject.beforeImage}
                alt="Before: Weathered leaking deck"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-rose-950/80 text-rose-200 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur">
                BEFORE: Decaying Wood &amp; Leaks Below
              </div>
            </div>

            {/* Draggable Divider Bar */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-cyan-600 text-white shadow-lg flex items-center justify-center border-2 border-white -ml-3.5">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* Invisible Range Input for Smooth Dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              aria-label="Drag to compare before and after deck transformation"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Dry boathouse storage protected 100% beneath walkout</span>
            </div>
            <button
              onClick={() => onSelectPatternForVisualizer(featuredProject.patternId)}
              className="text-cyan-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Test {featuredProject.patternUsed} in Visualizer</span>
            </button>
          </div>
        </div>

        {/* Gallery Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'residential', label: 'Residential Sundecks' },
            { id: 'rooftop', label: 'Rooftops & Terraces' },
            { id: 'lakefront', label: 'Lakefront & Poolside' },
            { id: 'commercial', label: 'Commercial & Condos' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur">
                    {project.patternUsed}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-slate-200 text-xs bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-extrabold text-slate-900 text-base group-hover:text-cyan-700 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.features.map((feat, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                <button
                  onClick={() => onSelectPatternForVisualizer(project.patternId)}
                  className="text-cyan-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Try Pattern</span>
                </button>
                <button
                  onClick={() => setSelectedModalProject(project)}
                  className="text-slate-500 hover:text-slate-900 font-medium cursor-pointer"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="relative aspect-[16/9] bg-slate-900">
              <img
                src={selectedModalProject.image}
                alt={selectedModalProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-3 right-3 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-3 bg-slate-950/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur">
                {selectedModalProject.location}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                  {selectedModalProject.patternUsed}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">{selectedModalProject.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{selectedModalProject.description}</p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Project Highlights:</h4>
                {selectedModalProject.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end gap-2">
                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onSelectPatternForVisualizer(selectedModalProject.patternId);
                    setSelectedModalProject(null);
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-cyan-600 text-white hover:bg-cyan-500 shadow"
                >
                  Open in Visualizer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
