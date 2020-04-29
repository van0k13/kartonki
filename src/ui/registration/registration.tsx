import React from 'react';
import styles from './registr.module.css'
import Input from "../input/Input";
import Button from "../button/Button";


const RegistrationPage = () => {
  return (
    <div className={styles.registrationWrapper}>
        <h2>Registration Page</h2>
        <div>
            <Input/>
        </div>
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

export default RegistrationPage;
