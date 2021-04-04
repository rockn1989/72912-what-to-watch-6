import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import {NameSpace} from '../../store/root-reducer';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';

const PrivateRoute = ({component: Component, ...rest}) => {
  const {authorizationStatus} = useSelector((state) => state[NameSpace.USER]);

  return (
    <Route {...rest}
      render={(props) => authorizationStatus ? <Component {...props} /> : <Redirect to={AppRoute.LOGIN} /> }
    />
  );
};

PrivateRoute.propTypes = {
  component: propTypes.any.isRequired,
};

export default PrivateRoute;
