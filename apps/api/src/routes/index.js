const { Router } = require('express');
const { asyncHandler } = require('../utils/asyncHandler');
const health = require('../controllers/health.controller');
const categories = require('../controllers/categories.controller');
const products = require('../controllers/products.controller');
const store = require('../controllers/store.controller');
const features = require('../controllers/features.controller');

const router = Router();

// System
router.get('/health', health.getHealth);

// Store catalog
router.get('/categories', asyncHandler(categories.listCategories));
router.get('/categories/:slug/products', asyncHandler(categories.getCategoryProducts));
router.get('/products', asyncHandler(products.listProducts));
router.get('/products/:slug', asyncHandler(products.getProductBySlug));

// Store location & 3D layout
router.get('/store/settings', asyncHandler(store.getSettings));
router.get('/store/layout', asyncHandler(store.getLayout));
router.get(
  '/store/floors',
  asyncHandler(async (_req, res) => {
    const layout = await require('../repositories/storeRepository').getLayout();
    res.json({ data: layout.floors });
  }),
);
router.get(
  '/store/departments',
  asyncHandler(async (_req, res) => {
    const layout = await require('../repositories/storeRepository').getLayout();
    res.json({ data: layout.departments });
  }),
);

// Advanced Features & Functions
router.get('/offers', asyncHandler(features.getOffers));
router.post('/newsletter', asyncHandler(features.subscribeNewsletter));
router.post('/wholesale', asyncHandler(features.submitWholesale));
router.post('/checkout', asyncHandler(features.checkout));
router.get('/account', asyncHandler(features.getAccount));

module.exports = { router };
