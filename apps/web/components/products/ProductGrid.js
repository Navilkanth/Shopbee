import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  if (!products?.length) {
    return (
      <div className="rounded-3xl border border-dashed border-sand bg-white/50 px-6 py-16 text-center">
        <p className="font-serif text-2xl text-ink">Nothing to show yet</p>
        <p className="mt-2 text-sm text-charcoal/70">
          Start the API and seed MySQL, or check that this category has published products.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
