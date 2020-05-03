import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import {TO_AUTH, TO_NEW_PASSWORD, TO_PROFILE, TO_RECOVER_PASSWORD, TO_REGISTRATION} from "../routes";


const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <NavLink to={TO_AUTH}>LoginizationPage</NavLink>
      <NavLink to={TO_NEW_PASSWORD}>NewPasswordPage</NavLink>
      <NavLink to={TO_PROFILE}>ProfilePage</NavLink>
      <NavLink to={TO_RECOVER_PASSWORD}>PasswordRecoveringPage</NavLink>
      <NavLink to={TO_REGISTRATION}>RegistrationPage</NavLink>
    </div>
  );
};

export default Header;
