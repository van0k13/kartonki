import React from 'react';
import styles from './newPswd.module.css'
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import {newPasswordTC} from "../../../bll/newPswd_reducer";

interface IPropsNewPswd {
    setNewPassword: (value: string) => void,
    setNewPasswordRepeat: (value: string) => void,
    newPassword: string,
    newPasswordRepeat: string,
    responseStatus: boolean,
    responseStatusMessage: string,
    getDataFromServer: ()=> void,
    similar: boolean,
    differentPassword: string,

}

const NewPswd: React.FC<IPropsNewPswd> = (props) => {
    console.log(props.similar);
  return (
    <div className={styles.newPasswordWrapper}>
      <h2>New Password Page</h2>
        <div>
            <Input inputType='password' value={props.newPassword}
                   inputOnChange={props.setNewPassword} inputPlaceholder='New password'
            />
        </div>
        <div>
            <Input inputType='password' value={props.newPasswordRepeat}
                   inputOnChange={props.setNewPasswordRepeat} inputPlaceholder='Repeat new password'
            />

        </div>
        <div>
            <span>{props.differentPassword}</span>
            {/*<span>{props.differentPassword}</span>*/}
            <Button buttonName='set new password'
                    buttonOnClick={props.getDataFromServer}

            />
            <span>{props.responseStatusMessage}</span>
        </div>
    </div>
  );
};

export default NewPswd;
