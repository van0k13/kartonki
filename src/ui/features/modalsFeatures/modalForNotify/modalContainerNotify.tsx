import React from 'react';
import ModalNotify from "./modalNotify";
import Button from "../../../common/button/Button";

interface IProps {
    titleName: string,
    isOpenModalNotify: boolean,
    setIsOpenModalNotify: (value: boolean) => void,
    answerFromModal: () => void,
    errorMessage: string
}

const ModalContainerNotify: React.FC<IProps> = ({
                                                    answerFromModal, setIsOpenModalNotify, errorMessage,
                                                    isOpenModalNotify, titleName
                                                }) => {
    if (isOpenModalNotify) return (
        <ModalNotify setIsOpenModal={setIsOpenModalNotify}>
            <h3>{titleName}</h3>
            <div>
                <p>{errorMessage}</p>
                <Button buttonOnClick={answerFromModal} buttonName={'Okay'}/>
            </div>
        </ModalNotify>
    );
    else return null
};

export default ModalContainerNotify;