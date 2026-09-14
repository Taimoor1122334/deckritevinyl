import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { DealerLocator } from '../components/DealerLocator';
import { MapPin, Phone, Mail, Award, CheckCircle2, Building, Wrench, ShieldCheck, ArrowRight, Package, Users } from 'lucide-react';

interface DealersPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const DealersPage: React.FC<DealersPageProps> = ({
  onNavigate,
  onOpenSampleModal,
}) => {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
    setTimeout(() => {
      setPartnerSubmitted(false);
      setPartnerModalOpen(false);
    }, 2500);
  };

  return (
    <div id="dealers-page" className="min-h-screen bg-slate-50">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Authorized Dealers & Certified Installers' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                North American Certified Network
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Find an Authorized DeckRite Dealer or Installer
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with factory-trained decking contractors and authorized stocking distributors across the United States and Canada. Guaranteed professional hot-air seam welding and workmanship warranty support.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setPartnerModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>Become a Certified Applicator</span>
              </button>

              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
              >
                <Package className="w-4 h-4 text-cyan-400" />
                <span>Order Free Sample Kit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Dealer Directory Tool */}
      <div className="py-4">
        <DealerLocator />
      </div>

      {/* Contractor Partner Program Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-800">
                  <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                  Contractor &amp; Dealer Opportunities
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Grow Your Business with DeckRite Waterproof Systems
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Join North America’s most trusted network of exterior waterproof specialists. We provide factory hot-air welding certification, dedicated territory leads, wholesale distributor pricing, and full architectural spec support.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Comprehensive hot-air welding hands-on training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Exclusive marketing kits &amp; showroom display racks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct homeowner project referrals in your territory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct factory technical hotline &amp; field support</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <button
                  onClick={() => setPartnerModalOpen(true)}
                  className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-colors text-center cursor-pointer"
                >
                  Apply to Become an Authorized Applicator
                </button>
                <a
                  href="tel:18884503325"
                  className="w-full py-3 px-6 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 transition-colors text-center block"
                >
                  Call Dealer Desk: (888) 450-DECK
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contractor Application Modal */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-100 text-cyan-800">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Authorized Applicator Application</h3>
                  <p className="text-xs text-slate-500">Join our North American certified network</p>
                </div>
              </div>
              <button
                onClick={() => setPartnerModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            {partnerSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Application Received!</h4>
                <p className="text-xs text-slate-600">
                  Our contractor development representative will reach out to you within 1 business day with dealer pricing sheets, sample kits, and training schedules.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-3.5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">First &amp; Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Miller Decking &amp; Roofing"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City &amp; State / Prov</label>
                    <input
                      type="text"
                      required
                      placeholder="City, State/Prov"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Years in Business</label>
                    <select className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                      <option>1 - 3 years</option>
                      <option>4 - 10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Trade Focus</label>
                  <select className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Deck Builder / General Contractor</option>
                    <option>Roofing &amp; Waterproofing Specialist</option>
                    <option>Building Materials Stocking Distributor</option>
                    <option>Architect / Specifier</option>
                  </select>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setPartnerModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
                  >
                    Submit Applicator Inquiry
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
