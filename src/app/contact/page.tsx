import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - ZenShift',
  description: 'Get in touch with the ZenShift team. We\'re here to help with questions, feedback, and support.',
};

export default function ContactPage() {
  return <ContactContent />;
}
