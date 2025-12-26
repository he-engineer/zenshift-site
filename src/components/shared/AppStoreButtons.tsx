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

export default function AppStoreButtons({ size = 'normal', showComingSoon = true }: AppStoreButtonsProps) {
  // Badge dimensions per brand guidelines:
  // - Minimum height: 40px for onscreen display
  // - Maintain aspect ratio of official badges
  // - Google Play badge ratio: approximately 3.08:1
  const badgeHeight = size === 'large' ? 55 : 45;
  const badgeWidth = Math.round(badgeHeight * 3.08);

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={3}
      alignItems="center"
      sx={{
        // Clear space: 1/4 of badge height per brand guidelines
        py: badgeHeight * 0.25 / 8,
      }}
    >
      <Link
        href="https://play.google.com/store/apps/details?id=com.zenshift.meditation"
        target="_blank"
        rel="noopener noreferrer"
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
          src="/images/app-store-badges/google-play-badge.png"
          alt="Get it on Google Play"
          width={badgeWidth}
          height={badgeHeight}
          style={{ display: 'block' }}
          priority
        />
      </Link>
      {showComingSoon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: badgeHeight,
            px: 3,
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 1,
          }}
        >
          <Typography
            sx={{
              color: colors.textTertiary,
              fontWeight: 600,
              fontSize: size === 'large' ? '0.9375rem' : '0.8125rem',
            }}
          >
            iOS - Coming Soon
          </Typography>
        </Box>
      )}
    </Stack>
  );
}
