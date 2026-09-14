import React, { useState } from 'react';
import { Package, X, Check, Trash2, Plus, Sparkles, Truck } from 'lucide-react';
import { SampleCartItem, ColorPattern } from '../types';
import { DECKRITE_PATTERNS } from '../data/deckData';

interface SampleKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: SampleCartItem[];
  onRemoveItem: (id: string) => void;
  onAddItem: (pattern: ColorPattern) => void;
  onClearCart: () => void;
}

export const SampleKitModal: React.FC<SampleKitModalProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onAddItem,
  onClearCart,
}) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    userType: 'Homeowner' as 'Homeowner' | 'Contractor' | 'Architect',
    deckTimeline: 'Within 3 Months'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const remainingPatterns = DECKRITE_PATTERNS.filter(
    p => !cart.some(c => c.id === p.id)
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Request Free DeckRite Swatches</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500 text-slate-950 uppercase">
                  100% Free Service
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Physical 6" × 6" textured vinyl swatches mailed to your door at no charge. DeckRite products are sold via authorized dealers.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Swatch Selection Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Your Selected Swatches ({cart.length} of 4 Included Free)
                </span>
                {cart.length > 0 && (
                  <button
                    onClick={onClearCart}
                    className="text-[11px] text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" /> Clear All
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs text-center space-y-2">
                  <p className="font-semibold">No swatches in your kit yet!</p>
                  <p className="text-amber-700">Choose from the popular patterns below to add up to 4 free samples.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {cart.map(item => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <div
                          className="w-5 h-5 rounded-md border border-slate-300 shrink-0"
                          style={{ backgroundColor: item.colorHex }}
                        ></div>
                        <span className="text-xs font-bold text-slate-800 truncate">
                          {item.name}
                        </span>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 shrink-0"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Add more swatches pills if < 4 */}
              {cart.length < 4 && remainingPatterns.length > 0 && (
                <div className="mt-3">
                  <span className="text-[11px] text-slate-500 font-medium block mb-1.5">
                    Click to add more patterns:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {remainingPatterns.map(pattern => (
                      <button
                        key={pattern.id}
                        onClick={() => onAddItem(pattern)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 hover:border-cyan-500 bg-white text-xs font-medium text-slate-700 hover:text-cyan-700 transition-colors cursor-pointer"
                      >
                        <span className="w-2.5 h-2.5 rounded-full border border-slate-300" style={{ backgroundColor: pattern.colorHex }}></span>
                        <span>{pattern.name}</span>
                        <Plus className="w-3 h-3 text-cyan-600" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Shipping Form */}
            <form onSubmit={handleSubmit} className="border-t border-slate-200 pt-5 space-y-4">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Shipping Destination (US &amp; Canada)
              </span>

              {/* User Type */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                {(['Homeowner', 'Contractor', 'Architect'] as const).map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: type })}
                    className={`py-2 px-3 rounded-xl font-bold border transition-colors cursor-pointer text-center ${
                      formData.userType === type
                        ? 'border-cyan-600 bg-cyan-50 text-cyan-800'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="david@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Delivery Street Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="1234 Maple Avenue"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">City *</label>
                  <input
                    type="text"
                    required
                    placeholder="Denver"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">State / Province *</label>
                  <input
                    type="text"
                    required
                    placeholder="CO / BC"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">ZIP / Postal Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="80202 / V1M 4B4"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <Truck className="w-4 h-4 text-cyan-600" />
                  <span>Free Standard Ground Shipping via USPS/Canada Post</span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={cart.length === 0}
                    className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    Ship Free Swatches (No Charge)
                  </button>
                </div>
              </div>
            </form>

          </div>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900">Your Free Swatches Are On The Way!</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, {formData.fullName}. Your free package containing {cart.map(c => c.name).join(', ')} swatches has been requested for complimentary shipping to:
            </p>
            <div className="bg-slate-50 rounded-xl p-3 max-w-sm mx-auto text-xs text-slate-700 font-semibold border border-slate-200">
              {formData.address}, {formData.city}, {formData.state} {formData.postalCode}
            </div>
            <div className="p-3 bg-cyan-50 rounded-xl text-xs text-cyan-900 border border-cyan-200 max-w-md mx-auto text-left">
              <span className="font-bold block mb-0.5">Purchasing Full Rolls &amp; Materials:</span>
              DeckRite products are sold exclusively through our authorized stocking distributors and certified installer network. After reviewing your swatches, visit our <span className="font-semibold underline">Dealer Locator</span> to purchase materials.
            </div>
            <p className="text-xs text-slate-500">
              Expected sample arrival: 3-5 business days. A confirmation email has been sent to {formData.email}.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClearCart();
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow hover:bg-slate-800 cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
