/**
 *
 * LoginImage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function LoginImage({ background, logo }) {
  return (
    <div>
      <Box sx={{position: 'relative'}}>
        <img alt="LOGIN" src={background} />
        <Box
          sx={{
            position: 'absolute',
            top: '127px',
            bottom: 0,
            left: 0,
            right: 0,
            fontSize: '10px',
            color: '#fff',
          }}
        >
          <img alt="LOGIN" src={logo} />
          <Box
            sx={{
              height: 'fit-content',
              fontSize: '10px',
              color: '#fff',
              marginTop: '10px',
              letterSpacing: '0.1px',
            }}
          >
            WELCOME
          </Box>
        </Box>
      </Box>
    </div>
  );
}

LoginImage.propTypes = {
  logo: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default LoginImage;
