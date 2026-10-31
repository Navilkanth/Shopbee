const catalogRepo = require('../repositories/catalogRepository');

async function listProducts(req, res) {
  const { category, q, featured, page, pageSize, sort } = req.query;
  const result = await catalogRepo.listProducts({
    category,
    q,
    featured,
    page: page ? Number(page) : 1,
    pageSize: pageSize ? Number(pageSize) : 24,
    sort,
  });
  res.json(result);
}

async function getProductBySlug(req, res) {
  const { slug } = req.params;
  const product = await catalogRepo.getProductBySlug(slug);
  if (!product) {
    const err = new Error('Product not found');
    err.status = 404;
    err.code = 'PRODUCT_NOT_FOUND';
    throw err;
  }
  res.json({ data: product });
}

module.exports = {
  listProducts,
  getProductBySlug,
};
