import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { TechnicalBulletinViewer } from '../components/TechnicalBulletinViewer';
import { TechnicalDataSheetsSection } from '../components/TechnicalDataSheetsSection';
import { CornerPhotoGallery } from '../components/CornerPhotoGallery';
import {
  PHYSICAL_PROPERTIES,
  DETAIL_DRAWINGS,
  INSTALL_VIDEOS,
  TECHNICAL_BULLETINS,
  TECHNICAL_DATA_SHEETS,
  CORNER_PHOTO_GUIDES,
  RESOURCE_DOCUMENTS,
} from '../data/deckData';
import {
  ExternalLink,
  FileText,
  Compass,
  PlayCircle,
  Sparkles,
  Layers,
  Youtube,
  FileSpreadsheet,
  Camera,
  Download,
  FolderArchive,
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="resources-page" className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Resources & Technical Data' }]} onNavigate={onNavigate} />

      {/* Hero Header matching site aesthetic */}
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
              Technical Documentation &amp; Submittals
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2">
              Resources &amp; Technical Data
            </h1>
            <p className="text-white/80 mt-3 leading-relaxed">
              Official DeckRite CAD detail drawings, step-by-step corner installation photos, downloadable architectural specifications, technical data sheets, and bulletins.
            </p>
          </div>

          {/* Quick-Access Section Navigation matching site button style */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {[
              { label: 'CAD Drawings', target: 'section-drawings', count: DETAIL_DRAWINGS.length },
              { label: 'Corner Photos', target: 'section-corners', count: CORNER_PHOTO_GUIDES.length },
              { label: 'Data Sheets (TDS)', target: 'section-tds', count: TECHNICAL_DATA_SHEETS.length },
              { label: 'Documents & Specs', target: 'section-docs', count: RESOURCE_DOCUMENTS.length },
              { label: 'Technical Bulletins', target: 'section-bulletin', count: TECHNICAL_BULLETINS.length },
              { label: 'Physical Properties', target: 'section-properties' },
            ].map((btn) => (
              <button
                key={btn.label}
                type="button"
                onClick={() => scrollToSection(btn.target)}
                className="px-4 py-2 rounded-md text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>{btn.label}</span>
                {btn.count !== undefined && (
                  <span className="px-1.5 py-0.5 rounded text-[11px] bg-white/15 text-white/90 font-mono">
                    {btn.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: DETAILED CAD DRAWINGS */}
      <section id="section-drawings" className="py-14 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-rose">
              Architectural CAD Library
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Detailed Drawings &amp; Flashing Specs
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Engineered edge terminations, inside/outside corners, post wraps, drip edges, and drain flashings. Click any sheet to open the official high-resolution PDF document directly.
            </p>
          </div>

          {/* Detailed Drawings Grid — Opens Official PDFs Directly */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DETAIL_DRAWINGS.map((drawing) => (
              <div
                key={drawing.id}
                className="group rounded-2xl border border-slate-200 hover:border-navy hover:shadow-md transition-all duration-200 bg-white overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header / Blueprint Image - Direct Link to PDF */}
                <a
                  href={drawing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-slate-900 p-4 flex items-center justify-center min-h-[190px] group-hover:bg-slate-950 transition-colors"
                  title={`Open official ${drawing.code} PDF document`}
                >
                  <img
                    src={drawing.image}
                    alt={drawing.title}
                    className="max-h-[160px] w-auto object-contain transition-transform group-hover:scale-105 duration-200"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-navy text-white text-xs font-black tracking-wide shadow">
                      {drawing.code}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-slate-900 text-xs font-bold shadow">
                      <FileText className="w-3.5 h-3.5 text-rose" /> Open Official PDF
                    </span>
                  </div>
                </a>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <a
                      href={drawing.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-base text-slate-900 group-hover:text-navy transition-colors inline-block"
                    >
                      {drawing.title}
                    </a>
                    {drawing.system && (
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        System: <strong className="text-slate-700">{drawing.system}</strong>
                      </p>
                    )}
                    {(drawing.description || (drawing.steps && drawing.steps[0])) && (
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed min-h-[32px]">
                        {drawing.description || (drawing.steps && drawing.steps[0])}
                      </p>
                    )}
                  </div>

                  {/* Actions - Direct PDF Opening */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={drawing.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-navy-dark"
                    >
                      <FileText className="w-3.5 h-3.5 text-rose" />
                      Open Official PDF ({drawing.code})
                    </a>
                    <a
                      href={drawing.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-navy bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md transition-colors"
                    >
                      PDF <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: CORNER INSTALLATION PHOTO STEP-BY-STEP (INSIDE & OUTSIDE CORNERS) */}
      <section id="section-corners" className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-bold tracking-wide mb-2">
              <Camera className="w-3.5 h-3.5 text-rose" />
              <span>Jobsite Workmanship &amp; Detailing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Inside &amp; Outside Corner Installation Guide
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Field photography demonstrating proper membrane folding, pig-ear corners, 45° relief cutting, and hot-air welded target patch reinforcement for inside and outside junctions.
            </p>
          </div>

          <CornerPhotoGallery guides={CORNER_PHOTO_GUIDES} />
        </div>
      </section>

      {/* SECTION 3: TECHNICAL DATA SHEETS (NEW TDS SPECIFICATIONS) */}
      <section id="section-tds" className="py-14 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose/10 text-rose text-xs font-bold tracking-wide mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Product Engineering Sheets</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Technical Data Sheets (TDS)
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Complete engineering properties, ASTM test metrics, roll/sheet dimensions, and installation requirements for DeckRite accessories and edge flashings. Click to view interactive parameters or open official PDFs directly.
            </p>
          </div>

          <TechnicalDataSheetsSection sheets={TECHNICAL_DATA_SHEETS} />
        </div>
      </section>

      {/* SECTION 4: INFORMATIVE TECHNICAL DOCUMENTS & PDF SPECIFICATIONS LIBRARY */}
      <section id="section-docs" className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-bold tracking-wide mb-2">
              <FolderArchive className="w-3.5 h-3.5 text-rose" />
              <span>Technical Data Repository</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Technical Documentation &amp; Submittals
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Download official product catalogs, CSI 3-part specifications, installation manuals, safety data sheets (SDS), and technical bulletins directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCE_DOCUMENTS.map((doc) => (
              <div
                key={doc.id}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-navy hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
                      {doc.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {doc.fileSize}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 group-hover:text-navy text-base leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-navy hover:bg-navy-dark text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </a>

                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-500 hover:text-navy inline-flex items-center gap-1"
                  >
                    Preview <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TECHNICAL BULLETINS (TB-001, TB-002, TB-003, TB-005, TB-006) */}
      <section id="section-bulletin" className="py-14 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose">
              Engineering Advisories &amp; Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Technical Bulletins Library
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Official maintenance guidelines, chemical compatibility ratings, weather limits, and field advisories directly from DeckRite Technical Services.
            </p>
          </div>

          <TechnicalBulletinViewer bulletins={TECHNICAL_BULLETINS} />
        </div>
      </section>

      {/* SECTION 6: VIDEO INSTALLATION GUIDES */}
      <section id="section-videos" className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-rose">
              Field Instruction
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Installation Video Series
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Complete step-by-step contractor video series covering deck substrate preparation, layout, adhesive application, and hot-air seam welding.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTALL_VIDEOS.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-navy hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video bg-slate-900 overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <div className="w-14 h-10 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {video.seriesPart && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded bg-navy/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          {video.seriesPart}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 group-hover:text-navy text-sm">
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700">
                    <Youtube className="w-4 h-4 fill-current" />
                    Watch on YouTube <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: MATERIAL PHYSICAL PROPERTIES */}
      <section id="section-properties" className="py-14 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-navy text-white text-xs font-bold uppercase tracking-wider">
                ASTM Certified
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Independent Laboratory Testing
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Material Physical Properties
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              DeckRite 50 mil and 60 mil 3-ply flexible PVC membrane physical test results under standardized ASTM protocols.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-white text-xs uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-3.5 px-5">Physical Property</th>
                  <th className="py-3.5 px-5">Test Standard / Method</th>
                  <th className="py-3.5 px-5">DeckRite Specification / Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {PHYSICAL_PROPERTIES.map((row, i) => (
                  <tr key={row.property} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                    <td className="py-3.5 px-5 font-semibold text-slate-900">{row.property}</td>
                    <td className="py-3.5 px-5 font-mono text-xs text-slate-600">{row.method}</td>
                    <td className="py-3.5 px-5 text-slate-800 font-medium">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-5 rounded-xl bg-sand/60 border border-amber-200/60 text-xs text-slate-700">
            <div>
              <p className="font-bold text-slate-900">Need specific architectural submittals or test documentation?</p>
              <p className="text-slate-600 mt-0.5">Contact DeckRite LLC Technical Services at (888) 450-DECK (3325) or DeckRitesupport@deckrite.com.</p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2.5 rounded-lg bg-navy hover:bg-navy-dark text-white font-semibold text-xs transition-colors shrink-0"
            >
              Contact Technical Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

