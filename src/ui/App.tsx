import React from 'react';
import './App.css';
import { Provider, connect } from 'react-redux';
import store from '../bll/store';
import { HashRouter, Route } from 'react-router-dom';
import { IState } from '../bll/types';
import Header from './header/headers';
import LoginizationPage from './loginization/loginization';
import NewPasswordPage from './newPassword/newPswd';
import ProfilePage from './profile/profile';
import PasswordRecoveringPage from './passwordRecover/pswdRecover';
import RegistrationPage from './registration/registration';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path='/auth' render={()=> <LoginizationPage />} />
      <Route path='/new-password' render={()=> <NewPasswordPage />} />
      <Route path='/profile' render={()=> <ProfilePage />} />
      <Route path='/recover-password' render={()=> <PasswordRecoveringPage />} />
      <Route path='/registration' render={()=> <RegistrationPage />} />
    </div>
  );
}





const mapState = (state: IState) => {
  return state
}

const AppContainer = connect(mapState)(App)
const Main = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default Main;
