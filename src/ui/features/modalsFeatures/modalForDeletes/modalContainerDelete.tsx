import React from 'react';
import ModalDelete from "./modalDelete";
import Button from "../../../common/button/Button";

interface IProps {
    titleName: string,
    isOpenModalDelete: boolean,
    setIsOpenModalDelete: (value: boolean) => void,
    answerFromModal: (value: boolean) => void
}

const ModalContainerDelete: React.FC<IProps> = ({answerFromModal,setIsOpenModalDelete,
                                                    isOpenModalDelete,titleName}) => {

    if(isOpenModalDelete) return (
            <ModalDelete setIsOpenModal={setIsOpenModalDelete}>
                <h3>{titleName}</h3>
                <div>
                    <Button buttonOnClickBoolean={()=>answerFromModal(true)} buttonName={'Apply'}/>
                    <Button buttonOnClickBoolean={()=>setIsOpenModalDelete(false)} buttonName={'Cancel'}/>
                </div>
            </ModalDelete>
    );
    else return null
};

export default ModalContainerDelete;