'use client';

import { Check, Copy, Tag } from 'lucide-react';
import { useState } from 'react';

export default function FestivalCoupons({ offers = [] }) {
  const [copiedCode, setCopiedCode] = useState('');

  const handleCopy = (code) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2500);
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {offers.map((offer) => (
        <div
          key={offer.id}
          className="relative flex flex-col justify-between rounded-3xl border border-sand bg-white p-6 shadow-soft transition hover:border-gold/60"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-ink">
                {offer.badge}
              </span>
              <span className="font-serif text-lg font-bold text-gold">{offer.discount}</span>
            </div>
            <h3 className="mt-4 font-serif text-xl text-ink">{offer.title}</h3>
            <p className="mt-2 text-xs text-charcoal/70 leading-relaxed">{offer.description}</p>
          </div>

          <div className="mt-6 border-t border-sand/60 pt-4">
            <button
              type="button"
              onClick={() => handleCopy(offer.code)}
              className="flex w-full items-center justify-between rounded-full border border-dashed border-ink/40 bg-cream/60 px-4 py-2 text-xs font-mono font-bold tracking-wider text-ink transition hover:border-gold hover:bg-gold/10"
              suppressHydrationWarning
            >
              <span className="flex items-center gap-1.5">
                <Tag className="h-3.5 w-3.5 text-gold" /> {offer.code}
              </span>
              {copiedCode === offer.code ? (
                <span className="flex items-center gap-1 text-emerald-700 font-sans font-semibold">
                  <Check className="h-3 w-3" /> Copied!
                </span>
              ) : (
                <span className="flex items-center gap-1 text-charcoal/60 font-sans font-normal">
                  <Copy className="h-3 w-3" /> Copy
                </span>
              )}
            </button>
            <p className="mt-2 text-center text-[10px] text-charcoal/50">{offer.expires}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

