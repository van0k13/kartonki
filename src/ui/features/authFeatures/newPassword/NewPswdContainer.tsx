import React, {useEffect, useState} from 'react';
import NewPswd from "./NewPswd";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom'
import {RootState} from "../../../../bll/store";
import {newPasswordTC} from "../../../../bll/newPswd_reducer";


const NewPswdContainer = () => {
    const dispatch = useDispatch();
    const {resetPasswordToken} = useParams();
    const [similar, setSimilar] = useState(false);
    let [newPassword, setNewPassword] = useState<string>('');
    let [newPasswordRepeat, setNewPasswordRepeat] = useState<string>('');
    const [differentPassword, setDifferentPassword] = useState<string>('');
    let {message} = useSelector((state: RootState) => state.newPass);
    const {isLoading} = useSelector((state: RootState) => state.features);

    useEffect(()=> {
        if(newPassword === newPasswordRepeat && newPasswordRepeat) {
            setSimilar(true);
            setDifferentPassword('');
        } else {
            setSimilar(false)
            setDifferentPassword('Enter similar pass')
        }
    }, [newPassword, newPasswordRepeat]);


    const getDataFromServer = async() => {
        // Вызов санки
       similar && dispatch(newPasswordTC(newPassword, resetPasswordToken))
        };

    return (
        <NewPswd newPassword={newPassword} setNewPassword={setNewPassword}
                 newPasswordRepeat={newPasswordRepeat} setNewPasswordRepeat={setNewPasswordRepeat}
                  responseStatusMessage={message}
                 getDataFromServer={getDataFromServer} similar={similar}
                 differentPassword={differentPassword} isLoading={isLoading}
        />
    );
};

export default NewPswdContainer;
