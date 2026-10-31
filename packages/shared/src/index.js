export const CURRENCY = 'INR';
export const TIMEZONE = 'Asia/Kolkata';
export const LOCALE = 'en-IN';

export function formatInr(amount) {
  const value = typeof amount === 'string' ? Number(amount) : amount;
  return new Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: CURRENCY,
    maximumFractionDigits: 0,
  }).format(value);
}
