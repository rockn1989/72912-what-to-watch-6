import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import propTypes from 'prop-types';

const PrivateRoute = ({component: Component, authorizationStatus, ...rest}) => {
  return (
    <Route {...rest}
      render={(props) => authorizationStatus ? <Redirect to="/" /> : <Component {...props} /> }
    />
  );
};

PrivateRoute.propTypes = {
  component: propTypes.any.isRequired,
  authorizationStatus: propTypes.bool.isRequired
};

export default PrivateRoute;
