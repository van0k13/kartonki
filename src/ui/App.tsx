import React from 'react';
import './App.module.css';
import { Provider } from 'react-redux';
import store from '../bll/store';
import { HashRouter } from 'react-router-dom';
import Header from './common/header/headers';
import s from './App.module.css';
import {AllRoutes} from "./common/routes";


const App: React.FC = () => {
  return (
    <div className={s.App}>
            <Header />
            <AllRoutes />
    </div>
  );
};


const Main: React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  )
};

export default Main;
