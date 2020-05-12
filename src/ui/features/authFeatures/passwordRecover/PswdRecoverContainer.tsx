import React, {useState} from 'react';
import PswdRecover from "./PswdRecover";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import {passwordRecoverTC} from "../../../../bll/pswdRecover_reducer";


const PswdRecoverContainer = () => {
    //
    let [userEmail, putUserEmail] = useState<string>('');
    let {success, message} = useSelector((state: RootState) => state.recoverPass);
    const isLoading = useSelector((state: RootState) => state.auth.isLoading)
    const dispatch = useDispatch();
    const getDataFromServer = () => {
        // Вызов санки
        dispatch(passwordRecoverTC(userEmail))
    };

    return (
        <PswdRecover userEmail={userEmail} putUserEmail={putUserEmail} responseStatus={success}
                     getDataFromServer={getDataFromServer} responseStatusMessage={message}
                     isLoading={isLoading}
        />
    );
};

export default PswdRecoverContainer;
