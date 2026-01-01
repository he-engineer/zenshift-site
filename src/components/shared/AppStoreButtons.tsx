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
      <Box
        sx={{
          opacity: 0.4,
          cursor: 'not-allowed',
          position: 'relative',
        }}
        title="iOS - Coming Soon"
      >
        <Image
          src="/images/app-store-badges/app-store-badge.avif"
          alt="Download on the App Store - Coming Soon"
          width={0}
          height={0}
          sizes="100vw"
          style={{ display: 'block', height: badgeHeight, width: 'auto' }}
        />
      </Box>
    </Stack>
  );
}
