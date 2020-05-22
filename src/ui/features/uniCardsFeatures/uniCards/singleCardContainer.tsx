import React, {useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
import SingleCard from "./singleCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import {setCardAC} from "../../../../bll/cards_reducer";
import withAuth from '../../../common/withAuth'

const SingleCardContainer = (props:any) => {
    const dispatch = useDispatch();
    const {currentCard} = useSelector((state:RootState) => state.cards)
    const [isShowed, setIsShowed] = useState<boolean>(false)
    const [isShowedNext, setIsShowedNext] = useState<boolean>(false)
    useEffect(()=>{
        const {cardId} = props.match.params
        dispatch(setCardAC(cardId))
    },[])
    const onNextClicked = () => {
        setIsShowed(false)
        setIsShowedNext(false)
    }
     return <SingleCard isShowed={isShowed}
                        setIsShowed={setIsShowed}
                        isShowedNext={isShowedNext}
                        setIsShowedNext={setIsShowedNext}
                        onNextClicked={onNextClicked}
                        currentCard={currentCard}
     />
}

export default withAuth(withRouter(SingleCardContainer))