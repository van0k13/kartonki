import React from 'react';
import styles from './newPswd.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import Loading from "../../../common/loadingToggle/Loading";

interface IPropsNewPswd {
    setNewPassword: (value: string) => void,
    setNewPasswordRepeat: (value: string) => void,
    newPassword: string,
    newPasswordRepeat: string,
    responseStatusMessage: string,
    getDataFromServer: ()=> void,
    similar: boolean,
    differentPassword: string,
    isLoading: boolean
}

const NewPswd: React.FC<IPropsNewPswd> = ({newPassword, isLoading, setNewPassword,
                                              newPasswordRepeat,setNewPasswordRepeat,
                                              differentPassword,getDataFromServer,
                                              responseStatusMessage}) => {
  return (
    <div className={styles.newPasswordWrapper}>
      <h2>New Password Page</h2>
        <div>
            <Input inputType='password' value={newPassword}
                   inputOnChange={setNewPassword} inputPlaceholder='New password'
            />
        </div>
        <div>
            <Input inputType='password' value={newPasswordRepeat}
                   inputOnChange={setNewPasswordRepeat} inputPlaceholder='Repeat new password'
            />

        </div>
        <div>
            <span>{differentPassword}</span>
            <Button buttonName='set new password'
                    buttonOnClick={getDataFromServer}

            />
            {isLoading && <Loading/>}
            <span>{responseStatusMessage}</span>
        </div>
    </div>
  );
};

export default NewPswd;
