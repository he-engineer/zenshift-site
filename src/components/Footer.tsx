import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 8,
      py: 6,
      color: 'common.white',
      background: 'linear-gradient(135deg, #1A1D2E 0%, #16213E 100%)'
    }}
  >
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Box
              component="img"
              src="/assets/images/logo/zenshift-app-icon-24x24.png"
              alt="ZenShift Meditation Coach"
              sx={{ width: 24, height: 24 }}
            />
            <Typography variant="h6">ZenShift</Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Your mindfulness companion for busy lives
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Product
          </Typography>
          <Box sx={{ display: 'grid', gap: 0.5 }}>
            <Link
              component={RouterLink}
              to="/#product"
              underline="hover"
              sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              Features
            </Link>
            <Link
              component={RouterLink}
              to="/#how-it-works"
              underline="hover"
              sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              How It Works
            </Link>
            <Link
              component={RouterLink}
              to="/#download"
              underline="hover"
              sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              Download
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Company
          </Typography>
          <Box sx={{ display: 'grid', gap: 0.5 }}>
            <Link
              component={RouterLink}
              to="/#company"
              underline="hover"
              sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              About Us
            </Link>
            <Link
              href="mailto:zenshift-support@onepingfanventure.com"
              underline="hover"
              sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              Contact
            </Link>
            <Link
              component={RouterLink}
              to="/privacy-policy"
              underline="hover"
              sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 4,
          pt: 3,
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          {'\u00A9'} 2025 One Ping Fan Venture LLC. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link
            component={RouterLink}
            to="/privacy-policy"
            underline="hover"
            sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            Privacy Policy
          </Link>
          <Link
            component={RouterLink}
            to="/terms"
            underline="hover"
            sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            Terms of Service
          </Link>
          <Link
            component={RouterLink}
            to="/delete-account"
            underline="hover"
            sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            Delete Account
          </Link>
          <Link
            component={RouterLink}
            to="/accessibility"
            underline="hover"
            sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            Accessibility
          </Link>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Footer;
