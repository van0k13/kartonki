import React, {useEffect, useState} from 'react';
import Registration from "./registration";
import {useDispatch, useSelector} from "react-redux";
import {registrationErrorAC, registrationTC} from "../../../bll/registr_reducer";
import {RootState} from "../../../bll/store";
import {Redirect} from 'react-router-dom';
import {TO_AUTH} from "../../common/routes";


const RegistrationContainer = () => {

    const dispatch = useDispatch()
    const answerFromServer = useSelector((state: RootState) => state.registr.registeredSuccess)
    const messageFromServer = useSelector((state: RootState) => state.registr.message)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatingPassword, setRepeatingPassword] = useState('');
    const [similar, setSimilar] = useState(false);
    useEffect(()=> {
        if(repeatingPassword === password && repeatingPassword) setSimilar(true)
            else setSimilar(false)
    }, [repeatingPassword || password]);
    const registerMe = () => {dispatch(registrationTC(login, password))
    }
    const wrongRepeatingPassword = () => {
        dispatch(registrationErrorAC('wrong credentials'))
    }

    return (
        <>
            {!answerFromServer
           ? <Registration setLogin={setLogin}
                          setPassword={setPassword}
                          login={login} password={password}
                          repeatingPassword={repeatingPassword}
                          setRepeatingPassword={setRepeatingPassword}
                          similar={similar}
                          registerMe={registerMe}
                           messageFromServer={messageFromServer}
                          wrongRepeatingPassword={wrongRepeatingPassword}
            />
            : <Redirect to={TO_AUTH}/>
            }
        </>
    );
};

export default RegistrationContainer;
