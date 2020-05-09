import React, { useState } from 'react';
import './App.module.css';
import { Provider } from 'react-redux';
import store from '../bll/store';
import { HashRouter } from 'react-router-dom';
import Header from './common/header/headers';
import s from './App.module.css';
import {AllRoutes} from "./common/routes";


const App: React.FC = (props) => {
    let [isLoading, setIsLoading] = useState<boolean>(true);
    let [points, setPoints] = useState<string>('.');
    const loadingProgress = () => {
        setTimeout(()=>{points.length<5?setPoints(points+'.'):setPoints('.')}, 1000)
        return points
        // let pointsArr = ['.', '.', '.', '.', '.']
        // let loadingPoints = pointsArr[0];
        // for (let i = 0; i < pointsArr.length; i++){
        //     loadingPoints += [i]
        // }
    }
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
