import { Metadata } from 'next';
import FAQContent from './FAQContent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - ZenShift',
  description: 'Find answers to common questions about ZenShift meditation app, AI features, privacy, and technical requirements.',
};

export default function FAQPage() {
  return <FAQContent />;
}
