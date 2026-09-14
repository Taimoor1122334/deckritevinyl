import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
  showAbout?: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenSampleModal,
  showAbout = false,
}) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: showAbout ? 'About Us' : 'Contact Us' }]} onNavigate={onNavigate} />
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">{showAbout ? 'About Us' : 'Contact Us'}</h1>
          <p className="text-white/80 mt-3 max-w-2xl">
            {showAbout
              ? 'DeckRite L.L.C. is headquartered in North Little Rock, Arkansas, part of the Little Rock Holdings group of companies.'
              : 'Contact DeckRite today for distributors near you, or send your mailing address for free samples of our decking material.'}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              DeckRite L.L.C. is headquartered in North Little Rock, Arkansas. We are part of the Little Rock Holdings group of companies specializing in the manufacturing of vinyl films and membranes for the construction, hot tub, marine, and swimming pool industries. We are strategically located in the central United States to efficiently service customers and their clients.
            </p>
            <p>
              DeckRite L.L.C. has been supplying decking membrane to the North American construction industry since the late 1970s. Originating in Western Canada, the deck membrane industry has flourished in Canada and in various parts of the United States. Today, over 20 million square feet of product has protected decks, patios, balconies, and exterior walkways around North America.
            </p>
            <div className="rounded-xl bg-sand border border-slate-200 p-6 space-y-3 text-slate-800">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-navy" />
                3912 East Progress<br />North Little Rock, AR 72114
              </p>
              <a href="tel:18884503325" className="flex items-center gap-2 font-semibold text-navy">
                <Phone className="w-4 h-4" /> (888) 450-DECK (3325)
              </a>
              <p className="text-sm">Local: (501) 945-1919 · Fax: (501) 604-0235</p>
              <a href="mailto:DeckRitesupport@deckrite.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-navy" /> DeckRitesupport@deckrite.com
              </a>
            </div>
            <button onClick={onOpenSampleModal} className="px-5 py-3 rounded-md bg-rose text-white font-semibold text-sm">
              Request free samples
            </button>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h2 className="text-xl font-bold text-slate-900">Send a message</h2>
            <p className="text-sm text-slate-600 mt-1">Include your mailing address if you would like free color swatches.</p>
            {submitted ? (
              <p className="mt-6 text-navy font-semibold">Thank you. We will be in touch shortly.</p>
            ) : (
              <form
                className="mt-5 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input required placeholder="Full name" className="w-full px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
                <input required type="email" placeholder="Email" className="w-full px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
                <input placeholder="Phone" className="w-full px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
                <textarea required placeholder="Mailing address and message" rows={5} className="w-full px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
                <button type="submit" className="w-full py-3 rounded-md bg-navy text-white font-semibold text-sm">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
