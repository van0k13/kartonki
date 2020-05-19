import React, {useState} from 'react';
import Modal from "./modal";
import Button from "../../../common/button/Button";


interface IProps {
    onModelButtonClickName: string,
    modalTitle: string
}

const ModalContainer: React.FC<IProps> = ({onModelButtonClickName,modalTitle}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <Button buttonOnClickBoolean={()=>setIsOpen(!isOpen)} buttonName={onModelButtonClickName}/>
            <Modal isOpen={isOpen}>
                <h3>{modalTitle}</h3>
                <Button buttonOnClickBoolean={() => setIsOpen(false)} buttonName={'apply'}/>
                <Button buttonOnClickBoolean={() => setIsOpen(false)} buttonName={'close'}/>
            </Modal>
        </>
    );
};

export default ModalContainer;