'use client';

export default function StoreMap2D({ layout, selectedId, onSelect }) {
  const depts = layout?.departments || [];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {depts.map((dept) => (
        <button
          key={dept.id}
          type="button"
          onClick={() => onSelect(dept)}
          className={`rounded-2xl border p-4 text-left ${
            selectedId === dept.id ? 'border-gold bg-sand' : 'border-sand bg-white'
          }`}
        >
          <span className="inline-block h-3 w-3 rounded-full" style={{ background: dept.color }} />
          <p className="mt-2 font-medium">{dept.name}</p>
          <p className="mt-1 text-sm text-charcoal/70">{dept.description}</p>
        </button>
      ))}
    </div>
  );
}
