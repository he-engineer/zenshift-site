'use client';

import * as React from 'react';
import { Box, Container, Grid, Link as MuiLink, Typography, IconButton, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { colors } from '@/theme/zenshift-theme';

const footerLinks = {
  product: [
    { label: 'Features', href: '/product' },
    { label: 'AI Coach', href: '/ai-personalization' },
    { label: 'Download', href: '/#download' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Delete Account', href: '/delete-account' },
  ],
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.deepNavy,
        color: colors.textSecondary,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Image
                src="/images/logo/zenshift-app-icon-24x24.png"
                alt="ZenShift"
                width={24}
                height={24}
                style={{ borderRadius: 6 }}
              />
              <Typography
                variant="h6"
                sx={{ color: colors.textPrimary, fontWeight: 600 }}
              >
                ZenShift
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: colors.textTertiary, mb: 2 }}>
              Your AI-powered meditation companion for busy professionals.
              Find calm in minutes with personalized sessions.
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textTertiary }}>
              Contact: <MuiLink href="mailto:zenshift-support@onepingfanventure.com" sx={{ color: colors.zenTealLight }}>
                zenshift-support@onepingfanventure.com
              </MuiLink>
            </Typography>
          </Grid>

          {/* Product Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ color: colors.textPrimary, fontWeight: 600, mb: 2 }}
            >
              Product
            </Typography>
            <Stack spacing={1}>
              {footerLinks.product.map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: colors.textSecondary,
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    '&:hover': { color: colors.zenTealLight },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Company Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ color: colors.textPrimary, fontWeight: 600, mb: 2 }}
            >
              Company
            </Typography>
            <Stack spacing={1}>
              {footerLinks.company.map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: colors.textSecondary,
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    '&:hover': { color: colors.zenTealLight },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Legal Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ color: colors.textPrimary, fontWeight: 600, mb: 2 }}
            >
              Legal
            </Typography>
            <Stack spacing={1}>
              {footerLinks.legal.map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: colors.textSecondary,
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    '&:hover': { color: colors.zenTealLight },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Download Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ color: colors.textPrimary, fontWeight: 600, mb: 2 }}
            >
              Download
            </Typography>
            <Stack spacing={1.5}>
              <MuiLink
                href="https://play.google.com/store/apps/details?id=com.zenshift.meditation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                sx={{
                  display: 'block',
                  transition: 'opacity 0.2s ease',
                  '&:hover': { opacity: 0.85 },
                }}
              >
                <Image
                  src="/images/app-store-badges/google-play-badge-en.png"
                  alt="Get it on Google Play"
                  width={103}
                  height={40}
                  style={{ display: 'block', height: '40px', width: 'auto' }}
                />
              </MuiLink>
              <Box sx={{ opacity: 0.4 }} title="iOS - Coming Soon">
                <Image
                  src="/images/app-store-badges/app-store-badge-black-en.svg"
                  alt="Download on the App Store - Coming Soon"
                  width={120}
                  height={40}
                  style={{ display: 'block', height: '40px', width: 'auto' }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: colors.textTertiary }}>
            &copy; {new Date().getFullYear()} One Ping Fan Venture LLC. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <MuiLink
              component={Link}
              href="/privacy-policy"
              sx={{ color: colors.textTertiary, fontSize: '0.8125rem', textDecoration: 'none', '&:hover': { color: colors.zenTealLight } }}
            >
              Privacy
            </MuiLink>
            <MuiLink
              component={Link}
              href="/terms"
              sx={{ color: colors.textTertiary, fontSize: '0.8125rem', textDecoration: 'none', '&:hover': { color: colors.zenTealLight } }}
            >
              Terms
            </MuiLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
