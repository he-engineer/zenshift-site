import { Metadata } from 'next';
import AIPersonalizationContent from './AIPersonalizationContent';

export const metadata: Metadata = {
  title: 'AI Personalization - ZenShift',
  description: 'Learn how ZenShift AI Coach works. Conversational AI that understands your needs, recommends sessions, and creates custom meditations just for you.',
};

export default function AIPersonalizationPage() {
  return <AIPersonalizationContent />;
}
