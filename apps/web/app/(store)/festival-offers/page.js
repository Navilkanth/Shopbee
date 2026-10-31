import ProductGrid from '@/components/products/ProductGrid';
import { getOffers, getProducts } from '@/lib/api';
import FestivalCoupons from './FestivalCoupons';

export const metadata = { title: 'Festival Offers & Grand Bazaar' };

export default async function FestivalPage() {
  const [offers, productsRes] = await Promise.all([
    getOffers(),
    getProducts({ pageSize: 24 }),
  ]);

  const festiveProducts = (productsRes.data || []).filter(
    (p) => p.salePrice || p.featured,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      {/* Festive Hero Banner */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-ink via-[#2a1e1b] to-ink px-6 py-16 text-cream shadow-soft md:px-12 md:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-gold font-semibold">Festive Season Special</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl text-cream">
            The Grand Festive Bazaar
          </h1>
          <p className="mt-4 text-base text-cream/80 md:text-lg">
            Celebrate festive traditions with up to 30% off on handloom Banarasi silk sarees, embroidered royal kurtas, artisanal cosmetics, and fine accessories.
          </p>
        </div>
        <div className="absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      {/* Interactive Coupon Codes */}
      <section className="mt-14">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Exclusive Perks</p>
          <h2 className="mt-1 font-serif text-3xl text-ink">Active Coupon Codes</h2>
          <p className="mt-1 text-sm text-charcoal/70">Click any code to copy and apply directly at checkout.</p>
        </div>
        <FestivalCoupons offers={offers} />
      </section>

      {/* Featured Festive Deals */}
      <section className="mt-20">
        <div className="mb-8 flex items-baseline justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Curated Catalog</p>
            <h2 className="mt-1 font-serif text-3xl text-ink">Festive Collection Deals</h2>
          </div>
          <span className="text-sm text-charcoal/60">{festiveProducts.length} items on sale</span>
        </div>
        <ProductGrid products={festiveProducts} />
      </section>
    </div>
  );
}
