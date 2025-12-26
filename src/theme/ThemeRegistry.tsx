'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import zenShiftTheme from './zenshift-theme';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={zenShiftTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
