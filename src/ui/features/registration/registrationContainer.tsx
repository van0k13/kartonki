import React, {useEffect, useState} from 'react';
import Registration from "./registration";
import {useDispatch, useSelector} from "react-redux";
import {registrationErrorAC, registrationTC} from "../../../bll/registr_reducer";
import {RootState} from "../../../bll/store";
import {Redirect} from 'react-router-dom';
import {TO_AUTH} from "../../common/routes";


const RegistrationContainer = () => {

    const dispatch = useDispatch()
    const {registeredSuccess, message} = useSelector((state: RootState) => state.registr)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatingPassword, setRepeatingPassword] = useState('');
    const [similar, setSimilar] = useState(false);
    useEffect(()=> {
        if(repeatingPassword === password && repeatingPassword) setSimilar(true)
            else setSimilar(false)
    }, [repeatingPassword, password]);
    const registerMe = () => {dispatch(registrationTC(login, password))
    }
    const wrongRepeatingPassword = () => {
        dispatch(registrationErrorAC('wrong credentials'))
    }

    return (
        <>
            {!registeredSuccess
           ? <Registration setLogin={setLogin}
                          setPassword={setPassword}
                          login={login} password={password}
                          repeatingPassword={repeatingPassword}
                          setRepeatingPassword={setRepeatingPassword}
                          similar={similar}
                          registerMe={registerMe}
                           messageFromServer={message}
                          wrongRepeatingPassword={wrongRepeatingPassword}
            />
            : <Redirect to={TO_AUTH}/>
            }
        </>
    );
};

export default RegistrationContainer;
