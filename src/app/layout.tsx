import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://zenshift.onepingfanventure.com'),
  title: 'ZenShift - AI-Powered Meditation for Busy Professionals',
  description: 'Find calm in minutes with ZenShift. Our AI Coach recommends personalized meditation sessions based on your mood and needs. Free for iOS and Android.',
  keywords: 'meditation app, AI meditation, mindfulness, stress relief, professional wellness, personalized meditation, anxiety relief, sleep meditation, focus meditation',
  authors: [{ name: 'One Ping Fan Venture LLC' }],
  openGraph: {
    title: 'ZenShift - AI-Powered Meditation for Busy Professionals',
    description: 'Find calm in minutes with ZenShift. AI-powered personalized meditation sessions.',
    type: 'website',
    url: 'https://zenshift.onepingfanventure.com/',
    siteName: 'ZenShift',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZenShift - AI-Powered Meditation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZenShift - AI-Powered Meditation',
    description: 'Find calm in minutes with AI-powered personalized meditation.',
    images: ['/images/twitter-card.png'],
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
