import React, {useState} from 'react';
import Loginization from "./loginization";
import {useDispatch, useSelector} from "react-redux";
import {loginizationTC} from "../../../bll/auth_reducer";
import {RootState} from "../../../bll/store";
import {TO_PROFILE} from "../../common/routes";
import {Redirect} from "react-router-dom";


const LoginizationContainer = () => {

    const dispatch = useDispatch()
    const correctCredentials = useSelector((state: RootState) => state.auth.authSuccess)
    const loginError = useSelector((state: RootState) => state.auth.errorMessage)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

const signIn = async () => {
    await dispatch(loginizationTC(login, password, rememberMe))

}

    return (
        <>
            {!correctCredentials
                ? <Loginization setLogin={setLogin} setPassword={setPassword}
                                setRememberMe={setRememberMe} loginError={loginError}
                                login={login} password={password} rememberMe={rememberMe}
                                signIn={signIn}
                />
                : <Redirect to={TO_PROFILE}/>
            }
        </>
    );
};

export default LoginizationContainer;
