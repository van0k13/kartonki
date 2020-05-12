import React, {useState} from 'react';
import Loginization from "./loginization";
import {useDispatch, useSelector} from "react-redux";
import {loginizationTC} from "../../../../bll/auth_reducer";
import {RootState} from "../../../../bll/store";
import {TO_PROFILE} from "../../../common/routes";
import {Redirect} from "react-router-dom";


const LoginizationContainer = () => {

    const dispatch = useDispatch()
    const {authSuccess, errorMessage, isLoading} = useSelector((state: RootState) => state.auth)
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

const signIn = async () => {
    await dispatch(loginizationTC(login, password, rememberMe))

}

    return (
        <>
            {!authSuccess
                ? <Loginization setLogin={setLogin} setPassword={setPassword}
                                setRememberMe={setRememberMe} loginError={errorMessage}
                                login={login} password={password} rememberMe={rememberMe}
                                signIn={signIn} isLoading={isLoading}
                />
                : <Redirect to={TO_PROFILE}/>
            }
        </>
    );
};

export default LoginizationContainer;
