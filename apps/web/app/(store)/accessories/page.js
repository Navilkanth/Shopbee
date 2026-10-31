import CategoryListing from '@/components/products/CategoryListing';

export const metadata = { title: 'Accessories' };

export default function AccessoriesPage() {
  return (
    <CategoryListing
      slug="accessories"
      title="Accessories"
      intro="Bags, jewellery, and finishing pieces from the development catalog."
    />
  );
}
