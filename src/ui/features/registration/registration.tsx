import React from 'react';
import styles from './registr.module.css'
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";


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
