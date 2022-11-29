import { AccountCircle } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import * as React from 'react';
import * as classes from './app.layout.styles';

export interface Props {
  children?: React.ReactNode;
}

export const AppLayout: React.FunctionComponent<Props> = (props: any) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
