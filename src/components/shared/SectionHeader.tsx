'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '@/theme/zenshift-theme';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  title,
  subtitle,
  light = false,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 4, md: 6 },
        maxWidth: align === 'center' ? 700 : 'none',
        mx: align === 'center' ? 'auto' : 0,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          color: light ? colors.textPrimary : colors.textPrimaryLight,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: light ? colors.textSecondary : colors.textSecondaryLight,
            fontSize: '1.125rem',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
