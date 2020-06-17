import React, {useState} from 'react';
import Loginization from "./loginization";
import {useDispatch, useSelector} from "react-redux";
import {loginizationTC} from "../../../../bll/auth_reducer";
import {RootState} from "../../../../bll/store";
import {TO_PROFILE} from "../../../common/routes";
import {Redirect} from "react-router-dom";
import {takeTokenFromLS} from "../../../common/save&takeToken";


const LoginizationContainer = () => {

    const dispatch = useDispatch()
    const {errorMessage, myName} = useSelector((state: RootState) => state.auth)
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const token = takeTokenFromLS()
    const signIn = () => {
        dispatch(loginizationTC(login, password, rememberMe))
    }

    return (
        <>
            {!token
                ? <Loginization setLogin={setLogin} setPassword={setPassword}
                                setRememberMe={setRememberMe} loginError={errorMessage}
                                login={login} password={password} rememberMe={rememberMe}
                                signIn={signIn}
                />
                : <Redirect to={TO_PROFILE + `/${myName}`}/>
            }
        </>
    );
};

export default LoginizationContainer;
