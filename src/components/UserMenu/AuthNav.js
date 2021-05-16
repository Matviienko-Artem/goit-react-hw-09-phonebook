import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      exact
      to="/register"
      className={style.link}
      activeClassName={style.activeLink}
    >
      Register
    </NavLink>
    <NavLink
      exact
      to="/login"
      className={style.link}
      activeClassName={style.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
