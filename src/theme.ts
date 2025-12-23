import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D6A6C',
      light: '#4A9B9E',
      dark: '#1A1D2E',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#0F3460',
      light: '#16213E',
      dark: '#0B2341',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#1A1D2E',
      secondary: '#475569'
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF'
    },
    divider: 'rgba(0, 0, 0, 0.08)',
    success: {
      main: '#10B981'
    },
    warning: {
      main: '#F59E0B',
      light: '#FEF3C7'
    },
    error: {
      main: '#EF4444'
    }
  },
  shape: {
    borderRadius: 16
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 600
    },
    body1: {
      fontSize: '0.9375rem',
      lineHeight: 1.6
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.6
    },
    caption: {
      fontSize: '0.6875rem'
    },
    button: {
      textTransform: 'none',
      fontWeight: 600
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#1A1D2E',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: 'none'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 72
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          paddingLeft: 20,
          paddingRight: 20
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: '0 14px 30px rgba(15, 52, 96, 0.08)'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 500
        }
      }
    }
  }
});

export default theme;
