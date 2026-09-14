import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Package, Check } from 'lucide-react';
import { ColorPattern, SampleCartItem } from '../types';
import { DECKRITE_PATTERNS } from '../data/deckData';

interface SwatchLightboxProps {
  pattern: ColorPattern | null;
  onClose: () => void;
  onChange: (pattern: ColorPattern) => void;
  onAddSample?: (pattern: ColorPattern) => void;
  sampleCart?: SampleCartItem[];
  onOpenSampleModal?: () => void;
}

export const SwatchLightbox: React.FC<SwatchLightboxProps> = ({
  pattern,
  onClose,
  onChange,
  onAddSample,
  sampleCart = [],
  onOpenSampleModal,
}) => {
  const index = pattern ? DECKRITE_PATTERNS.findIndex((p) => p.id === pattern.id) : -1;

  useEffect(() => {
    if (!pattern) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (index < 0) return;
      if (e.key === 'ArrowRight') {
        onChange(DECKRITE_PATTERNS[(index + 1) % DECKRITE_PATTERNS.length]);
      }
      if (e.key === 'ArrowLeft') {
        onChange(DECKRITE_PATTERNS[(index - 1 + DECKRITE_PATTERNS.length) % DECKRITE_PATTERNS.length]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [pattern, index, onClose, onChange]);

  if (!pattern) return null;

  const inCart = sampleCart.some((item) => item.id === pattern.id);
  const prev = DECKRITE_PATTERNS[(index - 1 + DECKRITE_PATTERNS.length) % DECKRITE_PATTERNS.length];
  const next = DECKRITE_PATTERNS[(index + 1) % DECKRITE_PATTERNS.length];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/88 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${pattern.name} close-up`}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white" aria-label="Close">
        <X className="w-8 h-8" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onChange(prev);
        }}
        className="absolute left-3 sm:left-6 text-white/80 hover:text-white"
        aria-label="Previous color"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onChange(next);
        }}
        className="absolute right-3 sm:right-6 text-white/80 hover:text-white"
        aria-label="Next color"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <div
        className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={pattern.image}
          alt={`${pattern.name} vinyl membrane close-up`}
          className="w-full max-h-[70vh] object-cover"
        />
        <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-navy">
              {pattern.isStandard ? 'Standard color' : 'Available color'}
            </p>
            <h3 className="text-xl font-bold text-slate-900">{pattern.name}</h3>
            <p className="text-sm text-slate-600 mt-1">{pattern.description}</p>
          </div>
          {onAddSample && (
            <button
              onClick={() => (inCart ? onOpenSampleModal?.() : onAddSample(pattern))}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-rose text-white font-semibold text-sm shrink-0"
            >
              {inCart ? <Check className="w-4 h-4" /> : <Package className="w-4 h-4" />}
              {inCart ? 'In sample kit' : 'Add to free samples'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
