import React, {useState} from 'react';
import PswdRecover from "./PswdRecover";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../bll/store";
import {passwordRecoverTC} from "../../../bll/pswdRecover_reducer";


const PswdRecoverContainer = (props: any) => {
    //
    let [userEmail, putUserEmail] = useState<string>('');
    let {success, message} = useSelector((state: RootState) => state.recoverPass);
    const dispatch = useDispatch();
    const getDataFromServer = () => {
        // Вызов санки
        dispatch(passwordRecoverTC(userEmail))
    };

    return (
        <PswdRecover userEmail={userEmail} putUserEmail={putUserEmail} responseStatus={success}
                     getDataFromServer={getDataFromServer} responseStatusMessage={message}
        />
    );
};

export default PswdRecoverContainer;
