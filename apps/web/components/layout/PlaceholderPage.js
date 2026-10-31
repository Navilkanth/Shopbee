export default function PlaceholderPage({ title, note }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <h1 className="font-serif text-5xl">{title}</h1>
      <p className="mt-6 rounded-2xl bg-beige p-6 text-charcoal/80">{note}</p>
    </div>
  );
}
