import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import Footer from './Footer';

const navItems = [
  { label: 'Product', to: '/#product' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Company', to: '/#company' },
  { label: 'Download', to: '/#download' }
];

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ p: 2 }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            textDecoration: 'none',
            color: 'text.primary'
          }}
        >
          <Box
            component="img"
            src="/assets/images/logo/zenshift-app-icon-32x32.png"
            alt="ZenShift Meditation Coach"
            sx={{ width: 28, height: 28 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            ZenShift
          </Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.to} component={RouterLink} to={item.to}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
        <ListItemButton component={RouterLink} to="/#download">
          <ListItemText primary="Get the App" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: 'text.primary'
              }}
            >
              <Box
                component="img"
                src="/assets/images/logo/zenshift-app-icon-32x32.png"
                alt="ZenShift Meditation Coach"
                sx={{ width: 32, height: 32 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                ZenShift
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  color="inherit"
                  component={RouterLink}
                  to={item.to}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/#download"
                sx={{ display: { xs: 'none', md: 'inline-flex' } }}
              >
                Get the App
              </Button>
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
                aria-label="Open navigation"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Footer />

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ '& .MuiDrawer-paper': { width: 260 } }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Layout;
