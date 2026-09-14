import React, { useMemo, useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ColorPattern } from '../types';

interface EstimatorPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
  onAddSample: (pattern: ColorPattern) => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ onNavigate, onOpenSampleModal }) => {
  const [length, setLength] = useState(20);
  const [width, setWidth] = useState(12);
  const [waste, setWaste] = useState(10);

  const result = useMemo(() => {
    const area = length * width;
    const withWaste = area * (1 + waste / 100);
    const rollWidthFt = 68 / 12;
    const rollArea = rollWidthFt * 90;
    const rolls = Math.max(1, Math.ceil(withWaste / rollArea));
    const adhesiveGallons = withWaste / 135;
    return { area, withWaste, rolls, adhesiveGallons };
  }, [length, width, waste]);

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Material Estimator' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Material estimator</h1>
          <p className="text-white/80 mt-3 max-w-2xl">
            Planning tool based on DeckRite&apos;s 68" × 90' rolls and water-based adhesive coverage of 120–150 sq. ft. per gallon. Always confirm quantities with your distributor.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          {[
            ['Deck length (ft)', length, setLength, 4, 80],
            ['Deck width (ft)', width, setWidth, 4, 40],
            ['Waste factor (%)', waste, setWaste, 5, 20],
          ].map(([label, value, setter, min, max]) => (
            <label key={String(label)} className="block">
              <span className="text-sm font-semibold text-slate-800">{label}: {value as number}</span>
              <input
                type="range"
                min={min as number}
                max={max as number}
                value={value as number}
                onChange={(e) => (setter as (n: number) => void)(Number(e.target.value))}
                className="w-full mt-2 slider-thumb"
              />
            </label>
          ))}
          <div className="rounded-xl bg-sand border border-slate-200 p-6 grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs uppercase text-slate-500 font-bold">Deck area</p>
              <p className="text-2xl font-bold text-navy">{result.area.toFixed(0)} sq ft</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500 font-bold">With waste</p>
              <p className="text-2xl font-bold text-navy">{result.withWaste.toFixed(0)} sq ft</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500 font-bold">68" × 90' rolls</p>
              <p className="text-2xl font-bold text-navy">{result.rolls}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500 font-bold">Adhesive (approx. gallons)</p>
              <p className="text-2xl font-bold text-navy">{result.adhesiveGallons.toFixed(1)}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={onOpenSampleModal} className="px-5 py-3 rounded-md bg-rose text-white font-semibold text-sm">
              Request samples
            </button>
            <button onClick={() => onNavigate('contact')} className="px-5 py-3 rounded-md border border-slate-300 font-semibold text-sm">
              Find a distributor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
