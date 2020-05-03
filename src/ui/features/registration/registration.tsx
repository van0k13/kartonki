import React from 'react';
import styles from './registr.module.css'
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

interface IProps {
    setLogin: (value: string) => void,
    setPassword: (value: string) => void,
    setRepeatingPassword: (value: string) => void,
    login: string,
    password: string,
    repeatingPassword: string,
    similar: boolean

}

const Registration: React.FC<IProps> = ({login, password,
                                            repeatingPassword,
                                            setPassword, setLogin, setRepeatingPassword,
                                            similar}) => {
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
            <Button/>
        </div>
    </div>
  );
};

export default Registration;
