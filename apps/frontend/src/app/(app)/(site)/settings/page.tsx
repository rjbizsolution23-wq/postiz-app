import { SettingsPopup } from '@gitroom/frontend/components/layout/settings.component';
export const dynamic = 'force-dynamic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RJ Business Solutions Settings',
  description: '',
};

export default async function Index({
  searchParams,
}: {
  searchParams: {
    code: string;
  };
}) {
  return <SettingsPopup />;
}
