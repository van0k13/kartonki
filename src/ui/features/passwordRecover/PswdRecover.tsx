import React from 'react';
import styles from './pswdRecover.module.css'
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";


const PswdRecover = (props: any) => {
  return (
    <div className={styles.pswdRecoverWrapper}>
        <h2>Password Recovering Page</h2>
        <div>
            <Input inputType='email' value={props.userEmail}/>
        </div>
        <div>
            <Button/>
        </div>
    </div>
  );
};

export default PswdRecover;
