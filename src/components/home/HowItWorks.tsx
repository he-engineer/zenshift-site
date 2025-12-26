'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
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
    description: "Tell our AI Coach how you're feeling or what you need. No predefined categories—just natural conversation.",
    icon: ChatIcon,
    image: '/images/app-screenshots/coach-chat-prompts.png',
  },
  {
    number: 2,
    title: 'Get Matched',
    description: 'AI recommends the perfect session from our library—or creates one just for you in 2-3 minutes.',
    icon: AutoAwesomeIcon,
    image: '/images/app-screenshots/coach-chat-recommendations.png',
  },
  {
    number: 3,
    title: 'Feel Relief',
    description: 'Track your progress and build lasting mindfulness habits with personalized insights.',
    icon: FavoriteIcon,
    image: '/images/app-screenshots/session-player.png',
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
                  height: '100%',
                  bgcolor: colors.white,
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                {/* Screenshot */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 280,
                    bgcolor: colors.deepNavy,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: 140,
                      height: 260,
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3 }}>
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
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: colors.zenTeal,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: colors.white,
                        fontWeight: 700,
                        fontSize: '1.25rem',
                      }}
                    >
                      {step.number}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: colors.textSecondaryLight, lineHeight: 1.7 }}>
                    {step.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
