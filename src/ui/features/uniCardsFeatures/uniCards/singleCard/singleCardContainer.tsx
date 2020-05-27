import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import SingleCard from "./singleCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../bll/store";
import {editCardTC, setCardAC, setCardPageAC} from "../../../../../bll/cards_reducer";
import withAuth from '../../../../common/withAuth'





const SingleCardContainer = () => {
    const dispatch = useDispatch();
    // const {cardId} = useParams();
    const {currentCard, cards, page, cardID} = useSelector(
        (state: RootState) => state.cards);
    const [isShowed, setIsShowed] = useState<boolean>(false);
    const [isShowedNext, setIsShowedNext] = useState<boolean>(false);
    const [grade, setGrade] = useState<number>(0);
    const [assignee, setAssignee] = useState<number>(0);
    useEffect(() => {
        const editedCard = {_id: cardID, grade}
        dispatch(editCardTC(editedCard))
    }, [grade])
    useEffect(() => {
            dispatch(setCardAC(cards[assignee]._id))
    }, [assignee])
    const onNextClicked = () => {
        debugger
        if(assignee === cards.length) {
          dispatch(setCardPageAC(page+1))
            setAssignee(0)
        } else {
            setIsShowed(false)
            setIsShowedNext(false)
            setAssignee(assignee+1)
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