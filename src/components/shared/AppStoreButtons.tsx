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
  // - Official SVG badges maintain intrinsic aspect ratios
  // - Google Play badge standard: 135x40 (3.375:1)
  // - App Store badge standard: 120x40 (3:1)
  const badgeHeight = size === 'large' ? 54 : 45;

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      alignItems="center"
    >
      {/* Google Play Badge */}
      <Link
        href="https://play.google.com/store/apps/details?id=com.zenshift.meditation"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          height: badgeHeight,
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
          src="/images/app-store-badges/google-play-badge-official.svg"
          alt="Get it on Google Play"
          width={Math.round(badgeHeight * 3.375)}
          height={badgeHeight}
          style={{ display: 'block', height: badgeHeight, width: 'auto' }}
          priority
        />
      </Link>

      {/* App Store Badge or Coming Soon */}
      {showComingSoon ? (
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
              whiteSpace: 'nowrap',
            }}
          >
            iOS - Coming Soon
          </Typography>
        </Box>
      ) : (
        <Box
          style={{
            display: 'block',
            height: badgeHeight,
            opacity: 0.4,
            cursor: 'not-allowed',
          }}
        >
          <Image
            src="/images/app-store-badges/app-store-badge-official.svg"
            alt="Download on the App Store - Coming Soon"
            width={Math.round(badgeHeight * 3)}
            height={badgeHeight}
            style={{ display: 'block', height: badgeHeight, width: 'auto' }}
          />
        </Box>
      )}
    </Stack>
  );
}
