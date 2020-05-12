import React, {useEffect, useState} from 'react';
import NewPswd from "./NewPswd";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from 'react-router-dom'
import {RootState} from "../../../../bll/store";
import {newPasswordTC} from "../../../../bll/newPswd_reducer";


const NewPswdContainer = (props: any) => {
    const dispatch = useDispatch();
    const [similar, setSimilar] = useState(false);
    let [newPassword, setNewPassword] = useState<string>('');
    let [newPasswordRepeat, setNewPasswordRepeat] = useState<string>('');
    const [differentPassword, setDifferentPassword] = useState<string>('');

    let responseStatusMessage = useSelector((state: RootState) => state.newPass.message);
    const isLoading = useSelector((state: RootState) => state.auth.isLoading)

    useEffect(()=> {
        if(newPassword === newPasswordRepeat && newPasswordRepeat) {
            setSimilar(true);
            setDifferentPassword('');
        } else {
            setSimilar(false)
            setDifferentPassword('Enter similar pass')
        }
    }, [newPassword, newPasswordRepeat]);

    const resetPasswordToken = props.match.params.token;
    const getDataFromServer = async() => {
        // Вызов санки
       similar && dispatch(newPasswordTC(newPassword, resetPasswordToken))
        };

    return (
        <NewPswd newPassword={newPassword} setNewPassword={setNewPassword}
                 newPasswordRepeat={newPasswordRepeat} setNewPasswordRepeat={setNewPasswordRepeat}
                  responseStatusMessage={responseStatusMessage}
                 getDataFromServer={getDataFromServer} similar={similar} differentPassword={differentPassword}
                 isLoading={isLoading}

        />
    );
};

export default withRouter(NewPswdContainer);
