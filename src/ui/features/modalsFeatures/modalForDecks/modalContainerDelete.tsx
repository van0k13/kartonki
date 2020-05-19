import React from 'react';
import ModalDelete from "./modalDelete";
import Button from "../../../common/button/Button";

interface IProps {
    isOpenModal: boolean,
    setIsOpenModal: (value: boolean) => void,
    answerFromModal: (value: boolean) => void
}

const ModalContainerDelete: React.FC<IProps> = ({answerFromModal,setIsOpenModal, isOpenModal}) => {

    if(isOpenModal) return (
            <ModalDelete>
                <h3>{'Delete Deck ?'}</h3>
                <div >
                    <Button buttonOnClickBoolean={()=>answerFromModal(true)} buttonName={'Apply'}/>
                    <Button buttonOnClickBoolean={()=>setIsOpenModal(false)} buttonName={'Cancel'}/>
                </div>
            </ModalDelete>
    );
    else return null
};

export default ModalContainerDelete;