import { fallbackCategories, fallbackProducts, fallbackSettings } from './fallback-catalog.js';
import { aboutContent, policyContent, wholesaleContent } from './site-content.js';

export const BOT_NAME = 'BeeBot';
export const BOT_ROLE = 'ShopBee AI Concierge';

export const STORE_KNOWLEDGE = {
  name: fallbackSettings.store_name,
  tagline: fallbackSettings.tagline,
  address: fallbackSettings.address,
  phone: fallbackSettings.phone,
  email: fallbackSettings.email,
  openingHours: fallbackSettings.opening_hours,
  heritage: {
    founded: 2004,
    years: '20+',
    familiesServed: '500,000+',
    masterWeavers: '1,200+',
    eyebrow: aboutContent.eyebrow,
    intro: aboutContent.intro,
  },
  coupons: [
    {
      code: 'DIWALI30',
      discount: '30% OFF',
      description: 'Flat 30% discount on Banarasi & Katan Silks and festive collections',
      category: 'Festive',
      link: '/festival-offers',
    },
    {
      code: 'WELCOME15',
      discount: '15% OFF',
      description: '15% off on your first order when joining the ShopBee Heritage Club',
      category: 'First Order',
      link: '/festival-offers',
    },
    {
      code: 'GLOWBEE',
      discount: 'Buy 2 Get 1 Free',
      description: 'Buy any 2 luxury botanical cosmetics & get 1 artisan fragrance free',
      category: 'Cosmetics',
      link: '/cosmetics',
    },
  ],
  categories: [
    {
      id: 'men',
      name: "Men's Fashion",
      path: '/men',
      description: 'Handcrafted raw silk kurtas, European flax linen shirts, structured blazers, dhotis & tailored chinos.',
    },
    {
      id: 'women',
      name: "Women's Fashion",
      path: '/women',
      description: 'Pure Banarasi Katan silks, Kanchipuram bridal sarees, hand-embroidered Chanderi kurtis, and designer lehengas.',
    },
    {
      id: 'kids',
      name: "Kids' Fashion",
      path: '/kids',
      description: 'Hypoallergenic organic combed cotton festive wear, traditional dhotis, cotton frocks, rompers & dungarees.',
    },
    {
      id: 'cosmetics',
      name: 'Luxury Cosmetics',
      path: '/cosmetics',
      description: '100% vegan, cruelty-free botanical skincare, Kumkumadi glow oils, ayurvedic serums, and matte lipsticks.',
    },
    {
      id: 'accessories',
      name: 'Accessories',
      path: '/accessories',
      description: 'Temple jewelry, 24K gold-plated choker sets, pure leather handbags, pashmina stoles, and UV sunglasses.',
    },
  ],
  policies: {
    shipping: {
      path: '/policies/shipping',
      summary:
        'Complimentary express shipping across all Indian PIN codes on orders over ₹999. Standard shipping is ₹99 for orders below ₹999. Orders dispatch within 24-48 hours from our Chennai fashion house with live tracking.',
    },
    returns: {
      path: '/policies/returns',
      summary:
        '7-day doorstep size exchange guarantee. Unused fashion garments with tags can be exchanged or refunded without restocking fees. Refunds process within 3-5 business days to original payment method or bank account.',
    },
    purity: {
      path: '/about',
      summary:
        '100% Silk Mark certified natural silk and electroplated pure silver/gold zari. Tested using authentic flame ash inspection; zero toxic polyester blend.',
    },
  },
  specialPages: [
    {
      title: '3D Virtual Flagship Store',
      path: '/explore-store',
      description: 'Walk through our 15,000 sq.ft Anna Salai, Chennai showroom in real-time 3D, inspect fabrics, and check coordinates.',
    },
    {
      title: 'Wholesale & B2B Portal',
      path: '/wholesale',
      description: 'Direct manufacturer tier pricing: Tier 1 (30% off, MOQ 50), Tier 2 (40% off, MOQ 150), Tier 3 (50% off, MOQ 300+).',
    },
    {
      title: 'Festival Offers & Coupons',
      path: '/festival-offers',
      description: 'Exclusive seasonal bundles, flash sales, and active coupon codes with instant copy functionality.',
    },
    {
      title: 'About Our 20+ Year Legacy',
      path: '/about',
      description: 'Founded in 2004, our 20+ year journey with 1,200+ artisan pit looms and the 3-Fold Fabric Purity Lab.',
    },
  ],
};

