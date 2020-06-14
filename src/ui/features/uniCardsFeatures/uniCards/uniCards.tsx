import React from 'react';
import styles from './uniCards.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import {CardsType} from '../../../../bll/types';
import {TO_CARD} from "../../../common/routes";
import {NavLink} from 'react-router-dom';
import Paginator3000 from "../../../common/PaginationComponent";
import ErrorMessage from "../../../common/errorMessageToggle/ErrorMessage";

interface IProps {
    setSearchInput: (value: string) => void,
    deleteCard: (value: string) => void,
    onCurrentPageClick: (value: number) => void,
    onCurrentCardEditClick: (cardId: string) => void,
    setIsOpenModalNewCard: (value: boolean) => void,
    searchInput: string,
    cardsTotalCount: number,
    pageCount: number,
    page: number,
    cards: Array<CardsType>,
    currentDeckName: string,

}

const UniCards: React.FC<IProps> = ({
                                        onCurrentPageClick, cardsTotalCount, pageCount,
                                        setSearchInput, searchInput, cards,
                                        currentDeckName, deleteCard, page,
                                        onCurrentCardEditClick, setIsOpenModalNewCard,
                                    }) => {

    return (
        <div className={styles.uniCardsWrapper}>
            <ErrorMessage />
            <h2>{currentDeckName}</h2>
            <Input inputPlaceholder={'item name'} value={searchInput}
                   inputType={'text'} inputOnChange={setSearchInput}/>
            <Button buttonName={'search'}/>
            <div className={styles.mainListWrapper}>
                <Button buttonOnClickBoolean={() => setIsOpenModalNewCard(true)} buttonName={'add new Item'}/>
                <NavLink to={TO_CARD} className={styles.startLink}>Start now!</NavLink>
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
                        <Button buttonName={'edit'}
                                buttonOnClickBoolean={() => onCurrentCardEditClick(c._id)}/>
                        <Button buttonName={'delete'} buttonOnClick={() => deleteCard(c._id)}/>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default UniCards;


