import Hero from '@/components/home/Hero';
import ProductGrid from '@/components/products/ProductGrid';
import { getCategories, getProducts, getSettings } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  const [settings, categories, featured] = await Promise.all([
    getSettings(),
    getCategories(),
    getProducts({ featured: 'true', pageSize: 8 }),
  ]);

  return (
    <>
      <Hero imageUrl={settings.hero_image} />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Collections</p>
        <h2 className="mt-2 font-serif text-4xl text-ink">Shop by world</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="group relative min-h-[280px] overflow-hidden rounded-[2rem] bg-sand"
            >
              {cat.imageUrl ? (
                <Image
                  src={cat.imageUrl}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              ) : null}
              <div className="absolute inset-0 bg-ink/35" />
              <span className="absolute bottom-6 left-6 font-serif text-3xl text-cream">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Featured</p>
            <h2 className="mt-2 font-serif text-4xl text-ink">Selected for the floor</h2>
          </div>
          <Link href="/women" className="text-sm underline underline-offset-4">
            View all
          </Link>
        </div>
        <ProductGrid products={featured.data} />
      </section>
    </>
  );
}
