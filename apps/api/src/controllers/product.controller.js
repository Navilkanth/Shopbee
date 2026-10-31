const { z } = require('zod');
const prisma = require('../config/prisma');
const asyncHandler = require('../utils/asyncHandler');
const { serializeProduct } = require('../utils/serialize');

const querySchema = z.object({
  category: z.string().optional(),
  q: z.string().optional(),
  featured: z.enum(['true', 'false']).optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(48).default(12),
  sort: z.enum(['newest', 'price_asc', 'price_desc', 'name']).default('newest'),
});

const include = {
  images: true,
  variants: true,
  category: { include: { parent: true } },
};

exports.listProducts = asyncHandler(async (req, res) => {
  const parsed = querySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: 'Invalid query', details: parsed.error.flatten() },
    });
  }

  const { category, q, featured, page, pageSize, sort } = parsed.data;
  const where = { published: true };

  if (featured === 'true') where.featured = true;
  if (q) {
    where.OR = [
      { name: { contains: q } },
      { sku: { contains: q } },
      { tags: { contains: q } },
      { brand: { contains: q } },
    ];
  }
  if (category) {
    const cat = await prisma.category.findUnique({
      where: { slug: category },
      include: { children: true },
    });
    if (!cat) {
      return res.json({ data: [], meta: { page, pageSize, total: 0, pageCount: 0 } });
    }
    const ids = [cat.id, ...cat.children.map((c) => c.id)];
    where.categoryId = { in: ids };
  }

  const orderBy =
    sort === 'price_asc'
      ? { regularPrice: 'asc' }
      : sort === 'price_desc'
        ? { regularPrice: 'desc' }
        : sort === 'name'
          ? { name: 'asc' }
          : { createdAt: 'desc' };

  const [total, products] = await Promise.all([
    prisma.product.count({ where }),
    prisma.product.findMany({
      where,
      include,
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
  ]);

  res.json({
    data: products.map(serializeProduct),
    meta: {
      page,
      pageSize,
      total,
      pageCount: Math.ceil(total / pageSize),
    },
  });
});

exports.getProduct = asyncHandler(async (req, res) => {
  const product = await prisma.product.findFirst({
    where: { slug: req.params.slug, published: true },
    include,
  });
  if (!product) {
    return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Product not found' } });
  }
  res.json({ data: serializeProduct(product) });
});
