import React, { useState } from 'react';
import { Package, X, Trash2 } from 'lucide-react';
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
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const remaining = DECKRITE_PATTERNS.filter((p) => !cart.some((c) => c.id === p.id));

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl my-8">
        <div className="bg-navy text-white p-6 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Package className="w-5 h-5" /> Request free DeckRite swatches
            </h3>
            <p className="text-sm text-white/80 mt-1">
              Provide your mailing address and we will send free samples of our decking material. Up to 4 colors per kit.
            </p>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <p className="text-lg font-bold text-navy">Request received</p>
            <p className="text-sm text-slate-600">
              Thank you. DeckRite will mail your swatches to the address provided. For faster help call (888) 450-DECK.
            </p>
            <button onClick={onClose} className="px-5 py-2.5 rounded-md bg-navy text-white font-semibold text-sm">
              Close
            </button>
          </div>
        ) : (
          <form
            className="p-6 space-y-5 max-h-[75vh] overflow-y-auto"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <p className="text-sm font-semibold text-slate-800 mb-2">Selected colors ({cart.length}/4)</p>
              <div className="flex flex-wrap gap-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-2 rounded-lg border border-slate-200 px-2 py-1">
                    <img src={item.image} alt="" className="w-8 h-8 object-cover rounded" />
                    <span className="text-xs font-medium">{item.name}</span>
                    <button type="button" onClick={() => onRemoveItem(item.id)} aria-label={`Remove ${item.name}`}>
                      <Trash2 className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                ))}
              </div>
              {remaining.length > 0 && cart.length < 4 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {remaining.map((pattern) => (
                    <button
                      key={pattern.id}
                      type="button"
                      onClick={() => onAddItem(pattern)}
                      className="text-xs px-2 py-1 rounded border border-slate-200 hover:border-navy"
                    >
                      + {pattern.name}
                    </button>
                  ))}
                </div>
              )}
              {cart.length > 0 && (
                <button type="button" onClick={onClearCart} className="mt-2 text-xs text-slate-500 hover:text-rose">
                  Clear kit
                </button>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Full name" className="px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
              <input required type="email" placeholder="Email" className="px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
              <input placeholder="Phone" className="px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
              <input required placeholder="Street address" className="px-3 py-2.5 rounded-md border border-slate-300 text-sm sm:col-span-2" />
              <input required placeholder="City" className="px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
              <input required placeholder="State / Province" className="px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
              <input required placeholder="Postal code" className="px-3 py-2.5 rounded-md border border-slate-300 text-sm" />
            </div>
            <button type="submit" className="w-full py-3 rounded-md bg-rose text-white font-semibold text-sm">
              Send sample request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
