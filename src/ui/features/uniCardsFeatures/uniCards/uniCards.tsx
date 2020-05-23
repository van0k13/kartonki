import React from 'react';
import styles from './uniCards.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import { CardsType } from '../../../../bll/types';
import {TO_CARD} from "../../../common/routes";
import { NavLink } from 'react-router-dom';

interface IProps {
    setSearchInput: (value: string) => void,
    deleteCard: (value: string) => void,
    searchInput: string,
    cards: Array<CardsType>,
    addCard: () => void,
    currentDeckName: string,

}

const UniCards: React.FC<IProps> = ({setSearchInput,searchInput, cards,
                                        addCard, currentDeckName,deleteCard,
                                        }) => {
    const cardsElements = cards.map( c => <div className={styles.mainList}>
        <div className={styles.itemName}>
            <NavLink to={TO_CARD + `/${c._id}`}> {c.question}</NavLink>
        </div>
        <div className={styles.itemScore}>{c.grade}</div>
        <div className={styles.buttonsInTheList}>
            <Button buttonName={'edit'}/>
            <Button buttonName={'delete'} buttonOnClick={()=>deleteCard(c._id)}/>
        </div>
    </div>)
    return (
        <div className={styles.uniCardsWrapper}>
            <h2>{currentDeckName}</h2>
            <Input inputPlaceholder={'item name'} value={searchInput}
                   inputType={'text'} inputOnChange={setSearchInput} />
            <Button buttonName={'search'}/>
            <div className={styles.mainListWrapper}>
                <Button buttonOnClick={addCard} buttonName={'add new Item'}/>
                <div className={styles.listHeader}>
                    <span>Card Question</span>
                    <span>Card Grade</span>
                    <span>Cooperation with card</span>
                </div>
                {cardsElements}
            </div>
        </div>
    );
};

export default UniCards;


