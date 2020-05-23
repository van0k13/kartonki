import React from 'react';
import ModalNewCard from "./modalNewCard";
import Button from "../../../common/button/Button";
import Input from "../../../common/input/Input";

interface IProps {
    titleName: string,
    cardQuestion: string,
    cardAnswer: string,
    isOpenModal: boolean,
    setIsOpenModal: (value: boolean) => void,
    answerFromModal: (value: boolean) => void,
    setCardQuestion: (value:string) => void,
    setCardAnswer: (value:string) => void,
}

const ModalContainerNewCard: React.FC<IProps> = ({answerFromModal,setIsOpenModal, cardQuestion,
                                                    isOpenModal,titleName,cardAnswer,
                                                     setCardQuestion, setCardAnswer}) => {

    if(isOpenModal) return (
            <ModalNewCard setIsOpenModal={setIsOpenModal}>
                <h3>{titleName}</h3>
                <div>
                    <Input inputPlaceholder={`Enter your question`}
                           inputType={'text'} value={cardQuestion} inputOnChange={setCardQuestion}/>
                    <Input inputPlaceholder={`Enter your answer`}
                           inputType={'textarea'} value={cardAnswer} inputOnChange={setCardAnswer}/>
                    <Button buttonOnClickBoolean={()=>answerFromModal(true)} buttonName={'Apply'}/>
                    <Button buttonOnClickBoolean={()=>setIsOpenModal(false)} buttonName={'Cancel'}/>
                </div>
            </ModalNewCard>
    );
    else return null
};

export default ModalContainerNewCard;