import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ColorSwatchGrid } from '../components/ColorSwatchGrid';
import { ColorVisualizer } from '../components/ColorVisualizer';
import { AdhesiveProduct, ColorPattern } from '../types';
import { DECKRITE_ADHESIVES, DECKRITE_PATTERNS, DECKRITE_PRODUCTS } from '../data/deckData';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

const SERIES_COLORS = [
  {
    productId: 'deckrite-500',
    label: '500 Series (50 mil)',
    colorIds: ['sahara-tan', 'slate-gray', 'gray-storm', 'tropical-cream', 'lakewood-marble', 'tuscany-sand'],
  },
  {
    productId: 'deckrite-600',
    label: '600 Series (60 mil)',
    colorIds: ['slate-gray', 'sahara-tan', 'gray-storm', 'riverstone', 'harvest'],
  },
];

const colorsFor = (colorIds: string[]) =>
  colorIds
    .map((id) => DECKRITE_PATTERNS.find((pattern) => pattern.id === id))
    .filter((pattern): pattern is ColorPattern => Boolean(pattern));

const ACCESSORY_PHOTOS = [
  {
    title: 'Drip Edge',
    image: '/accessories/drip-edge.jpg',
    drawing: 'DR-109 Coated Metal Drip Edge',
    url: '/pdf/DR-109.pdf',
  },
  {
    title: 'Termination Bar',
    image: '/accessories/termination-bar.jpg',
    drawing: 'DR-101 Edge Termination Detail',
    url: '/pdf/DR-101.pdf',
  },
  {
    title: 'Fascia Bar and Cover',
    image: '/accessories/fascia-bar-cover.jpg',
    drawing: 'DR-103 Compression Bar with Cover',
    url: '/pdf/DR-103.pdf',
  },
];

const ADHESIVE_FAMILIES = [
  {
    type: 'water-based' as const,
    heading: 'Water-based',
    substrate: 'Unsealed wood',
    method: 'One coat on the substrate.',
    sds: '/pdf/Water_Based_MSDS.pdf',
  },
  {
    type: 'solvent-based' as const,
    heading: 'Solvent-based',
    substrate: 'Concrete or sealed wood',
    method: 'Coat the vinyl backing and the substrate.',
    sds: '/pdf/Solvent_Based_MSDS.pdf',
  },
];

