export const dynamic = 'force-dynamic';
import { LaunchesComponent } from '@gitroom/frontend/components/launches/launches.component';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InstaPost Calendar & Launches',
  description: '',
};

export default async function Index() {
  return <LaunchesComponent />;
}
