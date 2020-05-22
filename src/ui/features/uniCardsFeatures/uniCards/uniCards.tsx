import React from 'react';
import styles from './uniCards.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import { CardsType } from '../../../../bll/types';
import {TO_CARD} from "../../../common/routes";
import { NavLink } from 'react-router-dom';

interface IProps {
    setSearchInput: (value: string) => void,
    searchInput: string,
    setNewCardName: (value: string) => void,
    newCardName: string,
    cards: Array<CardsType>,
    addCard: () => void
}

const UniCards: React.FC<IProps> = ({setSearchInput,searchInput, cards,setNewCardName,
                                        newCardName,addCard}) => {
    const cardsElements = cards.map( c => <div className={styles.mainList}>
        <div className={styles.itemName}>
            <NavLink to={TO_CARD + `/${c._id}`}> {c.question}</NavLink>
        </div>
        <div className={styles.itemScore}>{c.grade}</div>
        <div className={styles.buttonsInTheList}>
            <Button buttonName={'edit'}/>
            <Button buttonName={'delete'}/>
        </div>
    </div>)
    return (
        <div className={styles.uniCardsWrapper}>
            <h2>UniCards</h2>
            <Input inputPlaceholder={'item name'} value={searchInput}
                   inputType={'text'} inputOnChange={setSearchInput} />
            <Button buttonName={'search'}/>
            <div className={styles.mainListWrapper}>
                <Button buttonOnClick={addCard} buttonName={'add new Item'}/>
                <Input inputPlaceholder={`Enter your Card's name`}
                       inputType={'text'} value={newCardName} inputOnChange={setNewCardName}/>
                {cardsElements}
            </div>
        </div>
    );
};

export default UniCards;


