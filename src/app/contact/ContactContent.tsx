'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { colors } from '@/theme/zenshift-theme';

const subjects = [
  'General Inquiry',
  'Technical Support',
  'Feedback',
  'Partnership',
  'Press',
  'Other',
];

const quickLinks = [
  {
    icon: HelpIcon,
    title: 'FAQ',
    description: 'Find answers to common questions',
    href: '/faq',
  },
  {
    icon: FeedbackIcon,
    title: 'Feedback',
    description: 'Share your thoughts on ZenShift',
    href: 'mailto:zenshift-support@onepingfanventure.com?subject=Feedback',
  },
];

export default function ContactContent() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For static site, redirect to mailto
    const mailtoLink = `mailto:zenshift-support@onepingfanventure.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: colors.lightGray }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: colors.textSecondaryLight, fontSize: '1.125rem' }}
            >
              We'd love to hear from you. Get in touch with questions, feedback, or support needs.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: colors.white }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: colors.white,
                  border: `1px solid ${colors.borderSubtle}`,
                  borderRadius: 3,
                }}
              >
                <Typography variant="h4" sx={{ mb: 3 }}>
                  Send us a message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      select
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      {subjects.map((subject) => (
                        <MenuItem key={subject} value={subject}>
                          {subject}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Grid>

            {/* Quick Links & Direct Contact */}
            <Grid item xs={12} md={5}>
              <Stack spacing={4}>
                {/* Direct Email */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    bgcolor: colors.lightGray,
                    borderRadius: 3,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: colors.zenTeal,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <EmailIcon sx={{ color: colors.white }} />
                    </Box>
                    <Typography variant="h5">Email Directly</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: colors.textSecondaryLight, mb: 2 }}>
                    For faster response, email us directly:
                  </Typography>
                  <MuiLink
                    href="mailto:zenshift-support@onepingfanventure.com"
                    sx={{
                      color: colors.zenTeal,
                      fontWeight: 500,
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    zenshift-support@onepingfanventure.com
                  </MuiLink>
                </Paper>

                {/* Quick Links */}
                <Typography variant="h5">Quick Links</Typography>
                <Stack spacing={2}>
                  {quickLinks.map((link) => (
                    <Paper
                      key={link.title}
                      component="a"
                      href={link.href}
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: colors.white,
                        border: `1px solid ${colors.borderSubtle}`,
                        borderRadius: 2,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor: colors.zenTeal,
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <link.icon sx={{ color: colors.zenTeal, fontSize: 28 }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: colors.textPrimaryLight }}>
                          {link.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                          {link.description}
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                </Stack>

                {/* Response Time */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: `${colors.zenTeal}10`,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: colors.zenTeal, fontWeight: 600 }}>
                    Response Time
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                    We typically respond within 24-48 hours during business days.
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
