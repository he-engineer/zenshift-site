'use client';

import * as React from 'react';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from '@/theme/zenshift-theme';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: colors.textPrimary,
                mb: 3,
                fontWeight: 700,
              }}
            >
              Personalized Meditation in Minutes
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.textSecondary,
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                lineHeight: 1.7,
                mb: 4,
                maxWidth: 560,
              }}
            >
              <Box component="span" sx={{ display: 'block' }}>
                AI-powered sessions for a calm mind.
              </Box>
              <Box component="span" sx={{ display: 'block' }}>
                Open the app, share how you feel, find calm.
              </Box>
            </Typography>

            {/* Metrics */}
            <Stack
              direction="row"
              spacing={{ xs: 3, sm: 5 }}
              sx={{ mb: 4 }}
            >
              <Box>
                <Typography
                  sx={{
                    color: colors.textPrimary,
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}
                >
                  2-10 min
                </Typography>
                <Typography
                  sx={{
                    color: colors.textTertiary,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Quick Sessions
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: colors.textPrimary,
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}
                >
                  AI-Powered
                </Typography>
                <Typography
                  sx={{
                    color: colors.textTertiary,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Personalization
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: colors.textPrimary,
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}
                >
                  Custom
                </Typography>
                <Typography
                  sx={{
                    color: colors.textTertiary,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Generation
                </Typography>
              </Box>
            </Stack>

            {/* CTA Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                component={Link}
                href="#download"
                variant="contained"
                color="primary"
                size="large"
                sx={{ minWidth: 200 }}
              >
                Download Free App
              </Button>
              <Button
                component={Link}
                href="#how-it-works"
                variant="outlined"
                size="large"
                sx={{
                  minWidth: 180,
                  borderColor: colors.textPrimary,
                  color: colors.textPrimary,
                  '&:hover': {
                    borderColor: colors.zenTealLight,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                See How It Works
              </Button>
            </Stack>
          </Grid>

          {/* App Screenshot */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 280, sm: 320 },
                  aspectRatio: '9 / 19.5',
                  borderRadius: 1.5,
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                }}
              >
                <Image
                  src="/images/app-screenshots/home-recommendations.png"
                  alt="ZenShift app showing AI-powered recommendations"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
