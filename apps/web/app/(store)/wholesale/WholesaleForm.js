'use client';

import { CheckCircle2, Send } from 'lucide-react';
import { useState } from 'react';

export default function WholesaleForm() {
  const [form, setForm] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    category: 'womenswear',
    estimatedQuantity: '50-100',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const generatedRef = `SB-B2B-${Date.now().toString().slice(-5)}`;
    try {
      const RAW_API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      await fetch(`${RAW_API}/api/v1/wholesale`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, refId: generatedRef }),
      }).catch(() => {});
    } catch {
      /* ignore */
    }

    setRefId(generatedRef);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/60 p-8 text-center shadow-soft">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-3 font-serif text-2xl text-ink">Inquiry Received!</h3>
        <p className="mt-2 text-sm text-charcoal/80">
          Thank you, <strong className="text-ink">{form.contactPerson}</strong>. Your reference ID is{' '}
          <span className="font-mono font-bold text-ink">{refId}</span>.
        </p>
        <p className="mt-1 text-xs text-charcoal/70">
          Our wholesale manager will get in touch with you at <strong className="text-ink">{form.email}</strong> within 1 business day with custom pricing and sample swatches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-sand bg-white p-6 shadow-soft md:p-8">
      <h3 className="font-serif text-2xl text-ink">Submit Wholesale Request</h3>
      <p className="mt-1 text-xs text-charcoal/70">
        Direct manufacturer pricing for retail boutiques, regional showrooms, and corporate bulk orders.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-wider text-charcoal/70">Business / Store Name</label>
          <input
            type="text"
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            required
            placeholder="e.g. Silk Vistas Boutique"
            className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
            suppressHydrationWarning
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-charcoal/70">Contact Person Name</label>
          <input
            type="text"
            name="contactPerson"
            value={form.contactPerson}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
            suppressHydrationWarning
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-charcoal/70">Official Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="retail@store.com"
            className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
            suppressHydrationWarning
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-charcoal/70">Phone / WhatsApp</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
            suppressHydrationWarning
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-charcoal/70">Category of Interest</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
            suppressHydrationWarning
          >
            <option value="womenswear">Women&apos;s Sarees & Kurtis</option>
            <option value="menswear">Men&apos;s Shirts & Ethnic Kurtas</option>
            <option value="fabrics">Bulk Unstitched Linen & Silk Fabrics</option>
            <option value="cosmetics">Cosmetics & Fragrance Assortment</option>
            <option value="kidswear">Kids&apos; Festive Sets</option>
          </select>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-charcoal/70">Estimated Monthly Units</label>
          <select
            name="estimatedQuantity"
            value={form.estimatedQuantity}
            onChange={handleChange}
            className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
            suppressHydrationWarning
          >
            <option value="50-100">50 – 100 pieces (Tier 1: 30% Margin)</option>
            <option value="100-300">100 – 300 pieces (Tier 2: 40% Margin)</option>
            <option value="300+">300+ pieces (Custom Contract: 50% Margin)</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs uppercase tracking-wider text-charcoal/70">Specific Requirements or Message</label>
          <textarea
            rows={3}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your city, retail outlet, and specific collection requirements…"
            className="mt-1 w-full rounded-2xl border border-sand bg-cream/40 p-4 text-sm outline-none focus:border-gold"
            suppressHydrationWarning
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-semibold text-cream transition hover:bg-ink/90 active:scale-95 disabled:opacity-50"
        suppressHydrationWarning
      >
        <Send className="h-4 w-4" />
        {loading ? 'Submitting Inquiry…' : 'Submit Wholesale Inquiry'}
      </button>
    </form>
  );
}

