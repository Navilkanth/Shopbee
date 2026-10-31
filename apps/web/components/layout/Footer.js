'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SECTIONS = [
  {
    title: 'Collections',
    links: [
      { href: '/men', label: "Men's Fashion" },
      { href: '/women', label: "Women's Fashion" },
      { href: '/kids', label: "Kids' Fashion" },
      { href: '/cosmetics', label: 'Cosmetics & Beauty' },
      { href: '/accessories', label: 'Bags & Accessories' },
    ],
  },
  {
    title: 'Experience',
    links: [
      { href: '/about', label: 'About Our 20+ Year Legacy' },
      { href: '/festival-offers', label: 'Festival Offers' },
      { href: '/explore-store', label: 'Virtual 3D Store' },
      { href: '/wholesale', label: 'Wholesale & B2B' },
      { href: '/account', label: 'Track Orders' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { href: '/policies/privacy', label: 'Privacy Policy' },
      { href: '/policies/terms', label: 'Terms of Service' },
      { href: '/policies/shipping', label: 'Shipping & Returns' },
    ],
  },
];

export default function Footer({ settings = {} }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    try {
      const RAW_API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      await fetch(`${RAW_API}/api/v1/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }).catch(() => {});
    } catch {
      /* ignore */
    }
    setLoading(false);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="mt-20 border-t border-sand bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/40 bg-black/60 shadow-md">
              <Image
                src="/assets/brand/shopbee_brand_mark.png"
                alt="ShopBee"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="font-serif text-2xl tracking-tight text-cream">
              {settings.store_name || 'ShopBee'}
            </p>
          </div>
          <p className="mt-3 text-sm text-sand/80">
            {settings.tagline || 'Shop Your Style. Explore Beyond Fashion.'}
          </p>
          <p className="mt-4 text-xs text-sand/60">
            {settings.address || 'ShopBee Fashion House, MG Road, Coimbatore, Tamil Nadu 641001'}
          </p>
          <p className="mt-2 text-xs text-sand/60">
            {settings.opening_hours || 'Mon–Sat 10:00 AM – 8:30 PM (Asia/Kolkata)'}
          </p>
        </div>

        {SECTIONS.map((col) => (
          <div key={col.title}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">{col.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-sand/80">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">Stay Connected</h2>
          <p className="mt-3 text-sm">
            <a href={`mailto:${settings.email || 'shopbee@gmail.com'}`} className="hover:underline">
              {settings.email || 'shopbee@gmail.com'}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a href={`tel:${settings.phone || '9087035510'}`} className="hover:underline">
              {settings.phone || '9087035510'}
            </a>
          </p>
          <form className="mt-5" onSubmit={handleSubscribe}>
            <label htmlFor="newsletter" className="text-xs uppercase tracking-widest text-sand">
              Newsletter & Deals
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="newsletter"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full rounded-full bg-white/10 px-4 py-2 text-sm text-cream placeholder-sand/60 outline-none focus:ring-1 focus:ring-gold"
                suppressHydrationWarning
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition hover:bg-gold/90"
                suppressHydrationWarning
              >
                {loading ? '...' : 'Join'}
              </button>
            </div>
            {subscribed ? (
              <p className="mt-2 text-xs text-emerald-400 font-medium">✓ You&apos;re subscribed! Check email for 10% off code.</p>
            ) : (
              <p className="mt-2 text-xs text-sand/70">Receive seasonal lookbooks & exclusive promo codes.</p>
            )}
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-sand/50">
        © {new Date().getFullYear()} ShopBee. All rights reserved. Prices in INR.
      </div>
    </footer>
  );
}
