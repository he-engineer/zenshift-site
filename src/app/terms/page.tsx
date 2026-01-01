import { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms of Service - ZenShift',
  description: 'Terms of Service for ZenShift Meditation Coach. Please read these terms carefully before using our app.',
};

export default function TermsPage() {
  return <TermsContent />;
}
