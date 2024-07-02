/**
 *
 * PageWrapper
 *
 */

import { Box } from '@mui/material';
import React from 'react';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
const PageWrapper = ({
  textAlign,
  children,
  marginTop,
  disableBackground,
  paddingLeftRight,
  padding,
  disableTopPadding,
  overflowY,
  height,
}) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      padding: padding,
      textAlign: textAlign,
      marginTop: marginTop,
      background: disableBackground ? 'none' : undefined,
      paddingLeft: paddingLeftRight,
      paddingRight: paddingLeftRight,
      paddingTop: disableTopPadding ? 0 : undefined,
      overflowY: overflowY,
    }}
    >
    {children}
  </Box>
);

export default PageWrapper;
