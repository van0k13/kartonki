import React from 'react'
import styles from "../uniCards.module.css";
import {CardsType} from "../../../../../bll/types";
import Button from "../../../../common/button/Button";
import AnsweringButtons from './answeringButtons';

interface IProps {
    setIsShowed: (value: boolean) => void,
    isShowed: boolean,
    setIsShowedNext: (value: boolean) => void,
    onNextClicked: () => void,
    isShowedNext: boolean,
    currentCard: CardsType,
    setGrade: (value: number) => void
}


const SingleCard: React.FC<IProps> = ({setGrade,
                                          currentCard, setIsShowed, isShowed,
                                          isShowedNext, onNextClicked, setIsShowedNext
                                      }) => {
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
                            ? <AnsweringButtons setGrade={setGrade} setIsShowedNext={setIsShowedNext}/>
                            : <Button booleanValue={isShowedNext}
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