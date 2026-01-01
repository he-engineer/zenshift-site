'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { colors } from '@/theme/zenshift-theme';
import SectionHeader from '@/components/shared/SectionHeader';

const testimonials = [
  {
    quote: "Finally, a meditation app that gets it. Quick, effective, no BS. Perfect for my 5 minutes between meetings.",
    author: 'Tech Executive',
    role: 'Beta User',
  },
  {
    quote: "The AI actually understands what I need. No more scrolling through endless meditation lists.",
    author: 'Management Consultant',
    role: 'Beta User',
  },
  {
    quote: "I was skeptical about AI meditation, but the custom sessions feel genuinely personal. It knows my name and my situation.",
    author: 'Healthcare Professional',
    role: 'Beta User',
  },
];

export default function Testimonials() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: colors.lightGray,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title="What Professionals Are Saying"
          subtitle="Join thousands of busy professionals finding calm with ZenShift."
        />

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: colors.white,
                  borderRadius: 3,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    fontSize: 48,
                    color: colors.zenTeal,
                    opacity: 0.2,
                    position: 'absolute',
                    top: 16,
                    left: 16,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textSecondaryLight,
                    fontStyle: 'italic',
                    lineHeight: 1.8,
                    mb: 3,
                    mt: 2,
                  }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: colors.zenTeal,
                      width: 44,
                      height: 44,
                    }}
                  >
                    {testimonial.author.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: colors.textPrimaryLight }}
                    >
                      {testimonial.author}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: colors.textTertiaryLight }}
                    >
                      {testimonial.role}
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
