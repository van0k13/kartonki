import React from 'react';
import ModalForNewItem from "./modalForNewItem";
import Button from "../../../common/button/Button";
import Input from "../../../common/input/Input";


interface IProps {
    isOpenModalNewItem: boolean,
    setIsOpenModalNewItem: (value: boolean) => void
    setNOURLChange: (value: string) => void
    acceptChangesFormModal: (value: string) => void
    modalTitle: string
    newNOURLChange: string
}

const ModalForNewItemContainer: React.FC<IProps> = ({
                                                        setIsOpenModalNewItem, modalTitle,newNOURLChange,
                                                        isOpenModalNewItem, acceptChangesFormModal,
                                                        setNOURLChange,
                                                    }) => {
    if (isOpenModalNewItem) return (
        <ModalForNewItem isOpenModalNewItem={isOpenModalNewItem}>
            <h3>{modalTitle}</h3>
            <div>
                <Input inputPlaceholder={`Enter new information`}
                       inputType={'text'} value={newNOURLChange} inputOnChange={setNOURLChange}/>
                <Button buttonOnClick={()=>acceptChangesFormModal(newNOURLChange)} buttonName={'apply'}/>
                <Button buttonOnClickBoolean={() => setIsOpenModalNewItem(false)} buttonName={'close'}/>
            </div>
        </ModalForNewItem>
    );
    else return null
};

export default ModalForNewItemContainer;