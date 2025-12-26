'use client';

import * as React from 'react';
import { Box, Container, Typography, Paper, Stack, Divider } from '@mui/material';
import Link from 'next/link';
import { colors } from '@/theme/zenshift-theme';

const sections = [
  {
    id: 'information-collect',
    title: '1. Information We Collect',
    content: `ZenShift collects information to provide personalized meditation experiences:

**Data you provide:**
• Account information (email, name) when you sign up
• Meditation preferences and settings
• Favorites and saved sessions
• Feedback and relief ratings after sessions

**Data created as you use the app:**
• Session history and progress
• AI conversation history (for personalized recommendations)
• Usage patterns and recommendation signals
• Device compatibility details`,
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Information',
    content: `We use your information only to run and improve ZenShift:

• Deliver personalized meditations and recommendations
• Remember your preferences and resume playback
• Calculate progress insights (streaks, stats, milestones)
• Generate AI-powered custom sessions
• Improve recommendation algorithms based on feedback

**We do not use your data for advertising or sell it to third parties.**`,
  },
  {
    id: 'data-storage',
    title: '3. Data Storage and Security',
    content: `**Cloud Storage:** Your account data, preferences, and history are stored securely in AWS cloud infrastructure.

**Encryption:** All data is encrypted in transit (TLS 1.2+) and at rest (AES-256).

**Retention:**
• Account data is retained while your account is active
• AI conversations are stored for 1 year to improve recommendations, then automatically deleted
• You can delete your account and all data at any time

**Security Measures:**
• Industry-standard encryption
• Access controls and authentication
• Regular security updates
• Minimal data collection principle`,
  },
  {
    id: 'data-sharing',
    title: '4. Data Sharing and Third Parties',
    content: `ZenShift does not sell, rent, or share personal data with marketers. We may share information only:

• **Service Providers:** AWS (cloud infrastructure), OpenAI (AI features), App stores
• **Legal Requirements:** If required by law or court order
• **Business Transfers:** In the event of a merger or acquisition
• **Aggregated Data:** Anonymized data that cannot identify you`,
  },
  {
    id: 'your-rights',
    title: '5. Your Rights and Controls',
    content: `You have control over your data:

• **Access:** View your data through the app's Profile section
• **Correction:** Update your information in Account Settings
• **Deletion:** Delete your account and all data at any time
• **Portability:** Request a copy of your data via email
• **Opt-out:** Disable optional features like usage analytics

To exercise these rights, use the app settings or email zenshift-support@onepingfanventure.com.`,
  },
  {
    id: 'childrens-privacy',
    title: '6. Children\'s Privacy',
    content: `ZenShift is not intended for children under 13 (or 16 in the EU). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.`,
  },
  {
    id: 'gdpr-ccpa',
    title: '7. GDPR and CCPA Compliance',
    content: `**For EU Users (GDPR):**
• Right to access, rectify, and delete your data
• Right to data portability
• Right to object to processing
• Right to withdraw consent

**For California Users (CCPA):**
• Right to know what personal information we collect
• Right to delete personal information
• Right to opt-out of data sales (we don't sell data)
• Right to non-discrimination`,
  },
  {
    id: 'changes',
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by:
• Posting the new policy on our website
• Updating the "Last Updated" date
• Sending an email notification for significant changes

Your continued use of ZenShift after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: 'contact',
    title: '9. Contact Us',
    content: `For privacy-related questions or to exercise your rights:

**Email:** zenshift-support@onepingfanventure.com
**Company:** One Ping Fan Venture LLC
**Location:** United States

We respond to all privacy requests within 30 days.`,
  },
];

export default function PrivacyContent() {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: colors.lightGray }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
              Last Updated: December 2025 | Effective Date: December 2025
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: colors.white }}>
        <Container maxWidth="md">
          {/* Intro */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              bgcolor: colors.lightGray,
              borderRadius: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: colors.textSecondaryLight, lineHeight: 1.8 }}>
              ZenShift Meditation Coach ("ZenShift," "we," "our," or "us") respects your privacy.
              This Privacy Policy explains what information the ZenShift app collects, how we use it,
              and the choices you have. We're committed to transparency and protecting your personal data.
            </Typography>
          </Paper>

          {/* Table of Contents */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 6,
              bgcolor: colors.lightGray,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Table of Contents
            </Typography>
            <Stack spacing={1}>
              {sections.map((section) => (
                <Typography
                  key={section.id}
                  component="a"
                  href={`#${section.id}`}
                  variant="body2"
                  sx={{
                    color: colors.zenTeal,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {section.title}
                </Typography>
              ))}
            </Stack>
          </Paper>

          {/* Sections */}
          <Stack spacing={5}>
            {sections.map((section) => (
              <Box key={section.id} id={section.id}>
                <Typography
                  variant="h4"
                  sx={{
                    color: colors.zenTeal,
                    mb: 2,
                    pb: 1,
                    borderBottom: `2px solid ${colors.borderSubtle}`,
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    color: colors.textSecondaryLight,
                    lineHeight: 1.8,
                    whiteSpace: 'pre-line',
                    '& strong': { color: colors.textPrimaryLight },
                  }}
                >
                  {section.content}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* Back Link */}
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Link
              href="/"
              style={{
                color: colors.zenTeal,
                textDecoration: 'none',
              }}
            >
              ← Back to Home
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
