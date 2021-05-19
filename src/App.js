import React, { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/UserMenu/AppBar';
import styles from './styles.module.css';
import * as authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);

const ContactsViews = lazy(() =>
  import('./views/ContactsViews' /* webpackChunkName: "contacts-page" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.Container}>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsViews />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
}
