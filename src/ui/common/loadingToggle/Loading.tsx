import React, {useState} from 'react';
import s from './Loading.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../../bll/store";


const Loading = () => {
    let [points, setPoints] = useState<string>('.');
    let isLoading = useSelector((state: RootState) => state.auth.isLoading);
    const loadingProgress = () => {
        setTimeout(() => {
            points.length < 5
                ? setPoints(points + '.')
                : setPoints('.')
        }, 1000);
        return points
    };
    return (
        <div>
            <span className={s.loadingProgress}>
                {isLoading && 'LOADING' + loadingProgress()}
            </span>
        </div>
    );
};

export default Loading;
