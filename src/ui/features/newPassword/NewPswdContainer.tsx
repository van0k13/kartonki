import React, {useEffect, useState} from 'react';
import NewPswd from "./NewPswd";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../bll/store";
import {newPasswordTC} from "../../../bll/newPswd_reducer";


const NewPswdContainer = () => {
    //
    let [newPassword, setNewPassword] = useState('');
    let [newPasswordRepeat, setNewPasswordRepeat] = useState('');
    let responseStatus = useSelector((state: RootState) => state.newPass.success);
    let responseStatusMessage = useSelector((state: RootState) => state.newPass.message);
    const [differentPassword, setDifferentPassword] = useState('');
    const dispatch = useDispatch();
    const resetPasswordToken = useSelector((state: RootState) => state.auth.token);


    const [similar, setSimilar] = useState(false);
    useEffect(()=> {
        if(newPassword === newPasswordRepeat) setSimilar(true);
        else setSimilar(false)
    }, [newPassword || newPasswordRepeat]);

    const getDataFromServer = () => {
        // Вызов санки
        if(newPassword === newPasswordRepeat) {
            setSimilar(true);
            dispatch(newPasswordTC(newPassword, resetPasswordToken))
            setDifferentPassword('Successful!')
        } else {
            setSimilar(false);
            setDifferentPassword('Enter similar pass')
        }

    };

    return (
        <NewPswd newPassword={newPassword} setNewPassword={setNewPassword}
                 newPasswordRepeat={newPasswordRepeat} setNewPasswordRepeat={setNewPasswordRepeat}
                 responseStatus={responseStatus} responseStatusMessage={responseStatusMessage}
                 getDataFromServer={getDataFromServer} similar={similar} differentPassword={differentPassword}

        />
    );
};

export default NewPswdContainer;
