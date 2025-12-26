'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import { colors, gradients } from '@/theme/zenshift-theme';
import SectionHeader from '@/components/shared/SectionHeader';

const values = [
  'One-size-fits-all meditation doesn\'t work',
  'AI can make wellness more personal, not less human',
  'Quick relief is better than no relief',
  'Building habits should be simple, not complicated',
];

const technology = [
  'Conversational AI powered by advanced language models',
  'Serverless cloud infrastructure for infinite scalability',
  'Intelligent matching algorithms that improve with every interaction',
];

export default function AboutContent() {
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
            src="/images/meditation-photos/optimized/16_ocean_waves/desktop.webp"
            alt="Ocean waves"
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

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              sx={{ color: colors.textPrimary, mb: 3 }}
            >
              About ZenShift
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.textSecondary,
                fontSize: '1.25rem',
                lineHeight: 1.7,
              }}
            >
              Making meditation accessible and valuable for everyone—especially
              those who think they don't have time.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.white }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: colors.textSecondaryLight, mb: 4, lineHeight: 1.8 }}
              >
                ZenShift exists to make meditation accessible and valuable for
                everyone—especially those who think they don't have time.
              </Typography>

              <Typography variant="h6" sx={{ mb: 2 }}>
                We believe:
              </Typography>
              <Stack spacing={2}>
                {values.map((value) => (
                  <Box
                    key={value}
                    sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: `${colors.zenTeal}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: colors.zenTeal,
                        fontWeight: 700,
                        fontSize: '0.875rem',
                      }}
                    >
                      ✓
                    </Box>
                    <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Our Technology
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: colors.textSecondaryLight, mb: 4, lineHeight: 1.8 }}
              >
                ZenShift is built on cutting-edge technology that allows us to offer
                personalized meditation experiences that adapt uniquely to each person.
              </Typography>

              <Stack spacing={2}>
                {technology.map((tech) => (
                  <Paper
                    key={tech}
                    elevation={0}
                    sx={{
                      p: 2,
                      bgcolor: colors.lightGray,
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                      {tech}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Company Info */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.lightGray }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                The Company
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: colors.textSecondaryLight, mb: 3, lineHeight: 1.8 }}
              >
                ZenShift is developed by <strong>One Ping Fan Venture LLC</strong>,
                a technology company pioneering AI-powered personalization in the
                wellness space.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: colors.textSecondaryLight, lineHeight: 1.8 }}
              >
                Our platform combines conversational AI, serverless cloud infrastructure,
                and evidence-based meditation practices to deliver truly personalized
                mindfulness experiences.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: colors.white,
                  borderRadius: 3,
                }}
              >
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Contact Information
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: colors.textPrimaryLight, fontWeight: 600 }}>
                      Company
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                      One Ping Fan Venture LLC
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: colors.textPrimaryLight, fontWeight: 600 }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                      United States
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: colors.textPrimaryLight, fontWeight: 600 }}>
                      Email
                    </Typography>
                    <MuiLink
                      href="mailto:zenshift-support@onepingfanventure.com"
                      sx={{ color: colors.zenTeal, textDecoration: 'none' }}
                    >
                      zenshift-support@onepingfanventure.com
                    </MuiLink>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
