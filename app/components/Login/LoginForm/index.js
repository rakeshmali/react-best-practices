import React from 'react';
import PropTypes from 'prop-types';
import RfInput from '../../../components/Common/RfInput';
import RfButton from '../../../components/Common/RfButton';
import { Box } from '@mui/material';


class LoginForm extends React.PureComponent {
  render() {
    const {
      handleUsernameChange,
      handlePasswordChange,
      submit,
      formControlClass,
      inputClass,
      forgotPasswordClass,
    } = this.props;

    return (
      <Box sx={{
        marginTop: '1%',
        marginBottom: '1%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <RfInput
          id="username"
          name="username"
          labelText="USERNAME"
          type="text"
          disabled={false}
          onChange={handleUsernameChange}
          inputClass={inputClass}
          formControlClass={formControlClass}
        />
        <RfInput
          id="password"
          name="password"
          labelText="PASSWORD"
          type="password"
          disabled={false}
          onChange={handlePasswordChange}
          inputClass={inputClass}
          formControlClass={formControlClass}
        />
        <RfButton
          submit={submit}
          titleId="LOGIN"
          width="100%"
          height="40px"
          margin="24px"
        />
      </Box>
    );
  }
}

LoginForm.propTypes = {
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  formControlClass: PropTypes.string,
  forgotPasswordClass: PropTypes.string,
  inputClass: PropTypes.string,
};

export default LoginForm;
