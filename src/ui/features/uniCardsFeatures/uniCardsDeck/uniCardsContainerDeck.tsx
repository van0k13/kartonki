import React, {useEffect, useState} from 'react';
import UniCardsDeck from "./uniCardsDeck";
import {createNewCardDeckTC, getDecksTC} from "../../../../bll/cardsDeck_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";


const UniCardsContainerDeck = () => {
    const dispatch = useDispatch()
    const [newDeckinputField, setNewDeckinputField] = useState<boolean>(false)
    const [deckName, setDeckName] = useState<string>('')
    useEffect(() => {
        dispatch(getDecksTC(token))
    }, [])
    const token = useSelector((state: RootState) => state.auth.token)
    const decks = useSelector((state: RootState) => state.decks.decks)
    const user_id = useSelector((state: RootState) => state.auth.id)
    const createNewDeck = () => {
        const cardsDeck = {
            user_id: user_id,
            name: deckName
        };
        dispatch(createNewCardDeckTC(cardsDeck, token));
        setDeckName('');
    }
    return (
        <UniCardsDeck  createNewDeck={createNewDeck}
                       decks={decks}
                      newDeckinputField={newDeckinputField}
                      setNewDeckinputField={setNewDeckinputField}
                      deckName={deckName} setDeckName={setDeckName}
        />
    );
};

export default UniCardsContainerDeck;
