'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { colors } from '@/theme/zenshift-theme';
import SectionHeader from '@/components/shared/SectionHeader';

const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is ZenShift?',
        a: 'ZenShift is an AI-powered meditation app designed for busy professionals. It uses intelligent recommendations and custom session generation to help you find calm quickly—whether you have 2 minutes or 30.',
      },
      {
        q: 'What platforms is ZenShift available on?',
        a: 'ZenShift is currently available on Android (8.0+) via Google Play. iOS support is coming soon. Your progress syncs across all your devices.',
      },
      {
        q: 'Do I need an account to use ZenShift?',
        a: 'Yes, an account is required to sync your progress and enable AI personalization. You can sign up with email, Google, or Apple (iOS).',
      },
      {
        q: 'Is ZenShift free?',
        a: 'ZenShift offers a free tier with access to core features. Premium features may be available through subscription in the future.',
      },
    ],
  },
  {
    category: 'AI & Personalization',
    questions: [
      {
        q: 'How does the AI Coach work?',
        a: 'Our AI Coach uses advanced language understanding to have natural conversations about your wellness needs. It recommends sessions from our library or can generate completely personalized sessions just for you—with custom narration and calming background music.',
      },
      {
        q: 'How long does it take to generate a custom session?',
        a: 'Custom sessions are generated in 2-5 minutes. The AI creates a personalized script, synthesizes natural narration, and layers it with calming music—all tailored to your exact situation.',
      },
      {
        q: 'Does the AI learn my preferences?',
        a: 'Yes! The AI learns from your session history, feedback ratings, and preferences to make better recommendations over time. The more you use ZenShift, the more personalized it becomes.',
      },
    ],
  },
  {
    category: 'Privacy & Security',
    questions: [
      {
        q: 'Is my data private?',
        a: 'Yes. Your data is encrypted in transit and at rest (AES-256, TLS 1.2+), never sold to third parties, and you can delete your account at any time. We\'re GDPR and CCPA compliant.',
      },
      {
        q: 'Are my conversations stored?',
        a: 'AI conversations are stored for up to 1 year to improve recommendations, then automatically deleted. You can request deletion at any time through the app or by contacting support.',
      },
      {
        q: 'How do I delete my account?',
        a: 'You can delete your account through the app (Profile → Account Settings → Delete Account) or by emailing zenshift-support@onepingfanventure.com. All your data will be permanently removed.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What are the system requirements?',
        a: 'Android: 8.0+ (API 26+). iOS: Coming soon (iOS 15+ expected). The app requires approximately 100MB of storage.',
      },
      {
        q: 'Does the app work offline?',
        a: 'You can play previously downloaded sessions offline. AI features and custom session generation require an internet connection.',
      },
      {
        q: 'How do I report a bug or issue?',
        a: 'Email us at zenshift-support@onepingfanventure.com with a description of the issue and your device information. We respond to all support requests within 48 hours.',
      },
    ],
  },
];

export default function FAQContent() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: colors.lightGray }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: colors.textSecondaryLight, fontSize: '1.125rem' }}
            >
              Find answers to common questions about ZenShift.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* FAQ Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: colors.white }}>
        <Container maxWidth="md">
          <Stack spacing={6}>
            {faqCategories.map((category) => (
              <Box key={category.category}>
                <Chip
                  label={category.category}
                  sx={{
                    mb: 3,
                    bgcolor: `${colors.zenTeal}15`,
                    color: colors.zenTeal,
                    fontWeight: 600,
                  }}
                />
                <Stack spacing={1}>
                  {category.questions.map((faq, index) => (
                    <Accordion
                      key={index}
                      expanded={expanded === `${category.category}-${index}`}
                      onChange={handleChange(`${category.category}-${index}`)}
                      elevation={0}
                      sx={{
                        border: `1px solid ${colors.borderSubtle}`,
                        borderRadius: '12px !important',
                        '&:before': { display: 'none' },
                        '&.Mui-expanded': {
                          margin: 0,
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: colors.zenTeal }} />}
                        sx={{
                          px: 3,
                          py: 1,
                          '& .MuiAccordionSummary-content': {
                            my: 1.5,
                          },
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                          {faq.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 3, pb: 3 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: colors.textSecondaryLight, lineHeight: 1.8 }}
                        >
                          {faq.a}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>

          {/* Contact CTA */}
          <Box
            sx={{
              mt: 8,
              p: 4,
              bgcolor: colors.lightGray,
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ mb: 1 }}>
              Still have questions?
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondaryLight, mb: 2 }}>
              We're here to help. Reach out to our support team.
            </Typography>
            <Typography variant="body2">
              <a
                href="mailto:zenshift-support@onepingfanventure.com"
                style={{ color: colors.zenTeal, textDecoration: 'none' }}
              >
                zenshift-support@onepingfanventure.com
              </a>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