/**
 * Intelligent domain search & response builder
 */
export function queryKnowledgeBase(rawQuery) {
  const query = (rawQuery || '').trim().toLowerCase();
  if (!query) {
    return {
      text: "Hello! I am **BeeBot**, your ShopBee AI Concierge. How may I assist your style journey today? You can ask about our pure silks, discounts, 20-year legacy, shipping, or let me navigate you to any collection!",
      actions: [
        { label: "✨ Festival Offers & 30% OFF", path: "/festival-offers" },
        { label: "🏛️ Explore 3D Virtual Store", path: "/explore-store" },
        { label: "👗 Women's Silk Sarees", path: "/women" },
        { label: "📜 About 20+ Year Legacy", path: "/about" },
      ],
      products: [],
    };
  }

  // 1. Navigation requests (e.g. "go to men", "take me to checkout", "open cart")
  if (
    query.startsWith('go to') ||
    query.startsWith('take me to') ||
    query.startsWith('navigate to') ||
    query.startsWith('open') ||
    query.startsWith('visit')
  ) {
    if (query.includes('cart') || query.includes('bag')) {
      return {
        text: "Taking you to your **Shopping Cart**. You can review your selected items, apply promo codes, and proceed to secure checkout.",
        autoNavigate: '/cart',
        actions: [{ label: "View Shopping Cart", path: "/cart" }],
        products: [],
      };
    }
    if (query.includes('checkout')) {
      return {
        text: "Directing you to **Secure Checkout**. You can enter your delivery address and choose from UPI, Card, Net Banking, or Cash on Delivery.",
        autoNavigate: '/checkout',
        actions: [{ label: "Proceed to Checkout", path: "/checkout" }],
        products: [],
      };
    }
    if (query.includes('account') || query.includes('login') || query.includes('register') || query.includes('profile')) {
      return {
        text: "Opening your **Account & VIP Club** portal.",
        autoNavigate: '/account',
        actions: [{ label: "Go to Account", path: "/account" }],
        products: [],
      };
    }
    if (query.includes('3d') || query.includes('virtual') || query.includes('explore')) {
      return {
        text: "Launching the **3D Virtual Flagship Store** experience! You can walk through our Anna Salai, Chennai showroom virtually.",
        autoNavigate: '/explore-store',
        actions: [{ label: "Enter 3D Store", path: "/explore-store" }],
        products: [],
      };
    }
    if (query.includes('about') || query.includes('legacy') || query.includes('history')) {
      return {
        text: "Navigating to **About ShopBee** to explore our 20+ years of craftsmanship, artisan weaver clusters, and trust guarantees.",
        autoNavigate: '/about',
        actions: [{ label: "Read Our Story", path: "/about" }],
        products: [],
      };
    }
    if (query.includes('wholesale') || query.includes('b2b') || query.includes('bulk')) {
      return {
        text: "Navigating to the **Wholesale & B2B Portal** for bulk catalog tiers and manufacturer pricing.",
        autoNavigate: '/wholesale',
        actions: [{ label: "View Wholesale Tiers", path: "/wholesale" }],
        products: [],
      };
    }
    if (query.includes('offer') || query.includes('discount') || query.includes('coupon') || query.includes('festival')) {
      return {
        text: "Navigating to **Festival Offers** featuring DIWALI30 and seasonal bundles.",
        autoNavigate: '/festival-offers',
        actions: [{ label: "View All Offers", path: "/festival-offers" }],
        products: [],
      };
    }
  }

  // 2. Coupons / Discounts / Deals
  if (
    query.includes('coupon') ||
    query.includes('discount') ||
    query.includes('code') ||
    query.includes('promo') ||
    query.includes('voucher') ||
    query.includes('sale') ||
    query.includes('offer')
  ) {
    const couponsList = STORE_KNOWLEDGE.coupons
      .map((c) => `• **${c.code}** — ${c.discount} (${c.description})`)
      .join('\n');
    return {
      text: `Here are our active festive coupons and promotions:\n\n${couponsList}\n\n*Apply these codes at checkout or view our full promotion showcase.*`,
      actions: [
        { label: "🎟️ View Festival Coupons", path: "/festival-offers" },
        { label: "🛍️ Shop Sarees with DIWALI30", path: "/women" },
        { label: "💄 Cosmetics with GLOWBEE", path: "/cosmetics" },
      ],
      products: [],
    };
  }

  // 3. Shipping / Delivery / Tracking
  if (
    query.includes('shipping') ||
    query.includes('delivery') ||
    query.includes('dispatch') ||
    query.includes('tracking') ||
    query.includes('pin code') ||
    query.includes('pincode') ||
    query.includes('charges')
  ) {
    return {
      text: `**🚚 Shipping & Doorstep Delivery:**\n• **Complimentary Shipping:** Free express doorstep delivery across all Indian PIN codes on orders above **₹999**.\n• **Standard Fee:** ₹99 for orders below ₹999.\n• **Timeline:** Hand-inspected and dispatched within 24–48 hours from our Anna Salai, Chennai fashion house. Typical transit is 2–4 business days with live SMS tracking.`,
      actions: [
        { label: "📦 Full Shipping Policy", path: "/policies/shipping" },
        { label: "🛍️ Continue Shopping", path: "/" },
      ],
      products: [],
    };
  }

  // 4. Returns / Exchanges / Refunds
  if (
    query.includes('return') ||
    query.includes('exchange') ||
    query.includes('refund') ||
    query.includes('cancel') ||
    query.includes('damaged') ||
    query.includes('size issue')
  ) {
    return {
      text: `**🔄 7-Day Hassle-Free Doorstep Exchanges:**\n• **Size & Quality Guarantee:** Return or exchange any unworn fashion garment within **7 days** of delivery.\n• **Zero Restocking Fees:** We replace sizing free of charge or issue a full refund to your original payment method / direct bank transfer.\n• **Requirements:** Keep original brand tags and polybag intact. Cosmetics and innerwear are excluded once seal is broken.`,
      actions: [
        { label: "📄 Return Policy Details", path: "/policies/returns" },
        { label: "📞 Contact Concierge", path: "/about" },
      ],
      products: [],
    };
  }

  // 5. Heritage / 20 Years / Trust / History / Pure Silk
  if (
    query.includes('heritage') ||
    query.includes('trust') ||
    query.includes('20 year') ||
    query.includes('20 years') ||
    query.includes('history') ||
    query.includes('about') ||
    query.includes('who are you') ||
    query.includes('purity') ||
    query.includes('zari') ||
    query.includes('silk mark') ||
    query.includes('burn test')
  ) {
    return {
      text: `**✨ Over Two Decades of Craftsmanship & Trust (Founded 2004):**\n• **20+ Years Heritage:** Serving more than 500,000 Indian families across generations.\n• **1,200+ Master Weavers:** Direct artisan cooperatives across Varanasi, Kanchipuram, Chanderi & Coimbatore.\n• **100% Verified Purity:** Silk Mark certified handlooms and electroplated silver/24K micron gold zari tested with our 3-Fold Fabric Purity Lab.\n• **Physical Flagship:** 15,000 sq.ft showroom at No. 42 Anna Salai, Thousand Lights, Chennai.`,
      actions: [
        { label: "📜 Read Full 20-Year Legacy", path: "/about" },
        { label: "🏛️ Tour Chennai 3D Store", path: "/explore-store" },
        { label: "🧵 Browse Handloom Silks", path: "/women" },
      ],
      products: [],
    };
  }

  // 6. Address / Location / Phone / Chennai Flagship / Timings
  if (
    query.includes('address') ||
    query.includes('location') ||
    query.includes('where') ||
    query.includes('phone') ||
    query.includes('contact') ||
    query.includes('chennai') ||
    query.includes('store') ||
    query.includes('timing') ||
    query.includes('hours') ||
    query.includes('map')
  ) {
    return {
      text: `**📍 ShopBee Flagship Fashion House:**\n• **Address:** ${STORE_KNOWLEDGE.address}\n• **Landmark:** Thousand Lights, Anna Salai, Chennai (Next to Thousand Lights Metro)\n• **Hours:** ${STORE_KNOWLEDGE.openingHours}\n• **Phone:** [${STORE_KNOWLEDGE.phone}](tel:${STORE_KNOWLEDGE.phone})\n• **Email:** [${STORE_KNOWLEDGE.email}](mailto:${STORE_KNOWLEDGE.email})\n\nYou can also explore the entire showroom layout in our interactive 3D virtual floor!`,
      actions: [
        { label: "🗺️ View Chennai Map & 3D Store", path: "/explore-store" },
        { label: "📞 Call 9087035510", path: `tel:${STORE_KNOWLEDGE.phone}` },
      ],
      products: [],
    };
  }

  // 7. Wholesale / B2B / Bulk orders / Distributorship
  if (
    query.includes('wholesale') ||
    query.includes('b2b') ||
    query.includes('bulk') ||
    query.includes('distributor') ||
    query.includes('reseller') ||
    query.includes('tier') ||
    query.includes('moq')
  ) {
    return {
      text: `**💼 ShopBee B2B & Wholesale Partnerships:**\n• **Tier 1 (Boutique Starter):** 30% OFF retail with MOQ 50 units.\n• **Tier 2 (Regional Showroom):** 40% OFF retail with MOQ 150 units + GST credit.\n• **Tier 3 (Enterprise Distributor):** Up to 50% OFF with MOQ 300+ units + custom fabric dyeing.\n\nAll wholesale batches carry verified Silk Mark authenticity certificates and priority doorstep logistics.`,
      actions: [
        { label: "📝 Open Wholesale Portal", path: "/wholesale" },
        { label: "📞 Talk to B2B Desk", path: `tel:${STORE_KNOWLEDGE.phone}` },
      ],
      products: [],
    };
  }

  // 8. Specific Category Matches
  for (const cat of STORE_KNOWLEDGE.categories) {
    if (query.includes(cat.id) || query.includes(cat.name.toLowerCase())) {
      const catProducts = fallbackProducts
        .filter((p) => {
          const catSlug = p.category?.parent?.slug || p.category?.slug || '';
          return catSlug.includes(cat.id);
        })
        .slice(0, 4);
      return {
        text: `**${cat.name}:**\n${cat.description}\n\nHere are some of our top handcrafted pieces in this collection:`,
        actions: [
          { label: `Browse All ${cat.name} →`, path: cat.path },
          { label: "🎟️ Check Active Coupons", path: "/festival-offers" },
        ],
        products: catProducts,
      };
    }
  }

  // 9. Specific Product Keyword Search (e.g. "saree", "kurta", "lipstick", "perfume", "bag", "watch", "shoes")
  const matchedProducts = fallbackProducts
    .filter((p) => {
      const name = (p.name || p.title || '').toLowerCase();
      const desc = (p.description || '').toLowerCase();
      const catSlug = (p.category?.parent?.slug || p.category?.slug || '').toLowerCase();
      const terms = query.split(/\s+/).filter((t) => t.length > 2);
      return terms.some((t) => name.includes(t) || desc.includes(t) || catSlug.includes(t));
    })
    .slice(0, 4);

  if (matchedProducts.length > 0) {
    const pNames = matchedProducts
      .map((p) => {
        const title = p.name || p.title;
        const price = p.price ?? p.salePrice ?? p.regularPrice ?? 0;
        return `• **${title}** (₹${price.toLocaleString('en-IN')})`;
      })
      .join('\n');
    return {
      text: `I found these matching items in our collection:\n\n${pNames}\n\nWould you like to inspect any of these or visit their category?`,
      actions: [
        { label: "🔍 Search All Catalog", path: `/search?q=${encodeURIComponent(query)}` },
        { label: "🎟️ View Festival Offers", path: "/festival-offers" },
      ],
      products: matchedProducts,
    };
  }

  // 10. General / Fallback with smart recommendation
  return {
    text: `I'd love to help with that! ShopBee is a luxury Indian fashion house with over 20 years of artisan handloom heritage. I can assist you with:\n• **Catalog & Products:** Men, Women, Kids, Cosmetics, Accessories\n• **Discounts:** Codes DIWALI30, WELCOME15, GLOWBEE\n• **Customer Care:** Free shipping above ₹999 & 7-day doorstep size exchange\n• **Store:** Visit our Anna Salai, Chennai flagship or 3D Virtual Store`,
    actions: [
      { label: "👗 Women's Collection", path: "/women" },
      { label: "👔 Men's Collection", path: "/men" },
      { label: "✨ Festival Offers (30% OFF)", path: "/festival-offers" },
      { label: "🏛️ 3D Virtual Showroom", path: "/explore-store" },
      { label: "📜 20-Year Heritage", path: "/about" },
    ],
    products: [],
  };
}
