import StoreShell from '@/components/layout/StoreShell';
import { getSettings } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function StoreLayout({ children }) {
  const settings = await getSettings();
  return <StoreShell settings={settings}>{children}</StoreShell>;
}
