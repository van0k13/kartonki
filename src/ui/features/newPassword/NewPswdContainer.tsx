import React, {useState} from 'react';
import NewPswd from "./NewPswd";


const NewPswdContainer = () => {
    //
    let [newPassword, setNewPassword] = useState('');
    let [newPasswordRepeat, setNewPasswordRepeat] = useState('');


    return (
        <NewPswd newPassword={newPassword} setNewPassword={setNewPassword}
                 newPasswordRepeat={newPasswordRepeat} setNewPasswordRepeat={setNewPasswordRepeat}
        />
    );
};

export default NewPswdContainer;
