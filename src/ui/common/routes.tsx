import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import LoginizationPage from "../features/loginization/loginization";
import ProfilePage from "../features/profile/profile";
import PasswordRecoveringPage from "../features/passwordRecover/pswdRecover";
import RegistrationPage from "../features/registration/registration";
import NewPswdPage from "../features/newPassword/NewPswdPage";

export const TO_AUTH = '/auth';
export const TO_NEW_PASSWORD = '/new-password';
export const TO_PROFILE = '/profile';
export const TO_RECOVER_PASSWORD = '/recover-password';
export const TO_REGISTRATION = '/registration';

export const AllRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path={TO_AUTH} render={()=> <LoginizationPage />} />
            <Route path={TO_NEW_PASSWORD} render={()=> <NewPswdPage />} />
            <Route path={TO_PROFILE} render={()=> <ProfilePage />} />
            <Route path={TO_RECOVER_PASSWORD} render={()=> <PasswordRecoveringPage />} />
            <Route path={TO_REGISTRATION} render={()=> <RegistrationPage />} />
            <Route exact path='/' render={()=> <Redirect to={TO_AUTH}/>} />
            <Route path='*' render={()=> <div>404 BAD GATEWAY</div>} />
        </Switch>
    )
};