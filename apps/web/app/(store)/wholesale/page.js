import { getSettings } from '@/lib/api';
import { wholesaleContent } from '@/lib/site-content';
import { Award, Box, Sparkles, TrendingUp } from 'lucide-react';
import WholesaleForm from './WholesaleForm';

export const metadata = { title: 'Wholesale & Retailer Portal' };

export default async function WholesalePage() {
  const settings = await getSettings();

  const tiers = [
    {
      title: 'Tier 1: Boutique Starter',
      moq: '50 units / order',
      discount: '30% Off Retail',
      perk: 'Mix & match across categories with priority batch dispatch.',
      icon: Box,
    },
    {
      title: 'Tier 2: Regional Showroom',
      moq: '150 units / order',
      discount: '40% Off Retail',
      perk: 'Dedicated account manager, branded packaging options, and GST credit invoice.',
      icon: TrendingUp,
    },
    {
      title: 'Tier 3: Enterprise Distributor',
      moq: '300+ units / order',
      discount: 'Up to 50% Off Retail',
      perk: 'Custom textile dyeing, exclusive territory access, and doorstep cargo logistics.',
      icon: Award,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">For retailers & distributors</p>
        <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">{wholesaleContent.title}</h1>
        <p className="mt-4 text-base text-charcoal/85 leading-relaxed">{wholesaleContent.intro}</p>
      </div>

      {/* Wholesale Tiers */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl text-ink">B2B Volume Pricing Tiers</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.title}
                className="rounded-3xl border border-sand bg-white p-6 shadow-soft transition hover:border-gold/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand/50 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-ink">{tier.title}</h3>
                <p className="mt-1 text-sm font-bold text-gold">{tier.discount}</p>
                <p className="mt-1 text-xs font-medium text-charcoal/60">Minimum Order: {tier.moq}</p>
                <p className="mt-3 text-xs text-charcoal/70 leading-relaxed">{tier.perk}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Form & Contact */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <WholesaleForm />

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-sand bg-sand/30 p-6 md:p-8">
            <h3 className="font-serif text-xl text-ink flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold" /> Why Partner with ShopBee?
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
              {wholesaleContent.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-gold font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-sand bg-ink p-6 text-cream md:p-8">
            <h3 className="font-serif text-xl text-gold">Direct B2B Desk</h3>
            <p className="mt-2 text-xs text-sand/80">
              For rapid catalog availability or immediate production quotes:
            </p>
            <p className="mt-4 text-sm font-semibold">
              Phone:{' '}
              <a className="text-gold underline" href={`tel:${settings.phone}`}>
                {settings.phone}
              </a>
            </p>
            <p className="mt-2 text-sm font-semibold">
              Email:{' '}
              <a className="text-gold underline" href={`mailto:${settings.email}`}>
                {settings.email}
              </a>
            </p>
            <p className="mt-4 text-xs text-sand/60">
              Address: {settings.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
