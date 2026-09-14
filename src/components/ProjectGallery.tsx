import React from 'react';
import { SHOWCASE_PROJECTS } from '../data/deckData';

interface ProjectGalleryProps {
  onSelectPatternForVisualizer: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectPatternForVisualizer }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Photo gallery</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Real DeckRite projects</h2>
          </div>
          <button onClick={onSelectPatternForVisualizer} className="hidden sm:inline text-sm font-semibold text-navy hover:underline">
            Preview colors →
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOWCASE_PROJECTS.map((project) => (
            <article key={project.id} className="rounded-xl overflow-hidden border border-slate-200 bg-white">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-slate-900">{project.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{project.patternUsed}</p>
                <p className="text-sm text-slate-600 mt-2">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
