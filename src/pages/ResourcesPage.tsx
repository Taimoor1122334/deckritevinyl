import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { InstallationResources } from '../components/InstallationResources';
import { BookOpen, FileText, Download, ShieldCheck, CheckCircle2, Search, Wrench, AlertTriangle, ExternalLink, HelpCircle } from 'lucide-react';
import { RESOURCE_DOCUMENTS } from '../data/deckData';
import { ResourceDoc } from '../types';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigate,
  onOpenSampleModal,
}) => {
  return (
    <div id="resources-page" className="min-h-screen bg-white">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Resources & Technical Center' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 lg:py-18 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf820_1px,transparent_1px),linear-gradient(to_bottom,#38bdf820_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              Architectural &amp; Engineering Center
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Specifications, CAD Details &amp; Building Codes
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Complete technical documentation for architects, structural engineers, general contractors, and homeowners. Covering CSI 3-Part MasterFormat (Section 07 18 13), CGSB 37.54-95, ICC-ES AC75 roof certifications, and detail cross-sections.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('estimator')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-colors cursor-pointer"
              >
                <span>Deck Material &amp; Roll Estimator</span>
              </button>

              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
              >
                <span>Request Free Sample Kit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CSI MasterFormat & Code Specs Quick Summary Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">CSI MasterFormat</span>
              <span className="font-bold text-slate-900 text-sm">Section 07 18 13</span>
              <span className="text-slate-500 block text-[11px]">Pedestrian Traffic Coatings</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Canadian Standards</span>
              <span className="font-bold text-slate-900 text-sm">CGSB 37.54-95</span>
              <span className="text-slate-500 block text-[11px]">PVC Roofing Membrane</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">US Evaluation</span>
              <span className="font-bold text-slate-900 text-sm">ICC-ES AC75</span>
              <span className="text-slate-500 block text-[11px]">Roof-Deck Code Compliance</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Fire Testing</span>
              <span className="font-bold text-slate-900 text-sm">ASTM E108 Class A/C</span>
              <span className="text-slate-500 block text-[11px]">Flame Spread Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Document Library, Installation 3-Step Guide & FAQs */}
      <InstallationResources />

    </div>
  );
};
