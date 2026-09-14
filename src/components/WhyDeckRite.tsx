import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyDeckRite: React.FC = () => {
  const points = [
    {
      title: 'Waterproof and walkable',
      copy: 'One surface waterproofs the structure and becomes the finished walking deck — ideal over living space or dry storage.',
    },
    {
      title: 'True 3-ply construction',
      copy: 'A heavy-duty polyester fabric is encapsulated between two vinyl films for dimensional stability, puncture strength, and tear resistance.',
    },
    {
      title: 'Low annual maintenance',
      copy: 'Forget power washing, sanding, and resealing every year. No slivers, exposed nails, or rotting wood underfoot.',
    },
    {
      title: 'ADA slip resistance',
      copy: 'Engineered and tested as a slip-resistant surface. Use caution when snow, ice, or frost is present.',
    },
  ];

  return (
    <section className="py-16 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Why DeckRite</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">A system that can&apos;t be beat</h2>
          <p className="text-white/80 mt-3 leading-relaxed">
            Traditional balcony waterproofing requires a roof membrane plus a separate walking surface. DeckRite does both. The membrane has a proven track record of over 20 years of exposure in some of the harshest climates in North America.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point) => (
            <div key={point.title} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <CheckCircle2 className="w-5 h-5 text-teal mb-3" />
              <h3 className="font-bold">{point.title}</h3>
              <p className="text-sm text-white/75 mt-2 leading-relaxed">{point.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
