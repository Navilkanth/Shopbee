'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'shopbee_cart_v1';

const DEFAULT_CART = [
  {
    id: 'cart-item-1',
    productId: '2',
    name: 'Nimbus Oxford Shirt',
    slug: 'nimbus-oxford-shirt',
    brand: 'ShopBee',
    size: 'L',
    color: 'Sky Blue',
    price: 2499,
    regularPrice: 2499,
    quantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cart-item-2',
    productId: '3',
    name: 'Heritage Silk Saree',
    slug: 'heritage-silk-saree',
    brand: 'ShopBee Heritage',
    size: 'Free Size',
    color: 'Crimson Gold',
    price: 7499,
    regularPrice: 8999,
    quantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
  },
];

export function getCartItems() {
  if (typeof window === 'undefined') return DEFAULT_CART;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_CART));
      return DEFAULT_CART;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_CART;
  }
}

export function saveCartItems(items) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('shopbee:cart-updated'));
  } catch {
    /* ignore storage errors */
  }
}

export function addToCart(product, { size = 'M', color = 'Default', quantity = 1 } = {}) {
  const items = getCartItems();
  const existingIndex = items.findIndex(
    (item) => item.productId === String(product.id) && item.size === size && item.color === color,
  );

  if (existingIndex > -1) {
    items[existingIndex].quantity += quantity;
  } else {
    const imageUrl =
      product.images?.[0]?.url ||
      product.imageUrl ||
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80';
    items.push({
      id: `cart-item-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      productId: String(product.id),
      name: product.name,
      slug: product.slug,
      brand: product.brand || 'ShopBee',
      size,
      color,
      price: product.price || product.salePrice || product.regularPrice || 1999,
      regularPrice: product.regularPrice || 1999,
      quantity,
      imageUrl,
    });
  }

  saveCartItems(items);
  return items;
}

export function updateCartQuantity(itemId, quantity) {
  const items = getCartItems();
  const updated = items
    .map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: Math.max(1, quantity) };
      }
      return item;
    })
    .filter((item) => item.quantity > 0);
  saveCartItems(updated);
  return updated;
}

export function removeFromCart(itemId) {
  const items = getCartItems();
  const updated = items.filter((item) => item.id !== itemId);
  saveCartItems(updated);
  return updated;
}

export function clearCart() {
  saveCartItems([]);
  return [];
}

export function useCart() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setItems(getCartItems());
    setLoaded(true);

    const onUpdate = () => {
      setItems(getCartItems());
    };
    window.addEventListener('shopbee:cart-updated', onUpdate);
    window.addEventListener('storage', onUpdate);
    return () => {
      window.removeEventListener('shopbee:cart-updated', onUpdate);
      window.removeEventListener('storage', onUpdate);
    };
  }, []);

  const count = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return {
    items,
    loaded,
    count,
    subtotal,
    addItem: addToCart,
    updateQuantity: updateCartQuantity,
    removeItem: removeFromCart,
    clear: clearCart,
  };
}

