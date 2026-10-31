const fs = require('fs/promises');
const path = require('path');
const { prisma, isDbAvailable } = require('../config/prisma');

const CATALOG_PATH = path.resolve(__dirname, '../../data/catalog.json');
const ORDERS_PATH = path.resolve(__dirname, '../../data/orders.json');
const WHOLESALE_PATH = path.resolve(__dirname, '../../data/wholesale.json');
const NEWSLETTER_PATH = path.resolve(__dirname, '../../data/newsletter.json');

let inMemoryCatalog = null;

async function loadCatalogFile() {
  if (inMemoryCatalog) return inMemoryCatalog;
  try {
    const raw = await fs.readFile(CATALOG_PATH, 'utf8');
    inMemoryCatalog = JSON.parse(raw);
    return inMemoryCatalog;
  } catch {
    return { products: [] };
  }
}

async function getCategories() {
  if (await isDbAvailable()) {
    try {
      const roots = await prisma.category.findMany({
        where: { parentId: null },
        orderBy: { sortOrder: 'asc' },
        include: {
          children: { orderBy: { name: 'asc' } },
        },
      });
      if (roots.length) {
        const { serializeCategory } = require('../utils/serialize');
        return roots.map(serializeCategory);
      }
    } catch {
      /* fallback to catalog categories */
    }
  }

  return [
    {
      id: 'men',
      name: "Men's Fashion",
      slug: 'men',
      imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
      children: [],
    },
    {
      id: 'women',
      name: "Women's Fashion",
      slug: 'women',
      imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80',
      children: [],
    },
    {
      id: 'kids',
      name: "Kids' Fashion",
      slug: 'kids',
      imageUrl: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80',
      children: [],
    },
    {
      id: 'cosmetics',
      name: 'Cosmetics & Beauty',
      slug: 'cosmetics',
      imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80',
      children: [],
    },
    {
      id: 'accessories',
      name: 'Accessories',
      slug: 'accessories',
      imageUrl: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80',
      children: [],
    },
  ];
}

async function listProducts({ category, q, featured, page = 1, pageSize = 24, sort } = {}) {
  if (await isDbAvailable()) {
    try {
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
        if (cat) {
          where.categoryId = { in: [cat.id, ...cat.children.map((c) => c.id)] };
        }
      }

      const skip = (Number(page) - 1) * Number(pageSize);
      const take = Number(pageSize);

      const [total, rows] = await Promise.all([
        prisma.product.count({ where }),
        prisma.product.findMany({
          where,
          skip,
          take,
          include: {
            images: true,
            variants: { include: { inventory: true } },
            category: { include: { parent: true } },
          },
        }),
      ]);

      if (rows.length) {
        const { serializeProduct } = require('../utils/serialize');
        return {
          data: rows.map(serializeProduct),
          meta: {
            page: Number(page),
            pageSize: take,
            total,
            totalPages: Math.ceil(total / take) || 1,
          },
        };
      }
    } catch {
      /* fallback to JSON catalog */
    }
  }

  const catalog = await loadCatalogFile();
  let list = [...catalog.products];

  if (featured === 'true') {
    list = list.filter((p) => p.featured);
  }

  if (q) {
    const queryStr = String(q).toLowerCase();
    list = list.filter((p) => {
      const hay = `${p.name} ${p.sku} ${p.brand || ''} ${p.description || ''}`.toLowerCase();
      return hay.includes(queryStr);
    });
  }

  if (category) {
    list = list.filter((p) => {
      const slugs = [p.category?.slug, p.category?.parent?.slug].filter(Boolean);
      return slugs.includes(category);
    });
  }

  if (sort === 'price_asc') {
    list.sort((a, b) => (a.price || a.regularPrice) - (b.price || b.regularPrice));
  } else if (sort === 'price_desc') {
    list.sort((a, b) => (b.price || b.regularPrice) - (a.price || a.regularPrice));
  } else if (sort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  const total = list.length;
  const p = Number(page) || 1;
  const ps = Number(pageSize) || 24;
  const paginated = list.slice((p - 1) * ps, p * ps);

  return {
    data: paginated,
    meta: {
      page: p,
      pageSize: ps,
      total,
      totalPages: Math.ceil(total / ps) || 1,
    },
  };
}

async function getProductBySlug(slug) {
  if (await isDbAvailable()) {
    try {
      const row = await prisma.product.findUnique({
        where: { slug },
        include: {
          images: true,
          variants: { include: { inventory: true } },
          category: { include: { parent: true } },
        },
      });
      if (row) {
        const { serializeProduct } = require('../utils/serialize');
        return serializeProduct(row);
      }
    } catch {
      /* fallback to file */
    }
  }

  const catalog = await loadCatalogFile();
  return catalog.products.find((p) => p.slug === slug) || null;
}

async function saveRecord(filePath, record) {
  try {
    let items = [];
    try {
      const raw = await fs.readFile(filePath, 'utf8');
      items = JSON.parse(raw);
    } catch {
      items = [];
    }
    items.unshift(record);
    await fs.writeFile(filePath, `${JSON.stringify(items, null, 2)}\n`, 'utf8');
    return items;
  } catch {
    return [record];
  }
}

async function saveNewsletter(email) {
  return saveRecord(NEWSLETTER_PATH, { email, subscribedAt: new Date().toISOString() });
}

async function saveWholesaleInquiry(data) {
  return saveRecord(WHOLESALE_PATH, { ...data, receivedAt: new Date().toISOString() });
}

async function saveOrder(order) {
  return saveRecord(ORDERS_PATH, { ...order, savedAt: new Date().toISOString() });
}

module.exports = {
  getCategories,
  listProducts,
  getProductBySlug,
  saveNewsletter,
  saveWholesaleInquiry,
  saveOrder,
};

