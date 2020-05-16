import React from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../bll/store";
import {TO_AUTH, TO_REGISTRATION} from "./routes";
import {NavLink} from "react-router-dom";



const WithAuthHOC = (Component: any) => {
    const WrapperContainer = () => {
        const {authSuccess} = useSelector((state: RootState) => state.auth)
        if (authSuccess)
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