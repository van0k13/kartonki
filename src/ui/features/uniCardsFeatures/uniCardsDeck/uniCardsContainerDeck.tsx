import React, {useEffect, useState} from 'react';
import UniCardsDeck from "./uniCardsDeck";
import {createNewCardDeckTC, getDecksTC} from "../../../../bll/cardsDeck_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import styles from "./uniCardsDeck.module.css";
import Button from "../../../common/button/Button";


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
    const decksElements = decks.map(d => <div key={d._id} className={styles.mainList}>
            <div className={styles.itemName}>Name: {d.name}</div>
            <div className={styles.itemScore}>Grade: {d.grade}</div>
            <div className={styles.buttonsInTheList}>
                <Button buttonName={'edit'}/>
                <Button buttonName={'delete'}/>
            </div>
        </div>
        )
    const createNewDeck = () => {
        const cardsDeck = {
            user_id: user_id,
            name: deckName
        };
        dispatch(createNewCardDeckTC(cardsDeck, token));
        setDeckName('');
    }
    return (
        <UniCardsDeck createNewDeck={createNewDeck} decksElements={decksElements}
                      newDeckinputField={newDeckinputField}
                      setNewDeckinputField={setNewDeckinputField}
                      deckName={deckName} setDeckName={setDeckName}
        /> );
};

export default UniCardsContainerDeck;
