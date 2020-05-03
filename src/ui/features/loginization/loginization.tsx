import React from 'react';
import styles from './loginization.module.css'
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

interface IProps {
    setLogin: (value: string) => void,
    setPassword: (value: string) => void,
    login: string,
    password: string,

}

const Loginization: React.FC<IProps> = ({login, password, setPassword, setLogin}) => {
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
            <Button/>
        </div>

    </div>
  );
};

export default Loginization;
