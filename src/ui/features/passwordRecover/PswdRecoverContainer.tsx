import React, {useState} from 'react';
import PswdRecover from "./PswdRecover";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../bll/store";
import {passwordRecoverTC} from "../../../bll/pswdRecover_reducer";


const PswdRecoverContainer = (props: any) => {
    //
    let [userEmail, putUserEmail] = useState('email');
    let responseStatus = useSelector((state: RootState) => state.recoverPass.success);
    let responseStatusMessage = useSelector((state: RootState) => state.recoverPass.message);
    const dispatch = useDispatch();
    const getDataFromServer = () => {
        // Вызов санки
        dispatch(passwordRecoverTC(userEmail))
    };

    return (
        <PswdRecover userEmail={userEmail} putUserEmail={putUserEmail} responseStatus={responseStatus}
                     getDataFromServer={getDataFromServer} responseStatusMessage={responseStatusMessage}
        />
    );
};

export default PswdRecoverContainer;
