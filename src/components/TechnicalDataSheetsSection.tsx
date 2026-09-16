import React, { useState, useEffect } from 'react';
import { TechnicalDataSheet } from '../types';
import { AnimatePresence, motion } from 'motion/react';
import {
  FileText,
  Download,
  AlertTriangle,
  Layers,
  ShieldCheck,
  ExternalLink,
  Package,
  X,
} from 'lucide-react';

interface TechnicalDataSheetsSectionProps {
  sheets: TechnicalDataSheet[];
}

export const TechnicalDataSheetsSection: React.FC<TechnicalDataSheetsSectionProps> = ({ sheets }) => {
  // Modal state for popup viewer
  const [modalSheet, setModalSheet] = useState<TechnicalDataSheet | null>(null);

  // Close modal on Escape key press and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalSheet(null);
      }
    };

    if (modalSheet) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalSheet]);

  return (
    <div className="space-y-8">
      {/* 3-Card Technical Data Sheets Showcase Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {sheets.map((sheet) => {
          return (
            <div
              key={sheet.id}
              className="rounded-2xl border border-slate-200 hover:border-navy hover:shadow-md transition-all duration-200 bg-white overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail / Direct PDF Link */}
                <div className="relative bg-slate-900 aspect-[16/11] overflow-hidden border-b border-slate-100">
                  <img
                    src={sheet.image}
                    alt={`${sheet.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {sheet.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-navy text-[11px] font-bold uppercase tracking-wider">
                      {sheet.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold text-white/90">Official Spec Sheet</span>
                    <a
                      href={sheet.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-rose hover:bg-rose/90 text-[11px] font-bold text-white shadow-sm transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      PDF
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-navy transition-colors">
                    {sheet.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {sheet.subtitle}
                  </p>

                  {/* Quick Spec Highlights */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {sheet.specs.slice(0, 3).map((spec, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">{spec.property}:</span>
                        <span className="font-semibold text-slate-800 text-right truncate max-w-[150px]">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Available Colors */}
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Colors:</span>
                    <div className="flex items-center gap-1">
                      {sheet.colors.map((c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 rounded bg-sand text-slate-700 text-[11px] font-semibold"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setModalSheet(sheet)}
                  className="px-3 py-2 rounded-lg text-xs font-bold border border-slate-300 bg-white text-slate-800 hover:border-navy hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-navy" />
                  View Specs
                </button>
                <a
                  href={sheet.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-rose hover:bg-rose/90 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Full PDF
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* POPUP MODAL DIALOG FOR "VIEW SPECS" */}
      {/* Full screen vertical height, full-width with containerized content, bottom-to-top curved animation */}
      <AnimatePresence>
        {modalSheet && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="tds-modal-title"
            className="fixed inset-0 z-50 flex flex-col justify-end"
          >
            {/* Backdrop with Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-slate-900/65 backdrop-blur-sm -z-10"
              onClick={() => setModalSheet(null)}
            />

            {/* Bottom-to-Top Modal Sheet - Full Height */}
            <motion.div
              initial={{ y: '100%', opacity: 0.7 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 32,
                stiffness: 340,
                mass: 0.9,
              }}
              className="w-full h-full flex flex-col bg-white shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header — Full width background, containerized content */}
              <div className="bg-navy text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-5 shrink-0 border-b border-white/10 shadow-sm">
                <div className="max-w-6xl mx-auto flex items-start justify-between gap-4">
                  <div className="pr-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-rose text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                        {modalSheet.code}
                      </span>
                      <span className="text-xs text-white/80 uppercase tracking-wider font-semibold">
                        Technical Data Sheet
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-white/20 text-white text-xs font-semibold">
                        {modalSheet.category}
                      </span>
                    </div>
                    <h3 id="tds-modal-title" className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1 text-white">
                      {modalSheet.title}
                    </h3>
                    <p className="text-sm text-white/80 mt-1 max-w-3xl leading-relaxed">
                      {modalSheet.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={modalSheet.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose hover:bg-rose/90 text-xs font-bold text-white transition-colors shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Official PDF
                    </a>
                    <button
                      type="button"
                      onClick={() => setModalSheet(null)}
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      aria-label="Close specification popup"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Scrollable Modal Content — Full width scrollable viewport, containerized max-w-6xl content */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-slate-50/50">
                <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
                  {/* Product Description & Preview */}
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-2 space-y-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-rose">
                          Product Description &amp; Scope
                        </h4>
                        <p className="text-slate-700 text-sm mt-1.5 leading-relaxed">
                          {modalSheet.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-rose">
                          Construction &amp; System Integration
                        </h4>
                        <p className="text-slate-700 text-sm mt-1.5 leading-relaxed">
                          {modalSheet.construction}
                        </p>
                      </div>
                      {modalSheet.colors && modalSheet.colors.length > 0 && (
                        <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Available Color Finishes:
                          </span>
                          <div className="flex items-center gap-1.5">
                            {modalSheet.colors.map((c) => (
                              <span
                                key={c}
                                className="px-2.5 py-0.5 rounded-full bg-sand border border-slate-200 text-slate-800 text-xs font-semibold"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Preview Thumbnail Box */}
                    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm flex flex-col">
                      <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative group">
                        <img
                          src={modalSheet.image}
                          alt={modalSheet.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 bg-white text-center flex flex-col gap-2">
                        <span className="text-xs font-semibold text-slate-700">Official Spec Sheet Document</span>
                        <a
                          href={modalSheet.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy font-bold text-xs transition-colors"
                        >
                          Open Full PDF Document <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* ASTM & Physical Properties Specification Table */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-navy" />
                      Physical Properties &amp; ASTM Test Standards
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-left text-sm border-collapse">
                        <thead>
                          <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 text-xs uppercase tracking-wider">
                            <th className="py-3.5 px-4 font-bold">Property / Specification</th>
                            <th className="py-3.5 px-4 font-bold">Tested Result / Value</th>
                            <th className="py-3.5 px-4 font-bold hidden sm:table-cell">Standard / Reference</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {modalSheet.specs.map((spec, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              <td className="py-3 px-4 font-semibold text-slate-900">{spec.property}</td>
                              <td className="py-3 px-4 font-bold text-navy">{spec.value}</td>
                              <td className="py-3 px-4 text-xs text-slate-500 hidden sm:table-cell">
                                ASTM / DeckRite Specification
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Application & Field Installation Guidelines */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Application &amp; Field Installation Requirements
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {modalSheet.applicationPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="w-5 h-5 rounded-full bg-navy text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-xs text-slate-700 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Storage & Safety Notes */}
                  {(modalSheet.storageNotes || modalSheet.precautions) && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {modalSheet.storageNotes && (
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                          <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-1.5 mb-2">
                            <Package className="w-4 h-4 text-navy" />
                            Storage &amp; Jobsite Handling
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed">{modalSheet.storageNotes}</p>
                        </div>
                      )}
                      {modalSheet.precautions && (
                        <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 shadow-sm">
                          <h5 className="font-bold text-amber-900 text-xs uppercase tracking-wide flex items-center gap-1.5 mb-2">
                            <AlertTriangle className="w-4 h-4 text-amber-700" />
                            Jobsite Safety &amp; Precautions
                          </h5>
                          <p className="text-xs text-amber-900 leading-relaxed">{modalSheet.precautions}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Sticky Footer — Containerized content */}
              <div className="px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 bg-white border-t border-slate-200 shrink-0 shadow-lg">
                <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 font-medium">
                    DeckRite Technical Support • (888) 450-DECK (3325) • DeckRitesupport@deckrite.com
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={modalSheet.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose hover:bg-rose/90 text-xs font-bold text-white transition-colors shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download PDF
                    </a>
                    <button
                      type="button"
                      onClick={() => setModalSheet(null)}
                      className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                    >
                      Close Specs
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
