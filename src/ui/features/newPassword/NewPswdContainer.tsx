import React, {useEffect, useState} from 'react';
import NewPswd from "./NewPswd";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../bll/store";
import {passwordRecoverTC} from "../../../bll/pswdRecover_reducer";
import {newPasswordTC} from "../../../bll/newPswd_reducer";


const NewPswdContainer = () => {
    //
    let [newPassword, setNewPassword] = useState('');
    let [newPasswordRepeat, setNewPasswordRepeat] = useState('');
    let responseStatus = useSelector((state: RootState) => state.newPass.success);
    let responseStatusMessage = useSelector((state: RootState) => state.newPass.message);
    const [differentPassword, setDifferentPassword] = useState('');
    const dispatch = useDispatch();
    const resetPasswordToken = '';
    const getDataFromServer = () => {
        // Вызов санки
       similar ? dispatch(newPasswordTC(newPassword, resetPasswordToken)) && setDifferentPassword('')
           :  setDifferentPassword('Enter similar pass')
    };

    const [similar, setSimilar] = useState(false);
    useEffect(()=> {
        if(newPassword === newPasswordRepeat && newPasswordRepeat) setSimilar(true);
        else setSimilar(false)
    }, [newPassword || newPasswordRepeat]);

    return (
        <NewPswd newPassword={newPassword} setNewPassword={setNewPassword}
                 newPasswordRepeat={newPasswordRepeat} setNewPasswordRepeat={setNewPasswordRepeat}
                 responseStatus={responseStatus} responseStatusMessage={responseStatusMessage}
                 getDataFromServer={getDataFromServer} similar={similar} differentPassword={differentPassword}
        />
    );
};

export default NewPswdContainer;
