import ProductGrid from './ProductGrid';
import { getProducts } from '@/lib/api';

export default async function CategoryPage({ slug, title, eyebrow }) {
  const { data, meta } = await getProducts({ category: slug, pageSize: 24 });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h1 className="mt-2 font-serif text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-charcoal/70">
        {meta.total} pieces in this collection. Filters and URL-synced sorting expand in Phase 2.
      </p>
      <div className="mt-10">
        <ProductGrid products={data} />
      </div>
    </div>
  );
}
