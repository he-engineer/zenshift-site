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
  const imageWidth = size === 'large' ? 180 : 150;
  const imageHeight = size === 'large' ? 53 : 44;

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
      <Link
        href="https://play.google.com/store/apps/details?id=com.zenshift.meditation"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          transition: 'transform 0.2s ease',
        }}
      >
        <Image
          src="/images/app-store-badges/google-play-badge-official.svg"
          alt="Get it on Google Play"
          width={imageWidth}
          height={imageHeight}
          style={{ display: 'block' }}
        />
      </Link>
      {showComingSoon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: imageHeight,
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
