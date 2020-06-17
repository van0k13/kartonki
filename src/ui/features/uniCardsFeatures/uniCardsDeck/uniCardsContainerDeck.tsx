import React, {useEffect, useState} from 'react';
import UniCardsDeck from "./uniCardsDeck";
import {
    createNewCardDeckTC,
    deleteDeckTC,
    editDeckTC,
    getDecksTC,
} from "../../../../bll/cardsDeck_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import ModalContainerDelete from "../../modalsFeatures/modalForDeletes/modalContainerDelete";
import {actions} from "../../../../bll/actions";



const UniCardsContainerDeck = () => {

    const dispatch = useDispatch()
    const {id} = useSelector((state: RootState) => state.auth)
    const {decks, currentDeckId, cardPacksTotalCount, pageCount, page} =
        useSelector((state: RootState) => state.decks)
    const [newDeckName, setNewDeckName] = useState<string>('')
    const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string>('')
    const [editNameInput, setEditNameInput] = useState<string>('')
    const [editGradeInput, setEditGradeInput] = useState<number>(0)
    useEffect(() => {
        dispatch(getDecksTC())
    }, [page])

    const setDeckName = (deckName: string) => {
        dispatch(actions.setCurrentDeckNameAC(deckName))
    }
    const createNewDeck = () => {
        const cardsDeck = {
            user_id: id,
            name: newDeckName
        };
        dispatch(createNewCardDeckTC(cardsDeck));
        setNewDeckName('');
    }
    const editDeck = (_deckId: string) => {
        const editedDeck = {
            _id: _deckId,
            grade: editGradeInput,
            name: editNameInput
        }
        dispatch(editDeckTC(editedDeck))
    }
    const deleteDeck = (deckId: string) => {
        dispatch(actions.setCurrentDeckIdAC(deckId))
        setIsOpenModalDelete(true)
    }
    const answerFromDeleteModal = (answer: boolean) => {
        if (answer) {
            dispatch(deleteDeckTC(currentDeckId))
            setIsOpenModalDelete(false)
        } else setIsOpenModalDelete(false)
    }
    const onCurrentPageClick = (currentPage: number) => {
        dispatch(actions.setDeckPageAC(currentPage))
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