import React, { useState } from 'react';
import { TechnicalBulletin } from '../types';
import {
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Sparkles,
  Printer,
  FileText,
  ChevronDown,
  ChevronUp,
  Download,
  Clock,
  ExternalLink,
  Layers,
} from 'lucide-react';

interface TechnicalBulletinViewerProps {
  bulletins: TechnicalBulletin[];
}

export const TechnicalBulletinViewer: React.FC<TechnicalBulletinViewerProps> = ({ bulletins }) => {
  const [selectedId, setSelectedId] = useState<string>(bulletins[0]?.id || 'tb-001');
  const [isExpanded, setIsExpanded] = useState(true);

  const activeTb = bulletins.find((b) => b.id === selectedId) || bulletins[0];

  return (
    <div className="space-y-6">
      {/* Bulletin Selector Bar */}
      <div className="flex flex-wrap gap-2 sm:gap-3 p-2 bg-slate-100/90 rounded-2xl border border-slate-200">
        {bulletins.map((item) => {
          const isSelected = item.id === activeTb?.id;
          const isPending = item.status === 'pending';
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedId(item.id);
                setIsExpanded(true);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all text-left ${
                isSelected
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-navy border border-slate-200 hover:border-slate-300'
              }`}
            >
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-extrabold ${
                  isSelected
                    ? 'bg-rose text-white'
                    : isPending
                    ? 'bg-slate-200 text-slate-600'
                    : 'bg-sand text-slate-800'
                }`}
              >
                {item.code}
              </span>
              <span className="truncate max-w-[170px] sm:max-w-none">{item.title}</span>
              {isPending && (
                <span className="text-[10px] font-semibold text-amber-600 uppercase tracking-wider bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 ml-1">
                  In Prep
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Bulletin Article */}
      {activeTb && (
        <article
          id={activeTb.code.toLowerCase()}
          className="rounded-2xl border-2 border-navy/20 bg-white shadow-sm overflow-hidden"
        >
          {/* Bulletin Top Bar */}
          <div className="bg-navy text-white px-6 py-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded bg-rose text-white text-xs font-bold uppercase tracking-wider">
                  {activeTb.code}
                </span>
                <span className="text-xs text-white/80 uppercase tracking-wider font-semibold">
                  Official Technical Bulletin
                </span>
                {activeTb.status === 'pending' && (
                  <span className="px-2 py-0.5 rounded bg-amber-500 text-white text-xs font-bold uppercase tracking-wider">
                    In Preparation
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                {activeTb.title}
              </h3>
              <p className="text-sm text-white/80 mt-0.5 max-w-2xl">
                {activeTb.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {activeTb.pdfUrl ? (
                <a
                  href={activeTb.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-rose hover:bg-rose/90 text-xs font-bold text-white transition-colors shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Open Official PDF
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 text-white/70 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" /> PDF In Production
                </span>
              )}
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                Print
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white"
                aria-label="Toggle bulletin content"
              >
                {isExpanded ? (
                  <>Hide Details <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Show Details <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>

          {isExpanded && (
            <div className="p-6 sm:p-8 space-y-8">
              {/* Purpose & Why This Matters */}
              <div className="rounded-xl bg-sand/60 border border-amber-200/70 p-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-navy">
                      Technical Scope &amp; Advisory
                    </h4>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                      {activeTb.purpose}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Notice if Pending (e.g. TB-002, TB-003) */}
              {activeTb.status === 'pending' && (
                <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-amber-900 text-sm">
                      Bulletin In Preparation
                    </h5>
                    <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                      DeckRite Technical Services is actively compiling technical parameters and jobsite data for this bulletin. Official PDF documentation will be attached as soon as released.
                    </p>
                    <p className="text-xs text-amber-900 font-bold mt-2">
                      For immediate technical assistance: Call DeckRite Engineering at (888) 450-3325.
                    </p>
                  </div>
                </div>
              )}

              {/* Spec Rows (e.g. TB-006 Temperature/Moisture Matrix) */}
              {activeTb.specRows && activeTb.specRows.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-navy" />
                      Critical Field Installation Limits
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">Jobsite Thresholds</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-bold">Field Parameter</th>
                          <th className="py-3 px-4 font-bold">Required Specification / Threshold</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {activeTb.specRows.map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                            <td className="py-3 px-4 font-semibold text-slate-900">{row.label}</td>
                            <td className="py-3 px-4 font-bold text-navy">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 3-Step Field Checks (e.g. TB-005) */}
              {activeTb.fieldChecks && activeTb.fieldChecks.length > 0 && (
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center font-bold">✓</span>
                    Three-Step Verification Before Placing Items on Vinyl
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {activeTb.fieldChecks.map((check, idx) => (
                      <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <div className="w-6 h-6 rounded-full bg-rose text-white text-xs font-bold flex items-center justify-center mb-2">
                          0{idx + 1}
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">{check}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Cleaning Procedure (e.g. TB-001) */}
              {activeTb.regularProcedure && activeTb.regularProcedure.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center font-bold">1</span>
                      Regular Cleaning Procedure
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">Perform 3–4 times per year</span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {activeTb.regularProcedure.map((item) => (
                      <div key={item.step} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 relative">
                        <div className="w-7 h-7 rounded-full bg-navy text-white font-bold text-xs flex items-center justify-center mb-2.5">
                          0{item.step}
                        </div>
                        <h5 className="font-bold text-sm text-slate-900 mb-1">{item.title}</h5>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cleaner Selection Matrix (e.g. TB-001) */}
              {activeTb.cleanerMatrix && activeTb.cleanerMatrix.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center font-bold">2</span>
                      Cleaner Selection by Condition
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">Test inconspicuous area first</span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-bold">Condition / Need</th>
                          <th className="py-3 px-4 font-bold">Recommended Cleaner</th>
                          <th className="py-3 px-4 font-bold">Application Instructions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {activeTb.cleanerMatrix.map((row, idx) => (
                          <tr
                            key={idx}
                            className={
                              row.condition.includes('Last resort')
                                ? 'bg-rose/5'
                                : idx % 2 === 0
                                ? 'bg-white'
                                : 'bg-slate-50/50'
                            }
                          >
                            <td className="py-3.5 px-4 font-semibold text-slate-900 whitespace-nowrap">
                              {row.condition}
                            </td>
                            <td className="py-3.5 px-4 font-bold text-navy whitespace-nowrap">
                              {row.cleaner}
                            </td>
                            <td className="py-3.5 px-4 text-xs text-slate-600 leading-relaxed">
                              {row.instructions}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Recommended vs Avoid side-by-side */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5">
                  <h5 className="font-bold text-emerald-900 flex items-center gap-2 text-sm uppercase tracking-wide mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Recommended Practices
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {activeTb.recommendedPractices.map((practice, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-rose/30 bg-rose/5 p-5">
                  <h5 className="font-bold text-rose flex items-center gap-2 text-sm uppercase tracking-wide mb-3">
                    <XCircle className="w-4 h-4 text-rose shrink-0" />
                    What to Avoid
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {activeTb.avoidPractices.map((practice, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose font-bold">✕</span>
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Important Notice Callout */}
              <div className="rounded-xl bg-amber-50 border border-amber-300 p-4 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed">
                  {activeTb.importantNotice}
                </p>
              </div>
            </div>
          )}
        </article>
      )}
    </div>
  );
};
