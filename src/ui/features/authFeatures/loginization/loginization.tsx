import React from 'react';
import styles from './loginization.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import Loading from "../../../common/loadingToggle/Loading";

interface IProps {
    setLogin: (value: string) => void,
    setPassword: (value: string) => void,
    setRememberMe: (value: boolean) => void,
    signIn: () => void,
    login: string,
    password: string,
    rememberMe: boolean,
    loginError: string,
    isLoading: boolean,
}

const Loginization: React.FC<IProps> = ({login, password, setPassword,
                                            setLogin, setRememberMe, signIn,
                                            rememberMe,loginError, isLoading}) => {
  return (
    <div className={styles.loginizationWrapper}>
      <h2>Loginization Page</h2>
        <div>
            <Input inputOnChange={setLogin}
                   inputType={'text'} value={login} inputPlaceholder={'login or email'}/>
        </div>
        <div>
            <Input inputType={'password'} value={password} inputOnChange={setPassword}
                   inputPlaceholder={'your password'}/>
        </div>
        <div>
            <Input inputType={'checkbox'} checked={rememberMe} inputOnChangeChecked={setRememberMe}/>
        </div>
        <div>
            <Button buttonName={'Sign In'} buttonOnClick={signIn}/>
        </div>
        {isLoading && <Loading/>}
        {loginError? <span>loginError</span> : null}

    </div>
  );
};

export default Loginization;
