export default function PlaceholderPage({ title, body }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Coming in a later phase</p>
      <h1 className="mt-3 font-serif text-5xl text-ink">{title}</h1>
      <p className="mt-6 text-lg text-charcoal/80">{body}</p>
    </div>
  );
}
