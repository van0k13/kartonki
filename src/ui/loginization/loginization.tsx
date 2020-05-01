import React from 'react';
import styles from './loginization.module.css'
import Input from "../common/input/Input";
import Button from "../common/button/Button";


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
