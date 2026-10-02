import React, { useEffect, useRef, useState } from 'react';
import { STOCKING_DISTRIBUTORS } from '../data/deckData';
import { StockingDistributor } from '../types';

function DistributorLink({
  distributor,
  className,
}: {
  distributor: StockingDistributor;
  className?: string;
}) {
  return (
    <a
      href={distributor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={distributor.name}
    >
      <img
        src={distributor.logo}
        alt={distributor.name}
        draggable={false}
        className="pointer-events-none max-h-full max-w-full object-contain transition duration-200 group-hover:scale-105 group-hover:drop-shadow-md"
      />
    </a>
  );
}

function LogoSequence({ copy }: { copy: number }) {
  return (
    <ul
      className="flex shrink-0 flex-nowrap items-center"
      aria-hidden={copy === 1 || undefined}
      inert={copy === 1 || undefined}
    >
      {STOCKING_DISTRIBUTORS.map((distributor) => (
        <li key={`${copy}-${distributor.id}`} className="shrink-0 px-2.5 sm:px-8">
          <DistributorLink
            distributor={distributor}
            className={`flex h-12 items-center justify-center sm:h-20 ${
              distributor.id === 'washington-cedar' ? 'w-52 sm:w-[20rem]' : 'w-28 sm:w-44'
            }`}
          />
        </li>
      ))}
    </ul>
  );
}

const PIXELS_PER_SECOND = 28;

function wrapOffset(value: number, half: number) {
  if (half <= 0) return value;
  let next = value % half;
  if (next > 0) next -= half;
  return next;
}

export const DistributorLogoStrip: React.FC = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfRef = useRef(0);
  const draggingRef = useRef(false);
  const hoveredRef = useRef(false);
  const pointerRef = useRef({ x: 0, offset: 0, moved: false });
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = motion.matches;
    const onMotion = () => {
      reduced = motion.matches;
    };
    motion.addEventListener('change', onMotion);

    const measure = () => {
      halfRef.current = track.scrollWidth / 2;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);

    let frame = 0;
    let last = performance.now();

    const apply = () => {
      offsetRef.current = wrapOffset(offsetRef.current, halfRef.current);
      track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!draggingRef.current && !hoveredRef.current && !reduced) {
        offsetRef.current -= PIXELS_PER_SECOND * dt;
      }
      apply();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      motion.removeEventListener('change', onMotion);
    };
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    draggingRef.current = true;
    pointerRef.current = { x: event.clientX, offset: offsetRef.current, moved: false };
    setGrabbing(true);
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      /* Pointer capture is unavailable for this event. Drag still tracks while the pointer stays over the strip. */
    }
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const dx = event.clientX - pointerRef.current.x;
    if (Math.abs(dx) > 6) pointerRef.current.moved = true;
    offsetRef.current = pointerRef.current.offset + dx;
    const track = trackRef.current;
    if (!track) return;
    offsetRef.current = wrapOffset(offsetRef.current, halfRef.current);
    track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
  };

  const endDrag = () => {
    draggingRef.current = false;
    setGrabbing(false);
  };

  const onClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!pointerRef.current.moved) return;
    event.preventDefault();
    event.stopPropagation();
    pointerRef.current.moved = false;
  };

  return (
    <div
      ref={viewportRef}
      className={`overflow-hidden select-none ${grabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
      style={{ touchAction: 'pan-y' }}
      role="region"
      aria-label="Stocking distributor logos. Drag to see more."
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onMouseEnter={() => {
        if (window.matchMedia('(pointer: fine)').matches) hoveredRef.current = true;
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
      }}
      onClickCapture={onClickCapture}
    >
      <div ref={trackRef} className="logo-marquee flex w-max flex-nowrap items-center">
        <LogoSequence copy={0} />
        <LogoSequence copy={1} />
      </div>
    </div>
  );
};

export const DealerLocator: React.FC = () => {
  return (
    <section id="dealers" className="scroll-mt-24 py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Distributors</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Stocking distributors</h2>
        <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Ask for DeckRite at these building-product distributors. Inventory varies by branch.
        </p>

        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-10">
          {STOCKING_DISTRIBUTORS.map((distributor) => (
            <li
              key={distributor.id}
              className={`flex items-center justify-center ${
                distributor.id === 'washington-cedar' ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <DistributorLink
                distributor={distributor}
                className={`group flex w-full items-center justify-center ${
                  distributor.id === 'washington-cedar' ? 'h-16 sm:h-24' : 'h-14 sm:h-24'
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
