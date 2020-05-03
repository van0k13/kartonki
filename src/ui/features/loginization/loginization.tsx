import React from 'react';
import styles from './loginization.module.css'
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

interface IProps {
    login: string,
    password: string,

}

const Loginization: React.FC<IProps> = ({login, password}) => {
  return (
    <div className={styles.loginizationWrapper}>
      <h2>Loginization Page</h2>
        <div>
            <Input inputType={'text'} value={login} inputPlaceholder={'put in your login or email'}/>
        </div>
        <div>
            <Input inputType={'password'} value={password} inputPlaceholder={'put in your password'}/>
        </div>
        <div>
            <Button/>
        </div>

    </div>
  );
};

export default Loginization;
