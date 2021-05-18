import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getLoggedOn } from './redux/auth/auth-selectors';

export default function PrivateRoute({ component: Component, ...routeProps }) {
  const isLoggedOn = useSelector(getLoggedOn);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLoggedOn && routeProps.restricted ? (
          <Redirect to="/phonebook" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
