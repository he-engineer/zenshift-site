'use client';

import * as React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { colors } from '@/theme/zenshift-theme';
import AppStoreButtons from '@/components/shared/AppStoreButtons';

export default function DownloadCTA() {
  return (
    <Box
      component="section"
      id="download"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 14 },
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: colors.zenTeal,
          }}
        />
      </Box>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: colors.textPrimary,
              mb: 2,
              fontWeight: 700,
            }}
          >
            Ready to Find Your Calm?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.textSecondary,
              fontSize: '1.25rem',
              mb: 5,
              maxWidth: 560,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Download ZenShift free and start meditating in seconds.
            Transform stress into calm, distraction into focus.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
            <AppStoreButtons size="large" />
          </Box>

          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              p: 3,
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: colors.textSecondary, lineHeight: 1.8 }}
            >
              <strong style={{ color: colors.textPrimary }}>Available Now:</strong> Android 8.0+ on Google Play
              <br />
              <strong style={{ color: colors.textPrimary }}>Coming Soon:</strong> iOS with all the same great features
              <br />
              <strong style={{ color: colors.textPrimary }}>Privacy:</strong> Your data stays private and secure
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
