import React, {useEffect, useState} from 'react';
import Registration from "./registration";


const RegistrationContainer = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatingPassword, setRepeatingPassword] = useState('');
    const [similar, setSimilar] = useState(false);
    useEffect(()=> {
        if(repeatingPassword === password) setSimilar(true)
            else setSimilar(false)
    }, [repeatingPassword])

    return (
        <Registration  setLogin={setLogin}
                       setPassword={setPassword}
                       login={login} password={password}
                       repeatingPassword={repeatingPassword}
                       setRepeatingPassword={setRepeatingPassword}
                       similar={similar}
        />
    );
};

export default RegistrationContainer;
