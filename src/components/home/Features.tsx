'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import { colors } from '@/theme/zenshift-theme';
import SectionHeader from '@/components/shared/SectionHeader';

const features = [
  {
    title: 'AI Coach Conversations',
    description: 'Have a real conversation with your meditation coach. Describe what you need, and our AI understands your situation—then recommends the perfect session or offers to create a custom one.',
    image: '/images/meditation-photos/optimized/1_forest_morning_mist/desktop.webp',
    screenshot: '/images/app-screenshots/coach-chat-recommendations.png',
  },
  {
    title: 'Custom Session Generation',
    description: "Can't find exactly what you need? Our AI creates a fully personalized meditation session—complete with soothing narration and calming music, tailored to your exact situation in just 2-3 minutes.",
    image: '/images/meditation-photos/optimized/2_mountain_sunrise/desktop.webp',
    screenshot: '/images/app-screenshots/generate-custom-session.png',
  },
  {
    title: 'Smart Library Matching',
    description: 'Browse or discover from our library of curated sessions across Sleep, Focus, Stress, Relaxation, Reset, and Travel categories. AI recommends the best match for your mood and available time.',
    image: '/images/meditation-photos/optimized/3_still_lake_reflection/desktop.webp',
    screenshot: '/images/app-screenshots/home-recommendations.png',
  },
  {
    title: 'Progress Tracking & Learning',
    description: 'Your session history helps the AI improve recommendations over time. Track your progress with streaks, milestones, and relief ratings. Favorites and history sync across all your devices.',
    image: '/images/meditation-photos/optimized/4_ocean_horizon_at_dusk/desktop.webp',
    screenshot: '/images/app-screenshots/profile-overview.png',
  },
];

export default function Features() {
  return (
    <Box
      component="section"
      id="features"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: colors.white,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title="ZenShift Features"
          subtitle="Our AI-powered system combines conversational guidance with personalized recommendations and custom content generation. Whether you need instant relief or a long-term practice, ZenShift adapts uniquely to you."
        />

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={feature.title}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: `1px solid ${colors.borderSubtle}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.12)',
                    '& .feature-image': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 220,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="feature-image"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  {/* Overlay gradient */}
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
                  {/* App screenshot overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      width: 80,
                      aspectRatio: '9 / 19.5',
                      borderRadius: 1.5,
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Image
                      src={feature.screenshot}
                      alt={`${feature.title} screenshot`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      color: colors.textPrimaryLight,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.textSecondaryLight,
                      lineHeight: 1.7,
                    }}
                  >
                    {feature.description}
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
