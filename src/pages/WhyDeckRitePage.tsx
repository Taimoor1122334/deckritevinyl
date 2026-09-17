import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  WHY_DECKRITE_BENEFITS,
  WHY_DECKRITE_INTRO,
  WHY_DECKRITE_APPLICATIONS,
  INSTALL_VIDEOS,
} from '../data/deckData';
import { ArrowRight, CheckCircle2, PlayCircle, Shield, Layers, Droplets, Wrench } from 'lucide-react';

interface WhyDeckRitePageProps {
  onNavigate: (page: string) => void;
}

const benefitIcons = [Droplets, Layers, Wrench, Shield];

export const WhyDeckRitePage: React.FC<WhyDeckRitePageProps> = ({ onNavigate }) => {
  const overviewVideo = INSTALL_VIDEOS.find((v) => v.id === 'why-choose');

  return (
    <div id="why-deckrite-page" className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Why DeckRite' }]} onNavigate={onNavigate} />

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Why DeckRite</p>
              <h1 className="text-3xl sm:text-4xl font-bold mt-2">A system that can&apos;t be beat</h1>
              <p className="text-white/80 mt-4 leading-relaxed">{WHY_DECKRITE_INTRO.lead}</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl">
              <img
                src="/brand/why-deckrite.png"
                alt="DeckRite waterproof vinyl decking system overview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-600 leading-relaxed">
          {WHY_DECKRITE_INTRO.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-12 bg-sand/50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Core benefits</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Performance points aligned with the official DeckRite product story and installation guidance.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {WHY_DECKRITE_BENEFITS.map((point, index) => {
              const Icon = benefitIcons[index] ?? CheckCircle2;
              return (
                <div key={point.title} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                  <Icon className="w-5 h-5 text-navy mb-3" />
                  <h3 className="font-bold text-slate-900">{point.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{point.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Traditional vs. DeckRite</h2>
            <p className="text-slate-600 mt-3 leading-relaxed">{WHY_DECKRITE_INTRO.comparisonIntro}</p>
            <ul className="mt-6 space-y-3">
              {WHY_DECKRITE_INTRO.traditionalPainPoints.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-rose font-bold shrink-0">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-navy text-white p-6 sm:p-8">
            <h3 className="text-lg font-bold">The DeckRite advantage</h3>
            <ul className="mt-4 space-y-3">
              {WHY_DECKRITE_INTRO.deckRiteAdvantages.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Where DeckRite excels</h2>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {WHY_DECKRITE_APPLICATIONS.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-sand/40 px-4 py-3 text-sm text-slate-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {overviewVideo && (
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-rose">Video overview</p>
              <h2 className="text-xl font-bold text-slate-900 mt-1">{overviewVideo.title}</h2>
              <p className="text-sm text-slate-600 mt-2">{overviewVideo.description}</p>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${overviewVideo.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-navy text-white font-semibold text-sm hover:bg-navy-dark"
            >
              <PlayCircle className="w-5 h-5" />
              Watch on YouTube
            </a>
          </div>
        </section>
      )}

      <section className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-navy text-white font-semibold text-sm"
          >
            View products <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('resources')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 font-semibold text-sm hover:border-navy"
          >
            Technical resources
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 font-semibold text-sm hover:border-navy"
          >
            Find a distributor
          </button>
        </div>
      </section>
    </div>
  );
};
