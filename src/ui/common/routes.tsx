import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import LoginizationPage from "../features/authFeatures/loginization/loginizationPage";
import ProfilePage from "../features/authFeatures/profile/profile";
import RegistrationPage from "../features/authFeatures/registration/registrationPage";
import NewPswdPage from "../features/authFeatures/newPassword/NewPswdPage";
import PswdRecoverPage from "../features/authFeatures/passwordRecover/PswdRecoverPage";
import UniCardsPage from "../features/uniCardsFeatures/uniCards/uniCardsPage";
import UniCardsDeckPage from "../features/uniCardsFeatures/uniCardsDeck/uniCardsDeckPage";
import ModalsPage from "../features/modalsFeatures/defaultModal/modalsPage";
import SingleCardContainer from "../features/uniCardsFeatures/uniCards/singleCard/singleCardContainer";

export const TO_AUTH = '/auth/';
export const TO_NEW_PASSWORD = '/new-password/:token';
export const TO_PROFILE = '/profile/';
export const TO_RECOVER_PASSWORD = '/recover-password/';
export const TO_REGISTRATION = '/registration/';
export const TO_CARDS = '/cards/:id';
export const TO_CARD = '/simple-card/:cardId';
export const TO_CARDSDECK = '/cards-deck/';
export const TO_MODALS = '/test-modals/';
export const TO_DELETE_MODULE = '/delete-modal/';

export const AllRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path={TO_AUTH} render={()=> <LoginizationPage />} />
            <Route path={TO_NEW_PASSWORD + '/:token'} render={()=> <NewPswdPage />} />
            <Route path={TO_PROFILE} render={()=> <ProfilePage />} />
            <Route path={TO_RECOVER_PASSWORD} render={()=> <PswdRecoverPage />} />
            <Route path={TO_REGISTRATION} render={()=> <RegistrationPage />} />
            <Route path={TO_CARDS + '/:deckId'} render={()=> <UniCardsPage />} />
            <Route path={TO_CARDSDECK} render={()=> <UniCardsDeckPage />} />
            <Route path={TO_CARD + '/:cardId'} render={()=> <SingleCardContainer />} />
            <Route path={TO_MODALS} render={()=> <ModalsPage />} />
            <Route exact path='/' render={()=> <Redirect to={TO_AUTH}/>} />
            <Route render={()=> <div>404 BAD GATEWAY</div>} />
        </Switch>
    )
};