import React, {useEffect, useState} from 'react';
import UniCardsDeck from "./uniCardsDeck";
import {
    createNewCardDeckTC,
    deleteDeckTC,
    editDeckTC,
    getDecksTC,
    setCurrentDeckIdAC, setCurrentDeckNameAC, setDeckPageAC
} from "../../../../bll/cardsDeck_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import ModalContainerDelete from "../../modalsFeatures/modalForDeletes/modalContainerDelete";

const UniCardsContainerDeck = () => {

    const dispatch = useDispatch()
    const {token, id} = useSelector((state: RootState) => state.auth)
    const {decks, currentDeckId, cardPacksTotalCount, pageCount, page} =
        useSelector((state: RootState) => state.decks)
    const [newDeckName, setNewDeckName] = useState<string>('')
    const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string>('')
    const [editNameInput, setEditNameInput] = useState<string>('')
    const [editGradeInput, setEditGradeInput] = useState<number>(0)
    useEffect(() => {
        dispatch(getDecksTC(token))
    }, [page])

    const setDeckName = (deckName: string) => {
        dispatch(setCurrentDeckNameAC(deckName))
    }
    const createNewDeck = () => {
        const cardsDeck = {
            user_id: id,
            name: newDeckName
        };
        dispatch(createNewCardDeckTC(cardsDeck, token));
        setNewDeckName('');
    }
    const editDeck = (_deckId: string) => {
        const editedDeck = {
            _id: _deckId,
            grade: editGradeInput,
            name: editNameInput
        }
        dispatch(editDeckTC(editedDeck, token))
    }
    const deleteDeck = (deckId: string) => {
        dispatch(setCurrentDeckIdAC(deckId))
        setIsOpenModalDelete(true)
    }
    const answerFromDeleteModal = (answer: boolean) => {
        if (answer) {
            dispatch(deleteDeckTC(token, currentDeckId))
            setIsOpenModalDelete(false)
        } else setIsOpenModalDelete(false)
    }
    const onCurrentPageClick = (currentPage: number) => {
        dispatch(setDeckPageAC(currentPage))
    }

    return (
        <>
            <UniCardsDeck createNewDeck={createNewDeck} cardPacksTotalCount={cardPacksTotalCount}
                          searchInput={searchInput} pageCount={pageCount}
                          setSearchInput={setSearchInput} currentPage={page}
                          decks={decks} setDeckName={setDeckName}
                          editDeck={editDeck}
                          newDeckName={newDeckName} setNewDeckName={setNewDeckName}
                          deleteDeck={deleteDeck} onCurrentPageClick={onCurrentPageClick}
                          editNameInput={editNameInput}
                          setEditNameInput={setEditNameInput}
                          editGradeInput={editGradeInput}
                          setEditGradeInput={setEditGradeInput}/>
            <ModalContainerDelete setIsOpenModalDelete={setIsOpenModalDelete}
                                  answerFromModal={answerFromDeleteModal}
                                  isOpenModalDelete={isOpenModalDelete}
                                  titleName={'Delete Deck ?'}/>
        </>
    )

};

export default UniCardsContainerDeck;