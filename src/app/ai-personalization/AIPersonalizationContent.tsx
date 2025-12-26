'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Button,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ChatIcon from '@mui/icons-material/Chat';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LockIcon from '@mui/icons-material/Lock';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import { colors, gradients } from '@/theme/zenshift-theme';
import SectionHeader from '@/components/shared/SectionHeader';

const howItWorks = [
  {
    icon: ChatIcon,
    title: 'Understands Your Mood',
    description: "Tell the AI how you're feeling, and it understands the nuance—whether you're stressed, anxious, can't sleep, or need focus.",
  },
  {
    icon: PsychologyIcon,
    title: 'Generates Personalized Content',
    description: 'AI creates a custom meditation script tailored to your specific needs, situation, and preferences.',
  },
  {
    icon: RecordVoiceOverIcon,
    title: 'Produces Professional Audio',
    description: 'The script is transformed into a professionally narrated session with calming background music.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Learns Over Time',
    description: 'Your feedback and usage patterns improve future recommendations, making each session better.',
  },
];

const personalizationPoints = [
  'Your stated preferences (goals, duration, style)',
  'Session history (what you\'ve tried, completed, favorited)',
  'Relief feedback (how you felt after each session)',
  'Time of day and usage patterns',
];

const privacyPoints = [
  { icon: LockIcon, text: 'Data encrypted in transit and at rest (AES-256, TLS 1.2+)' },
  { icon: DeleteIcon, text: 'Conversations stored for 1 year, then automatically deleted' },
  { icon: SecurityIcon, text: 'You can delete your account and all data at any time' },
];

export default function AIPersonalizationContent() {
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
            src="/images/meditation-photos/optimized/12_starry_night_sky/desktop.webp"
            alt="Starry night sky"
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
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{ color: colors.textPrimary, mb: 3 }}
              >
                Your Personal Meditation Guide
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: colors.textSecondary,
                  fontSize: '1.25rem',
                  lineHeight: 1.7,
                  mb: 4,
                }}
              >
                ZenShift's AI Coach uses advanced language understanding to have
                natural conversations about your wellness needs. It doesn't just
                recommend sessions—it creates them.
              </Typography>
              <Button
                component={Link}
                href="/#download"
                variant="contained"
                color="primary"
                size="large"
              >
                Try It Free
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 240, md: 280 },
                    aspectRatio: '9 / 19.5',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <Image
                    src="/images/app-screenshots/coach-chat-prompts.png"
                    alt="AI Coach conversation"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.white }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="How the AI Works"
            subtitle="This isn't just matching keywords to a library. ZenShift generates truly personalized meditation experiences that don't exist until you need them."
          />

          <Grid container spacing={4}>
            {howItWorks.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={step.title}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: colors.lightGray,
                    borderRadius: 3,
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: colors.zenTeal,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <step.icon sx={{ fontSize: 32, color: colors.white }} />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: colors.zenTeal,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Step {index + 1}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1, mb: 1.5 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* What Personalization Means */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.lightGray }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Personalization You Control
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: colors.textSecondaryLight, mb: 4, lineHeight: 1.8 }}
              >
                We personalize your experience based on signals you provide—never
                selling your data or using it for advertising.
              </Typography>

              <Typography variant="h6" sx={{ mb: 2 }}>
                We personalize based on:
              </Typography>
              <Stack spacing={1.5} sx={{ mb: 4 }}>
                {personalizationPoints.map((point) => (
                  <Box
                    key={point}
                    sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: colors.zenTeal,
                        mt: 1,
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Typography variant="h6" sx={{ mb: 2 }}>
                We never:
              </Typography>
              <Stack spacing={1.5}>
                <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                  • Share your data with third parties for marketing
                </Typography>
                <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                  • Use your conversations for advertising
                </Typography>
                <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                  • Require personal data beyond what's needed for the service
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 240, md: 280 },
                    aspectRatio: '9 / 19.5',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Image
                    src="/images/app-screenshots/session-complete-feedback.png"
                    alt="Session feedback"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Privacy Commitment */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.white }}>
        <Container maxWidth="md">
          <SectionHeader
            title="Your Privacy Matters"
            subtitle="We believe meditation is deeply personal. Your data stays private and secure."
          />

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {privacyPoints.map((point) => (
              <Grid item xs={12} md={4} key={point.text}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: colors.lightGray,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                  }}
                >
                  <point.icon sx={{ color: colors.zenTeal, fontSize: 24, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                    {point.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: colors.textSecondaryLight, mb: 3 }}>
              GDPR and CCPA compliant. No advertising, no data selling, ever.
            </Typography>
            <Button
              component={Link}
              href="/privacy-policy"
              variant="outlined"
              color="primary"
            >
              Read Full Privacy Policy
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
