import './styles.css';

import { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import AppBar from './components/AppBar';
import Container from './components/Container';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useDispatch } from 'react-redux';
import { currentUser } from './redux/auth/auth-operation';

const ErrorPage = lazy(() =>
  import('./views/ErrorPage' /*webpackChunkName: "error-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  const onRefresh = () => {
    dispatch(currentUser());
  };

  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AppBar />
      <Container>
        <Suspense
          fallback={
            <div className="PosSpinnerLoad">
              <Loader
                type="ThreeDots"
                color="#999999"
                height={50}
                width={150}
              />
            </div>
          }
        >
          <Switch>
            {routes.map(
              ({ path, exact, logged, restricted, component: Component }) =>
                logged ? (
                  <PrivateRoute
                    key={path}
                    path={path}
                    exact={exact}
                    component={Component}
                  />
                ) : restricted ? (
                  <PublicRoute
                    key={path}
                    path={path}
                    exact={exact}
                    restricted={restricted}
                    component={Component}
                  />
                ) : (
                  <Route
                    key={path}
                    path={path}
                    exact={exact}
                    component={Component}
                  />
                ),
            )}
            <Route component={ErrorPage} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
