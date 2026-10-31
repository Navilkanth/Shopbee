import HeritageShowcase from '@/components/animations/HeritageShowcase';
import { getSettings } from '@/lib/api';
import { aboutContent } from '@/lib/site-content';
import { Award, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, Store, Truck, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Our 20+ Year Legacy · ShopBee',
  description:
    'For more than 20 years, ShopBee has crafted trust and timeless fashion for Indian families across the nation.',
};

export default async function AboutPage() {
  const settings = await getSettings();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      {/* Brand Hero Badge */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-900 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          {aboutContent.eyebrow}
        </span>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl text-ink leading-tight">
          {aboutContent.title}
        </h1>
        <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-charcoal/80 leading-relaxed">
          {aboutContent.intro}
        </p>
      </div>

      {/* 20+ Years Trust Stats Grid */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {aboutContent.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-sand bg-white p-6 text-center shadow-soft"
          >
            <p className="font-serif text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
            <p className="mt-2 text-xs md:text-sm font-medium text-charcoal/70 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Heritage & Craftsmanship Journey Animation */}
      <HeritageShowcase />

      {/* Trust Pillars */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-sand bg-cream/50 p-6 shadow-sm">
          <ShieldCheck className="h-8 w-8 text-gold" />
          <h3 className="mt-4 font-serif text-xl font-bold text-ink">100% Verified Purity</h3>
          <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">
            Every silk saree carries pure zari inspection; organic cottons are certified hypoallergenic and skin-safe.
          </p>
        </div>
        <div className="rounded-3xl border border-sand bg-cream/50 p-6 shadow-sm">
          <HeartHandshake className="h-8 w-8 text-gold" />
          <h3 className="mt-4 font-serif text-xl font-bold text-ink">Two Decades of Fair Trade</h3>
          <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">
            Direct partnerships with master weaving clusters across South India ensure ethical wages and genuine value.
          </p>
        </div>
        <div className="rounded-3xl border border-sand bg-cream/50 p-6 shadow-sm">
          <Truck className="h-8 w-8 text-gold" />
          <h3 className="mt-4 font-serif text-xl font-bold text-ink">Insured Doorstep Care</h3>
          <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">
            Complimentary doorstep shipping on orders over ₹999 with 7-day hassle-free size exchange protection.
          </p>
        </div>
      </div>

      {/* Narrative Story Sections */}
      <div className="mt-16 space-y-10">
        {aboutContent.sections.map((sec, idx) => (
          <div
            key={sec.title}
            className="rounded-[2.5rem] border border-sand bg-white p-8 md:p-10 shadow-soft"
          >
            <div className="flex items-center gap-3 text-gold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 font-serif text-sm font-bold text-ink">
                0{idx + 1}
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-charcoal/60">
                Heritage Chapter
              </span>
            </div>
            <h2 className="mt-3 font-serif text-2xl md:text-3xl text-ink">{sec.title}</h2>
            <p className="mt-4 text-base md:text-lg text-charcoal/80 leading-relaxed">{sec.body}</p>
          </div>
        ))}
      </div>

      {/* Flagship Location Callout */}
      <section className="mt-16 rounded-[2.5rem] border border-gold/40 bg-gradient-to-br from-white via-cream to-sand/40 p-8 md:p-10 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-ink">
              <Store className="h-3.5 w-3.5 text-amber-800" />
              Flagship Retail Experience
            </span>
            <h2 className="mt-3 font-serif text-3xl text-ink">Visit ShopBee Fashion House</h2>
            <p className="mt-2 text-sm text-charcoal/80 max-w-xl">{settings.address}</p>
            <p className="mt-1 text-xs text-charcoal/60">{settings.opening_hours}</p>
            <p className="mt-3 text-sm font-medium text-ink">
              Direct Desk: <a href={`tel:${settings.phone}`} className="underline text-amber-900 font-bold">{settings.phone}</a> · Concierge: <a href={`mailto:${settings.email}`} className="underline text-amber-900">{settings.email}</a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/explore-store"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-gold hover:text-ink transition shadow-sm"
            >
              Explore 3D Virtual Store
            </Link>
            <Link
              href="/festival-offers"
              className="inline-flex items-center justify-center rounded-full border border-sand bg-white px-6 py-3 text-sm font-semibold text-charcoal hover:bg-sand transition"
            >
              View 20th Anniversary Offers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
