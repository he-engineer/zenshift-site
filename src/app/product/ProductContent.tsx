'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ChatIcon from '@mui/icons-material/Chat';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import TimelineIcon from '@mui/icons-material/Timeline';
import SyncIcon from '@mui/icons-material/Sync';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { colors, gradients } from '@/theme/zenshift-theme';
import SectionHeader from '@/components/shared/SectionHeader';
import AppStoreButtons from '@/components/shared/AppStoreButtons';

const features = [
  {
    icon: ChatIcon,
    title: 'AI Coach',
    description: 'Talk to your personal meditation coach. Share what\'s on your mind—stress, anxiety, trouble sleeping—and get an instant recommendation tailored to your needs.',
    bullets: [
      'Conversational interface (text-based)',
      'Learns your preferences over time',
      'Suggests from library or generates custom sessions',
    ],
    image: '/images/app-screenshots/coach-chat-recommendations.png',
  },
  {
    icon: AutoAwesomeIcon,
    title: 'Custom Session Generation',
    description: 'Can\'t find the right session? Tell the AI what you need, and it creates a personalized, narrated meditation in 2-5 minutes—completely unique to you.',
    bullets: [
      'Specify your need, duration, and style',
      'AI-generated narration with calming background music',
      'Save and replay your custom sessions',
    ],
    image: '/images/app-screenshots/generate-custom-session.png',
  },
  {
    icon: LibraryMusicIcon,
    title: 'Curated Session Library',
    description: 'Professionally guided sessions across 6 categories, designed for different needs and time constraints.',
    bullets: [
      'Sleep, Focus, Stress, Relaxation, Reset, Travel',
      'Sessions from 2 to 30 minutes',
      'High-quality narration and ambient sounds',
    ],
    image: '/images/app-screenshots/home-recommendations.png',
  },
  {
    icon: TimelineIcon,
    title: 'Progress Tracking',
    description: 'Build lasting mindfulness habits with comprehensive tracking and insights.',
    bullets: [
      'Meditation streaks and milestones',
      'Relief ratings after each session',
      'Insights into your meditation patterns',
    ],
    image: '/images/app-screenshots/profile-overview.png',
  },
];

const categories = [
  { name: 'Sleep', color: '#6366F1', description: 'Wind down for better rest' },
  { name: 'Focus', color: '#10B981', description: 'Sharpen concentration' },
  { name: 'Stress', color: '#EF4444', description: 'Quick tension relief' },
  { name: 'Relaxation', color: '#8B5CF6', description: 'General calm' },
  { name: 'Reset', color: '#F59E0B', description: 'Mid-day recharge' },
  { name: 'Travel', color: '#06B6D4', description: 'Commute & travel anxiety' },
];

export default function ProductContent() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
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
            src="/images/meditation-photos/optimized/15_alpine_valley_morning/desktop.webp"
            alt="Alpine valley"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: gradients.darkOverlay,
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{ color: colors.textPrimary, mb: 3 }}
            >
              Everything You Need to Find Calm
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.textSecondary,
                fontSize: '1.25rem',
                lineHeight: 1.7,
              }}
            >
              ZenShift combines AI-powered personalization with a curated library
              of professional meditation sessions. Quick relief when you need it,
              deeper practice when you have time.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Features Deep Dive */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.white }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Feature Deep Dive"
            subtitle="Everything you need for a personalized meditation practice."
          />

          <Stack spacing={8}>
            {features.map((feature, index) => (
              <Grid
                container
                spacing={6}
                key={feature.title}
                direction={index % 2 === 1 ? 'row-reverse' : 'row'}
                alignItems="center"
              >
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        bgcolor: `${colors.zenTeal}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <feature.icon sx={{ fontSize: 28, color: colors.zenTeal }} />
                    </Box>
                    <Typography variant="h3" component="h2">
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ color: colors.textSecondaryLight, mb: 3, lineHeight: 1.8 }}
                  >
                    {feature.description}
                  </Typography>
                  <Stack spacing={1.5}>
                    {feature.bullets.map((bullet) => (
                      <Box
                        key={bullet}
                        sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: colors.zenTeal,
                            mt: 1,
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                          {bullet}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
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
                        width: { xs: 220, md: 260 },
                        aspectRatio: '9 / 19.5',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.lightGray }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Session Categories"
            subtitle="Professionally guided sessions for every need."
          />

          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item xs={6} sm={4} md={2} key={category.name}>
                <Card
                  elevation={0}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    bgcolor: colors.white,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px -8px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      bgcolor: category.color,
                      mx: 'auto',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" sx={{ mb: 0.5 }}>
                    {category.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: colors.textSecondaryLight }}>
                    {category.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Platform Availability */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.white }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <SectionHeader
              title="Available On"
              subtitle="Your data syncs seamlessly between devices. Start on your phone, continue on your tablet, track progress anywhere."
            />

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={4}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneAndroidIcon sx={{ fontSize: 40, color: colors.zenTeal }} />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="h6">Android</Typography>
                  <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                    Android 8.0+
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneAndroidIcon sx={{ fontSize: 40, color: colors.neutral }} />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="h6">iOS</Typography>
                  <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                    Coming Soon
                  </Typography>
                </Box>
              </Box>
            </Stack>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <AppStoreButtons />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
