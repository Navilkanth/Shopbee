import CategoryListing from '@/components/products/CategoryListing';

export const metadata = { title: "Kids' Fashion" };

export default function KidsPage() {
  return (
    <CategoryListing
      slug="kids"
      title="Kids"
      intro="Clothing for boys and girls. Seed listings only — sizes and stock are development data."
    />
  );
}
