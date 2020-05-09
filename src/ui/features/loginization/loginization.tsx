import React from 'react';
import styles from './loginization.module.css'
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import Loading from "../../common/loadingToggle/Loading";

interface IProps {
    setLogin: (value: string) => void,
    setPassword: (value: string) => void,
    setRememberMe: (value: boolean) => void,
    signIn: () => void,
    login: string,
    password: string,
    rememberMe: boolean,
    loginError: string,

}

const Loginization: React.FC<IProps> = ({login, password, setPassword,
                                            setLogin, setRememberMe, signIn,
                                            rememberMe,loginError}) => {
  return (
    <div className={styles.loginizationWrapper}>
      <h2>Loginization Page</h2>
        {/*{isLoading && <Loading/>}*/}
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
        {loginError? <span>loginError</span> : null}

    </div>
  );
};

export default Loginization;
