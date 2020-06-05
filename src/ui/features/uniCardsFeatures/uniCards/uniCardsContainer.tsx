import React, {useState, useEffect} from 'react';
import UniCards from "./uniCards";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import {
    createCardTC,
    deleteCardTC,
    editCardTC,
    getCardsTC,
    setCardAC,
    setCardPageAC
} from "../../../../bll/cards_reducer";
import {useParams} from 'react-router-dom';
import ModalContainerNewCard from "../../modalsFeatures/modalForNewCard/modalContainerNewCard";
import ModalContainerDelete from "../../modalsFeatures/modalForDeletes/modalContainerDelete";
import ModalContainerEditCard from "../../modalsFeatures/modalForEditCard/modalContainerEditCard";


const UniCardsContainer = () => {
    const dispatch = useDispatch()
    const {deckId} = useParams()
    const {token} = useSelector((state: RootState) => state.auth)
    const {currentDeckName} = useSelector((state: RootState) => state.decks)
    const {cards, cardsTotalCount, pageCount, page, currentCard} = useSelector((state: RootState) => state.cards)
    const [searchInput, setSearchInput] = useState<string>('')
    const [cardQuestion, setCardQuestion] = useState<string>('')
    const [cardAnswer, setCardAnswer] = useState<string>('')
    const [cardGrade, setCardGrade] = useState<number>(0)
    const [card_Id, setCard_Id] = useState<string>('')
    const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)
    const [isOpenModalNewCard, setIsOpenModalNewCard] = useState<boolean>(false)
    const [isOpenModalEditCard, setIsOpenModalEditCard] = useState<boolean>(false)


    useEffect(() => {
        dispatch(getCardsTC(deckId))
    }, [deckId, page]);
    useEffect(() => {
        const {question, answer, grade} = currentCard;
        setCardQuestion(question)
        setCardAnswer(answer)
        setCardGrade(grade)
    }, [currentCard]);


    const deleteCard = (cardId: string) => {
        setCard_Id(cardId)
        setIsOpenModalDelete(true)
    }
    const onCurrentPageClick = (currentPage: number) => {
        dispatch(setCardPageAC(currentPage))
    }
    const onCurrentCardEditClick = async (cardId: string) => {          // when clicked on specific card to edit
        await dispatch(setCardAC(cardId))
        setCard_Id(cardId)
        setIsOpenModalEditCard(true)
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
    const answerFromDeleteModal = (answer: boolean) => {
        if (answer) {
            dispatch(deleteCardTC(token, card_Id))
            setIsOpenModalDelete(false)
        } else setIsOpenModalDelete(false)
    }
    const answerFromEditCardModal = (answer: boolean) => {
        if (answer) {
            const card = { answer: cardAnswer, question: cardQuestion, _id: currentCard._id, grade: cardGrade}
            dispatch(editCardTC(card))
            setIsOpenModalEditCard(false)
            setCardQuestion('')
            setCardAnswer('')
            setCardGrade(0)
        } else {
            setIsOpenModalEditCard(false)
            setCardQuestion('')
            setCardAnswer('')
            setCardGrade(0)
        }
    }


    return (
        <>
            <UniCards cards={cards} searchInput={searchInput} setSearchInput={setSearchInput}
                      currentDeckName={currentDeckName}
                      deleteCard={deleteCard} onCurrentPageClick={onCurrentPageClick}
                      cardsTotalCount={cardsTotalCount} pageCount={pageCount}
                      page={page} onCurrentCardEditClick={onCurrentCardEditClick}
                      setIsOpenModalNewCard={setIsOpenModalNewCard}/>

            <ModalContainerNewCard setIsOpenModalNewCard={setIsOpenModalNewCard} // creating new Card
                                   cardAnswer={cardAnswer}
                                   setCardAnswer={setCardAnswer}
                                   setCardQuestion={setCardQuestion}
                                   cardQuestion={cardQuestion}
                                   answerFromModal={answerFromNewCardModal}
                                   isOpenModalNewCard={isOpenModalNewCard}
                                   titleName={'Create New Card'}/>

            <ModalContainerDelete setIsOpenModalDelete={setIsOpenModalDelete} // delete card
                                  answerFromModal={answerFromDeleteModal}
                                  isOpenModalDelete={isOpenModalDelete}
                                  titleName={'Delete Card ?'}/>

            <ModalContainerEditCard isOpenModalEditCard={isOpenModalEditCard} // edit card
                                    modalTitle={'Edit your Card'}
                                    cardAnswer={cardAnswer} setCardAnswer={setCardAnswer}
                                    setCardQuestion={setCardQuestion} cardQuestion={cardQuestion}
                                    cardGrade={cardGrade} setCardGrade={setCardGrade}
                                    answerFromEditCardModal={answerFromEditCardModal}
            />
        </>
    );
};

export default UniCardsContainer;
