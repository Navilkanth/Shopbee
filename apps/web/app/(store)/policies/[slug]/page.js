import { policyContent } from '@/lib/site-content';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: policyContent[slug]?.title || 'Policy' };
}

export default async function PolicyPage({ params }) {
  const { slug } = await params;
  const page = policyContent[slug];
  if (!page) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">ShopBee policies</p>
      <h1 className="mt-3 font-serif text-5xl">{page.title}</h1>
      {page.paragraphs.map((p) => (
        <p key={p.slice(0, 24)} className="mt-6 text-lg leading-8 text-charcoal/80">
          {p}
        </p>
      ))}
    </div>
  );
}
