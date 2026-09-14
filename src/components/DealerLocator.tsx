import React, { useState } from 'react';
import { MapPin, Phone, Mail, Search, CheckCircle, ShieldCheck, Building, UserCheck } from 'lucide-react';
import { AUTHORIZED_DEALERS } from '../data/deckData';
import { Dealer } from '../types';

export const DealerLocator: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<'All' | 'USA' | 'Canada'>('All');
  const [selectedDealerForQuote, setSelectedDealerForQuote] = useState<Dealer | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  const filteredDealers = AUTHORIZED_DEALERS.filter(dealer => {
    const matchCountry = selectedCountry === 'All' || dealer.country === selectedCountry;
    const query = searchQuery.toLowerCase().trim();
    const matchQuery =
      query === '' ||
      dealer.name.toLowerCase().includes(query) ||
      dealer.city.toLowerCase().includes(query) ||
      dealer.stateOrProvince.toLowerCase().includes(query) ||
      dealer.postalCode.toLowerCase().includes(query) ||
      dealer.servesRegions.some(r => r.toLowerCase().includes(query));

    return matchCountry && matchQuery;
  });

  return (
    <section id="dealers" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-cyan-600" />
            North American Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find an Authorized Dealer &amp; Certified Installer
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Locate stocking distributors and certified master installers throughout the United States and Canada, backed by direct factory training and comprehensive warranties.
          </p>
        </div>

        {/* Filter / Search Bar */}
        <div className="max-w-3xl mx-auto mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-3 items-center">
          
          {/* Country Toggle */}
          <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200 shrink-0">
            {(['All', 'USA', 'Canada'] as const).map(country => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedCountry === country
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {country === 'All' ? 'All Locations' : country === 'USA' ? '🇺🇸 United States' : '🇨🇦 Canada'}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city, state/province, or postal code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-cyan-500 text-slate-800"
            />
          </div>

        </div>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDealers.map(dealer => (
            <div
              key={dealer.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    dealer.type === 'Authorized Distributor'
                      ? 'bg-sky-100 text-sky-800'
                      : dealer.type === 'Certified Master Installer'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-800'
                  }`}>
                    {dealer.type}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {dealer.country === 'USA' ? '🇺🇸 USA' : '🇨🇦 CAN'}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-base">{dealer.name}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  {dealer.address}, {dealer.city}, {dealer.stateOrProvince} {dealer.postalCode}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <a
                    href={`tel:${dealer.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-cyan-700 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span>{dealer.phone}</span>
                  </a>

                  <a
                    href={`mailto:${dealer.email}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-cyan-700 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span className="truncate">{dealer.email}</span>
                  </a>
                </div>

                {/* Service Regions */}
                <div className="mt-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Coverage Area:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {dealer.servesRegions.map((region, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedDealerForQuote(dealer);
                    setContactSubmitted(false);
                  }}
                  className="w-full py-2 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition-colors cursor-pointer text-center"
                >
                  Contact For Estimate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contractor / Applicator Recruitment Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              For Professional Contractors &amp; Deck Builders
            </span>
            <h3 className="text-2xl font-bold text-white">
              Become a DeckRite Certified Applicator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Expand your business with North America's premier waterproof vinyl decking system. Receive hands-on hot-air weld training, wholesale material pricing, marketing support, and exclusive dealer territory leads.
            </p>
          </div>

          <a
            href="tel:18884503325"
            className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shrink-0 transition-colors shadow-lg cursor-pointer"
          >
            Call (888) 450-DECK for Pro Account
          </a>
        </div>

      </div>

      {/* Direct Dealer Contact Modal */}
      {selectedDealerForQuote && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">{selectedDealerForQuote.type}</span>
                <h4 className="font-extrabold text-slate-900 text-lg">{selectedDealerForQuote.name}</h4>
                <p className="text-xs text-slate-500">{selectedDealerForQuote.city}, {selectedDealerForQuote.stateOrProvince}</p>
              </div>
              <button
                onClick={() => setSelectedDealerForQuote(null)}
                className="text-slate-400 hover:text-slate-800 text-sm p-1"
              >
                ✕
              </button>
            </div>

            {!contactSubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number:</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Project Details (Deck size, new build or replacement):</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 14x20 second-story deck over walkout patio, interested in Lakewood Marble 60 mil..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDealerForQuote(null)}
                    className="px-4 py-2 rounded-xl font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold shadow"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-emerald-900 text-sm">Message Successfully Sent!</h5>
                <p className="text-xs text-emerald-700">
                  {selectedDealerForQuote.name} will review your inquiry and follow up within 1 business day.
                </p>
                <button
                  onClick={() => setSelectedDealerForQuote(null)}
                  className="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
