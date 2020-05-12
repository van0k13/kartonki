import React from 'react';
import styles from './pswdRecover.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import Loading from "../../../common/loadingToggle/Loading";

interface IPropsPswdRecover {
    putUserEmail: (value: string) => void,
    userEmail: string,
    responseStatus: boolean,
    getDataFromServer: ()=> void,
    responseStatusMessage: string,
    isLoading: boolean
}

const PswdRecover: React.FC<IPropsPswdRecover> = ({putUserEmail, userEmail,responseStatusMessage,
                                                      getDataFromServer,isLoading  }) => {
  return (
    <div className={styles.pswdRecoverWrapper}>
        <h2>Password Recovering Page</h2>
        <div>
            <Input inputType='email' value={userEmail} inputOnChange={putUserEmail}
                   inputPlaceholder={'email'}
            />
            <span> {responseStatusMessage} </span>
        </div>
        <div>
            <Button buttonName='Recover' buttonOnClick={getDataFromServer}/>
        </div>
        {isLoading && <Loading />}
    </div>
  );
};

export default PswdRecover;
