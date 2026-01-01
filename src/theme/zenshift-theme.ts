'use client';

import { createTheme } from '@mui/material/styles';

// ZenShift Design Tokens
export const colors = {
  // Core Brand Colors
  deepNavy: '#1A1D2E',
  midnightBlue: '#16213E',
  cosmicBlue: '#0F3460',

  // Accent Colors
  zenTeal: '#2D6A6C',
  zenTealLight: '#4A9B9E',
  zenTealDark: '#1A4A4C',
  softIndigo: '#533483',
  meditationPurple: '#7209B7',

  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  neutral: '#6B7280',

  // Text Colors
  textPrimary: '#FFFFFF',
  textSecondary: '#E2E8F0',
  textTertiary: '#CBD5E1',

  // Light theme text
  textPrimaryLight: '#1A1D2E',
  textSecondaryLight: '#475569',
  textTertiaryLight: '#64748B',

  // Background
  white: '#FFFFFF',
  lightGray: '#F8FAFC',
  surfaceElevated: 'rgba(255, 255, 255, 0.12)',
  borderSubtle: 'rgba(0, 0, 0, 0.08)',
  borderMedium: 'rgba(0, 0, 0, 0.16)',

  // Category Colors
  categorySleep: '#6366F1',
  categoryFocus: '#10B981',
  categoryReset: '#F59E0B',
  categoryStress: '#EF4444',
  categoryRelaxation: '#8B5CF6',
  categoryTravel: '#06B6D4',
};

export const gradients = {
  zenTeal: 'linear-gradient(135deg, #2D6A6C 0%, #4A9B9E 100%)',
  calmBlue: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #6366f1 100%)',
  calmPurple: 'linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #8b5cf6 100%)',
  calmTeal: 'linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #14b8a6 100%)',
  darkOverlay: 'linear-gradient(135deg, rgba(26, 29, 46, 0.85) 0%, rgba(45, 106, 108, 0.75) 50%, rgba(74, 155, 158, 0.65) 100%)',
};

const zenShiftTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.zenTeal,
      light: colors.zenTealLight,
      dark: colors.zenTealDark,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.meditationPurple,
      light: '#8B5CF6',
      dark: colors.softIndigo,
    },
    background: {
      default: colors.white,
      paper: colors.lightGray,
    },
    text: {
      primary: colors.textPrimaryLight,
      secondary: colors.textSecondaryLight,
    },
    success: { main: colors.success },
    warning: { main: colors.warning },
    error: { main: colors.error },
    divider: colors.borderSubtle,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (min-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          padding: '16px 32px',
          fontSize: '1.0625rem',
        },
        contained: {
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:1200px)': {
            maxWidth: 1200,
          },
        },
      },
    },
  },
});

export default zenShiftTheme;
