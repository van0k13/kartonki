import React from 'react';
import styles from './newPswd.module.css'
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

interface IPropsNewPswd {
    setNewPassword: (value: string) => void,
    setNewPasswordRepeat: (value: string) => void,
    newPassword: string,
    newPasswordRepeat: string,
}

const NewPswd: React.FC<IPropsNewPswd> = (props) => {

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
            <Button/>
        </div>
    </div>
  );
};

export default NewPswd;
