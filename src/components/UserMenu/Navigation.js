import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import * as authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div>
      <NavLink
        exact
        to="/"
        className={style.link}
        activeClassName={style.activeLink}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          exact
          to="/contacts"
          className={style.link}
          activeClassName={style.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}
