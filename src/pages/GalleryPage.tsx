import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProjectGallery } from '../components/ProjectGallery';
import { Camera, Sparkles, Upload, CheckCircle2, ArrowRight, Package, X } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenSampleModal,
}) => {
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSubmitModalOpen(false);
    }, 2500);
  };

  return (
    <div id="gallery-page" className="min-h-screen bg-slate-50">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Project Inspiration Gallery' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-800">
                <Camera className="w-3.5 h-3.5 text-cyan-400" />
                Real North American Installations
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                DeckRite Project Inspiration Gallery
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Explore real residential sundecks, contemporary rooftop penthouses, lakefront docks, and commercial developments transformed by DeckRite vinyl membranes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setSubmitModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
              >
                <Upload className="w-4 h-4 text-cyan-400" />
                <span>Submit Your Deck Project</span>
              </button>

              <button
                onClick={() => onNavigate('visualizer')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Try Patterns in Visualizer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Project Gallery with Before/After Slider */}
      <div className="py-4">
        <ProjectGallery
          onSelectPatternForVisualizer={() => {
            onNavigate('visualizer');
          }}
        />
      </div>

      {/* Call to Action Footer Strip */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Inspired by these outdoor living transformations?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Order your complimentary 6&quot;×6&quot; swatches or locate a certified DeckRite applicator in your area for an on-site consultation.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={onOpenSampleModal}
              className="px-6 py-3.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer flex items-center gap-2"
            >
              <Package className="w-4 h-4" />
              <span>Order Free Sample Kit</span>
            </button>
            <button
              onClick={() => onNavigate('dealers')}
              className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors cursor-pointer"
            >
              <span>Find Local Dealer &rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Submit Project Photo Modal */}
      {submitModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-100 text-cyan-800">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Submit Your DeckRite Project</h3>
                  <p className="text-xs text-slate-500">Share photos of your completed deck</p>
                </div>
              </div>
              <button
                onClick={() => setSubmitModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Thank You for Submitting!</h4>
                <p className="text-xs text-slate-600">
                  Our marketing and technical team will review your photos. Outstanding entries may be featured in DeckRite’s official architectural gallery and social media!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name / Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Summit Construction / Jane Smith"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City, State / Province</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Kelowna, BC / Denver, CO"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Pattern Used</label>
                    <input
                      type="text"
                      placeholder="e.g., Slate Gray 60 mil"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Upload Photos</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-2xl p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                    <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1.5" />
                    <span className="text-xs font-semibold text-slate-700 block">Click to upload or drag and drop</span>
                    <span className="text-[10px] text-slate-400">PNG, JPG, or WEBP up to 20MB</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSubmitModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
                  >
                    Submit Project
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
