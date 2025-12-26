'use client';

import * as React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from '@/theme/zenshift-theme';

interface AppStoreButtonsProps {
  size?: 'normal' | 'large';
  showComingSoon?: boolean;
}

export default function AppStoreButtons({ size = 'normal', showComingSoon = false }: AppStoreButtonsProps) {
  // Badge dimensions per official brand guidelines:
  // - Minimum height: 40px for onscreen display
  // - Clear space: 1/4 of badge height around all sides
  // - Google Play must be same size or LARGER than other badges
  // - Google Play official badge: 646x250 (2.584:1 ratio)
  // - App Store official badge: 119.66x40 (2.99:1 ratio)
  // Both badges use same height to comply with Google Play requirement
  const badgeHeight = size === 'large' ? 50 : 40;
  const googlePlayWidth = Math.round(badgeHeight * 2.584);
  const appStoreWidth = Math.round(badgeHeight * 2.99);

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      alignItems="center"
    >
      {/* Google Play Badge - Official */}
      <Link
        href="https://play.google.com/store/apps/details?id=com.zenshift.meditation"
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
          src="/images/app-store-badges/google-play-badge-en.png"
          alt="Get it on Google Play"
          width={googlePlayWidth}
          height={badgeHeight}
          style={{ display: 'block', height: badgeHeight, width: 'auto' }}
          priority
        />
      </Link>

      {/* App Store Badge - Official (Black, per guidelines for multiple badges) */}
      <Box
        sx={{
          opacity: 0.4,
          cursor: 'not-allowed',
          position: 'relative',
        }}
        title="iOS - Coming Soon"
      >
        <Image
          src="/images/app-store-badges/app-store-badge-black-en.svg"
          alt="Download on the App Store - Coming Soon"
          width={appStoreWidth}
          height={badgeHeight}
          style={{ display: 'block', height: badgeHeight, width: 'auto' }}
        />
      </Box>
    </Stack>
  );
}
