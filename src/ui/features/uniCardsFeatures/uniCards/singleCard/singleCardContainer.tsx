import React, {useEffect, useState} from 'react'
import SingleCard from "./singleCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../bll/store";
import {editCardTC, getCardsTC} from "../../../../../bll/cards_reducer";
import withAuth from '../../../../common/withAuth'
import {actions} from "../../../../../bll/actions";


const SingleCardContainer = () => {
    const dispatch = useDispatch();
    const {currentCard, cards, pageCount, page, cardsTotalCount} = useSelector(
        (state: RootState) => state.cards);
    const [isShowed, setIsShowed] = useState<boolean>(false);
    const [isShowedNext, setIsShowedNext] = useState<boolean>(false);
    const [grade, setGrade] = useState<number>(0);
    const [cardIndex, setCardIndex] = useState<number>(0);
    const [passedCardsNumber, setPassedCardsNumber] = useState<number>(1);
    const {cardsPack_id, _id} = cards[cardIndex];
    console.log(currentCard)
    useEffect(() => {
        dispatch(actions.setCardAC(_id))
    }, [cardIndex]);

    useEffect(() => {                      // when clicked on Grade button
        if(grade > 0) {
            const {answer, question} = currentCard
            const newCardGrade = {
                answer,
                question,
                _id: _id,
                grade
            }
            pageCount === (cardIndex + 1) && dispatch(actions.setCardPageAC(page + 1))
            dispatch(editCardTC(newCardGrade))
        }
    }, [grade])

    const onNextClicked = () => {
        setPassedCardsNumber(passedCardsNumber +1)
        if (pageCount === (cardIndex + 1)) {
            dispatch(getCardsTC(cardsPack_id))
            setCardIndex(0)
        } else if (passedCardsNumber === cardsTotalCount) {
                alert("that's all folks")
            dispatch(actions.setCardPageAC(1))
        } else {
            setIsShowed(false)
            setIsShowedNext(false)
            setCardIndex(cardIndex + 1)
        }
    }

    return <SingleCard isShowed={isShowed} setGrade={setGrade}
                       setIsShowed={setIsShowed}
                       isShowedNext={isShowedNext}
                       setIsShowedNext={setIsShowedNext}
                       onNextClicked={onNextClicked}
                       currentCard={currentCard}
    />
}

export default withAuth(SingleCardContainer)