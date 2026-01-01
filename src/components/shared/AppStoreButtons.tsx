'use client';

import * as React from 'react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/storeLinks';

interface AppStoreButtonsProps {
  size?: 'normal' | 'large';
}

export default function AppStoreButtons({ size = 'normal' }: AppStoreButtonsProps) {
  // Badge dimensions - same height, auto width to preserve aspect ratio
  // Both badges are now SVGs without padding, so same height = same visual size
  const badgeHeight = size === 'large' ? 60 : 48;

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={4}
      alignItems="center"
    >
      {/* Google Play Badge - Official (must be same size or LARGER than App Store) */}
      <Link
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        style={{
          display: 'block',
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.85';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        <Image
          src="/images/app-store-badges/google-play-badge.avif"
          alt="Get it on Google Play"
          width={0}
          height={0}
          sizes="100vw"
          style={{ display: 'block', height: badgeHeight, width: 'auto' }}
          priority
        />
      </Link>

      {/* App Store Badge - Official (Black, per guidelines for multiple badges) */}
      {/* Must be SMALLER than or equal to Google Play badge */}
      <Link
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        style={{
          display: 'block',
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.85';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        <Image
          src="/images/app-store-badges/app-store-badge.avif"
          alt="Download on the App Store"
          width={0}
          height={0}
          sizes="100vw"
          style={{ display: 'block', height: badgeHeight, width: 'auto' }}
        />
      </Link>
    </Stack>
  );
}
