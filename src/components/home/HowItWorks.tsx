'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import ChatIcon from '@mui/icons-material/Chat';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors, gradients } from '@/theme/zenshift-theme';
import SectionHeader from '@/components/shared/SectionHeader';

const steps = [
  {
    number: 1,
    title: 'Open & Express',
    description: "Tell ZenShift how you're feeling or what you need—through simple taps or natural conversation.",
    icon: ChatIcon,
    image: '/images/meditation-photos/optimized/19_bamboo_forest/desktop.webp',
  },
  {
    number: 2,
    title: 'Get Matched',
    description: 'AI recommends the perfect session from our library—or creates one just for you in 2-3 minutes.',
    icon: AutoAwesomeIcon,
    image: '/images/meditation-photos/optimized/20_misty_layered_mountains/desktop.webp',
  },
  {
    number: 3,
    title: 'Feel Relief',
    description: 'Track your progress and build lasting mindfulness habits with personalized insights.',
    icon: FavoriteIcon,
    image: '/images/meditation-photos/optimized/5_river_quiet_valley/desktop.webp',
  },
];

export default function HowItWorks() {
  return (
    <Box
      component="section"
      id="how-it-works"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: colors.lightGray,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title="Find Calm in 3 Steps"
          subtitle="A conversational system that understands your needs and delivers personalized meditation—whether from our library or created just for you."
        />

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {steps.map((step) => (
            <Grid item xs={12} md={4} key={step.number}>
              <Paper
                elevation={0}
                sx={{
                  position: 'relative',
                  height: { xs: 400, md: 480 },
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
                  },
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
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: colors.white,
                      p: 4,
                      borderRadius: '0 0 12px 12px',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          bgcolor: colors.zenTeal,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.white,
                          fontWeight: 700,
                          fontSize: '1.5rem',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        {step.number}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: colors.deepNavy,
                        }}
                      >
                        {step.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.textSecondaryLight,
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
