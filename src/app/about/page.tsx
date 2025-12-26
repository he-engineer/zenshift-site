import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us - ZenShift',
  description: 'Learn about ZenShift and One Ping Fan Venture LLC. Our mission is making personalized mindfulness accessible through advanced AI technology.',
};

export default function AboutPage() {
  return <AboutContent />;
}
