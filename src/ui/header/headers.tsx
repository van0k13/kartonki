import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <NavLink to='/auth'>LoginizationPage</NavLink>
      <NavLink to='/new-password'>NewPasswordPage</NavLink>
      <NavLink to='/profile'>ProfilePage</NavLink>
      <NavLink to='/recover-password'>PasswordRecoveringPage</NavLink>
      <NavLink to='/registration'>RegistrationPage</NavLink>
    </div>
  );
};

export default Header;
