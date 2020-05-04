import React, {useState} from 'react';
import PswdRecover from "./PswdRecover";


const PswdRecoverContainer = (props: any) => {
    //
    let [userEmail, putUserEmail] = useState('email');


    return (
        <PswdRecover userEmail={userEmail} putUserEmail={putUserEmail}/>
    );
};

export default PswdRecoverContainer;
