import React, {useState, useEffect} from 'react';
import UniCards from "./uniCards";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import {createCardTC, getCardsTC} from "../../../../bll/cards_reducer";
import {withRouter} from 'react-router-dom';


const UniCardsContainer = (props: any) => {
    const [searchInput, setSearchInput] = useState<string>('')
    const [newCardName, setNewCardName] = useState<string>('')
    const dispatch = useDispatch()
    const {token} = useSelector((state: RootState) => state.auth)
    const {cards} = useSelector((state: RootState) => state.cards)
    const {deckId} = props.match.params
    useEffect(() => {
        dispatch(getCardsTC(token, deckId))
    }, [deckId])
    const addCard = () => {
        const card = {cardsPack_id: deckId, question: newCardName}
        dispatch(createCardTC(card, token))
    }
    return (
        <UniCards cards={cards} searchInput={searchInput} setSearchInput={setSearchInput}
                  newCardName={newCardName} setNewCardName={setNewCardName}
                  addCard={addCard}
        />
    );
};

export default withRouter(UniCardsContainer);
