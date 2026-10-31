import CategoryListing from '@/components/products/CategoryListing';

export const metadata = { title: "Men's Fashion" };

export default function MenPage() {
  return (
    <CategoryListing
      slug="men"
      title="Men"
      intro="Shirts, denim, kurtas, and everyday essentials from the ShopBee seed catalog."
    />
  );
}
