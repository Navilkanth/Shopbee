import CategoryListing from '@/components/products/CategoryListing';

export const metadata = { title: 'Cosmetics' };

export default function CosmeticsPage() {
  return (
    <CategoryListing
      slug="cosmetics"
      title="Cosmetics"
      intro="Skincare, colour, and fragrance placeholders. Product claims are not live marketing copy."
    />
  );
}
