/**
 *
 * ErrorMessage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ error, messageHeight, marginTop }) {
  return (
    <Box sx={{
      height: `${messageHeight}`,
      marginTop: `${marginTop}`,
      color: "#f34336",
      fontSize: 12,
      lineHeight: '1.33',
      letterSpacing: 0.4
    }}>
      {error}
    </Box>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
  messageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ErrorMessage;
