import React from 'react';
import styles from './uniCardsDeck.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import {CardsDeckType} from "../../../../bll/types";
import SingleDeck from "./singleDeck";
import Loading from "../../../common/loadingToggle/Loading";

interface IProps {
    createNewDeck: () => void,
    setDeckName: (value: string) => void,
    deleteDeck: (value: string) => void,
    deckName: string,
    decks: Array<CardsDeckType>,
    setSearchInput: (value:string) => void,
    searchInput: string
}


const UniCardsDeck: React.FC<IProps> = ({searchInput,setSearchInput,
                                            decks,
                                            deleteDeck,
                                            createNewDeck, setDeckName,
                                            deckName
                                        }) => {

    const deckElements = decks.map(deck =>
        <SingleDeck name={deck.name} key={deck._id} deckId={deck._id} grade={deck.grade}
                    deleteDeck={deleteDeck}
        />)
    return (
        <div className={styles.uniCardsWrapper}>
            <h2>UniCardsDeck</h2>
            <Input inputPlaceholder={'item name'} inputType={'text'}
                   value={searchInput} inputOnChange={setSearchInput}/>
            <Button buttonName={'search'}/>
            <div className={styles.mainListWrapper}>
                <Input inputPlaceholder={`Enter your Deck's name`}
                       inputType={'text'} value={deckName} inputOnChange={setDeckName}
                />
                <Button buttonName={'Add'} buttonOnClick={createNewDeck}/>
                <div className={styles.loading}><Loading/></div>
                {deckElements}
            </div>
        </div>
    );
};

export default UniCardsDeck;
