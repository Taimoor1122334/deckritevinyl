import React from 'react';
import { DETAIL_DRAWINGS, INSTALL_VIDEOS } from '../data/deckData';
import { ExternalLink, PlayCircle, ArrowRight, Sparkles, FileText, Youtube, FileSpreadsheet } from 'lucide-react';

interface InstallationResourcesProps {
  onNavigateToResources?: () => void;
}

export const InstallationResources: React.FC<InstallationResourcesProps> = ({ onNavigateToResources }) => {
  // Key architectural details in numerical order
  const featuredDrawings = DETAIL_DRAWINGS.filter((d) =>
    ['DR-101', 'DR-102', 'DR-104', 'DR-106', 'DR-109', 'DR-113'].includes(d.code)
  );

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose/10 text-rose text-xs font-bold tracking-wide mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contractor &amp; Architect Field Specs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Detailed Drawings &amp; Installation
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Engineered CAD flashing details, technical data sheets, and instructional field videos for commercial and residential installations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/pdf/TDS-ProGuard-Walk-Tread.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white hover:border-navy text-slate-800 text-xs font-bold shadow-sm"
            >
              <FileSpreadsheet className="w-4 h-4 text-rose" />
              New TDS Sheets (PDF)
            </a>
            <a
              href="/pdf/TB-001.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white hover:border-navy text-slate-800 text-xs font-bold shadow-sm"
            >
              <FileText className="w-4 h-4 text-rose" />
              Technical Bulletins (PDF)
            </a>
            <button
              onClick={onNavigateToResources}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy hover:bg-navy-dark text-white text-xs font-bold shadow-sm"
            >
              Full Resource Center <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Drawings Grid — Prominent & readable direct PDF links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {featuredDrawings.map((drawing) => (
            <div
              key={drawing.id}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-navy hover:shadow-md transition-all flex flex-col justify-between"
            >
              <a
                href={drawing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-slate-900 p-4 flex items-center justify-center min-h-[170px] group-hover:bg-slate-950 transition-colors"
                title={`Open official ${drawing.code} PDF document`}
              >
                <img
                  src={drawing.image}
                  alt={drawing.title}
                  className="max-h-[140px] w-auto object-contain transition-transform group-hover:scale-105 duration-200"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-navy text-white text-[11px] font-black tracking-wide shadow">
                    {drawing.code}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white text-slate-900 text-[11px] font-bold shadow">
                    <FileText className="w-3 h-3 text-rose" /> Open Official PDF
                  </span>
                </div>
              </a>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <a
                    href={drawing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm text-slate-900 group-hover:text-navy transition-colors inline-block"
                  >
                    {drawing.title}
                  </a>
                  {drawing.system && (
                    <p className="text-[11px] text-slate-500 mt-1">
                      System: <strong className="text-slate-700">{drawing.system}</strong>
                    </p>
                  )}
                  {(drawing.description || (drawing.steps && drawing.steps[0])) && (
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed min-h-[32px]">
                      {drawing.description || (drawing.steps && drawing.steps[0])}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={drawing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-navy hover:text-navy-dark inline-flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-rose" />
                    Open PDF ({drawing.code})
                  </a>
                  <a
                    href={drawing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-navy inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded"
                  >
                    PDF <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Series Highlight */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-rose" />
              Installation Video Series
            </h3>
            <span className="text-xs text-slate-500 font-medium">5-Part Contractor Video Series</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INSTALL_VIDEOS.slice(0, 5).map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-navy transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video bg-slate-900 overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <div className="w-12 h-9 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {video.seriesPart && (
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded bg-navy/90 text-white text-[10px] font-bold uppercase tracking-wider shadow">
                          {video.seriesPart}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-900 text-sm group-hover:text-navy">{video.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{video.description}</p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600">
                    <Youtube className="w-3.5 h-3.5 fill-current" />
                    Watch on YouTube
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
