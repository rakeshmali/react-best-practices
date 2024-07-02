import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HomePage from "@/app/hooks/HomePage";
import { Box } from '@mui/material';

function App() {
  return (<HomePage />);
}

App.propTypes = {};

const withConnect = connect();

export default compose(
  withConnect,
)(App);
