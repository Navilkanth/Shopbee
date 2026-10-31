export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return ['', '/men', '/women', '/kids', '/cosmetics', '/accessories', '/about'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
