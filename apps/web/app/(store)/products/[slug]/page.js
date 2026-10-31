import ProductActions from '@/components/products/ProductActions';
import ProductGrid from '@/components/products/ProductGrid';
import { getProduct, getProducts } from '@/lib/api';
import { formatInr } from '@/lib/money';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  return { title: product?.name || 'Product' };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const related = await getProducts({
    category: product.category?.parent?.slug || product.category?.slug,
    pageSize: 4,
  });
  const relatedItems = (related.data || []).filter((p) => p.slug !== product.slug).slice(0, 4);
  const hero = product.images?.[0];
  const onSale = product.salePrice && product.salePrice < product.regularPrice;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <nav className="text-sm text-charcoal/60">
        <Link href="/" className="hover:text-ink">Home</Link>
        {product.category?.parent ? (
          <>
            {' / '}
            <Link href={`/${product.category.parent.slug}`} className="hover:text-ink">
              {product.category.parent.name}
            </Link>
          </>
        ) : null}
        {' / '}
        <span className="text-ink font-medium">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
          {hero ? (
            <Image
              src={hero.url}
              alt={hero.alt || product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          ) : null}
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{product.brand}</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">{product.name}</h1>
          <p className="mt-4 flex items-center gap-3 text-2xl">
            <span className="font-semibold text-ink">{formatInr(product.price)}</span>
            {onSale ? (
              <span className="text-charcoal/50 text-lg line-through">{formatInr(product.regularPrice)}</span>
            ) : null}
            {onSale && (
              <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-ink">
                Save {Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100)}%
              </span>
            )}
          </p>
          <p className="mt-6 max-w-xl text-charcoal/80 leading-relaxed">{product.description}</p>

          <ProductActions product={product} />

          <dl className="mt-10 border-t border-sand pt-6 space-y-3 text-sm">
            <div className="flex">
              <dt className="w-28 text-charcoal/60">SKU</dt>
              <dd className="font-medium text-ink">{product.sku}</dd>
            </div>
            {product.material ? (
              <div className="flex">
                <dt className="w-28 text-charcoal/60">Material</dt>
                <dd className="font-medium text-ink">{product.material}</dd>
              </div>
            ) : null}
            {product.careInstructions ? (
              <div className="flex">
                <dt className="w-28 text-charcoal/60">Care</dt>
                <dd className="font-medium text-ink">{product.careInstructions}</dd>
              </div>
            ) : null}
            <div className="flex">
              <dt className="w-28 text-charcoal/60">Delivery</dt>
              <dd className="font-medium text-emerald-700">Free delivery across India on orders above ₹999</dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-serif text-3xl">You might also love</h2>
        <div className="mt-8">
          <ProductGrid products={relatedItems} />
        </div>
      </section>
    </div>
  );
}
