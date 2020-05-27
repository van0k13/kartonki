import React from 'react';
import styles from './uniCards.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import {CardsType} from '../../../../bll/types';
import {TO_CARD} from "../../../common/routes";
import {NavLink} from 'react-router-dom';
import Paginator3000 from "../../../common/PaginationComponent";

interface IProps {
    setSearchInput: (value: string) => void,
    deleteCard: (value: string) => void,
    setFirstCard_id: (value: string) => void,
    onCurrentPageClick: (value: number) => void,
    searchInput: string,
    firstCard_id: string,
    cardsTotalCount: number,
    pageCount: number,
    page: number,
    cards: Array<CardsType>,
    addCard: () => void,
    currentDeckName: string,

}

const UniCards: React.FC<IProps> = ({setFirstCard_id,firstCard_id,
                                        onCurrentPageClick, cardsTotalCount, pageCount,
                                        setSearchInput, searchInput, cards,
                                        addCard, currentDeckName, deleteCard, page,
                                    }) => {
    if(cards.length > 0) setFirstCard_id(cards[0]._id)
    return (
        <div className={styles.uniCardsWrapper}>
            <h2>{currentDeckName}</h2>
            <Input inputPlaceholder={'item name'} value={searchInput}
                   inputType={'text'} inputOnChange={setSearchInput}/>
            <Button buttonName={'search'}/>
            <div className={styles.mainListWrapper}>
                <Button buttonOnClick={addCard} buttonName={'add new Item'}/>
                <NavLink to={TO_CARD + `/${firstCard_id}`} className={styles.startLink}>Start now!</NavLink>
                <Paginator3000 itemsTotalCount={cardsTotalCount} pageCount={pageCount}
                               onCurrentPageClick={onCurrentPageClick}
                               currentPage={page}/>
                <div className={styles.listHeader}>
                    <span>Card Question</span>
                    <span>Card Grade</span>
                    <span>Cooperation with card</span>
                </div>
                {cards.map(c => <div key={c._id} className={styles.mainList}>
                    <div className={styles.itemName}>
                        <span> {c.question}</span>
                    </div>
                    <div className={styles.itemScore}>{c.grade}</div>
                    <div className={styles.buttonsInTheList}>
                        <Button buttonName={'edit'}/>
                        <Button buttonName={'delete'} buttonOnClick={() => deleteCard(c._id)}/>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default UniCards;