function AdhesiveProductRow({ adhesive }: { adhesive: AdhesiveProduct }) {
  return (
    <article className="flex items-center gap-5">
      <img
        src={adhesive.image}
        alt={adhesive.title}
        className="w-32 sm:w-40 h-40 sm:h-44 object-contain shrink-0"
      />
      <div className="min-w-0">
        <p className="text-xs text-slate-500">{adhesive.size}</p>
        <h4 className="text-xl font-bold text-slate-900 tracking-tight">{adhesive.sku}</h4>
        <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{adhesive.description}</p>
        <p className="text-sm text-slate-800 mt-3">
          <span className="text-slate-500">Coverage </span>
          {adhesive.coverage}
        </p>
        {adhesive.voc && (
          <p className="text-xs text-slate-500 mt-1">{adhesive.voc}</p>
        )}
      </div>
    </article>
  );
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
}) => {
  const [selectedId, setSelectedId] = useState(DECKRITE_PRODUCTS[0].id);
  const selected = DECKRITE_PRODUCTS.find((p) => p.id === selectedId) ?? DECKRITE_PRODUCTS[0];
  const isAdhesivesTab = selected.id === 'adhesives-accessories';
  const [colorSeriesId, setColorSeriesId] = useState(SERIES_COLORS[0].productId);
  const colorSeries = SERIES_COLORS.find((series) => series.productId === colorSeriesId) ?? SERIES_COLORS[0];

  const selectProduct = (id: string) => {
    setSelectedId(id);
    if (SERIES_COLORS.some((series) => series.productId === id)) setColorSeriesId(id);
  };

  return (
    <div id="products-page" className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Products' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Product information</p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2">Premium Flooring</h1>
            <p className="text-white/80 mt-3 leading-relaxed">
              DeckRite is a three-ply reinforced vinyl membrane: an embossed wear layer, a high-strength polyester reinforcement grid, and a solid vinyl bonding layer. Finish thickness is 50 mils and 60 mils. The wear layer is a durable embossed vinyl surface; the polyester grid adds dimensional stability and tear resistance; the bonding layer is solid vinyl engineered to adhere to the substrate.
            </p>
          </div>
        </div>
      </section>

      <section id="product-series" className="scroll-mt-24 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {DECKRITE_PRODUCTS.map((product) => (
              <button
                key={product.id}
                onClick={() => selectProduct(product.id)}
                className={`px-4 py-2 rounded-md text-sm font-semibold ${
                  selectedId === product.id ? 'bg-navy text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                {product.title}
              </button>
            ))}
          </div>

          <div className="grid items-start lg:grid-cols-2 gap-10">
            {isAdhesivesTab ? (
              <button
                type="button"
                onClick={() => onNavigate('resources')}
                className="relative block w-full self-start overflow-hidden text-left group"
              >
                <img
                  src={selected.image}
                  alt="DeckRite vinyl stair landing with coated drip edge and termination"
                  className="w-full h-72 object-cover rounded-xl border border-slate-200 object-[center_40%] group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t rounded-b-xl from-navy/85 via-navy/40 to-transparent" />
                <p className="absolute left-5 bottom-5 right-5 text-white text-2xl sm:text-3xl font-extrabold leading-tight drop-shadow-md bg-slate-200/50 hover:bg-slate-200/70 transition-colors p-2 rounded-lg">
                  Watch Our Installation Process!
                </p>
              </button>
            ) : (
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-80 md:h-[22rem] object-cover object-[center_58%] rounded-xl border border-slate-200"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{selected.title}</h2>
              <p className="text-slate-600 mt-3 leading-relaxed">{selected.description}</p>
              <p className="text-sm font-medium text-navy mt-3">{selected.warranty}</p>
              {isAdhesivesTab && (
                <p className="mt-4 text-sm text-slate-700 leading-relaxed bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <strong>IMPORTANT:</strong> If the recommended DeckRite adhesive is not used, ensure the alternative adhesive is PVC-compatible to prevent adverse effects on the appearance, adhesion, and performance of the vinyl.
                </p>
              )}
              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(selected.specifications).map(([key, value]) => (
                  <div key={key} className="rounded-lg bg-sand p-3">
                    <dt className="text-[11px] font-bold uppercase text-slate-500">{key}</dt>
                    <dd className="text-sm text-slate-800 mt-0.5">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {isAdhesivesTab && (
            <div className="mt-12">
              <h3 className="text-lg font-bold text-slate-900">Accessories</h3>
              <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ACCESSORY_PHOTOS.map((item) => (
                  <li key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <img
                      src={item.image}
                      alt={`DeckRite ${item.title.toLowerCase()}`}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm font-semibold text-navy hover:underline"
                      >
                        {item.drawing}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section id="product-colors" className="scroll-mt-24 py-12 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Colors</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Available colors</h2>
            <p className="text-slate-600 mt-2 leading-relaxed leading-loose">
            The 500 Series (50 mil) comes in Sahara Tan, Slate Gray, Gray Storm, Tropical Cream, Lakewood Marble, and Tuscany Sand. <br />
The 600 Series (60 mil) comes in Slate Gray, Sahara Tan, Gray Storm, Riverstone, and Harvest. <br />
Click any color for a large close-up of the membrane texture. <br />
Because screens vary, DeckRite will mail free material samples. Send your mailing address from the <a  onClick={() => onNavigate('contact')} className="underline hover:cursor-pointer hover:text-navy transition-colors">Contact page</a>. <br />
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Choose a series">
            {SERIES_COLORS.map((series) => (
              <button
                key={series.productId}
                type="button"
                onClick={() => setColorSeriesId(series.productId)}
                aria-pressed={colorSeriesId === series.productId}
                className={`px-4 py-2 rounded-md text-sm font-semibold cursor-pointer ${
                  colorSeriesId === series.productId ? 'bg-navy text-white' : 'bg-white border border-slate-200 text-slate-700 hover:border-navy'
                }`}
              >
                {series.label}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <ColorSwatchGrid patterns={colorsFor(colorSeries.colorIds)} />
          </div>
        </div>
      </section>

      <ColorVisualizer />

      <section id="product-adhesives" className="scroll-mt-24 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Adhesives</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">DeckRite adhesives</h2>
          <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Use water-based adhesive on unsealed wood. Use solvent-based adhesive on concrete or sealed wood.
          </p>

          <div className="mt-10 grid xl:grid-cols-2 gap-12 xl:gap-16">
            {ADHESIVE_FAMILIES.map((family) => {
              const items = DECKRITE_ADHESIVES.filter((item) => item.type === family.type);
              return (
                <div key={family.type}>
                  <div className="pb-3 border-b border-slate-300">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-bold text-slate-900">{family.heading}</h3>
                      <a
                        href={family.sds}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-sm font-semibold text-navy hover:underline"
                      >
                        SDS
                      </a>
                    </div>
                    <p className="text-sm text-slate-600 mt-0.5">
                      {family.substrate}. {family.method}
                    </p>
                  </div>
                  <div className="divide-y divide-slate-200">
                    {items.map((adhesive) => (
                      <div key={adhesive.id} className="py-6">
                        <AdhesiveProductRow adhesive={adhesive} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-navy text-white font-bold text-base hover:bg-navy-dark transition-colors">
              Contact for a distributor
            </button>
            <a
              href="/pdf/DeckRite 8.5x14 Legal Trifold Brochure"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-slate-300 font-bold text-base hover:border-navy transition-colors"
            >
              Download brochure
            </a>
            <a
              href="/pdf/DeckRite Architectural Specifications.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-slate-300 font-bold text-base hover:border-navy transition-colors"
            >
              Architectural specifications
            </a>
            <button onClick={() => onNavigate('resources')} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-slate-300 font-bold text-base hover:border-navy transition-colors">
              Architectural &amp; Detail Drawings
            </button>
          </div>

          <div className="mt-12 p-5 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-950">
            <p className="font-bold">California Proposition 65</p>
            <p className="mt-1">
              WARNING: This product can expose you to chemicals known to the State of California to cause cancer and birth defects or other reproductive harm. For more information go to{' '}
              <a href="https://www.P65Warnings.ca.gov" className="underline" target="_blank" rel="noopener noreferrer">
                www.P65Warnings.ca.gov
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
