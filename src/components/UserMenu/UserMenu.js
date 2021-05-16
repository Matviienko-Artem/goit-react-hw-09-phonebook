import React from 'react';
import { connect } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';

import style from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={style.container}>
    <img src={avatar} alt="" width="32" className={style.avatar} />
    <span className={style.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
