import React from 'react';
import styles from './newPswd.module.css'
import Input from "../common/input/Input";
import Button from "../common/button/Button";


const NewPswd = (props: any) => {

  return (
    <div className={styles.newPasswordWrapper}>
      <h2>New Password Page</h2>
        <div>
            <Input value={props.newPassword}/>
        </div>
        <div>
            <Input value={props.newPasswordRepeat}/>
        </div>
        <div>
            <Button/>
        </div>
    </div>
  );
};

export default NewPswd;
