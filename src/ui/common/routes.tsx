import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import LoginizationPage from "../features/authFeatures/loginization/loginizationPage";
import ProfilePage from "../features/authFeatures/profile/profile";
import RegistrationPage from "../features/authFeatures/registration/registrationPage";
import NewPswdPage from "../features/authFeatures/newPassword/NewPswdPage";
import PswdRecoverPage from "../features/authFeatures/passwordRecover/PswdRecoverPage";
import UniCardsPage from "../features/uniCardsFeatures/uniCards/uniCardsPage";
import UniCardsDeckPage from "../features/uniCardsFeatures/uniCardsDeck/uniCardsDeckPage";

export const TO_AUTH = '/auth';
export const TO_NEW_PASSWORD = '/new-password:token';
export const TO_PROFILE = '/profile';
export const TO_RECOVER_PASSWORD = '/recover-password';
export const TO_REGISTRATION = '/registration';
export const TO_CARDS = '/cards';
export const TO_CARDSDECK = '/cards-deck';

export const AllRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path={TO_AUTH} render={()=> <LoginizationPage />} />
            <Route path={TO_NEW_PASSWORD} render={()=> <NewPswdPage />} />
            <Route path={TO_PROFILE} render={()=> <ProfilePage />} />
            <Route path={TO_RECOVER_PASSWORD} render={()=> <PswdRecoverPage />} />
            <Route path={TO_REGISTRATION} render={()=> <RegistrationPage />} />
            <Route path={TO_CARDS} render={()=> <UniCardsPage />} />
            <Route path={TO_CARDSDECK} render={()=> <UniCardsDeckPage />} />
            <Route exact path='/' render={()=> <Redirect to={TO_AUTH}/>} />
            <Route render={()=> <div>404 BAD GATEWAY</div>} />
        </Switch>
    )
};