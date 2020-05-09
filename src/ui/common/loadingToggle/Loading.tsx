import React, { useState } from 'react';
import { ILoading } from '../../../bll/types';
import s from './Loading.module.css'


const Loading: React.FC<ILoading> = () => {
    let [isLoading, setIsLoading] = useState<boolean>(true);
    let [points, setPoints] = useState<string>('.');
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
