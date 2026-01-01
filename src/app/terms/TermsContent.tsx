'use client';

import * as React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import Link from 'next/link';
import { colors } from '@/theme/zenshift-theme';

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By downloading, installing, or using the ZenShift Meditation Coach app ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.

These Terms apply to all users of the App, including visitors, registered users, and subscribers.`,
  },
  {
    id: 'description',
    title: '2. Description of Service',
    content: `ZenShift is an AI-powered meditation application that provides:
• Curated meditation sessions across various categories
• AI Coach for personalized recommendations
• Custom session generation based on your needs
• Progress tracking and history
• Cross-device synchronization

The service may be modified, updated, or discontinued at any time without notice.`,
  },
  {
    id: 'account',
    title: '3. User Account',
    content: `To use certain features, you must create an account. You agree to:
• Provide accurate and complete registration information
• Maintain the security of your account credentials
• Promptly update your information if it changes
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use

We reserve the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    id: 'use',
    title: '4. Acceptable Use',
    content: `You agree NOT to:
• Use the App for any unlawful purpose
• Attempt to gain unauthorized access to our systems
• Interfere with or disrupt the App or servers
• Upload malicious code or harmful content
• Violate any applicable laws or regulations
• Infringe on intellectual property rights
• Harass, abuse, or harm other users
• Use the App in any way that could damage our reputation

We reserve the right to terminate access for violations.`,
  },
  {
    id: 'content',
    title: '5. Content and Intellectual Property',
    content: `**Our Content:** All meditation content, AI systems, designs, and materials are owned by One Ping Fan Venture LLC and protected by copyright and intellectual property laws.

**Your Content:** You retain ownership of any content you provide (feedback, ratings). By submitting content, you grant us a license to use it to improve our services.

**License:** We grant you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.`,
  },
  {
    id: 'health',
    title: '6. Health Disclaimer',
    content: `**ZenShift is not a medical device or healthcare service.**

The App provides meditation and mindfulness content for general wellness purposes only. It is NOT intended to:
• Diagnose, treat, cure, or prevent any disease
• Replace professional medical or mental health advice
• Be used in emergency situations

If you have a medical or mental health condition, consult a healthcare professional before using the App. If you experience a medical emergency, call emergency services immediately.`,
  },
  {
    id: 'subscription',
    title: '7. Subscriptions and Payments',
    content: `If you purchase a subscription:
• Subscription fees are billed in advance
• Subscriptions automatically renew unless cancelled
• You can cancel anytime through your app store account
• Refunds are handled according to app store policies
• We may change pricing with reasonable notice

Free trials, if offered, automatically convert to paid subscriptions unless cancelled.`,
  },
  {
    id: 'liability',
    title: '8. Limitation of Liability',
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW:

The App is provided "AS IS" without warranties of any kind. We do not guarantee that the App will be uninterrupted, error-free, or secure.

We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the App.

Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim.`,
  },
  {
    id: 'indemnification',
    title: '9. Indemnification',
    content: `You agree to indemnify and hold harmless One Ping Fan Venture LLC and its officers, directors, employees, and agents from any claims, damages, or expenses arising from:
• Your use of the App
• Your violation of these Terms
• Your violation of any rights of another party`,
  },
  {
    id: 'termination',
    title: '10. Termination',
    content: `Either party may terminate this agreement at any time:
• You may delete your account through the App or by contacting support
• We may suspend or terminate your access for Terms violations

Upon termination, your right to use the App ceases immediately. Provisions that by their nature should survive will remain in effect.`,
  },
  {
    id: 'governing',
    title: '11. Governing Law',
    content: `These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.

Any disputes shall be resolved in the courts of Delaware, and you consent to personal jurisdiction in these courts.`,
  },
  {
    id: 'changes',
    title: '12. Changes to Terms',
    content: `We may update these Terms at any time. We will notify you of material changes by:
• Posting the updated Terms in the App
• Updating the "Last Updated" date
• Sending an email for significant changes

Continued use after changes constitutes acceptance of the new Terms.`,
  },
  {
    id: 'contact',
    title: '13. Contact Information',
    content: `For questions about these Terms:

**Email:** zenshift-support@onepingfanventure.com
**Company:** One Ping Fan Venture LLC
**Location:** United States`,
  },
];

export default function TermsContent() {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: colors.lightGray }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Terms of Service
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
              Please read these Terms of Service carefully before using ZenShift Meditation Coach.
              By using the App, you agree to be bound by these Terms. If you do not agree, please
              do not use the App.
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
