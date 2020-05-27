import React from 'react';
import styles from './uniCardsDeck.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import {CardsDeckType} from "../../../../bll/types";
import SingleDeck from "./singleDeck";
import Paginator3000 from "../../../common/PaginationComponent";

interface IProps {
    createNewDeck: () => void,
    setNewDeckName: (value: string) => void,
    deleteDeck: (value: string) => void,
    newDeckName: string,
    decks: Array<CardsDeckType>,
    editDeck: (value: string) => void,
    pageCount: number,
    onCurrentPageClick: (value: number) => void
    currentPage: number
    cardPacksTotalCount: number,
    setSearchInput: (value: string) => void,
    searchInput: string,
    setDeckName: (value: string) => void,
    editNameInput: string,
    setEditNameInput: (value: string) => void,
    editGradeInput: number,
    setEditGradeInput: (value: number) => void
}


const UniCardsDeck: React.FC<IProps> = ({
                                            searchInput, setSearchInput,
                                            decks, setEditNameInput,
                                            deleteDeck, editNameInput,
                                            createNewDeck, setNewDeckName,
                                            newDeckName, editGradeInput,
                                            setEditGradeInput, editDeck, setDeckName,
                                            pageCount, cardPacksTotalCount,
                                            currentPage, onCurrentPageClick
                                        }) => {

    const deckElements = decks.map(deck =>
        <SingleDeck name={deck.name} key={deck._id} deckId={deck._id} grade={deck.grade}
                    deleteDeck={deleteDeck} editNameInput={editNameInput}
                    setEditNameInput={setEditNameInput} setNewDeckName={setNewDeckName}
                    editGradeInput={editGradeInput} editDeck={editDeck}
                    setEditGradeInput={setEditGradeInput} setDeckName={setDeckName}
        />)


    return (
        <div className={styles.uniCardsDeckWrapper}>
            <h2>All Decks</h2>
            <Input inputPlaceholder={'item name'} inputType={'text'}
                   value={searchInput} inputOnChange={setSearchInput}/>
            <Button buttonName={'search'}/>
            <div className={styles.mainListWrapper}>
                <Input inputPlaceholder={`Name new Deck`}
                       inputType={'text'} value={newDeckName} inputOnChange={setNewDeckName}
                />
                <Button buttonName={'Add'} buttonOnClick={createNewDeck}/>
                <Paginator3000 itemsTotalCount={cardPacksTotalCount} pageCount={pageCount}
                               onCurrentPageClick={onCurrentPageClick} currentPage={currentPage}/>
                <div className={styles.listHeader}>
                    <span>Deck Name</span>
                    <span>Deck Grade</span>
                    <span>Cooperation with deck</span>
                </div>
                {deckElements}
            </div>
        </div>
    );
};

export default UniCardsDeck;
