import React, {useEffect, useState} from 'react';
import UniCardsDeck from "./uniCardsDeck";
import {createNewCardDeckTC, deleteDeckTC, getDecksTC} from "../../../../bll/cardsDeck_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";


const UniCardsContainerDeck = () => {
    const dispatch = useDispatch()
    const [deckName, setDeckName] = useState<string>('')
    const [searchInput, setSearchInput] = useState<string>('')
    useEffect(() => {
        dispatch(getDecksTC(token))
    }, [])
    const {token, id, authSuccess}= useSelector((state: RootState) => state.auth)
    const {decks} = useSelector((state: RootState) => state.decks)
    const createNewDeck = () => {
        const cardsDeck = {
            user_id: id,
            name: deckName
        };
        dispatch(createNewCardDeckTC(cardsDeck, token));
        setDeckName('');
    }
    const deleteDeck = (deckId: string) => {
        dispatch(deleteDeckTC(token, deckId))
    }
    if(authSuccess) {return (
        <UniCardsDeck createNewDeck={createNewDeck}
                      searchInput={searchInput}
                      setSearchInput={setSearchInput}
                      decks={decks}
                      deckName={deckName} setDeckName={setDeckName}
                      deleteDeck={deleteDeck}
        />
    ) } else {
       return <span>need authorization</span>
    }
};

export default UniCardsContainerDeck;
