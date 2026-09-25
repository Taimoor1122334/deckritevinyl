import React, { useState } from 'react';
import { AUTHORIZED_DEALERS } from '../data/deckData';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export const DealerLocator: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">Distributors</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Find DeckRite near you</h2>
          <p className="text-slate-600 mt-2">
            Contact DeckRite for distributors and independent installation representatives in your area. Products ship throughout North America from North Little Rock, Arkansas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {AUTHORIZED_DEALERS.map((dealer) => (
            <article key={dealer.id} className="rounded-xl border border-slate-200 p-6">
              <p className="text-[11px] font-bold uppercase tracking-wide text-navy">{dealer.type}</p>
              <h3 className="text-lg font-bold text-slate-900 mt-1">{dealer.name}</h3>
              <a href={`tel:${dealer.phone.replace(/[^\d]/g, '')}`} className="mt-2 flex items-center gap-2 text-sm font-semibold text-navy">
                <Phone className="w-4 h-4" /> {dealer.phone}
              </a>
              <a href={`mailto:${dealer.email}`} className="mt-1 flex items-center gap-2 text-sm text-slate-700">
                <Mail className="w-4 h-4" /> {dealer.email}
              </a>
              <p className="text-sm text-slate-600 mt-2 flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-navy shrink-0" />
                {dealer.address}<br />
                {dealer.city}, {dealer.stateOrProvince} {dealer.postalCode}
              </p>
              {dealer.website && (
                <a href={dealer.website} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-navy">
                  Visit website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="rounded-xl bg-sand border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900">Request a local distributor</h3>
          <p className="text-sm text-slate-600 mt-1">Tell us your city and we will connect you with a stocking distributor or installer.</p>
          {submitted ? (
            <p className="mt-4 text-sm font-semibold text-navy">Thank you. A DeckRite representative will follow up.</p>
          ) : (
            <form
              className="mt-4 grid sm:grid-cols-3 gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input required placeholder="Your name" className="px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
              <input required placeholder="City, State" className="px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
              <button type="submit" className="px-4 py-2.5 rounded-md bg-navy text-white font-semibold text-sm">
                Request contact
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
