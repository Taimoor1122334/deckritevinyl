import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ValuePropositionProps {
  onWhyDeckRite: () => void;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ onWhyDeckRite }) => {
  return (
    <section className="bg-navy text-white ">
      <div className="lg:grid lg:grid-cols-2">
        <div className="relative h-60 sm:h-80 lg:h-auto lg:min-h-[40rem]">
          <img
            src="/brand/house-image.png"
            alt="DeckRite vinyl deck surface with outdoor furniture on a second-story deck"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center px-4 py-10 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal">Why DeckRite</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl lg:text-[2.1rem]">
              One Surface. Two Jobs.
            </h2>
            <p className="mt-3 text-lg font-semibold leading-snug sm:text-xl">
              A finished deck above. Waterproof protection below.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              DeckRite is more than a deck covering. The 3-ply vinyl membrane creates an attractive, slip-resistant
              walking surface while waterproofing the structure and the living space underneath.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Unlike a traditional wood deck, there is no annual staining or sealing, and no slivers, exposed nails, or
              rotting boards to maintain.
            </p>
            <button
              onClick={onWhyDeckRite}
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-slate-50"
            >
              Why Choose DeckRite
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
