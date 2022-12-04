import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core';
import * as React from 'react';
import { theme } from './theme';

export const ThemeProviderComponent = (props) => {
  const { children } = props;

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};
