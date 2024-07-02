/**
 *
 * LoginLayout
 *
 */

import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function LoginLayout({ children }) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: '100vh', minWidth: '50vw' }}
    >
      <Paper variant="elevation">
      {children}
      </Paper>
    </Grid>
  );
}

export default LoginLayout;
