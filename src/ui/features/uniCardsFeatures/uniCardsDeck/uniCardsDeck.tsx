import React from 'react';
import styles from './uniCardsDeck.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import {CardsDeckType} from "../../../../bll/types";
import SingleDeck from "./singleDeck";
import Loading from "../../../common/loadingToggle/Loading";

interface IProps {
    createNewDeck: () => void,
    setNewDeckinputField: (value: boolean) => void,
    newDeckinputField: boolean,
    setDeckName: (value: string) => void,
    deleteDeck: (value: string | undefined) => void,
    deckName: string,
    decks: Array<CardsDeckType>
}


const UniCardsDeck: React.FC<IProps> = ({
                                            decks,
                                            newDeckinputField, deleteDeck,
                                            createNewDeck, setNewDeckinputField, setDeckName,
                                            deckName
                                        }) => {

    const deckElements = decks.map(deck =>
        <SingleDeck name={deck.name} key={deck._id} id={deck._id} grade={deck.grade}
                    deleteDeck={deleteDeck}
        />)

    return (
        <div className={styles.uniCardsWrapper}>
            <h2>UniCardsDeck</h2>
            <Input inputPlaceholder={'item name'}/>
            <Button buttonName={'search'}/>
            <div className={styles.mainListWrapper}>
                <Button buttonOnClickBoolean={() => setNewDeckinputField(!newDeckinputField)}
                        buttonName={'Add new Deck'}/>
                <div className={styles.loading}><Loading/></div>

                {newDeckinputField && <>
                    <Input inputPlaceholder={`Enter your Deck's name`}
                           inputType={'text'} value={deckName} inputOnChange={setDeckName}
                    />
                    <Button buttonName={'Add'} buttonOnClick={createNewDeck}/>
                </>}
                {deckElements}
            </div>
        </div>
    );
};

export default UniCardsDeck;
