import React from 'react';
import styles from './pswdRecover.module.css'
import Input from "../input/Input";
import Button from "../button/Button";


const PasswordRecoveringPage = () => {
  return (
    <div className={styles.pswdRecoverWrapper}>
        <h2>Password Recovering Page</h2>
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

export default PasswordRecoveringPage;
