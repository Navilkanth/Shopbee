import ProductGrid from './ProductGrid';
import { getProducts } from '@/lib/api';

export default async function CategoryListing({ slug, title, intro }) {
  const result = await getProducts({ category: slug, pageSize: 24 });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Shop</p>
      <h1 className="mt-2 font-serif text-5xl text-ink">{title}</h1>
      <p className="mt-4 max-w-2xl text-charcoal/80">{intro}</p>
      <p className="mt-3 text-sm text-charcoal/60">{result.meta?.total || 0} pieces</p>
      <div className="mt-10">
        <ProductGrid products={result.data} />
      </div>
    </div>
  );
}
