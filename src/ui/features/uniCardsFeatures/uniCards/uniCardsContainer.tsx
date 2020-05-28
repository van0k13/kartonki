import React, {useState, useEffect} from 'react';
import UniCards from "./uniCards";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import {createCardTC, deleteCardTC, getCardsTC, setCardPageAC} from "../../../../bll/cards_reducer";
import {useParams} from 'react-router-dom';
import ModalContainerNewCard from "../../modalsFeatures/modalForNewCard/modalContainerNewCard";
import ModalContainerDelete from "../../modalsFeatures/modalForDeletes/modalContainerDelete";


const UniCardsContainer = () => {
    const dispatch = useDispatch()
    const {deckId} = useParams()
    const {token} = useSelector((state: RootState) => state.auth)
    const {currentDeckName} = useSelector((state: RootState) => state.decks)
    const {cards, cardsTotalCount, pageCount, page} = useSelector((state: RootState) => state.cards)
    const [searchInput, setSearchInput] = useState<string>('')
    const [cardQuestion, setCardQuestion] = useState<string>('')
    const [cardAnswer, setCardAnswer] = useState<string>('')
    const [card_Id, setCard_Id] = useState<string>('')
    const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)
    const [isOpenModalNewCard, setIsOpenModalNewCard] = useState<boolean>(false)


    useEffect(() => {
        dispatch(getCardsTC(deckId))
    }, [deckId, page])

    const addCard = () => {
        setIsOpenModalNewCard(true)
    }
    const answerFromNewCardModal = (answer: boolean) => {
        if (answer) {
            const card = {cardsPack_id: deckId, question: cardQuestion, answer: cardAnswer}
            dispatch(createCardTC(card, token))
            setIsOpenModalDelete(false)
            setCardQuestion('')
            setCardAnswer('')
        } else {
            setIsOpenModalDelete(false)
            setCardQuestion('')
            setCardAnswer('')
        }
    }
    const deleteCard = (cardId: string) => {
        setCard_Id(cardId)
        setIsOpenModalDelete(true)
    }
    const answerFromDeleteModal = (answer: boolean) => {
        if (answer) {
            dispatch(deleteCardTC(token, card_Id, deckId))
            setIsOpenModalDelete(false)
        } else setIsOpenModalDelete(false)
    }
    const onCurrentPageClick = (currentPage: number) => {
        dispatch(setCardPageAC(currentPage))
    }


    return (
        <>
            <UniCards cards={cards} searchInput={searchInput} setSearchInput={setSearchInput}
                      addCard={addCard} currentDeckName={currentDeckName}
                      deleteCard={deleteCard} onCurrentPageClick={onCurrentPageClick}
                      cardsTotalCount={cardsTotalCount} pageCount={pageCount}
                      page={page}
            />
            <ModalContainerNewCard setIsOpenModalNewCard={setIsOpenModalNewCard}
                                   cardAnswer={cardAnswer}
                                   setCardAnswer={setCardAnswer}
                                   setCardQuestion={setCardQuestion}
                                   cardQuestion={cardQuestion}
                                   answerFromModal={answerFromNewCardModal}
                                   isOpenModalNewCard={isOpenModalNewCard}
                                   titleName={'Create New Card'}/>
            <ModalContainerDelete setIsOpenModalDelete={setIsOpenModalDelete}
                                  answerFromModal={answerFromDeleteModal}
                                  isOpenModalDelete={isOpenModalDelete}
                                  titleName={'Delete Card ?'}/>
        </>
    );
};

export default UniCardsContainer;
