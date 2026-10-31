import Image from 'next/image';
import Link from 'next/link';
import { formatInr } from '@/lib/money';

export default function ProductCard({ product }) {
  const image = product.images?.[0];
  const onSale = product.salePrice && product.salePrice < product.regularPrice;

  return (
    <article className="group">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-sand">
          {image ? (
            <Image
              src={image.url}
              alt={image.alt || product.name}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          ) : null}
          {onSale ? (
            <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-medium text-ink">
              Sale
            </span>
          ) : null}
        </div>
        <div className="mt-3">
          <h3 className="text-base font-medium text-ink">{product.name}</h3>
          <p className="mt-1 text-sm text-charcoal/70">{product.brand}</p>
          <p className="mt-2 flex items-center gap-2 text-sm">
            <span className="font-semibold">{formatInr(product.price)}</span>
            {onSale ? (
              <span className="text-charcoal/50 line-through">{formatInr(product.regularPrice)}</span>
            ) : null}
          </p>
        </div>
      </Link>
    </article>
  );
}
