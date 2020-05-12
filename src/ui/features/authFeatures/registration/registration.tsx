import React from 'react';
import styles from './registr.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import Loading from "../../../common/loadingToggle/Loading";

interface IProps {
    setLogin: (value: string) => void,
    setPassword: (value: string) => void,
    setRepeatingPassword: (value: string) => void,
    wrongRepeatingPassword: () => void,
    registerMe: () => void,
    login: string,
    password: string,
    repeatingPassword: string,
    similar: boolean
    messageFromServer: string
    isLoading: boolean
}

const Registration: React.FC<IProps> = ({login, password,
                                            repeatingPassword,
                                            setPassword, setLogin, setRepeatingPassword,
                                            registerMe, similar,
                                            wrongRepeatingPassword, messageFromServer, isLoading}) => {
    return (
    <div className={styles.registrationWrapper}>
        <h2>Registration Page</h2>
        <div>
            <Input inputOnChange={setLogin}
                   inputType={'text'} value={login} inputPlaceholder={'login or email'}/>
        </div>
        <div>
            <Input inputType={'password'} value={password} inputOnChange={setPassword}
                   inputPlaceholder={'your password'}/>
        </div>
        <div>
            <Input inputType={'password'} value={repeatingPassword} inputOnChange={setRepeatingPassword}
                   inputPlaceholder={'repeat your password'}/>
                   {!similar && <span>password does not match!</span>}
        </div>
        <div>
            <Button  buttonOnClick={similar? registerMe : wrongRepeatingPassword} buttonName={'Sign Up'}/>
            {isLoading && <Loading/>}
            {<span>{messageFromServer}</span>}
        </div>
    </div>
    );
};

export default Registration;
