import CategoryListing from '@/components/products/CategoryListing';

export const metadata = { title: "Women's Fashion" };

export default function WomenPage() {
  return (
    <CategoryListing
      slug="women"
      title="Women"
      intro="Sarees, kurtis, dresses, and editorial silhouettes from the ShopBee seed catalog."
    />
  );
}
