import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HomePage from "@/app/hooks/HomePage";
import { Box, ThemeProvider } from '@mui/material';
import LoginPage from "@/app/containers/LoginPage";
import { getAuth } from '@/app/containers/AuthContainer/meta/selectors';
import NavigationContainer from '@/app/containers/NavigationContainer';
import { selectTheme } from '@/app/containers/App/meta/selectors';
function App({ auth, theme }) {
  return (
    <ThemeProvider theme={theme}>
        {!auth.isAuthenticated && <LoginPage />}
        {auth.isAuthenticated && <NavigationContainer />}
      </ThemeProvider>);
}

App.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: getAuth(state),
  theme: selectTheme(state),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(App);