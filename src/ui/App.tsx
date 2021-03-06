import React from 'react';
import './App.module.css';
import {Provider} from 'react-redux';
import store from '../bll/store';
import {HashRouter} from 'react-router-dom';
import s from './App.module.css';
import {AllRoutes} from "./common/routes";
import HeaderContainer from "./common/header/headerContainer";


const App = () => {
    return (
        <div className={s.App}>

            <HeaderContainer/>

                <AllRoutes/>

        </div>
    );
};


const Main = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    )
};

export default Main;
