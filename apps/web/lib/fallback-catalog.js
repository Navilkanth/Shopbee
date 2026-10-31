const IMG = {
  men: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
  menShirt: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
  menJeans: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80',
  menKurta: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1200&q=80',
  menBlazer: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1200&q=80',
  menLinen: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80',
  menChino: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=80',
  women: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80',
  saree: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
  saree2: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80',
  kurti: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80',
  dress: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80',
  lehenga: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
  coord: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  kids: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80',
  kids2: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1200&q=80',
  kidsKurta: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1200&q=80',
  kidsDress: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=1200&q=80',
  kidsRomper: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1200&q=80',
  kidsDungaree: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80',
  cosmetics: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80',
  lipstick: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1200&q=80',
  perfume: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80',
  serum: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
  sunscreen: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
  oil: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=80',
  accessories: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80',
  bag: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
  jewelry: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
  sunglasses: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
  watch: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80',
  scarf: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80',
  hero: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000&q=80',
};

export const fallbackSettings = {
  store_name: 'ShopBee',
  tagline: 'Shop Your Style. Explore Beyond Fashion.',
  about_placeholder:
    'ShopBee is an artisanal fashion house blending contemporary Indian aesthetics with international tailoring standards.',
  address: 'ShopBee Flagship Fashion House, No. 42 Anna Salai, Thousand Lights, Chennai, Tamil Nadu 600002',
  phone: '9087035510',
  email: 'shopbee@gmail.com',
  opening_hours: 'Monday–Saturday 10:00 AM – 8:30 PM · Sunday 11:00 AM – 7:00 PM (Asia/Kolkata)',
  hero_image: IMG.hero,
};

export const fallbackCategories = [
  { id: 'men', name: "Men's Fashion", slug: 'men', imageUrl: IMG.menShirt, children: [] },
  { id: 'women', name: "Women's Fashion", slug: 'women', imageUrl: IMG.women, children: [] },
  { id: 'kids', name: "Kids' Fashion", slug: 'kids', imageUrl: IMG.kids, children: [] },
  { id: 'cosmetics', name: 'Cosmetics & Beauty', slug: 'cosmetics', imageUrl: IMG.cosmetics, children: [] },
  { id: 'accessories', name: 'Accessories', slug: 'accessories', imageUrl: IMG.accessories, children: [] },
];

function product(partial) {
  return {
    brand: 'ShopBee',
    featured: false,
    tags: [],
    inStock: true,
    variants: [
      { id: 'v1', sku: `${partial.sku}-S`, size: 'S', color: 'Default', quantity: 12 },
      { id: 'v2', sku: `${partial.sku}-M`, size: 'M', color: 'Default', quantity: 16 },
      { id: 'v3', sku: `${partial.sku}-L`, size: 'L', color: 'Default', quantity: 10 },
      { id: 'v4', sku: `${partial.sku}-XL`, size: 'XL', color: 'Default', quantity: 8 },
    ],
    ...partial,
    price: partial.salePrice ?? partial.regularPrice,
  };
}

