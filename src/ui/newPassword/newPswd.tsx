import React from 'react';
import styles from './newPswd.module.css'
import Input from "../input/Input";
import Button from "../button/Button";


const NewPasswordPage = () => {
  return (
    <div className={styles.newPasswordWrapper}>
      <h2>New Password Page</h2>
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

export default NewPasswordPage;
