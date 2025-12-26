'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonIcon from '@mui/icons-material/Person';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { colors } from '@/theme/zenshift-theme';

const deletedItems = [
  { icon: HistoryIcon, text: 'All meditation session history' },
  { icon: ChatIcon, text: 'All AI conversations and recommendations' },
  { icon: FavoriteIcon, text: 'Favorite sessions and preferences' },
  { icon: CreditCardIcon, text: 'Active subscriptions (will be cancelled)' },
  { icon: PersonIcon, text: 'Your user account (you will not be able to log back in)' },
];

export default function DeleteAccountContent() {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: colors.lightGray }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <DeleteForeverIcon sx={{ fontSize: 48, color: colors.error, mb: 2 }} />
            <Typography variant="h1" sx={{ mb: 2 }}>
              Delete Your ZenShift Account
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: colors.textSecondaryLight, fontSize: '1.125rem' }}
            >
              We're sorry to see you go. This page explains how to permanently
              delete your ZenShift account and all associated data.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: colors.white }}>
        <Container maxWidth="md">
          {/* Warning */}
          <Alert
            severity="warning"
            icon={<WarningAmberIcon />}
            sx={{
              mb: 4,
              '& .MuiAlert-message': { width: '100%' },
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              This action cannot be undone
            </Typography>
            <Typography variant="body2">
              There is no grace period or recovery window. Once deleted, your data
              is permanently removed from our systems.
            </Typography>
          </Alert>

          {/* What Gets Deleted */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              bgcolor: colors.lightGray,
              borderRadius: 3,
            }}
          >
            <Typography variant="h4" sx={{ mb: 3 }}>
              What Will Be Permanently Deleted
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondaryLight, mb: 3 }}>
              When you delete your account, the following data is immediately
              and irreversibly removed:
            </Typography>
            <List>
              {deletedItems.map((item) => (
                <ListItem key={item.text} sx={{ py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <item.icon sx={{ color: colors.error }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      color: colors.textSecondaryLight,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* How to Delete */}
          <Typography variant="h4" sx={{ mb: 3 }}>
            How to Delete Your Account
          </Typography>

          {/* Option 1: In App */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 3,
              border: `1px solid ${colors.borderSubtle}`,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: colors.zenTeal, mb: 2 }}
            >
              Option 1: In the App (Recommended)
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    bgcolor: colors.zenTeal,
                    color: colors.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    flexShrink: 0,
                  }}
                >
                  1
                </Box>
                <Typography variant="body1" sx={{ color: colors.textSecondaryLight }}>
                  Open the ZenShift app
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    bgcolor: colors.zenTeal,
                    color: colors.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    flexShrink: 0,
                  }}
                >
                  2
                </Box>
                <Typography variant="body1" sx={{ color: colors.textSecondaryLight }}>
                  Go to <strong>Profile → Account Settings</strong>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    bgcolor: colors.zenTeal,
                    color: colors.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    flexShrink: 0,
                  }}
                >
                  3
                </Box>
                <Typography variant="body1" sx={{ color: colors.textSecondaryLight }}>
                  Tap <strong>"Delete Account"</strong>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    bgcolor: colors.zenTeal,
                    color: colors.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    flexShrink: 0,
                  }}
                >
                  4
                </Box>
                <Typography variant="body1" sx={{ color: colors.textSecondaryLight }}>
                  Review the warning and tap <strong>"I Understand, Continue"</strong>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    bgcolor: colors.zenTeal,
                    color: colors.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    flexShrink: 0,
                  }}
                >
                  5
                </Box>
                <Typography variant="body1" sx={{ color: colors.textSecondaryLight }}>
                  Type <strong>"DELETE"</strong> to confirm
                </Typography>
              </Box>
            </Stack>
          </Paper>

          {/* Option 2: Email */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              border: `1px solid ${colors.borderSubtle}`,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: colors.zenTeal, mb: 2 }}
            >
              Option 2: Contact Support
            </Typography>
            <Typography variant="body1" sx={{ color: colors.textSecondaryLight, mb: 2 }}>
              If you cannot access the app, email us at:
            </Typography>
            <MuiLink
              href="mailto:zenshift-support@onepingfanventure.com?subject=Account%20Deletion%20Request"
              sx={{
                color: colors.zenTeal,
                fontWeight: 600,
                fontSize: '1.125rem',
              }}
            >
              zenshift-support@onepingfanventure.com
            </MuiLink>
            <Typography variant="body2" sx={{ color: colors.textSecondaryLight, mt: 2 }}>
              Include <strong>"Account Deletion Request"</strong> in the subject line
              and the email address associated with your account. We will process
              your request within 30 days.
            </Typography>
          </Paper>

          {/* Data Retention */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              bgcolor: colors.lightGray,
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Data Retention Notice
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondaryLight, lineHeight: 1.8 }}>
              After account deletion:
              <br />• Most data is deleted immediately
              <br />• Subscription records are retained for 1 year for legal compliance
              <br />• Anonymized analytics data may be retained for service improvement
              <br />• Backups are purged within 30 days
            </Typography>
            <Box sx={{ mt: 2 }}>
              <MuiLink
                component={Link}
                href="/privacy-policy"
                sx={{ color: colors.zenTeal }}
              >
                Read Full Privacy Policy →
              </MuiLink>
            </Box>
          </Paper>

          {/* Before You Go */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: `${colors.zenTeal}10`,
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Before You Go
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondaryLight, mb: 2 }}>
              If you're having issues with the app, we'd love to help:
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                • <strong>Technical problems or feedback?</strong> Contact{' '}
                <MuiLink href="mailto:zenshift-support@onepingfanventure.com" sx={{ color: colors.zenTeal }}>
                  zenshift-support@onepingfanventure.com
                </MuiLink>
              </Typography>
              <Typography variant="body2" sx={{ color: colors.textSecondaryLight }}>
                • <strong>Want to pause instead?</strong> You can simply uninstall the app
                and your data will remain if you return later.
              </Typography>
            </Stack>
          </Paper>

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
