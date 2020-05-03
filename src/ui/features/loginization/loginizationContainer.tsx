import React, {useState} from 'react';
import Loginization from "./loginization";

;


const LoginizationContainer = () => {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    return (
        <Loginization login={login} password={password}/>
    );
};

export default LoginizationContainer;
