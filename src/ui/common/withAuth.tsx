import React from 'react'
import {TO_AUTH, TO_REGISTRATION} from "./routes";
import {NavLink} from "react-router-dom";
import {takeTokenFromLS} from "./save&takeToken";




const WithAuthHOC = (Component: any) => {
    const WrapperContainer = () => {
        const token = takeTokenFromLS()
        if (token)
            return <Component/>
        return (
            <>
                <span>need authorization</span>
                <NavLink to={TO_AUTH}> Let's Sign In!</NavLink>
                <div>don't have an account?</div>
                <NavLink to={TO_REGISTRATION}>RegistrationPage</NavLink>
            </>
        )
    }
    return WrapperContainer;
};


export default WithAuthHOC;