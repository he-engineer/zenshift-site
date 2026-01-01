'use client';

import * as React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import { colors } from '@/theme/zenshift-theme';

const navItems = [
  { label: 'Product', href: '/product' },
  { label: 'AI Coach', href: '/ai-personalization' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: colors.white }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle} aria-label="Close menu">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{ py: 2, px: 3 }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                  color: colors.textPrimaryLight,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ px: 2, pt: 2 }}>
          <Button
            component={Link}
            href="/#download"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={handleDrawerToggle}
          >
            Get the App
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: trigger ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          boxShadow: trigger ? 2 : 0,
          borderBottom: trigger ? 'none' : `1px solid ${colors.borderSubtle}`,
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Image
                  src="/images/logo/zenshift-app-icon-32x32.png"
                  alt="ZenShift"
                  width={32}
                  height={32}
                  style={{ borderRadius: 8 }}
                />
                <Box
                  component="span"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    color: colors.textPrimaryLight,
                  }}
                >
                  ZenShift
                </Box>
              </Box>
            </Link>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                    color: colors.textSecondaryLight,
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                component={Link}
                href="/#download"
                variant="contained"
                color="primary"
              >
                Get the App
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="Open menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: colors.textPrimaryLight,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} />
    </>
  );
}
