const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

export function formatInr(amount) {
  if (amount == null) return '—';
  return formatter.format(Number(amount));
}
