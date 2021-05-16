import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import * as authSelectors from '../../redux/auth/auth-selectors';
import { connect } from 'react-redux';

const Navigation = ({ isAuthenticated }) => (
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

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
