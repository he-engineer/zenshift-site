import { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - ZenShift',
  description: 'Privacy Policy for ZenShift Meditation Coach. Learn how we protect your data and privacy.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
