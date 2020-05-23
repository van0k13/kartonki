import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import SingleCard from "./singleCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../bll/store";
import {setCardAC} from "../../../../../bll/cards_reducer";
import withAuth from '../../../../common/withAuth'

const SingleCardContainer = () => {
    const dispatch = useDispatch();
    const {cardId} = useParams()
    const {currentCard} = useSelector((state:RootState) => state.cards)
    const [isShowed, setIsShowed] = useState<boolean>(false)
    const [isShowedNext, setIsShowedNext] = useState<boolean>(false)
    const [grade, setGrade] = useState<number>(0)
    useEffect(()=>{
        dispatch(setCardAC(cardId))
    },[cardId])

    const onNextClicked = () => {
        setIsShowed(false)
        setIsShowedNext(false)
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