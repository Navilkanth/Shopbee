import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">404</p>
      <h1 className="mt-3 font-serif text-5xl text-ink">This piece isn&apos;t here</h1>
      <Link href="/" className="mt-8 rounded-full bg-ink px-8 py-3 text-sm font-semibold text-cream transition hover:bg-ink/90">
        Back to ShopBee
      </Link>
    </div>
  );
}
