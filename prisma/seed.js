const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const IMG = {
  men: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
  menShirt: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
  menJeans: 'https://images.unsplash.com/photo-1542272604-787c59506c54?auto=format&fit=crop&w=1200&q=80',
  menKurta: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ce8?auto=format&fit=crop&w=1200&q=80',
  women: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80',
  saree: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
  kurti: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80',
  dress: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80',
  kids: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80',
  kids2: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1200&q=80',
  cosmetics: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80',
  lipstick: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1200&q=80',
  perfume: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80',
  accessories: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80',
  bag: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
  hero: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000&q=80',
};

async function upsertCategory(data) {
  return prisma.category.upsert({
    where: { slug: data.slug },
    update: data,
    create: data,
  });
}

async function createProduct(p) {
  const existing = await prisma.product.findUnique({ where: { slug: p.slug } });
  if (existing) return existing;

  return prisma.product.create({
    data: {
      name: p.name,
      slug: p.slug,
      description: p.description,
      sku: p.sku,
      categoryId: p.categoryId,
      brand: p.brand || 'ShopBee',
      regularPrice: p.regularPrice,
      salePrice: p.salePrice ?? null,
      material: p.material || null,
      careInstructions: p.care || 'Follow the care label. Development seed data — not a live inventory claim.',
      gender: p.gender,
      featured: Boolean(p.featured),
      published: true,
      tags: p.tags || '',
      images: {
        create: (p.images || []).map((url, i) => ({
          url,
          alt: p.name,
          sortOrder: i,
        })),
      },
      variants: {
        create: (p.variants || []).map((v) => ({
          sku: v.sku,
          size: v.size,
          color: v.color,
          colorHex: v.colorHex || null,
          price: v.price ?? null,
          inventory: { create: { quantity: v.qty ?? 12 } },
        })),
      },
    },
  });
}

