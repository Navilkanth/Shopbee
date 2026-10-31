import {
  fallbackCategories,
  fallbackSettings,
  filterFallbackProducts,
  fallbackProducts,
} from './fallback-catalog';
import { fallbackLayout } from './store-layout';

const RAW_API = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const API_URL = RAW_API.replace(/\/api\/v1\/?$/, '');

async function apiFetch(path, init = {}) {
  // Use a fast 1200ms timeout so pages never hang if backend is cold/offline
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 1200);

  try {
    const res = await fetch(`${API_URL}/api/v1${path}`, {
      ...init,
      signal: controller.signal,
      next: { revalidate: 20 },
    });
    clearTimeout(timeoutId);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      const error = new Error(body?.error?.message || 'API request failed');
      error.status = res.status;
      throw error;
    }
    return res.json();
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

export async function getSettings() {
  try {
    const json = await apiFetch('/store/settings');
    return { ...fallbackSettings, ...(json.data || {}) };
  } catch {
    return fallbackSettings;
  }
}

export async function getCategories() {
  try {
    const json = await apiFetch('/categories');
    return json.data?.length ? json.data : fallbackCategories;
  } catch {
    return fallbackCategories;
  }
}

export async function getProducts(params = {}) {
  const query = new URLSearchParams(
    Object.fromEntries(Object.entries(params).filter(([, v]) => v != null && v !== '')),
  ).toString();
  try {
    const json = await apiFetch(`/products${query ? `?${query}` : ''}`);
    if (json.data?.length) return json;
  } catch {
    /* use fallback */
  }
  const data = filterFallbackProducts(params);
  return { data, meta: { page: 1, pageSize: data.length, total: data.length, totalPages: 1 } };
}

export async function getProduct(slug) {
  try {
    const json = await apiFetch(`/products/${slug}`);
    if (json.data) return json.data;
  } catch {
    /* use fallback */
  }
  return fallbackProducts.find((p) => p.slug === slug) || null;
}

export async function getStoreLayout() {
  try {
    const json = await apiFetch('/store/layout');
    if (json.data) return json.data;
  } catch {
    /* use bundled layout */
  }
  return fallbackLayout;
}

export async function getOffers() {
  try {
    const json = await apiFetch('/offers');
    if (json.data) return json.data;
  } catch {
    /* return rich fallback offers */
  }
  return [
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
  ];
}

export { API_URL };
