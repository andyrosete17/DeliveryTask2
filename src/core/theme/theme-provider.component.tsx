import * as React from 'react';
import { theme } from './theme';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';

export const ThemeProviderComponent = (props) => {
  const { children } = props;

  return (
    <StyledEngineProvider  injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
