import React, {useEffect, useState} from 'react';
import NewPswd from "./NewPswd";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from 'react-router-dom'
import {RootState} from "../../../bll/store";
import {newPasswordTC} from "../../../bll/newPswd_reducer";


const NewPswdContainer = (props: any) => {
    let [newPassword, setNewPassword] = useState<string>('');
    let [newPasswordRepeat, setNewPasswordRepeat] = useState<string>('');
    const [similar, setSimilar] = useState(false);
    let responseStatusMessage = useSelector((state: RootState) => state.newPass.message);
    const [differentPassword, setDifferentPassword] = useState<string>('');
    const dispatch = useDispatch();
    const resetPasswordToken = props.match.params.token;
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
                  responseStatusMessage={responseStatusMessage}
                 getDataFromServer={getDataFromServer} similar={similar} differentPassword={differentPassword}

        />
    );
};

export default withRouter(NewPswdContainer);
