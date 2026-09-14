import React, { useState } from 'react';
import { BookOpen, FileText, Download, ShieldCheck, CheckCircle2, ChevronDown, Wrench, AlertTriangle } from 'lucide-react';
import { RESOURCE_DOCUMENTS } from '../data/deckData';
import { ResourceDoc } from '../types';

export const InstallationResources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [downloadSuccessModal, setDownloadSuccessModal] = useState<ResourceDoc | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = ['All', 'Architectural & Specs', 'Installation Guides', 'Building Codes', 'Warranty & Care'];

  const filteredDocs = RESOURCE_DOCUMENTS.filter(doc => {
    if (activeCategory === 'All') return true;
    return doc.category === activeCategory;
  });

  const faqs = [
    {
      q: 'Can DeckRite vinyl membrane be installed over my old wood deck?',
      a: 'DeckRite requires a smooth, continuous substrate to guarantee waterproofing and prevent telegraphing of imperfections. Old gapped or weathered deck boards must either be removed or overlaid with new 3/4" exterior-grade tongue-and-groove (T&G) plywood before applying the DeckRite adhesive and membrane.'
    },
    {
      q: 'Is DeckRite approved as a certified roof over a living room or garage?',
      a: 'Yes! DeckRite 60 mil membrane is tested and certified to Canadian CGSB 37.54-95 and ICC-ES building code specifications as a walk-on single-ply roofing membrane. It creates a completely watertight barrier, allowing you to build finished living areas, bedrooms, or dry outdoor patios directly below.'
    },
    {
      q: 'Can patio furniture, BBQ grills, or dog claws puncture or tear the membrane?',
      a: 'No. DeckRite features a heavy-duty 1000-denier woven polyester reinforcing matrix laminated inside the vinyl. This internal fabric provides extraordinary puncture and tear resistance. We recommend using protective rubber or felt glides on sharp metal patio chair legs.'
    },
    {
      q: 'How do you clean and maintain a DeckRite vinyl deck?',
      a: 'DeckRite eliminates annual sanding, bleaching, and chemical staining. Maintenance is as simple as sweeping off leaves and washing with warm water, mild dish soap, and a soft bristle broom 2 to 3 times per year. For stubborn barbecue grease, DeckRite vinyl cleaner or citrus-based degreasers can be used safely.'
    },
    {
      q: 'How are the seams welded together?',
      a: 'DeckRite seams are overlapped by 1.5 to 2 inches and permanently fused using a professional hot-air welding gun and silicone roller. This process thermally fuses the top and bottom vinyl films together at the molecular level, creating a continuous waterproof joint that is stronger than the membrane itself.'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
            Architectural &amp; Technical Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Installation Details, Code Approvals &amp; Spec Sheets
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Everything contractors, architects, and homeowners need: proven subfloor details, CAD cross-sections, and building code evaluation reports.
          </p>
        </div>

        {/* Official 4-Part DeckRite Installation Process */}
        <div className="mb-16 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">
                Official Factory Training Standards (deckrite.com)
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                The DeckRite 4-Part Professional Installation Process
              </h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 w-fit">
              4-Part Video Walkthrough Series
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Part 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 font-extrabold flex items-center justify-center text-base mb-3">
                  01
                </div>
                <div className="text-[11px] font-bold text-cyan-700 uppercase tracking-wide">Part 1</div>
                <h4 className="font-bold text-slate-900 text-base mt-0.5">Surface Preparation</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Install 3/4" exterior tongue-and-groove plywood sloped 1/4" per foot. Countersink fasteners, belt-sand panel seams flush, and fill knotholes with Planipatch leveling compound.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>1/4" per foot positive slope</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Planipatch joint leveling</span>
                </div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 font-extrabold flex items-center justify-center text-base mb-3">
                  02
                </div>
                <div className="text-[11px] font-bold text-sky-700 uppercase tracking-wide">Part 2</div>
                <h4 className="font-bold text-slate-900 text-base mt-0.5">Pre-Installation &amp; Metal</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Nail 26-ga DeckRite PVC-clad drip edge around outer perimeter with 1-1/4" ring shank galvanized nails. Remove wall siding for 6" vertical turn-up flashing and fit scuppers.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>PVC-clad drip edge installed</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>6" wall transition turn-up</span>
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 font-extrabold flex items-center justify-center text-base mb-3">
                  03
                </div>
                <div className="text-[11px] font-bold text-indigo-700 uppercase tracking-wide">Part 3</div>
                <h4 className="font-bold text-slate-900 text-base mt-0.5">Membrane Laying &amp; MD-101</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Relax and dry lay rolls with 2" overlap. Fold back half and roll DeckRite MD-101 water-based adhesive (100–125 sq ft/gal). Broom or 75–100 lb roll to embed.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>MD-101 at 100-125 sq ft/gal</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>MD-102 contact on edges</span>
                </div>
              </div>
            </div>

            {/* Part 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold flex items-center justify-center text-base mb-3">
                  04
                </div>
                <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wide">Part 4</div>
                <h4 className="font-bold text-slate-900 text-base mt-0.5">Hot-Air Seam Welding</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Using a Leister Triac heat gun set to 6.5–7 and a 40mm/20mm nozzle, heat-fuse all 2" overlaps and perimeter PVC-clad metal into a single molecular monolith.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Leister Triac set @ 6.5–7</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dull probe seam verification</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Downloadable Documents Section */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">Download Technical Documentation</h3>
              <p className="text-xs text-slate-500 mt-0.5">Specifications, CAD drawings, and architectural reports.</p>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocs.map(doc => (
              <div
                key={doc.id}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-cyan-500 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                      {doc.category}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {doc.docType} • {doc.fileSize}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-cyan-700 transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setDownloadSuccessModal(doc)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Document</span>
                  </button>
                  <span className="text-[11px] text-slate-400 font-medium">Free Access</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Homeowner & Contractor FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-500 mt-1">Answers to common vinyl decking and roof membrane questions.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-cyan-700 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-cyan-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Download Success Simulation Dialog */}
      {downloadSuccessModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Download className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg">Document Ready for Download</h4>
            <p className="text-xs text-slate-600">
              <span className="font-bold">{downloadSuccessModal.title}</span> ({downloadSuccessModal.fileSize} {downloadSuccessModal.docType}) has been packaged for your project.
            </p>
            <div className="p-3 bg-slate-50 rounded-lg text-[11px] text-slate-500 text-left">
              Need additional assistance or a customized architectural detail drawing? Contact DeckRite technical services toll-free at <span className="font-semibold text-slate-800">(888) 450-DECK</span>.
            </div>
            <div className="flex gap-2 justify-center pt-2">
              <button
                onClick={() => setDownloadSuccessModal(null)}
                className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
