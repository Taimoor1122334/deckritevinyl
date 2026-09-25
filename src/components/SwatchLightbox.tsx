import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ColorPattern } from '../types';
import { DECKRITE_PATTERNS } from '../data/deckData';

interface SwatchLightboxProps {
  pattern: ColorPattern | null;
  onClose: () => void;
  onChange: (pattern: ColorPattern) => void;
}

const CLICK_ZOOM = 2.2;
const SQUARE = 'min(32rem, calc(100vw - 5.5rem), calc(100vh - 6rem))';

export const SwatchLightbox: React.FC<SwatchLightboxProps> = ({ pattern, onClose, onChange }) => {
  const index = pattern ? DECKRITE_PATTERNS.findIndex((p) => p.id === pattern.id) : -1;
  const stageRef = useRef<HTMLButtonElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setZoomed(false);
    setOrigin({ x: 50, y: 50 });
  }, [pattern?.id]);

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

  const prev = DECKRITE_PATTERNS[(index - 1 + DECKRITE_PATTERNS.length) % DECKRITE_PATTERNS.length];
  const next = DECKRITE_PATTERNS[(index + 1) % DECKRITE_PATTERNS.length];

  const originFromEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    const box = stageRef.current?.getBoundingClientRect();
    if (!box) return { x: 50, y: 50 };
    return {
      x: Math.min(100, Math.max(0, ((event.clientX - box.left) / box.width) * 100)),
      y: Math.min(100, Math.max(0, ((event.clientY - box.top) / box.height) * 100)),
    };
  };

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
        className="relative overflow-hidden rounded-2xl bg-white shadow-2xl"
        style={{ width: SQUARE, height: SQUARE }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          ref={stageRef}
          aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
          className={`absolute inset-0 overflow-hidden ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
          onMouseMove={(event) => {
            if (zoomed) setOrigin(originFromEvent(event));
          }}
          onClick={(event) => {
            if (zoomed) {
              setZoomed(false);
              setOrigin({ x: 50, y: 50 });
              return;
            }
            setOrigin(originFromEvent(event));
            setZoomed(true);
          }}
        >
          <img
            src={pattern.image}
            alt={`${pattern.name} vinyl membrane close-up`}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
            style={{
              transform: `scale(${zoomed ? CLICK_ZOOM : 1})`,
              transformOrigin: `${origin.x}% ${origin.y}%`,
              transition: zoomed ? 'transform 180ms ease-out' : 'transform 280ms ease-out',
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-5 pb-4 pt-16 text-left">
            <p className="text-[11px] font-bold uppercase tracking-wide text-white/80">
              {pattern.isStandard ? 'Standard color' : 'Available color'}
            </p>
            <h3 className="text-xl font-bold text-white">{pattern.name}</h3>
            <p className="mt-1 text-sm text-white/85">{pattern.description}</p>
            <p className="mt-3 text-[11px] font-semibold text-white/80">
              {zoomed ? 'Click to zoom out' : 'Click to zoom'}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
