import React, {useState} from 'react';
import NewPswd from "./NewPswd";


const NewPswdContainer = () => {

    let [newPassword, setNewPassword] = useState('pass');
    let [newPasswordRepeat, setNewPasswordRepeat] = useState('new pass');


    return (
        <NewPswd newPassword={newPassword} newPasswordRepeat={newPasswordRepeat}/>
    );
};

export default NewPswdContainer;
