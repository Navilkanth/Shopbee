import ProductGrid from '@/components/products/ProductGrid';
import { getProducts } from '@/lib/api';

export const metadata = { title: 'Search' };

export default async function SearchPage({ searchParams }) {
  const sp = await searchParams;
  const q = sp.q || '';
  const result = q ? await getProducts({ q, pageSize: 24 }) : { data: [], meta: { total: 0 } };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="font-serif text-4xl">Search</h1>
      <p className="mt-2 text-charcoal/70">
        {q ? `Results for “${q}” · ${result.meta.total} found` : 'Enter a query from the search overlay.'}
      </p>
      <div className="mt-10">
        <ProductGrid products={result.data} />
      </div>
    </div>
  );
}
