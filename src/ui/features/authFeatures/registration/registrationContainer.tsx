import React, {useEffect, useState} from 'react';
import Registration from "./registration";
import {useDispatch, useSelector} from "react-redux";
import {registrationTC} from "../../../../bll/registr_reducer";
import {RootState} from "../../../../bll/store";
import {Redirect} from 'react-router-dom';
import {TO_AUTH} from "../../../common/routes";
import {actions} from "../../../../bll/actions";


const RegistrationContainer = () => {

    const dispatch = useDispatch()
    const {registeredSuccess, message} = useSelector((state: RootState) => state.registr)
    const {isLoading} = useSelector((state: RootState) => state.features);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatingPassword, setRepeatingPassword] = useState<string>('');
    const [similar, setSimilar] = useState<boolean>(false);
    useEffect(()=> {
        repeatingPassword === password && repeatingPassword.length > 0
            ? setSimilar(true)
            : setSimilar(false)
    }, [repeatingPassword, password]);
    const registerMe = () => {dispatch(registrationTC(login, password))
    }
    const wrongRepeatingPassword = () => {
        dispatch(actions.registrationErrorAC('wrong credentials'))
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
                           isLoading={isLoading}
            />
            : <Redirect to={TO_AUTH}/>
            }
        </>
    );
};

export default RegistrationContainer;
