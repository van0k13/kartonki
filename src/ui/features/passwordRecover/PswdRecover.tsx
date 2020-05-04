import React from 'react';
import styles from './pswdRecover.module.css'
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

interface IPropsPswdRecover {
    putUserEmail: (value: string) => void,
    userEmail: string,
}

const PswdRecover: React.FC<IPropsPswdRecover> = (props) => {
  return (
    <div className={styles.pswdRecoverWrapper}>
        <h2>Password Recovering Page</h2>
        <div>
            <Input inputType='email' value={props.userEmail} inputOnChange={props.putUserEmail}/>
        </div>
        <div>
            <Button/>
        </div>
    </div>
  );
};

export default PswdRecover;
