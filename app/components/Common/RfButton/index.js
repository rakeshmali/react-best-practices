/**
 *
 * RfButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';

/* eslint-disable react/prefer-stateless-function */
class RfButton extends React.PureComponent {
  render() {
    const { titleId, border, children, disabled, submit } = this.props;
    return (
      <Button
        border={border}
        disabled={disabled}
        onClick={submit || (() => {})}
        variant="contained"
        color="primary"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >{children}</Box>

        {titleId}
      </Button>
    );
  }
}

RfButton.defaultProps = {
  border: '2px solid #fff',
  disabled: false,
};

RfButton.propTypes = {
  children: PropTypes.any,
  border: PropTypes.string,
  submit: PropTypes.func,
  disabled: PropTypes.bool,
  titleId: PropTypes.string,
};

export default RfButton;
