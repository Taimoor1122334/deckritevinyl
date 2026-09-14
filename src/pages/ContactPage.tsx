import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Phone, Mail, MapPin, Building, Clock, CheckCircle2, ShieldCheck, Send, MessageSquare, Package, Award, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenSampleModal,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Homeowner Deck Consultation / Quote',
    message: '',
    country: 'United States',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'Homeowner Deck Consultation / Quote',
        message: '',
        country: 'United States',
      });
    }, 4000);
  };

  return (
    <div id="contact-page" className="min-h-screen bg-slate-50">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'About Us & Contact' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-800">
              <Building className="w-3.5 h-3.5 text-cyan-400" />
              North American Manufacturer Since 1978
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              About DeckRite &amp; Contact Our Team
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions about specifying DeckRite on your architectural project, locating a certified applicator in your city, or ordering replacement rolls? Our technical support teams in Arkansas and British Columbia are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Office Locations + Interactive Form */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Factory & Regional Offices (Col 5) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Regional Offices &amp; Support
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Direct manufacturing and technical customer service
                </p>
              </div>

              {/* USA Headquarters Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                    <Building className="w-5 h-5 text-cyan-600" />
                    <span>United States Headquarters</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">
                    USA Main
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">DeckRite L.L.C.</span>
                      <span>3912 East Progress</span><br />
                      <span>North Little Rock, AR 72114</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2">
                    <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[11px] block">Toll-Free Phone:</span>
                      <a href="tel:18884503325" className="font-bold text-slate-900 text-sm hover:text-cyan-600">
                        (888) 450-DECK (3325)
                      </a>
                      <span className="text-slate-400 text-[11px] block mt-0.5">Corporate Fax: (501) 604-0235</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[11px] block">Email Support:</span>
                      <a href="mailto:DeckRitesupport@deckrite.com" className="font-medium text-slate-700 hover:text-cyan-600">
                        DeckRitesupport@deckrite.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Monday – Friday: 8:00 AM – 5:00 PM CST</span>
                  </div>
                </div>
              </div>

              {/* Canada Division Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                    <Building className="w-5 h-5 text-sky-600" />
                    <span>DeckRite Canada Division</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                    Canada Main
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">DeckRite Canada Sundecks Ltd.</span>
                      <span>Unit 3, 20133 – 102nd Avenue</span><br />
                      <span>Langley, BC V1M 4B4</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2">
                    <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[11px] block">Toll-Free Canada:</span>
                      <a href="tel:18883032792" className="font-bold text-slate-900 text-sm hover:text-sky-600">
                        1-888-303-2792
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[11px] block">Local &amp; Fax:</span>
                      <span className="font-medium text-slate-700">Phone: 604-513-0416 · Fax: 604-513-0428</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Monday – Friday: 8:00 AM – 4:30 PM PST</span>
                  </div>
                </div>
              </div>

              {/* Free Sample Kit Card reminder */}
              <div className="p-5 rounded-2xl bg-cyan-950 text-white border border-cyan-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Package className="w-4 h-4" />
                  Need Physical Swatches First?
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We mail up to 4 genuine 6&quot;×6&quot; textured DeckRite swatches directly to your doorstep free of charge.
                </p>
                <button
                  onClick={onOpenSampleModal}
                  className="text-xs font-bold text-cyan-300 hover:text-white underline block"
                >
                  Order Free Sample Kit Now &rarr;
                </button>
              </div>

            </div>

            {/* Right Column: Direct Contact & Inquiry Form (Col 7) */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-700" />
                  Send an Inquiry
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  How Can We Help You?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out the form below and a representative will respond within 1 business day.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 bg-white rounded-2xl border border-emerald-200 text-center space-y-3 p-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message Dispatched!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for contacting DeckRite. Your inquiry has been routed to the appropriate technical specialist. We look forward to speaking with you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full text-xs px-3.5 py-2.5 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full text-xs px-3.5 py-2.5 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full text-xs px-3.5 py-2.5 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Country</label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Other International</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Topic / Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option>Homeowner Deck Consultation / Quote</option>
                      <option>Architect / Commercial Specification Support</option>
                      <option>Contractor Applicator Certification</option>
                      <option>Sample Kit Order Inquiries</option>
                      <option>Warranty Claim &amp; Registration</option>
                      <option>Other Technical Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message or Project Details</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your deck project, dimensions, substrate condition, or specific questions..."
                      className="w-full text-xs p-3 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message to DeckRite</span>
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 40+ Years Heritage Spotlight */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-900/50 border border-cyan-700 flex items-center justify-center mx-auto text-cyan-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Manufacturing Excellence Since the Late 1970s
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            As part of Little Rock Holdings, DeckRite combines high-precision calendering technology with durable 1000-denier woven scrim reinforcement. We take pride in supporting North American builders and homeowners with authentic waterproof protection.
          </p>
        </div>
      </section>

    </div>
  );
};
