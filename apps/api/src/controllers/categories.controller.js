const catalogRepo = require('../repositories/catalogRepository');

async function listCategories(_req, res) {
  const categories = await catalogRepo.getCategories();
  res.json({ data: categories });
}

async function getCategoryProducts(req, res) {
  const { slug } = req.params;
  const page = Number(req.query.page || 1);
  const pageSize = Number(req.query.pageSize || 24);
  const result = await catalogRepo.listProducts({ category: slug, page, pageSize });
  res.json(result);
}

module.exports = {
  listCategories,
  getCategoryProducts,
};
