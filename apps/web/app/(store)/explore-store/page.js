import ExploreStoreExperience from '@/components/store-3d/ExploreStoreExperience';
import { getSettings, getStoreLayout } from '@/lib/api';

export const metadata = { title: 'Explore Our Store' };

export default async function ExploreStorePage() {
  const [layout, settings] = await Promise.all([getStoreLayout(), getSettings()]);

  return (
    <ExploreStoreExperience
      layout={layout}
      phone={settings.phone}
      email={settings.email}
    />
  );
}
