import React, {useState} from 'react';
import Modal from "./modal";
import Button from "../../common/button/Button";

const ModalContainer: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <Button buttonOnClickBoolean={()=>setIsOpen(true)} buttonName={'show modal'}/>
            <Modal isOpen={isOpen}>
                Simple Modal
                <Button buttonOnClickBoolean={() => setIsOpen(false)} buttonName={'close'}/>
            </Modal>
        </>
    );
};

export default ModalContainer;