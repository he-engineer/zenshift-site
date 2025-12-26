import { Metadata } from 'next';
import ProductContent from './ProductContent';

export const metadata: Metadata = {
  title: 'Features & Product - ZenShift',
  description: 'Explore ZenShift features: AI Coach, custom session generation, curated library, progress tracking. Available on Android with iOS coming soon.',
};

export default function ProductPage() {
  return <ProductContent />;
}
