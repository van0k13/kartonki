import React from 'react'
import styles from "../uniCards.module.css";
import Button from "../../../../common/button/Button";


interface IProps {
    setIsShowedNext: (value: boolean) => void,
    setGrade: (value: number) => void,
}

const AnsweringButtons: React.FC<IProps> = ({setIsShowedNext, setGrade}) => {
    const onClickHandler = (name: string) => {
        setIsShowedNext(true);
        switch (name) {
            case "didn't know":
                return setGrade(1);
            case 'something answered':
                return setGrade(2);
            case 'bad answer':
                return setGrade(3);
            case 'good answer':
                return setGrade(4);
            case 'perfect easy':
                return setGrade(5);
        }
    }
    return (
        <div className={styles.answeringButtons}>
            <Button buttonOnClick={() => onClickHandler("didn't know")} buttonName={"didn't know"}/>
            <Button buttonOnClick={() => onClickHandler("something answered")} buttonName={'something answered'}/>
            <Button buttonOnClick={() => onClickHandler("bad answer")} buttonName={'bad answer'}/>
            <Button buttonOnClick={() => onClickHandler("good answer")} buttonName={'good answer'}/>
            <Button buttonOnClick={() => onClickHandler('perfect easy')} buttonName={'perfect easy'}/>
        </div>
    )
}


export default AnsweringButtons