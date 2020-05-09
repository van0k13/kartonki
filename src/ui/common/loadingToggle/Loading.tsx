import React, { useState } from 'react';
import s from './Loading.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../../bll/store";


const Loading = () => {
    // let [isLoading, setIsLoading] = useState<boolean>(true);
    let [points, setPoints] = useState<string>('.');
    let isLoading = useSelector((state: RootState) => state.auth.isLoading);
    const loadingProgress = () => {
        setTimeout(()=>{points.length<5?setPoints(points+'.'):setPoints('.')}, 1000);
        return points
    };
    return (

            <span className={s.loadingProgress}>
                {isLoading&&'LOADING'+loadingProgress()}
            </span>
    );
};

export default Loading;
