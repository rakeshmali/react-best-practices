/**
 *
 * PublicRoute
 *
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function PublicRoute({
  exact,
  component: Component,
  isAuthenticated,
  isProgressLoading,
  ...children
}) {
  return (
    <Route
      exact={exact}
      render={props =>
        isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} {...children} />
        )
      }
    />
  );
}

export default PublicRoute;
