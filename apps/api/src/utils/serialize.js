function money(value) {
  if (value == null) return null;
  return Number(value);
}

function serializeProduct(product) {
  const images = (product.images || []).sort((a, b) => a.sortOrder - b.sortOrder);
  const variants = product.variants || [];
  const inStock = variants.some((v) => (v.inventory?.quantity || 0) > 0);

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    sku: product.sku,
    brand: product.brand,
    regularPrice: money(product.regularPrice),
    salePrice: money(product.salePrice),
    price: money(product.salePrice ?? product.regularPrice),
    material: product.material,
    careInstructions: product.careInstructions,
    gender: product.gender,
    featured: product.featured,
    tags: product.tags ? product.tags.split(',').filter(Boolean) : [],
    category: product.category
      ? {
          id: product.category.id,
          name: product.category.name,
          slug: product.category.slug,
          parent: product.category.parent
            ? {
                id: product.category.parent.id,
                name: product.category.parent.name,
                slug: product.category.parent.slug,
              }
            : null,
        }
      : null,
    images: images.map((img) => ({ url: img.url, alt: img.alt })),
    variants: variants.map((v) => ({
      id: v.id,
      sku: v.sku,
      size: v.size,
      color: v.color,
      colorHex: v.colorHex,
      price: money(v.price),
      quantity: v.inventory?.quantity ?? 0,
    })),
    inStock,
    createdAt: product.createdAt,
  };
}

function serializeCategory(category) {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    imageUrl: category.imageUrl,
    parentId: category.parentId,
    children: (category.children || []).map(serializeCategory),
  };
}

module.exports = { serializeProduct, serializeCategory, money };
