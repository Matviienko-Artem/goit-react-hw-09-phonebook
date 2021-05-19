import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as authSelectors from '../../redux/auth/auth-selectors';

export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

// const mapStateToprops = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToprops)(PrivateRoute);
