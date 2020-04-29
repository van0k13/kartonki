import React from 'react';
import styles from './loginization.module.css'
import Input from "../input/Input";
import Button from "../button/Button";


const LoginizationPage = () => {
  return (
    <div className={styles.loginizationWrapper}>
      <h2>Loginization Page</h2>
        <div>
            <Input/>
        </div>
        <div>
            <Input/>
        </div>
        <div>
            <Button/>
        </div>

    </div>
  );
};

export default LoginizationPage;
