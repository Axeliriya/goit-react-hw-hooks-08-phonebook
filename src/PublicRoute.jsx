import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getLoading, getLoggedOn } from './redux/auth/auth-selectors';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  spinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default function PrivateRoute({ component: Component, ...routeProps }) {
  const styles = useStyles();
  const isLoggedOn = useSelector(getLoggedOn);
  const isLoading = useSelector(getLoading);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLoading ? (
          <div className={styles.spinner}>
            <Loader type="Rings" color="#999999" height={80} width={80} />
          </div>
        ) : isLoggedOn && routeProps.restricted ? (
          <Redirect to="/phonebook" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
