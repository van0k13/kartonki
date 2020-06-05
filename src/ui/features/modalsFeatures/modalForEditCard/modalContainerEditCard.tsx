import React from 'react';
import ModalEditCard from "./modalEditCard";
import Button from "../../../common/button/Button";
import Input from "../../../common/input/Input";


interface IProps {
    isOpenModalEditCard: boolean,
    answerFromEditCardModal: (value: boolean) => void,
    modalTitle: string,
    cardAnswer: string,
    setCardAnswer: (value: string) => void,
    cardQuestion: string,
    setCardQuestion: (value: string) => void,
    cardGrade: number,
    setCardGrade: (value: number) => void,

}

const ModalContainerEditCard: React.FC<IProps> = ({
                                                      modalTitle,cardAnswer,cardGrade,
                                                      setCardAnswer,answerFromEditCardModal,setCardGrade,
                                                      isOpenModalEditCard,cardQuestion,setCardQuestion,
                                                  }) => {
    if (isOpenModalEditCard) return (
        <ModalEditCard isOpenModalEditCard={isOpenModalEditCard}>
            <h3>{modalTitle}</h3>
            <span>question - </span> <Input inputType={'text'} value={cardQuestion} inputOnChange={setCardQuestion}/>
            <span>answer - </span> <Input inputType={'text'} value={cardAnswer} inputOnChange={setCardAnswer} />
            <span>card grade - </span> <Input inputType={'text'} value={cardGrade} inputOnChangeNumber={setCardGrade} />
            <Button buttonOnClickBoolean={() => answerFromEditCardModal(true)} buttonName={'apply'}/>
            <Button buttonOnClickBoolean={() => answerFromEditCardModal(false)} buttonName={'close'}/>
        </ModalEditCard>
    );
    else return null
};

export default ModalContainerEditCard;