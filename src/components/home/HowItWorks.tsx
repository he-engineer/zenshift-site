'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import ChatIcon from '@mui/icons-material/Chat';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from '@/theme/zenshift-theme';
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
              <Card
                elevation={0}
                sx={{
                  height: { xs: 400, md: 480 },
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: `1px solid ${colors.borderSubtle}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.12)',
                    '& .how-it-works-image': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 220, md: 260 },
                    overflow: 'hidden',
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="how-it-works-image"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)',
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 1.5,
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
                        color: colors.textPrimaryLight,
                      }}
                    >
                      {step.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.textSecondaryLight,
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