async function main() {
  const customerRole = await prisma.role.upsert({
    where: { slug: 'customer' },
    update: { name: 'Customer' },
    create: { slug: 'customer', name: 'Customer' },
  });
  await prisma.role.upsert({
    where: { slug: 'super_admin' },
    update: { name: 'Super Administrator' },
    create: { slug: 'super_admin', name: 'Super Administrator' },
  });

  const passwordHash = await bcrypt.hash('ShopBeeDev!123', 10);
  await prisma.user.upsert({
    where: { email: 'dev.customer@shopbee.local' },
    update: {},
    create: {
      email: 'dev.customer@shopbee.local',
      passwordHash,
      firstName: 'Dev',
      lastName: 'Customer',
      roleId: customerRole.id,
    },
  });

  const men = await upsertCategory({
    name: "Men's Fashion",
    slug: 'men',
    description: 'Clothing and essentials for men. Seed catalog for development.',
    imageUrl: IMG.menShirt,
    sortOrder: 1,
  });
  const women = await upsertCategory({
    name: "Women's Fashion",
    slug: 'women',
    description: 'Clothing and essentials for women. Seed catalog for development.',
    imageUrl: IMG.women,
    sortOrder: 2,
  });
  const kids = await upsertCategory({
    name: "Kids' Fashion",
    slug: 'kids',
    description: 'Clothing for children. Seed catalog for development.',
    imageUrl: IMG.kids,
    sortOrder: 3,
  });
  const cosmetics = await upsertCategory({
    name: 'Cosmetics and Beauty',
    slug: 'cosmetics',
    description: 'Skincare, makeup, and personal care. Seed catalog for development.',
    imageUrl: IMG.cosmetics,
    sortOrder: 4,
  });
  const accessories = await upsertCategory({
    name: 'Accessories',
    slug: 'accessories',
    description: 'Bags, jewellery, and finishing pieces. Seed catalog for development.',
    imageUrl: IMG.accessories,
    sortOrder: 5,
  });

  const subcats = [
    ['men-tshirts', 'T-shirts', men.id],
    ['men-shirts', 'Shirts', men.id],
    ['men-jeans', 'Jeans', men.id],
    ['men-ethnic', 'Ethnic wear', men.id],
    ['women-sarees', 'Sarees', women.id],
    ['women-kurtis', 'Kurtis', women.id],
    ['women-dresses', 'Dresses', women.id],
    ['kids-boys', "Boys' clothing", kids.id],
    ['kids-girls', "Girls' clothing", kids.id],
    ['cosmetics-skincare', 'Skincare', cosmetics.id],
    ['cosmetics-makeup', 'Makeup', cosmetics.id],
    ['accessories-bags', 'Bags', accessories.id],
  ];

  const subBySlug = {};
  for (const [slug, name, parentId] of subcats) {
    subBySlug[slug] = await upsertCategory({ name, slug, parentId, sortOrder: 0 });
  }

  const products = [
    {
      name: 'Auric Cotton Crew Tee',
      slug: 'auric-cotton-crew-tee',
      sku: 'SB-M-TEE-001',
      categoryId: subBySlug['men-tshirts'].id,
      regularPrice: 1299,
      salePrice: 999,
      gender: 'MEN',
      featured: true,
      material: '100% cotton',
      tags: 'tshirt,casual,men',
      description: 'Development seed product. Soft crew-neck tee with a clean ShopBee silhouette.',
      images: [IMG.men, IMG.menShirt],
      variants: [
        { sku: 'SB-M-TEE-001-S-BLK', size: 'S', color: 'Black', colorHex: '#151515', qty: 18 },
        { sku: 'SB-M-TEE-001-M-BLK', size: 'M', color: 'Black', colorHex: '#151515', qty: 22 },
        { sku: 'SB-M-TEE-001-L-CRM', size: 'L', color: 'Cream', colorHex: '#F7F3EC', qty: 10 },
      ],
    },
    {
      name: 'Nimbus Oxford Shirt',
      slug: 'nimbus-oxford-shirt',
      sku: 'SB-M-SHT-002',
      categoryId: subBySlug['men-shirts'].id,
      regularPrice: 2499,
      gender: 'MEN',
      featured: true,
      material: 'Oxford cotton',
      tags: 'shirt,formal,men',
      description: 'Development seed product. Structured oxford shirt for work and weekend.',
      images: [IMG.menShirt],
      variants: [
        { sku: 'SB-M-SHT-002-M-WHT', size: 'M', color: 'White', colorHex: '#FFFFFF', qty: 14 },
        { sku: 'SB-M-SHT-002-L-WHT', size: 'L', color: 'White', colorHex: '#FFFFFF', qty: 9 },
      ],
    },
    {
      name: 'Straight Indigo Jeans',
      slug: 'straight-indigo-jeans',
      sku: 'SB-M-JNS-003',
      categoryId: subBySlug['men-jeans'].id,
      regularPrice: 2999,
      salePrice: 2499,
      gender: 'MEN',
      material: 'Denim',
      tags: 'jeans,denim,men',
      description: 'Development seed product. Mid-rise straight jeans in indigo wash.',
      images: [IMG.menJeans],
      variants: [
        { sku: 'SB-M-JNS-003-32-IND', size: '32', color: 'Indigo', colorHex: '#1e3a5f', qty: 8 },
        { sku: 'SB-M-JNS-003-34-IND', size: '34', color: 'Indigo', colorHex: '#1e3a5f', qty: 11 },
      ],
    },
    {
      name: 'Festive Linen Kurta',
      slug: 'festive-linen-kurta',
      sku: 'SB-M-KRT-004',
      categoryId: subBySlug['men-ethnic'].id,
      regularPrice: 3499,
      gender: 'MEN',
      featured: true,
      material: 'Linen blend',
      tags: 'kurta,ethnic,men',
      description: 'Development seed product. Light kurta for festive gatherings.',
      images: [IMG.menKurta],
      variants: [
        { sku: 'SB-M-KRT-004-M-BGE', size: 'M', color: 'Beige', colorHex: '#E8DED0', qty: 7 },
        { sku: 'SB-M-KRT-004-L-BGE', size: 'L', color: 'Beige', colorHex: '#E8DED0', qty: 6 },
      ],
    },
    {
      name: 'Heritage Silk Saree',
      slug: 'heritage-silk-saree',
      sku: 'SB-W-SAR-001',
      categoryId: subBySlug['women-sarees'].id,
      regularPrice: 8999,
      salePrice: 7499,
      gender: 'WOMEN',
      featured: true,
      material: 'Silk blend',
      tags: 'saree,ethnic,women',
      description: 'Development seed product. Editorial drape with gold-thread border styling.',
      images: [IMG.saree, IMG.women],
      variants: [
        { sku: 'SB-W-SAR-001-OS-GLD', size: 'One Size', color: 'Gold', colorHex: '#F4B942', qty: 5 },
      ],
    },
    {
      name: 'Garden Cotton Kurti',
      slug: 'garden-cotton-kurti',
      sku: 'SB-W-KRT-002',
      categoryId: subBySlug['women-kurtis'].id,
      regularPrice: 1899,
      gender: 'WOMEN',
      featured: true,
      material: 'Cotton',
      tags: 'kurti,ethnic,women',
      description: 'Development seed product. Everyday kurti with a relaxed fit.',
      images: [IMG.kurti],
      variants: [
        { sku: 'SB-W-KRT-002-S-CRL', size: 'S', color: 'Coral', colorHex: '#c76b5a', qty: 12 },
        { sku: 'SB-W-KRT-002-M-CRL', size: 'M', color: 'Coral', colorHex: '#c76b5a', qty: 15 },
      ],
    },
    {
      name: 'Midnight Slip Dress',
      slug: 'midnight-slip-dress',
      sku: 'SB-W-DRS-003',
      categoryId: subBySlug['women-dresses'].id,
      regularPrice: 4299,
      gender: 'WOMEN',
      featured: true,
      material: 'Satin',
      tags: 'dress,party,women',
      description: 'Development seed product. Evening slip dress with a fluid line.',
      images: [IMG.dress],
      variants: [
        { sku: 'SB-W-DRS-003-S-BLK', size: 'S', color: 'Black', colorHex: '#151515', qty: 4 },
        { sku: 'SB-W-DRS-003-M-BLK', size: 'M', color: 'Black', colorHex: '#151515', qty: 6 },
      ],
    },
    {
      name: 'Daylight Linen Dress',
      slug: 'daylight-linen-dress',
      sku: 'SB-W-DRS-004',
      categoryId: subBySlug['women-dresses'].id,
      regularPrice: 3299,
      gender: 'WOMEN',
      material: 'Linen',
      tags: 'dress,casual,women',
      description: 'Development seed product. Breathable day dress for warm weather.',
      images: [IMG.women],
      variants: [
        { sku: 'SB-W-DRS-004-M-CRM', size: 'M', color: 'Cream', colorHex: '#F7F3EC', qty: 9 },
      ],
    },
    {
      name: 'Playday Boys Shirt Set',
      slug: 'playday-boys-shirt-set',
      sku: 'SB-K-BYS-001',
      categoryId: subBySlug['kids-boys'].id,
      regularPrice: 1599,
      gender: 'KIDS',
      featured: true,
      tags: 'kids,boys',
      description: 'Development seed product. Coordinated shirt set for everyday wear.',
      images: [IMG.kids],
      variants: [
        { sku: 'SB-K-BYS-001-5-NVY', size: '5-6Y', color: 'Navy', colorHex: '#1b2a4a', qty: 10 },
        { sku: 'SB-K-BYS-001-7-NVY', size: '7-8Y', color: 'Navy', colorHex: '#1b2a4a', qty: 8 },
      ],
    },
    {
      name: 'Ribbon Girls Frock',
      slug: 'ribbon-girls-frock',
      sku: 'SB-K-GRL-002',
      categoryId: subBySlug['kids-girls'].id,
      regularPrice: 1799,
      gender: 'KIDS',
      featured: true,
      tags: 'kids,girls',
      description: 'Development seed product. Soft frock with a simple ribbon detail.',
      images: [IMG.kids2],
      variants: [
        { sku: 'SB-K-GRL-002-4-PNK', size: '4-5Y', color: 'Blush', colorHex: '#e8c4c4', qty: 7 },
      ],
    },
    {
      name: 'Dewdrop Gel Cleanser',
      slug: 'dewdrop-gel-cleanser',
      sku: 'SB-C-SKN-001',
      categoryId: subBySlug['cosmetics-skincare'].id,
      regularPrice: 899,
      gender: 'UNISEX',
      featured: true,
      tags: 'skincare,cosmetics',
      description: 'Development seed product. Everyday gel cleanser. Cosmetic claims are placeholder only.',
      images: [IMG.cosmetics],
      variants: [
        { sku: 'SB-C-SKN-001-100', size: '100ml', color: 'Clear', colorHex: '#F7F3EC', qty: 30 },
      ],
    },
    {
      name: 'Gilded Satin Lip Colour',
      slug: 'gilded-satin-lip-colour',
      sku: 'SB-C-LIP-002',
      categoryId: subBySlug['cosmetics-makeup'].id,
      regularPrice: 799,
      gender: 'UNISEX',
      tags: 'makeup,lips,cosmetics',
      description: 'Development seed product. Satin lip colour in a warm gold-rose tone.',
      images: [IMG.lipstick],
      variants: [
        { sku: 'SB-C-LIP-002-ROSE', size: '3.5g', color: 'Rose', colorHex: '#b76e79', qty: 20 },
      ],
    },
    {
      name: 'Citrus Veil Eau de Parfum',
      slug: 'citrus-veil-edp',
      sku: 'SB-C-FRG-003',
      categoryId: cosmetics.id,
      regularPrice: 2499,
      gender: 'UNISEX',
      featured: true,
      tags: 'fragrance,cosmetics',
      description: 'Development seed product. Citrus-forward fragrance sample listing.',
      images: [IMG.perfume],
      variants: [
        { sku: 'SB-C-FRG-003-50', size: '50ml', color: 'Amber', colorHex: '#F4B942', qty: 12 },
      ],
    },
    {
      name: 'Arc Leather Crossbody',
      slug: 'arc-leather-crossbody',
      sku: 'SB-A-BAG-001',
      categoryId: subBySlug['accessories-bags'].id,
      regularPrice: 3999,
      salePrice: 3299,
      gender: 'UNISEX',
      featured: true,
      tags: 'bag,accessories',
      description: 'Development seed product. Compact crossbody with gold-tone hardware.',
      images: [IMG.bag, IMG.accessories],
      variants: [
        { sku: 'SB-A-BAG-001-OS-BLK', size: 'One Size', color: 'Black', colorHex: '#151515', qty: 6 },
      ],
    },
    {
      name: 'Halo Hoop Earrings',
      slug: 'halo-hoop-earrings',
      sku: 'SB-A-JWL-002',
      categoryId: accessories.id,
      regularPrice: 1299,
      gender: 'WOMEN',
      tags: 'jewellery,accessories',
      description: 'Development seed product. Lightweight hoops with a polished finish.',
      images: [IMG.accessories],
      variants: [
        { sku: 'SB-A-JWL-002-OS-GLD', size: 'One Size', color: 'Gold', colorHex: '#F4B942', qty: 16 },
      ],
    },
    {
      name: 'Studio Canvas Sneakers',
      slug: 'studio-canvas-sneakers',
      sku: 'SB-A-SHOE-003',
      categoryId: accessories.id,
      regularPrice: 2799,
      gender: 'UNISEX',
      tags: 'shoes,accessories',
      description: 'Development seed product. Everyday canvas sneakers.',
      images: [IMG.menJeans],
      variants: [
        { sku: 'SB-A-SHOE-003-8-WHT', size: 'UK 8', color: 'White', colorHex: '#FFFFFF', qty: 5 },
        { sku: 'SB-A-SHOE-003-9-WHT', size: 'UK 9', color: 'White', colorHex: '#FFFFFF', qty: 5 },
      ],
    },
  ];

  for (const p of products) {
    await createProduct(p);
  }

  const settings = {
    store_name: 'ShopBee',
    tagline: 'Shop Your Style. Explore Beyond Fashion.',
    phone: '9087035510',
    email: 'shopbee@gmail.com',
    opening_hours: 'Monday–Saturday 10:00 AM – 8:30 PM · Sunday 11:00 AM – 7:00 PM (Asia/Kolkata)',
    address: 'ShopBee Fashion House, Ground Floor, MG Road, Coimbatore, Tamil Nadu 641001',
    social_instagram: '',
    social_facebook: '',
    hero_image: IMG.hero,
  };

  for (const [key, value] of Object.entries(settings)) {
    await prisma.storeSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });
  }

  const storeData = require('../apps/api/data/store.json');
  for (const floor of storeData.layout.floors) {
    const row = await prisma.storeFloor.upsert({
      where: { id: floor.id },
      update: { name: floor.name, level: floor.level },
      create: { id: floor.id, name: floor.name, level: floor.level },
    });
    for (const dept of storeData.layout.departments.filter((d) => d.floorId === floor.id)) {
      await prisma.storeDepartment.upsert({
        where: { floorId_slug: { floorId: row.id, slug: dept.slug } },
        update: {
          name: dept.name,
          x: dept.x,
          z: dept.z,
          width: dept.width,
          depth: dept.depth,
          height: dept.height,
          color: dept.color,
          categorySlug: dept.categorySlug,
          description: dept.description,
        },
        create: {
          id: dept.id,
          floorId: row.id,
          name: dept.name,
          slug: dept.slug,
          x: dept.x,
          z: dept.z,
          width: dept.width,
          depth: dept.depth,
          height: dept.height,
          color: dept.color,
          categorySlug: dept.categorySlug,
          description: dept.description,
        },
      });
    }
  }

  console.log('ShopBee seed complete (development data only).');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
