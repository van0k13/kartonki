import React, {useState} from 'react';
import s from './Loading.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../../bll/store";


const Loading = () => {
    let [points, setPoints] = useState<string>('.');
    let {isLoading} = useSelector((state: RootState) => state.auth);
    const loadingProgress = () => {
        setTimeout(() => {
            points.length < 5
                ? setPoints(points + '.')
                : setPoints('.')
        }, 1000);
        return points
    };
    if(isLoading) {return (
        <div>
            <span className={s.loadingWrapper}></span>
            <span className={s.loadingProgress}>
                { 'LOADING' + loadingProgress()}

            </span>
        </div>
    )} else return null
};

export default Loading;
