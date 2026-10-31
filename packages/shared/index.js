const { z } = require('zod');

const productQuerySchema = z.object({
  category: z.string().optional(),
  q: z.string().optional(),
  featured: z.enum(['true', 'false']).optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(48).default(12),
  sort: z.enum(['newest', 'price_asc', 'price_desc', 'name']).default('newest'),
});

const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

function formatInr(amount) {
  return inrFormatter.format(Number(amount));
}

module.exports = {
  productQuerySchema,
  formatInr,
};
