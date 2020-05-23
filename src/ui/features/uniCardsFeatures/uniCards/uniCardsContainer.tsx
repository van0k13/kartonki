import React, {useState, useEffect} from 'react';
import UniCards from "./uniCards";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import {createCardTC, deleteCardTC, getCardsTC} from "../../../../bll/cards_reducer";
import {useParams} from 'react-router-dom';
import ModalContainerNewCard from "../../modalsFeatures/modalForNewCard/modalContainerNewCard";
import ModalContainerDelete from "../../modalsFeatures/modalForDeletes/modalContainerDelete";


const UniCardsContainer = () => {
    const [searchInput, setSearchInput] = useState<string>('')
    const [cardQuestion, setCardQuestion] = useState<string>('')
    const [cardAnswer, setCardAnswer] = useState<string>('')
    const [card_Id, setCard_Id] = useState<string>('')
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const dispatch = useDispatch()
    const {deckId} = useParams()
    const {token} = useSelector((state: RootState) => state.auth)
    const {currentDeckName} = useSelector((state: RootState) => state.decks)
    const {cards} = useSelector((state: RootState) => state.cards)

    useEffect(() => {
        dispatch(getCardsTC(token, deckId))
    }, [deckId])

    const addCard = () => {
        setIsOpenModal(true)
    }
    const answerFromNewCardModal = (answer: boolean) => {
        if (answer) {
            const card = {cardsPack_id: deckId, question: cardQuestion, answer:cardAnswer}
            dispatch(createCardTC(card, token))
            setIsOpenModal(false)
            setCardQuestion('')
            setCardAnswer('')
        } else {
            setIsOpenModal(false)
            setCardQuestion('')
            setCardAnswer('')
        }
    }
    const deleteCard = (cardId: string) => {
        setCard_Id(cardId)
        setIsOpenModal(true)
    }
    const answerFromDeleteModal = (answer: boolean) => {
        if (answer) {
            dispatch(deleteCardTC(token, card_Id, deckId))
            setIsOpenModal(false)
        } else setIsOpenModal(false)
    }


    return (
        <>
            <UniCards cards={cards} searchInput={searchInput} setSearchInput={setSearchInput}
                      addCard={addCard} currentDeckName={currentDeckName}
                      deleteCard={deleteCard}
            />
            <ModalContainerNewCard setIsOpenModal={setIsOpenModal}
                                   cardAnswer={cardAnswer}
                                   setCardAnswer={setCardAnswer}
                                   setCardQuestion={setCardQuestion}
                                   cardQuestion={cardQuestion}
                                  answerFromModal={answerFromNewCardModal}
                                  isOpenModal={isOpenModal}
                                  titleName={'Create New Card'}/>
            <ModalContainerDelete setIsOpenModal={setIsOpenModal}
                                  answerFromModal={answerFromDeleteModal}
                                  isOpenModal={isOpenModal}
                                  titleName={'Delete Card ?'}/>
        </>
    );
};

export default UniCardsContainer;
