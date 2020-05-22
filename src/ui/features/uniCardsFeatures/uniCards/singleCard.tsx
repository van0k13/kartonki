import React from 'react'
import styles from "./uniCards.module.css";
import {CardsType} from "../../../../bll/types";
import Button from "../../../common/button/Button";

interface IProps {
    setIsShowed: (value: boolean) => void,
    isShowed: boolean,
    setIsShowedNext: (value: boolean) => void,
    onNextClicked: () => void,
    isShowedNext: boolean,
    currentCard: CardsType,
}


const SingleCard: React.FC<IProps> = ({currentCard, setIsShowed, isShowed,
                                          isShowedNext,onNextClicked,setIsShowedNext}) => {
    return (
        <div className={styles.cardMainStyle}>
            <div>question:
                <div>{currentCard.question}</div>
            </div>
            <div>answer:
                {isShowed
                    ? <>
                        <div>{currentCard.answer}</div>
                        {!isShowedNext
                            ?<div className={styles.answeringButtons}>
                            <Button buttonOnClickBoolean={()=>setIsShowedNext(true)} buttonName={"didn't know"}/>
                            <Button buttonOnClickBoolean={()=>setIsShowedNext(true)}
                                buttonName={'something answered'}/>
                            <Button buttonOnClickBoolean={()=>setIsShowedNext(true)} buttonName={'bad answer'}/>
                            <Button buttonOnClickBoolean={()=>setIsShowedNext(true)} buttonName={'good answer'}/>
                            <Button buttonOnClickBoolean={()=>setIsShowedNext(true)} buttonName={'perfect easy'}/>
                        </div>
                            :<Button booleanValue={isShowedNext}
                                     buttonName={'next'}
                                     buttonOnClick={onNextClicked}/>
                        }
                    </>
                    : <Button booleanValue={isShowed}
                              buttonName={'show Answer'}
                              buttonOnClickBoolean={() => setIsShowed(true)}/>
                }
            </div>
            <div>
                <div>grade: {currentCard.grade}</div>
            </div>
            <div>
                <div>rating: {currentCard.rating}</div>
            </div>
            <div>
                <div>shots: {currentCard.shots}</div>
            </div>
        </div>
    )
}


export default SingleCard;