import React from 'react';
import './App.module.css';
import { Provider, connect } from 'react-redux';
import store from '../bll/store';
import { HashRouter, Route } from 'react-router-dom';
import { IState } from '../bll/types';
import Header from './header/headers';
import LoginizationPage from './loginization/loginization';
import ProfilePage from './profile/profile';
import PasswordRecoveringPage from './passwordRecover/pswdRecover';
import RegistrationPage from './registration/registration';
import s from './App.module.css';
import NewPswdPage from "./newPassword/NewPswdPage";


const App = () => {
  return (
    <div className={s.App}>
            <Header />
            <Route path='/auth' render={()=> <LoginizationPage />} />
            <Route path='/new-password' render={()=> <NewPswdPage />} />
            <Route path='/profile' render={()=> <ProfilePage />} />
            <Route path='/recover-password' render={()=> <PasswordRecoveringPage />} />
            <Route path='/registration' render={()=> <RegistrationPage />} />
    </div>
  );
};





const mapState = (state: IState) => {
  return state
};

const AppContainer = connect(mapState)(App);
const Main = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
};

export default Main;
