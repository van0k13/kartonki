import React from 'react';
import ModalNewCard from "./modalNewCard";
import Button from "../../../common/button/Button";
import Input from "../../../common/input/Input";

interface IProps {
    titleName: string,
    cardQuestion: string,
    cardAnswer: string,
    isOpenModalNewCard: boolean,
    setIsOpenModalNewCard: (value: boolean) => void,
    answerFromModal: (value: boolean) => void,
    setCardQuestion: (value:string) => void,
    setCardAnswer: (value:string) => void,
}

const ModalContainerNewCard: React.FC<IProps> = ({answerFromModal,setIsOpenModalNewCard, cardQuestion,
                                                     isOpenModalNewCard,titleName,cardAnswer,
                                                     setCardQuestion, setCardAnswer}) => {

    if(isOpenModalNewCard) return (
            <ModalNewCard setIsOpenModal={setIsOpenModalNewCard}>
                <h3>{titleName}</h3>
                <div>
                    <Input inputPlaceholder={`Enter your question`}
                           inputType={'text'} value={cardQuestion} inputOnChange={setCardQuestion}/>
                    <Input inputPlaceholder={`Enter your answer`}
                           inputType={'textarea'} value={cardAnswer} inputOnChange={setCardAnswer}/>
                    <Button buttonOnClickBoolean={()=>answerFromModal(true)} buttonName={'Apply'}/>
                    <Button buttonOnClickBoolean={()=>setIsOpenModalNewCard(false)} buttonName={'Cancel'}/>
                </div>
            </ModalNewCard>
    );
    else return null
};

export default ModalContainerNewCard;