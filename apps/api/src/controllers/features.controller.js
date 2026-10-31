const catalogRepo = require('../repositories/catalogRepository');

async function subscribeNewsletter(req, res) {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: { message: 'Valid email required' } });
  }
  await catalogRepo.saveNewsletter(email);
  res.json({
    success: true,
    message: 'Subscribed successfully. Promo coupon code FESTIVE10 sent to email.',
  });
}

async function getOffers(_req, res) {
  res.json({
    data: [
      {
        id: 'offer-1',
        code: 'DIWALI30',
        discount: '30% OFF',
        title: 'Grand Festive Silk & Heritage Sale',
        description: 'Flat 30% off on all handwoven Banarasi sarees, silk kurtas, and festive lehengas.',
        minSpend: 4999,
        badge: 'Bestseller',
        expires: 'Valid through festive season',
      },
      {
        id: 'offer-2',
        code: 'FESTIVE20',
        discount: '20% OFF',
        title: 'Contemporary Luxury Wardrobe',
        description: '20% discount on European flax linen shirts, pleated chinos, and slip dresses.',
        minSpend: 2499,
        badge: 'Popular',
        expires: 'Limited time',
      },
      {
        id: 'offer-3',
        code: 'GLOWBEE',
        discount: 'BUY 2 GET 1',
        title: 'Cosmetics & Fragrance Trio',
        description: 'Add any 3 luxury skincare serums or Eau de Parfum to receive the lowest priced item free.',
        minSpend: 1500,
        badge: 'Beauty Special',
        expires: 'Ongoing',
      },
      {
        id: 'offer-4',
        code: 'FREESHIP',
        discount: 'FREE DELIVERY',
        title: 'Express All-India Free Shipping',
        description: 'Complimentary insured door-to-door courier on any order across India.',
        minSpend: 999,
        badge: 'Everyday Value',
        expires: 'Always active',
      },
    ],
  });
}

async function submitWholesale(req, res) {
  const data = req.body;
  if (!data.businessName || !data.email) {
    return res.status(400).json({ error: { message: 'Business name and email required' } });
  }
  await catalogRepo.saveWholesaleInquiry(data);
  res.json({
    success: true,
    refId: data.refId || `SB-B2B-${Date.now().toString().slice(-5)}`,
    message: 'Wholesale inquiry received. Our representative will contact you shortly.',
  });
}

async function checkout(req, res) {
  const order = req.body;
  if (!order.customer || !order.items || !order.items.length) {
    return res.status(400).json({ error: { message: 'Customer details and items required' } });
  }
  await catalogRepo.saveOrder(order);
  res.json({
    success: true,
    orderId: order.orderId || `SB-${Date.now().toString().slice(-6)}`,
    status: 'Confirmed',
    message: 'Order created successfully.',
  });
}

async function getAccount(_req, res) {
  res.json({
    data: {
      profile: {
        name: 'Dev Customer',
        email: 'dev.customer@shopbee.local',
        phone: '9087035510',
        tier: 'Gold Member',
      },
      address: {
        street: 'ShopBee Fashion House, Ground Floor, MG Road',
        city: 'Coimbatore',
        state: 'Tamil Nadu',
        pincode: '641001',
      },
    },
  });
}

module.exports = {
  subscribeNewsletter,
  getOffers,
  submitWholesale,
  checkout,
  getAccount,
};