export const fallbackProducts = [
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-TEE-001-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-TEE-001-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-TEE-001-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-TEE-001-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m1",
    "name": "Auric Cotton Crew Tee",
    "slug": "auric-cotton-crew-tee",
    "sku": "SB-M-TEE-001",
    "regularPrice": 1299,
    "salePrice": 999,
    "description": "Ultra-soft combed 240 GSM organic cotton crew t-shirt tailored for all-day comfort and breathability.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
        "alt": "Auric Cotton Crew Tee"
      }
    ],
    "material": "100% Pima Organic Cotton",
    "careInstructions": "Machine wash cold inside out, tumble dry low.",
    "category": {
      "slug": "men-tshirts",
      "name": "T-shirts",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 999
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-SHT-002-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-SHT-002-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-SHT-002-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-SHT-002-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m2",
    "name": "Nimbus Oxford Shirt",
    "slug": "nimbus-oxford-shirt",
    "sku": "SB-M-SHT-002",
    "regularPrice": 2499,
    "description": "Timeless pinpoint Oxford cotton shirt with button-down collar, Mother of Pearl buttons, and tailored silhouette.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
        "alt": "Nimbus Oxford Shirt"
      }
    ],
    "material": "Pure Combed Cotton Oxford Weave",
    "careInstructions": "Gentle warm machine wash, warm iron.",
    "category": {
      "slug": "men-shirts",
      "name": "Shirts",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 2499
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-JNS-003-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-JNS-003-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-JNS-003-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-JNS-003-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m3",
    "name": "Indigo Selvedge Raw Denim",
    "slug": "indigo-selvedge-raw-denim",
    "sku": "SB-M-JNS-003",
    "regularPrice": 3999,
    "salePrice": 3499,
    "description": "Authentic 14oz Japanese red-line selvedge denim in deep indigo rinse, cut in a relaxed tapered leg.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
        "alt": "Indigo Selvedge Raw Denim"
      }
    ],
    "material": "100% Cotton Selvedge Denim",
    "careInstructions": "Wash sparingly inside out in cold water. Hang dry.",
    "category": {
      "slug": "men-jeans",
      "name": "Jeans",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 3499
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-ETH-004-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-ETH-004-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-ETH-004-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-ETH-004-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m4",
    "name": "Royal Chanderi Silk Kurta",
    "slug": "royal-chanderi-silk-kurta",
    "sku": "SB-M-ETH-004",
    "regularPrice": 3499,
    "salePrice": 2899,
    "description": "Heritage festive kurta crafted in fine Chanderi silk with subtle tonal embroidery on the mandarin placket.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1200&q=80",
        "alt": "Royal Chanderi Silk Kurta"
      }
    ],
    "material": "Chanderi Silk Blend (Cotton Lining)",
    "careInstructions": "Dry clean recommended.",
    "category": {
      "slug": "men-ethnic",
      "name": "Ethnic Wear",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 2899
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-BLZ-005-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-BLZ-005-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-BLZ-005-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-BLZ-005-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m5",
    "name": "Tailored Linen Notch Blazer",
    "slug": "tailored-linen-notch-blazer",
    "sku": "SB-M-BLZ-005",
    "regularPrice": 5999,
    "salePrice": 4999,
    "description": "Unstructured single-breasted blazer woven from Normandy flax linen. Breathable elegance for destination weddings.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1200&q=80",
        "alt": "Tailored Linen Blazer"
      }
    ],
    "material": "100% European Flax Linen",
    "careInstructions": "Dry clean only. Steam press.",
    "category": {
      "slug": "men-jackets",
      "name": "Blazers & Jackets",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 4999
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-SHT-006-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-SHT-006-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-SHT-006-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-SHT-006-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m6",
    "name": "Flax Linen Resort Camp Shirt",
    "slug": "flax-linen-resort-camp-shirt",
    "sku": "SB-M-SHT-006",
    "regularPrice": 2199,
    "description": "Relaxed cuban collar resort shirt in breathable enzyme-washed linen for breezy summer afternoons.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80",
        "alt": "Flax Linen Resort Shirt"
      }
    ],
    "material": "100% Washed Linen",
    "careInstructions": "Machine wash gentle, hang in shade.",
    "category": {
      "slug": "men-shirts",
      "name": "Shirts",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 2199
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-TRS-007-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-TRS-007-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-TRS-007-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-TRS-007-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m7",
    "name": "Pleated Savile Chino Trousers",
    "slug": "pleated-savile-chino-trousers",
    "sku": "SB-M-TRS-007",
    "regularPrice": 2799,
    "salePrice": 2299,
    "description": "Double-pleated tailored chinos with extension waistband and side adjusters crafted from compact cotton twill.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=80",
        "alt": "Pleated Chinos"
      }
    ],
    "material": "98% Cotton Twill, 2% Elastane",
    "careInstructions": "Warm machine wash, medium iron.",
    "category": {
      "slug": "men-trousers",
      "name": "Trousers",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 2299
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-SUT-008-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-SUT-008-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-SUT-008-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-SUT-008-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m8",
    "name": "Sartorial Charcoal Wool Suit",
    "slug": "sartorial-charcoal-wool-suit",
    "sku": "SB-M-SUT-008",
    "regularPrice": 12999,
    "salePrice": 10999,
    "description": "Two-piece tailored two-button suit cut from Super 120s Australian merino wool with canvas chest construction.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80",
        "alt": "Charcoal Wool Suit"
      }
    ],
    "material": "100% Super 120s Wool, Bemberg Cupro Lining",
    "careInstructions": "Specialist dry clean only.",
    "category": {
      "slug": "men-jackets",
      "name": "Blazers & Jackets",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 10999
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-JKT-009-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-JKT-009-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-JKT-009-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-JKT-009-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m9",
    "name": "Shearling Trim Aviator Bomber",
    "slug": "shearling-trim-aviator-bomber",
    "sku": "SB-M-JKT-009",
    "regularPrice": 6499,
    "salePrice": 5499,
    "description": "Water-resistant coated twill aviator jacket featuring plush faux-shearling collar and ribbed storm cuffs.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
        "alt": "Aviator Bomber Jacket"
      }
    ],
    "material": "DWR Heavyweight Twill, Sherpa Lining",
    "careInstructions": "Spot clean or dry clean.",
    "category": {
      "slug": "men-jackets",
      "name": "Blazers & Jackets",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 5499
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-POL-010-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-POL-010-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-POL-010-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-POL-010-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m10",
    "name": "Supima Cotton Pique Polo",
    "slug": "supima-cotton-pique-polo",
    "sku": "SB-M-POL-010",
    "regularPrice": 1799,
    "salePrice": 1499,
    "description": "Refined tennis polo knit from lustrous American Supima cotton with mother-of-pearl collar buttons.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=80",
        "alt": "Supima Pique Polo"
      }
    ],
    "material": "100% Long-Staple Supima Cotton",
    "careInstructions": "Machine wash cold with like colors.",
    "category": {
      "slug": "men-tshirts",
      "name": "T-shirts",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 1499
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-SWT-011-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-M-SWT-011-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-M-SWT-011-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-M-SWT-011-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "m11",
    "name": "Merino Wool Knit Sweater",
    "slug": "merino-wool-knit-sweater",
    "sku": "SB-M-SWT-011",
    "regularPrice": 3299,
    "description": "Lightweight gauge 12 pure merino crewneck sweater offering exceptional thermal regulation and ultra-soft touch.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80",
        "alt": "Merino Knit Sweater"
      }
    ],
    "material": "100% Extra-fine Merino Wool",
    "careInstructions": "Hand wash cold or wool cycle. Dry flat.",
    "category": {
      "slug": "men-tshirts",
      "name": "T-shirts",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 3299
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-SAR-001-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-SAR-001-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-SAR-001-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-SAR-001-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w1",
    "name": "Heritage Banarasi Katan Silk Saree",
    "slug": "heritage-banarasi-katan-silk-saree",
    "sku": "SB-W-SAR-001",
    "regularPrice": 8999,
    "salePrice": 7499,
    "description": "Exquisite handwoven Varanasi Katan silk saree adorned with intricate kadwa gold zari flora motifs and ornate pallu.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
        "alt": "Banarasi Katan Silk Saree"
      }
    ],
    "material": "Pure Handloom Silk, Gold Zari Weave",
    "careInstructions": "Dry clean only. Store wrapped in muslin cloth.",
    "category": {
      "slug": "women-sarees",
      "name": "Sarees",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 7499
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-SAR-002-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-SAR-002-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-SAR-002-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-SAR-002-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w2",
    "name": "Chanderi Zari Woven Festive Saree",
    "slug": "chanderi-zari-woven-festive-saree",
    "sku": "SB-W-SAR-002",
    "regularPrice": 5999,
    "salePrice": 4999,
    "description": "Feather-light Chanderi saree blending sheer organza silk texture with shimmering zari borders and geometric booties.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
        "alt": "Chanderi Zari Saree"
      }
    ],
    "material": "Chanderi Silk & Cotton Warp",
    "careInstructions": "Dry clean only.",
    "category": {
      "slug": "women-sarees",
      "name": "Sarees",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 4999
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-KRT-003-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-KRT-003-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-KRT-003-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-KRT-003-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w3",
    "name": "Lucknowi Chikankari Modal Kurti",
    "slug": "lucknowi-chikankari-modal-kurti",
    "sku": "SB-W-KRT-003",
    "regularPrice": 2899,
    "salePrice": 2299,
    "description": "Masterfully hand-embroidered shadow work Chikankari in ultra-soft modal fabric with delicate pearl buttons.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80",
        "alt": "Lucknowi Chikankari Kurti"
      }
    ],
    "material": "Eco Modal Cotton",
    "careInstructions": "Gentle hand wash or delicate cycle.",
    "category": {
      "slug": "women-kurtis",
      "name": "Kurtis & Sets",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 2299
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-DRS-004-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-DRS-004-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-DRS-004-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-DRS-004-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w4",
    "name": "Crimson Georgette Wrap Dress",
    "slug": "crimson-georgette-wrap-dress",
    "sku": "SB-W-DRS-004",
    "regularPrice": 3499,
    "salePrice": 2799,
    "description": "Flowy midi wrap dress with flounce flutter sleeves and self-tie sash in radiant crimson georgette.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
        "alt": "Crimson Wrap Dress"
      }
    ],
    "material": "Polyester Micro-Georgette (Lined)",
    "careInstructions": "Machine wash delicate, line dry.",
    "category": {
      "slug": "women-dresses",
      "name": "Dresses",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 2799
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-LHG-005-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-LHG-005-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-LHG-005-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-LHG-005-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w5",
    "name": "Bridal Raw Silk Zardozi Lehenga",
    "slug": "bridal-raw-silk-zardozi-lehenga",
    "sku": "SB-W-LHG-005",
    "regularPrice": 18999,
    "salePrice": 15999,
    "description": "Regal 16-kali flared lehenga crafted in mulberry raw silk featuring meticulous zardozi bullion embroidery and net dupatta.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80",
        "alt": "Bridal Raw Silk Lehenga"
      }
    ],
    "material": "100% Pure Raw Silk, Zardozi Work",
    "careInstructions": "Specialist bridal dry clean only.",
    "category": {
      "slug": "women-ethnic",
      "name": "Lehengas & Bridal",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 15999
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-CRD-006-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-CRD-006-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-CRD-006-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-CRD-006-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w6",
    "name": "Pastel Sorbet Linen Co-ord Set",
    "slug": "pastel-sorbet-linen-coord-set",
    "sku": "SB-W-CRD-006",
    "regularPrice": 3899,
    "salePrice": 3199,
    "description": "Contemporary two-piece co-ord set pairing an oversized linen tunic shirt with matching wide-leg trousers.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
        "alt": "Pastel Linen Co-ord"
      }
    ],
    "material": "100% French Flax Linen",
    "careInstructions": "Gentle wash inside out, warm iron.",
    "category": {
      "slug": "women-kurtis",
      "name": "Kurtis & Sets",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 3199
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-BLZ-007-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-BLZ-007-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-BLZ-007-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-BLZ-007-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w7",
    "name": "Oversized Ivory Crepe Blazer",
    "slug": "oversized-ivory-crepe-blazer",
    "sku": "SB-W-BLZ-007",
    "regularPrice": 4799,
    "salePrice": 3999,
    "description": "Relaxed modern tailored double-breasted blazer with structured padded shoulders and welt pockets.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
        "alt": "Ivory Crepe Blazer"
      }
    ],
    "material": "Textured Poly-Viscose Crepe",
    "careInstructions": "Dry clean only.",
    "category": {
      "slug": "women-dresses",
      "name": "Dresses",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 3999
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-DRS-008-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-DRS-008-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-DRS-008-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-DRS-008-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w8",
    "name": "Tiered Meadow Floral Maxi Dress",
    "slug": "tiered-meadow-floral-maxi-dress",
    "sku": "SB-W-DRS-008",
    "regularPrice": 3699,
    "description": "Airy bohemian tiered maxi silhouette featuring meadow floral prints, smocked bodice, and adjustable tie straps.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=80",
        "alt": "Floral Maxi Dress"
      }
    ],
    "material": "100% Rayon Chiffon",
    "careInstructions": "Cold hand wash, dry in shade.",
    "category": {
      "slug": "women-dresses",
      "name": "Dresses",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 3699
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-SKT-009-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-SKT-009-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-SKT-009-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-SKT-009-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w9",
    "name": "Sunburst Pleated Georgette Midi Skirt",
    "slug": "sunburst-pleated-georgette-midi-skirt",
    "sku": "SB-W-SKT-009",
    "regularPrice": 2599,
    "salePrice": 1999,
    "description": "Accordion sunburst pleated midi skirt with elasticized lurex waistband and satin lining for fluid sway.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1200&q=80",
        "alt": "Pleated Georgette Skirt"
      }
    ],
    "material": "High-Twist Georgette",
    "careInstructions": "Hand wash cold, do not wring or tumble dry.",
    "category": {
      "slug": "women-dresses",
      "name": "Dresses",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 1999
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-TOP-010-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-TOP-010-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-TOP-010-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-TOP-010-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w10",
    "name": "Draped Cowl Neck Silk Blouse",
    "slug": "draped-cowl-neck-silk-blouse",
    "sku": "SB-W-TOP-010",
    "regularPrice": 2499,
    "description": "Sleeveless bias-cut satin top with sensuous cowl neckline. Perfect tucked into tailored trousers or under blazers.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=1200&q=80",
        "alt": "Silk Cowl Top"
      }
    ],
    "material": "Mulberry Silk Finish Satin",
    "careInstructions": "Gentle hand wash in cold water.",
    "category": {
      "slug": "women-kurtis",
      "name": "Kurtis & Sets",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 2499
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-GWN-011-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-W-GWN-011-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-W-GWN-011-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-W-GWN-011-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "w11",
    "name": "Emerald Velvet Formal Gown",
    "slug": "emerald-velvet-formal-gown",
    "sku": "SB-W-GWN-011",
    "regularPrice": 7999,
    "salePrice": 6499,
    "description": "Figure-hugging floor-length formal gown in rich emerald green micro-velvet with subtle sweetheart neckline.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80",
        "alt": "Emerald Velvet Gown"
      }
    ],
    "material": "Stretch Velvet (Lined)",
    "careInstructions": "Specialist dry clean only.",
    "category": {
      "slug": "women-dresses",
      "name": "Dresses",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 6499
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-DRS-001-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-DRS-001-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-DRS-001-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-DRS-001-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k1",
    "name": "Floral Organic Tiered Sun Dress",
    "slug": "floral-organic-tiered-sun-dress",
    "sku": "SB-K-DRS-001",
    "regularPrice": 1699,
    "salePrice": 1299,
    "description": "Breezy multi-tier twirl dress printed with botanical blooms, stitched in certified gentle GOTS organic cotton.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80",
        "alt": "Kids Organic Sun Dress"
      }
    ],
    "material": "100% GOTS Organic Cotton",
    "careInstructions": "Machine wash warm, tumble dry gentle.",
    "category": {
      "slug": "kids-girls",
      "name": "Girls' Collection",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 1299
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-SET-002-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-SET-002-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-SET-002-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-SET-002-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k2",
    "name": "Junior Linen Shirt & Shorts Duo",
    "slug": "junior-linen-shirt-and-shorts-duo",
    "sku": "SB-K-SET-002",
    "regularPrice": 2199,
    "salePrice": 1799,
    "description": "Tailored resort-style co-ord set featuring a camp collar linen shirt and matching drawstring elasticated shorts.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1200&q=80",
        "alt": "Junior Linen Set"
      }
    ],
    "material": "60% Linen, 40% Cotton",
    "careInstructions": "Machine wash cold, hang dry.",
    "category": {
      "slug": "kids-boys",
      "name": "Boys' Collection",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 1799
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-ETH-003-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-ETH-003-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-ETH-003-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-ETH-003-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k3",
    "name": "Festive Silk-Blend Kurta Pyjama",
    "slug": "festive-silk-blend-kurta-pyjama",
    "sku": "SB-K-ETH-003",
    "regularPrice": 2499,
    "salePrice": 1999,
    "description": "Two-piece festive Indian ensemble featuring brocade motifs on soft silk-blend kurta and pure cotton churidar.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1200&q=80",
        "alt": "Kids Festive Kurta"
      }
    ],
    "material": "Jacquard Silk Blend (Cotton Lined)",
    "careInstructions": "Dry clean only.",
    "category": {
      "slug": "kids-boys",
      "name": "Boys' Collection",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 1999
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-FRK-004-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-FRK-004-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-FRK-004-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-FRK-004-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k4",
    "name": "Glitter Tulle Birthday Frock",
    "slug": "glitter-tulle-birthday-frock",
    "sku": "SB-K-FRK-004",
    "regularPrice": 2299,
    "salePrice": 1899,
    "description": "Dreamy layered tulle party frock with shimmering celestial star sparkles and breathable cotton inner lining.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=1200&q=80",
        "alt": "Kids Tulle Party Frock"
      }
    ],
    "material": "Soft Tulle, 100% Cotton Lining",
    "careInstructions": "Gentle hand wash only, line dry in shade.",
    "category": {
      "slug": "kids-girls",
      "name": "Girls' Collection",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 1899
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-RMP-005-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-RMP-005-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-RMP-005-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-RMP-005-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k5",
    "name": "Ribbed Cotton Baby Romper",
    "slug": "ribbed-cotton-baby-romper",
    "sku": "SB-K-RMP-005",
    "regularPrice": 999,
    "description": "Ultra-gentle newborn and toddler ribbed knit romper with nickel-free snaps along the inseam for easy diaper changes.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1200&q=80",
        "alt": "Ribbed Baby Romper"
      }
    ],
    "material": "95% Combed Cotton, 5% Spandex",
    "careInstructions": "Machine wash warm, tumble dry low.",
    "category": {
      "slug": "kids-baby",
      "name": "Baby & Toddlers",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 999
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-DNG-006-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-DNG-006-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-DNG-006-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-DNG-006-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k6",
    "name": "Classic Denim Playtime Dungarees",
    "slug": "classic-denim-playtime-dungarees",
    "sku": "SB-K-DNG-006",
    "regularPrice": 1899,
    "salePrice": 1499,
    "description": "Durable washed cotton denim overalls with brass buckle straps, utility chest pouch, and reinforced knee patches.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80",
        "alt": "Kids Denim Dungarees"
      }
    ],
    "material": "100% Cotton Washed Denim",
    "careInstructions": "Machine wash warm, tumble dry medium.",
    "category": {
      "slug": "kids-baby",
      "name": "Baby & Toddlers",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 1499
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-HOD-007-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-HOD-007-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-HOD-007-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-HOD-007-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k7",
    "name": "Sherpa-Lined Zip Fleece Hoodie",
    "slug": "sherpa-lined-zip-fleece-hoodie",
    "sku": "SB-K-HOD-007",
    "regularPrice": 1799,
    "description": "Cosy winter fleece zip-through jacket lined with ultra-plush faux shearling to keep little explorers warm.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
        "alt": "Kids Sherpa Hoodie"
      }
    ],
    "material": "Cotton-Poly Heavyweight Fleece",
    "careInstructions": "Machine wash cold inside out.",
    "category": {
      "slug": "kids-boys",
      "name": "Boys' Collection",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 1799
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-JAC-008-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-JAC-008-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-JAC-008-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-JAC-008-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k8",
    "name": "Quilted Lightweight Puffer Vest",
    "slug": "quilted-lightweight-puffer-vest",
    "sku": "SB-K-JAC-008",
    "regularPrice": 1999,
    "salePrice": 1599,
    "description": "Windproof water-repellent quilted puffer jacket with hypoallergenic down alternative filling.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=1200&q=80",
        "alt": "Kids Puffer Jacket"
      }
    ],
    "material": "Waterproof Nylon Shell, Polyfill",
    "careInstructions": "Machine wash cold gentle cycle.",
    "category": {
      "slug": "kids-boys",
      "name": "Boys' Collection",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 1599
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-SHT-009-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-SHT-009-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-SHT-009-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-SHT-009-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k9",
    "name": "Pastel Madras Plaid Woven Shirt",
    "slug": "pastel-madras-plaid-woven-shirt",
    "sku": "SB-K-SHT-009",
    "regularPrice": 1399,
    "description": "Preppy button-down collared shirt woven in authentic South Indian Madras plaid cotton yarn.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
        "alt": "Kids Plaid Shirt"
      }
    ],
    "material": "100% Pure Woven Cotton",
    "careInstructions": "Machine wash warm, warm iron.",
    "category": {
      "slug": "kids-boys",
      "name": "Boys' Collection",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 1399
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-TEE-010-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-TEE-010-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-TEE-010-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-TEE-010-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k10",
    "name": "Breton Stripe Slub Cotton Tee",
    "slug": "breton-stripe-slub-cotton-tee",
    "sku": "SB-K-TEE-010",
    "regularPrice": 899,
    "salePrice": 699,
    "description": "Classic nautical navy and white striped short-sleeve tee made with breathable textured slub cotton.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=1200&q=80",
        "alt": "Kids Striped Tee"
      }
    ],
    "material": "100% Combed Cotton Slub",
    "careInstructions": "Machine wash cold.",
    "category": {
      "slug": "kids-boys",
      "name": "Boys' Collection",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 699
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-SET-011-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-K-SET-011-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-K-SET-011-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-SET-011-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "k11",
    "name": "Pastel Birthday Trouser Suit Set",
    "slug": "pastel-birthday-trouser-suit-set",
    "sku": "SB-K-SET-011",
    "regularPrice": 2799,
    "salePrice": 2299,
    "description": "Dapper 3-piece formal party outfit including tailored vest, matching trousers, and soft cotton dress shirt.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
        "alt": "Kids Trouser Suit Set"
      }
    ],
    "material": "Cotton-Linen Suiting Blend",
    "careInstructions": "Dry clean or hand wash cold.",
    "category": {
      "slug": "kids-boys",
      "name": "Boys' Collection",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 2299
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-LIP-001-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-LIP-001-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-LIP-001-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-LIP-001-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c1",
    "name": "Gilded Satin Matte Lip Colour",
    "slug": "gilded-satin-matte-lip-colour",
    "sku": "SB-C-LIP-001",
    "regularPrice": 999,
    "salePrice": 799,
    "description": "Intense pigment hydration lipstick infused with hyaluronic acid, jojoba butter, and botanical squalane.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1200&q=80",
        "alt": "Satin Matte Lip Colour"
      }
    ],
    "material": "Hyaluronic Acid, Jojoba Oil, Vitamin E",
    "careInstructions": "Store in cool dry place below 28°C.",
    "category": {
      "slug": "cosmetics-lips",
      "name": "Lips",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 799
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-PRF-002-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-PRF-002-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-PRF-002-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-PRF-002-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c2",
    "name": "Amber Santal Artisan Eau De Parfum",
    "slug": "amber-santal-artisan-eau-de-parfum",
    "sku": "SB-C-PRF-002",
    "regularPrice": 3299,
    "salePrice": 2799,
    "description": "Unisex niche fragrance opening with warm cardamom and bergamot, melting into Mysore sandalwood and honeyed amber.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
        "alt": "Amber Santal Eau De Parfum"
      }
    ],
    "material": "Concentrated French Fragrance Oils (22% Extrait)",
    "careInstructions": "Spray onto pulse points. Avoid direct sunlight.",
    "category": {
      "slug": "cosmetics-fragrance",
      "name": "Fragrance",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 2799
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-SRM-003-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-SRM-003-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-SRM-003-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-SRM-003-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c3",
    "name": "Gold Squalane Radiance Youth Serum",
    "slug": "gold-squalane-radiance-youth-serum",
    "sku": "SB-C-SRM-003",
    "regularPrice": 1899,
    "salePrice": 1499,
    "description": "Advanced lightweight facial elixir with pure olive-derived squalane, 5% niacinamide, and 24K colloidal gold flecks.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80",
        "alt": "Gold Squalane Serum"
      }
    ],
    "material": "100% Plant Squalane, 5% Niacinamide, Peptides",
    "careInstructions": "Apply 3-4 drops morning and night on clean damp skin.",
    "category": {
      "slug": "cosmetics-skincare",
      "name": "Skincare",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 1499
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-SUN-004-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-SUN-004-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-SUN-004-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-SUN-004-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c4",
    "name": "Mineral Tint Broad Spectrum SPF 50",
    "slug": "mineral-tint-broad-spectrum-spf-50",
    "sku": "SB-C-SUN-004",
    "regularPrice": 1299,
    "description": "Non-nano zinc mineral sunscreen providing zero white cast, velvet matte finish, and blue-light pollution defense.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
        "alt": "Mineral Sunscreen SPF 50"
      }
    ],
    "material": "Zinc Oxide, Centella Asiatica, Aloe Juice",
    "careInstructions": "Reapply every 3-4 hours of direct sun exposure.",
    "category": {
      "slug": "cosmetics-skincare",
      "name": "Skincare",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 1299
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-CRM-005-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-CRM-005-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-CRM-005-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-CRM-005-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c5",
    "name": "Botanical Ceramide Barrier Cream",
    "slug": "botanical-ceramide-barrier-cream",
    "sku": "SB-C-CRM-005",
    "regularPrice": 1699,
    "salePrice": 1399,
    "description": "Rich restorative moisturizer packed with 5 skin-identical ceramides, shea butter, and oat beta-glucan.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
        "alt": "Ceramide Barrier Cream"
      }
    ],
    "material": "Ceramides Complex, Shea Butter, Centella",
    "careInstructions": "Use as final step in skincare routine.",
    "category": {
      "slug": "cosmetics-skincare",
      "name": "Skincare",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 1399
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-EYE-006-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-EYE-006-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-EYE-006-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-EYE-006-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c6",
    "name": "Celestial Eyeshadow 12-Pan Palette",
    "slug": "celestial-eyeshadow-12-pan-palette",
    "sku": "SB-C-EYE-006",
    "regularPrice": 2199,
    "salePrice": 1799,
    "description": "Curated 12 buttery-smooth shades ranging from warm golden metallics to rich terracotta mattes with extreme payoff.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
        "alt": "Celestial Eyeshadow Palette"
      }
    ],
    "material": "Micro-Milled Mineral Pigments",
    "careInstructions": "Keep lid tightly closed when not in use.",
    "category": {
      "slug": "cosmetics-face",
      "name": "Makeup",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 1799
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-TNR-007-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-TNR-007-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-TNR-007-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-TNR-007-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c7",
    "name": "Bulgarian Rosewater Hydrating Toner",
    "slug": "bulgarian-rosewater-hydrating-toner",
    "sku": "SB-C-TNR-007",
    "regularPrice": 899,
    "description": "Pure steam-distilled Rosa Damascena hydrosol infused with witch hazel and hyaluronic acid for instant dewy skin refresh.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80",
        "alt": "Rosewater Hydrating Toner"
      }
    ],
    "material": "100% Steam-Distilled Rose Hydrosol",
    "careInstructions": "Mist directly onto face throughout the day.",
    "category": {
      "slug": "cosmetics-skincare",
      "name": "Skincare",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 899
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-OIL-008-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-OIL-008-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-OIL-008-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-OIL-008-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c8",
    "name": "Ayurvedic Kumkumadi Radiance Oil",
    "slug": "ayurvedic-kumkumadi-radiance-oil",
    "sku": "SB-C-OIL-008",
    "regularPrice": 2499,
    "salePrice": 1999,
    "description": "Traditional 26-herb Ayurvedic night elixir crafted with pure Kashmiri saffron, lotus stamens, and cold-pressed sesame oil.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1200&q=80",
        "alt": "Kumkumadi Radiance Oil"
      }
    ],
    "material": "Kashmiri Saffron, Sandalwood, Sesame Seed Oil",
    "careInstructions": "Massage 2-3 drops into skin before sleeping.",
    "category": {
      "slug": "cosmetics-skincare",
      "name": "Skincare",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 1999
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-PRF-009-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-PRF-009-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-PRF-009-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-PRF-009-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c9",
    "name": "Neroli & White Woods Eau De Cologne",
    "slug": "neroli-and-white-woods-eau-de-cologne",
    "sku": "SB-C-PRF-009",
    "regularPrice": 2699,
    "description": "Crisp citrus floral cologne harmonizing Italian neroli petals, petitgrain leaves, and clean white cedarwood.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
        "alt": "Neroli White Woods Cologne"
      }
    ],
    "material": "French Essential Oils, Grain Alcohol",
    "careInstructions": "Store in a cool dark space.",
    "category": {
      "slug": "cosmetics-fragrance",
      "name": "Fragrance",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 2699
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-LOT-010-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-LOT-010-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-LOT-010-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-LOT-010-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c10",
    "name": "Nourishing Shea Butter Body Lotion",
    "slug": "nourishing-shea-butter-body-lotion",
    "sku": "SB-C-LOT-010",
    "regularPrice": 1199,
    "salePrice": 949,
    "description": "Velvety all-over body lotion formulated with raw African shea butter, sweet almond oil, and a subtle vanilla bean aroma.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
        "alt": "Shea Butter Body Lotion"
      }
    ],
    "material": "Organic Shea Butter, Sweet Almond Oil",
    "careInstructions": "Apply liberally over body after bathing.",
    "category": {
      "slug": "cosmetics-skincare",
      "name": "Skincare",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 949
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-MSK-011-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-C-MSK-011-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-C-MSK-011-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-C-MSK-011-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "c11",
    "name": "Purifying Kaolin Glow Clay Mask",
    "slug": "purifying-kaolin-glow-clay-mask",
    "sku": "SB-C-MSK-011",
    "regularPrice": 1299,
    "salePrice": 999,
    "description": "Gentle French pink clay and bentonite detox mask that decongests pores without stripping moisture.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
        "alt": "Purifying Kaolin Glow Mask"
      }
    ],
    "material": "French Pink Kaolin Clay, Rosehip Extract",
    "careInstructions": "Apply thin layer for 10-12 mins, rinse with lukewarm water.",
    "category": {
      "slug": "cosmetics-skincare",
      "name": "Skincare",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 999
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-BAG-001-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-BAG-001-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-BAG-001-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-BAG-001-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a1",
    "name": "Artisan Pebble Leather Work Tote",
    "slug": "artisan-pebble-leather-work-tote",
    "sku": "SB-A-BAG-001",
    "regularPrice": 6999,
    "salePrice": 5499,
    "description": "Structured everyday tote bag crafted from full-grain pebbled calfskin with padded 15-inch laptop compartment.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
        "alt": "Artisan Pebble Leather Tote"
      }
    ],
    "material": "Full-Grain Italian Calfskin Leather",
    "careInstructions": "Condition with leather balm twice annually.",
    "category": {
      "slug": "accessories-bags",
      "name": "Bags & Luggage",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 5499
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-JWL-002-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-JWL-002-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-JWL-002-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-JWL-002-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a2",
    "name": "Temple Kundan Handcrafted Choker",
    "slug": "temple-kundan-handcrafted-choker",
    "sku": "SB-A-JWL-002",
    "regularPrice": 4299,
    "salePrice": 3499,
    "description": "Heritage South Indian temple jewelry choker set plated in 22K micron gold with hand-set Kundan stones and emerald drops.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
        "alt": "Temple Kundan Choker"
      }
    ],
    "material": "Brass Base, 22K Micron Gold Dip, Glass Kundan",
    "careInstructions": "Store in ziplock pouch away from perfumes and water.",
    "category": {
      "slug": "accessories-jewelry",
      "name": "Jewelry",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 3499
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-EYE-003-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-EYE-003-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-EYE-003-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-EYE-003-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a3",
    "name": "Tortoiseshell Polarized Acetate Shades",
    "slug": "tortoiseshell-polarized-acetate-shades",
    "sku": "SB-A-EYE-003",
    "regularPrice": 2899,
    "salePrice": 2199,
    "description": "Handcrafted Italian Mazzucchelli cellulose acetate sunglasses fitted with category-3 UV400 polarized mineral lenses.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80",
        "alt": "Tortoiseshell Sunglasses"
      }
    ],
    "material": "Mazzucchelli Acetate, CR-39 Polarized Lens",
    "careInstructions": "Clean with provided microfibre cloth.",
    "category": {
      "slug": "accessories-eyewear",
      "name": "Eyewear",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 2199
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-WTC-004-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-WTC-004-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-WTC-004-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-WTC-004-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a4",
    "name": "Minimalist Chronograph Mesh Watch",
    "slug": "minimalist-chronograph-mesh-watch",
    "sku": "SB-A-WTC-004",
    "regularPrice": 5999,
    "salePrice": 4899,
    "description": "Ultra-slim 40mm matte black case paired with scratch-resistant sapphire glass and Milanese stainless steel mesh strap.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
        "alt": "Minimalist Chronograph Watch"
      }
    ],
    "material": "316L Surgical Stainless Steel, Sapphire Crystal",
    "careInstructions": "5 ATM water resistant. Wipe with dry soft cloth.",
    "category": {
      "slug": "accessories-watches",
      "name": "Watches",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 4899
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-BLT-005-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-BLT-005-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-BLT-005-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-BLT-005-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a5",
    "name": "Full-Grain Bridle Leather Belt",
    "slug": "full-grain-bridle-leather-belt",
    "sku": "SB-A-BLT-005",
    "regularPrice": 1999,
    "salePrice": 1599,
    "description": "Hand-burnished vegetable-tanned full grain bridle leather belt with solid brushed brass pin buckle.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
        "alt": "Full-Grain Leather Belt"
      }
    ],
    "material": "100% Vegetable-Tanned Cowhide Leather",
    "careInstructions": "Keep dry, buff with neutral wax polish.",
    "category": {
      "slug": "accessories-leather",
      "name": "Leather Goods",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 1599
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-WLT-006-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-WLT-006-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-WLT-006-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-WLT-006-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a6",
    "name": "Bifold RFID Protection Leather Wallet",
    "slug": "bifold-rfid-protection-leather-wallet",
    "sku": "SB-A-WLT-006",
    "regularPrice": 1799,
    "salePrice": 1399,
    "description": "Slimline bifold wallet handcrafted in full-grain cowhide with 8 card slots, currency divider, and RFID blocking lining.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80",
        "alt": "Leather Bifold Wallet"
      }
    ],
    "material": "Top-Grain Leather, RFID Blocking Shield",
    "careInstructions": "Wipe with damp cloth, avoid soaking.",
    "category": {
      "slug": "accessories-leather",
      "name": "Leather Goods",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 1399
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-SCL-007-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-SCL-007-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-SCL-007-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-SCL-007-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a7",
    "name": "Handwoven Cashmere Pashmina Stole",
    "slug": "handwoven-cashmere-pashmina-stole",
    "sku": "SB-A-SCL-007",
    "regularPrice": 4499,
    "salePrice": 3699,
    "description": "Authentic GI-certified Kashmiri handwoven Pashmina stole with feather-light warmth and delicate eyelash fringes.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80",
        "alt": "Cashmere Pashmina Stole"
      }
    ],
    "material": "100% Pure Kashmiri Pashmina Cashmere",
    "careInstructions": "Specialist dry clean only. Store in breathable muslin bag.",
    "category": {
      "slug": "accessories-scarves",
      "name": "Scarves & Shawls",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 3699
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-BAG-008-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-BAG-008-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-BAG-008-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-BAG-008-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a8",
    "name": "Waxed Canvas & Leather Weekender Duffle",
    "slug": "waxed-canvas-and-leather-weekender-duffle",
    "sku": "SB-A-BAG-008",
    "regularPrice": 5499,
    "salePrice": 4499,
    "description": "Water-resistant 18oz Scottish waxed cotton duffle bag with heavy bridle leather trim and removable shoulder strap.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80",
        "alt": "Waxed Canvas Duffle"
      }
    ],
    "material": "18oz Waxed Canvas, Saddle Leather Trim",
    "careInstructions": "Spot clean with cold water, re-wax periodically.",
    "category": {
      "slug": "accessories-bags",
      "name": "Bags & Luggage",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 4499
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-JWL-009-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-JWL-009-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-JWL-009-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-JWL-009-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a9",
    "name": "Baroque Freshwater Pearl Drop Earrings",
    "slug": "baroque-freshwater-pearl-drop-earrings",
    "sku": "SB-A-JWL-009",
    "regularPrice": 2299,
    "description": "Organic irregularly shaped genuine baroque freshwater pearls suspended from 18K gold vermeil lever-back hoops.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
        "alt": "Baroque Pearl Earrings"
      }
    ],
    "material": "18K Gold Vermeil over 925 Silver, Natural Pearl",
    "careInstructions": "Store in soft velvet pouch away from chemical sprays.",
    "category": {
      "slug": "accessories-jewelry",
      "name": "Jewelry",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 2299
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-JWL-010-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-JWL-010-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-JWL-010-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-JWL-010-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a10",
    "name": "Sterling Silver Open Torque Bangle",
    "slug": "sterling-silver-open-torque-bangle",
    "sku": "SB-A-JWL-010",
    "regularPrice": 3199,
    "salePrice": 2599,
    "description": "Solid 925 sterling silver hammered open torque cuff bracelet designed for timeless everyday stacking.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
        "alt": "Sterling Silver Torque Bangle"
      }
    ],
    "material": "Solid 925 Sterling Silver",
    "careInstructions": "Buff with silver polishing cloth.",
    "category": {
      "slug": "accessories-jewelry",
      "name": "Jewelry",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 2599
  },
  {
    "brand": "ShopBee",
    "featured": false,
    "tags": [],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-HAT-011-S",
        "size": "S",
        "color": "Default",
        "quantity": 12
      },
      {
        "id": "v2",
        "sku": "SB-A-HAT-011-M",
        "size": "M",
        "color": "Default",
        "quantity": 16
      },
      {
        "id": "v3",
        "sku": "SB-A-HAT-011-L",
        "size": "L",
        "color": "Default",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-A-HAT-011-XL",
        "size": "XL",
        "color": "Default",
        "quantity": 8
      }
    ],
    "id": "a11",
    "name": "Ecuadorian Toquilla Straw Panama Hat",
    "slug": "ecuadorian-toquilla-straw-panama-hat",
    "sku": "SB-A-HAT-011",
    "regularPrice": 2899,
    "description": "Hand-woven classic wide-brim Panama sun hat made from natural Toquilla palm fibers with grosgrain ribbon band.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=1200&q=80",
        "alt": "Toquilla Straw Panama Hat"
      }
    ],
    "material": "100% Natural Toquilla Palm Straw",
    "careInstructions": "Store crown up or in a hat box, avoid crushing.",
    "category": {
      "slug": "accessories-hats",
      "name": "Hats & Headwear",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 2899
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [
      "outerwear",
      "men",
      "denim"
    ],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-M-JKT-012-S",
        "size": "S",
        "color": "Vintage Wash",
        "quantity": 10
      },
      {
        "id": "v2",
        "sku": "SB-M-JKT-012-M",
        "size": "M",
        "color": "Vintage Wash",
        "quantity": 15
      },
      {
        "id": "v3",
        "sku": "SB-M-JKT-012-L",
        "size": "L",
        "color": "Vintage Wash",
        "quantity": 12
      },
      {
        "id": "v4",
        "sku": "SB-M-JKT-012-XL",
        "size": "XL",
        "color": "Vintage Wash",
        "quantity": 8
      }
    ],
    "id": "m12",
    "name": "Vintage Trucker Denim Jacket",
    "slug": "vintage-trucker-denim-jacket",
    "sku": "SB-M-JKT-012",
    "regularPrice": 4999,
    "salePrice": 3999,
    "description": "Heavyweight 14oz ring-spun denim trucker jacket featuring antique brass hardware and double-needle contrast stitching.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80",
        "alt": "Vintage Trucker Denim Jacket"
      }
    ],
    "material": "100% Ring-Spun Cotton Denim (14oz)",
    "careInstructions": "Machine wash cold inside out, hang to dry.",
    "category": {
      "slug": "men-denim",
      "name": "Denim",
      "parent": {
        "slug": "men",
        "name": "Men's Fashion"
      }
    },
    "price": 3999
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [
      "dress",
      "women",
      "silk",
      "evening"
    ],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-W-DRS-012-XS",
        "size": "XS",
        "color": "Midnight Noir",
        "quantity": 6
      },
      {
        "id": "v2",
        "sku": "SB-W-DRS-012-S",
        "size": "S",
        "color": "Midnight Noir",
        "quantity": 12
      },
      {
        "id": "v3",
        "sku": "SB-W-DRS-012-M",
        "size": "M",
        "color": "Midnight Noir",
        "quantity": 14
      },
      {
        "id": "v4",
        "sku": "SB-W-DRS-012-L",
        "size": "L",
        "color": "Midnight Noir",
        "quantity": 8
      }
    ],
    "id": "w12",
    "name": "Gilded Silk Slip Maxi Dress",
    "slug": "gilded-silk-slip-maxi-dress",
    "sku": "SB-W-DRS-012",
    "regularPrice": 6499,
    "salePrice": 5199,
    "description": "Bias-cut mulberry silk satin slip maxi dress with cowl neckline, delicate criss-cross back straps, and subtle side slit.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
        "alt": "Gilded Silk Slip Maxi Dress"
      }
    ],
    "material": "100% Pure Mulberry Silk Satin",
    "careInstructions": "Dry clean or gentle hand wash cold with silk detergent.",
    "category": {
      "slug": "women-dresses",
      "name": "Dresses",
      "parent": {
        "slug": "women",
        "name": "Women's Fashion"
      }
    },
    "price": 5199
  },
  {
    "brand": "ShopBee Kids",
    "featured": true,
    "tags": [
      "kids",
      "knitwear",
      "cardigan"
    ],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-K-KNT-012-2Y",
        "size": "2-3Y",
        "color": "Oatmeal Heather",
        "quantity": 8
      },
      {
        "id": "v2",
        "sku": "SB-K-KNT-012-4Y",
        "size": "4-5Y",
        "color": "Oatmeal Heather",
        "quantity": 12
      },
      {
        "id": "v3",
        "sku": "SB-K-KNT-012-6Y",
        "size": "6-7Y",
        "color": "Oatmeal Heather",
        "quantity": 10
      },
      {
        "id": "v4",
        "sku": "SB-K-KNT-012-8Y",
        "size": "8-9Y",
        "color": "Oatmeal Heather",
        "quantity": 6
      }
    ],
    "id": "k12",
    "name": "Chunky Knit Cotton Kids Cardigan",
    "slug": "chunky-knit-cotton-kids-cardigan",
    "sku": "SB-K-KNT-012",
    "regularPrice": 2299,
    "salePrice": 1799,
    "description": "Chunky cable-knit button cardigan crafted from hypoallergenic GOTS-certified organic cotton with faux horn buttons.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=80",
        "alt": "Chunky Knit Cotton Kids Cardigan"
      }
    ],
    "material": "100% GOTS Organic Combed Cotton",
    "careInstructions": "Machine wash gentle cold, dry flat in shade.",
    "category": {
      "slug": "kids-unisex",
      "name": "Unisex",
      "parent": {
        "slug": "kids",
        "name": "Kids' Fashion"
      }
    },
    "price": 1799
  },
  {
    "brand": "ShopBee Beauty",
    "featured": true,
    "tags": [
      "cosmetics",
      "skincare",
      "mask"
    ],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-C-MSK-012-100",
        "size": "100ml",
        "color": "Default",
        "quantity": 24
      }
    ],
    "id": "c12",
    "name": "Wild Rose & Kaolin Clay Facial Mask",
    "slug": "wild-rose-kaolin-clay-facial-mask",
    "sku": "SB-C-MSK-012",
    "regularPrice": 1899,
    "salePrice": 1499,
    "description": "Purifying mineral clay mask infused with organic wild rose extract and niacinamide to detoxify pores and restore radiant glow.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
        "alt": "Wild Rose & Kaolin Clay Facial Mask"
      }
    ],
    "material": "French Pink Kaolin Clay, Damascena Rose Water, Niacinamide",
    "careInstructions": "Apply thin layer for 10-15 mins. Rinse with lukewarm water.",
    "category": {
      "slug": "cosmetics-skincare",
      "name": "Skincare",
      "parent": {
        "slug": "cosmetics",
        "name": "Cosmetics & Beauty"
      }
    },
    "price": 1499
  },
  {
    "brand": "ShopBee",
    "featured": true,
    "tags": [
      "accessories",
      "leather",
      "wallet"
    ],
    "inStock": true,
    "variants": [
      {
        "id": "v1",
        "sku": "SB-A-WLT-012-BRN",
        "size": "Standard",
        "color": "Cognac Brown",
        "quantity": 18
      },
      {
        "id": "v2",
        "sku": "SB-A-WLT-012-BLK",
        "size": "Standard",
        "color": "Obsidian Black",
        "quantity": 15
      }
    ],
    "id": "a12",
    "name": "Full-Grain Leather Bifold Wallet",
    "slug": "full-grain-leather-bifold-wallet",
    "sku": "SB-A-WLT-012",
    "regularPrice": 2499,
    "salePrice": 1999,
    "description": "Hand-stitched vegetable-tanned full-grain leather bifold wallet with 8 card slots, RFID protection layer, and cash pocket.",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=1200&q=80",
        "alt": "Full-Grain Leather Bifold Wallet"
      }
    ],
    "material": "100% Vegetable-Tanned Full-Grain Cowhide",
    "careInstructions": "Condition with natural beeswax balm once every 6 months.",
    "category": {
      "slug": "accessories-bags",
      "name": "Bags & Leather",
      "parent": {
        "slug": "accessories",
        "name": "Accessories"
      }
    },
    "price": 1999
  }
];

export function filterFallbackProducts({ category, q, featured } = {}) {
  return fallbackProducts.filter((p) => {
    if (featured === 'true' && !p.featured) return false;
    if (q) {
      const hay = `${p.name} ${p.sku} ${p.brand} ${p.material || ''} ${p.tags.join(' ')}`.toLowerCase();
      if (!hay.includes(String(q).toLowerCase())) return false;
    }
    if (category) {
      const slugs = [p.category?.slug, p.category?.parent?.slug].filter(Boolean);
      if (!slugs.includes(category)) return false;
    }
    return true;
  });
}
