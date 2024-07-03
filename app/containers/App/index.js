import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HomePage from "@/app/hooks/HomePage";
import { Box } from '@mui/material';
import LoginPage from "@/app/containers/LoginPage";
function App() {
  return (<LoginPage />);
}

App.propTypes = {};

const withConnect = connect();

export default compose(
  withConnect,
)(App);
