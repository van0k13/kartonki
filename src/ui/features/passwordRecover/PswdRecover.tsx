import React from 'react';
import styles from './pswdRecover.module.css'
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

interface IPropsPswdRecover {
    putUserEmail: (value: string) => void,
    userEmail: string,
    responseStatus: boolean
    getDataFromServer: ()=> void
    responseStatusMessage: string
}

const PswdRecover: React.FC<IPropsPswdRecover> = (props) => {
  return (
    <div className={styles.pswdRecoverWrapper}>
        <h2>Password Recovering Page</h2>
        <div>
            <Input inputType='email' value={props.userEmail} inputOnChange={props.putUserEmail}
            />
            <span> {props.responseStatusMessage} </span>
        </div>
        <div>
            <Button buttonName='Recover' buttonOnClick={props.getDataFromServer}/>
        </div>
    </div>
  );
};

export default PswdRecover;
