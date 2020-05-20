import React, {useEffect, useState} from 'react';
import UniCardsDeck from "./uniCardsDeck";
import {
    createNewCardDeckTC,
    deleteDeckTC,
    editDeckTC,
    getDecksTC,
    setCurrentDeckIdAC
} from "../../../../bll/cardsDeck_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import ModalContainerDelete from "../../modalsFeatures/modalForDecks/modalContainerDelete";

const UniCardsContainerDeck = () => {

    const dispatch = useDispatch()
    const [deckName, setDeckName] = useState<string>('')
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string>('')
    const [editNameInput, setEditNameInput] = useState<string>('')
    const [editGradeInput, setEditGradeInput] = useState<number>(0)
    useEffect(() => {
        dispatch(getDecksTC(token))
    }, [])
    const {token, id} = useSelector((state: RootState) => state.auth)
    const {decks, currentDeckId} = useSelector((state: RootState) => state.decks)


    const createNewDeck = () => {
        const cardsDeck = {
            user_id: id,
            name: deckName
        };
        dispatch(createNewCardDeckTC(cardsDeck, token));
        setDeckName('');
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
        setIsOpenModal(true)
    }
    const answerFromDeleteModal = (answer: boolean) => {
        if (answer) {
            dispatch(deleteDeckTC(token, currentDeckId))
            setIsOpenModal(false)
        } else setIsOpenModal(false)
    }

    return (
        <>
            <UniCardsDeck createNewDeck={createNewDeck}
                          searchInput={searchInput}
                          setSearchInput={setSearchInput}
                          decks={decks}
                          editDeck={editDeck}
                          deckName={deckName} setDeckName={setDeckName}
                          deleteDeck={deleteDeck}
                          editNameInput={editNameInput}
                          setEditNameInput={setEditNameInput}
                          editGradeInput={editGradeInput}
                          setEditGradeInput={setEditGradeInput}/>
            <ModalContainerDelete setIsOpenModal={setIsOpenModal}
                                  answerFromModal={answerFromDeleteModal}
                                  isOpenModal={isOpenModal}
                                  titleName={'Delete Deck ?'}/>
        </>
    )

};

export default UniCardsContainerDeck;